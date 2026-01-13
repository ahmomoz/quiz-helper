export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  answer: number;
  hint: string;
  explanation: string;
  reviewPoints: string[];
}

export const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 1,
    category: '基礎觀念',
    question: 'React 中的虛擬 DOM (Virtual DOM) 原理是什麼？為什麼 React 使用它？',
    options: [
      '它是直接操作瀏覽器的原生 DOM，速度非常快',
      '它是 UI 在記憶體中的輕量表示法，透過 Diffing 演算法找出差異並最小化實際 DOM 的操作',
      '它是一種用於存取資料庫的技術，用於提高數據讀取效率',
      '它是一種強制元件每秒渲染 60 次的機制',
    ],
    answer: 1,
    hint: "提示：思考 'Reconciliation' 和 'Diffing' 過程。",
    explanation:
      'Virtual DOM 是 React 的核心機制。當狀態改變時，React 會建立一個新的 Virtual DOM 樹，並與舊的樹進行比較（Diffing）。這讓 React 能精準地找出需要更新的部分，只對真實 DOM 進行必要的最小化操作，避免效能昂貴的整頁重繪。',
    reviewPoints: [
      'Virtual DOM 是 UI 在記憶體中的快取',
      'Diffing 演算法以最小代價更新真實 DOM',
      'Key prop 對於列表渲染的效能至關重要',
    ],
  },
  {
    id: 2,
    category: 'Hooks',
    question: 'useEffect 有哪些使用場景？如何避免其造成的無限循環 (Infinite Loop)？',
    options: [
      '只用於監聽點擊事件，不需要依賴陣列',
      '用於副作用處理（如 API 請求、訂閱），透過正確設置『依賴陣列 (Dependency Array)』來避免無限循環',
      '只能在 Class Component 中使用，用來取代 componentDidMount',
      'useEffect 會自動偵測所有變數，不需要特別處理',
    ],
    answer: 1,
    hint: '提示：如果不傳入依賴陣列，useEffect 每次渲染都會執行。',
    explanation:
      'useEffect 的場景包括：API 呼叫、DOM 手動修改、計時器設置、訂閱事件等。避免無限循環的關鍵在於『依賴陣列』。如果在 useEffect 中修改了狀態，而該狀態又被包含在依賴陣列中，就會觸發無限循環。務必確保依賴項是穩定的，或使用 functional update (如 setState(prev => prev + 1))。',
    reviewPoints: [
      '依賴陣列 (Deps) 決定 Effect 執行時機',
      'Cleanup function 防止記憶體洩漏',
      '保持 Hooks 在頂層呼叫，不可在迴圈中',
    ],
  },
  {
    id: 3,
    category: '效能優化',
    question: '如何減少 React 元件的重複渲染 (Re-rendering)？',
    options: [
      '將所有變數都放在 global 範圍',
      '使用 React.memo 包裹元件，並搭配 useCallback 或 useMemo 來維持屬性引用的一致性',
      '強制使用 class 元件而不是函式元件',
      '減少元件的層級，全部寫在同一個檔案中',
    ],
    answer: 1,
    hint: '提示：思考『引用相等性 (Referential Equality)』。',
    explanation:
      '當父元件渲染時，子元件預設也會跟著渲染。React.memo 可以快取元件。然而，若 props 包含函式或物件，每次渲染都會產生新的引用，導致 memo 失效。此時需使用 useCallback 定義函式，或 useMemo 計算值，以確保在依賴未變的情況下引用保持不變。',
    reviewPoints: [
      'React.memo 透過淺比較 (Shallow Compare) 避免渲染',
      'useCallback 確保函式引用 (Reference) 穩定',
      '狀態下放 (State Colocation) 縮小渲染範圍',
    ],
  },
  {
    id: 4,
    category: '狀態管理',
    question: 'Redux 和 Context API 的主要區別是什麼？',
    options: [
      'Context API 只能存字串，Redux 可以存物件',
      'Redux 是為了解決所有狀態問題，Context API 只能處理顏色設定',
      'Context API 內建於 React，適合中低複雜度的數據共享；Redux 則是外部庫，擁有強大的開發者工具與中介軟體 (Middleware) 生態',
      'Redux 比較快，Context API 比較慢',
    ],
    answer: 2,
    hint: '提示：思考『除錯工具』和『Middleware』的需求。',
    explanation:
      'Context API 適合用於全域但不頻繁變動的數據（如：語系、主題）。Redux 則是成熟的狀態容器，適合複雜的業務邏輯、頻繁的狀態更新，且擁有 Time-travel debugging 等強大工具。Redux Toolkit (RTK) 現在是官方推薦的寫法。',
    reviewPoints: [
      'Context 適合低頻更新的全域資料 (如主題)',
      'Redux 適合複雜狀態與非同步邏輯處理',
      'Redux DevTools 方便追蹤狀態變化與除錯',
    ],
  },
  {
    id: 5,
    category: '現代開發',
    question: 'Webpack 和 Vite 有什麼主要區別？',
    options: [
      'Webpack 是由 Google 開發的，Vite 是由 Facebook 開發的',
      'Webpack 基於 Bundle 機制；Vite 則在開發模式下利用原生 ES Modules，並使用 esbuild 進行預構建，啟動速度極快',
      'Vite 只能用於 Vue，不能用於 React',
      'Webpack 已經過時了，完全不能再使用',
    ],
    answer: 1,
    hint: '提示：思考『開發啟動速度 (Cold Start)』。',
    explanation:
      'Webpack 在啟動時需要先打包所有模組，當專案變大時速度會變慢。Vite 利用現代瀏覽器支援 ESM 的特性，只在瀏覽器請求時才處理對應文件。此外，Vite 使用 Go 語言寫的 esbuild 來預打包依賴項，速度比 Webpack 快上數十倍。',
    reviewPoints: [
      'Webpack 需打包整個依賴圖才能啟動 (Bundle-based)',
      'Vite 開發時使用原生 ESM 實現秒級啟動',
      '生產環境 Vite 使用 Rollup 進行優化打包',
    ],
  },
  {
    id: 6,
    category: '元件通訊',
    question: 'React 中父子元件如何進行通訊？',
    options: [
      '父傳子透過 props，子傳父透過 callback function',
      '只能透過 Redux 或 Context 進行通訊',
      '父元件可以直接讀取子元件的 state',
      '子元件可以直接修改父元件的 props',
    ],
    answer: 0,
    hint: '提示：思考『單向資料流 (One-way Data Flow)』。',
    explanation:
      'React 遵循單向資料流。父元件透過 props 將資料傳遞給子元件；若子元件需要與父元件溝通（例如更新狀態），父元件需將一個 callback function 作為 prop 傳給子元件，子元件呼叫該 function 來觸發父元件的更新。',
    reviewPoints: [
      'Props 是唯讀的 (Read-only)',
      '狀態提升 (Lifting State Up) 解決兄弟元件通訊',
      'Context 解決跨多層級通訊 (Prop Drilling)',
    ],
  },
  {
    id: 7,
    category: 'DOM 操作',
    question: 'useRef (或 createRef) 的主要用途是什麼？',
    options: [
      '用來取代 useState 進行畫面渲染',
      '用來直接操作 DOM 元素或儲存不觸發渲染的可變值 (Mutable Value)',
      '用來定義全域變數',
      '用來快取 API 回傳的結果以避免重新請求',
    ],
    answer: 1,
    hint: '提示：思考『非受控元件 (Uncontrolled Components)』或『保持數值但不渲染』。',
    explanation:
      'Refs 提供了一種訪問 DOM 節點或 React 元素的方式。此外，useRef 也常用於儲存一個可變的值（如計時器 ID、前一次的 props），修改 .current 屬性不會觸發元件重新渲染。',
    reviewPoints: [
      'useRef 修改 .current 不會觸發 Re-render',
      '常用於聚焦 (Focus)、媒體播放控制',
      'forwardRef 用於轉發 Ref 給子元件',
    ],
  },
  {
    id: 8,
    category: '效能優化',
    question: '什麼是 React 中的 Code Splitting (代碼拆分)？',
    options: [
      '將 CSS 和 JavaScript 分開寫在不同檔案',
      '將所有程式碼壓縮成一行以減少體積',
      '將程式碼拆分成多個小包 (Bundles)，讓使用者只需下載當前頁面所需的程式碼',
      '將後端程式碼與前端程式碼分開部署',
    ],
    answer: 2,
    hint: '提示：關鍵字是 React.lazy 和 Suspense。',
    explanation:
      'Code Splitting 是現代前端打包工具（如 Webpack, Vite）支援的特性。透過動態 import() 語法，可以將應用程式拆分成多個 chunk，實現『懶加載 (Lazy Loading)』，大幅減少首屏載入時間 (First Contentful Paint)。',
    reviewPoints: [
      'React.lazy() 實現動態引入元件',
      'Suspense 處理載入中的 Loading 狀態',
      '路由層級 (Route-based) 拆分是最常見的策略',
    ],
  },
  {
    id: 9,
    category: '進階模式',
    question: '什麼是高階元件 (Higher-Order Component, HOC)？',
    options: [
      '一個返回 JSX 的普通元件',
      '一個接收元件作為參數並返回新元件的函式',
      'React 內建的最高優先級元件',
      '只能在 Class Component 中使用的特殊方法',
    ],
    answer: 1,
    hint: '提示：類似於 JavaScript 的高階函式 (Higher-Order Function)。',
    explanation:
      'HOC 是 React 中用於重用元件邏輯的一種進階技巧。它不是 React API 的一部分，而是基於 React 組合特性的一種設計模式。例如 React.memo、connect (Redux) 都是 HOC 的應用。',
    reviewPoints: [
      'HOC 是純函式，不修改原元件',
      '用於橫切關注點 (Cross-cutting Concerns) 如權限驗證',
      'Hooks (如 useHover) 通常比 HOC 更易讀',
    ],
  },
  {
    id: 10,
    category: '狀態管理',
    question: '什麼時候應該使用 useReducer 而不是 useState？',
    options: [
      '當狀態邏輯簡單且獨立時',
      '當需要處理複雜的狀態邏輯，或下一個狀態依賴於前一個狀態時',
      '只有在 Class Component 中才需要用 useReducer',
      'useReducer 效能比 useState 差，應該盡量避免使用',
    ],
    answer: 1,
    hint: '提示：思考 Redux 的 reducer 模式。',
    explanation:
      'useReducer 是 useState 的替代方案。當 state 邏輯較複雜（包含多個子數值），或者下一個 state 依賴於之前的 state 時，useReducer 更加適用。它也讓你能將狀態更新邏輯從元件中分離出來，便於測試。',
    reviewPoints: [
      '適合複雜狀態邏輯或狀態間有依賴關係',
      '透過 dispatch action 觸發更新',
      '是實作 Context + Reducer 模式的基礎',
    ],
  },
];
