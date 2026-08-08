/**
 * Product availability helpers — Retail is the only launched product today.
 */

import {
  productSlugs,
  productAvailability,
  pricingProductSlugs,
  type ProductSlug,
  type ProductAvailability,
} from "@/lib/i18n-config";

export function isProductSlug(value: string): value is ProductSlug {
  return (productSlugs as readonly string[]).includes(value);
}

export function getProductAvailability(slug: ProductSlug): ProductAvailability {
  return productAvailability[slug];
}

export function isProductAvailable(slug: ProductSlug): boolean {
  return productAvailability[slug] === "available";
}

export function isComingSoonProduct(slug: ProductSlug): boolean {
  return productAvailability[slug] === "coming-soon";
}

export function hasPricingPage(slug: string): boolean {
  return (pricingProductSlugs as readonly string[]).includes(slug);
}

export function availableProductSlugs(): ProductSlug[] {
  return productSlugs.filter((s) => productAvailability[s] === "available");
}

export function comingSoonProductSlugs(): ProductSlug[] {
  return productSlugs.filter((s) => productAvailability[s] === "coming-soon");
}
