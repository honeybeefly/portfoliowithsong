"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Award, ExternalLink, CheckCircle2, MapPin } from "lucide-react";
import { WorkshopEvent } from "@/data/workshops";

interface TimelineItemProps {
  workshop: WorkshopEvent;
  index: number;
}

export default function TimelineItem({ workshop, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col md:flex-row items-start group"
    >
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-[#b77d48] border-2 border-[#ead1a2] items-center justify-center z-20 shadow-md">
        <div className="w-1 h-1 rounded-full bg-[#fff0d1]" />
      </div>

      <div
        className={`w-full md:w-[46%] ${
          isEven ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
        }`}
      >
        <div className="p-6 rounded-md bg-[#30241d]/90 border border-[#806b50]/45 hover:border-[#c89b5c] transition-all duration-300 shadow-md shadow-black/15">
          <div
            className={`flex flex-wrap items-center gap-2 mb-3 ${
              isEven ? "md:justify-end" : "md:justify-start"
            }`}
          >
            <span className="px-2.5 py-0.5 rounded text-[11px] font-serif font-bold bg-[#4a3424] border border-[#a77a4d] text-[#edc88f]">
              {workshop.type}
            </span>
            <span className="flex items-center text-[11px] font-mono text-slate-400 gap-1">
              <Calendar className="w-3 h-3 text-amber-300" />
              {workshop.date}
            </span>
            {workshop.location && (
              <span className="flex items-center text-[11px] font-mono text-amber-400/80 gap-1">
                <MapPin className="w-3 h-3 text-amber-300" />
                {workshop.location}
              </span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-orbitron text-white transition-colors">
            {workshop.title}
          </h3>

          <p className="text-sm font-serif text-amber-200 mb-4 font-semibold">
            Organized by: {workshop.organizer}
          </p>

          <div className="space-y-2 mb-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Key Insights &amp; Takeaways:
            </h4>
            <ul
              className={`space-y-1.5 text-xs sm:text-sm text-slate-300 ${
                isEven ? "md:text-right" : "md:text-left"
              }`}
            >
              {workshop.whatILearned.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2 ${
                    isEven ? "md:flex-row-reverse" : "flex-row"
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`flex flex-wrap gap-1.5 mb-4 ${
              isEven ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {workshop.skillsGained.map((skill) => (
              <span
                key={skill}
                className="text-[10px] font-serif px-2 py-0.5 rounded bg-[#493527] border border-[#6e5841] text-slate-300"
              >
                #{skill}
              </span>
            ))}
          </div>

          {workshop.certificateUrl && (
            <div
              className={`pt-2 border-t border-slate-800/60 flex items-center ${
                isEven ? "md:justify-end" : "md:justify-start"
              }`}
            >
              <a
                href={workshop.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-serif text-amber-200 hover:text-amber-100 transition-colors group/link"
              >
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span>Verify Credential / Certificate</span>
                <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
