// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize all functionality
    initScrollAnimations();
    initAppShowcase();
    initSmoothScrolling();
    initBetaForm();
    initMobileNavigation();
    initNavbarScroll();
});

// Smooth scrolling functionality
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = document.querySelector('.nav').offsetHeight;
        const elementPosition = element.offsetTop - navHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Initialize smooth scrolling for all anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to animated elements
    const animatedElements = document.querySelectorAll('.value-prop, .feature, .testimonial, .step');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// App showcase carousel
function initAppShowcase() {
    const screens = document.querySelectorAll('.mockup-screen');
    const dots = document.querySelectorAll('.mockup-dot');
    let currentScreen = 1;
    let autoplayInterval;

    function showScreen(screenNumber) {
        // Hide all screens
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show selected screen and activate corresponding dot
        const targetScreen = document.getElementById(`screen-${screenNumber}`);
        const targetDot = document.querySelector(`[data-screen="${screenNumber}"]`);
        
        if (targetScreen && targetDot) {
            targetScreen.classList.add('active');
            targetDot.classList.add('active');
            currentScreen = screenNumber;
        }
    }

    function nextScreen() {
        const next = currentScreen >= screens.length ? 1 : currentScreen + 1;
        showScreen(next);
    }

    function startAutoplay() {
        autoplayInterval = setInterval(nextScreen, 4000);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Add click listeners to dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const screenNumber = parseInt(dot.getAttribute('data-screen'));
            showScreen(screenNumber);
            stopAutoplay();
            // Restart autoplay after user interaction
            setTimeout(startAutoplay, 2000);
        });
    });

    // Start autoplay
    startAutoplay();

    // Pause autoplay when user hovers over the showcase
    const showcase = document.querySelector('.app-showcase');
    if (showcase) {
        showcase.addEventListener('mouseenter', stopAutoplay);
        showcase.addEventListener('mouseleave', startAutoplay);
    }
}

// Beta form handling
function initBetaForm() {
    const form = document.getElementById('betaForm');
    const successMessage = document.getElementById('betaSuccess');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();
            
            // Basic email validation
            if (!isValidEmail(email)) {
                showFormError('Please enter a valid email address.');
                return;
            }
            
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Joining...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Hide form and show success message
                form.style.display = 'none';
                successMessage.style.display = 'block';
                
                // Add success animation
                successMessage.classList.add('fade-in', 'visible');
                
                // Track conversion (you can integrate with analytics here)
                trackBetaSignup(email);
                
            }, 1500);
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormError(message) {
    // Remove existing error messages
    const existingError = document.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Create and show error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.style.cssText = `
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.5rem;
        text-align: center;
    `;
    errorDiv.textContent = message;
    
    const formGroup = document.querySelector('.form-group');
    formGroup.parentNode.insertBefore(errorDiv, formGroup.nextSibling);
    
    // Remove error after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

function trackBetaSignup(email) {
    // Placeholder for analytics tracking
    console.log('Beta signup:', email);
    
    // You can integrate with Google Analytics, Mixpanel, etc. here
    // Example: gtag('event', 'signup', { method: 'beta_form' });
}

// Mobile navigation
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
            
            // Toggle icon between menu and X
            const icon = navToggle.querySelector('i');
            if (navLinks.classList.contains('nav-open')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });
        
        // Close mobile nav when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-open');
                const icon = navToggle.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });
    }
}

// Navbar scroll effect
function initNavbarScroll() {
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add/remove scrolled class for styling
        if (currentScrollY > 100) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
}

// Utility function to debounce scroll events
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

// Add scroll effect to hero CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    const heroButtons = document.querySelectorAll('.hero-cta .btn');
    
    heroButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile navigation
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navLinks && navLinks.classList.contains('nav-open')) {
            navLinks.classList.remove('nav-open');
            const icon = navToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    }
});

// Preload images for better performance
function preloadImages() {
    const images = [
        'Solyn-Website/assets/canva/1.png',
        'Solyn-Website/assets/canva/2.png',
        'Solyn-Website/assets/canva/3.png',
        'Solyn-Website/assets/canva/4.png',
        'Solyn-Website/assets/canva/5.png'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload on page load
document.addEventListener('DOMContentLoaded', preloadImages);

// Add performance optimization for animations
function reduceMotionCheck() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable autoplay for app showcase if user prefers reduced motion
        const showcase = document.querySelector('.app-showcase');
        if (showcase) {
            showcase.style.animation = 'none';
        }
    }
}

// Check for reduced motion preference
document.addEventListener('DOMContentLoaded', reduceMotionCheck);

// Add CSS for mobile navigation (dynamically added for better organization)
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-links {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(20px);
                border-top: 1px solid var(--color-border-light);
                padding: var(--spacing-lg);
                flex-direction: column;
                gap: var(--spacing-lg);
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .nav-links.nav-open {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .nav-scrolled {
                box-shadow: var(--shadow-sm);
            }
        }
    `;
    document.head.appendChild(style);
});
