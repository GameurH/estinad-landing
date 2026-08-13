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
      <div className="shell py-14 md:py-32">{children}</div>
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
    "inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full text-[0.9375rem] font-medium tracking-tight transition-all duration-150 select-none active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

  const styles: Record<string, string> = {
    primary: "bg-ink text-bg hover:bg-ink/85",
    secondary:
      "bg-transparent text-ink border border-line-strong hover:border-ink hover:bg-surface",
    ghost: "bg-transparent text-ink-secondary hover:text-ink",
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
      <h2 className="text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.08] tracking-[-0.025em] text-ink font-semibold [text-wrap:balance]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-ink-secondary">
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
      className={`relative bg-card hairline rounded-card shadow-card p-8 md:p-10 transition-all duration-200 ${className ?? ""}`}
    >
      {label && (
        <span className="eyebrow absolute end-6 top-6">{label}</span>
      )}
      {children}
    </div>
  );
}

export function Stat({
  value,
  label,
  qualifier,
}: {
  value: string;
  label: string;
  qualifier?: string;
}) {
  return (
    <div className="hairline rounded-card p-6">
      <div className="font-mono text-3xl md:text-4xl text-ink tracking-tight">
        {value}
      </div>
      <div className="mt-2 text-sm text-ink-secondary">{label}</div>
      {qualifier && (
        <div className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-muted">
          {qualifier}
        </div>
      )}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center font-mono text-xs uppercase tracking-[0.14em] text-muted border border-line rounded-full px-3 py-1">
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
