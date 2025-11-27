// Admin Panel JavaScript
class SolaricaAdmin {
    constructor() {
        this.currentPage = 'dashboard';
        this.products = [];
        this.inquiries = [];
        this.images = [];
        this.settings = {};
        this.init();
    }

    init() {
        this.loadInitialData();
        this.setupEventListeners();
        this.updateDashboardStats();
        this.showPage('dashboard');
    }

    // Load initial data from localStorage or API
    loadInitialData() {
        // Load products
        const savedProducts = localStorage.getItem('solarica_products');
        if (savedProducts) {
            this.products = JSON.parse(savedProducts);
        } else {
            // Initialize with sample data
            this.products = this.getSampleProducts();
            this.saveProducts();
        }

        // Load inquiries
        const savedInquiries = localStorage.getItem('solarica_inquiries');
        if (savedInquiries) {
            this.inquiries = JSON.parse(savedInquiries);
        } else {
            this.inquiries = this.getSampleInquiries();
            this.saveInquiries();
        }

        // Load settings
        const savedSettings = localStorage.getItem('solarica_settings');
        if (savedSettings) {
            this.settings = JSON.parse(savedSettings);
        } else {
            this.settings = this.getDefaultSettings();
            this.saveSettings();
        }

        // Load images from directories
        this.loadImages();
    }

