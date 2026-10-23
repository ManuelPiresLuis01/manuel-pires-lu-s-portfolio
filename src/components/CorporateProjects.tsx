import { FadeIn, SectionTitle } from "./shared";
import { ExternalLink } from "lucide-react";

const CorporateProjects = () => (
  <section id="experiencia" className="section-padding">
    <div className="container-custom">
      <SectionTitle subtitle="Atuação técnica em ambientes corporativos e sistemas de alta responsabilidade">
        Projetos Corporativos
      </SectionTitle>

      <div className="grid gap-6 lg:grid-cols-2">
        <FadeIn delay={0.1}>
          <article className="h-full rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md md:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
              <img
                src="https://res.cloudinary.com/dothdodbx/image/upload/f_auto,q_auto/v1746707341/logo_white_upscayl_2x_realesrgan-x4plus_fhdlp3.png"
                alt="Mamboo"
                loading="lazy"
                decoding="async"
                className="h-12 max-w-40 object-contain object-left"
              />
              <a
                href="https://site.mamboo.co.ao/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                Visitar <ExternalLink size={12} />
              </a>
            </div>

            <h3 className="mb-2 text-lg font-semibold">Mamboo Tecnologia</h3>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              Atuei como Desenvolvedor Frontend e Analista de Testes em
              produtos digitais de alta escala, contribuindo no desenvolvimento,
              validação e evolução de sistemas internos e externos da
              plataforma.
            </p>

          </article>
        </FadeIn>

        <FadeIn delay={0.2}>
          <article className="h-full rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md md:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
              <img
                src="https://tis.ao/wp-content/uploads/2025/05/logo-branca.svg"
                alt="TIS"
                loading="lazy"
                decoding="async"
                className="h-12 max-w-40 object-contain object-left"
              />
              <a
                href="https://tis.ao/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                Visitar <ExternalLink size={12} />
              </a>
            </div>
            <h3 className="mb-2 text-lg font-semibold">TIS Tech Angola</h3>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              Atuo como Analista de Testes Automatizados na TIS Tech Angola, garantindo a qualidade, a fiabilidade e a estabilidade dos sistemas da AGT e do INAGBE.
            </p>
          </article>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default CorporateProjects;
