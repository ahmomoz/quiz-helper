# Design: Refactoring Strategy

## File Structure Changes

```
src/
├── App.tsx             # Pure entry point (providers + router/layout shell)
├── main.tsx            # DOM rendering
├── features/
│   └── quiz/
│       ├── components/ # Quiz-specific sub-components (QuestionCard, ResultCard)
│       └── QuizPage.tsx# Main quiz container (State holder)
├── components/
│   └── layout/         # Header, Footer
│   └── ui/             # Generic UI (NeoButton, BentoCard)
├── styles/
│   ├── index.css       # Global styles (Tailwind imports)
│   └── utilities.ts    # Common class strings (if reusable)
└── constants/          # Static text
    └── strings.ts
```

## Extraction Plan

1.  **`App.tsx`**: Will only contain `ThemeSelector` (in Header?) and render `QuizPage`. Ideally, even the Header/Footer structure moves to a `Layout` component.
2.  **`QuizPage`**: Will hold the `useState` hooks currently in `App.tsx`.
3.  **`styles`**: Since we use Tailwind, we won't extract "CSS files" per component, but we can ensure `index.css` is the single source for global theme vars. Complex Tailwind strings (like the shadow presets) can be abstracted into `tailwind.config.ts` or a utility helper if used often, but `NeoButton` already encapsulates this. We will focus on moving the _layout_ styles out of App.tsx.
4.  **`strings.ts`**: Extract "REACT SENIOR DEV", "面試訓練完成！", copyrights, etc.

## Data Flow

No change in data flow. The state remains local to the Quiz feature.
