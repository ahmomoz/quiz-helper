# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an interactive React quiz application designed for senior React developer interview preparation. It features a Neo-Brutalist design aesthetic with dynamic theming and comprehensive quiz feedback system.

**Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS v4, pnpm

## Development Commands

### Essential Commands
```bash
pnpm install              # Install dependencies (use --frozen-lockfile in CI)
pnpm dev                  # Start dev server at http://localhost:5173
pnpm build                # Type check + production build (output: dist/)
pnpm preview              # Preview production build locally
pnpm lint                 # Run ESLint checks
pnpm format               # Format code with Prettier
```

### Path Aliases
- `@/*` maps to `src/*` (configured in tsconfig.json and vite.config.ts via vite-tsconfig-paths)

## Architecture

### Application Structure

**Entry Point Flow**:
- `main.tsx` → wraps `<App>` in `<ThemeProvider>` (manages theme state + localStorage persistence)
- `App.tsx` → wraps `<QuizPage>` in `<MainLayout>` (header + footer structure)
- `QuizPage.tsx` → uses `useQuiz()` hook to orchestrate quiz state machine

### Core State Management

**Theme System** (`src/context/ThemeContext.tsx`):
- Provides global theme via Context API
- Applies CSS custom properties to `:root` dynamically
- Persists theme selection to `localStorage` with key `quiz-helper-theme`
- Theme definitions in `src/styles/themes.ts` (Neo Pop, Cyberpunk, Retro, Monochrome)

**Quiz Logic** (`src/hooks/useQuiz.ts`):
- Centralized quiz state machine with 3 statuses: `idle` | `in-progress` | `completed`
- Manages: current question index, selected option, reveal state, score, wrong answer flag
- Key states:
  - `isRevealed`: true when correct answer is submitted (shows explanation)
  - `isWrong`: true when incorrect answer is submitted (allows retry)
  - User must answer correctly to proceed to next question

### Data Structure

**Quiz Questions** (`src/data/quizData.ts`):
```typescript
interface QuizQuestion {
  id: number;
  category: string;        // e.g., "基礎觀念", "Hooks", "效能優化"
  question: string;
  options: string[];       // Array of 4 choices
  answer: number;          // Index of correct option
  hint: string;
  explanation: string;     // Detailed explanation shown after correct answer
  reviewPoints: string[];  // Bullet points for "senior-dev-notes.log" style recap
}
```

### Component Organization

**Features** (`src/features/quiz/`):
- Feature-based organization (quiz is a self-contained feature)
- `QuizPage.tsx`: Main orchestrator using Bento Grid layout (8-col question + 4-col sidebar on lg)
- Sub-components: `QuestionCard`, `QuizFeedback`, `QuizInfo`, `ResultView`

**Shared UI** (`src/components/`):
- `layout/`: `MainLayout`, `Header`, `Footer`
- `ui/`: Reusable Neo-Brutalist styled components (`NeoButton`, `BentoCard`)
- `theme/`: `ThemeSelector` component

**Utilities** (`src/utils/cn.ts`):
- `cn()` helper combining `clsx` + `tailwind-merge` for className composition

## Styling Approach

### Tailwind CSS v4 + CSS Variables
- Uses `@tailwindcss/vite` plugin for Tailwind v4
- Theme colors injected as CSS variables (`--color-primary`, `--color-secondary`, etc.)
- Access in Tailwind: `bg-[var(--color-primary)]`
- Neo-Brutalist style: bold borders, hard shadows, high contrast

### Theme Switching Flow
1. User selects theme → `ThemeContext.setThemeId()`
2. `useEffect` in `ThemeProvider` applies CSS variables to `:root`
3. All components using `var(--color-*)` update automatically
4. Selection saved to `localStorage`

## GitHub Actions CI/CD

**Workflow** (`.github/workflows/deploy.yml`):
- Triggers on push to `main` branch
- Build steps: Install pnpm → lint → build → upload artifact
- Deploys to GitHub Pages (base path: `/quiz-helper/` configured in vite.config.ts)

## Key Patterns

### Hook-based State Management
- Prefer custom hooks (`useQuiz`, `useTheme`) over component-level state
- Context API for cross-cutting concerns (theme), not Redux

### Type Safety
- Strict TypeScript with `strict: true`, `noUnusedLocals`, `noUnusedParameters`
- Explicit return types on hooks (`UseQuizReturn`)

### Quiz User Flow
1. User selects option → `selectOption()`
2. User clicks confirm → `confirmAnswer()`
   - If correct: reveal explanation + increment score
   - If wrong: show wrong state, allow retry (no penalty)
3. User clicks next → `nextQuestion()` or `setQuizStatus('completed')`
4. On completion: show `ResultView` with score + restart option

## Adding New Quiz Questions

Edit `src/data/quizData.ts`:
1. Add new `QuizQuestion` object to `QUIZ_DATA` array
2. Follow existing structure (4 options, 0-indexed answer)
3. Include category, hint, explanation, and reviewPoints
4. Questions are sequential (no shuffle/random)

## Adding New Themes

Edit `src/styles/themes.ts`:
1. Add new object to `THEMES` array with unique `id`
2. Define all 7 colors: `primary`, `secondary`, `accent`, `background`, `surface`, `text`, `border`
3. Theme automatically available in `ThemeSelector` dropdown
