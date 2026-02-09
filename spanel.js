// Solar Panels Product Data
const panelProducts = [
    {
        id: 701,
        title: "Monocrystalline Solar Panel 400W",
        wattage: "400W",
        technology: "monocrystalline",
        application: "residential",
        image: "images/panel-1.jpg",
        specs: ["400W Power", "Monocrystalline", "22% Efficiency", "25 Year Warranty"],
        badge: "Popular",
        description: "High-efficiency monocrystalline solar panel for residential installations"
    },
    {
        id: 702,
        title: "Polycrystalline Solar Panel 320W",
        wattage: "320W",
        technology: "polycrystalline",
        application: "commercial",
        image: "images/panel-2.jpg",
        specs: ["320W Power", "Polycrystalline", "19% Efficiency", "Cost Effective"],
        badge: "Best Seller",
        description: "Cost-effective polycrystalline solar panel for commercial use"
    },
    {
        id: 703,
        title: "Bifacial Solar Panel 500W",
        wattage: "500W",
        technology: "bifacial",
        application: "utility",
        image: "panel/s1.jpg",
        specs: ["500W Power", "Bifacial Technology", "24% Efficiency", "Dual Sided"],
        badge: "Premium",
        description: "Advanced bifacial solar panel for utility-scale installations"
    },
    {
        id: 704,
        title: "Monocrystalline Solar Panel 300W",
        wattage: "300W",
        technology: "monocrystalline",
        application: "residential",
        image: "panel/s2.jpg",
        specs: ["300W Power", "Compact Size", "20% Efficiency", "Residential Grade"],
        badge: "",
        description: "Compact monocrystalline panel perfect for small rooftops"
    },
    {
        id: 705,
        title: "High Efficiency Solar Panel 600W",
        wattage: "600W",
        technology: "monocrystalline",
        application: "commercial",
        image: "panel/s3.jpg",
        specs: ["600W Power", "High Efficiency", "23% Efficiency", "Commercial Grade"],
        badge: "New",
        description: "High-power solar panel for large commercial installations"
    },
    {
        id: 706,
        title: "Flexible Solar Panel 200W",
        wattage: "200W",
        technology: "monocrystalline",
        application: "residential",
        image: "panel/s4.jpg",
        specs: ["200W Power", "Flexible Design", "Lightweight", "Easy Install"],
        badge: "",
        description: "Flexible solar panel for curved surfaces and mobile applications"
    }
];

let filteredProducts = [...panelProducts];
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
    const wattageFilters = getCheckedValues('input[value*="w"]');
    const technologyFilters = getCheckedValues('input[value="monocrystalline"], input[value="polycrystalline"], input[value="bifacial"]');
    const applicationFilters = getCheckedValues('input[value="residential"], input[value="commercial"], input[value="utility"]');
    
    filteredProducts = panelProducts.filter(product => {
        const wattageMatch = wattageFilters.length === 0 || checkWattageRange(product.wattage, wattageFilters);
        const technologyMatch = technologyFilters.length === 0 || technologyFilters.includes(product.technology);
        const applicationMatch = applicationFilters.length === 0 || applicationFilters.includes(product.application);
        
        return wattageMatch && technologyMatch && applicationMatch;
    });
    
    renderProducts();
    updateResultsCount();
}

// Get checked filter values
function getCheckedValues(selector) {
    return Array.from(document.querySelectorAll(selector + ':checked')).map(cb => cb.value);
}

// Check wattage range
function checkWattageRange(productWattage, wattageFilters) {
    const wattage = parseInt(productWattage);
    return wattageFilters.some(range => {
        switch(range) {
            case '100-300w': return wattage >= 100 && wattage <= 300;
            case '300-500w': return wattage >= 300 && wattage <= 500;
            case '500-700w': return wattage >= 500 && wattage <= 700;
            case '700w+': return wattage >= 700;
            default: return false;
        }
    });
}

// Reset filters
function resetFilters() {
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(cb => cb.checked = false);
    filteredProducts = [...panelProducts];
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
        case 'wattage':
            filteredProducts.sort((a, b) => parseInt(b.wattage) - parseInt(a.wattage));
            break;
        case 'alphabetical':
            filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        default: // featured
            filteredProducts = [...panelProducts.filter(p => filteredProducts.includes(p))];
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
    const product = panelProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.wattage}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// View details function
function viewDetails(productId) {
    const product = panelProducts.find(p => p.id === productId);
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
    const product = panelProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.wattage}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
};

window.viewDetails = function(productId) {
    const product = panelProducts.find(p => p.id === productId);
    if (product) {
        console.log('Redirecting to product detail page for ID:', productId);
        window.location.href = `product-detail.html?id=${productId}`;
    } else {
        console.error('Product not found for ID:', productId);
    }
};
