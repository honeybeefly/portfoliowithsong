import fs from 'fs';
import path from 'path';

const componentsDir = path.resolve('src/components');

// 1. ProjectsWorkshopsSection.tsx
const projectsWorkshopsSection = `"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Shield, Code, Cloud, Filter } from "lucide-react";
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
      className="relative py-24 bg-[#05070f] cyber-grid-pattern overflow-hidden border-t border-cyan-500/10"
    >
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>02 // PORTFOLIO DATABASE</span>
            <span className="text-pink-500">•</span>
            <span className="text-slate-300 font-sans">项目与研讨会</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-orbitron">
            <GlitchText text="PROJECTS & LAB WORK" glowColor="cyan" />
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Hands-on offensive toolchains, encrypted client-side vaults, cloud security checkers, and modern web architectures.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {(["All", "Cybersecurity", "Web", "Cloud"] as const).map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={\`relative px-4 py-2 rounded-lg font-mono text-xs sm:text-sm tracking-wider transition-all duration-200 \${
                    isSelected
                      ? "text-slate-950 font-bold bg-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.6)]"
                      : "text-slate-300 bg-[#090f23] border border-cyan-500/20 hover:border-pink-500/60 hover:text-white"
                  }\`}
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
                        alt={project.title}
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
                        <Github className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white" />
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
              // CONTINUOUS LEARNING TRAJECTORY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-orbitron">
              <GlitchText text="WORKSHOPS & EVENTS" glowColor="magenta" />
            </h2>
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
`;

// 2. InterestsHobbiesSection.tsx
const interestsHobbiesSection = `"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Flag,
  Terminal,
  Code,
  Cpu,
  Flame,
  Dumbbell,
  HeartPulse,
  BookOpen,
  Swords,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import NeonCard from "@/components/NeonCard";
import GlitchText from "@/components/GlitchText";
import { ownerProfile } from "@/data/owner";

export default function InterestsHobbiesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-pink-400" />,
    Flag: <Flag className="w-5 h-5 text-cyan-400" />,
    Terminal: <Terminal className="w-5 h-5 text-pink-400" />,
    Code: <Code className="w-5 h-5 text-cyan-400" />,
    Cpu: <Cpu className="w-5 h-5 text-amber-400" />,
    Flame: <Flame className="w-5 h-5 text-red-400" />,
    Dumbbell: <Dumbbell className="w-5 h-5 text-cyan-400" />,
    HeartPulse: <HeartPulse className="w-5 h-5 text-pink-400" />,
    BookOpen: <BookOpen className="w-5 h-5 text-amber-400" />,
    Swords: <Swords className="w-5 h-5 text-red-400" />,
  };

  return (
    <section
      id="interests"
      className="relative py-24 bg-[#05070f] cyber-grid-pattern overflow-hidden border-t border-cyan-500/10"
    >
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-pink-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>04 // DISCIPLINE & PASSION DOMAINS</span>
            <span>•</span>
            <span className="text-slate-300 font-sans">兴趣与爱好</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-orbitron">
            <GlitchText text="INTERESTS & HOBBIES" glowColor="cyan" />
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Technical security specializations combined with physical martial arts discipline, yoga, and endurance training.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="w-4 h-4 text-pink-400" />
            <h3 className="font-orbitron text-lg sm:text-xl font-bold text-white tracking-wider">
              CORE CYBER & COMBAT INTERESTS
            </h3>
            <span className="text-xs font-mono text-pink-400/80">// 专注领域</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ownerProfile.interests.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <NeonCard
                  variant={idx % 2 === 0 ? "cyan" : "magenta"}
                  chineseTag={item.level}
                  className="h-full p-5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#070d1e] border border-cyan-500/30 flex items-center justify-center">
                        {iconMap[item.icon] || <ShieldAlert className="w-5 h-5 text-cyan-400" />}
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
                        {item.category}
                      </span>
                    </div>

                    <h4 className="font-orbitron font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                    <span>STATUS: ACTIVE</span>
                    <span className="text-pink-400 font-semibold">{item.level}</span>
                  </div>
                </NeonCard>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <HeartPulse className="w-4 h-4 text-cyan-400" />
            <h3 className="font-orbitron text-lg sm:text-xl font-bold text-white tracking-wider">
              PHYSICAL CONDITIONING & WELLNESS HOBBIES
            </h3>
            <span className="text-xs font-mono text-cyan-400/80">// 养生与体能</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ownerProfile.hobbies.map((hobby, idx) => (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="h-full p-5 rounded-xl bg-[#080d1e]/90 border border-slate-800 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-950/30 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      {iconMap[hobby.icon] || <Dumbbell className="w-4 h-4" />}
                    </div>

                    <h4 className="font-orbitron font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                      {hobby.name}
                    </h4>

                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                    MIND & BODY SYNCHRONIZATION
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden p-8 sm:p-10 bg-gradient-to-r from-[#0d1633] via-[#120f2b] to-[#0d1633] border-2 border-cyan-400/50 shadow-[0_0_40px_rgba(0,240,255,0.25)]"
        >
          <div className="absolute inset-0 scanlines-overlay opacity-20 pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-pink-500/20 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-400/20 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-950/60 border border-pink-400/40 text-pink-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span className="font-bold">STATUS: ACTIVELY SEEKING 2026-2027 OPPORTUNITIES</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-orbitron text-white">
                OPEN TO INTERNSHIPS & PROJECT WORK
              </h3>

              <p className="text-sm sm:text-base text-slate-300 font-sans max-w-2xl leading-relaxed">
                Looking for ambitious teams, cybersecurity firms, and innovative startups. Whether for offensive security testing, cloud defense auditing, or rapid full-stack web builds.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/#contact"
                className="group relative inline-flex items-center space-x-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-orbitron font-bold text-sm tracking-widest shadow-[0_0_30px_rgba(255,46,151,0.5)] transition-all transform hover:scale-105 active:scale-95 border border-white/20"
              >
                <span>CONNECT FOR ROLES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
`;

