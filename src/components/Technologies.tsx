import { FadeIn, SectionTitle } from "./shared";

const categories = [
  {
    label: "Frontend", techs: ["React", "TypeScript", "HTML5", "CSS3", "Styled Components", "Tailwind"],
  },
  { label: "Backend", techs: ["Node.js", "Express"] },
  { label: "Banco de Dados", techs: ["MySQL", "MongoDB"] },
  { label: "Testes", techs: ["Playwright", "Vitest"] },
  { label: "Versionamento", techs: ["Git", "GitHub", "GitLab"] },
  { label: "Metodologias", techs: ["Agile", "Scrum", "Kanban"] },
];

const Technologies = () => (
  <section id="tecnologias" className="section-padding bg-surface">
    <div className="container-custom">
      <SectionTitle subtitle="Ferramentas e frameworks do dia a dia">
        Tecnologias
      </SectionTitle>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <FadeIn key={cat.label} delay={i * 0.08}>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-sm bg-secondary rounded-lg text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {t}
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
