# Quiz Core Specifications

## MODIFIED Requirements

### Requirement: Quiz State Management
The quiz logic MUST be encapsulated in a reusable hook or service, separating it from the UI presentation.

#### Scenario: User selects an option
*   **Given** the quiz is in progress and options are displayed
*   **When** the user clicks an option
*   **Then** the selected option state is updated
*   **And** the "Wrong" state is reset
*   **And** the answer is NOT yet revealed (requires confirmation)

#### Scenario: User confirms correct answer
*   **Given** an option is selected and it matches the correct answer
*   **When** the user clicks "Confirm"
*   **Then** the answer is revealed (options show pass/fail styles)
*   **And** the score is incremented
*   **And** the explanation becomes visible

#### Scenario: User confirms incorrect answer
*   **Given** an option is selected and it does NOT match the correct answer
*   **When** the user clicks "Confirm"
*   **Then** the `isWrong` state becomes true (triggering UI feedback like shake animation)
*   **And** the answer is NOT revealed
*   **And** the score is NOT incremented

#### Scenario: Quiz Completion
*   **Given** the user is on the last question
*   **When** the user clicks "Next" (after revealing the answer)
*   **Then** the quiz status changes to 'completed'
*   **And** the result view is shown
