import Link from "next/link";
import Image from "next/image";
import { Monogram } from "./Monogram";
import { Button, Eyebrow, Section, SectionHeader, Stat, Tag } from "./ui";
import { lp, type Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";

type ProductCard = { slug: string; glyph: string; name: string; oneLiner: string; vertical: string };
type SolutionCard = { slug: string; name: string; audience: string; summary: string };
type ServiceCard = { slug: string; name: string; oneLiner: string };

export type HomeData = {
  locale: Locale;
  h: Dictionary["home"];
  productSlugs: readonly string[];
  products: Record<string, ProductCard>;
  solutions: SolutionCard[];
  services: ServiceCard[];
};

export function Home({ data }: { data: HomeData }) {
  const { locale, h } = data;
  const L = (href: string) => lp(locale, href);

  /* ============================ 1. HERO ============================ */
  const Hero = () => (
    <section className="relative overflow-hidden hairline-b">
      <div className="absolute inset-0 grid-backdrop opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-base/10 to-base" aria-hidden />
      <div className="shell relative grid gap-12 py-24 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="rise">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1.5 w-1.5 rotate-45 border border-accent" />
            <p className="eyebrow">{h.hero.eyebrow}</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ivory font-semibold">
            {h.hero.title1}
            <br />
            <span className="text-accent">{h.hero.titleAccent}</span> {h.hero.title2}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory-dim">
            {h.hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={L("/products")}>{h.hero.cta1}</Button>
            <Button href={L("/services/custom-software")} variant="secondary">
              {h.hero.cta2}
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-accent" />
              {h.hero.built}
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-accent" />
              {h.hero.designed}
            </span>
          </div>
        </div>

        <div className="relative rise">
          <div className="relative aspect-square w-full max-w-lg mx-auto">
            <Image
              src="/estinad-hero.png"
              alt={h.hero.monoCaption}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 512px"
              className="object-contain hero-img-dark"
            />
            <Image
              src="/estinad-hero-light.png"
              alt={h.hero.monoCaption}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 512px"
              className="object-contain hero-img-light"
            />
          </div>
          <p className="mt-4 text-center text-xs text-muted-2 font-mono">{h.hero.monoCaption}</p>
        </div>
      </div>
    </section>
  );

  /* ====================== 2. TRUST / CREDIBILITY ====================== */
  const TrustStrip = () => (
    <section className="hairline-b bg-surface">
      <div className="shell py-12">
        <div className="grid gap-8 md:grid-cols-4 md:gap-4">
          {h.trust.stats.map((s) => (
            <div key={s.label} className="text-center md:text-start">
              <div className="font-mono text-2xl text-ivory tracking-tight">{s.value}</div>
              <p className="mt-1 text-xs text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-sm text-ivory-dim hairline-t pt-8">
          <span className="eyebrow">{h.trust.eyebrow}</span>
          {h.trust.sectors.map((item, i) => (
            <span key={item} className="flex items-center gap-8">
              {i > 0 && <span className="text-muted-2">/</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );

  /* =================== 3. WHO IS ESTINAD =================== */
  const WhoIs = () => (
    <Section>
      <SectionHeader eyebrow={h.whoIs.eyebrow} title={h.whoIs.title} intro={h.whoIs.intro} />
      <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4 hairline bg-line">
        {h.whoIs.pillars.map((p) => (
          <div key={p.t} className="bg-base p-7">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rotate-45 border border-accent" />
              <h3 className="text-base text-ivory font-medium">{p.t}</h3>
            </div>
            <p className="mt-3 text-sm text-muted leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );

  /* =================== 4. PRODUCTS OVERVIEW =================== */
  const ProductsOverview = () => (
    <Section className="bg-surface">
      <SectionHeader
        eyebrow={h.productsOverview.eyebrow}
        title={h.productsOverview.title}
        intro={h.productsOverview.intro}
      />
      <div className="mt-12 grid gap-px md:grid-cols-2 hairline bg-line">
        {data.productSlugs.map((slug) => {
          const p = data.products[slug];
          return (
            <Link
              key={slug}
              href={L(`/products/${slug}`)}
              className="group bg-base p-7 md:p-8 hover:bg-surface-2 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent">{p.glyph}</span>
                  <h3 className="text-xl text-ivory font-medium">{p.name}</h3>
                </div>
                <span className="text-muted-2 group-hover:text-ivory group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
              <p className="mt-3 text-sm text-ivory-dim leading-relaxed">{p.oneLiner}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Tag>{p.vertical}</Tag>
                <Tag>{h.productsOverview.tagPricing}</Tag>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-8">
        <Button href={L("/products")} variant="secondary">
          {h.productsOverview.viewAll}
        </Button>
      </div>
    </Section>
  );

  /* =================== 5. SOLUTIONS BY INDUSTRY =================== */
  const SolutionsOverview = () => (
    <Section>
      <SectionHeader
        eyebrow={h.solutionsOverview.eyebrow}
        title={h.solutionsOverview.title}
        intro={h.solutionsOverview.intro}
      />
      <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3 hairline bg-line">
        {data.solutions.map((s) => (
          <Link
            key={s.slug}
            href={L(`/solutions/${s.slug}`)}
            className="group bg-base p-6 hover:bg-surface transition-colors"
          >
            <h3 className="text-base text-ivory font-medium">{s.name}</h3>
            <p className="mt-1 text-xs text-muted">{s.audience}</p>
            <p className="mt-3 text-sm text-ivory-dim leading-relaxed">{s.summary}</p>
            <span className="mt-4 inline-block text-xs text-accent group-hover:translate-x-1 transition-transform">
              {h.solutionsOverview.viewSolution}
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Button href={L("/solutions")} variant="secondary">
          {h.solutionsOverview.viewAll}
        </Button>
      </div>
    </Section>
  );

  /* =================== 6. SERVICES / CUSTOM EXECUTION =================== */
  const ServicesOverview = () => (
    <Section className="bg-surface">
      <SectionHeader
        eyebrow={h.servicesOverview.eyebrow}
        title={h.servicesOverview.title}
        intro={h.servicesOverview.intro}
      />
      <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4 hairline bg-line">
        {h.servicesOverview.items.map((s) => (
          <Link
            key={s.slug}
            href={L(`/services/${s.slug}`)}
            className="group bg-base p-7 hover:bg-surface-2 transition-colors"
          >
            <h3 className="text-base text-ivory font-medium">{s.t}</h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">{s.d}</p>
            <span className="mt-5 inline-block text-xs text-accent group-hover:translate-x-1 transition-transform">
              {h.servicesOverview.viewAll}
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Button href={L("/services")} variant="secondary">
          {h.servicesOverview.viewAll}
        </Button>
      </div>
    </Section>
  );

  /* =================== 7. CASE STUDIES / PROOF =================== */
  const CaseStudies = () => (
    <Section>
      <SectionHeader
        eyebrow={h.caseStudiesOverview.eyebrow}
        title={h.caseStudiesOverview.title}
        intro={h.caseStudiesOverview.intro}
      />
      <div className="mt-12 grid gap-px md:grid-cols-3 hairline bg-line">
        {h.caseStudiesOverview.cases.map((c) => (
          <div key={c.sector} className="bg-base p-7 flex flex-col">
            <Tag>{c.tag}</Tag>
            <div className="mt-6 font-mono text-4xl text-ivory tracking-tight">{c.metric}</div>
            <p className="mt-1 text-xs text-muted">{c.metricLabel}</p>
            <h3 className="mt-6 text-base text-ivory font-medium">{c.result}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{c.body}</p>
            <p className="mt-4 text-xs font-mono uppercase tracking-[0.16em] text-muted-2">
              {c.sector}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Button href={L("/case-studies")} variant="secondary">
          {h.caseStudiesOverview.viewAll}
        </Button>
      </div>
    </Section>
  );

  /* =================== 8. WHY ESTINAD =================== */
  const WhyEstinad = () => (
    <Section className="bg-surface">
      <SectionHeader eyebrow={h.why.eyebrow} title={h.why.title} intro={h.why.intro} />
      <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3 hairline bg-line">
        {h.why.items.map((it) => (
          <div key={it.t} className="bg-base p-7">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rotate-45 border border-accent" />
              <h3 className="text-base text-ivory font-medium">{it.t}</h3>
            </div>
            <p className="mt-3 text-sm text-muted leading-relaxed">{it.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );

  /* =================== 9. HOW WE WORK =================== */
  const HowWeWork = () => (
    <Section>
      <SectionHeader
        eyebrow={h.howWeWork.eyebrow}
        title={h.howWeWork.title}
        intro={h.howWeWork.intro}
      />
      <div className="mt-12 grid gap-px md:grid-cols-2 lg:grid-cols-4 hairline bg-line">
        {h.howWeWork.steps.map((s) => (
          <div key={s.n} className="bg-base p-7">
            <div className="font-mono text-xs text-accent">{s.n}</div>
            <h3 className="mt-3 text-lg text-ivory font-medium">{s.t}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );

  /* =================== 10. FINAL CTA =================== */
  const FinalCTA = () => (
    <section className="relative overflow-hidden hairline-b bg-base">
      <div className="absolute inset-0 grid-backdrop opacity-50" aria-hidden />
      <div className="shell relative py-24 md:py-32 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="flex justify-center mb-6">
            <Monogram className="h-12 w-12 text-ivory" />
          </div>
          <p className="eyebrow text-accent mb-4">{h.finalCta.eyebrow}</p>
          <h2 className="text-3xl md:text-5xl leading-[1.1] tracking-tight text-ivory font-semibold">
            {h.finalCta.title1}
            <span className="text-accent">{h.finalCta.titleAccent}</span>
            {h.finalCta.title2}
          </h2>
          <p className="mt-5 text-lg text-ivory-dim max-w-xl mx-auto">{h.finalCta.sub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={L("/products")}>{h.finalCta.cta1}</Button>
            <Button href={L("/services/custom-software")} variant="secondary">
              {h.finalCta.cta2}
            </Button>
            <Button href={L("/demo")} variant="ghost">
              {h.finalCta.cta3}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Hero />
      <TrustStrip />
      <WhoIs />
      <ProductsOverview />
      <SolutionsOverview />
      <ServicesOverview />
      <CaseStudies />
      <WhyEstinad />
      <HowWeWork />
      <FinalCTA />
    </>
  );
}
