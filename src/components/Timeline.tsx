import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SectionTitle } from "./shared";
import { useRef } from "react";

const items = [
  {
    year: "2022",
    title: "Engenharia Informática",
    desc: "Início da formação universitária em Engenharia Informática",
  },
  {
    year: "2023",
    title: "Desenvolvedor Full-Stack",
    desc: "Centro de Investigação da Universidade de Luanda",
  },
  {
    year: "2024",
    title: "Assistente de Programação",
    desc: "TÁBOM – Consultoria e Desenvolvimento",
  },
  { year: "2025", title: "Frontend Developer & QA", desc: "Mamboo Tecnologia" },
  {
    year: "2025",
    title: "Analista de Testes Automatizados",
    desc: "TIS Tech – Projeto AGT 4.0",
  },
  {
    year: "2026",
    title: "Analista de Testes Automatizados",
    desc: "TIS Tech – Projeto INAGBE",
  },
  {
    year: "2026",
    title: "Co fundador & CTO",
    desc: "YETUSTORE – Plataforma de vendas cash on delivery",
  },
];

type TimelineEntryProps = {
  item: (typeof items)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduceMotion: boolean | null;
};

const TimelineEntry = ({ item, index, progress, reduceMotion }: TimelineEntryProps) => {
  const start = index / items.length;
  const end = (index + 0.7) / items.length;
  const opacity = useTransform(progress, [start, end], [0.3, 1]);
  const y = useTransform(progress, [start, end], [24, 0]);

  return (
    <motion.div
      initial={false}
      style={reduceMotion ? undefined : { opacity, y }}
      className={`relative flex ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
    >
      <span className="absolute left-5 top-2 z-10 flex h-4 w-4 -translate-x-1.5 items-center justify-center rounded-full border-2 border-background bg-primary md:left-1/2 md:top-3" />
      <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
        <div className="rounded-[26px] border border-border bg-background/60 p-5 shadow-glow-sm backdrop-blur-sm md:p-6">
          <span className="font-mono text-sm font-medium text-primary">{item.year}</span>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  return (
  <section ref={sectionRef} id="timeline" className="section-padding bg-surface/60">
    <div className="container-custom">
      <SectionTitle subtitle="A jornada profissional até aqui">
        Linha do Tempo
      </SectionTitle>

      <div className="relative mx-auto max-w-5xl">
        <div className="space-y-10 md:space-y-12">
          {items.map((item, i) => (
            <TimelineEntry
              key={item.year + item.title}
              item={item}
              index={i}
              progress={scrollYProgress}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Timeline;
