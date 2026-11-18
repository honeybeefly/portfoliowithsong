"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from "lucide-react";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-24 border-b border-[#e2e8e3] bg-[#fafcfa] relative"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#5b6a5f] border-b border-[#edf2ee] pb-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2d4633] rounded-none"></span>
            <span>SECTION 03 // PART II: EDUCATIONAL QUALIFICATIONS</span>
          </div>
          <div className="text-[#78887c]">ACADEMIC PEDIGREE</div>
        </div>

        {/* Section Header Title */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono tracking-widest text-[#3b5240] uppercase">
            // Academic Foundations
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#111712] tracking-tight mt-1">
            Formal Education & Specializations
          </h2>
          <p className="text-sm text-[#546458] mt-2 font-sans">
            Rigorous training in foundational computer science, systems design, and algorithmic problem-solving.
          </p>
        </div>

        {/* Timeline List of Education */}
        <div className="space-y-8">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="border border-[#dbe3dc] bg-white p-7 sm:p-9 hover:border-[#1a2b1f] transition-all duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column: Dates & Institution */}
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#edf2ee] pb-4 lg:pb-0 lg:pr-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#384e3e] mb-2 font-semibold">
                    <GraduationCap className="w-4 h-4 text-[#2a4131]" />
                    <span>DEGREE_RECORD_{String(idx + 1).padStart(2, "0")}</span>
                  </div>

                  <h3 className="text-lg font-medium text-[#131d16] tracking-tight">
                    {edu.institution}
                  </h3>

                  <div className="mt-3 space-y-1.5 text-xs font-mono text-[#586c5f]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#3b5542]" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#3b5542]" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.grade && (
                      <div className="flex items-center gap-2 text-[#243a29] font-semibold pt-1">
                        <Award className="w-3.5 h-3.5 text-[#243a29]" />
                        <span>{edu.grade}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Degree, Field & Coursework */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h4 className="text-xl font-light text-[#111712] tracking-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-mono text-[#394f3e] mt-0.5">
                      Major: {edu.field}
                    </p>
                  </div>

                  <p className="text-sm text-[#435246] leading-relaxed font-sans">
                    {edu.summary}
                  </p>

                  {/* Coursework & Focus Areas */}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="pt-2">
                      <span className="text-[11px] font-mono text-[#78887b] uppercase tracking-wider block mb-2">
                        Relevant Coursework & Core Modules:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-xs font-mono px-3 py-1 bg-[#f4f7f5] text-[#293c2d] border border-[#d6dfd8]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
