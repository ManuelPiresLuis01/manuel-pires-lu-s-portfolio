import { FadeIn, SectionTitle } from "./shared";
import fotoPerfil from "@/assets/foto-perfil.jpg";

const About = () => (
  <section id="sobre" className="section-padding">
    <div className="container-custom">
      <SectionTitle subtitle="Disciplina no código. Precisão na entrega. Evolução constante.">
        Sobre Mim
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <FadeIn delay={0.1}>
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/20 shadow-glow">
                <img
                  src={fotoPerfil}
                  alt="Manuel Pires Lui­s"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-full border border-primary/10 -z-10" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Desenvolvedor{" "}
              <span className="text-foreground font-medium">Web</span> e{" "}
              <span className="text-foreground font-medium">
                Analista de Testes
              </span>{" "}
              , Apaixonado por tecnologia, inovação e aprendizado contínuo, com
              experiência em projetos de automação de testes e desenvolvimento
              web.
            </p>
            <p>
              Especializado em automação de testes com{" "}
              <span className="text-primary">Playwright</span> e{" "}
              <span className="text-primary">Vitest</span>, com atuação em
              projetos estratégico como:{" "}
              <span className="text-foreground font-medium">AGT 4.0</span> e{" "}
              <span className="text-foreground font-medium">INAGBE</span> na TIS
              Tech Angola e como{" "}
              <span className="text-foreground font-medium">
                Frontend Developer
              </span>{" "}
              e{" "}
              <span className="text-foreground font-medium">
                Analista de Testes
              </span>{" "}
              na{" "}
              <span className="text-foreground font-medium">
                Mamboo Tecnologia
              </span>
              .
            </p>
            <p>
              Experiência em ambientes ágeis, com comunicação em inglês e foco
              contínuo na qualidade, performance e evolução dos produtos.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default About;
