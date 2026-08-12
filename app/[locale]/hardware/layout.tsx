import { HardwareCartProvider } from "@/components/hardware/HardwareCartProvider";
import { HardwareStoreHeader } from "@/components/hardware/HardwareStoreHeader";
import { getDict } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n-config";

export default async function HardwareLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const dictionary = getDict(l);

  return (
    <HardwareCartProvider>
      <HardwareStoreHeader locale={l} dictionary={dictionary} />
      {children}
    </HardwareCartProvider>
  );
}
