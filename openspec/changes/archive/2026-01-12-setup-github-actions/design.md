# Design: GitHub Actions Pipeline

## Workflow Architecture

We will use a single workflow file `.github/workflows/deploy.yml` with two jobs:

1.  **Build & Verify (`build`)**
    - Runs on `ubuntu-latest`.
    - Steps: Checkout -> Setup Node/pnpm -> Install Dependencies -> Lint -> Build.
    - Artifact: Uploads `dist/` directory (for use in deploy job).

2.  **Deploy (`deploy`)**
    - Runs on `ubuntu-latest`.
    - Needs: `build` job success.
    - Permissions: `pages: write`, `id-token: write`.
    - Steps: Setup Pages -> Download Artifact -> Deploy to GitHub Pages.

## Vite Configuration

GitHub Pages usually serves the site from a subdirectory (e.g., `https://<user>.github.io/<repo>/`).
We need to update `vite.config.ts` to dynamically set the `base` path, or hardcode it if the repo name is known.
_Strategy: Use the repository name `/quiz-helper/` as the default base, or allow it to be configured._

Assuming repo name is `quiz-helper`. Base should be `/quiz-helper/`.
However, for local dev, base is `/`.
Vite handles this automatically if we set `base` in config.

## OpenSpec Integration

We can also run `openspec validate --strict` in the CI to ensure specs are always valid.
