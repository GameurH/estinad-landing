import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AppPageView } from "@/components/AppPage";
import { getDict } from "@/lib/i18n";
import { isLocale, componentSlugs, type Locale } from "@/lib/i18n-config";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return componentSlugs.map((slug) => ({ slug }));
}

function isComponentSlug(slug: string): slug is (typeof componentSlugs)[number] {
  return (componentSlugs as readonly string[]).includes(slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  if (!isComponentSlug(slug)) return {};
  const a = d.apps.items[slug];
  return pageMeta(l, `/products/components/${slug}`, {
    title: a.name,
    description: a.oneLiner,
  });
}

export default async function ComponentRoute({ params }: Props) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);

  if (!isComponentSlug(slug)) notFound();

  const a = d.apps.items[slug];
  return (
    <AppPageView
      data={{
        locale: l,
        slug,
        eyebrow: `${d.apps.index.eyebrow} / ${a.category}`,
        a,
        idx: d.apps.index,
        c: d.common,
      }}
    />
  );
}
