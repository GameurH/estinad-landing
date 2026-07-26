# ESTINAD — Strategic Website Blueprint

> The official flagship website blueprint for **ESTINAD**, a premium modular
> business operating system for operational businesses. The attached logo and
> branding system is the visual source of truth: a dark charcoal/near-black
> visual world, warm ivory foreground, muted neutral grays, one restrained CTA
> accent, and a geometric interlocking **E/T** monogram.

This repository contains both the strategic blueprint (this document) and a
complete, production-grade Next.js implementation of it — homepage, platform,
products, per-product pricing, solutions, resources, company, legal, sitemap,
robots, and a demo request flow.

---

## 1. Brand Interpretation

ESTINAD is positioned as a **category-defining B2B software company**: premium,
restrained, architectural, modular, enterprise-grade, and globally ambitious.
It is explicitly **not a POS**. It is a shared software platform with
vertical-specific products — infrastructure for the businesses that run the
real economy, starting in Algeria and scaling to MENA and global markets.

### What the brand must feel like
- **Architectural & modular** — a system built from solid, interlocking
  components, mirroring the monogram.
- **Premium & restrained** — dark palette, minimal elements, no decoration for
  its own sake.
- **Enterprise-grade** — technical grid, server/reliability cues, mission-
  critical language.
- **Infrastructure-grade** — stable, precise, permanent; not a startup aesthetic.

### The monogram as source of truth
The interlocking **E/T** is the primary visual asset. Its geometry dictates the
website system: uniform stroke weight → hairline borders; consistent gaps → the
spacing/padding system; blocky rectangular logic → a rigid grid and framed
containers; balanced proportions → a clean geometric sans pairing (Geist).

### Brand promise (internal)
> Run every operational business on one disciplined platform — faster, more
> reliable, for the long term.

---

## 2. Strategic Sitemap

The sitemap is designed for scalable multi-product navigation: one platform,
four products, five solution angles, a resource engine for SEO, and standard
company/legal surfaces.

```
Home                                  /

Platform
  ESTINAD OS                          /platform
  Architecture                        /platform/architecture
  Security                            /platform/security
  Deployment                          /platform/deployment

Products
  ESTINAD Retail                      /products/retail
  ESTINAD Retail — Pricing            /products/retail/pricing
  ESTINAD Restaurant                  /products/restaurant
  ESTINAD Restaurant — Pricing        /products/restaurant/pricing
  ESTINAD Clinic                      /products/clinic
  ESTINAD Clinic — Pricing            /products/clinic/pricing
  ESTINAD Cloud                       /products/cloud
  ESTINAD Cloud — Pricing             /products/cloud/pricing

Solutions
  For Retail                          /solutions/retail
  For Restaurants                     /solutions/restaurants
  For Clinics                         /solutions/clinics
  For SMEs                            /solutions/smes
  For Multi-Branch Businesses         /solutions/multi-branch

Resources
  Blog                                /resources/blog
  Guides                              /resources/guides
  Case Studies                        /resources/case-studies
  Documentation                       /resources/documentation
  FAQ                                 /resources/faq

Company
  About                               /company/about
  Vision                              /company/vision
  Partners                            /company/partners
  Careers                             /company/careers
  Contact                             /company/contact

Legal
  Privacy                             /legal/privacy
  Terms                               /legal/terms

Conversion
  Request a demo                      /demo
```

### Sitemap evaluation
- **Clean URLs** — every product and pricing route follows the required pattern
  (`/products/{slug}`, `/products/{slug}/pricing`).
- **No shared pricing page** — each product owns a dedicated pricing page;
  the homepage surfaces a *pricing teaser* that links out, not a unified table.
- **Platform vs. Products** — Platform explains the foundation (OS,
  architecture, security, deployment); Products sell vertical value. This
  separation protects the "shared platform" narrative from collapsing into
  "four unrelated apps."
