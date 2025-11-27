// Solar Inverter Product Data
const inverterProducts = [
    {
        id: 601,
        title: "Solar String Inverter 5KW",
        power: "5KW",
        type: "string",
        application: "residential",
        image: "images/inverter-1.jpg",
        specs: ["5KW Power", "String Inverter", "Residential Use", "High Efficiency"],
        badge: "Popular",
        description: "High-efficiency string inverter for residential solar installations"
    },
    {
        id: 602,
        title: "Solar Hybrid Inverter 10KW",
        power: "10KW",
        type: "hybrid",
        application: "commercial",
        image: "images/inverter-2.jpg",
        specs: ["10KW Power", "Hybrid Technology", "Battery Compatible", "Grid Tie"],
        badge: "Best Seller",
        description: "Advanced hybrid inverter with battery backup capability"
    },
    {
        id: 603,
        title: "Solar Micro Inverter 300W",
        power: "300W",
        type: "micro",
        application: "residential",
        image: "images/inverter-3.jpg",
        specs: ["300W Power", "Micro Inverter", "Panel Level", "High Performance"],
        badge: "Premium",
        description: "Panel-level micro inverter for maximum energy harvest"
    },
    {
        id: 604,
        title: "Solar String Inverter 20KW",
        power: "20KW",
        type: "string",
        application: "industrial",
        image: "images/inverter-4.jpg",
        specs: ["20KW Power", "Industrial Grade", "Three Phase", "Heavy Duty"],
        badge: "",
        description: "Industrial grade string inverter for large-scale installations"
    },
    {
        id: 605,
        title: "Solar Hybrid Inverter 3KW",
        power: "3KW",
        type: "hybrid",
        application: "residential",
        image: "images/inverter-5.jpg",
        specs: ["3KW Power", "Hybrid System", "MPPT Technology", "Smart Control"],
        badge: "New",
        description: "Compact hybrid inverter with advanced MPPT technology"
    },
    {
        id: 606,
        title: "Solar String Inverter 50KW",
        power: "50KW",
        type: "string",
        application: "industrial",
        image: "images/inverter-6.jpg",
        specs: ["50KW Power", "Commercial Grade", "High Voltage", "Monitoring"],
        badge: "",
        description: "High-power string inverter for commercial solar projects"
    }
];

let filteredProducts = [...inverterProducts];
let currentView = 'grid';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const resultsCount = document.getElementById('resultsCount');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateResultsCount();
    initializeFilters();
    initializeSorting();
    initializeViewToggle();
    updateYear();
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
    const powerFilters = getCheckedValues('input[value*="kw"]');
    const typeFilters = getCheckedValues('input[value="string"], input[value="hybrid"], input[value="micro"]');
    const applicationFilters = getCheckedValues('input[value="residential"], input[value="commercial"], input[value="industrial"]');
    
    filteredProducts = inverterProducts.filter(product => {
        const powerMatch = powerFilters.length === 0 || checkPowerRange(product.power, powerFilters);
        const typeMatch = typeFilters.length === 0 || typeFilters.includes(product.type);
        const applicationMatch = applicationFilters.length === 0 || applicationFilters.includes(product.application);
        
        return powerMatch && typeMatch && applicationMatch;
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
    const power = parseFloat(productPower);
    return powerFilters.some(range => {
        switch(range) {
            case '1-3kw': return power >= 1 && power <= 3;
            case '3-5kw': return power >= 3 && power <= 5;
            case '5-10kw': return power >= 5 && power <= 10;
            case '10kw+': return power >= 10;
            default: return false;
        }
    });
}

// Reset filters
function resetFilters() {
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(cb => cb.checked = false);
    filteredProducts = [...inverterProducts];
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
            filteredProducts.sort((a, b) => parseFloat(b.power) - parseFloat(a.power));
            break;
        case 'alphabetical':
            filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        default: // featured
            filteredProducts = [...inverterProducts.filter(p => filteredProducts.includes(p))];
    }
    renderProducts();
}

// Initialize view toggle
function initializeViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            viewButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentView = this.dataset.view;
            renderProducts();
        });
    });
}

// Render products
function renderProducts() {
    updateResultsCount();
    
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
                    <button class="btn btn-primary" onclick="event.stopPropagation(); enquireNow(${product.id})">Enquiry Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Enquiry function
function enquireNow(productId) {
    const product = inverterProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.power}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// View details function
function viewDetails(productId) {
    const product = inverterProducts.find(p => p.id === productId);
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
    const product = inverterProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.power}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
};

window.viewDetails = function(productId) {
    const product = inverterProducts.find(p => p.id === productId);
    if (product) {
        console.log('Redirecting to product detail page for ID:', productId);
        window.location.href = `product-detail.html?id=${productId}`;
    } else {
        console.error('Product not found for ID:', productId);
    }
};
