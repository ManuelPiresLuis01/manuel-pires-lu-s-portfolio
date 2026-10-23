import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FadeIn, SectionTitle } from "./shared";
import { Compass, Code2, Globe, TestTube } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    label: "01",
    icon: Compass,
    title: "Consultoria",
  },
  {
    label: "02",
    icon: Code2,
    title: "Refatoração de Código",
  },
  {
    label: "03",
    icon: Globe,
    title: "Desenvolvimento de Software",
  },
  {
    label: "04",
    icon: TestTube,
    title: "QA & Testes",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const storyY = useTransform(scrollYProgress, [0, 1], [38, -38]);
  const storyScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);

  return (
    <section ref={sectionRef} id="servicos" className="section-padding bg-surface">
      <div className="container-custom">
        <SectionTitle subtitle="Apoio prático, claro e focado em resultado.">
          Serviços
        </SectionTitle>

        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div style={reduceMotion ? undefined : { y: storyY, scale: storyScale }} className="lg:sticky lg:top-24">
            <div className="rounded-[30px] border border-primary/20 bg-background/40 p-5 shadow-glow-sm backdrop-blur-sm md:p-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-primary">Como posso ajudar</p>
              <h3 className="mt-4 max-w-sm text-[clamp(1.8rem,2.6vw,2.7rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                Soluções digitais com foco em clareza e evolução real.
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Trabalho em cada etapa para transformar ideia em produto, e produto em experiência confiável.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, x: 28, y: 18 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                className="group relative flex min-h-40 flex-col justify-between overflow-hidden rounded-[28px] border border-border bg-background/60 p-5 shadow-glow-sm transition-colors hover:border-primary/30 md:p-6"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-primary opacity-80" />

                <div className="flex items-center justify-between pl-2">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-primary">{s.label}</span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <s.icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-8 pl-2 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-2xl">
                  {s.title}
                </h3>
              </motion.article>
            ))}
          </div>
        </div>

        <FadeIn>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:manuelpiresluis@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Solicitar via Email
            </a>
            <a
              href="https://wa.me/244929004469?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20via%20portf%C3%B3lio%20para%20solicitar%20um%20servi%C3%A7o"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Solicitar via WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
