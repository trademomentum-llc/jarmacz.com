#!/usr/bin/env python3
"""
SDN Morphogenetic Self-Healing Demo on Mininet
- Builds a small topology
- Simulates telemetry -> updates morphogen fields (E, L, S)
- Applies local agent policies: Weaver/Builder/Scavenger
This is a teaching/demo harness; it logs intended SDN actions and optionally
changes Mininet link status to visualize Scavenger.
Requirements:
  sudo apt-get install mininet
  pip3 install networkx numpy pyyaml
Run:
  sudo mn -c
  sudo python3 mininet_sim.py
"""
import time
import math
import random
import yaml
import numpy as np
import networkx as nx

from mininet.net import Mininet
from mininet.node import Controller, OVSBridge
from mininet.link import TCLink
from mininet.log import setLogLevel, info

# ------------------------ Utilities ------------------------

def normalized_laplacian(G: nx.Graph) -> np.ndarray:
    """Degree-normalized Laplacian for diffusion stability."""
    return nx.normalized_laplacian_matrix(G).astype(float).todense()

def cap_diffusion(D, G):
    deg_max = max(dict(G.degree()).values()) if G.number_of_nodes() else 1
    cap = 0.25 / max(deg_max, 1)
    return min(D, cap)

def neighbors_hot_quorum(G, field_E, node, theta_E, require_n=2, ratio=0.6):
    nbrs = list(G.neighbors(node))
    if not nbrs:
        return False, 0, 0
    hot = sum(1 for v in nbrs if field_E[v] > theta_E)
    need = max(require_n, math.ceil(ratio * len(nbrs)))
    return hot >= need, hot, need

# ------------------------ Engine ------------------------

