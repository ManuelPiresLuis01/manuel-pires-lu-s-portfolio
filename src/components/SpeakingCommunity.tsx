
import { useQuery } from "@tanstack/react-query";
import {
  ArrowUpRight,
  CalendarDays,
  ExternalLink,
  Globe2,
  MapPin,
  Mic2,
  RotateCcw,
  Users,
} from "lucide-react";

import { FadeIn, SectionTitle } from "./shared";
import { Button } from "./ui/button";
import {
  getSessionizeProfile,
  type SessionizeProfile,
} from "@/services/sessionize";

const formatEventDate = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const formatter = new Intl.DateTimeFormat("pt-AO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  if (startDate.toDateString() === endDate.toDateString()) {
    return formatter.format(startDate);
  }

  return `${formatter.format(startDate)} – ${formatter.format(endDate)}`;
};

const getPortugueseLanguage = (
  languageCode: string,
  language: string,
  title: string,
  description: string
) => {
  const normalizedCode = languageCode.toLowerCase().split("-")[0];
  const content = `${title} ${description}`;
  const containsPortugueseCharacters = /[ãáàâéêíóôõúç]/i.test(content);
  const containsPortugueseWords =
    /\b(de|da|do|das|dos|na|no|para|qualidade|prática|palestra)\b/i.test(content);

  if (
    normalizedCode === "pt" ||
    containsPortugueseCharacters ||
    containsPortugueseWords
  ) {
    return "Português";
  }

  if (language.toLowerCase() === "portuguese") {
    return "Português";
  }

  return language;
};

const LoadingState = () => (
  <div className="grid animate-pulse gap-6 lg:grid-cols-[0.8fr_1.2fr]">
    <div className="h-80 rounded-3xl bg-muted/60" />
    <div className="space-y-6">
      <div className="h-48 rounded-3xl bg-muted/60" />
      <div className="h-48 rounded-3xl bg-muted/60" />
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
    <div className="rounded-3xl border border-border bg-background/70 px-6 py-12 text-center shadow-glow-sm">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
        <Mic2 className="h-6 w-6 text-primary" />
      </div>

      <h3 className="text-lg font-semibold tracking-tight">
        Não foi possível carregar os conteúdos
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {message}
      </p>

      <Button
        variant="outline"
        className="mt-6 rounded-full"
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
      className="section-padding relative overflow-hidden bg-surface/60"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-custom relative">
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
          <>
            <div className="grid items-start gap-6 lg:grid-cols-[0.8fr_1.2fr]">

              {/* Speaker profile */}
              <FadeIn>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-background/70 p-6 shadow-glow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/30 md:p-8">

                  <div className="mb-8 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Perfil de palestrante
                    </span>

                    <Mic2 className="h-5 w-5 text-primary/60" />
                  </div>

                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div className="relative w-fit shrink-0">
                      <img
                        src={
                          data.speaker.photoLargeUrl ||
                          data.speaker.photoUrl
                        }
                        alt={`Retrato de ${data.speaker.firstName} ${data.speaker.lastName}`}
                        loading="lazy"
                        className="h-24 w-24 rounded-2xl border border-border object-cover shadow-glow-sm transition-transform duration-500 group-hover:scale-[1.03] sm:h-28 sm:w-28"
                      />

                      <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-lg border border-background bg-primary text-primary-foreground">
                        <Mic2 className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-2xl font-bold leading-tight tracking-tight">
                        {data.speaker.firstName}
                        <br />
                        {data.speaker.lastName}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {data.speaker.tagline === "Senior Test Analyst"
                          ? "Analista Sénior de Testes"
                          : data.speaker.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="my-7 h-px bg-border" />

                  <a
                    href={data.speaker.speakerProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    Perfil oficial na Sessionize
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              </FadeIn>

              {/* Speaking engagements */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Participações
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Palestras e apresentações técnicas
                    </p>
                  </div>

                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
                    {data.sessions.length.toString().padStart(2, "0")}
                  </span>
                </div>

                {data.sessions.map((session, index) => (
                  <FadeIn key={session.id} delay={index * 0.08}>
                    <article className="group rounded-3xl border border-border bg-background/70 p-6 shadow-glow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-sm md:p-7">

                      <div className="mb-6 flex items-center justify-between">
                        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                          {getPortugueseLanguage(
                            session.languageCode,
                            session.language,
                            session.title,
                            session.description
                          )}
                        </span>

                        <span className="font-mono text-xs text-muted-foreground">
                          {String(index + 1).padStart(2, "0")} / {String(data.sessions.length).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <h3 className="max-w-xl text-xl font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                          {session.title}
                        </h3>

                        <a
                          href={session.sessionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver detalhes da palestra: ${session.title}`}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
                        >
                          <ArrowUpRight
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </a>
                      </div>

                      {data.events.map((event) => (
                        <div
                          key={event.id}
                          className="mt-7 rounded-2xl border border-border/80 bg-surface/60 p-4 transition-colors duration-300 group-hover:border-primary/20 sm:p-5"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                              Evento
                            </span>

                            <Globe2
                              className="h-4 w-4 text-muted-foreground"
                              aria-hidden="true"
                            />
                          </div>

                          <a
                            href={event.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                          >
                            {event.name}
                            <ArrowUpRight
                              className="h-3.5 w-3.5 text-primary"
                              aria-hidden="true"
                            />
                          </a>

                          <div className="mt-4 flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6">
                            <span className="inline-flex items-center gap-2">
                              <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
                              {formatEventDate(
                                event.eventStartDate,
                                event.eventEndDate
                              )}
                            </span>

                            <span className="inline-flex items-center gap-2">
                              <MapPin className="h-4 w-4 shrink-0 text-primary" />
                              {event.location}
                            </span>
                          </div>
                        </div>
                      ))}
                    </article>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Invitation CTA */}

            <FadeIn delay={0.12}>
              <div className="relative mt-8 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-background/80 to-primary/5 p-7 shadow-glow-sm md:p-9">
                <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-primary/10" />

                <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <Mic2 className="h-4 w-4 text-primary" />
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                        Convites para palestras
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      Vamos levar ideias ao próximo palco?
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Conferências, meetups e eventos de tecnologia. Estou disponível para palestrar.
                    </p>
                  </div>

                  <Button asChild className="shrink-0 rounded-full bg-gradient-primary px-6">
                    <a href="mailto:manuelpiresluis@gmail.com?subject=Convite%20para%20palestra">
                      Fazer um convite
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>

          </>
        )}
      </div>
    </section>
  );
};

export default SpeakingCommunity;
