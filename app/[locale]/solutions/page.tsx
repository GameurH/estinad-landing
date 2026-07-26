import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
import { solutionsList } from "@/lib/nav";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return { title: d.nav.solutions, description: d.solutions.index.intro };
}

export default async function SolutionsPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const idx = d.solutions.index;

  return (
    <>
      <PageHero eyebrow={idx.eyebrow} title={idx.title} intro={idx.intro} />
      <Section>
        <div className="grid gap-px sm:grid-cols-2 hairline bg-line">
          {solutionsList(d).map((s) => (
            <Link
              key={s.slug}
              href={L(`/solutions/${s.slug}`)}
              className="group bg-base p-8 hover:bg-surface transition-colors"
            >
              <p className="text-xs text-muted font-mono uppercase tracking-[0.18em]">{s.audience}</p>
              <h2 className="mt-3 text-2xl text-ivory font-semibold">{s.name}</h2>
              <p className="mt-3 text-sm text-ivory-dim leading-relaxed">{s.summary}</p>
              <span className="mt-5 inline-block text-xs text-accent group-hover:translate-x-1 transition-transform">
                {d.home.solutionsOverview.viewSolution}
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
