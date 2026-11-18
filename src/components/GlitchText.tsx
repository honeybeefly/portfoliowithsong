"use client";

import React from "react";

interface GlitchTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
  className?: string;
  glowColor?: "cyan" | "magenta" | "amber";
  chineseSubtitle?: string;
}

export default function GlitchText({
  text,
  as: Component = "span",
  className = "",
  glowColor = "cyan",
  chineseSubtitle,
}: GlitchTextProps) {
  const accentClasses = {
    cyan: "border-[#c89b5c]",
    magenta: "border-[#b87345]",
    amber: "border-[#d7b574]",
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <Component
        className={`border-b-2 pb-2 font-semibold tracking-wide text-[#f4e8d2] ${accentClasses[glowColor]}`}
      >
        {text}
      </Component>

      {chineseSubtitle && (
        <span className="mt-2 block font-serif text-xs tracking-widest text-[#caa36c]">
          {chineseSubtitle}
        </span>
      )}
    </div>
  );
}