- **Solutions** — re-enters the product family *by audience*, capturing
  intent-led SEO and ICP-specific messaging without duplicating product pages.
- **Resources** — the scalable content engine (awareness → consideration →
  decision) that feeds the SEO content map (Section 9).
- **Scalable** — adding a fifth product or a new solution is a data entry,
  not an architecture change (see `lib/site.ts`).

---

## 3. Navigation Architecture

### Primary nav (global header)
`Platform · Products · Solutions · Resources · Company` — each with a mega-menu
of its direct children. A persistent **Request a demo** CTA sits at the right;
**Contact** is a secondary text link.

### Mega-menu model
Each primary item expands a framed panel listing children with short
descriptions. This keeps the header restrained while exposing depth on hover
(desktop) and inline accordions (mobile).

### Footer navigation
A six-column matrix: brand lockup + tagline, Platform, Products, Solutions,
Resources, Company — plus a legal row (Privacy, Terms) and a final CTA band
above the matrix. The footer is the site's second navigation and a persistent
conversion surface.

### URL & breadcrumb convention
Breadcrumbs are expressed as **eyebrows** (e.g. `Products / ESTINAD Retail /
Pricing`) rather than a separate UI widget — consistent with the restrained,
mono-typeface labeling system. URLs mirror the breadcrumb exactly.

### Information hierarchy
1. What is it? (Home hero — under 5 seconds)
2. Why is it different? (Platform + shared-platform advantage)
3. What does it do for me? (Products + Solutions)
4. Can I trust it? (Architecture, reliability, proof)
5. What does it cost & how do I start? (Pricing teaser → product pricing → demo)

---

## 4. Homepage Wireframe

The homepage is a 13-section narrative. Each section below specifies objective,
headline, subheadline, CTA, visual direction, trust signal, and UX notes — and
is implemented in `components/Home.tsx`.

### 1) Hero
- **Objective:** Explain ESTINAD in under 5 seconds; capture the core value.
- **Headline (on-page):** "One platform. Every operational business."
- **Subheadline:** "ESTINAD is the shared operating system behind retail,
  restaurants, clinics, and the cloud. Not just a POS — a disciplined platform
  your business builds on for the long term."
- **CTA:** Primary `Request a demo →` / Secondary `See the platform`.
- **Visual direction:** Large ivory monogram over a blueprint grid backdrop in a
  hairline frame, with corner nodes and a restrained scan-line. Charcoal field.
- **Trust signal:** "Built in Algeria · Designed for MENA & global."
- **UX notes:** Hero is a 2-column grid on large screens; stacked on mobile.
  Monogram is the LCP focal point. Reduced-motion disables the scan-line.

### 2) Trust / credibility strip
- **Objective:** Establish seriousness without logos.
- **Headline:** "Trusted across operational sectors."
- **Subheadline:** none.
- **CTA:** none.
- **Visual direction:** Single hairline-banded row on a raised surface; sector
  labels in mono separated by faint slashes.
- **Trust signal:** Sector coverage: Retail / Restaurants / Clinics /
  Multi-branch operators / Resellers.
