"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { AddStoreToCartButton } from "@/components/hardware/AddStoreToCartButton";
import { Button } from "@/components/ui";
import type { Dictionary } from "@/lib/dictionaries/types";
import { formatMoneyMinor } from "@/lib/hardware-commerce";
import type {
  HardwareStoreCatalog,
  HardwareStoreCategory,
  HardwareStoreProduct,
} from "@/lib/hardware-store-catalog";
import { isStoreProductPurchasable } from "@/lib/hardware-store-catalog";
import type { Locale } from "@/lib/i18n-config";
import { lp } from "@/lib/i18n-config";

type SortMode = "featured" | "price-asc" | "price-desc" | "name-asc";
type PricePreset = "any" | "u10" | "10-30" | "30-80" | "80-150" | "o150";

function productMatchesQuery(product: HardwareStoreProduct, q: string) {
  if (!q) return true;
  const hay = [
    product.name,
    product.shortDescription,
    product.longDescription,
    product.sku,
    product.barcode,
    product.brand,
    product.categoryName,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

function priceInPreset(price: number, preset: PricePreset) {
  switch (preset) {
    case "u10":
      return price < 10_000;
    case "10-30":
      return price >= 10_000 && price < 30_000;
    case "30-80":
      return price >= 30_000 && price < 80_000;
    case "80-150":
      return price >= 80_000 && price < 150_000;
    case "o150":
      return price >= 150_000;
    default:
      return true;
  }
}

function categoryIcon(pbId: string | null, className = "h-4 w-4") {
  const key = (pbId || "").toLowerCase();
  if (key.includes("scanner") || key.includes("barcode")) {
    return (
      <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M4 5h2M4 10h3M4 15h2M9 5h7v10H9z" strokeLinecap="round" />
      </svg>
    );
  }
  if (key.includes("printer") || key.includes("receipt")) {
    return (
      <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M6 4h8v3H6zM5 9h10v5H5zM7 14h6v2H7z" strokeLinejoin="round" />
      </svg>
    );
  }
  if (key.includes("drawer") || key.includes("cash")) {
    return (
      <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="3.5" y="5" width="13" height="10" rx="1.5" />
        <path d="M3.5 9h13" />
      </svg>
    );
  }
  if (key.includes("card") || key.includes("payment")) {
    return (
      <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="3" y="5.5" width="14" height="9" rx="1.5" />
        <path d="M3 8.5h14" />
      </svg>
    );
  }
  if (key.includes("cable") || key.includes("accessor") || key.includes("software")) {
    return (
      <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="10" cy="10" r="5.5" />
        <path d="M10 7.5v5M7.5 10h5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="4" y="4" width="12" height="12" rx="2" />
      <path d="M7 8h6M7 12h4" strokeLinecap="round" />
    </svg>
  );
}

export function HardwareCatalogClient({
  locale,
  dictionary,
  store,
  initialCategoryId = "all",
}: {
  locale: Locale;
  dictionary: Dictionary;
  store: HardwareStoreCatalog;
  initialCategoryId?: string;
}) {
  const L = (h: string) => lp(locale, h);
  const c = dictionary.hardware.catalog;
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState<string>(() => {
    if (
      initialCategoryId &&
      initialCategoryId !== "all" &&
      store.categories.some((cat) => cat.id === initialCategoryId)
    ) {
      return initialCategoryId;
    }
    return "all";
  });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [pricePreset, setPricePreset] = useState<PricePreset>("any");
  const [sort, setSort] = useState<SortMode>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const deferredQuery = useDeferredValue(query);

  const activeCategories = useMemo(
    () => store.categories.filter((cat) => cat.count > 0),
    [store.categories],
  );

  const filteredProducts = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    const list = store.products.filter((product) => {
      if (categoryId !== "all" && product.categoryId !== categoryId) {
        return false;
      }
      if (
        selectedCategories.length > 0 &&
        (!product.categoryId || !selectedCategories.includes(product.categoryId))
      ) {
        return false;
      }
      if (!priceInPreset(product.price, pricePreset)) return false;
      return productMatchesQuery(product, q);
    });

    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    else if (sort === "name-asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name, locale));
    } else {
      sorted.sort((a, b) => a.name.localeCompare(b.name, locale));
    }
    return sorted;
  }, [
    store.products,
    deferredQuery,
    categoryId,
    selectedCategories,
    pricePreset,
    sort,
    locale,
  ]);

  const currency = store.tenant?.currency ?? "DZD";

  function resetFilters() {
    setCategoryId("all");
    setSelectedCategories([]);
    setPricePreset("any");
    setQuery("");
    setSort("featured");
  }

  function toggleCategoryCheckbox(id: string) {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
    setCategoryId("all");
  }

  const chip = (active: boolean) =>
    `inline-flex items-center gap-2 justify-center min-h-10 h-10 px-3.5 rounded-full text-sm font-medium border transition-colors ${
      active
        ? "bg-ink text-bg border-ink"
        : "bg-transparent text-ink-secondary border-transparent hover:bg-surface hover:text-ink"
    }`;

  const navCategories: Array<
    HardwareStoreCategory | { id: "all"; name: string; pbId: null; count: number }
  > = [
    {
      id: "all",
      name: c.filtersAllProducts,
      pbId: null,
      count: store.products.length,
    },
    ...activeCategories,
  ];

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {/* Top toolbar — Attachment 2 */}
      <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div className="min-w-0 max-w-md">
          <h1 className="text-[clamp(2rem,3.5vw,2.75rem)] font-semibold tracking-tight text-ink leading-none">
            {c.title}
          </h1>
          <p className="mt-2 text-sm md:text-base text-ink-secondary leading-relaxed">
            {c.intro}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto xl:max-w-3xl xl:flex-1 xl:justify-end">
          <label className="relative block w-full sm:max-w-md min-w-0">
            <span className="sr-only">{c.searchLabel}</span>
            <span className="pointer-events-none absolute inset-y-0 start-3.5 flex items-center text-muted" aria-hidden>
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="8.5" cy="8.5" r="5" />
                <path d="M12.5 12.5 16 16" strokeLinecap="round" />
              </svg>
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={c.searchPlaceholder}
              autoComplete="off"
              className="w-full min-h-11 h-11 ps-10 pe-4 bg-surface hairline rounded-full text-sm text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
            />
          </label>
          <div className="flex gap-2 shrink-0">
            <Link
              href={L("/hardware/cart")}
              className="inline-flex items-center justify-center min-h-11 h-11 px-4 rounded-full text-sm font-medium text-ink border border-line-strong hover:border-ink hover:bg-surface transition-colors"
            >
              {c.compareCta}
            </Link>
            <Button href={L("/hardware/quote")}>{c.quoteCta}</Button>
          </div>
        </div>
      </div>

      {/* Category strip */}
      <div
        className="flex gap-1 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden hairline-b"
        role="tablist"
        aria-label={c.categoryFilterLabel}
      >
        {navCategories.map((cat) => {
          const id = cat.id;
          const active =
            id === "all" ? categoryId === "all" && selectedCategories.length === 0 : categoryId === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setCategoryId(id);
                setSelectedCategories([]);
              }}
              className={`${chip(active)} shrink-0 mb-2`}
            >
              {categoryIcon("pbId" in cat ? cat.pbId : null)}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {!store.configured && (
        <p className="text-sm text-ink-secondary">{c.storeUnavailable}</p>
      )}
      {store.configured && store.error && (
        <p className="text-sm text-ink-secondary" role="alert">
          {c.storeError}
        </p>
      )}

      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setFiltersOpen((v) => !v)}
          className="inline-flex items-center min-h-11 px-4 rounded-full text-sm font-medium border border-line-strong text-ink"
        >
          {c.filtersHeading}
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)]">
        {/* Sidebar filters */}
        <aside
          className={`${
            filtersOpen ? "block" : "hidden"
          } lg:block min-w-0 space-y-8`}
        >
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-semibold text-ink">{c.filtersHeading}</h2>
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs text-ink-secondary hover:text-ink underline underline-offset-2 min-h-9"
            >
              {c.filtersReset}
            </button>
          </div>

          <fieldset>
            <legend className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted mb-3">
              {c.categoryFilterLabel}
            </legend>
            <ul className="flex flex-col gap-1">
              {activeCategories.map((cat) => {
                const checked = selectedCategories.includes(cat.id);
                return (
                  <li key={cat.id}>
                    <label className="flex items-center gap-2.5 min-h-10 px-1 rounded-lg hover:bg-surface cursor-pointer text-sm text-ink">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleCategoryCheckbox(cat.id)}
                        className="size-4 rounded border-line-strong accent-ink"
                      />
                      <span className="flex-1 min-w-0 truncate">{cat.name}</span>
                      <span className="font-mono text-xs text-muted">{cat.count}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>

          <fieldset>
            <legend className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted mb-3">
              {c.priceFilterLabel}
            </legend>
            <div className="flex flex-col gap-2">
              {(
                [
                  ["any", c.filtersAllProducts],
                  ["u10", c.priceUnder10k],
                  ["10-30", c.price10to30],
                  ["30-80", c.price30to80],
                  ["80-150", c.price80to150],
                  ["o150", c.priceOver150],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setPricePreset(value)}
                  className={`text-start text-sm min-h-10 px-3 rounded-full border transition-colors ${
                    pricePreset === value
                      ? "border-ink bg-ink text-bg"
                      : "border-line text-ink-secondary hover:border-ink hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>
        </aside>

        {/* Grid */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm text-ink-secondary">
                {c.productsCountExact.replace(
                  "{count}",
                  String(filteredProducts.length),
                )}
              </p>
            </div>
            <label className="inline-flex items-center gap-2 text-sm text-ink-secondary">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                {c.sortLabel}
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortMode)}
                className="min-h-10 h-10 px-3 bg-surface hairline rounded-full text-sm text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
              >
                <option value="featured">{c.sortFeatured}</option>
                <option value="price-asc">{c.sortPriceAsc}</option>
                <option value="price-desc">{c.sortPriceDesc}</option>
                <option value="name-asc">{c.sortNameAsc}</option>
              </select>
            </label>
          </div>

          {filteredProducts.length === 0 ? (
            <p className="text-sm text-ink-secondary py-16" role="status">
              {c.searchEmpty}
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {filteredProducts.map((product) => {
                const imageSrc = product.images[0] ?? null;
                const purchasable = isStoreProductPurchasable(product);
                const spec = [product.brand, product.sku].filter(Boolean).join(" · ");
                return (
                  <article
                    key={product.id}
                    className="group flex flex-col min-w-0 rounded-[14px] border border-line bg-card overflow-hidden hover:border-line-strong transition-colors"
                  >
                    <Link
                      href={L(`/hardware/products/${product.id}`)}
                      className="relative block aspect-[4/3] bg-surface overflow-hidden"
                    >
                      {imageSrc ? (
                        <Image
                          src={imageSrc}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          unoptimized
                        />
                      ) : (
                        <div className="absolute inset-0 grid-backdrop opacity-40" aria-hidden />
                      )}
                      {purchasable && (
                        <span className="absolute start-3 top-3 inline-flex items-center gap-1 rounded-full bg-bg/95 border border-line px-2 py-1 text-[0.65rem] font-mono uppercase tracking-[0.12em] text-ink">
                          <span className="inline-block size-1.5 rounded-full bg-ink" aria-hidden />
                          {c.readyBadge}
                        </span>
                      )}
                    </Link>

                    <div className="flex flex-1 flex-col p-4 md:p-5">
                      <h3 className="text-sm md:text-base font-semibold text-ink tracking-tight line-clamp-2 [text-wrap:balance]">
                        <Link
                          href={L(`/hardware/products/${product.id}`)}
                          className="hover:opacity-80"
                        >
                          {product.name}
                        </Link>
                      </h3>
                      {(product.shortDescription || spec) && (
                        <p className="mt-1.5 text-xs text-muted line-clamp-2 leading-relaxed">
                          {product.shortDescription || spec}
                        </p>
                      )}
                      <p className="mt-3 text-base font-semibold text-ink">
                        {formatMoneyMinor(product.price, currency, locale)}
                      </p>
                      <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-ink-secondary">
                        <span
                          className={`size-1.5 rounded-full ${
                            purchasable ? "bg-ink" : "bg-muted"
                          }`}
                          aria-hidden
                        />
                        {purchasable ? c.inStock : c.quoteOnlyStatus}
                      </p>

                      <div className="mt-auto pt-4 flex gap-2">
                        <Link
                          href={L(`/hardware/products/${product.id}`)}
                          className="flex-1 inline-flex items-center justify-center min-h-10 h-10 px-3 rounded-full text-sm font-medium text-ink border border-line-strong hover:border-ink hover:bg-surface transition-colors"
                        >
                          {c.viewDetails}
                        </Link>
                        {purchasable ? (
                          <AddStoreToCartButton
                            product={product}
                            label={c.addToCart}
                            addedLabel={c.addedToCart}
                            className="inline-flex items-center justify-center min-h-10 h-10 w-10 rounded-full text-sm font-medium bg-ink text-bg hover:bg-ink/85 transition-colors"
                            iconOnly
                          />
                        ) : (
                          <Link
                            href={L(
                              `/hardware/quote?product=${encodeURIComponent(product.id)}`,
                            )}
                            className="inline-flex items-center justify-center min-h-10 h-10 w-10 rounded-full text-sm font-medium bg-ink text-bg hover:bg-ink/85 transition-colors"
                            aria-label={c.quoteProduct}
                          >
                            ?
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
