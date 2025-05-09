// Mobile menu toggle functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change icon based on menu state
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll for feature cards
const featureCards = document.querySelectorAll('.feature-card');
const testimonialCard = document.querySelector('.testimonial-card');

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class when element is in viewport
function checkAnimation() {
    featureCards.forEach(card => {
        if (isInViewport(card)) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
    
    if (testimonialCard && isInViewport(testimonialCard)) {
        testimonialCard.style.opacity = 1;
        testimonialCard.style.transform = 'translateY(0)';
    }
}

// Set initial styles for animation
window.addEventListener('DOMContentLoaded', () => {
    featureCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    if (testimonialCard) {
        testimonialCard.style.opacity = 0;
        testimonialCard.style.transform = 'translateY(20px)';
        testimonialCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }
    
    // Check animation immediately after page load
    setTimeout(checkAnimation, 100);
});

// Check for animations when scrolling
window.addEventListener('scroll', checkAnimation);