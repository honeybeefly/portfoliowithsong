"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Shield, Code, Cloud, Filter } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import NeonCard from "@/components/NeonCard";
import GlitchText from "@/components/GlitchText";
import TimelineItem from "@/components/TimelineItem";
import { projectsData } from "@/data/projects";
import { workshopsData } from "@/data/workshops";

export default function ProjectsWorkshopsSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Cybersecurity" | "Web" | "Cloud">("All");

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === "All") return true;
    return proj.category === activeFilter;
  });

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#05070f] warm-texture overflow-hidden border-t border-cyan-500/10"
    >
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>02 · SELECTED WORK</span>
            <span className="text-pink-500">•</span>
            <span className="text-slate-300 font-sans">项目与研讨会</span>
          </div>

          <GlitchText
            text="PROJECTS & LAB WORK"
            as="h2"
            className="text-3xl sm:text-5xl font-extrabold font-orbitron"
            glowColor="cyan"
          />

          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Hands-on offensive toolchains, encrypted client-side vaults, cloud security checkers, and modern web architectures.
          </p>

          <div role="group" aria-label="Filter projects" className="pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {(["All", "Cybersecurity", "Web", "Cloud"] as const).map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  aria-pressed={isSelected}
                  className={`relative px-4 py-2 rounded-lg font-mono text-xs sm:text-sm tracking-wider transition-all duration-200 ${
                    isSelected
                      ? "text-slate-950 font-bold bg-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.6)]"
                      : "text-slate-300 bg-[#090f23] border border-cyan-500/20 hover:border-pink-500/60 hover:text-white"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {tab === "Cybersecurity" && <Shield className="w-3.5 h-3.5" />}
                    {tab === "Web" && <Code className="w-3.5 h-3.5" />}
                    {tab === "Cloud" && <Cloud className="w-3.5 h-3.5" />}
                    {tab === "All" && <Filter className="w-3.5 h-3.5" />}
                    {tab}
                    <span className="text-[10px] opacity-70">
                      ({tab === "All" ? projectsData.length : projectsData.filter(p => p.category === tab).length})
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Showing {filteredProjects.length} projects for {activeFilter}.
          </p>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <NeonCard
                  variant={
                    project.category === "Cybersecurity"
                      ? "magenta"
                      : project.category === "Cloud"
                      ? "amber"
                      : "cyan"
                  }
                  chineseTag={
                    project.category === "Cybersecurity"
                      ? "渗透测试"
                      : project.category === "Cloud"
                      ? "云端安全"
                      : "前端矩阵"
                  }
                  className="h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full h-44 mb-5 rounded-lg overflow-hidden border border-slate-800 bg-[#060914] group-hover:border-cyan-400/50 transition-colors">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono bg-[#050814]/90 border border-cyan-400/40 text-cyan-300">
                        {project.category}
                      </div>
                      {project.status && (
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono bg-pink-950/80 border border-pink-500/40 text-pink-300">
                          {project.status}
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-cyan-300 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-pink-400 mb-3 font-medium">
                      {project.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0b1329] border border-cyan-500/20 text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 rounded bg-[#0b142c] hover:bg-[#111e42] border border-slate-700 hover:border-cyan-400 text-slate-200 text-xs font-mono transition-all group/btn"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white" />
                        <span>GitHub Repo</span>
                      </a>

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 rounded bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-xs font-mono font-semibold shadow-[0_0_12px_rgba(255,46,151,0.3)] transition-all group/btn"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </NeonCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* WORKSHOPS & EVENTS TIMELINE */}
        <div className="pt-12 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-mono text-pink-400 tracking-widest uppercase">
              {"//"} CONTINUOUS LEARNING TRAJECTORY
            </span>
            <GlitchText
              text="WORKSHOPS & EVENTS"
              as="h2"
              className="text-2xl sm:text-4xl font-extrabold font-orbitron"
              glowColor="magenta"
            />
            <p className="text-slate-400 text-sm font-sans">
              AWS cloud architecture, Google Developer Group sessions, BIT Ideathons, and hands-on offensive bootcamps.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-pink-500 to-amber-400 shadow-[0_0_12px_rgba(0,240,255,0.8)]" />

            <div className="space-y-8 md:space-y-12">
              {workshopsData.map((workshop, idx) => (
                <TimelineItem key={workshop.id} workshop={workshop} index={idx} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
