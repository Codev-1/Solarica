// Products JavaScript
class Products {
    constructor() {
        this.products = [];
        this.init();
    }

    init() {
        this.products = getProducts();
        this.setupEventListeners();
        this.loadProducts();
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('product-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterProducts();
            });
        }

        // Category filter
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => {
                this.filterProducts();
            });
        }

        // Status filter
        const statusFilter = document.getElementById('status-filter');
        if (statusFilter) {
            statusFilter.addEventListener('change', () => {
                this.filterProducts();
            });
        }
    }

    loadProducts() {
        const tbody = document.getElementById('products-table');
        
        if (this.products.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="text-center">No products found</td></tr>';
            return;
        }

        tbody.innerHTML = this.products.map(product => `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>₹${product.price}</td>
                <td><span class="status-badge ${product.status}">${product.status}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-primary" onclick="editProduct(${product.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    filterProducts() {
        const searchTerm = document.getElementById('product-search').value.toLowerCase();
        const categoryFilter = document.getElementById('category-filter').value;
        const statusFilter = document.getElementById('status-filter').value;

        let filteredProducts = this.products;

        // Apply search filter
        if (searchTerm) {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
        }

        // Apply category filter
        if (categoryFilter) {
            filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
        }

        // Apply status filter
        if (statusFilter) {
            filteredProducts = filteredProducts.filter(product => product.status === statusFilter);
        }

        this.displayFilteredProducts(filteredProducts);
    }

    displayFilteredProducts(products) {
        const tbody = document.getElementById('products-table');
        
        if (products.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="text-center">No products found</td></tr>';
            return;
        }

        tbody.innerHTML = products.map(product => `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>₹${product.price}</td>
                <td><span class="status-badge ${product.status}">${product.status}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-primary" onclick="editProduct(${product.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }
}

// Global functions for product management
function openProductModal(productId = null) {
    const modal = document.getElementById('product-modal');
    const form = document.getElementById('product-form');
    const title = document.getElementById('product-modal-title');
    const products = getProducts();

    if (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            title.textContent = 'Edit Product';
            document.getElementById('product-name').value = product.name;
            document.getElementById('product-category').value = product.category;
            document.getElementById('product-price').value = product.price;
            document.getElementById('product-description').value = product.description;
            document.getElementById('product-specifications').value = product.specifications;
            document.getElementById('product-status').value = product.status;
            form.dataset.productId = productId;
        }
    } else {
        title.textContent = 'Add New Product';
        form.reset();
        delete form.dataset.productId;
    }

    modal.classList.add('show');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('show');
}

function saveProduct() {
    const form = document.getElementById('product-form');
    const productId = form.dataset.productId;
    let products = getProducts();
    
    const productData = {
        name: document.getElementById('product-name').value,
        category: document.getElementById('product-category').value,
        price: document.getElementById('product-price').value,
        description: document.getElementById('product-description').value,
        specifications: document.getElementById('product-specifications').value,
        status: document.getElementById('product-status').value
    };

    if (!productData.name || !productData.category || !productData.price) {
        showAlert('Please fill in all required fields', 'error');
        return;
    }

    if (productId) {
        // Edit existing product
        const index = products.findIndex(p => p.id == productId);
        if (index !== -1) {
            products[index] = { ...products[index], ...productData };
        }
    } else {
        // Add new product
        const newProduct = {
            id: products.length + 1,
            ...productData,
            dateAdded: new Date().toISOString()
        };
        products.push(newProduct);
    }

    saveProducts(products);
    closeProductModal();
    showAlert(productId ? 'Product updated successfully' : 'Product added successfully', 'success');
    
    // Reload the page to show updated data
    location.reload();
}

function editProduct(productId) {
    openProductModal(productId);
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        let products = getProducts();
        products = products.filter(p => p.id !== productId);
        saveProducts(products);
        showAlert('Product deleted successfully', 'success');
        location.reload();
    }
}

// Initialize products when DOM is loaded
let productsManager;
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        productsManager = new Products();
    }, 100);
});
