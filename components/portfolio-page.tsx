"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Braces,
  Code2,
  GitBranch,
  MonitorCog,
  Sparkles,
} from "lucide-react";
import { BrowserShell } from "@/components/browser-shell";
import { SectionHeading } from "@/components/section-heading";
import { ThemeToggle } from "@/components/theme-toggle";
import { CaseStudyAccordion } from "@/components/ui/case-study-accordion";

const navigation = [
  { label: "Case study", href: "#case-study" },
  { label: "Tools", href: "#tools" },
  { label: "Beliefs", href: "#beliefs" },
  { label: "Contact", href: "#contact" },
];

const quickNotes = [
  { label: "Workflow-driven applications", className: "palette-breezeway" },
  { label: "Operational usability", className: "palette-cold-butter" },
  { label: "Scalable frontend systems", className: "palette-sea-salt" },
  { label: "Frontend + product thinking", className: "palette-cottage-core" },
];

const toolGroups = [
  {
    title: "Frontend",
    icon: MonitorCog,
    items: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "RxJS", "Tailwind CSS"],
  },
  {
    title: "Quality",
    icon: Braces,
    items: ["Cypress", "Jest", "Storybook", "Unit Testing", "E2E Testing"],
  },
  {
    title: "Workflow",
    icon: GitBranch,
    items: ["Docker", "Jenkins", "Git", "Git Flow", "SonarQube", "REST APIs", "Figma"],
  },
  {
    title: "AI",
    icon: Bot,
    items: ["Prompt Engineering", "Figma Make", "Claude", "ChatGPT", "Workflow exploration", "Frontend ideation"],
  },
];

const contributionPoints = [
  "what is realistically implementable",
  "what creates unnecessary technical complexity",
  "what requires backend or architectural changes",
  "what improves usability without disrupting operational flows",
  "which UX improvements generate the highest impact relative to implementation cost",
];

const paletteBoard = [
  {
    title: "Current",
    value: "AI-powered banking systems",
    className: "palette-breezeway",
  },
  {
    title: "Focus",
    value: "Workflow clarity and frontend scale",
    className: "palette-cold-butter",
  },
  {
    title: "Mode",
    value: "Frontend, UX, and product thinking",
    className: "palette-sea-salt",
  },
  {
    title: "Interest",
    value: "LLM workflows and internal tools",
    className: "palette-summer-garden",
  },
];

function NavPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-full px-3 py-2 text-sm text-[color:var(--muted)] transition-colors duration-300 hover:bg-black/5 hover:text-[color:var(--foreground)] dark:hover:bg-white/5"
    >
      {label}
    </a>
  );
}

