// Solar Flood Lights Product Data
const floodProducts = [
    {
        id: 301,
        title: "Solar Flood Light 50W",
        power: "50W",
        type: "flood",
        installation: "ground-mount",
        image: "flood lights/img1.jpeg",
        specs: ["50W LED", "5000 Lumens", "IP66 Rating", "Remote Control"],
        badge: "",
        description: "High-power flood light for large area illumination"
    },
    {
        id: 302,
        title: "Solar Security Flood Light 100W",
        power: "100W",
        type: "security",
        installation: "wall-mount",
        image: "flood lights/img2.jpeg",
        specs: ["100W LED", "10000 Lumens", "Motion Sensor", "Dusk to Dawn"],
        badge: "",
        description: "Security flood light with motion detection"
    },
    {
        id: 303,
        title: "Solar Stadium Light 200W",
        power: "200W",
        type: "stadium",
        installation: "pole-mount",
        image: "flood lights/img3.jpg",
        specs: ["200W LED", "20000 Lumens", "Professional Grade", "Wide Beam"],
        badge: "",
        description: "Professional stadium lighting for sports facilities"
    },
    {
        id: 304,
        title: "Solar RGB Flood Light 75W",
        power: "75W",
        type: "rgb",
        installation: "ground-mount",
        image: "flood lights/img4.jpg",
        specs: ["75W RGB LED", "Color Changing", "App Control", "Weatherproof"],
        badge: "",
        description: "RGB color changing flood light with smartphone control"
    },
    {
        id: 305,
        title: "Solar Emergency Flood Light 30W",
        power: "30W",
        type: "emergency",
        installation: "portable",
        image: "flood lights/img5.jpg",
        specs: ["30W LED", "Portable Design", "Emergency Backup", "USB Charging"],
        badge: "",
        description: "Portable emergency flood light with backup power"
    }
];

let filteredProducts = [...floodProducts];
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
    const typeFilters = getCheckedValues('input[value="flood"], input[value="security"], input[value="stadium"], input[value="rgb"], input[value="emergency"], input[value="industrial"]');
    const installationFilters = getCheckedValues('input[value="ground-mount"], input[value="wall-mount"], input[value="pole-mount"], input[value="portable"]');
    
    filteredProducts = floodProducts.filter(product => {
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
            case '30-50w': return power >= 30 && power <= 50;
            case '50-100w': return power >= 50 && power <= 100;
            case '100-150w': return power >= 100 && power <= 150;
            case '150w+': return power >= 150;
            default: return false;
        }
    });
}

// Reset filters
function resetFilters() {
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(cb => cb.checked = false);
    filteredProducts = [...floodProducts];
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
            filteredProducts = [...floodProducts.filter(p => filteredProducts.includes(p))];
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
    const product = floodProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.power}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// View details function
function viewDetails(productId) {
    const product = floodProducts.find(p => p.id === productId);
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
    const product = floodProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.power}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
};

window.viewDetails = function(productId) {
    const product = floodProducts.find(p => p.id === productId);
    if (product) {
        console.log('Redirecting to product detail page for ID:', productId);
        window.location.href = `product-detail.html?id=${productId}`;
    } else {
        console.error('Product not found for ID:', productId);
    }
};
