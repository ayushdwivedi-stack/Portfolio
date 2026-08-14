# ayush.dev — Portfolio

A premium, motion-driven developer portfolio built with React, Vite, Tailwind CSS v4,
Framer Motion, React Three Fiber and Lenis.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
npm run lint      # oxlint
```

Requires Node 18+.

## What's implemented (Phases 1–9 of the brief)

- **Architecture** — clean `src/{components,pages,data,hooks,utils}` split.
  Add a new project/hackathon/achievement by editing the matching file in
  `src/data/` — no component changes needed.
- **Design system** — dark, near-black surfaces, restrained cyan/blue glow,
  mono technical labels, editorial numbering, film-grain overlay. Tokens live
  in `src/index.css` under `@theme` (Tailwind v4 CSS-first config).
- **Routing** — all 9 routes from the brief, animated page transitions,
  route-level code splitting (`React.lazy`) so only the Home route ships
  eagerly.
- **Home** — cinematic hero with an R3F neural-lattice 3D scene (WebGL
  detection + graceful fallback to a static glow, `prefers-reduced-motion`
  aware, lazy-loaded as its own JS chunk), animated intro, tech ticker,
  4 large cinematic project sections.
- **Projects** — archive grid + individual case-study pages for all four
  projects, each with a real architecture diagram (linear flow for three of
  them, a branching orchestrator diagram for the Offline AI Assistant).
- **Hackathons / Achievements** — timeline + filterable list, driven entirely
  by `src/data/hackathons.js` and `src/data/achievements.js`. Per the brief's
  content rule, nothing was invented: unverified fields (dates, roles,
  problem statements, results) are left as empty placeholders and render as
  "TBA" rather than fabricated text.
- **About / Contact** — editorial about page; contact page has a working UI
  form that is explicitly **not** wired to a backend yet (see below).
- **Motion & 3D** — Framer Motion page/section transitions, text-mask
  reveals, magnetic CTA buttons, custom cursor (desktop only), scroll
  progress bar, Lenis smooth scroll — all reduced-motion aware.
- **Performance** — manual chunk splitting (three.js / framer-motion+gsap /
  react vendor split into separate chunks), lazy-loaded routes, lazy-loaded
  3D scene. Production build is clean (`npm run build` succeeds, `npm run
  lint` reports 0 warnings/errors).

## What's intentionally left as a placeholder (don't skip this)

Per the brief's content-accuracy rule, nothing was invented. Before this goes
live, edit:

- `src/data/hackathons.js` — HackIndia Spark 4 and HackDays entries exist but
  are empty (no verified year/role/result). SIH 2026 has mentor/team filled
  in but no problem statement yet (not released as of this build).
- `src/data/achievements.js` — LeetCode/GitHub stats are placeholders; add
  real numbers only if you want them shown.
- `src/data/projects.js` — `github`/`liveDemo` URLs are empty; add real repo
  links.
- `src/data/profile.js` — `email` and `resumeUrl` are empty.
- **Contact form**: it's UI-only right now (see the comment in
  `src/pages/Contact.jsx`). Wire it to a real service (Formspree, Resend, a
  small serverless function, etc.) before relying on it.
- **Images**: project case-study visuals currently use a CSS gradient
  placeholder instead of the Higgsfield-generated cinematic art described in
  the brief (Phase 8 — asset generation — wasn't run in this pass). Drop
  final images into `public/assets/` and swap the `image`/`video` fields in
  `src/data/projects.js`.
- Social preview image referenced in `index.html`
  (`/assets/social-preview.jpg`) doesn't exist yet — add one or remove the tag.

## Structure

```
src/
  components/{layout,navigation,motion,ui,three,projects}
  pages/            Home, Projects, ProjectDetail, Hackathons, Achievements, About, Contact
  data/             profile.js, projects.js, hackathons.js, achievements.js, skills.js
  hooks/            useLenis, useReducedMotion, useIsTouchDevice
```
