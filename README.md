# Personal Portfolio (Single Page)

Minimal, fast **single-page** personal portfolio built with **React + Vite + TypeScript** and styled with **Tailwind CSS**.

## Overview

- **Single-page website**: one route/page composed of sections (Hero, Projects, About, Contact, Footer).
- **Config-driven content**: core text/links live in `src/config/site.ts`.
- **No backend**: contact form uses **Netlify Forms**.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (subtle entrance animations)
- Netlify Forms

## Scripts

- Dev: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`
- Preview: `npm run preview`

## Deploy (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect: `public/_redirects`

## Netlify Forms (Important)

- Visible form: `src/sections/ContactSection.tsx`
- Hidden detection form: `index.html`

If you change fields in the visible form, update the hidden form in `index.html` to match (same form name + fields).
