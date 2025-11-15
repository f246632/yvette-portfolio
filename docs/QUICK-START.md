# 🚀 Quick Start Guide

## Georgette Yvette Ponté - Portfolio Website

**Congratulations! Your professional artist portfolio website is ready!**

---

## 📍 Your Website Files

All website files are located in:
```
docs/site/
├── index.html     ← Main website file
├── styles.css     ← All styling
├── script.js      ← Interactive features
├── README.md      ← Site documentation
└── images/        ← All 92 images (44MB)
```

---

## 👀 View Your Website Now

### Option 1: Open Directly (Easiest)
1. Navigate to: `docs/site/`
2. Double-click `index.html`
3. It will open in your default browser

### Option 2: Local Server (Recommended)
```bash
cd docs/site
python3 -m http.server 8000
```
Then visit: **http://localhost:8000**

---

## 🌐 Deploy to GitHub Pages (Make it Live!)

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name it: `yvette-portfolio`
4. Make it **Public**
5. Don't initialize with README (you already have one)
6. Click "Create repository"

### Step 2: Upload Your Website
```bash
# In your terminal, from the project root:
cd /Users/m./doctors-rijeka/yvette-website-content

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Professional artist portfolio"

# Connect to GitHub (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/yvette-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**:
   - Branch: `main`
   - Folder: `/docs`
4. Click **Save**
5. Wait 2-5 minutes

### Step 4: Visit Your Live Site! 🎉
Your website will be at:
```
https://USERNAME.github.io/yvette-portfolio/site/
```
*(Replace USERNAME with your GitHub username)*

---

## ✨ What's Included

### 🎨 6 Painting Series (29 artworks)
- **Trampled** - 6 large-scale works
- **Golden Age** - 4 works with gold leaf
- **Woman as Sea, as Earth** - 8 works
- **Savage** - Monumental 400×300cm piece
- **Daughters of Light, Ice and Fire** - 6 Iceland-inspired works
- **Restlessness** - 2 large works

### 🗿 Sculptures & Projects
- rehab^released turntable sculpture
- Selected sculpture works
- Collaborative chocolate projects
- Commissioned works gallery

### 🏆 Professional Content
- Complete artist biography
- 14+ solo exhibitions
- 38+ group exhibitions
- 11+ awards and honors
- Education credentials
- Contact information

### 🎯 Technical Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Interactive lightbox gallery
- ✅ Smooth animations
- ✅ Fast loading
- ✅ SEO optimized
- ✅ Professional design

---

## 🛠️ Customization Guide

### Update Contact Email
**File:** `docs/site/index.html`
**Line:** Search for `georgetteponte@gmail.com`

```html
<a href="mailto:YOUR-EMAIL@gmail.com">YOUR-EMAIL@gmail.com</a>
```

### Change Colors
**File:** `docs/site/styles.css`
**Lines:** 16-22

```css
:root {
    --primary-color: #2c2c2c;    /* Change this */
    --secondary-color: #8b7355;   /* And this */
    --accent-color: #d4af37;      /* And this */
    /* ... */
}
```

### Add New Artwork
1. Add image to: `docs/site/images/paintings/[series-name]/`
2. Edit `docs/site/index.html`
3. Find the correct series section
4. Copy an existing gallery-item and update:
```html
<div class="gallery-item" data-title="New Work" data-dimensions="100 × 80 cm">
    <img src="images/paintings/series/new-work.jpg" alt="New Work">
    <div class="gallery-overlay">
        <h4>New Work</h4>
        <p>100 × 80 cm</p>
    </div>
</div>
```

---

## 📱 Mobile Responsive

The website automatically adapts to:
- 📱 Mobile phones (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Laptops (1024px - 1439px)
- 🖥️ Desktops (1440px+)

---

## 🎨 Design Features

### Navigation
- Sticky header that stays at top when scrolling
- Dropdown menu for painting series
- Mobile hamburger menu on small screens
- Smooth scroll to sections

### Gallery
- Click any image to view full-size
- Navigate with arrows (← →) or buttons
- Press ESC to close
- Works perfectly on mobile

### Animations
- Fade-in effects on scroll
- Smooth transitions
- Parallax hero image
- Hover effects on artworks

---

## 📊 Website Statistics

- **Total Files:** 96 (92 images + 4 code files)
- **Total Size:** ~44MB
- **Images:** All properly organized by category
- **Code:** Clean, commented, professional
- **Pages:** Single-page application (SPA)
- **Loading Speed:** Fast (optimized)

---

## 🔧 Troubleshooting

### Images Not Showing?
- Check file names match exactly (case-sensitive)
- Verify images are in `docs/site/images/` folder
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### GitHub Pages Not Working?
- Wait 5-10 minutes after enabling
- Check Settings → Pages shows green checkmark
- Verify folder is set to `/docs`

### Want to Use Custom Domain?
See detailed instructions in `DEPLOYMENT-GUIDE.md`

---

## 📖 Full Documentation

For complete guides, see:
- **docs/site/README.md** - Site documentation
- **docs/DEPLOYMENT-GUIDE.md** - Deployment details
- **docs/QUICK-START.md** - This file

---

## 🎯 Next Steps

1. ✅ View website locally (open `index.html`)
2. ✅ Review all content
3. ✅ Make any desired changes
4. ✅ Deploy to GitHub Pages
5. ✅ Share with the world!

---

## 💡 Pro Tips

### Optimize Images Before Deploying
- Use [TinyPNG.com](https://tinypng.com) to compress images
- Aim for 80-85% quality, max 2000px width
- Can reduce site size by 50-70%

### Add Google Analytics
See `DEPLOYMENT-GUIDE.md` for instructions

### Custom Domain
- Purchase domain (namecheap.com, godaddy.com)
- Point DNS to GitHub Pages
- Add CNAME file to `docs/site/`

### Share on Social Media
The site includes Open Graph tags - links will show nice previews when shared!

---

## ✉️ Support

**Website built for:**
Georgette Yvette Ponté
Email: georgetteponte@gmail.com

**For technical issues:**
- Check DEPLOYMENT-GUIDE.md
- GitHub Pages docs: https://docs.github.com/pages
- Open an issue on your GitHub repository

---

## 🎉 You're All Set!

Your professional artist portfolio website is complete and ready to showcase your amazing work to the world.

**Local preview:** `docs/site/index.html`
**After deploying:** `https://[USERNAME].github.io/[REPO]/site/`

**Good luck with your exhibitions and artistic journey! 🎨**

---

*Built with care for showcasing fine art*
*Last updated: November 2025*
