"use client";

import { useSyncExternalStore } from "react";

type Props = {
  labels: ThemeLabels;
};

export type ThemeLabels = {
  toggleLabel: string;
  light: string;
  dark: string;
};

type Theme = "light" | "dark";

const STORAGE_KEY = "estinad-theme";
const THEME_EVENT = "estinad-theme-change";

// Runs before paint to apply the stored/preferred theme and avoid a flash.
export const themeInitScript = `(function(){try{var s=localStorage.getItem('${STORAGE_KEY}');var t=s==='light'||s==='dark'?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();`;

function getTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

// SSR snapshot — no `light` class is set server-side, so default to dark.
function getServerTheme(): Theme {
  return "dark";
}

function subscribe(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_EVENT, callback);
  const mq = window.matchMedia("(prefers-color-scheme: light)");
  mq.addEventListener?.("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
    mq.removeEventListener?.("change", callback);
  };
}

export function ThemeToggle({ labels }: Props) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage failures */
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={labels.toggleLabel}
      title={isLight ? labels.dark : labels.light}
      className="flex items-center gap-1.5 px-3 py-2 text-sm text-ivory-dim hover:text-ivory transition-colors"
    >
      <span className="font-mono text-[11px] uppercase tracking-widest">
        {isLight ? labels.light : labels.dark}
      </span>
      <span className="relative inline-flex h-3.5 w-3.5 items-center" aria-hidden>
        <span
          className={`absolute h-3.5 w-3.5 rounded-full border transition-colors ${
            isLight ? "border-ivory/40 bg-accent/30" : "border-ivory/30"
          }`}
        />
        <span
          className={`absolute h-1.5 w-1.5 rounded-full bg-ivory transition-transform ${
            isLight ? "translate-x-2" : "-translate-x-1"
          }`}
        />
      </span>
    </button>
  );
}
