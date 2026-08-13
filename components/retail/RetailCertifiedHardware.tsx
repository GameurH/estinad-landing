"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button, Eyebrow } from "@/components/ui";
import { formatMoneyMinor } from "@/lib/hardware-commerce";
import type { RetailCertifiedHardwareData } from "@/lib/retail-certified-hardware";
import { lp, type Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";

export type RetailCertifiedHardwareCopy =
  Dictionary["products"]["items"]["retail"]["landing"]["certifiedHardware"];

type Props = {
  locale: Locale;
  copy: RetailCertifiedHardwareCopy;
  data: RetailCertifiedHardwareData;
};

export function RetailCertifiedHardwareSkeleton({
  copy,
}: {
  copy: Pick<RetailCertifiedHardwareCopy, "eyebrow" | "title" | "loadingLabel">;
}) {
  return (
    <section
      className="hairline-b bg-bg"
      aria-labelledby="retail-hardware-title"
      aria-busy="true"
    >
      <div className="shell py-14 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:items-start">
          <div className="max-w-xl">
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h2
              id="retail-hardware-title"
              className="text-[clamp(1.85rem,3.8vw,3rem)] leading-[1.12] tracking-[-0.025em] font-semibold text-ink"
            >
              {copy.title}
            </h2>
            <p className="mt-4 text-sm text-muted">{copy.loadingLabel}</p>
            <div className="mt-8 space-y-3" aria-hidden>
              <div className="h-3 max-w-sm rounded bg-surface animate-pulse" />
              <div className="h-3 max-w-xs rounded bg-surface animate-pulse" />
            </div>
          </div>
          <div
            className="grid grid-cols-2 gap-3 sm:gap-4"
            aria-hidden
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[14px] border border-line bg-card"
              >
                <div className="aspect-[4/3] bg-surface animate-pulse" />
                <div className="space-y-2 p-3.5">
                  <div className="h-3 w-16 rounded bg-surface animate-pulse" />
                  <div className="h-4 w-full rounded bg-surface animate-pulse" />
                  <div className="h-4 w-20 rounded bg-surface animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function RetailCertifiedHardware({ locale, copy, data }: Props) {
  const L = (href: string) => lp(locale, href);
  const hasProducts = data.products.length > 0;

  return (
    <section className="hairline-b bg-bg" aria-labelledby="retail-hardware-title">
      <div className="shell py-14 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:items-start">
          <Reveal className="order-2 lg:order-1">
            <div className="max-w-xl">
              <Eyebrow>{copy.eyebrow}</Eyebrow>
              <h2
                id="retail-hardware-title"
                className="text-[clamp(1.85rem,3.8vw,3rem)] leading-[1.12] tracking-[-0.025em] font-semibold text-ink [text-wrap:balance]"
              >
                {copy.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-secondary md:text-lg [text-wrap:pretty]">
                {copy.intro}
              </p>

              <ol className="mt-8 flex flex-col gap-3 border-s-2 border-line ps-4">
                <li className="text-sm font-medium text-ink">
                  {copy.hierarchy.software}
                </li>
                <li className="text-sm text-ink-secondary">
                  {copy.hierarchy.hardware}
                </li>
                <li className="text-sm text-muted">{copy.hierarchy.support}</li>
              </ol>

              {data.categories.length > 0 ? (
                <ul className="mt-8 flex flex-wrap gap-2" aria-label={copy.productsLabel}>
                  {data.categories.map((cat) => (
                    <li
                      key={cat.id}
                      className="inline-flex min-h-9 items-center rounded-full border border-line bg-surface px-3.5 text-xs font-medium text-ink-secondary"
                    >
                      {cat.name}
                    </li>
                  ))}
                </ul>
              ) : null}

              <p className="mt-6 text-xs leading-relaxed text-muted [text-wrap:pretty]">
                {copy.scopeNote}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 [&_a]:w-full sm:[&_a]:w-auto [&_a]:min-h-11">
                <Button href={L("/hardware/catalog")}>{copy.primaryCta}</Button>
                <Button href={L("/hardware/quote")} variant="secondary">
                  {copy.secondaryCta}
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="order-1 lg:order-2 min-w-0">
            {hasProducts ? (
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-[0.7rem] font-mono uppercase tracking-[0.14em] text-muted">
                    {copy.productsLabel}
                  </p>
                  <Link
                    href={L("/hardware/catalog")}
                    className="inline-flex min-h-10 items-center text-xs font-medium text-ink-secondary underline-offset-2 hover:text-ink hover:underline"
                  >
                    {copy.primaryCta}
                  </Link>
                </div>

                <ul className="grid grid-cols-2 gap-3 sm:gap-4">
                  {data.products.map((product, index) => {
                    const meta = [product.brand, product.categoryName]
                      .filter(Boolean)
                      .join(" · ");
                    return (
                      <li key={product.id} className={index > 3 ? "hidden sm:block" : undefined}>
                        <Link
                          href={L(product.href)}
                          className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-card transition-colors hover:border-line-strong active:bg-surface"
                        >
                          <span className="relative aspect-[4/3] overflow-hidden bg-surface">
                            {product.image ? (
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 280px"
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                unoptimized
                              />
                            ) : (
                              <span
                                className="absolute inset-0 grid-backdrop opacity-40"
                                aria-hidden
                              />
                            )}
                          </span>
                          <span className="flex flex-1 flex-col p-3 sm:p-3.5">
                            {meta ? (
                              <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted truncate">
                                {meta}
                              </span>
                            ) : null}
                            <span className="mt-1 text-[0.8125rem] sm:text-sm font-semibold leading-snug text-ink line-clamp-2 [text-wrap:balance]">
                              {product.name}
                            </span>
                            {product.shortDescription ? (
                              <span className="mt-1 hidden text-xs leading-relaxed text-muted line-clamp-2 sm:block">
                                {product.shortDescription}
                              </span>
                            ) : null}
                            <span className="mt-auto pt-2.5 text-sm font-semibold tabular-nums text-ink">
                              {formatMoneyMinor(
                                product.price,
                                product.currency,
                                locale,
                              )}
                            </span>
                            <span className="mt-2 inline-flex min-h-10 items-center text-xs font-medium text-ink-secondary group-hover:text-ink">
                              {copy.viewProduct}
                              <span
                                className="ms-1 inline-block transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:-scale-x-100"
                                aria-hidden
                              >
                                →
                              </span>
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div className="flex min-h-[16rem] flex-col items-start justify-center rounded-2xl border border-dashed border-line bg-surface/60 px-5 py-8 sm:px-8">
                <p className="text-base font-medium text-ink [text-wrap:balance]">
                  {copy.emptyTitle}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-secondary [text-wrap:pretty]">
                  {copy.emptyBody}
                </p>
                <Link
                  href={L("/hardware/catalog")}
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-bg hover:bg-ink/85 transition-colors"
                >
                  {copy.primaryCta}
                </Link>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
