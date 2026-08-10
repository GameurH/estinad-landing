import Image from "next/image";
import { Button, Section } from "./ui";
import { Reveal } from "./motion/Reveal";
import { ProductPortfolio } from "@/components/products/ProductPortfolio";
import { WhyEstinad } from "@/components/home/WhyEstinad";
import { lp, PRODUCTS_HUB_HREF, type Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { ProductCard } from "@/lib/nav";

export type HomeData = {
  locale: Locale;
  h2: Dictionary["homeV2"];
  products: ProductCard[];
  productLabels: {
    eyebrow: string;
    title: string;
    description: string;
    statuses: Dictionary["products"]["index"]["statuses"];
    viewProduct: string;
    exploreAll: string;
    cardDescriptions: Dictionary["products"]["index"]["cardDescriptions"];
  };
};

export function Home({ data }: { data: HomeData }) {
  const { locale, h2, products, productLabels } = data;
  const L = (href: string) => lp(locale, href);
  const isAr = locale === "ar";
  const heroSignals = h2.hero.supporting.split(" · ");

  return (
    <>
      {/* 01 — HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-bg md:min-h-[840px] lg:min-h-[min(920px,100svh)]">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <Image
            src="/new-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[88%_42%] opacity-100 mix-blend-multiply rtl:-scale-x-100 sm:object-[78%_center] md:object-center dark:hidden"
          />
          <Image
            src="/new-hero-dark.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-[88%_42%] opacity-90 mix-blend-screen rtl:-scale-x-100 sm:object-[78%_center] md:object-center dark:block"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg from-[12%] via-bg/97 via-[52%] to-bg/20 to-[88%] sm:from-0% sm:via-bg/95 sm:via-[38%] sm:to-transparent sm:to-[72%] rtl:bg-gradient-to-l" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent via-55% to-bg sm:from-bg/20 sm:via-70%" />
        </div>

        <div className="shell relative flex min-h-[100svh] flex-col pb-5 pt-24 md:min-h-[840px] md:pb-8 md:pt-32 lg:min-h-[min(920px,100svh)]">
          <div className="my-auto w-full max-w-[680px] py-10 md:py-20">
            <Reveal>
              <p className="eyebrow">{h2.hero.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1
                className={
                  isAr
                    ? "mt-6 max-w-2xl text-[clamp(2.125rem,8.2vw,4.75rem)] leading-[1.28] font-semibold tracking-[-0.025em] [text-wrap:balance] md:mt-7 md:text-[clamp(2.5rem,5.2vw,4.75rem)] md:leading-[1.3]"
                    : "mt-6 max-w-[680px] text-[clamp(2.25rem,8vw,4.75rem)] leading-[1.08] tracking-[-0.04em] font-semibold [text-wrap:balance] md:mt-8 md:text-[clamp(3rem,5.2vw,4.75rem)] md:leading-[1.04] md:tracking-[-0.048em]"
                }
              >
                <span className="block text-ink">{h2.hero.titleLine1}</span>
                <span className="block text-ink">{h2.hero.titleLine2}</span>
                <span className="mt-1 block text-muted md:whitespace-nowrap">
                  {h2.hero.titleTail}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p
                className={
                  isAr
                    ? "mt-7 max-w-[560px] text-[0.9375rem] leading-[1.85] text-ink-secondary [text-wrap:pretty] sm:text-base md:mt-9 md:text-lg md:leading-[1.9]"
                    : "mt-7 max-w-[550px] text-[0.9375rem] leading-[1.7] text-ink-secondary [text-wrap:pretty] sm:text-base md:mt-9 md:text-lg md:leading-[1.75]"
                }
              >
                {h2.hero.sub}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div
                className={`flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 ${
                  isAr ? "mt-9 md:mt-11" : "mt-8 md:mt-10"
                }`}
              >
                <Button
                  href={L("/demo")}
                  className="!h-12 !w-full !justify-center !rounded-[10px] !px-6 shadow-card sm:!w-auto"
                >
                  {h2.hero.cta1}
                  <span className="inline-block text-current/65 rtl:-scale-x-100" aria-hidden>
                    ↗
                  </span>
                </Button>
                <Button
                  href={L(PRODUCTS_HUB_HREF)}
                  variant="secondary"
                  className="!h-12 !w-full !justify-center !rounded-[10px] !px-6 bg-bg/80 backdrop-blur-sm sm:!w-auto sm:bg-bg/65"
                >
                  {h2.hero.cta2}
                  <span className="inline-block text-muted rtl:-scale-x-100" aria-hidden>
                    ↗
                  </span>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.34}>
            <div className="grid overflow-hidden rounded-[16px] border border-line bg-bg/85 shadow-card backdrop-blur-md sm:grid-cols-[56px_1fr] sm:rounded-full sm:bg-bg/75">
              <span className="hidden min-h-14 items-center justify-center border-e border-line text-muted sm:flex">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  aria-hidden
                >
                  <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </span>
              <ul className="grid sm:grid-cols-3">
                {heroSignals.map((signal, index) => (
                  <li
                    key={signal}
                    className={`flex min-h-12 items-center justify-center px-3 text-center text-[0.7rem] leading-snug text-ink-secondary sm:min-h-14 sm:px-4 sm:text-xs ${
                      index > 0 ? "border-t border-line sm:border-t-0 sm:border-s" : ""
                    }`}
                  >
                    {signal}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — WHO WE ARE */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2
              className={
                isAr
                  ? "text-[clamp(1.875rem,4.2vw,3.25rem)] leading-[1.35] font-semibold text-ink [text-wrap:balance]"
                  : "text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.12] tracking-[-0.025em] font-semibold text-ink [text-wrap:balance]"
              }
            >
              {h2.whoWeAre.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className={
                isAr
                  ? "mt-8 text-lg md:text-xl leading-[1.9] text-ink-secondary [text-wrap:pretty]"
                  : "mt-8 text-lg md:text-xl leading-relaxed text-ink-secondary [text-wrap:pretty]"
              }
            >
              {h2.whoWeAre.body}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* 03 — PRODUCTS */}
      <Section className="bg-surface overflow-hidden">
        <Reveal>
          <ProductPortfolio
            locale={locale}
            products={products}
            labels={productLabels}
            variant="preview"
            showExploreCta
          />
        </Reveal>
      </Section>

      {/* 04 — WHY ESTINAD */}
      <Section>
        <WhyEstinad locale={locale} copy={h2.why} />
      </Section>

      {/* 05 — FINAL CTA */}
      <section className="relative overflow-hidden hairline-t">
        <div className="absolute inset-0 soft-light" aria-hidden />
        <div className="shell relative py-28 md:py-40 text-center">
          <Reveal>
            <p className="eyebrow">{h2.finalCta.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              className={
                isAr
                  ? "mx-auto mt-6 max-w-3xl text-[clamp(2rem,4.8vw,3.5rem)] leading-[1.35] font-semibold text-ink [text-wrap:balance]"
                  : "mx-auto mt-7 max-w-3xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] tracking-[-0.03em] font-semibold text-ink [text-wrap:balance]"
              }
            >
              {h2.finalCta.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p
              className={
                isAr
                  ? "mx-auto mt-8 max-w-xl text-lg leading-[1.9] text-ink-secondary [text-wrap:pretty]"
                  : "mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-secondary [text-wrap:pretty]"
              }
            >
              {h2.finalCta.body}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              className={`flex flex-wrap items-center justify-center gap-4 ${
                isAr ? "mt-12" : "mt-11"
              }`}
            >
              <Button href={L("/demo")}>{h2.finalCta.cta1}</Button>
              <Button href={L(PRODUCTS_HUB_HREF)} variant="secondary">
                {h2.finalCta.cta2}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
