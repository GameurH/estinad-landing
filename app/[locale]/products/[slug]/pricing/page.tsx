import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PricingView } from "@/components/PricingPage";
import { PricingViewTracker } from "@/components/AnalyticsTrackers";
import { getDict } from "@/lib/i18n";
import { isLocale, pricingProductSlugs, type Locale } from "@/lib/i18n-config";
import { hasPricingPage, isProductSlug } from "@/lib/products";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return pricingProductSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  if (!isProductSlug(slug) || !hasPricingPage(slug)) return {};
  const p = d.products.items[slug];
  return pageMeta(l, `/products/${slug}/pricing`, {
    title: `${p.name} · ${d.common.pricing}`,
    description: p.oneLiner,
  });
}

export default async function ProductPricing({ params }: Props) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  if (!isProductSlug(slug) || !hasPricingPage(slug)) notFound();

  const p = d.products.items[slug];
  const tiers = d.pricing.tiers[slug as keyof typeof d.pricing.tiers];
  if (!tiers) notFound();

  return (
    <>
      <PricingViewTracker slug={slug} />
      <PricingView
        data={{
          locale: l,
          slug,
          eyebrow: `${d.nav.products} / ${p.name} / ${d.common.pricing}`,
          title: `${p.name} · ${d.common.pricing}`,
          productName: p.name,
          productOneLiner: p.oneLiner,
          productVertical: p.vertical,
          tiers,
          pr: d.pricing,
          c: d.common,
        }}
      />
    </>
  );
}