    // Setup event listeners
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                this.showPage(page);
            });
        });

        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('show');
            });
        }

        // Filter buttons for inquiries
        document.querySelectorAll('.filter-buttons .btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-buttons .btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterInquiries(btn.dataset.status);
            });
        });

        // Category tabs for images
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterImages(btn.dataset.category);
            });
        });

        // Image file input preview
        const imageFiles = document.getElementById('image-files');
        if (imageFiles) {
            imageFiles.addEventListener('change', (e) => {
                this.previewImages(e.target.files);
            });
        }

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('show');
            }
        });
    }

    // Page navigation
    showPage(pageName) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.add('hidden');
        });

        // Show selected page
        const selectedPage = document.getElementById(`${pageName}-page`);
        if (selectedPage) {
            selectedPage.classList.remove('hidden');
        }

        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-page="${pageName}"]`).classList.add('active');

        // Update page title
        const pageTitle = document.getElementById('page-title');
        if (pageTitle) {
            pageTitle.textContent = pageName.charAt(0).toUpperCase() + pageName.slice(1);
        }

        // Load page-specific data
        this.currentPage = pageName;
        this.loadPageData(pageName);
    }

    // Load page-specific data
    loadPageData(pageName) {
        switch(pageName) {
            case 'dashboard':
                this.updateDashboardStats();
                this.loadRecentInquiries();
                break;
            case 'products':
                this.loadProducts();
                break;
            case 'images':
                this.loadImages();
                break;
            case 'inquiries':
                this.loadInquiries();
                break;
            case 'content':
                this.loadContent();
                break;
            case 'settings':
                this.loadSettings();
                break;
        }
    }

    // Dashboard functions
    updateDashboardStats() {
        document.getElementById('total-products').textContent = this.products.length;
        document.getElementById('total-images').textContent = this.images.length;
        document.getElementById('total-inquiries').textContent = this.inquiries.filter(i => i.status === 'new').length;
        document.getElementById('total-visitors').textContent = Math.floor(Math.random() * 100) + 50; // Mock data
    }

    loadRecentInquiries() {
        const tbody = document.getElementById('recent-inquiries');
        const recentInquiries = this.inquiries.slice(0, 5);
        
        if (recentInquiries.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" class="text-center">No inquiries yet</td></tr>';
            return;
        }

        tbody.innerHTML = recentInquiries.map(inquiry => `
            <tr>
                <td>${inquiry.name}</td>
                <td>${inquiry.email}</td>
                <td>${inquiry.message.substring(0, 50)}...</td>
                <td>${new Date(inquiry.date).toLocaleDateString()}</td>
            </tr>
        `).join('');
    }

    // Product management
    loadProducts() {
        const tbody = document.getElementById('products-table');
        
        if (this.products.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="text-center">No products found</td></tr>';
            return;
        }

        tbody.innerHTML = this.products.map(product => `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>₹${product.price}</td>
                <td><span class="status-badge ${product.status}">${product.status}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-primary" onclick="admin.editProduct(${product.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="admin.deleteProduct(${product.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    openProductModal(productId = null) {
        const modal = document.getElementById('product-modal');
        const form = document.getElementById('product-form');
        const title = document.getElementById('product-modal-title');

        if (productId) {
            const product = this.products.find(p => p.id === productId);
            if (product) {
                title.textContent = 'Edit Product';
                document.getElementById('product-name').value = product.name;
                document.getElementById('product-category').value = product.category;
                document.getElementById('product-price').value = product.price;
                document.getElementById('product-description').value = product.description;
                document.getElementById('product-specifications').value = product.specifications;
                document.getElementById('product-status').value = product.status;
                form.dataset.productId = productId;
            }
        } else {
            title.textContent = 'Add New Product';
            form.reset();
            delete form.dataset.productId;
        }

        modal.classList.add('show');
    }

    closeProductModal() {
        document.getElementById('product-modal').classList.remove('show');
    }

    saveProduct() {
        const form = document.getElementById('product-form');
        const productId = form.dataset.productId;
        
        const productData = {
            name: document.getElementById('product-name').value,
            category: document.getElementById('product-category').value,
            price: document.getElementById('product-price').value,
            description: document.getElementById('product-description').value,
            specifications: document.getElementById('product-specifications').value,
            status: document.getElementById('product-status').value
        };

        if (!productData.name || !productData.category || !productData.price) {
            this.showAlert('Please fill in all required fields', 'error');
            return;
        }

        if (productId) {
            // Edit existing product
            const index = this.products.findIndex(p => p.id == productId);
            if (index !== -1) {
                this.products[index] = { ...this.products[index], ...productData };
            }
        } else {
            // Add new product
            const newProduct = {
                id: this.products.length + 1,
                ...productData,
                dateAdded: new Date().toISOString()
            };
            this.products.push(newProduct);
        }

        this.saveProducts();
        this.loadProducts();
        this.closeProductModal();
        this.showAlert(productId ? 'Product updated successfully' : 'Product added successfully', 'success');
    }

    editProduct(productId) {
        this.openProductModal(productId);
    }

    deleteProduct(productId) {
        if (confirm('Are you sure you want to delete this product?')) {
            this.products = this.products.filter(p => p.id !== productId);
            this.saveProducts();
            this.loadProducts();
            this.showAlert('Product deleted successfully', 'success');
        }
    }

    // Image management
    async loadImages() {
        // This would normally fetch from server
        // For demo, we'll simulate loading images from directories
        this.images = [
            { id: 1, name: 'img1.png', category: 'AClights', path: '../AClights/img1.png' },
            { id: 2, name: 'img2.png', category: 'AClights', path: '../AClights/img2.png' },
            { id: 3, name: 'img1.jpg', category: 'decorativelights', path: '../decorativelights/img1.jpg' },
            { id: 4, name: 'img1.jpeg', category: 'flood lights', path: '../flood lights/img1.jpeg' },
            { id: 5, name: 'img1.png', category: 'gardenlights', path: '../gardenlights/img1.png' },
        ];
        
        this.displayImages(this.images);
    }

    displayImages(images) {
        const grid = document.getElementById('image-grid');
        
        if (images.length === 0) {
            grid.innerHTML = '<div class="text-center">No images found</div>';
            return;
        }

        grid.innerHTML = images.map(image => `
            <div class="image-item">
                <img src="${image.path}" alt="${image.name}" onerror="this.src='https://via.placeholder.com/200x150?text=Image'">
                <div class="image-actions">
                    <button class="btn btn-sm btn-danger" onclick="admin.deleteImage(${image.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    filterImages(category) {
        if (category === 'all') {
            this.displayImages(this.images);
        } else {
            const filtered = this.images.filter(img => img.category === category);
            this.displayImages(filtered);
        }
    }

    openImageUploadModal() {
        document.getElementById('image-upload-modal').classList.add('show');
    }

    closeImageUploadModal() {
        document.getElementById('image-upload-modal').classList.remove('show');
        document.getElementById('image-files').value = '';
        document.getElementById('image-preview').innerHTML = '';
    }

    previewImages(files) {
        const preview = document.getElementById('image-preview');
        preview.innerHTML = '';

        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const div = document.createElement('div');
                div.className = 'preview-item';
                div.innerHTML = `<img src="${e.target.result}" alt="${file.name}">`;
                preview.appendChild(div);
            };
            reader.readAsDataURL(file);
        });
    }

    uploadImages() {
        const files = document.getElementById('image-files').files;
        const category = document.getElementById('image-category').value;

        if (files.length === 0) {
            this.showAlert('Please select images to upload', 'error');
            return;
        }

        // In a real application, this would upload to server
        // For demo, we'll simulate the upload
        Array.from(files).forEach((file, index) => {
            const newImage = {
                id: this.images.length + index + 1,
                name: file.name,
                category: category,
                path: `../${category}/${file.name}`
            };
            this.images.push(newImage);
        });

        this.closeImageUploadModal();
        this.loadImages();
        this.showAlert('Images uploaded successfully', 'success');
    }

    deleteImage(imageId) {
        if (confirm('Are you sure you want to delete this image?')) {
            this.images = this.images.filter(img => img.id !== imageId);
            this.loadImages();
            this.showAlert('Image deleted successfully', 'success');
        }
    }

    // Inquiry management
    loadInquiries() {
        const tbody = document.getElementById('inquiries-table');
        
        if (this.inquiries.length === 0) {
            tbody.innerHTML = '<tr><td colspan="8" class="text-center">No inquiries found</td></tr>';
            return;
        }

        tbody.innerHTML = this.inquiries.map(inquiry => `
            <tr>
                <td>${inquiry.id}</td>
                <td>${inquiry.name}</td>
                <td>${inquiry.email}</td>
                <td>${inquiry.phone}</td>
                <td>${inquiry.subject}</td>
                <td>${new Date(inquiry.date).toLocaleDateString()}</td>
                <td><span class="status-badge ${inquiry.status}">${inquiry.status}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-info" onclick="admin.viewInquiry(${inquiry.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-success" onclick="admin.replyToInquiry(${inquiry.id})">
                            <i class="fas fa-reply"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="admin.deleteInquiry(${inquiry.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    filterInquiries(status) {
        if (status === 'all') {
            this.loadInquiries();
        } else {
            const filtered = this.inquiries.filter(i => i.status === status);
            this.displayFilteredInquiries(filtered);
        }
    }

    displayFilteredInquiries(inquiries) {
        const tbody = document.getElementById('inquiries-table');
        
        if (inquiries.length === 0) {
            tbody.innerHTML = '<tr><td colspan="8" class="text-center">No inquiries found</td></tr>';
            return;
        }

        tbody.innerHTML = inquiries.map(inquiry => `
            <tr>
                <td>${inquiry.id}</td>
                <td>${inquiry.name}</td>
                <td>${inquiry.email}</td>
                <td>${inquiry.phone}</td>
                <td>${inquiry.subject}</td>
                <td>${new Date(inquiry.date).toLocaleDateString()}</td>
                <td><span class="status-badge ${inquiry.status}">${inquiry.status}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-info" onclick="admin.viewInquiry(${inquiry.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-success" onclick="admin.replyToInquiry(${inquiry.id})">
                            <i class="fas fa-reply"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="admin.deleteInquiry(${inquiry.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    viewInquiry(inquiryId) {
        const inquiry = this.inquiries.find(i => i.id === inquiryId);
        if (inquiry) {
            // Mark as read
            inquiry.status = 'read';
            this.saveInquiries();
            this.loadInquiries();
            
            // Show inquiry details
            alert(`Name: ${inquiry.name}\nEmail: ${inquiry.email}\nPhone: ${inquiry.phone}\nSubject: ${inquiry.subject}\nMessage: ${inquiry.message}`);
        }
    }

    replyToInquiry(inquiryId) {
        const inquiry = this.inquiries.find(i => i.id === inquiryId);
        if (inquiry) {
            const reply = prompt(`Reply to ${inquiry.name} (${inquiry.email}):`);
            if (reply) {
                inquiry.status = 'replied';
                inquiry.reply = reply;
                inquiry.replyDate = new Date().toISOString();
                this.saveInquiries();
                this.loadInquiries();
                this.showAlert('Reply sent successfully', 'success');
            }
        }
    }

    deleteInquiry(inquiryId) {
        if (confirm('Are you sure you want to delete this inquiry?')) {
            this.inquiries = this.inquiries.filter(i => i.id !== inquiryId);
            this.saveInquiries();
            this.loadInquiries();
            this.showAlert('Inquiry deleted successfully', 'success');
        }
    }

    // Content management
    loadContent() {
        // Load content from settings
        document.getElementById('hero-title').value = this.settings.heroTitle || 'Welcome to Solarica';
        document.getElementById('hero-subtitle').value = this.settings.heroSubtitle || 'Your trusted partner in solar solutions';
        document.getElementById('about-description').value = this.settings.aboutDescription || 'We provide high-quality solar products and services';
    }

    saveContent(section) {
        if (section === 'home') {
            this.settings.heroTitle = document.getElementById('hero-title').value;
            this.settings.heroSubtitle = document.getElementById('hero-subtitle').value;
        } else if (section === 'about') {
            this.settings.aboutDescription = document.getElementById('about-description').value;
        }
        
        this.saveSettings();
        this.showAlert('Content saved successfully', 'success');
    }

    // Settings management
    loadSettings() {
        document.getElementById('site-title').value = this.settings.siteTitle || 'Solarica';
        document.getElementById('contact-email').value = this.settings.contactEmail || 'info@solarica.com';
        document.getElementById('phone-number').value = this.settings.phoneNumber || '+918956189167';
        document.getElementById('facebook-url').value = this.settings.facebookUrl || '';
        document.getElementById('twitter-url').value = this.settings.twitterUrl || '';
        document.getElementById('instagram-url').value = this.settings.instagramUrl || '';
    }

    saveSettings() {
        this.settings.siteTitle = document.getElementById('site-title').value;
        this.settings.contactEmail = document.getElementById('contact-email').value;
        this.settings.phoneNumber = document.getElementById('phone-number').value;
        this.settings.facebookUrl = document.getElementById('facebook-url').value;
        this.settings.twitterUrl = document.getElementById('twitter-url').value;
        this.settings.instagramUrl = document.getElementById('instagram-url').value;
        
        localStorage.setItem('solarica_settings', JSON.stringify(this.settings));
        this.showAlert('Settings saved successfully', 'success');
    }

    // Utility functions
    showAlert(message, type = 'info') {
        // Create alert element
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        
        // Insert at top of page content
        const pageContent = document.querySelector('.page-content');
        pageContent.insertBefore(alert, pageContent.firstChild);
        
        // Remove after 3 seconds
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }

    // Data persistence
    saveProducts() {
        localStorage.setItem('solarica_products', JSON.stringify(this.products));
    }

    saveInquiries() {
        localStorage.setItem('solarica_inquiries', JSON.stringify(this.inquiries));
    }

    saveSettings() {
        localStorage.setItem('solarica_settings', JSON.stringify(this.settings));
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
            aboutDescription: 'We provide high-quality solar products and services'
        };
    }
}

// Initialize admin panel
let admin;
document.addEventListener('DOMContentLoaded', () => {
    admin = new SolaricaAdmin();
});

// Global functions for onclick handlers
function navigateToPage(page) {
    admin.showPage(page);
}

function openProductModal() {
    admin.openProductModal();
}

function closeProductModal() {
    admin.closeProductModal();
}

function saveProduct() {
    admin.saveProduct();
}

function openImageUploadModal() {
    admin.openImageUploadModal();
}

function closeImageUploadModal() {
    admin.closeImageUploadModal();
}

function uploadImages() {
    admin.uploadImages();
}

function saveContent(section) {
    admin.saveContent(section);
}

function saveSettings() {
    admin.saveSettings();
}