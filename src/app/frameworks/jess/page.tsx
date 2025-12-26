import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'JESS Framework | Joint Ethics on Safety & Standards - Jason Jarmacz',
  description: 'Secure WBAN/BACnet pipeline architecture with Zero Trust implementation—protecting first responder biometric data across OSI layers with NIST SP 800-207 compliance.',
}

export default function JESSFramework() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="tag-line">Cybersecurity × IoT × Critical Infrastructure</div>
          <h1>JESS Framework</h1>
          <p className="subtitle">Joint Ethics on Safety &amp; Standards for Validated OSI Layer Secured Transmission System Across WBAN &amp; BACnet</p>
        </div>
      </section>

      <div className="cta-group">
        <a className="btn btn-primary" href="/docs/JESS__Executive_Summary.pdf" download>Download JESS Executive Summary</a>
      </div>

      {/* Executive Summary */}
      <section>
        <div className="container">
          <h2>Executive Summary: Securing the Connected First Responder</h2>

          <div className="highlight-box">
            <p className="u-col-light-fon-600-mar-1rem">The risk is now.</p>
            <p>Wireless Body Area Networks (WBANs) are already deployed in healthcare, defense, and public safety—but the security story is incomplete. Peer-reviewed analyses reveal protocol-level weaknesses in IEEE 802.15.6 key exchange and multiplied attack surfaces in cross-network deployments. Without a standards-based architecture, adversaries will exploit these vulnerabilities.</p>
          </div>

          <div className="success-box">
            <p className="u-col-light-fon-600-mar-1rem">The upside is bigger than security.</p>
            <p>The same infrastructure that hardens responder wearables enables distributed energy/sustainability wins: energy-aware, battery-light (or battery-less) sensors; event-driven telemetry; and resilient edge analytics independent of constant cloud connectivity. <strong>Security and sustainability in one move</strong>—the dual-use impact that federal agencies prioritize.</p>
          </div>

          <h3>Our Solution: End-to-End Validated Security Pipeline</h3>
          <p>JESS architects and implements a secure, energy-aware, event-driven pipeline from <strong>WBAN → BACnet/IP (BACnet/SC-ready)</strong> that transmits only validated, high-value alerts, wrapped in Zero Trust architecture and mapped to NIST and CJIS controls from day one.</p>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">7</span>
              <span className="stat-label">OSI Layers Secured</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">40%</span>
              <span className="stat-label">Energy Reduction</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">Zero</span>
              <span className="stat-label">Trust Architecture</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">TLS 1.3</span>
              <span className="stat-label">+ PKI Cryptography</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="u-bac-rgba-123-mar-0-2rem-pad-4rem-2">
        <div className="wide-container">
          <h2>Technical Architecture &amp; OSI Layer Security</h2>

          <p>JESS implements comprehensive security controls across all seven layers of the OSI model, ensuring cryptographic validation and Zero Trust principles at every transmission stage.</p>

          <div className="layer-stack">
            <div className="layer-item">
              <div className="layer-number">Layer 7</div>
              <div className="layer-content">
                <div className="layer-title">Application Layer</div>
                <div className="layer-desc">Authenticated API endpoints, input validation, application-level encryption (AES-256-GCM)</div>
              </div>
            </div>

            <div className="layer-item">
              <div className="layer-number">Layer 6</div>
              <div className="layer-content">
                <div className="layer-title">Presentation Layer</div>
                <div className="layer-desc">Data sanitization, format validation, encrypted serialization protocols</div>
              </div>
            </div>

            <div className="layer-item">
              <div className="layer-number">Layer 5</div>
              <div className="layer-content">
                <div className="layer-title">Session Layer</div>
                <div className="layer-desc">Session token management, continuous re-authentication, secure session establishment/teardown</div>
              </div>
            </div>

            <div className="layer-item">
              <div className="layer-number">Layer 4</div>
              <div className="layer-content">
                <div className="layer-title">Transport Layer</div>
                <div className="layer-desc">TLS 1.3 encryption, mutual authentication, certificate pinning, BACnet/SC integration</div>
              </div>
            </div>

            <div className="layer-item">
              <div className="layer-number">Layer 3</div>
              <div className="layer-content">
                <div className="layer-title">Network Layer</div>
                <div className="layer-desc">IPsec tunneling, network segmentation, micro-perimeter enforcement, encrypted routing</div>
              </div>
            </div>

            <div className="layer-item">
              <div className="layer-number">Layer 2</div>
              <div className="layer-content">
                <div className="layer-title">Data Link Layer</div>
                <div className="layer-desc">MAC address filtering, 802.1X authentication, encrypted frames (IEEE 802.15.6 security)</div>
              </div>
            </div>

            <div className="layer-item">
              <div className="layer-number">Layer 1</div>
              <div className="layer-content">
                <div className="layer-title">Physical Layer</div>
                <div className="layer-desc">Frequency-hopping spread spectrum, power analysis protection, tamper detection on wearable nodes</div>
              </div>
            </div>
          </div>

          <div className="math-block">
            <h4>Security Validation Function:</h4>
            <p>Each packet P<sub>i</sub> undergoes multi-layer validation:</p>
            <p className="u-tex-center-mar-1rem-0" dangerouslySetInnerHTML={{
              __html: '$$V(P_i) = \\text{MAC}_{\\text{verify}}(P_i) \\land \\text{TLS}_{\\text{verify}}(P_i) \\land \\text{Schema}_{\\text{valid}}(P_i) \\land \\text{RBAC}_{\\text{auth}}(P_i)$$'
            }} />
            <p>Only packets satisfying all validation predicates propagate to the application layer.</p>
          </div>
        </div>
      </section>

      {/* Zero Trust Implementation */}
      <section>
        <div className="container">
          <h2>Zero Trust Architecture (NIST SP 800-207)</h2>

          <p>JESS eliminates all implicit trust, implementing continuous verification at every access attempt. The Zero Trust model ensures that even compromised credentials or devices cannot lateral move within the system.</p>

          <div className="framework-grid">
            <div className="framework-card">
              <h4>Identity &amp; Access Management</h4>
              <ul>
                <li>Multi-factor authentication (MFA) for all system access</li>
                <li>Role-based access control (RBAC) with least privilege</li>
                <li>Continuous authentication and periodic re-verification</li>
                <li>Just-in-time (JIT) access provisioning</li>
                <li>Privileged access management (PAM) for admin operations</li>
              </ul>
            </div>

            <div className="framework-card">
              <h4>Network Micro-Segmentation</h4>
              <ul>
                <li>Software-defined perimeter (SDP) around critical workloads</li>
                <li>East-west traffic inspection and filtering</li>
                <li>Application-layer firewalls at segment boundaries</li>
                <li>Network access control (NAC) for device authentication</li>
                <li>Dynamic policy enforcement based on context</li>
              </ul>
            </div>

            <div className="framework-card">
              <h4>Data Protection</h4>
              <ul>
                <li>End-to-end encryption (AES-256-GCM)</li>
                <li>Data loss prevention (DLP) monitoring</li>
                <li>Tokenization of PHI/PII at rest and in transit</li>
                <li>Hardware Security Module (HSM) key management</li>
                <li>Encrypted backups with air-gapped storage</li>
              </ul>
            </div>

            <div className="framework-card">
              <h4>Continuous Monitoring</h4>
              <ul>
                <li>Security information and event management (SIEM)</li>
                <li>User and entity behavior analytics (UEBA)</li>
                <li>Continuous security validation</li>
                <li>Automated threat detection and response</li>
                <li>Audit logging and forensics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="contact-heading">Ready to Secure Your Critical Infrastructure?</h2>
        <p className="u-fon-1-1rem-mar-2rem">
          Whether you&apos;re protecting first responder biometric data, securing healthcare IoT, or implementing Zero Trust for building automation systems, JESS provides the standards-based foundation.
        </p>
        <a href="mailto:jayjarmacz@gmail.com?subject=JESS%20Framework%20Consultation" className="cta-button">Schedule JESS Consultation</a>
        <Link href="/frameworks" className="u-bac-transpar-bor-2px-soli cta-button">View All Frameworks</Link>
      </section>

      <Footer />
    </>
  )
}
