"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button, Eyebrow } from "@/components/ui";
import { getHardwareKit } from "@/lib/hardware";
import { lp, type Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";

export type RetailCertifiedHardwareCopy =
  Dictionary["products"]["items"]["retail"]["landing"]["certifiedHardware"];

type Props = {
  locale: Locale;
  copy: RetailCertifiedHardwareCopy;
};

const CATEGORY_IDS = ["terminal", "scanner", "printer", "drawer"] as const;

export function RetailCertifiedHardware({ locale, copy }: Props) {
  const L = (href: string) => lp(locale, href);
  const kit = getHardwareKit("retail-counter-kit");
  const included = kit?.media.included;
  const pinById = new Map(kit?.includePins.map((pin) => [pin.id, pin]) ?? []);
  const categories = copy.categories.filter((c) =>
    (CATEGORY_IDS as readonly string[]).includes(c.id),
  );

  return (
    <section className="hairline-b bg-bg" aria-labelledby="retail-hardware-title">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:items-start">
          <Reveal className="order-2 lg:order-1">
            <div className="max-w-xl">
              <Eyebrow>{copy.eyebrow}</Eyebrow>
              <h2
                id="retail-hardware-title"
                className="text-[clamp(1.85rem,3.8vw,3rem)] leading-[1.12] tracking-[-0.025em] font-semibold text-ink [text-wrap:balance]"
              >
                {copy.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-secondary md:text-lg">
                {copy.intro}
              </p>

              <ol className="mt-8 flex flex-col gap-3 border-s-2 border-line ps-4">
                <li className="text-sm font-medium text-ink">{copy.hierarchy.software}</li>
                <li className="text-sm text-ink-secondary">{copy.hierarchy.hardware}</li>
                <li className="text-sm text-muted">{copy.hierarchy.support}</li>
              </ol>

              <ol className="mt-8 flex flex-col gap-3">
                {categories.map((cat, index) => (
                  <li key={cat.id} className="flex items-center gap-3 text-sm text-ink">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line font-mono text-[0.7rem] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {cat.label}
                  </li>
                ))}
              </ol>

              <p className="mt-6 text-xs leading-relaxed text-muted">{copy.scopeNote}</p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 [&_a]:w-full sm:[&_a]:w-auto">
                <Button href={L("/hardware")}>{copy.primaryCta}</Button>
                <Button
                  href={L("/hardware/quote?kit=retail-counter-kit")}
                  variant="secondary"
                >
                  {copy.secondaryCta}
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="order-1 lg:order-2">
            {/*
              Pin coordinates are LTR image geometry — always use physical left/top
              so pins stay on the photographed components in RTL locales.
              Diagram first on mobile for clearer hierarchy.
            */}
            <figure
              className="relative min-w-0 overflow-hidden rounded-2xl border border-line bg-surface aspect-video"
              dir="ltr"
            >
              {included ? (
                <>
                  <Image
                    src={included.src}
                    alt={copy.imageAlt}
                    width={included.width}
                    height={included.height}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  {categories.map((cat, index) => {
                    const pin = pinById.get(cat.id);
                    if (!pin) return null;
                    return (
                      <span
                        key={cat.id}
                        className="pointer-events-none absolute z-10 hidden sm:flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink/20 bg-bg/95 text-[0.7rem] font-mono text-ink shadow-sm"
                        style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                        aria-hidden
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    );
                  })}
                  <figcaption className="sr-only">
                    {categories
                      .map(
                        (cat, index) =>
                          `${String(index + 1).padStart(2, "0")} ${cat.label}`,
                      )
                      .join(". ")}
                  </figcaption>
                </>
              ) : null}
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
