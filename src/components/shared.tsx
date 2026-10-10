import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeIn = ({ children, className = "", delay = 0 }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionTitle = ({ children, subtitle }: { children: ReactNode; subtitle?: string }) => (
  <FadeIn className="mb-10 md:mb-14">
    <div className="mb-4 h-1 w-12 rounded-full bg-gradient-primary" />
    <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">{children}</h2>
    {subtitle && <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p>}
  </FadeIn>
);
