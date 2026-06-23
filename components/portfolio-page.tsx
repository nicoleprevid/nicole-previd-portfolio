"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2, Sparkles, X } from "lucide-react";
import financeStage1ClaudeInitialConcept from "@/assets/finance/stage-1-claude-initial-concept.png";
import financeStage2OriginalVision from "@/assets/finance/stage-2-original-vision.png";
import financeStage3FinalResult from "@/assets/finance/stage-3-final-result.png";
import platformStage1CurrentExperience from "@/assets/platform/stage-1-current-experience.png";
import platformStage2InitialSimplification from "@/assets/platform/stage-2-initial-simplification.png";
import platformStage3AiExploration from "@/assets/platform/stage-3-ai-exploration.png";
import platformStage4FinalProposal from "@/assets/platform/stage-4-final-proposal.png";
import { BrowserShell } from "@/components/browser-shell";
import { SectionHeading } from "@/components/section-heading";

type GalleryStage = {
  title: string;
  image: string;
  alt: string;
  text: string;
};

const navigation = [
  { label: "How I work", href: "#how-i-work" },
  { label: "Projects", href: "#project-platform" },
  { label: "Contact", href: "#contact" },
];

const workLoop = ["Clarify", "Prototype", "Validate", "Refine", "Repeat"];

const platformPrinciples = [
  ["Technical-first", "Task-first"],
  ["Multiple competing sections", "Single primary workflow"],
  ["High cognitive load", "Guided execution"],
  ["Mixed execution and configuration", "Clear separation of concerns"],
  ["Information overload", "Progressive disclosure"],
];

const platformInsights = [
  {
    title: "Users think in tasks, not APIs.",
    text: "The original experience surfaced technical concepts before users could clearly understand the task they were trying to complete.",
  },
  {
    title: "Execution and configuration are different activities.",
    text: "Routine execution needed a simpler flow, while advanced configuration should remain available without overwhelming the main experience.",
  },
  {
    title: "Operational visibility should be contextual.",
    text: "Execution history and technical details are useful for investigation, but they should appear at the right moment instead of competing with the primary task.",
  },
];

const platformDemonstrates = [
  "identify workflow problems",
  "structure ambiguity",
  "create prototypes",
  "validate ideas with stakeholders",
  "translate product direction into frontend implementation",
];

const platformStages: GalleryStage[] = [
  {
    title: "1. Current experience",
    image: platformStage1CurrentExperience.src,
    alt: "Original automation platform screen showing navigation, technical output, and run history competing for attention.",
    text: "The original flow exposed technical details, execution controls, and history at the same time, increasing cognitive load during routine tasks.",
  },
  {
    title: "2. Initial simplification",
    image: platformStage2InitialSimplification.src,
    alt: "Early simplification concept focused on essential workflow fields and a cleaner execution area.",
    text: "My first direction focused on the essential workflow features first, reducing competing elements to make the primary task easier to understand.",
  },
  {
    title: "3. AI exploration",
    image: platformStage3AiExploration.src,
    alt: "AI-assisted concept showing expanded interface possibilities and stakeholder-facing feature exploration.",
    text: "The AI-assisted exploration was useful for surfacing broader feature possibilities and giving stakeholders something concrete to react to.",
  },
  {
    title: "4. Final proposal",
    image: platformStage4FinalProposal.src,
    alt: "Final proposed workflow balancing simplicity, clarity, and useful operational context.",
    text: "The final proposal moved toward a more focused execution flow while keeping the interface useful for the real operational context.",
  },
];

