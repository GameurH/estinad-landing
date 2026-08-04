/**
 * Typed local source of truth for ESTINAD Certified Hardware / ESTINAD Axis.
 * Demo configurations only — never shown as live inventory or priced SKUs.
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

export type HardwareKitDefinition = {
  slug: HardwareKitSlug;
  /** Internal flag — never render in public UI. */
  demoConfiguration: true;
  glyph: string;
  relatedProducts: ProductSlug[];
  media: Record<HardwareMediaKey, HardwareMediaAsset>;
  includePins: readonly HardwareIncludePin[];
};

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
  },
  {
    slug: "inventory-kit",
    demoConfiguration: true,
    glyph: "03",
    relatedProducts: ["retail", "restaurant", "clinic"],
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
  },
  {
    slug: "multi-site-rollout",
    demoConfiguration: true,
    glyph: "04",
    relatedProducts: ["retail", "restaurant", "clinic", "cloud"],
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
