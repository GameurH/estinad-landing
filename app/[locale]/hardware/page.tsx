import type { Metadata } from "next";
import Link from "next/link";
import { HardwareHeroVisual } from "@/components/hardware/HardwareHeroVisual";
import { HardwareKitCard } from "@/components/hardware/HardwareKitCard";
import { Section, SectionHeader, Button, NodeDivider } from "@/components/ui";
import { hardwareKitsList } from "@/lib/hardware";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
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

  return (
    <>
      {/* Hero — split studio */}
      <section className="relative overflow-hidden hairline-b">
        <div className="absolute inset-0 grid-backdrop opacity-30" aria-hidden />
        <div className="shell relative py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="min-w-0 max-w-xl rise">
              <p className="eyebrow mb-5">{h.hero.eyebrow}</p>
              <h1 className="text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.08] tracking-[-0.03em] text-ink font-semibold [text-wrap:balance] [overflow-wrap:anywhere]">
                {h.hero.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-secondary">
                {h.hero.body}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href={L("/hardware/quote")}>{h.hero.primaryCta}</Button>
                <Button href={L("/hardware/compatibility")} variant="secondary">
                  {h.hero.secondaryCta}
                </Button>
              </div>
              <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted leading-relaxed">
                {h.hero.supporting}
              </p>
            </div>
            <HardwareHeroVisual />
          </div>
        </div>
      </section>

      {/* Certified by design */}
      <Section>
        <SectionHeader
          eyebrow={h.certified.eyebrow}
          title={h.certified.title}
          intro={h.certified.body}
        />
        <div className="mt-14 grid gap-px md:grid-cols-2 hairline bg-line">
          {h.certified.principles.map((p) => (
            <div key={p.title} className="bg-bg p-7 md:p-8 min-w-0">
              <h3 className="text-lg font-medium text-ink tracking-tight [text-wrap:balance]">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Commercial model */}
      <Section className="bg-surface">
        <SectionHeader
          eyebrow={h.model.eyebrow}
          title={h.model.title}
          intro={h.model.body}
        />
        <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4 hairline bg-line">
          {h.model.items.map((item, i) => (
            <div key={item.title} className="bg-surface p-6 md:p-7 min-w-0">
              <span className="font-mono text-xs text-muted tracking-[0.18em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-medium text-ink [text-wrap:balance]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <NodeDivider />

      {/* Deployment kits */}
      <Section id="kits">
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
            />
          ))}
        </div>
      </Section>

      {/* How deployment works */}
      <Section className="bg-surface">
        <SectionHeader eyebrow={h.steps.eyebrow} title={h.steps.title} />
        <ol className="mt-14 grid gap-px md:grid-cols-3 hairline bg-line list-none">
          {h.steps.items.map((step, i) => (
            <li key={step.title} className="bg-surface p-7 md:p-8 min-w-0">
              <span className="font-mono text-xs text-muted tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink tracking-tight [text-wrap:balance]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Compatibility */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <SectionHeader
            eyebrow={h.compatibility.eyebrow}
            title={h.compatibility.title}
            intro={h.compatibility.body}
          />
          <div className="lg:justify-self-end">
            <Button href={L("/hardware/compatibility")}>{h.compatibility.cta}</Button>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="hairline-b">
        <div className="shell py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold text-ink leading-[1.1] tracking-[-0.02em] [text-wrap:balance]">
              {h.finalCta.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-secondary">
              {h.finalCta.body}
            </p>
            <div className="mt-9">
              <Button href={L("/hardware/quote")}>{h.finalCta.cta}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet cross-link back to software */}
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
