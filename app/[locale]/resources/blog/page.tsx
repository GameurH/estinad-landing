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
  return { title: d.resources.blog.title, description: d.resources.blog.intro };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const b = d.resources.blog;
  return (
    <ResourceSection
      locale={l}
      eyebrow={b.eyebrow}
      title={b.title}
      intro={b.intro}
      items={b.items}
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
