document.addEventListener('DOMContentLoaded', function() {
    // Initialize contact page functionality
    initContactForm();
    initAnimations();
    updateCurrentYear();
});

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.contact-submit');
    
    if (!contactForm) return;
    
    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.parentElement.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

// Form Validation
function validateForm() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    let isValid = true;
    
    // Required fields validation
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'subject', 'message'];
    
    requiredFields.forEach(fieldName => {
        const field = form.querySelector(`[name="${fieldName}"]`);
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const fieldGroup = field.parentElement;
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    
    // Remove existing error states
    fieldGroup.classList.remove('error', 'success');
    const existingError = fieldGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    let isValid = true;
    let errorMessage = '';
    
    // Check if field is required and empty
    if (field.hasAttribute('required') && !fieldValue) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    // Email validation
    else if (fieldName === 'email' && fieldValue) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(fieldValue)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    // Phone validation
    else if (fieldName === 'phone' && fieldValue) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(fieldValue)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }
    // Name validation
    else if ((fieldName === 'firstName' || fieldName === 'lastName') && fieldValue) {
        if (fieldValue.length < 2) {
            isValid = false;
            errorMessage = 'Name must be at least 2 characters long';
        }
    }
    // Message validation
    else if (fieldName === 'message' && fieldValue) {
        if (fieldValue.length < 10) {
            isValid = false;
            errorMessage = 'Message must be at least 10 characters long';
        }
    }
    
    if (!isValid) {
        fieldGroup.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        fieldGroup.appendChild(errorElement);
    } else if (fieldValue) {
        fieldGroup.classList.add('success');
    }
    
    return isValid;
}

// Form Submission
function submitForm() {
    const submitBtn = document.querySelector('.contact-submit');
    const form = document.getElementById('contactForm');
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simulate API call (replace with actual endpoint)
    setTimeout(() => {
        // Reset loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        form.reset();
        
        // Remove validation classes
        const formGroups = form.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            group.classList.remove('error', 'success');
            const errorMsg = group.querySelector('.error-message');
            if (errorMsg) errorMsg.remove();
        });
        
        console.log('Form submitted successfully:', data);
    }, 2000);
}

function showSuccessMessage() {
    // Remove existing success message
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <strong>Thank you!</strong> Your message has been sent successfully. 
        We'll get back to you within 24 hours.
    `;
    
    // Insert before form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successMessage, form);
    
    // Show with animation
    setTimeout(() => {
        successMessage.classList.add('show');
    }, 100);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
        setTimeout(() => {
            if (successMessage.parentNode) {
                successMessage.remove();
            }
        }, 300);
    }, 5000);
}

// Scroll Animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll(
        '.contact-form-container, .contact-card, .contact-method'
    );
    
    animatedElements.forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });
}

// Utility Functions
function updateCurrentYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Phone number formatting
function formatPhoneNumber(input) {
    // Remove all non-digit characters
    let phoneNumber = input.value.replace(/\D/g, '');
    
    // Format as needed (example: +91 XXXXX XXXXX)
    if (phoneNumber.length >= 10) {
        if (phoneNumber.startsWith('91')) {
            phoneNumber = '+91 ' + phoneNumber.slice(2, 7) + ' ' + phoneNumber.slice(7, 12);
        } else {
            phoneNumber = phoneNumber.slice(0, 5) + ' ' + phoneNumber.slice(5, 10);
        }
    }
    
    input.value = phoneNumber;
}

// Add phone formatting to phone input
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Map interaction enhancement
function initMapInteraction() {
    const mapContainer = document.querySelector('.map-container');
    const mapIframe = mapContainer?.querySelector('iframe');
    
    if (!mapContainer || !mapIframe) return;
    
    // Prevent scroll hijacking on mobile
    mapContainer.addEventListener('click', function() {
        mapIframe.style.pointerEvents = 'auto';
    });
    
    mapContainer.addEventListener('mouseleave', function() {
        mapIframe.style.pointerEvents = 'none';
    });
    
    // Initial state
    mapIframe.style.pointerEvents = 'none';
}

// Initialize map interaction
document.addEventListener('DOMContentLoaded', initMapInteraction);

// Contact method click tracking (for analytics)
function trackContactMethod(method, value) {
    console.log(`Contact method used: ${method} - ${value}`);
    
    // Add your analytics tracking code here
    // Example: gtag('event', 'contact_method_click', { method: method, value: value });
}

// Add click tracking to contact methods
document.addEventListener('DOMContentLoaded', function() {
    // Track email clicks
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackContactMethod('email', this.href.replace('mailto:', ''));
        });
    });
    
    // Track phone clicks
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackContactMethod('phone', this.href.replace('tel:', ''));
        });
    });
    
    // Track WhatsApp clicks
    const whatsappLinks = document.querySelectorAll('a[href*="whatsapp"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackContactMethod('whatsapp', 'button_click');
        });
    });
});

// Form auto-save (optional feature)
function initFormAutoSave() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const formInputs = form.querySelectorAll('input, select, textarea');
    const storageKey = 'solarica_contact_form_draft';
    
    // Load saved data
    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            Object.keys(data).forEach(key => {
                const field = form.querySelector(`[name="${key}"]`);
                if (field) {
                    field.value = data[key];
                }
            });
        } catch (e) {
            console.log('Error loading saved form data:', e);
        }
    }
    
    // Save data on input
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            localStorage.setItem(storageKey, JSON.stringify(data));
        });
    });
    
    // Clear saved data on successful submission
    form.addEventListener('submit', function() {
        setTimeout(() => {
            localStorage.removeItem(storageKey);
        }, 3000); // Clear after success message
    });
}

// Initialize auto-save
document.addEventListener('DOMContentLoaded', initFormAutoSave);

// Accessibility enhancements
function initAccessibility() {
    // Add skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView();
            }
        });
    }
    
    // Enhance form accessibility
    const form = document.getElementById('contactForm');
    if (form) {
        // Add aria-describedby for error messages
        const formGroups = form.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            const input = group.querySelector('input, select, textarea');
            const label = group.querySelector('label');
            
            if (input && label) {
                // Ensure label is associated with input
                if (!input.id) {
                    input.id = 'field_' + Math.random().toString(36).substr(2, 9);
                }
                label.setAttribute('for', input.id);
            }
        });
    }
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initAccessibility);
