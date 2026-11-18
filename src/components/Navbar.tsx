"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["intro", "about", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "01 // Intro", href: "#intro", id: "intro" },
    { label: "02 // About & Skills", href: "#about", id: "about" },
    { label: "03 // Projects & Education", href: "#projects", id: "projects" },
    { label: "04 // Ethics & Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#e2e7e3] py-3.5 shadow-[0_4px_20px_-8px_rgba(26,42,30,0.06)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Name / Monogram */}
        <a
          href="#intro"
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="w-8 h-8 rounded-none border border-[#1a2b1f] bg-[#1a2b1f] text-white flex items-center justify-center font-mono text-xs font-semibold tracking-wider group-hover:bg-[#283e2e] transition-colors">
            SH
          </div>
          <div>
            <div className="font-semibold text-sm tracking-tight text-[#141a15] group-hover:text-[#263b2c] transition-colors">
              {portfolioData.personal.fullName}
            </div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#66756a]">
              Engineering // Portfolio
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs font-mono tracking-wider transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "text-[#1a2b1f] font-semibold"
                    : "text-[#58665c] hover:text-[#1a2b1f]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1a2b1f]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Availability Beacon */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#d6dfd8] bg-[#f4f7f5] text-[11px] font-mono text-[#324939]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3d5a45] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#263e2c]"></span>
            </span>
            <span>Available</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-2 border border-[#1a2b1f] bg-[#1a2b1f] text-white hover:bg-[#283e2e] transition-all hover:translate-y-[-1px] shadow-sm"
          >
            <span>Reach Out</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1a2b1f] hover:bg-[#f1f5f2] rounded border border-[#dbe3dd] focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e2e7e3] bg-white px-6 py-6 shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-wider text-[#2d3a30] hover:text-[#1a2b1f] py-2 border-b border-[#edf2ee] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8a998e]" />
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-mono text-[#58665c] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2c4533]" /> Open to roles
              </span>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono px-4 py-2 bg-[#1a2b1f] text-white hover:bg-[#2a3f30]"
              >
                Contact Sharanya
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
