# HKT 內網 API 測試指南

## 概述
這個指南幫助您測試和學習 HKT 內網的所有 API 結構，即使沒有公司網絡連接。

## 可用的測試文件

### 1. api-test-suite.html
- **用途**: 完整的 API 測試套件
- **功能**: 
  - 測試所有 API 端點
  - 實時統計信息
  - 美觀的數據展示
  - 分類篩選功能

### 2. test-departments-api.html
- **用途**: 專門測試部門 API
- **功能**: 
  - 詳細的數據結構分析
  - 部門列表顯示
  - 調試信息

### 3. test-news-api.html
- **用途**: 專門測試新聞 API
- **功能**: 
  - 分類篩選測試
  - 新聞文章展示
  - 圖片輪播測試

### 4. test-api.html
- **用途**: 基礎 API 測試
- **功能**: 
  - 簡單的 API 連接測試
  - JSON 數據結構查看

### 5. 樣本數據文件
- **sample-departments.json**: 部門數據樣本
- **sample-news.json**: 新聞數據樣本

## API 端點列表

### 1. 部門 API
- **端點**: `http://10.171.208.81/wordpress/wp-json/hkt-pods-api/v1/departments`
- **方法**: GET
- **用途**: 獲取所有部門信息
- **響應**: JSON 數組，包含部門詳細信息

### 2. 新聞文章 API
- **基礎端點**: `http://10.171.208.81/wordpress/wp-json/hkt-pods-api/v1/news-articles/`
- **方法**: GET
- **用途**: 獲取新聞文章

#### 分類篩選參數
- **全部新聞**: `/news-articles/`
- **企業公告**: `/news-articles/?category_slug=corporate-announcements`
- **業務單位**: `/news-articles/?category_slug=bu`
- **媒體發布**: `/news-articles/?category_slug=media-releases`
- **其他**: `/news-articles/?category_slug=others`

### 3. 圖片輪播 API
- **端點**: `http://10.171.208.81/wordpress/wp-json/hkt-pods-api/v1/image-sliders`
- **方法**: GET
- **用途**: 獲取首頁輪播圖片
- **響應**: JSON 數組，包含圖片信息

## 如何使用

### 方法一：使用完整測試套件（推薦）
```bash
# 在瀏覽器中打開
open api-test-suite.html
```

**功能特色**：
- 🚀 一鍵測試所有 API
- 📊 實時統計信息
- 🎨 美觀的數據展示
- 🔍 詳細的調試信息
- 📱 響應式設計

### 方法二：使用專門測試頁面
```bash
# 測試部門 API
open test-departments-api.html

# 測試新聞 API
open test-news-api.html

# 基礎 API 測試
open test-api.html
```

### 方法三：學習 JSON 結構
```bash
# 查看樣本數據
cat sample-departments.json
cat sample-news.json
```

## 數據結構說明

### 部門數據結構
```json
{
  "id": "部門ID",
  "department_name": "部門名稱",
  "description": "部門描述",
  "manager": "部門經理"
}
```

### 新聞數據結構
```json
{
  "id": "文章ID",
  "title": "文章標題",
  "content": "文章內容",
  "date": "發布日期",
  "category": "文章分類",
  "author": "作者"
}
```

### 圖片輪播數據結構
```json
{
  "id": "圖片ID",
  "title": "圖片標題",
  "image": "圖片URL",
  "description": "圖片描述",
  "caption": "圖片說明"
}
```

## 故障排除

### 常見問題
1. **CORS 錯誤**: 瀏覽器可能阻止跨域請求
   - 解決方案：使用本地測試服務器或瀏覽器擴展
   
2. **網絡連接**: 無法訪問 API 服務器
   - 解決方案：使用樣本數據文件進行本地測試
   
3. **API 服務器**: 服務器未運行或端點錯誤
   - 解決方案：檢查服務器狀態和端點 URL

### 調試技巧
1. **檢查瀏覽器控制台**
   - 按 F12 打開開發者工具
   - 查看 Console 和 Network 標籤
   
2. **查看網絡請求狀態**
   - 檢查 HTTP 狀態碼
   - 查看響應時間
   - 分析請求/響應頭
   
3. **比較數據結構**
   - 對比實際 API 響應與樣本數據
   - 檢查字段名稱和數據類型

## 開發建議

### 1. 字段名稱處理
由於 API 可能使用不同的字段名稱，建議使用以下優先順序：
```javascript
const name = data.department_name || data.name || data.title || '默認值';
```

### 2. 錯誤處理
```javascript
try {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();
} catch (error) {
  console.error('API 調用失敗:', error);
}
```

### 3. 載入狀態
```javascript
// 顯示載入狀態
loadingElement.style.display = 'block';

// 隱藏載入狀態
loadingElement.style.display = 'none';
```

## 更新日誌

- **v1.0**: 基礎 API 測試功能
- **v2.0**: 添加新聞和圖片輪播 API 測試
- **v3.0**: 完整測試套件，包含統計和美化界面