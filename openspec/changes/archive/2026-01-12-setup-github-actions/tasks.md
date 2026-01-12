# Tasks: Setup CI/CD

1.  [ ] **Configure Vite Base Path**
    - Update `vite.config.ts` to include `base: '/quiz-helper/'` (or make it conditional based on `process.env.GITHUB_PAGES`).
2.  [ ] **Create Workflow File**
    - Create `.github/workflows/deploy.yml` with `build` and `deploy` jobs.
    - Ensure `pnpm` is used for installation.
    - Include `lint` and `build` steps.
    - Use `actions/deploy-pages` for the deployment step.
3.  [ ] **Validation**
    - Locally verify `pnpm build` works with the new base path (preview using `vite preview`).
    - (User action required) User needs to enable GitHub Pages in repo settings and select "GitHub Actions" as the source.
