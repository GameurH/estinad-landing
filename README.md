# ESTINAD — Flagship Website

The official flagship website for **ESTINAD**, a premium modular business
operating system for operational businesses. A shared platform (ESTINAD OS)
with four vertical products: Retail, Restaurant, Clinic, and Cloud.

This repository contains both the **strategic blueprint** (`BLUEPRINT.md`) and
its complete **Next.js implementation**.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4
- Geist Sans / Geist Mono (via `next/font`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Structure

```
app/                      App Router pages (every route in the sitemap)
  page.tsx                Homepage (13 sections)
  platform/...            ESTINAD OS + architecture/security/deployment
  products/[slug]/...     Product framework + per-product pricing
  solutions/[slug]/...    Industry/audience solutions
  resources/...           Blog, guides, case studies, docs, FAQ
  company/...             About, vision, partners, careers, contact
  legal/...               Privacy, terms
  demo/                   Demo request form
  api/demo/route.ts       Demo/contact endpoint
  sitemap.ts, robots.ts   SEO
components/               Monogram, Header, Footer, UI, Home, ProductPage,
                          PricingPage, ResourceSection, PageHero
lib/site.ts               Single source of truth: products, solutions,
                          platform pages, pricing, navigation
BLUEPRINT.md              Strategic website blueprint (10 sections)
```

## Design system

- **Visual world:** dark charcoal/near-black, warm ivory foreground, muted
  neutral grays, one restrained brass CTA accent.
- **Source of truth:** the interlocking **E/T** monogram (`components/Monogram.tsx`).
- Tokens live in `app/globals.css`; layout echoes the monogram's geometry
  through hairline borders, a rigid grid, and uniform spacing.

See `BLUEPRINT.md` for brand interpretation, sitemap, navigation architecture,
homepage wireframe, product page framework, copy system, visual direction,
conversion strategy, and the SEO content map.
