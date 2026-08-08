import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductPageView } from "@/components/ProductPage";
import { getDict } from "@/lib/i18n";
import {
  isLocale,
  productAvailability,
  productSlugs,
  type Locale,
} from "@/lib/i18n-config";
import { isProductSlug } from "@/lib/products";
import { pageMeta } from "@/lib/seo";
import { ProductViewTracker } from "@/components/AnalyticsTrackers";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  if (!isProductSlug(slug)) return {};
  const p = d.products.items[slug];
  const status =
    productAvailability[slug] === "available"
      ? d.common.availableLabel
      : d.common.comingSoonLabel;
  return pageMeta(l, `/products/${slug}`, {
    title: `${p.name} · ${status}`,
    description: p.oneLiner,
  });
}

export default async function ProductRoute({ params }: Props) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);

  if (!isProductSlug(slug)) notFound();

  const p = d.products.items[slug];
  const availability = productAvailability[slug];
  const statusLabel =
    availability === "available" ? d.common.availableLabel : d.common.comingSoonLabel;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Local-first hybrid (LAN + cloud sync)",
    description: p.oneLiner,
    offers: undefined,
    brand: { "@type": "Organization", name: "ESTINAD" },
    ...(availability === "coming-soon"
      ? { releaseNotes: "Coming soon — not available for purchase or deployment yet." }
      : {}),
  };

  return (
    <>
      <ProductViewTracker slug={slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ProductPageView
        data={{
          locale: l,
          slug,
          eyebrow: `${d.nav.products} / ${p.name} / ${statusLabel}`,
          availability,
          p,
          c: d.common,
          homeLabel: d.nav.home,
          productsLabel: d.nav.products,
          retailLanding: slug === "retail" ? d.products.items.retail.landing : undefined,
          restaurantLanding:
            slug === "restaurant" ? d.products.items.restaurant.landing : undefined,
          invoicesLanding:
            slug === "invoices" ? d.products.items.invoices.landing : undefined,
        }}
      />
    </>
  );
}
