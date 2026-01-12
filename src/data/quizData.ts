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
      '它是一種強制組件每秒渲染 60 次的機制',
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
    question: '如何減少 React 組件的重複渲染 (Re-rendering)？',
    options: [
      '將所有變數都放在 global 範圍',
      '使用 React.memo 包裹組件，並搭配 useCallback 或 useMemo 來維持屬性引用的一致性',
      '強制使用 class 組件而不是函式組件',
      '減少組件的層級，全部寫在同一個檔案中',
    ],
    answer: 1,
    hint: '提示：思考『引用相等性 (Referential Equality)』。',
    explanation:
      '當父組件渲染時，子組件預設也會跟著渲染。React.memo 可以快取組件。然而，若 props 包含函式或物件，每次渲染都會產生新的引用，導致 memo 失效。此時需使用 useCallback 定義函式，或 useMemo 計算值，以確保在依賴未變的情況下引用保持不變。',
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
];
