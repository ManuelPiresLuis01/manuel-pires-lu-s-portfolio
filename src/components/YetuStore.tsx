import { ArrowUpRight, BadgeCheck, HandCoins, Rocket, ShoppingBag } from "lucide-react";
import coFounderPhoto from "@/assets/co_founder.jpg";
import { FadeIn } from "./shared";

const highlights = [
  {
    icon: Rocket,
    title: "Co-fundador & CTO",
    description: "Visão de produto, estratégia e crescimento.",
  },
  {
    icon: ShoppingBag,
    title: "Pagamento na entrega",
    description: "O cliente paga apenas quando recebe.",
  },
  {
    icon: HandCoins,
    title: "Rede de afiliados",
    description: "Recomendações que criam oportunidades.",
  },
];

const YetuStore = () => (
  <section
    id="yetustore"
    className="section-padding relative isolate flex min-h-[100dvh] items-center overflow-hidden"
  >
    <div
      aria-hidden="true"
      className="parallax-photo-background yetu-fixed-background absolute inset-0"
      style={{ backgroundImage: `url("${coFounderPhoto}")` }}
    />
    <div aria-hidden="true" className="yetu-background-darken absolute inset-0" />
    <div aria-hidden="true" className="yetu-background-shade absolute inset-0" />

    <div className="container-custom relative z-10 py-4 md:py-8">
      <FadeIn className="max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-background/35 px-4 py-2 text-xs font-medium text-primary backdrop-blur-sm sm:text-sm">
          <BadgeCheck size={16} />
          Co-fundador da YetuStore
        </div>

        <h2 className="mb-5 max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
          Comércio digital com mais confiança, através da{" "}
          <span className="text-gradient">YetuStore</span>.
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-foreground/85 sm:text-base">
          Como co-fundador, ajudo a criar uma experiência de compra prática e
          segura, com produtos importados, pagamento na entrega e oportunidades
          para uma comunidade de afiliados.
        </p>

        <a
          href="https://www.yetustore.shop/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Conhecer a YetuStore
          <ArrowUpRight size={16} />
        </a>
      </FadeIn>

      <div className="mt-10 grid gap-6 border-t border-white/20 pt-6 sm:grid-cols-3 sm:gap-8 md:mt-14 md:pt-8">
        {highlights.map((highlight, index) => (
          <FadeIn key={highlight.title} delay={index * 0.08}>
            <div className="flex items-start gap-3">
              <highlight.icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="text-sm font-semibold sm:text-base">{highlight.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-foreground/70 sm:text-sm">
                  {highlight.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default YetuStore;
