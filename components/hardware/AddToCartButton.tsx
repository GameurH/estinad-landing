"use client";

import { useHardwareCart } from "@/components/hardware/HardwareCartProvider";
import type { HardwareKitSlug } from "@/lib/i18n-config";

export function AddToCartButton({
  slug,
  label,
  className,
  quantity = 1,
}: {
  slug: HardwareKitSlug;
  label: string;
  className?: string;
  quantity?: number;
}) {
  const { addKit, purchasingOpen } = useHardwareCart();

  if (!purchasingOpen) return null;

  return (
    <button
      type="button"
      onClick={() => addKit(slug, quantity)}
      className={className}
    >
      {label}
    </button>
  );
}
