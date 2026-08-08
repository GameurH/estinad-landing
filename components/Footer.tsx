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
      platform: string;
      partners: string;
      caseStudies: string;
      resources: string;
      company: string;
      hardware: string;
    };
    productLinks: { label: string; href: string }[];
    solutionLinks: { label: string; href: string }[];
    serviceLinks: { label: string; href: string }[];
    caseStudyLinks: { label: string; href: string }[];
    platformLinks: { label: string; href: string }[];
    partnerLinks: { label: string; href: string }[];
    hardwareLinks: { label: string; href: string }[];
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
    { title: footer.cols.hardware, items: footer.hardwareLinks },
    { title: footer.cols.resources, items: resourcesNav },
    { title: footer.cols.company, items: companyNav },
  ];

  return (
    <footer className="bg-inv-bg text-inv-fg">
      <div className="shell py-24 md:py-32 border-b border-inv-line">
        <div className="max-w-3xl">
          <div className="eyebrow text-inv-muted">{footer.ctaEyebrow}</div>
          <h2 className="mt-5 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold text-inv-fg leading-[1.1] tracking-[-0.02em] [text-wrap:balance]">
            {footer.ctaTitle}
          </h2>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={lp(locale, "/quote")}
              className="inline-flex items-center h-12 px-7 rounded-full text-[0.9375rem] font-medium bg-inv-fg text-inv-bg hover:bg-inv-fg/85 transition-colors"
            >
              {footer.ctaPrimary}
            </Link>
            <Link
              href={lp(locale, "/products")}
              className="inline-flex items-center h-12 px-7 rounded-full text-[0.9375rem] font-medium text-inv-fg border border-inv-line-strong hover:border-inv-fg/50 transition-colors"
            >
              {footer.ctaSecondary}
            </Link>
            <Link
              href={lp(locale, "/company/contact")}
              className="inline-flex items-center h-12 px-4 text-[0.9375rem] font-medium text-inv-fg-dim hover:text-inv-fg transition-colors"
            >
              {footer.ctaTertiary}
            </Link>
          </div>
        </div>
      </div>

      <div className="shell py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="col-span-2 lg:col-span-1">
            <Link href={lp(locale, "/")} className="inline-flex" aria-label="ESTINAD">
              <span className="inline-block rounded-[2px] bg-inv-fg p-1.5">
                <Logo />
              </span>
            </Link>
            <p className="mt-5 text-sm text-inv-fg-dim max-w-xs leading-relaxed">
              {footer.tagline}
            </p>
            <p className="mt-3 text-xs text-inv-muted">{footer.builtLine}</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-inv-muted">
                {col.title}
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={`${col.title}-${item.href}-${item.label}`}>
                    <Link
                      href={lp(locale, item.href)}
                      className="text-sm text-inv-fg-dim hover:text-inv-fg transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-inv-line flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-xs text-inv-muted font-mono">
            © {year} ESTINAD. {footer.rights}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={lp(locale, item.href)}
                className="text-xs text-inv-fg-dim hover:text-inv-fg transition-colors"
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
