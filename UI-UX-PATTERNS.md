# ESTINAD — UI/UX Pattern Library

Extracted from the implemented design system (`app/globals.css`, `components/ui.tsx`, and page components). Use this as the single reference for extending the site without breaking visual or interaction consistency.

---

## 1. Design intent

| Principle | Expression |
|-----------|------------|
| **Premium & restrained** | Dark charcoal world, warm ivory foreground, one brass accent — no gradients, neon, or startup clichés |
| **Architectural** | Hairline borders, modular grids, blueprint backdrops echo the interlocking monogram |
| **Infrastructure-grade** | Stable typography, mechanical motion, enterprise tone — confident, not hyped |
| **Modular** | Reusable primitives (`Section`, `Button`, `Tag`) compose every page the same way |
| **Conversion-oriented** | Primary CTA path is always visible; secondary paths stay low-friction |

---

## 2. Color tokens

Defined in `app/globals.css` and exposed to Tailwind via `@theme inline`.

| Token | Hex / value | Role |
|-------|-------------|------|
| `base` | `#0a0a0b` | Page background, near-black |
| `surface` | `#101012` | Raised panels, alternating sections |
| `surface-2` | `#141417` | Hover states, secondary cards |
| `surface-3` | `#1a1a1e` | Inset / scrollbar thumb |
| `ivory` | `#ede7d9` | Primary text, logo foreground |
| `ivory-dim` | `#c9c3b5` | Body copy, secondary text |
| `muted` | `#8c8a83` | Captions, meta, eyebrows |
| `muted-2` | `#5f5d57` | Faint labels, placeholders, disabled |
| `accent` | `#c2a878` | Primary CTA, highlights (antique brass) |
| `accent-dim` | `#9c8459` | CTA hover |
| `accent-soft` | `rgba(194,168,120,0.14)` | Selection, subtle emphasis |
| `line` | `rgba(237,231,217,0.10)` | Default borders |
| `line-strong` | `rgba(237,231,217,0.18)` | Secondary button borders, strong dividers |

**Rules**

- Use **one accent color** for CTAs and positive emphasis only.
- Alternate section backgrounds: `base` ↔ `surface` for rhythm.
- Never introduce additional brand colors or loud gradients.

---

## 3. Typography

### Font stacks

| Locale | Sans | Mono / labels |
|--------|------|----------------|
| `en`, `fr` | Geist Sans (`--font-geist-sans`) | Geist Mono (`--font-geist-mono`) |
| `ar` | Cairo (`--font-cairo`) | Cairo (same — Arabic labels) |

Geist uses OpenType features `ss01`, `cv01`, `cv11` on body; disabled for Arabic.

### Type scale

| Element | Classes / CSS | Usage |
|---------|---------------|-------|
| **Page H1** | `text-4xl md:text-5xl lg:text-6xl leading-[1.05–1.08] font-semibold tracking-tight text-ivory` | Hero, page titles |
| **Section H2** | `text-3xl md:text-[2.6rem] leading-[1.1] font-semibold tracking-tight text-ivory` | `SectionHeader` |
| **Sub-section H3** | `text-lg–2xl font-medium text-ivory` | Cards, feature blocks |
| **Body** | `text-base md:text-lg leading-relaxed text-ivory-dim` | Intros, paragraphs |
| **Small body** | `text-sm leading-relaxed text-muted` | Card copy, FAQ answers |
| **Eyebrow** | `.eyebrow` — mono, `0.72rem`, `letter-spacing: 0.22em`, uppercase, `text-muted` | Section labels |
| **Tag / meta** | `font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted` | Tags, tier labels |
| **Stat value** | `font-mono text-3xl md:text-4xl text-ivory tracking-tight` | Metrics |
| **Wordmark** | `font-mono text-sm font-semibold tracking-[0.3em] text-ivory` | Logo lockup |

### Accent in headlines

Use `text-accent` on **one word or phrase** in hero/final CTA — never whole headlines.

---

## 4. Layout & spacing

### Container — `.shell`

```
max-width: 1240px
padding-inline: 1.5rem → 2.5rem (md) → 3rem (lg)
margin-inline: auto
```

