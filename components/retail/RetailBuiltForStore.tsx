"use client";

import {
  useCallback,
  useId,
  useState,
  type KeyboardEvent,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui";
import { getHardwareKit } from "@/lib/hardware";
import type { Dictionary } from "@/lib/dictionaries/types";

export type RetailBuiltForStoreCopy =
  Dictionary["products"]["items"]["retail"]["landing"]["builtForStore"];

type ContextId = RetailBuiltForStoreCopy["contexts"][number]["id"];

type Props = {
  copy: RetailBuiltForStoreCopy;
};

const EASE = [0.16, 1, 0.3, 1] as const;

function ContextUi({
  contextId,
  ui,
}: {
  contextId: ContextId;
  ui: RetailBuiltForStoreCopy["ui"];
}) {
  if (contextId === "checkout") {
    return (
      <div className="flex h-full flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-ink">{ui.appName}</span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
            {ui.cart}
          </span>
        </div>
        <div className="flex-1 rounded-[10px] border border-line bg-surface p-3.5">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-medium text-ink">{ui.product}</span>
            <span className="font-mono text-ink-secondary">×1</span>
          </div>
          <div className="mt-4 flex items-end justify-between border-t border-line pt-3">
            <span className="text-xs text-muted">{ui.total}</span>
            <span className="text-lg font-semibold tracking-tight tabular-nums text-ink">
              4 800 DA
            </span>
          </div>
        </div>
        <div className="rounded-[10px] bg-ink px-4 py-2.5 text-center text-sm font-medium text-bg">
          {ui.pay}
        </div>
      </div>
    );
  }

  if (contextId === "management") {
    return (
      <div className="flex h-full flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-ink">{ui.appName}</span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
            {ui.inventory}
          </span>
        </div>
        <div className="grid flex-1 gap-2">
          {[
            { name: ui.product, qty: "47" },
            { name: ui.secondaryProduct, qty: "06" },
          ].map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between rounded-[10px] border border-line bg-surface px-3.5 py-3"
            >
              <span className="text-sm text-ink">{row.name}</span>
              <span className="font-mono text-xs text-ink-secondary">
                {ui.onHand} {row.qty}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-ink">{ui.appName}</span>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
          {ui.reports}
        </span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2">
        <div className="rounded-[10px] border border-line bg-surface p-3.5">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
            {ui.sales}
          </p>
          <p className="mt-2 text-xl font-semibold tracking-tight tabular-nums text-ink">
            186k DA
          </p>
        </div>
        <div className="rounded-[10px] border border-line bg-surface p-3.5">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
            {ui.stock}
          </p>
          <p className="mt-2 text-xl font-semibold tracking-tight tabular-nums text-ink">
            47
          </p>
        </div>
      </div>
    </div>
  );
}

export function RetailBuiltForStore({ copy }: Props) {
  const baseId = useId();
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = copy.contexts[activeIndex] ?? copy.contexts[0];
  const kit = getHardwareKit("retail-counter-kit");
  const deployment = kit?.media.deployment;

  const select = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const rtl =
        typeof document !== "undefined" && document.documentElement.dir === "rtl";
      const nextKey = rtl ? "ArrowLeft" : "ArrowRight";
      const prevKey = rtl ? "ArrowRight" : "ArrowLeft";
      let next = activeIndex;

      if (e.key === nextKey) next = (activeIndex + 1) % copy.contexts.length;
      else if (e.key === prevKey)
        next = (activeIndex - 1 + copy.contexts.length) % copy.contexts.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = copy.contexts.length - 1;
      else return;

      e.preventDefault();
      select(next);
      document.getElementById(`${baseId}-tab-${copy.contexts[next].id}`)?.focus();
    },
    [activeIndex, baseId, copy.contexts, select],
  );

  return (
    <section className="hairline-b bg-surface" aria-labelledby="retail-store-title">
      <div className="shell py-16 md:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h2
              id="retail-store-title"
              className="mt-1 text-[clamp(1.85rem,3.8vw,3rem)] leading-[1.12] tracking-[-0.025em] font-semibold text-ink [text-wrap:balance]"
            >
              {copy.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-secondary md:text-lg">
              {copy.intro}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-stretch">
            <figure className="relative min-w-0 overflow-hidden rounded-2xl border border-line bg-bg aspect-[16/10] lg:aspect-auto lg:min-h-[28rem]">
              {deployment ? (
                <Image
                  src={deployment.src}
                  alt={copy.imageAlt}
                  width={deployment.width}
                  height={deployment.height}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : null}
            </figure>

            <div className="flex min-w-0 flex-col">
              <div
                role="tablist"
                aria-label={copy.contextsNavLabel}
                onKeyDown={onKeyDown}
                className="flex gap-1 overflow-x-auto pb-1"
              >
                {copy.contexts.map((ctx, index) => {
                  const selected = index === activeIndex;
                  return (
                    <button
                      key={ctx.id}
                      type="button"
                      role="tab"
                      id={`${baseId}-tab-${ctx.id}`}
                      aria-selected={selected}
                      aria-controls={`${baseId}-panel`}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => select(index)}
                      className={`shrink-0 rounded-full px-3.5 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                        selected
                          ? "bg-ink text-bg"
                          : "bg-bg text-ink-secondary hover:text-ink border border-line"
                      }`}
                    >
                      {ctx.label}
                    </button>
                  );
                })}
              </div>

              <div
                role="tabpanel"
                id={`${baseId}-panel`}
                aria-labelledby={`${baseId}-tab-${active.id}`}
                className="mt-4 flex flex-1 flex-col rounded-2xl border border-line bg-bg shadow-sm"
              >
                <div className="border-b border-line px-4 py-3">
                  <h3 className="text-sm font-medium text-ink">{active.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
                    {active.body}
                  </p>
                </div>

                <div className="relative min-h-[15rem] flex-1 overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active.id}
                      className="absolute inset-0"
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
                      transition={{ duration: reduce ? 0.12 : 0.35, ease: EASE }}
                    >
                      <ContextUi contextId={active.id} ui={copy.ui} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
