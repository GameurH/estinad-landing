/**
 * Server-authoritative hardware commerce resolver.
 * Never trust browser-submitted prices, availability, or totals.
 */

import {
  getHardwareKit,
  isPurchasable,
  type HardwareAvailability,
  type HardwareKitDefinition,
} from "@/lib/hardware";
import type { HardwareKitSlug } from "@/lib/i18n-config";
import { getHardwareStoreProduct } from "@/lib/hardware-store-catalog";

export type KitCartLineInput = {
  kind: "kit";
  slug: HardwareKitSlug;
  quantity: number;
};

export type StoreCartLineInput = {
  kind: "store";
  productId: string;
  quantity: number;
};

export type CartLineInput = KitCartLineInput | StoreCartLineInput;

/** @deprecated Prefer CartLineInput with kind. Kept for transitional kit-only payloads. */
export type LegacyKitLineInput = {
  slug: HardwareKitSlug;
  quantity: number;
};

export type ResolvedCartLine = {
  kind: "kit" | "store";
  /** Kit slug, or `store:<uuid>` for store products. */
  slug: string;
  productId: string | null;
  sku: string;
  name: string;
  quantity: number;
  unitPriceMinor: number;
  lineTotalMinor: number;
  currency: string;
  availability: HardwareAvailability;
  maxQuantity: number;
  image: string | null;
  allowDelivery: boolean;
  allowPickup: boolean;
  deliveryCostMinor: number | null;
};

export type CartTotals = {
  currency: string;
  subtotalMinor: number;
  deliveryCostMinor: number;
  totalMinor: number;
  fulfillment: "delivery" | "pickup" | "none";
};

export type ResolveCartResult =
  | {
      ok: true;
      lines: ResolvedCartLine[];
      totals: CartTotals;
      kits: HardwareKitDefinition[];
    }
  | {
      ok: false;
      error:
        | "empty"
        | "not_purchasable"
        | "invalid_quantity"
        | "currency_mismatch";
    };

/** Intl locale tags that format DZD/FR/AR naturally (incl. RTL currency placement). */
function moneyLocaleTag(locale: string) {
  switch (locale) {
    case "ar":
      return "ar-DZ";
    case "fr":
      return "fr-DZ";
    default:
      return locale || "en";
  }
}

export function formatMoneyMinor(
  amountMinor: number,
  currency: string,
  locale = "en",
): string {
  try {
    return new Intl.NumberFormat(moneyLocaleTag(locale), {
      style: "currency",
      currency,
      maximumFractionDigits: currency === "DZD" ? 0 : 2,
    }).format(amountMinor / (currency === "DZD" ? 1 : 100));
  } catch {
    return `${amountMinor} ${currency}`;
  }
}

export function normalizeCartLineInput(
  line: CartLineInput | LegacyKitLineInput,
): CartLineInput | null {
  if ("kind" in line && line.kind === "store") {
    const productId = String(line.productId || "").trim();
    if (!productId) return null;
    return {
      kind: "store",
      productId,
      quantity: line.quantity,
    };
  }
  const slug =
    "kind" in line && line.kind === "kit"
      ? line.slug
      : (line as LegacyKitLineInput).slug;
  if (!slug) return null;
  return { kind: "kit", slug, quantity: line.quantity };
}

function resolveKitLine(
  line: KitCartLineInput,
  fulfillment: "delivery" | "pickup" | "none",
  currency: string | null,
):
  | { ok: true; resolved: ResolvedCartLine; kit: HardwareKitDefinition; currency: string }
  | { ok: false; error: "not_purchasable" | "invalid_quantity" | "currency_mismatch" } {
  const qty = Math.floor(Number(line.quantity));
  if (!Number.isFinite(qty) || qty < 1) {
    return { ok: false, error: "invalid_quantity" };
  }

  const kit = getHardwareKit(line.slug);
  if (!kit || !isPurchasable(kit.commerce)) {
    return { ok: false, error: "not_purchasable" };
  }

  const max = kit.commerce.maxQuantity!;
  if (qty > max) return { ok: false, error: "invalid_quantity" };

  const lineCurrency = kit.commerce.currency!;
  if (currency !== null && currency !== lineCurrency) {
    return { ok: false, error: "currency_mismatch" };
  }

  if (fulfillment === "delivery" && !kit.commerce.allowDelivery) {
    return { ok: false, error: "not_purchasable" };
  }
  if (fulfillment === "pickup" && !kit.commerce.allowPickup) {
    return { ok: false, error: "not_purchasable" };
  }

  const unit = kit.commerce.priceMinor!;
  return {
    ok: true,
    currency: lineCurrency,
    kit,
    resolved: {
      kind: "kit",
      slug: kit.slug,
      productId: null,
      sku: kit.commerce.sku!,
      name: kit.slug,
      quantity: qty,
      unitPriceMinor: unit,
      lineTotalMinor: unit * qty,
      currency: lineCurrency,
      availability: kit.commerce.availability,
      maxQuantity: max,
      image: kit.media.hero.src,
      allowDelivery: kit.commerce.allowDelivery,
      allowPickup: kit.commerce.allowPickup,
      deliveryCostMinor: kit.commerce.deliveryCostMinor,
    },
  };
}

async function resolveStoreLine(
  line: StoreCartLineInput,
  fulfillment: "delivery" | "pickup" | "none",
  currency: string | null,
): Promise<
  | { ok: true; resolved: ResolvedCartLine; currency: string }
  | { ok: false; error: "not_purchasable" | "invalid_quantity" | "currency_mismatch" }
