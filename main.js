/**
 * jarmacz.com Main JavaScript
 * Interactive Elements & Animations
 */

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Debounce function to limit rate of function execution
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} el - Element to check
 * @returns {boolean} True if element is in viewport
 */
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Linear interpolation
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} t - Interpolation factor (0-1)
 * @returns {number} Interpolated value
 */
function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

// ========================================
// NAVIGATION
// ========================================

class Navigation {
    constructor() {
        this.nav = document.getElementById('mainNav');
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.init();
    }

    init() {
        // Mobile menu toggle
        this.navToggle?.addEventListener('click', () => this.toggleMenu());

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.nav?.contains(e.target) && this.navMenu?.classList.contains('active')) {
                this.toggleMenu();
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    if (this.navMenu?.classList.contains('active')) {
                        this.toggleMenu();
                    }
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', debounce(() => {
            if (window.scrollY > 100) {
                this.nav?.classList.add('scrolled');
            } else {
                this.nav?.classList.remove('scrolled');
            }
        }, 10));
    }

    toggleMenu() {
        this.navMenu?.classList.toggle('active');
        this.navToggle?.classList.toggle('active');
    }
}

// ========================================
// ANIMATED COUNTER
// ========================================

class AnimatedCounter {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = target;
        this.duration = duration;
        this.hasAnimated = false;
    }

    animate() {
        if (this.hasAnimated) return;
        
        const start = 0;
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / this.duration, 1);
            
            // Easing function: easeOutCubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            const current = start + (this.target - start) * easeProgress;
            this.element.textContent = Math.floor(current);
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                this.element.textContent = this.target;
                this.hasAnimated = true;
            }
        };
        
        requestAnimationFrame(updateCounter);
    }
}

// ========================================
// NEURAL NETWORK CANVAS ANIMATION
// ========================================

class NeuralNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.connections = [];
        this.mouse = { x: null, y: null, radius: 150 };
        
        this.resize();
        this.initNodes();
        this.initConnections();
        this.setupEventListeners();
        this.animate();
    }

    resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        
        this.ctx.scale(dpr, dpr);
        
        this.width = rect.width;
        this.height = rect.height;
    }

    initNodes() {
        const nodeCount = 50;
        this.nodes = [];
        
        for (let i = 0; i < nodeCount; i++) {
            this.nodes.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                originalRadius: Math.random() * 2 + 1,
                active: Math.random() > 0.7
            });
        }
    }

    initConnections() {
        this.connections = [];
        const maxDistance = 150;
        
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const dx = this.nodes[i].x - this.nodes[j].x;
                const dy = this.nodes[i].y - this.nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    this.connections.push({
                        start: i,
                        end: j,
                        distance: distance,
                        maxDistance: maxDistance
                    });
                }
            }
        }
    }

    setupEventListeners() {
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });

        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });

        window.addEventListener('resize', debounce(() => {
            this.resize();
            this.initNodes();
            this.initConnections();
        }, 250));
    }

    updateNodes() {
        this.nodes.forEach(node => {
            // Update position
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off walls
            if (node.x < 0 || node.x > this.width) node.vx *= -1;
            if (node.y < 0 || node.y > this.height) node.vy *= -1;

            // Keep within bounds
            node.x = Math.max(0, Math.min(this.width, node.x));
            node.y = Math.max(0, Math.min(this.height, node.y));

            // Mouse interaction
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = node.x - this.mouse.x;
                const dy = node.y - this.mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.mouse.radius) {
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
                    node.radius = lerp(node.radius, node.originalRadius * (1 + force * 2), 0.1);
                    node.active = true;
                } else {
                    node.radius = lerp(node.radius, node.originalRadius, 0.1);
                }
            }
        });
    }

    draw() {
        // Clear canvas with fade effect
        this.ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw connections
        this.connections.forEach(conn => {
            const node1 = this.nodes[conn.start];
            const node2 = this.nodes[conn.end];
            
            const dx = node1.x - node2.x;
            const dy = node1.y - node2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            const opacity = Math.max(0, 1 - distance / conn.maxDistance) * 0.3;
            
            this.ctx.beginPath();
            this.ctx.moveTo(node1.x, node1.y);
            this.ctx.lineTo(node2.x, node2.y);
            
            // Gradient for connections
            const gradient = this.ctx.createLinearGradient(node1.x, node1.y, node2.x, node2.y);
            gradient.addColorStop(0, `rgba(0, 212, 255, ${opacity})`);
            gradient.addColorStop(1, `rgba(123, 44, 191, ${opacity})`);
            
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        });

        // Draw nodes
        this.nodes.forEach(node => {
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            
            if (node.active) {
                // Gradient for active nodes
                const gradient = this.ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, node.radius * 3
                );
                gradient.addColorStop(0, 'rgba(0, 212, 255, 1)');
                gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
                this.ctx.fillStyle = gradient;
                this.ctx.fill();
            }
            
            this.ctx.fillStyle = node.active ? '#00f5ff' : '#00d4ff';
            this.ctx.fill();
        });
    }

    animate() {
        this.updateNodes();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// ========================================
// HATL VISUALIZATION
// ========================================

class HatLVisualization {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        
        // HatL parameters
        this.aiConfidence = 0.8;
        this.humanConfidence = 0.6;
        this.lambda = 0.3; // Human alignment weight
        
        this.resize();
        this.animate();
    }

    resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        
        this.ctx.scale(dpr, dpr);
        
        this.width = rect.width;
        this.height = rect.height;
    }

    drawAgent(x, y, radius, label, confidence, color) {
        // Draw agent circle
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(${color}, 0.2)`;
        this.ctx.fill();
        this.ctx.strokeStyle = `rgba(${color}, 0.8)`;
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        // Draw confidence level
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius * confidence, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(${color}, 0.5)`;
        this.ctx.fill();

        // Label
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = 'bold 14px Inter';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(label, x, y - radius - 15);

        // Confidence text
        this.ctx.font = '12px Fira Code';
        this.ctx.fillText(`${(confidence * 100).toFixed(0)}%`, x, y + 5);
    }

    drawConnection(x1, y1, x2, y2, weight) {
        const controlY = (y1 + y2) / 2 - 50;
        
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.quadraticCurveTo(
            (x1 + x2) / 2,
            controlY,
            x2,
            y2
        );
        
        this.ctx.strokeStyle = `rgba(0, 212, 255, ${weight})`;
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        // Draw arrows
        const angle = Math.atan2(y2 - controlY, x2 - (x1 + x2) / 2);
        const arrowSize = 10;
        
        this.ctx.beginPath();
        this.ctx.moveTo(x2, y2);
        this.ctx.lineTo(
            x2 - arrowSize * Math.cos(angle - Math.PI / 6),
            y2 - arrowSize * Math.sin(angle - Math.PI / 6)
        );
        this.ctx.lineTo(
            x2 - arrowSize * Math.cos(angle + Math.PI / 6),
            y2 - arrowSize * Math.sin(angle + Math.PI / 6)
        );
        this.ctx.closePath();
        this.ctx.fillStyle = `rgba(0, 212, 255, ${weight})`;
        this.ctx.fill();
    }

    drawEquation() {
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = '14px Fira Code';
        this.ctx.textAlign = 'center';
        
        const equation = `ω = ${this.lambda.toFixed(2)} * πH + ${(1-this.lambda).toFixed(2)} * πAI`;
        this.ctx.fillText(equation, this.width / 2, this.height - 30);
    }

    animate() {
        this.time += 0.02;

        // Clear canvas
        this.ctx.fillStyle = 'rgba(10, 14, 39, 1)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Animate confidence levels
        this.aiConfidence = 0.7 + Math.sin(this.time) * 0.2;
        this.humanConfidence = 0.6 + Math.cos(this.time * 0.7) * 0.25;

        const centerX = this.width / 2;
        const aiX = centerX - 150;
        const humanX = centerX + 150;
        const agentY = this.height / 2 - 50;
        const decisionY = this.height / 2 + 80;

        // Draw agents
        this.drawAgent(aiX, agentY, 50, 'AI Agent', this.aiConfidence, '0, 212, 255');
        this.drawAgent(humanX, agentY, 50, 'Human', this.humanConfidence, '123, 44, 191');

        // Draw decision node
        this.ctx.beginPath();
        this.ctx.arc(centerX, decisionY, 40, 0, Math.PI * 2);
        const gradient = this.ctx.createRadialGradient(centerX, decisionY, 0, centerX, decisionY, 40);
        gradient.addColorStop(0, 'rgba(255, 0, 110, 0.6)');
        gradient.addColorStop(1, 'rgba(255, 0, 110, 0.2)');
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
        this.ctx.strokeStyle = 'rgba(255, 0, 110, 0.8)';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = 'bold 14px Inter';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Decision', centerX, decisionY - 50);

        // Draw connections with animated weights
        const aiWeight = (1 - this.lambda) * this.aiConfidence;
        const humanWeight = this.lambda * this.humanConfidence;
        
        this.drawConnection(aiX, agentY + 50, centerX - 20, decisionY - 20, aiWeight);
        this.drawConnection(humanX, agentY + 50, centerX + 20, decisionY - 20, humanWeight);

        // Draw equation
        this.drawEquation();

        requestAnimationFrame(() => this.animate());
    }
}

