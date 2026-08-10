import Image from "next/image";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import type { RetailOperationsCarouselCopy } from "@/components/retail/RetailOperationsCarousel";
import { lp, type Locale } from "@/lib/i18n-config";

export type RetailLandingCopy = {
  badge: string;
  benefits: string[];
  trustLabel: string;
  trustMarks: string[];
  featuresTitle: string;
  featuresIntro: string;
  featureCards: { icon: string; title: string; body: string }[];
  operationsCarousel: RetailOperationsCarouselCopy;
};

type Props = {
  locale: Locale;
  name: string;
  oneLiner: string;
  landing: RetailLandingCopy;
  requestQuoteLabel: string;
  viewPricingLabel: string;
};

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" />
      <path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" strokeLinecap="round" />
    </svg>
  );
}

export function RetailHero({
  locale,
  name,
  oneLiner,
  landing,
  requestQuoteLabel,
  viewPricingLabel,
}: Props) {
  const L = (href: string) => lp(locale, href);

  return (
    <section className="relative overflow-hidden">
      {/* Restrained atmosphere — soft top light, no decorative objects */}
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
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-[0.7rem] font-mono uppercase tracking-[0.14em] text-muted shadow-card">
              <LockIcon className="h-3.5 w-3.5 text-ink" />
              {landing.badge}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.04em] font-semibold text-ink [text-wrap:balance]">
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

          <Reveal delay={0.24}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
              {landing.benefits.map((item) => (
                <li key={item} className="inline-flex items-center gap-2 text-sm text-ink-secondary">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-surface-2 text-ink">
                    <svg
                      viewBox="0 0 12 12"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden
                    >
                      <path d="M2.5 6.2 4.8 8.5 9.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Product reveal — primary visual weight */}
      <div className="relative mt-12 md:mt-16 lg:mt-[4.5rem]">
        <div className="shell-wide">
          <Reveal delay={0.2}>
            <figure className="relative mx-auto">
              <div
                className="pointer-events-none absolute -inset-x-6 top-8 bottom-0 rounded-[40px] bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,var(--color-surface)_0%,transparent_72%)] md:-inset-x-10"
                aria-hidden
              />

              <div className="relative overflow-hidden rounded-[22px] border border-line bg-card shadow-float md:rounded-[28px]">
                <div
                  className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] ring-1 ring-inset ring-black/[0.035] dark:ring-white/[0.05]"
                  aria-hidden
                />

                {/* Clip from the top so IA + KPIs lead; lower widgets continue the reveal */}
                <div className="relative max-h-[min(64vh,700px)] overflow-hidden sm:max-h-[min(66vh,760px)] lg:max-h-[min(70vh,820px)]">
                  <Image
                    src="/images/retail/hero.png"
                    alt={`${name} — retail dashboard with inventory, catalog, POS, and store performance`}
                    width={1536}
                    height={1024}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1400px) 92vw, 1360px"
                    className="relative h-auto w-full select-none"
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
