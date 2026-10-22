import { FadeIn, SectionTitle } from "./shared";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  "Todos",
  "E-commerce",
  "Segurança digital",
  "Educação",
  "Websites",
  "Automação e ferramentas",
] as const;

type ProjectCategory = (typeof categories)[number];
type Project = {
  title: string;
  desc: string;
  tech: string[];
  link: string | null;
  category: Exclude<ProjectCategory, "Todos">;
  preview?: boolean;
  featured?: boolean;
  npmPackage?: boolean;
};

const projectsPerPage = 3;

const projects: Project[] = [
  {
    title: "YETUSTORE – Plataforma de Vendas Cash on Delivery",
    desc: "Plataforma de e-commerce focada em vendas cash on delivery, com interface intuitiva e sistema de gestão de pedidos.",
    tech: ["Node.js", "react", "MongoDB", "TypeScript"],
    link: "https://www.yetustore.shop/",
    category: "E-commerce",
    preview: true,
    featured: true,
  },
  {
    title: "SEFIA – Segurança e Prevenção de Fraudes",
    desc: "Plataforma que ajuda a identificar ameaças e combater fraudes em tempo real, promovendo comunicações mais seguras.",
    tech: ["Segurança digital", "Prevenção de fraudes"],
    link: "https://sefia.ao/",
    category: "Segurança digital",
    preview: true,
    featured: true,
  },
  {
    title: "Empreende Saber",
    desc: "Plataforma de educação online para empreendedores, oferecendo cursos e recursos para desenvolvimento de negócios.",
    tech: ["React", "Styled Components", "TypeScript", "Tailwind CSS"],
    link: "https://www.empreendesaber.ao/",
    category: "Educação",
    preview: true,
    featured: true,
  },
  {
    title: "Startup Zyeta",
    desc: "Plataforma frontend para startup de tecnologia com dashboard e interface administrativa.",
    tech: ["React", "TypeScript", "Node.js"],
    link: "https://zyeta-technologies-platform-frontend-web.onrender.com",
    category: "Websites",
    preview: true,
  },
  {
    title: "Kwanza Sites – Soluções Digitais",
    desc: "Serviço digital que transforma ideias, processos e desafios em soluções para a web.",
    tech: ["Soluções digitais", "Desenvolvimento web"],
    link: "https://www.kwanzasites.site/",
    category: "Websites",
    preview: true,
  },
  {
    title: "Tabom – Consultoria e Desenvolvimento",
    desc: "Website institucional para consultoria tecnológica com design moderno e funcionalidades interativas.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://tabom-website.vercel.app/",
    category: "Websites",
    preview: true,
  },
  {
    title: "Restaurante Ten",
    desc: "Plataforma web elegante para restaurante premium em Luanda, com cardápio digital e reservas.",
    tech: ["React", "Styled Components", "Node.js"],
    link: "https://luanda-bay-dining.vercel.app/",
    category: "Websites",
    preview: true,
  },
  {
    title: "Bot – Assistente Virtual WhatsApp",
    desc: "Assistente virtual automatizado para WhatsApp com respostas inteligentes.",
    tech: ["Node.js", "WhatsApp API", "MongoDB"],
    link: "https://www.kwanzabot.site/",
    category: "Automação e ferramentas",
    featured: true,
  },
  {
    title: "YETUSTORE ADMIN – Dashboard de Gestão",
    desc: "Dashboard administrativo para gestão de produtos, pedidos e clientes da plataforma YETUSTORE, com funcionalidades de análise e controle.",
    tech: ["Node.js", "react", "MongoDB", "TypeScript"],
    link: null,
    category: "E-commerce",
    featured: true,
  },
  {
    title: "sleep-not-allowed",
    desc: "Pacote Node.js que envia verificações HTTP periódicas a um endpoint de saúde para ajudar a manter APIs activas em plataformas com políticas de inactividade.",
    tech: ["Node.js", "JavaScript", "TypeScript", "npm"],
    link: "https://github.com/ManuelPiresLuis01/sleep-not-allowed",
    category: "Automação e ferramentas",
    npmPackage: true,
    featured: true,
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const visibleProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage,
  );

  const selectCategory = (category: ProjectCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <section id="projetos" className="section-padding">
      <div className="container-custom">
        <SectionTitle subtitle="Projetos que demonstram versatilidade e capacidade técnica">
          Projetos Desenvolvidos
        </SectionTitle>

        <div className="mb-8 flex flex-col items-center gap-2">
          <label htmlFor="project-category" className="text-sm font-medium text-muted-foreground">
            Filtrar por categoria
          </label>
          <Select
            value={activeCategory}
            onValueChange={(value) => {
              const category = categories.find((item) => item === value);
              if (category) selectCategory(category);
            }}
          >
            <SelectTrigger
              id="project-category"
              className="w-full max-w-xs border-border bg-card text-foreground"
              aria-label="Filtrar projectos por categoria"
            >
              <SelectValue placeholder="Selecciona uma categoria" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => {
                return (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow-sm ${"featured" in p && p.featured
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

        {totalPages > 1 && (
          <nav
            className="mt-10 flex flex-col items-center gap-3"
            aria-label="Paginação de projectos"
          >
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Página {currentPage} de {totalPages}
            </span>
            <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card/70 p-1 shadow-glow-sm">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Página ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                  className={`flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    currentPage === page
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {page.toString().padStart(2, "0")}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Projects;
