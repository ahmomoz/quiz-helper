import { Terminal } from 'lucide-react';
import { BentoCard } from '@/components/ui/BentoCard';
import { UI_TEXT } from '@/constants/printText';

interface QuizFeedbackProps {
  explanation: string;
  reviewPoints: string[];
}

export const QuizFeedback = ({ explanation, reviewPoints }: QuizFeedbackProps) => {
  return (
    <BentoCard
      variant="success"
      title={UI_TEXT.quiz.explanationTitle}
      className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-black! border-black!"
    >
      <p className="text-lg font-bold leading-relaxed mb-4">{explanation}</p>
      <div className="bg-black text-green-400 p-4 font-mono text-sm overflow-x-auto border-2 border-black whitespace-pre-wrap">
        <div className="flex items-center gap-2 mb-2 text-gray-400">
          <Terminal size={14} />
          <span>{UI_TEXT.quiz.logFile}</span>
        </div>
        {`// 重點回顧：
${reviewPoints.map((point, idx) => `// ${idx + 1}. ${point}`).join('\n')}`}
      </div>
    </BentoCard>
  );
};
