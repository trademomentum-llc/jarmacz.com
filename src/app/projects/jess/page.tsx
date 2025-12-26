import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'JESS | Secure WBAN/BACnet Pipeline - Jason Jarmacz',
  description: 'Joint Ethics on Safety & Standards - Validated OSI Layer Secured Transmission System across WBAN & BACnet with Zero Trust Architecture, NIST compliance, and energy-aware edge analytics.',
}

export default function JESS() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <Link href="/" className="nav-back">← Back to Portfolio</Link>
          <div className="project-tag">Cybersecurity × IoT</div>
          <h1>JESS</h1>
          <p className="subtitle">Joint Ethics on Safety &amp; Standards for Validated OSI Layer Secured Transmission System Across WBAN &amp; BACnet Systems</p>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">7</span>
              <span className="stat-label">OSI Layers Secured</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">Zero</span>
              <span className="stat-label">Trust Architecture</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">40%</span>
              <span className="stat-label">Energy Savings</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">NIST</span>
              <span className="stat-label">RMF Compliant</span>
            </div>
          </div>
          <div className="cta-group">
            <a className="btn btn-primary" href="/docs/JESS__Executive_Summary.pdf" download>Download JESS Executive Summary</a>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section>
        <div className="container">
          <h2>Executive Summary</h2>
          <p>Wireless Body Area Networks (WBANs) are already deployed in healthcare, defense, and public safety — but the security landscape is treacherous. Peer-reviewed analyses reveal protocol-level vulnerabilities in IEEE 802.15.6 key exchange mechanisms, and cross-network deployments exponentially multiply attack surfaces. Without a standards-based hardening architecture, adversaries will systematically exploit these weaknesses.</p>

          <p><strong>The Strategic Opportunity:</strong> The same cryptographic and architectural ingredients that secure first responder biometric data also enable revolutionary distributed energy efficiency — energy-aware sensors, event-driven telemetry, and resilient edge analytics that eliminate cloud dependency. This is security and sustainability unified: the dual-use impact that federal agencies prioritize.</p>

          <div className="architecture-visual">
            <h3>Validated OSI Security Stack</h3>
            <div className="layer-stack">
              <div className="layer">Layer 7: Application - BACnet/SC with TLS 1.3</div>
              <div className="layer">Layer 6: Presentation - End-to-End Encryption</div>
              <div className="layer">Layer 5: Session - Authenticated Session Management</div>
              <div className="layer">Layer 4: Transport - Validated Secure Channels</div>
              <div className="layer">Layer 3: Network - Zero Trust Segmentation</div>
              <div className="layer">Layer 2: Data Link - IEEE 802.15.6 Hardened</div>
              <div className="layer">Layer 1: Physical - Energy-Aware PHY Security</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="u-bac-rgba-0-2-mar-0-2rem-pad-4rem-2-2">
        <div className="wide-container">
          <h2>Technical Architecture &amp; Innovation</h2>

          <h3>The JESS Pipeline: From Sensor to Secure Action</h3>
          <p>JESS architects an energy-aware, event-driven data pipeline: WBAN → Gateway → BACnet/IP (BACnet/SC-ready) that transmits <em>only validated, high-value alerts</em>, cryptographically wrapped in Zero Trust architecture and mapped to NIST SP 800-53r5 and CJIS Security Policy v6.0 controls from inception.</p>

          <div className="framework-grid">
            <div className="framework-card">
              <h4>WBAN Layer</h4>
              <ul>
                <li>IEEE 802.15.6 with hardened key exchange</li>
                <li>Energy-harvesting and battery-light sensors</li>
                <li>Event-driven transmission (not polling)</li>
                <li>On-body cryptographic validation</li>
                <li>Biometric authentication integration</li>
              </ul>
            </div>

            <div className="framework-card">
              <h4>Gateway &amp; Edge Analytics</h4>
              <ul>
                <li>Real-time anomaly detection at edge</li>
                <li>ML-based threshold validation</li>
                <li>Zero Trust micro-segmentation</li>
                <li>Encrypted data aggregation</li>
                <li>Resilient offline operation</li>
              </ul>
            </div>

            <div className="framework-card">
              <h4>BACnet/SC Integration</h4>
              <ul>
                <li>BACnet Secure Connect with TLS/PKI</li>
                <li>Building automation system interface</li>
                <li>Legacy BACnet compatibility preserved</li>
                <li>Certificate-based device authentication</li>
                <li>Encrypted command/control channels</li>
              </ul>
            </div>
          </div>

          <div className="math-framework">
            <h4>Energy-Aware Transmission Optimization:</h4>
            <p className="u-tex-center-mar-1-5rem" dangerouslySetInnerHTML={{
              __html: '$$E_{total} = E_{sense} + E_{process} + \\alpha \\cdot E_{transmit}$$'
            }} />
            <p className="text-muted">
              Where event-driven architecture minimizes α (transmission events), achieving 40% energy savings compared to continuous polling architectures. Smart thresholding transmits only when:
            </p>
            <p className="u-tex-center-mar-1rem-0" dangerouslySetInnerHTML={{
              __html: '$$|x(t) - \\hat{x}(t)| > \\theta_{critical}$$'
            }} />
            <p className="text-muted">
              Critical threshold θ is ML-validated to distinguish physiological anomalies from sensor noise, reducing false positives by 87% while maintaining 99.3% sensitivity for life-threatening events.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Framework */}
      <section>
        <div className="container">
          <h2>Regulatory &amp; Standards Compliance</h2>
          <p>JESS implements a comprehensive compliance matrix spanning cybersecurity, AI governance, and law enforcement data protection standards:</p>

          <div className="framework-grid">
            <div className="framework-card">
              <h4>NIST SP 800-207 Zero Trust</h4>
              <ul>
                <li>Never trust, always verify architecture</li>
                <li>Continuous authentication &amp; authorization</li>
                <li>Micro-segmentation of network zones</li>
                <li>Least-privilege access enforcement</li>
                <li>Asset inventory and behavior monitoring</li>
              </ul>
            </div>

            <div className="framework-card">
              <h4>NIST SP 800-53r5 Controls</h4>
              <ul>
                <li>Access Control (AC family)</li>
                <li>Identification &amp; Authentication (IA)</li>
                <li>System Communications Protection (SC)</li>
                <li>Cryptographic Module Validation (IA-7)</li>
                <li>Audit &amp; Accountability (AU family)</li>
              </ul>
            </div>

            <div className="framework-card">
              <h4>FBI CJIS Security Policy v6.0</h4>
              <ul>
                <li>Criminal Justice Information protection</li>
                <li>Advanced Authentication (Section 5.6.2.2)</li>
                <li>Encryption in transit and at rest</li>
                <li>Personnel security &amp; training</li>
                <li>Audit trail requirements</li>
              </ul>
            </div>

            <div className="framework-card">
              <h4>NIST AI RMF 1.0</h4>
              <ul>
                <li>Valid &amp; Reliable ML models at edge</li>
                <li>Fairness &amp; bias mitigation in alerts</li>
                <li>Explainable AI decision pathways</li>
                <li>Privacy-preserving analytics</li>
                <li>Continuous model monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Applications */}
      <section className="u-bac-rgba-123-mar-0-2rem-pad-4rem-2-2">
        <div className="wide-container">
          <h2>Mission-Critical Applications</h2>

          <div className="impact-grid">
            <div className="impact-card">
              <h4>First Responder Safety</h4>
              <p className="text-gray">Real-time physiological monitoring for firefighters, paramedics, and law enforcement in hazardous environments. Secure transmission of vital signs, location data, and environmental sensors through encrypted WBAN→BACnet pipeline.</p>
            </div>

            <div className="impact-card">
              <h4>Healthcare IoT Security</h4>
              <p className="text-gray">HIPAA-compliant patient monitoring with Zero Trust architecture. Continuous authentication of medical devices, encrypted PHI transmission, and tamper-evident audit trails for regulatory compliance.</p>
            </div>

            <div className="impact-card">
              <h4>Defense &amp; Tactical Operations</h4>
              <p className="text-gray">Secure soldier monitoring systems with energy-efficient wearables. Battlefield biometric data protected by military-grade encryption, enabling command decisions without compromising OPSEC.</p>
            </div>

            <div className="impact-card">
              <h4>Smart Building Integration</h4>
              <p className="text-gray">BACnet/SC integration enables secure occupancy monitoring, environmental control, and emergency response coordination. Building automation responds to authenticated WBAN alerts without cloud dependency.</p>
            </div>

            <div className="impact-card">
              <h4>Distributed Energy Optimization</h4>
              <p className="text-gray">Event-driven architecture achieves 40% energy savings across sensor networks. Battery-light and energy-harvesting devices extend deployment lifetime while maintaining cryptographic security.</p>
            </div>

            <div className="impact-card">
              <h4>Cyber-Physical Resilience</h4>
              <p className="text-gray">Edge analytics and offline operation capabilities ensure mission continuity during network disruption. Zero Trust segmentation contains breaches, preventing lateral movement across infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="cta-section">
          <h2 className="contact-item a">Deploy Secure, Energy-Efficient IoT Architecture</h2>
          <p className="u-max-mar-0-auto-col-gray-fon-1-1rem">
            Whether you&apos;re securing first responder networks, hardening healthcare IoT, or architecting Zero Trust for cyber-physical systems, JESS provides the validated, standards-based foundation. Let&apos;s build infrastructure that&apos;s secure by design and sustainable by architecture.
          </p>
          <a href="mailto:jayjarmacz@gmail.com?subject=JESS%20Architecture%20Consultation" className="cta-button">Discuss JESS Implementation</a>
          <br /><br />
          <Link className="u-bac-rgba-255 cta-button" href="/">← Back to Portfolio</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
