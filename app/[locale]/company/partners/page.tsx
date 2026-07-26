import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader, Button } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return { title: d.company.partners.title, description: d.company.partners.intro };
}

export default async function PartnersPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const p = d.company.partners;

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        intro={p.intro}
        cta={{ label: p.cta, href: L("/company/contact") }}
      />

      <Section>
        <div className="grid gap-px md:grid-cols-3 hairline bg-line">
          {p.tracks.map((t) => (
            <div key={t.t} className="bg-base p-8">
              <h3 className="text-lg text-ivory font-medium">{t.t}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{t.d}</p>
              <ul className="mt-5 flex flex-col gap-2">
                {t.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-ivory-dim">
                    <span className="mt-2 h-1.5 w-1.5 rotate-45 bg-accent flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader eyebrow={p.howEyebrow} title={p.howTitle} intro={p.howIntro} />
        <div className="mt-10">
          <Button href={L("/company/contact")}>{p.applyCta}</Button>
        </div>
      </Section>
    </>
  );
}
