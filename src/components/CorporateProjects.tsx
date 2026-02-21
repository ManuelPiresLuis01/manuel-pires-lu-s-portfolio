import { FadeIn, SectionTitle } from "./shared";
import { ExternalLink, Shield, Monitor, Bug } from "lucide-react";
import mambooImg from "@/assets/mamboo.jpg";

const CorporateProjects = () => (
  <section id="experiencia" className="section-padding bg-surface">
    <div className="container-custom">
      <SectionTitle subtitle="Atuação técnica em ambientes corporativos e sistemas de alta responsabilidade">
        Projetos Corporativos
      </SectionTitle>

      {/* Yetuedu */}
      <FadeIn>
        <div className="mb-10 p-6 md:p-8 rounded-xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Monitor className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold">Yetuedu</h3>
            <a href="https://www.yetuedu.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
              Visitar <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">Plataforma educacional com foco em qualidade e experiência do utilizador.</p>
        </div>
      </FadeIn>

      {/* Mamboo */}
      <FadeIn delay={0.1}>
        <div className="mb-10 p-6 md:p-8 rounded-xl bg-card border border-border">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Mamboo Tecnologia</h3>
                <a href="https://site.mamboo.co.ao/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
                  Visitar <ExternalLink size={12} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Atuação como Desenvolvedor Frontend e Analista de QA.
              </p>

              <h4 className="text-sm font-semibold text-foreground mb-2">Plataformas de Backoffice:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                <li>▸ <span className="text-foreground">Web Lojista</span> – Gestão de lojistas</li>
                <li>▸ <span className="text-foreground">Web Pack</span> – Gestão operacional interna</li>
                <li>▸ <span className="text-foreground">Pack Lojista</span> – Acompanhamento de pedidos</li>
              </ul>

              <h4 className="text-sm font-semibold text-foreground mb-2">Responsabilidades:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>▸ Interfaces administrativas responsivas</li>
                <li>▸ Refatoração e otimização de código</li>
                <li>▸ Testes manuais em dev e produção</li>
                <li>▸ Colaboração com equipes multidisciplinares</li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={mambooImg} alt="Manuel na Mamboo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </FadeIn>

      {/* AGT */}
      <FadeIn delay={0.2}>
        <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold">SIGT – AGT 4.0</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Atuação na automação de testes no Sistema Integrado de Gestão Tributária da Administração Geral Tributária.
          </p>
          <a href="https://portaldocontribuinte.minfin.gov.ao/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1 mb-4">
            Portal do Contribuinte <ExternalLink size={12} />
          </a>

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              "Automação de testes com Playwright",
              "Testes de regressão",
              "Garantia de estabilidade do sistema",
              "Revisões técnicas",
            ].map((r) => (
              <div key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Bug className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {r}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default CorporateProjects;
