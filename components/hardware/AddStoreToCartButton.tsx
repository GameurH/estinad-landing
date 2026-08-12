"use client";

import { useState } from "react";
import { useHardwareCart } from "@/components/hardware/HardwareCartProvider";
import {
  isStoreProductPurchasable,
  type HardwareStoreProduct,
} from "@/lib/hardware-store-catalog";

export function AddStoreToCartButton({
  product,
  label,
  addedLabel,
  className,
  quantity = 1,
  iconOnly = false,
}: {
  product: HardwareStoreProduct;
  label: string;
  addedLabel?: string;
  className?: string;
  quantity?: number;
  iconOnly?: boolean;
}) {
  const { addStoreProduct, purchasingOpen } = useHardwareCart();
  const [added, setAdded] = useState(false);

  if (!purchasingOpen || !isStoreProductPurchasable(product)) return null;

  const visible = added && addedLabel ? addedLabel : label;

  return (
    <button
      type="button"
      onClick={() => {
        addStoreProduct(
          {
            productId: product.id,
            name: product.name,
            price: product.price,
            currency: product.currency,
            sku: product.sku,
            image: product.images[0] ?? null,
            isAvailable: product.isAvailable,
            isOnline: product.isOnline,
          },
          quantity,
        );
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1600);
      }}
      className={className}
      aria-label={label}
    >
      {iconOnly ? (added ? "✓" : "+") : visible}
    </button>
  );
}
