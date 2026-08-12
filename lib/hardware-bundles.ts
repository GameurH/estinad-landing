/**
 * Curated hardware catalog bundles.
 * Bundle prices are derived from kit commerce data — never invent totals.
 */

import {
  getHardwareKit,
  isPurchasable,
  type HardwareKitDefinition,
} from "@/lib/hardware";
import type { HardwareKitSlug } from "@/lib/i18n-config";

export type HardwareBundleId = "all-kits" | "all-kits-retail";

export type HardwareBundleDefinition = {
  id: HardwareBundleId;
  /** Kit slugs included in the hardware portion. */
  kitSlugs: readonly HardwareKitSlug[];
  /** When true, ESTINAD Retail software is part of the package. */
  includesRetail: boolean;
  /**
   * Demo Retail subscription amount in DZD / month (matches published Single Branch).
   * Null when the bundle does not include Retail.
   */
  retailMonthlyDzd: number | null;
};

/** Purchasable kits that form the “All Kits” package. Fleet stays quote-only. */
export const ALL_KITS_SLUGS = [
  "retail-counter-kit",
  "restaurant-counter-kit",
  "inventory-kit",
] as const satisfies readonly HardwareKitSlug[];

/** Published ESTINAD Retail Single Branch monthly price (DZD). */
export const RETAIL_SINGLE_BRANCH_MONTHLY_DZD = 4_900;

export const hardwareBundles: readonly HardwareBundleDefinition[] = [
  {
    id: "all-kits",
    kitSlugs: ALL_KITS_SLUGS,
    includesRetail: false,
    retailMonthlyDzd: null,
  },
  {
    id: "all-kits-retail",
    kitSlugs: ALL_KITS_SLUGS,
    includesRetail: true,
    retailMonthlyDzd: RETAIL_SINGLE_BRANCH_MONTHLY_DZD,
  },
] as const;

export type ResolvedBundlePricing = {
  id: HardwareBundleId;
  kits: HardwareKitDefinition[];
  currency: string;
  hardwareTotalMinor: number;
  deliveryTotalMinor: number;
  retailMonthlyMinor: number | null;
  purchasable: boolean;
};

export function resolveBundlePricing(
  id: HardwareBundleId,
): ResolvedBundlePricing | null {
  const def = hardwareBundles.find((b) => b.id === id);
  if (!def) return null;

  const kits: HardwareKitDefinition[] = [];
  let currency: string | null = null;
  let hardwareTotal = 0;
  let deliveryTotal = 0;
  let purchasable = true;

  for (const slug of def.kitSlugs) {
    const kit = getHardwareKit(slug);
    if (!kit) {
      purchasable = false;
      continue;
    }
    kits.push(kit);
    if (!isPurchasable(kit.commerce)) {
      purchasable = false;
      continue;
    }
    currency = kit.commerce.currency;
    hardwareTotal += kit.commerce.priceMinor!;
    if (kit.commerce.deliveryCostMinor !== null) {
      deliveryTotal += kit.commerce.deliveryCostMinor;
    }
  }

  return {
    id,
    kits,
    currency: currency ?? "DZD",
    hardwareTotalMinor: hardwareTotal,
    deliveryTotalMinor: deliveryTotal,
    retailMonthlyMinor: def.retailMonthlyDzd,
    purchasable: purchasable && kits.length === def.kitSlugs.length,
  };
}

export function getHardwareBundle(id: string): HardwareBundleDefinition | undefined {
  return hardwareBundles.find((b) => b.id === id);
}
