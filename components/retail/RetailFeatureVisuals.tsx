"use client";

/**
 * Persistent ESTINAD Retail product shell.
 * One interface; five operational states that morph shared clothing-variant data.
 * No fake browser chrome.
 */

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export type RetailWorkflowStageId =
  | "purchase"
  | "receive"
  | "stock"
  | "sell"
  | "understand";

export type RetailWorkflowUiCopy = {
  appName: string;
  search: string;
  navPurchase: string;
  navReceive: string;
  navStock: string;
  navSell: string;
  navUnderstand: string;
  product: string;
  secondaryProduct: string;
  supplier: string;
  poNumber: string;
  purchaseOrders: string;
  supplierLabel: string;
  products: string;
  qty: string;
  status: string;
  orderCreated: string;
  draft: string;
  ordered: string;
  receiving: string;
  orderedQty: string;
  receivedQty: string;
  inventoryUpdated: string;
  inventory: string;
  onHand: string;
  stockStatus: string;
  lowStock: string;
  ok: string;
  pos: string;
  cart: string;
  barcodeScan: string;
  pay: string;
  receipt: string;
  paid: string;
  total: string;
  todaySales: string;
  payments: string;
  topProducts: string;
  shift: string;
  cash: string;
  card: string;
  performance: string;
  sizeLabel: string;
  skuLabel: string;
};

type Props = {
  stage: RetailWorkflowStageId;
  ui: RetailWorkflowUiCopy;
  compact?: boolean;
};

const EASE = [0.16, 1, 0.3, 1] as const;
const MICRO = 0.16;
const UI = 0.32;

const NAV: { id: RetailWorkflowStageId; labelKey: keyof RetailWorkflowUiCopy }[] = [
  { id: "purchase", labelKey: "navPurchase" },
  { id: "receive", labelKey: "navReceive" },
  { id: "stock", labelKey: "navStock" },
  { id: "sell", labelKey: "navSell" },
  { id: "understand", labelKey: "navUnderstand" },
];

/** Shared clothing-variant story — continuous across stages. */
const STORY = {
  primarySku: "OXF-WHT-M",
  secondarySku: "CHI-NVY-32",
  ordered: 24,
  received: 24,
  onHand: 48,
  sold: 1,
  afterSale: 47,
  soldToday: 18,
  secondaryOnHand: 6,
  secondarySoldToday: 9,
  unitPrice: "4 800 DA",
  todaySales: "186 400 DA",
} as const;

