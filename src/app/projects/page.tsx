import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Projects Portfolio | Jason Jarmacz',
  description: 'Comprehensive portfolio of transformative AI, healthcare, infrastructure, and strategic development projects demonstrating unprecedented complexity and measurable impact.',
}

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <section className="hero">
        <div className="hero-content">
          <h1>Projects Portfolio</h1>
          <p className="hero-subtitle">
            Five transformative projects pushing the boundaries of artificial intelligence, healthcare, infrastructure, and strategic development. Each initiative demonstrates unprecedented complexity, novel methodologies, and measurable impact.
          </p>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="innovation-grid">
            <div className="innovation-card">
              <span className="innovation-tag">Neurotechnology × AI</span>
              <h3>NeuroDivergent AI Platform</h3>
              <p>Revolutionary Human-as-the-Loop brain-computer interface integrating non-invasive BCIs, deep learning, and focused ultrasound neuromodulation. Restoring communication for paralyzed patients while pioneering ethical AI-human symbiosis.</p>
              <div className="innovation-stats">
                <div className="stat-item">
                  <span className="stat-number">80</span>
                  <span className="stat-label">Words/Min Speech</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">87%</span>
                  <span className="stat-label">Risk Reduction</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">40%</span>
                  <span className="stat-label">Cost Savings</span>
                </div>
              </div>
              <Link href="/projects/neurodivergent-ai" className="cta-button">Explore Project</Link>
            </div>

            <div className="innovation-card">
              <span className="innovation-tag">Healthcare × AI</span>
              <h3>Integrated Health Empowerment Program (IHEP)</h3>
              <p>Next-generation HIV care framework bridging grassroots community engagement with AI-driven digital health twins. NIST-compliant Zero Trust architecture accelerating pathways from management toward functional cure.</p>
              <div className="innovation-stats">
                <div className="stat-item">
                  <span className="stat-number">350</span>
                  <span className="stat-label">Patient Capacity</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">NIST</span>
                  <span className="stat-label">AI RMF Compliant</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">ZTA</span>
                  <span className="stat-label">Security Model</span>
                </div>
              </div>
              <Link href="/projects/ihep" className="cta-button">Learn More</Link>
            </div>

            <div className="innovation-card">
              <span className="innovation-tag">Strategic Development</span>
              <h3>Mission Valley Nexus | $215M Acquisition Strategy</h3>
              <p>Comprehensive multi-pathway analysis for transformative 17.38-acre property development. Three distinct acquisition models: UCSD Innovation Hub, Faith-Community Partnership, and Corporate Life Sciences Campus with 194% ROI projections.</p>
              <div className="innovation-stats">
                <div className="stat-item">
                  <span className="stat-number">$215M</span>
                  <span className="stat-label">Asset Value</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Jobs Created</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">$1.1B</span>
                  <span className="stat-label">Economic Impact</span>
                </div>
              </div>
              <Link href="/projects/mission-valley" className="cta-button">View Analysis</Link>
            </div>

            <div className="innovation-card">
              <span className="innovation-tag">Cybersecurity × IoT</span>
              <h3>JESS | Secure WBAN/BACnet Pipeline</h3>
              <p>Joint Ethics on Safety &amp; Standards for validated OSI Layer secured transmission across Wireless Body Area Networks and Building Automation systems. NIST SP 800-207 Zero Trust architecture protecting first responder biometric data.</p>
              <div className="innovation-stats">
                <div className="stat-item">
                  <span className="stat-number">7</span>
                  <span className="stat-label">OSI Layers Secured</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Zero</span>
                  <span className="stat-label">Trust Model</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">40%</span>
                  <span className="stat-label">Energy Savings</span>
                </div>
              </div>
              <Link href="/projects/jess" className="cta-button">Technical Details</Link>
            </div>

            <div className="innovation-card">
              <span className="innovation-tag">Biomedical AI</span>
              <h3>AI-Driven DIPG Therapeutic Discovery</h3>
              <p>Revolutionary machine learning approach to pediatric brain cancer treatment. Generative AI models designing novel brain-penetrant molecules targeting DIPG&apos;s unique metabolic vulnerabilities—bypassing decades of failed traditional approaches.</p>
              <div className="innovation-stats">
                <div className="stat-item">
                  <span className="stat-number">&lt;1%</span>
                  <span className="stat-label">Current Survival</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">AI</span>
                  <span className="stat-label">Drug Design</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">12mo</span>
                  <span className="stat-label">Dev Timeline</span>
                </div>
              </div>
              <Link href="/projects/dipg" className="cta-button">Research Summary</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-portfolio-docs" id="portfolio-docs">
        <div className="wide-container">
          <h2>Proof of Incredible Complexity</h2>
          <p className="section-intro">
            Don&apos;t just take my word for it—<strong className="text-primary">download the evidence</strong>. Each document demonstrates the fusion of mathematical rigor, multi-stakeholder communication, and novel innovation that transforms skeptics into believers.
          </p>
          <p className="accent-statement">
            Combined Portfolio Value: <span className="text-primary-large">$867M+</span> in Strategic Frameworks
          </p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Let&apos;s Make History Together</h2>
        <p className="u-fon-1-1rem-mar-2rem">
          Transform impossible challenges into measurable outcomes. Whether you&apos;re pioneering novel AI systems, navigating complex strategic acquisitions, or need investment-grade documentation that converts skeptics into believers.
        </p>
        <Link href="/#contact" className="cta-button">Initiate Strategic Partnership</Link>
      </section>

      <Footer />
    </>
  )
}
