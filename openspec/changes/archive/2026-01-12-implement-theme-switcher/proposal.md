# Proposal: Implement Dynamic Theme Switcher

## Goal

Enable users to customize the application's visual appearance by selecting different color themes via a settings menu.

## Motivation

The current "Neo-Brutalist" design relies on specific high-contrast colors. Adding theming capabilities allows users to personalize their experience or choose palettes that might be more visually comfortable for them (e.g., lower contrast or different aesthetics like "Dark/Cyber"), enhancing accessibility and engagement.

## Scope

- **Theme Engine:** Replace hardcoded color values (Yellow, Cyan, Pink) with semantic variables.
- **UI:** Add a "Settings" button (Gear icon) to the main interface.
- **Interaction:** Create a modal/popover to select from predefined color palettes.
- **Persistence:** Save the selected theme to `localStorage` so it persists across reloads.

## Out of Scope

- Custom color picker (arbitrary hex values). Only predefined palettes will be supported initially to ensure design consistency.
