// HKT 內網 - JavaScript 功能

document.addEventListener('DOMContentLoaded', function() {
    console.log('HKT 內網系統已載入');
    
    // 初始化所有功能
    initNavigation();
    initNewsSection();
    initAnimations();
    initScrollEffects();
    initDepartmentsAPI();
    initNewsAPI();
});

// 導航功能
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 部門下拉菜單功能
    initDepartmentDropdown();
}

// 部門下拉菜單功能
function initDepartmentDropdown() {
    const departmentToggle = document.querySelector('.dropdown-toggle');
    const megamenu = document.querySelector('.megamenu');
    
    if (!departmentToggle || !megamenu) return;
    
    // 點擊部門按鈕顯示/隱藏菜單
    departmentToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isVisible = megamenu.style.opacity === '1';
        if (isVisible) {
            megamenu.style.opacity = '0';
            megamenu.style.visibility = 'hidden';
        } else {
            megamenu.style.opacity = '1';
            megamenu.style.visibility = 'visible';
        }
    });
    
    // 點擊外部區域隱藏菜單
    document.addEventListener('click', function(e) {
        if (!megamenu.contains(e.target) && !departmentToggle.contains(e.target)) {
            megamenu.style.opacity = '0';
            megamenu.style.visibility = 'hidden';
        }
    });
    
    // 防止菜單內部點擊事件冒泡
    megamenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// 新聞區域功能
