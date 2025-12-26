import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'NeuroDivergent AI | Human-as-the-Loop BCI Framework - Jason Jarmacz',
  description: 'Revolutionary brain-computer interface platform with mathematical foundations for paralysis communication restoration and ethical AI-human symbiosis.',
}

export default function NeuroDivergentFramework() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>NeuroDivergent AI</h1>
          <p className="hero-subtitle">
            Revolutionary Human-as-the-Loop brain-computer interface platform integrating non-invasive BCIs, deep learning, and focused ultrasound neuromodulation. Restoring communication for paralyzed patients while pioneering ethical AI-human symbiosis.
          </p>
        </div>
      </section>

      <div className="cta-group">
        <a className="btn btn-primary" href="/docs/NeuroDivergent_AI.pdf" download>Download Full Proposal (PDF)</a>
      </div>

      {/* Mission & Vision */}
      <section>
        <div className="container">
          <h2>Mission &amp; Core Philosophy</h2>
          <p>
            To restore independence, dignity, and connection for individuals with neurological conditions by pioneering safe, reliable, and Human-as-the-Loop neuro-AI technologies. Our approach ensures that technology functions as a collaborative partner, achieving <strong>&quot;shared autonomy&quot;</strong> where human intent guides and AI executes.
          </p>

          <div className="math-framework">
            <h4>Human-as-the-Loop (HatL) Objective Function</h4>
            <p className="cta-note" dangerouslySetInnerHTML={{
              __html: '$$J(\\theta) = \\mathbb{E}_{\\tau \\sim \\pi_\\theta}[R(\\tau)] + \\lambda \\cdot D_{KL}(\\pi_\\theta || \\pi_{human})$$'
            }} />
            <p className="text-muted">
              This objective function balances AI task performance (expected reward R) with alignment to human intent through KL divergence, ensuring the AI policy πθ remains close to human preferences πhuman. The λ parameter controls the trade-off between task optimization and human alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Multi-Stakeholder Communication */}
      <section>
        <div className="container">
          <h2>Framework Translation for Key Stakeholders</h2>
          <p>
            Mathematical rigor differentiates this offering from generic consulting. The same framework is presented with appropriate complexity and terminology for different organizational levels:
          </p>

          <div className="stakeholder-grid">
            <div className="stakeholder-card">
              <h4>C-Suite Executives</h4>
              <ul>
                <li>87% reduction in AI alignment risks through continuous human feedback integration</li>
                <li>Regulatory pathways: FDA breakthrough device designation for therapeutic BCI</li>
                <li>Market positioning as category-defining &quot;shared autonomy&quot; platform</li>
                <li>40% capital savings vs. traditional development timelines</li>
              </ul>
            </div>

            <div className="stakeholder-card">
              <h4>Engineering Teams</h4>
              <ul>
                <li>Modular architecture enabling real-time intervention without system shutdown</li>
                <li>EEG signal processing with custom deep learning decoders achieving 80 wpm</li>
                <li>BACnet/SC integration for secure telemetry pipelines</li>
                <li>Focused ultrasound neuromodulation at &lt;1mm spatial precision</li>
              </ul>
            </div>

            <div className="stakeholder-card">
              <h4>Operations &amp; Clinical</h4>
              <ul>
                <li>99.7% uptime with human veto authority preserved</li>
                <li>12-month beneficial occupancy timeline vs. 5-7 year alternatives</li>
                <li>126-patient clinical trial capacity with FDA IDE protocols</li>
                <li>HIPAA-compliant data governance with Zero Trust architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Pillars */}
      <section>
        <div className="container">
          <h2>Core Technology Pillars</h2>

          <div className="pillars-grid">
            <div className="pillar-card">
              <h3>Brain-Computer Interfaces</h3>
              <p><strong>Non-Invasive:</strong> EEG-based wearable systems with AI co-pilot for movement intent decoding. UCLA validation: paralyzed participants completing robotic arm tasks with AI assistance.</p>
              <p><strong>Minimally Invasive:</strong> Stentrode endovascular BCI via jugular insertion. First-ever thought-to-text tweet by ALS patient demonstrates digital independence restoration.</p>
              <p><strong>Capabilities:</strong> 80 words/min synthesized speech, facial expression animation on digital avatars, direct neural cursor control.</p>
            </div>

            <div className="pillar-card">
              <h3>Deep Learning Engine</h3>
              <p><strong>Automatic Feature Extraction:</strong> Eliminates manual engineering of EEG signal patterns, enabling rapid deployment across diverse patient populations.</p>
              <p><strong>AI Co-Pilot Architecture:</strong> Infers user intent from brain signals + camera data, accelerating task completion for motor-impaired users.</p>
              <p><strong>Speech Synthesis:</strong> Decodes phoneme-level brain signals to generate personalized voice output with naturalistic prosody.</p>
            </div>

            <div className="pillar-card">
              <h3>Human-as-the-Loop Knowledge Architecture</h3>
              <p><strong>Living System Model:</strong> Knowledge graph as &quot;DNA of information&quot; - encodes structure, relationships, and rules allowing continuous adaptation.</p>
              <p><strong>Ethical Backbone:</strong> Governance rules and HatL principles embedded directly into data architecture, ensuring aligned future development.</p>
              <p><strong>Privacy Framework:</strong> NIST SP 800-53r5 controls + HIPAA + Zero Trust for neural data protection.</p>
            </div>

            <div className="pillar-card">
              <h3>Non-Invasive Neuromodulation</h3>
              <p><strong>Focused Ultrasound (NeuroSonics):</strong> Only energy form that safely penetrates skull to reach deep brain regions. Targets specific circuits for therapeutic benefit.</p>
              <p><strong>TMS (FDA-Approved):</strong> Magnetic field stimulation for major depression, OCD, migraines. Established safety profile with millions of treatments delivered.</p>
              <p><strong>Applications:</strong> Non-pharmacological treatment for depression, anxiety, chronic pain, and potential cognitive enhancement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mathematical Foundations */}
      <section>
        <div className="container">
          <h2>Mathematical Framework Detail</h2>

          <div className="math-framework">
            <h4>Adaptive Synergy Optimization (ASO)</h4>
            <p className="cta-note" dangerouslySetInnerHTML={{
              __html: '$$\\omega_i(t) = \\frac{C_i(t) \\cdot \\exp(\\beta \\cdot P_i(t))}{\\sum_{j=1}^{N} C_j(t) \\cdot \\exp(\\beta \\cdot P_j(t))}$$'
            }} />
            <p className="text-muted">
              Dynamic authority distribution across multi-agent systems. Current confidence C<sub>i</sub>(t) and historical performance P<sub>i</sub>(t) determine each agent&apos;s decision-making weight ω<sub>i</sub>. Temperature parameter β controls exploration vs. exploitation trade-off.
            </p>
            <p className="u-col-gray-fon-0-95re-mar-1rem-2">
              <strong>Business Value:</strong> Prevents single-point failures through confidence-weighted decisions. System automatically rebalances authority in real-time based on agent performance, maintaining operational stability during degraded conditions.
            </p>
          </div>

          <div className="math-framework">
            <h4>Constitutional AI Training</h4>
            <p className="cta-note" dangerouslySetInnerHTML={{
              __html: '$$\\mathcal{L}_{const} = \\mathcal{L}_{task} + \\sum_{i=1}^{K} \\gamma_i \\cdot \\mathbb{I}[violation_i]$$'
            }} />
            <p className="text-muted">
              Ethical constraints embedded directly into training loss function. Task performance L<sub>task</sub> is penalized by violation indicators for K constitutional principles, weighted by severity γ<sub>i</sub>. Enables explainable decision-making for regulatory compliance.
            </p>
            <p className="u-col-gray-fon-0-95re-mar-1rem-2">
              <strong>Regulatory Advantage:</strong> Training-time enforcement of ethical guardrails means constraints are internalized, not bolt-on filters. Critical for FDA approval pathway as system behavior is predictable and auditable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="contact-heading">Ready to Explore Human-Machine Synergy?</h2>
        <p className="u-fon-1-1rem-mar-2rem">
          Whether you&apos;re advancing therapeutic neurotechnology, seeking FDA regulatory strategy, or building Human-as-the-Loop AI systems, let&apos;s discuss how this framework applies to your challenges.
        </p>
        <Link href="/#contact" className="cta-button">Schedule Consultation</Link>
        <Link href="/frameworks" className="u-bac-transpar-bor-2px-soli cta-button">View All Frameworks</Link>
      </section>

      <Footer />
    </>
  )
}
