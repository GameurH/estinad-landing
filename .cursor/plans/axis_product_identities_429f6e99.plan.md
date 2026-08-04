---
name: Axis Product Identities
overview: Transform the four generic deployment kits into the ESTINAD Axis family, with localized premium naming, original visual assets, richer catalog cards, and enterprise-grade product detail pages while preserving quote-led flows and non-binding technical claims.
todos:
  - id: axis-copy
    content: Define and localize the ESTINAD Axis family identities and richer product content
    status: completed
  - id: axis-assets
    content: Generate, inspect, and organize the sixteen original Axis visual assets
    status: completed
  - id: axis-data
    content: Extend typed hardware media, included-item, and grouped-spec models
    status: completed
  - id: axis-catalog
    content: Upgrade hardware catalog cards with responsive product imagery and taglines
    status: completed
  - id: axis-details
    content: Build premium kit heroes, gallery, included illustration, specs, and product links
    status: completed
  - id: axis-verify
    content: Run multilingual responsive visual QA, lint, type checks, build, and route checks
    status: in_progress
isProject: false
---

# ESTINAD Axis Product Identity Plan

## Product family and copy
- Rebrand the existing slugs without changing routes or quote payloads:
  - `retail-counter-kit` → **ESTINAD Axis Counter** — “A complete checkout position, prepared before it reaches the counter.”
  - `restaurant-counter-kit` → **ESTINAD Axis Service** — “A service-ready counter system built for the pace of hospitality.”
  - `inventory-kit` → **ESTINAD Axis Inventory** — “Scan, label, and move stock with one prepared field kit.”
  - `multi-site-rollout` → **ESTINAD Axis Fleet** — “One hardware standard, deployed consistently across every site.”
- Expand each kit in [lib/dictionaries/en.ts](lib/dictionaries/en.ts), [lib/dictionaries/fr.ts](lib/dictionaries/fr.ts), and [lib/dictionaries/ar.ts](lib/dictionaries/ar.ts) with localized family name, tagline, image alt/captions, operational-fit copy, included-item labels, deployment captions, and grouped specification headings. Keep “Axis” as the global proper name while localizing descriptors and supporting copy.
- Keep all claims generic and non-binding: no fabricated CPU/RAM, certifications, brands, compatibility guarantees, or performance metrics.

## Original visual system and assets
- Generate 16 original, self-hosted editorial CGI assets under `public/images/hardware/<kit-slug>/`: one 4:3 studio hero, one detail/close-up, one 16:9 real-world deployment scene, and one exploded “What’s Included” composition per kit.
- Establish one consistent art direction across all assets: neutral white/graphite hardware, soft architectural daylight, restrained Algerian commercial environments, asymmetrical crops, minimal props, no gradients, no visible third-party marks, no embedded text, no customer logos, and no people posed as testimonials.
- Use the first Axis Counter hero as the visual reference for subsequent generations so materials, lighting, device proportions, and color grading remain coherent. Inspect every output for impossible hardware, duplicated objects, malformed hands, accidental logos, or marketplace styling; regenerate failures.
- Treat scenes as illustrative deployment references, not proof of installed customers. Reuse hero assets for catalog cards and Open Graph images rather than generating redundant variants.

## GPT Image 2 production prompt system
Use these prompts verbatim as the first generation pass. Generate the Axis Counter hero first; after approval, attach it as the visual reference for every remaining image. For images within a product, also attach that product’s approved hero. The reference controls materials, industrial-design language, black-glass treatment, device proportions, lighting, and neutral grade—not the exact composition.

### Shared continuity lock
Apply this continuity block to every prompt:

