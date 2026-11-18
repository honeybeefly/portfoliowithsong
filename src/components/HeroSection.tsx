"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowDown,
  Copy,
  Check,
  Globe,
  Mail,
  MapPin,
  ExternalLink,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function HeroSection() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(type);
    setTimeout(() => setCopiedEmail(null), 2400);
  };

  return (
    <section
      id="intro"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#e2e8e3] bg-white overflow-hidden"
    >
      {/* Subtle background hairline grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#1a2b1f 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Monospaced Top Metadata bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#5b6a5f] border-b border-[#edf2ee] pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2d4633] rounded-none"></span>
            <span>SECTION 01 // OVERVIEW & INTRODUCTION</span>
          </div>
          <div className="flex items-center gap-4 text-[#728276]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#3b5542]" />
              {portfolioData.personal.location}
            </span>
            <span>•</span>
            <span className="hidden sm:inline">NEXT.JS 16 // APP ROUTER</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Somber status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f4f7f5] border border-[#d6dfd8] text-xs font-mono text-[#2c4232]">
              <span className="inline-block w-1.5 h-1.5 bg-[#2a4230]"></span>
              <span>{portfolioData.personal.status}</span>
            </div>

            {/* Name - Authoritative, clean typography */}
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#111712] leading-[1.08]">
                {portfolioData.personal.fullName}
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-mono text-[#394f3e] tracking-tight">
                {portfolioData.personal.roleTitle}
              </p>
            </div>

            {/* Straightforward Introductory Statement */}
            <div className="max-w-2xl pt-2">
              <p className="text-xl sm:text-2xl font-serif text-[#1e2720] leading-relaxed italic border-l-2 border-[#2b4131] pl-5 my-4">
                "{portfolioData.personal.heroHeadline}"
              </p>
              <p className="text-base sm:text-lg text-[#414d44] leading-relaxed font-sans">
                {portfolioData.personal.straightforwardIntro}
              </p>
            </div>

            {/* Quick Interactive CTA Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#1a2b1f] bg-[#1a2b1f] text-white text-xs font-mono tracking-wider hover:bg-[#273c2c] transition-all hover:translate-y-[-1px] shadow-sm"
              >
                <span>EXPLORE WORK & REPOSITORIES</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#cdd8cf] bg-[#fbfdfb] text-[#1c2a1f] text-xs font-mono tracking-wider hover:bg-[#edf3ee] transition-all hover:border-[#1a2b1f]"
              >
                <span>CONTACT & WORK ETHICS</span>
                <Mail className="w-3.5 h-3.5 text-[#374e3c]" />
              </a>

              {/* Fast Copy Email Chip */}
              <button
                onClick={() =>
                  copyToClipboard(
                    portfolioData.personal.workEmail,
                    "hero-work-email"
                  )
                }
                className="inline-flex items-center gap-2 px-4 py-3 border border-[#e1e7e2] bg-white text-[#455449] text-xs font-mono hover:text-[#1a2b1f] hover:border-[#a3b5a6] transition-colors cursor-pointer"
                title="Click to copy work email"
              >
                {copiedEmail === "hero-work-email" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#2b4431]" />
                    <span className="text-[#2b4431] font-semibold">
                      COPIED TO CLIPBOARD
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#6c7d70]" />
                    <span>COPY EMAIL: {portfolioData.personal.workEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Somber Technical Card / Spec Panel */}
          <div className="lg:col-span-4 border border-[#dce3de] bg-[#fafcfa] p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#e5ebe6] pb-3 mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#324536] font-semibold">
                <Terminal className="w-4 h-4 text-[#2b4231]" />
                <span>PROFILE_SPEC</span>
              </div>
              <span className="text-[11px] font-mono text-[#78887b]">v2026.11</span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <span className="text-[#7a8a7e] block text-[11px]">CORE ETHOS</span>
                <span className="text-[#19261c] font-medium leading-relaxed block mt-0.5">
                  Disciplined security research, type-safe architecture, and deterministic code.
                </span>
              </div>

              <div className="border-t border-[#edf2ee] pt-3">
                <span className="text-[#7a8a7e] block text-[11px]">PALETTE SPECS</span>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#344537]">
                    <span className="w-3.5 h-3.5 bg-white border border-[#cdd5cf] inline-block"></span>
                    <span>White (Maj.)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#344537]">
                    <span className="w-3.5 h-3.5 bg-[#1a2b1f] inline-block"></span>
                    <span>Dark Olive</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#344537]">
                    <span className="w-3.5 h-3.5 bg-[#647268] inline-block"></span>
                    <span>Gray</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#edf2ee] pt-3">
                <span className="text-[#7a8a7e] block text-[11px]">VERIFIED CHANNELS</span>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href={portfolioData.personal.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-[#2d3f31] hover:text-[#111a13] hover:underline"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className="w-3.5 h-3.5" />
                      GitHub Profile
                    </span>
                    <ExternalLink className="w-3 h-3 text-[#7b8c7f]" />
                  </a>
                  <a
                    href={portfolioData.personal.netlifyProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-[#2d3f31] hover:text-[#111a13] hover:underline"
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5" />
                      Netlify Projects
                    </span>
                    <ExternalLink className="w-3 h-3 text-[#7b8c7f]" />
                  </a>
                </div>
              </div>

              <div className="border-t border-[#edf2ee] pt-3 bg-[#f2f6f3] -mx-6 -mb-6 p-4">
                <span className="text-[11px] text-[#4b5d4f] block font-sans">
                  "No superfluous abstractions. Just clean code, clear thought, and lasting execution."
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
