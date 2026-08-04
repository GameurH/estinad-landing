/**
 * Validation and demo submission adapter for hardware quote / compatibility requests.
 *
 * TODO (Supabase integration point):
 * After a verified development project is configured with server-only credentials,
 * replace `submitHardwareRequest` demo branch with inserts into:
 *   - hardware_quote_requests
 *   - hardware_compatibility_requests
 * Keep this module as the single server-side write boundary. Do not call Supabase
 * from client components. Enable RLS for anonymous insert-only policies if the
 * project conventions support it. Never expose the service-role key.
 */

import { hardwareKitSlugs, type HardwareKitSlug } from "@/lib/i18n-config";
import { isHardwareKitSlug } from "@/lib/hardware";

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
  website?: string;
};

export type HardwareRequestPayload =
  | HardwareQuotePayload
  | HardwareCompatibilityPayload;

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

export type SubmitResult =
  | { ok: true; mode: "demo" }
  | { ok: false; errors: FieldErrors }
  | { ok: true; mode: "honeypot" };

/**
 * Demo-only submission. Does not persist or log contact payloads.
 * Swap this function body when wiring Supabase (see file header TODO).
 */
export async function submitHardwareRequest(
  payload: HardwareRequestPayload,
): Promise<SubmitResult> {
  // Honeypot — treat as success without processing.
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

  // Demo mode: acknowledge without persistence.
  // TODO: persist to Supabase tables listed in the file header.
  void payload;
  return { ok: true, mode: "demo" };
}
