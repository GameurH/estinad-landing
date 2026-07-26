import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { Header, type HeaderData } from "@/components/Header";
import { Footer, type FooterData } from "@/components/Footer";
import { themeInitScript } from "@/components/ThemeToggle";
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
  serviceNames,
  caseStudyNames,
} from "@/lib/nav";

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
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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
    },
    twitter: {
      card: "summary_large_image",
      title: d.meta.ogTitle,
      description: d.meta.ogDescription,
    },
    alternates: {
      languages: {
        en: "/en",
        fr: "/fr",
        ar: "/ar",
      },
    },
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
    serviceNames: serviceNames(d),
    caseStudyNames: caseStudyNames(d),
    resourcesNav: resourcesNav(d),
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
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} ${l === "ar" ? "locale-ar" : ""} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-base text-ivory">
        <Header data={headerData} />
        <main className="flex-1">{children}</main>
        <Footer data={footerData} />
      </body>
    </html>
  );
}
