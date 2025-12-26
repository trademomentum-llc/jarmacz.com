import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Mission Valley Nexus | $215M Strategic Acquisition Analysis - Jason Jarmacz',
  description: 'Comprehensive multi-pathway analysis for transformative 17.38-acre Mission Valley property development featuring UCSD innovation hub, faith-community partnership, and corporate life sciences campus scenarios with 194% ROI projections.',
}

export default function MissionValley() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Mission Valley Nexus</h1>
          <p className="subtitle">
            Strategic Multi-Pathway Analysis for Transformative $215M Property Acquisition in San Diego&apos;s Innovation Corridor
          </p>

          <div className="property-specs">
            <div className="spec-box">
              <span className="spec-value">$215M</span>
              <span className="spec-label">Asset Value</span>
            </div>
            <div className="spec-box">
              <span className="spec-value">17.38</span>
              <span className="spec-label">Acres</span>
            </div>
            <div className="spec-box">
              <span className="spec-value">216K</span>
              <span className="spec-label">Sq Ft Building</span>
            </div>
            <div className="spec-box">
              <span className="spec-value">4.89×</span>
              <span className="spec-label">Equity Multiple</span>
            </div>
            <div className="spec-box">
              <span className="spec-value">18-25%</span>
              <span className="spec-label">Sponsor IRR</span>
            </div>
            <div className="spec-box">
              <span className="spec-value">$1.1B+</span>
              <span className="spec-label">Economic Impact</span>
            </div>
          </div>
          <div className="cta-group">
            <a className="btn btn-primary" href="/docs/Mission_Valley_Property_Acquisition_Strategic_Potentials_and_Analysis.pdf" download>Download Mission Valley Analysis</a>
          </div>
        </div>
      </section>

      {/* Executive Overview */}
      <section id="overview">
        <div className="container">
          <h2>Executive Overview</h2>
          <p className="u-tex-center-col-gray-max-mar-0-auto-fon-1-1rem">
            This comprehensive analysis synthesizes strategic, operational, and financial frameworks for the acquisition of 875 Hotel Circle South—a turnkey, LEED Gold certified property presenting unprecedented opportunity across academic, faith-community, and corporate life sciences sectors.
          </p>

          <div className="benefits-grid">
            <div className="benefit-item">
              <h4 className="u-col-light-mar-0-5rem">Strategic Location</h4>
              <p className="u-col-gray-fon-0-9rem">Mission Valley Innovation Corridor with direct trolley access and I-8/I-805 proximity</p>
            </div>
            <div className="benefit-item">
              <h4 className="u-col-light-mar-0-5rem">Rapid Deployment</h4>
              <p className="u-col-gray-fon-0-9rem">Beneficial occupancy in &lt;12 months vs. 5-7+ years for new construction</p>
            </div>
            <div className="benefit-item">
              <h4 className="u-col-light-mar-0-5rem">Cost Advantage</h4>
              <p className="u-col-gray-fon-0-9rem">~$12.4M/acre vs. La Jolla&apos;s $40M+/acre; 40%+ capital savings vs. build-to-suit</p>
            </div>
            <div className="benefit-item">
              <h4 className="u-col-light-mar-0-5rem">Turnkey Infrastructure</h4>
              <p className="u-col-gray-fon-0-9rem">Commercial HVAC, robust power, 126 hotel rooms ready for adaptive reuse</p>
            </div>
            <div className="benefit-item">
              <h4 className="u-col-light-mar-0-5rem">Sustainability</h4>
              <p className="u-col-gray-fon-0-9rem">LEED Gold certified, adaptive reuse showcases environmental leadership</p>
            </div>
            <div className="benefit-item">
              <h4 className="u-col-light-mar-0-5rem">Proven ROI</h4>
              <p className="u-col-gray-fon-0-9rem">194% ROI (Illumina), 147% ROI (Novartis), 1000+ jobs created across scenarios</p>
            </div>
          </div>

          <div className="math-framework">
            <h4>30-Year Investment Thesis</h4>
            <p className="u-tex-center-mar-1-5rem" dangerouslySetInnerHTML={{
              __html: '$$\\text{Equity Multiple} = \\frac{\\text{Exit Valuation} + \\text{Cumulative Cash Flow}}{\\text{Initial Equity}} = \\frac{\\$399.6M + \\$347M}{\\$70.95M} = 4.89\\times$$'
            }} />
            <p className="u-col-gray-tex-center">
              <strong className="text-primary">Sponsor IRR:</strong> 18-25% on 20% common equity position<br />
              <strong className="text-primary">Exit Cap Rate:</strong> 5.5% | <strong className="text-primary">Total Return:</strong> $347M net profit
            </p>
          </div>
        </div>
      </section>

      {/* Acquisition Pathways */}
      <section id="pathways">
        <div className="container">
          <h2>Three Strategic Acquisition Pathways</h2>
          <p className="u-tex-center-col-gray-max-mar-0-auto-fon-1-1rem">
            Each pathway leverages the property&apos;s unique attributes to address critical institutional needs while maximizing economic and social impact through innovative financial and operational models.
          </p>

          <div className="pathways-grid">
            {/* Pathway 1: UCSD */}
            <div className="pathway-card">
              <span className="pathway-tag">Academic Innovation</span>
              <h3>UC San Diego Innovation Hub</h3>
              <p>
                Revolutionary <strong>&quot;Architecture-as-a-Service&quot;</strong> model transforming the property into a multi-sector research and innovation hub anchored by the School of Computing, Information &amp; Data Sciences (SCIDS) and San Diego Supercomputer Center.
              </p>

              <div className="pathway-metrics">
                <div className="metric-item">
                  <span className="metric-value">&lt;12mo</span>
                  <span className="metric-label">To Occupancy</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">$28M</span>
                  <span className="metric-label">Annual Savings</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">126</span>
                  <span className="metric-label">Grad Housing Units</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">10K</span>
                  <span className="metric-label">AI Compute GPUs</span>
                </div>
              </div>
            </div>

            {/* Pathway 2: Faith-Based */}
            <div className="pathway-card">
              <span className="pathway-tag">Community + Ministry</span>
              <h3>Faith-Based Community Uplift</h3>
              <p>
                Leveraging the property&apos;s purpose-built Christian ministry infrastructure (Morris Cerullo Legacy International Center) for acquisition by Rock Church San Diego, with optimal hybrid model combining ministry headquarters and 350-400 affordable housing units.
              </p>

              <div className="pathway-metrics">
                <div className="metric-item">
                  <span className="metric-value">$90M</span>
                  <span className="metric-label">Ministry Infrastructure</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">350-400</span>
                  <span className="metric-label">Affordable Units</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">500</span>
                  <span className="metric-label">Seat Theater</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">$5M</span>
                  <span className="metric-label">Annual Savings</span>
                </div>
              </div>
            </div>

            {/* Pathway 3: Corporate Life Sciences */}
            <div className="pathway-card">
              <span className="pathway-tag">Life Sciences R&amp;D</span>
              <h3>Corporate Innovation Campus</h3>
              <p>
                Positioning as premier R&amp;D hub for global life sciences leaders, with comprehensive development charters and LOIs prepared for both Illumina ($567M BioInsight Innovation Campus) and Novartis ($647M Biomedical Research Hub).
              </p>

              <div className="pathway-metrics">
                <div className="metric-item">
                  <span className="metric-value">40%+</span>
                  <span className="metric-label">Capital Savings</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">1,850+</span>
                  <span className="metric-label">Total Jobs</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">$2.05B</span>
                  <span className="metric-label">Combined Economic Impact</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">194%</span>
                  <span className="metric-label">Max ROI (Illumina)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact">
        <div className="cta-section">
          <h2 className="u-mar-1-5rem-2">Transform Strategic Vision into Measurable Reality</h2>
          <p className="u-col-gray-fon-1-2rem-max-mar-0-auto">
            Whether architecting university innovation hubs, structuring complex public-private partnerships, or modeling corporate R&amp;D campus development—the Mission Valley Nexus demonstrates comprehensive mastery of multi-stakeholder strategic planning, financial engineering, and execution.
          </p>

          <div className="mt-3">
            <a href="mailto:jayjarmacz@gmail.com?subject=Mission%20Valley%20Strategic%20Consultation" className="cta-button">
              Schedule Strategic Consultation
            </a>
            <Link className="u-bac-rgba-255 cta-button" href="/">
              View Full Portfolio
            </Link>
          </div>

          <div className="u-mar-3rem-pad-2rem-bor">
            <p className="text-gray">
              <strong>Jason Jarmacz</strong> | NeuroDivergent AI Evolution Strategist<br />
              jayjarmacz@gmail.com | (917) 566-8112 | <a className="text-primary" href="https://linkedin.com/in/omniunum">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
