/**
 * Validation and submission adapter for hardware quote / compatibility requests
 * and COD orders. Single server-side write boundary — never call Supabase from
 * client components. Never expose the service-role key.
 */

import { hardwareKitSlugs, type HardwareKitSlug } from "@/lib/i18n-config";
import { isHardwareKitSlug } from "@/lib/hardware";
import {
  generateOrderReference,
  resolveCartAsync,
  type CartLineInput,
} from "@/lib/hardware-commerce";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export type HardwareRequestKind = "quote" | "compatibility";

export type ExistingHardwareStatus =
  | "none"
  | "needs-review"
  | "already-compatible";

export type InstallationRequirement = "yes" | "no" | "discuss";

export type HardwareQuotePayload = {
  kind: "quote";
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  businessType: string;
  productInterest: string;
  locations: string;
  counters: string;
  kit: HardwareKitSlug | "";
  existingHardware: ExistingHardwareStatus | "";
  installation: InstallationRequirement | "";
  notes: string;
  consent: string;
  locale?: string;
  /** Honeypot — must be empty. */
  website?: string;
};

export type HardwareCompatibilityPayload = {
  kind: "compatibility";
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  businessType: string;
  productInterest: string;
  equipmentSummary: string;
  notes: string;
  consent: string;
  locale?: string;
  website?: string;
};

export type HardwareRequestPayload =
  | HardwareQuotePayload
  | HardwareCompatibilityPayload;

export type HardwareOrderPayload = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  fulfillment: "delivery" | "pickup" | "";
  notes: string;
  consent: string;
  paymentMethod: string;
  locale?: string;
  lines: CartLineInput[];
  website?: string;
};

export type FieldErrors = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EXISTING: readonly ExistingHardwareStatus[] = [
  "none",
  "needs-review",
  "already-compatible",
];
const INSTALLATION: readonly InstallationRequirement[] = ["yes", "no", "discuss"];

