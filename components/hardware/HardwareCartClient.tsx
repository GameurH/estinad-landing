"use client";

import Image from "next/image";
import Link from "next/link";
import { useHardwareCart } from "@/components/hardware/HardwareCartProvider";
import { Button } from "@/components/ui";
import { getHardwareKit, hardwareKitCopy } from "@/lib/hardware";
import { formatMoneyMinor } from "@/lib/hardware-commerce";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { Locale } from "@/lib/i18n-config";
import { lp } from "@/lib/i18n-config";

export function HardwareCartClient({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const {
    items,
    setKitQuantity,
    setStoreQuantity,
    removeKit,
    removeStoreProduct,
    purchasingOpen,
  } = useHardwareCart();
  const L = (h: string) => lp(locale, h);
  const c = dictionary.hardware.cart;
  const kitsCopy = dictionary.hardware.kits;

  if (!purchasingOpen) {
    return (
      <div className="hairline rounded-card bg-surface p-8 md:p-10 max-w-2xl">
        <h2 className="text-xl font-semibold text-ink">{c.unavailableTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
          {c.unavailableBody}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={L("/hardware/quote")}>{c.quoteCta}</Button>
          <Button href={L("/hardware/catalog")} variant="secondary">
            {c.emptyCta}
          </Button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="hairline rounded-card bg-surface p-8 md:p-10 max-w-2xl">
        <h2 className="text-xl font-semibold text-ink">{c.emptyTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
          {c.emptyBody}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={L("/hardware/catalog")}>{c.emptyCta}</Button>
          <Button href={L("/hardware/quote")} variant="secondary">
            {c.quoteCta}
          </Button>
        </div>
      </div>
    );
  }

  let subtotal = 0;
  let currency: string | null = null;

  const rows = items.map((item) => {
    if (item.kind === "store") {
      const unit = item.price;
      const line = unit * item.quantity;
      subtotal += line;
      currency = item.currency;
      return {
        key: `store:${item.productId}`,
        href: L(`/hardware/products/${item.productId}`),
        name: item.name,
        image: item.image,
        imageAlt: item.name,
        unit,
        line,
        currency: item.currency,
        quantity: item.quantity,
        max: item.maxQuantity,
        onQuantity: (n: number) => setStoreQuantity(item.productId, n),
        onRemove: () => removeStoreProduct(item.productId),
        remoteImage: true,
      };
    }

    const kit = getHardwareKit(item.slug)!;
    const copy = hardwareKitCopy(dictionary, item.slug);
    const unit = kit.commerce.priceMinor!;
    const line = unit * item.quantity;
    subtotal += line;
    currency = kit.commerce.currency;
    return {
      key: `kit:${item.slug}`,
      href: L(`/hardware/${item.slug}`),
      name: kitsCopy[item.slug].name,
      image: kit.media.hero.src,
      imageAlt: copy.media.hero.alt,
      unit,
      line,
      currency: kit.commerce.currency!,
      quantity: item.quantity,
      max: kit.commerce.maxQuantity ?? 1,
      onQuantity: (n: number) => setKitQuantity(item.slug, n),
      onRemove: () => removeKit(item.slug),
      remoteImage: false,
      width: kit.media.hero.width,
      height: kit.media.hero.height,
    };
  });

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
      <ul className="flex flex-col gap-px hairline bg-line list-none">
        {rows.map((row) => (
          <li key={row.key} className="bg-bg p-5 md:p-6 min-w-0">
            <div className="grid gap-4 sm:grid-cols-[120px_1fr] sm:gap-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                {row.image ? (
                  <Image
                    src={row.image}
                    alt={row.imageAlt}
                    fill={row.remoteImage}
                    width={row.remoteImage ? undefined : row.width}
                    height={row.remoteImage ? undefined : row.height}
                    sizes="120px"
                    className="h-full w-full object-cover"
                    unoptimized={row.remoteImage}
                  />
                ) : (
                  <div className="absolute inset-0 grid-backdrop opacity-40" />
                )}
              </div>
              <div className="min-w-0 flex flex-col">
                <Link
                  href={row.href}
                  className="text-lg font-semibold text-ink hover:opacity-80"
                >
                  {row.name}
                </Link>
                <p className="mt-1 text-sm text-ink-secondary">
                  {formatMoneyMinor(row.unit, row.currency, locale)}
                </p>
                <div className="mt-4 flex flex-wrap items-end gap-4">
                  <label className="block min-w-0">
                    <span className="block text-xs text-muted mb-2 font-mono uppercase tracking-[0.18em]">
                      {c.quantity}
                    </span>
                    <input
                      type="number"
                      min={1}
                      max={row.max}
                      value={row.quantity}
                      onChange={(e) => row.onQuantity(Number(e.target.value))}
                      className="w-24 min-h-11 h-11 px-3 bg-surface hairline rounded-[12px] text-sm text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
                    />
                  </label>
                  <p className="text-sm font-medium text-ink ms-auto">
                    {formatMoneyMinor(row.line, row.currency, locale)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={row.onRemove}
                  className="mt-4 self-start min-h-11 text-sm text-ink-secondary hover:text-ink underline underline-offset-2"
                >
                  {c.remove}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <aside className="hairline rounded-card bg-surface p-7 h-fit sticky top-28">
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-ink-secondary">{c.subtotal}</span>
          <span className="font-medium text-ink">
            {currency ? formatMoneyMinor(subtotal, currency, locale) : "—"}
          </span>
        </div>
        <div className="mt-6">
          <Button href={L("/hardware/checkout")} className="w-full">
            {c.checkoutCta}
          </Button>
        </div>
        <div className="mt-3">
          <Button href={L("/hardware/catalog")} variant="secondary" className="w-full">
            {c.emptyCta}
          </Button>
        </div>
      </aside>
    </div>
  );
}
