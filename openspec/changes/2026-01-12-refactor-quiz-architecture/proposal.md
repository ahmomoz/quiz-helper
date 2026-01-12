# Refactor Quiz Architecture and UI Components

## Context
The current implementation of `QuizPage.tsx` is monolithic, mixing state management, game logic, and UI rendering. This reduces maintainability and testability. Additionally, UI components like `NeoButton` and `BentoCard` rely on raw Tailwind class strings for customization, which hinders design system consistency.

## Goal
To improve code readability, maintainability, and scalability by:
1.  Extracting quiz logic into a custom `useQuiz` hook.
2.  Decomposing `QuizPage` into smaller, focused functional components.
3.  Standardizing UI components (`NeoButton`, `BentoCard`) to use semantic variants instead of raw CSS classes.

## Scope
*   **Refactor**: `src/features/quiz/QuizPage.tsx`
*   **New**: `src/hooks/useQuiz.ts`
*   **New Components**: `src/features/quiz/components/*` (`QuestionCard`, `ResultView`, `QuizInfo`)
*   **Update**: `src/components/ui/NeoButton.tsx`, `src/components/ui/BentoCard.tsx`

## Out of Scope
*   Changing the actual quiz data or business rules (scoring logic remains the same).
*   Adding routing (unless necessary for the refactor, but likely not).
