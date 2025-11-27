// Dashboard JavaScript
class Dashboard {
    constructor() {
        this.init();
    }

    init() {
        this.updateDashboardStats();
        this.loadRecentInquiries();
    }

    updateDashboardStats() {
        const products = getProducts();
        const inquiries = getInquiries();
        const images = getImages();

        // Update stats
        document.getElementById('total-products').textContent = products.length;
        document.getElementById('total-images').textContent = images.length;
        document.getElementById('total-inquiries').textContent = inquiries.filter(i => i.status === 'new').length;
        document.getElementById('total-visitors').textContent = Math.floor(Math.random() * 100) + 50; // Mock data
    }

    loadRecentInquiries() {
        const inquiries = getInquiries();
        const tbody = document.getElementById('recent-inquiries');
        const recentInquiries = inquiries.slice(0, 5);
        
        if (recentInquiries.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" class="text-center">No inquiries yet</td></tr>';
            return;
        }

        tbody.innerHTML = recentInquiries.map(inquiry => `
            <tr>
                <td>${inquiry.name}</td>
                <td>${inquiry.email}</td>
                <td>${inquiry.message.substring(0, 50)}...</td>
                <td>${new Date(inquiry.date).toLocaleDateString()}</td>
            </tr>
        `).join('');
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait for adminCommon to be initialized
    setTimeout(() => {
        new Dashboard();
    }, 100);
});
