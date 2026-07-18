import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SEO from "@/components/SEO";
import YetuStore from "@/components/YetuStore";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CorporateProjects from "@/components/CorporateProjects";
import Timeline from "@/components/Timeline";
import Technologies from "@/components/Technologies";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const seoStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Manuel Pires Luis",
    url: "https://www.manuelpiresluis.site/",
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Manuel Pires Luis",
    alternateName: ["Manuel Pires Luís", "Manuel Pires Luis Developer", "Manuel Dev"],
    url: "https://www.manuelpiresluis.site/",
    image: "https://www.manuelpiresluis.site/foto-perfil.jpg",
    jobTitle: "Web Developer and QA Engineer",
    description:
      "Web Developer and QA Engineer focused on TypeScript, Playwright, test automation, quality assurance and remote product teams.",
    knowsAbout: [
      "React",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Backend Development",
      "full-stack development",
      "QA Engineering",
      "Test Automation",
      "Playwright",
      "Vitest",
      "Web Performance",
      "Remote Collaboration",
    ],
    knowsLanguage: ["Portuguese", "English"],
    sameAs: [
      "https://github.com/ManuelPiresLuis01",
      "https://www.linkedin.com/in/manuel-pires-l-5275852aa/",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Manuel Pires Luis | Web Developer & QA Engineer",
    url: "https://www.manuelpiresluis.site/",
    description:
      "Portfolio website of Manuel Pires Luis, a Web Developer and QA Engineer available for remote roles and freelance work.",
    primaryImageOfPage: "https://www.manuelpiresluis.site/foto-perfil.jpg",
  },
];

const Index = () => (
  <>
    <SEO
      title="Manuel Pires Luis | Web Developer & QA Engineer"
      description="Web Developer and QA Engineer portfolio. Manuel Pires Luis builds reliable web products with React, TypeScript, Playwright and modern testing for remote teams and freelance clients."
      structuredData={seoStructuredData}
    />
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <YetuStore />
      <Services />
      <CorporateProjects />
      <Projects />
      <Timeline />
      <Technologies />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  </>
);

export default Index;
