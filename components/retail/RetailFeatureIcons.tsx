import type { ReactNode } from "react";

function IconFrame({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-5 w-5"}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function retailFeatureIcon(icon: string, className?: string) {
  switch (icon) {
    case "pos":
      return (
        <IconFrame className={className}>
          <path d="M4 7h16v12H4z" />
          <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
          <path d="M8 12h8M8 15h5" />
        </IconFrame>
      );
    case "inventory":
      return (
        <IconFrame className={className}>
          <path d="M8 4h8l1 3H7l1-3Z" />
          <path d="M6 7h12v13H6z" />
          <path d="M10 11h4M10 15h4" />
        </IconFrame>
      );
    case "products":
      return (
        <IconFrame className={className}>
          <path d="M3 8.5 12 4l9 4.5-9 4.5L3 8.5Z" />
          <path d="M3 8.5V16l9 4.5 9-4.5V8.5" />
          <path d="M12 13v7.5" />
        </IconFrame>
      );
    case "analytics":
      return (
        <IconFrame className={className}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M8 15v-4M12 15V8M16 15v-6" />
        </IconFrame>
      );
    case "stores":
      return (
        <IconFrame className={className}>
          <path d="M3 10.5 12 4l9 6.5V20H3v-9.5Z" />
          <path d="M9 20v-6h6v6" />
        </IconFrame>
      );
    case "bag":
      return (
        <IconFrame className={className}>
          <path d="M6 8h12l-1 12H7L6 8Z" />
          <path d="M9 8V6.5A3 3 0 0 1 12 3.5 3 3 0 0 1 15 6.5V8" />
        </IconFrame>
      );
    case "checkout":
      return (
        <IconFrame className={className}>
          <rect x="3" y="5" width="18" height="12" rx="1.5" />
          <path d="M8 21h8M12 17v4" />
          <path d="M7 10h4M7 13h6" />
        </IconFrame>
      );
    case "staff":
      return (
        <IconFrame className={className}>
          <circle cx="9" cy="8" r="2.5" />
          <circle cx="16" cy="9" r="2" />
          <path d="M3.5 19c.8-3 2.8-4.5 5.5-4.5s4.7 1.5 5.5 4.5" />
          <path d="M14 14.2c1.5-.4 3.1-.2 4.5 1.1.7.7 1.2 1.7 1.5 2.7" />
        </IconFrame>
      );
    case "orders":
      return (
        <IconFrame className={className}>
          <path d="M7 3h8l4 4v14H7V3Z" />
          <path d="M15 3v4h4" />
          <path d="M10 12h5M10 16h3" />
        </IconFrame>
      );
    case "fulfillment":
      return (
        <IconFrame className={className}>
          <path d="M3 7h13v10H3z" />
          <path d="M16 10h3.5L21 13v4h-5" />
          <circle cx="7.5" cy="18.5" r="1.5" />
          <circle cx="17.5" cy="18.5" r="1.5" />
        </IconFrame>
      );
    case "purchasing":
      return (
        <IconFrame className={className}>
          <path d="M4 7h16l-1.5 11H5.5L4 7Z" />
          <path d="M9 10v5M12 10v5M15 10v5" />
          <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
        </IconFrame>
      );
    case "count":
      return (
        <IconFrame className={className}>
          <path d="M5 4h14v16H5z" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </IconFrame>
      );
    case "barcode":
      return (
        <IconFrame className={className}>
          <path d="M4 6v12M7 6v12M9 6v12M12 6v12M14 6v12M17 6v12M20 6v12" />
        </IconFrame>
      );
    case "offline":
      return (
        <IconFrame className={className}>
          <path d="M4 12a8 8 0 0 1 13.5-5.8" />
          <path d="M7.5 15a4.5 4.5 0 0 1 6.8-3.9" />
          <path d="M12 18.5h.01" />
          <path d="M5 5l14 14" />
        </IconFrame>
      );
    case "backup":
      return (
        <IconFrame className={className}>
          <path d="M12 4v10" />
          <path d="M8.5 9.5 12 6l3.5 3.5" />
          <path d="M5 16v2.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V16" />
        </IconFrame>
      );
    default:
      return (
        <IconFrame className={className}>
          <circle cx="12" cy="12" r="8" />
        </IconFrame>
      );
  }
}
