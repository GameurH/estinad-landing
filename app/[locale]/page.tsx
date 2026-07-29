import { Home, type HomeData } from "@/components/Home";
import { getDict } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n-config";
import { productsList } from "@/lib/nav";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);

  const data: HomeData = {
    locale: l,
    h2: d.homeV2,
    products: productsList(d),
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
        url: `https://estinad.com/${l}`,
        name: "ESTINAD",
        publisher: { "@id": "https://estinad.com/#org" },
        inLanguage: l,
      },
      {
        "@type": "FAQPage",
        mainEntity: d.homeV2.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
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
