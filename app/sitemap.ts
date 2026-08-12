import type { MetadataRoute } from "next";
import {
  locales,
  defaultLocale,
  productSlugs,
  pricingProductSlugs,
  platformSlugs,
  solutionSlugs,
  serviceSlugs,
  caseStudySlugs,
  partnerSlugs,
  hardwareKitSlugs,
} from "@/lib/i18n-config";

const base = "https://estinad.com";

const staticRoutes = [
  "",
  "/platform",
  "/products",
  "/solutions",
  "/services",
  "/case-studies",
  "/partners",
  "/partners/apply",
  "/resources",
  "/company",
  "/demo",
  "/quote",
  "/hardware",
  "/hardware/catalog",
  "/hardware/quote",
  "/hardware/compatibility",
  "/hardware/cart",
  "/hardware/checkout",
];

const resourceRoutes = [
  "/resources/blog",
  "/resources/guides",
  "/resources/documentation",
  "/resources/faq",
];

const companyRoutes = [
  "/company/about",
  "/company/vision",
  "/company/careers",
  "/company/contact",
];

const legalRoutes = ["/legal/privacy", "/legal/terms"];

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: Entry[] = [];

  const add = (path: string, priority: number, changeFrequency: Entry["changeFrequency"]) => {
    for (const locale of locales) {
      const isDefault = locale === defaultLocale;
      const languages: Record<string, string> = Object.fromEntries(
        locales.map((l) => [l, `${base}/${l}${path === "" ? "" : path}`]),
      );
      languages["x-default"] = `${base}/${defaultLocale}${path === "" ? "" : path}`;

      entries.push({
        url: `${base}/${locale}${path === "" ? "" : path}`,
        lastModified: now,
        changeFrequency,
        priority: path === "" ? (isDefault ? 1 : 0.9) : priority,
        alternates: { languages },
      });
    }
  };

  staticRoutes.forEach((p) => {
    const priority =
      p === "/hardware" ||
      p === "/hardware/catalog" ||
      p === "/hardware/quote" ||
      p === "/hardware/compatibility" ||
      p === "/hardware/cart" ||
      p === "/hardware/checkout" ||
      p === "/quote"
        ? 0.65
        : 0.8;
    add(p, priority, "weekly");
  });

  productSlugs.forEach((s) => {
    const priority = s === "retail" ? 0.9 : 0.7;
    add(`/products/${s}`, priority, "weekly");
  });

  pricingProductSlugs.forEach((s) => add(`/products/${s}/pricing`, 0.8, "monthly"));

  // Legacy component pages remain accessible but are excluded from the public sitemap.
  platformSlugs.forEach((s) => add(`/platform/${s}`, 0.5, "monthly"));
  solutionSlugs.forEach((s) => add(`/solutions/${s}`, 0.8, "monthly"));
  serviceSlugs.forEach((s) => add(`/services/${s}`, 0.5, "monthly"));
  caseStudySlugs.forEach((s) => add(`/case-studies/${s}`, 0.4, "monthly"));
  partnerSlugs.forEach((s) => add(`/partners/${s}`, 0.5, "monthly"));
  hardwareKitSlugs.forEach((s) => add(`/hardware/${s}`, 0.6, "monthly"));
  resourceRoutes.forEach((p) => add(p, 0.6, "weekly"));
  companyRoutes.forEach((p) => add(p, 0.6, "monthly"));
  legalRoutes.forEach((p) => add(p, 0.3, "yearly"));

  return entries;
}
