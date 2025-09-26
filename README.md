# HKT 內網 - 中國風企業內網平台

## 專案簡介

HKT 內網是一個採用中國風設計理念的企業內網平台，結合現代化技術與傳統文化元素，為企業員工提供優雅且高效的工作環境。

## 功能特色

### 🎨 設計特色
- **中國風視覺設計**：融入傳統中華文化元素
- **響應式布局**：支援桌面、平板、手機等多種設備
- **現代化 UI/UX**：流暢的用戶體驗和直觀的操作界面

### 🚀 技術特色
- **純前端實現**：HTML5 + CSS3 + JavaScript ES6+
- **模組化架構**：易於維護和擴展
- **性能優化**：快速載入和流暢動畫
- **無障礙設計**：支援鍵盤導航和螢幕閱讀器

### 📱 主要功能
- 企業新聞發布與瀏覽
- 響應式導航系統
- 智能搜索功能
- 社交分享功能
- 滾動動畫效果
- 閱讀時間計算

## 檔案結構

```
HKT-intranet/
├── index.html              # 主頁面
├── news-detail-new.html    # 新聞詳情頁面
├── styles.css              # 樣式表
├── script.js               # JavaScript 功能
├── mission_bg.png          # 背景圖片
└── README.md               # 專案說明文件
```

## 快速開始

### 1. 下載專案
```bash
git clone https://github.com/KatFong/hkt-intra.git
cd hkt-intra
```

### 2. 開啟專案
直接在瀏覽器中開啟 `index.html` 檔案，或使用本地伺服器：

```bash
# 使用 Python 3
python -m http.server 8000

# 使用 Node.js
npx serve .

# 使用 PHP
php -S localhost:8000
```

### 3. 訪問網站
在瀏覽器中訪問 `http://localhost:8000`

## 技術規格

### 前端技術
- **HTML5**：語義化標記和現代化結構
- **CSS3**：Flexbox、Grid、動畫和響應式設計
- **JavaScript ES6+**：模組化程式設計和現代語法
- **字體**：Microsoft YaHei、微軟正黑體

### 瀏覽器支援
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### 設備支援
- 桌面電腦（1200px+）
- 平板電腦（768px - 1199px）
- 手機（320px - 767px）

## 自定義配置

### 修改主題色彩
在 `styles.css` 中修改 CSS 變數：

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #2c3e50;
    --background-color: #f5f7fa;
}
```

### 添加新功能
在 `script.js` 中擴展功能模組：

```javascript
// 添加新的功能模組
function initNewFeature() {
    // 您的代碼
}

// 在 DOMContentLoaded 事件中初始化
document.addEventListener('DOMContentLoaded', function() {
    initNewFeature();
});
```

## 部署指南

### GitHub Pages
1. 將代碼推送到 GitHub 倉庫
2. 在倉庫設定中啟用 GitHub Pages
3. 選擇主分支作為來源
4. 訪問 `https://username.github.io/repository-name`

### 其他託管平台
- **Netlify**：拖拽上傳或連接 Git 倉庫
- **Vercel**：連接 GitHub 倉庫自動部署
- **Firebase Hosting**：使用 Firebase CLI 部署

## 開發指南

### 代碼風格
- 使用 2 個空格縮排
- 使用有意義的變數和函數名稱
- 添加適當的註釋
- 遵循 HTML5 語義化標記

### 提交規範
```
feat: 新功能
fix: 修復問題
docs: 文檔更新
style: 代碼格式調整
refactor: 代碼重構
test: 測試相關
chore: 構建過程或輔助工具的變動
```

## 貢獻指南

1. Fork 本專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 授權條款

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案

## 聯絡資訊

- **專案維護者**：HKT 技術團隊
- **電子郵件**：tech@hkt.com
- **專案連結**：https://github.com/KatFong/hkt-intra

## 更新日誌

### v1.0.0 (2024-09-26)
- ✨ 初始版本發布
- 🎨 中國風設計系統
- 📱 響應式布局
- 🔍 智能搜索功能
- 📰 新聞系統
- 🎭 動畫效果

---

**感謝使用 HKT 內網系統！** 🎉
