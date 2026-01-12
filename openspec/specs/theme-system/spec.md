# theme-system Specification

## Purpose

TBD - created by archiving change implement-theme-switcher. Update Purpose after archive.

## Requirements

### Requirement: Dynamic Theme Switching

The system MUST allow the user to change the global color scheme of the application.

#### Scenario: Opening the theme menu

- GIVEN the user is on the quiz page
- WHEN the user clicks the "Settings" (Gear) icon
- THEN a modal or menu appears displaying available theme options.

#### Scenario: Selecting a theme

- GIVEN the theme menu is open
- WHEN the user selects a specific theme (e.g., "Cyberpunk")
- THEN the application colors (buttons, backgrounds, borders) update immediately to reflect the new palette
- AND the menu closes (or allows closing).

### Requirement: Theme Persistence

The selected theme MUST be remembered across sessions.

#### Scenario: Reloading the page

- GIVEN the user has selected a non-default theme
- WHEN the user reloads the browser page
- THEN the application initializes with the user's previously selected theme.

### Requirement: Theme Selection Visibility

The system MUST ensure that theme options are legible regardless of the currently active theme.

#### Scenario: Viewing theme options

- GIVEN the user has opened the theme selector
- WHEN the list of themes is displayed
- THEN the name of each theme MUST be displayed using a color that contrasts sufficiently with the menu background (e.g., using the _current_ theme's text color)
- AND distinct colored dots SHALL be used to preview the theme's palette, instead of coloring the text itself.

#### Scenario: Selected state legibility

- GIVEN a theme is currently selected
- WHEN the user views the theme menu
- THEN the selected item MUST be highlighted
- AND the text color of the selected item MUST contrast with the highlight background color.
