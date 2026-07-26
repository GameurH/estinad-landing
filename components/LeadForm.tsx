"use client";

import { useState } from "react";
import Link from "next/link";

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
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data: Record<string, string> = {};
    new FormData(form).forEach((v, k) => {
      data[k] = typeof v === "string" ? v : "";
    });
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
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

      <div className="sm:col-span-2 flex flex-col gap-4 mt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 h-11 px-5 text-sm font-medium tracking-wide bg-accent text-base hover:bg-accent-dim border border-accent transition-colors disabled:opacity-60 self-start"
        >
          {status === "sending" ? sending : submit}
        </button>
        <p className="text-xs text-muted-2">
          {privacyNote}{" "}
          <Link href={privacyHref} className="text-muted underline hover:text-ivory">
            {privacyLink}
          </Link>
          .
        </p>
        {status === "error" && (
          <p className="text-xs text-accent">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  );
}
