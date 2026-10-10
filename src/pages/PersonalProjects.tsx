import Footer from "@/components/Footer";
import BackToHome from "@/components/BackToHome";
import Projects from "@/components/Projects";
import CorporateProjects from "@/components/CorporateProjects";
import SiteSEO from "@/components/SEO";

const PersonalProjects = () => (
  <>
    <SiteSEO
      title="Projetos | Manuel Pires Luís"
      description="Projectos pessoais, aplicações e websites desenvolvidos por Manuel Pires Luís."
      path="/personalProjects"
    />
    <div className="min-h-screen bg-background">
      <BackToHome />
      <main>
        <CorporateProjects />
        <Projects />
      </main>
      <Footer />
    </div>
  </>
);

export default PersonalProjects;
