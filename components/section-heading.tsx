import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl"
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--accent-strong)]">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-tight font-medium tracking-[-0.03em] text-[color:var(--foreground)] md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted)] md:text-lg">{description}</p> : null}
    </motion.div>
  );
}
