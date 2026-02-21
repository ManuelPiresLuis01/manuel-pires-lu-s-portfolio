import { FadeIn, SectionTitle } from "./shared";
import foto1 from "@/assets/foto1.jpg";

const About = () => (
  <section id="sobre" className="section-padding">
    <div className="container-custom">
      <SectionTitle subtitle="Transformando ideias em soluções digitais robustas e escaláveis">
        Sobre Mim
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div className="rounded-2xl overflow-hidden border border-border shadow-glow-sm">
            <img src={foto1} alt="Manuel no escritório" className="w-full h-[400px] object-cover" />
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
                <span key={t} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20">
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
