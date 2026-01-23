'use client';

import { motion } from 'framer-motion';

export default function LocationSection() {
  return (
    <section className="relative py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Location
          </h2>
          
          <div className="glass-panel rounded-2xl p-8 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Location Info */}
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-neon-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold text-white">Korea</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  DMS Solution은 대한민국에 기반을 두고<br />
                  글로벌 클라이언트와 협업하고 있습니다.
                </p>
                <div className="mt-6 flex items-center gap-2 justify-center lg:justify-start">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm">원격 협업 가능</span>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="lg:w-2/3 w-full">
                <div className="relative w-full h-[300px] lg:h-[400px] rounded-xl overflow-hidden bg-[#0A1628] border border-white/10">
                  {/* Decorative Grid */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(79, 70, 229, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px'
                    }}
                  />
                  
                  {/* Korea Map Outline (Simplified) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="relative"
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 blur-3xl bg-neon-sky/20 rounded-full" />
                      
                      {/* Map Pin Icon */}
                      <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-sky to-cyan-400 flex items-center justify-center shadow-lg shadow-neon-sky/30"
                        >
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                        </motion.div>
                        
                        {/* Pulse Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <motion.div
                            className="w-24 h-24 rounded-full border border-neon-sky/30"
                            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-neon-sky/30"
                            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                          />
                        </div>
                        
                        <span className="mt-4 text-white/80 font-medium">Republic of Korea</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-neon-sky/30" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-neon-sky/30" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-neon-sky/30" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-neon-sky/30" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
