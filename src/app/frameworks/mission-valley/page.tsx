import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Mission Valley Nexus Framework | $215M Strategic Analysis - Jason Jarmacz',
  description: 'Comprehensive multi-pathway analysis for transformative 17.38-acre property development featuring university innovation hub, faith-community partnership, and corporate life sciences campus with 194% ROI projections.',
}

export default function MissionValleyFramework() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Mission Valley Nexus</h1>
          <p className="subtitle">$215M Property Acquisition | 17.38-Acre Strategic Development | Three Transformative Pathways</p>
        </div>
      </section>

      <div className="cta-group">
        <a className="btn btn-primary" href="/docs/Mission_Valley_Property_Acquisition_Strategic_Potentials_and_Analysis.pdf" download>Download Mission Valley Playbook</a>
      </div>

      {/* Executive Overview */}
      <section>
        <div className="container">
          <h2>Executive Overview</h2>
          <p>The Mission Valley Nexus represents a singular convergence of undervalued real estate, institutional demand, and strategic location. The 875 Hotel Circle South property—a 17.38-acre, LEED Gold certified, purpose-built facility completed in 2020—presents three distinct acquisition pathways, each with comprehensive financial modeling, regulatory strategy, and transformative potential for San Diego&apos;s innovation economy.</p>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">$215M</span>
              <span className="stat-label">Asset Acquisition Price</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">17.38</span>
              <span className="stat-label">Acres Prime Location</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">216K</span>
              <span className="stat-label">Square Feet Class A</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">4.89×</span>
              <span className="stat-label">30-Year Equity Multiple</span>
            </div>
          </div>

          <p><strong>The Strategic Advantage:</strong> Acquiring at ~$12.4M per acre (versus La Jolla&apos;s $40M+/acre) with turnkey infrastructure eliminates 5-7 years of development timeline and hundreds of millions in construction costs.</p>
        </div>
      </section>

      {/* Three Pathways Overview */}
      <section className="u-bac-rgba-255-mar-0-2rem-pad-4rem-2-2">
        <div className="wide-container">
          <h2>Three Strategic Acquisition Pathways</h2>
          <p>Each pathway represents a fully-diligenced, financially-modeled development strategy with distinct stakeholder value propositions, capital structures, and 30-year exit scenarios.</p>

          <div className="pathway-grid">
            <div className="pathway-card">
              <h3>Pathway 1: UC San Diego Innovation Hub</h3>
              <p><strong>Primary Anchor:</strong> School of Computing, Information &amp; Data Sciences (SCIDS) + San Diego Supercomputer Center (SDSC)</p>
              <p><strong>Core Innovation:</strong> &quot;Architecture-as-a-Service&quot; (AaaS) model converting CapEx to OpEx, enabling metered access for departments, researchers, and external partners.</p>
              <ul className="u-col-gray-lin-mar-1rem-0">
                <li><strong>Acquisition Cost:</strong> $215M</li>
                <li><strong>Timeline to Occupancy:</strong> &lt;12 months</li>
                <li><strong>Housing Solution:</strong> 126 hotel rooms → graduate student housing</li>
                <li><strong>30-Year Value-Add:</strong> $280-410M (with nuclear integration)</li>
              </ul>
            </div>

            <div className="pathway-card">
              <h3>Pathway 2: Faith-Based Community Uplift</h3>
              <p><strong>Primary Anchor:</strong> Rock Church San Diego + San Diego Housing Commission hybrid partnership</p>
              <p><strong>Core Innovation:</strong> Optimal Hybrid Model combining ministry continuity with 350-400 affordable housing units.</p>
              <ul className="u-col-gray-lin-mar-1rem-0">
                <li><strong>Acquisition Model:</strong> Joint LLC (SDHC + Rock Church)</li>
                <li><strong>Affordable Housing:</strong> 350-400 units (50-80% AMI)</li>
                <li><strong>Ministry Operations:</strong> 500-seat sanctuary, K-12 school, community services</li>
                <li><strong>Social Outcome:</strong> 25% better than secular-only model</li>
              </ul>
            </div>

            <div className="pathway-card">
              <h3>Pathway 3: Corporate Life Sciences Campus</h3>
              <p><strong>Primary Targets:</strong> Illumina BioInsight Innovation Campus ($567M) or Novartis Biomedical Research Hub ($647M)</p>
              <p><strong>Core Innovation:</strong> Turnkey R&amp;D campus achieving 40%+ capital savings versus traditional build-to-suit.</p>
              <ul className="u-col-gray-lin-mar-1rem-0">
                <li><strong>Illumina Total Investment:</strong> $567.4M (430K SF, 40-month timeline)</li>
                <li><strong>Job Creation:</strong> 850-1,000+ high-wage positions</li>
                <li><strong>30-Year Economic Impact:</strong> $951M-$1.1B</li>
                <li><strong>30-Year ROI:</strong> 147-194%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Framework */}
      <section id="financial-framework">
        <div className="container">
          <h2>Foundational Financial Framework: 30-Year Investment Thesis</h2>
          <p>Underpinning all three pathways is a sophisticated capital stack strategy and long-term value creation model applicable across diverse development scenarios.</p>

          <div className="math-framework">
            <h4>Net Present Value (NPV) of Property Investment</h4>
            <p className="my-1">The NPV calculation discounts all future cash flows to present value:</p>
            <p className="cta-note" dangerouslySetInnerHTML={{
              __html: '$$NPV = -I_0 + \\sum_{t=1}^{30} \\frac{CF_t}{(1 + r)^t} + \\frac{TV}{(1 + r)^{30}}$$'
            }} />
            <p className="u-col-gray-mar-1rem">Where:</p>
            <ul className="u-col-gray-mar-2rem-lin">
              <li><strong>I<sub>0</sub></strong> = Initial acquisition investment ($215,000,000)</li>
              <li><strong>CF<sub>t</sub></strong> = Net operating income in year t (revenue - operating expenses)</li>
              <li><strong>r</strong> = Discount rate (typically 8-12% for real estate development)</li>
              <li><strong>TV</strong> = Terminal value at year 30 (exit valuation: $399.6M at 5.5% cap rate)</li>
            </ul>
          </div>

          <div className="math-framework">
            <h4>Internal Rate of Return (IRR) Calculation</h4>
            <p className="my-1">The IRR represents the discount rate at which NPV = 0:</p>
            <p className="cta-note" dangerouslySetInnerHTML={{
              __html: '$$0 = -I_0 + \\sum_{t=1}^{30} \\frac{CF_t}{(1 + IRR)^t} + \\frac{TV}{(1 + IRR)^{30}}$$'
            }} />
            <p className="u-col-gray-mar-1rem">Solving iteratively for IRR yields:</p>
            <ul className="u-col-gray-mar-2rem-lin">
              <li><strong>Unlevered IRR:</strong> 12.5% (entire project, no debt)</li>
              <li><strong>Levered IRR (50% LTV):</strong> 16.8% (equity investors)</li>
              <li><strong>Sponsor IRR (20% common equity):</strong> 18-25% (after pref stack payoff)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="u-bac-linear-g-mar-0-2rem-pad-4rem-2-2">
        <div className="u-max-mar-0-auto-tex-center">
          <h2>Transform Communities. Create Legacy Assets. Generate Category-Defining Returns.</h2>
          <p className="u-fon-1-1rem-max-mar-0-auto">The Mission Valley Nexus demonstrates what&apos;s possible when strategic vision meets financial rigor and community-centered development. Three pathways. One transformative property. Infinite potential.</p>
          <div className="u-dis-flex-gap-jus-fle-mar-2rem">
            <a href="mailto:jayjarmacz@gmail.com" className="cta-button">Partner on Your Next Development</a>
            <Link className="u-bac-transpar-bor-2px-soli-2 cta-button" href="/frameworks">Explore Other Frameworks</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
