/**
 * Product status helpers — Retail is the only commercially available product today.
 */

import {
  productSlugs,
  productStatus,
  pricingProductSlugs,
  isProductListed,
  type ProductSlug,
  type ProductStatus,
} from "@/lib/i18n-config";

export type { ProductStatus };

export function isProductSlug(value: string): value is ProductSlug {
  return (productSlugs as readonly string[]).includes(value);
}

export function getProductStatus(slug: ProductSlug): ProductStatus {
  return productStatus[slug];
}

/** @deprecated Use getProductStatus */
export function getProductAvailability(slug: ProductSlug): ProductStatus {
  return productStatus[slug];
}

export function isProductAvailable(slug: ProductSlug): boolean {
  return productStatus[slug] === "available";
}

export function isComingSoonProduct(slug: ProductSlug): boolean {
  return productStatus[slug] === "coming_soon";
}

export function hasPricingPage(slug: string): boolean {
  return (pricingProductSlugs as readonly string[]).includes(slug);
}

export function listedProductSlugs(): ProductSlug[] {
  return productSlugs.filter(isProductListed);
}

export function availableProductSlugs(): ProductSlug[] {
  return listedProductSlugs().filter((s) => productStatus[s] === "available");
}

export function portfolioProductSlugs(): ProductSlug[] {
  return listedProductSlugs().filter((s) => productStatus[s] !== "available");
}

/** @deprecated Use portfolioProductSlugs */
export function comingSoonProductSlugs(): ProductSlug[] {
  return portfolioProductSlugs();
}
