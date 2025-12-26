import Navigation from '@/components/Navigation'
import NeuralCanvas from '@/components/NeuralCanvas'
import AnimatedCounter from '@/components/AnimatedCounter'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero">
        <NeuralCanvas />
        <div className="hero-content">
          <h1 className="glitch">JASON JARMACZ</h1>
          <p className="subtitle">NeuroDivergent AI Evolution Strategist | Human-as-the-Loop Innovation Architect</p>
          <div className="metrics">
            <AnimatedCounter target={99.7} label="Synergy Optimization" />
            <AnimatedCounter target={5} label="Groundbreaking Projects" />
            <AnimatedCounter target={867} label="Million $ in Strategic Value" />
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section id="innovations">
        <h2>Pioneering Innovation Portfolio</h2>
        <p className="section-summary">
          Five transformative projects that push the boundaries of artificial intelligence, healthcare, infrastructure, and strategic development. Each initiative demonstrates unprecedented complexity, novel methodologies, and measurable impact.
        </p>

        <div className="innovation-grid">
          {/* NeuroDivergent AI */}
          <div className="innovation-card">
            <span className="innovation-tag">Neurotechnology × AI</span>
            <h3>NeuroDivergent AI Platform</h3>
            <p>Revolutionary Human-as-the-Loop brain-computer interface integrating non-invasive BCIs, deep learning, and focused ultrasound neuromodulation. Restoring communication for paralyzed patients while pioneering ethical AI-human symbiosis.</p>
            
            <div className="math-framework">
              <h4>Human-as-the-Loop Objective Function:</h4>
              <p className="text-center" dangerouslySetInnerHTML={{
                __html: '$$J(\\theta) = \\mathbb{E}_{\\tau \\sim \\pi_\\theta}[R(\\tau)] + \\lambda \\cdot D_{KL}(\\pi_\\theta || \\pi_{human})$$'
              }} />
            </div>

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
            <Link href="/projects/neurodivergent-ai" className="cta-button">Explore Framework</Link>
          </div>

          {/* IHEP */}
          <div className="innovation-card">
            <span className="innovation-tag">Healthcare × AI</span>
            <h3>Integrated Health Empowerment Program (IHEP)</h3>
            <p>Next-generation HIV care framework bridging grassroots community engagement with AI-driven digital health twins. NIST-compliant Zero Trust architecture accelerating pathways from management toward functional cure.</p>
            
            <div className="math-framework">
              <h4>Recursive Loop Closure:</h4>
              <p className="text-muted">
                Real-time patient digital twin modeling enables predictive viral mutation detection and personalized therapy optimization through continuous AI-human feedback loops.
              </p>
            </div>

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

          {/* Mission Valley */}
          <div className="innovation-card">
            <span className="innovation-tag">Strategic Development</span>
            <h3>Mission Valley Nexus | $215M Acquisition Strategy</h3>
            <p>Comprehensive multi-pathway analysis for transformative 17.38-acre property development. Three distinct acquisition models: UCSD Innovation Hub, Faith-Community Partnership, and Corporate Life Sciences Campus with 194% ROI projections.</p>
            
            <div className="math-framework">
              <h4>30-Year Investment Thesis:</h4>
              <p className="highlight-callout">
                Equity Multiple: <strong>4.89×</strong> | Sponsor IRR: <strong>18-25%</strong>
              </p>
            </div>

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

          {/* JESS */}
          <div className="innovation-card">
            <span className="innovation-tag">Cybersecurity × IoT</span>
            <h3>JESS | Secure WBAN/BACnet Pipeline</h3>
            <p>Joint Ethics on Safety & Standards for validated OSI Layer secured transmission across Wireless Body Area Networks and Building Automation systems. NIST SP 800-207 Zero Trust architecture protecting first responder biometric data.</p>
            
            <div className="math-framework">
              <h4>Security Framework Integration:</h4>
              <p className="text-muted">
                NIST SP 800-53r5 controls + CJIS v6.0 compliance + BACnet/SC (TLS/PKI) for event-driven, energy-aware edge analytics with cryptographic validation at every transmission layer.
              </p>
            </div>

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

          {/* DIPG AI Therapeutic */}
          <div className="innovation-card">
            <span className="innovation-tag">Biomedical AI</span>
            <h3>AI-Driven DIPG Therapeutic Discovery</h3>
            <p>Revolutionary machine learning approach to pediatric brain cancer treatment. Generative AI models designing novel brain-penetrant molecules targeting DIPG's unique metabolic vulnerabilities—bypassing decades of failed traditional approaches.</p>
            
            <div className="math-framework">
              <h4>Molecular Optimization Target:</h4>
              <p className="text-center text-gray">
                BBB Permeability + Target Affinity + Minimal Toxicity<br />
                <span className="text-primary">IC₅₀ &lt; 1μM | Blood-Brain Barrier Penetration &gt; 80%</span>
              </p>
            </div>

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
      </section>

      {/* Portfolio Documentation Showcase */}
      <section className="section-portfolio-docs" id="portfolio-docs">
        <div className="wide-container">
          <h2>Proof of Incredible Complexity</h2>
          <p className="section-intro">
            Don't just take my word for it--<strong className="text-primary">download the evidence</strong>. Each document demonstrates the fusion of mathematical rigor, multi-stakeholder communication, and novel innovation that transforms skeptics into believers. These are examples of what I create for clients who need category-defining strategic documentation.
          </p>
          <p className="accent-statement">
            Combined Portfolio Value: <span className="text-primary-large">$867M+</span> in Strategic Frameworks
          </p>

          <div className="docs-grid">
            {/* Add document cards here - similar structure to HTML */}
            {/* This section continues with all the document cards */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <h2>Strategic Services & Consulting</h2>
        <p className="section-summary">
          Transform your organization's AI capabilities and strategic documentation with battle-tested frameworks and novel methodologies. Each engagement delivers measurable outcomes backed by rigorous mathematics and real-world validation.
        </p>
        {/* Services content */}
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-section">
          <h2>Let's Make History Together</h2>
          <p className="impact-summary">
            Transform impossible challenges into measurable outcomes. Whether you're pioneering novel AI systems, navigating complex strategic acquisitions, or need investment-grade documentation that converts skeptics into believers.
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="text-xl">📧</span>
              <a href="mailto:jayjarmacz@gmail.com">jayjarmacz@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="text-xl">📱</span>
              <a href="tel:+19175668112">(917) 566-8112</a>
            </div>
            <div className="contact-item">
              <span className="text-xl">💼</span>
              <a href="https://linkedin.com/in/omniunum" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="mt-3">
            <a className="cta-size-lg cta-button" href="mailto:jayjarmacz@gmail.com?subject=Strategic%20Engagement%20Inquiry">
              Initiate Strategic Partnership
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

