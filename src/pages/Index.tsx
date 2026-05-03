import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
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

const Index = () => (
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
);

export default Index;
