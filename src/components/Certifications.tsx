import { FadeIn, SectionTitle } from "./shared";
import { useState } from "react";
import { Award, ChevronDown, ChevronUp } from "lucide-react";

const certs = [
  {
    title:
      "1º Lugar – ICPC Angolan Collegiate Programming Contest 2026 (internal - INSTIC)",
    highlight: true,
  },
  { title: "Career Essentials in GitHub Professional Certificate" },
  { title: "Practical GitHub Copilot" },
  { title: "Practical GitHub Project Management and Collaboration" },
  { title: "Advanced Testing Foundations: Keeping QA Skills Current in the Age of AI" },
  { title: "CSS Layouts: From Float to Flexbox and Grid" },
  { title: "Software Testing Foundations: Test Strategy" },
  { title: "Delegating Tasks to GitHub Copilot: Building Faster, Smarter Engineering Practices" },
  { title: "Building RESTful APIs with Node.js and Express" },
  {
    title: "3º Lugar – ICPC Angolan Collegiate Programming Contest 2025",
    highlight: true,
  },
  { title: "3º Lugar – Hackathon de Cibersegurança do MININT" },
  { title: "24º Lugar – ICPC Angolan Collegiate Programming Contest 2024" },
  {
    title:
      "Simplifica Inteligência Artificial Express – Simplifica Treinamentos",
  },
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

        <div className="grid gap-x-10 md:grid-cols-2">
          {visible.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.05}>
              <div
                className={`flex h-full items-start gap-3 border-b py-4 transition-colors ${
                  c.highlight
                    ? "border-primary/40"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <Award
                  className={`mt-0.5 h-5 w-5 shrink-0 ${c.highlight ? "text-primary" : "text-muted-foreground"}`}
                />
                <span
                  className={`text-sm leading-relaxed ${c.highlight ? "font-medium text-foreground" : "text-muted-foreground"}`}
                >
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
              {expanded ? "Ver menos" : "Ver todas"}{" "}
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
