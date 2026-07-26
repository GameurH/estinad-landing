import { en } from "@/lib/dictionaries/en";
import { fr } from "@/lib/dictionaries/fr";
import { ar } from "@/lib/dictionaries/ar";
import type { Dictionary } from "@/lib/dictionaries/types";
import { defaultLocale, type Locale } from "@/lib/i18n-config";

export { locales, defaultLocale, localeMeta, isLocale, lp } from "@/lib/i18n-config";
export type { Locale } from "@/lib/i18n-config";

const dictionaries: Record<Locale, Dictionary> = { en, fr, ar };

export function getDict(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
