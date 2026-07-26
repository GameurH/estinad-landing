import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader, Tag } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return { title: d.company.careers.title, description: d.company.careers.intro };
}

export default async function CareersPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const c = d.company.careers;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

      <Section>
        <SectionHeader eyebrow={c.howEyebrow} title={c.howTitle} />
        <div className="mt-10 max-w-3xl flex flex-col gap-6">
          {c.how.map((h) => (
            <p key={h} className="text-base md:text-lg text-ivory-dim leading-relaxed">{h}</p>
          ))}
        </div>
      </Section>

      <Section className="bg-surface" id="roles">
        <SectionHeader eyebrow={c.rolesEyebrow} title={c.rolesTitle} />
        <div className="mt-12 hairline bg-base">
          {c.roles.map((r, i) => (
            <a
              key={r.role}
              href={L("/company/contact")}
              className={`flex flex-col md:flex-row md:items-center gap-3 md:gap-6 p-6 hover:bg-surface-2 transition-colors ${i > 0 ? "hairline-b" : ""}`}
            >
              <span className="flex-1 text-base text-ivory font-medium">{r.role}</span>
              <span className="text-sm text-muted">{r.loc}</span>
              <Tag>{r.team}</Tag>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <a href={L("/company/contact")} className="text-sm text-accent hover:underline">{c.applyCta}</a>
        </div>
      </Section>
    </>
  );
}
