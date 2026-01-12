# UI System Specifications

## MODIFIED Requirements

### Requirement: Standardized Button Component
The `NeoButton` component MUST use semantic variants for styling instead of accepting raw CSS classes for colors.

#### Scenario: Rendering a Primary Button
*   **Given** a developer wants a main call-to-action button
*   **When** using `<NeoButton variant="primary" />`
*   **Then** it renders with the theme's primary color (`bg-theme-primary`)
*   **And** maintains the border and shadow styles

#### Scenario: Rendering a Danger Button
*   **Given** a developer wants a destructive action button
*   **When** using `<NeoButton variant="danger" />`
*   **Then** it renders with the defined error color (e.g., `bg-red-400` or theme equivalent)

### Requirement: Standardized Card Component
The `BentoCard` component MUST use semantic variants for background styling.

#### Scenario: Rendering an Info Card
*   **Given** a developer wants to highlight information
*   **When** using `<BentoCard variant="highlight" />`
*   **Then** it renders with the theme's secondary color
