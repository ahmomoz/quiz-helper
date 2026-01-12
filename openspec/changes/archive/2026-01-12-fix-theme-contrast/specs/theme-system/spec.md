# Spec: Theme System Contrast

## ADDED Requirements

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
