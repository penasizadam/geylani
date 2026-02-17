/**
 * Geylani Tarım - Shared JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const menuBtn = document.querySelector('header button.md\\:hidden');
    const nav = document.getElementById('site-nav');

    if (menuBtn && nav) {
        menuBtn.setAttribute('aria-controls', nav.id);
        menuBtn.setAttribute('aria-expanded', 'false');

        const closeMenu = () => {
            nav.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
        };

        const toggleMenu = () => {
            nav.classList.toggle('hidden');
            const isExpanded = !nav.classList.contains('hidden');
            menuBtn.setAttribute('aria-expanded', String(isExpanded));
        };

        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
                closeMenu();
            }
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !nav.classList.contains('hidden')) {
                closeMenu();
                menuBtn.focus();
            }
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Basic validation
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                alert('Lütfen tüm alanları doldurun!');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Geçerli bir e-posta adresi girin!');
                return;
            }
            
            // Show success message
            contactForm.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
            // In a real application, you would send this data to a server
            console.log('Form data:', formData);
            
            // Reset form after 5 seconds
            setTimeout(() => {
                contactForm.reset();
                contactForm.classList.remove('hidden');
                successMessage.classList.add('hidden');
            }, 5000);
        });
    }

    // Product image lightbox (products page)
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const previewImages = document.querySelectorAll('.product-preview');

    if (lightbox && lightboxImage && lightboxClose && previewImages.length > 0) {
        const closeLightbox = () => {
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
            lightboxImage.src = '';
            document.body.classList.remove('overflow-hidden');
        };

        previewImages.forEach((image) => {
            image.addEventListener('click', () => {
                lightboxImage.src = image.currentSrc || image.src;
                lightboxImage.alt = image.alt || 'Urun gorseli';
                lightbox.classList.remove('hidden');
                lightbox.classList.add('flex');
                document.body.classList.add('overflow-hidden');
            });
        });

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
                closeLightbox();
            }
        });
    }
});
