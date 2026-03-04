# Copilot instructions (workspace)

You are working in a **personal portfolio** codebase built with **React + Vite + TypeScript**.

## Goals

- Keep the site **minimal, fast, and readable**.
- Prefer **small, composable components** over abstractions.
- Make changes that fit the existing layout and styling.
- This portfolio is a **single-page website**: keep changes aligned with a one-page, section-based layout (avoid adding routing unless explicitly requested).

## Tech stack

- React 19, TypeScript, Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (used sparingly for subtle entrance animations)
- Netlify Forms (contact form; no backend)

## Common commands

- Dev: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`
- Preview: `npm run preview`

## Project structure (important)

- `src/app/App.tsx`: app composition (single-page layout and section ordering)
- `src/config/site.ts`: site content/config (name, tagline, social links)
- `src/layout/`: layout building blocks (e.g. header)
- `src/sections/`: page sections (Hero/Projects/About/Contact/Footer)
- `src/components/`: small reusable UI primitives (e.g. `Container`)
- `src/styles/globals.css`: Tailwind import + minimal base styles
- `index.html`: includes a hidden Netlify form for build-time detection

## Coding conventions

- Use **TypeScript** everywhere; prefer explicit prop types for components.
- Components are **function components**.
- Keep exports consistent with current style:
  - `App` is the default export in `src/app/App.tsx`.
  - Most other components use **named exports**.
- Keep logic simple; avoid adding state/contexts unless required.

## Styling conventions

- Use **Tailwind utility classes**; avoid adding new CSS unless it belongs in `src/styles/globals.css`.
- Match the existing visual language (neutral palette like `zinc-*`, simple borders, rounded corners).
- Prefer semantic HTML (`section`, `header`, `nav`, `main`) and accessible forms (`label`, `required`, proper `type`).

## Framer Motion

- Use motion only for subtle, non-distracting effects (similar to `HeroSection`).
- Avoid complex animation timelines unless explicitly requested.

## Netlify Forms (do not break)

- The visible contact form lives in `src/sections/ContactSection.tsx`.
- `index.html` contains a hidden copy of the form for Netlify to detect at build time.
- If you change form fields in the visible form, **update the hidden form in `index.html` to match**:
  - Same `form name` (`name="contact"`)
  - Keep `data-netlify="true"`, `data-netlify-honeypot="bot-field"`
  - Keep hidden input: `<input type="hidden" name="form-name" value="contact" />`

## When making changes

- Keep edits focused and avoid unrelated refactors.
- After changes, ensure `npm run lint` and `npm run build` pass.
