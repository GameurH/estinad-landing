import Image from "next/image";
import { Button, Section } from "./ui";
import { Reveal } from "./motion/Reveal";
import { ProductPortfolio } from "@/components/products/ProductPortfolio";
import { lp, type Locale } from "@/lib/i18n-config";
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

  return (
    <>
      {/* 01 — HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src="/new-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_18%] opacity-[0.55] mix-blend-multiply dark:hidden"
          />
          <Image
            src="/new-hero-dark.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-[50%_18%] opacity-[0.6] mix-blend-screen dark:block"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/55 to-bg" />
        </div>

        <div className="relative shell pt-40 md:pt-56 pb-24 md:pb-32 text-center">
          <Reveal>
            <p className="eyebrow">{h2.hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              className={
                isAr
                  ? "mx-auto mt-6 max-w-4xl text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.4] font-semibold text-ink whitespace-pre-line [text-wrap:balance]"
                  : "mx-auto mt-7 max-w-5xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.1] tracking-[-0.035em] font-semibold text-ink [text-wrap:balance]"
              }
            >
              {h2.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p
              className={
                isAr
                  ? "mx-auto mt-10 max-w-2xl text-lg md:text-xl leading-[1.9] text-ink-secondary [text-wrap:pretty]"
                  : "mx-auto mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-secondary [text-wrap:balance]"
              }
            >
              {h2.hero.sub}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className={`flex flex-wrap items-center justify-center gap-4 ${isAr ? "mt-12" : "mt-11"}`}>
              <Button href={L("/demo")}>{h2.hero.cta1}</Button>
              <Button href={L("/products")} variant="secondary">
                {h2.hero.cta2}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.34}>
            <p
              className={
                isAr
                  ? "mt-14 font-mono text-xs leading-relaxed tracking-normal text-muted"
                  : "mt-16 font-mono text-[11px] md:text-xs tracking-[0.22em] text-muted"
              }
            >
              {h2.hero.supporting}
            </p>
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
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2
              className={
                isAr
                  ? "text-center text-[clamp(1.875rem,4.2vw,3.25rem)] leading-[1.35] font-semibold text-ink [text-wrap:balance]"
                  : "text-center text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.12] tracking-[-0.025em] font-semibold text-ink [text-wrap:balance]"
              }
            >
              {h2.why.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className={
                isAr
                  ? "mt-8 text-center text-lg md:text-xl leading-[1.9] text-ink-secondary [text-wrap:pretty]"
                  : "mt-8 text-center text-lg md:text-xl leading-relaxed text-ink-secondary [text-wrap:pretty]"
              }
            >
              {h2.why.body}
            </p>
          </Reveal>
          <ul className="mt-16 space-y-0">
            {h2.why.points.map((pt, i) => (
              <Reveal key={pt} delay={0.12 + i * 0.04}>
                <li className={`hairline-t flex gap-6 ${isAr ? "py-8 md:py-9" : "py-7 md:py-8"}`}>
                  <span className="pt-1 font-mono text-xs text-muted shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className={`text-[1.0625rem] text-ink ${isAr ? "leading-[1.85]" : "leading-relaxed"}`}>
                    {pt}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* 05 — FINAL CTA */}
      <section className="relative overflow-hidden hairline-t">
        <div className="absolute inset-0 soft-light" aria-hidden />
        <div className="shell relative py-28 md:py-40 text-center">
          <Reveal>
            <h2
              className={
                isAr
                  ? "mx-auto max-w-3xl text-[clamp(2rem,4.8vw,3.5rem)] leading-[1.35] font-semibold text-ink [text-wrap:balance]"
                  : "mx-auto max-w-3xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] tracking-[-0.03em] font-semibold text-ink [text-wrap:balance]"
              }
            >
              {h2.finalCta.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
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
          <Reveal delay={0.18} className="mt-12">
            <Button href={L("/quote")}>{h2.finalCta.cta}</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
