# Georgette Yvette Ponté - Artist Portfolio Website

**Professional Portfolio Website for Multidisciplinary Artist**

🌐 **Live Site:** *To be deployed on GitHub Pages*

---

## 🎨 About This Website

This is a modern, responsive portfolio website showcasing the work of **Georgette Yvette Ponté**, a Croatian multidisciplinary artist specializing in painting and sculpture.

### Features

✅ **Fully Responsive** - Works beautifully on all devices
✅ **Modern Design** - Clean, elegant, professional aesthetic
✅ **Interactive Gallery** - Lightbox with keyboard navigation
✅ **Smooth Animations** - Subtle scroll effects and transitions
✅ **SEO Optimized** - Meta tags, semantic HTML, fast loading
✅ **Accessibility** - WCAG compliant, keyboard navigation
✅ **Performance** - Optimized images, lazy loading, fast page speed

---

## 📁 File Structure

```
site/
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── images/             # All artwork and photos
    ├── about/          # Artist portrait
    ├── paintings/      # Organized by series
    │   ├── trampled/
    │   ├── golden-age/
    │   ├── woman-as-sea/
    │   ├── savage/
    │   ├── daughters-of-light/
    │   └── restlessness/
    ├── sculptures/     # Sculpture works
    ├── rehabreleased/  # Turntable sculpture project
    ├── exhibitions/    # Exhibition photos
    ├── commissioned-works/
    ├── and-more/       # Collaborative projects
    ├── home.jpg        # Hero background
    └── logo.jpg        # Logo (if needed)
```

---

## 🚀 Quick Start

### View Locally

1. **Open in browser:**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python3 -m http.server 8000
   ```

2. **Visit:** `http://localhost:8000`

### Deploy to GitHub Pages

See **[DEPLOYMENT-GUIDE.md](../DEPLOYMENT-GUIDE.md)** for complete instructions.

**Quick Deploy:**
```bash
git add .
git commit -m "Deploy artist portfolio"
git push origin main

# Enable GitHub Pages:
# Settings → Pages → Source: main → Folder: /docs
```

---

## 🎯 Sections

### 1. **Home / Hero**
- Large hero image with artist name
- Call-to-action button
- Smooth scroll indicator

### 2. **About**
- Artist biography and statement
- Education and credentials
- Awards and achievements
- Professional highlights

### 3. **Paintings**
Six painting series with detailed galleries:
- **Trampled** (6 works) - Vulnerability and resilience
- **Golden Age** (4 works) - Gold leaf divinity
- **Woman as Sea, as Earth** (8 works) - Femininity and nature
- **Savage** (1 monumental work) - Raw human nature
- **Daughters of Light, Ice and Fire** (6 works) - Iceland-inspired
- **Restlessness** (2 works) - Emotional turbulence

### 4. **Sculptures & Installations**
- **rehab^released** - Featured turntable sculpture
- Selected sculpture works
- Collaborative projects (chocolate art)
- Commissioned works gallery

### 5. **Exhibitions & Awards**
- Solo exhibition timeline
- Awards and honors
- Group exhibitions
- Exhibition photography

### 6. **Contact**
- Email contact
- Professional inquiry form

---

## 🎨 Design Specifications

### Color Palette
- **Primary:** `#2c2c2c` (Dark charcoal)
- **Secondary:** `#8b7355` (Warm brown)
- **Accent:** `#d4af37` (Gold)
- **Background:** `#f8f8f8` (Light gray)
- **Text:** `#1a1a1a` (Near black)

### Typography
- **Headings:** Cormorant Garamond (serif)
- **Body:** Montserrat (sans-serif)
- **Weights:** 300, 400, 500, 600, 700

### Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling, Grid, Flexbox
- **JavaScript (Vanilla)** - No frameworks, pure JS
- **Google Fonts** - Cormorant Garamond, Montserrat

---

## ✨ Key Features Explained

### Lightbox Gallery
- Click any artwork to view full-size
- Navigate with keyboard arrows (← →)
- Close with ESC key or X button
- Responsive on all devices

### Smooth Scrolling
- Navigation links scroll smoothly to sections
- Parallax effect on hero image
- Scroll-triggered animations

### Responsive Navigation
- Desktop: Horizontal menu with dropdowns
- Mobile: Hamburger menu
- Sticky header on scroll

### Performance Optimizations
- Lazy loading images
- Debounced scroll events
- Optimized animations
- Minified assets ready

---

## 📝 Content Management

### Adding New Artwork

1. **Add image** to appropriate folder:
   ```
   images/paintings/[series-name]/artwork-name.jpg
   ```

2. **Update HTML** in `index.html`:
   ```html
   <div class="gallery-item" data-title="Artwork Title" data-dimensions="100 × 80 cm">
       <img src="images/paintings/series/artwork.jpg" alt="Artwork Title">
       <div class="gallery-overlay">
           <h4>Artwork Title</h4>
           <p>100 × 80 cm</p>
       </div>
   </div>
   ```

### Updating Exhibition Info

Edit the timeline section in `index.html`:
```html
<div class="timeline-item">
    <span class="year">2025</span>
    <h4>Exhibition Title</h4>
    <p>Gallery Name, Location</p>
</div>
```

---

## 🔍 SEO & Analytics

### Meta Tags Included
- Title and description
- Open Graph for social sharing
- Keywords for search engines
- Author and copyright

### To Add Google Analytics
See **DEPLOYMENT-GUIDE.md** for instructions.

---

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Alt text for all images
- High contrast ratios
- Focus indicators

---

## 📱 Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔄 Updates & Maintenance

### Regular Updates
- Add new artworks as created
- Update exhibition information
- Add awards and honors
- Refresh biography as needed

### Image Guidelines
- **Format:** JPG for photos, PNG for graphics
- **Size:** Max 2000px width recommended
- **Compression:** Use TinyPNG or similar
- **Quality:** 80-85% for web

---

## 📞 Support

**Artist Contact:**
Georgette Yvette Ponté
Email: georgetteponte@gmail.com

**Technical Issues:**
Refer to DEPLOYMENT-GUIDE.md or GitHub Pages documentation.

---

## 📄 License

All artwork and content © 2025 Georgette Yvette Ponté. All rights reserved.

Website code can be reused with attribution.

---

## 🙏 Credits

**Artist:** Georgette Yvette Ponté
**Photography:** Various (credited where applicable)
**Website Design & Development:** Custom built for artist portfolio

---

**Built with ❤️ for showcasing fine art**

*Last Updated: 2025*
