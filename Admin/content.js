// Content JavaScript
class Content {
    constructor() {
        this.settings = {};
        this.init();
    }

    init() {
        this.settings = getSettings();
        this.loadContent();
    }

    loadContent() {
        // Load home page content
        document.getElementById('hero-title').value = this.settings.heroTitle || 'Welcome to Solarica';
        document.getElementById('hero-subtitle').value = this.settings.heroSubtitle || 'Your trusted partner in solar solutions';
        
        // Load about page content
        document.getElementById('about-description').value = this.settings.aboutDescription || 'We provide high-quality solar products and services';
        
        // Load company information
        document.getElementById('company-name').value = this.settings.companyName || 'Solarica';
        document.getElementById('company-tagline').value = this.settings.companyTagline || 'Powering the Future with Solar Energy';
        document.getElementById('company-description').value = this.settings.companyDescription || 'We are a leading provider of solar energy solutions, committed to delivering high-quality products and exceptional service to our customers.';
    }

    saveContent(section) {
        if (section === 'home') {
            this.settings.heroTitle = document.getElementById('hero-title').value;
            this.settings.heroSubtitle = document.getElementById('hero-subtitle').value;
        } else if (section === 'about') {
            this.settings.aboutDescription = document.getElementById('about-description').value;
        }
        
        saveSettings(this.settings);
        showAlert('Content saved successfully', 'success');
    }

    saveCompanyInfo() {
        this.settings.companyName = document.getElementById('company-name').value;
        this.settings.companyTagline = document.getElementById('company-tagline').value;
        this.settings.companyDescription = document.getElementById('company-description').value;
        
        saveSettings(this.settings);
        showAlert('Company information saved successfully', 'success');
    }
}

// Global functions for content management
function saveContent(section) {
    if (window.contentManager) {
        window.contentManager.saveContent(section);
    }
}

function saveCompanyInfo() {
    if (window.contentManager) {
        window.contentManager.saveCompanyInfo();
    }
}

// Initialize content when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.contentManager = new Content();
    }, 100);
});
