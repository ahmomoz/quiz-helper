# Design: Theme System Architecture

## Core Concept: CSS Variables & Semantic Mapping

Instead of hardcoding colors like `bg-yellow-400`, the application will use semantic names mapped to CSS variables. This allows the theme to be swapped instantly by changing the variable values on the root element.

### Semantic Roles

| Role         | Current Default      | Usage                                   |
| :----------- | :------------------- | :-------------------------------------- |
| `primary`    | Yellow-400 (#FACC15) | Main buttons, hints, highlights         |
| `secondary`  | Cyan-400 (#22D3EE)   | Next button, result card, progress fill |
| `accent`     | Pink-400 (#F472B6)   | Side decorations, restart button        |
| `background` | Gray-100 (#F3F4F6)   | Page background                         |
| `surface`    | White (#FFFFFF)      | Card backgrounds                        |

### Implementation Strategy

1.  **Context API (`ThemeContext`)**:
    - Manages the `currentTheme` ID.
    - Effects: Updates CSS variables on the `document.documentElement` whenever the theme changes.
    - Persists choice to `localStorage`.

2.  **Tailwind Integration**:
    - Since we are using Tailwind v4, we can simply use arbitrary values like `bg-[var(--color-primary)]` or define them in a CSS `@theme` block if dynamic interpolation is supported, but standard CSS variables in generic utility usage is safest.
    - Refactor existing components (`NeoButton`, `App.tsx`) to accept semantic color props or default to these variables.

3.  **UI Components**:
    - `ThemeToggle`: A button with a Gear icon.
    - `ThemeModal`: A simple `BentoCard` overlay showing available palettes.

### Data Structure: Palettes

```typescript
type Theme = {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
};

const THEMES: Theme[] = [
  {
    id: 'default',
    name: 'Neo Pop',
    colors: {
      primary: '#FACC15',
      secondary: '#22D3EE',
      accent: '#F472B6',
      background: '#F0F0F0',
    },
  },
  {
    id: 'cyber',
    name: 'Cyberpunk',
    colors: {
      primary: '#FCEE0A',
      secondary: '#00F0FF',
      accent: '#FF003C',
      background: '#0d0d0d',
    }, // Darker bg
  },
  {
    id: 'retro',
    name: 'Retro',
    colors: {
      primary: '#FCA311',
      secondary: '#14213D',
      accent: '#E5E5E5',
      background: '#FFFFFF',
    },
  },
];
```

## Component Updates

- **`src/App.tsx`**: Add `ThemeContext` provider (or separate file). Add Gear icon to Header.
- **`src/components/ui/NeoButton.tsx`**: Update default `color` prop to use `var(--color-primary)` logic if no override is provided, or refactor usages.
- **`src/index.css`**: Define default root variables.