function str(value: unknown, max = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isExisting(value: string): value is ExistingHardwareStatus {
  return (EXISTING as readonly string[]).includes(value);
}

function isInstallation(value: string): value is InstallationRequirement {
  return (INSTALLATION as readonly string[]).includes(value);
}

export function normalizeQuotePayload(
  raw: Record<string, unknown>,
): HardwareQuotePayload {
  const kitRaw = str(raw.kit, 64);
  const existingRaw = str(raw.existingHardware, 64);
  const installRaw = str(raw.installation, 64);

  return {
    kind: "quote",
    fullName: str(raw.fullName, 120),
    companyName: str(raw.companyName, 160),
    email: str(raw.email, 160).toLowerCase(),
    phone: str(raw.phone, 40),
    country: str(raw.country, 80),
    city: str(raw.city, 80),
    businessType: str(raw.businessType, 80),
    productInterest: str(raw.productInterest, 80),
    locations: str(raw.locations, 20),
    counters: str(raw.counters, 20),
    kit: isHardwareKitSlug(kitRaw) ? kitRaw : "",
    existingHardware: isExisting(existingRaw) ? existingRaw : "",
    installation: isInstallation(installRaw) ? installRaw : "",
    notes: str(raw.notes, 2000),
    consent: str(raw.consent, 8),
    locale: str(raw.locale, 8),
    website: str(raw.website, 200),
  };
}

export function normalizeCompatibilityPayload(
  raw: Record<string, unknown>,
): HardwareCompatibilityPayload {
  return {
    kind: "compatibility",
    fullName: str(raw.fullName, 120),
    companyName: str(raw.companyName, 160),
    email: str(raw.email, 160).toLowerCase(),
    phone: str(raw.phone, 40),
    country: str(raw.country, 80),
    city: str(raw.city, 80),
    businessType: str(raw.businessType, 80),
    productInterest: str(raw.productInterest, 80),
    equipmentSummary: str(raw.equipmentSummary, 2000),
    notes: str(raw.notes, 2000),
    consent: str(raw.consent, 8),
    locale: str(raw.locale, 8),
    website: str(raw.website, 200),
  };
}

export function normalizeOrderPayload(
  raw: Record<string, unknown>,
): HardwareOrderPayload {
  const fulfillmentRaw = str(raw.fulfillment, 32);
  const linesRaw = Array.isArray(raw.lines) ? raw.lines : [];
  const lines: CartLineInput[] = [];

  for (const line of linesRaw) {
    if (!line || typeof line !== "object") continue;
    const row = line as {
      kind?: unknown;
      slug?: unknown;
      productId?: unknown;
      quantity?: unknown;
    };
    const quantity = Number(row.quantity);
    if (row.kind === "store" || typeof row.productId === "string") {
      const productId = str(row.productId, 64);
      if (!productId) continue;
      lines.push({ kind: "store", productId, quantity });
      continue;
    }
    const slug = str(row.slug, 64);
    if (!isHardwareKitSlug(slug)) continue;
    lines.push({ kind: "kit", slug, quantity });
  }

  return {
    fullName: str(raw.fullName, 120),
    companyName: str(raw.companyName, 160),
    email: str(raw.email, 160).toLowerCase(),
    phone: str(raw.phone, 40),
    country: str(raw.country, 80),
    city: str(raw.city, 80),
    address: str(raw.address, 500),
    fulfillment:
      fulfillmentRaw === "delivery" || fulfillmentRaw === "pickup"
        ? fulfillmentRaw
        : "",
    notes: str(raw.notes, 2000),
    consent: str(raw.consent, 8),
    paymentMethod: str(raw.paymentMethod, 16) || "cod",
    locale: str(raw.locale, 8),
    lines,
    website: str(raw.website, 200),
  };
}

/** Error keys are stable English codes; UI maps them via dictionary. */
export function validateQuotePayload(
  payload: HardwareQuotePayload,
): FieldErrors {
  const errors: FieldErrors = {};

  if (!payload.fullName) errors.fullName = "required";
  if (!payload.companyName) errors.companyName = "required";
  if (!payload.email) errors.email = "required";
  else if (!EMAIL_RE.test(payload.email)) errors.email = "email";
  if (!payload.phone) errors.phone = "required";
  if (!payload.country) errors.country = "required";
  if (!payload.city) errors.city = "required";
  if (!payload.businessType) errors.businessType = "required";
  if (!payload.productInterest) errors.productInterest = "required";
  if (!payload.locations) errors.locations = "required";
  if (!payload.counters) errors.counters = "required";
  if (!payload.kit) errors.kit = "required";
  else if (!(hardwareKitSlugs as readonly string[]).includes(payload.kit)) {
    errors.kit = "invalid";
  }
  if (!payload.existingHardware) errors.existingHardware = "required";
  if (!payload.installation) errors.installation = "required";
  if (!payload.consent) errors.consent = "required";

  return errors;
}

export function validateCompatibilityPayload(
  payload: HardwareCompatibilityPayload,
): FieldErrors {
  const errors: FieldErrors = {};

  if (!payload.fullName) errors.fullName = "required";
  if (!payload.companyName) errors.companyName = "required";
  if (!payload.email) errors.email = "required";
  else if (!EMAIL_RE.test(payload.email)) errors.email = "email";
  if (!payload.phone) errors.phone = "required";
  if (!payload.country) errors.country = "required";
  if (!payload.city) errors.city = "required";
  if (!payload.businessType) errors.businessType = "required";
  if (!payload.productInterest) errors.productInterest = "required";
  if (!payload.equipmentSummary) errors.equipmentSummary = "required";
  if (!payload.consent) errors.consent = "required";

  return errors;
}

export function validateOrderPayload(payload: HardwareOrderPayload): FieldErrors {
  const errors: FieldErrors = {};

  if (!payload.fullName) errors.fullName = "required";
  if (!payload.companyName) errors.companyName = "required";
  if (!payload.email) errors.email = "required";
  else if (!EMAIL_RE.test(payload.email)) errors.email = "email";
  if (!payload.phone) errors.phone = "required";
  if (!payload.country) errors.country = "required";
  if (!payload.city) errors.city = "required";
  if (!payload.fulfillment) errors.fulfillment = "fulfillment";
  if (payload.fulfillment === "delivery" && !payload.address) {
    errors.address = "required";
  }
  if (!payload.consent) errors.consent = "required";
  if (payload.paymentMethod !== "cod") errors.paymentMethod = "invalid";
  if (!payload.lines.length) errors.lines = "empty";

  return errors;
}

export type SubmitResult =
  | { ok: true; mode: "supabase" | "demo" | "honeypot" }
  | { ok: false; errors: FieldErrors };

export type OrderSubmitResult =
  | { ok: true; mode: "supabase" | "demo" | "honeypot"; reference: string }
  | { ok: false; errors: FieldErrors };

export async function submitHardwareRequest(
  payload: HardwareRequestPayload,
): Promise<SubmitResult> {
  if (payload.website) {
    return { ok: true, mode: "honeypot" };
  }

  const errors =
    payload.kind === "quote"
      ? validateQuotePayload(payload)
      : validateCompatibilityPayload(payload);

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    // Soft-fail to demo acknowledgement when credentials are not configured.
    return { ok: true, mode: "demo" };
  }

  if (payload.kind === "quote") {
    const { error } = await supabase.from("hardware_quote_requests").insert({
      full_name: payload.fullName,
      company_name: payload.companyName,
      email: payload.email,
      phone: payload.phone,
      country: payload.country,
      city: payload.city,
      business_type: payload.businessType,
      product_interest: payload.productInterest,
      locations: payload.locations,
      counters: payload.counters,
      kit: payload.kit,
      existing_hardware: payload.existingHardware,
      installation: payload.installation,
      notes: payload.notes,
      consent: Boolean(payload.consent),
      locale: payload.locale || null,
    });
    if (error) {
      console.error("[hardware-quote]", error.message);
      return { ok: false, errors: { form: "server" } };
    }
  } else {
    const { error } = await supabase
      .from("hardware_compatibility_requests")
      .insert({
        full_name: payload.fullName,
        company_name: payload.companyName,
        email: payload.email,
        phone: payload.phone,
        country: payload.country,
        city: payload.city,
        business_type: payload.businessType,
        product_interest: payload.productInterest,
        equipment_summary: payload.equipmentSummary,
        notes: payload.notes,
        consent: Boolean(payload.consent),
        locale: payload.locale || null,
      });
    if (error) {
      console.error("[hardware-compatibility]", error.message);
      return { ok: false, errors: { form: "server" } };
    }
  }

  return { ok: true, mode: "supabase" };
}

