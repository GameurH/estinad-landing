"use client";

import { useSyncExternalStore } from "react";
import { navSectionIcon } from "@/components/nav/NavSectionIcons";

type Props = {
  labels: ThemeLabels;
  variant?: "default" | "card";
};

export type ThemeLabels = {
  toggleLabel: string;
  sectionLabel: string;
  light: string;
  dark: string;
};

type Theme = "light" | "dark";

const STORAGE_KEY = "estinad-theme";
const THEME_EVENT = "estinad-theme-change";

// Runs before paint to apply the stored/preferred theme and avoid a flash.
// v2: light is the default — the script only ever ADDS the `dark` class.
export const themeInitScript = `(function(){try{var s=localStorage.getItem('${STORAGE_KEY}');var t=s==='light'||s==='dark'?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`;

function getTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// SSR snapshot — no `dark` class is set server-side, so default to light.
function getServerTheme(): Theme {
  return "light";
}

function subscribe(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_EVENT, callback);
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener?.("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
    mq.removeEventListener?.("change", callback);
  };
}

function applyTheme(next: Theme) {
  document.documentElement.classList.toggle("dark", next === "dark");
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* ignore storage failures */
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

export function ThemeToggle({ labels, variant = "default" }: Props) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const isLight = theme === "light";

  const toggle = () => {
    applyTheme(isLight ? "dark" : "light");
  };

  if (variant === "card") {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label={labels.toggleLabel}
        className="flex w-full items-center justify-between gap-3 rounded-[16px] border border-line bg-card px-4 py-3.5 text-start transition-colors active:bg-surface-2"
      >
        <span className="flex items-center gap-3 min-w-0">
          <span className="text-ink">{navSectionIcon("sun", "h-5 w-5")}</span>
          <span className="text-[0.9375rem] font-medium text-ink">
            {isLight ? labels.light : labels.dark}
          </span>
        </span>
        <span
          className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full p-1 transition-colors ${
            isLight ? "bg-surface-2 border border-line" : "bg-ink"
          }`}
          aria-hidden
        >
          <span
            className={`h-5 w-5 rounded-full shadow-sm transition-transform ${
              isLight
                ? "translate-x-0 bg-card border border-line rtl:translate-x-0"
                : "translate-x-5 bg-bg rtl:-translate-x-5"
            }`}
          />
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={labels.toggleLabel}
      title={isLight ? labels.dark : labels.light}
      className="flex items-center gap-1.5 px-3 py-2 text-sm text-ink-secondary hover:text-ink transition-colors"
    >
      <span className="font-mono text-[11px] uppercase tracking-widest">
        {isLight ? labels.light : labels.dark}
      </span>
      <span className="relative inline-flex h-3.5 w-3.5 items-center" aria-hidden>
        <span
          className={`absolute h-3.5 w-3.5 rounded-full border transition-colors ${
            isLight ? "border-ink/40 bg-ink/10" : "border-ink/30"
          }`}
        />
        <span
          className={`absolute h-1.5 w-1.5 rounded-full bg-ink transition-transform ${
            isLight ? "translate-x-2 rtl:-translate-x-2" : "-translate-x-1 rtl:translate-x-1"
          }`}
        />
      </span>
    </button>
  );
}
