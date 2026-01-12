'use client';

import { motion } from 'framer-motion';
import ServicesHero from './components/ServicesHero';
import ServiceCardsSection from './components/ServiceCardsSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import BestFitSection from './components/BestFitSection';
import ContactCTASection from './components/ContactCTASection';

export default function ServicesPage() {
  return (
    <main className="relative w-full overflow-hidden">
      <ServicesHero />
      <ServiceCardsSection />
      <HowWeWorkSection />
      <BestFitSection />
      <ContactCTASection />
    </main>
  );
}
