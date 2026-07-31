import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader, Eyebrow, Button } from "@/components/ui";
import { Monogram } from "@/components/Monogram";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
import { productsList, platformCards } from "@/lib/nav";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return pageMeta(l, "/platform", {
    title: d.platform.overview.title,
    description: d.platform.overview.intro,
  });
}

export default async function PlatformPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const o = d.platform.overview;

  return (
    <>
      <PageHero
        eyebrow={o.eyebrow}
        title={o.title}
        intro={o.intro}
        cta={{ label: o.cta1, href: L("/demo") }}
        secondaryCta={{ label: o.cta2, href: L("/products") }}
      />

      <Section>
        <SectionHeader eyebrow={o.pillarsEyebrow} title={o.pillarsTitle} intro={o.pillarsIntro} />
        <div className="mt-12 grid gap-px md:grid-cols-3 hairline bg-line">
          {o.pillars.map((p, i) => (
            <div key={p.t} className="bg-base p-8">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-xl text-ivory font-medium">{p.t}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader eyebrow={o.stackEyebrow} title={o.stackTitle} />
        <div className="mt-12 max-w-3xl">
          <div className="hairline bg-base">
            <div className="p-6 hairline-b">
              <Eyebrow>{o.stackVertical}</Eyebrow>
              <div className="mt-4 grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-line">
                {productsList(d).map((p) => (
                  <Link
                    key={p.slug}
                    href={L(`/products/${p.slug}`)}
                    className="bg-base p-4 hover:bg-surface-2 transition-colors text-center"
                  >
                    <div className="font-mono text-xs text-accent">{p.glyph}</div>
                    <div className="mt-1 text-sm text-ivory">{p.short}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="p-6 hairline-b">
              <Eyebrow>{o.stackShared}</Eyebrow>
              <div className="mt-4 grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-line">
                {o.stackServices.map((s) => (
                  <div key={s} className="bg-base p-4 text-center text-sm text-ivory-dim">
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 flex items-center gap-4">
              <Monogram className="h-8 w-8 text-ivory" />
              <div>
                <Eyebrow>{o.stackOs}</Eyebrow>
                <p className="mt-1 text-sm text-ivory-dim">{o.stackOsLine}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={o.deepEyebrow} title={o.deepTitle} />
        <div className="mt-12 grid gap-px md:grid-cols-3 hairline bg-line">
          {platformCards(d).map((p) => (
            <Link
              key={p.slug}
              href={L(`/platform/${p.slug}`)}
              className="group bg-base p-7 hover:bg-surface transition-colors"
            >
              <Eyebrow>{p.eyebrow}</Eyebrow>
              <h3 className="mt-2 text-lg text-ivory font-medium">{p.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{p.intro}</p>
              <span className="mt-5 inline-block text-xs text-accent group-hover:translate-x-1 transition-transform">
                {d.common.readMore}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Button href={L("/demo")} variant="secondary">{o.deepCta}</Button>
        </div>
      </Section>
    </>
  );
}
