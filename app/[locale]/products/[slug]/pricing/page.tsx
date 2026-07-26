import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PricingView } from "@/components/PricingPage";
import { getDict } from "@/lib/i18n";
import { isLocale, productSlugs, type Locale } from "@/lib/i18n-config";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  if (!(productSlugs as readonly string[]).includes(slug)) return {};
  const key = slug as (typeof productSlugs)[number];
  const p = d.products.items[key];
  return { title: `${p.name} · ${d.common.pricing}`, description: p.oneLiner };
}

export default async function ProductPricing({ params }: Props) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  if (!(productSlugs as readonly string[]).includes(slug)) notFound();
  const key = slug as (typeof productSlugs)[number];
  const p = d.products.items[key];

  return (
    <PricingView
      data={{
        locale: l,
        slug,
        eyebrow: `${d.nav.products} / ${p.name} / ${d.common.pricing}`,
        title: `${p.name} · ${d.common.pricing}`,
        productName: p.name,
        productOneLiner: p.oneLiner,
        productVertical: p.vertical,
        tiers: d.pricing.tiers[key],
        pr: d.pricing,
        c: d.common,
      }}
    />
  );
}