All page content lives inside `.shell` (via `Section` or manual wrapper).

### Section rhythm — `Section`

```
Vertical padding: py-20 md:py-28
Bottom border: hairline-b (optional, default true)
Content → header first, then mt-12 for grids/lists
```

### Vertical spacing conventions

| Gap | Tailwind | Use |
|-----|----------|-----|
| Section header → content | `mt-12` | Standard block spacing |
| Eyebrow → title | `mb-5` (built into `Eyebrow`) | Label hierarchy |
| Title → intro | `mt-5` | Header stack |
| Intro → CTAs | `mt-8` | Hero / CTA bands |
| List items | `gap-3` – `gap-4` | Bullets, form fields |
| Grid internal | `p-6` – `p-8` / `md:p-10` | Card padding |

### Max-width for readability

- Hero / page intro: `max-w-3xl`
- Section headers (left): `max-w-3xl`
- Section headers (center): `max-w-2xl mx-auto`
- Long prose blocks: `max-w-3xl`

---

## 5. Grid & composition patterns

### A. Hairline grid (primary layout motif)

The signature ESTINAD grid — 1px gaps reveal `line` color between cells:

```html
<div class="grid gap-px md:grid-cols-3 hairline bg-line">
  <div class="bg-base p-7">…</div>
  <div class="bg-base p-7">…</div>
</div>
```

- Outer wrapper: `hairline bg-line`
- Cells: `bg-base` (or `bg-surface` on hover)
- Common column counts: 2, 3, 4; responsive breakpoints `sm:`, `md:`, `lg:`

### B. Alternating section bands

```
Section (base bg, default)
Section.bg-surface
Section (base)
Section.bg-surface
```

Creates vertical rhythm without heavy dividers.

### C. Two-column split (content + sidebar)

Used on resources, documentation, contact/demo forms:

```
grid gap-12 lg:grid-cols-[220px_1fr]   — sidebar nav
grid gap-12 lg:grid-cols-[1fr_360px]   — form + aside
```

### D. Pain vs. shift (solution pages)

Side-by-side contrast block:

- Left: muted pains with horizontal line bullets (`h-px w-4 bg-muted-2`)
- Right: accent-bordered panel (`border border-accent/30`) with filled diamond bullets (`h-1.5 w-1.5 rotate-45 bg-accent`)

### E. Blueprint backdrop

Hero and key sections:

```html
<section class="relative overflow-hidden hairline-b">
  <div class="absolute inset-0 grid-backdrop opacity-40" aria-hidden />
  <div class="absolute inset-0 bg-gradient-to-b from-base/40 via-base/10 to-base" aria-hidden />
  …
</section>
```

- `grid-backdrop`: 64px coarse grid
- `grid-fine`: 32px inset grid (visual concepts, monogram frame)

### F. Monogram frame

Square aspect container with corner nodes:

```
aspect-square hairline bg-surface/60 scan-line overflow-hidden
Corner markers: h-1.5 w-1.5 rotate-45 border border-line-strong at each corner
```

---

## 6. Component catalog

Source: `components/ui.tsx`

| Component | Purpose | Key classes |
|-----------|---------|-------------|
| `Shell` | Width-constrained wrapper | `.shell` |
| `Section` | Page section with padding + border | `shell py-20 md:py-28`, `hairline-b` |
| `Eyebrow` | Section label | `.eyebrow mb-5` |
| `SectionHeader` | Eyebrow + H2 + optional intro | `max-w-3xl`, align left/center |
| `Button` | Link-styled CTA | `h-11 px-5 text-sm`; variants below |
| `Card` | Bordered content block | `bg-surface hairline p-6 md:p-8` |
| `Stat` | Metric display | `font-mono text-3xl`, `hairline p-6` |
| `Tag` | Category / label chip | mono uppercase, `hairline px-2.5 py-1` |
| `NodeDivider` | Section break with diamond node | horizontal rules + `rotate-45` square |

### Button variants

| Variant | Style |
|---------|-------|
| **primary** | `bg-accent text-base border-accent hover:bg-accent-dim` |
| **secondary** | `bg-transparent text-ivory border-line-strong hover:border-ivory/40 hover:bg-surface-2` |
| **ghost** | `text-ivory-dim border-transparent hover:text-ivory` |

