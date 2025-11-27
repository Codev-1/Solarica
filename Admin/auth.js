// Admin Authentication System
class AdminAuth {
    constructor() {
        this.isLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
        this.checkAuth();
    }

    checkAuth() {
        const currentPage = window.location.pathname.split('/').pop();
        
        // If not on login/create-account page and not logged in, redirect to login
        if (currentPage !== 'login.html' && currentPage !== 'create-account.html' && !this.isLoggedIn) {
            window.location.href = 'login.html';
            return;
        }

        // If on login page and already logged in, redirect to dashboard
        if (currentPage === 'login.html' && this.isLoggedIn) {
            window.location.href = 'dashboard.html';
            return;
        }

        // If on create-account page and already logged in, redirect to dashboard
        if (currentPage === 'create-account.html' && this.isLoggedIn) {
            window.location.href = 'dashboard.html';
            return;
        }

        // Add logout functionality
        this.addLogoutHandler();
    }

    login(email, password) {
        // Simple authentication (in real app, this would be server-side)
        if (email === 'admin@solarica.com' && password === 'admin123') {
            sessionStorage.setItem('adminLoggedIn', 'true');
            sessionStorage.setItem('adminEmail', email);
            this.isLoggedIn = true;
            return true;
        }
        return false;
    }

    logout() {
        sessionStorage.removeItem('adminLoggedIn');
        sessionStorage.removeItem('adminEmail');
        this.isLoggedIn = false;
        window.location.href = 'login.html';
    }

    addLogoutHandler() {
        // Find and add click handler to logout buttons
        const logoutBtns = document.querySelectorAll('.logout-btn');
        logoutBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (confirm('Are you sure you want to logout?')) {
                    this.logout();
                }
            });
        });
    }

    getCurrentUser() {
        return {
            email: sessionStorage.getItem('adminEmail'),
            isLoggedIn: this.isLoggedIn
        };
    }
}

// Initialize authentication when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AdminAuth();
});

// Export for use in other files
window.AdminAuth = AdminAuth;
