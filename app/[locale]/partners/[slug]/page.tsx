import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader, Button } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, partnerSlugs, type Locale } from "@/lib/i18n-config";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return partnerSlugs.map((slug) => ({ slug }));
}

function isPartnerSlug(slug: string): slug is (typeof partnerSlugs)[number] {
  return (partnerSlugs as readonly string[]).includes(slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  if (!isPartnerSlug(slug)) return {};
  const d = getDict(l);
  const t = d.partners.tracks[slug];
  return pageMeta(l, `/partners/${slug}`, {
    title: t.t,
    description: t.d,
  });
}

export default async function PartnerTrackPage({ params }: Props) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  if (!isPartnerSlug(slug)) notFound();
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const t = d.partners.tracks[slug];
  const p = d.partners;

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={t.t}
        intro={t.d}
        cta={{ label: t.cta, href: L(p.applyHref) }}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="hairline bg-surface p-8">
            <h2 className="text-lg text-ivory font-medium">Who it is for</h2>
            <p className="mt-3 text-sm text-muted leading-relaxed">{t.who}</p>
          </div>
          <div className="hairline bg-surface p-8">
            <h2 className="text-lg text-ivory font-medium">What the partner does</h2>
            <p className="mt-3 text-sm text-muted leading-relaxed">{t.does}</p>
          </div>
          <div className="hairline bg-surface p-8">
            <h2 className="text-lg text-ivory font-medium">What ESTINAD provides</h2>
            <p className="mt-3 text-sm text-muted leading-relaxed">{t.provides}</p>
          </div>
          <div className="hairline bg-surface p-8">
            <h2 className="text-lg text-ivory font-medium">Commercial & enablement</h2>
            <p className="mt-3 text-sm text-muted leading-relaxed">{t.revenue}</p>
            <p className="mt-3 text-sm text-muted leading-relaxed">{t.training}</p>
          </div>
        </div>
        <p className="mt-10 max-w-3xl text-sm text-muted leading-relaxed">{p.earlyNote}</p>
      </Section>

      <Section className="bg-surface">
        <SectionHeader eyebrow={p.howEyebrow} title={p.howTitle} intro={p.howIntro} />
        <div className="mt-10">
          <Button href={L(p.applyHref)}>{p.applyCta}</Button>
        </div>
      </Section>
    </>
  );
}
