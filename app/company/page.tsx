import CompanyHero from './components/CompanyHero';
import AboutSection from './components/AboutSection';
import VisionSection from './components/VisionSection';
import ServicesSection from './components/ServicesSection';
import ValuesSection from './components/ValuesSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';

export default function CompanyPage() {
  return (
    <main className="relative w-full overflow-hidden">
      <CompanyHero />
      <AboutSection />
      <VisionSection />
      <ServicesSection />
      <ValuesSection />
      <TimelineSection />
      <ContactSection />
    </main>
  );
}
