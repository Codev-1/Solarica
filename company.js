// Company Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Company page loaded');
    
    // Initialize company page animations
    initCompanyAnimations();
    
    // Update year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Company Page Animations
function initCompanyAnimations() {
    const companyCards = document.querySelectorAll('.company-card');
    
    // Intersection Observer for company cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const cardIndex = Array.from(companyCards).indexOf(card);
                
                // Add staggered animation
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, cardIndex * 150);
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Set initial state and observe cards
    companyCards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
    
    // Add hover effects to specialty tags
    addSpecialtyHoverEffects();
}

function addSpecialtyHoverEffects() {
    const specialtyTags = document.querySelectorAll('.specialty');
    
    specialtyTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            // Add subtle pulse effect
            this.style.animation = 'specialtyPulse 0.6s ease-out';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
    
    // Add CSS for specialty pulse animation
    if (!document.getElementById('specialty-animations')) {
        const style = document.createElement('style');
        style.id = 'specialty-animations';
        style.textContent = `
            @keyframes specialtyPulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}