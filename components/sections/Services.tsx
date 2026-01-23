"use client";

import { motion } from "framer-motion";
import { services } from "@/constants/data";

export default function Services() {
  return (
    <section className="w-full py-16 px-6 bg-[#050B1B] relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-neon-sky" />
            <h3 className="text-neon-sky font-semibold tracking-widest text-sm uppercase">
              What We Do
            </h3>
            <span className="h-[1px] w-12 bg-neon-sky" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h4 className="text-2xl font-bold text-white mb-1">
                {service.title}
              </h4>
              <p className="text-neon-sky text-sm font-medium mb-4">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-sky/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
