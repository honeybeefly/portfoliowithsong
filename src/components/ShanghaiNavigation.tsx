"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ownerProfile } from "@/data/owner";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "INTERESTS", href: "#interests" },
  { label: "ETHICS", href: "#ethics" },
  { label: "CONTACT", href: "#contact" },
];

export default function ShanghaiNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-cyan-400/15 bg-[#050814]/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6">
        <a href="#home" className="flex shrink-0 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-amber-200/50 bg-amber-100/10 font-serif text-base font-semibold text-amber-200">
            莎
          </span>
          <span>
            <span className="block text-xs font-bold tracking-[0.16em] text-white">
              {ownerProfile.name}
            </span>
            <span className="block text-[9px] font-serif tracking-[0.18em] text-amber-100/70">
            ENGINEERING · SECURITY · WEB
            </span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] font-serif tracking-[0.14em] text-slate-300 transition-colors hover:text-amber-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden border border-amber-200/40 bg-amber-100/10 px-3 py-2 text-[10px] font-serif tracking-wider text-amber-100 transition-colors hover:bg-amber-100/20 sm:block"
        >
          CONNECT <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-amber-200/35 text-amber-100 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="border-t border-amber-200/15 bg-[#211812] px-4 py-3 lg:hidden"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="block border-b border-white/5 py-3 text-xs font-serif tracking-wider text-slate-200 last:border-0 hover:text-amber-200"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
