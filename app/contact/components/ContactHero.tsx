'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a1a3f] to-[#0a0a1f]" />

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, rgba(79, 70, 229, 0.15) 0%, transparent 50%),
                            radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`,
            backgroundSize: 'cover'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-blue-400 font-mono tracking-widest text-sm mb-2 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            GET IN TOUCH
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Contact
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            프로젝트에 대한 문의나 협업 제안을 환영합니다.
            <br />
            아이디어가 있으시다면, 함께 실현해 보세요.
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
}
