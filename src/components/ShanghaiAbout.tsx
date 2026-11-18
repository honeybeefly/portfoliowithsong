import { BookOpen, Cpu, GraduationCap, MapPin, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { ownerProfile } from "@/data/owner";
import GlitchText from "@/components/GlitchText";

export default function ShanghaiAbout() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-cyan-500/10 bg-[#030612] py-24">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5 border-b border-cyan-400/15 pb-5">
          <div>
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-pink-300">01 · ABOUT &amp; STUDIES</p>
            <GlitchText
              text="ABOUT SHARANYA"
              as="h2"
              className="font-orbitron text-3xl font-bold sm:text-4xl"
              glowColor="cyan"
            />
          </div>
          <span className="font-serif text-xs text-slate-500">身份档案 · A PERSONAL INTRODUCTION</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="border border-cyan-400/20 bg-[#080d1e]/85 p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center border border-pink-400/40 bg-pink-500/10 font-mono text-lg font-bold text-pink-300">
                SH
              </div>
              <div>
                <h3 className="font-orbitron text-lg font-bold text-white">{ownerProfile.name}</h3>
                <p className="font-serif text-xs text-cyan-300">{ownerProfile.role}</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-300">{ownerProfile.bio}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 border border-white/5 bg-[#050814]/70 p-4">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <div>
                  <p className="font-mono text-[10px] tracking-wider text-slate-500">EDUCATION</p>
                  <p className="mt-1 text-xs leading-5 text-slate-200">{ownerProfile.college.branch}</p>
                  <p className="text-xs text-slate-400">{ownerProfile.college.fullName}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border border-white/5 bg-[#050814]/70 p-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pink-300" />
                <div>
                  <p className="font-mono text-[10px] tracking-wider text-slate-500">LOCATION</p>
                  <p className="mt-1 text-xs text-slate-200">{ownerProfile.college.location}</p>
                  <p className="text-xs text-slate-400">{ownerProfile.college.expectedGraduation} expected graduation</p>
                </div>
              </div>
            </div>
          </article>

          <article className="border border-pink-400/20 bg-[#080d1e]/85 p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-2">
              <Cpu className="h-4 w-4 text-pink-300" />
              <h3 className="font-orbitron text-sm font-bold tracking-wider text-white">SKILLS &amp; TOOLS</h3>
            </div>
            <div className="space-y-5">
              {portfolioData.skills.map((category) => (
                <div key={category.category}>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-300/80">
                    {category.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill.name} className="border border-slate-700/80 bg-slate-900/70 px-2.5 py-1 text-[11px] text-slate-300">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 font-mono text-[10px] text-emerald-300">
              <ShieldCheck className="h-3.5 w-3.5" />
              ETHICAL SECURITY · CONTINUOUS LEARNING
            </div>
          </article>
        </div>

        {portfolioData.education.map((education) => (
          <article key={education.institution} className="mt-6 flex flex-col gap-3 border border-amber-400/20 bg-[#080d1e]/65 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <BookOpen className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
              <div>
                <h3 className="text-sm font-semibold text-slate-100">{education.degree}</h3>
                <p className="mt-1 text-xs text-slate-400">{education.field} · {education.institution}</p>
              </div>
            </div>
            <span className="shrink-0 font-mono text-xs text-amber-200">{education.period}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
