// Inquiries JavaScript
class Inquiries {
    constructor() {
        this.inquiries = [];
        this.init();
    }

    init() {
        this.inquiries = getInquiries();
        this.setupEventListeners();
        this.loadInquiries();
    }

    setupEventListeners() {
        // Filter buttons
        document.querySelectorAll('.filter-buttons .btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-buttons .btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterInquiries(btn.dataset.status);
            });
        });
    }

    loadInquiries() {
        const tbody = document.getElementById('inquiries-table');
        
        if (this.inquiries.length === 0) {
            tbody.innerHTML = '<tr><td colspan="8" class="text-center">No inquiries found</td></tr>';
            return;
        }

        tbody.innerHTML = this.inquiries.map(inquiry => `
            <tr>
                <td>${inquiry.id}</td>
                <td>${inquiry.name}</td>
                <td>${inquiry.email}</td>
                <td>${inquiry.phone}</td>
                <td>${inquiry.subject}</td>
                <td>${new Date(inquiry.date).toLocaleDateString()}</td>
                <td><span class="status-badge ${inquiry.status}">${inquiry.status}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-info" onclick="viewInquiry(${inquiry.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-success" onclick="replyToInquiry(${inquiry.id})">
                            <i class="fas fa-reply"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="deleteInquiry(${inquiry.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    filterInquiries(status) {
        if (status === 'all') {
            this.loadInquiries();
        } else {
            const filtered = this.inquiries.filter(i => i.status === status);
            this.displayFilteredInquiries(filtered);
        }
    }

    displayFilteredInquiries(inquiries) {
        const tbody = document.getElementById('inquiries-table');
        
        if (inquiries.length === 0) {
            tbody.innerHTML = '<tr><td colspan="8" class="text-center">No inquiries found</td></tr>';
            return;
        }

        tbody.innerHTML = inquiries.map(inquiry => `
            <tr>
                <td>${inquiry.id}</td>
                <td>${inquiry.name}</td>
                <td>${inquiry.email}</td>
                <td>${inquiry.phone}</td>
                <td>${inquiry.subject}</td>
                <td>${new Date(inquiry.date).toLocaleDateString()}</td>
                <td><span class="status-badge ${inquiry.status}">${inquiry.status}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-info" onclick="viewInquiry(${inquiry.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-success" onclick="replyToInquiry(${inquiry.id})">
                            <i class="fas fa-reply"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="deleteInquiry(${inquiry.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }
}

// Global functions for inquiry management
function viewInquiry(inquiryId) {
    let inquiries = getInquiries();
    const inquiry = inquiries.find(i => i.id === inquiryId);
    if (inquiry) {
        // Mark as read
        inquiry.status = 'read';
        saveInquiries(inquiries);
        
        // Show inquiry details
        alert(`Name: ${inquiry.name}\nEmail: ${inquiry.email}\nPhone: ${inquiry.phone}\nSubject: ${inquiry.subject}\nMessage: ${inquiry.message}`);
        location.reload();
    }
}

function replyToInquiry(inquiryId) {
    let inquiries = getInquiries();
    const inquiry = inquiries.find(i => i.id === inquiryId);
    if (inquiry) {
        const reply = prompt(`Reply to ${inquiry.name} (${inquiry.email}):`);
        if (reply) {
            inquiry.status = 'replied';
            inquiry.reply = reply;
            inquiry.replyDate = new Date().toISOString();
            saveInquiries(inquiries);
            showAlert('Reply sent successfully', 'success');
            location.reload();
        }
    }
}

function deleteInquiry(inquiryId) {
    if (confirm('Are you sure you want to delete this inquiry?')) {
        let inquiries = getInquiries();
        inquiries = inquiries.filter(i => i.id !== inquiryId);
        saveInquiries(inquiries);
        showAlert('Inquiry deleted successfully', 'success');
        location.reload();
    }
}

// Initialize inquiries when DOM is loaded
let inquiriesManager;
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        inquiriesManager = new Inquiries();
    }, 100);
});
