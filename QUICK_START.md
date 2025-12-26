# Quick Start Guide - jarmacz.com

## 🚀 Get Your Website Live in 30 Minutes

This guide gets you from code to production quickly. For detailed instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

---

## Prerequisites Checklist

```bash
✓ cPanel access credentials
✓ Domain jarmacz.com pointed to 162.215.85.33
✓ Gmail account with app password for SMTP
✓ FTP/SFTP client (FileZilla, Cyberduck, or cPanel File Manager)
```

---

## Step 1: Upload Files (5 minutes)

### Option A: cPanel File Manager (Easiest)

1. Log into cPanel at `https://162.215.85.33:2083`
2. Navigate to **File Manager** → `public_html`
3. Upload all files from the `jarmacz-website` folder
4. Ensure directory structure matches:
   ```
   public_html/
   ├── index.html
   ├── .htaccess
   ├── styles/main.css
   ├── js/main.js
   └── api/app.py
   ```

### Option B: FTP/SFTP

```bash
Host: 162.215.85.33
Protocol: SFTP (Port 22) or FTP (Port 21)
Username: [your-cpanel-username]
Password: [your-cpanel-password]

# Upload all files to public_html directory
```

---

## Step 2: Configure SSL (2 minutes)

### Using Let's Encrypt (Free & Automatic)

1. In cPanel, go to **Security** → **SSL/TLS Status**
2. Click **Run AutoSSL**
3. Wait for certificate to be issued (usually instant)
4. Done! Your site is now HTTPS-enabled

---

## Step 3: Set Up Python Backend (10 minutes)

### Via SSH (Recommended)

```bash
# 1. Connect to server
ssh [username]@162.215.85.33

# 2. Navigate to API directory
cd ~/public_html/api

# 3. Create virtual environment
python3 -m venv venv

# 4. Activate environment
source venv/bin/activate

# 5. Install dependencies
pip install -r requirements.txt --break-system-packages

# 6. Create environment file
cat > .env << EOF
FLASK_APP=app.py
FLASK_ENV=production
SECRET_KEY=$(python3 -c "import secrets; print(secrets.token_hex(32))")
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=jayjarmacz@gmail.com
SMTP_PASSWORD=your-gmail-app-password-here
RECIPIENT_EMAIL=jayjarmacz@gmail.com
PORT=5000
DEBUG=False
EOF

# 7. Test the API
python app.py
# Press Ctrl+C after verifying it starts without errors
```

### Get Gmail App Password

1. Go to https://myaccount.google.com/security
2. Enable **2-Step Verification** if not already enabled
3. Search for **App Passwords**
4. Create app password for "Mail"
5. Copy the 16-character password
6. Update `.env` file with this password

---

## Step 4: Configure Apache Proxy (5 minutes)

### Edit .htaccess

Add to the bottom of `.htaccess` file:

```apache
# API Proxy - Add this at the end
<IfModule mod_proxy.c>
    ProxyPreserveHost On
    ProxyPass /api http://127.0.0.1:5000/api
    ProxyPassReverse /api http://127.0.0.1:5000/api
</IfModule>
```

### Start Backend Service

```bash
# Option 1: Simple background process (Quick test)
cd ~/public_html/api
source venv/bin/activate
nohup python app.py > app.log 2>&1 &

# Option 2: Production with Gunicorn (Recommended)
gunicorn -w 4 -b 127.0.0.1:5000 app:app --daemon

# To stop:
pkill -f gunicorn  # or: pkill -f "python app.py"
```

---

## Step 5: Test Everything (5 minutes)

### Frontend Tests

```bash
# 1. Visit homepage
https://jarmacz.com

# Expected: Website loads with animations

# 2. Check HTTPS
# Browser should show padlock icon

# 3. Test navigation
# Click through all menu items

# 4. Test mobile
# Resize browser or use phone
```

### Backend Tests

```bash
# 1. Health check
curl https://jarmacz.com/api/health

# Expected output:
{
  "status": "healthy",
  "timestamp": "2025-10-20T...",
  "version": "1.0.0"
}

# 2. Metrics
curl https://jarmacz.com/api/metrics

# Expected: JSON with metrics

# 3. Contact form (via browser)
# Fill out and submit contact form
# Check email for notification
```

---

## Step 6: Optional Enhancements (5 minutes)

### A. Add Cloudflare CDN