class MorphogenEngine:
    def __init__(self, G, cfg):
        self.G = G
        self.cfg = cfg

        # Fields per node for simplicity (could do per-link similarly)
        self.E = {n: 0.0 for n in G.nodes()}
        self.L = {n: 0.0 for n in G.nodes()}
        self.S = {n: 0.8 for n in G.nodes()}  # start with generous spare

        self.prev_actions = {}  # for hysteresis tracking
        self.tick = 0

        self.Lnorm = normalized_laplacian(G)
        self.index = {n:i for i,n in enumerate(G.nodes())}
        self.rev_index = {i:n for n,i in self.index.items()}

        f = cfg["fields"]
        self.alpha_E = f["inject"]["alpha_E"]
        self.alpha_L = f["inject"]["alpha_L"]
        self.alpha_S = f["inject"]["alpha_S"]
        self.beta = f["decay"]["beta"]
        self.D = cap_diffusion(f["diffusion"]["D"], G)
        self.k_LE = f["coupling"]["k_LE"]
        self.k_SE = f["coupling"]["k_SE"]

        thr = cfg["thresholds"]
        self.theta_E = thr["theta_E"]
        self.theta_L = thr["theta_L"]
        self.theta_S = thr["theta_S"]
        self.epsilon_L = thr["epsilon_L"]

        self.ag_weaver = cfg["agents"]["weaver"]
        self.ag_builder = cfg["agents"]["builder"]
        self.ag_scav = cfg["agents"]["scavenger"]

        self.scavenger_quarantined = set()
        self.scavenger_probe_schedule = {}  # node -> next_tick_to_probe

    def vectorize(self, m):
        v = np.zeros(len(self.index))
        for n,val in m.items():
            v[self.index[n]] = val
        return v

    def devectorize(self, v):
        m = {}
        for i,val in enumerate(np.asarray(v).flatten().tolist()):
            m[self.rev_index[i]] = float(val)
        return m

    def inject_sources(self):
        """Simulate telemetry sources.
        For demo: random base + induced faults at specific ticks.
        """
        srcE = {n: 0.0 for n in self.G.nodes()}
        srcL = {n: 0.0 for n in self.G.nodes()}
        srcS = {n: 0.0 for n in self.G.nodes()}

        # Background mild noise
        for n in self.G.nodes():
            srcE[n] += max(0.0, random.gauss(0.001, 0.0005))
            srcL[n] += max(0.0, random.gauss(0.05, 0.02))
            # S is not directly injected; it's derived (we still allow gentle breathing)
            srcS[n] += 0.0

        # Induce an event around node 'e7' vicinity between ticks 5..20
        if 5 <= self.tick <= 20 and 'e7' in self.G.nodes():
            srcL['e7'] += 0.4  # latency spike
            srcE['e7'] += 0.006  # error spike
            # propagate some into neighbors as raw sources
            for nbr in self.G.neighbors('e7'):
                srcL[nbr] += 0.15
                srcE[nbr] += 0.003

        # Severe fault (triggers Scavenger) Briefly at ticks 25..30 on node 's3'
        if 25 <= self.tick <= 30 and 's3' in self.G.nodes():
            srcE['s3'] += 0.02   # way above thresholds
            srcL['s3'] += 0.2

        return srcE, srcL, srcS

    def update_fields(self):
        srcE, srcL, srcS = self.inject_sources()

        # Coupled updates
        E_vec = self.vectorize(self.E)
        L_vec = self.vectorize(self.L)
        S_vec = self.vectorize(self.S)

        # Convert sources
        srcE_v = self.vectorize(srcE)
        srcL_v = self.vectorize(srcL)
        srcS_v = self.vectorize(srcS)

        # E
        E_next = (1 - self.beta) * E_vec + self.alpha_E * srcE_v + self.D * (self.Lnorm @ E_vec)
        # L with coupling from E
        L_next = (1 - self.beta) * L_vec + self.alpha_L * srcL_v + self.D * (self.Lnorm @ L_vec) + self.k_LE * E_vec
        # S with negative coupling from E (consumption)
        S_next = (1 - self.beta) * S_vec + self.alpha_S * srcS_v + self.D * (self.Lnorm @ S_vec) - self.k_SE * E_vec

        # Clamp to [0,1]
        clamp = lambda v: np.clip(v, 0.0, 1.0)
        self.E = self.devectorize(clamp(E_next))
        self.L = self.devectorize(clamp(L_next))
        self.S = self.devectorize(clamp(S_next))

    # ---------------- Agent Policies ----------------

    def weaver_policy(self):
        if not self.ag_weaver.get("enabled", True):
            return []
        actions = []
        for n in self.G.nodes():
            if self.L[n] <= self.theta_L:
                continue
            # Find neighbor with best S
            nbrs = list(self.G.neighbors(n))
            if not nbrs:
                continue
            best = max(nbrs, key=lambda v: self.S[v])
            deltaS = self.S[best] - self.S[n]
            if deltaS >= self.ag_weaver["min_delta_S"]:
                key = ("weaver", n)
                last = self.prev_actions.get(key, {"active": False, "since": 0})
                if not last["active"]:
                    actions.append(f"Weaver: divert {self.ag_weaver['shift_fraction']:.0%} of flows from {n} -> {best} (ΔS={deltaS:.2f}, L={self.L[n]:.2f})")
                    self.prev_actions[key] = {"active": True, "since": self.tick}
            # Revert logic (hysteresis)
            key = ("weaver", n)
            last = self.prev_actions.get(key, {"active": False, "since": 0})
            if last["active"] and self.L[n] < (self.theta_L - self.cfg["thresholds"]["epsilon_L"]):
                if self.tick - last["since"] >= self.ag_weaver["revert_when_cool_ticks"]:
                    actions.append(f"Weaver: revert flows to normal at {n} (L={self.L[n]:.2f})")
                    self.prev_actions[key] = {"active": False, "since": self.tick}
        return actions

    def builder_policy(self):
        if not self.ag_builder.get("enabled", True):
            return []
        actions = []
        for n in self.G.nodes():
            if self.E[n] <= self.theta_E or self.S[n] <= self.theta_S:
                continue
            ok, hot, need = neighbors_hot_quorum(self.G, self.E, n,
                                                 self.theta_E,
                                                 self.ag_builder["require_quorum_neighbors"],
                                                 self.ag_builder["min_quorum_ratio"])
            if ok:
                key = ("builder", n)
                last = self.prev_actions.get(key, {"active": False, "since": -999})
                if not last["active"] or (self.tick - last["since"]) >= 60:
                    actions.append(f"Builder: add capacity at {n} (neighbors hot {hot}/{need}, E={self.E[n]:.3f}, S={self.S[n]:.2f})")
                    self.prev_actions[key] = {"active": True, "since": self.tick}
            else:
                # Consider revert when cool
                key = ("builder", n)
                last = self.prev_actions.get(key, {"active": False, "since": 0})
                if last["active"] and self.E[n] < (self.theta_E * 0.6):
                    if self.tick - last["since"] >= self.ag_builder["revert_when_cool_ticks"]:
                        actions.append(f"Builder: release extra capacity at {n} (E={self.E[n]:.3f})")
                        self.prev_actions[key] = {"active": False, "since": self.tick}
        return actions

    def scavenger_policy(self, net):
        if not self.ag_scav.get("enabled", True):
            return []
        actions = []
        trig_mult = self.ag_scav["trigger_multiplier_E"]
        for n in self.G.nodes():
            # Trigger if very noisy and no headroom
            if self.E[n] > trig_mult * self.theta_E and self.S[n] < self.ag_scav["min_S_to_release"]:
                if n not in self.scavenger_quarantined:
                    actions.append(f"Scavenger: quarantine node {n} (E={self.E[n]:.3f}, S={self.S[n]:.2f})")
                    # In Mininet, emulate by bringing one attached link down if any
                    nbrs = list(self.G.neighbors(n))
                    if nbrs:
                        a, b = n, nbrs[0]
                        try:
                            net.configLinkStatus(a, b, 'down')
                            actions.append(f"   -> Mininet: set link {a}<->{b} DOWN")
                        except Exception as e:
                            actions.append(f"   -> Mininet: failed to set link down: {e}")
                    self.scavenger_quarantined.add(n)
                    # schedule probe
                    self.scavenger_probe_schedule[n] = self.tick + self.ag_scav["probe_backoff"]["initial_ticks"]
            # Release checks
            if n in self.scavenger_quarantined:
                if self.tick >= self.scavenger_probe_schedule.get(n, 1e9):
                    # Probe (HALF_OPEN) logic: if cool enough, bring up one link
                    if self.E[n] < self.theta_E * 0.6 and self.S[n] >= self.ag_scav["min_S_to_release"]:
                        nbrs = list(self.G.neighbors(n))
                        if nbrs:
                            a, b = n, nbrs[0]
                            try:
                                net.configLinkStatus(a, b, 'up')
                                actions.append(f"Scavenger: probe & restore {a}<->{b} (E={self.E[n]:.3f}, S={self.S[n]:.2f})")
                            except Exception as e:
                                actions.append(f"   -> Mininet: failed to set link up: {e}")
                        self.scavenger_quarantined.discard(n)
                        self.scavenger_probe_schedule.pop(n, None)
                    else:
                        # Exponential backoff
                        back = self.ag_scav["probe_backoff"]
                        prev_gap = back["initial_ticks"]
                        # if we had a previous schedule, compute the gap we used
                        next_gap = min(prev_gap * back["multiplier"], back["max_ticks"])
                        self.scavenger_probe_schedule[n] = self.tick + max(next_gap, back["initial_ticks"])

        return actions

    def step(self, net):
        self.update_fields()
        logs = []
        logs += self.weaver_policy()
        logs += self.builder_policy()
        logs += self.scavenger_policy(net)
        self.tick += 1
        return logs

