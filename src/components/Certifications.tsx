import { FadeIn, SectionTitle } from "./shared";
import { useState } from "react";
import { Award, ChevronDown, ChevronUp } from "lucide-react";

const certs = [
  { title: "3º Lugar – ICPC Angolan Collegiate Programming Contest 2025", highlight: true },
  { title: "24º Lugar – ICPC Angolan Collegiate Programming Contest 2024" },
  { title: "Simplifica Inteligência Artificial Express – Simplifica Treinamentos" },
  { title: "Technology Bootcamp – Kappa" },
  { title: "Responsive Web Design – freeCodeCamp" },
  { title: "Programming Foundations: Software Testing/QA – LinkedIn" },
  { title: "Understanding Manual Testing – LinkedIn" },
  { title: "Get Started with Jira – Coursera" },
  { title: "How to Create a Jira SCRUM Project – Coursera" },
  { title: "Pedagogia – UNIVESP (Módulos 1/2 e 3/4)" },
  { title: "EF SET English Certificate – B1" },
];

const Certifications = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? certs : certs.slice(0, 6);

  return (
    <section id="certificacoes" className="section-padding">
      <div className="container-custom">
        <SectionTitle subtitle="Formação contínua e reconhecimento profissional">
          Certificações
        </SectionTitle>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {visible.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.05}>
              <div className={`flex items-start gap-3 p-4 rounded-xl border transition-all ${
                c.highlight
                  ? "bg-primary/10 border-primary/30 shadow-glow-sm"
                  : "bg-card border-border hover:border-primary/20"
              }`}>
                <Award className={`w-5 h-5 shrink-0 mt-0.5 ${c.highlight ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`text-sm ${c.highlight ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                  {c.title}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {certs.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              {expanded ? "Ver menos" : "Ver todas"} {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
