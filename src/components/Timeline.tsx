import { FadeIn, SectionTitle } from "./shared";

const items = [
  {
    year: "2022",
    title: "Engenharia Informática",
    desc: "Início da formação universitária em Engenharia Informática",
  },
  {
    year: "2023",
    title: "Desenvolvedor Full-Stack",
    desc: "Centro de Investigação da Universidade de Luanda",
  },
  {
    year: "2024",
    title: "Assistente de Programação",
    desc: "TÁBOM – Consultoria e Desenvolvimento",
  },
  { year: "2025", title: "Frontend Developer & QA", desc: "Mamboo Tecnologia" },
  {
    year: "2025",
    title: "Analista de Testes Automatizados",
    desc: "TIS Tech – Projeto AGT 4.0",
  },
  {
    year: "2026",
    title: "Analista de Testes Automatizados",
    desc: "TIS Tech – Projeto INAGBE",
  },
  {
    year: "2026",
    title: "Co fundador & CTO",
    desc: "YETUSTORE – Plataforma de vendas cash on delivery",
  },
];

const Timeline = () => (
  <section id="timeline" className="section-padding">
    <div className="container-custom">
      <SectionTitle subtitle="A jornada profissional até aqui">
        Linha do Tempo
      </SectionTitle>

      <div className="relative max-w-2xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {items.map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div
              className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-1.5 z-10" />

              <div
                className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"}`}
              >
                <span className="text-primary font-mono text-sm font-medium">
                  {item.year}
                </span>
                <h3 className="font-semibold mt-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
