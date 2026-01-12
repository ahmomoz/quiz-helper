import { ChevronRight, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/utils/cn';
import { BentoCard } from '@/components/ui/BentoCard';
import { NeoButton } from '@/components/ui/NeoButton';
import { QuizQuestion } from '@/data/quizData';
import { UI_TEXT } from '@/constants/printText';

interface QuestionCardProps {
  data: QuizQuestion;
  selectedOption: number | null;
  isRevealed: boolean;
  isWrong: boolean;
  onSelectOption: (index: number) => void;
  onConfirm: () => void;
  onNext: () => void;
}

export const QuestionCard = ({
  data,
  selectedOption,
  isRevealed,
  isWrong,
  onSelectOption,
  onConfirm,
  onNext,
}: QuestionCardProps) => {
  return (
    <BentoCard title={data.category} variant="default">
      <h2 className="text-2xl md:text-3xl font-black leading-tight mb-8">{data.question}</h2>

      <div className="space-y-4">
        {data.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onSelectOption(idx)}
            className={cn(
              `
                w-full text-left p-4 border-[3px] border-theme-border font-bold transition-all cursor-pointer
                text-theme-text
                ${selectedOption === idx ? 'bg-theme-text text-theme-background translate-x-1 translate-y-1 shadow-none' : 'bg-theme-surface shadow-[4px_4px_0px_0px_var(--color-border)] hover:brightness-95'}
                ${isRevealed && idx === data.answer ? '!bg-green-400 !text-black !border-green-600' : ''}
                ${isRevealed && selectedOption === idx && idx !== data.answer ? '!bg-red-400 !text-black' : ''}
              `,
            )}
            disabled={isRevealed}
          >
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center border-[2px] border-current font-black">
                {String.fromCharCode(65 + idx)}
              </span>
              <span>{option}</span>
              {isRevealed && idx === data.answer && <CheckCircle2 className="ml-auto" />}
              {isRevealed && selectedOption === idx && idx !== data.answer && (
                <XCircle className="ml-auto" />
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 flex gap-4 flex-col md:flex-row">
        {!isRevealed ? (
          <NeoButton
            onClick={onConfirm}
            disabled={selectedOption === null}
            variant="primary"
            className="w-full md:w-auto"
          >
            {UI_TEXT.quiz.confirm}
          </NeoButton>
        ) : (
          <NeoButton onClick={onNext} variant="secondary" className="w-full md:w-auto">
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
  );
};
