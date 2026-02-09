// Solar Water Pumps Product Data
const pumpProducts = [
    {
        id: 401,
        title: "Solar Submersible Pump 3HP",
        power: "3HP",
        type: "submersible",
        application: "agriculture",
        image: "spump/1.png",
        specs: ["3HP Motor", "Submersible", "Agriculture Use", "High Efficiency"],
        badge: "Popular",
        description: "High-efficiency solar submersible pump for agricultural irrigation"
    },
    {
        id: 402,
        title: "Solar Surface Pump 5HP",
        power: "5HP",
        type: "surface",
        application: "domestic",
        image: "spump/2.png",
        specs: ["5HP Motor", "Surface Mount", "Domestic Use", "Easy Maintenance"],
        badge: "Best Seller",
        description: "Reliable surface pump for domestic water supply needs"
    },
    {
        id: 403,
        title: "Solar Borewell Pump 7HP",
        power: "7HP",
        type: "borewell",
        application: "industrial",
        image: "spump/3.png",
        specs: ["7HP Motor", "Borewell", "Industrial Grade", "Heavy Duty"],
        badge: "Premium",
        description: "Heavy-duty borewell pump for industrial applications"
    },
    {
        id: 404,
        title: "Solar Centrifugal Pump 2HP",
        power: "2HP",
        type: "surface",
        application: "domestic",
        image: "spump/4.png",
        specs: ["2HP Motor", "Centrifugal", "Compact Design", "Energy Efficient"],
        badge: "",
        description: "Compact centrifugal pump for residential water supply"
    },
    {
        id: 405,
        title: "Solar Deep Well Pump 10HP",
        power: "10HP",
        type: "submersible",
        application: "agriculture",
        image: "spump/5.png",
        specs: ["10HP Motor", "Deep Well", "High Flow Rate", "Durable"],
        badge: "New",
        description: "High-capacity deep well pump for large-scale irrigation"
    },
    {
        id: 406,
        title: "Solar Pool Pump 1HP",
        power: "1HP",
        type: "surface",
        application: "domestic",
        image: "spump/6.png",
        specs: ["1HP Motor", "Pool Circulation", "Silent Operation", "Weatherproof"],
        badge: "",
        description: "Specialized pump for swimming pool water circulation"
    }
];

let filteredProducts = [...pumpProducts];
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
    const powerFilters = getCheckedValues('input[value*="hp"]');
    const typeFilters = getCheckedValues('input[value="submersible"], input[value="surface"], input[value="borewell"]');
    const applicationFilters = getCheckedValues('input[value="agriculture"], input[value="domestic"], input[value="industrial"]');
    
    filteredProducts = pumpProducts.filter(product => {
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
    const power = parseInt(productPower);
    return powerFilters.some(range => {
        switch(range) {
            case '1-3hp': return power >= 1 && power <= 3;
            case '3-5hp': return power >= 3 && power <= 5;
            case '5-10hp': return power >= 5 && power <= 10;
            case '10hp+': return power >= 10;
            default: return false;
        }
    });
}

// Reset filters
function resetFilters() {
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(cb => cb.checked = false);
    filteredProducts = [...pumpProducts];
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
            filteredProducts = [...pumpProducts.filter(p => filteredProducts.includes(p))];
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
    const product = pumpProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.power}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// View details function
function viewDetails(productId) {
    const product = pumpProducts.find(p => p.id === productId);
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
    const product = pumpProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.power}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
};

window.viewDetails = function(productId) {
    const product = pumpProducts.find(p => p.id === productId);
    if (product) {
        console.log('Redirecting to product detail page for ID:', productId);
        window.location.href = `product-detail.html?id=${productId}`;
    } else {
        console.error('Product not found for ID:', productId);
    }
};
