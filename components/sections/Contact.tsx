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

      <div className="relative z-10 max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Text Side */}
            <div className="text-left space-y-6">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                >
                    고객의 비즈니스를<br />
                    <span className="text-neon-sky">미래와 연결합니다.</span>
                </motion.h2>
                <p className="text-white/60 text-lg leading-relaxed">
                    오토모티브 리테일 경험을 혁신할 준비가 되셨나요?<br/>
                    DMS 솔루션 아키텍트와 상담하세요.
                </p>
                
                <div className="flex flex-col gap-4 mt-8">
                    <div className="flex items-center gap-4 text-white/80">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <Send className="w-4 h-4 text-neon-sky" />
                        </div>
                        <span className="font-mono text-sm">support@dmssolution.co.kr</span>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="bg-[#0A1025] border border-white/10 p-8 rounded-2xl shadow-2xl">
                {status === "success" ? (
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center gap-4 py-12 text-center"
                >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">문의가 접수되었습니다.</h3>
                    <p className="text-white/50">담당자가 24시간 내에 연락드리겠습니다.</p>
                </motion.div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-white/60 uppercase tracking-wider ml-1">이메일 (Work Email)</label>
                        <input 
                            type="email" 
                            required
                            placeholder="name@company.com"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-sky focus:bg-white/10 transition-all font-light"
                        />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-white/60 uppercase tracking-wider ml-1">성 (Last Name)</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-sky focus:bg-white/10 transition-all font-light" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-white/60 uppercase tracking-wider ml-1">이름 (First Name)</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-sky focus:bg-white/10 transition-all font-light" />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-white/60 uppercase tracking-wider ml-1">문의 내용 (Message)</label>
                        <textarea 
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-sky focus:bg-white/10 transition-all font-light resize-none"
                        />
                    </div>

                    <button 
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-neon-sky hover:bg-cyan-400 text-[#050B1B] font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-2"
                    >
                    {status === "sending" ? (
                        <span className="w-5 h-5 border-2 border-[#050B1B]/30 border-t-[#050B1B] rounded-full animate-spin" />
                    ) : (
                        "문의 보내기"
                    )}
                    </button>
                </form>
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
