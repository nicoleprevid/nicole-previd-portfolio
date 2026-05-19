"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Context",
    content:
      "Used by operational and technical users during homologation, validation, and automation-heavy banking processes.",
    sections: [
      {
        label: "Role",
        text: "Frontend Engineer with strong involvement in workflow exploration, usability discussions, and frontend architecture decisions using Angular.",
      },
      {
        label: "How the system worked",
        text: "The application listed automations created by bank users. Each automation could combine SQL calls, API requests, conditional branches, and validation rules, with each one acting as a step inside a larger execution flow.",
      },
      {
        label: "Why that mattered",
        text: "Once an automation was configured, it became available for other users to run. That meant the product needed to support both creation and execution clearly, without forcing both workflows into the same mental model.",
      },
      {
        label: "View 01",
        title: "Automation authoring",
        text: "A creator needed to define or edit the automation itself: step logic, SQL and API calls, execution conditions, and validation behavior.",
      },
      {
        label: "View 02",
        title: "Automation execution",
        text: "An operator needed to run an existing automation, provide inputs, inspect technical output, and review execution history without dealing with unnecessary authoring complexity.",
      },
    ],
    chips: [
      "configure operational inputs",
      "execute automations",
      "validate outputs",
      "analyze JSON responses",
      "monitor asynchronous executions",
      "navigate execution history",
    ],
    note: "Final high-fidelity screens were produced in Figma by the UX Designer with the team.",
  },
  {
    title: "Challenge",
    content:
      "The product needed to support two different moments clearly: authoring automations and executing existing ones. Over time, creation, execution, JSON inspection, and run history started competing for space in the same screens.",
  },
  {
    title: "What improved",
    content:
      "The redesign introduced clearer separation between edit and execute flows, reduced simultaneous information load, improved action hierarchy, and made execution history and technical output easier to inspect without overwhelming the main task.",
  },
];

export function CaseStudyAccordion() {
  const [openItem, setOpenItem] = useState("");

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openItem === item.title;

        return (
          <div key={item.title} className="surface overflow-hidden rounded-[24px]">
            <button
              type="button"
              onClick={() => setOpenItem(isOpen ? "" : item.title)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
            >
              <div>
                <p className="text-muted text-xs font-semibold uppercase tracking-[0.24em]">Case study</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              </div>
              <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[color:var(--line)] px-5 py-5 sm:px-6">
                    <p className="text-muted text-sm leading-7 sm:text-[15px]">{item.content}</p>
                    {"sections" in item && item.sections ? (
                      <div className="mt-5 grid gap-4">
                        {item.sections.map((section) => (
                          <div key={`${item.title}-${section.label}`} className="rounded-[20px] border border-[color:var(--line)] bg-white/70 p-4 dark:bg-white/4">
                            <div className="text-muted text-[11px] font-semibold uppercase tracking-[0.22em]">{section.label}</div>
                            {section.title ? <div className="mt-2 text-sm font-semibold">{section.title}</div> : null}
                            <p className="text-muted mt-2 text-sm leading-7">{section.text}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    {"chips" in item && item.chips ? (
                      <div className="mt-5">
                        <div className="text-muted text-[11px] font-semibold uppercase tracking-[0.22em]">Users needed to</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.chips.map((chip) => (
                            <div key={chip} className="rounded-full border border-[color:var(--line)] px-3 py-1.5 text-sm text-[color:var(--muted)]">
                              {chip}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    {item.note ? <p className="mt-4 rounded-2xl bg-[color:var(--accent-soft)] px-4 py-3 text-sm leading-6">{item.note}</p> : null}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