export async function submitHardwareOrder(
  payload: HardwareOrderPayload,
): Promise<OrderSubmitResult> {
  if (payload.website) {
    return { ok: true, mode: "honeypot", reference: "HW-HONEYPOT" };
  }

  const fieldErrors = validateOrderPayload(payload);
  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, errors: fieldErrors };
  }

  const cart = await resolveCartAsync(
    payload.lines,
    payload.fulfillment === "delivery" || payload.fulfillment === "pickup"
      ? payload.fulfillment
      : "none",
  );

  if (!cart.ok) {
    const map = {
      empty: "empty",
      not_purchasable: "not_purchasable",
      invalid_quantity: "invalid_quantity",
      currency_mismatch: "not_purchasable",
    } as const;
    return { ok: false, errors: { lines: map[cart.error] } };
  }

  const reference = generateOrderReference();
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return { ok: true, mode: "demo", reference };
  }

  const { data: order, error: orderError } = await supabase
    .from("hardware_orders")
    .insert({
      reference,
      status: "pending_cod",
      payment_method: "cod",
      fulfillment_method: payload.fulfillment,
      full_name: payload.fullName,
      company_name: payload.companyName,
      email: payload.email,
      phone: payload.phone,
      country: payload.country,
      city: payload.city,
      address: payload.fulfillment === "delivery" ? payload.address : null,
      notes: payload.notes,
      currency: cart.totals.currency,
      subtotal_minor: cart.totals.subtotalMinor,
      delivery_cost_minor: cart.totals.deliveryCostMinor,
      total_minor: cart.totals.totalMinor,
      locale: payload.locale || null,
      consent: Boolean(payload.consent),
    })
    .select("id")
    .single();

  if (orderError || !order) {
    console.error("[hardware-order]", orderError?.message);
    return { ok: false, errors: { form: "server" } };
  }

  const itemRows = cart.lines.map((line) => ({
    order_id: order.id,
    slug: line.slug,
    sku: line.sku,
    name: line.name,
    quantity: line.quantity,
    unit_price_minor: line.unitPriceMinor,
    line_total_minor: line.lineTotalMinor,
    currency: line.currency,
  }));

  const { error: itemsError } = await supabase
    .from("hardware_order_items")
    .insert(itemRows);

  if (itemsError) {
    console.error("[hardware-order-items]", itemsError.message);
    await supabase.from("hardware_orders").delete().eq("id", order.id);
    return { ok: false, errors: { form: "server" } };
  }

  return { ok: true, mode: "supabase", reference };
}
