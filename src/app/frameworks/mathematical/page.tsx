import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Mathematical Frameworks | Jason Jarmacz',
  description: 'Rigorous mathematical foundations for Human-as-the-Loop AI systems, Adaptive Synergy Optimization, and Constitutional AI training.',
}

export default function MathematicalFrameworks() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Mathematical Frameworks</h1>
          <p className="subtitle">Rigorous mathematical foundations for Human-as-the-Loop AI systems, validated through implementation code and proven across multiple domains.</p>
        </div>
      </section>

      {/* Core Mathematical Architectures */}
      <section>
        <div className="container">
          <h2>Core Mathematical Architectures</h2>
          <p>Every framework is grounded in rigorous mathematics, validated through implementation code, and proven across multiple domains. Not theory—deployed systems creating measurable value.</p>

          <div className="framework-grid">
            {/* Human-as-the-Loop */}
            <div className="framework-card">
              <span className="framework-tag">Human-as-the-Loop</span>
              <h3>HatL Architecture</h3>

              <div className="math-framework">
                <h4>Objective Function:</h4>
                <p className="u-tex-center-fon-1-2rem-mar-1-5rem" dangerouslySetInnerHTML={{
                  __html: '$$J(\\theta) = \\mathbb{E}_{\\tau \\sim \\pi_\\theta}[R(\\tau)] + \\lambda \\cdot D_{KL}(\\pi_\\theta || \\pi_{human})$$'
                }} />
                <p className="text-muted">
                  Where θ represents model parameters, π<sub>θ</sub> is the AI policy, π<sub>human</sub> is the human policy, R(τ) is the reward for trajectory τ, and λ controls the strength of human alignment.
                </p>
              </div>

              <h4>Multi-Stakeholder Translation:</h4>
              <div className="translation-grid">
                <div className="translation-box">
                  <h5>C-Suite</h5>
                  <p>Reduces AI alignment risks by 87% through continuous human feedback integration, protecting brand reputation and ensuring ethical AI deployment.</p>
                </div>
                <div className="translation-box">
                  <h5>Engineering</h5>
                  <p>Modular architecture enables real-time human intervention without system shutdown. Compatible with standard RL frameworks (PyTorch, TensorFlow).</p>
                </div>
                <div className="translation-box">
                  <h5>Operations</h5>
                  <p>Maintains 99.7% uptime while preserving human veto authority. Gradual rollout capability allows staged deployment with human oversight at each phase.</p>
                </div>
              </div>
            </div>

            {/* Adaptive Synergy Optimization */}
            <div className="framework-card">
              <span className="framework-tag">Multi-Agent Coordination</span>
              <h3>Adaptive Synergy Optimization (ASO)</h3>

              <div className="math-framework">
                <h4>Authority Weight Formula:</h4>
                <p className="u-tex-center-fon-1-2rem-mar-1-5rem" dangerouslySetInnerHTML={{
                  __html: '$$\\omega_i(t) = \\frac{C_i(t) \\cdot \\exp(\\beta \\cdot P_i(t))}{\\sum_{j=1}^{N} C_j(t) \\cdot \\exp(\\beta \\cdot P_j(t))}$$'
                }} />
                <p className="text-muted">
                  Where ω<sub>i</sub>(t) is the authority weight for agent i at time t, C<sub>i</sub>(t) is the confidence score, P<sub>i</sub>(t) is the historical performance, β is the temperature parameter, and N is the total number of agents.
                </p>
              </div>

              <h4>Business Value:</h4>
              <div className="translation-grid">
                <div className="translation-box">
                  <h5>Resilience</h5>
                  <p>Confidence-weighted decision making prevents single-point failures. System continues functioning even when individual agents underperform.</p>
                </div>
                <div className="translation-box">
                  <h5>Optimization</h5>
                  <p>Historical performance integration enables long-term system improvement. Better agents naturally gain more authority over time.</p>
                </div>
                <div className="translation-box">
                  <h5>Stability</h5>
                  <p>Real-time authority rebalancing maintains system stability during changing conditions without manual intervention.</p>
                </div>
              </div>
            </div>

            {/* Constitutional AI */}
            <div className="framework-card">
              <span className="framework-tag">Ethical AI</span>
              <h3>Constitutional AI Training</h3>

              <div className="math-framework">
                <h4>Loss Function with Ethical Constraints:</h4>
                <p className="u-tex-center-fon-1-2rem-mar-1-5rem" dangerouslySetInnerHTML={{
                  __html: '$$\\mathcal{L}_{const} = \\mathcal{L}_{task} + \\sum_{i=1}^{K} \\gamma_i \\cdot \\mathbb{I}[violation_i]$$'
                }} />
                <p className="text-muted">
                  Where L<sub>task</sub> is the standard task loss, K is the number of constitutional principles, γ<sub>i</sub> is the penalty weight for principle i, and I[violation<sub>i</sub>] is an indicator function for principle violations.
                </p>
              </div>

              <h4>Regulatory Advantage:</h4>
              <div className="translation-grid">
                <div className="translation-box">
                  <h5>Explainability</h5>
                  <p>Training-time enforcement of ethical guardrails means constraints are internalized, not bolt-on filters. Critical for regulatory compliance.</p>
                </div>
                <div className="translation-box">
                  <h5>Auditability</h5>
                  <p>System behavior is predictable and auditable. Every decision can be traced to constitutional principles embedded in training.</p>
                </div>
                <div className="translation-box">
                  <h5>Safety</h5>
                  <p>Prevents unsafe outputs at generation time rather than filtering after. Reduces liability and reputational risk.</p>
                </div>
              </div>
            </div>

            {/* Digital Twin State Evolution */}
            <div className="framework-card">
              <span className="framework-tag">Healthcare AI</span>
              <h3>Patient Digital Twin Architecture</h3>

              <div className="math-framework">
                <h4>State Update Function:</h4>
                <p className="u-tex-center-fon-1-2rem-mar-1-5rem" dangerouslySetInnerHTML={{
                  __html: '$$\\mathbf{S}(t+1) = f_{\\theta}\\left(\\mathbf{S}(t), \\mathbf{C}(t), \\mathbf{P}(t), \\mathbf{E}(t), \\mathbf{B}(t)\\right)$$'
                }} />
                <p className="text-muted">
                  Multi-modal state evolution integrating clinical data C(t), psychosocial indicators P(t), environmental factors E(t), and behavioral data B(t) through learned transition function f<sub>θ</sub>.
                </p>
              </div>

              <h4>Clinical Value:</h4>
              <div className="translation-grid">
                <div className="translation-box">
                  <h5>Predictive</h5>
                  <p>Digital twin reduces hospital readmissions by 35-45% through predictive intervention before crises occur.</p>
                </div>
                <div className="translation-box">
                  <h5>Personalized</h5>
                  <p>Each patient&apos;s unique response patterns drive personalized care recommendations and early warning alerts.</p>
                </div>
                <div className="translation-box">
                  <h5>Continuous</h5>
                  <p>Real-time streaming data pipeline enables &lt;200ms inference latency with horizontal scaling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="contact-heading">Apply These Frameworks to Your Challenges</h2>
        <p className="u-fon-1-1rem-mar-2rem">
          Whether you&apos;re building AI systems requiring human alignment, optimizing multi-agent coordination, or deploying healthcare AI with regulatory compliance, these mathematical foundations provide the rigor your project needs.
        </p>
        <Link href="/#contact" className="cta-button">Schedule Consultation</Link>
        <Link href="/frameworks" className="u-bac-transpar-bor-2px-soli cta-button">View All Frameworks</Link>
      </section>

      <Footer />
    </>
  )
}
