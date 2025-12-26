import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'DIPG AI Therapeutics Framework | AI-Driven Drug Discovery - Jason Jarmacz',
  description: 'Revolutionary machine learning approach to Diffuse Intrinsic Pontine Glioma—designing novel brain-penetrant therapeutics targeting metabolic vulnerabilities with AI-powered molecular optimization.',
}

export default function DIPGFramework() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="tag-line">Biomedical AI × Drug Discovery × Pediatric Oncology</div>
          <h1>AI-Driven DIPG Therapeutics</h1>
          <p className="subtitle">Revolutionary Machine Learning Approach to Diffuse Intrinsic Pontine Glioma—Designing Novel Brain-Penetrant Molecules Targeting Metabolic Vulnerabilities</p>
        </div>
      </section>

      <div className="cta-group">
        <a className="btn btn-primary" href="/docs/SBIRNovelInnovationProposal.pdf" download>Download DIPG SBIR Proposal</a>
      </div>

      {/* The Crisis */}
      <section>
        <div className="container">
          <h2>The Unmet Need: A Lethal Pediatric Cancer With No Effective Treatment</h2>

          <div className="warning-box">
            <p className="u-col-light-fon-600-mar-1rem">The Grim Reality</p>
            <p><strong>Diffuse Intrinsic Pontine Glioma (DIPG)</strong> is a rare, inoperable childhood brainstem tumor that has defeated over 200 clinical trials. Despite decades of research, no chemotherapy has succeeded against DIPG. The 5-year survival rate is under 1%. DIPG typically kills children within 12 months of diagnosis.</p>
          </div>

          <p>This devastating outcome underscores the desperate need for <strong>out-of-the-box innovations</strong> in pediatric oncology. The NCI&apos;s SBIR Innovative Concept Award specifically seeks high-risk, high-reward ideas that could transform care for pediatric or rare cancers.</p>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">&lt;1%</span>
              <span className="stat-label">5-Year Survival Rate</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">200+</span>
              <span className="stat-label">Failed Clinical Trials</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">12mo</span>
              <span className="stat-label">Median Survival</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">300</span>
              <span className="stat-label">U.S. Children/Year</span>
            </div>
          </div>

          <h3>Why Traditional Approaches Have Failed</h3>

          <div className="framework-grid">
            <div className="framework-card">
              <h4>Inoperable Location</h4>
              <p className="text-gray">Located in the brainstem (pons), DIPG cannot be surgically removed without causing catastrophic neurological damage. Biopsy is high-risk, limiting tissue availability for research.</p>
            </div>

            <div className="framework-card">
              <h4>Blood-Brain Barrier</h4>
              <p className="text-gray">Most chemotherapy agents cannot cross the BBB in therapeutic concentrations. Even systemically toxic doses fail to reach the tumor effectively.</p>
            </div>

            <div className="framework-card">
              <h4>Unique Biology</h4>
              <p className="text-gray">DIPG&apos;s hallmark H3K27M mutation creates a distinct epigenetic landscape. Adult glioblastoma drugs fail because DIPG&apos;s molecular dependencies differ fundamentally.</p>
            </div>

            <div className="framework-card">
              <h4>Pediatric Specificity</h4>
              <p className="text-gray">DIPG occurs almost exclusively in children (peak age 6-7 years). Developing brain tissue responds differently to therapies than adult tumors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solution */}
      <section className="u-bac-rgba-123-mar-0-2rem-pad-4rem-2">
        <div className="wide-container">
          <h2>The Paradigm Shift: AI-Guided De Novo Drug Design</h2>

          <p>Rather than screening existing compounds or making incremental modifications, we propose a <strong>fundamentally new technique</strong>: using artificial intelligence to design completely novel therapeutic molecules from scratch, optimized specifically for DIPG&apos;s unique vulnerabilities.</p>

          <div className="success-box">
            <h4 className="contact-item a">Why This Is Transformative:</h4>
            <ul className="u-col-gray-lin">
              <li><strong>AI-powered creativity</strong>: Generative models explore chemical space beyond human intuition, discovering structures no medicinal chemist would propose</li>
              <li><strong>Simultaneous multi-objective optimization</strong>: AI designs molecules that hit the target, cross the BBB, and minimize toxicity—all in parallel</li>
              <li><strong>Velocity advantage</strong>: AI-designed drug candidates have reached human trials in 12-18 months vs. 5-10 years for traditional discovery</li>
              <li><strong>Unprecedented for pediatric cancer</strong>: AI drug design has never been applied to childhood brain tumors—this is a first-in-class approach</li>
            </ul>
          </div>

          <h3>Targeting DIPG&apos;s Metabolic Achilles&apos; Heel</h3>

          <div className="framework-grid">
            <div className="framework-card">
              <h4>NAD⁺ Metabolism Vulnerability</h4>
              <p className="text-gray">DIPG cells show aberrant reliance on NAD⁺-dependent pathways for energy production and survival. Drug combinations exploiting this weakness have shown tumor cell-selective killing in vitro.</p>
            </div>

            <div className="framework-card">
              <h4>De Novo Nucleotide Synthesis</h4>
              <p className="text-gray">H3K27M mutation drives elevated pyrimidine biosynthesis requirements. DHODH (dihydroorotate dehydrogenase) inhibition shows promise in preclinical models.</p>
              <p className="u-col-primary-fon-700-mar-1rem">Primary Target Candidate</p>
            </div>

            <div className="framework-card">
              <h4>Epigenetic Dependencies</h4>
              <p className="text-gray">The H3K27M mutation creates unique chromatin structure requiring specific histone demethylases and methyltransferases—targetable enzymes not critical in normal brain tissue.</p>
            </div>

            <div className="framework-card">
              <h4>Oncogenic Pathway Addiction</h4>
              <p className="text-gray">DIPG exhibits aberrant activation of PI3K/AKT and MAPK signaling. Novel multi-kinase inhibitors designed for BBB penetration could simultaneously disrupt multiple dependencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mathematical Framework */}
      <section>
        <div className="container">
          <h2>Multi-Objective Optimization Framework</h2>

          <div className="math-framework">
            <h4>Drug Candidate Scoring Function:</h4>
            <p className="cta-note" dangerouslySetInnerHTML={{
              __html: '$$f(molecule) = w_1 \\cdot \\text{Potency}(IC_{50}) + w_2 \\cdot \\text{BBB}_{\\text{penetration}} + w_3 \\cdot (1 - \\text{Toxicity})$$'
            }} />
            <p className="text-muted">
              AI simultaneously optimizes across competing objectives: nanomolar inhibition of target (IC₅₀ &lt; 1μM), blood-brain barrier permeability (&gt;80% penetration), and minimal off-target toxicity.
            </p>
          </div>

          <div className="math-framework">
            <h4>Generative Model Architecture:</h4>
            <p className="cta-note" dangerouslySetInnerHTML={{
              __html: '$$z \\sim \\mathcal{N}(0, I), \\quad molecule = G(z; \\theta_G)$$'
            }} />
            <p className="text-muted">
              Generator G decodes random latent vector z into valid molecular SMILES strings. Discriminator or property predictor scores outputs for target inhibition and BBB permeability. Gradient ascent optimizes z to maximize desired properties, generating novel molecules outside training distribution.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="contact-heading">Partner in Pediatric Cancer Innovation</h2>
        <p className="u-fon-1-1rem-mar-2rem">
          This project represents the fusion of cutting-edge AI with urgent medical need. If you&apos;re a funding agency, pharmaceutical partner, or research institution ready to make history in pediatric oncology, let&apos;s collaborate.
        </p>
        <a href="mailto:jayjarmacz@gmail.com?subject=DIPG%20AI%20Therapeutics%20Partnership" className="cta-button">Discuss DIPG Project</a>
        <Link href="/frameworks" className="u-bac-transpar-bor-2px-soli cta-button">View All Frameworks</Link>
      </section>

      <Footer />
    </>
  )
}