# ------------------------ Mininet Topology ------------------------

def build_topology():
    "s1 -- s2 -- s3 -- s4 and e7 hanging off s3"
    net = Mininet(controller=Controller, switch=OVSBridge, link=TCLink, build=False, autoSetMacs=True)
    s1 = net.addSwitch('s1')
    s2 = net.addSwitch('s2')
    s3 = net.addSwitch('s3')
    s4 = net.addSwitch('s4')
    e7 = net.addSwitch('e7')  # treat 'e7' as an edge switch to honor the earlier naming

    # Hosts (one per switch to help generate traffic if desired)
    h1 = net.addHost('h1'); net.addLink(h1, s1)
    h2 = net.addHost('h2'); net.addLink(h2, s2)
    h3 = net.addHost('h3'); net.addLink(h3, s3)
    h4 = net.addHost('h4'); net.addLink(h4, s4)
    h7 = net.addHost('h7'); net.addLink(h7, e7)

    # Switch links
    net.addLink(s1, s2, bw=100)
    net.addLink(s2, s3, bw=100)
    net.addLink(s3, s4, bw=100)
    net.addLink(s1, s3, bw=100)
    net.addLink(s3, e7, bw=50)

    net.build()
    net.start()
    return net

# ------------------------ Main ------------------------

def main():
    setLogLevel('info')
    cfg_path = "sdn_morphogen_config.yaml"
    with open(cfg_path, "r") as f:
        cfg = yaml.safe_load(f)

    net = build_topology()

    # Derive graph from active switches/links
    import networkx as nx
    G = nx.Graph()
    switches = [ sw.name for sw in net.switches ]
    G.add_nodes_from(switches)
    for link in net.links:
        intf1 = str(link.intf1).split('-')[0]
        intf2 = str(link.intf2).split('-')[0]
        # only consider switch-switch links for the diffusion graph
        if intf1 in switches and intf2 in switches:
            G.add_edge(intf1, intf2)

    engine = MorphogenEngine(G, cfg)

    ticks = 40
    info("\n--- Running morphogenetic control loop for %d ticks ---\n" % ticks)
    for t in range(ticks):
        start = time.time()
        logs = engine.step(net)
        # Pretty print a small snapshot around s3/e7
        focus = ['s3','e7']
        snap = {n: {'E': engine.E[n], 'L': engine.L[n], 'S': engine.S[n]} for n in focus if n in engine.E}
        info("tick %02d  fields(s3,e7)=%s\n" % (t, snap))
        for line in logs:
            info("  * %s\n" % line)
        # maintain real-time pacing
        elapsed = time.time() - start
        sleep_for = max(0.0, cfg['meta']['tick_seconds'] - elapsed)
        time.sleep(sleep_for)

    info("\nStopping Mininet...\n")
    net.stop()

if __name__ == "__main__":
    main()
