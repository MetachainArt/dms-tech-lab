"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { homeGrowthData } from "@/lib/home-growth-copy";
import { trackEvent } from "@/lib/analytics";
import { ANALYTICS_EVENTS } from "@/lib/analytics-events";
import { BOOKING_URL, isExternalBookingUrl } from "@/lib/booking";

const isExternalBooking = isExternalBookingUrl(BOOKING_URL);

export default function CaseStudies() {
  return (
    <section className="w-full py-24 px-6 bg-[#050B1B] relative" aria-label="성공 사례">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-neon-sky" />
              <h3 className="text-neon-sky font-semibold tracking-widest text-sm uppercase">Case Studies</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{homeGrowthData.caseStudies.title}</h2>
            <p className="text-white/55 text-lg max-w-2xl">{homeGrowthData.caseStudies.description}</p>
          </div>

          <a
            href={BOOKING_URL}
            target={isExternalBooking ? "_blank" : undefined}
            rel={isExternalBooking ? "noreferrer" : undefined}
            onClick={() => {
              trackEvent(ANALYTICS_EVENTS.CTA_PRIMARY_CLICK, {
                section: "case_studies",
                label: "free_audit",
              });
              trackEvent(ANALYTICS_EVENTS.CALENDAR_BOOKING_START, {
                section: "case_studies",
                destination: isExternalBooking ? "external" : "onsite",
              });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:border-neon-sky/40 hover:bg-white/5 transition-all"
          >
            무료 15분 진단 예약
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {homeGrowthData.caseStudies.items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 group"
            >
              <span className="inline-flex px-3 py-1 rounded-full text-xs tracking-wide bg-neon-sky/10 text-neon-sky border border-neon-sky/20 mb-4">
                {item.industry}
              </span>
              <h3 className="text-2xl font-bold text-white mb-5">{item.title}</h3>

              <div className="space-y-3 mb-5">
                <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-1">Before</p>
                  <p className="text-white/75">{item.before}</p>
                </div>
                <div className="rounded-lg border border-neon-sky/20 bg-neon-sky/[0.06] p-3">
                  <p className="text-neon-sky text-xs uppercase tracking-wide mb-1">After</p>
                  <p className="text-white/90">{item.after}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {item.metrics.map((metric) => (
                  <li key={metric} className="text-white/70 text-sm">- {metric}</li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() =>
                  trackEvent(ANALYTICS_EVENTS.CASE_STUDY_OPEN, {
                    case_id: item.id,
                    industry: item.industry,
                  })
                }
                className="inline-flex items-center gap-2 text-neon-sky font-semibold hover:text-cyan-300 transition-colors"
              >
                내 상황에 적용하기
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold text-white mb-1">{homeGrowthData.leadMagnet.title}</h4>
            <p className="text-white/55">{homeGrowthData.leadMagnet.description}</p>
          </div>
          <a
            href={BOOKING_URL}
            target={isExternalBooking ? "_blank" : undefined}
            rel={isExternalBooking ? "noreferrer" : undefined}
            onClick={() => {
              trackEvent(ANALYTICS_EVENTS.CTA_PRIMARY_CLICK, {
                section: "lead_magnet_banner",
                label: "free_audit",
              });
              trackEvent(ANALYTICS_EVENTS.CALENDAR_BOOKING_START, {
                section: "lead_magnet_banner",
                destination: isExternalBooking ? "external" : "onsite",
              });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-sky to-cyan-400 text-[#050B1B] font-bold"
          >
            무료 15분 진단 예약
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
