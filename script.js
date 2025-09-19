// Global variables
let currentUser = null;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    // Check authentication
    checkAuthentication();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize tooltips
    initializeTooltips();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize form validation
    initializeFormValidation();
}

// Check authentication
function checkAuthentication() {
    const userRole = localStorage.getItem('userRole');
    const userEmail = localStorage.getItem('userEmail');
    
    if (userRole && userEmail) {
        currentUser = { role: userRole, email: userEmail };
        updateUIBasedOnAuth();
    }
}

// Update UI based on authentication
function updateUIBasedOnAuth() {
    if (!currentUser) return;
    
    // Update navigation for authenticated users
    const loginLinks = document.querySelectorAll('a[href="login.html"]');
    loginLinks.forEach(link => {
        if (currentUser.role === 'admin') {
            link.href = 'admin.html';
            link.textContent = 'Admin Panel';
        } else {
            link.href = 'member.html';
            link.textContent = 'Hồ sơ';
        }
    });
}

// Initialize event listeners
function initializeEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Sidebar toggle for admin panel
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
    
    // Sidebar navigation
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('click', handleSidebarNavigation);
    });
    
    // Form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmission);
    });
    
    // Button clicks
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.textContent.includes('Đăng ký') && !button.form) {
            button.addEventListener('click', handleEventRegistration);
        }
    });
    
    // Search functionality
    const searchInputs = document.querySelectorAll('input[type="search"], input[placeholder*="Tìm kiếm"]');
    searchInputs.forEach(input => {
        input.addEventListener('input', handleSearch);
    });
    
    // Filter functionality
    const filterSelects = document.querySelectorAll('select');
    filterSelects.forEach(select => {
        select.addEventListener('change', handleFilter);
    });
}

// Initialize mobile menu
function initializeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('#mobile-menu') && !e.target.closest('#mobile-menu-btn')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('-translate-x-full');
    }
}

// Handle sidebar navigation
function handleSidebarNavigation(e) {
    e.preventDefault();
    
    // Update active state
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    
    // Get the target section
    const href = e.currentTarget.getAttribute('href');
    const targetSection = href.substring(1); // Remove the #
    
    // Show/hide content sections (placeholder for now)
    showSection(targetSection);
}

// Show specific section (placeholder function)
function showSection(sectionName) {
    // This would typically show/hide different dashboard sections
    console.log(`Showing section: ${sectionName}`);
    
    // Update page title
    const titleElement = document.querySelector('h1');
    if (titleElement) {
        switch(sectionName) {
            case 'dashboard':
                titleElement.textContent = 'Dashboard';
                break;
            case 'members':
                titleElement.textContent = 'Quản lý thành viên';
                break;
            case 'events':
                titleElement.textContent = 'Quản lý sự kiện';
                break;
            case 'finance':
                titleElement.textContent = 'Quản lý tài chính';
                break;
            case 'resources':
                titleElement.textContent = 'Quản lý tài nguyên';
                break;
            case 'notifications':
                titleElement.textContent = 'Thông báo';
                break;
            default:
                titleElement.textContent = 'Dashboard';
        }
    }
}

// Handle form submission
function handleFormSubmission(e) {
    const form = e.target;
    
    // Skip if it's the login form (handled separately)
    if (form.id === 'loginForm') {
        return;
    }
    
    e.preventDefault();
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.innerHTML = '<span class="loading"></span> Đang xử lý...';
    submitButton.disabled = true;
    
    // Simulate form processing
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        showNotification('Thành công!', 'Form đã được gửi thành công.', 'success');
    }, 2000);
}

// Handle event registration
function handleEventRegistration(e) {
    e.preventDefault();
    
    const button = e.target;
    const originalText = button.textContent;
    
    // Check if user is logged in
    if (!currentUser) {
        showNotification('Cần đăng nhập', 'Vui lòng đăng nhập để đăng ký sự kiện.', 'warning');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
        return;
    }
    
    // Show loading state
    button.innerHTML = '<span class="loading"></span> Đang đăng ký...';
    button.disabled = true;
    
    // Simulate registration process
    setTimeout(() => {
        button.textContent = 'Đã đăng ký';
        button.classList.remove('bg-blue-600', 'hover:bg-blue-700', 'bg-green-600', 'hover:bg-green-700');
        button.classList.add('bg-gray-400', 'cursor-not-allowed');
        showNotification('Đăng ký thành công!', 'Bạn đã đăng ký sự kiện thành công.', 'success');
    }, 2000);
}

// Handle search
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    console.log(`Searching for: ${query}`);
    
    // This would typically filter content based on the search query
    // For demo purposes, we'll just log it
}

