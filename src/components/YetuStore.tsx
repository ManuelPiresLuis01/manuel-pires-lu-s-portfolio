import { BadgeCheck, HandCoins, Rocket, ShoppingBag } from "lucide-react";
import coFounderPhoto from "@/assets/co_founder.jpg";
import { FadeIn } from "./shared";

const highlights = [
  {
    icon: Rocket,
    title: "Co-fundador",
    description:
      "Participo na visão, estruturação e crescimento de uma startup angolana com foco em confiança e impacto real.",
  },
  {
    icon: ShoppingBag,
    title: "Cash on delivery",
    description:
      "A YetuStore é pioneira em Angola neste modelo, permitindo que o cliente pague apenas ao receber o produto.",
  },
  {
    icon: HandCoins,
    title: "Sistema de afiliação",
    description:
      "A marca recompensa clientes e parceiros por recomendações, incentivando o empreendedorismo e a comunidade.",
  },
];

const YetuStore = () => (
  <section id="yetustore" className="section-padding">
    <div className="container-custom">
      <div className="relative overflow-hidden rounded-[2rem] px-6 py-8 md:px-10 md:py-12">
        <div className="absolute -right-12 top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn delay={0.15} className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-primary opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 p-3 backdrop-blur-md">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                    src={coFounderPhoto}
                    alt="Manuel Pires Luis, co-fundador da YetuStore"
                    loading="lazy"
                    decoding="async"
                    className="h-[460px] w-full object-cover object-top"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-background/40 px-4 py-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Função</p>
                    <p className="font-semibold text-foreground">Co-fundador</p>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div>
                    <p className="text-sm text-muted-foreground">Startup</p>
                    <p className="font-semibold text-foreground">YetuStore</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="order-2 space-y-6 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <BadgeCheck size={16} />
              Co-fundador da YetuStore
            </div>

            <div className="space-y-4">
              <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
                Construo produto, marca e visão através da <span className="text-gradient">YetuStore</span>.
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                A <span className="font-semibold text-foreground">YetuStore</span> é uma startup angolana inovadora
                que facilita o acesso a produtos importados de qualidade, com uma experiência de compra mais prática,
                segura e confiável.
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Somos pioneiros em Angola na implementação do modelo <span className="font-semibold text-foreground">cash on delivery</span>,
                onde o cliente paga apenas no momento da entrega.
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Também criamos oportunidades com um sistema de afiliação que recompensa recomendações e fortalece uma
                comunidade de parceiros em crescimento.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

export default YetuStore;
