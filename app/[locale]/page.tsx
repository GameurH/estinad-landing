import { Home, type HomeData } from "@/components/Home";
import { getDict } from "@/lib/i18n";
import { isLocale, productSlugs, type Locale } from "@/lib/i18n-config";
import { productsList, solutionsList, servicesList } from "@/lib/nav";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);

  const products = productsList(d);
  const productsMap = Object.fromEntries(products.map((p) => [p.slug, p]));

  const data: HomeData = {
    locale: l,
    h: d.home,
    productSlugs,
    products: productsMap,
    solutions: solutionsList(d),
    services: servicesList(d).map((s) => ({ slug: s.slug, name: s.name, oneLiner: s.oneLiner })),
  };

  return <Home data={data} />;
}
