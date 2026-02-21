import { FadeIn, SectionTitle } from "./shared";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "manuelpiresluis@gmail.com",
    href: "mailto:manuelpiresluis@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Manuel Pires Luís",
    href: "https://www.linkedin.com/in/manuel-pires-l-5275852aa/",
  },
  {
    icon: Github,
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
      <SectionTitle subtitle="Vamos trabalhar juntos no seu próximo projeto">
        Entre em Contato
      </SectionTitle>

      <div className="max-w-2xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contacts.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.1}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium">{c.value}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center">
            <a
              href="mailto:manuelpiresluis@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-glow"
            >
              <Mail className="w-5 h-5" />
              Solicitar Serviço
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default Contact;
