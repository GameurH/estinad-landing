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
  return { title: d.resources.caseStudies.title, description: d.resources.caseStudies.intro };
}

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const c = d.resources.caseStudies;
  return (
    <ResourceSection
      locale={l}
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      items={c.items}
      sidebar={{
        title: d.resources.sidebar.title,
        nav: resourcesNav(d),
        ctaTitle: d.resources.sidebar.ctaTitle,
        ctaBody: d.resources.sidebar.ctaBody,
        cta: c.cta,
      }}
      readLabel={d.common.readMore}
    />
  );
}
