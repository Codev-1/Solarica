// Solar Water Heater Product Data
const heaterProducts = [
    {
        id: 501,
        title: "Solar Water Heater 200L",
        capacity: "200L",
        type: "flat-plate",
        installation: "rooftop",
        image: "heater/1.jpg",
        specs: ["200 Liter Capacity", "Flat Plate Collector", "Rooftop Installation", "High Efficiency"],
        badge: "Popular",
        description: "High-efficiency solar water heater for residential use with 200L capacity"
    },
    {
        id: 502,
        title: "Solar Water Heater 300L",
        capacity: "300L",
        type: "evacuated-tube",
        installation: "rooftop",
        image: "heater/2.jpg",
        specs: ["300 Liter Capacity", "Evacuated Tube", "Premium Quality", "Weather Resistant"],
        badge: "Best Seller",
        description: "Premium evacuated tube solar water heater for large families"
    },
    {
        id: 503,
        title: "Solar Water Heater 500L",
        capacity: "500L",
        type: "flat-plate",
        installation: "ground-mount",
        image: "heater/3.jpg",
        specs: ["500 Liter Capacity", "Commercial Grade", "Ground Mount", "Heavy Duty"],
        badge: "Premium",
        description: "Commercial grade solar water heater for hotels and institutions"
    },
    {
        id: 504,
        title: "Compact Solar Heater 150L",
        capacity: "150L",
        type: "thermosiphon",
        installation: "wall-mount",
        image: "heater/6.jpg",
        specs: ["150 Liter Capacity", "Thermosiphon", "Compact Design", "Easy Installation"],
        badge: "",
        description: "Compact thermosiphon solar water heater for small homes"
    },
    {
        id: 505,
        title: "Solar Water Heater 400L",
        capacity: "400L",
        type: "evacuated-tube",
        installation: "rooftop",
        image: "heater/5.jpg",
        specs: ["400 Liter Capacity", "Evacuated Tube", "High Performance", "Long Lasting"],
        badge: "New",
        description: "High-performance evacuated tube heater for medium-sized buildings"
    },
    {
        id: 506,
        title: "Solar Water Heater 100L",
        capacity: "100L",
        type: "flat-plate",
        installation: "rooftop",
        image: "heater/4.jpg",
        specs: ["100 Liter Capacity", "Flat Plate", "Budget Friendly", "Reliable"],
        badge: "",
        description: "Budget-friendly solar water heater for small families"
    }
];

let filteredProducts = [...heaterProducts];
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
    const capacityFilters = getCheckedValues('input[value*="l"]');
    const typeFilters = getCheckedValues('input[value="flat-plate"], input[value="evacuated-tube"], input[value="thermosiphon"]');
    const installationFilters = getCheckedValues('input[value="rooftop"], input[value="ground-mount"], input[value="wall-mount"]');
    
    filteredProducts = heaterProducts.filter(product => {
        const capacityMatch = capacityFilters.length === 0 || checkCapacityRange(product.capacity, capacityFilters);
        const typeMatch = typeFilters.length === 0 || typeFilters.includes(product.type);
        const installationMatch = installationFilters.length === 0 || installationFilters.includes(product.installation);
        
        return capacityMatch && typeMatch && installationMatch;
    });
    
    renderProducts();
    updateResultsCount();
}

// Get checked filter values
function getCheckedValues(selector) {
    return Array.from(document.querySelectorAll(selector + ':checked')).map(cb => cb.value);
}

// Check capacity range
function checkCapacityRange(productCapacity, capacityFilters) {
    const capacity = parseInt(productCapacity);
    return capacityFilters.some(range => {
        switch(range) {
            case '100-200l': return capacity >= 100 && capacity <= 200;
            case '200-300l': return capacity >= 200 && capacity <= 300;
            case '300-500l': return capacity >= 300 && capacity <= 500;
            case '500l+': return capacity >= 500;
            default: return false;
        }
    });
}

// Reset filters
function resetFilters() {
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(cb => cb.checked = false);
    filteredProducts = [...heaterProducts];
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
        case 'capacity':
            filteredProducts.sort((a, b) => parseInt(b.capacity) - parseInt(a.capacity));
            break;
        case 'alphabetical':
            filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        default: // featured
            filteredProducts = [...heaterProducts.filter(p => filteredProducts.includes(p))];
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
    const product = heaterProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.capacity}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// View details function
function viewDetails(productId) {
    const product = heaterProducts.find(p => p.id === productId);
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
    const product = heaterProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.capacity}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
};

window.viewDetails = function(productId) {
    const product = heaterProducts.find(p => p.id === productId);
    if (product) {
        console.log('Redirecting to product detail page for ID:', productId);
        window.location.href = `product-detail.html?id=${productId}`;
    } else {
        console.error('Product not found for ID:', productId);
    }
};
