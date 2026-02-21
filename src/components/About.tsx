import { FadeIn, SectionTitle } from "./shared";
import fotoPerfil from "@/assets/foto-perfil.jpg";

const About = () => (
  <section id="sobre" className="section-padding">
    <div className="container-custom">
      <SectionTitle subtitle="Transformando ideias em soluções digitais robustas e escaláveis">
        Sobre Mim
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <FadeIn delay={0.1}>
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/20 shadow-glow">
                <img src={fotoPerfil} alt="Manuel Pires Lui­s" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-full border border-primary/10 -z-10" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Desenvolvedor <span className="text-foreground font-medium">Full-Stack</span> e{" "}
              <span className="text-foreground font-medium">Analista de QA</span> com experiência
              sólida em JavaScript, TypeScript, React, Node.js, Express, MySQL e MongoDB.
            </p>
            <p>
              Especializado em automação de testes com <span className="text-primary">Playwright</span> e{" "}
              <span className="text-primary">Vitest</span>, com atuação no projeto estratégico{" "}
              <span className="text-foreground font-medium">AGT 4.0</span> na TIS Tech e como Frontend
              Developer e QA na <span className="text-foreground font-medium">Mamboo Tecnologia</span>.
            </p>
            <p>
              Experiência como Full-Stack no Centro de Investigação da Universidade de Luanda e
              Assistente de Programação na TÁBOM. Metodologias ágeis (Scrum/Kanban), inglês
              intermediário (EF SET B1), com foco constante em qualidade, performance e melhoria contínua.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "TypeScript", "Node.js", "Playwright", "Scrum"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default About;
