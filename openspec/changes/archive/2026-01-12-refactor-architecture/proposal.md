# Proposal: Architecture Refactoring

## Goal

Decouple the monolithic `App.tsx` by extracting the quiz logic and UI layout into dedicated components, centralizing styles, and externalizing static content. This improves maintainability and separation of concerns.

## Motivation

Currently, `App.tsx` contains mixed concerns: routing (implicit), state management, UI layout, and business logic. As the application grows (e.g., adding themes), this file becomes harder to read and test. Separating these concerns aligns with React best practices.

## Scope

1.  **Component Extraction:** Move the main quiz view into `src/features/quiz/QuizPage.tsx` (or similar).
2.  **Style Management:** Move CSS logic/constants (like shadow strings or repetitive tailwind classes) into `src/styles/` or dedicated UI components if not already done.
3.  **Content Externalization:** Extract hardcoded strings (UI labels, "Senior Dev Notes" text) into a constants file or localization-ready structure.

## Out of Scope

- Changing the visual design or behavior.
- Adding new features.
