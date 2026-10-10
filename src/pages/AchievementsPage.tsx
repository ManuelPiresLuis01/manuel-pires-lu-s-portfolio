import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import BackToHome from "@/components/BackToHome";
import SiteSEO from "@/components/SEO";

const AchievementsPage = () => (
  <>
    <SiteSEO
      title="Momentos & Conquistas | Manuel Pires Luís"
      description="Momentos marcantes, palestras e conquistas de Manuel Pires Luís."
      path="/moments"
    />
    <div className="min-h-screen bg-background">
      <BackToHome />
      <main>
        <Achievements />
      </main>
      <Footer />
    </div>
  </>
);

export default AchievementsPage;