> Create an original enterprise hardware marketing image for the ESTINAD Axis certified deployment family. Photorealistic editorial CGI with physically plausible industrial design, precise seams, realistic ports and cable paths, and premium but serviceable commercial equipment. The family material language is matte warm-white ceramic polymer, fine bead-blasted graphite aluminum, low-reflection black glass, and restrained brushed-silver details. Palette: warm white, graphite, charcoal, soft concrete gray, muted natural oak, and at most a tiny neutral status light. Soft architectural daylight at 5200K from camera-left, a large diffused overhead softbox, gentle negative fill camera-right, controlled contact shadows, subtle edge highlights, no dramatic glow. Calm, exact, architectural, premium B2B—not consumer electronics, luxury jewelry, gaming hardware, science fiction, or an online marketplace. No visible logos, no brand marks, no readable text, no prices, no badges, no packaging slogans, no gradients, no neon, no blue tech glow, no floating UI, no stock-photo smiles, no clutter. Screens may show only abstract grayscale interface geometry with no readable words or numbers. Preserve realistic scale and ergonomics; each object appears once unless repetition is explicitly requested. Natural lens behavior, restrained depth of field, clean tonal separation, realistic material microtexture, production-ready commercial art direction. Leave safe crop margins and avoid placing critical objects within the outer 8% of the frame.

### ESTINAD Axis Counter

#### 1. `public/images/hardware/retail-counter-kit/hero.png`
**Aspect:** 4:3 landscape, 2048×1536 master.

> [Shared continuity lock.] Studio hero portrait of one complete fixed retail checkout configuration: a slim 15-inch-class touchscreen terminal on a stable low-profile graphite stand, a compact presentation barcode scanner, a small thermal receipt printer, and a closed cash drawer integrated beneath the terminal plinth. Arrange the system as one coordinated deployment rather than separate products: terminal slightly left of center, scanner forward-right, printer behind the scanner, cash drawer visually anchoring the base. Three-quarter front camera angle from slightly above counter height, 50 mm full-frame lens, camera pitched down about 6 degrees. Place the equipment on a pale architectural stone counter against a warm-white seamless background with one subtle vertical wall joint. Light from upper-left creates a crisp edge along the black glass and soft grounded shadows toward lower-right. Screen contains only a quiet grayscale point-of-sale layout made of rectangles and lines. Composition is spacious, asymmetrically balanced, and immediately readable at card size. Materials must look durable and commercial, not delicate or futuristic. No loose cables except one precisely routed graphite cable disappearing through a counter grommet. No hands or people. No retail merchandise. No logos or text.

#### 2. `public/images/hardware/retail-counter-kit/detail.png`
**Aspect:** 4:3 landscape, 2048×1536 master.

> [Shared continuity lock; match the approved Axis Counter hero exactly.] Editorial close-up showing the operational relationship between the presentation barcode scanner and thermal receipt printer. The scanner occupies the near foreground at lower-left, its optical window dark and clean; the receipt printer sits mid-right with a short blank receipt emerging, paper texture visible but absolutely no printed text. A cropped edge of the matching terminal stand appears in the upper background to establish family continuity. Low three-quarter angle at counter level, 85 mm macro-style lens, shallow but not extreme depth of field: scanner and printer controls sharp, terminal softly receding. Soft side daylight skims the graphite microtexture, with a narrow white bounce revealing the scanner window. Pale stone worktop, warm-white background, no props. Composition leaves negative space in the upper-left for an HTML caption outside the image. No logos, symbols, barcode, readable receipt content, hands, duplicated devices, or dramatic reflections.

#### 3. `public/images/hardware/retail-counter-kit/deployment.png`
**Aspect:** 16:9 landscape, 2048×1152 master.

> [Shared continuity lock; match the approved Axis Counter hardware.] Real-world deployment reference inside a refined small Algerian retail shop before opening hours. One Axis Counter system installed on a clean checkout desk in the right third of frame; organized shelves with neutral unbranded packages recede softly on the left. Architectural context uses warm plaster, pale terrazzo, muted natural oak, and a restrained geometric metal screen inspired by contemporary North African interiors—subtle, not decorative theme styling. Eye-level camera from the customer approach path, 35 mm full-frame lens, straight verticals, terminal readable but not dominant. Morning daylight enters from a storefront off camera-left, supplemented by soft ceiling illumination; believable shadow direction and balanced interior exposure. The scene is operational, calm, and uncluttered, with no customers or staff and no signage. Show a discreet cable grommet and correctly positioned scanner/printer. No brands, prices, sale graphics, colorful products, exaggerated depth of field, or showroom luxury.

#### 4. `public/images/hardware/retail-counter-kit/included.png`
**Aspect:** 16:9 landscape, 2048×1152 master.

