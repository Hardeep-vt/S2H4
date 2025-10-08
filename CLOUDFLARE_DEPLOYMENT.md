# S2H4 Cloudflare Pages Deployment Guide

## 🚀 Quick Deploy

Your S2H4 website is configured for Cloudflare Pages with static export.

### **Prerequisites**
- GitHub repository: https://github.com/Hardeep-vt/S2H4
- Cloudflare account with Pages access

---

## 📋 Deployment Steps

### **1. Connect Repository**

1. Go to https://dash.cloudflare.com
2. Navigate to **Workers & Pages** → **Pages**
3. Click **"Create application"** → **"Connect to Git"**
4. Authorize GitHub if needed
5. Select your **"S2H4"** repository

### **2. Configure Build Settings**

```
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Root directory: / (leave empty)
Environment variables: (none required)
```

### **3. Deploy**

Click **"Save and Deploy"** - Your site will be live in ~2 minutes!

---

## 🌐 Custom Domain Setup

### **Add Your Domain:**

1. In your Pages project, click **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter your domain name (e.g., `s2h4wellness.com`)
4. Cloudflare will automatically configure DNS records

### **DNS Configuration:**

If your domain is already on Cloudflare:
- ✅ Automatic DNS configuration
- ✅ SSL/TLS certificates handled automatically

If your domain is elsewhere:
- Add the CNAME records provided by Cloudflare
- Wait for DNS propagation (up to 24 hours)

---

## 🔧 Build Configuration

### **Next.js Static Export**

The project uses `output: 'export'` in `next.config.js` to generate static HTML files.

### **Key Files:**

- `next.config.js` - Configures static export
- `wrangler.toml` - Cloudflare Pages configuration
- `public/_routes.json` - Routes configuration (disables Workers)

### **Output Directory:**

All static files are generated in the `out/` directory:
```
out/
├── _next/          # JavaScript and CSS bundles
├── images/         # Your product images
├── index.html      # Main page
└── 404.html        # Error page
```

---

## 🔄 Automatic Deployments

Cloudflare Pages automatically deploys when you push to the `main` branch:

1. Make changes locally
2. Commit: `git add . && git commit -m "Your message"`
3. Push: `git push origin main`
4. Cloudflare automatically builds and deploys

### **Watch Deployment Progress:**

Go to your project → **Deployments** tab to see:
- Build logs
- Deployment status
- Preview URLs for each deployment

---

## 📝 Environment Variables

Currently, no environment variables are required. If you need to add any:

1. Go to **Settings** → **Environment variables**
2. Add variables for Production/Preview environments
3. Re-deploy to apply changes

---

## 🐛 Troubleshooting

### **Issue: Shows "Hello World" instead of website**

**Solution:** Make sure the Worker is disabled:
- Check that `public/_routes.json` exists
- Go to Settings → Functions and disable if present
- Clear build cache and re-deploy

### **Issue: Images not loading**

**Solution:** 
- Images must be in `public/images/` directory
- They will be copied to `out/images/` during build
- Verify images exist in the `out/` directory after build

### **Issue: Build fails**

**Solution:**
1. Check build logs in Cloudflare dashboard
2. Verify `npm run build` works locally
3. Clear build cache in Cloudflare settings
4. Try a fresh deployment

---

## 📊 Performance

Cloudflare Pages provides:
- ✅ Global CDN with 300+ locations
- ✅ Automatic HTTP/3 and IPv6
- ✅ DDoS protection
- ✅ Free SSL/TLS certificates
- ✅ Unlimited bandwidth

---

## 🔗 Useful Links

- **Cloudflare Dashboard:** https://dash.cloudflare.com
- **GitHub Repository:** https://github.com/Hardeep-vt/S2H4
- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages

---

## 📧 Contact

For issues with your S2H4 website, contact: s2h4.wellness@gmail.com