- **UX notes:** Replaces a logo wall (we don't fake customer logos). Evolves into
  real logos / partner marks over time.

### 3) Problem — fragmented operations
- **Objective:** Name the pain the audience lives in.
- **Headline:** "Operational businesses run on fragments."
- **Subheadline:** "Tools that don't talk, numbers that don't match, and systems
  that break under real conditions."
- **CTA:** none (narrative section).
- **Visual direction:** 4-up pain grid with mono numbering (01–04), hairline
  cells on a single hairline container.
- **Trust signal:** Specificity of pain signals "they understand us."
- **UX notes:** Numbered grid echoes the monogram's modular, blocky logic.

### 4) ESTINAD OS platform explanation
- **Objective:** Define the platform; separate it from "POS."
- **Headline:** "One operating system. Many businesses. No seams."
- **Subheadline:** "A shared foundation: a single ledger, identity, and sync
  engine. Vertical products run on top."
- **CTA:** `Explore the platform →`.
- **Visual direction:** A 3-layer stack diagram — Vertical products → Shared
  services → ESTINAD OS — framed and hairlined.
- **Trust signal:** "Every product inherits the platform's reliability."
- **UX notes:** The stack visual is the single most important explanatory asset
  on the site; it proves "unified, not bolted."

### 5) Product family overview
- **Objective:** Show the family is unified by one platform.
- **Headline:** "Four products. One platform. One ledger."
- **Subheadline:** "Each product is focused on an industry and unified by the
  platform beneath it."
- **CTA:** implicit (cards link to product pages).
- **Visual direction:** 2×2 product cards, mono glyph + name + one-liner + tags,
  arrow nudges on hover.
- **Trust signal:** "Start with one. Add another without re-platforming."
- **UX notes:** Identical card treatment across all four products enforces
  "one family."

### 6) Industry solutions
- **Objective:** Re-enter by audience/structure.
- **Headline:** "Built for how your business actually runs."
- **Subheadline:** "ESTINAD meets each operator where they are."
- **CTA:** `View solution →` per card.
- **Visual direction:** 3-up solution cards.
- **Trust signal:** Audience-specific language.
- **UX notes:** Five solutions (Retail, Restaurants, Clinics, SMEs, Multi-branch)
  each link to a focused page.

### 7) Why ESTINAD
- **Objective:** Crystallize the differentiation.
- **Headline:** "Discipline, not noise. Platform, not apps."
- **Subheadline:** "For owners who want their software to be as serious about
  the business as they are."
- **CTA:** none.
- **Visual direction:** 6-up principle grid, each with a rotated-square node
  (monogram-derived).
- **Trust signal:** Principles like "infrastructure-grade," "sync-tolerant,"
  "enterprise-ready."
- **UX notes:** One line per principle — crisp, non-generic, no fluff.

### 8) Shared-platform advantage
- **Objective:** Make the platform vs. apps contrast concrete.
- **Headline:** "The difference between apps and an operating system."
- **Subheadline:** none.
- **CTA:** none.
- **Visual direction:** Two-column comparison — "Fragmented apps" (muted,
  hairlines) vs. "ESTINAD platform" (accent-bordered, ivory). The right column
  is visually weighted.
- **Trust signal:** Specific contrast claims.
- **UX notes:** This is the persuasion fulcrum between problem and proof.

### 9) Architecture / reliability / control
- **Objective:** Signal enterprise readiness and reliability.
- **Headline:** "Built to not fail the businesses that depend on it."
- **Subheadline:** "Engineered for the conditions real operators face."
- **CTA:** `Read more →` per card to platform sub-pages.
- **Visual direction:** 3-up cards (Architecture, Security, Deployment) + a
  3-stat row beneath.
- **Trust signal:** Stats: 99.9% target availability, <1 day to stand up a
  branch, 1 ledger across everything.
- **UX notes:** Stats are target/illustrative and clearly framed as such.

### 10) Proof / case-study framework
- **Objective:** Provide credible, pattern-based proof.
- **Headline:** "Operators who stopped reconciling and started running."
- **Subheadline:** "Illustrative outcomes from the kind of businesses ESTINAD is
  built for."
- **CTA:** `See case studies →`.
- **Visual direction:** 3-up cards with a large mono metric, sector tag, result
  headline, and short body.
- **Trust signal:** Sector + branch count + concrete metric per card.
- **UX notes:** Cards follow a repeatable framework (sector → metric → result →
  story) so real case studies slot in later without redesign.

### 11) Pricing teaser
- **Objective:** Reduce pricing anxiety; route to per-product pricing.
- **Headline:** "Per product. Per branch. No surprises."
- **Subheadline:** "Every ESTINAD product has its own pricing."
- **CTA:** `View pricing →` per card.
- **Visual direction:** 4-up starting-price cards linking to each product's
  pricing page.
- **Trust signal:** Transparent starting points.
- **UX notes:** Deliberately *not* a unified table — reinforces the
  "per-product pricing" rule.

### 12) Final CTA
- **Objective:** Convert intent into a demo request.
- **Headline:** "Build your business on one disciplined platform."
- **Subheadline:** "See ESTINAD on your operations."
- **CTA:** `Request a demo →` / `Talk to the team`.
- **Visual direction:** Centered monogram + headline over a faded blueprint
  grid; charcoal field.
- **Trust signal:** "We'll map your branches, products, and workflows."
- **UX notes:** Low-pressure, specific promise about what happens next.

### 13) Footer
- **Objective:** Second navigation + persistent conversion + legal.
- **Headline (CTA band):** "Run every branch on one disciplined system."
- **CTA:** `Request a demo →` / `Explore products`.
- **Visual direction:** CTA band → 6-column link matrix → legal row.
- **Trust signal:** "Built in Algeria, designed for MENA and global markets."
- **UX notes:** Footer is global (in `layout.tsx`), so it appears on every page.

---

## 5. Product Page Framework

One reusable framework drives **ESTINAD Retail, Restaurant, Clinic, and Cloud**
(see `components/ProductPage.tsx`, data in `lib/site.ts`). Adding a product is a
data entry; the page renders itself.

### Shared structure (every product page)
1. **Page hero** — eyebrow (`Products / {name}`), one-liner headline, positioning
   intro, CTA (`Request a demo`) + `View pricing`.
2. **ICP + top use cases** — two columns: "Who it's for" and "The work it
   replaces first."
3. **Visual concept** — an illustrative, branded product UI frame (sidebar +
   KPI cards + a bar chart), over a fine grid, clearly labeled "Illustrative
   interface concept." No stock screenshots.
4. **Key workflows** — 3 numbered flows, each a clean ordered sequence (e.g.
   Sell → Replenish → Reconcile).
5. **Feature clusters** — 3 clusters, each with a one-line description and 4
   points. Organized by what the business *does*, not by feature lists.
6. **Deployment options** — list (Cloud / On-premise / Hybrid) framed in cards.
7. **Integrations** — tag cloud of hardware and channels.
8. **FAQ** — 3 owner-first questions with direct answers.
9. **CTA** — product-specific close: "Put {Product} on your operations" +
   `Request a demo` + `View pricing`.

### Per-product positioning (summary)
- **ESTINAD Retail** — the operating system for clothing and multi-category
  retail: inventory, POS, and store performance in one ledger.
- **ESTINAD Restaurant** — the operating system for restaurants: kitchen, floor,
  and orders in one calm, fast flow.
- **ESTINAD Clinic** — the operating system for clinics: scheduling, records,
  and billing in one quiet, compliant system.
- **ESTINAD Cloud** — the controlled backbone for every ESTINAD product:
  hosting, sync, backup, and access in one place.

### Pricing pages (per product)
Each product has a dedicated pricing page
(`/products/{slug}/pricing`, `components/PricingPage.tsx`) with:
- A pricing-logic note ("per branch, not per seat").
- A 3-tier grid (Single / Multi / Enterprise — or Operator / Organization /
  Enterprise for Cloud) with one emphasized tier.
- "What's included at every tier" + "What you're paying for."
- A pricing FAQ.
- A closing CTA to demo / sales.

Pricing tiers are illustrative (DZD) and structured to scale with branches,
not seats — reinforcing the platform model.

---

## 6. Copy System

Tone: premium, direct, strategic, confident, crisp, non-generic, not overhyped.

### 10 homepage hero headline options
1. One platform. Every operational business.
2. The operating system for operational businesses.
3. Not just a POS. The platform beneath your business.
4. Run every branch on one disciplined system.
5. One ledger. Every product. Every branch.
6. Infrastructure for the businesses that run the real economy.
7. Modular by design. Unified by one platform.
8. Stop reconciling tools. Start running a business.
9. Built in Algeria. Designed for MENA and the world.
10. The serious software for serious operators.

### 10 homepage subheadline options
1. ESTINAD is the shared operating system behind retail, restaurants, clinics,
   and the cloud — a disciplined platform your business builds on for the long
   term.
2. Four vertical products on one platform: a single ledger, identity, and sync
   engine that keeps every branch running.
3. Replace scattered POS, spreadsheets, and messaging with one trusted system
   designed for real conditions.
4. Start with one product. Add another without re-platforming. Grow on the same
   foundation for years.
5. Engineered for unstable connectivity, growing teams, and the cost of getting
   numbers wrong.
6. A shared business operating system — purpose-built for each industry,
   unified underneath.
7. Enterprise-grade discipline without enterprise complexity. Built for SMEs
   today, ready for enterprises tomorrow.
8. Faster closes. Matching numbers. Calm shifts. One platform.
9. Built where the conditions are hardest, so it holds up everywhere.
10. Mission-critical business software. Faster. More reliable.

### Primary CTA options
- Request a demo →
- See ESTINAD on your operations
- Book a walkthrough
- Map your business to ESTINAD
- Start with a demo →

### Secondary CTA options
- See the platform
- Explore products
- View pricing
- Talk to the team
- Read the docs
- See case studies

### Platform positioning statements
- ESTINAD OS is the shared operating system behind every ESTINAD product — one
  ledger, one identity, one sync engine.
- Vertical products run on top of the platform — purpose-built for each
  industry, unified underneath.
- One platform, not bolted-together apps. Add products and branches without
  re-platforming.
- Built for real connectivity: branches keep working offline, then reconcile
  cleanly.
- The system a business builds on, not out of.

### Product one-liners
- **ESTINAD Retail** — The operating system for clothing and multi-category
  retail: inventory, POS, and store performance in one ledger.
- **ESTINAD Restaurant** — The operating system for restaurants: kitchen, floor,
  and orders in one calm, fast flow.
- **ESTINAD Clinic** — The operating system for clinics: scheduling, records,
  and billing in one quiet, compliant system.
- **ESTINAD Cloud** — The controlled backbone for every ESTINAD product:
  hosting, sync, backup, and access in one place.

### Trust-building copy
- Built in Algeria, designed for MENA and global markets.
- Trusted across operational sectors — retail, restaurants, clinics,
  multi-branch operators, and resellers.
- Engineered for the conditions real operators face — unstable connectivity,
  growing teams, and the cost of getting numbers wrong.
- Role-based access, audit trail, and residency for when growth demands real
  control.
- One number, everywhere — across products and branches.

### Footer copy
- **Tagline:** Mission-critical business software. Faster. More reliable.
- **Sub-line:** Built in Algeria, designed for MENA and global markets.
- **CTA band headline:** Run every branch on one disciplined system.
- **CTA band subtext:** Build on one platform — start with a product, scale to a
  portfolio.

### "Why ESTINAD" messaging
- Discipline, not noise. Platform, not apps.
- Infrastructure-grade: built to run mission-critical operations, not to demo
  well. Stability is the feature.
- Modular by design: start with one product, add another as you grow.
- Sync-tolerant: designed for real connectivity, not ideal connectivity.
- One ledger: sales, stock, schedules, and billing post to a single source of
  truth.
- Algerian first, enterprise-ready: built for local operations and payments,
  with SSO, audit, and residency for when you need them.

### Architecture and reliability messaging
- Built as one platform, not bolted-together apps.
- One shared data model: products, parties, documents, and money mean the same
  thing everywhere.
- An offline-tolerant sync engine reconciles on-premise work with the cloud, so
  outages never become lost transactions.
- Encrypted in transit and at rest — including backups.
- Least privilege by default; every meaningful action logged and exportable.
- Continuous backup with point-in-time recovery: mistakes are reversible, not
  terminal.
- Cloud, on-premise, or hybrid — your reality, your choice.

---

## 7. Visual Direction

### Art direction
A dark, architectural, enterprise-grade visual world. The monogram is the hero
asset; everything else is restrained around it. No gradients-as-decoration, no
neon, no childish icons, no stock photography. The aesthetic reads like a
technical drawing or a blueprint — precise, modular, permanent.

### Layout philosophy
A rigid grid with framed, hairlined containers. The logo's blocky rectangular
logic becomes the layout: clear containers, modular sections, consistent
gutters. Composition echoes the monogram's interlocking bars — stacked layers,
mirrored hooks, uniform spacing.

### Section rhythm
Alternating surface tones: `base` (near-black) and `surface` (raised) sections
alternate to create rhythm without ornament. Every section is separated by a
hairline (`hairline-b`). Generous vertical padding (`py-20 md:py-28`) gives the
content room to breathe and feel premium.

### Spacing system
- Container: `max-w-[1240px]` with responsive horizontal padding.
- Section padding: `5rem` mobile / `7rem` desktop vertical.
- Grid gaps expressed as `1px` hairlines on a `bg-line` parent — cells sit on
  `bg-base` — producing a continuous, blueprint-like grid without heavy borders.
- The monogram's "consistent gaps" principle drives all spacing: predictable,
  mathematically balanced, never arbitrary.

### Border and shadow style
- **Borders:** 1px hairlines in `rgba(237,231,217,0.10)` — barely there.
- Stronger hairlines (`0.18` alpha) for emphasis and hover states.
- **Corners:** near-square (`2px` radius) to honor the 90° monogram geometry.
- **Shadows:** used sparingly — only on floating menus — dark, low-spread,
  never the soft SaaS "card shadow."

### Motion principles
Restrained and mechanical, never bouncy.
- Hero content rises once (`translateY(8px)` → `0`, 0.6s, custom easing).
- A single slow scan-line sweeps the hero monogram frame (6s linear).
- Hover transitions are color/position only, ~200ms.
- `prefers-reduced-motion` disables all motion.

### Icon direction
No childish SaaS icons. Instead: typographic and geometric cues — mono
numbering (`01`, `02`), rotated-square nodes (a monogram-derived motif), short
mono glyphs (`ER`, `RS`, `CL`, `CD`) as product markers, and tags. Where a
concept needs an icon, it is built from the same hairline geometry as the
monogram.

### Product-card treatment
Identical across the family: mono glyph + name + one-liner + tags, on a
hairlined cell, with an arrow that nudges right on hover. Equal treatment =
one family.

### Screenshot treatment
No stock screenshots. Each product page shows an **illustrative interface
concept** — a branded, hairlined frame with a faux sidebar, KPI cards, and a
bar chart, over a fine grid, labeled "Illustrative interface concept." It
communicates *structure* and *calm* without faking a product.

### How the monogram appears across the site
- **Hero:** large, centered in a framed grid panel — the LCP focal point.
- **Header/footer:** small lockup with the ESTINAD wordmark.
- **Section accents:** small ivory or accent monograms as visual anchors.
- **404 / final CTA:** medium monogram as a calm, brand-consistent anchor.
- **Rule:** the monogram is never modified, gradient-filled, stretched, or
  recolored beyond ivory/accent — its power comes from consistency.

### Color tokens (implemented in `globals.css`)
- `--color-base` `#0a0a0b` — page background
- `--color-surface` `#101012` / `--color-surface-2` `#141417` — raised surfaces
- `--color-ivory` `#ede7d9` — primary foreground / logo
- `--color-ivory-dim` `#c9c3b5` — secondary text
- `--color-muted` `#8c8a83` / `--color-muted-2` `#5f5d57` — meta / faint
- `--color-accent` `#c2a878` — the single restrained CTA accent (antique brass)
- `--color-line` / `--color-line-strong` — hairlines

### Typography
- **Geist Sans** (geometric, clean) for headings and body.
- **Geist Mono** for eyebrows, labels, metrics, and tags — the "blueprint"
  voice. Letter-spacing 0.18–0.22em, uppercase, for section labels.

---

## 8. Conversion Strategy

### Primary CTA path
`Homepage hero → /demo` (and every page hero + final CTA → `/demo`).
The demo form is low-friction: name, business, email, phone, sector (radio),
branches, current tools, and an optional message.

### Secondary CTA path
`See the platform → /platform → product/solution exploration → /demo`.
For visitors who need to understand before they act.

### Demo booking path
`/demo` posts to `/api/demo` (acknowledges; in production this persists to a
CRM). On submit, a success state replaces the form. The page sets expectations:
"What you get" — a walkthrough mapped to sector and branch count, a deployment
plan, scoped pricing, and a migration path.

### Low-friction lead capture path
The `/company/contact` form reuses the same endpoint with a "reason" selector
(Demo / Sales / Partnership / Support / Careers / Other) — capturing intent
across audiences without a separate tool stack.

### Trust-building sequence
1. Hero ("Built in Algeria, designed for MENA & global").
2. Trust strip (sector coverage).
3. Problem (we understand your pain).
4. Platform explanation (we have a real answer).
5. Shared-platform advantage (why it's different).
6. Architecture / reliability / control + stats (enterprise readiness).
7. Proof framework (credible, repeatable).
8. Pricing teaser (transparent starting points) → product pricing.
9. Final CTA + footer CTA band.

### Pricing page logic
- One page **per product** (no shared pricing) — required by the brief.
- 3 tiers each, with one **emphasized** tier (accent border, "Recommended").
- Pricing scales with **branches/locations/clinics**, not seats — reinforces
  the platform model and reduces friction for multi-branch buyers.
- Enterprise tier present on every product → signals enterprise readiness
  without gating it behind a separate site.
- A pricing FAQ reduces objections; a closing CTA routes undecided buyers to
  demo / sales.

### Footer CTA logic
The footer is global and always present. A CTA band ("Run every branch on one
disciplined system") sits above the link matrix on every page — a persistent
conversion surface for visitors who scroll to the bottom of any page.

### Resource-to-demo journey
`Resources (blog/guides/case studies) → sidebar CTA "Request a demo" → /demo`.
Every resource page has a persistent demo CTA in its sidebar, plus a closing
CTA where relevant — content earns trust, the sidebar captures it.

---

## 9. SEO Content Map

A scalable map organized by funnel stage. Top-level pages exist today;
lower-funnel and content pages are produced over time on the same architecture.

### Awareness (top of funnel)
- **Educational blog:** "Why a POS is not an operating system," "Designing for
  unstable connectivity," "The one-ledger principle," "Margin is a system, not
  a number."
- **Glossary / documentation opportunities:** "business operating system,"
  "offline-tolerant sync," "variant matrix," "food costing," "role-based
  access," "data residency." Each term → a documentation/glossary entry that
  internally links to relevant product/solution pages.
- **Regional/brand:** "Built in Algeria for MENA operators" — brand + region
  authority.

### Consideration (middle of funnel)
- **Industry landing pages (Solutions):** `/solutions/retail`,
  `/solutions/restaurants`, `/solutions/clinics`, `/solutions/smes`,
  `/solutions/multi-branch` — capture "{industry} software" intent.
- **Use-case pages (to build):** "multi-branch inventory," "offline POS,"
  "clinic scheduling and billing," "central menu management," "consolidated
  reporting across branches."
- **Guides:** "Moving a retail business onto one ledger," "Standing up a
  restaurant on ESTINAD," "Digitizing a clinic without disrupting care,"
  "Adding a second branch the right way," "Connectivity planning for Algerian
  branches."
- **Comparison pages (to build):** ESTINAD vs. generic POS, ESTINAD vs.
  spreadsheets + POS, "all-in-one platform vs. best-of-breed apps," ESTINAD vs.
  {local competitors}. Framed honestly and on-message.

### Decision (bottom of funnel)
- **Core commercial pages:** `/products/{retail|restaurant|clinic|cloud}` and
  each `/products/{slug}/pricing` — the BOFU conversion surfaces.
- **Platform pages:** `/platform`, `/platform/architecture`,
  `/platform/security`, `/platform/deployment` — trust for evaluators.
- **Case studies:** `/resources/case-studies` — proof framework with concrete
  metrics, ready to absorb real stories.
- **Documentation:** `/resources/documentation` — API, setup, operations
  (developer + buyer confidence).
- **FAQ:** `/resources/faq` — objection handling across general, reliability,
  and pricing/rollout.

### Internal linking model
- Homepage → Platform, Products, Solutions, Resources, Demo.
- Platform pages ↔ Product pages (shared foundation ↔ vertical value).
- Solution pages → their related Products (cross-sell within one platform).
- Product pages → their Pricing page and to related Solutions.
- Resource pages → Demo (sidebar CTA) and to relevant Product/Solution pages.
- Sitemap (`/sitemap.xml`) and robots (`/robots.ts`) are implemented.

### Metadata model
- Root metadata in `app/layout.tsx` (title template, OG, Twitter, keywords).
- Per-page `metadata` / `generateMetadata` on every route.
- Clean URLs mirror the breadcrumb and the sitemap exactly.

---

## 10. Final Recommendations

1. **Ship the platform story first.** The single most important job is making
   "ESTINAD is one platform, not four apps" land in seconds. Protect the
   platform/product separation in navigation and copy at all costs.
2. **Replace illustrative proof with real case studies ASAP.** The proof
   framework is built to absorb them — add real sector + branch + metric cards
   without redesign, then add a `/resources/case-studies/{slug}` template.
3. **Localize for MENA deliberately.** Add Arabic (and French) locales with the
   same restrained design system; the architecture is route-based and ready for
   `app/[locale]/...`. Keep the mono wordmark untranslated.
4. **Wire the demo endpoint to a CRM.** `/api/demo` currently acknowledges;
   connect it to a CRM/email pipeline and add ownership routing by sector and
   reason.
5. **Build the comparison and use-case pages next.** They are the highest-
   leverage missing SEO surfaces (Section 9) and reuse the existing components.
6. **Keep the accent to one job.** The brass accent is reserved for primary CTAs
   and key emphasis. Resist the urge to add a second accent — restraint *is* the
   brand.
7. **Never dilute the monogram.** No gradients, no recolor beyond ivory/accent,
   no decorative treatments. Its power is consistency.
8. **Measure against the goals.** Track 5-second comprehension (hero clarity),
   demo request volume, per-product pricing → demo conversion, and resource →
   demo journey contribution.
9. **Treat the design system as the product.** Tokens, components, and the data
   model in `lib/site.ts` make this scalable. Adding products, solutions, or
   pages is configuration, not engineering.
10. **Stay infrastructure-grade.** Every decision — copy, motion, color, layout
    — should pass the test: "Does this feel stable, precise, and long-term?"
    If not, cut it.

---

## Implementation notes

- **Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript.
- **Data model:** `lib/site.ts` is the single source of truth for products,
  solutions, platform pages, pricing, and navigation.
- **Reusable components:** `Monogram`, `ui` (Shell/Section/Button/Card/Stat/Tag),
  `Header`, `Footer`, `PageHero`, `Home`, `ProductPage`, `PricingPage`,
  `ResourceSection`.
- **Routes:** every URL in Section 2 is implemented; dynamic routes use
  `generateStaticParams` for static rendering.
- **SEO:** `app/sitemap.ts`, `app/robots.ts`, per-page metadata, OG/Twitter.
- **Conversion:** `/demo` and `/company/contact` forms post to `/api/demo`.
- **Run:** `npm run dev` (dev), `npm run build` (production), `npm run lint`.
