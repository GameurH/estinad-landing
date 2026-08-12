import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries/types";
import {
  isPurchasable,
  type HardwareKitDefinition,
} from "@/lib/hardware";
import { formatMoneyMinor } from "@/lib/hardware-commerce";
import type { Locale } from "@/lib/i18n-config";
import { lp } from "@/lib/i18n-config";
import { AddToCartButton } from "@/components/hardware/AddToCartButton";

type KitCardProps = {
  locale: Locale;
  kit: HardwareKitDefinition;
  name: string;
  tagline: string;
  useCase: string;
  heroAlt: string;
  cta: string;
  labels: Dictionary["hardware"]["kitsSection"];
  productNames: Record<string, string>;
};

function availabilityLabel(
  labels: Dictionary["hardware"]["kitsSection"],
  availability: HardwareKitDefinition["commerce"]["availability"],
) {
  switch (availability) {
    case "in_stock":
      return labels.inStockLabel;
    case "available":
      return labels.availableLabel;
    case "request_quote":
      return labels.requestQuoteAvailability;
    default:
      return labels.contactAvailability;
  }
}

export function HardwareKitCard({
  locale,
  kit,
  name,
  tagline,
  useCase,
  heroAlt,
  cta,
  labels,
  productNames,
}: KitCardProps) {
  const L = (h: string) => lp(locale, h);
  const quoteHref = L(`/hardware/quote?kit=${kit.slug}`);
  const hero = kit.media.hero;
  const purchasable = isPurchasable(kit.commerce);
  const related = kit.relatedProducts
    .map((slug) => productNames[slug])
    .filter(Boolean);

  return (
    <article className="group flex flex-col bg-card min-w-0 overflow-hidden">
      <Link
        href={L(`/hardware/${kit.slug}`)}
        className="relative block aspect-[4/3] bg-surface overflow-hidden"
      >
        <Image
          src={hero.src}
          alt={heroAlt}
          width={hero.width}
          height={hero.height}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs text-muted tracking-[0.18em]">
            {kit.glyph}
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted border border-line rounded-full px-2.5 py-1">
            {labels.configuredLabel}
          </span>
        </div>

        <h3 className="mt-5 text-xl md:text-2xl font-semibold text-ink tracking-tight [text-wrap:balance] min-w-0">
          <Link
            href={L(`/hardware/${kit.slug}`)}
            className="hover:opacity-80 transition-opacity"
          >
            {name}
          </Link>
        </h3>
        <p className="mt-3 text-sm text-ink leading-relaxed [text-wrap:pretty]">
          {tagline}
        </p>
        <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{useCase}</p>

        <dl className="mt-5 flex flex-col gap-2 text-sm">
          <div className="flex flex-wrap gap-x-2 gap-y-1 min-w-0">
            <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
              {labels.worksWithLabel}
            </dt>
            <dd className="text-ink">
              {related.length > 0 ? related.join(" · ") : labels.compatibilityVerified}
            </dd>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-1 min-w-0">
            <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
              {labels.availabilityLabel}
            </dt>
            <dd className="text-ink-secondary">
              {availabilityLabel(labels, kit.commerce.availability)}
            </dd>
          </div>
          {purchasable &&
            kit.commerce.priceMinor !== null &&
            kit.commerce.currency && (
              <div className="flex flex-wrap gap-x-2 gap-y-1 min-w-0">
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                  {labels.priceLabel}
                </dt>
                <dd className="text-ink font-medium">
                  {formatMoneyMinor(
                    kit.commerce.priceMinor,
                    kit.commerce.currency,
                    locale,
                  )}
                </dd>
              </div>
            )}
        </dl>

        <div className="mt-auto pt-6 hairline-t flex flex-col sm:flex-row gap-3 sm:items-center">
          {purchasable ? (
            <AddToCartButton
              slug={kit.slug}
              label={labels.buyNow}
              className="inline-flex items-center justify-center min-h-11 h-11 px-5 rounded-full text-sm font-medium bg-ink text-bg hover:bg-ink/85 transition-colors"
            />
          ) : (
            <Link
              href={quoteHref}
              className="inline-flex items-center justify-center min-h-11 h-11 px-5 rounded-full text-sm font-medium bg-ink text-bg hover:bg-ink/85 transition-colors"
            >
              {cta}
            </Link>
          )}
          <Link
            href={L(`/hardware/${kit.slug}`)}
            className="inline-flex items-center justify-center min-h-11 h-11 px-5 rounded-full text-sm font-medium text-ink border border-line-strong hover:border-ink hover:bg-surface transition-colors"
          >
            {labels.viewDetails}
            <span className="ms-2 inline-block rtl:-scale-x-100" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
