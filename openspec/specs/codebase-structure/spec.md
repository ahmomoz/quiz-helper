# codebase-structure Specification

## Purpose
TBD - created by archiving change refactor-architecture. Update Purpose after archive.
## Requirements
### Requirement: Modular Architecture

The application MUST be structured into distinct modules for Layout, Features (Quiz), and UI components.

#### Scenario: App Entry Point

- GIVEN the application has started
- WHEN `App.tsx` renders
- THEN it MUST only contain high-level providers and the main layout container
- AND it MUST NOT contain specific quiz business logic or state.

#### Scenario: Quiz Feature Isolation

- GIVEN the user is playing the quiz
- WHEN the quiz state changes (score, current question)
- THEN this logic MUST be contained within the `features/quiz` directory
- AND NOT in the global `App` component.

### Requirement: Centralized Content

Static text content displayed in the UI MUST be manageable from a central location.

#### Scenario: Updating Text

- GIVEN a static text string (e.g., "REACT SENIOR DEV") needs changing
- WHEN the developer updates the constant in `src/constants/`
- THEN the change is reflected in the UI without modifying component code.

