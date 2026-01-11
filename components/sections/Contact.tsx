"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full min-h-[80vh] flex flex-col items-center justify-center p-6 pb-20">
      {/* Dark Overlay Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020010] via-[#030014]/90 to-transparent z-0" />

      <div className="relative z-10 max-w-xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-12 space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
            READY?
          </h2>
          <p className="text-lg text-white/50">
            DMS 솔루션과 함께 비즈니스의 미래를 설계하세요.
          </p>
        </motion.div>

        {status === "success" ? (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-4 py-12 glass-panel rounded-2xl"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse" />
              <CheckCircle2 className="w-16 h-16 text-green-400 relative z-10" />
            </div>
            <h3 className="text-2xl font-bold">문의가 접수되었습니다</h3>
            <p className="text-white/60">24시간 내에 연락드리겠습니다.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-white/40 mb-2 ml-1">WORK EMAIL</label>
              <input 
                type="email" 
                id="email"
                required
                placeholder="name@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-indigo focus:ring-1 focus:ring-neon-indigo transition-all"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-white/40 mb-2 ml-1">NAME</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-neon-indigo transition-all" />
              </div>
              <div>
                 <label className="block text-xs font-mono text-white/40 mb-2 ml-1">PHONE</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-neon-indigo transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-white/40 mb-2 ml-1">MESSAGE</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon-indigo transition-all resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-neon-indigo hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-900/20 flex items-center justify-center gap-2 mt-4"
            >
              {status === "sending" ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