1. Create account at [cloudflare.com](https://cloudflare.com)
2. Add site: jarmacz.com
3. Update nameservers at domain registrar:
   ```
   ns1.cloudflare.com
   ns2.cloudflare.com
   ```
4. Wait for DNS propagation (5-24 hours)
5. Enable these in Cloudflare:
   - ✓ Always Use HTTPS
   - ✓ Auto Minify (HTML, CSS, JS)
   - ✓ Brotli Compression
   - ✓ HTTP/2 & HTTP/3

### B. Set Up Monitoring

1. **UptimeRobot** (free)
   - Sign up at [uptimerobot.com](https://uptimerobot.com)
   - Add monitor for `https://jarmacz.com`
   - Email alerts to: jayjarmacz@gmail.com

2. **Google Analytics** (optional)
   - Create property at [analytics.google.com](https://analytics.google.com)
   - Add tracking code to `<head>` of index.html

---

## Troubleshooting

### Website Not Loading

```bash
# Check Apache is running
sudo systemctl status apache2

# Restart if needed
sudo systemctl restart apache2

# Check permissions
chmod 755 ~/public_html
chmod 644 ~/public_html/index.html
```

### SSL Not Working

```bash
# Force AutoSSL renewal
# cPanel → SSL/TLS Status → Run AutoSSL

# Or check certificate
openssl s_client -connect jarmacz.com:443 -servername jarmacz.com
```

### Contact Form Not Working

```bash
# Check backend is running
ps aux | grep python
ps aux | grep gunicorn

# Check logs
tail -50 ~/public_html/api/app.log

# Restart backend
pkill -f "python app.py"
cd ~/public_html/api
source venv/bin/activate
nohup python app.py > app.log 2>&1 &
```

### Email Not Sending

```bash
# Verify SMTP credentials in .env
cat ~/public_html/api/.env

# Test email manually
python3 << EOF
import smtplib
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login('jayjarmacz@gmail.com', 'your-app-password')
server.sendmail('jayjarmacz@gmail.com', 'jayjarmacz@gmail.com', 'Test')
server.quit()
print("Email sent!")
EOF
```

---

## Performance Check

Run these tests after deployment:

```bash
# 1. PageSpeed Insights
https://pagespeed.web.dev/analysis?url=https://jarmacz.com
Target: Score > 90

# 2. SSL Labs
https://www.ssllabs.com/ssltest/analyze.html?d=jarmacz.com
Target: Grade A+

# 3. Response Time
curl -o /dev/null -s -w "Time: %{time_total}s\n" https://jarmacz.com
Target: < 2 seconds
```

---

## Maintenance Commands

```bash
# Check site is up
curl -I https://jarmacz.com

# View error logs
tail -50 /var/log/apache2/error.log
tail -50 ~/public_html/api/app.log

# Restart backend
cd ~/public_html/api
source venv/bin/activate
pkill -f "python app.py"
nohup python app.py > app.log 2>&1 &

# Update Python packages
pip install --upgrade -r requirements.txt

# Backup website
tar -czf ~/jarmacz-backup-$(date +%Y%m%d).tar.gz ~/public_html
```

---

## Success Checklist

After completing all steps, verify:

```
✓ https://jarmacz.com loads correctly
✓ SSL certificate shows valid
✓ All navigation links work
✓ Neural network animation runs
✓ MathJax equations render
✓ Contact form submits successfully
✓ Email notification received
✓ Mobile version looks good
✓ PageSpeed score > 90
✓ No console errors in browser
✓ Backend API responds
```

---

## Getting Help

1. **Documentation:**
   - Full details: [DEPLOYMENT.md](DEPLOYMENT.md)
   - Technical specs: [README.md](README.md)
   - Overview: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

2. **Support:**
   - Email: jayjarmacz@gmail.com
   - Phone: (917) 566-8112

3. **Common Issues:**
   - See Troubleshooting section above
   - Check server error logs
   - Verify file permissions

---

## Next Steps After Launch

1. **Content:**
   - Add logo assets to `/assets/logos/`
   - Create framework detail pages in `/frameworks/`
   - Upload research papers to `/research/papers/`

2. **Marketing:**
   - Share website on LinkedIn
   - Update email signature with URL
   - Add to business cards

3. **Analytics:**
   - Monitor traffic via Google Analytics
   - Review contact form submissions
   - Track performance metrics

4. **Optimization:**
   - Add more content as it's created
   - Optimize images (WebP format)
   - Expand framework documentation

---

## 🎉 Congratulations!

Your NeuroProgressive AI Evolution Strategist website is now live!

**URL:** https://jarmacz.com  
**Status:** Production-ready  
**Performance:** Optimized  
**Security:** Enterprise-grade  

**Let's make history together!** 🧠🚀

---

**Quick Reference:**

```bash
# Most common commands
cd ~/public_html/api
source venv/bin/activate
python app.py                    # Start backend
tail -f app.log                  # View logs
curl https://jarmacz.com/api/health  # Test API
```
