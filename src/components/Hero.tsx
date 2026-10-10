import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import fotoPerfil from "@/assets/foto-perfil.jpg";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 0.78, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={sectionRef} className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 pb-12 pt-24 md:px-8 md:pb-20">
      <div
        aria-hidden="true"
        className="hero-background parallax-photo-background absolute inset-0"
        style={{
          backgroundImage: `url("${fotoPerfil}")`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-background-darken absolute inset-0" />
        <div className="hero-background-shade absolute inset-0" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <motion.div
          style={reduceMotion ? undefined : { opacity: heroOpacity, y: heroY }}
          className="relative z-10 text-left md:max-w-[680px] md:py-16"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-4 font-mono text-[0.62rem] font-medium uppercase tracking-[0.24em] text-primary md:text-xs"
          >
            Desenvolvedor de Software & Analista de Testes
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-5 text-[clamp(2.4rem,4vw,4.6rem)] font-bold leading-[0.96] tracking-[-0.05em]"
          >
            Olá, sou o Manuel Pires <span className="text-gradient">Luís</span>.
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
