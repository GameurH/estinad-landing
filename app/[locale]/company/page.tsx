import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
import { companyNav } from "@/lib/nav";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return { title: d.nav.company, description: d.company.index.intro };
}

export default async function CompanyPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const idx = d.company.index;

  return (
    <>
      <PageHero eyebrow={idx.eyebrow} title={idx.title} intro={idx.intro} />
      <Section>
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 hairline bg-line">
          {companyNav(d).map((r) => (
            <Link
              key={r.href}
              href={L(r.href)}
              className="group bg-base p-8 hover:bg-surface transition-colors"
            >
              <h3 className="text-lg text-ivory font-medium">{r.label}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{r.desc}</p>
              <span className="mt-4 inline-block text-xs text-accent group-hover:translate-x-1 transition-transform">
                {d.common.readMore}
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
