/**
 * Loads the POS Hardware storefront catalog from the RMS Supabase project.
 * Product/category copy is resolved from Supabase translation tables by locale.
 */

import type { Locale } from "@/lib/i18n-config";
import {
  getRmsSupabase,
  HARDWARE_TENANT_ID,
} from "@/lib/supabase/rms";

export type HardwareStoreTenant = {
  id: string;
  name: string;
  slug: string | null;
  businessName: string | null;
  businessType: string | null;
  currency: string;
  status: string | null;
  storefrontEnabled: boolean;
  contactEmail: string | null;
  contactPhone: string | null;
};

export type HardwareStoreCategory = {
  id: string;
  name: string;
  type: string | null;
  parentId: string | null;
  image: string | null;
  description: string | null;
  count: number;
  /** Stable key from RMS (e.g. cat_pos_terminals) for icon mapping. */
  pbId: string | null;
};

export type HardwareStoreProduct = {
  id: string;
  name: string;
  slug: string | null;
  sku: string | null;
  barcode: string | null;
  brand: string | null;
  price: number;
  currency: string;
  shortDescription: string | null;
  longDescription: string | null;
  images: string[];
  categoryId: string | null;
  categoryName: string | null;
  /** Stable RMS category key (e.g. cat_pos_terminals). */
  categoryPbId: string | null;
  isOnline: boolean;
  isAvailable: boolean;
  visibility: string | null;
  type: string | null;
  updatedAt: string | null;
};

export type HardwareStoreCatalog = {
  tenant: HardwareStoreTenant | null;
  categories: HardwareStoreCategory[];
  products: HardwareStoreProduct[];
  configured: boolean;
  error: string | null;
  locale: Locale;
};

type TranslationRow = {
  language_code: string;
  name?: string | null;
  short_description?: string | null;
  long_description?: string | null;
  description?: string | null;
  seo_title?: string | null;
  seo_description?: string | null;
};

type ProductMediaRow = {
  storage_bucket: string;
  storage_path: string;
  position: number;
  is_primary: boolean;
  created_at: string;
};

type CategoryJoin = {
  id: string;
  name: string;
  pb_id?: string | null;
  category_translations?: TranslationRow[] | null;
};

type ProductRow = {
  id: string;
  name: string;
  slug: string | null;
  sku: string | null;
  barcode: string | null;
  brand: string | null;
  price: number | string;
  short_description: string | null;
  long_description: string | null;
  images: string[] | null;
  is_online: boolean;
  is_available: boolean;
  visibility: string | null;
  type: string | null;
  category_id: string | null;
  updated_at?: string | null;
  categories?: CategoryJoin | CategoryJoin[] | null;
  product_media?: ProductMediaRow[] | null;
  product_translations?: TranslationRow[] | null;
};

type CategoryRow = {
  id: string;
  name: string;
  type: string | null;
  parent_id: string | null;
  image: string | null;
  pb_id?: string | null;
  category_translations?: TranslationRow[] | null;
};

function encodeStoragePath(path: string) {
  return path
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
}

