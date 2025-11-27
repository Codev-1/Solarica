// Images JavaScript
class Images {
    constructor() {
        this.images = [];
        this.init();
    }

    init() {
        this.images = getImages();
        this.setupEventListeners();
        this.displayImages(this.images);
    }

    setupEventListeners() {
        // Category tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterImages(btn.dataset.category);
            });
        });

        // Image file input preview
        const imageFiles = document.getElementById('image-files');
        if (imageFiles) {
            imageFiles.addEventListener('change', (e) => {
                this.previewImages(e.target.files);
            });
        }
    }

    displayImages(images) {
        const grid = document.getElementById('image-grid');
        
        if (images.length === 0) {
            grid.innerHTML = '<div class="text-center">No images found</div>';
            return;
        }

        grid.innerHTML = images.map(image => `
            <div class="image-item">
                <img src="${image.path}" alt="${image.name}" onerror="this.src='https://via.placeholder.com/200x150?text=Image'">
                <div class="image-actions">
                    <button class="btn btn-sm btn-danger" onclick="deleteImage(${image.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    filterImages(category) {
        if (category === 'all') {
            this.displayImages(this.images);
        } else {
            const filtered = this.images.filter(img => img.category === category);
            this.displayImages(filtered);
        }
    }

    previewImages(files) {
        const preview = document.getElementById('image-preview');
        preview.innerHTML = '';

        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const div = document.createElement('div');
                div.className = 'preview-item';
                div.innerHTML = `<img src="${e.target.result}" alt="${file.name}">`;
                preview.appendChild(div);
            };
            reader.readAsDataURL(file);
        });
    }
}

// Global functions for image management
function openImageUploadModal() {
    document.getElementById('image-upload-modal').classList.add('show');
}

function closeImageUploadModal() {
    document.getElementById('image-upload-modal').classList.remove('show');
    document.getElementById('image-files').value = '';
    document.getElementById('image-preview').innerHTML = '';
}

function uploadImages() {
    const files = document.getElementById('image-files').files;
    const category = document.getElementById('image-category').value;

    if (files.length === 0) {
        showAlert('Please select images to upload', 'error');
        return;
    }

    if (!category) {
        showAlert('Please select a category', 'error');
        return;
    }

    // In a real application, this would upload to server
    // For demo, we'll simulate the upload
    let images = getImages();
    Array.from(files).forEach((file, index) => {
        const newImage = {
            id: images.length + index + 1,
            name: file.name,
            category: category,
            path: `../${category}/${file.name}`
        };
        images.push(newImage);
    });

    saveImages(images);
    closeImageUploadModal();
    showAlert('Images uploaded successfully', 'success');
    location.reload();
}

function deleteImage(imageId) {
    if (confirm('Are you sure you want to delete this image?')) {
        let images = getImages();
        images = images.filter(img => img.id !== imageId);
        saveImages(images);
        showAlert('Image deleted successfully', 'success');
        location.reload();
    }
}

// Initialize images when DOM is loaded
let imagesManager;
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        imagesManager = new Images();
    }, 100);
});
