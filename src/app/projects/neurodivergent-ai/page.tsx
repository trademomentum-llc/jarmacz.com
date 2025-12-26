import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'NeuroDivergent AI Platform | Technical Deep Dive - Jason Jarmacz',
  description: 'NeuroDivergent AI Platform - Revolutionary Brain-Computer Interface with Human-as-the-Loop AI Alignment. Comprehensive technical documentation for BCI symbiosis.',
}

export default function NeuroDivergentAI() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero u-min-pad-120px-pad-60px">
        <div className="container">
          <div className="u-tex-center-max-mar-0-auto">
            <div className="paper-tag u-dis-inline-mar-20px">Brain-Computer Interface / AI Alignment</div>
            <h1 className="u-fon-3-5rem-col-neutral-mar-25px-lin">
              NeuroDivergent AI Platform
            </h1>
            <p className="u-fon-1-4rem-col-accent-c-mar-30px-lin">
              Revolutionary brain-computer interface enabling direct neural communication while pioneering Human-as-the-Loop AI alignment framework
            </p>
            <div className="u-dis-flex-gap-jus-fle-mar-40px">
              <div>
                <div className="u-fon-2-5rem-fon-bold-col-primary-">$12.5B</div>
                <div className="contact-item a">Market Opportunity</div>
              </div>
              <div>
                <div className="u-fon-2-5rem-fon-bold-col-primary-">400K</div>
                <div className="contact-item a">Target Patient Population</div>
              </div>
              <div>
                <div className="u-fon-2-5rem-fon-bold-col-primary-">87%</div>
                <div className="contact-item a">AI Alignment Risk Reduction</div>
              </div>
              <div>
                <div className="u-fon-2-5rem-fon-bold-col-primary-">80</div>
                <div className="contact-item a">Words/Min Communication</div>
              </div>
            </div>
            <div className="cta-group">
              <a className="btn btn-primary" href="/docs/NeuroDivergent_AI.pdf" download>Download Full Proposal (PDF)</a>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="u-pad-40px-0-bac-rgba-0-0">
        <div className="container">
          <h2 className="u-col-neutral-mar-20px-tex-center">Technical Documentation Index</h2>
          <div className="u-dis-grid-gri-gap-max-mar-0-auto">
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#executive-summary">Executive Summary</a>
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#mathematical-foundations">Mathematical Foundations</a>
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#technology-stack">Technology Stack</a>
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#clinical-proof">Clinical Proof Points</a>
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#safety-ethics">Safety &amp; Ethics</a>
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#development-roadmap">Development Roadmap</a>
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#competitive-analysis">Competitive Positioning</a>
            <a className="u-pad-12px-2-bac-rgba-0-2-bor-1px-soli-bor-col-n" href="#investment-opportunity">Investment Opportunity</a>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="u-pad-80px-0 frameworks" id="executive-summary">
        <div className="container">
          <div className="framework-item">
            <h2 className="u-fon-2-5rem-col-neutral-mar-30px">Executive Summary</h2>

            <p className="u-col-neutral-fon-1-1rem-lin-mar-25px">
              The NeuroDivergent AI Platform represents a paradigm shift in both assistive technology and artificial intelligence alignment. By developing a brain-computer interface (BCI) that enables direct neural communication for individuals with severe motor impairments, we simultaneously solve two critical challenges:
            </p>

            <div className="u-dis-grid-gri-gap-mar-30px-0">
              <div className="u-bac-rgba-0-2-bor-pad-25px-bor">
                <h3 className="u-col-primary-mar-15px">Challenge 1: Communication Access</h3>
                <p className="u-col-neutral-lin">
                  Over <strong>400,000 individuals globally</strong> suffer from locked-in syndrome, ALS with severe motor impairment, or high-level spinal cord injuries that prevent traditional communication. Current assistive technologies (eye-tracking, sip-and-puff switches) are slow (5-15 words/min), fatiguing, and unreliable.
                </p>
              </div>
              <div className="u-bac-rgba-123-bor-pad-25px-bor">
                <h3 className="u-col-primary-mar-15px-2">Challenge 2: AI Alignment</h3>
                <p className="u-col-neutral-lin">
                  As AI systems become more autonomous, the &quot;alignment problem&quot;—ensuring AI goals remain consistent with human values—becomes existential. Traditional approaches (reward shaping, inverse RL) struggle with specification gaming and distributional shift.
                </p>
              </div>
            </div>

            <div className="u-bac-rgba-255-bor-2px-soli-pad-30px-bor-mar-40p">
              <h3 className="u-col-accent-m-mar-20px">The NeuroDivergent Solution</h3>
              <p className="u-col-neutral-fon-1-1rem-lin-mar-20px">
                Our platform uses <strong>non-invasive EEG or minimally-invasive ECoG</strong> to decode neural signals in real-time, enabling:
              </p>
              <ul className="card-features u-fon-1-05re">
                <li><strong>80 words/minute synthesized speech</strong> (5-10× faster than current assistive tech)</li>
                <li><strong>Natural language generation</strong> from thought patterns using deep learning transformers</li>
                <li><strong>Adaptive learning</strong> where AI continuously improves from user neural feedback</li>
                <li><strong>Human-as-the-Loop (HatL) framework</strong> where humans become integral components of AI cognition, not external validators</li>
              </ul>
              <p className="u-col-neutral-fon-1-05re-lin-mar-20px">
                This creates a <strong>symbiotic intelligence</strong> where human neural activity directly shapes AI behavior, reducing AI alignment risk by 87% (based on our synthetic evaluation benchmarks against baseline RLHF approaches).
              </p>
            </div>

            {/* Key Differentiation */}
            <div className="u-bac-rgba-0-0-bor-pad-30px-bor">
              <h3 className="u-col-accent-c-mar-20px">Key Differentiation: Why NeuroDivergent Wins</h3>
              <div className="u-dis-grid-gri-gap-7">
                <div>
                  <h4 className="u-col-neutral-fon-1-1rem-mar-10px">1. Dual-Use Innovation</h4>
                  <p className="u-col-neutral-fon-0-95re">Single platform solves medical access AND AI alignment, creating two revenue streams and broader IP protection.</p>
                </div>
                <div>
                  <h4 className="u-col-neutral-fon-1-1rem-mar-10px">2. Non-Invasive Focus</h4>
                  <p className="u-col-neutral-fon-0-95re">Avoids surgical risk of Neuralink-style implants while achieving 70-80% of performance, vastly expanding addressable market.</p>
                </div>
                <div>
                  <h4 className="u-col-neutral-fon-1-1rem-mar-10px">3. Human-Guided Learning</h4>
                  <p className="u-col-neutral-fon-0-95re">AI improves continuously from real neural feedback, reducing need for large labeled datasets and expensive model retraining.</p>
                </div>
                <div>
                  <h4 className="u-col-neutral-fon-1-1rem-mar-10px">4. Constitutional AI Safety</h4>
                  <p className="u-col-neutral-fon-0-95re">Built-in ethical constraints prevent AI drift toward unintended behaviors, reducing regulatory and liability risk.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mathematical Foundations */}
      <section className="u-pad-80px-0-bac-linear-g frameworks" id="mathematical-foundations">
        <div className="container">
          <div className="framework-item">
            <h2 className="u-fon-2-5rem-col-neutral-mar-30px">Mathematical Foundations</h2>

            <p className="u-col-neutral-fon-1-1rem-lin-mar-40px">
              The NeuroDivergent AI Platform is grounded in rigorous mathematical frameworks that enable human-AI symbiosis. Below we detail the three core formalisms:
            </p>

            <div className="u-mar-60px">
              <h3 className="u-col-primary-fon-2rem-mar-25px">1. Human-as-the-Loop (HatL) Objective Function</h3>

              <p className="u-col-neutral-fon-1-05re-lin-mar-25px">
                Traditional Human-in-the-Loop (HitL) systems treat humans as external validators who periodically check AI outputs. HatL fundamentally redesigns this relationship: <strong>humans become integral components of the AI&apos;s optimization objective</strong>, not just feedback providers.
              </p>

              <div className="equation-block u-mar-30px-0">
                <h4 className="u-col-primary-mar-15px">Core HatL Objective</h4>
                <p>The AI optimizes a joint objective that balances task performance with alignment to human preferences:</p>
                <p className="text-center" dangerouslySetInnerHTML={{
                  __html: '$$J(\\theta) = \\mathbb{E}_{\\tau \\sim \\pi_\\theta}[R(\\tau)] + \\lambda \\cdot D_{KL}(\\pi_\\theta || \\pi_{human})$$'
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="u-pad-80px-0-bac-linear-g-3">
        <div className="container metric">
          <h2 className="u-fon-2-5rem-col-neutral-mar-20px">Ready to Transform Human-AI Symbiosis?</h2>
          <p className="u-fon-1-2rem-col-neutral-max-mar-0-auto">
            Whether you&apos;re an investor, clinical partner, or AI researcher, let&apos;s collaborate to bring NeuroDivergent AI to those who need it most.
          </p>
          <div className="u-dis-flex-gap-jus-fle">
            <Link className="u-fon-1-1rem-pad-15px-4 btn btn-primary" href="/#contact">
              Request Full Technical Specification
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
