"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Clock, ArrowRight } from "lucide-react";
import { FSChapter } from "@/lib/education-fs";

interface EducationAccordionProps {
  chapters: FSChapter[];
  trackId: string;
}

export default function EducationAccordion({ chapters, trackId }: EducationAccordionProps) {
  const [openChapterId, setOpenChapterId] = useState<string | null>(chapters[0]?.id || null);

  const toggleChapter = (id: string) => {
    setOpenChapterId(openChapterId === id ? null : id);
  };

  return (
    <div className="space-y-5">
      {chapters.map((chapter, index) => {
        const isOpen = openChapterId === chapter.id;

        return (
          <div
            key={chapter.id}
            className={`overflow-hidden rounded-[28px] border bg-white transition-shadow ${
              isOpen
                ? "border-paperfolio-accent-blue/30 shadow-[0_18px_60px_rgba(31,41,55,0.08)]"
                : "border-paperfolio-line shadow-[0_12px_40px_rgba(31,41,55,0.04)] hover:shadow-[0_16px_55px_rgba(31,41,55,0.07)]"
            }`}
          >
            <button
              onClick={() => toggleChapter(chapter.id)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                    isOpen
                      ? "border-paperfolio-accent-blue bg-paperfolio-accent-blue text-white"
                      : "border-paperfolio-line bg-paperfolio-bg text-paperfolio-text-muted"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="text-xl font-semibold tracking-tight text-paperfolio-text">
                  {chapter.title}
                </span>
              </div>

              <ChevronDown
                className={`h-5 w-5 shrink-0 text-paperfolio-text-muted transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-paperfolio-accent-blue" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="space-y-1 border-t border-paperfolio-line px-4 pb-5 pt-3 sm:px-6">
                    {chapter.lessons.length === 0 ? (
                      <p className="px-3 py-4 text-sm italic text-paperfolio-text-muted">
                        준비 중입니다.
                      </p>
                    ) : (
                      chapter.lessons.map((lesson) => (
                        <Link
                          key={lesson.slug}
                          href={`/education/${trackId}/${lesson.slug}`}
                          className="group flex items-start justify-between gap-4 rounded-2xl p-4 transition-colors hover:bg-paperfolio-bg"
                        >
                          <div className="min-w-0 space-y-1">
                            <h4 className="font-semibold text-paperfolio-text group-hover:text-paperfolio-accent-blue">
                              {lesson.title}
                            </h4>
                            {lesson.description && (
                              <p className="text-sm leading-6 text-paperfolio-text-muted">
                                {lesson.description}
                              </p>
                            )}
                          </div>

                          <span className="inline-flex shrink-0 items-center gap-2 pt-1 text-xs font-semibold text-paperfolio-text-muted">
                            <Clock className="h-3.5 w-3.5" />
                            {lesson.duration}
                            <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                          </span>
                        </Link>
                      ))
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
