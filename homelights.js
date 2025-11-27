// Home Lights Product Data
const homelightProducts = [
    {
        id: 901,
        title: "LED Ceiling Light 24W",
        power: "24W",
        type: "ceiling",
        room: "living",
        image: "images/homelight-1.jpg",
        specs: ["24W LED", "Ceiling Mount", "Warm White", "Dimmable"],
        badge: "Popular",
        description: "Modern LED ceiling light perfect for living rooms"
    },
    {
        id: 902,
        title: "Pendant Light 15W",
        power: "15W",
        type: "pendant",
        room: "kitchen",
        image: "images/homelight-2.jpg",
        specs: ["15W LED", "Pendant Style", "Adjustable Height", "Modern Design"],
        badge: "Best Seller",
        description: "Stylish pendant light ideal for kitchen islands"
    },
    {
        id: 903,
        title: "Wall Sconce 12W",
        power: "12W",
        type: "wall",
        room: "bedroom",
        image: "images/homelight-3.jpg",
        specs: ["12W LED", "Wall Mount", "Soft Light", "Touch Control"],
        badge: "Premium",
        description: "Elegant wall sconce for bedroom ambient lighting"
    },
    {
        id: 904,
        title: "Table Lamp 8W",
        power: "8W",
        type: "table",
        room: "bedroom",
        image: "images/homelight-4.jpg",
        specs: ["8W LED", "Table Lamp", "Portable", "USB Charging"],
        badge: "",
        description: "Portable LED table lamp with USB charging"
    },
    {
        id: 905,
        title: "Bathroom Light 18W",
        power: "18W",
        type: "ceiling",
        room: "bathroom",
        image: "images/homelight-5.jpg",
        specs: ["18W LED", "Waterproof", "IP65 Rating", "Cool White"],
        badge: "New",
        description: "Waterproof ceiling light designed for bathrooms"
    },
    {
        id: 906,
        title: "Chandelier 36W",
        power: "36W",
        type: "ceiling",
        room: "living",
        image: "images/homelight-6.jpg",
        specs: ["36W LED", "Chandelier", "Crystal Design", "Remote Control"],
        badge: "",
        description: "Luxury LED chandelier for elegant living spaces"
    }
];

let filteredProducts = [...homelightProducts];
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
    const typeFilters = getCheckedValues('input[value="ceiling"], input[value="pendant"], input[value="wall"], input[value="table"]');
    const roomFilters = getCheckedValues('input[value="living"], input[value="bedroom"], input[value="kitchen"], input[value="bathroom"]');
    
    filteredProducts = homelightProducts.filter(product => {
        const powerMatch = powerFilters.length === 0 || checkPowerRange(product.power, powerFilters);
        const typeMatch = typeFilters.length === 0 || typeFilters.includes(product.type);
        const roomMatch = roomFilters.length === 0 || roomFilters.includes(product.room);
        
        return powerMatch && typeMatch && roomMatch;
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
            case '3-9w': return power >= 3 && power <= 9;
            case '9-15w': return power >= 9 && power <= 15;
            case '15-25w': return power >= 15 && power <= 25;
            case '25w+': return power >= 25;
            default: return false;
        }
    });
}

// Reset filters
function resetFilters() {
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(cb => cb.checked = false);
    filteredProducts = [...homelightProducts];
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
            filteredProducts = [...homelightProducts.filter(p => filteredProducts.includes(p))];
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
    const product = homelightProducts.find(p => p.id === productId);
    if (product) {
        const message = `Hi, I would like to enquire about ${product.title} (${product.power}). Please provide more details and pricing.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=918956189167&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
};

window.viewDetails = function(productId) {
    const product = homelightProducts.find(p => p.id === productId);
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
