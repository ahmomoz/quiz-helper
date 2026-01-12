# Tasks: Implement Theme Switcher

1.  [ ] **Define Theme Primitives**
    - Create `src/styles/themes.ts` with the `THEMES` constant and type definitions.
    - Add `src/context/ThemeContext.tsx` to manage state and apply CSS variables to `root`.
2.  [ ] **Refactor CSS & Tailwind**
    - Update `src/index.css` to include default CSS variables for `primary`, `secondary`, `accent`.
    - (Optional) Update `tailwind.config` or just use direct variable references in code. _Decision: Direct variable references via helper or `cn` class replacement._
3.  [ ] **Refactor Components**
    - Update `NeoButton.tsx` to default to `bg-[var(--color-primary)]` if no specific color class is passed (or handle via prop mapping).
    - Search and replace hardcoded colors (`bg-yellow-400`, etc.) in `App.tsx` with semantic variables (e.g., `bg-[var(--color-primary)]` or a custom utility class `bg-primary`).
4.  [ ] **Implement UI Controls**
    - Create `src/components/ThemeSelector.tsx`: A modal/dropdown triggering from a gear icon.
    - Integrate `ThemeSelector` into the `App.tsx` header.
5.  [ ] **Persist State**
    - Ensure `ThemeContext` reads/writes to `localStorage`.
6.  [ ] **Validation**
    - Verify all predefined themes apply correctly.
    - Verify the selection persists after page reload.
