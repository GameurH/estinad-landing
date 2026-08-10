/** Locale configuration only — no dictionary imports, safe for client bundles. */

export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  { label: string; dir: "ltr" | "rtl"; htmlLang: string }
> = {
  en: { label: "English", dir: "ltr", htmlLang: "en" },
  fr: { label: "Français", dir: "ltr", htmlLang: "fr" },
  ar: { label: "العربية", dir: "rtl", htmlLang: "ar" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Build a locale-prefixed path: lp("en","/products/retail") -> "/en/products/retail". */
export function lp(locale: Locale, href: string): string {
  if (href.startsWith("/")) return `/${locale}${href === "/" ? "" : href}`;
  return href;
}

/** Canonical products hub route — use everywhere instead of hardcoding "/products". */
export const PRODUCTS_HUB_HREF = "/products";

export function productHref(slug: string): string {
  return `${PRODUCTS_HUB_HREF}/${slug}`;
}

export function productPricingHref(slug: string): string {
  return `${productHref(slug)}/pricing`;
}

/** Shared active-state check for primary nav and footer links. */
export function isNavActive(pathname: string, locale: Locale, href: string): boolean {
  const full = lp(locale, href);
  return pathname === full || pathname.startsWith(`${full}/`);
}

export const productSlugs = [
  "retail",
  "restaurant",
  "inventory",
  "invoices",
  "workforce",
  "clinic",
  "central",
] as const;
export type ProductSlug = (typeof productSlugs)[number];

/** Lifecycle stage for customer-facing product lines. */
export const productStatuses = [
  "available",
  "beta",
  "development",
  "coming_soon",
  "planned",
] as const;
export type ProductStatus = (typeof productStatuses)[number];

/** Single source of truth — change status here to update the whole site. */
export const productStatus = {
  retail: "available",
  restaurant: "beta",
  inventory: "development",
  invoices: "coming_soon",
  workforce: "planned",
  clinic: "planned",
  central: "development",
} as const satisfies Record<ProductSlug, ProductStatus>;

/** Temporarily omitted from portfolio, nav, and listing surfaces. */
export const hiddenProductSlugs = ["workforce", "clinic"] as const;
export type HiddenProductSlug = (typeof hiddenProductSlugs)[number];

export function isProductListed(slug: ProductSlug): boolean {
  return !(hiddenProductSlugs as readonly string[]).includes(slug);
}

/** Only Retail has public pricing today. */
export const pricingProductSlugs = ["retail"] as const;
export type PricingProductSlug = (typeof pricingProductSlugs)[number];

/**
 * Connected product components (POS, Waiter, KDS, Core, UI, Native, Importer).
 * Served under /products/components/[slug] — not as sibling product lines.
 */
export const componentSlugs = [
  "pos",
  "waiter",
  "kds",
  "core",
  "ui",
  "native",
  "importer",
] as const;
export type ComponentSlug = (typeof componentSlugs)[number];

/** @deprecated Use componentSlugs. Kept as alias for gradual migration. */
export const appSlugs = componentSlugs;
export type AppSlug = ComponentSlug;

/** Flagged-off / not-yet-shipped apps — listed on the products hub, no dedicated page. */
export const roadmapSlugs = ["ecosystem-admin", "loyalty-portal"] as const;
export type RoadmapSlug = (typeof roadmapSlugs)[number];

export const appStatuses = ["shipped", "beta", "frozen", "archived", "planned"] as const;
export type AppStatus = (typeof appStatuses)[number];

/** Stable slug groupings for the products hub (categories are locale-translated). */
export const componentGroupPlatform = ["pos", "waiter", "kds"] as const;
export const componentGroupPackages = ["core", "ui", "native", "importer"] as const;

/** @deprecated Use componentGroupPlatform */
export const appGroupPlatform = componentGroupPlatform;
/** @deprecated Use componentGroupPackages */
export const appGroupPackages = componentGroupPackages;
/** Restaurant bundles redirected to /products/restaurant — empty for hub. */
export const appGroupRestaurant = [] as const;

export const solutionSlugs = [
  "retail",
  "restaurants",
  "clinics",
  "smes",
  "multi-branch",
] as const;
export const serviceSlugs = [
  "custom-software",
  "websites",
  "ecosystems",
  "integrations",
  "consulting",
] as const;
export const caseStudySlugs = [
  "retail-six-branches",
  "restaurant-four-locations",
  "custom-operations-sme",
  "pharmacy-network",
  "clinic-three-locations",
  "brand-website-multilingual",
  "ecosystem-mixed-group",
] as const;
export const platformSlugs = ["architecture", "security", "deployment"] as const;

/** ESTINAD Certified Hardware deployment kits — served under /hardware/[slug]. */
export const hardwareKitSlugs = [
  "retail-counter-kit",
  "restaurant-counter-kit",
  "inventory-kit",
  "multi-site-rollout",
] as const;
export type HardwareKitSlug = (typeof hardwareKitSlugs)[number];

export const partnerSlugs = ["resellers", "implementers", "technology"] as const;
export type PartnerSlug = (typeof partnerSlugs)[number];

/** Legacy product-bundle slugs redirected to /products/restaurant. */
export const legacyBundleSlugs = ["restaurant-ecosystem", "restaurant-pos"] as const;