> [Shared continuity lock; match every Axis Counter device exactly.] “What’s Included” exploded composition on a warm-white studio surface: terminal and stand, presentation barcode scanner, thermal receipt printer, cash drawer, and a compact installation accessory set containing one cable loom and one counter grommet. Arrange five clearly separated groups from left to right in a shallow three-quarter top-down view, with generous white space between objects for HTML numbered pins. Camera at 55 degrees above the surface, 55 mm full-frame lens, near-orthographic perspective with minimal distortion. All objects face the same logical front direction and cast soft consistent contact shadows. The cash drawer sits low and wide at back-left; terminal is the visual anchor near center; smaller peripherals balance the right side. No labels, numbers, callout lines, text, packaging, manuals, logos, floating objects, duplicate cables, or impossible connectors. This is a precise component plate, not a consumer unboxing image.

### ESTINAD Axis Service

#### 5. `public/images/hardware/restaurant-counter-kit/hero.png`
**Aspect:** 4:3 landscape, 2048×1536 master.

> [Shared continuity lock; inherit the approved Axis Counter family materials and terminal geometry.] Studio hero of a coordinated hospitality counter system: the same slim touchscreen terminal on a compact graphite stand, a thermal receipt printer, a closed cash drawer integrated below, and restrained counter accessories consisting of a cable-management spine and a low-profile customer-facing display block with a blank dark surface. Arrange the terminal slightly right of center, printer forward-left, accessory block at far-left, drawer anchoring the base. Three-quarter front angle from standing service-counter height, 50 mm full-frame lens, camera pitched down 5 degrees. Surface is muted honed concrete; background is warm white with a single soft shadow plane. Lighting is broad architectural daylight from upper-left plus soft overhead fill, emphasizing easy-clean surfaces and precise cable organization. Screen displays only abstract grayscale order tiles without words, numbers, menu photos, or colors. No food, drinks, utensils, people, logos, receipt text, or colorful restaurant cues. It should communicate speed, order, and durable hospitality operation—not lifestyle dining.

#### 6. `public/images/hardware/restaurant-counter-kit/detail.png`
**Aspect:** 4:3 landscape, 2048×1536 master.

> [Shared continuity lock; match the approved Axis Service hero.] Tight technical beauty shot of the hospitality printer and cable-management system beneath the terminal stand. Printer occupies lower-left with a short blank receipt; the graphite cable spine runs vertically behind the terminal base at center-right, showing tidy strain relief and one believable connector path. A narrow crop of the black-glass terminal edge catches a controlled highlight. Camera at a low 30-degree angle, 85 mm lens, moderate shallow depth of field with printer slot, cable routing, and stand texture sharp. Cool-neutral concrete counter against warm-white plaster creates restrained material contrast. Side light from camera-left with negative fill creates dimensional graphite edges; no glossy showroom flare. Leave calm negative space at upper-right. No food, hands, logos, text, menu interface, exposed tangled cables, duplicate ports, or impossible geometry.

#### 7. `public/images/hardware/restaurant-counter-kit/deployment.png`
**Aspect:** 16:9 landscape, 2048×1152 master.

> [Shared continuity lock; match the approved Axis Service hardware.] Real-world deployment reference in a contemporary Algerian café counter before service. The Axis Service system is installed in the left-center on a pale stone service counter; a clean pass-through and minimal shelving recede to the right. Architecture: warm lime plaster, charcoal metal, muted oak, one subtle handmade tile band in off-white and gray, no bright motifs. Eye-level three-quarter view from the service side, 35 mm full-frame lens, straight vertical lines and practical spatial proportions. Early daylight enters from camera-right through an unseen window; soft pendant ambient light adds gentle warmth without visible bulbs dominating. Show a clear counter workflow and tidy cable path, but no staff, customers, prepared food, branded cups, menu boards, or readable signage. Screen carries abstract grayscale order blocks only. The mood is calm readiness and operational precision, not a restaurant advertisement or hospitality lifestyle photo.

#### 8. `public/images/hardware/restaurant-counter-kit/included.png`
**Aspect:** 16:9 landscape, 2048×1152 master.

