# Prince Srivastava — Portfolio

A personal portfolio built with **React 19**, **Vite**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command           | What it does                          |
| ------------------ | -------------------------------------- |
| `npm run dev`       | Start the local dev server with HMR   |
| `npm run build`     | Build a production bundle into `dist` |
| `npm run preview`   | Preview the production build locally  |
| `npm run lint`      | Lint the project with oxlint          |

## Project structure

```
src/
  assets/         portrait image
  components/     one file per section (Header, Hero, Stats, Projects, Experience, Stack, Contact)
  data/
    portfolio.js  all resume content — name, roles, projects, stack, education
  index.css       Tailwind v4 import + design tokens (@theme) + custom animations
  App.jsx         composes the sections
  main.jsx        React entry point
```

## Editing content

Everything text-based — name, contact links, job history, projects, stack — lives in
`src/data/portfolio.js`. Update that file and every component picks up the change automatically.

To swap the portrait, replace `src/assets/prince.jpg` (any filename works, just update the
`import` at the top of `src/components/Hero.jsx`).

## Design tokens

Colors, fonts, and the custom `xs` breakpoint are defined once in `src/index.css` under the
`@theme` block, and used throughout via Tailwind classes like `bg-ink`, `text-teal`, `font-serif`.

## Deploying

This is a static site after `npm run build` — the `dist/` folder can be deployed as-is to
Vercel, Netlify, GitHub Pages, or any static host.
