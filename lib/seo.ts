import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "@/lib/i18n-config";

const BASE = "https://estinad.com";

/** Locale-prefixed path without trailing slash (except root). */
export function localePath(locale: Locale, path = ""): string {
  const clean = path === "/" ? "" : path;
  return `/${locale}${clean}`;
}

/** Absolute URL for a locale + path. */
export function absoluteUrl(locale: Locale, path = ""): string {
  return `${BASE}${localePath(locale, path)}`;
}

/**
 * Canonical + hreflang alternates for a page path (no locale prefix).
 * Example: hreflangMeta("en", "/products/restaurant")
 */
export function hreflangMeta(locale: Locale, path = ""): Metadata["alternates"] {
  const clean = path === "/" ? "" : path;
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = absoluteUrl(l, clean);
  }
  languages["x-default"] = absoluteUrl(defaultLocale, clean);

  return {
    canonical: absoluteUrl(locale, clean),
    languages,
  };
}

/** Merge page metadata with shared alternates. */
export function pageMeta(
  locale: Locale,
  path: string,
  partial: Pick<Metadata, "title" | "description" | "openGraph" | "twitter">,
): Metadata {
  return {
    ...partial,
    alternates: hreflangMeta(locale, path),
    openGraph: {
      ...partial.openGraph,
      url: absoluteUrl(locale, path),
    },
  };
}

export { BASE as SITE_BASE };
