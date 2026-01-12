import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useQuiz } from '@/hooks/useQuiz';
import { ResultView } from './components/ResultView';
import { QuestionCard } from './components/QuestionCard';
import { QuizFeedback } from './components/QuizFeedback';
import { QuizInfo } from './components/QuizInfo';

export const QuizPage = () => {
  const {
    currentIdx,
    currentQuestion,
    totalQuestions,
    selectedOption,
    isRevealed,
    isWrong,
    score,
    quizStatus,
    selectOption,
    confirmAnswer,
    nextQuestion,
    restartQuiz,
  } = useQuiz();

  if (quizStatus === 'completed') {
    return <ResultView score={score} totalQuestions={totalQuestions} onRestart={restartQuiz} />;
  }

  return (
    <>
      <Header currentIdx={currentIdx} totalQuestions={totalQuestions} />

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Question Area */}
        <div className="lg:col-span-8 space-y-6">
          <QuestionCard
            data={currentQuestion}
            selectedOption={selectedOption}
            isRevealed={isRevealed}
            isWrong={isWrong}
            onSelectOption={selectOption}
            onConfirm={confirmAnswer}
            onNext={nextQuestion}
          />

          {/* Explanation Section */}
          {isRevealed && (
            <QuizFeedback
              explanation={currentQuestion.explanation}
              reviewPoints={currentQuestion.reviewPoints}
            />
          )}
        </div>

        {/* Side Info Cards */}
        <div className="lg:col-span-4">
          <QuizInfo hint={currentQuestion.hint} />
        </div>
      </div>

      <Footer />
    </>
  );
};
