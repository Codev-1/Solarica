// Common Admin Functions
class AdminCommon {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadInitialData();
    }

    setupEventListeners() {
        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('show');
            });
        }

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('show');
            }
        });

        // Logout functionality
        const logoutBtn = document.querySelector('.logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to logout?')) {
                    window.location.href = '../index.html';
                }
            });
        }
    }

    loadInitialData() {
        // This loads shared data that all pages might need
        this.settings = this.getSettings();
        this.products = this.getProducts();
        this.inquiries = this.getInquiries();
        this.images = this.getImages();
    }

    // Data getters
    getProducts() {
        const savedProducts = localStorage.getItem('solarica_products');
        return savedProducts ? JSON.parse(savedProducts) : this.getSampleProducts();
    }

    getInquiries() {
        const savedInquiries = localStorage.getItem('solarica_inquiries');
        return savedInquiries ? JSON.parse(savedInquiries) : this.getSampleInquiries();
    }

    getImages() {
        const savedImages = localStorage.getItem('solarica_images');
        return savedImages ? JSON.parse(savedImages) : this.getSampleImages();
    }

    getSettings() {
        const savedSettings = localStorage.getItem('solarica_settings');
        return savedSettings ? JSON.parse(savedSettings) : this.getDefaultSettings();
    }

    // Data setters
    saveProducts(products) {
        localStorage.setItem('solarica_products', JSON.stringify(products));
        this.products = products;
    }

    saveInquiries(inquiries) {
        localStorage.setItem('solarica_inquiries', JSON.stringify(inquiries));
        this.inquiries = inquiries;
    }

    saveImages(images) {
        localStorage.setItem('solarica_images', JSON.stringify(images));
        this.images = images;
    }

    saveSettings(settings) {
        localStorage.setItem('solarica_settings', JSON.stringify(settings));
        this.settings = settings;
    }

    // Utility functions
    showAlert(message, type = 'info') {
        // Create alert element
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        
        // Insert at top of page content
        const pageContent = document.querySelector('.page-content');
        if (pageContent) {
            pageContent.insertBefore(alert, pageContent.firstChild);
            
            // Remove after 3 seconds
            setTimeout(() => {
                alert.remove();
            }, 3000);
        }
    }

    // Sample data generators
    getSampleProducts() {
        return [
            {
                id: 1,
                name: 'Solar Panel 300W',
                category: 'solar-panels',
                price: '15000',
                description: 'High-efficiency monocrystalline solar panel',
                specifications: '300W, 24V, 15% efficiency',
                status: 'active',
                dateAdded: new Date().toISOString()
            },
            {
                id: 2,
                name: 'Solar Street Light',
                category: 'solar-lights',
                price: '8000',
                description: 'LED solar street light with motion sensor',
                specifications: '20W LED, 6V battery, auto on/off',
                status: 'active',
                dateAdded: new Date().toISOString()
            },
            {
                id: 3,
                name: 'Solar Water Pump',
                category: 'solar-pumps',
                price: '25000',
                description: 'Submersible solar water pump for agriculture',
                specifications: '2HP, 48V, 2000L/hour',
                status: 'active',
                dateAdded: new Date().toISOString()
            }
        ];
    }

    getSampleInquiries() {
        return [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                phone: '9876543210',
                subject: 'Solar Panel Inquiry',
                message: 'I am interested in installing solar panels for my home. Please provide details.',
                status: 'new',
                date: new Date().toISOString()
            },
            {
                id: 2,
                name: 'Jane Smith',
                email: 'jane@example.com',
                phone: '9876543211',
                subject: 'Solar Lights Quote',
                message: 'Need quotation for solar street lights for our community.',
                status: 'read',
                date: new Date(Date.now() - 86400000).toISOString()
            }
        ];
    }

    getSampleImages() {
        return [
            { id: 1, name: 'img1.png', category: 'AClights', path: '../AClights/img1.png' },
            { id: 2, name: 'img2.png', category: 'AClights', path: '../AClights/img2.png' },
            { id: 3, name: 'img1.jpg', category: 'decorativelights', path: '../decorativelights/img1.jpg' },
            { id: 4, name: 'img1.jpeg', category: 'flood lights', path: '../flood lights/img1.jpeg' },
            { id: 5, name: 'img1.png', category: 'gardenlights', path: '../gardenlights/img1.png' },
        ];
    }

    getDefaultSettings() {
        return {
            siteTitle: 'Solarica',
            contactEmail: 'info@solarica.com',
            phoneNumber: '+918956189167',
            facebookUrl: '',
            twitterUrl: '',
            instagramUrl: '',
            heroTitle: 'Welcome to Solarica',
            heroSubtitle: 'Your trusted partner in solar solutions',
            aboutDescription: 'We provide high-quality solar products and services',
            metaTitle: 'Solarica - Solar Energy Solutions',
            metaDescription: 'Leading provider of solar panels, lights, pumps and renewable energy solutions',
            metaKeywords: 'solar, renewable energy, solar panels, solar lights, solar pumps'
        };
    }
}

// Initialize common admin functionality
let adminCommon;
document.addEventListener('DOMContentLoaded', () => {
    adminCommon = new AdminCommon();
});

// Global functions that can be used across all pages
function showAlert(message, type = 'info') {
    if (adminCommon) {
        adminCommon.showAlert(message, type);
    }
}

function getProducts() {
    return adminCommon ? adminCommon.getProducts() : [];
}

function getInquiries() {
    return adminCommon ? adminCommon.getInquiries() : [];
}

function getImages() {
    return adminCommon ? adminCommon.getImages() : [];
}

function getSettings() {
    return adminCommon ? adminCommon.getSettings() : {};
}

function saveProducts(products) {
    if (adminCommon) {
        adminCommon.saveProducts(products);
    }
}

function saveInquiries(inquiries) {
    if (adminCommon) {
        adminCommon.saveInquiries(inquiries);
    }
}

function saveImages(images) {
    if (adminCommon) {
        adminCommon.saveImages(images);
    }
}

function saveSettings(settings) {
    if (adminCommon) {
        adminCommon.saveSettings(settings);
    }
}
