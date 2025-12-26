import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'DIPG AI Therapeutics | Jason Jarmacz',
  description: 'Revolutionary AI-driven drug discovery for Diffuse Intrinsic Pontine Glioma - designing novel brain-penetrant molecules to treat a lethal pediatric cancer with <1% survival rate.',
}

export default function DIPG() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <Link href="/" className="nav-back">← Back to Portfolio</Link>
          <div className="project-tag">Biomedical AI × Drug Discovery</div>
          <h1>DIPG Therapeutic Discovery</h1>
          <p className="subtitle">Artificial Intelligence-Driven Design of Novel Brain-Penetrant Therapeutics for Diffuse Intrinsic Pontine Glioma — A Lethal Pediatric Cancer</p>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">&lt;1%</span>
              <span className="stat-label">5-Year Survival</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">AI</span>
              <span className="stat-label">De Novo Design</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">&gt;80%</span>
              <span className="stat-label">BBB Penetration</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">12mo</span>
              <span className="stat-label">Development</span>
            </div>
          </div>
          <div className="cta-group">
            <a className="btn btn-primary" href="/docs/SBIRNovelInnovationProposal.pdf" download>Download DIPG SBIR Proposal</a>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section>
        <div className="container">
          <div className="urgency-banner">
            <h3>The Urgency: A Cancer With No Survivors</h3>
            <p className="u-col-light-fon-1-2rem-max-mar-0-auto">
              Diffuse Intrinsic Pontine Glioma (DIPG) is a rare, inoperable brainstem tumor that kills children within one year of diagnosis. Despite over <strong>200 clinical trials</strong>, no chemotherapy has succeeded. The 5-year survival rate is under 1%. This demands revolutionary, out-of-the-box innovation.
            </p>
          </div>

          <h2>The Paradigm Shift: AI-Designed Therapeutics</h2>
          <p>Traditional drug discovery relies on trial-and-error laboratory screening of thousands of compounds — a process taking years and often yielding nothing. Our approach harnesses <strong>artificial intelligence</strong> to design completely novel therapeutic molecules optimized for DIPG&apos;s unique vulnerabilities.</p>

          <p>Instead of brute-force robotic screening, we deploy generative AI models and machine learning to extrapolate from vast biomedical datasets and chemistry libraries, suggesting drug candidates that human researchers would never consider. This is <em>intelligence-guided exploration</em> of chemical space at unprecedented scale.</p>

          <div className="math-framework">
            <h4>Multi-Objective Optimization Target:</h4>
            <p className="u-tex-center-mar-1-5rem" dangerouslySetInnerHTML={{
              __html: '$$f(molecule) = w_1 \\cdot \\text{Potency}(IC_{50}) + w_2 \\cdot \\text{BBB}_{\\text{penetration}} + w_3 \\cdot (1 - \\text{Toxicity})$$'
            }} />
            <p className="text-muted">
              AI simultaneously optimizes across competing objectives: nanomolar inhibition of target (IC₅₀ &lt; 1μM), blood-brain barrier permeability (&gt;80% penetration), and minimal off-target toxicity. Traditional medicinal chemistry tackles these sequentially; AI explores the entire parameter space in silico.
            </p>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="u-bac-rgba-0-2-mar-0-2rem-pad-4rem-2-2">
        <div className="wide-container">
          <h2>The Science: Targeting DIPG&apos;s Achilles&apos; Heel</h2>

          <h3>Metabolic Vulnerability Discovery</h3>
          <p>Recent peer-reviewed research reveals that DIPG tumors harbor distinctive metabolic dependencies absent in normal pediatric brain tissue. The hallmark H3K27M histone mutation creates unique epigenetic and biosynthetic requirements that can be therapeutically exploited.</p>

          <div className="framework-grid">
            <div className="framework-card">
              <h4>Target Identification</h4>
              <ul>
                <li>DHODH enzyme (pyrimidine biosynthesis)</li>
                <li>NAD⁺ metabolism pathways</li>
                <li>De novo nucleotide synthesis addiction</li>
                <li>Epigenetic reader domain proteins</li>
                <li>H3K27M-specific vulnerabilities</li>
              </ul>
            </div>

            <div className="framework-card">
              <h4>Validation Strategy</h4>
              <ul>
                <li>siRNA/CRISPR knockdown in DIPG cell lines</li>
                <li>Patient-derived xenograft models</li>
                <li>3D tumor organoid viability assays</li>
                <li>Genomic data mining (TARGET, CBTTC)</li>
                <li>Selectivity vs. normal astrocytes</li>
              </ul>
            </div>

            <div className="framework-card">
              <h4>Blood-Brain Barrier Challenge</h4>
              <ul>
                <li>Brainstem location mandates BBB penetration</li>
                <li>Traditional CNS drug failure: &lt;2% BBB crossing</li>
                <li>AI prediction of passive permeability</li>
                <li>Active transport mechanism design</li>
                <li>Nanoparticle delivery alternatives</li>
              </ul>
            </div>
          </div>

          <div className="math-framework">
            <h4>BBB Permeability Prediction Model:</h4>
            <p className="u-col-gray-mar-1rem-0">
              AI models learn from thousands of compounds with known BBB penetration, encoding molecular features as multidimensional vectors:
            </p>
            <p className="u-tex-center-mar-1-5rem" dangerouslySetInnerHTML={{
              __html: '$$P_{BBB} = \\sigma \\left( \\sum_{i=1}^{n} w_i \\cdot \\phi_i(molecule) + b \\right)$$'
            }} />
            <p className="text-muted">
              Where φᵢ are learned molecular descriptors (lipophilicity, hydrogen bonding, polar surface area, molecular weight), wᵢ are trained weights, and σ is a sigmoid activation yielding probability of CNS penetration. Molecules scoring P_BBB &gt; 0.8 advance to synthesis.
            </p>
          </div>
        </div>
      </section>

      {/* AI Pipeline Section */}
      <section>
        <div className="container">
          <h2>The AI Drug Design Pipeline</h2>

          <div className="pipeline-visual">
            <h3 className="u-tex-center-col-light-mar-2rem">Phase I Research &amp; Development Workflow</h3>

            <div className="phase-flow">
              <div className="phase">
                <div className="phase-number">Phase 1</div>
                <div className="phase-title">Target Validation</div>
                <p className="u-col-gray-mar-0-5rem">Confirm chosen biological target drives DIPG vulnerability via in vitro genetic knockdown and pharmacological inhibition. Establish IC₅₀ threshold for efficacy.</p>
              </div>

              <div className="phase">
                <div className="phase-number">Phase 2</div>
                <div className="phase-title">AI-Driven Lead Generation</div>
                <p className="u-col-gray-mar-0-5rem">Deploy generative models (VAE, GAN, transformer-based) to design novel small molecules. Rank candidates by predicted target affinity, BBB penetration, and synthetic accessibility.</p>
              </div>

              <div className="phase">
                <div className="phase-number">Phase 3</div>
                <div className="phase-title">Medicinal Chemistry Synthesis</div>
                <p className="u-col-gray-mar-0-5rem">Synthesize top 5-10 AI-designed compounds. Characterize chemical stability, solubility, and structural confirmation via NMR/MS.</p>
              </div>

              <div className="phase">
                <div className="phase-number">Phase 4</div>
                <div className="phase-title">In Vitro Efficacy Testing</div>
                <p className="u-col-gray-mar-0-5rem">Test compounds on DIPG patient-derived cell lines and 3D organoids. Measure IC₅₀, selectivity index vs. normal cells, and mechanism of action validation.</p>
              </div>

              <div className="phase">
                <div className="phase-number">Phase 5</div>
                <div className="phase-title">Pharmacokinetics &amp; In Vivo Proof-of-Concept</div>
                <p className="u-col-gray-mar-0-5rem">Mouse PK study: measure plasma/brain tissue drug levels via LC-MS. Pilot efficacy in orthotopic DIPG xenograft: tumor volume reduction, survival extension.</p>
              </div>

              <div className="phase">
                <div className="phase-number">Phase 6</div>
                <div className="phase-title">Iterative Refinement &amp; Reporting</div>
                <p className="u-col-gray-mar-0-5rem">Feed experimental results back to AI for model retraining. Optimize lead compound for Phase II development. Compile proof-of-concept data for NCI SBIR submission.</p>
              </div>
            </div>
          </div>

          <div className="math-framework">
            <h4>Generative Model Architecture:</h4>
            <p className="u-col-gray-mar-1rem-0">
              Variational Autoencoder (VAE) or Generative Adversarial Network (GAN) learns latent representation of &quot;drug-like&quot; chemical space:
            </p>
            <p className="u-tex-center-mar-1-5rem" dangerouslySetInnerHTML={{
              __html: '$$z \\sim \\mathcal{N}(0, I), \\quad molecule = G(z; \\theta_G)$$'
            }} />
            <p className="text-muted">
              Generator G decodes random latent vector z into valid molecular SMILES strings. Discriminator or property predictor scores outputs for target inhibition and BBB permeability. Gradient ascent optimizes z to maximize desired properties, generating novel molecules outside training distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Why Transformative */}
      <section className="u-bac-rgba-123-mar-0-2rem-pad-4rem-2-2">
        <div className="wide-container">
          <h2>Why This Is Genuinely Transformative</h2>

          <div className="framework-grid">
            <div className="framework-card">
              <h4>Novel Target &amp; Modality</h4>
              <p className="text-gray">Not repurposing existing drugs — designing <em>first-in-class</em> molecules against DIPG-specific metabolic vulnerabilities. Opens entirely new therapeutic avenue where 200+ previous trials failed.</p>
            </div>

            <div className="framework-card">
              <h4>AI-Powered Discovery Paradigm</h4>
              <p className="text-gray">Unprecedented application of generative AI to pediatric oncology. Reduces discovery timeline from 5-7 years to 12-18 months. Demonstrates scalable platform for other rare cancers.</p>
            </div>

            <div className="framework-card">
              <h4>High Risk, High Reward</h4>
              <p className="text-gray">Significant risk: predicted target may not translate to patients, chemistry may fail in vivo. Commensurate reward: first effective DIPG therapy would save hundreds of children annually and revolutionize pediatric neuro-oncology.</p>
            </div>

            <div className="framework-card">
              <h4>NCI SBIR Alignment</h4>
              <p className="text-gray">Directly addresses Innovative Concept Award criteria: transformative (not incremental), novel technology (AI de novo design), high unmet need (DIPG mortality), small business commercialization pathway.</p>
            </div>
          </div>

          <h3>Broader Impact &amp; Platform Potential</h3>
          <p>Success creates replicable methodology for other pediatric and rare cancers currently neglected due to small patient populations. The AI-drug platform becomes commercializable technology licensing to pharmaceutical partners for multiple indications.</p>

          <ul className="u-col-gray-mar-2rem-0">
            <li className="u-pad-0-5rem">✓ Pediatric priority review voucher (PRV) upon FDA approval — valued at $100M+</li>
            <li className="u-pad-0-5rem">✓ Orphan drug designation expedites development and provides market exclusivity</li>
            <li className="u-pad-0-5rem">✓ AI design tools applicable to other brain tumors (GBM, ependymoma, medulloblastoma)</li>
            <li className="u-pad-0-5rem">✓ Platform extends to non-oncology CNS diseases (ALS, Alzheimer&apos;s, Parkinson&apos;s)</li>
            <li className="u-pad-0-5rem">✓ Partnership opportunities with Children&apos;s Oncology Group (COG) for clinical trials</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="cta-section">
          <h2 className="contact-item a">Partner in Pediatric Cancer Innovation</h2>
          <p className="u-max-mar-0-auto-col-gray-fon-1-1rem">
            This project represents the fusion of cutting-edge AI with urgent medical need. If you&apos;re a funding agency, pharmaceutical partner, or research institution ready to make history in pediatric oncology, let&apos;s collaborate.
          </p>
          <a href="mailto:jayjarmacz@gmail.com?subject=DIPG%20AI%20Therapeutics%20Partnership" className="cta-button">Discuss DIPG Project</a>
          <br /><br />
          <Link className="u-bac-rgba-255 cta-button" href="/">← Back to Portfolio</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
