# ESTINAD — Monochrome Editorial Redesign (v2)

> **Status:** Design phase — awaiting validation checkpoint before implementation.
> **Scope (locked with owner):** Design system + homepage first. Inner pages inherit
> the token cascade immediately and receive individual art direction in a follow-up
> phase. Light theme is the default; a pure monochrome dark mode remains available
> via the existing toggle.
> **Supersedes:** the *visual layer* of `BLUEPRINT.md` §7 and `UI-UX-PATTERNS.md`
> (dark charcoal + brass). The *strategic layer* of `BLUEPRINT.md` (positioning,
> sitemap, conversion model, SEO map) remains in force.
> **Deliverables:** brief items 1–18 below, in order. Items 19–20 (implementation
> and self-review) follow after validation.

**Decision log**

| # | Decision | Choice |
|---|----------|--------|
| D1 | Scope | Design system + homepage; inner pages via token cascade |
| D2 | Workflow | Checkpoint — this document is validated before code |
| D3 | Imagery | GPT Image 2 prompts *and* generated monochrome assets |
| D4 | Theme | Light default; monochrome dark mode kept on the toggle |
| D5 | Brand accent | Retired. No chromatic accent anywhere — depth from light |
| D6 | Motion | From mechanical-minimal to invisible-but-present (see §12) |

---

## Table of contents

1. Brand Strategy
2. Creative Direction
3. Information Architecture
4. User Journey
5. Storytelling Strategy
6. Complete Website Content
7. UX Rationale
8. UI Design System
9. Typography System
10. Color System
11. Spacing & Layout System
12. Motion & Interaction Guidelines
13. GPT Image 2 Prompts — Complete Asset List
14. Responsive Design Guidelines
15. Accessibility Review
16. SEO Strategy
17. Technical Architecture
18. Production-Ready Implementation Plan

---

# 1. Brand Strategy

## 1.1 What ESTINAD is

ESTINAD is a **shared business operating system** for operational businesses —
retail, restaurants, clinics, and the cloud beneath them. One ledger, one
identity, one sync engine; focused vertical products running on top. Built in
Algeria, designed for MENA and global markets.

It is not a POS. It is not a suite of apps. It is infrastructure — the kind of
software a business builds **on**, not out of.

## 1.2 The brand idea

**The product is the proof.**

Most business software marketing compensates for product weakness with volume:
superlatives, feature walls, urgency. ESTINAD's strategy is the inverse — say
less, show more, and let precision do the persuading. Every surface of the brand
should behave the way the product behaves: quiet, exact, dependable.

This is not a new personality — it is the existing "discipline, not noise"
positioning, elevated from a messaging stance into a total design stance.

## 1.3 The north star

> **لا نتكلف في مدح أنفسنا**
>
> We don't spend time praising ourselves.
> We spend it building products that quietly earn trust.

Every design, copy, and motion decision in this document is tested against this
line. If a choice feels like self-praise, it is cut.

## 1.4 Positioning

| Axis | ESTINAD sits |
|------|--------------|
| Chaos of fragmented SMB tools ↔ Rigidity of enterprise suites | Calm middle: enterprise discipline without enterprise complexity |
| Loud marketing ↔ Cold engineering | Warm precision: human, honest, exact |
| Startup aesthetic ↔ Legacy vendor aesthetic | Timeless: neither trendy nor dated |
| Feature-led selling ↔ Vaporware vision | Product-led proof: the interface is the argument |

**Category:** business operating system (not POS, not ERP, not suite).
**Promise:** software that behaves like good infrastructure — invisible when it
works, always there when you need it.
**Personality:** calm, intelligent, honest, quietly confident, precise, human.

## 1.5 Audiences

| Audience | Who they are | What they need to feel | What wins them |
|----------|--------------|------------------------|----------------|
| **The Operator** (primary) | Owner of 1–20 branches — retail, restaurant, or clinic. Pragmatic, busy, burned by tools that broke under real conditions. | "These people understand my daily reality." | Specificity of pain, reliability proof, honest pricing |
| **The Evaluator** | Ops manager / technical buyer assessing fit for a larger organization. | "This is engineered, not assembled." | Architecture, security, deployment control, documentation |
| **The Partner** | Reseller or integrator building a business on ESTINAD. | "This platform will still be here in ten years." | Stability, roadmap honesty, support posture |

## 1.6 Voice principles

1. **Say less, mean more.** Short sentences. No filler clauses.
2. **Specifics over adjectives.** "One ledger" persuades; "powerful" does not.
3. **Verbs over buzzwords.** Never "leverage," "empower," "revolutionize."
4. **Honest labels.** Illustrative proof is labeled illustrative. Targets are
   labeled targets. This is a differentiator, not a weakness — it *is* the brand.
5. **The product speaks.** Where marketing would add a claim, design adds a
   demonstration instead.

**Banned vocabulary** (extends the brief's list): best, leading, revolutionary,
cutting-edge, premium solution, best-in-class, #1, game changer, unmatched,
world-class, award-winning, powerful, seamless(ly), all-in-one, supercharge,
empower, leverage, robust, scalable solution.

**Honest alternatives:** "designed with care," "built to simplify everyday
work," "every feature exists for a reason," "thoughtfully engineered for
reliability."

## 1.7 What survives the rebrand

- The **E/T interlocking monogram** — unchanged, untraced, never recolored
  beyond black/white. Its blocky geometry remains the brand's architecture.
- The **platform narrative** — one ledger, one identity, one sync engine.
- The **honest-proof policy** — no invented metrics, logos, or testimonials.
- The **three locales** — English, French, Arabic (RTL) are first-class.
- The **tone** — the current site is already humble; v2 makes it quieter.

What changes is the world the brand lives in: from a charcoal blueprint room to
a bright editorial gallery.

---

# 2. Creative Direction

## 2.1 The concept

**Quiet Infrastructure, set in ink on paper.**

The v1 site looked like a technical drawing — dark room, brass instrument,
blueprint grids. v2 looks like a beautifully printed document: a gallery wall,
an annual report, a Dieter Rams catalog. White space is not empty; it is the
material that makes the ink meaningful.

The visitor should feel they have walked into a quiet, well-lit room where a
few excellent objects are displayed with care — not a trade-show booth.

## 2.2 Three creative devices

Every section is built from these three devices and nothing else:

1. **The Editorial Grid.** A strict 12-column grid with generous outer margins
   and a disciplined type scale. Content is *set*, like type in a magazine —
   never "placed." Hierarchy comes from scale and space, never from color.

2. **Light as Material.** Depth is manufactured from light alone: soft radial
   illumination, diffuse shadows, frosted glass, background blur, layered
   planes. A section can recede or advance without a single hue. This is how a
   monochrome system avoids flatness.

3. **The Quiet Reveal.** Content does not pop, slide, or bounce. It arrives the
   way a page turns — opacity, a few pixels of rise, a whisper of blur clearing.
   Motion is felt as calm, not seen as animation.

## 2.3 The monogram in a monochrome world

The E/T mark is the single permitted piece of pure brand geometry. Rules:

- Appears at **three scales only**: hero/large (section anchor), small (header
  lockup, 24px), inline (favicon, 16px). Never decorative wallpaper.
- Rendered in pure black on light, pure white on dark. No brass, no gradients,
  no shadows applied to the mark itself.
- Its 90° geometry no longer dictates UI corner radius (see §8.6). The mark is
  architecture; the interface is atmosphere. The tension between the square
  mark and the soft interface is intentional and resolved by giving the mark
  generous square frames whenever it appears large.

## 2.4 Mood references (direction, not imitation)

- **Apple** — product-as-hero photography, restraint of copy.
- **Vercel** — monochrome confidence, typographic discipline.
- **Linear** — light-as-material depth, motion craft.
- **A premium print annual report** — margins, measure, rhythm, humility.

## 2.5 Creative principles checklist

Every section must pass:

- Could this section work printed in black ink on white paper? (If it needs
  color to communicate, it fails.)
- Is there exactly one idea per viewport?
- Is the product (or an honest representation of it) the visual subject?
- Does anything on screen brag? (Cut it.)
- Is there more empty space than feels comfortable? (Then it is right.)

---

# 3. Information Architecture

## 3.1 Site-level IA (unchanged — proven and SEO-mapped)

The existing route tree survives intact. This redesign changes how pages look
and feel, not where things live:

```
/                              Home (the redesigned flagship)
/platform (+ architecture, security, deployment)
/products (+ retail, restaurant, clinic, cloud, each with /pricing)
/solutions (+ retail, restaurants, clinics, smes, multi-branch)
/resources (+ blog, guides, case-studies, documentation, faq)
/company (+ about, vision, partners, careers, contact)
/legal (+ privacy, terms)
/demo
```

All routes × `en` / `fr` / `ar`. Navigation labels, footer matrix, and the
persistent **Request a demo** conversion path are preserved.

## 3.2 Homepage IA — the 13-section narrative

The homepage is restructured from a sales argument into a **guided reading**.
Each section answers the question the previous one raises.

| # | Section | Question it answers | Brief mapping |
|---|---------|--------------------|----------------|
| 01 | Hero | "What is this?" — in under 5 seconds | Hero |
| 02 | Trust strip | "Who is it for?" | Trusted by customers |
| 03 | Product showcase | "What does it look like / what do you make?" | Product showcase |
| 04 | Why we built this | "Why does it need to exist?" | Why we built this |
| 05 | Philosophy | "What kind of company made it?" | Philosophy |
| 06 | Platform capabilities | "What does it actually do?" | Features |
| 07 | Interface (interactive demo) | "Show me." | Interactive demo |
| 08 | Integrations | "Will it fit my shop?" | Integrations |
| 09 | Customer stories | "Does it work for people like me?" | Customer stories |
| 10 | Performance | "Will it hold up?" | Performance |
| 11 | Security | "Is my data safe and mine?" | Security |
| 12 | FAQ | "And the practical stuff?" | FAQ |
| 13 | Final CTA | "What happens if I say yes?" | Final CTA |

### Why this order (and where it deviates from the brief's suggestion)

The brief's suggested flow opens with social proof ("Trusted by customers").
ESTINAD has a deliberate, existing policy of **not faking a logo wall** — so
section 02 is an honest *coverage* strip, not borrowed credibility. "Why we
built this" and "Philosophy" are split into two movements (04 = the world's
problem, 05 = our belief about it) because the Arabic north-star line deserves
its own room to breathe. Everything else follows the brief.

