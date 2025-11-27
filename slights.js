// Solar Street Lights Products Page JavaScript

// Sample product data - Only 5 products
const products = [
    {
        id: 1,
        title: "LED Solar Street Light 30W",
        power: "30W",
        type: "led",
        installation: "pole-mounted",
        price: 12500,
        originalPrice: 15000,
        discount: 17,
        image: "image_solarlights/img1.png",
        specs: ["30W LED", "6000K", "IP65", "12V Battery"],
        badge: "",
        description: "High-efficiency LED solar street light with motion sensor"
    },
    {
        id: 2,
        title: "Smart Solar Street Light 50W",
        power: "50W",
        type: "smart",
        installation: "pole-mounted",
        price: 18500,
        originalPrice: 22000,
        discount: 16,
        image: "image_solarlights/img2.jpg",
        specs: ["50W Smart LED", "Motion Sensor", "Remote Control", "Li-ion Battery"],
        badge: "",
        description: "Smart solar street light with remote monitoring capabilities"
    },
    {
        id: 3,
        title: "All-in-One Solar Light 40W",
        power: "40W",
        type: "led",
        installation: "integrated",
        price: 16000,
        originalPrice: 19000,
        discount: 16,
        image: "image_solarlights/img3.jpg",
        specs: ["40W LED", "All-in-One Design", "PIR Sensor", "LiFePO4 Battery"],
        badge: "",
        description: "Compact all-in-one solar street light solution"
    },
    {
        id: 4,
        title: "Motion Sensor Solar Light 25W",
        power: "25W",
        type: "motion-sensor",
        installation: "wall-mounted",
        price: 9500,
        originalPrice: 11000,
        discount: 14,
        image: "image_solarlights/img4.png",
        specs: ["25W LED", "PIR Motion Sensor", "Wall Mount", "Li-ion Battery"],
        badge: "",
        description: "Wall-mounted solar light with advanced motion detection"
    },
    {
        id: 5,
        title: "High Power Solar Light 80W",
        power: "80W",
        type: "led",
        installation: "pole-mounted",
        price: 28000,
        originalPrice: 32000,
        discount: 13,
        image: "image_solarlights/img5.png",
        specs: ["80W LED", "High Brightness", "IP67", "Lithium Battery"],
        badge: "",
        description: "High-power solar street light for main roads and highways"
    }
];

let filteredProducts = [...products];
let currentView = 'grid';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const resultsCount = document.getElementById('resultsCount');
const sortBy = document.getElementById('sortBy');
const resetFilters = document.getElementById('resetFilters');
const viewButtons = document.querySelectorAll('.view-btn');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    renderProducts();
    // View toggle handled by universal function in script.js
    updateYear();
});

// Initialize filters
function initializeFilters() {
    // Filter checkboxes
    const checkboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Sort dropdown
    sortBy.addEventListener('change', function() {
        sortProducts(this.value);
        renderProducts();
    });

    // Reset filters
    resetFilters.addEventListener('click', function() {
        // Reset all checkboxes
        checkboxes.forEach(checkbox => checkbox.checked = false);
        
        // Reset sort
        sortBy.value = 'featured';
        
        // Apply filters
        applyFilters();
    });
}

// Setup event listeners
function setupEventListeners() {
    // View toggle buttons
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentView = this.dataset.view;
            productsGrid.className = currentView === 'list' ? 'products-grid list-view' : 'products-grid';
        });
    });
}

// Apply filters
function applyFilters() {
    const powerFilters = getCheckedValues('input[value$="w"], input[value="100w+"]');
    const typeFilters = getCheckedValues('input[value="led"], input[value="smart"], input[value="motion-sensor"]');
    const installationFilters = getCheckedValues('input[value="pole-mounted"], input[value="wall-mounted"], input[value="integrated"]');

    filteredProducts = products.filter(product => {
        // Power filter
        if (powerFilters.length > 0) {
            const powerMatch = powerFilters.some(filter => {
                if (filter === '100w+') {
                    return parseInt(product.power) >= 100;
                } else {
                    const [min, max] = filter.replace('w', '').split('-').map(Number);
                    const productPower = parseInt(product.power);
                    return productPower >= min && productPower <= max;
                }
            });
            if (!powerMatch) return false;
        }

        // Type filter
        if (typeFilters.length > 0 && !typeFilters.includes(product.type)) {
            return false;
        }

        // Installation filter
        if (installationFilters.length > 0 && !installationFilters.includes(product.installation)) {
            return false;
        }

        return true;
    });

    renderProducts();
}

// Get checked values
function getCheckedValues(selector) {
    const checkboxes = document.querySelectorAll(selector);
    return Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
}

// Sort products
function sortProducts(sortType) {
    switch (sortType) {
        case 'power':
            filteredProducts.sort((a, b) => parseInt(b.power) - parseInt(a.power));
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'alphabetical':
            filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        default: // featured
            filteredProducts.sort((a, b) => {
                if (a.badge === 'popular' && b.badge !== 'popular') return -1;
                if (b.badge === 'popular' && a.badge !== 'popular') return 1;
                if (a.badge === 'new' && b.badge !== 'new') return -1;
                if (b.badge === 'new' && a.badge !== 'new') return 1;
                return a.id - b.id;
            });
    }
}

// Render products
function renderProducts() {
    resultsCount.textContent = `${filteredProducts.length} products found`;
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h3>No products found</h3>
                <p>Try adjusting your filters to see more results.</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-id="${product.id}" onclick="viewDetails(${product.id})" style="cursor: pointer;">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" onerror="this.style.display='none'">
                ${product.badge ? `<div class="product-badge ${product.badge}">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-specs">
                    ${product.specs.map(spec => `<span class="spec-tag">${spec}</span>`).join('')}
                </div>
                <div class="product-actions">
                    <button class="btn-primary" onclick="event.stopPropagation(); enquireNow(${product.id})">Enquiry Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Enquiry function
function enquireNow(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Open enquiry form or redirect to contact page with product details
        const message = `Hi, I would like to enquire about ${product.title} (${product.power}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// View details function
function viewDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Redirect to product detail page
        window.location.href = `product-detail.html?id=${productId}`;
    }
}

// Update year in footer
function updateYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Mobile filter toggle (for responsive design)
function toggleMobileFilters() {
    const filterPanel = document.querySelector('.filter-panel');
    filterPanel.classList.toggle('mobile-open');
}

// Search functionality (if you want to add a search box later)
function searchProducts(query) {
    if (!query.trim()) {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => 
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.specs.some(spec => spec.toLowerCase().includes(query.toLowerCase()))
        );
    }
    renderProducts();
}

// Export functions for global access
window.enquireNow = enquireNow;
window.viewDetails = viewDetails;
window.toggleMobileFilters = toggleMobileFilters;
window.searchProducts = searchProducts;
