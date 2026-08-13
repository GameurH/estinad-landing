/**
 * Live Certified Hardware showcase for the Retail product landing.
 * Curates latest available RMS storefront products (translated by locale).
 */

import { unstable_cache } from "next/cache";
import type { Locale } from "@/lib/i18n-config";
import {
  getHardwareStoreCatalog,
  type HardwareStoreProduct,
} from "@/lib/hardware-store-catalog";

/** Prefer checkout-critical categories; exclude licenses/software. */
const CATEGORY_PRIORITY = [
  "cat_pos_terminals",
  "cat_barcode_scanners",
  "cat_receipt_printers",
  "cat_cash_drawers",
  "cat_card_readers",
  "cat_accessories",
] as const;

const EXCLUDE_PB = new Set(["cat_software"]);
const MAX_PRODUCTS = 6;

export type RetailCertifiedHardwareProduct = {
  id: string;
  name: string;
  brand: string | null;
  price: number;
  currency: string;
  shortDescription: string | null;
  image: string | null;
  categoryName: string | null;
  categoryPbId: string | null;
  href: string;
};

export type RetailCertifiedHardwareData = {
  products: RetailCertifiedHardwareProduct[];
  categories: { id: string; name: string; count: number }[];
  configured: boolean;
  currency: string;
};

function categoryRank(pbId: string | null): number {
  if (!pbId) return CATEGORY_PRIORITY.length + 10;
  const idx = CATEGORY_PRIORITY.indexOf(
    pbId as (typeof CATEGORY_PRIORITY)[number],
  );
  return idx === -1 ? CATEGORY_PRIORITY.length + 5 : idx;
}

function isHardwareProduct(product: HardwareStoreProduct): boolean {
  const pb = (product.categoryPbId || "").toLowerCase();
  if (pb && EXCLUDE_PB.has(pb)) return false;
  const type = (product.type || "").toLowerCase();
  if (type.includes("software") || type.includes("license")) return false;
  return true;
}

function pickLatestHardware(
  products: HardwareStoreProduct[],
): HardwareStoreProduct[] {
  const pool = products.filter(isHardwareProduct);
  if (pool.length === 0) return [];

  const ranked = [...pool].sort((a, b) => {
    const img = Number(!!b.images[0]) - Number(!!a.images[0]);
    if (img !== 0) return img;

    const ta = a.updatedAt ? Date.parse(a.updatedAt) : 0;
    const tb = b.updatedAt ? Date.parse(b.updatedAt) : 0;
    if (tb !== ta) return tb - ta;

    const rank =
      categoryRank(a.categoryPbId) - categoryRank(b.categoryPbId);
    if (rank !== 0) return rank;

    return b.price - a.price;
  });

  const picked: HardwareStoreProduct[] = [];
  const usedCategories = new Set<string>();

  // First pass: one product per category for breadth.
  for (const product of ranked) {
    if (picked.length >= MAX_PRODUCTS) break;
    const cat = product.categoryId ?? product.id;
    if (usedCategories.has(cat)) continue;
    picked.push(product);
    usedCategories.add(cat);
  }

  // Fill remaining slots with newest leftovers.
  if (picked.length < MAX_PRODUCTS) {
    for (const product of ranked) {
      if (picked.length >= MAX_PRODUCTS) break;
      if (picked.some((p) => p.id === product.id)) continue;
      picked.push(product);
    }
  }

  return picked;
}

async function loadRetailCertifiedHardware(
  locale: Locale,
): Promise<RetailCertifiedHardwareData> {
  const catalog = await getHardwareStoreCatalog(locale);

  if (!catalog.configured || catalog.error) {
    return {
      products: [],
      categories: [],
      configured: catalog.configured,
      currency: catalog.tenant?.currency ?? "DZD",
    };
  }

  const selected = pickLatestHardware(catalog.products);
  const products: RetailCertifiedHardwareProduct[] = selected.map((p) => ({
    id: p.id,
    name: p.name,
    brand: p.brand,
    price: p.price,
    currency: p.currency,
    shortDescription: p.shortDescription,
    image: p.images[0] ?? null,
    categoryName: p.categoryName,
    categoryPbId: p.categoryPbId,
    href: `/hardware/products/${p.id}`,
  }));

  const categoryCounts = new Map<string, { name: string; count: number }>();
  for (const product of products) {
    if (!product.categoryName) continue;
    const key = product.categoryPbId || product.categoryName;
    const prev = categoryCounts.get(key);
    if (prev) prev.count += 1;
    else categoryCounts.set(key, { name: product.categoryName, count: 1 });
  }

  const categories = [...categoryCounts.entries()]
    .map(([id, v]) => ({ id, name: v.name, count: v.count }))
    .sort(
      (a, b) =>
        categoryRank(a.id) - categoryRank(b.id) || a.name.localeCompare(b.name),
    );

  return {
    products,
    categories,
    configured: true,
    currency: catalog.tenant?.currency ?? "DZD",
  };
}

export function getRetailCertifiedHardware(
  locale: Locale,
): Promise<RetailCertifiedHardwareData> {
  return unstable_cache(
    () => loadRetailCertifiedHardware(locale),
    ["retail-certified-hardware", locale],
    { revalidate: 300 },
  )();
}
