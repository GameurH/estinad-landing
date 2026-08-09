import Image from "next/image";
import Link from "next/link";
import { ProductStatusBadge } from "@/components/products/ProductStatusBadge";
import { productIcon } from "@/components/nav/ProductIcons";
import { lp, type Locale, type ProductSlug, type ProductStatus } from "@/lib/i18n-config";
import { portfolioGridOrder, productMedia } from "@/lib/product-media";
import type { ProductCard } from "@/lib/nav";

export type ProductPortfolioLabels = {
  eyebrow?: string;
  title: string;
  description: string;
  statuses: Record<ProductStatus, string>;
  viewProduct: string;
  exploreAll?: string;
  cardDescriptions?: Partial<Record<ProductSlug, string>>;
};

type Props = {
  locale: Locale;
  products: ProductCard[];
  labels: ProductPortfolioLabels;
  variant?: "full" | "preview";
  showHeader?: boolean;
  showExploreCta?: boolean;
  className?: string;
};

function productBySlug(products: ProductCard[], slug: ProductSlug) {
  return products.find((p) => p.slug === slug);
}

function cardDescription(
  product: ProductCard,
  labels: ProductPortfolioLabels,
): string {
  const keyed = labels.cardDescriptions?.[product.slug as ProductSlug];
  return keyed ?? product.oneLiner;
}

function FeaturedRetailCard({
  product,
  locale,
  statusLabel,
  viewProductLabel,
  description,
}: {
  product: ProductCard;
  locale: Locale;
  statusLabel: string;
  viewProductLabel: string;
  description: string;
}) {
  const L = (href: string) => lp(locale, href);
  const src = productMedia.retail.featured;

  return (
    <Link
      href={L(`/products/${product.slug}`)}
      className="group relative grid overflow-hidden rounded-[28px] bg-pure-black text-bg shadow-[0_24px_64px_rgba(0,0,0,0.18)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(0,0,0,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 85% 45%, rgba(255,255,255,0.08), transparent 55%), radial-gradient(ellipse 50% 40% at 15% 0%, rgba(255,255,255,0.06), transparent 50%)",
        }}
      />

      <div className="relative z-10 flex flex-col p-7 sm:p-9 lg:p-11 lg:pe-6">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-white/10 bg-white/[0.07] text-bg shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
            {productIcon("retail", "h-5 w-5")}
          </span>
          <ProductStatusBadge
            status="available"
            label={statusLabel}
            size="md"
            tone="inverse"
          />
        </div>

        <p className="mt-8 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/40">
          {product.vertical}
        </p>
        <h3 className="mt-3 text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold tracking-[-0.03em] text-bg">
          {product.name}
        </h3>
        <p className="mt-4 max-w-md text-[0.975rem] leading-relaxed text-white/65 sm:text-base">
          {description}
        </p>

        <span className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-bg">
          {viewProductLabel}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
            →
          </span>
        </span>
      </div>

      <div className="relative min-h-[240px] sm:min-h-[280px] lg:min-h-[340px]">
        <div
          className="pointer-events-none absolute inset-x-[8%] bottom-[6%] top-[10%] rounded-[40%] bg-white/[0.04] blur-3xl transition-opacity duration-500 group-hover:opacity-80"
          aria-hidden
        />
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="object-contain object-center p-4 sm:p-6 lg:p-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035] group-hover:-translate-y-1"
          priority
        />
      </div>
    </Link>
  );
}

