# Spec: Theme System

## ADDED Requirements

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
