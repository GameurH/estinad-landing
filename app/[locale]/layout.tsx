import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { Header, type HeaderData } from "@/components/Header";
import { Footer, type FooterData } from "@/components/Footer";
import { themeInitScript } from "@/components/ThemeToggle";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { getDict } from "@/lib/i18n";
import {
  locales,
  localeMeta,
  isLocale,
  type Locale,
} from "@/lib/i18n-config";
import {
  resourcesNav,
  companyNav,
  legalNav,
  primaryNavItems,
  footerProductsNav,
  availableProductsList,
  portfolioProductsList,
  solutionsList,
} from "@/lib/nav";
import { getHardwareMegaNav } from "@/lib/hardware-mega-nav";
import { hreflangMeta } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0c" },
  ],
  width: "device-width",
  initialScale: 1,
};

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return {
    metadataBase: new URL("https://estinad.com"),
    title: {
      default: d.meta.title,
      template: d.meta.titleTemplate,
    },
    description: d.meta.description,
    appleWebApp: {
      title: "ESTINAD",
    },
    openGraph: {
      title: d.meta.ogTitle,
      description: d.meta.ogDescription,
      type: "website",
      siteName: "ESTINAD",
      locale: l,
      images: [
        {
          url: "/images/v2/og.png",
          width: 1536,
          height: 1024,
          alt: "ESTINAD — Business operating systems",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: d.meta.ogTitle,
      description: d.meta.ogDescription,
      images: ["/images/v2/og.png"],
    },
    alternates: hreflangMeta(l, ""),
  };
}

export default async function LocaleLayout({ children, params }: Props & { children: React.ReactNode }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const d = getDict(l);
  const meta = localeMeta[l];

  const companyItems = companyNav(d);
  const resourceItems = resourcesNav(d);
  const hardwareMegaNav = await getHardwareMegaNav(l);

  const headerData: HeaderData = {
    locale: l,
    nav: d.nav,
    common: d.common,
    primaryNav: primaryNavItems(d),
    availableProducts: availableProductsList(d),
    comingSoonProducts: portfolioProductsList(d),
    solutions: solutionsList(d),
    hardwareMegaNav,
    resourcesLinks: resourceItems.map((item) => ({
      label: item.label,
      href: item.href,
      desc: item.desc,
    })),
    companyLinks: companyItems.map((item, i) => ({
      label: item.label,
      href: item.href,
      desc: item.desc,
      featured: i === companyItems.length - 1,
      meta: i === companyItems.length - 1 ? d.nav.contact : undefined,
    })),
    productsMega: {
      intro: d.nav.megaProductsIntro,
      groupAvailable: d.products.index.groupAvailable,
      groupPortfolio: d.products.index.groupPortfolio,
      statuses: d.products.index.statuses,
      requestQuote: d.common.requestQuote,
      viewPricing: d.common.viewPricing,
      currentLabel: d.nav.currentLabel,
      viewAllProducts: d.nav.megaProductsExploreAll,
      highlights: d.nav.megaProductsHighlights,
      helpTitle: d.nav.megaProductsHelpTitle,
      helpBody: d.nav.megaProductsHelpBody,
      talkExpert: d.nav.megaProductsTalkExpert,
    },
    solutionsMega: {
      intro: d.nav.megaSolutionsIntro,
      viewAll: d.common.allSolutions,
      eyebrow: d.nav.megaSolutions.eyebrow,
      title: d.nav.megaSolutions.title,
      body: d.nav.megaSolutions.body,
      highlights: d.nav.megaSolutions.highlights,
      helpTitle: d.nav.megaSolutions.helpTitle,
      helpBody: d.nav.megaSolutions.helpBody,
      talkExpert: d.nav.megaSolutions.talkExpert,
      viewAllCta: d.nav.megaSolutions.viewAll,
      trustTitle: d.nav.megaSolutions.trustTitle,
      trustBody: d.nav.megaSolutions.trustBody,
      tabs: d.nav.megaSolutions.tabs,
      exploreCategory: d.nav.megaSolutions.exploreCategory,
      exploreTitle: d.nav.megaSolutions.exploreTitle,
      exploreBody: d.nav.megaSolutions.exploreBody,
      cards: d.nav.megaSolutions.cards,
    },
    hardwareMega: {
      intro: d.nav.megaHardwareIntro,
      eyebrow: d.nav.megaHardware.eyebrow,
      title: d.nav.megaHardware.title,
      body: d.nav.megaHardware.body,
      categoriesLabel: d.nav.megaHardware.categoriesLabel,
      featuredLabel: d.nav.megaHardware.featuredLabel,
      viewCatalog: d.nav.megaHardware.viewCatalog,
      catalogHref: d.nav.megaHardware.catalogHref,
      requestQuote: d.nav.megaHardware.requestQuote,
      quoteHref: d.nav.megaHardware.quoteHref,
      checkCompatibility: d.nav.megaHardware.checkCompatibility,
      compatibilityHref: d.nav.megaHardware.compatibilityHref,
      emptyHint: d.nav.megaHardware.emptyHint,
    },
    resourcesMega: {
      intro: d.nav.megaResourcesIntro,
      viewAll: d.nav.resources,
      viewAllHref: "/resources",
    },
    companyMega: {
      intro: d.company.index.intro,
      viewAll: d.nav.company,
      viewAllHref: "/company",
    },
    langLabels: d.lang,
    themeLabels: d.theme,
    mobileNav: d.mobileNav,
  };

  const footerData: FooterData = {
    locale: l,
    footer: d.footer,
    productsNav: footerProductsNav(d),
    productsExploreLabel: d.nav.megaProductsExploreAll,
    resourcesNav: resourcesNav(d),
    companyNav: companyNav(d),
    legalNav: legalNav(d),
  };

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      data-primary-nav="expanded"
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} ${l === "ar" ? `${cairo.className} locale-ar` : ""} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {/* Header outside Lenis so position:fixed / z-index stay viewport-rooted. */}
        <Header data={headerData} />
        <SmoothScroll>
          <main className="flex-1">{children}</main>
          <Footer data={footerData} />
        </SmoothScroll>
      </body>
    </html>
  );
}
