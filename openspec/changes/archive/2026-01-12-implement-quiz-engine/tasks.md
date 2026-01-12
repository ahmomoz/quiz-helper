# Tasks: Implement Quiz Engine

1.  [ ] **Install Dependencies**
    - `lucide-react` for icons.
2.  [ ] **Setup Data Layer**
    - Create `src/data/quizData.ts` with the provided 5 questions.
    - Define TypeScript interfaces for the data.
3.  [ ] **Implement UI Core Components**
    - Create `src/components/ui/NeoButton.tsx` (Button with hard shadows).
    - Create `src/components/ui/BentoCard.tsx` (Container with borders).
4.  [ ] **Implement Main Application Logic**
    - Refactor `src/App.tsx` to include the game state (`currentIdx`, `score`, etc.).
    - Implement the logic for selecting, confirming, and navigating questions.
5.  [ ] **Assemble Quiz View**
    - Build the Header (Progress bar).
    - Build the Question Area (Question text, Options list).
    - Build the Feedback Area (Explanation card, revealed on correct answer).
    - Build the Side Panel (Hints, Stats).
6.  [ ] **Implement Result View**
    - Create a summary screen showing the final score.
    - Add "Restart" functionality.
7.  [ ] **Styling & Polish**
    - Apply the Neo-Brutalist CSS (shadows, borders, transitions) matching the POC.
    - Add the background dot pattern.
    - Ensure responsive layout (stacking on mobile).
8.  [ ] **Validation**
    - Verify all questions can be answered.
    - Verify score calculation is correct.
    - Verify restart resets the state completely.
