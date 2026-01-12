# Proposal: Setup GitHub Actions CI/CD

## Goal
Automate the build, test (lint/type-check), and deployment process to GitHub Pages using GitHub Actions.

## Motivation
Manual deployment is error-prone and time-consuming. Setting up a CI/CD pipeline ensures that every commit to the `main` branch is automatically verified and deployed, maintaining a live and up-to-date version of the application.

## Scope
-   **CI Workflow:** Trigger on push to `main` and pull requests. Run `pnpm install`, `pnpm lint`, `pnpm build`.
-   **CD Workflow:** Trigger on push to `main` (after CI passes). Deploy the `dist/` folder to the `gh-pages` branch.
-   **Configuration:** Update `vite.config.ts` to set the correct `base` URL for GitHub Pages.

## Out of Scope
-   Unit testing automation (since Vitest isn't fully set up/used yet, we'll focus on Build & Lint).
