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

export const productSlugs = ["retail", "restaurant", "clinic", "cloud"] as const;

/** Dedicated landing pages for ecosystem apps, companion apps, and shared packages. */
export const appSlugs = [
  "restaurant-ecosystem",
  "restaurant-pos",
  "pos",
  "waiter",
  "kds",
  "core",
  "ui",
  "native",
  "importer",
] as const;
export type AppSlug = (typeof appSlugs)[number];

/** Flagged-off / not-yet-shipped apps — listed on the products hub, no dedicated page. */
export const roadmapSlugs = ["ecosystem-admin", "loyalty-portal"] as const;
export type RoadmapSlug = (typeof roadmapSlugs)[number];

export const appStatuses = ["shipped", "beta", "frozen", "archived", "planned"] as const;
export type AppStatus = (typeof appStatuses)[number];

/** Stable slug groupings for the products hub (categories are locale-translated). */
export const appGroupRestaurant = ["restaurant-ecosystem", "restaurant-pos"] as const;
export const appGroupPlatform = ["pos", "waiter", "kds"] as const;
export const appGroupPackages = ["core", "ui", "native", "importer"] as const;
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