const financeStages: GalleryStage[] = [
  {
    title: "1. Claude's initial concept",
    image: financeStage1ClaudeInitialConcept.src,
    alt: "Early AI-generated concept for Financial Memory after product brainstorming.",
    text: "An initial AI-generated concept focused on exploring the product structure and possible ways to translate the idea into a usable financial interface.",
  },
  {
    title: "2. My original vision",
    image: financeStage2OriginalVision.src,
    alt: "Original design direction focused on simplicity and the designer's intended vibe for Financial Memory.",
    text: "My own design direction simplified the experience and pushed the product toward a clearer, softer, more human financial flow.",
  },
  {
    title: "3. Final result",
    image: financeStage3FinalResult.src,
    alt: "Final concept combining the design vision with AI-assisted exploration.",
    text: "The final direction combined the structure explored with AI and the simplicity, storytelling, and humanized tone I wanted the product to have.",
  },
];

function NavPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-full px-3 py-2 text-sm text-[color:var(--muted-inverse)] transition-colors duration-300 hover:bg-white/10 hover:text-[color:var(--foreground-inverse)]"
    >
      {label}
    </a>
  );
}

export function PortfolioPage() {
  const [lightbox, setLightbox] = useState<{
    images: GalleryStage[];
    index: number;
  } | null>(null);

  useEffect(() => {
    if (!lightbox) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      }

      if (event.key === "ArrowRight") {
        setLightbox((current) =>
          current
            ? {
                ...current,
                index: (current.index + 1) % current.images.length,
              }
            : current,
        );
      }

      if (event.key === "ArrowLeft") {
        setLightbox((current) =>
          current
            ? {
                ...current,
                index: (current.index - 1 + current.images.length) % current.images.length,
              }
            : current,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox]);

  const openLightbox = (images: GalleryStage[], index: number) => {
    setLightbox({ images, index });
  };

  const goToPreviousImage = () => {
    setLightbox((current) =>
      current
        ? {
            ...current,
            index: (current.index - 1 + current.images.length) % current.images.length,
          }
        : current,
    );
  };

  const goToNextImage = () => {
    setLightbox((current) =>
      current
        ? {
            ...current,
            index: (current.index + 1) % current.images.length,
          }
        : current,
    );
  };

  const activeLightboxImage = lightbox ? lightbox.images[lightbox.index] : null;

  return (
    <>
      <main className="relative overflow-hidden px-4 py-6 text-[color:var(--foreground)] sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(255,70,43,0.18),transparent_58%)] blur-3xl" />

        <BrowserShell className="mx-auto max-w-[1360px]">
          <div className="relative">
            <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--nav)]/96 backdrop-blur-xl">
              <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
                <a href="#hero" className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-inverse)]">Nicole Previd</div>
                  <div className="mt-1 text-sm text-[color:var(--foreground-inverse)]">UX Engineer | Product Engineer</div>
                </a>

                <nav className="hidden items-center rounded-full border border-white/10 bg-[color:var(--panel)]/20 p-1 md:flex">
                  {navigation.map((item) => (
                    <NavPill key={item.href} href={item.href} label={item.label} />
                  ))}
                </nav>
              </div>
            </header>

            <div className="mx-auto max-w-[1080px] px-5 pb-16 pt-8 sm:px-8 sm:pt-10 lg:pb-24">
            <section id="hero" className="rounded-[32px] border border-[color:var(--line)] bg-[color:var(--background-elevated)] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Product | UX | Frontend | AI
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.04, ease: "easeOut" }}
                className="mt-6 text-5xl leading-[0.95] font-semibold tracking-[-0.06em] sm:text-6xl"
              >
                Nicole Previd
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
                className="mt-5 max-w-4xl text-2xl leading-tight font-medium tracking-[-0.04em] sm:text-3xl"
              >
                UX Engineer | Product Engineer (Frontend + AI-assisted Prototyping)
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
                className="text-muted mt-6 max-w-3xl space-y-3 text-base leading-8"
              >
                <p>
                  I work in the early stages of creating and improving systems when goals, flows, or even the product direction are still not fully clear.
                </p>
                <p>
                  I help bring clarity to purpose, user flow, and feature direction by combining user-centered thinking with a strong understanding of technical scope, system constraints, and implementation complexity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {["Early-stage product clarity", "User-centered flows", "Technical complexity awareness", "Stakeholder collaboration"].map((item) => (
                  <div key={item} className="rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-4 py-2 text-sm">
                    {item}
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.24, ease: "easeOut" }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#project-platform"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-92"
                >
                  View projects
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-5 py-3 text-sm font-medium transition-colors duration-300 hover:bg-[color:var(--accent-soft)]"
                >
                  Contact
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            </section>

            <section id="how-i-work" className="pt-20">
              <SectionHeading
                eyebrow="How I work"
                title="AI-assisted prototyping + rapid iteration + stakeholder validation"
                description="I use fast loops to turn unclear ideas into prototypes that stakeholders can understand and react to."
              />

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-8 rounded-[28px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="grid gap-4 lg:grid-cols-5">
                  {workLoop.map((step, index) => (
                    <div key={step} className="relative rounded-[22px] border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">Step {index + 1}</div>
                      <div className="mt-3 text-base font-semibold">{step}</div>
                    </div>
                  ))}
                </div>
                <p className="text-muted mt-5 text-sm leading-7">
                  Clarify user goals and system constraints, prototype real workflows, validate with stakeholders, then refine the direction.
                </p>
              </motion.div>
            </section>

            <section id="project-platform" className="pt-20">
              <SectionHeading
                eyebrow="Project 1"
                title="Internal Automation Platform"
                description="Workflow redesign and prototype exploration for a complex internal operations platform."
              />

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-4 overflow-hidden rounded-[28px] border border-[color:var(--accent-strong)] bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_100%)] p-6 text-white shadow-[var(--shadow-soft)]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-warm)]">Impact</div>
                <h3 className="mt-4 max-w-4xl text-2xl leading-tight font-semibold tracking-[-0.04em] sm:text-3xl">
                  Transformed user feedback from &quot;I don&apos;t know how to use this product&quot; into &quot;I wish this workflow supported X.&quot;
                </h3>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-white/88">
                  That shift moved the conversation from basic usability blockers to product optimization opportunities. Instead of pausing development for a months-long UX overhaul, I focused on the smallest possible workflow changes that made the system understandable, even if not perfect.
                </p>
              </motion.div>

              <div className="mt-4 rounded-[28px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 shadow-[var(--shadow-soft)]">
                <div className="text-sm font-medium text-[color:var(--muted)]">
                  Simplifying complex operational workflows through AI-assisted product discovery.
                </div>
                <p className="text-muted mt-4 max-w-3xl text-sm leading-7">
                  At IBM Consulting, I used AI-assisted discovery and functional prototyping to explore clearer workflow directions for an internal automation platform with high cognitive load and fragmented task flows.
                </p>
              </div>

              <div className="mt-4 grid gap-4 xl:grid-cols-2">
                {platformStages.map((stage, index) => (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
                    className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 shadow-[var(--shadow-soft)]"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">{stage.title}</div>
                    <div className="mt-4 overflow-hidden rounded-[20px] border border-[color:var(--line)] bg-[color:var(--panel)]">
                      <button
                        type="button"
                        onClick={() => openLightbox(platformStages, index)}
                        className="block w-full cursor-zoom-in"
                        aria-label={`Open ${stage.title} image`}
                      >
                        <img src={stage.image} alt={stage.alt} className="h-auto w-full" />
                      </button>
                    </div>
                    <p className="text-muted mt-4 text-sm leading-7">{stage.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 rounded-[28px] border border-[color:var(--line)] bg-[color:var(--ink-strong)] px-6 py-5 text-center text-base font-medium tracking-[-0.02em] text-white shadow-[var(--shadow-soft)]">
                From system-first execution to task-first interaction.
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-4 rounded-[28px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">Supporting note</div>
                <p className="mt-4 text-sm leading-7">
                  The wireframes were used as discussion artifacts, not final UI deliverables.
                </p>
                <p className="text-muted mt-3 text-sm leading-7">
                  These screens are simplified representations of the real product, created as a middle ground between the actual interface and a wireframe. The goal was to focus the conversation on UX decisions, workflow clarity, and interaction structure without exposing the design system or internal product details.
                </p>
                <p className="text-muted mt-3 text-sm leading-7">
                  The final proposal balanced usability improvements with implementation constraints and product priorities. Instead of introducing a completely new interaction model, the solution focused on reducing cognitive load, clarifying responsibilities, and guiding users through a simpler execution flow.
                </p>
              </motion.div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 shadow-[var(--shadow-soft)]"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">Design principles behind the proposal</div>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full min-w-[520px] border-separate border-spacing-0 overflow-hidden rounded-[20px] border border-[color:var(--line)]">
                      <thead>
                        <tr className="bg-[color:var(--panel)] text-left text-sm">
                          <th className="border-b border-[color:var(--line)] px-4 py-3 font-semibold">Current experience</th>
                          <th className="border-b border-l border-[color:var(--line)] px-4 py-3 font-semibold">Proposed direction</th>
                        </tr>
                      </thead>
                      <tbody>
                        {platformPrinciples.map(([current, proposed]) => (
                          <tr key={current} className="bg-[color:var(--panel-strong)] text-sm">
                            <td className="border-b border-[color:var(--line)] px-4 py-3">{current}</td>
                            <td className="border-b border-l border-[color:var(--line)] px-4 py-3 font-medium">{proposed}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.04, ease: "easeOut" }}
                  className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 shadow-[var(--shadow-soft)]"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">What this demonstrates</div>
                  <div className="mt-5 grid gap-3">
                    {platformDemonstrates.map((item) => (
                      <div key={item} className="rounded-[20px] border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-3 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="mt-4">
                <div className="grid gap-4 lg:grid-cols-3">
                  {platformInsights.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                      className="rounded-[26px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 shadow-[var(--shadow-soft)]"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">Key insight</div>
                      <h3 className="mt-4 text-xl leading-tight font-semibold tracking-[-0.03em]">{item.title}</h3>
                      <p className="text-muted mt-3 text-sm leading-7">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section id="project-finance" className="pt-20">
              <SectionHeading
                eyebrow="Project 2"
                title="Financial Memory"
                description="A financial memory assistant focused on helping users remember the meaning behind their money."
              />

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-4 overflow-hidden rounded-[28px] border border-[color:var(--accent-strong)] bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_100%)] p-6 text-white shadow-[var(--shadow-soft)]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-warm)]">Speed to direction</div>
                <h3 className="mt-4 max-w-4xl text-2xl leading-tight font-semibold tracking-[-0.04em] sm:text-3xl">
                  Moved quickly from a broad desire for a better financial app to two clear MVP features and screens a developer could already build from.
                </h3>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-white/88">
                  The process started from a common frustration with traditional finance apps, narrowed into two core features, then used AI to generate directions and refine the design into clearer product screens ready for implementation.
                </p>
              </motion.div>

              <div className="mt-4 rounded-[28px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 shadow-[var(--shadow-soft)]">
                <div className="text-sm font-medium text-[color:var(--muted)]">Product purpose</div>
                <p className="text-muted mt-4 max-w-3xl text-sm leading-7">
                  Financial Memory is not another budgeting app. The product is designed to help users understand what their money actually meant by transforming raw transactions into understandable life events and financial decisions.
                </p>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 shadow-[var(--shadow-soft)]"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">1. Natural-language financial input</div>
                  <p className="mt-4 text-sm leading-7">
                    The core interaction allows users to send bank statements, invoices, and everyday spending feedback in natural language instead of forcing them into rigid accounting flows.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: 0.04, ease: "easeOut" }}
                  className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 shadow-[var(--shadow-soft)]"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">2. Monthly view with decision context</div>
                  <p className="mt-4 text-sm leading-7">
                    A second highlighted feature is the monthly overview, centered on the difference between decisions made in the current month and inherited or recurring spending that continues affecting the present.
                  </p>
                </motion.div>
              </div>

              <div className="mt-4 grid gap-4 xl:grid-cols-3">
                {financeStages.map((stage, index) => (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
                    className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 shadow-[var(--shadow-soft)]"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">{stage.title}</div>
                    <div className="mt-4 overflow-hidden rounded-[20px] border border-[color:var(--line)] bg-[color:var(--panel)]">
                      <button
                        type="button"
                        onClick={() => openLightbox(financeStages, index)}
                        className="block w-full cursor-zoom-in"
                        aria-label={`Open ${stage.title} image`}
                      >
                        <img src={stage.image} alt={stage.alt} className="h-auto w-full" />
                      </button>
                    </div>
                    <p className="text-muted mt-4 text-sm leading-7">{stage.text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-4 rounded-[28px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">conclusion</div>
                <p className="mt-4 text-sm leading-7">
                  This exploration shows how I use AI to expand early product possibilities, then refine the result through clearer UX priorities, simplicity, and a stronger understanding of what the user is actually trying to make sense of.
                </p>
              </motion.div>
            </section>

            <section id="closing" className="pt-20">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]"
              >
                <div className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 shadow-[var(--shadow-soft)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">Reducing uncertainty</div>
                  <p className="mt-4 text-base leading-8">
                    I use AI to accelerate discovery, prototyping, and iteration while keeping product decisions grounded in user goals, stakeholder feedback, and technical feasibility.
                  </p>
                </div>

                <div className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--ink-strong)] p-6 text-white shadow-[var(--shadow-soft)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">Core message</div>
                  <p className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.04em]">
                    I can take a product idea from concept to production without losing context between design and engineering.
                  </p>
                </div>
              </motion.div>
            </section>

              <section id="contact" className="pt-20">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="rounded-[30px] border border-[color:var(--line)] bg-[color:var(--background-elevated)] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8"
                >
                  <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">Contact</p>
                      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                        Building product direction into something testable.
                      </h2>
                      <p className="text-muted mt-4 max-w-2xl text-base leading-8">
                        If you are working through ambiguity in a workflow-heavy product, I am interested in helping shape the direction through rapid prototyping and frontend execution.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <a
                        href="mailto:nickprevid@gmail.com"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-92"
                      >
                        nickprevid@gmail.com
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nicole-previd/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-5 py-3 text-sm font-medium"
                      >
                        <BriefcaseBusiness className="h-4 w-4" />
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/nicoleprevid"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-5 py-3 text-sm font-medium"
                      >
                        <Code2 className="h-4 w-4" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              </section>
            </div>
          </div>
        </BrowserShell>
      </main>

      {lightbox && activeLightboxImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(8,16,75,0.92)] px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxImage.title}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 rounded-full border border-white/15 bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Close image viewer"
          >
            <X className="h-5 w-5" />
          </button>

          {lightbox.images.length > 1 ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToPreviousImage();
              }}
              className="absolute left-4 rounded-full border border-white/15 bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:left-6"
              aria-label="Previous image"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          ) : null}

          <div
            className="w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white p-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <img src={activeLightboxImage.image} alt={activeLightboxImage.alt} className="h-auto max-h-[78vh] w-full rounded-[20px] object-contain" />
            </div>

            <div className="mt-4 flex items-start justify-between gap-4 text-white">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">{activeLightboxImage.title}</div>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-white/82">{activeLightboxImage.text}</p>
              </div>
              <div className="shrink-0 text-sm text-white/60">
                {lightbox.index + 1} / {lightbox.images.length}
              </div>
            </div>
          </div>

          {lightbox.images.length > 1 ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToNextImage();
              }}
              className="absolute right-4 rounded-full border border-white/15 bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:right-6"
              aria-label="Next image"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