// ========================================
// FORM HANDLING
// ========================================

class ContactForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        if (!this.form) return;
        
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                this.showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
                this.form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            this.showMessage('There was an error sending your message. Please try emailing directly.', 'error');
        }
    }

    showMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = text;
        
        this.form.insertBefore(messageDiv, this.form.firstChild);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================

class ScrollAnimations {
    constructor() {
        this.observers = new Map();
        this.init();
    }

    init() {
        // Fade in elements
        const fadeElements = document.querySelectorAll('.matrix-card, .research-paper, .venture-card');
        
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                    
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(el => fadeObserver.observe(el));

        // Animated counters
        const counterElements = document.querySelectorAll('.metric-value');
        const counters = Array.from(counterElements).map(el => {
            const target = parseFloat(el.dataset.target);
            return new AnimatedCounter(el, target);
        });

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = counters.find(c => c.element === entry.target);
                    if (counter) {
                        counter.animate();
                        counterObserver.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.5 });

        counterElements.forEach(el => counterObserver.observe(el));
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    new Navigation();
    new NeuralNetwork('neuralNetCanvas');
    new HatLVisualization('hatlCanvas');
    new ContactForm('contactForm');
    new ScrollAnimations();

    // MathJax configuration
    if (window.MathJax) {
        MathJax.typesetPromise().catch((err) => console.log('MathJax error:', err));
    }

    // Log initialization
    console.log('%c🧠 NeuroProgressive AI Evolution Strategist', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
    console.log('%cWebsite initialized successfully', 'color: #7b2cbf; font-size: 14px;');
    console.log('%cLet\'s make history together!', 'color: #ff006e; font-size: 12px;');
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Navigation,
        AnimatedCounter,
        NeuralNetwork,
        HatLVisualization,
        ContactForm,
        ScrollAnimations
    };
}
