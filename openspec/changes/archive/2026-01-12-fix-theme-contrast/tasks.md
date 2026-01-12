# Tasks: Fix Theme Contrast

1.  [ ] **Refactor ThemeSelector**
    - Remove the inline `style={{ color: t.colors.text }}` from the theme name span in `ThemeSelector.tsx`.
    - Ensure the theme name inherits the text color from the parent button (which uses the _current_ active theme's text color).
    - (Optional) enhance the "Selected" state to ensure text remains readable against `bg-theme-secondary` (e.g., force black text if secondary is bright, or rely on existing variables).
2.  [ ] **Validation**
    - Verify that when in "Neo Pop" (Light) theme, the "Cyberpunk" (Dark) option text is readable (should be black, not white).
    - Verify that when in "Cyberpunk" (Dark) theme, the "Neo Pop" (Light) option text is readable (should be white, not black).
