#!/usr/bin/env python3
"""
jarmacz.com Backend API
Flask-based server for handling contact forms, analytics, and AI integrations

Author: Jason Jarmacz
"""

from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import re
import logging
from datetime import datetime
from typing import Dict, Tuple, Any
import json

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Rate limiting to prevent abuse
limiter = Limiter(
    app=app,
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"]
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Configuration
class Config:
    """Application configuration"""
    SMTP_SERVER = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
    SMTP_PORT = int(os.getenv('SMTP_PORT', 587))
    SMTP_USERNAME = os.getenv('SMTP_USERNAME', 'jayjarmacz@gmail.com')
    SMTP_PASSWORD = os.getenv('SMTP_PASSWORD', '')  # Set via environment variable
    RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL', 'jayjarmacz@gmail.com')
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key-change-in-production')

app.config.from_object(Config)

# ========================================
# VALIDATION UTILITIES
# ========================================

def validate_email(email: str) -> bool:
    """
    Validate email format using regex
    
    Args:
        email: Email address to validate
        
    Returns:
        bool: True if valid email format
    """
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def sanitize_input(text: str, max_length: int = 1000) -> str:
    """
    Sanitize user input to prevent XSS and injection attacks
    
    Args:
        text: Input text to sanitize
        max_length: Maximum allowed length
        
    Returns:
        str: Sanitized text
    """
    # Remove any HTML tags
    text = re.sub(r'<[^>]*>', '', text)
    # Limit length
    text = text[:max_length]
    # Strip leading/trailing whitespace
    text = text.strip()
    return text

def validate_contact_form(data: Dict[str, Any]) -> Tuple[bool, str]:
    """
    Validate contact form data
    
    Args:
        data: Form data dictionary
        
    Returns:
        Tuple of (is_valid, error_message)
    """
    # Required fields
    required_fields = ['name', 'email', 'engagement', 'message']
    
    for field in required_fields:
        if field not in data or not data[field]:
            return False, f"Missing required field: {field}"
    
    # Validate email
    if not validate_email(data['email']):
        return False, "Invalid email address"
    
    # Validate name length
    if len(data['name']) < 2 or len(data['name']) > 100:
        return False, "Name must be between 2 and 100 characters"
    
    # Validate message length
    if len(data['message']) < 10 or len(data['message']) > 5000:
        return False, "Message must be between 10 and 5000 characters"
    
    # Validate engagement type
    valid_engagements = ['consulting', 'research', 'speaking', 'advisory', 'training', 'other']
    if data['engagement'] not in valid_engagements:
        return False, "Invalid engagement type"
    
    return True, ""

# ========================================
# EMAIL UTILITIES
# ========================================

def send_email(to_email: str, subject: str, body_html: str, body_text: str = None) -> bool:
    """
    Send email using SMTP
    
    Args:
        to_email: Recipient email address
        subject: Email subject
        body_html: HTML email body
        body_text: Plain text email body (optional)
        
    Returns:
        bool: True if email sent successfully
    """
    try:
        # Create message
        msg = MIMEMultipart('alternative')
        msg['From'] = app.config['SMTP_USERNAME']
        msg['To'] = to_email
        msg['Subject'] = subject
        
        # Attach plain text and HTML versions
        if body_text:
            msg.attach(MIMEText(body_text, 'plain'))
        msg.attach(MIMEText(body_html, 'html'))
        
        # Connect to SMTP server
        with smtplib.SMTP(app.config['SMTP_SERVER'], app.config['SMTP_PORT']) as server:
            server.starttls()
            server.login(app.config['SMTP_USERNAME'], app.config['SMTP_PASSWORD'])
            server.send_message(msg)
        
        logger.info(f"Email sent successfully to {to_email}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False

def format_contact_email(data: Dict[str, Any]) -> Tuple[str, str]:
    """
    Format contact form data into email HTML and text
    
    Args:
        data: Contact form data
        
    Returns:
        Tuple of (html_body, text_body)
    """
    engagement_labels = {
        'consulting': 'Strategic Consulting',
        'research': 'Research Collaboration',
        'speaking': 'Speaking Engagement',
        'advisory': 'Venture Advisory',
        'training': 'Executive Training',
        'other': 'Other'
    }
    
    engagement_label = engagement_labels.get(data['engagement'], data['engagement'])
    
    html_body = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                line-height: 1.6;
                color: #333;
            }}
            .container {{
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }}
            .header {{
                background: linear-gradient(135deg, #7b2cbf 0%, #00d4ff 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
            }}
            .content {{
                background: #f8f9fa;
                padding: 30px;
                border-radius: 0 0 8px 8px;
            }}
            .field {{
                margin-bottom: 20px;
            }}
            .field-label {{
                font-weight: 600;
                color: #7b2cbf;
                margin-bottom: 5px;
            }}
            .field-value {{
                background: white;
                padding: 15px;
                border-radius: 4px;
                border-left: 3px solid #00d4ff;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">jarmacz.com</p>
            </div>
            <div class="content">
                <div class="field">
                    <div class="field-label">Name</div>
                    <div class="field-value">{sanitize_input(data['name'])}</div>
                </div>
                <div class="field">
                    <div class="field-label">Email</div>
                    <div class="field-value">{sanitize_input(data['email'])}</div>
                </div>
                <div class="field">
                    <div class="field-label">Organization</div>
                    <div class="field-value">{sanitize_input(data.get('organization', 'Not provided'))}</div>
                </div>
                <div class="field">
                    <div class="field-label">Engagement Type</div>
                    <div class="field-value">{engagement_label}</div>
                </div>
                <div class="field">
                    <div class="field-label">Message</div>
                    <div class="field-value">{sanitize_input(data['message'], 5000).replace(chr(10), '<br>')}</div>
                </div>
                <p style="color: #6c757d; font-size: 14px; margin-top: 30px;">
                    Submitted on {datetime.now().strftime('%B %d, %Y at %I:%M %p')}
                </p>
            </div>
        </div>
    </body>
    </html>
    """
    
    text_body = f"""
    New Contact Form Submission - jarmacz.com
    
    Name: {sanitize_input(data['name'])}
    Email: {sanitize_input(data['email'])}
    Organization: {sanitize_input(data.get('organization', 'Not provided'))}
    Engagement Type: {engagement_label}
    
    Message:
    {sanitize_input(data['message'], 5000)}
    
    Submitted on {datetime.now().strftime('%B %d, %Y at %I:%M %p')}
    """
    
    return html_body, text_body

# ========================================
# API ROUTES
# ========================================

@app.route('/api/contact', methods=['POST'])
@limiter.limit("5 per hour")
def contact():
    """
    Handle contact form submissions
    
    Rate limited to 5 submissions per hour per IP
    """
    try:
        # Get form data
        data = request.get_json()
        
        # Validate data
        is_valid, error_message = validate_contact_form(data)
        if not is_valid:
            return jsonify({
                'success': False,
                'error': error_message
            }), 400
        
        # Format email
        html_body, text_body = format_contact_email(data)
        
        # Send email
        subject = f"New Contact: {data['engagement'].title()} - {data['name']}"
        email_sent = send_email(
            app.config['RECIPIENT_EMAIL'],
            subject,
            html_body,
            text_body
        )
        
        if email_sent:
            # Log submission
            logger.info(f"Contact form submitted by {data['email']} - {data['engagement']}")
            
            return jsonify({
                'success': True,
                'message': 'Thank you for reaching out! I will get back to you soon.'
            }), 200
        else:
            return jsonify({
                'success': False,
                'error': 'Failed to send message. Please try again later.'
            }), 500
            
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        return jsonify({
            'success': False,
            'error': 'An unexpected error occurred. Please try again later.'
        }), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'version': '1.0.0'
    }), 200

@app.route('/api/metrics', methods=['GET'])
def metrics():
    """
    Return site metrics for hero section
    
    In production, these would come from a database
    """
    return jsonify({
        'synergy_optimization': 99.7,
        'active_ventures': 4,
        'research_papers': 12,
        'clients_served': 47,
        'projects_completed': 89
    }), 200

# ========================================
# AI INTEGRATION ENDPOINTS (FUTURE)
# ========================================

@app.route('/api/ai/synthesize', methods=['POST'])
@limiter.limit("10 per hour")
def synthesize_research():
    """
    Endpoint for AI-powered research synthesis
    
    This is a placeholder for future AI integration
    where users can submit research questions and get
    synthetic analysis combining multiple frameworks
    """
    # TODO: Implement AI synthesis using Claude API or similar
    return jsonify({
        'success': False,
        'error': 'AI synthesis feature coming soon'
    }), 501

@app.route('/api/ai/framework-advisor', methods=['POST'])
@limiter.limit("20 per hour")
def framework_advisor():
    """
    Endpoint for framework recommendation system
    
    Users describe their problem, AI recommends
    appropriate framework (HatL, ASO, etc.)
    """
    # TODO: Implement framework recommendation engine
    return jsonify({
        'success': False,
        'error': 'Framework advisor feature coming soon'
    }), 501

# ========================================
# ERROR HANDLERS
# ========================================

@app.errorhandler(404)
def not_found(e):
    """Handle 404 errors"""
    return jsonify({
        'success': False,
        'error': 'Endpoint not found'
    }), 404

@app.errorhandler(429)
def rate_limit_exceeded(e):
    """Handle rate limit errors"""
    return jsonify({
        'success': False,
        'error': 'Rate limit exceeded. Please try again later.'
    }), 429

@app.errorhandler(500)
def internal_error(e):
    """Handle 500 errors"""
    logger.error(f"Internal server error: {str(e)}")
    return jsonify({
        'success': False,
        'error': 'Internal server error. Please try again later.'
    }), 500

# ========================================
# MAIN EXECUTION
# ========================================

if __name__ == '__main__':
    # Development server
    # In production, use gunicorn or similar WSGI server
    # gunicorn -w 4 -b 0.0.0.0:5000 app:app
    
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('DEBUG', 'False').lower() == 'true'
    
    logger.info(f"Starting Flask server on port {port}")
    logger.info(f"Debug mode: {debug}")
    
    app.run(
        host='0.0.0.0',
        port=port,
        debug=debug
    )
