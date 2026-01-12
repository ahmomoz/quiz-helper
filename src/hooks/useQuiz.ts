import { useState, useCallback } from 'react';
import { QUIZ_DATA, QuizQuestion } from '@/data/quizData';

export type QuizStatus = 'idle' | 'in-progress' | 'completed';

export interface UseQuizReturn {
  // State
  currentIdx: number;
  currentQuestion: QuizQuestion;
  totalQuestions: number;
  selectedOption: number | null;
  isRevealed: boolean;
  isWrong: boolean;
  score: number;
  quizStatus: QuizStatus;

  // Actions
  selectOption: (index: number) => void;
  confirmAnswer: () => void;
  nextQuestion: () => void;
  restartQuiz: () => void;
}

export const useQuiz = (): UseQuizReturn => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [quizStatus, setQuizStatus] = useState<QuizStatus>('in-progress');

  const currentQuestion = QUIZ_DATA[currentIdx];

  const selectOption = useCallback(
    (index: number) => {
      if (isRevealed) return;
      setSelectedOption(index);
      setIsWrong(false);
    },
    [isRevealed],
  );

  const confirmAnswer = useCallback(() => {
    if (selectedOption === null) return;

    if (selectedOption === currentQuestion.answer) {
      setIsRevealed(true);
      setScore((prev) => prev + 1);
    } else {
      setIsWrong(true);
    }
  }, [selectedOption, currentQuestion]);

  const nextQuestion = useCallback(() => {
    if (currentIdx < QUIZ_DATA.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsRevealed(false);
      setIsWrong(false);
    } else {
      setQuizStatus('completed');
    }
  }, [currentIdx]);

  const restartQuiz = useCallback(() => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsRevealed(false);
    setScore(0);
    setQuizStatus('in-progress');
    setIsWrong(false);
  }, []);

  return {
    currentIdx,
    currentQuestion,
    totalQuestions: QUIZ_DATA.length,
    selectedOption,
    isRevealed,
    isWrong,
    score,
    quizStatus,
    selectOption,
    confirmAnswer,
    nextQuestion,
    restartQuiz,
  };
};