> [Shared continuity lock; match every Axis Service device exactly.] “What’s Included” component plate on a warm-white seamless studio floor: terminal with compact stand, thermal receipt printer, closed cash drawer, customer-facing display block, cable-management spine, and a small grouped set of mounting accessories. Shallow three-quarter top-down camera at 55 degrees, 55 mm lens, minimal perspective distortion. Terminal anchors center-left, drawer sits horizontally behind it, printer and display block balance center-right, accessories are neatly grouped at far-right. Maintain generous separation and clean negative space around each group for HTML numbered pins. Lighting is diffuse from upper-left with soft shadows all falling consistently lower-right. No food-service props, labels, text, numbers, packaging, manuals, logos, floating parts, duplicate accessories, or exploded internal electronics. Premium technical catalog plate, not consumer unboxing.

### ESTINAD Axis Inventory

#### 9. `public/images/hardware/inventory-kit/hero.png`
**Aspect:** 4:3 landscape, 2048×1536 master.

> [Shared continuity lock; carry forward the approved Axis material family.] Studio hero of a mobile inventory workflow kit: one rugged handheld barcode scanner with an integrated dark display, one compact label printer with a blank label strip, and one slim ruggedized tablet resting in a graphite charging dock. Arrange tablet upright in the rear-left, handheld scanner angled naturally in the foreground center, label printer mid-right. Three-quarter front view from slightly above workbench height, 50 mm full-frame lens, camera pitched down 8 degrees. Surface is pale powder-coated metal; background warm white with a restrained horizontal architectural seam. Soft daylight from upper-left and broad overhead fill reveal rubber grip texture, matte polymer, black glass, and brushed graphite without harsh highlights. Tablet and handheld screens show abstract grayscale inventory rows only, no text or numbers. One neatly coiled charging cable may appear behind the dock. No warehouse clutter, cardboard-brand markings, hands, logos, barcodes, colored status lights, futuristic holograms, or military styling. The result should feel portable, durable, and deliberately prepared.

#### 10. `public/images/hardware/inventory-kit/detail.png`
**Aspect:** 4:3 landscape, 2048×1536 master.

> [Shared continuity lock; match the approved Axis Inventory hero.] Technical close-up of the handheld scanner resting beside the label printer as one blank adhesive label exits the printer. Focus on tactile trigger geometry, scanner window, rubberized grip, label edge, and printer seam quality. Low three-quarter tabletop angle, 85 mm macro lens, moderate shallow depth of field: trigger and label slot tack sharp, tablet dock softly visible in background. Pale metal work surface with subtle micro-scratches appropriate to professional equipment; warm-white background. Grazing daylight from camera-left reveals texture while a soft overhead fill keeps black surfaces legible. Composition leaves negative space upper-left. No printed barcode, readable label text, hands, logos, duplicated labels, tangled cable, unrealistic transparent parts, or dramatic cyberpunk reflections.

#### 11. `public/images/hardware/inventory-kit/deployment.png`
**Aspect:** 16:9 landscape, 2048×1152 master.

> [Shared continuity lock; match the approved Axis Inventory hardware.] Real-world deployment reference in an organized stockroom of a small multi-branch business. A clean packing and inventory station occupies the foreground right: Axis label printer, docked tablet, and handheld scanner placed ready for use. Neutral shelving with unbranded cartons and simple blank shelf labels recedes to the left; a clear aisle creates depth. Architecture uses warm concrete, off-white powder-coated shelving, charcoal accents, and practical diffuse ceiling light, with subtle daylight entering from a high window camera-left. Eye-level 35 mm full-frame lens, straight verticals, realistic aisle width, moderate depth of field. No people, forklifts, logos, readable labels, barcodes, hazardous clutter, dramatic warehouse scale, or colorful packaging. The visual communicates disciplined stock work and mobility, not logistics spectacle.

#### 12. `public/images/hardware/inventory-kit/included.png`
**Aspect:** 16:9 landscape, 2048×1152 master.

> [Shared continuity lock; match every Axis Inventory device exactly.] “What’s Included” exploded component plate: handheld barcode scanner, compact label printer, rugged tablet, charging dock, one label roll, and one tidy charging cable. Arrange six visually distinct groups across a warm-white surface with the scanner diagonally placed at left, tablet and dock upright near center, printer at right, consumable/accessory group at far-right. Shallow three-quarter top-down camera at 55 degrees, 55 mm lens, near-orthographic and distortion-free. Consistent soft contact shadows lower-right, broad clean negative space for HTML numbered pins. Label roll and emitted label must be blank. No text, barcodes, numbers, labels, packaging, logos, duplicated accessories, floating objects, exploded internal parts, or marketplace flat-lay styling. This should read as a controlled enterprise equipment manifest.

