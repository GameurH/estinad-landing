"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui";
import { retailFeatureIcon } from "@/components/retail/RetailFeatureIcons";
import {
  RetailWorkflowVisual,
  type RetailWorkflowStageId,
} from "@/components/retail/RetailFeatureVisuals";
import type { Dictionary } from "@/lib/dictionaries/types";

export type RetailFeaturesCopy =
  Dictionary["products"]["items"]["retail"]["landing"]["features"];

type RetailWorkflowStage = RetailFeaturesCopy["stages"][number];

type Props = {
  copy: RetailFeaturesCopy;
};

function isStageId(id: string): id is RetailWorkflowStageId {
  return (
    id === "purchase" ||
    id === "receive" ||
    id === "stock" ||
    id === "sell" ||
    id === "understand"
  );
}

/** Three-zone sticky storytelling only on wide screens. */
const STICKY_MQ = "(min-width: 1280px)";

function StageNav({
  stages,
  activeIndex,
  onSelect,
  label,
  baseId,
  orientation,
}: {
  stages: RetailWorkflowStage[];
  activeIndex: number;
  onSelect: (index: number) => void;
  label: string;
  baseId: string;
  orientation: "vertical" | "horizontal";
}) {
  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const horizontal = orientation === "horizontal";
      const rtl =
        typeof document !== "undefined" && document.documentElement.dir === "rtl";
      const nextKey = horizontal ? (rtl ? "ArrowLeft" : "ArrowRight") : "ArrowDown";
      const prevKey = horizontal ? (rtl ? "ArrowRight" : "ArrowLeft") : "ArrowUp";
      let next = activeIndex;

      if (e.key === nextKey) next = (activeIndex + 1) % stages.length;
      else if (e.key === prevKey) next = (activeIndex - 1 + stages.length) % stages.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = stages.length - 1;
      else return;

      e.preventDefault();
      onSelect(next);
      const el = document.getElementById(`${baseId}-tab-${stages[next].id}`);
      el?.focus();
    },
    [activeIndex, baseId, onSelect, orientation, stages],
  );

  if (orientation === "horizontal") {
    return (
      <div className="relative">
        <div
          role="tablist"
          aria-label={label}
          aria-orientation="horizontal"
          onKeyDown={onKeyDown}
          className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {stages.map((stage, i) => {
            const active = i === activeIndex;
            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${stage.id}`}
                aria-selected={active}
                aria-controls={`${baseId}-panel`}
                tabIndex={active ? 0 : -1}
                onClick={() => onSelect(i)}
                className={`shrink-0 inline-flex min-h-11 flex-col justify-center rounded-[10px] border px-3.5 py-2 text-start transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                  active
                    ? "border-ink/20 bg-ink text-bg"
                    : "border-line bg-card text-ink-secondary hover:border-line-strong hover:text-ink"
                }`}
              >
                <span
                  className={`block font-mono text-[0.65rem] tabular-nums ${
                    active ? "text-bg/70" : "text-muted"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-0.5 block whitespace-nowrap text-sm font-medium leading-snug">
                  {stage.navLabel}
                </span>
              </button>
            );
          })}
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 end-0 w-8 bg-gradient-to-l from-surface to-transparent"
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div
      role="tablist"
      aria-label={label}
      aria-orientation="vertical"
      onKeyDown={onKeyDown}
      className="flex flex-col gap-px overflow-hidden rounded-[12px] border border-line bg-line"
    >
      {stages.map((stage, i) => {
        const active = i === activeIndex;
        return (
          <button
            key={stage.id}
            type="button"
            role="tab"
            id={`${baseId}-tab-${stage.id}`}
            aria-selected={active}
            aria-controls={`${baseId}-panel`}
            tabIndex={active ? 0 : -1}
            onClick={() => onSelect(i)}
            className={`flex w-full items-start gap-3 px-4 py-3.5 text-start transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink ${
              active ? "bg-card text-ink" : "bg-surface text-muted hover:bg-card hover:text-ink"
            }`}
          >
            <span
              className={`mt-0.5 font-mono text-[0.7rem] tabular-nums ${
                active ? "text-ink" : "text-muted-2"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={`min-w-0 flex-1 text-sm font-medium leading-snug tracking-tight ${
                active ? "text-ink" : "text-ink-secondary"
              }`}
            >
              {stage.navLabel}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function RetailFeatures({ copy }: Props) {
  const baseId = useId();
  const reduce = useReducedMotion();
  const stages = copy.stages;
  const [activeIndex, setActiveIndex] = useState(0);
  const [wideViewport, setWideViewport] = useState(false);
  const sceneRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollingToRef = useRef<number | null>(null);
  const activeIndexRef = useRef(0);

  const activeStage = stages[activeIndex] ?? stages[0];
  /** Sticky scroll storytelling only when wide AND motion is allowed. */
  const stickyStory = wideViewport && !reduce;

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const mq = window.matchMedia(STICKY_MQ);
    const sync = () => setWideViewport(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!stickyStory || stages.length === 0) return;

    const nodes = sceneRefs.current.filter(Boolean) as HTMLElement[];
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollingToRef.current !== null) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visible[0];
        if (!top?.target) return;
        const idx = Number((top.target as HTMLElement).dataset.stageIndex);
        if (Number.isFinite(idx) && idx !== activeIndexRef.current) {
          setActiveIndex(idx);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [stickyStory, stages.length]);

  const selectStage = useCallback(
    (index: number) => {
      setActiveIndex(index);
      if (!stickyStory) return;

      const node = sceneRefs.current[index];
      if (!node) return;

      scrollingToRef.current = index;
      node.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      window.setTimeout(() => {
        scrollingToRef.current = null;
      }, 700);
    },
    [stickyStory],
  );

  if (!activeStage) return null;

  return (
    <section className="bg-surface hairline-b" aria-labelledby={`${baseId}-title`}>
      <div className="shell py-16 md:py-24">
        <Reveal>
          <header className="max-w-3xl">
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h2
              id={`${baseId}-title`}
              className="text-[clamp(1.875rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink [text-wrap:balance]"
            >
              {copy.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg [text-wrap:pretty]">
              {copy.intro}
            </p>
          </header>
        </Reveal>

        {/* Sticky story on wide viewports; sequential stages below xl / reduced motion */}
        {stickyStory ? (
          <div className="mt-14 grid grid-cols-[160px_minmax(0,1.45fr)_minmax(240px,0.75fr)] items-start gap-10 xl:gap-12">
            <div
              className="sticky"
              style={{ top: "calc(var(--primary-chrome-h) + 1rem)" }}
            >
              <StageNav
                stages={stages}
                activeIndex={activeIndex}
                onSelect={selectStage}
                label={copy.stagesNavLabel}
                baseId={baseId}
                orientation="vertical"
              />
            </div>

            <div
              id={`${baseId}-panel`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${activeStage.id}`}
              className="sticky"
              style={{ top: "calc(var(--primary-chrome-h) + 1rem)" }}
            >
              <RetailWorkflowVisual
                stage={isStageId(activeStage.id) ? activeStage.id : "purchase"}
                ui={copy.ui}
              />
            </div>

            <div className="relative">
              {stages.map((stage, i) => (
                <article
                  key={stage.id}
                  ref={(el) => {
                    sceneRefs.current[i] = el;
                  }}
                  data-stage-index={i}
                  id={`${baseId}-scene-${stage.id}`}
                  className={`flex min-h-[58vh] flex-col justify-center py-12 ${
                    i === stages.length - 1 ? "pb-6" : ""
                  }`}
                >
                  <p className="font-mono text-[0.7rem] tabular-nums text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className={`mt-3 text-[clamp(1.5rem,2vw,1.85rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink transition-opacity duration-300 [text-wrap:balance] ${
                      i === activeIndex ? "opacity-100" : "opacity-25"
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p
                    className={`mt-4 max-w-sm text-[0.975rem] leading-relaxed text-ink-secondary transition-opacity duration-300 [text-wrap:pretty] ${
                      i === activeIndex ? "opacity-100" : "opacity-20"
                    }`}
                  >
                    {stage.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10 flex flex-col gap-6 md:gap-8">
            <StageNav
              stages={stages}
              activeIndex={activeIndex}
              onSelect={selectStage}
              label={copy.stagesNavLabel}
              baseId={baseId}
              orientation="horizontal"
            />

            {/* Single active stage on mobile / reduced-motion — quality over length */}
            <article
              id={`${baseId}-scene-${activeStage.id}`}
              className="grid gap-5 border-t border-line pt-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-8 md:pt-10"
            >
              <div>
                <p className="font-mono text-[0.7rem] tabular-nums text-muted">
                  {String(activeIndex + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[clamp(1.35rem,3vw,1.75rem)] font-semibold tracking-tight text-ink [text-wrap:balance]">
                  {activeStage.title}
                </h3>
                <p className="mt-3 max-w-md text-[0.975rem] leading-relaxed text-ink-secondary [text-wrap:pretty]">
                  {activeStage.body}
                </p>
              </div>
              <div
                id={`${baseId}-panel`}
                role="tabpanel"
                aria-labelledby={`${baseId}-tab-${activeStage.id}`}
              >
                <RetailWorkflowVisual
                  stage={
                    isStageId(activeStage.id) ? activeStage.id : "purchase"
                  }
                  ui={copy.ui}
                  compact
                />
              </div>
            </article>
          </div>
        )}

        <Reveal delay={0.08}>
          <div className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-14">
            <h3 className="text-lg font-semibold tracking-tight text-ink md:text-xl">
              {copy.supporting.title}
            </h3>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-[12px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {copy.supporting.items.map((item) => (
                <li key={item.id} className="bg-card p-5 md:p-6">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] bg-surface-2 text-ink">
                    {retailFeatureIcon(item.icon, "h-4 w-4")}
                  </span>
                  <h4 className="mt-4 text-sm font-semibold tracking-tight text-ink">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
