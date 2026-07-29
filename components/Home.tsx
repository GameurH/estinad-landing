import Link from "next/link";
import Image from "next/image";
import { Button, Section, SectionHeader, Tag } from "./ui";
import { Reveal } from "./motion/Reveal";
import { Float } from "./motion/Float";
import { Parallax } from "./motion/Parallax";
import { DemoTabs } from "./DemoTabs";
import { lp, type Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { ProductCard } from "@/lib/nav";

export type HomeData = {
  locale: Locale;
  h2: Dictionary["homeV2"];
  products: ProductCard[];
};

const SECTOR_IMAGES: Record<string, string> = {
  retail: "/images/v2/sector-retail.png",
  restaurants: "/images/v2/sector-restaurant.png",
  clinics: "/images/v2/sector-clinic.png",
};

const Arrow = () => (
  <span aria-hidden className="inline-block rtl:-scale-x-100">→</span>
);

export function Home({ data }: { data: HomeData }) {
  const { locale, h2, products } = data;
  const L = (href: string) => lp(locale, href);

  return (
    <>
      {/* ============================ 01 — HERO ============================ */}
      <section className="relative overflow-hidden">
        <div className="shell pt-36 md:pt-44 pb-16 md:pb-20 text-center">
          <Reveal><p className="eyebrow">{h2.hero.eyebrow}</p></Reveal>
          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-6 max-w-5xl text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] tracking-[-0.04em] font-semibold text-ink [text-wrap:balance]">
              {h2.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-secondary">
              {h2.hero.sub}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href={L("/demo")}>{h2.hero.cta1}</Button>
              <Button href={L("/products")} variant="secondary">{h2.hero.cta2}</Button>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-14 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {h2.hero.scroll} ↓
            </p>
          </Reveal>
        </div>

        <div className="shell-wide pb-24 md:pb-32">
          <Reveal delay={0.32}>
            <Parallax strength={10}>
              <Float>
                <figure className="glass rounded-frame shadow-float p-2 md:p-3">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-card">
                    <Image
                      src="/images/v2/hero-1.png"
                      alt={h2.hero.frameCaption}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1360px) 90vw, 1280px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    <span>{h2.hero.frameCaption}</span>
                    <span aria-hidden>ESTINAD · 2026</span>
                  </figcaption>
                </figure>
              </Float>
            </Parallax>
          </Reveal>
        </div>
      </section>

      {/* ============================ 02 — TRUST ============================ */}
      <section className="hairline-b">
        <div className="shell py-12 text-center">
          <Reveal>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-ink-secondary">
              {h2.trust.lead}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {h2.trust.sectors.map((s, i) => (
                <span key={s} className="flex items-center gap-6">
                  {i > 0 && <span className="text-line-strong" aria-hidden>/</span>}
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== 03 — INTERACTIVE DEMO ===================== */}
      <Section className="bg-surface">
        <Reveal>
          <SectionHeader eyebrow={h2.demo.eyebrow} title={h2.demo.title} intro={h2.demo.intro} />
        </Reveal>
        <Reveal delay={0.12} className="mt-14">
          <DemoTabs tabs={h2.demo.tabs} captions={h2.demo.frameCaptions} />
        </Reveal>
      </Section>

      {/* ======================= 04 — PRODUCT SHOWCASE ======================= */}
      <Section>
        <Reveal>
          <SectionHeader eyebrow={h2.showcase.eyebrow} title={h2.showcase.title} intro={h2.showcase.intro} />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06} className="h-full">
              <Link
                href={L(`/products/${p.slug}`)}
                className="group block h-full bg-card hairline rounded-card shadow-card p-8 md:p-10 transition-all duration-200 hover:shadow-lift hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  <span className="text-muted transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" aria-hidden>
                    →
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-ink">{p.name}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-secondary">{p.oneLiner}</p>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {h2.showcase.linkLabel} <Arrow />
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Button href={L("/products")} variant="secondary">{h2.showcase.viewAll}</Button>
        </Reveal>
      </Section>

      {/* ========================== 05 — PLATFORM ========================== */}
      <Section className="bg-surface">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <SectionHeader eyebrow={h2.platform.eyebrow} title={h2.platform.title} intro={h2.platform.lead} />
            </Reveal>
            <Reveal delay={0.12} className="mt-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-frame shadow-card">
                <Image
                  src="/images/v2/platform.png"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Fig. 01 — {h2.platform.eyebrow}
              </p>
            </Reveal>
          </div>
          <div className="flex flex-col justify-center">
            {h2.platform.layers.map((l, i) => (
              <Reveal key={l.n} delay={i * 0.05}>
                <div className="hairline-t py-6 flex gap-6">
                  <span className="pt-1 font-mono text-xs text-muted">{l.n}</span>
                  <div>
                    <h3 className="text-lg font-medium text-ink">{l.t}</h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-secondary">{l.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="mt-8">
                <Link
                  href={L("/platform")}
                  className="inline-flex items-center gap-2 border-b border-ink pb-0.5 text-[0.9375rem] font-medium text-ink transition-colors hover:border-ink/40"
                >
                  {h2.platform.link} <Arrow />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ========================= 06 — PHILOSOPHY ========================= */}
      <Section>
        <div className="mx-auto max-w-[680px] text-center">
          <Reveal>
            <SectionHeader align="center" eyebrow={h2.philosophy.eyebrow} title={h2.philosophy.title} />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-ink-secondary">{h2.philosophy.body1}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-ink-secondary">{h2.philosophy.body2}</p>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mt-16">
          <div className="relative aspect-[21/9] overflow-hidden rounded-frame">
            <Image
              src="/images/v2/philosophy.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover dark:invert"
            />
          </div>
        </Reveal>
        <div className="mx-auto mt-16 max-w-[680px] text-center">
          <Reveal>
            <p
              lang="ar"
              dir="rtl"
              className="font-[family-name:var(--font-cairo)] text-[clamp(2rem,5vw,3.5rem)] leading-snug text-ink"
            >
              {h2.philosophy.arLine}
            </p>
          </Reveal>
          {h2.philosophy.arNote && (
            <Reveal delay={0.08}>
              <p className="mt-4 text-sm text-muted">{h2.philosophy.arNote}</p>
            </Reveal>
          )}
          <Reveal delay={0.14}>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              — {h2.philosophy.signoff}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ========================== 07 — SECTORS ========================== */}
      <Section className="bg-surface">
        <Reveal>
          <SectionHeader eyebrow={h2.sectors.eyebrow} title={h2.sectors.title} intro={h2.sectors.intro} />
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-10">
          {h2.sectors.cards.map((c, i) => (
            <Reveal key={c.key} delay={i * 0.08} className="h-full">
              <Link href={L(c.href)} className="group block h-full">
                <div className="relative aspect-square overflow-hidden rounded-card shadow-card transition-shadow duration-200 group-hover:shadow-lift">
                  <Image
                    src={SECTOR_IMAGES[c.key]}
                    alt={c.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{c.caption}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{c.role}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-secondary">{c.body}</p>
                <p className="mt-4 inline-block border-b border-transparent text-sm font-medium text-ink transition-colors group-hover:border-ink">
                  {c.link} <Arrow />
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ========================== 08 — FOUNDER ========================== */}
      <Section>
        <figure className="mx-auto max-w-3xl text-center">
          <Reveal><p className="eyebrow">{h2.founder.label}</p></Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-8 text-[clamp(1.5rem,3.2vw,2.25rem)] leading-[1.3] tracking-[-0.01em] text-ink [text-wrap:balance]">
              “{h2.founder.quote}”
            </blockquote>
          </Reveal>
          <Reveal delay={0.18}>
            <figcaption className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {h2.founder.name} · {h2.founder.company}
            </figcaption>
          </Reveal>
        </figure>
      </Section>

      {/* ====================== 09 — CASE STUDIES ====================== */}
      <Section className="bg-surface">
        <Reveal>
          <SectionHeader eyebrow={h2.cases.eyebrow} title={h2.cases.title} intro={h2.cases.intro} />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {h2.cases.items.map((c, i) => (
            <Reveal key={c.sector} delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col bg-card hairline rounded-card shadow-card p-8 transition-all duration-200 hover:shadow-lift hover:-translate-y-0.5">
                <Tag>{c.tag}</Tag>
                <div className="mt-8 font-mono text-4xl tracking-tight text-ink">{c.metric}</div>
                <p className="mt-1 text-xs text-muted">{c.metricLabel}</p>
                <h3 className="mt-7 text-lg font-medium text-ink">{c.result}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-secondary">{c.body}</p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{c.sector}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Button href={L("/case-studies")} variant="secondary">{h2.cases.viewAll}</Button>
        </Reveal>
      </Section>

      {/* ================= 10 — PERFORMANCE (INVERSION BAND) ================= */}
      <section className="bg-inv-bg text-inv-fg">
        <div className="shell py-20 md:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow eyebrow-inv mb-5">{h2.performance.eyebrow}</p>
              <h2 className="text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.08] tracking-[-0.025em] font-semibold [text-wrap:balance]">
                {h2.performance.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-inv-fg-dim">{h2.performance.intro}</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {h2.performance.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="h-full">
                <div className="h-full rounded-card border border-inv-line p-6">
                  <div className="font-mono text-4xl tracking-tight">
                    {s.value}
                    <span className="text-2xl text-inv-muted">{s.suffix}</span>
                  </div>
                  <div className="mt-2 text-sm text-inv-fg-dim">{s.label}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-inv-muted">
                    {s.qualifier}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 text-sm text-inv-muted">{h2.performance.note}</p>
          </Reveal>
          <Reveal delay={0.24} className="mt-14">
            <div className="relative aspect-[21/9] overflow-hidden rounded-frame">
              <Image
                src="/images/v2/monolith.png"
                alt={h2.performance.imageAlt}
                fill
                sizes="100vw"
                className="object-cover dark:invert"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ 11 — FAQ ============================ */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionHeader eyebrow={h2.faq.eyebrow} title={h2.faq.title} intro={h2.faq.intro} />
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href={L("/resources/faq")}
                className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-0.5 text-[0.9375rem] font-medium text-ink transition-colors hover:border-ink/40"
              >
                {h2.faq.moreLink} <Arrow />
              </Link>
            </Reveal>
          </div>
          <div>
            {h2.faq.items.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="group hairline-b">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium text-ink [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="relative h-3.5 w-3.5 shrink-0" aria-hidden>
                      <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-ink" />
                      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-ink transition-transform duration-200 group-open:scale-y-0" />
                    </span>
                  </summary>
                  <p className="max-w-xl pb-7 text-[0.9375rem] leading-relaxed text-ink-secondary">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ========================= 12 — FINAL CTA ========================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 soft-light" aria-hidden />
        <div className="shell relative py-28 md:py-40 text-center">
          <Reveal><p className="eyebrow">{h2.finalCta.eyebrow}</p></Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.03em] font-semibold text-ink [text-wrap:balance]">
              {h2.finalCta.title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-secondary">{h2.finalCta.sub}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href={L("/demo")}>{h2.finalCta.cta1}</Button>
              <Button href={L("/products")} variant="secondary">{h2.finalCta.cta2}</Button>
            </div>
          </Reveal>
        </div>
      </section>
      {/* 13 — Footer: global, already restyled */}
    </>
  );
}