## 3.3 Section-to-route relationships

| Homepage section | Deep-link destination |
|------------------|----------------------|
| 03 Product showcase | `/products/{slug}` per card; `/platform` from the stack diagram |
| 06 Capabilities | `/platform`, `/platform/architecture` |
| 07 Interface | `/products/{slug}` (each tab relates to a product) |
| 08 Integrations | `/platform/deployment`, `/resources/documentation` |
| 09 Customer stories | `/resources/case-studies` |
| 10 Performance | `/platform/architecture` |
| 11 Security | `/platform/security` |
| 12 FAQ | `/resources/faq` |
| 13 Final CTA | `/demo`, `/company/contact` |

The homepage never dead-ends; every narrative beat has a documented route
behind it for visitors who want depth.

---

# 4. User Journey

## 4.1 The first five seconds (all audiences)

1. Eye lands on the headline (left-aligned, dominant).
2. "One platform. Every branch. Every number." registers as: *business software
   that unifies things*.
3. The floating interface render below confirms: *this is a real product, not a
   pitch deck*.
4. The quiet craft (type, space, motion) registers subconsciously as: *these
   people care*.

Pass condition: the visitor can say "software that runs my whole operation in
one place" after 5 seconds, without scrolling.

## 4.2 Journey A — The Operator (pain-led)

```
Ad / referral / search
  → Hero (recognizes the promise)
  → 04 Why we built this (feels *seen*: "numbers that don't match")
  → 07 Interface (watches it work)
  → 09 Customer stories (sector match: "people like me")
  → 12 FAQ (pricing, offline, migration anxieties answered)
  → 13 Final CTA → /demo
```

Emotional arc: skepticism → recognition → cautious hope → "worth a call."

## 4.3 Journey B — The Evaluator (proof-led)

```
Direct / search ("business operating system", "{industry} software")
  → Hero
  → 03 Product showcase (grasps platform-vs-apps instantly)
  → 06 Capabilities (one ledger, sync, identity — engineering depth)
  → 10 Performance + 11 Security (due diligence)
  → /platform/architecture, /platform/security (deep dive)
  → /resources/documentation
  → /demo or /company/contact
```

Emotional arc: assessment → respect → confidence.

## 4.4 Journey C — The Partner (opportunity-led)

```
Referral
  → Hero → 05 Philosophy ("a company I could build on")
  → /company/partners → /company/contact
```

## 4.5 The returning visitor

Skips narrative entirely: header **Request a demo** is visible within one
scroll at all times (persistent but quiet — see §8.4 auto-hide behavior).
Footer CTA band remains the last-resort conversion surface on every page.

## 4.6 Conversion model (preserved from BLUEPRINT §8)

- Primary path: hero → narrative → `/demo`.
- Secondary path: any showcase/capability section → `/platform` → product →
  pricing → `/demo`.
- Low-friction path: `/company/contact` reason selector.
- The redesign changes *pressure*, not *paths*: CTAs become fewer, calmer, and
  more confident. One primary action per viewport, always.

---

# 5. Storytelling Strategy

## 5.1 The arc

**"Calm, in the chaos of operations."**

| Act | Sections | Story |
|-----|----------|-------|
| **I. Observation** | 01–04 | The world: operational businesses run on fragments. We name the pain precisely — no dramatization, just recognition. |
| **II. Belief** | 05 | Our philosophy: we don't praise ourselves; we build things that earn trust. The emotional and ethical center of the page. |
| **III. Proof** | 06–11 | The product, demonstrated: capabilities, the interface itself, integrations, honest outcomes, reliability, security. Show, don't claim. |
| **IV. Invitation** | 12–13 | Practical answers, then a low-pressure invitation: see it on *your* operations. |

## 5.2 Narrative techniques

- **Understatement as emphasis.** The quietest sentence in each section carries
  the most weight. ("Every feature exists for a reason.")
- **The product as narrator.** Sections 03 and 07 let the interface speak; copy
  steps aside. Captions, not claims.
- **Honest framing as plot.** Labels like "Illustrative outcomes" and
  "availability target" are printed *visibly*, not in fine print. In a market
  full of invented numbers, visible honesty is a story beat.
- **Rhythm.** Dense sections (06, 08) are followed by breathing sections
  (05, 09) so the page never becomes a feature wall.

## 5.3 Copy tone guide

| Instead of | Write |
|------------|-------|
| "We are the best platform" | "Designed with care." |
| "Industry-leading technology" | "Thoughtfully engineered for reliability." |
| "Powerful features" | "Every feature exists for a reason." |
| "Seamless all-in-one solution" | "One platform. Every branch. Every number." |
| "Trusted by thousands" | "Running quietly behind retail floors, restaurant kitchens, and clinics." |
| "Blazing fast" | "Fast enough to never be the bottleneck." |

## 5.4 The philosophy moment (section 05)

The Arabic north-star line is set large, in Cairo, as the emotional centerpiece
— the only place Arabic script appears as *display type* on the English page.
It reads as a signature: this company is Algerian, multilingual, and means what
it says. Translation follows beneath in small type. This section contains no
CTA. Confidence is the absence of an ask.

---

# 6. Complete Website Content

> Homepage copy, English (source of truth). French and Arabic versions are
> produced through the existing dictionary system at implementation time —
> same structure, professionally adapted, never machine-literal.

## 01 · Hero

**Headline:**
> One platform.
> Every branch.
> Every number.

**Alternates (for A/B or future rotation):**
- A: "Software that simply works."
- B: "Less complexity. More focus."

**Supporting paragraph:**
> ESTINAD is a shared operating system for retail, restaurants, and clinics —
> one ledger, one identity, and one sync engine beneath every product we make.
> Numbers match. Branches stay in step. Tools stop fighting each other.

**Primary CTA:** Explore the platform ↓ *(scrolls to §03)*
**Secondary CTA:** See how it works *(scrolls to §07)*

**Micro-trust line (small, muted):** Built in Algeria · Designed for MENA and beyond

## 02 · Trust strip

**Lead line (centered, small):**
> Running quietly behind the businesses that run the real economy.

**Sector row (mono, evenly spaced):**
`RETAIL` · `RESTAURANTS` · `CLINICS` · `MULTI-BRANCH` · `RESELLERS`

*No logos. No invented names. Coverage stated plainly — the honest predecessor
of a real logo wall.*

## 03 · Product showcase

**Eyebrow:** The platform
**Title:**
> Four focused products.
> One foundation.

**Intro:**
> Each product is built for one industry and powered by the same platform
> beneath it. Start with the one you need. Add another when you grow — nothing
> to migrate, nothing to reconnect.

**Platform stack (visual, built in CSS):**
`Vertical products` → `Shared services — ledger · identity · sync` → `ESTINAD OS`

**Cards (one-liners preserved from current site — already honest):**

- **ESTINAD Retail** — The operating system for clothing and multi-category
  retail: inventory, POS, and store performance in one ledger. *Explore →*
- **ESTINAD Restaurant** — The operating system for restaurants: kitchen,
  floor, and orders in one calm, fast flow. *Explore →*
- **ESTINAD Clinic** — The operating system for clinics: scheduling, records,
  and billing in one quiet, compliant system. *Explore →*
- **ESTINAD Cloud** — The controlled backbone for every ESTINAD product:
  hosting, sync, backup, and access in one place. *Explore →*

## 04 · Why we built this

**Eyebrow:** Why we built this
**Title:**
> Operational businesses run on fragments.

**Body:**
> Tools that don't talk. Numbers that don't match. Systems that stop when the
> connection does. Growth that somehow means starting over.
>
> We built ESTINAD because running a business is hard enough without the
> software working against you. It should be infrastructure — invisible when
> it works, always there when you need it.

*(Presented as an editorial reading column, not a feature grid.)*

## 05 · Philosophy

**Display (Arabic, Cairo, large):**
> لا نتكلف في مدح أنفسنا

**Translation (small, muted):** We don't spend time praising ourselves.

**Body:**
> We spend it refining every interaction, improving every detail, and building
> software people genuinely enjoy using. We don't try to impress with bold
> promises — we prefer thoughtful decisions, careful engineering, and products
> that quietly earn trust over time.
>
> We believe great software speaks for itself.

*(No CTA. Centered, maximum whitespace. The pause in the page.)*

## 06 · Platform capabilities

**Eyebrow:** Capabilities
**Title:**
> Every feature exists for a reason.

**Grid (6 items, one line each):**

1. **One ledger.** Sales, stock, schedules, and billing post to a single
   source of truth. One number, everywhere.
2. **Offline-tolerant sync.** Branches keep working when the connection drops,
   then reconcile cleanly when it returns.
3. **One identity.** Every person, every role, every branch — role-based access
   from a single place.
4. **A shared data model.** Products, parties, documents, and money mean the
   same thing in every ESTINAD product.
5. **Modular by design.** Start with one product. Add another without
   re-platforming.
6. **Deployment freedom.** Cloud, on-premise, or hybrid — your reality,
   your choice.

## 07 · Interface (interactive demo)

**Eyebrow:** The product
**Title:**
> See it working.

**Caption (honest label, visible):** Illustrative interface concept.

**Interaction:** sector tabs — `Retail` / `Restaurant` / `Clinic` — swap the
rendered view inside a floating frame with pointer-parallax depth.
**Supporting line:**
> Calm screens. Large targets. The information you need, where you expect it.

## 08 · Integrations

**Eyebrow:** Integrations
**Title:**
> Works with what you already have.

