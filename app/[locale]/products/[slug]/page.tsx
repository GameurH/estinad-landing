import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductPageView } from "@/components/ProductPage";
import { AppPageView } from "@/components/AppPage";
import { getDict } from "@/lib/i18n";
import {
  isLocale,
  productSlugs,
  appSlugs,
  type Locale,
} from "@/lib/i18n-config";

type Props = { params: Promise<{ locale: string; slug: string }> };

const allSlugs = [...productSlugs, ...appSlugs];

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

function isProductSlug(slug: string): slug is (typeof productSlugs)[number] {
  return (productSlugs as readonly string[]).includes(slug);
}

function isAppSlug(slug: string): slug is (typeof appSlugs)[number] {
  return (appSlugs as readonly string[]).includes(slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  if (isProductSlug(slug)) {
    const p = d.products.items[slug];
    return { title: p.name, description: p.oneLiner };
  }
  if (isAppSlug(slug)) {
    const a = d.apps.items[slug];
    return { title: a.name, description: a.oneLiner };
  }
  return {};
}

export default async function ProductRoute({ params }: Props) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);

  if (isProductSlug(slug)) {
    const p = d.products.items[slug];
    return (
      <ProductPageView
        data={{
          locale: l,
          slug,
          eyebrow: `${d.nav.products} / ${p.name}`,
          p,
          c: d.common,
        }}
      />
    );
  }

  if (isAppSlug(slug)) {
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

  notFound();
}
