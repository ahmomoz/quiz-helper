# Design: Quiz Architecture Refactoring

## 1. Logic Extraction (`useQuiz`)

We will move the state machine from `QuizPage` to `useQuiz`.

### State

- `currentIndex`: number
- `score`: number
- `selectedOption`: number | null
- `isRevealed`: boolean
- `isWrong`: boolean
- `quizStatus`: 'idle' | 'in-progress' | 'completed'

### Actions

- `selectOption(index: number)`: Updates selection, resets `isWrong`.
- `confirmAnswer()`: Checks answer. If correct -> reveal, increment score. If wrong -> set `isWrong`.
- `nextQuestion()`: Advances index. If last question -> set status 'completed'.
- `restartQuiz()`: Resets all state.

## 2. Component Decomposition

`QuizPage` will become a layout container that consumes `useQuiz`.

- **`QuizHeader`**: Displays progress and current question number.
- **`QuestionCard`**: Renders the question text, options, and "Confirm"/"Next" buttons.
  - Internally renders `OptionButton` (mapped from `NeoButton`).
- **`QuizFeedback`**: Renders the explanation and review points when `isRevealed` is true.
- **`QuizInfo`**: The sidebar with hints, learning list, and tips.
- **`ResultView`**: Displayed when `quizStatus === 'completed'`.

## 3. UI System Standardization

Instead of passing arbitrary colors, we will enforce a Design System.

### `NeoButton`

- **Props**: `variant`: 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger'
- **Mapping**:
  - `primary` -> `bg-theme-primary`
  - `secondary` -> `bg-theme-secondary`
  - `danger` -> `bg-red-400` (or theme error color)
  - etc.

### `BentoCard`

- **Props**: `variant`: 'default' | 'highlight' | 'info' | 'success'
- **Mapping**:
  - `default` -> `bg-theme-surface`
  - `highlight` -> `bg-theme-secondary`
  - `success` -> `bg-green-200`
