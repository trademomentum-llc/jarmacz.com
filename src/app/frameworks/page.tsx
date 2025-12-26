import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Innovation Frameworks | Jason Jarmacz',
  description: 'Rigorous mathematical frameworks for Human-as-the-Loop AI systems, healthcare digital twins, cybersecurity architecture, and strategic development.',
}

export default function FrameworksPage() {
  return (
    <>
      <Navigation />
      <section className="hero">
        <div className="hero-content">
          <h1>Innovation Frameworks</h1>
          <p className="hero-subtitle">
            Rigorous mathematical foundations validated through implementation code and proven across multiple domains. Not theory—deployed systems creating measurable value.
          </p>
        </div>
      </section>

      <section id="frameworks">
        <div className="container">
          <div className="framework-grid">
            <div className="framework-card">
              <span className="framework-tag">Neurotechnology × AI</span>
              <h3>NeuroDivergent AI</h3>
              <p>Revolutionary Human-as-the-Loop brain-computer interface platform integrating non-invasive BCIs, deep learning, and focused ultrasound neuromodulation.</p>
              <div className="innovation-stats">
                <div className="stat-item">
                  <span className="stat-number">80</span>
                  <span className="stat-label">Words/Min Speech</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">87%</span>
                  <span className="stat-label">Risk Reduction</span>
                </div>
              </div>
              <Link href="/frameworks/neurodivergent" className="cta-button">Explore Framework</Link>
            </div>

            <div className="framework-card">
              <span className="framework-tag">Healthcare × AI</span>
              <h3>IHEP Framework</h3>
              <p>Next-generation patient-centered framework transforming aftercare through AI-driven digital health twins, Zero Trust architecture, and recursive loop closure.</p>
              <div className="innovation-stats">
                <div className="stat-item">
                  <span className="stat-number">350</span>
                  <span className="stat-label">Patient Capacity</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">NIST</span>
                  <span className="stat-label">AI RMF Compliant</span>
                </div>
              </div>
              <Link href="/frameworks/ihep" className="cta-button">Learn More</Link>
            </div>

            <div className="framework-card">
              <span className="framework-tag">Strategic Development</span>
              <h3>Mission Valley Nexus</h3>
              <p>$215M multi-pathway acquisition analysis featuring university innovation hub, faith-community partnership, and corporate life sciences campus scenarios.</p>
              <div className="innovation-stats">
                <div className="stat-item">
                  <span className="stat-number">$215M</span>
                  <span className="stat-label">Asset Value</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">194%</span>
                  <span className="stat-label">Max ROI</span>
                </div>
              </div>
              <Link href="/frameworks/mission-valley" className="cta-button">View Analysis</Link>
            </div>

            <div className="framework-card">
              <span className="framework-tag">Cybersecurity × IoT</span>
              <h3>JESS Framework</h3>
              <p>Joint Ethics on Safety &amp; Standards for validated OSI layer secured transmission across WBAN &amp; BACnet with NIST SP 800-207 Zero Trust compliance.</p>
              <div className="innovation-stats">
                <div className="stat-item">
                  <span className="stat-number">7</span>
                  <span className="stat-label">OSI Layers Secured</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Zero</span>
                  <span className="stat-label">Trust Model</span>
                </div>
              </div>
              <Link href="/frameworks/jess" className="cta-button">Technical Details</Link>
            </div>

            <div className="framework-card">
              <span className="framework-tag">Biomedical AI</span>
              <h3>DIPG AI Therapeutics</h3>
              <p>Revolutionary machine learning approach to pediatric brain cancer—designing novel brain-penetrant molecules targeting DIPG&apos;s unique metabolic vulnerabilities.</p>
              <div className="innovation-stats">
                <div className="stat-item">
                  <span className="stat-number">&lt;1%</span>
                  <span className="stat-label">Current Survival</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">AI</span>
                  <span className="stat-label">Drug Design</span>
                </div>
              </div>
              <Link href="/frameworks/dipg" className="cta-button">Research Summary</Link>
            </div>

            <div className="framework-card">
              <span className="framework-tag">Mathematical Foundations</span>
              <h3>Mathematical Frameworks</h3>
              <p>Rigorous mathematical foundations including HatL objective functions, Adaptive Synergy Optimization, Constitutional AI training, and Digital Twin architectures.</p>
              <div className="innovation-stats">
                <div className="stat-item">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Core Frameworks</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Code Validated</span>
                </div>
              </div>
              <Link href="/frameworks/mathematical" className="cta-button">View Mathematics</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Apply These Frameworks to Your Challenges</h2>
        <p className="u-fon-1-1rem-mar-2rem">
          Whether you&apos;re building AI systems requiring human alignment, securing IoT infrastructure, or developing healthcare AI with regulatory compliance, these frameworks provide the rigor your project needs.
        </p>
        <Link href="/#contact" className="cta-button">Schedule Consultation</Link>
      </section>

      <Footer />
    </>
  )
}
