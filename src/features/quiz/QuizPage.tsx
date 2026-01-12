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
import { QUIZ_DATA } from '@/data/quizData';
import { NeoButton } from '@/components/ui/NeoButton';
import { BentoCard } from '@/components/ui/BentoCard';
import { cn } from '@/utils/cn';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { UI_TEXT } from '@/constants/text';

export const QuizPage = () => {
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto space-y-8">
          <BentoCard color="bg-theme-secondary" className="text-center py-12">
            <Trophy size={64} className="mx-auto mb-6 text-theme-text" />
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
              {UI_TEXT.result.title}
            </h1>
            <p className="text-2xl font-bold mb-8">
              {UI_TEXT.result.scorePrefix} {score} / {QUIZ_DATA.length}
            </p>
            <div className="flex justify-center">
              <NeoButton onClick={resetQuiz} color="bg-theme-accent">
                <RotateCcw size={20} /> {UI_TEXT.result.restart}
              </NeoButton>
            </div>
          </BentoCard>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header currentIdx={currentIdx} totalQuestions={QUIZ_DATA.length} />

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Question Area */}
        <div className="lg:col-span-8 space-y-6">
          <BentoCard title={currentQ.category}>
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
                      w-full text-left p-4 border-[3px] border-theme-border font-bold transition-all cursor-pointer
                      text-theme-text
                      ${selected === idx ? 'bg-theme-text text-theme-background translate-x-1 translate-y-1 shadow-none' : 'bg-theme-surface shadow-[4px_4px_0px_0px_var(--color-border)] hover:brightness-95'}
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
                    {isRevealed && idx === currentQ.answer && <CheckCircle2 className="ml-auto" />}
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
                  color="bg-theme-primary"
                  className="w-full md:w-auto"
                >
                  {UI_TEXT.quiz.confirm}
                </NeoButton>
              ) : (
                <NeoButton
                  onClick={nextQuestion}
                  color="bg-theme-secondary"
                  className="w-full md:w-auto"
                >
                  {UI_TEXT.quiz.next} <ChevronRight size={20} />
                </NeoButton>
              )}

              {isWrong && !isRevealed && (
                <div className="flex items-center gap-2 text-red-600 font-black animate-bounce justify-center md:justify-start">
                  <XCircle size={20} /> {UI_TEXT.quiz.retry}
                </div>
              )}
            </div>
          </BentoCard>

          {/* Explanation Section */}
          {isRevealed && (
            <BentoCard
              color="bg-green-200"
              title={UI_TEXT.quiz.explanationTitle}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 !text-black !border-black"
            >
              <p className="text-lg font-bold leading-relaxed mb-4">{currentQ.explanation}</p>
              <div className="bg-black text-green-400 p-4 font-mono text-sm overflow-x-auto border-[2px] border-black">
                <div className="flex items-center gap-2 mb-2 text-gray-400">
                  <Terminal size={14} />
                  <span>{UI_TEXT.quiz.logFile}</span>
                </div>
                {`// 重點回顧：\n// 1. ${currentQ.category} 核心考點\n// 2. 確保了解術語的台灣慣用譯名\n// 3. 面試時建議舉出實際專案範例`}
              </div>
            </BentoCard>
          )}
        </div>

        {/* Side Info Cards */}
        <div className="lg:col-span-4 space-y-6">
          <BentoCard color="bg-theme-primary" title={UI_TEXT.quiz.hint}>
            <div className="flex items-start gap-3">
              <Lightbulb className="flex-shrink-0 mt-1" />
              <p className="font-bold italic">{currentQ.hint}</p>
            </div>
          </BentoCard>

          <BentoCard
            color="bg-purple-400"
            className="text-white !border-black"
            title={UI_TEXT.quiz.learningList}
          >
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

          <BentoCard color="bg-theme-surface" title={UI_TEXT.quiz.interviewTips}>
            <p className="font-bold text-sm leading-relaxed">{UI_TEXT.quiz.tipsContent}</p>
          </BentoCard>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square border-[3px] border-theme-border bg-theme-accent shadow-[4px_4px_0px_0px_var(--color-border)] flex flex-col items-center justify-center p-2 text-center text-theme-text">
              <Cpu size={32} className="mb-2" />
              <span className="font-black text-xs uppercase">{UI_TEXT.quiz.engineOptimized}</span>
            </div>
            <div className="aspect-square border-[3px] border-theme-border bg-theme-secondary shadow-[4px_4px_0px_0px_var(--color-border)] flex flex-col items-center justify-center p-2 text-center text-theme-text">
              <Zap size={32} className="mb-2" />
              <span className="font-black text-xs uppercase">{UI_TEXT.quiz.quickReact}</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
