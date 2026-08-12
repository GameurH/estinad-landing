"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  anyKitPurchasable,
  getHardwareKit,
  isPurchasable,
} from "@/lib/hardware";
import type { HardwareKitSlug } from "@/lib/i18n-config";
import { isStoreProductPurchasable } from "@/lib/hardware-store-catalog";

export type KitCartItem = {
  kind: "kit";
  slug: HardwareKitSlug;
  quantity: number;
};

export type StoreCartItem = {
  kind: "store";
  productId: string;
  quantity: number;
  name: string;
  price: number;
  currency: string;
  sku: string | null;
  image: string | null;
  maxQuantity: number;
};

export type HardwareCartItem = KitCartItem | StoreCartItem;

export type StoreProductCartInput = {
  productId: string;
  name: string;
  price: number;
  currency: string;
  sku: string | null;
  image: string | null;
  isAvailable: boolean;
  isOnline: boolean;
  maxQuantity?: number;
};

type HardwareCartContextValue = {
  items: HardwareCartItem[];
  purchasingOpen: boolean;
  addKit: (slug: HardwareKitSlug, quantity?: number) => void;
  addStoreProduct: (product: StoreProductCartInput, quantity?: number) => void;
  /** @deprecated use addKit */
  addItem: (slug: HardwareKitSlug, quantity?: number) => void;
  setKitQuantity: (slug: HardwareKitSlug, quantity: number) => void;
  setStoreQuantity: (productId: string, quantity: number) => void;
  /** @deprecated use setKitQuantity */
  setQuantity: (slug: HardwareKitSlug, quantity: number) => void;
  removeKit: (slug: HardwareKitSlug) => void;
  removeStoreProduct: (productId: string) => void;
  /** @deprecated use removeKit */
  removeItem: (slug: HardwareKitSlug) => void;
  clear: () => void;
  itemCount: number;
  subtotalPreview: { amount: number; currency: string } | null;
};

const HardwareCartContext = createContext<HardwareCartContextValue | null>(
  null,
);

const STORAGE_KEY = "estinad_hardware_cart_v2";
const LEGACY_STORAGE_KEY = "estinad_hardware_cart_v1";
const DEFAULT_STORE_MAX = 20;

function isKitSlug(value: unknown): value is HardwareKitSlug {
  return typeof value === "string" && Boolean(getHardwareKit(value as HardwareKitSlug));
}

function readStored(): HardwareCartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw =
      window.localStorage.getItem(STORAGE_KEY) ??
      window.localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown[];
    if (!Array.isArray(parsed)) return [];

    const items: HardwareCartItem[] = [];
    for (const entry of parsed) {
      if (!entry || typeof entry !== "object") continue;
      const row = entry as Record<string, unknown>;

      if (row.kind === "store" || typeof row.productId === "string") {
        const productId = String(row.productId || "");
        const quantity = Number(row.quantity);
        const price = Number(row.price);
        if (
          !productId ||
          !Number.isFinite(quantity) ||
          quantity < 1 ||
          !Number.isFinite(price)
        ) {
          continue;
        }
        items.push({
          kind: "store",
          productId,
          quantity: Math.min(DEFAULT_STORE_MAX, Math.floor(quantity)),
          name: String(row.name || "Product"),
          price,
          currency: String(row.currency || "DZD"),
          sku: typeof row.sku === "string" ? row.sku : null,
          image: typeof row.image === "string" ? row.image : null,
          maxQuantity:
            Number(row.maxQuantity) > 0
              ? Number(row.maxQuantity)
              : DEFAULT_STORE_MAX,
        });
        continue;
      }

      const slug = row.slug;
      const quantity = Number(row.quantity);
      if (!isKitSlug(slug) || !Number.isFinite(quantity) || quantity < 1) {
        continue;
      }
      const kit = getHardwareKit(slug);
      if (!kit || !isPurchasable(kit.commerce)) continue;
      items.push({
        kind: "kit",
        slug,
        quantity: Math.min(kit.commerce.maxQuantity ?? 1, Math.floor(quantity)),
      });
    }
    return items;
  } catch {
    return [];
  }
}

