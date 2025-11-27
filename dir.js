// Directors Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Directors page loaded');
    
    // Initialize directors page animations
    initDirectorsAnimations();
    
    // Update year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Directors Page Animations
function initDirectorsAnimations() {
    const directorCards = document.querySelectorAll('.director-card');
    
    // Intersection Observer for director cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const cardIndex = Array.from(directorCards).indexOf(card);
                
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
    directorCards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
    
    // Add hover effects to qualification badges
    addQualificationHoverEffects();
    
    // Add director photo hover effects
    addPhotoHoverEffects();
}

function addQualificationHoverEffects() {
    const qualificationBadges = document.querySelectorAll('.qualification');
    
    qualificationBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            // Add subtle pulse effect
            this.style.animation = 'qualificationPulse 0.6s ease-out';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
    
    // Add CSS for qualification pulse animation
    if (!document.getElementById('qualification-animations')) {
        const style = document.createElement('style');
        style.id = 'qualification-animations';
        style.textContent = `
            @keyframes qualificationPulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}

function addPhotoHoverEffects() {
    const directorPhotos = document.querySelectorAll('.director-img');
    
    directorPhotos.forEach(photo => {
        photo.addEventListener('mouseenter', function() {
            // Add subtle rotation effect
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        photo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}