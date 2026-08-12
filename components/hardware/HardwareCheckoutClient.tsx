"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useHardwareCart } from "@/components/hardware/HardwareCartProvider";
import { Button } from "@/components/ui";
import { getHardwareKit } from "@/lib/hardware";
import { formatMoneyMinor } from "@/lib/hardware-commerce";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { Locale } from "@/lib/i18n-config";
import { lp } from "@/lib/i18n-config";
import { grantAnalyticsConsent, trackEvent } from "@/lib/analytics";

type FieldErrors = Record<string, string>;

const fieldClass =
  "w-full min-h-11 h-11 px-3 bg-surface hairline rounded-[12px] text-sm text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:border-ink/40 transition-colors";

const labelClass =
  "block text-xs text-muted mb-2 font-mono uppercase tracking-[0.18em]";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-xs text-ink" role="alert">
      {message}
    </p>
  );
}

export function HardwareCheckoutClient({
  locale,
  dictionary,
  privacyHref,
}: {
  locale: Locale;
  dictionary: Dictionary;
  privacyHref: string;
}) {
  const router = useRouter();
  const { items, clear, purchasingOpen } = useHardwareCart();
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [fulfillment, setFulfillment] = useState<"delivery" | "pickup" | "">("");
  const L = (h: string) => lp(locale, h);
  const c = dictionary.hardware.checkout;
  const kitsCopy = dictionary.hardware.kits;

  if (!purchasingOpen) {
    return (
      <div className="hairline rounded-card bg-surface p-8 md:p-10 max-w-2xl">
        <h2 className="text-xl font-semibold text-ink">{c.unavailableTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
          {c.unavailableBody}
        </p>
        <div className="mt-8">
          <Button href={L("/hardware/quote")}>{c.quoteCta}</Button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="hairline rounded-card bg-surface p-8 md:p-10 max-w-2xl">
        <h2 className="text-xl font-semibold text-ink">{c.errors.empty}</h2>
        <div className="mt-8">
          <Button href={L("/hardware/cart")}>{c.backToCart}</Button>
        </div>
      </div>
    );
  }

  let subtotal = 0;
  let delivery = 0;
  let currency: string | null = null;
  let storeDeliveryApplied = false;

  const allowDelivery = items.every((i) => {
    if (i.kind === "store") return true;
    return Boolean(getHardwareKit(i.slug)?.commerce.allowDelivery);
  });
  const allowPickup = items.every((i) => {
    if (i.kind === "store") return true;
    return Boolean(getHardwareKit(i.slug)?.commerce.allowPickup);
  });

  const reviewLines = items.map((item) => {
    if (item.kind === "store") {
      const unit = item.price;
      const line = unit * item.quantity;
      subtotal += line;
      currency = item.currency;
      if (fulfillment === "delivery" && !storeDeliveryApplied) {
        delivery += 2500;
        storeDeliveryApplied = true;
      }
      return {
        key: `store:${item.productId}`,
        name: item.name,
        quantity: item.quantity,
        line,
        currency: item.currency,
      };
    }
    const kit = getHardwareKit(item.slug)!;
    currency = kit.commerce.currency;
    const unit = kit.commerce.priceMinor!;
    const line = unit * item.quantity;
    subtotal += line;
    if (
      fulfillment === "delivery" &&
      kit.commerce.deliveryCostMinor !== null
    ) {
      delivery += kit.commerce.deliveryCostMinor;
    }
    return {
      key: `kit:${item.slug}`,
      name: kitsCopy[item.slug].name,
      quantity: item.quantity,
      line,
      currency: kit.commerce.currency!,
    };
  });

  function mapError(code?: string) {
    if (!code) return "";
    if (code === "email") return c.errors.email;
    if (code === "empty") return c.errors.empty;
    if (code === "not_purchasable") return c.errors.notPurchasable;
    if (code === "invalid_quantity") return c.errors.invalidQuantity;
    if (code === "fulfillment") return c.errors.fulfillment;
    return c.errors.required;
  }

  function validate(data: Record<string, string>): FieldErrors {
    const next: FieldErrors = {};
    for (const key of [
      "fullName",
      "companyName",
      "email",
      "phone",
      "country",
      "city",
      "fulfillment",
      "consent",
    ]) {
      if (!data[key]?.trim()) next[key] = "required";
    }
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      next.email = "email";
    }
    if (data.fulfillment === "delivery" && !data.address?.trim()) {
      next.address = "required";
    }
    return next;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data: Record<string, string> = {};
    new FormData(formEl).forEach((v, k) => {
      data[k] = typeof v === "string" ? v : "";
    });

    if (data.website) {
      setStatus("idle");
      return;
    }

    const next = validate(data);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      formEl.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      setStatus("error");
      return;
    }

    grantAnalyticsConsent();
    setStatus("sending");

    try {
      const res = await fetch("/api/hardware-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          lines: items.map((i) =>
            i.kind === "store"
              ? {
                  kind: "store" as const,
                  productId: i.productId,
                  quantity: i.quantity,
                }
              : {
                  kind: "kit" as const,
                  slug: i.slug,
                  quantity: i.quantity,
                },
          ),
          locale,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        reference?: string;
        errors?: FieldErrors;
        error?: string;
      };

      if (!res.ok || !json.ok || !json.reference) {
        if (json.errors) {
          setErrors(json.errors);
          const first = Object.keys(json.errors)[0];
          formEl.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
        }
        setStatus("error");
        return;
      }

      trackEvent("hardware_quote_submitted");
      clear();
      router.push(
        L(`/hardware/confirmation?ref=${encodeURIComponent(json.reference)}`),
      );
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="grid gap-12 lg:grid-cols-[1fr_320px]"
      aria-busy={status === "sending"}
    >
      <div className="flex flex-col gap-10 min-w-0">
        <div
          className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden"
          aria-hidden
        >
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <fieldset className="min-w-0">
          <legend className="eyebrow mb-5">{c.sections.contact}</legend>
          <div className="grid gap-5 sm:grid-cols-2">
            {(
              [
                ["fullName", c.fullName, "name"],
                ["companyName", c.companyName, "organization"],
                ["email", c.email, "email"],
                ["phone", c.phone, "tel"],
                ["country", c.country, "country-name"],
                ["city", c.city, "address-level2"],
              ] as const
            ).map(([name, label, autoComplete]) => (
              <label key={name} className="block min-w-0">
                <span className={labelClass}>{label}</span>
                <input
                  name={name}
                  type={name === "email" ? "email" : name === "phone" ? "tel" : "text"}
                  required
                  autoComplete={autoComplete}
                  aria-invalid={!!errors[name]}
                  aria-describedby={
                    errors[name] ? `${formId}-${name}-error` : undefined
                  }
                  className={fieldClass}
                />
                <FieldError
                  id={`${formId}-${name}-error`}
                  message={mapError(errors[name])}
                />
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="min-w-0">
          <legend className="eyebrow mb-5">{c.sections.fulfillment}</legend>
          <div className="grid gap-5">
            <fieldset className="min-w-0">
              <legend className={labelClass}>{c.fulfillmentMethod}</legend>
              <div className="mt-2 flex flex-col gap-3">
                {allowDelivery && (
                  <label className="flex items-center gap-3 min-h-11 text-sm text-ink">
                    <input
                      type="radio"
                      name="fulfillment"
                      value="delivery"
                      checked={fulfillment === "delivery"}
                      onChange={() => setFulfillment("delivery")}
                      className="h-5 w-5 accent-ink"
                    />
                    {c.delivery}
                  </label>
                )}
                {allowPickup && (
                  <label className="flex items-center gap-3 min-h-11 text-sm text-ink">
                    <input
                      type="radio"
                      name="fulfillment"
                      value="pickup"
                      checked={fulfillment === "pickup"}
                      onChange={() => setFulfillment("pickup")}
                      className="h-5 w-5 accent-ink"
                    />
                    {c.pickup}
                  </label>
                )}
                {!allowDelivery && !allowPickup && (
                  <p className="text-sm text-ink-secondary">
                    {c.errors.fulfillment}
                  </p>
                )}
              </div>
              <FieldError
                id={`${formId}-fulfillment-error`}
                message={mapError(errors.fulfillment)}
              />
            </fieldset>

            {fulfillment === "delivery" && (
              <label className="block min-w-0">
                <span className={labelClass}>{c.address}</span>
                <textarea
                  name="address"
                  rows={3}
                  required
                  placeholder={c.addressPlaceholder}
                  aria-invalid={!!errors.address}
                  aria-describedby={
                    errors.address ? `${formId}-address-error` : undefined
                  }
                  className="w-full min-h-[5rem] p-3 bg-surface hairline rounded-[12px] text-sm text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 resize-y"
                />
                <FieldError
                  id={`${formId}-address-error`}
                  message={mapError(errors.address)}
                />
              </label>
            )}

            <label className="block min-w-0">
              <span className={labelClass}>{c.notes}</span>
              <textarea
                name="notes"
                rows={3}
                placeholder={c.notesPlaceholder}
                className="w-full min-h-[5rem] p-3 bg-surface hairline rounded-[12px] text-sm text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 resize-y"
              />
            </label>
          </div>
        </fieldset>

        <fieldset className="min-w-0">
          <legend className="eyebrow mb-5">{c.sections.payment}</legend>
          <div className="hairline rounded-card bg-surface p-5">
            <p className="text-sm font-medium text-ink">{c.paymentCod}</p>
            <p className="mt-2 text-sm text-ink-secondary">{c.paymentCodNote}</p>
            <input type="hidden" name="paymentMethod" value="cod" />
          </div>
        </fieldset>

        <label className="flex items-start gap-3 text-sm text-ink-secondary min-w-0">
          <input
            type="checkbox"
            name="consent"
            value="1"
            required
            aria-invalid={!!errors.consent}
            className="mt-1 h-5 w-5 accent-ink flex-shrink-0"
          />
          <span>
            {c.consent}{" "}
            <Link
              href={privacyHref}
              className="text-ink underline underline-offset-2"
            >
              {dictionary.hardware.form.privacyLink}
            </Link>
            .
            <FieldError
              id={`${formId}-consent-error`}
              message={mapError(errors.consent)}
            />
          </span>
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center min-h-11 h-12 px-7 rounded-full text-[0.9375rem] font-medium bg-ink text-bg hover:bg-ink/85 transition-colors disabled:opacity-60"
          >
            {status === "sending" ? c.placing : c.placeOrder}
          </button>
          <Link
            href={L("/hardware/cart")}
            className="inline-flex items-center min-h-11 text-sm text-ink-secondary hover:text-ink"
          >
            {c.backToCart}
          </Link>
        </div>

        {status === "error" && Object.keys(errors).length === 0 && (
          <p className="text-xs text-ink" role="alert">
            {c.errors.server}
          </p>
        )}
      </div>

      <aside className="hairline rounded-card bg-surface p-7 h-fit">
        <h2 className="text-sm text-ink font-medium font-mono uppercase tracking-[0.18em]">
          {c.sections.review}
        </h2>
        <ul className="mt-5 flex flex-col gap-3">
          {reviewLines.map((line) => (
            <li key={line.key} className="text-sm text-ink-secondary">
              <span className="text-ink font-medium">{line.name}</span>
              <span className="mx-1">×</span>
              {line.quantity}
              <span className="ms-2">
                {formatMoneyMinor(line.line, line.currency, locale)}
              </span>
            </li>
          ))}
        </ul>
        <dl className="mt-6 flex flex-col gap-2 text-sm hairline-t pt-5">
          <div className="flex justify-between gap-4">
            <dt className="text-ink-secondary">{c.subtotal}</dt>
            <dd className="text-ink">
              {currency ? formatMoneyMinor(subtotal, currency, locale) : "—"}
            </dd>
          </div>
          {fulfillment === "delivery" && (
            <div className="flex justify-between gap-4">
              <dt className="text-ink-secondary">{c.deliveryCost}</dt>
              <dd className="text-ink">
                {currency ? formatMoneyMinor(delivery, currency, locale) : "—"}
              </dd>
            </div>
          )}
          <div className="flex justify-between gap-4 font-medium">
            <dt className="text-ink">{c.total}</dt>
            <dd className="text-ink">
              {currency
                ? formatMoneyMinor(subtotal + delivery, currency, locale)
                : "—"}
            </dd>
          </div>
        </dl>
      </aside>
    </form>
  );
}
