# React Quiz Helper (React 面試題練習助手)

這是一個專為 React 資深開發者面試設計的互動式測驗應用程式。採用了現代化的 "Neo-Brutalist" 設計風格，旨在讓學習進階 React 概念（如 Virtual DOM、Hooks、效能優化）的過程更加有趣且具備挑戰性。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss)

## ✨ 特色功能

- **互動式測驗引擎**：流暢的做答體驗，包含選擇題與即時反饋。
- **深度解析機制**：答對後提供詳細的技術解析與 `senior-dev-notes.log` 風格的重點筆記。
- **Neo-Brutalist 設計**：大膽的高對比配色、硬派邊框與陰影，提供獨特的視覺體驗。
- **動態主題系統**：內建多款主題（Neo Pop、Cyberpunk、Retro、Monochrome），支援即時切換與本地持久化儲存。
- **響應式佈局**：完美支援桌機與行動裝置。
- **自動化部署**：整合 GitHub Actions CI/CD，自動檢查代碼品質並部署至 GitHub Pages。

## 🛠️ 技術棧

- **核心框架**: [React 19](https://react.dev/)
- **建置工具**: [Vite](https://vitejs.dev/)
- **程式語言**: [TypeScript](https://www.typescriptlang.org/)
- **樣式系統**: [Tailwind CSS v4](https://tailwindcss.com/)
- **圖標庫**: [Lucide React](https://lucide.dev/)
- **代碼規範**: [ESLint](https://eslint.org/) (Flat Config) + [Prettier](https://prettier.io/)
- **路徑別名**: `vite-tsconfig-paths` (@/ 指向 src/)

## 🚀 快速開始

### 前置需求

請確保您的環境已安裝：

- [Node.js](https://nodejs.org/) (建議 v18 或更高版本)
- [pnpm](https://pnpm.io/) (建議 v9 或更高版本)

### 安裝步驟

1.  複製專案庫：

    ```bash
    git clone https://github.com/YOUR_USERNAME/quiz-helper.git
    cd quiz-helper
    ```

2.  安裝依賴：
    ```bash
    pnpm install
    ```

### 開發指令

啟動本地開發伺服器：

```bash
pnpm dev
```

瀏覽器打開 [http://localhost:5173](http://localhost:5173) 即可看到畫面。

### 建置與部署

建置生產環境版本（輸出至 `dist/`）：

```bash
pnpm build
```

本地預覽建置成果：

```bash
pnpm preview
```

代碼品質檢查與格式化：

```bash
pnpm lint    # 檢查 ESLint 規則
pnpm format  # 使用 Prettier 格式化代碼
```

## 📂 專案結構

```
src/
├── components/
│   ├── layout/         # 佈局元件 (Header, Footer, MainLayout)
│   ├── theme/          # 主題相關元件 (ThemeSelector)
│   └── ui/             # 共用 UI 元件 (NeoButton, BentoCard)
├── constants/          # 靜態常數與文字 (text.ts)
├── context/            # Context API (ThemeContext)
├── data/               # 模擬資料 (quizData.ts)
├── features/
│   └── quiz/           # 測驗核心功能 (QuizPage)
├── hooks/              # Custom Hooks (useTheme)
├── styles/             # 樣式定義 (themes.ts)
├── utils/              # 工具函式 (cn.ts)
├── App.tsx             # 應用程式入口與路由配置
└── main.tsx            # DOM 渲染入口
```

## 🎨 主題客製化

本專案使用 CSS 變數與 Tailwind 結合來實現動態主題。
您可以在 `src/styles/themes.ts` 中定義新的主題色票：

```typescript
export const THEMES: Theme[] = [
  {
    id: 'new-theme',
    name: 'My New Theme',
    colors: {
      primary: '#...',
      secondary: '#...',
      // ...其他顏色定義
    },
  },
  // ...
];
```

## 🤝 貢獻指南

歡迎提交 Pull Request 或 Issue！
在提交 PR 之前，請確保您的代碼通過了 lint 檢查：

```bash
pnpm lint
```

## 📄 授權條款

MIT License
