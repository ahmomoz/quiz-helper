# Tasks

1.  **Refactor UI Components**
    - Update `src/components/ui/NeoButton.tsx` to accept `variant` prop and remove `color`. Map variants to classes.
    - Update `src/components/ui/BentoCard.tsx` to accept `variant` prop and remove `color`. Map variants to classes.
    - _Validation_: Check existing usages (mostly in `QuizPage`) and temporarily fix them or do this in parallel with step 3. (Since `QuizPage` is being rewritten, we can break it momentarily or update it in step 3).

2.  **Implement `useQuiz` Hook**
    - Create `src/hooks/useQuiz.ts`.
    - Move state (`currentIdx`, `selected`, `score`, etc.) and logic (`handleSelect`, `handleConfirm`, `nextQuestion`, `resetQuiz`) from `QuizPage`.
    - _Validation_: Unit test the hook (optional but recommended) or verify via manual testing after integration.

3.  **Decompose `QuizPage` Components**
    - Create `src/features/quiz/components/QuizHeader.tsx`.
    - Create `src/features/quiz/components/QuestionCard.tsx`.
    - Create `src/features/quiz/components/QuizFeedback.tsx` (Explanation section).
    - Create `src/features/quiz/components/QuizInfo.tsx` (Sidebar).
    - Create `src/features/quiz/components/ResultView.tsx`.
    - _Validation_: Ensure each component renders with mock data if needed.

4.  **Integrate and Finalize `QuizPage`**
    - Rewrite `src/features/quiz/QuizPage.tsx` to use `useQuiz` and the new sub-components.
    - Update usage of `NeoButton` and `BentoCard` to use the new `variant` props.
    - _Validation_: Run the app and verify the entire quiz flow works identical to before, but with better code structure.
