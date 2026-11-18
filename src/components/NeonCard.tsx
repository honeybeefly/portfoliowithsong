"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface NeonCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: "cyan" | "magenta" | "amber" | "violet";
  className?: string;
  glow?: boolean;
  chineseTag?: string;
}

export default function NeonCard({
  children,
  variant = "cyan",
  className = "",
  glow = true,
  chineseTag,
  ...props
}: NeonCardProps) {
  const accent = variant === "amber" ? "border-[#b77d48]" : "border-[#806b50]";
  const quietHover = glow ? "hover:shadow-[0_12px_30px_rgba(25,15,9,0.25)]" : "";

  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
      className={`relative group rounded-md border ${accent} bg-[#30241d]/90 shadow-md shadow-black/15 transition-all duration-300 p-6 ${quietHover} ${className}`}
      {...props}
    >
      {chineseTag && (
        <span className="absolute right-4 top-3 font-serif text-xs tracking-widest text-[#c9a46c]/65 select-none pointer-events-none">
          {chineseTag}
        </span>
      )}

      {children}
    </motion.div>
  );
}
