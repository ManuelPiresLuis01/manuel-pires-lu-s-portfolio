import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const options = [
  {
    title: "Os meus projectos",
    description: "Quero conhecer aquilo que construíste.",
    href: "/personalProjects",
  },
  {
    title: "Momentos da minha vida",
    description: "Quero conhecer alguns momentos meus.",
    href: "/moments",
  },
];

const FinalChoice = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backdropY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const headingY = useTransform(scrollYProgress, [0, 0.5, 1], [24, 0, -18]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden bg-surface">
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { y: backdropY }}
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full border border-primary/10"
      >
        <div className="absolute inset-8 rounded-full border border-primary/10" />
        <div className="absolute inset-16 rounded-full border border-primary/10" />
      </motion.div>
      <div className="container-custom">
        <motion.div
          style={reduceMotion ? undefined : { y: headingY }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-primary">
            Próxima etapa
          </p>
          <h2 className="mb-6 text-[clamp(1.8rem,3vw,2.8rem)] font-bold tracking-tight">
            O que gostarias de descobrir agora?
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {options.map((option, index) => (
            <motion.a
              key={option.title}
              href={option.href}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="group flex min-h-[180px] flex-col justify-between rounded-3xl border border-primary/20 bg-background/60 p-6 text-left shadow-glow-sm transition-colors hover:border-primary/40 hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Explorar</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">{option.title}</h3>
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {option.description}
                </p>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalChoice;
