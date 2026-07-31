import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader, Button } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return pageMeta(l, "/partners", {
    title: d.partners.title,
    description: d.partners.intro,
  });
}

export default async function PartnersHubPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const p = d.partners;
  const trackKeys = ["referral", "resellers", "implementers", "technology"] as const;

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        intro={p.intro}
        cta={{ label: p.cta, href: L(p.applyHref) }}
      />

      <Section>
        <p className="max-w-3xl text-base text-muted leading-relaxed">{p.earlyNote}</p>
        <div className="mt-12 grid gap-px md:grid-cols-2 hairline bg-line">
          {trackKeys.map((key) => {
            const t = p.tracks[key];
            const href =
              key === "referral"
                ? "/partners/apply"
                : `/partners/${key}`;
            return (
              <div key={key} className="bg-base p-8">
                <h3 className="text-lg text-ivory font-medium">{t.t}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{t.d}</p>
                <ul className="mt-5 flex flex-col gap-2.5 text-sm text-ivory-dim">
                  <li>{t.who}</li>
                  <li>{t.does}</li>
                  <li>{t.provides}</li>
                  <li>{t.revenue}</li>
                  <li>{t.training}</li>
                </ul>
                <div className="mt-6">
                  <Button href={L(href)} variant="secondary">
                    {t.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
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