> {
  const qty = Math.floor(Number(line.quantity));
  if (!Number.isFinite(qty) || qty < 1) {
    return { ok: false, error: "invalid_quantity" };
  }

  const product = await getHardwareStoreProduct(line.productId);
  if (!product || !product.isAvailable || !product.isOnline) {
    return { ok: false, error: "not_purchasable" };
  }

  const max = 20;
  if (qty > max) return { ok: false, error: "invalid_quantity" };

  const lineCurrency = product.currency || "DZD";
  if (currency !== null && currency !== lineCurrency) {
    return { ok: false, error: "currency_mismatch" };
  }

  // Store products follow tenant delivery defaults (COD).
  if (fulfillment === "delivery" || fulfillment === "pickup") {
    /* allowed */
  }

  const unit = Math.round(product.price);
  const deliveryCost =
    fulfillment === "delivery" ? 2_500 : null;
  return {
    ok: true,
    currency: lineCurrency,
    resolved: {
      kind: "store",
      slug: `store:${product.id}`,
      productId: product.id,
      sku: product.sku || product.id.slice(0, 12).toUpperCase(),
      name: product.name,
      quantity: qty,
      unitPriceMinor: unit,
      lineTotalMinor: unit * qty,
      currency: lineCurrency,
      availability: "available",
      maxQuantity: max,
      image: product.images[0] ?? null,
      allowDelivery: true,
      allowPickup: true,
      deliveryCostMinor: deliveryCost,
    },
  };
}

/** Resolve kit-only carts synchronously (bundles / legacy). */
export function resolveCart(
  lines: Array<CartLineInput | LegacyKitLineInput>,
  fulfillment: "delivery" | "pickup" | "none" = "none",
): ResolveCartResult {
  const normalized = lines
    .map(normalizeCartLineInput)
    .filter((l): l is CartLineInput => l !== null);

  if (!normalized.length) return { ok: false, error: "empty" };
  if (normalized.some((l) => l.kind === "store")) {
    return { ok: false, error: "not_purchasable" };
  }

  const resolved: ResolvedCartLine[] = [];
  const kits: HardwareKitDefinition[] = [];
  let currency: string | null = null;
  let subtotal = 0;
  let delivery = 0;

  for (const line of normalized) {
    if (line.kind !== "kit") continue;
    const result = resolveKitLine(line, fulfillment, currency);
    if (!result.ok) return { ok: false, error: result.error };
    currency = result.currency;
    kits.push(result.kit);
    resolved.push(result.resolved);
    subtotal += result.resolved.lineTotalMinor;
    if (
      fulfillment === "delivery" &&
      result.resolved.deliveryCostMinor !== null
    ) {
      delivery += result.resolved.deliveryCostMinor;
    }
  }

  return {
    ok: true,
    lines: resolved,
    kits,
    totals: {
      currency: currency!,
      subtotalMinor: subtotal,
      deliveryCostMinor: delivery,
      totalMinor: subtotal + delivery,
      fulfillment,
    },
  };
}

/** Resolve mixed kit + store carts with live store pricing. */
export async function resolveCartAsync(
  lines: Array<CartLineInput | LegacyKitLineInput>,
  fulfillment: "delivery" | "pickup" | "none" = "none",
): Promise<ResolveCartResult> {
  const normalized = lines
    .map(normalizeCartLineInput)
    .filter((l): l is CartLineInput => l !== null);

  if (!normalized.length) return { ok: false, error: "empty" };

  const resolved: ResolvedCartLine[] = [];
  const kits: HardwareKitDefinition[] = [];
  let currency: string | null = null;
  let subtotal = 0;
  let delivery = 0;
  let storeDeliveryApplied = false;

  for (const line of normalized) {
    if (line.kind === "kit") {
      const result = resolveKitLine(line, fulfillment, currency);
      if (!result.ok) return { ok: false, error: result.error };
      currency = result.currency;
      kits.push(result.kit);
      resolved.push(result.resolved);
      subtotal += result.resolved.lineTotalMinor;
      if (
        fulfillment === "delivery" &&
        result.resolved.deliveryCostMinor !== null
      ) {
        delivery += result.resolved.deliveryCostMinor;
      }
      continue;
    }

    const result = await resolveStoreLine(
      line,
      storeDeliveryApplied ? "pickup" : fulfillment,
      currency,
    );
    if (!result.ok) return { ok: false, error: result.error };
    currency = result.currency;
    // Restore intended fulfillment flags on the line.
    if (fulfillment === "delivery") {
      result.resolved.deliveryCostMinor = storeDeliveryApplied ? null : 2_500;
      if (!storeDeliveryApplied) {
        delivery += 2_500;
        storeDeliveryApplied = true;
      }
    } else {
      result.resolved.deliveryCostMinor = null;
    }
    resolved.push(result.resolved);
    subtotal += result.resolved.lineTotalMinor;
  }

  return {
    ok: true,
    lines: resolved,
    kits,
    totals: {
      currency: currency!,
      subtotalMinor: subtotal,
      deliveryCostMinor: delivery,
      totalMinor: subtotal + delivery,
      fulfillment,
    },
  };
}

export function generateOrderReference(): string {
  const now = new Date();
  const y = now.getUTCFullYear().toString().slice(-2);
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `HW-${y}${m}${d}-${rand}`;
}