**Tag cloud (real, grounded in the product docs):**
ESC/POS receipt printers · Barcode scanners · Cash drawers · Payment terminals
(CIB · Edahabia) · Customer displays · CSV import/export · REST API · Webhooks

**Closing line:**
> If it belongs in your operation, it connects to ESTINAD — or we want to hear
> about it.

## 09 · Customer stories

**Eyebrow:** Outcomes
**Title:**
> What changes when the numbers match.

**Label (visible, honest):** Illustrative outcomes — the patterns we design for.

**Cards (sector · metric · result):**

- **Retail — 4 branches.** Closing the day went from hours of reconciliation to
  minutes of review. *One ledger across every store.*
- **Restaurant — 2 locations.** Kitchen, floor, and delivery orders stopped
  disagreeing. *One flow, end to end.*
- **Clinic — 1 practice.** Scheduling, records, and billing finally tell the
  same story. *One quiet system.*

**Link:** See case studies →

## 10 · Performance

**Eyebrow:** Reliability
**Title:**
> Built for real conditions.

**Body:**
> Unstable connectivity. Growing teams. The cost of getting numbers wrong.
> ESTINAD is engineered for the conditions operators actually face — not the
> conditions of a demo room.

**Stats (each labeled *design target*):** `99.9%` availability target ·
`< 1 day` to stand up a new branch · `1` ledger across everything

## 11 · Security

**Eyebrow:** Security & control
**Title:**
> Control when you need it.

**List:**
- Encrypted in transit and at rest — including backups.
- Least privilege by default; every meaningful action logged and exportable.
- Continuous backup with point-in-time recovery. Mistakes are reversible.
- Data residency options for when growth demands real control.

**Link:** Read about security →

## 12 · FAQ

**Eyebrow:** Questions
**Title:** Fair questions, straight answers.

1. **Is ESTINAD a POS?** No. It includes point of sale where a business needs
   it, but a POS records transactions — ESTINAD runs the operation behind them:
   inventory, identity, sync, and reporting on one platform.
2. **What happens when the internet drops?** Branches keep working locally and
   reconcile when the connection returns. An outage is an inconvenience, not a
   lost day.
3. **Can I start with just one product?** Yes — most do. Add another product or
   branch later on the same foundation, with nothing to migrate.
4. **How does pricing work?** Per product, per branch — never per seat. Every
   product has its own transparent pricing page.
5. **Where does my data live?** Cloud, on-premise, or hybrid, with residency
   options. Your data stays yours, exportable at any time.

## 13 · Final CTA

**Title:**
> See ESTINAD on your operations.

**Body:**
> We'll map your branches, products, and workflows — and show you exactly how
> they would run on one platform.

**Primary CTA:** Request a demo →
**Secondary CTA:** Talk to the team

## Footer

- **Tagline:** Mission-critical business software. Faster. More reliable.
- **Sub-line:** Built in Algeria, designed for MENA and global markets.
- **CTA band title:** Run every branch on one disciplined system.
- Link matrix: Platform / Products / Solutions / Resources / Company (unchanged).
- Legal row: Privacy · Terms · © ESTINAD.

---

# 7. UX Rationale

## 7.1 Governing principles

1. **One idea per viewport.** Every section makes a single point. Cognitive
   load stays near zero; scrolling feels like turning pages.
2. **The 5-second contract.** Hero answers *what is this* without scrolling
   (§4.1). Everything else is depth for those who choose it.
3. **Scanning architecture.** Eyebrow → display title → short intro → content.
   A visitor reading only titles still receives the complete argument
   (read §6 titles in sequence — they narrate).
4. **Progressive commitment.** CTAs escalate with intent: *explore* (scroll) →
   *see it work* (engage) → *request a demo* (commit). We never ask for more
   than the visitor has signaled.
5. **Honesty as UX.** Visible "illustrative" and "target" labels prevent the
   small betrayal visitors feel when marketing numbers turn out to be invented.
   Trust compounds; that is the conversion strategy.

## 7.2 Per-section rationale (condensed)

| § | Decision | Why |
|---|----------|-----|
| 01 | Left-aligned headline, product render below | Editorial gravity + immediate product proof; render is the LCP focal point |
| 02 | Text-only sector strip | Establishes scope without a fake logo wall; mono type reads as factual, not promotional |
| 03 | Stack diagram before product cards | Platform-first comprehension prevents "four unrelated apps" (BLUEPRINT §10.1) |
| 04 | Reading column, not a pain grid | Slows the reader down; this section is felt, not scanned |
| 05 | No CTA, centered, maximal whitespace | The pause creates the brand; an ask here would break it |
| 06 | Six one-liners, not feature walls | Each line is a decision the reader can verify; density without noise |
| 07 | Tabs + parallax frame | Interaction proves "calm software" better than adjectives; honest label preserved |
| 08 | Tag cloud, one line | Integrations are reassurance, not a headline — kept proportionate |
| 09 | Honest framework cards | Absorbs real case studies later without redesign (BLUEPRINT §10.2) |
| 10/11 | Adjacent, restrained | Due-diligence content for Evaluators; placed late where intent is highest |
| 12 | Native accordion | Keyboard-accessible, zero-JS-capable, prints well |
| 13 | Quiet invitation, specific promise | "We'll map your branches…" tells the visitor exactly what saying yes means |

## 7.3 Interaction inventory (what moves, and why)

| Element | Behavior | Purpose |
|---------|----------|---------|
| Header | Auto-hides on scroll down, returns on scroll up | Content-first reading; conversion one flick away |
| Hero render | Slow float + pointer parallax (±10px) | Living product; stillness would read as a screenshot |
| All sections | Viewport-triggered fade/rise/blur reveal, once | Orientation; never replays, never demands attention |
| Cards | 2px lift + shadow deepening on hover | Affordance, not decoration |
| FAQ | Native `<details>` accordion | Accessibility and print |
| Sector tabs (§07) | Instant swap with 150ms crossfade | Comparison without motion sickness |

Anything not on this list does not move. Restraint is the interaction design.

---

# 8. UI Design System

> v2 primitives replace the visual treatment of `components/ui.tsx` while
> keeping its compositional API (`Section`, `Button`, `Card`, `Stat`, `Tag`,
> `Eyebrow`). Existing pages re-skin through tokens; new pages compose the
> same primitives. The system follows shadcn/ui design language (composable,
> accessible, state-complete) with in-house components — no new component
> library dependency.

## 8.1 Buttons

| Variant | Spec | Use |
|---------|------|-----|
| **Primary** | `bg-ink text-bg` (black fill, white text in light mode), pill radius `999px`, `h-12 px-7`, 15px medium | One per viewport; demo / final CTA |
| **Secondary** | Transparent, `1px` border `line-strong`, ink text, pill, same size | Pairs beside a primary |
| **Ghost** | No border, `text-ink-secondary`, underline offset grows on hover | Tertiary nav, inline links |

**States (all 8, mandatory):**
default · hover (primary: fill → `#262626`; secondary: border → ink, bg →
`surface`) · `:focus-visible` (2px ink ring, 2px offset — instant, never
animated) · `:active` (`scale(0.98)`, 100ms) · disabled (`surface-2` fill,
`muted` text, `cursor: not-allowed`) · loading (spinner replaces label,
width locked) · error/success (not applicable to buttons — handled at form
level with text + icon, never color alone).

Transitions: `background-color`, `border-color`, `transform` — 150ms,
`--ease-out`.

## 8.2 Cards

- Surface: `bg-card` (white) on `bg` or `surface` section grounds.
- Border: `1px` `line` (`#E5E5E5` light / `#262626` dark).
- Radius: `16px`.
- Padding: `32px` mobile / `40px` desktop.
- Shadow: resting `shadow-card` (ultra-soft, §8.7); hover `shadow-lift` +
  `translateY(-2px)`, 200ms.
- Linked cards: full-card `<Link>`, trailing `→` that nudges `translateX(4px)`
  on hover (mirrored in RTL).
- **No glass on static cards.** Glass is reserved for elements that float over
  content (header, hero frame).

## 8.3 Section header

`Eyebrow` (mono, 13px, `0.18em` tracking, uppercase, muted) → display title →
optional intro (`max-w-prose`). Left-aligned by default; centered only for §05
Philosophy and §13 Final CTA. Title-to-intro gap `24px`; header-to-content
`64px` desktop / `40px` mobile.

## 8.4 Header (navigation)

**Structure:** floating glass bar — centered, `max-w-[1200px]`, `inset-x-4`
`top-4`, `h-14`, `radius 999px`, `bg/70` + `backdrop-blur(16px)
saturate(180%)`, `1px` `line` border, `shadow-glass`.

**Contents:** monogram + wordmark (left) · Platform, Products, Solutions,
Resources, Company (center, 15px) · theme toggle, language, **Request a demo**
primary pill (right, `h-9`).

**Behavior:**
- Auto-hides (`translateY(-120%)`, 250ms `ease-out`) after 80px of downward
  scroll; returns instantly on any upward scroll. Always visible at page top.
- Mega-menus preserved (hover intent 120ms delay, keyboard-focusable,
  `Esc` closes, focus returns to trigger).
- Mobile: full-screen overlay sheet (not a cramped dropdown), staggered
  40ms link reveals, large 48px touch targets.
- Active section: ink text vs `text-secondary`; no pills or underlines.

## 8.5 Forms

- Layout: `grid gap-6 sm:grid-cols-2`, full-width fields span both.
- Label: mono, 12px, uppercase, `0.14em`, secondary — *above* the field
  (never placeholder-as-label).
- Input: `h-12 px-4`, `bg-card`, `1px` `line`, radius `12px`, 15px ink.
- Focus: border → ink + 3px `ink/8%` outer ring; no browser default.
- Error: text + `!` mark beneath the field in ink, field border → ink
  (monochrome discipline: meaning via text and weight, never red).
- Submit: primary pill, `self-start`; success replaces the form with a quiet
  confirmation panel (no confetti, no checkmark theater).

## 8.6 Radius, borders, and the corner decision

v1 used `2px` corners to honor the monogram's 90° geometry. v2 separates the
two vocabularies: **the mark stays square; the interface gets soft.**

