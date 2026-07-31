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
  productNames,
  solutionNames,
  caseStudyNames,
  platformNames,
  partnerNames,
} from "@/lib/nav";
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

  const headerData: HeaderData = {
    locale: l,
    nav: d.nav,
    productNames: productNames(d),
    solutionNames: solutionNames(d),
    caseStudyNames: caseStudyNames(d),
    platformNames: platformNames(d),
    partnerNames: partnerNames(d),
    companyNav: companyNav(d),
    langLabels: d.lang,
    themeLabels: d.theme,
  };

  const footerData: FooterData = {
    locale: l,
    footer: d.footer,
    resourcesNav: resourcesNav(d),
    companyNav: companyNav(d),
    legalNav: legalNav(d),
  };

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} ${l === "ar" ? `${cairo.className} locale-ar` : ""} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <SmoothScroll>
          <Header data={headerData} />
          <main className="flex-1">{children}</main>
          <Footer data={footerData} />
        </SmoothScroll>
      </body>
    </html>
  );
}
