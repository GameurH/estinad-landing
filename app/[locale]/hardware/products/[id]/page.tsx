import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddStoreToCartButton } from "@/components/hardware/AddStoreToCartButton";
import { Button, Section } from "@/components/ui";
import {
  getHardwareStoreCatalog,
  getHardwareStoreProduct,
  isStoreProductPurchasable,
} from "@/lib/hardware-store-catalog";
import { formatMoneyMinor } from "@/lib/hardware-commerce";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const product = await getHardwareStoreProduct(id, l);
  if (!product) return {};
  return pageMeta(l, `/hardware/products/${id}`, {
    title: product.name,
    description:
      product.shortDescription ||
      product.longDescription ||
      `${product.name} — ESTINAD Certified Hardware`,
  });
}

export default async function HardwareStoreProductPage({ params }: Props) {
  const { locale, id } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const c = d.hardware.productDetail;
  const L = (h: string) => lp(l, h);

  const product = await getHardwareStoreProduct(id, l);
  if (!product) notFound();

  const catalog = await getHardwareStoreCatalog(l);
  const related = catalog.products
    .filter(
      (p) =>
        p.id !== product.id &&
        product.categoryId &&
        p.categoryId === product.categoryId,
    )
    .slice(0, 3);

  const purchasable = isStoreProductPurchasable(product);
  const imageSrc = product.images[0] ?? null;

  return (
    <>
      <section className="relative overflow-hidden hairline-b">
        <div className="absolute inset-0 grid-backdrop opacity-20" aria-hidden />
        <div className="shell relative py-10 md:py-14">
          <Link
            href={L("/hardware/catalog")}
            className="inline-flex items-center gap-2 min-h-11 text-sm text-ink-secondary hover:text-ink underline underline-offset-2"
          >
            <span className="inline-block rtl:-scale-x-100" aria-hidden>
              ←
            </span>
            {c.backToCatalog}
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 items-start">
            <div className="relative aspect-[4/3] bg-surface overflow-hidden rounded-[16px] border border-line lg:order-none">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="absolute inset-0 grid-backdrop opacity-40" aria-hidden />
              )}
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted border border-line rounded-full px-2.5 py-1">
                  {product.categoryName || d.hardware.catalog.uncategorized}
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted border border-line rounded-full px-2.5 py-1">
                  {purchasable ? c.available : c.quoteOnly}
                </span>
              </div>

              <h1 className="mt-5 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-ink leading-[1.1] [text-wrap:balance]">
                {product.name}
              </h1>

              {product.shortDescription && (
                <p className="mt-4 text-base leading-relaxed text-ink-secondary">
                  {product.shortDescription}
                </p>
              )}

              <p className="mt-6 text-2xl font-semibold text-ink">
                {formatMoneyMinor(product.price, product.currency, l)}
              </p>

              <dl className="mt-6 grid gap-2 text-sm text-ink-secondary">
                {product.brand && (
                  <div className="flex justify-between gap-4 border-b border-line py-2">
                    <dt>{c.brandLabel}</dt>
                    <dd className="text-ink font-medium">{product.brand}</dd>
                  </div>
                )}
                {product.sku && (
                  <div className="flex justify-between gap-4 border-b border-line py-2">
                    <dt>{c.skuLabel}</dt>
                    <dd className="font-mono text-ink">{product.sku}</dd>
                  </div>
                )}
                {product.barcode && (
                  <div className="flex justify-between gap-4 border-b border-line py-2">
                    <dt>{c.barcodeLabel}</dt>
                    <dd className="font-mono text-ink">{product.barcode}</dd>
                  </div>
                )}
                {product.categoryName && (
                  <div className="flex justify-between gap-4 border-b border-line py-2">
                    <dt>{c.categoryLabel}</dt>
                    <dd className="text-ink">{product.categoryName}</dd>
                  </div>
                )}
                <div className="flex justify-between gap-4 py-2">
                  <dt>{c.availabilityLabel}</dt>
                  <dd className="text-ink">
                    {purchasable ? c.available : c.quoteOnly}
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                {purchasable ? (
                  <AddStoreToCartButton
                    product={product}
                    label={c.addToCart}
                    addedLabel={c.addedToCart}
                    className="inline-flex items-center justify-center min-h-11 h-11 px-6 rounded-full text-sm font-medium bg-ink text-bg hover:bg-ink/85 transition-colors"
                  />
                ) : (
                  <Button
                    href={L(
                      `/hardware/quote?product=${encodeURIComponent(product.id)}`,
                    )}
                  >
                    {c.requestQuote}
                  </Button>
                )}
                <Button href={L("/hardware/cart")} variant="secondary">
                  {d.hardware.purchasePath.cartCta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {(product.longDescription || related.length > 0) && (
        <Section>
          {product.longDescription && (
            <div className="max-w-3xl min-w-0">
              <h2 className="text-xl font-semibold text-ink tracking-tight">
                {c.detailsHeading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-secondary whitespace-pre-wrap">
                {product.longDescription}
              </p>
            </div>
          )}

          {related.length > 0 && (
            <div className={product.longDescription ? "mt-16" : ""}>
              <h2 className="text-xl font-semibold text-ink tracking-tight">
                {c.relatedHeading}
              </h2>
              <div className="mt-8 grid gap-px md:grid-cols-3 hairline bg-line">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={L(`/hardware/products/${item.id}`)}
                    className="bg-bg p-5 hover:bg-surface transition-colors min-w-0"
                  >
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                      {item.brand || item.categoryName || "—"}
                    </p>
                    <p className="mt-2 text-sm font-medium text-ink line-clamp-2">
                      {item.name}
                    </p>
                    <p className="mt-3 text-sm text-ink">
                      {formatMoneyMinor(item.price, item.currency, l)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Section>
      )}
    </>
  );
}
