import { FadeIn, SectionTitle } from "./shared";
import developerPhoto from "@/assets/developer.jpeg";
import { PanelsTopLeft, UsersRound } from "lucide-react";

type Technology = {
  name: string;
  icon?: string;
  fallback: string;
  symbol?: typeof PanelsTopLeft;
};

const categories = [
  {
    label: "Frontend",
    techs: [
      { name: "React", icon: "react", fallback: "R" },
      { name: "TypeScript", icon: "typescript", fallback: "TS" },
      { name: "HTML", icon: "html5", fallback: "HTML" },
      { name: "CSS", icon: "css3", fallback: "CSS" },
      { name: "Styled Components", icon: "styledcomponents", fallback: "SC" },
      { name: "Tailwind", icon: "tailwindcss", fallback: "TW" },
      { name: "Vite", icon: "vitejs", fallback: "V" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", icon: "nodejs", fallback: "N" },
      { name: "Express", icon: "express", fallback: "Ex" },
    ],
  },
  {
    label: "Banco de Dados",
    techs: [
      { name: "MySQL", icon: "mysql", fallback: "SQL" },
      { name: "MongoDB", icon: "mongodb", fallback: "M" },
    ],
  },
  {
    label: "Testes",
    techs: [
      { name: "Playwright", icon: "playwright", fallback: "PW" },
      { name: "Vitest", icon: "vitest", fallback: "VT" },
    ],
  },
  {
    label: "Versionamento",
    techs: [
      { name: "Git", icon: "git", fallback: "G" },
      { name: "GitHub", icon: "github", fallback: "GH" },
      { name: "GitLab", icon: "gitlab", fallback: "GL" },
    ],
  },
  {
    label: "Metodologias ágeis",
    techs: [
      { name: "Scrum", fallback: "S", symbol: UsersRound },
      { name: "Kanban", fallback: "K", symbol: PanelsTopLeft },
    ],
  },
];

const Technologies = () => (
  <section id="tecnologias" className="section-padding relative isolate overflow-hidden">
    <div
      aria-hidden="true"
      className="parallax-photo-background absolute inset-0"
      style={{ backgroundImage: `url("${developerPhoto}")` }}
    />
    <div aria-hidden="true" className="hero-background-darken absolute inset-0" />
    <div aria-hidden="true" className="technologies-background-shade absolute inset-0" />

    <div className="container-custom relative z-10">
      <SectionTitle subtitle="Ferramentas e frameworks do dia a dia">
        Tecnologias
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
                  <span
                    key={tech.name}
                    role="img"
                    aria-label={tech.name}
                    tabIndex={0}
                    className="tech-icon group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-background/45 p-3 backdrop-blur-sm transition-colors hover:border-primary/60 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                  >
                    {tech.symbol ? (
                      <tech.symbol aria-hidden="true" className="h-8 w-8 text-primary" strokeWidth={1.7} />
                    ) : (
                      <>
                        <span aria-hidden="true" className="font-mono text-xs font-semibold text-primary">
                          {tech.fallback}
                        </span>
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-original.svg`}
                          alt=""
                          loading="lazy"
                          className="tech-icon-logo absolute h-9 w-9 object-contain"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      </>
                    )}
                    <span aria-hidden="true" className="tech-icon-label">
                      {tech.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Technologies;
