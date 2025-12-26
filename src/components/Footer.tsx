import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Jason Jarmacz</h4>
            <p>NeuroDivergent AI Evolution Strategist</p>
            <p className="footer-tagline">"Advancing with strict moral compass, letting discoveries define ambitions."</p>
          </div>
          <div className="footer-section">
            <h4>Projects</h4>
            <ul>
              <li><Link href="/projects/neurodivergent-ai">NeuroDivergent AI Platform</Link></li>
              <li><Link href="/projects/ihep">IHEP Framework</Link></li>
              <li><Link href="/projects">All Projects</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Frameworks</h4>
            <ul>
              <li><Link href="/frameworks/neurodivergent">NeuroDivergent</Link></li>
              <li><Link href="/frameworks/mathematical">Mathematical</Link></li>
              <li><Link href="/frameworks">All Frameworks</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:jayjarmacz@gmail.com">jayjarmacz@gmail.com</a></li>
              <li><a href="tel:+19175668112">(917) 566-8112</a></li>
              <li><a href="https://linkedin.com/in/omniunum" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Jason Jarmacz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
