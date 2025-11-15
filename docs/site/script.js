// ========================================
// NAVIGATION
// ========================================

// Sticky navigation
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ========================================
// SMOOTH SCROLLING
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = nav.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// LIGHTBOX GALLERY
// ========================================

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDimensions = document.getElementById('lightbox-dimensions');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentImageIndex = 0;
let galleryImages = [];

// Initialize gallery items
const initGallery = () => {
    const items = document.querySelectorAll('.gallery-item');
    galleryImages = Array.from(items);

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
};

// Open lightbox
const openLightbox = (index) => {
    currentImageIndex = index;
    const item = galleryImages[index];
    const img = item.querySelector('img');
    const title = item.getAttribute('data-title') || '';
    const dimensions = item.getAttribute('data-dimensions') || '';

    lightboxImg.src = img.src;
    lightboxTitle.textContent = title;
    lightboxDimensions.textContent = dimensions;
    lightbox.classList.add('active');
    lightbox.style.display = 'flex';

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
};

// Close lightbox
const closeLightbox = () => {
    lightbox.classList.remove('active');
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300);

    // Restore body scroll
    document.body.style.overflow = 'auto';
};

// Navigate to previous image
const prevImage = () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentImageIndex);
};

// Navigate to next image
const nextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    openLightbox(currentImageIndex);
};

// Event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    prevImage();
});
lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    nextImage();
});

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    }
});

// ========================================
// SCROLL ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.series, .gallery-item, .timeline-item, .award-item');

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

// ========================================
// ACTIVE SECTION HIGHLIGHT
// ========================================

const sections = document.querySelectorAll('section[id]');

const highlightNavigation = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// ========================================
// LAZY LOADING IMAGES
// ========================================

const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

// ========================================
// PARALLAX EFFECT
// ========================================

const parallaxEffect = () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = hero.querySelector('.hero');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
};

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Debounce function for scroll events
const debounce = (func, wait = 10) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    highlightNavigation();
}, 10));

// ========================================
// INITIALIZE
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    animateOnScroll();
    lazyLoadImages();
    parallaxEffect();

    // Add fade-in animation to hero elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// ========================================
// PRINT STYLES
// ========================================

window.addEventListener('beforeprint', () => {
    // Close lightbox before printing
    if (lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// ========================================
// ACCESSIBILITY
// ========================================

// Focus trap for lightbox
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const trapFocus = (element) => {
    const focusableContent = element.querySelectorAll(focusableElements);
    const firstFocusable = focusableContent[0];
    const lastFocusable = focusableContent[focusableContent.length - 1];

    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
};

// Apply focus trap when lightbox is open
lightbox.addEventListener('transitionend', () => {
    if (lightbox.classList.contains('active')) {
        trapFocus(lightbox);
        lightboxClose.focus();
    }
});

// ========================================
// ERROR HANDLING
// ========================================

window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// Handle image loading errors
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.opacity = '0.5';
        this.alt = 'Image failed to load';
    });
});
