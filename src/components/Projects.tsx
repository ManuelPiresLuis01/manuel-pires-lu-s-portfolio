import { FadeIn, SectionTitle } from "./shared";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Tabom – Consultoria e Desenvolvimento",
    desc: "Website institucional para consultoria tecnológica com design moderno e funcionalidades interativas.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://tabom-website.vercel.app/",
  },
  {
    title: "Restaurante Ten",
    desc: "Plataforma web elegante para restaurante premium em Luanda, com cardápio digital e reservas.",
    tech: ["React", "Styled Components", "Node.js"],
    link: "https://luanda-bay-dining.vercel.app/",
  },
  {
    title: "Startup Zyeta",
    desc: "Plataforma frontend para startup de tecnologia com dashboard e interface administrativa.",
    tech: ["React", "TypeScript", "REST API"],
    link: "https://zyeta-technologies-platform-frontend-web.onrender.com",
  },
  {
    title: "Portfólio Anterior",
    desc: "Primeiro portfólio pessoal demonstrando habilidades de frontend e design responsivo.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://portifolio-gx4d.onrender.com",
  },
  {
    title: "Bot – Assistente Virtual WhatsApp",
    desc: "Assistente virtual automatizado para WhatsApp com respostas inteligentes e fluxos personalizados.",
    tech: ["Node.js", "WhatsApp API", "MongoDB"],
    link: null,
  },
  {
    title: "Sistema para Venda de Motos",
    desc: "Sistema completo de e-commerce para venda de motocicletas com catálogo e gestão de pedidos.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://motorsport.onrender.com",
  },
];

const Projects = () => (
  <section id="projetos" className="section-padding">
    <div className="container-custom">
      <SectionTitle subtitle="Projetos que demonstram versatilidade e capacidade técnica">
        Projetos Desenvolvidos
      </SectionTitle>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.08}>
            <div className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300 h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-0.5 bg-secondary rounded text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  Ver projeto <ExternalLink size={14} />
                </a>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
