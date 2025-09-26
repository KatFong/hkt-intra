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
    initImageSliderAPI();
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
        // 添加點擊事件跳轉到新聞詳情頁面
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 獲取新聞標題作為參數
            const newsTitle = this.querySelector('.news-title').textContent;
            const newsDate = this.querySelector('.news-date').textContent;
            const newsCategory = this.querySelector('.news-category').textContent;
            
            console.log('News clicked:', { newsTitle, newsDate, newsCategory });
            
            // 創建 URL 參數
            const params = new URLSearchParams({
                title: newsTitle,
                date: newsDate,
                category: newsCategory
            });
            
            // 跳轉到新聞詳情頁面
            const url = `news-detail-new.html?${params.toString()}`;
            console.log('Redirecting to:', url);
            window.location.href = url;
        });
        
        // 添加游標樣式
        item.style.cursor = 'pointer';
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
    departmentsList.innerHTML = '<li class="loading-departments"><i class="fas fa-spinner fa-spin"></i> Loading departments...</li>';
    
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
            
            // 跳轉到部門詳情頁面
            if (deptId) {
                window.location.href = `department-detail.html?id=${deptId}`;
            } else {
                console.error('部門ID不存在');
                showNotification('無法載入部門詳情', 'error');
            }
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
            Loading departments failed: ${error.message}
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
            'corporate-announcements': 'corporate-announcements',
            'bu': 'bu',
            'media-releases': 'media-releases',
            'others': 'others'
        };
        
        if (categoryMap[category] && category !== 'all') {
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
        // 根據真實 API 格式解析數據
        const title = article.news_title || article.title || article.post_title || '無標題';
        const date = article.news_date || article.date || article.post_date || article.created_date || '未知日期';
        const category = article.news_category ? 
            (article.news_category.name || article.news_category) : 
            (article.category || article.category_name || article.category_slug || '未分類');
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
    
    // 添加點擊事件跳轉到新聞詳情頁面
    const newsItemsElements = newsList.querySelectorAll('.news-item');
    newsItemsElements.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 獲取新聞標題作為參數
            const newsTitle = this.querySelector('.news-title').textContent;
            const newsDate = this.querySelector('.news-date').textContent;
            const newsCategory = this.querySelector('.news-category').textContent;
            
            console.log('News clicked:', { newsTitle, newsDate, newsCategory });
            
            // 創建 URL 參數
            const params = new URLSearchParams({
                title: newsTitle,
                date: newsDate,
                category: newsCategory
            });
            
            // 跳轉到新聞詳情頁面
            const url = `news-detail-new.html?${params.toString()}`;
            console.log('Redirecting to:', url);
            window.location.href = url;
        });
        
        // 添加游標樣式
        item.style.cursor = 'pointer';
    });
}

// 格式化日期
function formatDate(dateString) {
    try {
        // 處理 sample-news.json 中的日期格式: "09/25/2025 4:11pm"
        if (typeof dateString === 'string' && dateString.includes('/')) {
            // 解析 MM/DD/YYYY HH:MMam/pm 格式
            const parts = dateString.split(' ');
            if (parts.length >= 1) {
                const datePart = parts[0]; // "09/25/2025"
                const [month, day, year] = datePart.split('/');
                
                if (month && day && year) {
                    return `${month}.${day}.${year}`;
                }
            }
        }
        
        // 嘗試解析其他日期格式
        const date = new Date(dateString);
        
        // 檢查日期是否有效
        if (isNaN(date.getTime())) {
            console.warn('Invalid date format:', dateString);
            return dateString; // 返回原始字符串
        }
        
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}.${day}.${year}`;
    } catch (error) {
        console.warn('Date formatting error:', error, 'for date:', dateString);
        return dateString;
    }
}

// 載入新聞數據
function loadNewsData() {
    // 調用 "All" 分類的 API
    loadNewsByCategory('all');
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
            <div class="news-title">${news.title}</div>
            <div class="news-category">${news.category}</div>
            <div class="news-arrow"><i class="fas fa-chevron-right"></i></div>
        </div>
    `).join('');
    
    // 添加點擊事件跳轉到新聞詳情頁面
    const newsItemsElements = newsList.querySelectorAll('.news-item');
    newsItemsElements.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 獲取新聞標題作為參數
            const newsTitle = this.querySelector('.news-title').textContent;
            const newsDate = this.querySelector('.news-date').textContent;
            const newsCategory = this.querySelector('.news-category').textContent;
            
            console.log('News clicked:', { newsTitle, newsDate, newsCategory });
            
            // 創建 URL 參數
            const params = new URLSearchParams({
                title: newsTitle,
                date: newsDate,
                category: newsCategory
            });
            
            // 跳轉到新聞詳情頁面
            const url = `news-detail-new.html?${params.toString()}`;
            console.log('Redirecting to:', url);
            window.location.href = url;
        });
        
        // 添加游標樣式
        item.style.cursor = 'pointer';
    });
}

