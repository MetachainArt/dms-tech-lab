import ContactHero from './components/ContactHero';
import ContactMainSection from './components/ContactMainSection';
import LocationSection from './components/LocationSection';
import ContactCTA from './components/ContactCTA';

export const metadata = {
  title: 'Contact | DMS Solution',
  description: '프로젝트에 대한 문의나 협업 제안을 환영합니다. DMS Solution과 함께 아이디어를 현실로 만들어 보세요.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a1f]">
      <ContactHero />
      <ContactMainSection />
      <LocationSection />
      <ContactCTA />
    </main>
  );
}
