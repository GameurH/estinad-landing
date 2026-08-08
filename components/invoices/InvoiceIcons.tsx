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

export function invoiceIcon(icon: string, className?: string) {
  switch (icon) {
    case "document":
      return (
        <IconFrame className={className}>
          <path d="M7 3h8l4 4v14H7V3Z" />
          <path d="M15 3v4h4" />
          <path d="M10 12h5M10 16h3" />
        </IconFrame>
      );
    case "payment":
      return (
        <IconFrame className={className}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18" />
          <path d="M7 15h3" />
        </IconFrame>
      );
    case "statement":
      return (
        <IconFrame className={className}>
          <path d="M6 4h9l3 3v13H6V4Z" />
          <path d="M9 11h6M9 15h4" />
        </IconFrame>
      );
    case "reminder":
      return (
        <IconFrame className={className}>
          <path d="M12 4a5 5 0 0 1 5 5v3.5l1.5 2.5H5.5L7 12.5V9a5 5 0 0 1 5-5Z" />
          <path d="M10 18a2 2 0 0 0 4 0" />
        </IconFrame>
      );
    case "secure":
      return (
        <IconFrame className={className}>
          <path d="M12 3 5 6.5v5c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5v-5L12 3Z" />
          <path d="M10 12l1.5 1.5L14.5 10" />
        </IconFrame>
      );
    case "operator":
      return (
        <IconFrame className={className}>
          <path d="M8 12h8" />
          <path d="M12 8v8" />
          <rect x="5" y="5" width="14" height="14" rx="3" />
        </IconFrame>
      );
    case "sectors":
      return (
        <IconFrame className={className}>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16" />
          <path d="M12 4c2.5 2.8 2.5 13.2 0 16M12 4c-2.5 2.8-2.5 13.2 0 16" />
        </IconFrame>
      );
    case "ecosystem":
      return (
        <IconFrame className={className}>
          <path d="M8 4h3l1.5 3H18l-1.5 3H8L6.5 7 8 4Z" />
          <path d="M6 11h3l1.5 3H16l-1.5 3H6l-1.5-3L6 11Z" />
          <path d="M10 18h3" />
        </IconFrame>
      );
    case "future":
      return (
        <IconFrame className={className}>
          <path d="M12 3 5 6.5v5c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5v-5L12 3Z" />
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
