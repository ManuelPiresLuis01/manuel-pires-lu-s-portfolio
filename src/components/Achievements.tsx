import { FadeIn, SectionTitle } from "./shared";
import { Trophy } from "lucide-react";
import aocpc2 from "@/assets/aocpc2.jpg";
import aocpc3 from "@/assets/aocpc3.jpg";
import angotic from "@/assets/angotic.jpeg";
import devfestLuanda from "@/assets/devfest.jpg";

const achievements = [
  {
    title: "DevFest Angola 2025",
    desc: "Palestra: Testes de Software na Prática — a importância para garantir qualidade antes do deploy (GDG Angola)",
    img: devfestLuanda,
  },
  { title: "3º Lugar – ICPC 2025", desc: "Angolan Collegiate Programming Contest", img: aocpc3 },
  { title: "Troféu AOCPC 2025", desc: "3º Classificado no concurso universitário de programação", img: aocpc2 },
  {
    title: "3º Lugar – Hackathon de Cibersegurança",
    desc: "3 lugar do Hackaton de cybersegurança do MININT organizado pelo Angotic",
    img: angotic,
  },
];

const Achievements = () => (
  <section className="section-padding bg-surface">
    <div className="container-custom">
      <SectionTitle subtitle="Momentos marcantes da trajetória profissional e acadêmica">
        Momentos & Conquistas
      </SectionTitle>

      <div className="grid sm:grid-cols-3 gap-6">
        {achievements.map((a, i) => (
          <FadeIn key={a.title} delay={i * 0.1}>
            <div className="group rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300 bg-card">
              <div className="h-56 overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm">{a.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground">{a.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
