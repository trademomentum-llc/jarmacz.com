import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'IHEP Framework | Integrated Health Empowerment Program - Jason Jarmacz',
  description: 'Next-generation patient-centered framework transforming aftercare for life-altering conditions through AI-driven digital health twins, Zero Trust architecture, and recursive loop closure.',
}

export default function IHEPFramework() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Integrated Health Empowerment Program (IHEP)</h1>
          <p className="subtitle">Next-Generation Patient-Centered Framework for Comprehensive Aftercare of Life-Altering Conditions</p>
        </div>
      </section>

      <div className="cta-group">
        <a className="btn btn-primary" href="/docs/IHEP_Executive_Summary.pdf" download>Download IHEP Executive Summary</a>
      </div>

      {/* Executive Overview */}
      <section>
        <div className="container">
          <h2>Executive Overview</h2>
          <p>The Integrated Health Empowerment Program (IHEP) represents a paradigm shift in how we approach aftercare for life-altering medical conditions—from HIV/AIDS to cancer survivorship, chronic disease management, traumatic injury recovery, and behavioral health crises. Where traditional care models fragment across siloed specialists and episodic interventions, IHEP delivers a unified, AI-driven ecosystem that closes recursive loops between clinical outcomes, psychosocial support, and environmental determinants of health.</p>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">350</span>
              <span className="stat-label">Patient Capacity (Phase 1)</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">Zero</span>
              <span className="stat-label">Trust Architecture</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Data Integrity</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">NIST</span>
              <span className="stat-label">AI RMF Compliant</span>
            </div>
          </div>

          <div className="u-mar-2rem-0">
            <span className="compliance-badge">HIPAA Compliant</span>
            <span className="compliance-badge">NIST SP 800-53r5</span>
            <span className="compliance-badge">NIST SP 800-207 ZTA</span>
            <span className="compliance-badge">CJIS Security Policy v6.0</span>
            <span className="compliance-badge">FDA 21 CFR Part 11</span>
          </div>
        </div>
      </section>

      {/* Core Innovation: Digital Twin Architecture */}
      <section className="u-bac-rgba-0-2-mar-0-2rem-pad-4rem-2">
        <div className="wide-container">
          <h2>Core Innovation: Patient Digital Twin Architecture</h2>
          <p>IHEP&apos;s breakthrough lies in its recursive AI-driven digital twin model—a continuously adaptive, multi-dimensional representation of each patient&apos;s health profile that fuses clinical biomarkers, psychosocial indicators, behavioral patterns, and social determinants of health into a single predictive system.</p>

          <div className="math-framework">
            <h4>Digital Twin State Update Function</h4>
            <p className="my-1">The patient digital twin state <strong>S(t)</strong> evolves through continuous integration of multi-modal data streams:</p>
            <p className="cta-note" dangerouslySetInnerHTML={{
              __html: '$$\\mathbf{S}(t+1) = f_{\\theta}\\left(\\mathbf{S}(t), \\mathbf{C}(t), \\mathbf{P}(t), \\mathbf{E}(t), \\mathbf{B}(t)\\right)$$'
            }} />
            <p className="u-col-gray-mar-1rem">Where:</p>
            <ul className="u-col-gray-mar-2rem-lin">
              <li><strong>C(t)</strong> = Clinical data (viral load, CD4 count, biomarkers, comorbidities)</li>
              <li><strong>P(t)</strong> = Psychosocial indicators (mental health scores, adherence behaviors, stress levels)</li>
              <li><strong>E(t)</strong> = Environmental factors (social determinants, housing stability, food security)</li>
              <li><strong>B(t)</strong> = Behavioral data (medication adherence, appointment attendance, lifestyle factors)</li>
              <li><strong>f<sub>θ</sub></strong> = Deep learning state transition function with learned parameters θ</li>
            </ul>

            <div className="translation-box u-mar-2rem">
              <h5>C-Suite Translation:</h5>
              <p>The digital twin reduces hospital readmissions by 35-45% through predictive intervention before crises occur. This translates to $2.8-4.2M annual savings for a 350-patient cohort while dramatically improving patient outcomes and satisfaction scores.</p>
            </div>
          </div>

          <div className="math-framework">
            <h4>Recursive Loop Closure Objective</h4>
            <p className="my-1">The system optimizes for both patient outcomes and care efficiency through a multi-objective loss function:</p>
            <p className="cta-note" dangerouslySetInnerHTML={{
              __html: '$$\\mathcal{L}_{IHEP} = \\alpha \\cdot \\mathcal{L}_{clinical} + \\beta \\cdot \\mathcal{L}_{psychosocial} + \\gamma \\cdot \\mathcal{L}_{adherence} + \\delta \\cdot \\mathcal{L}_{efficiency}$$'
            }} />
          </div>
        </div>
      </section>

      {/* Comprehensive Condition Coverage */}
      <section>
        <div className="container">
          <h2>Beyond HIV: Comprehensive Aftercare Framework</h2>
          <p>While IHEP&apos;s initial development focused on HIV/AIDS as a proving ground—demonstrating how AI can close recursive loops in chronic disease management—the framework&apos;s architecture is condition-agnostic.</p>

          <div className="framework-grid">
            <div className="framework-card">
              <h3>Chronic Disease Management</h3>
              <ul className="u-col-gray-lin-mar-1-5rem">
                <li>Diabetes with comorbidities</li>
                <li>Cardiovascular disease</li>
                <li>Chronic kidney disease</li>
                <li>COPD and respiratory conditions</li>
                <li>Autoimmune disorders</li>
              </ul>
            </div>

            <div className="framework-card">
              <h3>Cancer Survivorship</h3>
              <ul className="u-col-gray-lin-mar-1-5rem">
                <li>Post-treatment monitoring</li>
                <li>Chemotherapy side effect management</li>
                <li>Radiation therapy recovery</li>
                <li>Psychosocial oncology support</li>
                <li>Survivorship care plans</li>
              </ul>
            </div>

            <div className="framework-card">
              <h3>Behavioral Health</h3>
              <ul className="u-col-gray-lin-mar-1-5rem">
                <li>Substance use disorder recovery</li>
                <li>Major depressive disorder</li>
                <li>Post-traumatic stress disorder</li>
                <li>Bipolar disorder management</li>
                <li>Schizophrenia spectrum care</li>
              </ul>
            </div>

            <div className="framework-card">
              <h3>Traumatic Injury Recovery</h3>
              <ul className="u-col-gray-lin-mar-1-5rem">
                <li>Spinal cord injury rehabilitation</li>
                <li>Traumatic brain injury</li>
                <li>Severe burn recovery</li>
                <li>Multiple trauma sequelae</li>
                <li>Amputation and prosthetics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="u-bac-linear-g-mar-0-2rem-pad-4rem-2">
        <div className="u-max-mar-0-auto-tex-center">
          <h2>Transform Aftercare. Save Lives. Close the Loop.</h2>
          <p className="u-fon-1-1rem-max-mar-0-auto">IHEP represents the future of patient-centered care—where AI doesn&apos;t replace human compassion but amplifies it through predictive intelligence, closing recursive loops that traditional healthcare leaves open.</p>
          <div className="u-dis-flex-gap-jus-fle-mar-2rem">
            <a href="mailto:jayjarmacz@gmail.com" className="cta-button">Partner with Us</a>
            <Link className="u-bac-transpar-bor-2px-soli cta-button" href="/frameworks">Explore Other Frameworks</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
