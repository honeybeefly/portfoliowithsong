"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Code2,
  Cpu,
  Layers,
  Wrench,
  CheckCircle2,
  Camera,
  Info,
} from "lucide-react";

export default function AboutSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showPhotoTip, setShowPhotoTip] = useState(false);

  const categories = [
    "All",
    ...portfolioData.skills.map((c) => c.category),
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? portfolioData.skills
      : portfolioData.skills.filter((c) => c.category === selectedCategory);

  const totalSkillCount = portfolioData.skills.reduce(
    (acc, c) => acc + c.skills.length,
    0
  );

  return (
    <section
      id="about"
      className="py-24 border-b border-[#e2e8e3] bg-white relative"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#5b6a5f] border-b border-[#edf2ee] pb-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2d4633] rounded-none"></span>
            <span>SECTION 02 // IDENTITY, BIOGRAPHY & TECHNICAL SKILLS</span>
          </div>
          <div className="text-[#78887c]">PROFESSIONAL BACKGROUND</div>
        </div>

        {/* Top Grid: Photo + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Photo Column */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Photo Frame / Somber border */}
              <div className="relative border border-[#2b3e30] p-2 bg-[#fafcfa] shadow-[0_8px_30px_rgba(26,42,30,0.04)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e9efe9] border border-[#d6dfd8]">
                  {/* Photo Component: Real portrait with grayscale/somber styling */}
                  <img
                    src={portfolioData.about.photoUrl}
                    alt={portfolioData.personal.fullName}
                    className="w-full h-full object-cover grayscale contrast-110 brightness-95 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    onError={(e) => {
                      // Fallback to stylized SVG avatar if image fails to load
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback = document.getElementById("photo-fallback");
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />

                  {/* Fallback avatar if external URL is blocked */}
                  <div
                    id="photo-fallback"
                    className="hidden absolute inset-0 bg-[#213326] text-white flex-col items-center justify-center p-6 text-center"
                  >
                    <div className="w-20 h-20 border border-[#a3b8aa] rounded-none flex items-center justify-center font-mono text-2xl mb-4 bg-[#18261c]">
                      SH
                    </div>
                    <span className="font-mono text-sm tracking-widest uppercase">
                      {portfolioData.personal.fullName}
                    </span>
                    <span className="font-mono text-xs text-[#9bb0a2] mt-1">
                      {portfolioData.personal.roleTitle}
                    </span>
                  </div>

                  {/* Top corner technical label */}
                  <div className="absolute top-3 left-3 bg-[#131d16]/85 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] font-mono tracking-widest border border-white/20">
                    PORTRAIT // REF_01
                  </div>
                </div>

                {/* Photo Caption & Info Button */}
                <div className="mt-3 px-1 py-1 flex items-center justify-between text-xs font-mono text-[#526356]">
                  <span>{portfolioData.personal.fullName}</span>
                  <button
                    onClick={() => setShowPhotoTip(!showPhotoTip)}
                    className="flex items-center gap-1 text-[#2d4432] hover:underline cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>How to change photo</span>
                  </button>
                </div>
              </div>

              {/* Photo change guide callout */}
              {showPhotoTip && (
                <div className="mt-3 p-3.5 bg-[#f4f7f5] border border-[#cbd6ce] text-xs font-mono text-[#2c3d30] animate-in fade-in duration-200">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#2b4431] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold">Quick Photo Customization:</p>
                      <p className="text-[#4e6052]">
                        Replace the <code className="bg-white px-1 border border-[#cad5cd]">photoUrl</code> property in{" "}
                        <code className="text-[#131d16] font-semibold">src/data/portfolioData.ts</code> with your own image URL or drop a photo into the <code className="bg-white px-1 border border-[#cad5cd]">public/</code> folder (e.g. <code className="bg-white px-1 border border-[#cad5cd]">'/my-photo.jpg'</code>).
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#3b5240] uppercase">
                // About the Engineer
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#121713] tracking-tight mt-1">
                Engineering with sober clarity and steady momentum.
              </h2>
            </div>

            {/* Structured Bio Paragraphs */}
            <div className="space-y-4 text-base text-[#3d4b40] leading-relaxed">
              {portfolioData.about.bioParagraphs.map((para, index) => (
                <p key={index} className="font-sans">
                  {para}
                </p>
              ))}
            </div>

            {/* Philosophy Callout Card */}
            <div className="p-5 border-l-2 border-[#1a2b1f] bg-[#f7faf8] border-r border-t border-b border-[#e1e8e3]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#3d5543] block mb-1">
                GUIDING TENET
              </span>
              <p className="text-sm font-serif italic text-[#1e2a21] leading-relaxed">
                "{portfolioData.about.guidingPhilosophy}"
              </p>
            </div>

            {/* Quick Experience Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#edf2ee]">
              <div className="p-3 bg-[#fafcfa] border border-[#e4ebe6]">
                <div className="text-2xl font-light text-[#162319] font-mono">
                  6+
                </div>
                <div className="text-[11px] font-mono text-[#617366] mt-1 uppercase">
                  Years Building
                </div>
              </div>
              <div className="p-3 bg-[#fafcfa] border border-[#e4ebe6]">
                <div className="text-2xl font-light text-[#162319] font-mono">
                  99.9%
                </div>
                <div className="text-[11px] font-mono text-[#617366] mt-1 uppercase">
                  Uptime Target
                </div>
              </div>
              <div className="p-3 bg-[#fafcfa] border border-[#e4ebe6]">
                <div className="text-2xl font-light text-[#162319] font-mono">
                  {totalSkillCount}
                </div>
                <div className="text-[11px] font-mono text-[#617366] mt-1 uppercase">
                  Core Skills
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Technical Skills Matrix */}
        <div className="border-t border-[#e2e8e3] pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#3b5240] uppercase">
                // Technical Repertoire
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#111712] tracking-tight mt-1">
                Competencies & Tooling
              </h3>
              <p className="text-sm text-[#546458] mt-1 max-w-xl">
                A disciplined selection of languages, runtimes, and deployment practices proven in production environments.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#f4f7f5] border border-[#d6ded8] rounded-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-mono px-3 py-1.5 transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#1a2b1f] text-white shadow-xs"
                      : "text-[#4b5d50] hover:text-[#111712] hover:bg-[#e8eee9]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Categorized Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSkills.map((categoryGroup) => (
              <div
                key={categoryGroup.category}
                className="border border-[#e0e7e1] bg-[#fafcfa] p-5 hover:border-[#1a2b1f] transition-colors"
              >
                <div className="flex items-center gap-2 border-b border-[#edf2ee] pb-3 mb-4">
                  <div className="w-2 h-2 bg-[#2d4633]"></div>
                  <h4 className="font-mono text-xs font-semibold text-[#1a2b1f] uppercase tracking-wider">
                    {categoryGroup.category}
                  </h4>
                </div>

                <div className="space-y-2.5">
                  {categoryGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between text-xs py-1 border-b border-[#f0f4f1] last:border-b-0"
                    >
                      <span className="text-[#2b3a2f] font-medium font-sans">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="font-mono text-[10px] px-2 py-0.5 bg-[#edf3ef] text-[#334b39] border border-[#dbe4dd]">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
