import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GitHubStats } from './components/GitHubStats';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ToastProvider } from './components/ToastProvider';

function AppContent() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />

        <section id="home">
          <HeroSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="github">
          <GitHubStats />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}