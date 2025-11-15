# GitHub Pages Deployment Guide

## Georgette Yvette Ponté - Artist Portfolio Website

This guide will help you deploy the artist portfolio website to GitHub Pages.

---

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- All website files (HTML, CSS, JS, images)

---

## 🚀 Quick Deployment Steps

### Option 1: Deploy from `docs/site` folder (Recommended)

1. **Create a new GitHub repository:**
   ```bash
   # Go to GitHub.com and create a new repository named:
   # yvette-portfolio (or any name you prefer)
   ```

2. **Initialize git in your project (if not already done):**
   ```bash
   cd /path/to/yvette-website-content
   git init
   git add .
   git commit -m "Initial commit: Artist portfolio website"
   ```

3. **Connect to GitHub repository:**
   ```bash
   # Replace USERNAME with your GitHub username
   git remote add origin https://github.com/USERNAME/yvette-portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch
   - Under "Folder", select "/docs"
   - Click "Save"
   - Your site will be published at: `https://USERNAME.github.io/yvette-portfolio/site/`

### Option 2: Deploy with Custom Domain

1. **Follow steps 1-3 from Option 1**

2. **Add custom domain (optional):**
   - In GitHub repository settings → Pages
   - Enter your custom domain (e.g., `georgetteponte.com`)
   - Create a file named `CNAME` in the `docs/site/` folder:
     ```bash
     echo "georgetteponte.com" > docs/site/CNAME
     git add docs/site/CNAME
     git commit -m "Add custom domain"
     git push
     ```

3. **Configure DNS:**
   - Add these DNS records at your domain provider:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153

     Type: A
     Name: @
     Value: 185.199.109.153

     Type: A
     Name: @
     Value: 185.199.110.153

     Type: A
     Name: @
     Value: 185.199.111.153

     Type: CNAME
     Name: www
     Value: USERNAME.github.io
     ```

---

## 📁 File Structure for GitHub Pages

Your repository should have this structure:

```
yvette-website-content/
├── docs/
│   ├── site/
│   │   ├── index.html         # Main HTML file
│   │   ├── styles.css         # Styles
│   │   ├── script.js          # JavaScript
│   │   ├── images/            # All images organized by category
│   │   │   ├── about/
│   │   │   ├── paintings/
│   │   │   ├── sculptures/
│   │   │   ├── exhibitions/
│   │   │   └── ...
│   │   └── CNAME (optional)   # For custom domain
│   ├── DEPLOYMENT-GUIDE.md    # This file
│   └── ...
├── content/                   # JSON content files (not deployed)
└── README.md
```

---

## 🔧 Configuration

### Update Base URL (if needed)

If your site is in a subdirectory, you may need to update image paths:

**In `index.html`, change:**
```html
<!-- From: -->
<img src="images/home.jpg">

<!-- To: -->
<img src="site/images/home.jpg">
```

**Or use absolute paths:**
```html
<img src="https://USERNAME.github.io/yvette-portfolio/site/images/home.jpg">
```

---

## 🎨 Customization

### Update Site Content

1. **Edit HTML** (`docs/site/index.html`):
   - Update text, descriptions, exhibition dates
   - Add or remove artwork sections
   - Modify contact information

2. **Edit Styles** (`docs/site/styles.css`):
   - Change colors in `:root` variables
   - Adjust fonts, spacing, layouts
   - Customize animations

3. **Update JavaScript** (`docs/site/script.js`):
   - Modify gallery behavior
   - Adjust animations and effects

### Add New Images

1. Place images in appropriate folders:
   ```
   docs/site/images/paintings/[series-name]/
   docs/site/images/sculptures/
   docs/site/images/exhibitions/
   ```

2. Update HTML to reference new images:
   ```html
   <div class="gallery-item">
       <img src="images/paintings/new-series/artwork.jpg" alt="Artwork Title">
   </div>
   ```

---

## 🧪 Testing Locally

Before deploying, test your site locally:

1. **Using Python:**
   ```bash
   cd docs/site
   python3 -m http.server 8000
   # Visit: http://localhost:8000
   ```

2. **Using Node.js:**
   ```bash
   cd docs/site
   npx http-server -p 8000
   # Visit: http://localhost:8000
   ```

3. **Using VS Code:**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

---

## 📱 Responsive Design

The website is fully responsive and works on:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 768px)

Test on multiple devices before deploying!

---

## 🔍 SEO Optimization

The site includes:
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Semantic HTML5
- ✅ Alt text for images
- ✅ Fast loading times
- ✅ Mobile-friendly design

### Add Google Analytics (optional)

Add before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🚨 Troubleshooting

### Site not loading?
- Check that GitHub Pages is enabled in repository settings
- Verify the correct folder is selected (`/docs`)
- Wait 5-10 minutes for GitHub to build and deploy

### Images not showing?
- Check file paths are correct (case-sensitive!)
- Verify images are in the `docs/site/images/` folder
- Check image file extensions match (`.jpg` vs `.JPG`)

### CSS/JS not working?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors (F12)
- Verify file paths in HTML are correct

### Custom domain not working?
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Verify CNAME file exists with correct domain

---

## 📈 Performance Optimization

### Optimize Images

Before uploading, compress images:
- Use [TinyPNG](https://tinypng.com) or [ImageOptim](https://imageoptim.com)
- Recommended: Max width 2000px, 80% quality
- Convert to WebP for better compression

### Enable Caching

Add `.htaccess` or use Cloudflare for caching.

### Lighthouse Score

Run Google Lighthouse audit:
- Right-click → Inspect → Lighthouse
- Aim for 90+ scores in all categories

---

## 🔄 Updating the Site

To update content after deployment:

```bash
# Make changes to files
git add .
git commit -m "Update: Description of changes"
git push

# Changes will be live in 1-5 minutes
```

---

## 🆘 Support

For issues or questions:
- GitHub Pages Docs: https://docs.github.com/en/pages
- GitHub Community: https://github.community
- Web Dev Resources: https://developer.mozilla.org

---

## ✨ Features

This website includes:
- ✅ Responsive navigation with dropdown menus
- ✅ Smooth scrolling and animations
- ✅ Lightbox gallery with keyboard navigation
- ✅ Organized painting series with descriptions
- ✅ Sculptures and installations showcase
- ✅ Exhibition timeline and awards
- ✅ Contact section
- ✅ Professional typography and spacing
- ✅ Accessibility features
- ✅ Performance optimized
- ✅ SEO ready

---

## 📝 License

All content © 2025 Georgette Yvette Ponté. All rights reserved.

---

**Your website is ready to go live! 🎨**

Visit: `https://[USERNAME].github.io/[REPO-NAME]/site/`

Replace `[USERNAME]` with your GitHub username and `[REPO-NAME]` with your repository name.
