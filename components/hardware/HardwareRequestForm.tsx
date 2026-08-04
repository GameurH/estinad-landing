"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import {
  grantAnalyticsConsent,
  trackEvent,
  type AnalyticsEvent,
} from "@/lib/analytics";
import type { HardwareKitSlug } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";

type FormCopy = Dictionary["hardware"]["form"];

export type HardwareRequestFormProps = {
  variant: "quote" | "compatibility";
  endpoint: string;
  privacyHref: string;
  consentLabel: string;
  form: FormCopy;
  kitOptions: { value: HardwareKitSlug; label: string }[];
  initialKit?: HardwareKitSlug | "";
  analyticsStart?: AnalyticsEvent;
  analyticsSubmit?: AnalyticsEvent;
};

type FieldErrors = Record<string, string>;

const fieldClass =
  "w-full min-h-11 h-11 px-3 bg-surface hairline rounded-[12px] text-sm text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:border-ink/40 transition-colors";

const labelClass =
  "block text-xs text-muted mb-2 font-mono uppercase tracking-[0.18em]";

function FieldError({
  id,
  message,
}: {
  id: string;
  message?: string;
}) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-xs text-ink" role="alert">
      {message}
    </p>
  );
}

function mapErrorCode(form: FormCopy, code?: string) {
  if (!code) return "";
  if (code === "email") return form.errors.email;
  if (code === "invalid") return form.errors.invalid;
  return form.errors.required;
}

