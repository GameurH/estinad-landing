import type { ProductSlug } from "@/lib/i18n-config";

/** 3D product visuals — keep filenames stable; swap files to refresh art. */
export const productMedia = {
  retail: {
    featured: "/images/products/retail-image.png",
    icon: "/images/products/retail-image.png",
  },
  restaurant: {
    icon: "/images/products/restaurant-icon.png",
  },
  inventory: {
    icon: "/images/products/inventory-icon.png",
  },
  invoices: {
    icon: "/images/products/invoices-icon.png",
  },
  workforce: {
    icon: "/images/products/workforce-icon.png",
  },
  clinic: {
    icon: "/images/products/clinic-icon.png",
  },
  central: {
    icon: "/images/products/central-icon.png",
  },
} as const satisfies Record<
  ProductSlug,
  { icon: string; featured?: string }
>;

/** Showcase grid order under the featured Retail card. */
export const portfolioGridOrder: ProductSlug[] = [
  "restaurant",
  "inventory",
  "central",
  "invoices",
];