### ESTINAD Axis Fleet

#### 13. `public/images/hardware/multi-site-rollout/hero.png`
**Aspect:** 4:3 landscape, 2048×1536 master.

> [Shared continuity lock; use the approved Axis Counter and Axis Service devices as exact family references.] Studio hero representing standardized multi-site deployment without showing a consumer product lineup. Show three complete Axis counter configurations at different depths on low architectural plinths, identical in materials and device geometry, aligned along a precise diagonal from front-right to back-left. The nearest configuration is fully visible; the second and third progressively recede but remain clearly identical. Three-quarter elevated camera, 45 mm full-frame lens, camera pitched down 10 degrees, controlled perspective with no fisheye distortion. Warm-white studio architecture with graphite floor inlay lines subtly connecting the stations, suggesting coordinated rollout without arrows or diagrams. Broad soft daylight from upper-left and overhead fill; consistent repeated shadows establish standardization. Screens show the same abstract grayscale layout. No text, site numbers, maps, people, packaging, logos, glow, network lines, floating UI, or excessive repetition. Premium enterprise system image emphasizing consistency and control.

#### 14. `public/images/hardware/multi-site-rollout/detail.png`
**Aspect:** 4:3 landscape, 2048×1536 master.

> [Shared continuity lock; match the approved Axis Fleet hero.] Close editorial view of pre-deployment preparation: two identical Axis terminal bases and peripheral sets aligned on a graphite technical workbench, with precisely coiled cables, matching grommets, and blank configuration cards placed beside each set. Cards contain only faint non-readable line geometry—absolutely no text or numbers. Camera from a 35-degree elevated angle, 70 mm full-frame lens, moderate depth of field keeping the first two configurations sharp and a third softly receding. Soft north-window daylight from left and controlled overhead fill highlight repeated geometry and cable discipline. Warm-white wall, graphite bench, small brushed-silver details. No technicians, hands, logos, shipping labels, boxes, barcodes, colored stickers, clutter, or factory-production atmosphere. Communicate careful preparation and repeatability, not inventory stock.

#### 15. `public/images/hardware/multi-site-rollout/deployment.png`
**Aspect:** 16:9 landscape, 2048×1152 master.

> [Shared continuity lock; match the approved Axis Fleet systems.] Real-world rollout staging environment in a calm implementation workspace: three identical certified counter systems fully assembled on separate mobile workbenches, each with printer, scanner, and organized cable set, ready for different sites. A large blank planning wall with subtle unlabeled geometric site blocks sits in the background; no readable writing. Wide but restrained eye-level view, 32 mm full-frame lens with straight verticals, the nearest system in the left third and repeated stations leading toward the right background. Architecture combines warm plaster, pale concrete, graphite metal, and muted oak. Soft daylight from high windows camera-left plus uniform practical overhead lighting. No people, uniforms, customer logos, shipping cartons, site names, maps with text, colored status stickers, glowing network graphics, or warehouse density. The scene should feel like coordinated implementation quality, not a reseller storeroom.

#### 16. `public/images/hardware/multi-site-rollout/included.png`
**Aspect:** 16:9 landscape, 2048×1152 master.

> [Shared continuity lock; match the approved Axis Fleet system.] “What’s Included” service-and-equipment composition translated into tangible deployment artifacts: one complete miniature Axis counter configuration at center-left, a second identical site module behind it, one neatly organized installation cable kit, one rugged training tablet, and a closed graphite deployment dossier with only abstract embossed line geometry and no text. Arrange these as five separated groups on a warm-white studio surface, shallow three-quarter top-down camera at 55 degrees, 55 mm lens, near-orthographic perspective. Use precise spacing and broad negative areas for HTML numbered pins that will identify standardized plan, site configuration, pre-deployment preparation, installation/training, and rollout coordination. Consistent soft contact shadows, no floating objects. No labels, site numbers, written documents, maps, logos, packaging, checkmarks, people, duplicated cables, or consumer unboxing style.

