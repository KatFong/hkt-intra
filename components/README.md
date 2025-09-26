# HKT Intranet 組件系統

這是一個模組化的組件系統，用於 HKT 內網應用程式的 header 和 footer 管理。

## 📁 文件結構

```
components/
├── header.js      # Header 組件
├── footer.js      # Footer 組件
├── app.js         # 應用組件管理器
└── README.md      # 說明文件
```

## 🚀 使用方法

### 1. 基本使用

在 HTML 頁面中載入組件：

```html
<!-- 在 <body> 標籤內添加容器 -->
<div id="header-container"></div>
<!-- 頁面內容 -->
<div id="footer-container"></div>

<!-- 載入組件腳本 -->
<script src="components/header.js"></script>
<script src="components/footer.js"></script>
<script src="components/app.js"></script>

<script>
    // 初始化應用組件
    document.addEventListener('DOMContentLoaded', function() {
        window.app = new AppComponents();
    });
</script>
```

### 2. 指定活躍頁面

```javascript
// 初始化時指定活躍頁面
window.app = new AppComponents();
window.app.updateActivePage('departments'); // 'home', 'departments', 等
```

## 🔧 組件說明

### HeaderComponent

負責渲染和管理頂部導航欄。

**功能：**
- 動態載入部門列表
- 搜索功能
- 下拉菜單交互
- 活躍頁面高亮

**方法：**
- `loadDepartments()` - 載入部門數據
- `displayDepartments(departments)` - 顯示部門列表
- `showDepartmentsError()` - 顯示載入錯誤

### FooterComponent

負責渲染頁腳內容。

**功能：**
- 統一的頁腳佈局
- 快速連結
- 聯絡資訊
- 版權聲明

### AppComponents

應用組件管理器，統一管理所有組件。

**方法：**
- `loadHeader(activePage)` - 載入 Header 組件
- `loadFooter()` - 載入 Footer 組件
- `updateActivePage(page)` - 更新活躍頁面

## 🎨 自定義樣式

組件使用現有的 CSS 類別，確保與現有樣式系統兼容：

- `.header` - Header 容器
- `.footer` - Footer 容器
- `.nav-link.active` - 活躍導航連結
- `.megamenu` - 下拉菜單

## 📱 響應式設計

所有組件都支援響應式設計，會根據螢幕尺寸自動調整佈局。

## 🔄 更新組件

要更新組件內容，只需修改對應的 `.js` 文件，所有使用該組件的頁面都會自動更新。

## 🐛 故障排除

1. **組件未載入**：檢查文件路徑是否正確
2. **樣式問題**：確保 `styles.css` 已載入
3. **API 錯誤**：檢查網路連線和 API 端點

## 📝 注意事項

- 確保 Font Awesome 圖標庫已載入
- 組件依賴於現有的 CSS 樣式
- API 端點需要正確配置
- 建議在 `DOMContentLoaded` 事件後初始化組件
