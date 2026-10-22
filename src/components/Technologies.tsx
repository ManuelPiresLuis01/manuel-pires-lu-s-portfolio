import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FadeIn, SectionTitle } from "./shared";
import developerPhoto from "@/assets/developer.jpeg";
import { PanelsTopLeft, UsersRound } from "lucide-react";
import { useRef } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type Technology = {
  name: string;
  icon?: string;
  iconUrl?: string;
  fallback: string;
  symbol?: typeof PanelsTopLeft;
  lightIcon?: boolean;
};

const categories = [
  {
    label: "Frontend",
    techs: [
      { name: "React", icon: "react", fallback: "" },
      { name: "TypeScript", icon: "typescript", fallback: "" },
      { name: "JavaScript", icon: "javascript", fallback: "" },
      { name: "HTML", icon: "html5", fallback: "" },
      { name: "CSS", icon: "css3", fallback: "" },
      { name: "Styled Components", icon: "styledcomponents", fallback: "" },
      { name: "Tailwind", icon: "tailwindcss", fallback: "" },
      { name: "Vite", icon: "vitejs", fallback: "" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", icon: "nodejs", fallback: "" },
      { name: "Express", icon: "express", fallback: "", lightIcon: true },
      { name: "NestJS", icon: "nestjs", fallback: "" },
    ],
  },
  {
    label: "Banco de Dados",
    techs: [
      { name: "MySQL", icon: "mysql", fallback: "" },
      { name: "MongoDB", icon: "mongodb", fallback: "" },
    ],
  },
  {
    label: "Testes",
    techs: [
      { name: "Playwright", icon: "playwright", fallback: "" },
      { name: "Vitest", icon: "vitest", fallback: "" },
    ],
  },
  {
    label: "Versionamento",
    techs: [
      { name: "Git", icon: "git", fallback: "" },
      { name: "GitHub", icon: "github", fallback: "", lightIcon: true },
      { name: "GitLab", icon: "gitlab", fallback: "" },
    ],
  },
  {
    label: "Ferramentas e DevOps",
    techs: [
      { name: "CI/CD", icon: "githubactions", fallback: "" },
      { name: "VS Code", icon: "vscode", fallback: "" },
    ],
  },
  {
    label: "Metodologias ágeis",
    techs: [
      { name: "Scrum", fallback: "", symbol: UsersRound },
      { name: "Kanban", fallback: "", symbol: PanelsTopLeft },
    ],
  },
];

const Technologies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
  <section ref={sectionRef} id="tecnologias" className="section-padding relative overflow-hidden">
    <motion.div
      aria-hidden="true"
      className="hero-background parallax-photo-background absolute inset-[-6%_0]"
      style={reduceMotion ? { backgroundImage: `url("${developerPhoto}")` } : {
        backgroundImage: `url("${developerPhoto}")`,
        backgroundAttachment: "scroll",
        y: photoY,
        scale: photoScale,
      }}
    />
    <div aria-hidden="true" className="hero-background-darken absolute inset-0" />
    <div aria-hidden="true" className="hero-background-shade absolute inset-0" />

    <div className="container-custom relative z-10">
      <SectionTitle subtitle="Ferramentas e frameworks do dia a dia">
        As ferramentas com que construo.
      </SectionTitle>

      <div className="grid gap-x-12 md:grid-cols-2">
        {categories.map((cat, i) => (
          <FadeIn key={cat.label} delay={i * 0.05}>
            <div className="border-b border-border py-6">
              <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.techs.map((tech: Technology) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <span
                        role="img"
                        tabIndex={0}
                        aria-label={tech.name}
                        className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-background/45 p-3 backdrop-blur-sm sm:h-16 sm:w-16"
                      >
                        {tech.symbol ? (
                          <tech.symbol aria-hidden="true" className="h-8 w-8 text-primary" strokeWidth={1.7} />
                        ) : (
                          <>
                            <span aria-hidden="true" className="font-mono text-xs font-semibold text-primary">
                              {tech.fallback}
                            </span>
                            <img
                              src={tech.iconUrl ?? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-original.svg`}
                              alt=""
                              loading="lazy"
                              className={`absolute h-9 w-9 object-contain ${tech.lightIcon ? "brightness-0 invert" : ""}`}
                              onError={(event) => {
                                event.currentTarget.style.display = "none";
                              }}
                            />
                          </>
                        )}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent side="top">{tech.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Technologies;