function initNewsSection() {
    const newsItems = document.querySelectorAll('.news-item');
    
    newsItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// 動畫效果
function initAnimations() {
    // 按鈕點擊動畫
    const buttons = document.querySelectorAll('.btn-primary, .read-more');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 創建漣漪效果
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// 滾動效果
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 觀察需要動畫的元素
    const animatedElements = document.querySelectorAll('.news-item, .hero-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 工具函數
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // 動畫進入
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自動移除
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// 搜索功能
function initSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '搜索新聞...';
    searchInput.className = 'search-input';
    
    searchInput.style.cssText = `
        padding: 0.5rem 1rem;
        border: 2px solid #ddd;
        border-radius: 25px;
        margin: 1rem 0;
        width: 100%;
        max-width: 400px;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.3s ease;
    `;
    
    searchInput.addEventListener('focus', function() {
        this.style.borderColor = '#667eea';
    });
    
    searchInput.addEventListener('blur', function() {
        this.style.borderColor = '#ddd';
    });
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const newsItems = document.querySelectorAll('.news-item');
        
        newsItems.forEach(item => {
            const title = item.querySelector('h4').textContent.toLowerCase();
            const content = item.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.3s ease';
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // 將搜索框添加到新聞區域
    const newsSection = document.querySelector('.news-section');
    if (newsSection) {
        const container = newsSection.querySelector('.container') || newsSection;
        container.insertBefore(searchInput, container.querySelector('.news-grid'));
    }
}

// 添加 CSS 動畫
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255,255,255,0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .search-input:focus {
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
`;
document.head.appendChild(style);

// 初始化搜索功能
initSearch();

// 部門 API 功能
function initDepartmentsAPI() {
    const departmentsList = document.getElementById('departments-list');
    if (!departmentsList) return;
    
    // 顯示載入狀態
    departmentsList.innerHTML = '<li class="loading-departments"><i class="fas fa-spinner fa-spin"></i> 載入部門中...</li>';
    
    // 調用部門 API
    fetch('http://10.171.208.81/wordpress/wp-json/hkt-pods-api/v1/departments')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('部門數據載入成功:', data);
            console.log('第一個部門數據結構:', data[0]);
            displayDepartments(data);
        })
        .catch(error => {
            console.error('載入部門數據失敗:', error);
            displayDepartmentsError(error);
        });
}

// 獲取部門名稱的輔助函數
function getDepartmentName(dept) {
    // 嘗試不同的可能字段名稱
    const possibleFields = ['department_name', 'name', 'title', 'departmentName', 'dept_name'];
    
    for (const field of possibleFields) {
        if (dept[field] && dept[field].trim()) {
            return dept[field].trim();
        }
    }
    
    // 如果都找不到，返回默認值
    return '未命名部門';
}

// 顯示部門列表
function displayDepartments(departments) {
    const departmentsList = document.getElementById('departments-list');
    if (!departmentsList) return;
    
    if (!departments || departments.length === 0) {
        departmentsList.innerHTML = '<li class="no-departments">暫無部門數據</li>';
        return;
    }
    
    departmentsList.innerHTML = departments.map(dept => {
        const deptName = getDepartmentName(dept);
        const deptId = dept.id || dept.ID || dept.department_id || '';
        
        return `
            <li class="department-item" data-id="${deptId}" data-name="${deptName}">
                <i class="fas fa-building"></i>
                ${deptName}
            </li>
        `;
    }).join('');
    
    // 添加點擊事件
    const departmentItems = departmentsList.querySelectorAll('.department-item');
    departmentItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const deptId = this.getAttribute('data-id');
            const deptName = this.getAttribute('data-name');
            
            console.log('選擇部門:', deptName, 'ID:', deptId);
            
            // 更新部門按鈕文字
            const departmentToggle = document.querySelector('.dropdown-toggle');
            if (departmentToggle) {
                departmentToggle.textContent = deptName;
            }
            
            // 隱藏菜單
            const megamenu = document.querySelector('.megamenu');
            if (megamenu) {
                megamenu.style.opacity = '0';
                megamenu.style.visibility = 'hidden';
            }
            
            // 這裡可以添加部門選擇的其他邏輯
            showNotification(`已選擇部門: ${deptName}`, 'success');
        });
    });
}

// 顯示部門載入錯誤
function displayDepartmentsError(error) {
    const departmentsList = document.getElementById('departments-list');
    if (!departmentsList) return;
    
    departmentsList.innerHTML = `
        <li class="error-departments">
            <i class="fas fa-exclamation-triangle"></i>
            載入部門失敗: ${error.message}
        </li>
    `;
}

// 新聞 API 功能
function initNewsAPI() {
    console.log('新聞 API 初始化');
    
    // 載入新聞數據
    loadNewsData();
    
    // 初始化標籤篩選功能
    initNewsFilters();
}

// 初始化新聞篩選功能
function initNewsFilters() {
    const filterButtons = document.querySelectorAll('.tab-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有活躍狀態
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加活躍狀態到當前按鈕
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            loadNewsByCategory(filter);
        });
    });
}

// 根據分類載入新聞
async function loadNewsByCategory(category) {
    const newsList = document.getElementById('news-list-dark');
    const loadingElement = document.getElementById('news-loading');
    
    if (!newsList) return;
    
    // 顯示載入狀態
    if (loadingElement) {
        loadingElement.style.display = 'block';
    }
    
    try {
        let url = 'http://10.171.208.81/wordpress/wp-json/hkt-pods-api/v1/news-articles/';
        
        // 根據分類添加參數
        const categoryMap = {
            'all': '',
            'financial': 'corporate-announcements',
            'shareholder': 'bu',
            'esg': 'media-releases'
        };
        
        if (categoryMap[category]) {
            url += `?category_slug=${categoryMap[category]}`;
        }
        
        console.log('載入新聞分類:', category, 'URL:', url);
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const newsData = await response.json();
        console.log('新聞數據載入成功:', newsData);
        
        if (loadingElement) {
            loadingElement.style.display = 'none';
        }
        
        displayNewsFromAPI(newsData);
        
    } catch (error) {
        console.error('載入新聞失敗:', error);
        
        if (loadingElement) {
            loadingElement.style.display = 'none';
        }
        
        // 顯示錯誤信息
        newsList.innerHTML = '<li style="color: white; text-align: center; padding: 40px;">載入新聞失敗，請稍後再試</li>';
    }
}

// 從 API 顯示新聞
function displayNewsFromAPI(newsItems) {
    const newsList = document.getElementById('news-list-dark');
    if (!newsList) return;
    
    if (!newsItems || newsItems.length === 0) {
        newsList.innerHTML = '<li style="color: white; text-align: center; padding: 40px;">暫無新聞數據</li>';
        return;
    }
    
    newsList.innerHTML = newsItems.map(article => {
        const title = article.title || article.post_title || '無標題';
        const date = article.date || article.post_date || article.created_date || '未知日期';
        const category = article.category || article.category_name || article.category_slug || '未分類';
        const id = article.id || article.post_id || '';
        
        return `
            <div class="news-item" data-id="${id}">
                <div class="news-date">${formatDate(date)}</div>
                <div class="news-category">${category}</div>
                <div class="news-title">${title}</div>
                <div class="news-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>
        `;
    }).join('');
    
    // 添加點擊事件
    const newsItemsElements = newsList.querySelectorAll('.news-item');
    newsItemsElements.forEach(item => {
        item.addEventListener('click', function() {
            const newsId = this.getAttribute('data-id');
            console.log('選擇新聞:', newsId);
            // 這裡可以添加新聞詳情的邏輯
        });
    });
}

// 格式化日期
function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}.${day}.${year}`;
    } catch (error) {
        return dateString;
    }
}

// 載入新聞數據
function loadNewsData() {
    const newsList = document.getElementById('news-list-dark');
    if (!newsList) return;
    
    // 顯示載入狀態
    const loadingElement = document.getElementById('news-loading');
    if (loadingElement) {
        loadingElement.style.display = 'block';
    }
    
    // 模擬 API 調用
    setTimeout(() => {
        if (loadingElement) {
            loadingElement.style.display = 'none';
        }
        
        // 這裡可以替換為實際的新聞 API 調用
        const mockNews = [
            {
                id: 1,
                date: '09.22.2025',
                category: 'Corporate Announcements',
                title: 'Desk Diaries for 2026',
                content: '年度桌曆發放通知'
            },
            {
                id: 2,
                date: '09.19.2025',
                category: 'Corporate Announcements',
                title: 'Wellness Month Is Here — Let\'s Recharge Together This October!',
                content: '員工健康月活動通知'
            }
        ];
        
        displayNews(mockNews);
    }, 1000);
}

// 顯示新聞列表
function displayNews(newsItems) {
    const newsList = document.getElementById('news-list-dark');
    if (!newsList) return;
    
    if (!newsItems || newsItems.length === 0) {
        newsList.innerHTML = '<li style="color: white; text-align: center; padding: 40px;">暫無新聞數據</li>';
        return;
    }
    
    newsList.innerHTML = newsItems.map(news => `
        <div class="news-item" data-id="${news.id}">
            <div class="news-date">${news.date}</div>
            <div class="news-category">${news.category}</div>
            <div class="news-title">${news.title}</div>
            <div class="news-arrow"><i class="fas fa-chevron-right"></i></div>
        </div>
    `).join('');
    
    // 添加點擊事件
    const newsItemsElements = newsList.querySelectorAll('.news-item');
    newsItemsElements.forEach(item => {
        item.addEventListener('click', function() {
            const newsId = this.getAttribute('data-id');
            console.log('選擇新聞:', newsId);
            // 這裡可以添加新聞詳情的邏輯
        });
    });
}

// 導出函數供外部使用
window.HKTIntranet = {
    showNotification,
    initSearch,
    loadNewsData,
    displayNews
};
