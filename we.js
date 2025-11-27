document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.hero-video');
    const navDots = document.querySelectorAll('.nav-dot');
    const heroTitle = document.getElementById('heroTitle');
    const heroDescription = document.getElementById('heroDescription');
    
    // Content for each video
    const videoContent = [
        {
            title: "Powering a Brighter Future Through Solar Innovation",
            description: "At Solarica, we're redefining clean energy with advanced solar technologies and sustainable manufacturing excellence."
        },
        {
            title: "Solarica Energy India Pvt. Ltd.",
            description: "Leading Solar Solutions Provider - Transforming India's Energy Future"
        }
    ];
    
    let currentVideoIndex = 0;
    let isTransitioning = false;
    
    // Check if videos are loading
    videos.forEach((video, index) => {
        video.addEventListener('loadeddata', () => {
            console.log(`Video ${index + 1} loaded successfully`);
        });
        
        video.addEventListener('error', (e) => {
            console.error(`Video ${index + 1} failed to load:`, e);
        });
        
        video.addEventListener('canplay', () => {
            console.log(`Video ${index + 1} can play`);
        });
    });
    
    // Function to switch videos
    function switchVideo(targetIndex) {
        if (isTransitioning || targetIndex === currentVideoIndex) return;
        
        isTransitioning = true;
        
        // Prepare next video first
        videos[targetIndex].currentTime = 0;
        const playPromise = videos[targetIndex].play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error('Video play failed:', error);
            });
        }
        
        // Update navigation dots
        navDots[currentVideoIndex].classList.remove('active');
        navDots[targetIndex].classList.add('active');
        
        // Fade out text
        heroTitle.style.opacity = '0';
        heroDescription.style.opacity = '0';
        
        // Change content after fade out
        setTimeout(() => {
            heroTitle.textContent = videoContent[targetIndex].title;
            heroDescription.textContent = videoContent[targetIndex].description;
            
            // Fade in text
            heroTitle.style.opacity = '1';
            heroDescription.style.opacity = '1';
        }, 200);
        
        // Switch video visibility - start new video before stopping old one
        setTimeout(() => {
            videos[targetIndex].classList.add('active');
            
            // Wait for new video to be visible before hiding old one
            setTimeout(() => {
                videos[currentVideoIndex].classList.remove('active');
                videos[currentVideoIndex].pause();
                
                currentVideoIndex = targetIndex;
                isTransitioning = false;
            }, 100);
        }, 300);
    }
    
    // Auto-switch videos every 6 seconds
    setInterval(() => {
        const nextIndex = (currentVideoIndex + 1) % videos.length;
        switchVideo(nextIndex);
    }, 6000);
    
    // Manual navigation
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            switchVideo(index);
        });
    });
    
    // Initialize first video with error handling
    setTimeout(() => {
        const playPromise = videos[0].play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error('Initial video play failed:', error);
                console.log('Video may need user interaction to play');
            });
        }
    }, 100);
    
    // Add smooth transitions to text
    heroTitle.style.transition = 'opacity 0.3s ease-in-out';
    heroDescription.style.transition = 'opacity 0.3s ease-in-out';
    
    // Debug: Log video elements
    console.log('Found videos:', videos.length);
    videos.forEach((video, index) => {
        console.log(`Video ${index + 1} src:`, video.querySelector('source')?.src);
    });
    
    // Initialize Who We Are animations
    initWhoWeAreAnimations();
    
    // Initialize Concept Vision Mission animations
    initCVMAnimations();
    
    // Initialize Professional Our Journey animations
    initProfessionalJourneyAnimations();
});

// Who We Are Section Animations
function initWhoWeAreAnimations() {
    const whoSection = document.querySelector('.who-we-are-section');
    if (!whoSection) return;
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateWhoWeAreElements();
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(whoSection);
}

function animateWhoWeAreElements() {
    const title = document.querySelector('.who-title');
    const descriptions = document.querySelectorAll('.who-description');
    
    // Animate title
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'translateY(30px)';
        title.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Animate descriptions
    descriptions.forEach((desc, index) => {
        desc.style.opacity = '0';
        desc.style.transform = 'translateY(20px)';
        desc.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            desc.style.opacity = '1';
            desc.style.transform = 'translateY(0)';
        }, 600 + (index * 300));
    });
    
    // Animate image
    const imageContainer = document.querySelector('.who-image-container');
    if (imageContainer) {
        imageContainer.style.opacity = '0';
        imageContainer.style.transform = 'scale(0.8)';
        imageContainer.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            imageContainer.style.opacity = '1';
            imageContainer.style.transform = 'scale(1)';
        }, 600);
    }
}

// Concept Vision Mission Section Animations
function initCVMAnimations() {
    const cvmSection = document.querySelector('.concept-vision-mission-section');
    if (!cvmSection) return;
    
    // Intersection Observer for CVM items with enhanced animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animate class to trigger CSS animations
                entry.target.classList.add('animate');
                
                // Also run the existing animation function for additional effects
                setTimeout(() => {
                    animateCVMItem(entry.target);
                }, 50);
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe each CVM item
    const cvmItems = document.querySelectorAll('.cvm-item');
    cvmItems.forEach((item, index) => {
        // Add staggered delay for each item
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
}

function animateCVMItem(item) {
    // Removed the additional enlarge/scale animations
    // Now only CSS slide-in animations will work
    // This function is kept for future enhancements if needed
}

// Why Choose Us Section Animations
document.addEventListener('DOMContentLoaded', function() {
    initWhyChooseUsAnimations();
});

function initWhyChooseUsAnimations() {
    const whySection = document.querySelector('.why-choose-section');
    if (!whySection) return;
    
    const captionBoxes = document.querySelectorAll('.caption-box');
    
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animations when section comes into view
                captionBoxes.forEach((box, index) => {
                    setTimeout(() => {
                        box.style.animation = 'slideInRight 0.6s ease-out forwards';
                    }, index * 100);
                });
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    observer.observe(whySection);
    
    // Enhanced hover interactions
    captionBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            // Slightly dim other boxes
            captionBoxes.forEach(otherBox => {
                if (otherBox !== box) {
                    otherBox.style.opacity = '0.7';
                }
            });
        });
        
        box.addEventListener('mouseleave', function() {
            // Restore opacity for all boxes
            captionBoxes.forEach(otherBox => {
                otherBox.style.opacity = '1';
            });
        });
    });
}

// Professional Our Journey Section Animations
function initProfessionalJourneyAnimations() {
    const journeySection = document.querySelector('.our-journey-section');
    if (!journeySection) return;
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Simple Intersection Observer for timeline items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                const itemIndex = Array.from(timelineItems).indexOf(item);
                
                // Add animate class with slight delay for staggered effect
                setTimeout(() => {
                    item.classList.add('animate');
                }, itemIndex * 150);
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe each timeline item
    timelineItems.forEach((item) => {
        observer.observe(item);
    });
}