Footer CTAs use `h-12 px-6` (slightly larger than inline `Button`).

### PageHero (`components/PageHero.tsx`)

Standard inner page header:

1. Grid backdrop
2. Monogram (16px) + eyebrow row
3. H1
4. Optional intro (`text-lg text-ivory-dim`)
5. Optional primary + secondary CTA row (`mt-8 flex flex-wrap gap-3`)
6. Content wrapped in `.rise` entrance animation

---

## 7. Navigation patterns

### Header (`components/Header.tsx`)

| Behavior | Implementation |
|----------|----------------|
| Sticky | `sticky top-0 z-50 hairline-b bg-base/85 backdrop-blur-md` |
| Height | `h-16` |
| Desktop | Horizontal nav + hover mega-menus (`w-72 bg-surface hairline shadow-2xl`) |
| Mobile | Hamburger (3 lines → X via rotate), stacked accordion sections |
| Language switcher | Dropdown (`w-40`); preserves current path, swaps locale segment |
| Active state | Path prefix match → `text-ivory` vs `text-ivory-dim` |
| Primary CTA | Accent button in header rail |

**Mega-menu item:** label + optional description (`text-xs text-muted`).

**Logical properties for RTL:** `start-0`, `end-0`, `ps-3` on mobile sub-links.

### Footer (`components/Footer.tsx`)

Three bands:

1. **CTA band** — accent eyebrow, H2, primary + secondary buttons (`py-20 hairline-b`)
2. **Link matrix** — 6-column grid (logo spans 2 on mobile), mono column titles
3. **Legal strip** — copyright + privacy/terms links (`hairline-t`)

---

## 8. Interactive patterns

### Hover on linked cards

```html
class="group bg-base p-7 hover:bg-surface transition-colors"
<!-- trailing affordance -->
<span class="text-xs text-accent group-hover:translate-x-1 transition-transform">→</span>
```

In RTL, prefer logical motion or mirror arrow direction in Arabic copy.

### List bullets (visual language)

| Type | Mark |
|------|------|
| Positive / shift | `h-1.5 w-1.5 rotate-45 bg-accent` (filled diamond) |
| Neutral step | `h-1.5 w-1.5 rotate-45 border border-accent` (outline diamond) |
| Pain / negative | `h-px w-4 bg-muted-2` (horizontal rule) |
| Numbered workflow | `font-mono text-[0.65rem] text-muted-2` prefix `01`, `02`… |

### FAQ accordion

Native `<details>` / `<summary>`:

- `+` icon rotates 45° on open (`group-open:rotate-45`)
- Rows separated by `hairline-b` inside `hairline bg-base` container

### Forms (`components/LeadForm.tsx`)

| Element | Pattern |
|---------|---------|
| Layout | `grid gap-5 sm:grid-cols-2`; full-width fields `sm:col-span-2` |
| Label | `text-xs text-muted font-mono uppercase tracking-[0.18em]` |
| Input | `h-11 px-3 bg-surface hairline text-sm text-ivory` |
| Focus | `focus:border-ivory/40` (no ring — global `:focus-visible` handles keyboard) |
| Submit | Primary accent button, `self-start` |
| Success | Replace form with centered `hairline bg-surface p-8` confirmation |
| Privacy | `text-xs text-muted-2` + underlined link |

---

## 9. Motion

| Class | Effect | Duration / easing |
|-------|--------|-------------------|
| `.rise` | Fade + 8px translateY on enter | `0.6s cubic-bezier(0.2, 0.6, 0.2, 1)` |
| `.scan-line` | Horizontal brass shimmer sweep | `6s linear infinite` |
| Hover transitions | Color, border, transform | `transition-colors duration-200` |
| Card arrow nudge | `translate-x-1` on group hover | `transition-transform` |

**Reduced motion:** `.rise` and `.scan-line` disabled under `prefers-reduced-motion: reduce`.

**Do not add:** bounce, spring, parallax, or scroll-jacking.

---

## 10. Monogram & logo usage

