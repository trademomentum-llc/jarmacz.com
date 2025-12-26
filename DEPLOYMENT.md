# jarmacz.com Deployment Guide

## NeuroProgressive AI Evolution Strategist Website
**Technical Deployment & Operations Documentation**

---

## Table of Contents
1. [System Architecture](#system-architecture)
2. [Server Specifications](#server-specifications)
3. [Initial Setup](#initial-setup)
4. [DNS Configuration](#dns-configuration)
5. [SSL/TLS Setup](#ssltls-setup)
6. [File Deployment](#file-deployment)
7. [Backend Deployment](#backend-deployment)
8. [Testing & Validation](#testing--validation)
9. [Monitoring & Analytics](#monitoring--analytics)
10. [Maintenance Procedures](#maintenance-procedures)

---

## System Architecture

### Technology Stack

**Frontend:**
- HTML5 with semantic markup
- CSS3 with CSS Custom Properties
- Vanilla JavaScript (ES6+)
- Canvas API for interactive visualizations
- MathJax for LaTeX equation rendering

**Backend:**
- Python 3.9+ with Flask framework
- RESTful API architecture
- SMTP for email delivery
- Rate limiting via Flask-Limiter
- Redis for session management (optional)

**Infrastructure:**
- Server IP: 162.215.85.33
- cPanel hosting environment
- Apache HTTP Server
- SSL/TLS via Let's Encrypt or purchased certificate
- CDN: Cloudflare (recommended)

### Architecture Diagram

```
┌─────────────────┐
│   Cloudflare    │  ← CDN & DDoS Protection
│      CDN        │
└────────┬────────┘
         │
         ↓
┌─────────────────────────────────────┐
│   Apache Web Server (162.215.85.33) │
├─────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐ │
│  │   Static     │  │    Flask     │ │
│  │  Frontend    │  │   Backend    │ │
│  │   (HTML/     │  │    API       │ │
│  │   CSS/JS)    │  │  (Python)    │ │
│  └──────────────┘  └──────────────┘ │
└─────────────────────────────────────┘
         │                 │
         ↓                 ↓
    ┌─────────┐      ┌─────────┐
    │  Logs   │      │  SMTP   │
    └─────────┘      └─────────┘
```

---

## Server Specifications

### Minimum Requirements
- **RAM:** 2GB (4GB recommended)
- **CPU:** 2 cores minimum
- **Storage:** 20GB SSD
- **Bandwidth:** 100GB/month minimum
- **PHP:** 7.4+ (for cPanel)
- **Python:** 3.9+
- **Apache:** 2.4+

### Current Configuration
```
Server IP: 162.215.85.33
Domain: jarmacz.com
Control Panel: cPanel
OS: Linux (CentOS/AlmaLinux)
```

---

## Initial Setup

### 1. Access cPanel

```bash
URL: https://162.215.85.33:2083
# Or via domain: https://jarmacz.com:2083
Username: [your_cpanel_username]
Password: [your_cpanel_password]
```

### 2. Create Directory Structure

Via cPanel File Manager or SSH:

```bash
/home/[username]/public_html/
├── index.html
├── .htaccess
├── styles/
│   └── main.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── logos/
├── api/
│   └── app.py
├── frameworks/
│   ├── neuroprogressive.html
│   ├── synthetic.html
│   ├── shared-autonomy.html
│   └── strategy.html
├── research/
│   └── index.html
└── 404.html
```

### 3. Set Permissions

```bash
# Via SSH
chmod 755 /home/[username]/public_html
chmod 644 /home/[username]/public_html/index.html
chmod 644 /home/[username]/public_html/.htaccess
chmod 755 /home/[username]/public_html/api
chmod 644 /home/[username]/public_html/api/app.py
```

---

## DNS Configuration

### Primary Domain Setup

**A Record:**
```
Type: A
Host: @
Value: 162.215.85.33
TTL: 14400 (4 hours)
```

**WWW Subdomain:**
```
Type: CNAME
Host: www
Value: jarmacz.com
TTL: 14400
```

### Subdomain Configuration (if needed)

**API Subdomain:**
```
Type: A
Host: api
Value: 162.215.85.33
TTL: 14400
```

**CDN/Assets Subdomain:**
```
Type: A
Host: cdn
Value: 162.215.85.33
TTL: 14400
```

### Cloudflare Setup (Recommended)

1. **Add Site to Cloudflare:**
   - Sign up at cloudflare.com
   - Add jarmacz.com
   - Update nameservers at domain registrar

2. **Cloudflare Nameservers:**
   ```
   ns1.cloudflare.com
   ns2.cloudflare.com
   ```

3. **Cloudflare Settings:**
   - SSL/TLS: Full (strict)
   - Always Use HTTPS: On
   - Auto Minify: HTML, CSS, JS
   - Brotli Compression: On
   - HTTP/2: On
   - HTTP/3 (QUIC): On
   - Caching Level: Standard
   - Browser Cache TTL: 4 hours

---

## SSL/TLS Setup

### Option 1: Let's Encrypt (Free - via cPanel)

1. Navigate to cPanel → SSL/TLS Status
2. Select "Run AutoSSL"
3. System will automatically provision certificate
4. Certificate auto-renews every 90 days

### Option 2: Custom SSL Certificate

1. Purchase SSL from provider (e.g., Comodo, DigiCert)
2. Generate CSR in cPanel:
   ```
   cPanel → SSL/TLS → Generate CSR
   ```
3. Submit CSR to certificate authority
4. Install certificate in cPanel:
   ```
   cPanel → SSL/TLS → Manage SSL
   ```

### Verify SSL Installation

```bash
# Test SSL configuration
openssl s_client -connect jarmacz.com:443 -servername jarmacz.com

# Check certificate expiration
echo | openssl s_client -servername jarmacz.com -connect jarmacz.com:443 2>/dev/null | openssl x509 -noout -dates

# Online tool
https://www.ssllabs.com/ssltest/analyze.html?d=jarmacz.com
```

Target: A+ rating on SSL Labs

---

## File Deployment

### Method 1: FTP/SFTP Upload

```bash
# Using FileZilla or similar FTP client
Host: 162.215.85.33 or ftp.jarmacz.com
Protocol: SFTP (SSH File Transfer Protocol)
Port: 22 (SSH) or 21 (FTP)
Username: [cpanel_username]
Password: [cpanel_password]
```

### Method 2: Git Deployment

```bash
# On your local machine
git init
git add .
git commit -m "Initial deployment"
git remote add origin [your-repo-url]
git push origin main

# On server (via SSH)
cd /home/[username]/public_html
git clone [your-repo-url] .
# Or for updates:
git pull origin main
```

### Method 3: cPanel File Manager

1. Log into cPanel
2. Navigate to File Manager
3. Go to public_html directory
4. Upload files via upload button
5. Extract if uploaded as .zip

### File Verification Checklist

```bash
✓ index.html in root
✓ styles/main.css present
✓ js/main.js present
✓ .htaccess configured
✓ assets/logos/ populated
✓ 404.html present
✓ All file permissions correct
```

---

## Backend Deployment

### 1. Python Environment Setup

```bash
# SSH into server
ssh [username]@162.215.85.33

# Navigate to API directory
cd /home/[username]/public_html/api

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Environment Configuration

Create `.env` file:

```bash
# /home/[username]/public_html/api/.env

# Flask Configuration
FLASK_APP=app.py
FLASK_ENV=production
SECRET_KEY=[generate-random-secret-key]

# SMTP Configuration
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=jayjarmacz@gmail.com
SMTP_PASSWORD=[your-app-specific-password]
RECIPIENT_EMAIL=jayjarmacz@gmail.com

# Server Configuration
PORT=5000
DEBUG=False
```

**Generate Secret Key:**
```python
python3 -c "import secrets; print(secrets.token_hex(32))"
```

### 3. Gmail App Password Setup

For SMTP_PASSWORD:
1. Enable 2-Factor Authentication on Gmail
2. Go to Google Account → Security → App Passwords
3. Generate app password for "Mail"
4. Use generated password in .env file

### 4. Running Flask Backend

**Development (Testing):**
```bash
cd /home/[username]/public_html/api
source venv/bin/activate
python app.py
```

**Production (with Gunicorn):**
```bash
# Install supervisor for process management
pip install supervisor

# Create supervisor config
# /etc/supervisor/conf.d/jarmacz-api.conf

[program:jarmacz-api]
directory=/home/[username]/public_html/api
command=/home/[username]/public_html/api/venv/bin/gunicorn -w 4 -b 127.0.0.1:5000 app:app
autostart=true
autorestart=true
stderr_logfile=/var/log/jarmacz-api.err.log
stdout_logfile=/var/log/jarmacz-api.out.log
user=[username]
environment=PATH="/home/[username]/public_html/api/venv/bin"

# Start the service
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start jarmacz-api
```

### 5. Apache Proxy Configuration

Add to .htaccess or create Apache virtual host config:

```apache
# Proxy API requests to Flask backend
<IfModule mod_proxy.c>
    ProxyPreserveHost On
    ProxyPass /api http://127.0.0.1:5000/api
    ProxyPassReverse /api http://127.0.0.1:5000/api
</IfModule>
```

If using virtual host, create:
```apache
# /etc/apache2/sites-available/jarmacz.conf

<VirtualHost *:443>
    ServerName jarmacz.com
    ServerAlias www.jarmacz.com
    
    DocumentRoot /home/[username]/public_html
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /path/to/certificate.crt
    SSLCertificateKeyFile /path/to/private.key
    SSLCertificateChainFile /path/to/ca_bundle.crt
    
    # Proxy API requests
    ProxyPreserveHost On
    ProxyPass /api http://127.0.0.1:5000/api
    ProxyPassReverse /api http://127.0.0.1:5000/api
    
    # Static files
    <Directory /home/[username]/public_html>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    # Logging
    ErrorLog ${APACHE_LOG_DIR}/jarmacz-error.log
    CustomLog ${APACHE_LOG_DIR}/jarmacz-access.log combined
</VirtualHost>

# Enable site
sudo a2ensite jarmacz.conf
sudo systemctl reload apache2
```

---

## Testing & Validation

### Frontend Testing

```bash
# 1. Page Load Test
curl -I https://jarmacz.com
# Expected: HTTP/2 200

# 2. SSL Test
curl -vI https://jarmacz.com 2>&1 | grep -i ssl
# Should show valid SSL certificate

# 3. Response Time Test
curl -o /dev/null -s -w "Total time: %{time_total}s\n" https://jarmacz.com
# Target: < 2 seconds

# 4. Compression Test
curl -H "Accept-Encoding: gzip" -I https://jarmacz.com
# Should show: Content-Encoding: gzip
```

### Backend API Testing

```bash
# Health check
curl https://jarmacz.com/api/health

# Expected response:
{
    "status": "healthy",
    "timestamp": "2025-10-20T...",
    "version": "1.0.0"
}

# Metrics endpoint
curl https://jarmacz.com/api/metrics

# Contact form test
curl -X POST https://jarmacz.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "engagement": "consulting",
    "message": "This is a test message"
  }'
```

### Browser Testing Matrix

Test on:
- ✓ Chrome/Edge (latest)
- ✓ Firefox (latest)
- ✓ Safari (latest)
- ✓ Mobile browsers (iOS Safari, Chrome Mobile)

### Validation Checklist

```
✓ Homepage loads correctly
✓ All navigation links work
✓ Neural network animation runs smoothly
✓ HatL visualization canvas renders
✓ MathJax equations display correctly
✓ Contact form submits successfully
✓ Form validation works
✓ Email notifications received
✓ Mobile responsive design functions
✓ SSL certificate valid
✓ All assets load via HTTPS
✓ No console errors
✓ Page load time < 2 seconds
✓ Lighthouse score > 90
```

---

## Monitoring & Analytics

### Google Analytics Setup

```html
<!-- Add to <head> of index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Uptime Monitoring

**Recommended Services:**
1. **UptimeRobot** (uptimerobot.com)
   - Free tier: 50 monitors
   - Check interval: 5 minutes
   - Monitor: https://jarmacz.com

2. **Pingdom** (pingdom.com)
   - More detailed analytics
   - Transaction monitoring

**Configuration:**
```
Monitor Type: HTTP(s)
URL: https://jarmacz.com
Keyword: NeuroProgressive
Alert Contacts: jayjarmacz@gmail.com
```

### Server Monitoring

```bash
# Install monitoring tools
sudo apt-get install htop iotop nethogs

# Check server resources
htop  # CPU and RAM usage
df -h  # Disk usage
free -h  # Memory usage

# Monitor Apache
sudo systemctl status apache2
sudo tail -f /var/log/apache2/error.log
sudo tail -f /var/log/apache2/access.log

# Monitor Flask backend
sudo supervisorctl status jarmacz-api
sudo tail -f /var/log/jarmacz-api.out.log
sudo tail -f /var/log/jarmacz-api.err.log
```

### Performance Monitoring

**Tools:**
1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Target: Score > 90

2. **GTmetrix**
   - URL: https://gtmetrix.com/
   - Target: Grade A

3. **WebPageTest**
   - URL: https://www.webpagetest.org/
   - Monitor: TTFB, First Paint, Speed Index

---

## Maintenance Procedures

### Daily Checks

```bash
# Automated monitoring alerts should cover:
- Site uptime (>99.9%)
- SSL certificate validity
- Disk space (alert if >80%)
- Error log size
```

### Weekly Tasks

```bash
# Review logs
tail -100 /var/log/apache2/error.log
tail -100 /var/log/jarmacz-api.err.log

# Check form submissions
# Review contact form submissions in email

# Monitor performance
# Check Google Analytics for traffic anomalies
# Review PageSpeed Insights scores
```

### Monthly Tasks

```bash
# Update dependencies
cd /home/[username]/public_html/api
source venv/bin/activate
pip list --outdated
pip install --upgrade [package-name]

# Backup
# Create full backup via cPanel
# Download backup locally

# SSL certificate check
# Verify auto-renewal is working

# Security audit
# Review Apache logs for suspicious activity
# Check rate limiting is effective
```

### Backup Procedures

**Automated Backups (cPanel):**
1. cPanel → Backup Wizard
2. Enable automatic backups
3. Frequency: Daily
4. Retention: 30 days

**Manual Backup:**
```bash
# SSH into server
cd /home/[username]

# Create backup
tar -czf jarmacz-backup-$(date +%Y%m%d).tar.gz public_html/

# Download backup
# Via FTP or:
scp [username]@162.215.85.33:/home/[username]/jarmacz-backup-*.tar.gz ./

# Backup database (if applicable)
# mysqldump -u [user] -p [database] > backup.sql
```

**Offsite Backup Storage:**
- Google Drive
- AWS S3
- Dropbox
- GitHub (private repo)

### Update Procedures

**Content Updates:**
```bash
# 1. Test locally
# 2. Deploy via FTP/Git
# 3. Clear Cloudflare cache
# 4. Verify changes in browser
```

**Code Updates:**
```bash
# Backend updates
cd /home/[username]/public_html/api
source venv/bin/activate
git pull origin main  # if using git
pip install -r requirements.txt
sudo supervisorctl restart jarmacz-api

# Frontend updates
cd /home/[username]/public_html
git pull origin main  # if using git
# Or upload via FTP

# Clear CDN cache
# Cloudflare dashboard → Caching → Purge Everything
```

### Troubleshooting

**Site Down:**
```bash
# Check Apache
sudo systemctl status apache2
sudo systemctl restart apache2

# Check disk space
df -h
# If full, clean logs:
sudo truncate -s 0 /var/log/apache2/*.log

# Check DNS
dig jarmacz.com
nslookup jarmacz.com
```

**API Not Responding:**
```bash
# Check Flask process
sudo supervisorctl status jarmacz-api
sudo supervisorctl restart jarmacz-api

# Check logs
sudo tail -50 /var/log/jarmacz-api.err.log

# Check port
netstat -tulpn | grep 5000

# Restart if needed
sudo supervisorctl restart jarmacz-api
```

**SSL Issues:**
```bash
# Check certificate
openssl x509 -in /path/to/cert.crt -text -noout

# Renew Let's Encrypt
sudo certbot renew --dry-run
sudo certbot renew

# Reload Apache
sudo systemctl reload apache2
```

---

## Emergency Contacts

**Technical Support:**
- Hosting Provider: [hosting provider support]
- DNS Provider: [dns provider support]
- Cloudflare: support.cloudflare.com

**Developer:**
- Jason Jarmacz
- Email: jayjarmacz@gmail.com
- Phone: (917) 566-8112

---

## Changelog

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2025-10-20 | 1.0.0 | Initial deployment | Jason Jarmacz |

---

## Additional Resources

- **Flask Documentation:** https://flask.palletsprojects.com/
- **Apache Documentation:** https://httpd.apache.org/docs/
- **cPanel Documentation:** https://docs.cpanel.net/
- **Cloudflare Documentation:** https://developers.cloudflare.com/
- **Let's Encrypt:** https://letsencrypt.org/docs/

---

**End of Deployment Guide**

For questions or issues, contact Jason Jarmacz at jayjarmacz@gmail.com
