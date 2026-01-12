import { Trophy, RotateCcw } from 'lucide-react';
import { BentoCard } from '@/components/ui/BentoCard';
import { NeoButton } from '@/components/ui/NeoButton';
import { UI_TEXT } from '@/constants/printText';

interface ResultViewProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const ResultView = ({ score, totalQuestions, onRestart }: ResultViewProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto space-y-8">
        <BentoCard variant="secondary" className="text-center py-12">
          <Trophy size={64} className="mx-auto mb-6 text-theme-text" />
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            {UI_TEXT.result.title}
          </h1>
          <p className="text-2xl font-bold mb-8">
            {UI_TEXT.result.scorePrefix} {score} / {totalQuestions}
          </p>
          <div className="flex justify-center">
            <NeoButton onClick={onRestart} variant="accent">
              <RotateCcw size={20} /> {UI_TEXT.result.restart}
            </NeoButton>
          </div>
        </BentoCard>
      </div>
    </div>
  );
};