| Asset | File | Treatment |
|-------|------|-----------|
| Monogram | `public/logo-pos.jpg` | `next/image` + `mix-blend-screen` on dark surfaces |
| Sizes | Contextual | Hero: full frame; header: `h-6 w-6`; inline: `h-4 w-4` |

**Rules**

- Do not add drop-shadow on monogram (breaks blend mode).
- Do not place monogram on light backgrounds without a dark plate.
- Corner diamond nodes (`rotate-45 border`) echo monogram geometry — use sparingly as framing accents.
- Wordmark always mono, wide tracking — never script or serif.

---

## 11. Page templates

### Homepage flow (13 sections)

1. Hero (split: copy + monogram frame)
2. Trust strip (`bg-surface`, mono sector list)
3. Problem grid (4 columns)
4. Platform explanation (stacked layers)
5. Product family (2×2 linked cards)
6. Industry solutions (3-col)
7. Why ESTINAD (3-col principles)
8. Shared advantage (pain vs. unified split)
9. Architecture (3-col + stat row)
10. Proof / case studies (3-col metrics)
11. Pricing teaser (4-col product links)
12. Final CTA (centered monogram + headline)
13. Footer

### Product page

`PageHero` → ICP + use cases (2-col) → visual concept (16:9 frame) → workflows (3-col) → features (3-col) → deploy + integrations (2-col) → `NodeDivider` → FAQ → CTA band.

### Pricing page

`PageHero` → logic note bar → 3-tier grid (emphasized tier: `border-y-2 border-y-accent`, `Recommended` tag at `end-6 top-6`) → included/paying split → FAQ → monogram CTA.

### Resource pages

`PageHero` → sidebar nav (220px) + article list (`gap-px hairline bg-line` rows) → optional sidebar demo CTA card.

---

## 12. Internationalization & RTL

| Concern | Pattern |
|---------|---------|
| Routing | Locale prefix: `/en`, `/fr`, `/ar` |
| `<html>` | `lang={meta.htmlLang}` + `dir={meta.dir}` |
| Arabic font | `html.locale-ar` → Cairo for sans and mono |
| Links | Always use `lp(locale, href)` helper |
| Layout | Tailwind logical properties: `start-`, `end-`, `ms-`, `me-`, `ps-`, `pe-`, `margin-inline` |
| Static assets | Proxy rewrites `/{locale}/_next/*` → `/_next/*` |

---

## 13. Accessibility

| Pattern | Implementation |
|---------|----------------|
| Focus | `:focus-visible` — `1px solid accent`, `outline-offset: 2px` |
| Decorative grids | `aria-hidden` on backdrop layers |
| Logo link | `aria-label="ESTINAD"` |
| Language switcher | `aria-label={switchLabel}` |
| Motion | Respects `prefers-reduced-motion` |
| Color contrast | Ivory on base, accent on base for CTAs |
| Forms | `<label>` wraps inputs; `required` where needed |

---

## 14. Do / Don't

### Do

- Use hairline grids for any multi-cell layout.
- Keep one primary CTA per viewport section.
- Alternate `base` / `surface` section backgrounds.
- Use eyebrows before every major headline.
- Use mono type for meta, tags, stats, and navigation column titles.
- Keep motion subtle and mechanical.

### Don't

- Add gradients, glassmorphism, or neon accents.
- Use rounded corners beyond `2px` (`--radius`).
- Stack more than two CTA styles in one row without clear hierarchy.
- Use stock photography or generic SaaS illustrations.
- Place the monogram on busy or light backgrounds.
- Use Geist for Arabic — always Cairo via `locale-ar`.

---

## 15. File map

| Concern | Location |
|---------|----------|
| Design tokens & utilities | `app/globals.css` |
| UI primitives | `components/ui.tsx` |
| Page header | `components/PageHero.tsx` |
| Global chrome | `components/Header.tsx`, `components/Footer.tsx` |
| Logo / monogram | `components/Monogram.tsx` |
| Forms | `components/LeadForm.tsx` |
| Homepage sections | `components/Home.tsx` |
| Locale layout | `app/[locale]/layout.tsx` |
| Copy / labels | `lib/dictionaries/*.ts` |

---

*Generated from the ESTINAD landing codebase. Extend by composing existing primitives — do not introduce parallel styling systems.*
