import type { MetadataRoute } from "next";
import {
  locales,
  defaultLocale,
  productSlugs,
  componentSlugs,
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
  "/hardware",
  "/hardware/quote",
  "/hardware/compatibility",
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
      p === "/hardware/quote" ||
      p === "/hardware/compatibility"
        ? 0.65
        : 0.8;
    add(p, priority, "weekly");
  });

  productSlugs.forEach((s) => {
    add(`/products/${s}`, 0.9, "weekly");
    add(`/products/${s}/pricing`, 0.8, "monthly");
  });

  componentSlugs.forEach((s) => add(`/products/components/${s}`, 0.7, "monthly"));

  platformSlugs.forEach((s) => add(`/platform/${s}`, 0.7, "monthly"));
  solutionSlugs.forEach((s) => add(`/solutions/${s}`, 0.8, "monthly"));
  serviceSlugs.forEach((s) => add(`/services/${s}`, 0.7, "monthly"));
  caseStudySlugs.forEach((s) => add(`/case-studies/${s}`, 0.6, "monthly"));
  partnerSlugs.forEach((s) => add(`/partners/${s}`, 0.8, "monthly"));
  hardwareKitSlugs.forEach((s) => add(`/hardware/${s}`, 0.6, "monthly"));
  resourceRoutes.forEach((p) => add(p, 0.6, "weekly"));
  companyRoutes.forEach((p) => add(p, 0.6, "monthly"));
  legalRoutes.forEach((p) => add(p, 0.3, "yearly"));

  return entries;
}
