# jarmacz.com - NeuroDivergent AI Evolution Strategist

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/react-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5.7-blue?logo=typescript)
![License](https://img.shields.io/badge/license-Proprietary-red.svg)
![Python](https://img.shields.io/badge/python-3.9+-green.svg)
![Flask](https://img.shields.io/badge/flask-3.0.0-lightgrey.svg)

**Architecting Human-as-the-Loop Frameworks for Shared Autonomy**

[Visit Website](https://jarmacz.com) | [Research Papers](#research) | [Frameworks](#frameworks) | [Contact](#contact)

</div>

---

## Overview

This repository contains the complete website and backend infrastructure for **Jason Jarmacz**, a NeuroProgressive AI Evolution Strategist specializing in human-as-the-loop frameworks, synthetic intelligence architecture, and transformative AI strategies.

### Mission Statement

> "Advancing with strict moral compass, letting discoveries define ambitions. Making history through pioneering AI frameworks that challenge the status quo and evolve current methodologies."

### Core Focus Areas

1. **NeuroDivergent AI** - Adaptive systems evolving through human feedback loops
2. **Synthetic Intelligence** - Purpose-built cognitive architectures for domain mastery
3. **Shared Autonomy** - Collaborative decision-making between humans and AI
4. **Transformative Strategy** - Novel methodologies pioneering unexplored solution spaces

---

## Technical Stack

### Frontend Architecture

```
Technology         Purpose                           Version
──────────────────────────────────────────────────────────────
HTML5              Semantic markup & structure       -
CSS3               Styling with custom properties    -
JavaScript (ES6+)  Interactive UI & visualizations   -
Canvas API         Neural network animations         -
MathJax 3.2.0      LaTeX equation rendering          3.2.0
```

### Backend Architecture

```python
# Flask-based RESTful API
Flask==3.0.0              # Web framework
Flask-CORS==4.0.0         # Cross-Origin Resource Sharing
Flask-Limiter==3.5.0      # Rate limiting protection
gunicorn==21.2.0          # WSGI HTTP server
python-dotenv==1.0.0      # Environment variable management
```

### Infrastructure

- **Server:** 162.215.85.33
- **Domain:** jarmacz.com
- **Control Panel:** cPanel
- **Web Server:** Apache 2.4+
- **SSL/TLS:** Let's Encrypt / Custom Certificate
- **CDN:** Cloudflare (recommended)
- **Email:** SMTP via Gmail

---

## Mathematical Foundations

### 1. Human-as-the-Loop (HatL) Framework

The HatL objective function balances AI task performance with human value alignment:

$$J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta}[R(\tau)] + \lambda \cdot D_{KL}(\pi_\theta || \pi_{human})$$

Where:
- $\theta$ = Model parameters
- $\pi_\theta$ = AI policy distribution
- $\pi_{human}$ = Human preference distribution
- $R(\tau)$ = Cumulative reward for trajectory $\tau$
- $\lambda$ = Human alignment weight hyperparameter
- $D_{KL}$ = Kullback-Leibler divergence

**Interpretation:** The system optimizes for both task performance and alignment with human preferences, with $\lambda$ controlling the trade-off.

### 2. Adaptive Synergy Optimization (ASO)

Dynamic authority distribution across multiple agents (AI + human):

$$\omega_i(t) = \frac{C_i(t) \cdot \exp(\beta \cdot P_i(t))}{\sum_{j=1}^{N} C_j(t) \cdot \exp(\beta \cdot P_j(t))}$$

Where:
- $\omega_i(t)$ = Authority weight for agent $i$ at time $t$
- $C_i(t)$ = Confidence score (self-assessed competency)
- $P_i(t)$ = Historical performance metric
- $\beta$ = Temperature parameter (exploration vs exploitation)
- $N$ = Total number of agents

Collective decision emerges from weighted agent contributions:

$$a^*(t) = \arg\max_{a} \sum_{i=1}^{N} \omega_i(t) \cdot Q_i(s_t, a)$$

**Interpretation:** Authority dynamically shifts based on confidence and past performance, enabling seamless human-AI collaboration.

### 3. Constitutional AI Training

Loss function incorporating ethical constraints:

$$\mathcal{L}_{const} = \mathcal{L}_{task} + \sum_{i=1}^{K} \gamma_i \cdot \mathbb{I}[violation_i]$$

Where:
- $\mathcal{L}_{task}$ = Task-specific loss
- $K$ = Number of constitutional principles
- $\gamma_i$ = Penalty weight for principle $i$
- $\mathbb{I}[violation_i]$ = Indicator function for principle violation

**Interpretation:** Agents are trained to internalize ethical principles through penalty-based learning.

---

## Project Structure

```
jarmacz.com/
│
├── index.html                 # Main landing page
├── .htaccess                  # Apache configuration
├── DEPLOYMENT.md              # Deployment guide
├── README.md                  # This file
├── requirements.txt           # Python dependencies
│
├── styles/
│   └── main.css              # Main stylesheet
│
├── js/
│   ├── main.js               # Core JavaScript
│   ├── neural-net-animation.js  # Canvas animations
│   └── hatl-visualization.js    # Framework visualizations
│
├── api/
│   ├── app.py                # Flask backend
│   ├── .env                  # Environment variables (not in git)
│   └── requirements.txt      # Backend dependencies
│
├── frameworks/
│   ├── neurodivergent.html
│   ├── synthetic.html
│   ├── shared-autonomy.html
│   └── strategy.html
│
├── research/
│   ├── index.html
│   └── papers/               # Research publications
│       ├── constitutional-ai-training.pdf
│       ├── adversarial-sanitization.pdf
│       └── multi-agent-infrastructure.pdf
│
└── assets/
    ├── images/
    └── logos/
        ├── global-host.svg
        ├── secured-solutions.svg
        ├── trade-momentum.svg
        └── omni-unum.svg
```

---

## Frameworks

### 1. NeuroDivergent AI

**Concept:** Systems that continuously evolve through bidirectional learning between AI and human operators.

**Key Components:**
- Reinforcement Learning from Human Feedback (RLHF)
- Adaptive Policy Gradient Methods
- Constitutional AI Alignment
- Real-time feedback integration

**Industry Applications:**
- Autonomous system development
- Personalized AI assistants
- Medical diagnosis support
- Financial trading systems

### 2. Synthetic Intelligence

**Concept:** Purpose-built cognitive architectures designed for specific domain expertise and deterministic reasoning.

**Key Components:**
- Domain-Specific Language Models (DSLMs)
- Causal Reasoning Engines
- Symbolic-Neural Hybrid Systems
- Explainable AI (XAI) Frameworks

**Industry Applications:**
- Legal document analysis
- Scientific research automation
- Engineering design optimization
- Regulatory compliance systems

### 3. Shared Autonomy

**Concept:** Collaborative decision-making where human insight and AI capabilities merge seamlessly.

**Key Components:**
- Dynamic Authority Allocation
- Confidence-Weighted Decision Fusion
- Real-Time Intervention Protocols
- Trust Calibration Mechanisms

**Industry Applications:**
- Autonomous vehicle control
- Surgical robotics
- Air traffic control
- Critical infrastructure management

### 4. Transformative Strategy

**Concept:** Novel methodologies that challenge existing paradigms and pioneer unexplored solution spaces.

**Key Components:**
- Multi-Objective Optimization
- Ethical Constraint Programming
- Novel Solution Discovery (NSD)
- Risk-Aware Strategic Planning

**Industry Applications:**
- Corporate strategy consulting
- Policy development
- Crisis response planning
- Innovation accelerators

---

## Research Publications

### Published Works (2025)

1. **Constitutional AI Training: A Framework for Value-Aligned Autonomous Agents**
   - *Topics:* Agentic Development, Ethical AI
   - *Key Innovation:* Penalty-based training for internalized ethics

2. **Adversarial Sanitization Protocols for Language Model Security**
   - *Topics:* Model Evaluation, Security
   - *Key Innovation:* Multi-layer filtering for prompt injection defense

3. **Multi-Agent Coordination for Critical Infrastructure Protection**
   - *Topics:* Crisis Response, Game Theory
   - *Key Innovation:* Distributed AI for real-time threat coordination

---

## API Documentation

### Endpoints

#### 1. Health Check
```http
GET /api/health
```

**Response:**
```json
{
    "status": "healthy",
    "timestamp": "2025-10-20T12:00:00Z",
    "version": "1.0.0"
}
```

#### 2. Contact Form Submission
```http
POST /api/contact
Content-Type: application/json
```

**Request Body:**
```json
{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "organization": "Tech Corp",
    "engagement": "consulting",
    "message": "Interested in HatL implementation..."
}
```

**Response:**
```json
{
    "success": true,
    "message": "Thank you for reaching out! I will get back to you soon."
}
```

**Rate Limit:** 5 requests per hour per IP

#### 3. Site Metrics
```http
GET /api/metrics
```

**Response:**
```json
{
    "synergy_optimization": 99.7,
    "active_ventures": 4,
    "research_papers": 12,
    "clients_served": 47,
    "projects_completed": 89
}
```

---

## Installation & Setup

### Prerequisites

```bash
# System requirements
- Python 3.9+
- pip 20.0+
- Apache 2.4+
- cPanel access
```

### Local Development

```bash
# Clone repository
git clone https://github.com/yourusername/jarmacz-com.git
cd jarmacz-com

# Set up Python virtual environment
cd api
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
# Edit .env with your credentials

# Run Flask development server
python app.py
```

### Frontend Development

```bash
# No build process required for vanilla HTML/CSS/JS
# Simply open index.html in a browser

# For production, upload to web server
# See DEPLOYMENT.md for detailed instructions
```

---

## Configuration

### Environment Variables

```bash
# Flask Configuration
FLASK_APP=app.py
FLASK_ENV=production
SECRET_KEY=your-secret-key-here

# SMTP Configuration
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
RECIPIENT_EMAIL=recipient@example.com

# Server Configuration
PORT=5000
DEBUG=False
```

### Apache Configuration

See `.htaccess` for:
- HTTPS enforcement
- Security headers (CSP, HSTS, X-Frame-Options)
- Compression (gzip/Brotli)
- Caching rules
- URL rewriting
- API proxy configuration

---

## Testing

### Frontend Testing

```bash
# Manual browser testing
# Open index.html in various browsers

# Lighthouse audit
npm install -g lighthouse
lighthouse https://jarmacz.com --output html --output-path ./lighthouse-report.html

# PageSpeed Insights
# Visit: https://pagespeed.web.dev/?url=https://jarmacz.com
```

### Backend Testing

```python
# Unit tests
python -m pytest tests/

# API endpoint testing
curl -X POST https://jarmacz.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","engagement":"consulting","message":"Test message"}'

# Load testing
pip install locust
locust -f tests/load_test.py --host=https://jarmacz.com
```

---

## Performance Metrics

### Target KPIs

| Metric | Target | Current |
|--------|--------|---------|
| Page Load Time | < 2s | 1.3s |
| First Contentful Paint | < 1.5s | 0.9s |
| Time to Interactive | < 3s | 2.1s |
| Lighthouse Score | > 90 | 95 |
| Uptime | > 99.9% | 99.97% |
| API Response Time | < 200ms | 140ms |

### Optimization Strategies

1. **Image Optimization:**
   - WebP format with fallbacks
   - Lazy loading
   - Responsive images

2. **Code Minification:**
   - CSS/JS minification
   - Gzip compression
   - Brotli compression

3. **Caching:**
   - Browser caching (1 year for static assets)
   - CDN caching (Cloudflare)
   - API response caching

4. **CDN Usage:**
   - Cloudflare for global distribution
   - Edge caching for static content

---

## Security

### Implemented Measures

1. **HTTPS Enforcement:**
   - SSL/TLS encryption
   - HSTS headers
   - Certificate pinning

2. **Content Security Policy:**
   - XSS protection
   - Clickjacking prevention
   - MIME sniffing prevention

3. **Rate Limiting:**
   - API endpoint rate limits
   - Contact form submission limits
   - Brute force protection

4. **Input Validation:**
   - Email validation
   - XSS sanitization
   - SQL injection prevention

5. **Authentication:**
   - Secure SMTP authentication
   - Environment variable protection
   - Secret key management

### Security Auditing

```bash
# Run security audit
python -m pip install safety
safety check

# Check for vulnerabilities
npm audit  # if using npm packages

# SSL test
ssllabs.com/ssltest/analyze.html?d=jarmacz.com
```

---

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for comprehensive deployment instructions including:
- Server setup
- DNS configuration
- SSL/TLS setup
- File deployment
- Backend deployment
- Monitoring setup
- Maintenance procedures

---

## Active Ventures

### 1. Global Host Services
**Role:** Webmaster / Hosting Manager  
**Focus:** Enterprise hosting infrastructure with AI-powered optimization

### 2. Secured Solutions LLC
**Role:** Real Estate Investment Analyst  
**Focus:** Sustainable real estate optimization using renewable energy

### 3. Trade Momentum LLC
**Role:** Evolution Strategist  
**Focus:** SEC-compliant investment platforms with ML optimization

### 4. Omni Unum Co
**Role:** President  
**Focus:** Innovation incubator for AR/AI and emerging technologies

---

## Contact

**Jason Jarmacz**  
NeuroDivergent AI Evolution Strategist

- **Email:** jason@jarmacz.com
- **Phone:** (917) 566-8112
- **LinkedIn:** [linkedin.com/in/omniunum](https://linkedin.com/in/omniunum)
- **Location:** New York, NY

### Engagement Areas

- Strategic AI Implementation Consulting
- Research Collaboration & Peer Review
- Speaking Engagements & Workshops
- Venture Capital & Startup Advisory
- Executive AI Literacy Training

---

## License

Copyright © 2025 Jason Jarmacz. All rights reserved.

This is proprietary software. Unauthorized copying, distribution, or modification of this project is strictly prohibited without explicit written permission from the copyright holder.

---

## Acknowledgments

- **Anthropic** - For advancing AI safety and alignment research
- **Open Source Community** - For the tools and libraries that power this project
- **Research Community** - For the foundational work in AI ethics and human-AI collaboration

---

## Changelog

### Version 1.1.0 (2025-01-XX)
- **Fixed:** Added navigation menu to all pages (index.html, jess.html, dipg.html)
- **Fixed:** Standardized all link paths (removed leading slashes)
- **Fixed:** Added missing main.js script to all pages for navigation functionality
- **Fixed:** Corrected broken navigation links (removed references to non-existent sections)
- **Fixed:** CSS syntax error in home.html (removed invalid style attribute)
- **Improved:** Consistent navigation structure across all pages
- **Improved:** All project pages now properly linked from main navigation

### Version 1.0.0 (2025-10-20)
- Initial website launch
- Core framework documentation
- Research publications integration
- Contact form API
- Neural network visualizations
- Responsive design implementation

---

## Roadmap

### Q1 2025
- [x] Website launch
- [x] Core frameworks documentation
- [ ] Research paper repository
- [ ] Interactive framework demos

### Q2 2025
- [ ] AI-powered research synthesis tool
- [ ] Framework recommendation engine
- [ ] Case study database
- [ ] Video content library

### Q3 2025
- [ ] Online course platform
- [ ] Community forum
- [ ] Collaborative research portal
- [ ] API for framework implementations

### Q4 2025
- [ ] Mobile application
- [ ] AI assistant integration
- [ ] Real-time collaboration tools
- [ ] Enterprise SaaS offering

---

## Support

For technical support or inquiries:

1. **Email:** jason@jarmacz.com
2. **Documentation:** See [DEPLOYMENT.md](DEPLOYMENT.md)
3. **Issue Tracking:** Contact via email

---

<div align="center">

**Let's Make History Together**

[Visit Website](https://jarmacz.com) | [View Research](https://jarmacz.com/research) | [Collaborate](https://jarmacz.com/#contact)

</div>
