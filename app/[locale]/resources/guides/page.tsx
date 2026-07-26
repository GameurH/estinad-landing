import type { Metadata } from "next";
import { ResourceSection } from "@/components/ResourceSection";
import { getDict } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n-config";
import { resourcesNav } from "@/lib/nav";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return { title: d.resources.guides.title, description: d.resources.guides.intro };
}

export default async function GuidesPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const g = d.resources.guides;
  return (
    <ResourceSection
      locale={l}
      eyebrow={g.eyebrow}
      title={g.title}
      intro={g.intro}
      items={g.items}
      sidebar={{
        title: d.resources.sidebar.title,
        nav: resourcesNav(d),
        ctaTitle: d.resources.sidebar.ctaTitle,
        ctaBody: d.resources.sidebar.ctaBody,
        cta: d.resources.sidebar.cta,
      }}
      readLabel={d.common.readMore}
    />
  );
}
