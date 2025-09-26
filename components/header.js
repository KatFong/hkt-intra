// Header 組件
class HeaderComponent {
    constructor(activePage = 'apps') {
        this.activePage = activePage;
        this.init();
    }

    init() {
        this.createHeader();
        this.initDropdown();
        this.initSearch();
    }

    createHeader() {
        const headerHTML = `
            <header class="header">
                <div class="header-content">
                    <div class="header-left">
                        <a href="index.html" class="logo">
                            <i class="fas fa-building"></i>
                            <span>HKT Intranet</span>
                        </a>
                    </div>
                    <nav class="main-nav">
                        <a href="#" class="nav-link">Apps</a>
                        <div class="nav-dropdown">
                            <a href="#" class="nav-link dropdown-toggle ${this.activePage === 'departments' ? 'active' : ''}">Departments</a>
                            <div class="megamenu">
                                <div class="megamenu-content">
                                    <div class="megamenu-header">
                                        <h3>Departments</h3>
                                    </div>
                                    <ul class="megamenu-list" id="departments-list">
                                        <li class="loading-departments">
                                            <i class="fas fa-spinner fa-spin"></i>
                                            載入部門中...
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="nav-link">Documents</a>
                        <a href="#" class="nav-link">Directory</a>
                        <a href="#" class="nav-link">Policies</a>
                    </nav>
                    <div class="header-right">
                        <div class="search-box">
                            <i class="fas fa-search"></i>
                            <input type="text" placeholder="Search">
                        </div>
                        <div class="header-icons">
                            <div class="notification-icon">
                                <i class="fas fa-bell"></i>
                                <span class="badge">1</span>
                            </div>
                            <div class="calendar-icon">
                                <i class="fas fa-calendar"></i>
                            </div>
                            <div class="user-avatar">
                                <i class="fas fa-leaf"></i>
                                <span>User Avatar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        `;
        
        return headerHTML;
    }

    initDropdown() {
        // 部門下拉菜單功能
        const dropdown = document.querySelector('.nav-dropdown');
        const megamenu = document.querySelector('.megamenu');
        
        if (dropdown && megamenu) {
            dropdown.addEventListener('mouseenter', () => {
                megamenu.style.display = 'block';
            });
            
            dropdown.addEventListener('mouseleave', () => {
                megamenu.style.display = 'none';
            });
        }
    }

    initSearch() {
        // 搜索功能
        const searchInput = document.querySelector('.search-box input');
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const query = e.target.value.trim();
                    if (query) {
                        console.log('Searching for:', query);
                        // 這裡可以添加實際的搜索邏輯
                    }
                }
            });
        }
    }

    // 載入部門數據
    async loadDepartments() {
        try {
            const response = await fetch('http://10.171.208.81/wordpress/wp-json/hkt-pods-api/v1/departments');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const departments = await response.json();
            this.displayDepartments(departments);
        } catch (error) {
            console.error('Failed to load departments:', error);
            this.showDepartmentsError();
        }
    }

    displayDepartments(departments) {
        const departmentsList = document.getElementById('departments-list');
        if (departmentsList) {
            departmentsList.innerHTML = departments.map(dept => `
                <li class="department-item">
                    <a href="department-detail.html?id=${dept.id}" class="department-link">
                        <i class="fas fa-building"></i>
                        <span>${dept.department_name || '未命名部門'}</span>
                    </a>
                </li>
            `).join('');
        }
    }

    showDepartmentsError() {
        const departmentsList = document.getElementById('departments-list');
        if (departmentsList) {
            departmentsList.innerHTML = `
                <li class="error-item">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>載入部門失敗</span>
                </li>
            `;
        }
    }
}

// 導出組件
window.HeaderComponent = HeaderComponent;
