import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { ProductPortfolio } from "@/components/products/ProductPortfolio";
import { getDict } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n-config";
import { productsList } from "@/lib/nav";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return pageMeta(l, "/products", {
    title: d.products.index.title,
    description: d.products.index.description,
  });
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const idx = d.products.index;
  const products = productsList(d);

  return (
    <Section className="pt-28 md:pt-36 pb-20 md:pb-28 bg-surface">
      <ProductPortfolio
        locale={l}
        products={products}
        labels={{
          eyebrow: idx.eyebrow,
          title: idx.title,
          description: idx.description,
          statuses: idx.statuses,
          viewProduct: idx.viewProduct,
          cardDescriptions: idx.cardDescriptions,
        }}
        variant="full"
        showHeader
      />
    </Section>
  );
}
