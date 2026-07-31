import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader, Eyebrow, Button } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
import { servicesList } from "@/lib/nav";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return pageMeta(l, "/services", {
    title: d.nav.services,
    description: d.services.index.intro,
  });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const idx = d.services.index;

  return (
    <>
      <PageHero
        eyebrow={idx.eyebrow}
        title={idx.title}
        intro={idx.intro}
        cta={{ label: idx.cta, href: L("/company/contact") }}
      />

      <Section>
        <div className="grid gap-px md:grid-cols-2 hairline bg-line">
          {servicesList(d).map((s) => (
            <Link
              key={s.slug}
              href={L(`/services/${s.slug}`)}
              className="group bg-base p-8 hover:bg-surface transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent">{s.glyph}</span>
                <h2 className="text-2xl text-ivory font-semibold">{s.name}</h2>
              </div>
              <p className="mt-3 text-sm text-ivory-dim leading-relaxed">{s.oneLiner}</p>
              <span className="mt-5 inline-block text-xs text-accent group-hover:translate-x-1 transition-transform">
                {d.common.viewService}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          eyebrow={idx.productsNoteEyebrow}
          title={idx.productsNoteTitle}
          intro={idx.productsNoteBody}
        />
        <div className="mt-10 grid gap-px md:grid-cols-2 hairline bg-line">
          <div className="bg-base p-8">
            <Eyebrow>{d.nav.products}</Eyebrow>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              {d.products.index.intro}
            </p>
            <div className="mt-6">
              <Button href={L("/products")} variant="secondary">
                {d.common.exploreProductsArrow}
              </Button>
            </div>
          </div>
          <div className="bg-base p-8 relative">
            <div className="absolute inset-0 border border-accent/30 pointer-events-none" />
            <Eyebrow>
              <span className="text-accent">{d.nav.services}</span>
            </Eyebrow>
            <p className="mt-3 text-sm text-ivory leading-relaxed">{idx.intro}</p>
            <div className="mt-6">
              <Button href={L("/company/contact")}>{idx.cta}</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={idx.ctaTitle} title={idx.ctaBody} />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={L("/company/contact")}>{idx.cta}</Button>
          <Button href={L("/case-studies")} variant="secondary">
            {d.common.seeAllCaseStudies}
          </Button>
        </div>
      </Section>
    </>
  );
}
