"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "AI-Powered Automation",
    subtitle: "REVOLUTIONIZE OPERATIONS",
    description: "Empower your business with cutting-edge AI agents that handle complex workflows autonomously. From customer engagement to backend logic, we automate the impossible.",
    points: ["Autonomous Agents", "Workflow Optimization", "Real-time Analytics"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "3D Engineering & Design",
    subtitle: "IMMERSIVE EXPERIENCES",
    description: "Bridge the gap between digital and physical. Our 3D engineering solutions provide photorealistic visualizations and interactive product configurators that convert.",
    points: ["Product Visualization", "Interactive WebGL", "Digital Twins"],
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Tech Education & Consulting",
    subtitle: "FUTURE READY TEAMS",
    description: "Equip your team with the skills to leverage Generative AI. We provide specialized training and consulting to transform your workforce into AI-native experts.",
    points: ["GenAI Workshops", "Technical Consulting", "Custom Curriculums"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Company() {
  return (
    <section id="company" className="relative w-full py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-40">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
             >
                <div className="flex items-center gap-3 mb-6">
                    <span className="h-[1px] w-12 bg-neon-sky" />
                    <h3 className="text-neon-sky font-poppins font-semibold tracking-widest text-sm uppercase">About DMS</h3>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-white">
                    Driving Innovation at the<br />
                    Intersection of <span className="text-neon-sky">AI & Design.</span>
                </h2>
                <p className="text-lg text-white/60 leading-relaxed mb-8">
                    We don't just build software; we architect the future. 
                    Merging advanced 3D visualization with intelligent AI systems to create 
                    unmatched digital experiences.
                </p>
                <button className="text-white border-b border-neon-sky pb-1 hover:text-neon-sky transition-colors flex items-center gap-2">
                    Learn more about us <ArrowRight className="w-4 h-4" />
                </button>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] rounded-3xl overflow-hidden"
             >
                 {/* Abstract visual representation */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#050B1B] to-transparent z-10 opacity-60" />
                 <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" 
                    alt="Innovation" 
                    className="object-cover w-full h-full opacity-50 hover:scale-105 transition-transform duration-700"
                 />
             </motion.div>
        </div>

        {/* Feature Blocks (Image Left / Text Right pattern) */}
        <div className="space-y-32">
            {features.map((feature, index) => (
                <div key={feature.title} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Image Side (Always Left as per reference) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="relative aspect-[4/3] rounded-3xl overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[#050B1B]/20 group-hover:bg-transparent transition-colors z-10" />
                        <img 
                            src={feature.image} 
                            alt={feature.title}
                            className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        />
                        {/* Decorative Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#050B1B] to-transparent opacity-80" />
                    </motion.div>

                    {/* Text Side (Always Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-start"
                    >
                        <span className="text-neon-sky font-mono text-xs tracking-widest mb-4 uppercase">{feature.subtitle}</span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{feature.title}</h3>
                        <p className="text-white/60 text-lg leading-relaxed mb-8">
                            {feature.description}
                        </p>
                        
                        <ul className="space-y-4 mb-8">
                            {feature.points.map((point) => (
                                <li key={point} className="flex items-center gap-3 text-white/80">
                                    <CheckCircle2 className="w-5 h-5 text-neon-sky" />
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-medium">
                            Explore Solution
                        </button>
                    </motion.div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
