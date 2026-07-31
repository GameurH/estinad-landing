import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader, Button, Tag } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import {
  isLocale,
  lp,
  platformSlugs,
  type Locale,
} from "@/lib/i18n-config";
import { platformCards } from "@/lib/nav";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return platformSlugs.map((slug) => ({ slug }));
}

function EyebrowInline({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  if (!(platformSlugs as readonly string[]).includes(slug)) return {};
  const p = d.platform.sub[slug as (typeof platformSlugs)[number]];
  return pageMeta(l, `/platform/${slug}`, {
    title: p.title,
    description: p.intro,
  });
}

export default async function PlatformSubPage({ params }: Props) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  if (!(platformSlugs as readonly string[]).includes(slug)) notFound();
  const key = slug as (typeof platformSlugs)[number];
  const page = d.platform.sub[key];
  const labels = d.platform.subLabels;
  const others = platformCards(d).filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        cta={{ label: d.common.requestDemoArrow, href: L("/demo") }}
        secondaryCta={{ label: d.common.backToPlatform, href: L("/platform") }}
      />

      <Section>
        <SectionHeader eyebrow={labels.principlesEyebrow} title={labels.principlesTitle} />
        <div className="mt-12 grid gap-px md:grid-cols-3 hairline bg-line">
          {page.principles.map((p, i) => (
            <div key={p.t} className="bg-base p-8">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-lg text-ivory font-medium">{p.t}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader eyebrow={labels.detailEyebrow} title={labels.detailTitle} />
        <div className="mt-12 grid gap-px md:grid-cols-3 hairline bg-line">
          {page.details.map((dt) => (
            <div key={dt.heading} className="bg-base p-8">
              <Tag>{dt.heading}</Tag>
              <p className="mt-4 text-sm text-ivory-dim leading-relaxed">{dt.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={d.platform.moreEyebrow} title={d.platform.moreTitle} />
        <div className="mt-10 grid gap-px md:grid-cols-2 hairline bg-line">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={L(`/platform/${o.slug}`)}
              className="group bg-base p-7 hover:bg-surface transition-colors"
            >
              <EyebrowInline>{o.eyebrow}</EyebrowInline>
              <h3 className="mt-2 text-base text-ivory font-medium">{o.title}</h3>
              <span className="mt-3 inline-block text-xs text-accent group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                {d.common.readMore}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Button href={L("/demo")}>{d.common.requestDemoArrow}</Button>
        </div>
      </Section>
    </>
  );
}
