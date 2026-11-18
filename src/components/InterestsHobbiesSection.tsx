"use client";

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
      className="relative py-24 bg-[#05070f] warm-texture overflow-hidden border-t border-cyan-500/10"
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

          <GlitchText
            text="INTERESTS & HOBBIES"
            as="h2"
            className="text-3xl sm:text-5xl font-extrabold font-orbitron"
            glowColor="cyan"
          />

          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Technical security specializations combined with physical martial arts discipline, yoga, and endurance training.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="w-4 h-4 text-pink-400" />
            <h3 className="font-orbitron text-lg sm:text-xl font-bold text-white tracking-wider">
              TECHNICAL & PERSONAL INTERESTS
            </h3>
            <span className="text-xs font-mono text-pink-400/80">{"//"} 专注领域</span>
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
                    <span>IN PRACTICE</span>
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
            <span className="text-xs font-mono text-cyan-400/80">{"//"} 养生与体能</span>
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