function buildPublicStorageUrl(
  supabaseUrl: string,
  bucket: string,
  path: string,
) {
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${encodeStoragePath(path)}`;
}

function matchesLocale(code: string | null | undefined, locale: Locale) {
  if (!code) return false;
  const normalized = code.toLowerCase().replace(/_/g, "-").trim();
  if (normalized === locale || normalized.startsWith(`${locale}-`)) return true;
  // Common RMS aliases
  if (locale === "ar" && (normalized === "ara" || normalized === "arabic")) {
    return true;
  }
  if (locale === "fr" && (normalized === "fra" || normalized === "french")) {
    return true;
  }
  if (locale === "en" && (normalized === "eng" || normalized === "english")) {
    return true;
  }
  return false;
}

function pickTranslatedField(
  translations: TranslationRow[] | null | undefined,
  field: keyof TranslationRow,
  locale: Locale,
  fallback: string | null,
): string | null {
  if (!translations?.length) return fallback;

  const exact = translations.find((t) => matchesLocale(t.language_code, locale));
  const exactValue = exact?.[field];
  if (typeof exactValue === "string" && exactValue.trim()) return exactValue;

  if (locale !== "en") {
    const en = translations.find((t) => matchesLocale(t.language_code, "en"));
    const enValue = en?.[field];
    if (typeof enValue === "string" && enValue.trim()) return enValue;
  }

  const any = translations.find((t) => {
    const v = t[field];
    return typeof v === "string" && v.trim().length > 0;
  });
  if (any && typeof any[field] === "string") return any[field] as string;

  return fallback;
}

function asCategory(join: ProductRow["categories"]): CategoryJoin | null {
  if (!join) return null;
  return Array.isArray(join) ? join[0] ?? null : join;
}

function normalizeProduct(
  row: ProductRow,
  currency: string,
  supabaseUrl: string | null,
  locale: Locale,
): HardwareStoreProduct {
  const media = (row.product_media || [])
    .slice()
    .sort((a, b) => {
      if (a.is_primary !== b.is_primary) return a.is_primary ? -1 : 1;
      if (a.position !== b.position) return a.position - b.position;
      return a.created_at.localeCompare(b.created_at);
    });

  const mediaUrls = supabaseUrl
    ? media
        .map((m) =>
          buildPublicStorageUrl(supabaseUrl, m.storage_bucket, m.storage_path),
        )
        .filter(Boolean)
    : [];

  const fallback = (row.images || []).filter(
    (u): u is string => typeof u === "string" && u.length > 0,
  );
  const images = Array.from(new Set([...mediaUrls, ...fallback]));
  const category = asCategory(row.categories);

  return {
    id: row.id,
    name:
      pickTranslatedField(row.product_translations, "name", locale, row.name) ||
      row.name,
    slug: row.slug,
    sku: row.sku,
    barcode: row.barcode,
    brand: row.brand,
    price: Number(row.price) || 0,
    currency,
    shortDescription: pickTranslatedField(
      row.product_translations,
      "short_description",
      locale,
      row.short_description,
    ),
    longDescription: pickTranslatedField(
      row.product_translations,
      "long_description",
      locale,
      row.long_description,
    ),
    images,
    categoryId: row.category_id,
    categoryName: category
      ? pickTranslatedField(
          category.category_translations,
          "name",
          locale,
          category.name,
        )
      : null,
    categoryPbId: category?.pb_id ?? null,
    isOnline: row.is_online,
    isAvailable: row.is_available,
    visibility: row.visibility,
    type: row.type,
    updatedAt: row.updated_at ?? null,
  };
}

function normalizeCategory(
  row: CategoryRow,
  locale: Locale,
  count: number,
): HardwareStoreCategory {
  return {
    id: row.id,
    name:
      pickTranslatedField(row.category_translations, "name", locale, row.name) ||
      row.name,
    type: row.type,
    parentId: row.parent_id,
    image: row.image,
    description: pickTranslatedField(
      row.category_translations,
      "description",
      locale,
      null,
    ),
    count,
    pbId: row.pb_id ?? null,
  };
}

const PRODUCT_SELECT = `
  id,
  name,
  slug,
  sku,
  barcode,
  brand,
  price,
  short_description,
  long_description,
  images,
  is_online,
  is_available,
  visibility,
  type,
  category_id,
  updated_at,
  product_media (
    storage_bucket,
    storage_path,
    position,
    is_primary,
    created_at
  ),
  product_translations (
    language_code,
    name,
    short_description,
    long_description,
    seo_title,
    seo_description
  ),
  categories!products_category_id_fkey (
    id,
    name,
    pb_id,
    category_translations (
      language_code,
      name,
      description
    )
  )
`;

export async function getHardwareStoreCatalog(
  locale: Locale = "en",
  tenantId: string = HARDWARE_TENANT_ID,
): Promise<HardwareStoreCatalog> {
  const supabase = getRmsSupabase();
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? null;

  if (!supabase) {
    return {
      tenant: null,
      categories: [],
      products: [],
      configured: false,
      error: "missing_env",
      locale,
    };
  }

  const [tenantRes, categoriesRes, productsRes] = await Promise.all([
    supabase.from("tenants").select("*").eq("id", tenantId).maybeSingle(),
    supabase
      .from("categories")
      .select(
        `
        id,
        name,
        type,
        parent_id,
        image,
        pb_id,
        category_translations (
          language_code,
          name,
          description
        )
      `,
      )
      .eq("tenant_id", tenantId)
      .order("name", { ascending: true }),
    supabase
      .from("products")
      .select(PRODUCT_SELECT)
      .eq("tenant_id", tenantId)
      // Storefront: only active / sellable SKUs (RMS has no is_active column).
      .eq("is_available", true)
      .eq("is_online", true)
      .in("visibility", ["both", "online"])
      .order("name", { ascending: true }),
  ]);

  if (tenantRes.error || categoriesRes.error || productsRes.error) {
    const message =
      tenantRes.error?.message ||
      categoriesRes.error?.message ||
      productsRes.error?.message ||
      "query_failed";
    console.error("[hardware-store-catalog]", message);
    return {
      tenant: null,
      categories: [],
      products: [],
      configured: true,
      error: message,
      locale,
    };
  }

  const rawTenant = tenantRes.data as Record<string, unknown> | null;
  const config =
    rawTenant && typeof rawTenant.config === "object" && rawTenant.config
      ? (rawTenant.config as Record<string, unknown>)
      : {};
  const contact =
    typeof config.contact === "object" && config.contact
      ? (config.contact as Record<string, unknown>)
      : {};
  const currency =
    typeof config.currency === "string" && config.currency
      ? config.currency
      : "DZD";

  const tenant: HardwareStoreTenant | null = rawTenant
    ? {
        id: String(rawTenant.id),
        name: String(rawTenant.name ?? "Hardware store"),
        slug: (rawTenant.slug as string | null) ?? null,
        businessName: (rawTenant.business_name as string | null) ?? null,
        businessType: (rawTenant.business_type as string | null) ?? null,
        currency,
        status: (rawTenant.status as string | null) ?? null,
        storefrontEnabled: Boolean(rawTenant.storefront_enabled),
        contactEmail:
          typeof contact.email === "string" ? contact.email : null,
        contactPhone:
          typeof contact.phone === "string" ? contact.phone : null,
      }
    : null;

  const products = ((productsRes.data || []) as unknown as ProductRow[]).map(
    (row) => normalizeProduct(row, currency, supabaseUrl, locale),
  );

  const counts = new Map<string, number>();
  for (const product of products) {
    if (!product.categoryId) continue;
    counts.set(product.categoryId, (counts.get(product.categoryId) || 0) + 1);
  }

  // Only categories that still have available products — keeps filters/RTL nav clean.
  const categories: HardwareStoreCategory[] = (
    (categoriesRes.data || []) as unknown as CategoryRow[]
  )
    .map((row) => normalizeCategory(row, locale, counts.get(row.id) || 0))
    .filter((cat) => cat.count > 0);

  return {
    tenant,
    categories,
    products,
    configured: true,
    error: null,
    locale,
  };
}

export async function getHardwareStoreProduct(
  productId: string,
  locale: Locale = "en",
  tenantId: string = HARDWARE_TENANT_ID,
): Promise<HardwareStoreProduct | null> {
  const supabase = getRmsSupabase();
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? null;
  if (!supabase || !productId) return null;

  const [tenantRes, productRes] = await Promise.all([
    supabase
      .from("tenants")
      .select("config")
      .eq("id", tenantId)
      .maybeSingle(),
    supabase
      .from("products")
      .select(PRODUCT_SELECT)
      .eq("tenant_id", tenantId)
      .eq("id", productId)
      .eq("is_available", true)
      .eq("is_online", true)
      .in("visibility", ["both", "online"])
      .maybeSingle(),
  ]);

  if (productRes.error || !productRes.data) {
    if (productRes.error) {
      console.error("[hardware-store-product]", productRes.error.message);
    }
    return null;
  }

  const config =
    tenantRes.data &&
    typeof tenantRes.data.config === "object" &&
    tenantRes.data.config
      ? (tenantRes.data.config as Record<string, unknown>)
      : {};
  const currency =
    typeof config.currency === "string" && config.currency
      ? config.currency
      : "DZD";

  return normalizeProduct(
    productRes.data as unknown as ProductRow,
    currency,
    supabaseUrl,
    locale,
  );
}

export function isStoreProductPurchasable(
  product: Pick<HardwareStoreProduct, "isAvailable" | "isOnline" | "price">,
): boolean {
  return product.isAvailable && product.isOnline && product.price > 0;
}
