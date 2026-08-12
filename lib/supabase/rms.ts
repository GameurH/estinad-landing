/**
 * Read client for the ESTINAD / RMS Supabase project (store catalog).
 * Uses the anon key — safe for server reads behind RLS.
 * Never import a service-role client into client components.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

export const HARDWARE_TENANT_ID =
  process.env.HARDWARE_TENANT_ID ??
  process.env.NEXT_PUBLIC_HARDWARE_TENANT_ID ??
  "c27fb19a-0121-4395-88ca-2cb8374dc52d";

export function getRmsSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  if (!cached) {
    cached = createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return cached;
}

export function isRmsCatalogConfigured(): boolean {
  return getRmsSupabase() !== null;
}
