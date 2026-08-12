/**
 * Typed local source of truth for ESTINAD Certified Hardware.
 * Catalog structure stays in-repo. Commerce fields are data-gated: kits remain
 * quote_only until verified price, availability, and fulfillment values arrive.
 * Future Supabase mapping can reuse HardwareKitSlug + kit field names as columns.
 */

import {
  hardwareKitSlugs,
  type HardwareKitSlug,
  type ProductSlug,
} from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";

export type HardwareMediaKey = "hero" | "detail" | "deployment" | "included";

export type HardwareMediaAsset = {
  src: string;
  width: number;
  height: number;
};

export type HardwareIncludePin = {
  id: string;
  /** Percentage from the left edge of the included plate (LTR geometry). */
  x: number;
  /** Percentage from the top edge of the included plate. */
  y: number;
};

/** How a kit may be purchased. Purchasable requires verified commerce fields. */
export type HardwarePurchaseMode = "quote_only" | "buy_now";

/** Availability state — never invent stock counts. */
export type HardwareAvailability =
  | "contact"
  | "available"
  | "in_stock"
  | "request_quote";

export type HardwareCommerce = {
  /** Stable SKU once verified; null until commercial data arrives. */
  sku: string | null;
  purchaseMode: HardwarePurchaseMode;
  /** Price in minor units (e.g. cents). Null until verified. */
  priceMinor: number | null;
  currency: string | null;
  availability: HardwareAvailability;
  maxQuantity: number | null;
  allowDelivery: boolean;
  allowPickup: boolean;
  /** Delivery cost in minor units. Null = unknown / not configured. */
  deliveryCostMinor: number | null;
};

export type HardwareKitDefinition = {
  slug: HardwareKitSlug;
  /**
   * Internal flag — true while this kit is a configuration reference rather
   * than a live priced SKU. Never render this boolean in public UI.
   */
  demoConfiguration: boolean;
  glyph: string;
  relatedProducts: ProductSlug[];
  media: Record<HardwareMediaKey, HardwareMediaAsset>;
  includePins: readonly HardwareIncludePin[];
  commerce: HardwareCommerce;
};

/** Default commerce: quote-only, no invented prices or stock. */
export const quoteOnlyCommerce = (): HardwareCommerce => ({
  sku: null,
  purchaseMode: "quote_only",
  priceMinor: null,
  currency: null,
  availability: "request_quote",
  maxQuantity: null,
  allowDelivery: false,
  allowPickup: false,
  deliveryCostMinor: null,
});

/**
 * TEMPORARY demo commerce for local/preview testing.
 * Replace with verified commercial data before production.
 * DZD amounts are whole dinars (not centimes).
 */
export const demoBuyNowCommerce = (opts: {
  sku: string;
  priceDzd: number;
  deliveryDzd: number;
  maxQuantity?: number;
}): HardwareCommerce => ({
  sku: opts.sku,
  purchaseMode: "buy_now",
  priceMinor: opts.priceDzd,
  currency: "DZD",
  availability: "available",
  maxQuantity: opts.maxQuantity ?? 20,
  allowDelivery: true,
  allowPickup: true,
  deliveryCostMinor: opts.deliveryDzd,
});

const hero = (slug: HardwareKitSlug): HardwareMediaAsset => ({
  src: `/images/hardware/${slug}/hero.jpg`,
  width: 1600,
  height: 1200,
});

const detail = (slug: HardwareKitSlug): HardwareMediaAsset => ({
  src: `/images/hardware/${slug}/detail.jpg`,
  width: 1600,
  height: 1200,
});

const wide = (
  slug: HardwareKitSlug,
  file: "deployment" | "included",
): HardwareMediaAsset => ({
  src: `/images/hardware/${slug}/${file}.jpg`,
  width: 1600,
  height: 900,
});