// 導出函數供外部使用
window.HKTIntranet = {
    showNotification,
    initSearch,
    loadNewsData,
    displayNews
};

// 圖片輪播 API 功能
async function initImageSliderAPI() {
    console.log('初始化圖片輪播 API');
    
    try {
        const response = await fetch('http://10.171.208.81/wordpress/wp-json/hkt-pods-api/v1/image-sliders');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const sliderData = await response.json();
        console.log('圖片輪播數據載入成功:', sliderData);
        
        if (sliderData && sliderData.length > 0) {
            displayImageSlider(sliderData[0]); // 使用第一個輪播組
        } else {
            console.log('沒有找到圖片輪播數據');
            showSliderFallback();
        }
        
    } catch (error) {
        console.error('載入圖片輪播失敗:', error);
        showSliderFallback();
    }
}

// 顯示圖片輪播
function displayImageSlider(sliderData) {
    const sliderWrapper = document.getElementById('slider-wrapper');
    const sliderDots = document.getElementById('slider-dots');
    
    if (!sliderWrapper || !sliderDots) {
        console.error('找不到輪播容器元素');
        return;
    }
    
    const images = sliderData.images || [];
    
    if (images.length === 0) {
        showSliderFallback();
        return;
    }
    
    // 清空現有內容
    sliderWrapper.innerHTML = '';
    sliderDots.innerHTML = '';
    
    // 創建圖片元素
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.display = index === 0 ? 'block' : 'none';
        
        const img = document.createElement('img');
        img.src = image.url_full;
        img.alt = image.alt || image.title || `輪播圖片 ${index + 1}`;
        img.title = image.title || '';
        
        // 使用適當的圖片尺寸 - 根據樣本數據格式調整
        if (image.sizes && image.sizes.medium_large) {
            // 樣本數據中 sizes 對象沒有 url 字段，需要構建完整 URL
            const baseUrl = image.url_full.substring(0, image.url_full.lastIndexOf('/') + 1);
            img.src = baseUrl + image.sizes.medium_large.file || image.url_full;
        } else if (image.sizes && image.sizes.medium) {
            const baseUrl = image.url_full.substring(0, image.url_full.lastIndexOf('/') + 1);
            img.src = baseUrl + image.sizes.medium.file || image.url_full;
        }
        
        slide.appendChild(img);
        sliderWrapper.appendChild(slide);
        
        // 創建指示點
        const dot = document.createElement('button');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-slide', index);
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
    
    // 初始化輪播控制
    initSliderControls(images.length);
}

// 初始化輪播控制
function initSliderControls(totalSlides) {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dots = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    
    // 上一張按鈕
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(currentSlide);
        });
    }
    
    // 下一張按鈕
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        });
    }
    
    // 自動輪播
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }, 5000); // 每5秒切換
}

// 跳轉到指定圖片
function goToSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // 隱藏所有圖片
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    
    // 移除所有指示點活動狀態
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // 顯示指定圖片
    if (slides[slideIndex]) {
        slides[slideIndex].style.display = 'block';
    }
    
    // 激活對應指示點
    if (dots[slideIndex]) {
        dots[slideIndex].classList.add('active');
    }
}

// 顯示輪播備用內容
function showSliderFallback() {
    const sliderWrapper = document.getElementById('slider-wrapper');
    const sliderDots = document.getElementById('slider-dots');
    
    if (sliderWrapper) {
        sliderWrapper.innerHTML = `
            <div class="slide" style="display: block;">
                <div class="fallback-content">
                    <h3>歡迎來到 HKT 內網</h3>
                    <p>圖片輪播功能正在載入中...</p>
                </div>
            </div>
        `;
    }
    
    if (sliderDots) {
        sliderDots.innerHTML = '';
    }
}

