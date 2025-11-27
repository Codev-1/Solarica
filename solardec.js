// Solar Decorative Lights Product Data
const decorativeProducts = [
    {
        id: 201,
        title: "Solar String Lights 10M",
        power: "12W",
        type: "string",
        installation: "hanging",
        image: "images/decorative-light-1.jpg",
        specs: ["12W LED", "10M Length", "50 LEDs", "Warm White"],
        badge: "Popular",
        description: "Beautiful string lights for outdoor decoration and ambiance"
    },
    {
        id: 202,
        title: "Solar Fairy Lights 20M",
        power: "8W",
        type: "fairy",
        installation: "flexible",
        image: "images/decorative-light-2.jpg",
        specs: ["8W LED", "20M Length", "200 LEDs", "Multi-Color"],
        badge: "New",
        description: "Flexible fairy lights with multiple color options"
    },
    {
        id: 203,
        title: "Solar Curtain Lights",
        power: "15W",
        type: "curtain",
        installation: "draping",
        image: "images/decorative-light-3.jpg",
        specs: ["15W LED", "Curtain Style", "300 LEDs", "Waterproof"],
        badge: "",
        description: "Elegant curtain lights for special occasions and decoration"
    },
    {
        id: 204,
        title: "Solar Net Lights",
        power: "10W",
        type: "net",
        installation: "draping",
        image: "images/decorative-light-4.jpg",
        specs: ["10W LED", "Net Design", "150 LEDs", "Easy Install"],
        badge: "",
        description: "Net-style lights perfect for covering large areas"
    },
    {
        id: 205,
        title: "Solar Icicle Lights",
        power: "18W",
        type: "icicle",
        installation: "hanging",
        image: "images/decorative-light-5.jpg",
        specs: ["18W LED", "Icicle Effect", "Cool White", "Weather Resistant"],
        badge: "",
        description: "Beautiful icicle effect lights for winter decoration"
    },
    {
        id: 206,
        title: "Solar Motif Lights",
        power: "25W",
        type: "motif",
        installation: "wall-mount",
        image: "images/decorative-light-6.jpg",
        specs: ["25W LED", "Custom Motifs", "RGB Colors", "Remote Control"],
        badge: "Premium",
        description: "Custom motif lights with remote control and RGB colors"
    }
];

let filteredProducts = [...decorativeProducts];
let currentView = 'grid';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const resultsCount = document.getElementById('resultsCount');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Decorative lights page initialized');
    console.log('Current view:', currentView);
    console.log('Products count:', decorativeProducts.length);
    
    renderProducts();
    updateResultsCount();
    initializeFilters();
    initializeSorting();
    // View toggle handled by universal function in script.js
    updateYear();
    
    console.log('All functions initialized successfully');
});

// Update results count
function updateResultsCount() {
    if (resultsCount) {
        resultsCount.textContent = `${filteredProducts.length} products found`;
    }
}

// Initialize filters
function initializeFilters() {
    const filterCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    const resetButton = document.getElementById('resetFilters');
    
    if (filterCheckboxes.length > 0) {
        filterCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', applyFilters);
        });
    }
    
    if (resetButton) {
        resetButton.addEventListener('click', resetFilters);
    }
}

// Apply filters
function applyFilters() {
    const powerFilters = getCheckedValues('input[value*="w"]');
    const typeFilters = getCheckedValues('input[value="string"], input[value="fairy"], input[value="curtain"], input[value="net"], input[value="icicle"], input[value="motif"]');
    const installationFilters = getCheckedValues('input[value="hanging"], input[value="flexible"], input[value="draping"], input[value="wall-mount"]');
    
    filteredProducts = decorativeProducts.filter(product => {
        const powerMatch = powerFilters.length === 0 || checkPowerRange(product.power, powerFilters);
        const typeMatch = typeFilters.length === 0 || typeFilters.includes(product.type);
        const installationMatch = installationFilters.length === 0 || installationFilters.includes(product.installation);
        
        return powerMatch && typeMatch && installationMatch;
    });
    
    renderProducts();
    updateResultsCount();
}

// Get checked filter values
function getCheckedValues(selector) {
    return Array.from(document.querySelectorAll(selector + ':checked')).map(cb => cb.value);
}

// Check power range
function checkPowerRange(productPower, powerFilters) {
    const power = parseInt(productPower);
    return powerFilters.some(range => {
        switch(range) {
            case '5-15w': return power >= 5 && power <= 15;
            case '15-25w': return power >= 15 && power <= 25;
            case '25w+': return power >= 25;
            default: return false;
        }
    });
}

// Reset filters
function resetFilters() {
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(cb => cb.checked = false);
    filteredProducts = [...decorativeProducts];
    renderProducts();
    updateResultsCount();
}

// Initialize sorting
function initializeSorting() {
    const sortSelect = document.getElementById('sortBy');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }
}

// Sort products
function sortProducts(sortBy) {
    switch(sortBy) {
        case 'power':
            filteredProducts.sort((a, b) => parseInt(b.power) - parseInt(a.power));
            break;
        case 'alphabetical':
            filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        default: // featured
            filteredProducts = [...decorativeProducts.filter(p => filteredProducts.includes(p))];
    }
    renderProducts();
}

// Initialize view toggle
function initializeViewToggle() {
    console.log('Initializing view toggle...');
    const viewButtons = document.querySelectorAll('.view-btn');
    console.log('Found view buttons:', viewButtons.length);
    
    if (viewButtons.length === 0) {
        console.error('No view buttons found!');
        return;
    }
    
    // Set initial active state
    viewButtons.forEach(btn => {
        if (btn.dataset.view === currentView) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Add click event listeners
    viewButtons.forEach((btn, index) => {
        console.log(`Adding listener to button ${index}:`, btn.dataset.view);
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('View button clicked:', this.dataset.view);
            
            // Remove active class from all buttons
            viewButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current view
            currentView = this.dataset.view;
            console.log('Current view changed to:', currentView);
            
            // Re-render products with new view
            renderProducts();
        });
    });
}

// Render products
function renderProducts() {
    console.log('Rendering products with view:', currentView);
    updateResultsCount();
    
    // Update grid class based on current view
    if (productsGrid) {
        const newClassName = currentView === 'list' ? 'products-grid list-view' : 'products-grid';
        console.log('Setting grid class to:', newClassName);
        productsGrid.className = newClassName;
    } else {
        console.error('Products grid element not found!');
    }
    
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
        <div class="product-card ${currentView === 'list' ? 'list-item' : ''}" data-id="${product.id}" onclick="viewDetails(${product.id})" style="cursor: pointer;">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" onerror="this.style.display='none'">
                ${product.badge ? `<div class="product-badge ${product.badge.toLowerCase()}">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-specs">
                    ${product.specs.map(spec => `<span class="spec-tag">${spec}</span>`).join('')}
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="event.stopPropagation(); enquireNow(${product.id})">Enquiry Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Enquiry function
function enquireNow(productId) {
    const product = decorativeProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.power}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// View details function
function viewDetails(productId) {
    const product = decorativeProducts.find(p => p.id === productId);
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

// Make functions globally available immediately
window.enquireNow = function(productId) {
    const product = decorativeProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.power}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
};

window.viewDetails = function(productId) {
    const product = decorativeProducts.find(p => p.id === productId);
    if (product) {
        console.log('Redirecting to product detail page for ID:', productId);
        window.location.href = `product-detail.html?id=${productId}`;
    } else {
        console.error('Product not found for ID:', productId);
    }
};
