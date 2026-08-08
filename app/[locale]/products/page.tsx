import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, Tag } from "@/components/ui";
import { Monogram } from "@/components/Monogram";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
import { availableProductsList, comingSoonProductsList } from "@/lib/nav";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return pageMeta(l, "/products", {
    title: d.nav.products,
    description: d.products.index.intro,
  });
}

function GroupHeader({ label }: { label: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="h-1.5 w-1.5 rotate-45 border border-accent" />
      <h2 className="text-sm font-mono uppercase tracking-[0.22em] text-muted">
        {label}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const idx = d.products.index;
  const available = availableProductsList(d);
  const comingSoon = comingSoonProductsList(d);

  return (
    <>
      <PageHero eyebrow={idx.eyebrow} title={idx.title} intro={idx.intro} />

      <Section>
        <GroupHeader label={idx.groupAvailable} />
        <div className="grid gap-px md:grid-cols-1 hairline bg-line">
          {available.map((p) => (
            <Link
              key={p.slug}
              href={L(`/products/${p.slug}`)}
              className="group bg-base p-8 md:p-10 hover:bg-surface transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Monogram className="h-5 w-5 text-accent" />
                  <h2 className="text-2xl text-ivory font-semibold">{p.name}</h2>
                </div>
                <span className="text-muted-2 group-hover:text-ivory group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all">
                  →
                </span>
              </div>
              <p className="mt-4 text-base text-ivory-dim leading-relaxed">{p.oneLiner}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Tag>{p.vertical}</Tag>
                <span className="inline-flex items-center font-mono text-[0.68rem] uppercase tracking-[0.18em] hairline px-2.5 py-1 text-accent border-accent/40">
                  {idx.tagAvailable}
                </span>
                <Tag>{idx.tagPricing}</Tag>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <GroupHeader label={idx.groupComingSoon} />
        <p className="mb-8 max-w-3xl text-sm text-muted leading-relaxed">{idx.comingSoonIntro}</p>
        <div className="grid gap-px md:grid-cols-2 hairline bg-line">
          {comingSoon.map((p) => (
            <Link
              key={p.slug}
              href={L(`/products/${p.slug}`)}
              className="group bg-base p-8 md:p-10 hover:bg-surface-2 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Monogram className="h-5 w-5 text-muted" />
                  <h2 className="text-xl text-ivory font-semibold">{p.name}</h2>
                </div>
                <span className="text-muted-2 group-hover:text-ivory group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all">
                  →
                </span>
              </div>
              <p className="mt-4 text-sm text-ivory-dim leading-relaxed">{p.oneLiner}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Tag>{p.vertical}</Tag>
                <span className="inline-flex items-center font-mono text-[0.68rem] uppercase tracking-[0.18em] hairline px-2.5 py-1 text-muted-2">
                  {idx.tagComingSoon}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
