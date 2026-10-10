import { FadeIn, SectionTitle } from "./shared";
import { Compass, Code2, Globe, TestTube } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Consultoria para Carreira em Tecnologia",
    items: ["Orientação estratégica para iniciantes", "Planejamento de estudos", "Preparação para mercado"],
  },
  {
    icon: Code2,
    title: "Refatoração de Código",
    items: ["Melhoria de arquitetura", "Otimização de performance", "Aplicação de boas práticas"],
  },
  {
    icon: Globe,
    title: "Desenvolvimento de Websites e Sistemas",
    items: ["Aplicações em React + TypeScript", "APIs com Node.js e Express", "Integração com MySQL e MongoDB"],
  },
  {
    icon: TestTube,
    title: "Testes e Garantia de Qualidade",
    items: ["Automação com Playwright", "Testes com Vitest", "Testes manuais", "Testes de regressão"],
  },
];

const Services = () => (
  <section id="servicos" className="section-padding bg-surface">
    <div className="container-custom">
      <SectionTitle subtitle="Serviços profissionais para impulsionar seu projeto">
        Serviços
      </SectionTitle>

      <div className="mb-12 divide-y divide-border border-y border-border">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.06}>
            <div className="grid gap-4 py-6 md:grid-cols-[2rem_0.8fr_1.2fr] md:items-start md:gap-6">
              <s.icon aria-hidden="true" className="mt-1 h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold leading-snug">{s.title}</h3>
              <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:manuelpiresluis@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Solicitar via Email
          </a>
          <a
            href="https://wa.me/244929004469?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20via%20portf%C3%B3lio%20para%20solicitar%20um%20servi%C3%A7o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-primary transition-colors hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Solicitar via WhatsApp
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default Services;
