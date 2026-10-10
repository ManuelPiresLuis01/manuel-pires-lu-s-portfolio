import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";

const AchievementsPage = () => (
  <>
    <SEO
      title="Momentos & Conquistas | Manuel Pires Luís"
      description="Momentos marcantes, palestras e conquistas de Manuel Pires Luís."
      path="/moments"
    />
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Achievements />
      </main>
      <Footer />
    </div>
  </>
);

export default AchievementsPage;
