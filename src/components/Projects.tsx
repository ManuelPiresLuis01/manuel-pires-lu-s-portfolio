import { FadeIn, SectionTitle } from "./shared";
import { ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Tabom – Consultoria e Desenvolvimento",
    desc: "Website institucional para consultoria tecnológica com design moderno e funcionalidades interativas.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://tabom-website.vercel.app/",
    preview: true,
  },
  {
    title: "Restaurante Ten",
    desc: "Plataforma web elegante para restaurante premium em Luanda, com cardápio digital e reservas.",
    tech: ["React", "Styled Components", "Node.js"],
    link: "https://luanda-bay-dining.vercel.app/",
    preview: true,
  },
  {
    title: "Startup Zyeta",
    desc: "Plataforma frontend para startup de tecnologia com dashboard e interface administrativa.",
    tech: ["React", "TypeScript", "Node.js"],
    link: "https://zyeta-technologies-platform-frontend-web.onrender.com",
    preview: true,
  },
  {
    title: "YETUSTORE – Plataforma de Vendas Cash on Delivery",
    desc: "Plataforma de e-commerce focada em vendas cash on delivery, com interface intuitiva e sistema de gestão de pedidos.",
    tech: ["Node.js", "react", "MongoDB", "TypeScript"],
    link: "https://www.yetustore.shop/",
    preview: true,
    featured: true,
  },
  {
    title: "SEFIA – Segurança e Prevenção de Fraudes",
    desc: "Plataforma que ajuda a identificar ameaças e combater fraudes em tempo real, promovendo comunicações mais seguras.",
    tech: ["Segurança digital", "Prevenção de fraudes"],
    link: "https://sefia.ao/",
    preview: true,
    featured: true,
  },
  {
    title: "Kwanza Sites – Soluções Digitais",
    desc: "Serviço digital que transforma ideias, processos e desafios em soluções para a web.",
    tech: ["Soluções digitais", "Desenvolvimento web"],
    link: "https://www.kwanzasites.site/",
    preview: true,
  },
  {
    title: "Bot – Assistente Virtual WhatsApp",
    desc: "Assistente virtual automatizado para WhatsApp com respostas inteligentes.",
    tech: ["Node.js", "WhatsApp API", "MongoDB"],
    link: "https://www.kwanzabot.site/",
    featured: true,
  },
  {
    title: "YETUSTORE ADMIN – Dashboard de Gestão",
    desc: "Dashboard administrativo para gestão de produtos, pedidos e clientes da plataforma YETUSTORE, com funcionalidades de análise e controle.",
    tech: ["Node.js", "react", "MongoDB", "TypeScript"],
    link: null,
    featured: true,
  },
  {
    title: "sleep-not-allowed",
    desc: "Pacote Node.js que envia verificações HTTP periódicas a um endpoint de saúde para ajudar a manter APIs activas em plataformas com políticas de inactividade.",
    tech: ["Node.js", "JavaScript", "TypeScript", "npm"],
    link: "https://github.com/ManuelPiresLuis01/sleep-not-allowed",
    npmPackage: true,
    featured: true,
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
            <div
              className={`group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow-sm ${
                "featured" in p && p.featured
                  ? "border-primary/40 shadow-glow-sm"
                  : "border-border"
              }`}
            >
              {"preview" in p && p.preview && p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${p.title}`}
                  className="project-preview relative block aspect-[16/9] overflow-hidden border-b border-border bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 z-10 flex h-6 items-center gap-1.5 bg-background/85 px-2 backdrop-blur-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400/80" />
                    <span className="ml-2 truncate rounded-sm bg-background/70 px-2 text-[9px] leading-4 text-muted-foreground">
                      {p.link}
                    </span>
                  </div>
                  <img
                    src={`https://image.thum.io/get/width/1200/crop/675/noanimate/${p.link}`}
                    alt={`Pré-visualização da página inicial de ${p.title}`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top pt-6 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/85 px-2.5 py-1 text-[11px] text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    Abrir site <ExternalLink size={12} />
                  </span>
                </a>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  {"featured" in p && p.featured && (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Destaque
                    </span>
                  )}
                </div>
                <p className="mb-4 flex-grow text-sm text-muted-foreground">
                  {p.desc}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {"npmPackage" in p && p.npmPackage && (
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <a
                      href="https://www.npmjs.com/package/sleep-not-allowed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.shields.io/npm/v/sleep-not-allowed?label=vers%C3%A3o"
                        alt="Versão actual no npm"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="https://www.npmjs.com/package/sleep-not-allowed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.shields.io/npm/dt/sleep-not-allowed?label=downloads%20totais"
                        alt="Número total de downloads no npm"
                        loading="lazy"
                      />
                    </a>
                  </div>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    {"npmPackage" in p && p.npmPackage ? "Ver repositório" : "Ver projeto"}{" "}
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
