import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import WorkProcessSection from "./components/WorkProcessSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-1 flex flex-col gap-0">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <WorkProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