export const hardwareKits: readonly HardwareKitDefinition[] = [
  {
    slug: "retail-counter-kit",
    demoConfiguration: true,
    glyph: "01",
    relatedProducts: ["retail"],
    media: {
      hero: hero("retail-counter-kit"),
      detail: detail("retail-counter-kit"),
      deployment: wide("retail-counter-kit", "deployment"),
      included: wide("retail-counter-kit", "included"),
    },
    includePins: [
      { id: "drawer", x: 14, y: 42 },
      { id: "terminal", x: 38, y: 36 },
      { id: "scanner", x: 58, y: 58 },
      { id: "printer", x: 74, y: 44 },
      { id: "setup", x: 90, y: 62 },
    ],
    commerce: demoBuyNowCommerce({
      sku: "EST-HW-COUNTER",
      priceDzd: 189_000,
      deliveryDzd: 3_500,
    }),
  },
  {
    slug: "restaurant-counter-kit",
    demoConfiguration: true,
    glyph: "02",
    relatedProducts: ["restaurant"],
    media: {
      hero: hero("restaurant-counter-kit"),
      detail: detail("restaurant-counter-kit"),
      deployment: wide("restaurant-counter-kit", "deployment"),
      included: wide("restaurant-counter-kit", "included"),
    },
    includePins: [
      { id: "terminal", x: 28, y: 38 },
      { id: "drawer", x: 42, y: 28 },
      { id: "printer", x: 58, y: 52 },
      { id: "accessories", x: 72, y: 44 },
      { id: "setup", x: 88, y: 58 },
    ],
    commerce: demoBuyNowCommerce({
      sku: "EST-HW-SERVICE",
      priceDzd: 175_000,
      deliveryDzd: 3_500,
    }),
  },
  {
    slug: "inventory-kit",
    demoConfiguration: true,
    glyph: "03",
    relatedProducts: ["inventory", "retail"],
    media: {
      hero: hero("inventory-kit"),
      detail: detail("inventory-kit"),
      deployment: wide("inventory-kit", "deployment"),
      included: wide("inventory-kit", "included"),
    },
    includePins: [
      { id: "handheld", x: 16, y: 48 },
      { id: "device", x: 42, y: 36 },
      { id: "labelPrinter", x: 68, y: 46 },
      { id: "setup", x: 88, y: 58 },
    ],
    commerce: demoBuyNowCommerce({
      sku: "EST-HW-INVENTORY",
      priceDzd: 98_000,
      deliveryDzd: 2_500,
    }),
  },
  {
    slug: "multi-site-rollout",
    demoConfiguration: true,
    glyph: "04",
    relatedProducts: ["central", "retail"],
    media: {
      hero: hero("multi-site-rollout"),
      detail: detail("multi-site-rollout"),
      deployment: wide("multi-site-rollout", "deployment"),
      included: wide("multi-site-rollout", "included"),
    },
    includePins: [
      { id: "plan", x: 18, y: 42 },
      { id: "configuration", x: 38, y: 34 },
      { id: "preparation", x: 58, y: 48 },
      { id: "coordination", x: 82, y: 40 },
    ],
    // Fleet remains quote-only — coordination service, not a standard SKU.
    commerce: quoteOnlyCommerce(),
  },
] as const;

export function isHardwareKitSlug(value: string): value is HardwareKitSlug {
  return (hardwareKitSlugs as readonly string[]).includes(value);
}

export function getHardwareKit(slug: string): HardwareKitDefinition | undefined {
  if (!isHardwareKitSlug(slug)) return undefined;
  return hardwareKits.find((k) => k.slug === slug);
}

export function hardwareKitCopy(
  d: Dictionary,
  slug: HardwareKitSlug,
): Dictionary["hardware"]["kits"][HardwareKitSlug] {
  return d.hardware.kits[slug];
}

export function hardwareKitsList(d: Dictionary) {
  return hardwareKits.map((kit) => ({
    ...kit,
    copy: hardwareKitCopy(d, kit.slug),
  }));
}

export function hardwareKitOptionLabel(
  d: Dictionary,
  slug: HardwareKitSlug,
): string {
  const copy = hardwareKitCopy(d, slug);
  return copy.shortName || copy.name;
}

/** True only when every commerce field required for Buy now is verified. */
export function isPurchasable(commerce: HardwareCommerce): boolean {
  return (
    commerce.purchaseMode === "buy_now" &&
    commerce.sku !== null &&
    commerce.priceMinor !== null &&
    commerce.currency !== null &&
    (commerce.availability === "available" ||
      commerce.availability === "in_stock") &&
    commerce.maxQuantity !== null &&
    commerce.maxQuantity > 0 &&
    (commerce.allowDelivery || commerce.allowPickup)
  );
}

export function anyKitPurchasable(): boolean {
  return hardwareKits.some((kit) => isPurchasable(kit.commerce));
}
