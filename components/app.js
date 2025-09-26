// 應用組件管理器
class AppComponents {
    constructor() {
        this.header = null;
        this.footer = null;
        this.init();
    }

    init() {
        this.loadComponents();
    }

    // 載入所有組件
    loadComponents() {
        this.loadHeader();
        this.loadFooter();
    }

    // 載入 Header 組件
    loadHeader(activePage = 'apps') {
        if (typeof HeaderComponent !== 'undefined') {
            this.header = new HeaderComponent(activePage);
            this.insertHeader();
            this.header.loadDepartments();
        } else {
            console.error('HeaderComponent not loaded');
        }
    }

    // 載入 Footer 組件
    loadFooter() {
        if (typeof FooterComponent !== 'undefined') {
            this.footer = new FooterComponent();
            this.insertFooter();
        } else {
            console.error('FooterComponent not loaded');
        }
    }

    // 插入 Header 到頁面
    insertHeader() {
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            headerContainer.innerHTML = this.header.createHeader();
            this.header.initDropdown();
            this.header.initSearch();
        } else {
            console.error('Header container not found');
        }
    }

    // 插入 Footer 到頁面
    insertFooter() {
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = this.footer.createFooter();
        } else {
            console.error('Footer container not found');
        }
    }

    // 更新活躍頁面
    updateActivePage(page) {
        if (this.header) {
            this.header.activePage = page;
            this.insertHeader();
            this.header.loadDepartments();
        }
    }
}

// 導出組件管理器
window.AppComponents = AppComponents;
