"use client";

import { useSearchParams } from "next/navigation";
import { HardwareRequestForm } from "@/components/hardware/HardwareRequestForm";
import { isHardwareKitSlug } from "@/lib/hardware";
import type { HardwareKitSlug } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";

export function HardwareQuoteClient({
  privacyHref,
  consentLabel,
  form,
  kitOptions,
  note,
}: {
  privacyHref: string;
  consentLabel: string;
  form: Dictionary["hardware"]["form"];
  kitOptions: { value: HardwareKitSlug; label: string }[];
  note: string;
}) {
  const searchParams = useSearchParams();
  const kitParam = searchParams.get("kit") ?? "";
  const initialKit = isHardwareKitSlug(kitParam) ? kitParam : "";

  return (
    <div>
      <HardwareRequestForm
        variant="quote"
        endpoint="/api/hardware-quote"
        privacyHref={privacyHref}
        consentLabel={consentLabel}
        form={form}
        kitOptions={kitOptions}
        initialKit={initialKit}
        analyticsStart="hardware_quote_started"
        analyticsSubmit="hardware_quote_submitted"
      />
      <p className="mt-8 text-xs leading-relaxed text-muted lg:hidden">{note}</p>
    </div>
  );
}
