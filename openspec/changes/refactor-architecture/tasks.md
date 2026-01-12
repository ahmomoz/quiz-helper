# Tasks: Refactor Architecture

1.  [ ] **Create Directories**
    - `src/features/quiz`
    - `src/components/layout`
    - `src/constants`
2.  [ ] **Extract Static Strings**
    - Create `src/constants/text.ts` and move UI labels (Header titles, Result messages, Footer text).
3.  [ ] **Extract Layout Components**
    - Create `src/components/layout/Header.tsx` (Move Header + ThemeSelector).
    - Create `src/components/layout/Footer.tsx`.
    - Create `src/components/layout/MainLayout.tsx` (Wrapper with background dots).
4.  [ ] **Extract Quiz Feature**
    - Create `src/features/quiz/QuizPage.tsx`.
    - Move the state logic (`currentIdx`, `score`, handlers) from `App.tsx` to `QuizPage.tsx`.
    - Move the render logic (Question card, Side panel) into `QuizPage.tsx` or sub-components (`QuizGame.tsx`, `QuizResult.tsx`).
5.  [ ] **Clean up App.tsx**
    - `App.tsx` should simply render `MainLayout` containing `QuizPage`.
6.  [ ] **Validation**
    - Verify the app behaves exactly as before (no regression).
