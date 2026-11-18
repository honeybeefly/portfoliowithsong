"use client";

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

          <GlitchText
            text="WORK ETHICS & TEAMWORK"
            as="h2"
            className="text-3xl sm:text-5xl font-extrabold font-orbitron"
            glowColor="cyan"
          />

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
            <span className="text-xs font-mono text-pink-400/80">{"//"} 四大基石</span>
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
                    PRINCIPLE IN PRACTICE
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
            <span className="text-xs font-mono text-cyan-400/80">{"//"} 协同推进</span>
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
