// Settings JavaScript
class Settings {
    constructor() {
        this.settings = {};
        this.init();
    }

    init() {
        this.settings = getSettings();
        this.loadSettings();
    }

    loadSettings() {
        // Load general settings
        document.getElementById('site-title').value = this.settings.siteTitle || 'Solarica';
        document.getElementById('contact-email').value = this.settings.contactEmail || 'info@solarica.com';
        document.getElementById('phone-number').value = this.settings.phoneNumber || '+918956189167';
        
        // Load social media settings
        document.getElementById('facebook-url').value = this.settings.facebookUrl || '';
        document.getElementById('twitter-url').value = this.settings.twitterUrl || '';
        document.getElementById('instagram-url').value = this.settings.instagramUrl || '';
        
        // Load SEO settings
        document.getElementById('meta-title').value = this.settings.metaTitle || 'Solarica - Solar Energy Solutions';
        document.getElementById('meta-description').value = this.settings.metaDescription || 'Leading provider of solar panels, lights, pumps and renewable energy solutions';
        document.getElementById('meta-keywords').value = this.settings.metaKeywords || 'solar, renewable energy, solar panels, solar lights, solar pumps';
    }

    saveGeneralSettings() {
        this.settings.siteTitle = document.getElementById('site-title').value;
        this.settings.contactEmail = document.getElementById('contact-email').value;
        this.settings.phoneNumber = document.getElementById('phone-number').value;
        
        saveSettings(this.settings);
        showAlert('General settings saved successfully', 'success');
    }

    saveSocialSettings() {
        this.settings.facebookUrl = document.getElementById('facebook-url').value;
        this.settings.twitterUrl = document.getElementById('twitter-url').value;
        this.settings.instagramUrl = document.getElementById('instagram-url').value;
        
        saveSettings(this.settings);
        showAlert('Social media settings saved successfully', 'success');
    }

    saveSEOSettings() {
        this.settings.metaTitle = document.getElementById('meta-title').value;
        this.settings.metaDescription = document.getElementById('meta-description').value;
        this.settings.metaKeywords = document.getElementById('meta-keywords').value;
        
        saveSettings(this.settings);
        showAlert('SEO settings saved successfully', 'success');
    }
}

// Global functions for settings management
function saveSettings() {
    if (window.settingsManager) {
        window.settingsManager.saveGeneralSettings();
    }
}

function saveSocialSettings() {
    if (window.settingsManager) {
        window.settingsManager.saveSocialSettings();
    }
}

function saveSEOSettings() {
    if (window.settingsManager) {
        window.settingsManager.saveSEOSettings();
    }
}

// Initialize settings when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.settingsManager = new Settings();
    }, 100);
});
