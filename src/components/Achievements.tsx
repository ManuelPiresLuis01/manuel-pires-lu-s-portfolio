import { FadeIn } from "./shared";
import { Trophy } from "lucide-react";
import aocpc2 from "@/assets/aocpc2.jpg";
import aocpc3 from "@/assets/aocpc3.jpg";
import angotic from "@/assets/angotic.jpeg";
import devfestLuanda from "@/assets/devfest.jpg";

const achievements = [
  {
    title: "DevFest Angola 2025",
    desc: "Palestra: Testes de Software na Prática — a importância para garantir qualidade antes do deploy (GDG Angola)",
    img: devfestLuanda,
  },
  {
    title: "3º Lugar – ICPC 2025",
    desc: "Angolan Collegiate Programming Contest",
    img: aocpc3,
  },
  {
    title: "Troféu AOCPC 2025",
    desc: "3º Classificado no concurso universitário de programação",
    img: aocpc2,
  },
  {
    title: "3º Lugar – Hackathon de Cibersegurança",
    desc: "3 lugar do Hackaton de cybersegurança do MININT organizado pelo Angotic",
    img: angotic,
  },
];

const Achievements = () => (
  <main id="momentos">
    <header className="pointer-events-none fixed left-4 top-20 z-20 max-w-[13rem] border-l border-primary/60 bg-background/35 py-2 pl-3 pr-2 backdrop-blur-sm md:left-8 md:top-[5.5rem]">
      <h1 className="text-sm font-semibold leading-tight tracking-tight sm:text-base">
        Momentos &amp; Conquistas
      </h1>
      <p className="mt-1 text-[10px] leading-snug text-muted-foreground sm:text-xs">
        Momentos marcantes da trajetória profissional e académica
      </p>
    </header>

    {achievements.map((achievement, index) => (
      <section
        key={achievement.title}
        aria-labelledby={`achievement-title-${index}`}
        className="achievement-section relative isolate flex min-h-[100dvh] items-center overflow-hidden px-4 py-20 md:px-8"
      >
        <div
          aria-hidden="true"
          className="hero-background achievement-photo parallax-photo-background absolute inset-0"
          style={{ backgroundImage: `url("${achievement.img}")` }}
        />
        <div aria-hidden="true" className="hero-background-darken absolute inset-0" />
        <div aria-hidden="true" className="hero-background-shade absolute inset-0" />

        <div className="container-custom relative z-10">
          <FadeIn className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 text-primary">
              <Trophy aria-hidden="true" className="h-6 w-6 shrink-0" />
              <span className="font-mono text-xs font-medium uppercase tracking-[0.18em]">
                {String(index + 1).padStart(2, "0")} / {String(achievements.length).padStart(2, "0")}
              </span>
            </div>
            <h2
              id={`achievement-title-${index}`}
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
            >
              {achievement.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
              {achievement.desc}
            </p>
          </FadeIn>
        </div>
      </section>
    ))}
  </main>
);

export default Achievements;
