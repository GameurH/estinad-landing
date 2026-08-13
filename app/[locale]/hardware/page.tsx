import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HardwareHeroVisual } from "@/components/hardware/HardwareHeroVisual";
import { HardwareKitCard } from "@/components/hardware/HardwareKitCard";
import { Section, SectionHeader, Button, NodeDivider } from "@/components/ui";
import {
  anyKitPurchasable,
  getHardwareKit,
  hardwareKitCopy,
  hardwareKitsList,
} from "@/lib/hardware";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, productHref, type Locale } from "@/lib/i18n-config";
import { productNames } from "@/lib/nav";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return pageMeta(l, "/hardware", {
    title: d.hardware.meta.title,
    description: d.hardware.meta.description,
  });
}

export default async function HardwarePage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const h = d.hardware;
  const kits = hardwareKitsList(d);
  const names = productNames(d);
  const featuredKit = getHardwareKit("retail-counter-kit");
  const featuredCopy = hardwareKitCopy(d, "retail-counter-kit");
  const purchasingOpen = anyKitPurchasable();

  return (
    <>
      {/* 01 — Hero */}
      <section className="relative overflow-hidden hairline-b">
        <div className="absolute inset-0 grid-backdrop opacity-30" aria-hidden />
        <div className="shell relative py-12 md:py-28">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="min-w-0 max-w-xl rise">
              <p className="eyebrow mb-4 md:mb-5">{h.hero.eyebrow}</p>
              <h1 className="text-[clamp(1.85rem,6vw,3.75rem)] leading-[1.08] tracking-[-0.03em] text-ink font-semibold [text-wrap:balance] [overflow-wrap:anywhere]">
                {h.hero.title}
              </h1>
              <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-ink-secondary">
                {h.hero.body}
              </p>
              <div className="mt-7 md:mt-9 flex flex-col sm:flex-row flex-wrap gap-3 [&_a]:w-full sm:[&_a]:w-auto">
                <Button href={L("/hardware/catalog")}>{h.hero.primaryCta}</Button>
                <Button href={L("/hardware/quote")} variant="secondary">
                  {h.hero.secondaryCta}
                </Button>
              </div>
              <p className="mt-6 md:mt-8 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted leading-relaxed">
                {h.hero.supporting}
              </p>
            </div>
            <HardwareHeroVisual />
          </div>
        </div>
      </section>

      {/* 02 — Shop by setup */}
      <Section id="setups">
        <SectionHeader
          eyebrow={h.shopBySetup.eyebrow}
          title={h.shopBySetup.title}
          intro={h.shopBySetup.intro}
        />
        <div className="mt-14 grid gap-px sm:grid-cols-2 hairline bg-line">
          {h.shopBySetup.items.map((item, i) => (
            <Link
              key={item.slug}
              href={L(`/hardware/${item.slug}`)}
              className="group bg-bg p-5 md:p-8 min-w-0 transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink"
            >
              <span className="font-mono text-xs text-muted tracking-[0.18em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-medium text-ink tracking-tight [text-wrap:balance] group-hover:opacity-80 transition-opacity">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {item.body}
              </p>
              <span className="mt-5 inline-flex items-center text-sm text-ink">
                {h.kitsSection.viewDetails}
                <span className="ms-2 inline-block rtl:-scale-x-100" aria-hidden>
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 03 — Featured configuration */}
      {featuredKit && (
        <Section className="bg-surface" id="featured">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            <div className="min-w-0">
              <SectionHeader
                eyebrow={h.featured.eyebrow}
                title={h.featured.title}
                intro={h.featured.body}
              />
              <p className="mt-5 text-sm leading-relaxed text-muted max-w-xl">
                {h.featured.note}
              </p>
              <ul className="mt-8 flex flex-col gap-3" aria-label={h.featured.componentsLabel}>
                {featuredCopy.includes.slice(0, 4).map((inc) => (
                  <li
                    key={inc.id}
                    className="flex items-start gap-3 text-sm text-ink-secondary"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 rotate-45 border border-ink/50 flex-shrink-0"
                      aria-hidden
                    />
                    <span className="min-w-0">
                      <span className="text-ink font-medium">{inc.label}</span>
                      <span className="text-muted"> — {inc.blurb}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 md:mt-9 flex flex-col sm:flex-row flex-wrap gap-3 [&_a]:w-full sm:[&_a]:w-auto">
                <Button href={L("/hardware/retail-counter-kit")}>
                  {h.featured.primaryCta}
                </Button>
                <Button
                  href={L("/hardware/quote?kit=retail-counter-kit")}
                  variant="secondary"
                >
                  {h.featured.secondaryCta}
                </Button>
              </div>
            </div>
            <figure className="relative aspect-[4/3] overflow-hidden bg-card hairline min-w-0">
              <Image
                src={featuredKit.media.hero.src}
                alt={featuredCopy.media.hero.alt}
                width={featuredKit.media.hero.width}
                height={featuredKit.media.hero.height}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </Section>
      )}

      <NodeDivider />

      {/* 04 — Hardware catalog */}
      <Section id="catalog">
        <SectionHeader
          eyebrow={h.kitsSection.eyebrow}
          title={h.kitsSection.title}
        />
        <div className="mt-14 grid gap-px md:grid-cols-2 hairline bg-line">
          {kits.map((kit) => (
            <HardwareKitCard
              key={kit.slug}
              locale={l}
              kit={kit}
              name={kit.copy.name}
              tagline={kit.copy.tagline}
              useCase={kit.copy.useCase}
              heroAlt={kit.copy.media.hero.alt}
              cta={kit.copy.cta}
              labels={h.kitsSection}
              productNames={names}
            />
          ))}
        </div>
      </Section>

      {/* 05 — Why certified hardware */}
      <Section className="bg-surface">
        <SectionHeader
          eyebrow={h.trust.eyebrow}
          title={h.trust.title}
          intro={h.trust.body}
        />
        <div className="mt-14 grid gap-px md:grid-cols-3 hairline bg-line">
          {h.trust.items.map((item, i) => (
            <div key={item.title} className="bg-surface p-5 md:p-8 min-w-0">
              <span className="font-mono text-xs text-muted tracking-[0.18em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 md:mt-5 text-lg md:text-xl font-semibold text-ink tracking-tight [text-wrap:balance]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 06 — Simple purchase path (data-gated) */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <SectionHeader
            eyebrow={h.purchasePath.eyebrow}
            title={h.purchasePath.title}
            intro={
              purchasingOpen ? h.purchasePath.body : h.purchasePath.gatedNote
            }
          />
          <div className="flex flex-wrap gap-3 lg:justify-self-end">
            {purchasingOpen ? (
              <Button href={L("/hardware/cart")}>{h.purchasePath.cartCta}</Button>
            ) : (
              <Button href={L("/hardware/quote")}>
                {h.purchasePath.quoteCta}
              </Button>
            )}
            <Button href={L("/hardware/compatibility")} variant="secondary">
              {h.compatibility.cta}
            </Button>
          </div>
        </div>
      </Section>

      {/* 07 — Need help? */}
      <section className="hairline-b">
        <div className="shell py-14 md:py-28">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(1.65rem,5vw,2.75rem)] font-semibold text-ink leading-[1.1] tracking-[-0.02em] [text-wrap:balance]">
              {h.finalCta.title}
            </h2>
            <p className="mt-4 md:mt-5 text-base md:text-lg leading-relaxed text-ink-secondary">
              {h.finalCta.body}
            </p>
            <div className="mt-7 md:mt-9 flex flex-col sm:flex-row flex-wrap gap-3 [&_a]:w-full sm:[&_a]:w-auto">
              <Button href={L("/hardware/quote")}>{h.finalCta.cta}</Button>
              <Button href={L(productHref("retail"))} variant="secondary">
                {h.finalCta.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell py-10">
          <Link
            href={L("/products")}
            className="inline-flex items-center min-h-11 text-sm text-ink-secondary hover:text-ink transition-colors"
          >
            <span className="me-2 inline-block rtl:-scale-x-100" aria-hidden>
              ←
            </span>
            {d.common.exploreProducts}
          </Link>
        </div>
      </section>
    </>
  );
}
