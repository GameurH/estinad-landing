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
    default:
      return (
        <IconFrame className={className}>
          <circle cx="12" cy="12" r="8" />
        </IconFrame>
      );
  }
}
