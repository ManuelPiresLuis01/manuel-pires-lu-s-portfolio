import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const binaryColumn = `0
1
0
1
1
0
1
0
0
1
0
1
1
0
1
0
0
1
0
1
1
0
1
0
0
1
0
1
1
0
1
0
0
1
0
1
1
0`;

const columns = Array.from({ length: 18 }, (_, index) => index);

const Hero = () => (
  <section className="relative min-h-screen flex items-center section-padding pt-32">
    {/* Subtle grid bg */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* Binary rain */}
    <div className="binary-rain" aria-hidden="true">
      {columns.map((index) => (
        <span
          key={index}
          className="binary-column"
          style={{
            left: `${index * 5.5}%`,
            animationDelay: `${-index * 0.6}s`,
            animationDuration: `${8 + (index % 6)}s`,
          }}
        >
          {binaryColumn}
        </span>
      ))}
    </div>

    {/* Glow blob */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container-custom relative z-10">
      <div className="text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-mono text-sm mb-4 tracking-wider"
        >
          Desenvolvedor Full-Stack & Analista de QA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Manuel Pires{" "}
          <span className="text-gradient">Luís</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
        >
          Desenvolvimento de soluções web escaláveis com foco em qualidade, performance e confiabilidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <a
            href="#experiencia"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Ver Experiência
            <ArrowDown size={16} />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-colors"
          >
            <Mail size={16} />
            Solicitar Serviço
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
