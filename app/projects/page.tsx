'use client';

import { motion } from 'framer-motion';
import ProjectsHero from './components/ProjectsHero';
import NeuroDesignAI from './components/NeuroDesignAI';
import TeleCore3D from './components/TeleCore3D';
import SmartFactoryFlow from './components/SmartFactoryFlow';
import GlobalTradeAI from './components/GlobalTradeAI';
import CreativeAIStudio from './components/CreativeAIStudio';

export default function ProjectsPage() {
  return (
    <main className="relative w-full overflow-hidden">
      <ProjectsHero />
      <NeuroDesignAI />
      <TeleCore3D />
      <SmartFactoryFlow />
      <GlobalTradeAI />
      <CreativeAIStudio />
    </main>
  );
}
