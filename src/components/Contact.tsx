import { FadeIn, SectionTitle } from "./shared";
import { Mail, Globe, Code2, MessageCircle, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "manuelpiresluis@gmail.com",
    href: "mailto:manuelpiresluis@gmail.com",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "Manuel Pires Luís",
    href: "https://www.linkedin.com/in/manuel-pires-l-5275852aa/",
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "ManuelPiresLuis01",
    href: "https://github.com/ManuelPiresLuis01",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+244 929 004 469",
    href: "https://wa.me/244929004469?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20via%20portf%C3%B3lio%20para%20solicitar%20um%20servi%C3%A7o",
  },
];

const Contact = () => (
  <section id="contato" className="section-padding">
    <div className="container-custom">
      <SectionTitle subtitle="Se tens uma ideia, um projecto ou simplesmente queres trocar experiências, estou disponível para conversar.">
        Vamos conversar?
      </SectionTitle>

      <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
        <FadeIn className="max-w-sm">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Tenho interesse em colaborar em projetos que tenham impacto real, criatividade e rigor técnico.
            Escolhe o canal mais conveniente e vamos falar.
          </p>
        </FadeIn>
        <div className="divide-y divide-border border-y border-border">
          {contacts.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.06}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-5 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <c.icon aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="break-words text-sm font-medium text-foreground">{c.value}</p>
                </div>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
