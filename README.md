# Binface Your Place

A polished, mobile-first, entirely static Next.js frontend ideas and articles hub. It has no backend, API routes, forms, uploads, authentication, database, analytics, CMS or payment flow.

## Setup

```bash
npm install
npm run dev
```

## Build / static export

```bash
npm run build
```

`next.config.mjs` uses `output: "export"`, producing a static `out/` directory suitable for Vercel, Netlify, Cloudflare Pages, GitHub Pages or any static host.

## Vercel deployment

Import the repository in Vercel, use the default Next.js framework settings, and set the build command to `npm run build`. No environment variables are required.

## Static host deployment

Run `npm run build` and upload the generated `out/` folder to your static host.

For GitHub Pages, keep `public/.nojekyll` in the repository. Next.js copies it into `out/.nojekyll` during export so Pages serves the `_next/` asset directory instead of ignoring it; without that file the site can appear as plain, unstyled HTML.

## Replace before going live

- real imprint text
- promoter details, if applicable
- article copy review
- approval status
- any real imagery
- any official campaign wording
- final compliance review
