import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { Building2, FolderKanban, Github, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { SectionTitle } from "./shared";

const statistics = [
  { label: "Repositórios no GitHub", value: 76, icon: Github },
  { label: "Estrelas no GitHub", value: 76, icon: Star },
  { label: "Projetos no portfólio", value: 15, icon: FolderKanban },
  { label: "Empresas onde trabalhei", value: 3, icon: Building2 },
];

const CountUp = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      count.set(value);
      return;
    }

    const animation = animate(count, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => animation.stop();
  }, [count, isInView, reduceMotion, value]);

  return (
    <motion.span ref={ref} aria-hidden="true">
      {roundedCount}
    </motion.span>
  );
};

const Statistics = () => (
  <section id="estatisticas" className="section-padding bg-surface/60">
    <div className="container-custom">
      <SectionTitle subtitle="Alguns números que representam o meu percurso até aqui.">
        O trabalho em números
      </SectionTitle>

      <div className="grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-4 md:gap-8">
        {statistics.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            aria-label={`${value} ${label}`}
            className="border-t border-primary/30 pt-5"
          >
            <Icon aria-hidden="true" className="mb-5 h-5 w-5 text-primary" strokeWidth={1.7} />
            <p className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-none tracking-[-0.06em] text-foreground">
              <CountUp value={value} />
            </p>
            <p className="mt-3 max-w-[12rem] text-sm leading-relaxed text-muted-foreground">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Statistics;
