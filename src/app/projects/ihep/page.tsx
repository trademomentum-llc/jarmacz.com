import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'IHEP Framework | Integrated Health Empowerment Program - Jason Jarmacz',
  description: 'IHEP - Integrated Health Empowerment Program: AI-powered comprehensive healthcare platform for HIV/AIDS care with NIST AI RMF 1.0 compliance and Zero Trust security architecture.',
}

export default function IHEP() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero u-min-pad-120px-pad-60px">
        <div className="container">
          <div className="u-tex-center-max-mar-0-auto">
            <div className="paper-tag u-dis-inline-mar-20px">Healthcare AI / NIST AI RMF 1.0 Compliant</div>
            <h1 className="u-fon-3-5rem-col-neutral-mar-25px-lin">
              IHEP: Integrated Health Empowerment Program
            </h1>
            <p className="u-fon-1-4rem-col-accent-c-mar-30px-lin">
              AI-powered comprehensive healthcare platform for HIV/AIDS care with Zero Trust security, patient digital twins, and 10-year roadmap to functional cure
            </p>
            <div className="u-dis-flex-gap-jus-fle-mar-40px">
              <div>
                <div className="u-fon-2-5rem-fon-bold-col-primary-">350-5K</div>
                <div className="contact-item a">Patient Capacity (Scalable)</div>
              </div>
              <div>
                <div className="u-fon-2-5rem-fon-bold-col-primary-">≥95%</div>
                <div className="contact-item a">Viral Suppression Target</div>
              </div>
              <div>
                <div className="u-fon-2-5rem-fon-bold-col-primary-">35%</div>
                <div className="contact-item a">Care Cost Reduction</div>
              </div>
              <div>
                <div className="u-fon-2-5rem-fon-bold-col-primary-">100%</div>
                <div className="contact-item a">NIST AI RMF Compliant</div>
              </div>
            </div>
            <div className="cta-group">
              <a className="btn btn-primary" href="/docs/IHEP_Executive_Summary.pdf" download>Download IHEP Executive Summary</a>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="u-pad-40px-0-bac-rgba-0-0">
        <div className="container">
          <h2 className="u-col-neutral-mar-20px-tex-center">Framework Documentation Index</h2>
          <div className="u-dis-grid-gri-gap-max-mar-0-auto">
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#executive-summary">Executive Summary</a>
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#nist-compliance">NIST Compliance Architecture</a>
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#digital-twin">Patient Digital Twin</a>
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#generative-bioai">Generative Bio-AI</a>
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#community-integration">Community Integration</a>
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#funding-roadmap">Funding Roadmap</a>
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#cure-milestones">10-Year Cure Roadmap</a>
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#technical-architecture">Technical Architecture</a>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="u-pad-80px-0 frameworks" id="executive-summary">
        <div className="container">
          <div className="framework-item">
            <h2 className="u-fon-2-5rem-col-neutral-mar-30px">Executive Summary</h2>

            <p className="u-col-neutral-fon-1-1rem-lin-mar-25px">
              The Integrated Health Empowerment Program (IHEP) is a comprehensive AI-powered healthcare platform targeting HIV/AIDS care with a dual mission:
            </p>

            <div className="u-dis-grid-gri-gap-mar-30px-0">
              <div className="u-bac-rgba-0-2-bor-pad-25px-bor">
                <h3 className="u-col-primary-mar-15px">Near-Term Mission (Years 0-3)</h3>
                <p className="u-col-neutral-lin">
                  Optimize existing HIV care through <strong>Patient Digital Twins</strong>, predictive analytics, and community-integrated support systems. Target: <strong>≥95% viral suppression</strong> (vs 87% national average) with <strong>35% cost reduction</strong> per patient annually.
                </p>
              </div>
              <div className="u-bac-rgba-123-bor-pad-25px-bor">
                <h3 className="u-col-primary-mar-15px-2">Long-Term Vision (Years 4-10)</h3>
                <p className="u-col-neutral-lin">
                  Leverage accumulated patient data and <strong>Generative Bio-AI</strong> to discover novel therapeutic agents targeting HIV latency. Goal: <strong>Functional cure</strong> (undetectable viral load without antiretroviral therapy) for at least 30% of patients by Year 10.
                </p>
              </div>
            </div>

            <div className="u-bac-rgba-255-bor-2px-soli-pad-30px-bor-mar-40p">
              <h3 className="u-col-accent-m-mar-20px">IHEP&apos;s Unique Value Proposition</h3>
              <ul className="card-features u-fon-1-05re">
                <li><strong>NIST AI RMF 1.0 Compliance:</strong> First HIV care platform with full NIST AI Risk Management Framework adherence, enabling federal contracts and reducing regulatory risk</li>
                <li><strong>Zero Trust Architecture:</strong> NIST SP 800-207 implementation ensures FBI CJIS-level security, critical for handling sensitive health records</li>
                <li><strong>Recursive Learning Loop:</strong> Patient digital twins continuously update from clinical observations, creating ever-improving predictive models</li>
                <li><strong>Dual Revenue Streams:</strong> Near-term care optimization (B2B SaaS to clinics) + long-term therapeutic IP (pharma licensing)</li>
                <li><strong>Community-Centric Design:</strong> Peer navigator integration and culturally-tailored interventions drive engagement rates 40% higher than traditional clinic models</li>
              </ul>
            </div>

            {/* Key Impact Metrics */}
            <div className="u-bac-rgba-0-0-pad-25px-bor-mar-30px-0">
              <h4 className="u-col-neutral-mar-20px">Quantifiable Impact Metrics</h4>
              <div className="u-dis-grid-gri-gap">
                <div>
                  <div className="u-col-accent-c-fon-2rem-fon-bold">≥95%</div>
                  <div className="paper-date">Viral suppression rate (vs 87% national avg)</div>
                </div>
                <div>
                  <div className="u-col-accent-c-fon-2rem-fon-bold">35%</div>
                  <div className="paper-date">Care cost reduction per patient annually</div>
                </div>
                <div>
                  <div className="u-col-accent-c-fon-2rem-fon-bold">40%</div>
                  <div className="paper-date">Higher engagement vs traditional clinics</div>
                </div>
                <div>
                  <div className="u-col-accent-c-fon-2rem-fon-bold">85%</div>
                  <div className="paper-date">Medication adherence rate (vs 65% baseline)</div>
                </div>
                <div>
                  <div className="u-col-accent-c-fon-2rem-fon-bold">100%</div>
                  <div className="paper-date">NIST AI RMF + Zero Trust compliant</div>
                </div>
                <div>
                  <div className="u-col-accent-c-fon-2rem-fon-bold">5,000+</div>
                  <div className="paper-date">Patient capacity by Year 3</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NIST Compliance Architecture */}
      <section className="u-pad-80px-0-bac-linear-g frameworks" id="nist-compliance">
        <div className="container">
          <div className="framework-item">
            <h2 className="u-fon-2-5rem-col-neutral-mar-30px">NIST AI RMF 1.0 Compliance Architecture</h2>

            <p className="u-col-neutral-fon-1-1rem-lin-mar-40px">
              IHEP is built on the NIST AI Risk Management Framework (AI RMF 1.0), a voluntary consensus standard for managing AI risks across governance, mapping, measurement, and management dimensions. This framework, combined with Zero Trust security (NIST SP 800-207), positions IHEP as the most secure and compliant HIV care AI platform available.
            </p>

            <div className="u-mar-60px">
              <h3 className="u-col-primary-fon-2rem-mar-25px">NIST AI RMF 1.0: Four Core Functions</h3>

              <div className="u-dis-grid-gri-gap-2">
                <div className="u-bac-rgba-0-2-bor-2px-soli-pad-25px-bor">
                  <h4 className="u-col-primary-mar-15px">1. GOVERN</h4>
                  <p className="u-col-neutral-mar-15px-fon-0-95re">
                    <strong>Definition:</strong> Establish AI governance structure, policies, and oversight mechanisms
                  </p>
                  <p className="u-col-accent-c-fon-bold-mar-10px">IHEP Implementation:</p>
                  <ul className="card-features u-fon-0-9rem-col-neutral-">
                    <li>AI Governance Board with clinical, technical, and ethics representatives</li>
                    <li>Documented AI risk appetite statement approved by executive leadership</li>
                    <li>Quarterly AI risk assessment reviews with board reporting</li>
                    <li>Clear accountability: Chief Medical Officer owns clinical safety, CTO owns technical security</li>
                  </ul>
                </div>

                <div className="u-bac-rgba-123-bor-2px-soli-pad-25px-bor">
                  <h4 className="u-col-primary-mar-15px-2">2. MAP</h4>
                  <p className="u-col-neutral-mar-15px-fon-0-95re">
                    <strong>Definition:</strong> Context identification, impact analysis, and risk categorization
                  </p>
                  <p className="u-col-accent-c-fon-bold-mar-10px">IHEP Implementation:</p>
                  <ul className="card-features u-fon-0-9rem-col-neutral-">
                    <li><strong>Context:</strong> High-stakes medical decision support for HIV care (life-threatening if system fails)</li>
                    <li><strong>Impact Analysis:</strong> False negative (missing viral rebound) = patient harm; false positive = unnecessary treatment intensification</li>
                    <li><strong>Risk Categories:</strong> Clinical safety (highest), data privacy (high), algorithmic bias (high)</li>
                  </ul>
                </div>

                <div className="u-bac-rgba-255-bor-2px-soli-pad-25px-bor">
                  <h4 className="u-col-accent-m-mar-15px">3. MEASURE</h4>
                  <p className="u-col-neutral-mar-15px-fon-0-95re">
                    <strong>Definition:</strong> Track AI performance metrics, bias, and safety indicators
                  </p>
                  <p className="u-col-accent-c-fon-bold-mar-10px">IHEP Implementation:</p>
                  <ul className="card-features u-fon-0-9rem-col-neutral-">
                    <li><strong>Performance:</strong> AUC-ROC ≥0.90 for viral rebound prediction, calibrated probability scores</li>
                    <li><strong>Bias Detection:</strong> Monthly fairness audits across race, gender, age, socioeconomic status</li>
                    <li><strong>Safety Monitoring:</strong> Real-time anomaly detection for model drift, automatic rollback if accuracy drops &gt;10%</li>
                  </ul>
                </div>

                <div className="u-bac-rgba-0-2-bor-2px-soli-pad-25px-bor-2">
                  <h4 className="u-col-accent-c-mar-15px">4. MANAGE</h4>
                  <p className="u-col-neutral-mar-15px-fon-0-95re">
                    <strong>Definition:</strong> Incident response, continuous improvement, documentation
                  </p>
                  <p className="u-col-accent-c-fon-bold-mar-10px">IHEP Implementation:</p>
                  <ul className="card-features u-fon-0-9rem-col-neutral-">
                    <li><strong>Incident Response:</strong> 24/7 on-call rotation for critical AI failures, &lt;1 hour escalation SLA</li>
                    <li><strong>Root Cause Analysis:</strong> Post-incident review with corrective action plan (CAP) for all safety events</li>
                    <li><strong>Continuous Improvement:</strong> Quarterly model retraining with expanded datasets, A/B testing of algorithm updates</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="u-pad-80px-0-bac-linear-g-3">
        <div className="container metric">
          <h2 className="u-fon-2-5rem-col-neutral-mar-20px">Join the Mission to End HIV/AIDS</h2>
          <p className="u-fon-1-2rem-col-neutral-max-mar-0-auto">
            Whether you&apos;re a clinical partner, investor, or academic researcher, there&apos;s a role for you in making IHEP&apos;s vision a reality.
          </p>
          <div className="u-dis-flex-gap-jus-fle">
            <Link className="u-fon-1-1rem-pad-15px-4 btn btn-primary" href="/#contact">
              Request Full IHEP Framework Documentation
            </Link>
            <Link className="u-fon-1-1rem-pad-15px-4 btn btn-secondary" href="/projects">
              Back to Projects Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
