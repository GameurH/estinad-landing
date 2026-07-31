"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { grantAnalyticsConsent, trackEvent, type AnalyticsEvent } from "@/lib/analytics";

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "number";
  placeholder?: string;
  options?: string[];
  required?: boolean;
  full?: boolean;
};

export type LeadFormProps = {
  endpoint: string;
  fields: FieldDef[];
  submit: string;
  sending: string;
  sentTitle: string;
  sentBody: string;
  privacyNote: string;
  privacyLink: string;
  privacyHref: string;
  consentLabel: string;
  errorRetry: string;
  analyticsStart?: AnalyticsEvent;
  analyticsSubmit?: AnalyticsEvent;
};

export function LeadForm({
  endpoint,
  fields,
  submit,
  sending,
  sentTitle,
  sentBody,
  privacyNote,
  privacyLink,
  privacyHref,
  consentLabel,
  errorRetry,
  analyticsStart,
  analyticsSubmit,
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const started = useRef(false);

  useEffect(() => {
    if (analyticsStart && !started.current) {
      started.current = true;
      trackEvent(analyticsStart);
    }
  }, [analyticsStart]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data: Record<string, string> = {};
    new FormData(form).forEach((v, k) => {
      data[k] = typeof v === "string" ? v : "";
    });

    // Honeypot — bots fill this; humans leave it empty
    if (data.website) {
      setStatus("sent");
      return;
    }

    if (!data.consent) {
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
      if (!res.ok) throw new Error("request failed");
      if (analyticsSubmit) trackEvent(analyticsSubmit);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="hairline bg-surface p-8 text-center">
        <h3 className="text-lg text-ivory font-medium">{sentTitle}</h3>
        <p className="mt-2 text-sm text-muted">{sentBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      {/* Honeypot */}
      <div className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {fields.map((f) => {
        const colSpan = f.full || f.type === "textarea" ? "sm:col-span-2" : "";
        const baseCls =
          "w-full h-11 px-3 bg-surface hairline text-sm text-ivory placeholder:text-muted-2 focus:outline-none focus:border-ivory/40 transition-colors";
        return (
          <label key={f.name} className={`block ${colSpan}`}>
            <span className="block text-xs text-muted mb-2 font-mono uppercase tracking-[0.18em]">
              {f.label}
            </span>
            {f.type === "textarea" ? (
              <textarea
                name={f.name}
                placeholder={f.placeholder}
                required={f.required}
                rows={4}
                className="w-full p-3 bg-surface hairline text-sm text-ivory placeholder:text-muted-2 focus:outline-none focus:border-ivory/40 transition-colors resize-y"
              />
            ) : f.type === "select" ? (
              <select
                name={f.name}
                required={f.required}
                defaultValue=""
                className={baseCls}
              >
                <option value="" disabled>
                  {f.placeholder ?? "—"}
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                name={f.name}
                type={f.type ?? "text"}
                placeholder={f.placeholder}
                required={f.required}
                className={baseCls}
              />
            )}
          </label>
        );
      })}

      <label className="sm:col-span-2 flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          name="consent"
          value="1"
          required
          className="mt-1 h-4 w-4 accent-ink"
        />
        <span>
          {consentLabel}{" "}
          <Link href={privacyHref} className="text-muted underline hover:text-ivory">
            {privacyLink}
          </Link>
          .
        </span>
      </label>

      <div className="sm:col-span-2 flex flex-col gap-4 mt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 h-11 px-5 text-sm font-medium tracking-wide bg-accent text-base hover:bg-accent-dim border border-accent transition-colors disabled:opacity-60 self-start"
        >
          {status === "sending" ? sending : submit}
        </button>
        <p className="text-xs text-muted-2">{privacyNote}.</p>
        {status === "error" && (
          <p className="text-xs text-accent" role="alert">
            {errorRetry}
          </p>
        )}
      </div>
    </form>
  );
}
