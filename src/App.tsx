import { useState } from 'react';
import {
  ChevronRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Terminal,
  Trophy,
  Cpu,
  Zap,
} from 'lucide-react';
import { QUIZ_DATA } from './data/quizData';
import { NeoButton } from './components/ui/NeoButton';
import { BentoCard } from './components/ui/BentoCard';
import { cn } from './utils/cn';

function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const currentQ = QUIZ_DATA[currentIdx];

  const handleSelect = (idx: number) => {
    if (isRevealed) return;
    setSelected(idx);
    setIsWrong(false);
  };

  const handleConfirm = () => {
    if (selected === null) return;
    if (selected === currentQ.answer) {
      setIsRevealed(true);
      setScore((prev) => prev + 1);
    } else {
      setIsWrong(true);
    }
  };

  const nextQuestion = () => {
    if (currentIdx < QUIZ_DATA.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelected(null);
      setIsRevealed(false);
      setIsWrong(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelected(null);
    setIsRevealed(false);
    setScore(0);
    setShowResult(false);
    setIsWrong(false);
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-[#f0f0f0] p-4 md:p-8 font-['Noto_Sans_TC'] selection:bg-pink-300 flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto space-y-8">
          <BentoCard color="bg-cyan-400" className="text-center py-12">
            <Trophy size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
              面試訓練完成！
            </h1>
            <p className="text-2xl font-bold mb-8">
              你的總分：{score} / {QUIZ_DATA.length}
            </p>
            <div className="flex justify-center">
              <NeoButton onClick={resetQuiz} color="bg-pink-400">
                <RotateCcw size={20} /> 重新挑戰
              </NeoButton>
            </div>
          </BentoCard>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f0f0] p-4 md:p-8 font-sans selection:bg-cyan-300 relative overflow-hidden">
      {/* 點陣背景 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(black 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <div className="inline-block bg-black text-white px-3 py-1 text-sm font-bold mb-2">
              REACT SENIOR DEV
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              React
              <br />
              Interview
            </h1>
          </div>
          <BentoCard color="bg-pink-400" className="w-full md:w-64 py-4 px-6">
            <div className="flex items-center justify-between">
              <span className="font-black">PROGRESS</span>
              <span className="font-black text-2xl">
                {currentIdx + 1} / {QUIZ_DATA.length}
              </span>
            </div>
            <div className="w-full h-4 border-[2px] border-black mt-2 bg-white">
              <div
                className="h-full bg-black transition-all duration-500"
                style={{ width: `${((currentIdx + 1) / QUIZ_DATA.length) * 100}%` }}
              ></div>
            </div>
          </BentoCard>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Question Area */}
          <div className="lg:col-span-8 space-y-6">
            <BentoCard color="bg-white" title={currentQ.category}>
              <h2 className="text-2xl md:text-3xl font-black leading-tight mb-8">
                {currentQ.question}
              </h2>

              <div className="space-y-4">
                {currentQ.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    className={cn(
                      `
                      w-full text-left p-4 border-[3px] border-black font-bold transition-all cursor-pointer
                      ${selected === idx ? 'bg-black text-white translate-x-1 translate-y-1 shadow-none' : 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50'}
                      ${isRevealed && idx === currentQ.answer ? '!bg-green-400 !text-black !border-green-600' : ''}
                      ${isRevealed && selected === idx && idx !== currentQ.answer ? '!bg-red-400 !text-black' : ''}
                    `,
                    )}
                    disabled={isRevealed}
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center border-[2px] border-current font-black">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                      {isRevealed && idx === currentQ.answer && (
                        <CheckCircle2 className="ml-auto" />
                      )}
                      {isRevealed && selected === idx && idx !== currentQ.answer && (
                        <XCircle className="ml-auto" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex gap-4 flex-col md:flex-row">
                {!isRevealed ? (
                  <NeoButton
                    onClick={handleConfirm}
                    disabled={selected === null}
                    color="bg-yellow-400"
                    className="w-full md:w-auto"
                  >
                    確認答案
                  </NeoButton>
                ) : (
                  <NeoButton
                    onClick={nextQuestion}
                    color="bg-cyan-400"
                    className="w-full md:w-auto"
                  >
                    下一題 <ChevronRight size={20} />
                  </NeoButton>
                )}

                {isWrong && !isRevealed && (
                  <div className="flex items-center gap-2 text-red-600 font-black animate-bounce justify-center md:justify-start">
                    <XCircle size={20} /> 再試一次！
                  </div>
                )}
              </div>
            </BentoCard>

            {/* Explanation Section */}
            {isRevealed && (
              <BentoCard
                color="bg-green-200"
                title="深度解析 (Detailed Explanation)"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <p className="text-lg font-bold leading-relaxed mb-4">{currentQ.explanation}</p>
                <div className="bg-black text-green-400 p-4 font-mono text-sm overflow-x-auto border-[2px] border-black">
                  <div className="flex items-center gap-2 mb-2 text-gray-400">
                    <Terminal size={14} />
                    <span>senior-dev-notes.log</span>
                  </div>
                  {`// 重點回顧：\n// 1. ${currentQ.category} 核心考點\n// 2. 確保了解術語的台灣慣用譯名\n// 3. 面試時建議舉出實際專案範例`}
                </div>
              </BentoCard>
            )}
          </div>

          {/* Side Info Cards */}
          <div className="lg:col-span-4 space-y-6">
            <BentoCard color="bg-yellow-300" title="提示 (Hint)">
              <div className="flex items-start gap-3">
                <Lightbulb className="flex-shrink-0 mt-1" />
                <p className="font-bold italic">{currentQ.hint}</p>
              </div>
            </BentoCard>

            <BentoCard color="bg-purple-400" className="text-white" title="學習清單">
              <ul className="space-y-3 font-bold">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rotate-45"></div> 虛擬 DOM 與 Diffing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rotate-45"></div> Hooks 生命週期
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rotate-45"></div> 狀態管理模式
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rotate-45"></div> 效能優化策略
                </li>
              </ul>
            </BentoCard>

            <BentoCard color="bg-white" title="面試心法">
              <p className="font-bold text-sm leading-relaxed">
                回答面試題時，不僅要答對，還要說明「為什麼」。嘗試使用 **STAR 原則** (Situation,
                Task, Action, Result) 來分享你解決過的 React 難題。
              </p>
            </BentoCard>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square border-[3px] border-black bg-pink-400 shadow-[4px_4px_0px_0px_black] flex flex-col items-center justify-center p-2 text-center">
                <Cpu size={32} className="mb-2" />
                <span className="font-black text-xs uppercase">Engine Optimized</span>
              </div>
              <div className="aspect-square border-[3px] border-black bg-cyan-300 shadow-[4px_4px_0px_0px_black] flex flex-col items-center justify-center p-2 text-center">
                <Zap size={32} className="mb-2" />
                <span className="font-black text-xs uppercase">Quick React</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 py-8 border-t-[3px] border-black flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-black uppercase">© 2026 React Interview Pro - Neo-Brutalist Edition</p>
          <div className="flex gap-4">
            <NeoButton
              color="bg-white"
              className="px-3 py-1 text-xs shadow-[2px_2px_0px_0px_black]"
            >
              GitHub
            </NeoButton>
            <NeoButton
              color="bg-white"
              className="px-3 py-1 text-xs shadow-[2px_2px_0px_0px_black]"
            >
              Portfolio
            </NeoButton>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
