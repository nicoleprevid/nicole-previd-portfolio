"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MockWorkflowShot } from "@/components/ui/mock-workflow-shot";

export function ComparisonSlider() {
  const [value, setValue] = useState(58);

  return (
    <div className="surface relative overflow-hidden rounded-[30px] p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold">Interactive comparison</p>
          <p className="text-muted text-sm">Drag to compare the operational flow before and after the redesign.</p>
        </div>
        <div className="rounded-full border border-[color:var(--line)] bg-white/60 px-4 py-2 text-xs font-medium dark:bg-white/5">
          {value}% after
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[26px]">
        <MockWorkflowShot variant="before" className="min-h-[460px]" />
        <motion.div
          className="absolute inset-0 overflow-hidden"
          animate={{ width: `${value}%` }}
          transition={{ type: "spring", stiffness: 140, damping: 20 }}
        >
          <MockWorkflowShot variant="after" className="min-h-[460px] rounded-none border-0" />
        </motion.div>

        <motion.div
          className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]"
          animate={{ left: `calc(${value}% - 1px)` }}
          transition={{ type: "spring", stiffness: 140, damping: 20 }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[color:var(--panel-strong)] text-xs font-semibold shadow-lg backdrop-blur-xl">
            ↔
          </div>
        </motion.div>

        <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">Before</div>
        <div className="absolute right-4 top-4 rounded-full bg-[color:var(--accent)] px-3 py-1 text-xs font-medium text-black/80">
          After
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="mt-5 w-full accent-[color:var(--accent)]"
        aria-label="Compare before and after interface"
      />
    </div>
  );
}