export function HardwareCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<HardwareCartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const purchasingOpen =
    anyKitPurchasable() ||
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);

  useEffect(() => {
    setItems(readStored());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);

  const addKit = useCallback((slug: HardwareKitSlug, quantity = 1) => {
    const kit = getHardwareKit(slug);
    if (!kit || !isPurchasable(kit.commerce)) return;
    const max = kit.commerce.maxQuantity ?? 1;
    setItems((prev) => {
      const existing = prev.find(
        (i): i is KitCartItem => i.kind === "kit" && i.slug === slug,
      );
      if (existing) {
        return prev.map((i) =>
          i.kind === "kit" && i.slug === slug
            ? { ...i, quantity: Math.min(max, i.quantity + quantity) }
            : i,
        );
      }
      return [
        ...prev,
        { kind: "kit", slug, quantity: Math.min(max, Math.max(1, quantity)) },
      ];
    });
  }, []);

  const addStoreProduct = useCallback(
    (product: StoreProductCartInput, quantity = 1) => {
      if (!isStoreProductPurchasable(product)) return;
      const max = product.maxQuantity ?? DEFAULT_STORE_MAX;
      setItems((prev) => {
        const existing = prev.find(
          (i): i is StoreCartItem =>
            i.kind === "store" && i.productId === product.productId,
        );
        if (existing) {
          return prev.map((i) =>
            i.kind === "store" && i.productId === product.productId
              ? {
                  ...i,
                  quantity: Math.min(max, i.quantity + quantity),
                  name: product.name,
                  price: product.price,
                  currency: product.currency,
                  sku: product.sku,
                  image: product.image,
                  maxQuantity: max,
                }
              : i,
          );
        }
        return [
          ...prev,
          {
            kind: "store",
            productId: product.productId,
            quantity: Math.min(max, Math.max(1, quantity)),
            name: product.name,
            price: product.price,
            currency: product.currency,
            sku: product.sku,
            image: product.image,
            maxQuantity: max,
          },
        ];
      });
    },
    [],
  );

  const setKitQuantity = useCallback(
    (slug: HardwareKitSlug, quantity: number) => {
      const kit = getHardwareKit(slug);
      if (!kit || !isPurchasable(kit.commerce)) return;
      const max = kit.commerce.maxQuantity ?? 1;
      const next = Math.floor(quantity);
      if (!Number.isFinite(next) || next < 1) {
        setItems((prev) =>
          prev.filter((i) => !(i.kind === "kit" && i.slug === slug)),
        );
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          i.kind === "kit" && i.slug === slug
            ? { ...i, quantity: Math.min(max, next) }
            : i,
        ),
      );
    },
    [],
  );

  const setStoreQuantity = useCallback(
    (productId: string, quantity: number) => {
      const next = Math.floor(quantity);
      if (!Number.isFinite(next) || next < 1) {
        setItems((prev) =>
          prev.filter(
            (i) => !(i.kind === "store" && i.productId === productId),
          ),
        );
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          i.kind === "store" && i.productId === productId
            ? { ...i, quantity: Math.min(i.maxQuantity, next) }
            : i,
        ),
      );
    },
    [],
  );

  const removeKit = useCallback((slug: HardwareKitSlug) => {
    setItems((prev) =>
      prev.filter((i) => !(i.kind === "kit" && i.slug === slug)),
    );
  }, []);

  const removeStoreProduct = useCallback((productId: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.kind === "store" && i.productId === productId)),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const subtotalPreview = useMemo(() => {
    if (!items.length) return null;
    let amount = 0;
    let currency: string | null = null;
    for (const item of items) {
      if (item.kind === "kit") {
        const kit = getHardwareKit(item.slug);
        if (!kit?.commerce.priceMinor || !kit.commerce.currency) continue;
        amount += kit.commerce.priceMinor * item.quantity;
        currency = kit.commerce.currency;
      } else {
        amount += item.price * item.quantity;
        currency = item.currency;
      }
    }
    if (!currency) return null;
    return { amount, currency };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      purchasingOpen,
      addKit,
      addStoreProduct,
      addItem: addKit,
      setKitQuantity,
      setStoreQuantity,
      setQuantity: setKitQuantity,
      removeKit,
      removeStoreProduct,
      removeItem: removeKit,
      clear,
      itemCount: items.reduce((sum, i) => sum + i.quantity, 0),
      subtotalPreview,
    }),
    [
      items,
      purchasingOpen,
      addKit,
      addStoreProduct,
      setKitQuantity,
      setStoreQuantity,
      removeKit,
      removeStoreProduct,
      clear,
      subtotalPreview,
    ],
  );

  return (
    <HardwareCartContext.Provider value={value}>
      {children}
    </HardwareCartContext.Provider>
  );
}

export function useHardwareCart() {
  const ctx = useContext(HardwareCartContext);
  if (!ctx) {
    throw new Error("useHardwareCart must be used within HardwareCartProvider");
  }
  return ctx;
}