// 3. WorkEthicsTeamSection.tsx
const workEthicsTeamSection = `"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, ArrowUpRight } from "lucide-react";
import NeonCard from "@/components/NeonCard";
import GlitchText from "@/components/GlitchText";
import { ownerProfile } from "@/data/owner";

export default function WorkEthicsTeamSection() {
  return (
    <section
      id="ethics"
      className="relative py-24 bg-[#030612] overflow-hidden border-t border-cyan-500/10"
    >
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>05 // FOUNDATIONAL VALUES & LEADERSHIP</span>
            <span>•</span>
            <span className="text-slate-300 font-sans">职业操守与团队协作</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-orbitron">
            <GlitchText text="WORK ETHICS & TEAMWORK" glowColor="cyan" />
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Principles that guide every commit, security assessment, and collaborative ideathon. Grounded in discipline and extreme ownership.
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="w-4 h-4 text-pink-400" />
            <h3 className="font-orbitron text-lg sm:text-xl font-bold text-white tracking-wider">
              CORE PILLARS OF WORK ETHIC
            </h3>
            <span className="text-xs font-mono text-pink-400/80">// 四大基石</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ownerProfile.workEthics.map((ethic, idx) => (
              <motion.div
                key={ethic.pillar}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <NeonCard
                  variant={
                    idx === 0
                      ? "cyan"
                      : idx === 1
                      ? "magenta"
                      : idx === 2
                      ? "amber"
                      : "violet"
                  }
                  chineseTag={ethic.chinese}
                  className="h-full p-6 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 font-bold tracking-widest">
                        0{idx + 1}. PILLAR
                      </span>
                      <span className="text-xl font-bold font-mono text-pink-500/60">
                        {ethic.chinese}
                      </span>
                    </div>

                    <h4 className="font-orbitron font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                      {ethic.pillar}
                    </h4>

                    <p className="text-xs font-mono text-pink-400/90 italic">
                      &quot;{ethic.quote}&quot;
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed pt-2">
                      {ethic.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-500">
                    NON-NEGOTIABLE OPERATING STANDARD
                  </div>
                </NeonCard>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-4 h-4 text-cyan-400" />
            <h3 className="font-orbitron text-lg sm:text-xl font-bold text-white tracking-wider">
              COLLABORATION & TEAM LEADERSHIP
            </h3>
            <span className="text-xs font-mono text-cyan-400/80">// 协同推进</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ownerProfile.teamworkExamples.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="h-full p-6 rounded-xl bg-[#070d1e]/90 border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                        {item.context}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <h4 className="font-orbitron font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>

                    <div className="text-xs font-mono text-pink-400">
                      ROLE: {item.role}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                      MEASURED OUTCOME / IMPACT:
                    </div>
                    <div className="text-xs font-sans text-emerald-400 font-medium">
                      ✓ {item.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(componentsDir, 'ProjectsWorkshopsSection.tsx'), projectsWorkshopsSection);
fs.writeFileSync(path.join(componentsDir, 'InterestsHobbiesSection.tsx'), interestsHobbiesSection);
fs.writeFileSync(path.join(componentsDir, 'WorkEthicsTeamSection.tsx'), workEthicsTeamSection);

console.log('Successfully wrote ProjectsWorkshopsSection, InterestsHobbiesSection, and WorkEthicsTeamSection!');
