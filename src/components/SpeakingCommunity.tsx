
import { useQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  ExternalLink,
  Mic2,
  RotateCcw,
} from "lucide-react";

import { FadeIn, SectionTitle } from "./shared";
import { Button } from "./ui/button";
import {
  getSessionizeProfile,
  type SessionizeProfile,
} from "@/services/sessionize";

const LoadingState = () => (
  <div className="grid animate-pulse gap-8 lg:grid-cols-[0.8fr_1.2fr]">
    <div className="h-72 rounded-2xl bg-muted/40" />
    <div className="space-y-5">
      <div className="h-12 w-2/3 rounded-lg bg-muted/40" />
      <div className="h-5 w-full rounded-lg bg-muted/40" />
      <div className="h-5 w-4/5 rounded-lg bg-muted/40" />
    </div>
  </div>
);

const ErrorState = ({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) => (
  <FadeIn>
    <div className="py-12 text-center">
      <Mic2 className="mx-auto mb-5 h-8 w-8 text-muted-foreground" />

      <h3 className="text-lg font-semibold tracking-tight">
        Não foi possível carregar os conteúdos
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {message}
      </p>

      <Button
        variant="outline"
        className="mt-6 rounded-full transition-colors hover:bg-muted"
        onClick={onRetry}
      >
        <RotateCcw aria-hidden="true" className="mr-2 h-4 w-4" />
        Tentar novamente
      </Button>
    </div>
  </FadeIn>
);

const SpeakingCommunity = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<SessionizeProfile>({
    queryKey: ["sessionize-speaker-profile"],
    queryFn: getSessionizeProfile,
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  return (
    <section
      id="speaking-community"
      className="section-padding relative"
    >
      <div className="container-custom">
        <SectionTitle subtitle="Partilha de conhecimento, comunicação técnica e envolvimento activo no ecossistema tecnológico.">
          Palestras & Envolvimento na Comunidade.
        </SectionTitle>

        {isLoading && <LoadingState />}

        {isError && (
          <ErrorState
            message={
              error instanceof Error
                ? error.message
                : "Não foi possível carregar as palestras disponíveis neste momento."
            }
            onRetry={() => void refetch()}
          />
        )}

        {data && (
          <FadeIn>
            <article className="flex flex-col gap-10 py-4 md:flex-row md:items-center md:gap-16">

              {/* Fotografia */}
              <div className="relative mx-auto w-full max-w-[280px] shrink-0 md:mx-0 md:w-[280px]">
                <img
                  src={
                    data.speaker.photoLargeUrl ||
                    data.speaker.photoUrl
                  }
                  alt={`Retrato de ${data.speaker.firstName} ${data.speaker.lastName}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-2xl object-cover"
                />
              </div>

              {/* Informação */}
              <div className="flex min-w-0 flex-1 flex-col items-center text-center md:items-start md:text-left">

                <div className="mb-5 flex items-center gap-2 text-sm font-medium text-primary">
                  <Mic2 className="h-4 w-4" />
                  Palestrante
                </div>

                <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Comunidade tecnológica
                </p>

                <h3 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {data.speaker.firstName}
                  <span className="block">
                    {data.speaker.lastName}
                  </span>
                </h3>

                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                  {data.speaker.tagline === "Software Developer & Senior Test Analyst"
                    ? "Desenvolvedor de Software & Analista Sénior de Testes"
                    : data.speaker.tagline}
                </p>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Partilho conhecimentos e experiências sobre
                  tecnologia, desenvolvimento de software e
                  automação de testes, contribuindo para o
                  crescimento da comunidade tecnológica.
                </p>

                {/* Acções */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">

                  <a
                    href={data.speaker.speakerProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-muted"
                  >
                    Ver perfil oficial
                    <ExternalLink
                      aria-hidden="true"
                      className="h-4 w-4"
                    />
                  </a>

                  <a
                    href="mailto:manuelpiresluis@gmail.com?subject=Convite%20para%20palestra"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110"
                  >
                    Convidar para palestrar
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4"
                    />
                  </a>

                </div>
              </div>
            </article>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default SpeakingCommunity;