function PortfolioProductCard({
  product,
  locale,
  statusLabel,
  viewProductLabel,
  description,
}: {
  product: ProductCard;
  locale: Locale;
  statusLabel: string;
  viewProductLabel: string;
  description: string;
}) {
  const L = (href: string) => lp(locale, href);
  const media = productMedia[product.slug as ProductSlug];
  const iconSrc = media?.icon;

  return (
    <Link
      href={L(`/products/${product.slug}`)}
      className="group relative isolate flex min-h-[220px] flex-col overflow-hidden rounded-[24px] border border-line bg-card p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-line-strong hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:min-h-[240px] sm:p-6"
    >
      <div className="relative z-10 flex items-start justify-between gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-line bg-surface text-ink transition-colors duration-300 group-hover:border-line-strong group-hover:bg-surface-2">
          {productIcon(product.slug, "h-4 w-4")}
        </span>
        <ProductStatusBadge
          status={product.status}
          label={statusLabel}
          tone="spectrum"
        />
      </div>

      <div className="relative z-10 mt-5 max-w-[54%] pe-2 sm:max-w-[52%]">
        <h3 className="text-[1.0625rem] font-semibold tracking-tight text-ink sm:text-lg">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-secondary line-clamp-3">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink/80 transition-colors duration-300 group-hover:text-ink">
          {viewProductLabel}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
            →
          </span>
        </span>
      </div>

      {iconSrc ? (
        <div className="pointer-events-none absolute inset-y-0 end-0 z-0 w-[48%] sm:w-[46%]">
          <div
            className="absolute inset-[18%_0_6%_10%] rounded-[40%] bg-gradient-to-t from-black/[0.04] via-transparent to-transparent blur-xl dark:from-white/[0.05]"
            aria-hidden
          />
          <Image
            src={iconSrc}
            alt=""
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 200px"
            className="object-contain object-[100%_92%] rtl:object-[0%_92%] p-1 sm:p-2 mix-blend-lighten dark:mix-blend-normal opacity-[0.96] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:-translate-y-2 group-hover:-translate-x-1 rtl:group-hover:translate-x-1"
          />
        </div>
      ) : null}
    </Link>
  );
}

export function ProductPortfolio({
  locale,
  products,
  labels,
  variant = "full",
  showHeader = true,
  showExploreCta = false,
  className = "",
}: Props) {
  const featured =
    productBySlug(products, "retail") ??
    products.find((p) => p.status === "available");
  const grid = portfolioGridOrder
    .map((slug) => productBySlug(products, slug))
    .filter((p): p is ProductCard => Boolean(p));

  const L = (href: string) => lp(locale, href);
  const isPreview = variant === "preview";

  return (
    <div className={className}>
      {showHeader ? (
        <div className="mx-auto max-w-3xl text-center">
          {labels.eyebrow ? (
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              {labels.eyebrow}
            </p>
          ) : null}
          <h2
            className={`font-semibold tracking-[-0.03em] text-ink [text-wrap:balance] ${
              labels.eyebrow ? "mt-4" : ""
            } text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1]`}
          >
            {labels.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-ink-secondary [text-wrap:pretty]">
            {labels.description}
          </p>
        </div>
      ) : null}

      <div className={showHeader ? "mt-12 md:mt-14" : ""}>
        {featured ? (
          <FeaturedRetailCard
            product={featured}
            locale={locale}
            statusLabel={labels.statuses.available}
            viewProductLabel={labels.viewProduct}
            description={cardDescription(featured, labels)}
          />
        ) : null}

        <div
          className={`grid gap-4 sm:gap-5 ${
            featured ? "mt-4 sm:mt-5" : ""
          } grid-cols-1 md:grid-cols-2 xl:grid-cols-3`}
        >
          {grid.map((product) => (
            <PortfolioProductCard
              key={product.slug}
              product={product}
              locale={locale}
              statusLabel={labels.statuses[product.status]}
              viewProductLabel={labels.viewProduct}
              description={cardDescription(product, labels)}
            />
          ))}
        </div>
      </div>

      {showExploreCta && labels.exploreAll ? (
        <div className={`flex justify-center ${isPreview ? "mt-12" : "mt-14"}`}>
          <Link
            href={L("/products")}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong bg-card px-6 text-sm font-medium text-ink shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
          >
            <span>{labels.exploreAll.replace(/\s*→\s*$/, "")}</span>
            <span className="inline-block rtl:-scale-x-100" aria-hidden>
              →
            </span>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
