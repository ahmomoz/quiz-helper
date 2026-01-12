# quiz-core Specification

## Purpose

TBD - created by archiving change implement-quiz-engine. Update Purpose after archive.

## Requirements

### Requirement: Quiz Progression

The system MUST allow the user to navigate through a linear sequence of questions.

#### Scenario: Starting the quiz

- GIVEN the application is loaded
- THEN the first question (index 0) is displayed
- AND the score is 0.

#### Scenario: Advancing to the next question

- GIVEN a question has been answered and the explanation is revealed
- WHEN the user clicks the "Next Question" button
- THEN the next question in the sequence is displayed
- AND the selection state is reset.

#### Scenario: Finishing the quiz

- GIVEN the user is on the last question
- WHEN the user completes the question and clicks "Next/Finish"
- THEN the Result Screen is displayed showing the final score.

### Requirement: Answering Logic

The system MUST validate user answers and provide immediate feedback.

#### Scenario: Correct Answer

- GIVEN a question is displayed
- WHEN the user selects the correct option AND clicks "Confirm"
- THEN the option is highlighted green
- AND the detailed explanation is revealed
- AND the score is incremented by 1.

#### Scenario: Incorrect Answer

- GIVEN a question is displayed
- WHEN the user selects an incorrect option AND clicks "Confirm"
- THEN the option is highlighted red (or indicated as wrong)
- AND the user is prompted to try again.

### Requirement: Result & Reset

The system MUST allow the user to restart the quiz after completion.

#### Scenario: Restarting

- GIVEN the Result Screen is displayed
- WHEN the user clicks "Restart"
- THEN the game returns to the first question
- AND the score is reset to 0.
