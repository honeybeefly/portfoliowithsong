"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp, Globe, Shield } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = 2026;

  return (
    <footer className="bg-[#fafcfa] border-t border-[#e2e8e3] py-14 text-xs font-mono text-[#5b6e60]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10 pb-8 border-b border-[#edf2ee]">
          {/* Identity & Scope */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2 text-[#131d16] font-semibold">
              <span className="w-2.5 h-2.5 bg-[#1a2b1f] inline-block"></span>
              <span className="text-sm tracking-tight">{portfolioData.personal.fullName}</span>
              <span className="text-[#849487] font-normal">// Engineering & Cybersecurity</span>
            </div>
            <p className="text-xs text-[#556658] font-sans max-w-md leading-relaxed">
              Designed with purposeful restraint, sober typography, and a commitment to software reliability and security.
            </p>
          </div>

          {/* Quick Anchor Navigation */}
          <div className="md:col-span-3 space-y-1.5">
            <span className="text-[11px] uppercase tracking-wider text-[#798a7c] block mb-2">
              Sitemap
            </span>
            <div>
              <a href="#intro" className="hover:text-[#1a2b1f] transition-colors">
                01 // Introduction
              </a>
            </div>
            <div>
              <a href="#about" className="hover:text-[#1a2b1f] transition-colors">
                02 // About & Skills
              </a>
            </div>
            <div>
              <a href="#projects" className="hover:text-[#1a2b1f] transition-colors">
                03 // Projects & Repositories
              </a>
            </div>
            <div>
              <a href="#education" className="hover:text-[#1a2b1f] transition-colors">
                03b // Education
              </a>
            </div>
            <div>
              <a href="#contact" className="hover:text-[#1a2b1f] transition-colors">
                04 // Ethics & Contact
              </a>
            </div>
          </div>

          {/* Jump to top */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#d6ded8] bg-white text-[#2a3c2e] hover:border-[#1a2b1f] hover:bg-[#1a2b1f] hover:text-white transition-all cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Palette spec & copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#738376]">
          <div className="flex items-center gap-3">
            <span>© {currentYear} {portfolioData.personal.fullName}. All rights reserved.</span>
            <span>•</span>
            <span className="hidden sm:inline">Built with Next.js & Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1a2b1f] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Git</span>
            </a>
            <a
              href={portfolioData.personal.netlifyProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1a2b1f] transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Netlify</span>
            </a>
            <a
              href={portfolioData.personal.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1a2b1f] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
