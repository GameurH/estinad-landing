import type { Metadata } from "next";
import { HardwareCatalogClient } from "@/components/hardware/HardwareCatalogClient";
import { getHardwareStoreCatalog } from "@/lib/hardware-store-catalog";
import { getDict } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n-config";
import { pageMeta } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return pageMeta(l, "/hardware/catalog", {
    title: d.hardware.catalog.meta.title,
    description: d.hardware.catalog.meta.description,
  });
}

export default async function HardwareCatalogPage({
  params,
  searchParams,
}: Props) {
  const { locale } = await params;
  const { category } = await searchParams;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const store = await getHardwareStoreCatalog(l);
  const initialCategoryId =
    typeof category === "string" && category.trim() ? category.trim() : "all";

  return (
    <section className="shell py-8 md:py-12">
      <HardwareCatalogClient
        locale={l}
        dictionary={d}
        store={store}
        initialCategoryId={initialCategoryId}
      />
    </section>
  );
}
