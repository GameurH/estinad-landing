import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { restaurantIcon } from "@/components/restaurant/RestaurantIcons";
import { lp, type Locale } from "@/lib/i18n-config";

export type RestaurantLandingCopy = {
  badge: string;
  callouts: { icon: string; label: string; value: string }[];
  pillars: { icon: string; title: string; body: string }[];
  builtTitle: string;
  builtBody: string;
  builtPoints: string[];
  expectEyebrow: string;
  expectTitle: string;
  expectLink: string;
  expectCards: { icon: string; title: string; body: string }[];
  interestEyebrow: string;
  interestTitle: string;
  interestBody: string;
  interestCta: string;
};

type Props = {
  locale: Locale;
  byline: string;
  oneLiner: string;
  landing: RestaurantLandingCopy;
  registerInterestLabel: string;
  exploreProductsLabel: string;
};

export function RestaurantLanding({
  locale,
  byline,
  oneLiner,
  landing,
  registerInterestLabel,
  exploreProductsLabel,
}: Props) {
  const L = (href: string) => lp(locale, href);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-surface)_0%,transparent_55%)]"
          aria-hidden
        />

        <div className="relative shell pt-28 md:pt-36 pb-10 md:pb-14">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
            <div className="max-w-xl">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-[0.7rem] font-mono uppercase tracking-[0.14em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden />
                  {landing.badge}
                </span>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-5 text-[clamp(2.25rem,4.8vw,3.75rem)] leading-[1.06] tracking-[-0.03em] font-semibold text-ink [text-wrap:balance]">
                  {byline}
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-5 text-lg md:text-xl leading-relaxed text-ink-secondary [text-wrap:pretty]">
                  {oneLiner}
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={L("/company/contact")}>{registerInterestLabel}</Button>
                  <Button href={L("/products")} variant="secondary">
                    {exploreProductsLabel}
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="relative">
              <div className="relative overflow-hidden rounded-[24px] border border-line bg-surface">
                <div
                  className="pointer-events-none absolute -inset-8 bg-[radial-gradient(circle_at_30%_20%,rgb(0_0_0/0.04),transparent_55%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgb(255_255_255/0.04),transparent_55%)]"
                  aria-hidden
                />
                <Image
                  src="/images/restaurant/hero.png"
                  alt={`${byline} hardware`}
                  width={1536}
                  height={1024}
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="relative h-auto w-full"
                />

                {/* Floating callouts */}
                <ul className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
                  {landing.callouts.map((item, i) => {
                    const positions = [
                      "top-[14%] start-[6%]",
                      "top-[38%] end-[5%]",
                      "bottom-[16%] start-[10%]",
                    ];
                    return (
                      <li
                        key={item.label}
                        className={`absolute ${positions[i] ?? positions[0]}`}
                      >
                        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card/95 px-3 py-2 text-xs text-ink shadow-card backdrop-blur-sm">
                          <span className="text-ink">
                            {restaurantIcon(item.icon, "h-3.5 w-3.5")}
                          </span>
                          <span className="font-medium">{item.label}</span>
                          <span className="text-muted">{item.value}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <ul className="mt-12 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {landing.pillars.map((pillar, i) => (
                <li
                  key={pillar.title}
                  className={`flex gap-3 lg:px-5 ${
                    i > 0 ? "lg:border-s lg:border-line" : ""
                  }`}
                >
                  <span className="mt-0.5 text-ink shrink-0">
                    {restaurantIcon(pillar.icon, "h-5 w-5")}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink">{pillar.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{pillar.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Built for */}
      <section className="shell pb-10 md:pb-14">
        <Reveal>
          <div className="rounded-[24px] bg-surface border border-line px-5 py-6 md:px-8 md:py-8">
            <div className="grid gap-6 lg:grid-cols-[auto_minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-center lg:gap-10">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-[14px] bg-ink text-bg">
                {restaurantIcon("utensils", "h-6 w-6")}
              </span>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-ink">
                  {landing.builtTitle}
                </h2>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-ink-secondary">
                  {landing.builtBody}
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {landing.builtPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-card border border-line text-ink">
                      <svg
                        viewBox="0 0 12 12"
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden
                      >
                        <path
                          d="M2.5 6.2 4.8 8.5 9.5 3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* What to expect */}
      <section className="shell pb-16 md:pb-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                {landing.expectEyebrow}
              </p>
              <h2 className="mt-2 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-[-0.025em] font-semibold text-ink [text-wrap:balance]">
                {landing.expectTitle}
              </h2>
            </div>
            <Link
              href={L("/products")}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:opacity-70 transition-opacity"
            >
              {landing.expectLink}
              <span className="inline-block rtl:-scale-x-100 text-muted">→</span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 md:mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {landing.expectCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col rounded-[18px] border border-line bg-card p-5 md:p-6 shadow-card"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] bg-surface-2 text-ink">
                  {restaurantIcon(card.icon, "h-5 w-5")}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.body}</p>
                <span className="mt-5 inline-block text-muted rtl:-scale-x-100" aria-hidden>
                  →
                </span>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Interest CTA */}
      <section className="shell pb-16 md:pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[24px] bg-ink text-bg">
            <div className="pointer-events-none absolute inset-y-0 end-0 w-[45%] opacity-40 hidden md:block" aria-hidden>
              <Image
                src="/images/restaurant/hero.png"
                alt=""
                fill
                sizes="40vw"
                className="object-cover object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-6 px-6 py-8 md:px-10 md:py-10">
              <div className="max-w-lg">
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-bg/55">
                  {landing.interestEyebrow}
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-bg">
                  {landing.interestTitle}
                </h2>
                <p className="mt-2 text-sm md:text-base text-bg/70">{landing.interestBody}</p>
              </div>
              <Link
                href={L("/company/contact")}
                className="inline-flex min-h-12 items-center rounded-full bg-bg px-6 text-sm font-medium text-ink hover:opacity-90 transition-opacity"
              >
                {landing.interestCta}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
