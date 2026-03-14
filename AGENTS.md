# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 15 app using the App Router and TypeScript. Route files live under `src/app` (`page.tsx`, `layout.tsx`, and nested routes such as `src/app/about/page.tsx`). Shared UI belongs in `src/components`. Global styling is in `src/app/globals.css`, and static assets such as icons and SVGs live in `public/`.

## Build, Test, and Development Commands
Install dependencies with `npm install`.

- `npm run dev` starts the local dev server with Turbopack at `http://localhost:3000`.
- `npm run build` creates the production build and catches build-time issues.
- `npm run start` serves the production build locally after `npm run build`.
- `npm run lint` runs the Next.js ESLint ruleset for TypeScript and Core Web Vitals.

## Coding Style & Naming Conventions
Use TypeScript React function components and 2-space indentation. Follow the existing pattern of PascalCase for component files (`Navigation.tsx`, `Footer.tsx`) and lowercase route segment folders (`about`, `contact`, `services`). Keep route-specific UI inside its route folder; move reusable sections into `src/components`. Prefer Tailwind utility classes in JSX and reserve `globals.css` for app-wide tokens and base styles.

## Testing Guidelines
There is no automated test suite in the repository yet. Until one is added, treat `npm run lint` and `npm run build` as the required validation steps before opening a PR. If you add tests, place them beside the feature or in a `src/__tests__/` directory and use names like `ComponentName.test.tsx`.

## Commit & Pull Request Guidelines
Recent history mixes short imperative commits (`edits to contact page`) with conventional prefixes (`ci: add Azure Static Web Apps workflow file`). Prefer concise, imperative commit messages and use prefixes like `ci:`, `feat:`, or `fix:` when they add clarity. PRs should include a brief summary, note affected routes or components, link any related issue, and attach screenshots for visible UI changes.

## Configuration Notes
Keep secrets out of the repo. Store runtime configuration in local environment files such as `.env.local`, and document any new variables in `README.md` or the PR description.