export function HardwareRequestForm({
  variant,
  endpoint,
  privacyHref,
  consentLabel,
  form,
  kitOptions,
  initialKit = "",
  analyticsStart,
  analyticsSubmit,
}: HardwareRequestFormProps) {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const started = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<FieldErrors>({});

  useEffect(() => {
    if (analyticsStart && !started.current) {
      started.current = true;
      trackEvent(analyticsStart);
    }
  }, [analyticsStart]);

  function validate(data: Record<string, string>): FieldErrors {
    const next: FieldErrors = {};
    const required =
      variant === "quote"
        ? [
            "fullName",
            "companyName",
            "email",
            "phone",
            "country",
            "city",
            "businessType",
            "productInterest",
            "locations",
            "counters",
            "kit",
            "existingHardware",
            "installation",
            "consent",
          ]
        : [
            "fullName",
            "companyName",
            "email",
            "phone",
            "country",
            "city",
            "businessType",
            "productInterest",
            "equipmentSummary",
            "consent",
          ];

    for (const key of required) {
      if (!data[key]?.trim()) next[key] = "required";
    }

    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      next.email = "email";
    }

    return next;
  }

  function focusFirstError(next: FieldErrors) {
    const first = Object.keys(next)[0];
    if (!first || !formRef.current) return;
    const el = formRef.current.querySelector<HTMLElement>(`[name="${first}"]`);
    el?.focus();
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data: Record<string, string> = {};
    new FormData(formEl).forEach((v, k) => {
      data[k] = typeof v === "string" ? v : "";
    });

    if (data.website) {
      setStatus("sent");
      return;
    }

    const next = validate(data);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      focusFirstError(next);
      setStatus("error");
      return;
    }

    grantAnalyticsConsent();
    setStatus("sending");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        errors?: FieldErrors;
      };

      if (!res.ok || !json.ok) {
        if (json.errors) {
          setErrors(json.errors);
          focusFirstError(json.errors);
        }
        setStatus("error");
        return;
      }

      if (analyticsSubmit) trackEvent(analyticsSubmit);
      setStatus("sent");
      formEl.reset();
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="hairline rounded-card bg-surface p-8 md:p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <h3 className="text-lg text-ink font-medium">{form.sentTitle}</h3>
        <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
          {form.sentBody}
        </p>
      </div>
    );
  }

  function errorMessage(name: string) {
    return mapErrorCode(form, errors[name]);
  }

  function describedBy(name: string) {
    return errors[name] ? `${formId}-${name}-error` : undefined;
  }

  return (
    <form
      key={`hardware-form-${variant}-${initialKit}`}
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-10"
      aria-busy={status === "sending"}
    >
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
        <legend className="eyebrow mb-5">{form.sections.contact}</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block min-w-0">
            <span className={labelClass}>{form.fullName}</span>
            <input
              name="fullName"
              required
              autoComplete="name"
              aria-invalid={!!errors.fullName}
              aria-describedby={describedBy("fullName")}
              className={fieldClass}
            />
            <FieldError
              id={`${formId}-fullName-error`}
              message={errorMessage("fullName")}
            />
          </label>
          <label className="block min-w-0">
            <span className={labelClass}>{form.companyName}</span>
            <input
              name="companyName"
              required
              autoComplete="organization"
              aria-invalid={!!errors.companyName}
              aria-describedby={describedBy("companyName")}
              className={fieldClass}
            />
            <FieldError
              id={`${formId}-companyName-error`}
              message={errorMessage("companyName")}
            />
          </label>
          <label className="block min-w-0">
            <span className={labelClass}>{form.email}</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={describedBy("email")}
              className={fieldClass}
            />
            <FieldError
              id={`${formId}-email-error`}
              message={errorMessage("email")}
            />
          </label>
          <label className="block min-w-0">
            <span className={labelClass}>{form.phone}</span>
            <input
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              aria-describedby={describedBy("phone")}
              className={fieldClass}
            />
            <FieldError
              id={`${formId}-phone-error`}
              message={errorMessage("phone")}
            />
          </label>
          <label className="block min-w-0">
            <span className={labelClass}>{form.country}</span>
            <input
              name="country"
              required
              autoComplete="country-name"
              aria-invalid={!!errors.country}
              aria-describedby={describedBy("country")}
              className={fieldClass}
            />
            <FieldError
              id={`${formId}-country-error`}
              message={errorMessage("country")}
            />
          </label>
          <label className="block min-w-0">
            <span className={labelClass}>{form.city}</span>
            <input
              name="city"
              required
              autoComplete="address-level2"
              aria-invalid={!!errors.city}
              aria-describedby={describedBy("city")}
              className={fieldClass}
            />
            <FieldError
              id={`${formId}-city-error`}
              message={errorMessage("city")}
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="min-w-0">
        <legend className="eyebrow mb-5">{form.sections.operation}</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block min-w-0">
            <span className={labelClass}>{form.businessType}</span>
            <select
              name="businessType"
              required
              defaultValue=""
              aria-invalid={!!errors.businessType}
              aria-describedby={describedBy("businessType")}
              className={fieldClass}
            >
              <option value="" disabled>
                —
              </option>
              {form.businessTypes.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <FieldError
              id={`${formId}-businessType-error`}
              message={errorMessage("businessType")}
            />
          </label>
          <label className="block min-w-0">
            <span className={labelClass}>{form.productInterest}</span>
            <select
              name="productInterest"
              required
              defaultValue=""
              aria-invalid={!!errors.productInterest}
              aria-describedby={describedBy("productInterest")}
              className={fieldClass}
            >
              <option value="" disabled>
                —
              </option>
              {form.products.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <FieldError
              id={`${formId}-productInterest-error`}
              message={errorMessage("productInterest")}
            />
          </label>

          {variant === "quote" && (
            <>
              <label className="block min-w-0">
                <span className={labelClass}>{form.locations}</span>
                <input
                  name="locations"
                  type="number"
                  min={1}
                  required
                  aria-invalid={!!errors.locations}
                  aria-describedby={describedBy("locations")}
                  className={fieldClass}
                />
                <FieldError
                  id={`${formId}-locations-error`}
                  message={errorMessage("locations")}
                />
              </label>
              <label className="block min-w-0">
                <span className={labelClass}>{form.counters}</span>
                <input
                  name="counters"
                  type="number"
                  min={0}
                  required
                  aria-invalid={!!errors.counters}
                  aria-describedby={describedBy("counters")}
                  className={fieldClass}
                />
                <FieldError
                  id={`${formId}-counters-error`}
                  message={errorMessage("counters")}
                />
              </label>
            </>
          )}

          {variant === "compatibility" && (
            <label className="block sm:col-span-2 min-w-0">
              <span className={labelClass}>{form.equipmentSummary}</span>
              <textarea
                name="equipmentSummary"
                required
                rows={4}
                placeholder={form.equipmentPlaceholder}
                aria-invalid={!!errors.equipmentSummary}
                aria-describedby={describedBy("equipmentSummary")}
                className="w-full min-h-[7rem] p-3 bg-surface hairline rounded-[12px] text-sm text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 resize-y"
              />
              <FieldError
                id={`${formId}-equipmentSummary-error`}
                message={errorMessage("equipmentSummary")}
              />
            </label>
          )}
        </div>
      </fieldset>

      {variant === "quote" && (
        <fieldset className="min-w-0">
          <legend className="eyebrow mb-5">{form.sections.deployment}</legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-2 min-w-0">
              <span className={labelClass}>{form.kit}</span>
              <select
                name="kit"
                required
                defaultValue={initialKit}
                aria-invalid={!!errors.kit}
                aria-describedby={describedBy("kit")}
                className={fieldClass}
              >
                <option value="" disabled>
                  {form.kitPlaceholder}
                </option>
                {kitOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <FieldError
                id={`${formId}-kit-error`}
                message={errorMessage("kit")}
              />
            </label>

            <label className="block min-w-0">
              <span className={labelClass}>{form.existingHardware}</span>
              <select
                name="existingHardware"
                required
                defaultValue=""
                aria-invalid={!!errors.existingHardware}
                aria-describedby={describedBy("existingHardware")}
                className={fieldClass}
              >
                <option value="" disabled>
                  —
                </option>
                {form.existingOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <FieldError
                id={`${formId}-existingHardware-error`}
                message={errorMessage("existingHardware")}
              />
            </label>

            <label className="block min-w-0">
              <span className={labelClass}>{form.installation}</span>
              <select
                name="installation"
                required
                defaultValue=""
                aria-invalid={!!errors.installation}
                aria-describedby={describedBy("installation")}
                className={fieldClass}
              >
                <option value="" disabled>
                  —
                </option>
                {form.installationOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <FieldError
                id={`${formId}-installation-error`}
                message={errorMessage("installation")}
              />
            </label>
          </div>
        </fieldset>
      )}

      <label className="block min-w-0">
        <span className={labelClass}>{form.notes}</span>
        <textarea
          name="notes"
          rows={4}
          placeholder={form.notesPlaceholder}
          className="w-full min-h-[7rem] p-3 bg-surface hairline rounded-[12px] text-sm text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 resize-y"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-ink-secondary min-w-0">
        <input
          type="checkbox"
          name="consent"
          value="1"
          required
          aria-invalid={!!errors.consent}
          aria-describedby={describedBy("consent")}
          className="mt-1 h-5 w-5 accent-ink flex-shrink-0"
        />
        <span>
          {consentLabel}{" "}
          <Link
            href={privacyHref}
            className="text-ink underline underline-offset-2 hover:text-ink/80"
          >
            {form.privacyLink}
          </Link>
          .
          <FieldError
            id={`${formId}-consent-error`}
            message={errorMessage("consent")}
          />
        </span>
      </label>

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center min-h-11 h-12 px-7 rounded-full text-[0.9375rem] font-medium bg-ink text-bg hover:bg-ink/85 transition-colors disabled:opacity-60 self-start"
        >
          {status === "sending"
            ? form.sending
            : variant === "quote"
              ? form.submitQuote
              : form.submitCompatibility}
        </button>
        <p className="text-xs text-muted">
          {form.privacyNote}{" "}
          <Link href={privacyHref} className="underline underline-offset-2">
            {form.privacyLink}
          </Link>
          .
        </p>
        <p className="sr-only" aria-live="polite">
          {status === "sending" ? form.sending : ""}
        </p>
        {status === "error" && Object.keys(errors).length === 0 && (
          <p className="text-xs text-ink" role="alert">
            {form.errors.required}
          </p>
        )}
      </div>
    </form>
  );
}