### Generation acceptance gate
- Approve each hero before generating its three derivatives; use the approved hero as the product-specific reference.
- Reject any image with visible branding, readable text, invented certification marks, implausible device scale, duplicated peripherals, impossible ports/cables, malformed hands, excessive gloss, colored marketplace styling, or inconsistent family materials.
- Verify that the four heroes remain distinguishable at card size while clearly belonging to one Axis family.
- Keep source masters local; use `next/image` for responsive delivery and WebP output. Do not add remote image dependencies.

## Typed media and specification model
- Extend [lib/hardware.ts](lib/hardware.ts) with a typed `media` manifest (`hero`, `detail`, `deployment`, `included`, intrinsic dimensions), stable included-item IDs/pin positions, and related ESTINAD products. Keep `demoConfiguration: true` internal and preserve current slugs.
- Replace each flat localized `specs` array with grouped semantic data such as “System”, “Peripherals”, and “Deployment scope”; render only realistic reference descriptions already supported by the kit definition.
- Model image text separately from paths: locale-independent files and geometry in `lib/hardware.ts`, localized `alt`, caption, and section copy in the dictionaries.

## Catalog cards
- Upgrade [components/hardware/HardwareKitCard.tsx](components/hardware/HardwareKitCard.tsx) to an image-led editorial card: 4:3 responsive `next/image`, Axis family name, concise tagline, use case, restrained configuration label, and the existing quote/detail actions.
- Update [app/[locale]/hardware/page.tsx](app/[locale]/hardware/page.tsx) to pass media and identity fields while retaining the current two-column, low-density kit grid and software-first surrounding narrative.
- Use `fill` with explicit aspect-ratio containers and accurate `sizes`; only above-the-fold detail heroes receive high fetch priority. All supporting images remain lazy-loaded.

## Premium kit detail pages
- Refactor [app/[locale]/hardware/[slug]/page.tsx](app/[locale]/hardware/[slug]/page.tsx) into a photographic product narrative while retaining route, metadata, quote query, compatibility CTA, and static generation.
- Add focused server components under [components/hardware](components/hardware):
  - `HardwareKitHero.tsx` — Axis name, tagline, operational intro, CTAs, and 4:3 hero image.
  - `HardwareKitGallery.tsx` — static editorial image grid with `<figure>`/`<figcaption>` for close-up and deployment scenes; no carousel or lightbox dependency.
  - `HardwareIncludes.tsx` — exploded composition with HTML/CSS numbered pins and an adjacent semantic included-items list, keeping text out of generated imagery.
  - `HardwareSpecGroups.tsx` — grouped `<dl>` layout with a persistent non-binding scope note.
  - `HardwareProductLinks.tsx` — use the existing `relatedProducts` data to reconnect each kit to the ESTINAD software it supports.
- Sequence each page as: identity hero → operational fit → supporting gallery/deployment → What’s Included → grouped reference specifications → works with ESTINAD → compatibility boundary → quote CTA. This gives each kit depth without marketplace filters, prices, stock, ratings, comparison badges, or checkout.
- Enhance per-kit `generateMetadata` with localized name/tagline and the kit hero as the Open Graph image through [lib/seo.ts](lib/seo.ts)’s existing `pageMeta` support.

## Accessibility, performance, and verification
- Provide localized, non-redundant alt text; descriptive figures get captions, purely decorative crops use empty alt. Preserve RTL with logical positioning for illustration pins and avoid directional text embedded in images.
- Render imagery through Next.js 16 `next/image` with intrinsic dimensions, responsive `sizes`, aspect-ratio reservation, and the default quality allowlist. Keep each source asset reasonably sized and rely on the optimizer’s WebP output; avoid remote image hosts and new runtime dependencies.
- Verify EN/FR/AR at 320/375/414/768px and desktop, including Arabic RTL, long translated names, gallery stacking, pin alignment, keyboard focus, and no horizontal overflow.
- Run changed-file lint, `npx tsc --noEmit`, `npm run build`, and live route checks for all four kit pages plus quote preselection. Report generated asset sizes and any regenerated visual defects in the handoff.