import Image from "next/image";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { lp, type Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";

export type RetailLandingCopy = Dictionary["products"]["items"]["retail"]["landing"];

type Props = {
  locale: Locale;
  name: string;
  oneLiner: string;
  landing: RetailLandingCopy;
  requestQuoteLabel: string;
  viewPricingLabel: string;
};

export function RetailHero({
  locale,
  name,
  oneLiner,
  landing,
  requestQuoteLabel,
  viewPricingLabel,
}: Props) {
  const L = (href: string) => lp(locale, href);
  const quietPoints = landing.benefits.slice(0, 2);

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,var(--color-surface)_0%,transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent opacity-70"
        aria-hidden
      />

      <div className="relative shell pt-28 md:pt-32 lg:pt-36">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <p className="eyebrow mb-0">{landing.badge}</p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-5 text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.04em] font-semibold text-ink [text-wrap:balance]">
              {name}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-[540px] text-base md:text-lg leading-relaxed text-ink-secondary [text-wrap:pretty]">
              {oneLiner}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={L("/quote?product=retail")}>{requestQuoteLabel}</Button>
              <Button href={L("/products/retail/pricing")} variant="secondary">
                {viewPricingLabel}
              </Button>
            </div>
          </Reveal>

          {quietPoints.length > 0 ? (
            <Reveal delay={0.22}>
              <p className="mx-auto mt-6 max-w-md text-sm text-muted">
                {quietPoints.join(" · ")}
              </p>
            </Reveal>
          ) : null}
        </div>
      </div>

      <div className="relative mt-12 md:mt-16 lg:mt-[4.5rem]">
        <div className="shell-wide">
          <Reveal delay={0.2}>
            <figure className="relative mx-auto">
              <div
                className="pointer-events-none absolute -inset-x-6 top-8 bottom-0 rounded-[40px] bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,var(--color-surface)_0%,transparent_72%)] md:-inset-x-10"
                aria-hidden
              />

              <div className="relative overflow-hidden rounded-[8px] border border-line bg-card shadow-float">
                <div
                  className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] ring-1 ring-inset ring-black/[0.035] dark:ring-white/[0.05]"
                  aria-hidden
                />

                <div className="relative max-h-[min(64vh,700px)] overflow-hidden sm:max-h-[min(66vh,760px)] lg:max-h-[min(70vh,820px)]">
                  <Image
                    src="/images/retail/hero.png"
                    alt={`${name} — store performance, inventory, and point of sale in one system`}
                    width={1536}
                    height={864}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1400px) 92vw, 1360px"
                    className="relative h-auto w-full select-none object-cover object-top"
                  />
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-bg from-15% via-bg/70 to-transparent md:h-32 lg:h-40"
                aria-hidden
              />
            </figure>
          </Reveal>
        </div>

        <div className="h-4 md:h-8" aria-hidden />
      </div>
    </section>
  );
}
