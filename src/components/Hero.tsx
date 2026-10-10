import { motion } from "framer-motion";
import fotoPerfil from "@/assets/foto-perfil.jpg";

const Hero = () => (
  <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 pb-12 pt-24 md:px-8 md:pb-20">
    <div
      aria-hidden="true"
      className="hero-background parallax-photo-background absolute inset-0"
      style={{ backgroundImage: `url("${fotoPerfil}")` }}
    >
      <div className="hero-background-darken absolute inset-0" />
      <div className="hero-background-shade absolute inset-0" />
    </div>

    <div className="container-custom relative z-10 w-full">
      <div className="relative z-10 text-center md:max-w-[680px] md:py-16 md:text-left">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary md:text-sm"
        >
          Desenvolvedor de Software & Analista de Testes
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-7 text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Manuel Pires{" "}
          <span className="text-gradient">Luís</span>
        </motion.h1>

      </div>
    </div>
  </section>
);

export default Hero;
