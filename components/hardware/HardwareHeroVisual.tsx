/** Abstract monochrome hardware silhouette for the Certified Hardware hero. */
export function HardwareHeroVisual() {
  return (
    <div
      className="relative aspect-[4/5] w-full max-w-md ms-auto hairline rounded-card bg-surface overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 grid-fine opacity-50" />
      <div className="absolute inset-6 md:inset-8 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
            ESTINAD
          </span>
          <span className="h-1.5 w-1.5 rotate-45 border border-line-strong" />
        </div>

        <div className="relative mx-auto w-full max-w-[240px]">
          {/* Terminal body */}
          <div className="relative hairline rounded-[12px] bg-card shadow-card p-3">
            <div className="aspect-[5/3] rounded-[8px] bg-surface-2 hairline flex items-center justify-center">
              <div className="w-3/5 space-y-2">
                <div className="h-px w-full bg-line-strong" />
                <div className="h-px w-4/5 bg-line" />
                <div className="h-px w-3/5 bg-line" />
                <div className="mt-3 h-6 w-16 rounded-full border border-line-strong mx-auto" />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between px-1">
              <span className="h-1 w-8 bg-line-strong rounded-full" />
              <span className="h-1.5 w-1.5 rounded-full bg-ink/40" />
            </div>
          </div>

          {/* Printer / accessory silhouette */}
          <div className="mt-4 hairline rounded-[10px] bg-card p-3 shadow-card">
            <div className="flex items-end gap-3">
              <div className="h-10 w-16 rounded-[6px] bg-surface-2 hairline" />
              <div className="flex-1 space-y-1.5 pb-1">
                <div className="h-px w-full bg-line-strong" />
                <div className="h-px w-5/6 bg-line" />
                <div className="h-px w-2/3 bg-line" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
          <span>Certified</span>
          <span>Deployment</span>
        </div>
      </div>
    </div>
  );
}
