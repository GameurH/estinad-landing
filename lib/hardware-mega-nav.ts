/**
 * Curated Hardware mega-menu payload — quality over quantity.
 * Pulls live RMS catalog data, then keeps only priority categories
 * and a small featured product set for the nav surface.
 */

import { unstable_cache } from "next/cache";
import type { Locale } from "@/lib/i18n-config";
import {
  getHardwareStoreCatalog,
  type HardwareStoreProduct,
} from "@/lib/hardware-store-catalog";

/** Preferred storefront categories (pb_id), highest signal first. */
const CATEGORY_PRIORITY = [
  "cat_receipt_printers",
  "cat_pos_terminals",
  "cat_card_readers",
  "cat_cash_drawers",
  "cat_barcode_scanners",
  "cat_accessories",
] as const;

const MAX_CATEGORIES = 4;
const MAX_FEATURED = 3;

export type HardwareMegaNavCategory = {
  id: string;
  name: string;
  pbId: string | null;
  count: number;
  href: string;
};

export type HardwareMegaNavProduct = {
  id: string;
  name: string;
  brand: string | null;
  price: number;
  currency: string;
  image: string | null;
  categoryName: string | null;
  href: string;
};

export type HardwareMegaNav = {
  categories: HardwareMegaNavCategory[];
  featured: HardwareMegaNavProduct[];
  configured: boolean;
};

function categoryRank(pbId: string | null): number {
  if (!pbId) return CATEGORY_PRIORITY.length + 10;
  const idx = CATEGORY_PRIORITY.indexOf(
    pbId as (typeof CATEGORY_PRIORITY)[number],
  );
  return idx === -1 ? CATEGORY_PRIORITY.length + 5 : idx;
}

function productImage(product: HardwareStoreProduct): string | null {
  return product.images[0] ?? null;
}

function pickFeatured(
  products: HardwareStoreProduct[],
  categoryIds: string[],
): HardwareStoreProduct[] {
  const inFocus = products.filter(
    (p) => p.categoryId && categoryIds.includes(p.categoryId),
  );
  const pool = inFocus.length > 0 ? inFocus : products;

  // Prefer image + brand diversity; then higher price as a quality signal.
  const ranked = [...pool].sort((a, b) => {
    const img = Number(!!productImage(b)) - Number(!!productImage(a));
    if (img !== 0) return img;
    const brand = Number(!!b.brand) - Number(!!a.brand);
    if (brand !== 0) return brand;
    return b.price - a.price;
  });

  const picked: HardwareStoreProduct[] = [];
  const usedCategories = new Set<string>();

  for (const product of ranked) {
    if (picked.length >= MAX_FEATURED) break;
    const cat = product.categoryId ?? "";
    if (cat && usedCategories.has(cat) && picked.length < MAX_FEATURED - 1) {
      continue;
    }
    picked.push(product);
    if (cat) usedCategories.add(cat);
  }

  // Fill remaining slots if diversity filter was too strict.
  if (picked.length < MAX_FEATURED) {
    for (const product of ranked) {
      if (picked.length >= MAX_FEATURED) break;
      if (picked.some((p) => p.id === product.id)) continue;
      picked.push(product);
    }
  }

  return picked;
}

async function loadHardwareMegaNav(locale: Locale): Promise<HardwareMegaNav> {
  const catalog = await getHardwareStoreCatalog(locale);

  if (!catalog.configured || catalog.error || catalog.products.length === 0) {
    return { categories: [], featured: [], configured: catalog.configured };
  }

  const categories = [...catalog.categories]
    .filter((c) => c.count > 0)
    .sort((a, b) => {
      const rank = categoryRank(a.pbId) - categoryRank(b.pbId);
      if (rank !== 0) return rank;
      return b.count - a.count;
    })
    .slice(0, MAX_CATEGORIES)
    .map((c) => ({
      id: c.id,
      name: c.name,
      pbId: c.pbId,
      count: c.count,
      href: `/hardware/catalog?category=${encodeURIComponent(c.id)}`,
    }));

  const categoryIds = categories.map((c) => c.id);
  const featured = pickFeatured(catalog.products, categoryIds).map((p) => ({
    id: p.id,
    name: p.name,
    brand: p.brand,
    price: p.price,
    currency: p.currency,
    image: productImage(p),
    categoryName: p.categoryName,
    href: `/hardware/products/${p.id}`,
  }));

  return {
    categories,
    featured,
    configured: true,
  };
}

export function getHardwareMegaNav(locale: Locale): Promise<HardwareMegaNav> {
  return unstable_cache(
    () => loadHardwareMegaNav(locale),
    ["hardware-mega-nav", locale],
    { revalidate: 300 },
  )();
}