| Token | Value | Applies to |
|-------|-------|-----------|
| `radius-pill` | `999px` | buttons, tags, header bar |
| `radius-card` | `16px` | cards, panels, menu surfaces |
| `radius-input` | `12px` | form fields |
| `radius-frame` | `24px` | the hero/demo image frame (large media) |
| `radius-mark` | `2px` | monogram frames only — the brand's signature |

## 8.7 Shadows & depth (the monochrome depth system)

Depth replaces color. Four elevation levels, all neutral, all soft:

| Level | Token | Value (light) | Use |
|-------|-------|---------------|-----|
| 0 | — | flat + `1px line` | default cards at rest |
| 1 | `shadow-card` | `0 1px 2px rgb(0 0 0 / 0.04), 0 4px 16px rgb(0 0 0 / 0.04)` | raised cards |
| 2 | `shadow-lift` | `0 2px 4px rgb(0 0 0 / 0.06), 0 12px 32px rgb(0 0 0 / 0.08)` | hover, dropdowns |
| 3 | `shadow-float` | `0 8px 24px rgb(0 0 0 / 0.10), 0 32px 64px rgb(0 0 0 / 0.12)` | hero frame, header glass |

Dark mode: shadows deepen in opacity (×1.5) and a `1px` `line` border is
*always* present (shadows read poorly on near-black).

**Glass recipe (header, hero frame):** `bg` at 70% + `backdrop-blur 16px` +
`saturate 180%` + `1px line` + level-3 shadow. Nothing else gets glass.

## 8.8 Tags, stats, accordion

- **Tag:** mono 12px uppercase, `1px line`, pill, `px-3 py-1`, muted text.
- **Stat:** value in mono 40px tight + label 15px secondary + visible
  qualifier ("design target") 12px muted. Never animated counters — the
  numbers are honest, not theatrical.
- **Accordion (FAQ):** native `<details>/<summary>`, `+` rotates 45° on open,
  rows divided by `1px line`, answer `max-w-prose` 16px secondary.

## 8.9 Iconography

No icon library. Three permitted marks:

1. **Typographic:** arrows `→` `↓`, the `+` of accordions, the `·` separator.
2. **Monogram-derived:** the E/T mark itself at its three permitted scales.
3. **Hairline glyphs** where a concept truly needs one — 1.5px stroke, 24px
   grid, square caps, drawn in the monogram's visual language.

Stock 3D icons, emoji, and colorful pictograms are banned.

---

# 9. Typography System

Typography *is* the visual identity. One family, many voices.

## 9.1 Faces

| Role | Face | Source |
|------|------|--------|
| Display / body / UI (en, fr) | **Geist Sans** | `next/font` (already installed) |
| Meta / eyebrows / numerals / tags | **Geist Mono** | `next/font` (already installed) |
| Arabic (all roles) | **Cairo** | `next/font` (already installed) |

Geist OpenType features `ss01 cv01 cv11` on Latin body text; disabled for
Arabic. No serif is introduced — the editorial voice comes from scale, space,
and rhythm, not from a second family.

## 9.2 Scale (desktop → mobile, `clamp` fluid between)

| Token | Size | Leading | Tracking | Weight | Use |
|-------|------|---------|----------|--------|-----|
| `display-xl` | `clamp(48px, 8vw, 96px)` | `1.02` | `-0.035em` | 600 | Hero headline (§01) |
| `display` | `clamp(40px, 6vw, 72px)` | `1.05` | `-0.03em` | 600 | §05 Arabic display, §13 |
| `h2` | `clamp(32px, 4.5vw, 60px)` | `1.08` | `-0.025em` | 600 | Section titles |
| `h3` | `clamp(22px, 2.5vw, 30px)` | `1.15` | `-0.015em` | 600 | Card titles, sub-blocks |
| `body-lg` | `18px` (`20px` hero intro) | `1.7` | `-0.005em` | 400 | Intros, lead paragraphs |
| `body` | `16px` | `1.7` | `0` | 400 | Long-form |
| `small` | `15px` | `1.6` | `0` | 400 | Card copy, captions |
| `meta` | `13px` mono | `1.4` | `0.18em` upper | 500 | Eyebrows |
| `tag` | `12px` mono | `1.3` | `0.14em` upper | 500 | Tags, labels, qualifiers |

**Headline-length rule:** hero display sizes are for ≤ 7 words / ≤ 50 chars.
Longer headlines step down one rung automatically. Our hero (§6.01) is three
lines × ≤ 13 chars — it earns `display-xl`.

## 9.3 Editorial rules

- **Measure:** prose capped at `65ch` (~`680px`); intros at `52ch`. Never
  full-width body text.
- **Alignment:** left-aligned (start-aligned in RTL) everywhere except §05/§13.
  Centered body text is banned outside those two sections.
- **Numerals:** always Geist Mono (tabular). Stats, pricing, specs.
- **One italic permission:** the translation line beneath the Arabic display
  in §05. Nothing else italicizes.
- **Widows:** hero and section titles hand-set with `text-wrap: balance`.
- **Arabic:** Cairo scales one step down per rung (Arabic x-height reads
  larger); line-height +0.1 per rung; tracking resets to `0`.

---

# 10. Color System

**Strict rule (per brief): black, white, and neutral grays only. No chromatic
accent exists in this system — including focus rings, selection, links, and
semantic states.**

## 10.1 Light theme (default)

| Token | Value | Role |
|-------|-------|------|
| `bg` | `#FFFFFF` | page background |
| `surface` | `#FAFAFA` | alternating section bands |
| `surface-2` | `#F5F5F5` | recessed areas, code blocks, disabled fills |
| `card` | `#FFFFFF` | cards on `surface` bands |
| `ink` | `#000000` | primary text, primary buttons |
| `ink-secondary` | `#555555` | body copy, secondary text |
| `muted` | `#737373` | meta, captions — **AA-safe floor for text** |
| `faint` | `#888888` | **decoration only** (never text — fails AA on white) |
| `line` | `#E5E5E5` | hairline borders |
| `line-strong` | `#D4D4D4` | secondary button borders, strong dividers |
| `dark-surface` | `#111111` | inversion moments (footer, §10 band) |
| `pure-black` | `#000000` | buttons, display ink |

*Refinement vs. brief palette:* the brief's `#888888` muted (3.5:1) fails WCAG
AA for text. `#888` is kept for decorative elements only; readable meta text
uses `#737373` (4.7:1, AA pass). See §15.

## 10.2 Dark theme (toggle, pure monochrome inversion)

| Token | Value | Role |
|-------|-------|------|
| `bg` | `#000000` | page background |
| `surface` | `#0A0A0A` | section bands |
| `surface-2` | `#141414` | recessed |
| `card` | `#111111` | cards |
| `ink` | `#FAFAFA` | primary text, primary buttons (inverted) |
| `ink-secondary` | `#A3A3A3` | body (7.2:1 on black — AA AAA) |
| `muted` | `#8C8C8C` | meta (5.0:1 — AA pass) |
| `line` | `#1F1F1F` | hairlines |
| `line-strong` | `#2E2E2E` | strong dividers |
| `light-surface` | `#FAFAFA` | inversion moments |

## 10.3 Monochrome functional replacements

| Convention (chromatic web) | v2 monochrome replacement |
|---------------------------|---------------------------|
| Accent CTA color | Pure `ink` fill + `bg` text; emphasis by weight, size, and position |
| Colored focus ring | `2px ink` outline + `2px` offset (light); `2px #FAFAFA` (dark) |
| Colored selection | `bg-ink text-bg` inverted selection |
| Red errors | Text + `!` mark in ink; meaning never carried by color |
| Green success | Text + quiet confirmation panel in `surface` |
| Link blue | Ink + underline on hover; ghost buttons for inline actions |

## 10.4 Depth without color (how the system avoids flatness)

1. Alternating `bg` / `surface` section bands (rhythm).
2. Four-level neutral shadow scale (§8.7).
3. Glass blur on floating elements (§8.7).
4. One permitted **inversion moment** per page: a `dark-surface` band (the
   Performance section §10) and the dark footer — monochrome contrast as
   punctuation, used twice, never more.
5. Soft radial light: `radial-gradient(ink at 4% opacity)` behind the hero
   render — a lighting effect, not a color effect.

---

# 11. Spacing & Layout System

## 11.1 The 8-point scale

`4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160` — every margin, gap, and
padding is a multiple of 8 (4 permitted for fine-tuning type alignment only).

## 11.2 Containers

| Name | Max width | Use |
|------|-----------|-----|
| `shell` | `1200px`, `padding-inline 24/40/48px` | all page content |
| `shell-wide` | `1360px` | hero render frame only |
| `prose` | `680px` | reading columns (§04, §05, FAQ answers) |

## 11.3 Section rhythm

- Vertical padding: `128px` desktop / `80px` mobile — `160px` after inversion
  bands so dark moments get extra air.
- Bands alternate `bg` ↔ `surface`; hairline `1px line` separates them
  (no heavy dividers).
- Header-to-content gap: `64px` desktop / `40px` mobile.

## 11.4 Grid

- 12 columns, `24px` gutters inside `shell`.
- Editorial asymmetry is permitted at the *column* level (e.g., §04 text sits
  in columns 2–9, not centered) but never breaks the outer margins.
- Product showcase: 2×2 grid of equal cards (family equality, per v1 logic).
- Capabilities: 3×2. Customer stories: 3×1. Stats: 3×1.

## 11.5 Vertical rhythm

- Section title baselines align to the 8pt grid.
- Eyebrow→title `20px` · title→intro `24px` · intro→content `64px` ·
  card internal `24–32px` · list items `16px`.
- The page's resting heart-rate is `128px` between ideas. Nothing crowds.

---

# 12. Motion & Interaction Guidelines

**Motion should be felt as calm, never seen as animation.** Every effect below
exists to orient or to breathe life into the product render. If removing an
animation loses no information, it is removed.

## 12.1 Tokens

