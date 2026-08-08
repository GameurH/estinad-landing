import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { retailFeatureIcon } from "@/components/retail/RetailFeatureIcons";
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
  homeLabel: string;
  productsLabel: string;
  requestQuoteLabel: string;
  viewPricingLabel: string;
};

export function RetailHero({
  locale,
  name,
  oneLiner,
  landing,
  homeLabel,
  productsLabel,
  requestQuoteLabel,
  viewPricingLabel,
}: Props) {
  const L = (href: string) => lp(locale, href);

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-surface)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_left,var(--color-surface-2)_0%,transparent_45%)]"
        aria-hidden
      />

      <div className="relative shell pt-28 md:pt-36 pb-12 md:pb-16">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-8 md:mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <li>
                <Link
                  href={L("/")}
                  className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden
                  >
                    <path
                      d="M2.5 8 8 3l5.5 5V13a1 1 0 0 1-1 1H9.5V10h-3v4H3.5a1 1 0 0 1-1-1V8Z"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="sr-only">{homeLabel}</span>
                </Link>
              </li>
              <li aria-hidden className="text-muted-2">
                /
              </li>
              <li>
                <Link href={L("/products")} className="hover:text-ink transition-colors">
                  {productsLabel}
                </Link>
              </li>
              <li aria-hidden className="text-muted-2">
                /
              </li>
              <li className="text-ink font-medium" aria-current="page">
                {name}
              </li>
            </ol>
          </nav>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
          <div className="max-w-xl">
            <Reveal delay={0.05}>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-[0.7rem] font-mono uppercase tracking-[0.14em] text-muted">
                <span className="text-ink">{retailFeatureIcon("bag", "h-3.5 w-3.5")}</span>
                {landing.badge}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-5 text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] font-semibold text-ink">
                {name}
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 text-lg md:text-xl leading-relaxed text-ink-secondary [text-wrap:pretty]">
                {oneLiner}
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={L("/quote?product=retail")}>{requestQuoteLabel}</Button>
                <Button href={L("/products/retail/pricing")} variant="secondary">
                  {viewPricingLabel}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-3">
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

          <Reveal delay={0.12} className="relative">
            <div className="relative overflow-hidden rounded-[20px] border border-line bg-card shadow-float">
              <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(circle_at_30%_20%,rgb(0_0_0/0.04),transparent_55%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgb(255_255_255/0.04),transparent_55%)]" aria-hidden />
              <Image
                src="/images/retail/hero.png"
                alt={`${name} dashboard`}
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="relative h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
