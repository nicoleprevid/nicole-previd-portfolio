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
      <p className="text-accent mb-4 text-xs font-semibold uppercase tracking-[0.3em]">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-tight font-medium tracking-[-0.03em] md:text-5xl">
        {title}
      </h2>
      {description ? <p className="text-muted mt-5 max-w-2xl text-base leading-8 md:text-lg">{description}</p> : null}
    </motion.div>
  );
}
