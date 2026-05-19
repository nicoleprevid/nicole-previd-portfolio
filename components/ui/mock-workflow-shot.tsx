import { cn } from "@/lib/utils";

type MockWorkflowShotProps = {
  variant?: "before" | "after" | "ai" | "stack";
  className?: string;
};

export function MockWorkflowShot({ variant = "after", className }: MockWorkflowShotProps) {
  const before = variant === "before";
  const ai = variant === "ai";
  const stack = variant === "stack";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-[color:var(--line)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]",
        before
          ? "bg-[linear-gradient(180deg,rgba(255,247,230,0.72),rgba(255,255,255,0.92))] dark:bg-[linear-gradient(180deg,rgba(63,49,29,0.32),rgba(24,22,19,0.96))]"
          : "bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,249,238,0.98))] dark:bg-[linear-gradient(180deg,rgba(34,31,24,0.95),rgba(22,20,16,0.98))]",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="h-8 w-28 rounded-full border border-[color:var(--line)] bg-white/60 dark:bg-white/5" />
      </div>

      <div className={cn("grid gap-4", stack ? "md:grid-cols-[0.9fr_1.1fr]" : "md:grid-cols-[0.75fr_1.25fr]")}>
        <div className="space-y-3">
          <div className="space-y-2 rounded-[22px] border border-[color:var(--line)] bg-black/4 p-4 dark:bg-white/4">
            <div className="h-3 w-24 rounded-full bg-[color:var(--accent-soft)]" />
            {Array.from({ length: before ? 6 : 4 }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-9 rounded-2xl border border-[color:var(--line)]",
                  before ? "bg-white/55 dark:bg-white/6" : "bg-[color:var(--accent-soft)]/55 dark:bg-[color:var(--accent-soft)]/35",
                )}
              />
            ))}
          </div>
          <div className="rounded-[22px] border border-[color:var(--line)] bg-black/4 p-4 dark:bg-white/4">
            <div className="mb-3 h-3 w-20 rounded-full bg-[color:var(--accent-soft)]" />
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-16 rounded-2xl border border-[color:var(--line)] bg-white/55 dark:bg-white/6" />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-[24px] border border-[color:var(--line)] bg-white/65 p-4 dark:bg-white/5">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-3 w-28 rounded-full bg-[color:var(--accent-soft)]" />
              <div className="h-8 w-20 rounded-full bg-[color:var(--accent-soft)]/60" />
            </div>

            {before ? (
              <div className="grid gap-3 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="space-y-3 rounded-[20px] border border-[color:var(--line)] bg-black/4 p-3 dark:bg-white/4">
                    <div className="h-3 w-16 rounded-full bg-white/75 dark:bg-white/15" />
                    <div className="h-16 rounded-2xl bg-white/75 dark:bg-white/10" />
                    <div className="h-16 rounded-2xl bg-white/75 dark:bg-white/10" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-3 md:grid-cols-3">
                {["Configure", "Execute", "Validate"].map((label) => (
                  <div
                    key={label}
                    className="rounded-[20px] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(247,236,214,0.8))] p-4 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]"
                  >
                    <div className="mb-6 h-10 w-10 rounded-2xl bg-[color:var(--accent-soft)]" />
                    <div className="mb-2 text-sm font-semibold">{label}</div>
                    <div className="h-3 w-full rounded-full bg-black/6 dark:bg-white/8" />
                    <div className="mt-2 h-3 w-3/4 rounded-full bg-black/6 dark:bg-white/8" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[22px] border border-[color:var(--line)] bg-black/4 p-4 dark:bg-white/4">
              <div className="mb-4 flex items-center justify-between">
                <div className="h-3 w-32 rounded-full bg-[color:var(--accent-soft)]" />
                <div className="h-3 w-14 rounded-full bg-black/8 dark:bg-white/8" />
              </div>
              <div className={cn("grid gap-2", ai ? "grid-cols-4" : "grid-cols-12")}>
                {Array.from({ length: ai ? 12 : 24 }).map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "rounded-xl",
                      ai ? "h-14 border border-[color:var(--line)] bg-white/70 dark:bg-white/7" : "h-4 bg-black/8 dark:bg-white/8",
                    )}
                    style={ai ? undefined : { gridColumn: `span ${index % 5 === 0 ? 12 : index % 3 === 0 ? 8 : 6} / span ${index % 5 === 0 ? 12 : index % 3 === 0 ? 8 : 6}` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-[22px] border border-[color:var(--line)] bg-black/4 p-4 dark:bg-white/4">
              <div className="mb-3 h-3 w-16 rounded-full bg-[color:var(--accent-soft)]" />
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="mb-2 h-10 rounded-2xl bg-white/75 dark:bg-white/8" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
