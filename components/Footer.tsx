import Link from "next/link";
import { Logo } from "./Monogram";
import { lp, type Locale } from "@/lib/i18n-config";

export type FooterData = {
  locale: Locale;
  footer: {
    ctaEyebrow: string;
    ctaTitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaTertiary: string;
    tagline: string;
    builtLine: string;
    rights: string;
    cols: {
      products: string;
      solutions: string;
      services: string;
      caseStudies: string;
      resources: string;
      company: string;
    };
    productLinks: { label: string; href: string }[];
    solutionLinks: { label: string; href: string }[];
    serviceLinks: { label: string; href: string }[];
    caseStudyLinks: { label: string; href: string }[];
  };
  resourcesNav: { label: string; href: string }[];
  companyNav: { label: string; href: string }[];
  legalNav: { label: string; href: string }[];
};

export function Footer({ data }: { data: FooterData }) {
  const { locale, footer, resourcesNav, companyNav, legalNav } = data;
  const year = new Date().getFullYear();

  const columns: { title: string; items: { label: string; href: string }[] }[] = [
    { title: footer.cols.products, items: footer.productLinks },
    { title: footer.cols.solutions, items: footer.solutionLinks },
    { title: footer.cols.services, items: footer.serviceLinks },
    { title: footer.cols.caseStudies, items: footer.caseStudyLinks },
    { title: footer.cols.resources, items: resourcesNav },
    { title: footer.cols.company, items: companyNav },
  ];

  return (
    <footer className="hairline-t bg-surface">
      {/* Final CTA band */}
      <div className="shell py-20 hairline-b">
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
            {footer.ctaEyebrow}
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium text-ivory leading-tight">
            {footer.ctaTitle}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={lp(locale, "/demo")}
              className="inline-flex items-center h-12 px-6 text-sm font-medium bg-accent text-base hover:bg-accent-dim transition-colors"
            >
              {footer.ctaPrimary}
            </Link>
            <Link
              href={lp(locale, "/products")}
              className="inline-flex items-center h-12 px-6 text-sm font-medium text-ivory hairline hover:bg-surface-2 transition-colors"
            >
              {footer.ctaSecondary}
            </Link>
            <Link
              href={lp(locale, "/services/custom-software")}
              className="inline-flex items-center h-12 px-6 text-sm font-medium text-ivory-dim hover:text-ivory transition-colors"
            >
              {footer.ctaTertiary}
            </Link>
          </div>
        </div>
      </div>

      {/* Link matrix */}
      <div className="shell py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          <div className="col-span-2 lg:col-span-1">
            <Link href={lp(locale, "/")} className="inline-flex" aria-label="ESTINAD">
              <Logo showWordmark />
            </Link>
            <p className="mt-5 text-sm text-muted max-w-xs leading-relaxed">
              {footer.tagline}
            </p>
            <p className="mt-3 text-xs text-muted-2">{footer.builtLine}</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-2">
                {col.title}
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={lp(locale, item.href)}
                      className="text-sm text-ivory-dim hover:text-ivory transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="mt-14 pt-8 hairline-t flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-xs text-muted-2 font-mono">
            © {year} ESTINAD. {footer.rights}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={lp(locale, item.href)}
                className="text-xs text-muted hover:text-ivory transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