function Shell({
  children,
  ui,
  stage,
  compact,
}: {
  children: ReactNode;
  ui: RetailWorkflowUiCopy;
  stage: RetailWorkflowStageId;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[12px] border border-line bg-card shadow-card ${
        compact ? "min-h-[360px]" : "min-h-[440px] xl:min-h-[560px]"
      }`}
    >
      <div className={`flex h-full ${compact ? "flex-col" : "flex-col sm:flex-row"}`}>
        {!compact ? (
          <aside
            className="hidden w-[156px] shrink-0 flex-col border-e border-line bg-surface p-3 sm:flex"
            aria-hidden
          >
            <div className="px-1.5 pt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
              {ui.appName}
            </div>
            <ul className="mt-4 flex flex-col gap-0.5">
              {NAV.map((item) => {
                const active = item.id === stage;
                return (
                  <li
                    key={item.id}
                    className={`rounded-[8px] px-2.5 py-2 text-[0.7rem] leading-snug transition-colors duration-200 ${
                      active
                        ? "bg-card font-medium text-ink shadow-card"
                        : "text-muted"
                    }`}
                  >
                    {ui[item.labelKey]}
                  </li>
                );
              })}
            </ul>
          </aside>
        ) : null}

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between gap-3 border-b border-line px-3 py-2.5 sm:px-4">
            <div className="min-w-0 flex-1">
              {compact ? (
                <div className="truncate font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                  {ui.appName}
                </div>
              ) : (
                <div className="h-8 w-[min(100%,260px)] rounded-[8px] border border-line bg-surface px-3 text-[0.7rem] leading-8 text-muted">
                  {ui.search}
                </div>
              )}
            </div>
            <div className="font-mono text-[0.65rem] tabular-nums text-muted">
              {String(NAV.findIndex((n) => n.id === stage) + 1).padStart(2, "0")} / 05
            </div>
          </header>
          <div className="relative min-h-0 flex-1 overflow-hidden p-3 sm:p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

function PurchaseStage({ ui, reduce }: { ui: RetailWorkflowUiCopy; reduce: boolean | null }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-3">
        <div className="text-[0.65rem] font-mono uppercase tracking-[0.14em] text-muted">
          {ui.purchaseOrders}
        </div>
        <motion.span
          layoutId={reduce ? undefined : "story-badge"}
          className="rounded-full bg-ink px-2.5 py-1 text-[0.65rem] font-medium text-bg"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduce ? 0.1 : MICRO + 0.08, delay: reduce ? 0 : 0.2, ease: EASE }}
        >
          {ui.orderCreated}
        </motion.span>
      </div>

      <div className="mt-3 rounded-[10px] border border-line bg-surface p-3 sm:p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="font-mono text-[0.65rem] text-muted">{ui.poNumber}</div>
            <div className="mt-1 text-sm font-medium text-ink">
              {ui.supplierLabel}: {ui.supplier}
            </div>
          </div>
          <span className="rounded-full border border-line bg-card px-2.5 py-1 text-[0.65rem] text-ink-secondary">
            {ui.ordered}
          </span>
        </div>

        <div className="mt-4 overflow-hidden rounded-[8px] border border-line bg-card">
          <div className="grid grid-cols-[1.2fr_0.7fr_0.45fr_0.7fr] gap-2 border-b border-line bg-surface-2 px-3 py-2 text-[0.6rem] uppercase tracking-wider text-muted">
            <span>{ui.products}</span>
            <span>{ui.skuLabel}</span>
            <span>{ui.qty}</span>
            <span>{ui.status}</span>
          </div>
          <motion.div
            layoutId={reduce ? undefined : "coffee-row"}
            className="grid grid-cols-[1.2fr_0.7fr_0.45fr_0.7fr] items-center gap-2 px-3 py-3"
            transition={{ duration: reduce ? 0 : UI, ease: EASE }}
          >
            <span className="text-[0.8rem] font-medium text-ink">{ui.product}</span>
            <span className="font-mono text-[0.65rem] text-muted">{STORY.primarySku}</span>
            <motion.span
              layoutId={reduce ? undefined : "coffee-qty"}
              className="tabular-nums text-[0.8rem] text-ink"
            >
              {STORY.ordered}
            </motion.span>
            <span className="w-fit rounded-full bg-ink px-2 py-0.5 text-[0.6rem] text-bg">
              {ui.ordered}
            </span>
          </motion.div>
          <div className="grid grid-cols-[1.2fr_0.7fr_0.45fr_0.7fr] items-center gap-2 border-t border-line px-3 py-3">
            <span className="text-[0.8rem] text-ink-secondary">{ui.secondaryProduct}</span>
            <span className="font-mono text-[0.65rem] text-muted">{STORY.secondarySku}</span>
            <span className="tabular-nums text-[0.8rem] text-muted">12</span>
            <span className="w-fit rounded-full border border-line px-2 py-0.5 text-[0.6rem] text-muted">
              {ui.draft}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReceiveStage({ ui, reduce }: { ui: RetailWorkflowUiCopy; reduce: boolean | null }) {
  return (
    <div className="flex h-full flex-col">
      <div className="text-[0.65rem] font-mono uppercase tracking-[0.14em] text-muted">
        {ui.receiving} · {ui.poNumber}
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[10px] border border-line bg-surface p-3 sm:p-4">
          <div className="text-[0.65rem] text-muted">{ui.orderedQty}</div>
          <div className="mt-2 text-2xl font-semibold tracking-tight tabular-nums text-ink">
            {STORY.ordered}
          </div>
          <div className="mt-1 text-sm text-ink-secondary">{ui.product}</div>
          <div className="mt-2 font-mono text-[0.65rem] text-muted">{STORY.primarySku}</div>
        </div>
        <motion.div
          className="rounded-[10px] border border-ink/20 bg-card p-3 shadow-card sm:p-4"
          layoutId={reduce ? undefined : "coffee-row"}
          transition={{ duration: reduce ? 0 : UI, ease: EASE }}
        >
          <div className="text-[0.65rem] text-muted">{ui.receivedQty}</div>
          <motion.div
            layoutId={reduce ? undefined : "coffee-qty"}
            className="mt-2 text-2xl font-semibold tracking-tight tabular-nums text-ink"
          >
            {STORY.received}
          </motion.div>
          <div className="mt-1 text-sm text-ink-secondary">{ui.product}</div>
          <div className="mt-2 font-mono text-[0.65rem] text-muted">{STORY.primarySku}</div>
        </motion.div>
      </div>

      <motion.div
        layoutId={reduce ? undefined : "story-badge"}
        className="mt-auto rounded-[10px] border border-line bg-surface px-3 py-3 text-sm text-ink-secondary"
        transition={{ duration: reduce ? 0 : UI, ease: EASE }}
      >
        {ui.inventoryUpdated}: {ui.product} →{" "}
        <span className="font-medium text-ink tabular-nums">{STORY.onHand}</span>
      </motion.div>
    </div>
  );
}

function StockStage({ ui, reduce }: { ui: RetailWorkflowUiCopy; reduce: boolean | null }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-3">
        <div className="text-[0.65rem] font-mono uppercase tracking-[0.14em] text-muted">
          {ui.inventory}
        </div>
        <motion.span
          layoutId={reduce ? undefined : "story-badge"}
          className="rounded-full bg-ink px-2.5 py-1 text-[0.65rem] font-medium text-bg"
          transition={{ duration: reduce ? 0 : UI, ease: EASE }}
        >
          {ui.lowStock}
        </motion.span>
      </div>

      <div className="mt-3 overflow-hidden rounded-[10px] border border-line">
        <div className="grid grid-cols-[1.3fr_0.7fr_0.55fr_0.8fr] gap-2 border-b border-line bg-surface-2 px-3 py-2 text-[0.6rem] uppercase tracking-wider text-muted">
          <span>{ui.products}</span>
          <span>{ui.skuLabel}</span>
          <span>{ui.onHand}</span>
          <span>{ui.stockStatus}</span>
        </div>

        <motion.div
          layoutId={reduce ? undefined : "coffee-row"}
          className="grid grid-cols-[1.3fr_0.7fr_0.55fr_0.8fr] items-center gap-2 bg-surface px-3 py-3.5"
          transition={{ duration: reduce ? 0 : UI, ease: EASE }}
        >
          <span className="text-[0.8rem] font-medium text-ink">{ui.product}</span>
          <span className="font-mono text-[0.65rem] text-muted">{STORY.primarySku}</span>
          <motion.span
            layoutId={reduce ? undefined : "coffee-qty"}
            className="tabular-nums text-[0.9rem] text-ink"
          >
            {STORY.onHand}
          </motion.span>
          <span className="w-fit rounded-full border border-line bg-card px-2 py-0.5 text-[0.6rem] text-muted">
            {ui.ok}
          </span>
        </motion.div>

        <div className="grid grid-cols-[1.3fr_0.7fr_0.55fr_0.8fr] items-center gap-2 border-t border-line bg-card px-3 py-3.5">
          <span className="text-[0.8rem] font-medium text-ink">{ui.secondaryProduct}</span>
          <span className="font-mono text-[0.65rem] text-muted">{STORY.secondarySku}</span>
          <span className="tabular-nums text-[0.9rem] font-semibold text-ink">
            {String(STORY.secondaryOnHand).padStart(2, "0")}
          </span>
          <span className="w-fit rounded-full bg-ink px-2 py-0.5 text-[0.6rem] text-bg">
            {ui.lowStock}
          </span>
        </div>
      </div>
    </div>
  );
}

function SellStage({ ui, reduce }: { ui: RetailWorkflowUiCopy; reduce: boolean | null }) {
  return (
    <div className="flex h-full flex-col gap-3 sm:flex-row">
      <div className="flex min-w-0 flex-1 flex-col rounded-[10px] border border-line bg-surface p-3 sm:p-4">
        <div className="text-[0.65rem] font-mono uppercase tracking-[0.14em] text-muted">
          {ui.pos}
        </div>
        <div className="mt-3 rounded-[8px] border border-dashed border-line-strong bg-card px-3 py-3 text-center text-[0.75rem] text-ink-secondary">
          {ui.barcodeScan}
        </div>
        <motion.div
          layoutId={reduce ? undefined : "coffee-row"}
          className="mt-3 rounded-[8px] border border-ink/20 bg-card p-3.5 shadow-card"
          transition={{ duration: reduce ? 0 : UI, ease: EASE }}
        >
          <div className="text-sm font-medium text-ink">{ui.product}</div>
          <div className="mt-1 font-mono text-[0.65rem] text-muted">{STORY.primarySku}</div>
          <div className="mt-2 flex items-center justify-between text-[0.75rem] text-ink-secondary">
            <span>{STORY.unitPrice}</span>
            <motion.span layoutId={reduce ? undefined : "coffee-qty"} className="tabular-nums">
              ×{STORY.sold}
            </motion.span>
          </div>
        </motion.div>
      </div>

      <div className="flex w-full flex-col rounded-[10px] border border-line bg-card p-3 sm:w-[44%] sm:p-4">
        <div className="text-[0.65rem] font-mono uppercase tracking-[0.14em] text-muted">
          {ui.cart}
        </div>
        <ul className="mt-3 flex-1 space-y-2">
          <li className="flex items-center justify-between border-b border-line pb-2.5 text-sm">
            <span className="min-w-0 truncate text-ink">{ui.product}</span>
            <span className="tabular-nums text-ink-secondary">×{STORY.sold}</span>
          </li>
        </ul>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-muted">{ui.total}</span>
          <span className="font-semibold tabular-nums text-ink">{STORY.unitPrice}</span>
        </div>
        <motion.div
          layoutId={reduce ? undefined : "story-badge"}
          className="mt-3 rounded-[8px] bg-ink px-3 py-2.5 text-center text-xs font-medium text-bg"
          transition={{ duration: reduce ? 0 : UI, ease: EASE }}
        >
          {ui.pay}
        </motion.div>
        <div className="mt-2 text-center text-[0.7rem] text-muted">
          {ui.receipt} · {ui.paid}
        </div>
      </div>
    </div>
  );
}

function UnderstandStage({ ui, reduce }: { ui: RetailWorkflowUiCopy; reduce: boolean | null }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-3">
        <div className="text-[0.65rem] font-mono uppercase tracking-[0.14em] text-muted">
          {ui.performance}
        </div>
        <div className="text-[0.7rem] text-muted">{ui.shift}</div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <div className="rounded-[10px] border border-line bg-surface p-3 sm:p-3.5">
          <div className="text-[0.65rem] text-muted">{ui.todaySales}</div>
          <motion.div
            layoutId={reduce ? undefined : "story-badge"}
            className="mt-2 text-lg font-semibold tracking-tight tabular-nums text-ink sm:text-xl"
            transition={{ duration: reduce ? 0 : UI, ease: EASE }}
          >
            {STORY.todaySales}
          </motion.div>
        </div>
        <div className="rounded-[10px] border border-line bg-surface p-3 sm:p-3.5">
          <div className="text-[0.65rem] text-muted">{ui.payments}</div>
          <div className="mt-3 flex h-1.5 overflow-hidden rounded-full bg-line">
            <div className="w-[62%] bg-ink" />
            <div className="w-[38%] bg-ink/35" />
          </div>
          <div className="mt-2 flex justify-between text-[0.65rem] text-muted">
            <span>
              {ui.cash} 62%
            </span>
            <span>
              {ui.card} 38%
            </span>
          </div>
        </div>
        <div className="col-span-full rounded-[10px] border border-line bg-surface p-3 sm:col-span-1 sm:p-3.5">
          <div className="text-[0.65rem] text-muted">{ui.topProducts}</div>
          <ol className="mt-2 space-y-2">
            <motion.li
              layoutId={reduce ? undefined : "coffee-row"}
              className="flex items-center justify-between gap-2 text-[0.75rem]"
              transition={{ duration: reduce ? 0 : UI, ease: EASE }}
            >
              <span className="min-w-0 truncate text-ink">{ui.product}</span>
              <motion.span
                layoutId={reduce ? undefined : "coffee-qty"}
                className="shrink-0 tabular-nums text-muted"
              >
                ×{STORY.soldToday}
              </motion.span>
            </motion.li>
            <li className="flex items-center justify-between gap-2 text-[0.75rem]">
              <span className="min-w-0 truncate text-ink-secondary">{ui.secondaryProduct}</span>
              <span className="shrink-0 tabular-nums text-muted">×{STORY.secondarySoldToday}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

function StageBody({
  stage,
  ui,
  reduce,
}: {
  stage: RetailWorkflowStageId;
  ui: RetailWorkflowUiCopy;
  reduce: boolean | null;
}) {
  switch (stage) {
    case "purchase":
      return <PurchaseStage ui={ui} reduce={reduce} />;
    case "receive":
      return <ReceiveStage ui={ui} reduce={reduce} />;
    case "stock":
      return <StockStage ui={ui} reduce={reduce} />;
    case "sell":
      return <SellStage ui={ui} reduce={reduce} />;
    case "understand":
      return <UnderstandStage ui={ui} reduce={reduce} />;
  }
}

export function RetailWorkflowVisual({ stage, ui, compact = false }: Props) {
  const reduce = useReducedMotion();

  return (
    <Shell ui={ui} stage={stage} compact={compact}>
      <LayoutGroup id="retail-workflow">
        {reduce ? (
          <div className="h-full">
            <StageBody stage={stage} ui={ui} reduce={reduce} />
          </div>
        ) : (
          <div className="relative h-full">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={stage}
                className="h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: MICRO, ease: EASE }}
              >
                <StageBody stage={stage} ui={ui} reduce={reduce} />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </LayoutGroup>
    </Shell>
  );
}
