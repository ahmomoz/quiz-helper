# Proposal: Fix Theme Selector Contrast

## Goal

Ensure the text within the theme selector dropdown is always legible against its background, regardless of the active theme or the specific theme option being displayed.

## Motivation

The current implementation of the theme selector preview uses the theme's defined text color. However, when the preview item's background color (representing the theme's surface or primary color) contrasts poorly with that text color, legibility is compromised. We need to enforce sufficient contrast for UI controls.

## Scope

- **Theme Data:** Add explicit `contrastText` or distinct `menuText` property to the theme definition if necessary, or calculate it.
- **UI:** Update `ThemeSelector.tsx` to use high-contrast text colors for the preview items, independent of the global theme text color if needed.

## Design

We will introduce a simple heuristic or explicit property for menu items. Since we have a defined `surface` color for the menu background, the text inside the menu buttons should generally follow the _menu's_ text color, not necessarily the _previewed theme's_ text color, OR the preview button should have a guaranteed readable color.

Current issue:
The menu items display the theme name using `color: t.colors.text`.
If `t.colors.text` is white (e.g., Cyberpunk) but the menu background is light (e.g., viewing from Default theme), it's invisible.

**Solution:**
The theme selector is a UI component _within_ the current theme context.

1.  The **Menu Container** uses the _current_ theme's `surface` and `text` colors.
2.  The **Theme Option Button** should display the theme name in the _current_ theme's text color to ensure it matches the menu context, OR use a standardized color (black/white) if it has its own colored background.
3.  Currently, the button uses `bg-theme-surface` (current theme) for unselected items. So the text _inside_ it must be the _current_ theme's text color.
4.  The _selected_ item uses `bg-theme-secondary`. The text there must contrast with `secondary`.

**Refined Approach:**
Refactor `ThemeSelector` to ensure:

- Unselected items: Background = Current Surface, Text = Current Text.
- Selected item: Background = Current Secondary, Text = Current Text (assuming secondary/text contrast is valid, which it usually is in our themes, or force black/white).
- **Crucially**: Remove the inline style `color: t.colors.text` from the theme name span. The theme name should be readable in the _current user's interface_, not a preview of the _target_ theme's text color (which might be white-on-white in the current UI). The color dots already serve as the preview.
