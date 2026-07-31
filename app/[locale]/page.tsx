import type { Metadata } from "next";
import { Home, type HomeData } from "@/components/Home";
import { getDict } from "@/lib/i18n";
import { isLocale, type Locale, productSlugs } from "@/lib/i18n-config";
import { pageMeta, absoluteUrl } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return pageMeta(l, "", {
    title: d.meta.title,
    description: d.meta.description,
    openGraph: {
      title: d.homeV2.hero.title,
      description: d.homeV2.hero.sub,
    },
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);

  const data: HomeData = {
    locale: l,
    h2: d.homeV2,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://estinad.com/#org",
        name: "ESTINAD",
        url: "https://estinad.com",
        logo: "https://estinad.com/full-logo.png",
        description: d.meta.ogDescription,
      },
      {
        "@type": "WebSite",
        "@id": "https://estinad.com/#site",
        url: absoluteUrl(l, ""),
        name: "ESTINAD",
        publisher: { "@id": "https://estinad.com/#org" },
        inLanguage: l,
      },
      ...productSlugs.map((slug) => {
        const p = d.products.items[slug];
        return {
          "@type": "SoftwareApplication",
          name: p.name,
          applicationCategory: "BusinessApplication",
          description: p.oneLiner,
          url: absoluteUrl(l, `/products/${slug}`),
          brand: { "@type": "Organization", name: "ESTINAD" },
        };
      }),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Home data={data} />
    </>
  );
}
