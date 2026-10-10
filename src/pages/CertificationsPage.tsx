import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";

const CertificationsPage = () => (
  <>
    <SEO
      title="Certificações | Manuel Pires Luís"
      description="Certificações, formação contínua e reconhecimento profissional de Manuel Pires Luís."
      path="/certifications"
    />
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Certifications />
      </main>
      <Footer />
    </div>
  </>
);

export default CertificationsPage;