// Handle filter
function handleFilter(e) {
    const filter = e.target.value;
    const filterType = e.target.name || 'general';
    
    console.log(`Filtering by ${filterType}: ${filter}`);
    
    // This would typically filter content based on the selected filter
    // For demo purposes, we'll just log it
}

// Initialize tooltips
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[title]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

// Show tooltip
function showTooltip(e) {
    const element = e.target;
    const title = element.getAttribute('title');
    
    if (!title) return;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip-text visible opacity-100';
    tooltip.textContent = title;
    
    element.appendChild(tooltip);
    element.removeAttribute('title');
    element.setAttribute('data-tooltip', title);
}

// Hide tooltip
function hideTooltip(e) {
    const element = e.target;
    const tooltip = element.querySelector('.tooltip-text');
    const originalTitle = element.getAttribute('data-tooltip');
    
    if (tooltip) {
        tooltip.remove();
    }
    
    if (originalTitle) {
        element.setAttribute('title', originalTitle);
        element.removeAttribute('data-tooltip');
    }
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize form validation
function initializeFormValidation() {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearValidationError);
    });
}

// Validate individual field
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Trường này là bắt buộc';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Email không hợp lệ';
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[0-9]{10,11}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Số điện thoại không hợp lệ';
        }
    }
    
    // Password validation
    if (field.type === 'password' && value) {
        if (value.length < 6) {
            isValid = false;
            errorMessage = 'Mật khẩu phải có ít nhất 6 ký tự';
        }
    }
    
    // Show/hide error
    if (isValid) {
        clearFieldError(field);
    } else {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    clearFieldError(field);
    
    field.classList.add('border-red-500');
    
    const errorElement = document.createElement('div');
    errorElement.className = 'text-red-500 text-sm mt-1';
    errorElement.textContent = message;
    
    field.parentNode.appendChild(errorElement);
}

// Clear field error
function clearFieldError(field) {
    field.classList.remove('border-red-500');
    
    const errorElement = field.parentNode.querySelector('.text-red-500');
    if (errorElement) {
        errorElement.remove();
    }
}

// Clear validation error on input
function clearValidationError(e) {
    clearFieldError(e.target);
}

// Show notification
function showNotification(title, message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    notification.innerHTML = `
        <div class="flex">
            <div class="flex-shrink-0">
                ${getNotificationIcon(type)}
            </div>
            <div class="ml-3">
                <p class="text-sm font-medium text-gray-800">${title}</p>
                <p class="mt-1 text-sm text-gray-600">${message}</p>
            </div>
            <div class="ml-auto pl-3">
                <button class="notification-close text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => hideNotification(notification));
}

// Get notification icon based on type
function getNotificationIcon(type) {
    const icons = {
        success: '<i class="fas fa-check-circle text-green-500"></i>',
        error: '<i class="fas fa-exclamation-circle text-red-500"></i>',
        warning: '<i class="fas fa-exclamation-triangle text-yellow-500"></i>',
        info: '<i class="fas fa-info-circle text-blue-500"></i>'
    };
    
    return icons[type] || icons.info;
}

// Hide notification
function hideNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    notification.style.opacity = '0';
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Utility functions

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    }).format(amount);
}

// Format date
function formatDate(date, options = {}) {
    const defaultOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    return new Intl.DateTimeFormat('vi-VN', { ...defaultOptions, ...options }).format(new Date(date));
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Local storage helpers
const storage = {
    get: (key) => {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            return localStorage.getItem(key);
        }
    },
    
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            localStorage.setItem(key, value);
        }
    },
    
    remove: (key) => {
        localStorage.removeItem(key);
    },
    
    clear: () => {
        localStorage.clear();
    }
};

// API helpers (mock functions for demo)
const api = {
    get: async (url) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { data: { message: 'Mock GET response' } };
    },
    
    post: async (url, data) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { data: { message: 'Mock POST response' } };
    },
    
    put: async (url, data) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { data: { message: 'Mock PUT response' } };
    },
    
    delete: async (url) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { data: { message: 'Mock DELETE response' } };
    }
};

// Event emitter for custom events
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
}

// Global event emitter instance
const eventBus = new EventEmitter();

// Export functions for global access
window.CLBManager = {
    showNotification,
    hideNotification,
    formatCurrency,
    formatDate,
    storage,
    api,
    eventBus,
    debounce,
    throttle
};

// Console welcome message
console.log(`
🎯 CLB Information technology
📅 Version: 1.0.0
👨‍💻 Developed by: MiniMax Agent
🔗 Ready to manage your club!
`);