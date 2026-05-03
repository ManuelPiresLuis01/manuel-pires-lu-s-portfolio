import { FadeIn, SectionTitle } from "./shared";
import { ExternalLink, Shield, Monitor, Bug } from "lucide-react";

const CorporateProjects = () => (
  <section id="experiencia" className="section-padding bg-surface">
    <div className="container-custom">
      <SectionTitle subtitle="Atuação técnica em ambientes corporativos e sistemas de alta responsabilidade">
        Projetos Corporativos
      </SectionTitle>

      <div className="grid gap-6 lg:grid-cols-2">
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
              Atuação como Desenvolvedor Frontend e Analista de Testes em
              produtos digitais de alta escala, contribuindo no desenvolvimento,
              validação e evolução de sistemas internos e externos da
              plataforma.
            </p>

            <div className="grid gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Produtos desenvolvidos e suportados
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {[
                "Desenvolvimento de interfaces com foco em usabilidade e performance",
                "Refatoração e melhoria contínua",
                "Testes com foco em regressão e estabilidade",
                "Criação e reporte de bugs estruturados no Jira",
                "Validação de funcionalidades em ambientes de desenvolvimento e produção",
                "Colaboração direta com equipas de produto, design e engenharia",
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

        {/* AGT 4.0 */}
        <FadeIn delay={0.2}>
          <div className="h-full rounded-2xl border border-border/70 bg-card/80 p-6 md:p-7 shadow-sm transition hover:shadow-md">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Projecto – AGT 4.0</h3>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Governo
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Atuação na automação de testes do Sistema Integrado de Gestão
              Tributária (SIGT) da Administração Geral Tributária, incluindo o
              Portal do Contribuinte.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {[
                "Automação de testes no SIGT e Portal do Contribuinte",
                "Testes funcionais e de regressão em sistemas fiscais",
                "Garantia de estabilidade em aplicações críticas da AGT",
                "Validação de fluxos e cenários de negócio complexos",
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

        {/* INAGBE */}
        <FadeIn delay={0.2}>
          <div className="h-full rounded-2xl border border-border/70 bg-card/80 p-6 md:p-7 shadow-sm transition hover:shadow-md">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Projeto – INAGBE</h3>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Governo
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Atuação na garantia de qualidade em dois sistemas do INAGBE:
              Portal do Cliente e Portal de Backoffice, assegurando
              estabilidade, consistência e confiabilidade dos processos críticos
              da plataforma.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {[
                "Testes funcionais e de regressão no Portal do Cliente",
                "Testes no Portal de Backoffice (gestão interna)",
                "Validação de fluxos críticos de candidatura e gestão de bolsas",
                "Identificação e reporte de inconsistências nos dois portais",
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
