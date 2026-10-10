import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import CorporateProjects from "@/components/CorporateProjects";
import SEO from "@/components/SEO";

const PersonalProjects = () => (
  <>
    <SEO
      title="Projetos | Manuel Pires Luís"
      description="Projectos pessoais, aplicações e websites desenvolvidos por Manuel Pires Luís."
      path="/personalProjects"
    />
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <CorporateProjects />
        <Projects />
      </main>
      <Footer />
    </div>
  </>
);

export default PersonalProjects;
