import { FadeIn, SectionTitle } from "./shared";

const About = () => (
  <section id="sobre" className="section-padding">
    <div className="container-custom">
      <SectionTitle>Sobre Mim</SectionTitle>

      <div className="grid items-start gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <FadeIn delay={0.1} className="border-l-2 border-primary/50 pl-5 md:pl-7">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Olá, sou o Manuel
          </p>
          <h3 className="max-w-sm text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
            Gosto de criar produtos digitais úteis e fiáveis.
          </h3>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Sou desenvolvedor de software e analista de testes. Trabalho com
              desenvolvimento web e automação de testes, procurando sempre
              aprender, colaborar e entregar experiências digitais de qualidade.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default About;