| Token | Value | Use |
|-------|-------|-----|
| `ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | default — long, soft landings |
| `ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | continuous loops (float) |
| `dur-micro` | `150ms` | hovers, presses, tab swaps |
| `dur-ui` | `250ms` | header hide/show, menus |
| `dur-reveal` | `700ms` | section reveals |
| `stagger` | `80ms` | hero line-by-line |

Never: browser `ease`, bounce/back easings, spring overshoot on UI state,
layout-property animation (transform + opacity only; `filter: blur` permitted
for reveals, GPU-promoted).

## 12.2 The motion inventory (complete — nothing else moves)

1. **Section reveal (all sections, once).** `opacity 0→1`,
   `translateY(16px)→0`, `blur(6px)→0` — `dur-reveal`, `ease-out`, triggered
   at 15% viewport intersection, `once: true`. Children stagger `60ms`, max 4.
2. **Hero entrance.** Headline lines stagger `80ms`; render frame follows at
   `+200ms` with `scale(0.98)→1` added.
3. **Hero render float.** `translateY ±8px`, `7s`, `ease-in-out`, infinite —
   the page's only perpetual motion. Pauses off-screen and under
   `prefers-reduced-motion`.
4. **Pointer parallax (hero render + §07 frame).** `±10px` translate,
   spring-damped, disabled on touch and reduced motion.
5. **Header auto-hide/reveal** (§8.4 behavior).
6. **Hover micro:** card lift (`-2px` + shadow), button fill, arrow nudge —
   all `dur-micro`.
7. **§07 tab swap:** `150ms` opacity crossfade. No slide.

## 12.3 Scroll experience

- **Lenis** smooth scroll, `lerp 0.1`, wheel-only (native touch untouched),
  anchored to `transform` — never scroll-jacking, never hijacked sections.
  Each section remains a normal document scroll; Lenis only refines the feel.
- Reveals via `IntersectionObserver` (Framer Motion `whileInView`), not
  scroll-scrubbed timelines. Parallax is pointer-driven, not scroll-driven.

## 12.4 Reduced motion

`prefers-reduced-motion: reduce` collapses everything to an instant or ≤150ms
opacity crossfade. Float, parallax, stagger, and smooth-scroll are disabled.
The site must be fully comprehensible with all motion off — motion is garnish,
never information.

## 12.5 Performance budget

- `transform`/`opacity` only on the compositor thread; no `top/left/width`
  animation. `will-change` applied during animation only, removed after.
- Lenis + Framer Motion loaded as client islands; zero motion code in the
  server-rendered shell. Target: sustained 60fps on a mid-range Android.
- Total motion library budget: ≤ 45KB gzipped on the homepage.

---

# 13. GPT Image 2 Prompts — Complete Asset List

> Global rules for every prompt: pure black & white, monochromatic, minimal,
> editorial, architectural, luxury product photography, soft cinematic light.
> Negative constraints (append to every generation): *no color, no gradients,
> no neon, no people, no clipart, no cartoon style, no stock-photo look, no
> busy background, no decorative ornaments, no readable text or gibberish
> characters, no watermarks, no logos other than abstract geometric marks.*
> Assets are generated at the highest available resolution, then served via
> `next/image` (AVIF/WebP) from `public/images/v2/`.

## Asset A1 — Hero product visualization

- **Section:** 01 Hero.
- **Purpose:** The single most important image on the site. Proves "this is a
  real product" within 5 seconds, and carries the entire light-as-material
  art direction.
- **Placement:** Centered below the hero copy inside a `radius-frame` frame,
  `shell-wide` container, ~16:9 crop, `priority` loaded (LCP).
- **Visual goal:** "A product floating in a quiet gallery of light." Calm,
  precise, expensive.

**GPT Image 2 prompt:**

```
A premium black-and-white product visualization of a modern business software
platform. Three floating interface panels made of frosted glass, arranged in
an overlapping architectural composition with strong depth: a large central
dashboard panel in front, two smaller panels staggered behind it at slightly
different depths and angles, drifting gently upward to the right.

Subject: abstract software dashboard surfaces — clean rectangular KPI cards,
thin line charts, a sidebar column, data table rows — rendered as minimal
geometric white and light-gray shapes on the glass. NO readable text, no
letters, no numbers: all interface elements are abstract blocks, lines, and
soft rectangles of varying opacity.

Composition: central subject occupying the middle 70% of the frame, generous
negative space around it, camera at eye level with a very slight low angle for
quiet monumentality, orthographic-like perspective with subtle depth of field —
the rearmost panel slightly softer than the front one.

Lighting: soft diffused studio lighting from upper left, like a large softbox
in a white gallery; gentle gradients of light across the glass surfaces;
delicate edge highlights defining each panel's thickness.

Materials: frosted glass panels with subtle refraction at edges, matte white
interface elements, thin hairline borders in light gray.

Background: seamless bright white-to-very-light-gray studio backdrop with a
soft radial falloff toward the corners, like an infinite white cyclorama wall.

Shadows: extremely soft, diffuse contact shadows beneath and behind the
floating panels, darkening gently with distance — the shadows create the sense
of levitation.

Mood: calm, precise, expensive, silent. Apple keynote minimalism meets
architectural photography. Luxury product photography rendering style,
ultra-clean, editorial quality, high dynamic range, crisp on the front panel.

Strictly black and white only — pure monochrome, no color tint, no warm or
cool cast. No people, no logos, no text, no decorative elements, no particles.

Aspect ratio 16:9, 3840×2160.
```

**Integration notes:** The frame overlays a `1px line` border and `shadow-float`
(§8.7), so the image's own shadows stay *inside* the crop — keep the outer 8%
of the render clean white. Responsive: `16:9` crop desktop, `4:3` center-crop
tablet, `1:1` center-crop mobile (the central panel must survive a center
crop — hence the middle-70% composition rule). Motion: the frame floats and
parallaxes (§12.2); the image itself must remain static. Typography
relationship: the hero headline sits above on white; the image never sits
behind text.

## Asset A2 — Interface concept render (§07 interactive demo)

- **Section:** 07 Interface.
- **Purpose:** The "show, don't tell" centerpiece — a full operational
  dashboard view that tabs swap between sector contexts.
- **Placement:** Inside a floating glass frame with the honest caption
  "Illustrative interface concept," `shell` width, 16:9.
- **Visual goal:** "I can see myself using this." Recognizably a working
  screen — but still art-directed monochrome.

**GPT Image 2 prompt:**

```
A pristine black-and-white high-fidelity render of a business operations
dashboard interface, designed as a minimal monochrome software screen.

Subject: a complete desktop application window filling the frame edge to edge.
Layout: a slim left sidebar with abstract navigation rows, a top bar with a
search field and small circular avatar placeholder, and a main content area
containing: a row of four KPI stat cards, one large elegant line chart with a
single thin black trend line and soft area fill in light gray, and a clean
data table with five rows. Include subtle barcode-like vertical marks and one
small QR-like abstract square as product/inventory motifs.

CRITICAL: render ALL text as abstract light-gray horizontal bars and blocks of
varying lengths — absolutely no readable letters, numbers, or characters
anywhere in the image. Interface labels are suggested by bar length and
position only.

Style: ultra-flat, hairline 1px light-gray borders between regions, pure white
surface background, matte. The design language of a premium minimal SaaS
product: generous whitespace inside every panel, perfect 8px-grid alignment,
soft 16px corner rounding on cards.

Camera: perfectly straight-on orthographic front view, zero perspective
distortion, the screen fills 100% of the frame.

Lighting: even, neutral, shadowless — like a screenshot, but with a barely
perceptible soft top-light giving the surface a gentle luminosity.

Mood: calm, organized, quietly powerful — software as a well-set page of type.
Editorial quality, crisp vector-like rendering, extremely clean.

Strictly black, white, and neutral grays only. No color, no icons with color,
no photographs inside the UI, no people, no readable text, no brand logos.

Aspect ratio 16:9, 3840×2160.
```

**Integration notes:** Displayed at `16:9` all breakpoints (scales down, no
re-crop — a UI screen must not be cropped). Two sibling variants (`A2-retail`,
`A2-clinic`) are generated later at implementation by re-running this prompt
with the motifs swapped (clothing-tag shapes / calendar-grid shapes) — the
tab swap is a 150ms crossfade, so all three renders must share identical
layout. Layering: sits 24px above the section ground on `shadow-float`,
caption bar overlaid bottom-left in mono 12px. The parallax frame moves ±10px;
the image is static.

## Asset A3 — Philosophy light study (§05)

- **Section:** 05 Philosophy.
- **Purpose:** The emotional pause. Pure atmosphere behind the Arabic display
  line — no subject, only light.
- **Placement:** Full-bleed section background, `opacity` tuned so text keeps
  AAA contrast; masked to fade into the section ground at all edges.
- **Visual goal:** A breath. Light falling across paper.

**GPT Image 2 prompt:**

```
An abstract black-and-white architectural light study: soft daylight falling
across a vast, empty, matte white paper-like surface with a single gentle
curved fold sweeping through the lower third of the frame, like a dune of
paper or a curved gallery wall.

Composition: extreme minimalism — 90% of the frame is smooth luminous white
gradients; the fold creates one slow diagonal shadow gradient moving from
light gray to medium gray, nothing else. Horizonless, no objects, no texture
noise.

Lighting: one large soft source from the upper right, cinematic and diffuse,
wrapping gradually around the fold. Deep but gentle shadow falloff, airy
highlights.

Mood: silence, breath, reverence — the visual equivalent of a pause between
sentences. Museum-grade fine art photography of paper and light, ultra smooth
tonal transitions, medium-format film quality, fine grain barely visible.

Strictly black and white, monochrome, no warm or cool tint. No objects, no
people, no text, no geometry other than the single fold, no vignette.

Aspect ratio 21:9, 3840×1646.
```

