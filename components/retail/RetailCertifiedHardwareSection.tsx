import {
  RetailCertifiedHardware,
  RetailCertifiedHardwareSkeleton,
  type RetailCertifiedHardwareCopy,
} from "@/components/retail/RetailCertifiedHardware";
import { getRetailCertifiedHardware } from "@/lib/retail-certified-hardware";
import type { Locale } from "@/lib/i18n-config";

type Props = {
  locale: Locale;
  copy: RetailCertifiedHardwareCopy;
};

export function RetailCertifiedHardwareFallback({
  copy,
}: {
  copy: RetailCertifiedHardwareCopy;
}) {
  return (
    <RetailCertifiedHardwareSkeleton
      copy={{
        eyebrow: copy.eyebrow,
        title: copy.title,
        loadingLabel: copy.loadingLabel,
      }}
    />
  );
}

export async function RetailCertifiedHardwareSection({ locale, copy }: Props) {
  const data = await getRetailCertifiedHardware(locale);
  return (
    <RetailCertifiedHardware locale={locale} copy={copy} data={data} />
  );
}
