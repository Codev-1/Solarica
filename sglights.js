// Solar Garden Lights Products Page JavaScript

// Garden lights product data - only 6 products
const gardenProducts = [
    {
        id: 101,
        title: "SOLAR GARDEN LIGHT (Fire)",
        power: "5W",
        type: "led",
        installation: "ground-stake",
        image: "gardenlights/img1.png",
        specs: ["5W LED", "Warm White 3000K", "IP65", "Rechargeable Battery"],
        badge: "",
        description: "Beautiful pathway lighting for gardens and walkways"
    },
    {
        id: 102,
        title: "Decorative Solar Garden Light 8W",
        power: "8W",
        type: "decorative",
        installation: "ground-stake",
        image: "gardenlights/img2.png",
        specs: ["8W LED", "Color Changing", "Remote Control", "Li-ion Battery"],
        badge: "",
        description: "Decorative solar light with color changing features"
    },
    {
        id: 103,
        title: "Solar Bollard Light 10W",
        power: "10W",
        type: "bollard",
        installation: "ground-mount",
        image: "gardenlights/img3.png",
        specs: ["10W LED", "Modern Design", "Dusk to Dawn", "Weather Resistant"],
        badge: "",
        description: "Modern bollard design for contemporary gardens"
    },
    {
        id: 104,
        title: "Solar Spike Light 6W",
        power: "6W",
        type: "spotlight",
        installation: "spike-mount",
        image: "gardenlights/img4.png",
        specs: ["6W LED", "Adjustable Angle", "Spot Light", "Easy Install"],
        badge: "",
        description: "Adjustable spike light for highlighting garden features"
    },
    {
        id: 105,
        title: "Solar Lantern Light 12W",
        power: "12W",
        type: "lantern",
        installation: "hanging",
        image: "gardenlights/img5.png",
        specs: ["12W LED", "Vintage Design", "Hanging Mount", "Long Runtime"],
        badge: "",
        description: "Vintage-style lantern for classic garden ambiance"
    },
    {
        id: 106,
        title: "Solar Post Light 15W",
        power: "15W",
        type: "post",
        installation: "post-mount",
        image: "gardenlights/img6.png",
        specs: ["15W LED", "Classic Design", "Post Mount", "High Brightness"],
        badge: "",
        description: "Classic post light for garden entrances and pathways"
    }
];

let filteredProducts = [...gardenProducts];
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
    const typeFilters = getCheckedValues('input[value="led"], input[value="decorative"], input[value="bollard"], input[value="lantern"]');
    const installationFilters = getCheckedValues('input[value="ground-stake"], input[value="ground-mount"], input[value="hanging"], input[value="post-mount"]');
    
    filteredProducts = gardenProducts.filter(product => {
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
            case '5-10w': return power >= 5 && power <= 10;
            case '10-15w': return power >= 10 && power <= 15;
            case '15-20w': return power >= 15 && power <= 20;
            case '20w+': return power >= 20;
            default: return false;
        }
    });
}

// Reset filters
function resetFilters() {
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(cb => cb.checked = false);
    filteredProducts = [...gardenProducts];
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
            filteredProducts = [...gardenProducts.filter(p => filteredProducts.includes(p))];
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
    const product = gardenProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.power}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// View details function
function viewDetails(productId) {
    const product = gardenProducts.find(p => p.id === productId);
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
    const product = gardenProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.power}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
};

window.viewDetails = function(productId) {
    const product = gardenProducts.find(p => p.id === productId);
    if (product) {
        console.log('Redirecting to product detail page for ID:', productId);
        window.location.href = `product-detail.html?id=${productId}`;
    } else {
        console.error('Product not found for ID:', productId);
    }
};
