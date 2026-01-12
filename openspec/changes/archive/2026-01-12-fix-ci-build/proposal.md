# Proposal: Fix CI Build Case Sensitivity

## Goal
Fix the GitHub Actions build failure caused by case-sensitive file imports on Linux environments.

## Motivation
The build failed because `src/components/Theme/ThemeSelector.tsx` (capital T) was being imported as `@/components/theme/ThemeSelector` (lowercase t). This works on macOS/Windows but fails on Linux.

## Scope
-   Rename `src/components/Theme` directory to `src/components/theme`.
