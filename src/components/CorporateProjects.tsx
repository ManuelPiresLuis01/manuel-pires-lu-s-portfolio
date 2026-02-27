import { FadeIn, SectionTitle } from "./shared";
import { ExternalLink, Shield, Monitor, Bug } from "lucide-react";

const CorporateProjects = () => (
  <section id="experiencia" className="section-padding bg-surface">
    <div className="container-custom">
      <SectionTitle subtitle="Atuação técnica em ambientes corporativos e sistemas de alta responsabilidade">
        Projetos Corporativos
      </SectionTitle>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Yetuedu */}
        <FadeIn>
          <div className="h-full rounded-2xl border border-border/70 bg-card/80 p-6 md:p-7 shadow-sm transition hover:shadow-md">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-3">
                <Monitor className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Yetuedu</h3>
              </div>
              <a
                href="https://www.yetuedu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm inline-flex items-center gap-1"
              >
                Visitar <ExternalLink size={12} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Plataforma educacional com foco em qualidade, experiência do
              utilizador e evolução contínua do produto.
            </p>
            <div className="grid gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mt-5">
              Responsabilidades
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {
                [
                  "Garantia de qualidade e testes funcionais",
                  "Acompanhamento de bugs e melhorias",
                  "Colaboração com produto e design",
                  "Aprimoramento contínuo da experiência do utilizador"
                ].map((r) => (
                  <div
                    key={r}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Bug className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {r}
                  </div>
                ))
              }
            </div>
          </div>
        </FadeIn>

        {/* Mamboo */}
        <FadeIn delay={0.1}>
          <div className="h-full rounded-2xl border border-border/70 bg-card/80 p-6 md:p-7 shadow-sm transition hover:shadow-md">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-3">
                <Monitor className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Mamboo Tecnologia</h3>
              </div>
              <a
                href="https://site.mamboo.co.ao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm inline-flex items-center gap-1"
              >
                Visitar <ExternalLink size={12} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Atuação como Desenvolvedor Frontend e Analista de QA em produtos
              digitais de alta demanda.
            </p>

            <div className="grid gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Produtos e entregas
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {[
                "Mamboo Lojista – Plataforma de gestão de lojistas",
                "Mamboo Pack – Sistema interno de gestão operacional",
                "App Mamboo Lojista – Acompanhamento de pedidos e status de entregas",
                "Documentação técnica no Confluence",
              ].map((r) => (
                <div
                  key={r}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Bug className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {r}
                </div>
              ))}
            </div>

            <div className="grid gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mt-5">
              Responsabilidades
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {[
                "Desenvolvimento de interfaces responsivas com React + TypeScript",
                "Refatoração, componentização e melhoria de performance",
                "QA manual em ambiente de desenvolvimento e produção",
                "Criação de relatórios de bugs e validações no Jira",
                "Testes funcionais, regressivos e validação de fluxos críticos",
                "Colaboração com desenvolvedores, designers e equipe de produto",
              ].map((r) => (
                <div
                  key={r}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Bug className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {r}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* SIGT */}
        <FadeIn delay={0.2}>
          <div className="h-full rounded-2xl border border-border/70 bg-card/80 p-6 md:p-7 shadow-sm transition hover:shadow-md">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">SIGT – AGT 4.0</h3>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Governo
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Atuação na automação de testes no Sistema Integrado de Gestão
              Tributária da Administração Geral Tributária.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {[
                "Automação de testes com Playwright",
                "Testes de regressão",
                "Garantia de estabilidade do sistema",
                "Revisões técnicas",
              ].map((r) => (
                <div
                  key={r}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Bug className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {r}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Portal do Contribuinte */}
        <FadeIn delay={0.25}>
          <div className="h-full rounded-2xl border border-border/70 bg-card/80 p-6 md:p-7 shadow-sm transition hover:shadow-md">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">
                  Portal do Contribuinte – AGT 4.0
                </h3>
              </div>
              <a
                href="https://portaldocontribuinte.minfin.gov.ao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm inline-flex items-center gap-1"
              >
                Visitar <ExternalLink size={12} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Atuação na automação de testes no Portal do Contribuinte da
              Administração Geral Tributária.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {[
                "Automação de testes com Playwright",
                "Testes de regressão",
                "Garantia de estabilidade do sistema",
                "Revisões técnicas",
              ].map((r) => (
                <div
                  key={r}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Bug className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {r}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default CorporateProjects;

