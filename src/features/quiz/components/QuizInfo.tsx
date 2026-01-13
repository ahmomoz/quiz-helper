import { Lightbulb, Cpu, Zap, Sparkles, Bot } from 'lucide-react';
import { BentoCard } from '@/components/ui/BentoCard';
import { UI_TEXT } from '@/constants/printText';
import { NeoButton } from '@/components/ui/NeoButton';
import { useState } from 'react';

interface QuizInfoProps {
  hint: string;
  question: string;
}

export const QuizInfo = ({ hint, question }: QuizInfoProps) => {
  const [showCopied, setShowCopied] = useState(false);

  const handleAIClick = async (aiType: 'gemini' | 'gpt') => {
    // 複製題目到剪貼簿
    try {
      await navigator.clipboard.writeText(question);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }

    // 在新標籤頁打開 AI 工具
    const urls = {
      gemini: 'https://gemini.google.com/app',
      gpt: 'https://chat.openai.com/',
    };
    window.open(urls[aiType], '_blank');
  };
  return (
    <div className="space-y-6">
      <BentoCard variant="primary" title={UI_TEXT.quiz.hint}>
        <div className="flex items-start gap-3">
          <Lightbulb className="flex-shrink-0 mt-1" />
          <p className="font-bold italic">{hint}</p>
        </div>
      </BentoCard>

      <BentoCard
        variant="info"
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

      <BentoCard variant="default" title={UI_TEXT.quiz.interviewTips}>
        <p className="font-bold text-sm leading-relaxed">{UI_TEXT.quiz.tipsContent}</p>
      </BentoCard>

      <BentoCard variant="accent" title={UI_TEXT.quiz.aiHelpers}>
        <div className="space-y-3">
          {showCopied && (
            <div className="text-sm font-bold text-center py-2 bg-green-400 text-black border-2 border-black animate-pulse">
              {UI_TEXT.quiz.copiedToClipboard}
            </div>
          )}
          <NeoButton
            onClick={() => handleAIClick('gemini')}
            variant="secondary"
            className="w-full text-sm"
          >
            <Sparkles size={18} />
            {UI_TEXT.quiz.askGemini}
          </NeoButton>
          <NeoButton
            onClick={() => handleAIClick('gpt')}
            variant="accent"
            className="w-full text-sm"
          >
            <Bot size={18} />
            {UI_TEXT.quiz.askGPT}
          </NeoButton>
        </div>
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
  );
};
