// Horizontal Timeline Awards JavaScript

// Awards data - Ascending order (oldest first)
const timelineAwards = {
    '2022-02-26': {
        date: '26 February 2022',
        title: 'Sustainable Energy Excellence Award',
        description: 'Recognized for outstanding contribution to sustainable energy development and implementation of innovative solar solutions across multiple sectors.',
        certificate: 'images/certificate.jpg',
        hoverImage: 'images/26-2.jpg'
    },
    '2022-07-14': {
        date: '14 July 2022',
        title: 'Green Technology Innovation Award',
        description: 'Awarded for breakthrough innovations in green technology and significant advancement in renewable energy sector with cutting-edge solar solutions.',
        certificate: 'images/certificate.jpg',
        hoverImage: 'images/14-7.jpg'
    },
    '2025-02-26': {
        date: '26 February 2025',
        title: 'Future Energy Leadership Award',
        description: 'Prestigious recognition for visionary leadership in future energy solutions and pioneering role in advancing solar technology for sustainable development.',
        certificate: 'images/certificate.jpg',
        hoverImage: 'images/24-10.jpg'
    }
};

let currentAwardIndex = 0;
const awardKeys = Object.keys(timelineAwards);

// Initialize timeline
document.addEventListener('DOMContentLoaded', function() {
    updateTimelineProgress();
    // Set first award as default
    showTimelineAward(document.querySelector('.timeline-point.active'));
});

// Show selected award
function showTimelineAward(element) {
    // Remove active class from all points
    document.querySelectorAll('.timeline-point').forEach(point => {
        point.classList.remove('active');
    });
    
    // Add active class to selected point
    element.classList.add('active');
    
    // Get award data
    const date = element.getAttribute('data-date');
    const award = timelineAwards[date];
    
    if (award) {
        // Update current index
        currentAwardIndex = awardKeys.indexOf(date);
        
        // Update award details with smooth transition
        const awardDetails = document.querySelector('.timeline-award-details');
        awardDetails.style.opacity = '0';
        awardDetails.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            // Update content
            document.getElementById('selectedAwardDate').textContent = award.date;
            document.getElementById('selectedAwardTitle').textContent = award.title;
            document.getElementById('selectedAwardDescription').textContent = award.description;
            // Use hoverImage if available, otherwise use certificate
            const imageToShow = award.hoverImage || award.certificate;
            document.getElementById('selectedCertificateImage').src = imageToShow;
            document.getElementById('modalCertificateImage').src = imageToShow;
            
            // Update timeline progress
            updateTimelineProgress();
            
            // Animate back in
            awardDetails.style.opacity = '1';
            awardDetails.style.transform = 'translateY(0)';
        }, 200);
    }
}

// Update timeline progress bar
function updateTimelineProgress() {
    const progress = document.querySelector('.timeline-progress');
    const activeIndex = currentAwardIndex;
    const totalPoints = awardKeys.length;
    const progressWidth = ((activeIndex + 1) / totalPoints) * 100;
    
    if (progress) {
        progress.style.width = progressWidth + '%';
    }
}

// Navigate timeline with buttons
function navigateTimeline(direction) {
    if (direction === 'prev') {
        currentAwardIndex = currentAwardIndex > 0 ? currentAwardIndex - 1 : awardKeys.length - 1;
    } else {
        currentAwardIndex = currentAwardIndex < awardKeys.length - 1 ? currentAwardIndex + 1 : 0;
    }
    
    const newDate = awardKeys[currentAwardIndex];
    const targetPoint = document.querySelector(`[data-date="${newDate}"]`);
    
    if (targetPoint) {
        showTimelineAward(targetPoint);
    }
}

// Open certificate modal
function openCertificateModal() {
    const modal = document.getElementById('certificateModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Fade in animation
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// Close certificate modal
function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    
    // Fade out animation
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }, 300);
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('certificateModal');
    
    if (modal && modal.classList.contains('active')) {
        if (event.key === 'Escape') {
            closeCertificateModal();
        }
    } else {
        if (event.key === 'ArrowLeft') {
            navigateTimeline('prev');
        } else if (event.key === 'ArrowRight') {
            navigateTimeline('next');
        }
    }
});

// Auto-play timeline (optional)
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        navigateTimeline('next');
    }, 5000); // Change every 5 seconds
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
}

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const modal = document.getElementById('certificateModal');
    
    if (!modal.classList.contains('active')) {
        if (touchEndX < touchStartX - swipeThreshold) {
            navigateTimeline('next');
        } else if (touchEndX > touchStartX + swipeThreshold) {
            navigateTimeline('prev');
        }
    }
}

// Smooth scroll animations for timeline points
function animateTimelinePoints() {
    const timelinePoints = document.querySelectorAll('.timeline-point');
    
    timelinePoints.forEach((point, index) => {
        point.style.opacity = '0';
        point.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            point.style.transition = 'all 0.6s ease';
            point.style.opacity = '1';
            point.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Initialize animations when page loads
window.addEventListener('load', () => {
    animateTimelinePoints();
    
    // Add intersection observer for award details animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    });
    
    const awardDetails = document.querySelector('.timeline-award-details');
    if (awardDetails) {
        observer.observe(awardDetails);
    }
});

// Pause auto-play on hover
document.addEventListener('mouseenter', function(event) {
    if (event.target.closest('.horizontal-timeline')) {
        stopAutoPlay();
    }
});

document.addEventListener('mouseleave', function(event) {
    if (event.target.closest('.horizontal-timeline')) {
        // Uncomment to enable auto-play
        // startAutoPlay();
    }
});

// Responsive timeline adjustments
function adjustTimelineForMobile() {
    const isMobile = window.innerWidth <= 768;
    const timelineTrack = document.querySelector('.timeline-track');
    
    if (isMobile && timelineTrack) {
        timelineTrack.style.display = 'none';
    } else if (timelineTrack) {
        timelineTrack.style.display = 'block';
    }
}

// Handle window resize
window.addEventListener('resize', adjustTimelineForMobile);

// Initialize responsive adjustments
adjustTimelineForMobile();

