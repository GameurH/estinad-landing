import Image from "next/image";
import Link from "next/link";
import { Button, Tag } from "@/components/ui";
import { AddToCartButton } from "@/components/hardware/AddToCartButton";
import type { Dictionary } from "@/lib/dictionaries/types";
import {
  isPurchasable,
  type HardwareKitDefinition,
} from "@/lib/hardware";
import { formatMoneyMinor } from "@/lib/hardware-commerce";
import type { Locale } from "@/lib/i18n-config";
import { lp } from "@/lib/i18n-config";

type Props = {
  locale: Locale;
  kit: HardwareKitDefinition;
  copy: Dictionary["hardware"]["kits"][keyof Dictionary["hardware"]["kits"]];
  labels: Dictionary["hardware"]["kitsSection"];
  compatibilityCta: string;
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

export function HardwareKitHero({
  locale,
  kit,
  copy,
  labels,
  compatibilityCta,
  productNames,
}: Props) {
  const L = (h: string) => lp(locale, h);
  const quoteHref = L(`/hardware/quote?kit=${kit.slug}`);
  const hero = kit.media.hero;
  const purchasable = isPurchasable(kit.commerce);
  const related = kit.relatedProducts
    .map((slug) => productNames[slug])
    .filter(Boolean);

  return (
    <section className="relative overflow-hidden hairline-b">
      <div className="absolute inset-0 grid-backdrop opacity-30" aria-hidden />
      <div className="shell relative py-16 md:py-24">
        <Link
          href={L("/hardware")}
          className="inline-flex items-center min-h-11 text-sm text-ink-secondary hover:text-ink transition-colors"
        >
          <span className="me-2 inline-block rtl:-scale-x-100" aria-hidden>
            ←
          </span>
          {labels.backToHardware}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
          <div className="min-w-0 max-w-xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="font-mono text-xs text-muted tracking-[0.18em]">
                {kit.glyph}
              </span>
              <Tag>{labels.configuredLabel}</Tag>
            </div>
            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.03em] text-ink font-semibold [text-wrap:balance]">
              {copy.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink font-medium [text-wrap:pretty]">
              {copy.tagline}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-secondary">
              {copy.detailIntro}
            </p>

            <dl className="mt-6 flex flex-col gap-3 text-sm">
              <div className="min-w-0">
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                  {labels.useCaseLabel}
                </dt>
                <dd className="mt-1 text-ink">{copy.useCase}</dd>
              </div>
              <div className="min-w-0">
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                  {labels.worksWithLabel}
                </dt>
                <dd className="mt-1 text-ink">
                  {related.length > 0
                    ? related.join(" · ")
                    : labels.compatibilityVerified}
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                  {labels.availabilityLabel}
                </dt>
                <dd className="mt-1 text-ink-secondary">
                  {availabilityLabel(labels, kit.commerce.availability)}
                </dd>
              </div>
              {purchasable &&
                kit.commerce.priceMinor !== null &&
                kit.commerce.currency && (
                  <div className="min-w-0">
                    <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                      {labels.priceLabel}
                    </dt>
                    <dd className="mt-1 text-ink font-medium text-lg">
                      {formatMoneyMinor(
                        kit.commerce.priceMinor,
                        kit.commerce.currency,
                        locale,
                      )}
                    </dd>
                  </div>
                )}
            </dl>

            <div className="mt-9 flex flex-wrap gap-3">
              {purchasable ? (
                <AddToCartButton
                  slug={kit.slug}
                  label={labels.buyNow}
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full text-[0.9375rem] font-medium tracking-tight bg-ink text-bg hover:bg-ink/85 transition-all duration-150 select-none active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                />
              ) : (
                <Button href={quoteHref}>{copy.cta}</Button>
              )}
              <Button href={L("/hardware/compatibility")} variant="secondary">
                {compatibilityCta}
              </Button>
            </div>
          </div>

          <figure className="relative aspect-[4/3] overflow-hidden bg-surface min-w-0">
            <Image
              src={hero.src}
              alt={copy.media.hero.alt}
              width={hero.width}
              height={hero.height}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>

      {/* Mobile sticky purchase / quote action */}
      <div className="lg:hidden sticky bottom-0 z-20 border-t border-line bg-bg/95 backdrop-blur-md">
        <div className="shell py-3 flex gap-3">
          {purchasable ? (
            <AddToCartButton
              slug={kit.slug}
              label={labels.buyNow}
              className="flex-1 inline-flex items-center justify-center min-h-11 h-11 px-5 rounded-full text-sm font-medium bg-ink text-bg"
            />
          ) : (
            <Link
              href={quoteHref}
              className="flex-1 inline-flex items-center justify-center min-h-11 h-11 px-5 rounded-full text-sm font-medium bg-ink text-bg"
            >
              {copy.cta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
