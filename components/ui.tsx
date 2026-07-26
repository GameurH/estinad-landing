import Link from "next/link";
import type { ReactNode } from "react";

/* ---------- Layout primitives ---------- */

export function Shell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`shell ${className ?? ""}`}>{children}</div>;
}

export function Section({
  children,
  className,
  id,
  bordered = true,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${bordered ? "hairline-b" : ""} ${className ?? ""}`}
    >
      <div className="shell py-20 md:py-28">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-5">{children}</p>;
}

/* ---------- Buttons ---------- */

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 h-11 px-5 text-sm font-medium tracking-wide transition-colors duration-200 select-none";

  const styles: Record<string, string> = {
    primary:
      "bg-accent text-base hover:bg-accent-dim border border-accent",
    secondary:
      "bg-transparent text-ivory border border-line-strong hover:border-ivory/40 hover:bg-surface-2",
    ghost:
      "bg-transparent text-ivory-dim border border-transparent hover:text-ivory",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className ?? ""}`}>
      {children}
    </Link>
  );
}

/* ---------- Content blocks ---------- */

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl md:text-[2.6rem] leading-[1.1] tracking-tight text-ivory font-semibold">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base md:text-lg leading-relaxed text-ivory-dim">
          {intro}
        </p>
      )}
    </div>
  );
}

export function Card({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative bg-surface hairline p-6 md:p-8 ${className ?? ""}`}
    >
      {label && (
        <span className="eyebrow absolute right-6 top-6">{label}</span>
      )}
      {children}
    </div>
  );
}

export function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="hairline p-6">
      <div className="font-mono text-3xl md:text-4xl text-ivory tracking-tight">
        {value}
      </div>
      <div className="mt-2 text-sm text-muted">{label}</div>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted hairline px-2.5 py-1">
      {children}
    </span>
  );
}

/* ---------- Divider with monogram node ---------- */
export function NodeDivider() {
  return (
    <div className="shell py-10">
      <div className="flex items-center gap-4 text-muted-2">
        <span className="h-px flex-1 bg-line" />
        <span className="h-1.5 w-1.5 rotate-45 border border-line-strong" />
        <span className="h-px flex-1 bg-line" />
      </div>
    </div>
  );
}
