import type { MetadataRoute } from "next";
import { locales, defaultLocale, productSlugs, appSlugs, platformSlugs, solutionSlugs, serviceSlugs, caseStudySlugs } from "@/lib/i18n-config";

const base = "https://estinad.com";

const staticRoutes = [
  "",
  "/platform",
  "/products",
  "/solutions",
  "/services",
  "/case-studies",
  "/resources",
  "/company",
  "/demo",
];

const resourceRoutes = [
  "/resources/blog",
  "/resources/guides",
  "/resources/case-studies",
  "/resources/documentation",
  "/resources/faq",
];

const companyRoutes = [
  "/company/about",
  "/company/vision",
  "/company/partners",
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
      entries.push({
        url: `${base}/${locale}${path === "" ? "" : path}`,
        lastModified: now,
        changeFrequency,
        priority: path === "" ? (isDefault ? 1 : 0.9) : priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${base}/${l}${path === "" ? "" : path}`]),
          ),
        },
      });
    }
  };

  staticRoutes.forEach((p) => add(p, 0.8, "weekly"));

  productSlugs.forEach((s) => {
    add(`/products/${s}`, 0.9, "weekly");
    add(`/products/${s}/pricing`, 0.8, "monthly");
  });

  appSlugs.forEach((s) => add(`/products/${s}`, 0.8, "monthly"));

  platformSlugs.forEach((s) => add(`/platform/${s}`, 0.7, "monthly"));
  solutionSlugs.forEach((s) => add(`/solutions/${s}`, 0.8, "monthly"));
  serviceSlugs.forEach((s) => add(`/services/${s}`, 0.8, "monthly"));
  caseStudySlugs.forEach((s) => add(`/case-studies/${s}`, 0.7, "monthly"));
  resourceRoutes.forEach((p) => add(p, 0.6, "weekly"));
  companyRoutes.forEach((p) => add(p, 0.6, "monthly"));
  legalRoutes.forEach((p) => add(p, 0.3, "yearly"));

  return entries;
}
