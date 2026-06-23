import { cn } from "@/lib/utils";

type BrowserShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function BrowserShell({ children, className }: BrowserShellProps) {
  return (
    <div className={cn("surface-strong relative overflow-hidden rounded-[34px]", className)}>
      <div className="border-b border-[color:var(--line)] bg-[color:var(--nav)] px-5 py-4 backdrop-blur-xl sm:px-7">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="ml-3 flex-1 rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-4 py-2 text-center text-xs text-[color:var(--muted)] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
            workspace / nicole-previd
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
