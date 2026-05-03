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

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.1}>
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300 h-full">
              <s.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span> {item}
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Solicitar via Email
          </a>
          <a
            href="https://wa.me/244929004469?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20via%20portf%C3%B3lio%20para%20solicitar%20um%20servi%C3%A7o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-colors"
          >
            Solicitar via WhatsApp
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default Services;