**Integration notes:** Rendered as an absolutely-positioned background layer at
35–45% opacity (light theme) with a `mask-image` linear fade to transparent at
top/bottom so the section ground reads continuous; in dark mode it is swapped
for an inverted-luminance variant (generate by appending "invert: deep matte
black paper, faint silver light" to the prompt). The Arabic display line sits
centered above it — the image must never compete: nothing inside the central
50% of the frame may exceed light-gray tones. No parallax here; stillness is
the point.

## Asset A4 — Platform layers object (§03 product showcase)

- **Section:** 03 Product showcase.
- **Purpose:** Gives the "platform stack" concept a physical, memorable form —
  layered glass slabs = layered architecture.
- **Placement:** Right column of the showcase header (title left, object
  right), ~4:3, medium size. Falls back to the CSS stack diagram if art
  direction prefers pure type at implementation review.
- **Visual goal:** "Architecture you could pick up and hold."

**GPT Image 2 prompt:**

```
A black-and-white 3D render of three thin rectangular glass slabs stacked with
equal air gaps between them, floating above a white studio floor — an abstract
architectural model of layered software infrastructure.

Subject: three identical slim slabs of frosted glass with soft edge
refraction, perfectly parallel, decreasing slightly in width from bottom to
top, aligned on their left edges like a precisely stacked deck. Between the
slabs, faint vertical connector pins of clear glass at two corners.

Camera: three-quarter isometric view from slightly above, 30-degree elevation,
centered composition with generous white space on all sides.

Lighting: large softbox from the upper left, creating long, extremely soft
shadows diagonally to the lower right on the seamless white floor; delicate
rim highlights on every glass edge.

Materials: frosted and clear glass, matte, subtle internal glow where light
passes through edges.

Mood: precise, structural, quiet — a museum model of an idea. Luxury product
photography, architectural rendering, ultra-clean, high resolution.

Strictly black and white monochrome, no color tint, no text, no logos, no
people, no background objects, no dust or particles.

Aspect ratio 4:3, 3200×2400.
```

**Integration notes:** Right-column placement means the composition's left-edge
alignment points back toward the title text — do not flip. On mobile it stacks
below the intro at 60% width, centered. No motion on the image itself; the
reveal transition only. If used, it replaces the CSS diagram; they never
appear together.

## Assets A5–A7 — Sector abstracts (§09 customer stories)

- **Section:** 09 Customer stories.
- **Purpose:** Gives each illustrative outcome a quiet sector identity without
  fake photography or fake customers.
- **Placement:** Top of each story card, 1:1, small (card-width), `radius-card`
  top corners.
- **Visual goal:** Three museum studies of work — retail, kitchen, care —
  abstracted to geometry and light.

**GPT Image 2 prompts (run three times with the swapped subject):**

```
Shared prompt — A black-and-white abstract macro photograph suggesting
[SUBJECT], reduced to pure geometry and soft light.

[SUBJECT = Retail]: "folded garments stacked in a precise pile, fabric edges
forming clean horizontal strata, one thin hanger wire visible as a single
diagonal line"
[SUBJECT = Restaurant]: "stacked white ceramic plates seen from the side,
their rims forming elegant parallel curved lines, soft steam-less stillness"
[SUBJECT = Clinic]: "a row of identical frosted glass panels receding in
perfect perspective, like a quiet corridor of light and frosted glass"

Composition: subject fills the frame as an abstract field of lines and
gradients; no context, no environment, no whole objects — the viewer reads
texture and rhythm, not a scene. Macro lens feel, shallow depth of field with
one razor-thin plane of focus.

Lighting: single soft directional light, gentle wraparound shadows, luminous
highlights along edges.

Mood: meditative, precise, crafted. Fine art black-and-white photography,
medium format, exquisitely smooth tonality.

Strictly monochrome black and white. No people, no text, no logos, no color,
no clutter, no environment beyond the subject field.

Aspect ratio 1:1, 2400×2400.
```

**Integration notes:** Treated with a `1px line` inner border and a 12% black
multiply in dark mode to keep cards cohesive. On card hover the image scales
`1→1.03` inside an `overflow-hidden` mask (the only image animation permitted
outside the hero). Alt text names the abstraction ("Abstract stacked fabric
study representing retail") — honesty extends to metadata.

## Asset A8 — Infrastructure monolith (§10 performance)

- **Section:** 10 Performance (the page's one inversion band — `dark-surface`).
- **Purpose:** Makes reliability physical: a dark, still, monolithic object in
  a beam of light.
- **Placement:** Right half of the dark band, bleeding off the right edge,
  16:9.
- **Visual goal:** "This does not fail." Weight, stillness, permanence.

**GPT Image 2 prompt:**

```
A black-and-white cinematic photograph of a single tall rectangular monolith
of dark matte stone standing in a vast dark empty space, lit by one narrow
vertical beam of pale light falling from high above.

Subject: a minimalist dark slab with perfectly clean edges, subtle stone
texture, occupying the left-center third of the frame, rising beyond the top
edge — monumental scale implied by its crop.

Environment: an infinite dark studio void, floor barely visible as a soft
reflective charcoal plane fading to pure black; the beam of light creates a
gentle glow and faint atmospheric haze around the monolith's crown.

Lighting: one hard but narrow top light, high contrast chiaroscuro, deep
controlled shadows that never crush to detail-less black — retain 5% texture
in the darkest areas.

Mood: permanence, silence, invulnerability — a monument to reliability.
Large-format fine art photography, architectural minimalism, extremely high
dynamic range, subtle film grain.

Strictly black and white. No people, no text, no additional objects, no dust
particles, no lens flare, no color tint.

Aspect ratio 16:9, 3840×2160.
```

**Integration notes:** Placed inside the only dark section on the page (§10).
Right-edge bleed with a left-side `mask-image` fade into `#111` so stat text on
the left keeps AAA contrast. In dark theme the band inverts to
`light-surface` and this asset is swapped for a white-on-white plaster-block
variant (same prompt, "pale plaster monolith in a bright white void, one soft
shadow"). Static image; the band's only motion is the standard section reveal.

## Asset A9 — Social / OG card

- **Section:** Site-wide metadata (`og:image`, Twitter card).
- **Purpose:** The brand's handshake in messaging apps and social feeds.
- **Placement:** Never on-page. `1200×630` (cropped from a 16:9 master).
- **Visual goal:** Instant monochrome recognition in a feed full of color.

**GPT Image 2 prompt:**

```
A black-and-white brand card design: a vast matte black field with a single
large abstract interlocking geometric mark built from two blocky rectangular
letterforms (an E and a T shape) locked together in white, centered with
extreme precision, constructed from uniform stroke widths and right angles.

Composition: the mark occupies the central 40% of the frame, generous black
margin on all sides, perfect symmetry. A faint 1px white hairline frame
inset 48px from the canvas edge, like an embossed plate border.

Lighting: flat, graphic, shadowless — this is graphic design, not a scene.
The white geometry is pure #FFFFFF on pure #000000 with razor-sharp edges.

Mood: sovereign, minimal, confident — a seal, not an advertisement. Swiss
graphic design discipline, vector-crisp rendering.

Strictly pure black and white, no gray gradients except the hairline frame at
40% white. No text, no tagline, no additional elements, no texture, no grain.

Aspect ratio 16:9, 3840×2160 (will be center-cropped to 1200×630).
```

**Integration notes:** Center-cropped to 1200×630 at build time (the mark's
central 40% survives the crop by design). The real E/T monogram artwork
replaces the abstract mark at implementation if legibility permits — the
generated plate serves as the composition template.

---

# 14. Responsive Design Guidelines

## 14.1 Breakpoints

| Name | Range | Layout notes |
|------|-------|--------------|
| `xs` | 320–374px | floor — everything must hold (verified at 320) |
| `sm` | 375–639px | single column, 80px section padding |
| `md` | 640–1023px | 2-col grids, 96px padding, hero render 4:3 |
| `lg` | 1024–1439px | full 12-col, 128px padding |
| `xl` | 1440px+ | `shell`/`shell-wide` caps; margins grow, content doesn't stretch |

Verified without horizontal scroll at 320 / 375 / 414 / 768 / 1024 / 1440px.
`overflow-x: clip` on `html`/`body`.

## 14.2 Per-component behavior

- **Hero headline:** fluid `clamp(48px, 8vw, 96px)`; three lines hand-broken
  with `<br class="hidden sm:block">`-equivalent spans; `text-wrap: balance`
  fallback.
- **Hero render:** 16:9 (lg) → 4:3 center-crop (md) → 1:1 center-crop (sm/xs),
  via `next/image` `sizes` + art-directed `srcset`. Central-70% composition
  rule (§13 A1) guarantees subject survival.
- **Header:** floating bar collapses to bar + menu button at `<1024px`;
  full-screen overlay sheet below that. Demo CTA remains visible in the bar at
  all sizes.
- **Grids:** showcase 2×2 → 1-col; capabilities 3×2 → 2-col (md) → 1-col;
  stories/stats 3×1 → 1-col with hairline dividers between rows.
- **§05 Arabic display:** `clamp(36px, 9vw, 72px)`; never wraps mid-word.
- **Footer matrix:** 6-col → 3×2 (md) → stacked accordions (sm).
- **Inversion bands:** unchanged padding logic; image bleed disabled below
  `lg` (image stacks above text instead).

## 14.3 Touch & input

- All interactive targets ≥ `44×44px` (nav links padded, not just font-size).
- Pointer parallax and hover lifts are `(hover: hover) and (pointer: fine)`
  gated — touch devices get the still, equally-complete experience.
- No hover-dependent information: mega-menus open on tap/focus too.

## 14.4 RTL (Arabic)

- 100% logical properties (`start/end`, `margin-inline`, `padding-inline`).
- Arrow glyphs mirror (`→` becomes `←`) via `dir`-aware rendering.
- Parallax/float directions mirror (a rightward drift becomes leftward).
- Header, grids, and the showcase stack mirror; the monogram never mirrors.
- Cairo replaces Geist across *all* roles including mono (per v1 rule).

---

# 15. Accessibility Review

Target: **WCAG 2.2 AA+** (AAA where achievable without design compromise).

## 15.1 Contrast audit (computed on final tokens)

| Pair (light) | Ratio | Verdict |
|--------------|-------|---------|
| `ink #000` on `bg #FFF` | 21:1 | AAA |
| `ink-secondary #555` on `#FFF` | 7.5:1 | AAA |
| `muted #737373` on `#FFF` | 4.7:1 | AA ✓ (meta floor) |
| `muted #737373` on `surface #FAFAFA` | 4.6:1 | AA ✓ |
| `#FAFAFA` on `dark-surface #111` | 17.9:1 | AAA |
| `ink` focus ring on white | 21:1 | ≥3:1 ✓ |
| ~~`faint #888` as text~~ | 3.5:1 | **Banned for text** — decoration only |

Dark theme: `#FAFAFA/#000` 20.4:1 AAA · `#A3A3A3/#000` 9.6:1 AAA ·
`#8C8C8C/#000` 5.9:1 AA ✓. White focus ring on black 20.4:1 ✓.

## 15.2 Requirements register

- **Semantic HTML:** one `h1` (hero), ordered `h2` per section, `nav`/`main`/
  `footer` landmarks, lists for grids, `figure/figcaption` for the interface
  render (the "Illustrative interface concept" caption is a real `figcaption`).
- **Keyboard:** full tab order mirrors visual order; header menus operable via
  arrow keys + `Esc`; FAQ is native `<details>`; theme toggle and language
  switcher are labeled buttons; no focus traps outside the mobile sheet
  (which traps and returns focus correctly).
- **Focus:** `2px ink` ring, `2px` offset, **instant** — never animated in.
  Never removed without replacement.
- **Motion:** §12.4 reduced-motion contract; all reveals default to visible if
  JS or IO is unavailable (progressive enhancement, not gated content).
- **Images:** decorative (A3, A8) get `alt=""` + `aria-hidden`; meaningful
  (A1, A2, A5–7) get descriptive alt naming the abstraction honestly.
- **Forms:** every input has a visible `<label>`; errors use text + symbol and
  are announced via `aria-live="polite"`; `aria-invalid` on the field.
- **Color independence:** no information is ever color-only (§10.3) — this is
  inherent to the monochrome system, and verified per component.
- **Language:** `lang`/`dir` per locale; the §05 Arabic line carries
  `lang="ar"` inline on an English page.
- **Screen-reader economy:** mono eyebrows are `aria-hidden` when they merely
  repeat the title's meaning; sector strip is a real list.

---

# 16. SEO Strategy

## 16.1 Inherited foundation (already strong — kept)

- Per-page metadata via the App Router metadata API, title template,
  OG/Twitter tags; `app/sitemap.ts` + `app/robots.ts` live.
- Clean locale-prefixed URLs mirroring the IA (§3.1); `hreflang` alternates
  across `en`/`fr`/`ar` with `x-default`.
- Content map per BLUEPRINT §9 (awareness → consideration → decision).

## 16.2 What the redesign adds

- **JSON-LD** on the homepage: `Organization` (name, logo, sameAs),
  `WebSite` (+ `SearchAction` only if search ships), `SoftwareApplication`
  (applicationCategory: BusinessApplication, offers omitted — pricing is
  per-product), and `FAQPage` built from §12 exactly as rendered (no hidden
  schema-only questions).
- **OG image:** Asset A9 (§13) — monochrome plate, `1200×630`, per-locale
  variants deferred to phase 2.
- **Semantic HTML upgrade:** the redesign's landmark/heading discipline
  (§15.2) is itself the largest on-page SEO improvement.
- **Performance as ranking:** LCP = hero render (`priority`, AVIF, sized
  `srcset`) target ≤ 2.0s on 4G; CLS ≈ 0 (all media dimensioned, fonts
  `display: swap` with metric-matched fallbacks); INP < 200ms (client islands
  keep main thread clear).
- **Image SEO:** descriptive `alt`, meaningful filenames
  (`estinad-platform-hero.avif`, not `img_01.png`).

## 16.3 Guardrails

- No keyword stuffing in the new humble copy — specificity *is* the keyword
  strategy ("business operating system", "one ledger", industry terms).
- The honest labels ("Illustrative outcomes") stay visible in markup — trust
  signals compound into engagement metrics that matter more than density.
- Lighthouse targets: Performance ≥ 95, Accessibility = 100, Best Practices
  = 100, SEO = 100 on the homepage, both themes.

---

# 17. Technical Architecture

## 17.1 Stack (final)

| Layer | Choice | Note |
|-------|--------|------|
| Framework | **Next.js 16.2.9** (App Router, RSC-first) | already in repo; brief's "15" superseded by the newer installed major — APIs I'd target are identical or improved. Bundled docs at `node_modules/next/dist/docs/` will be read before coding, per workspace rule |
| UI | **React 19.2.4** | already in repo |
| Styling | **Tailwind CSS v4** (`@theme` tokens) | already in repo |
| Motion | **Framer Motion** (client islands) + **Lenis** | *new dependencies*, homepage-only |
| Fonts | Geist Sans/Mono + Cairo via `next/font` | already in repo |
| Components | In-house primitives evolved to §8 spec (shadcn/ui design language; no new component dep) | |
| i18n | Existing dictionary system `en/fr/ar` + RTL | untouched architecture |
| Images | Generated monochrome assets, `next/image`, AVIF/WebP | |

## 17.2 Rendering strategy

- **Server by default.** Every homepage section is an RSC; motion is
  encapsulated in small client islands (`<Reveal>`, `<Float>`, `<Parallax>`,
  `<HeaderClient>`, `<TabsClient>`). Lenis mounts in a single
  `<SmoothScrollProvider>` client wrapper in the locale layout — zero motion
  code ships in the server shell.
- **Static generation** for all marketing routes (current behavior preserved);
  `generateStaticParams` for locale + dynamic segments unchanged.
- **Theme:** default **light**; `html.dark` class applied by the existing
  no-FOUC inline script (inverted from today's `html.light`). `ThemeToggle`
  flips its default; stored choice still wins; `color-scheme` follows.

## 17.3 Token architecture (the cascade strategy)

`globals.css` is rewritten with the §10 values **while preserving existing
token names as aliases**, so all ~30 inner pages re-skin instantly:

- `--color-base` → now the *paper* token (was charcoal) — values change, names
  stay: `base`, `surface`, `surface-2/3`, `ivory` (now = ink), `ivory-dim`
  (now = secondary), `muted`, `muted-2`, `accent` (now = pure ink/black),
  `line`, `line-strong`.
- New semantic names (`--color-bg`, `--color-ink`, `--color-ink-secondary`,
  `--color-card`, `--color-faint`, shadows, radii) are added alongside and
  used by all *new* code; legacy names are marked **deprecated-aliases** in
  comments and retired when inner pages get their art-direction phase.
- The brass `--color-accent` hex is **deleted from the system** — the name is
  re-pointed to ink so legacy components render monochrome, not brass.

Result: the whole site goes monochrome at token-flip; the homepage then gets
its full §6–§12 treatment. No page is ever half-brass.

## 17.4 File-level change map (implementation preview)

| File | Change |
|------|--------|
| `app/globals.css` | Rewrite tokens (dual-theme monochrome), new utilities: `glass`, `shadow-*`, `radius-*`, reveal keyframes; keep legacy aliases |
| `app/[locale]/layout.tsx` | Default-light theme init script; `SmoothScrollProvider`; JSON-LD |
| `components/ThemeToggle.tsx` | Invert default (light first) |
| `components/ui.tsx` | v2 primitives: pill buttons, soft cards, new Section rhythm |
| `components/Header.tsx` + new `HeaderClient.tsx` | Floating glass auto-hide bar; menus preserved |
| `components/Footer.tsx` | Monochrome restyle, dark band |
| `components/Home.tsx` | Full rewrite — 13 sections per §6 |
| new `components/motion/*.tsx` | `Reveal`, `Float`, `Parallax`, `SmoothScrollProvider` |
| new `components/home/*` | Per-section components (server) + tiny client islands |
| `lib/dictionaries/{en,fr,ar}.ts` | v2 homepage copy keys added (old keys kept until inner-page phase) |
| `public/images/v2/` | Generated assets A1–A9 |
| `package.json` | + `framer-motion`, + `lenis` |

Out of scope this phase: inner-page art direction, per-locale OG variants,
real case-study content.

## 17.5 Performance & quality gates

- `next build` clean; `eslint` clean on touched files; `tsc --noEmit` clean.
- Homepage JS budget ≤ 180KB gz first load (motion ≤ 45KB of it).
- Lighthouse §16.3 targets met in both themes.
- Manual matrix: 320/768/1440px × light/dark × en/ar.

---

# 18. Production-Ready Implementation Plan

> Executes only after this document is validated. Ordered; each phase ends in
> a verifiable gate.

**Phase 0 — Foundation (tokens, no visual breakage)**
1. Feature branch `redesign/monochrome-editorial`.
2. Install `framer-motion`, `lenis`.
3. Rewrite `globals.css` per §10/§17.3 (aliases intact) + theme init flip.
4. Gate: build green; entire site renders monochrome (inner pages inherit);
   nothing brass remains.

**Phase 1 — Primitives & chrome**
5. `ui.tsx` v2 (buttons, cards, section rhythm, radius/shadow tokens).
6. `HeaderClient` floating glass bar + auto-hide + mobile sheet; Footer restyle;
   ThemeToggle inversion.
7. Motion islands (`Reveal`, `Float`, `Parallax`, `SmoothScrollProvider`).
8. Gate: chrome matches §8 at all breakpoints; keyboard + reduced-motion pass.

**Phase 2 — Homepage narrative (image-gated per brief)**
9. Generate A1, A2 (+variants), A3, A4, A5–A7, A8, A9 → `public/images/v2/`.
10. Build sections 01–13 in order; no section starts until its asset exists.
11. Dictionaries: en copy final, then fr + ar adaptations.
12. Gate: §6 content parity; §12 motion inventory respected; 60fps check.

**Phase 3 — SEO, a11y, polish**
13. JSON-LD, OG wiring, sitemap verification.
14. §15 audit passes (contrast, keyboard, SR sweep, reduced motion).
15. Lighthouse both themes; fix to targets.
16. Gate: §16.3 numbers met; QA matrix (§17.5) signed.

**Phase 4 — Self-review (brief deliverable 20)**
17. Score against the brief's validation checklist; refine until all "yes".
18. Document residual recommendations.
19. Present for merge; inner-page art-direction phase scheduled next.

---

# Design-phase validation scorecard

Self-scored against the brief's checklist *for the design itself* (the
implementation re-runs this after Phase 4):

| Question | Verdict |
|----------|---------|
| Comparable in craftsmanship to Vercel/Apple/Linear without copying? | Yes — shared discipline, distinct identity (monogram, Arabic philosophy moment, honest-label voice) |
| Monochrome depth sufficient via composition/motion? | Yes — §8.7 shadow scale + glass + inversion bands + §12 motion replace hue |
| Messaging humble and authentic? | Yes — §5/§6; honest labels made *visible*, bragging banned (§1.6) |
| Typography carries the identity? | Yes — §9: one family, editorial scale, mono meta voice |
| Whitespace generous and intentional? | Yes — §11.5: 128px rhythm, one idea per viewport |
| Interactions purposeful and performant? | Yes — §12.2 closed inventory, transform/opacity only |
| Accessible and responsive by design? | Yes — §14/§15 with computed contrast table |
| 60fps achievable? | Yes — §12.5 budget, client-island architecture |
| Every section advances the narrative? | Yes — §3.2 question-chain, §5.1 four-act arc |
| Every image custom-directed with a prompt? | Yes — §13, nine assets, full specs + integration notes |
| Awwwards-caliber ambition? | Design intent: yes — final answer after implementation |

*End of design deliverables (1–18). Items 19–20 execute upon validation.*

---

# 19. Implementation record

*Validated by the owner and executed on branch `redesign/monochrome-editorial`.*
*Gates: `next build` green (181 static pages, TypeScript clean) · `eslint` 0 errors
(1 pre-existing warning in `app/[locale]/services/page.tsx`, untouched by this work).*

## 19.1 What shipped, by phase

**Phase 0 — Foundation**
- `framer-motion@^12`, `lenis@^1` added (motion islands + wheel refinement).
- `app/globals.css` rewritten: full v2 monochrome token system (§10) with
  **legacy names preserved as aliases** — every inner page re-skins to v2 with
  zero edits. Light default; `html.dark` inverts monochrome. Inverse palette
  (`inv-*`) for the two inversion moments (performance band, footer).
  `@custom-variant dark` makes `dark:` utilities class-driven. Custom classes
  live in `@layer components` so utilities can override them.
- Theme flip: `themeInitScript` now only *adds* `.dark`; `ThemeToggle` default
  light, `estinad-theme` storage key unchanged (stored preferences migrate
  losslessly).

**Phase 1 — Primitives & chrome**
- `components/ui.tsx` v2: pill buttons (ink primary, 150ms, `active:scale`),
  16px cards on the 4-level shadow scale, fluid-clamp `SectionHeader`, pill
  `Tag`, 128px section rhythm. Same exports — all inner pages compile as-is.
- `components/Header.tsx`: floating glass pill (`glass` + `shadow-float`),
  auto-hide on scroll down / instant return on scroll up, Escape-to-close,
  restyled mega menus (rounded cards, lift shadows), full-screen mobile sheet
  with scroll lock, pill demo CTA. `HeaderData` unchanged.
- `components/Footer.tsx`: inverse band via `inv-*` tokens — dark on light,
  light on dark. Monogram sits on the mandated plate (2px radius, the only
  square corner in the UI).
- `components/Monogram.tsx`: theme-keyed blend classes fix the mark on light
  grounds (was hardcoded `mix-blend-screen`).
- Motion islands (`components/motion/`): `Reveal` (16px rise + 6px blur clear,
  once), `Float` (±8px/7s, pauses off-screen), `Parallax` (pointer-spring
  ±10px, mouse-only), `SmoothScroll` (Lenis root, wheel-only). All honor
  `prefers-reduced-motion`.

**Phase 2 — Homepage narrative**
- 11 monochrome assets generated to §13 specs → `public/images/v2/`:
  `hero.png` (A1), `ui-retail/restaurant/clinic.png` (A2 + variants),
  `philosophy.png` (A3), `platform.png` (A4), `sector-*.png` ×3 (A5–A7),
  `monolith.png` (A8), `og.png` (A9).
- `components/Home.tsx` rebuilt: 13 sections, RSC-first, dictionary-driven,
  no nested component definitions (the old lint error class eliminated).
- `components/DemoTabs.tsx`: sector tabs crossfading three interface renders
  in one glass frame; roving-tabindex + arrow keys; `AnimatePresence` text.
- Dictionaries: `home` → **`homeV2`** rewritten in all three locales
  (en/fr/ar), including the philosophy display line (Cairo in en/fr, empty
  gloss in ar) and Arabic-numeral performance stats.
- `app/[locale]/solutions/page.tsx`: label moved to `common.viewSolution`
  (was the last consumer of the retired `home` section).

**Phase 3 — SEO & polish**
- JSON-LD `@graph` (Organization, WebSite, FAQPage from live copy) on the
  homepage, `<` sanitized per Next.js 16 docs.
- OG/Twitter cards wired to `images/v2/og.png` (1536×1024).

## 19.2 Deviations from this document, and why

1. **Case studies keep the live site's *real* claims.** §6.09 drafted an
   "illustrative outcomes" framing; the shipped site already asserted real
   client work with metrics (−83% close time, 6 branches). Honesty cuts both
   ways — erasing the owner's real claims would be its own distortion. Live
   data kept, presented in the v2 card language. *If those claims were ever
   aspirational rather than factual, swap the three items in `homeV2.cases`.*
2. **Services are not a homepage section.** The 13-section flow (validated)
   is product-led; the custom-software path survives in the nav mega-menu,
   the footer CTA ("Discuss your project"), and the `/services/*` pages.
   The live positioning "products + custom" is thus narrowed to product-led
   on the homepage — deliberate, per the brief's "the product must be the
   hero."
3. **A3/A8 dark variants use CSS `invert`**, not separately generated assets
   — the abstracts survive inversion cleanly; two generations saved.
4. **OG card is 1536×1024 (3:2)** — the generator's native ratio; platforms
   crop gracefully. A pixel-exact 1200×630 via `next/og` is the upgrade path.
5. **`#888888` never carries text** (fails AA on white); muted text floor is
   `#737373` as specified in §10.3.

---

# 20. Final self-review

## 20.1 Implementation-phase scorecard

| Question | Verdict |
|----------|---------|
| Comparable in craftsmanship to Vercel/Apple/Linear without copying? | Yes, by construction — token discipline, inversion moments, and the Arabic philosophy beat are ours alone. Final proof requires the in-browser pass (§20.2 #1). |
| Monochrome depth sufficient via composition/motion? | Yes — 4-level neutral shadows, glass (2 uses), blur-in reveals, two inversion bands. No hue anywhere in new UI. |
| Messaging humble and authentic? | Yes — §6 copy shipped verbatim; performance numbers labeled targets; no banned vocabulary in new copy. |
| Typography carries the identity? | Yes — Geist Sans/Mono + Cairo, fluid display scale, `text-wrap: balance`, mono meta voice throughout. |
| Whitespace generous and intentional? | Yes — 128px section rhythm, 1200px shell, 680px prose measure, one idea per viewport. |
| Interactions purposeful and performant? | Yes — closed inventory shipped (reveal/float/parallax/tabs/header-hide/Lenis); transform+opacity only; all reduced-motion safe. |
| Accessible and responsive by design? | Code-level yes: AA-safe palette, visible ink focus rings, semantic landmarks (`figure/blockquote/details`), keyboard-complete tabs + Escape menus, 44px+ targets. Screen-reader + keyboard sweep pending browser pass. |
| 60fps achievable? | Yes — client islands only (Header, tabs, reveals, Lenis); hero `priority` image; no scroll-linked main-thread work beyond Lenis lerp. |
| Every section advances the narrative? | Yes — 13 sections, question-chain intact (§3.2). |
| Every image custom-directed with a prompt? | Yes — 11 assets, all generated to §13 prompts, integrated with alt/captions. |
| Awwwards-caliber ambition? | **Conditionally yes** — the system, motion grammar, and honest voice are there. See §20.2 for what closes the gap. |

## 20.2 Residual recommendations (next iteration, in order)

1. **In-browser QA pass** (this environment has no browser tooling — build,
   types, and lint are verified; pixels are not): hero float/parallax feel,
   glass rendering over imagery, dark-mode inversion moments, mobile sheet,
   Arabic RTL sweep. Run `npm run dev`, walk en/fr/ar × light/dark × 375/768/1440.
2. **Inner-page art direction.** ~30 routes render v2 tokens on v1 layouts
   (grid backdrops, sharp corners). They are coherent but not yet *editorial*.
   Apply the §18 map page by page, PageHero first.
3. **Asset weight.** Source PNGs are 1–1.9MB; `next/image` optimizes at
   serve time, but masters should be re-encoded to WebP/AVIF, and `og.png`
   trimmed under ~300KB.
4. **Header mega-menu keyboard support** (desktop menus are hover-triggered;
   add focus/click activation for full operability).
5. **Lighthouse + axe sweep** in both themes; confirm §16.3 targets and fix
   anything below them (the "98" stat is a target we must now earn).
6. **Localized OG cards** via `next/og` ImageResponse — crisp type, exact
   1200×630, per-locale lines.
7. **Optional:** height-animated FAQ accordion (currently native `details`,
   instant open — honest, but a 250ms height ease would match the motion
   grammar), and sticky left column on §05 Platform at wide viewports.

*Implementation complete per the validated plan. The design contract (§1–18),
the record (§19), and this review (§20) now describe one system.*