export function PortfolioPage() {
  return (
    <main className="relative overflow-hidden px-4 py-6 text-[color:var(--foreground)] sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(243,224,136,0.34),transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_top,rgba(102,102,102,0.14),transparent_62%)]" />

      <BrowserShell className="mx-auto max-w-[1380px]">
        <div className="relative">
          <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--nav)]/96 backdrop-blur-xl">
            <div className="mx-auto flex max-w-[980px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
              <a href="#hero" className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">Nicole Previd</div>
                <div className="mt-1 text-sm">Frontend engineer</div>
              </a>

              <nav className="hidden items-center rounded-full border border-[color:var(--line)] bg-white/70 p-1 dark:bg-white/5 md:flex">
                {navigation.map((item) => (
                  <NavPill key={item.href} href={item.href} label={item.label} />
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <ThemeToggle />
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-[980px] px-5 pb-16 pt-8 sm:px-8 sm:pt-10 lg:pb-24">
            <section id="hero" className="rounded-[30px] border border-[color:var(--line)] bg-[color:var(--background-elevated)] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)] dark:bg-white/5"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Product-minded frontend engineering
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.06, ease: "easeOut" }}
                className="mt-6 text-5xl leading-[0.98] font-semibold tracking-[-0.06em] sm:text-6xl"
              >
                Nicole Previd
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
                className="text-muted mt-4 max-w-3xl text-xl leading-8 tracking-[-0.02em]"
              >
                Product-minded Frontend Engineer focused on workflow-driven applications, operational usability, and scalable frontend systems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#case-study"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--foreground)] px-5 py-3 text-sm font-medium text-[color:var(--background)] transition-opacity duration-300 hover:opacity-90"
                >
                  View case study
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--line)] bg-white/82 px-5 py-3 text-sm font-medium transition-colors duration-300 hover:bg-black/4 dark:bg-white/5 dark:hover:bg-white/8"
                >
                  Contact
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>

              <div className="mt-8 flex flex-wrap gap-3">
                {quickNotes.map((item) => (
                  <div
                    key={item.label}
                    className={`${item.className} rounded-full border border-[color:var(--line)] px-4 py-2 text-sm text-[color:var(--foreground)]`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/nicoleprevid"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/84 px-4 py-2.5 text-sm text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)] dark:bg-white/5"
                >
                  <Code2 className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/nicole-previd/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/84 px-4 py-2.5 text-sm text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)] dark:bg-white/5"
                >
                  <BriefcaseBusiness className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>

              <div className="mt-10 grid gap-3 md:grid-cols-2">
                {paletteBoard.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.34 + index * 0.04, ease: "easeOut" }}
                    className={`${item.className} rounded-[22px] border border-[color:var(--line)] p-5`}
                  >
                    <div className="text-muted text-xs font-semibold uppercase tracking-[0.22em]">{item.title}</div>
                    <p className="mt-2 text-sm leading-6">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section id="case-study" className="pt-20">
              <SectionHeading
                eyebrow="Case study"
                title="Enterprise Workflow Platform"
                description="Frontend and workflow improvements for an enterprise platform used to create, execute, validate, and monitor banking automations in operational environments."
              />

              <div className="mt-4">
                <CaseStudyAccordion />
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="palette-brick rounded-[26px] border border-[color:var(--line)] p-6"
                >
                  <div className="text-muted text-xs font-semibold uppercase tracking-[0.22em]">Before</div>
                  <div className="mt-4 overflow-hidden rounded-[18px] border border-[color:var(--line)] bg-white/80">
                    <Image
                      src="/case-study-before.png"
                      alt="Before redesign view showing automation list, JSON details, and run history competing in the same screen."
                      width={1280}
                      height={832}
                      className="h-auto w-full"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-7">
                    In the earlier flow, the list of automations, execution controls, JSON payload details, and run history competed in the same screen. Important actions were mixed with technical information, making the workflow harder to scan and more mentally expensive over time.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.04, ease: "easeOut" }}
                  className="palette-summer-garden rounded-[26px] border border-[color:var(--line)] p-6"
                >
                  <div className="text-muted text-xs font-semibold uppercase tracking-[0.22em]">After</div>
                  <div className="mt-4 overflow-hidden rounded-[18px] border border-[color:var(--line)] bg-white/80">
                    <Image
                      src="/case-study-after.png"
                      alt="After redesign view with clearer separation between edit and execute states, focused form area, and easier access to run history."
                      width={1280}
                      height={832}
                      className="h-auto w-full"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-7">
                    In the improved flow, execution became more focused. Edit and execute states were more clearly separated, the action area gained stronger hierarchy, and technical views such as form input, JSON data, and run history became easier to access without overwhelming the primary task.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="palette-cold-butter mt-4 rounded-[26px] border border-[color:var(--line)] p-6"
              >
                <div className="text-muted text-xs font-semibold uppercase tracking-[0.22em]">Outcome</div>
                <p className="mt-3 text-base leading-7">
                  Instead of introducing a highly disruptive redesign, the work improved workflow clarity, information hierarchy, execution visibility, interaction consistency, and cognitive load reduction while preserving operational stability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="palette-brick mt-4 rounded-[26px] border border-[color:var(--line)] p-6"
              >
                <div className="text-muted text-xs font-semibold uppercase tracking-[0.22em]">AI-assisted workflow exploration</div>
                <p className="text-muted mt-3 text-sm leading-7">
                  During the redesign process, ChatGPT, Claude, and Figma Make became part of the exploration workflow. While product and engineering discussed requirements and operational rules, ideas were translated into interface directions and frontend concepts in real time.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["workflow ideation", "frontend exploration", "UX iteration", "implementation brainstorming", "cross-team communication"].map((item) => (
                    <div key={item} className="rounded-full border border-[color:var(--line)] px-3 py-1.5 text-sm text-[color:var(--muted)]">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section id="contribution" className="pt-20">
              <SectionHeading
                eyebrow="Beyond frontend"
                title="How I contribute beyond implementation."
                description="Although my role is officially frontend engineering, I naturally work very close to product and UX decisions during workflow exploration and implementation discussions."
              />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="palette-sea-salt mt-8 rounded-[28px] border border-[color:var(--line)] p-6"
              >
                <p className="max-w-3xl text-base leading-8">
                  One of the areas where I add the most value is helping bridge the gap between ideal user experiences and real implementation constraints.
                </p>
                <p className="text-muted mt-4 max-w-3xl text-sm leading-7">
                  In enterprise systems, the best UX solution is not always the most viable one. Some changes may require backend restructuring, migration risks, disruptive workflow shifts, or operational changes that are difficult to introduce in complex environments.
                </p>
              </motion.div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="palette-cold-butter rounded-[26px] border border-[color:var(--line)] p-6"
                >
                  <div className="text-muted text-xs font-semibold uppercase tracking-[0.22em]">I often help evaluate</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {contributionPoints.map((item) => (
                      <div key={item} className="rounded-full border border-[color:var(--line)] bg-white/88 px-3 py-1.5 text-sm text-[color:var(--foreground)]">
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.04, ease: "easeOut" }}
                  className="palette-cottage-core rounded-[26px] border border-[color:var(--line)] p-6"
                >
                  <div className="text-muted text-xs font-semibold uppercase tracking-[0.22em]">Example</div>
                  <p className="mt-3 text-sm leading-7">
                    In one workflow redesign project, I believed a complete restructuring of the operational flow could improve the experience significantly. After considering technical dependencies, operational risks, and implementation complexity, I helped propose a more balanced solution that improved usability and clarity without introducing highly disruptive changes.
                  </p>
                </motion.div>
              </div>
            </section>

            <section id="tools" className="pt-20">
              <SectionHeading
                eyebrow="Technical stack"
                title="The tools behind the work."
                description="Practical tooling across frontend, testing, delivery workflow, and AI-assisted exploration."
              />

              <div className="palette-breezeway mt-8 rounded-[28px] border border-[color:var(--line)] p-5 sm:p-6">
                <div className="grid gap-4 md:grid-cols-2">
                {toolGroups.map((group, index) => (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                    className="rounded-[24px] border border-[color:var(--line)] bg-white/88 p-6 dark:bg-white/7"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)]">
                        <group.icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-semibold">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <div key={item} className="rounded-full border border-[color:var(--line)] px-3 py-1.5 text-sm text-[color:var(--muted)]">
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
                </div>
              </div>
            </section>

            <section id="beliefs" className="pt-20">
              <SectionHeading
                eyebrow="How I think about frontend"
                title="Frontend should make complex products easier to think through."
                description="Good frontend architecture improves maintainability. Good UX improves confidence. Good product thinking reduces friction."
              />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="palette-cottage-core mt-8 rounded-[26px] border border-[color:var(--line)] p-6"
              >
                <p className="text-muted max-w-3xl text-base leading-8">
                  The best enterprise systems balance usability, scalability, operational stability, implementation reality, and long-term maintainability. That balance is what I enjoy building most.
                </p>
              </motion.div>
            </section>

            <section id="contact" className="pt-20">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="palette-cold-butter rounded-[28px] border border-[color:var(--line)] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8"
              >
                <p className="text-accent text-xs font-semibold uppercase tracking-[0.28em]">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Better workflow products start with clearer frontend decisions.
                </h2>
                <p className="text-muted mt-4 max-w-2xl text-base leading-8">
                  If you are building internal tools or enterprise systems, I care most about making them easier to use and easier to scale.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:nickprevid@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--foreground)] px-5 py-3 text-sm font-medium text-[color:var(--background)] transition-opacity duration-300 hover:opacity-90"
                  >
                    nickprevid@gmail.com
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nicole-previd/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--line)] bg-white/84 px-5 py-3 text-sm font-medium dark:bg-white/5"
                  >
                    <BriefcaseBusiness className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </motion.div>

              <footer className="px-2 pb-2 pt-8">
                <div className="flex flex-col gap-3 border-t border-[color:var(--line)] pt-6 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
                  <p>Nicole Previd • Frontend engineering for workflow-heavy products</p>
                </div>
              </footer>
            </section>
          </div>
        </div>
      </BrowserShell>
    </main>
  );
}
