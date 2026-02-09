// AC Lights Product Data
const aclightProducts = [
    {
        id: 801,
        title: "LED Bulb 9W",
        power: "9W",
        type: "led",
        application: "indoor",
        image: "AClights/1.png",
        specs: ["9W LED", "Cool White", "Energy Efficient", "Long Life"],
        badge: "Popular",
        description: "Energy-efficient LED bulb for home and office use"
    },
    {
        id: 802,
        title: "CFL Bulb 20W",
        power: "20W",
        type: "cfl",
        application: "indoor",
        image: "AClights/2.png",
        specs: ["20W CFL", "Warm White", "Compact Design", "Budget Friendly"],
        badge: "Best Seller",
        description: "Compact fluorescent lamp for general lighting"
    },
    {
        id: 803,
        title: "LED Tube Light 18W",
        power: "18W",
        type: "tube",
        application: "commercial",
        image: "AClights/3.png",
        specs: ["18W LED Tube", "4 Feet", "Commercial Grade", "Flicker Free"],
        badge: "Premium",
        description: "LED tube light for commercial and industrial applications"
    },
    {
        id: 804,
        title: "Outdoor LED Light 30W",
        power: "30W",
        type: "led",
        application: "outdoor",
        image: "AClights/4.png",
        specs: ["30W LED", "Waterproof", "Outdoor Use", "Motion Sensor"],
        badge: "",
        description: "Waterproof LED light for outdoor applications"
    },
    {
        id: 805,
        title: "Smart LED Bulb 12W",
        power: "12W",
        type: "led",
        application: "indoor",
        image: "AClights/5.png",
        specs: ["12W Smart LED", "WiFi Control", "Color Changing", "App Control"],
        badge: "New",
        description: "Smart LED bulb with WiFi control and color changing"
    },
    {
        id: 806,
        title: "High Bay LED 50W",
        power: "50W",
        type: "led",
        application: "commercial",
        image: "AClights/6.png",
        specs: ["50W High Bay", "Industrial Grade", "High Brightness", "Heat Resistant"],
        badge: "",
        description: "High bay LED light for warehouses and factories"
    }
];

let filteredProducts = [...aclightProducts];
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
    const powerFilters = getCheckedValues('input[value*="w"]');
    const typeFilters = getCheckedValues('input[value="led"], input[value="cfl"], input[value="tube"]');
    const applicationFilters = getCheckedValues('input[value="indoor"], input[value="outdoor"], input[value="commercial"]');
    
    filteredProducts = aclightProducts.filter(product => {
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
            case '5-15w': return power >= 5 && power <= 15;
            case '15-30w': return power >= 15 && power <= 30;
            case '30-50w': return power >= 30 && power <= 50;
            case '50w+': return power >= 50;
            default: return false;
        }
    });
}

// Reset filters
function resetFilters() {
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(cb => cb.checked = false);
    filteredProducts = [...aclightProducts];
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
            filteredProducts = [...aclightProducts.filter(p => filteredProducts.includes(p))];
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

// Make functions globally available immediately
window.enquireNow = function(productId) {
    const product = aclightProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.power}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
};

window.viewDetails = function(productId) {
    const product = aclightProducts.find(p => p.id === productId);
    if (product) {
        console.log('Redirecting to product detail page for ID:', productId);
        window.location.href = `product-detail.html?id=${productId}`;
    } else {
        console.error('Product not found for ID:', productId);
    }
};

// Update year in footer
function updateYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}
