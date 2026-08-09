import type { Dictionary } from "@/lib/dictionaries/types";
import {
  productStatus,
  productSlugs,
  type ProductSlug,
  type ProductStatus,
} from "@/lib/i18n-config";

export type { ProductStatus };

/** Display order — production-ready first, planned last. */
export const productStatusOrder: ProductStatus[] = [
  "available",
  "beta",
  "development",
  "coming_soon",
  "planned",
];

export function getProductStatus(slug: ProductSlug): ProductStatus {
  return productStatus[slug];
}

export function isProductCommerciallyAvailable(slug: ProductSlug): boolean {
  return productStatus[slug] === "available";
}

export function resolveProductStatusLabel(
  d: Dictionary,
  status: ProductStatus,
): string {
  return d.products.index.statuses[status];
}

export function compareProductStatus(a: ProductStatus, b: ProductStatus): number {
  return productStatusOrder.indexOf(a) - productStatusOrder.indexOf(b);
}

export function sortProductsByStatus<T extends { status: ProductStatus; slug: ProductSlug }>(
  items: T[],
): T[] {
  return [...items].sort((a, b) => {
    const byStatus = compareProductStatus(a.status, b.status);
    if (byStatus !== 0) return byStatus;
    return productSlugs.indexOf(a.slug) - productSlugs.indexOf(b.slug);
  });
}

/** Monochrome badges — mega menu & dense UI. */
export function statusBadgeClass(status: ProductStatus): string {
  switch (status) {
    case "available":
      return "border-ink/20 text-ink bg-surface";
    case "beta":
      return "border-ink/20 text-ink bg-surface";
    case "development":
      return "border-line-strong text-muted bg-surface/80";
    case "coming_soon":
      return "border-line text-muted-2 bg-surface/60";
    case "planned":
      return "border-line/70 text-muted-2 bg-transparent";
  }
}

export function statusDotClass(status: ProductStatus): string {
  switch (status) {
    case "available":
      return "bg-ink";
    case "beta":
      return "bg-ink/70";
    case "development":
      return "bg-muted";
    case "coming_soon":
      return "bg-muted-2";
    case "planned":
      return "bg-line-strong";
  }
}

/**
 * Spectrum badges for the product showcase (design reference).
 * Color is reserved for lifecycle communication only.
 */
export function statusSpectrumBadgeClass(status: ProductStatus): string {
  switch (status) {
    case "available":
      return "border-emerald-500/25 bg-emerald-500/[0.08] text-emerald-700 dark:text-emerald-400";
    case "beta":
      return "border-amber-500/30 bg-amber-500/[0.08] text-amber-700 dark:text-amber-400";
    case "development":
      return "border-sky-500/30 bg-sky-500/[0.08] text-sky-700 dark:text-sky-400";
    case "coming_soon":
      return "border-violet-500/30 bg-violet-500/[0.08] text-violet-700 dark:text-violet-400";
    case "planned":
      return "border-line bg-surface-2 text-muted";
  }
}

export function statusSpectrumDotClass(status: ProductStatus): string {
  switch (status) {
    case "available":
      return "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.55)]";
    case "beta":
      return "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.45)]";
    case "development":
      return "bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.45)]";
    case "coming_soon":
      return "bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.45)]";
    case "planned":
      return "bg-neutral-400";
  }
}
