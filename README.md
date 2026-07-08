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

`next.config.js` uses `output: 'export'`, producing a static `out/` directory suitable for Vercel, Netlify, Cloudflare Pages, GitHub Pages or any static host.

## Vercel deployment

Import the repository in Vercel, use the default Next.js framework settings, and set the build command to `npm run build`. No environment variables are required.

## Static host deployment

Run `npm run build` and upload the generated `out/` folder to your static host.

## Replace before going live

- real imprint text
- promoter details, if applicable
- privacy contact
- article copy review
- approval status
- contact email
- any real imagery
- any official campaign wording
- final compliance review
