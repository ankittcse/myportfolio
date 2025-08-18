import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Particle Background - Stays in the back */}
      <ParticleBackground />

      {/* NEW: Wrapper to bring all content to the front */}
      <div className="relative z-10">
        <Navigation />

        <main>
          <section id="hero">
            <HeroSection />
          </section>

          <AboutSection />
          <EducationSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;