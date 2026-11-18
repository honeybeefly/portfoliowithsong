import fs from 'fs';
import path from 'path';

const componentsDir = path.resolve('src/components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// 1. NeonCard.tsx
const neonCard = `"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface NeonCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: "cyan" | "magenta" | "amber" | "violet";
  className?: string;
  glow?: boolean;
  chineseTag?: string;
  showHudCorners?: boolean;
}

export default function NeonCard({
  children,
  variant = "cyan",
  className = "",
  glow = true,
  chineseTag,
  showHudCorners = true,
  ...props
}: NeonCardProps) {
  const borderColors = {
    cyan: "border-cyan-500/30 hover:border-cyan-400 group-hover:border-cyan-400/80",
    magenta: "border-pink-500/30 hover:border-pink-400 group-hover:border-pink-400/80",
    amber: "border-amber-500/30 hover:border-amber-400 group-hover:border-amber-400/80",
    violet: "border-purple-500/30 hover:border-purple-400 group-hover:border-purple-400/80",
  };

  const glowShadows = {
    cyan: "hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]",
    magenta: "hover:shadow-[0_0_25px_rgba(255,46,151,0.25)]",
    amber: "hover:shadow-[0_0_25px_rgba(255,183,3,0.25)]",
    violet: "hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]",
  };

  const hudCornerColors = {
    cyan: "border-cyan-400",
    magenta: "border-pink-500",
    amber: "border-amber-400",
    violet: "border-purple-400",
  };

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={\`relative group rounded-xl bg-[#090e1f]/80 backdrop-blur-md border \${borderColors[variant]} \${
        glow ? glowShadows[variant] : ""
      } transition-all duration-300 p-6 \${className}\`}
      {...props}
    >
      {showHudCorners && (
        <>
          <span
            className={\`absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 \${hudCornerColors[variant]} opacity-70 group-hover:opacity-100 transition-opacity\`}
          />
          <span
            className={\`absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 \${hudCornerColors[variant]} opacity-70 group-hover:opacity-100 transition-opacity\`}
          />
        </>
      )}

      {chineseTag && (
        <span className="absolute top-3 right-3 text-xs font-mono tracking-widest text-white/10 group-hover:text-cyan-400/20 transition-colors select-none pointer-events-none">
          {chineseTag}
        </span>
      )}

      {children}
    </motion.div>
  );
}
`;

// 2. GlitchText.tsx
const glitchText = `"use client";

import React, { useState } from "react";

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
  const [isGlitching, setIsGlitching] = useState(false);

  const glowClasses = {
    cyan: "neon-text-cyan",
    magenta: "neon-text-magenta",
    amber: "neon-text-amber",
  };

  return (
    <div className="relative inline-block select-none group">
      <Component
        onMouseEnter={() => setIsGlitching(true)}
        onMouseLeave={() => setIsGlitching(false)}
        className={\`relative inline-block font-bold tracking-wider transition-all duration-200 \${glowClasses[glowColor]} \${className}\`}
      >
        <span className="relative z-10">{text}</span>
        <span
          aria-hidden="true"
          className={\`absolute top-0 left-0 text-[#ff2e97] -z-10 opacity-0 group-hover:opacity-90 transition-opacity transform translate-x-[2px] -translate-y-[1px] select-none pointer-events-none \${
            isGlitching ? "cyber-glitch" : ""
          }\`}
        >
          {text}
        </span>
        <span
          aria-hidden="true"
          className={\`absolute top-0 left-0 text-[#00f0ff] -z-10 opacity-0 group-hover:opacity-90 transition-opacity transform -translate-x-[2px] translate-y-[1px] select-none pointer-events-none \${
            isGlitching ? "cyber-glitch" : ""
          }\`}
        >
          {text}
        </span>
      </Component>

      {chineseSubtitle && (
        <span className="block text-xs font-mono tracking-widest text-cyan-400/50 uppercase mt-1">
          {chineseSubtitle}
        </span>
      )}
    </div>
  );
}
`;

// 3. TerminalTyping.tsx
const terminalTyping = `"use client";

import React, { useState, useEffect } from "react";

interface TerminalTypingProps {
  phrases?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  prefix?: string;
}

export default function TerminalTyping({
  phrases = [
    "> securing the future, one exploit at a time",
    "> red team mindset // black team resilience",
    "> dissecting packets under the Pudong neon skyline",
    "> 1st year B.Tech CSE ICB student @ BIT Bangalore",
    "> ethical hacker, reverse engineer, continuous learner",
  ],
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseDuration = 2200,
  className = "",
  prefix = "> ",
}: TerminalTypingProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetPhrase = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < targetPhrase.length) {
            setCurrentText(targetPhrase.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(targetPhrase.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div
      className={\`inline-flex items-center font-mono text-sm sm:text-base md:text-lg text-cyan-300/90 bg-[#080d1e]/80 border border-cyan-500/20 px-3.5 py-1.5 rounded-md shadow-[0_0_15px_rgba(0,240,255,0.1)] backdrop-blur-sm \${className}\`}
    >
      <span className="text-pink-500 font-bold mr-2 select-none">{prefix}</span>
      <span className="text-slate-200 tracking-wide font-medium">
        {currentText}
      </span>
      <span className="ml-1 inline-block w-2.5 h-4 bg-cyan-400 animate-pulse select-none" />
    </div>
  );
}
`;

// 4. CustomCursor.tsx
const customCursor = `"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("clickable"))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      <motion.div
        className={\`fixed top-0 left-0 rounded-full border transition-all duration-150 ease-out \${
          isPointer
            ? "w-12 h-12 -ml-6 -mt-6 border-pink-500 bg-pink-500/10 shadow-[0_0_20px_rgba(255,46,151,0.6)]"
            : "w-8 h-8 -ml-4 -mt-4 border-cyan-400/80 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
        }\`}
        style={{
          x: trailX,
          y: trailY,
        }}
      />

      <motion.div
        className={\`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full \${
          isPointer ? "bg-pink-400" : "bg-cyan-400"
        } shadow-[0_0_8px_#00f0ff]\`}
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </div>
  );
}
`;

// 5. SkylineProgressBar.tsx
const skylineProgressBar = `"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function SkylineProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="w-full h-[3px] bg-slate-900/60 backdrop-blur-sm relative overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-400 origin-left shadow-[0_0_12px_rgba(0,240,255,0.8)]"
          style={{ scaleX }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: percent > 2 ? 1 : 0 }}
        className="absolute top-2 right-4 flex items-center space-x-2 bg-[#050814]/90 border border-cyan-500/30 px-2.5 py-1 rounded-full text-[10px] font-mono text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span className="text-pink-400 font-bold">PUDONG HUD</span>
        <span>{percent}%</span>
        <span className="text-white/40">|</span>
        <span className="text-amber-400">东方明珠</span>
      </motion.div>
    </div>
  );
}
`;

// 6. RainParticles.tsx
const rainParticles = `"use client";

import React, { useEffect, useRef } from "react";

interface RainParticlesProps {
  density?: number;
  className?: string;
  speed?: number;
}

export default function RainParticles({
  density = 45,
  className = "",
  speed = 4,
}: RainParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    interface Drop {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      color: string;
      isNeon: boolean;
    }

    const drops: Drop[] = [];
    const colors = ["#00f0ff", "#ff2e97", "rgba(180, 220, 255, 0.4)"];

    for (let i = 0; i < density; i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 20 + 10,
        speed: (Math.random() * 2 + speed) * 1.5,
        opacity: Math.random() * 0.4 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        isNeon: Math.random() > 0.75,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 3, d.y + d.length);

        ctx.strokeStyle = d.color;
        ctx.globalAlpha = d.opacity;
        ctx.lineWidth = d.isNeon ? 1.5 : 1;

        if (d.isNeon) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = d.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.stroke();

        d.y += d.speed;
        d.x -= d.speed * 0.18;

        if (d.y > height) {
          d.y = -d.length;
          d.x = Math.random() * (width + 200);
        }
        if (d.x < -50) {
          d.x = width + 50;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={\`pointer-events-none absolute inset-0 z-10 w-full h-full \${className}\`}
    />
  );
}
`;

// 7. ShanghaiSkyline.tsx
const shanghaiSkyline = `"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RainParticles from "./RainParticles";

interface ShanghaiSkylineProps {
  showRain?: boolean;
  className?: string;
  variant?: "hero" | "subtle" | "footer";
}

export default function ShanghaiSkyline({
  showRain = true,
  className = "",
  variant = "hero",
}: ShanghaiSkylineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const distantY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const midgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textFade = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  return (
    <div
      ref={containerRef}
      className={\`relative w-full overflow-hidden select-none \${
        variant === "hero" ? "h-screen min-h-[700px]" : "h-72"
      } \${className}\`}
    >
      <motion.div
        style={{ y: distantY }}
        className="absolute inset-0 bg-[#02040a] cyber-grid-pattern opacity-60"
      />

      <motion.div
        style={{ y: distantY }}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/shanghai-skyline-hero.svg"
          alt="Shanghai Pudong Skyline at Night"
          className="w-full h-full object-cover object-bottom opacity-80"
        />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[90px]" />
      </div>

      <motion.div
        style={{ y: midgroundY, opacity: textFade }}
        className="absolute top-28 left-6 md:left-12 z-10 hidden sm:flex flex-col items-center pointer-events-none"
      >
        <div className="border border-cyan-500/30 bg-[#050814]/80 p-2 rounded backdrop-blur-sm shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <span className="vertical-chinese text-xs md:text-sm font-bold text-cyan-400 tracking-widest leading-loose">
            安全网络
          </span>
          <span className="block w-full h-[1px] bg-cyan-500/40 my-2" />
          <span className="text-[10px] font-mono text-pink-400 tracking-tighter">SEC</span>
        </div>
      </motion.div>

      <motion.div
        style={{ y: midgroundY, opacity: textFade }}
        className="absolute top-36 right-6 md:right-16 z-10 hidden sm:flex flex-col items-center pointer-events-none"
      >
        <div className="border border-pink-500/30 bg-[#050814]/80 p-2 rounded backdrop-blur-sm shadow-[0_0_15px_rgba(255,46,151,0.2)] flicker-neon">
          <span className="vertical-chinese text-xs md:text-sm font-bold text-pink-400 tracking-widest leading-loose">
            代码黑客
          </span>
          <span className="block w-full h-[1px] bg-pink-500/40 my-2" />
          <span className="text-[10px] font-mono text-cyan-400 tracking-tighter">0x00</span>
        </div>
      </motion.div>

      {showRain && <RainParticles density={35} speed={3.5} />}

      <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-[#05070f]/75 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070f]/90 via-[#05070f]/40 to-[#05070f]/80 pointer-events-none" />
      <div className="absolute inset-0 scanlines-overlay opacity-30 pointer-events-none" />
    </div>
  );
}
`;

// 8. TimelineItem.tsx
const timelineItem = `"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Award, ExternalLink, CheckCircle2, MapPin } from "lucide-react";
import { WorkshopEvent } from "@/data/workshops";

interface TimelineItemProps {
  workshop: WorkshopEvent;
  index: number;
}

export default function TimelineItem({ workshop, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col md:flex-row items-start group"
    >
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 w-7 h-7 rounded-full bg-[#050814] border-2 border-cyan-400 items-center justify-center z-20 group-hover:border-pink-500 group-hover:scale-125 transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)]">
        <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-pink-400 transition-colors" />
      </div>

      <div
        className={\`w-full md:w-[46%] \${
          isEven ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
        }\`}
      >
        <div className="p-6 rounded-xl bg-[#090e21]/80 backdrop-blur-md border border-cyan-500/30 hover:border-pink-500/60 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]">
          <div
            className={\`flex flex-wrap items-center gap-2 mb-3 \${
              isEven ? "md:justify-end" : "md:justify-start"
            }\`}
          >
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-950/80 border border-cyan-400/40 text-cyan-300">
              {workshop.type}
            </span>
            <span className="flex items-center text-[11px] font-mono text-slate-400 gap-1">
              <Calendar className="w-3 h-3 text-pink-400" />
              {workshop.date}
            </span>
            {workshop.location && (
              <span className="flex items-center text-[11px] font-mono text-amber-400/80 gap-1">
                <MapPin className="w-3 h-3" />
                {workshop.location}
              </span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-orbitron text-white group-hover:text-cyan-300 transition-colors">
            {workshop.title}
          </h3>

          <p className="text-sm font-mono text-pink-400 mb-4 font-semibold">
            Organized by: {workshop.organizer}
          </p>

          <div className="space-y-2 mb-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Key Insights &amp; Takeaways:
            </h4>
            <ul
              className={\`space-y-1.5 text-xs sm:text-sm text-slate-300 \${
                isEven ? "md:text-right" : "md:text-left"
              }\`}
            >
              {workshop.whatILearned.map((item, idx) => (
                <li
                  key={idx}
                  className={\`flex items-start gap-2 \${
                    isEven ? "md:flex-row-reverse" : "flex-row"
                  }\`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={\`flex flex-wrap gap-1.5 mb-4 \${
              isEven ? "md:justify-end" : "md:justify-start"
            }\`}
          >
            {workshop.skillsGained.map((skill) => (
              <span
                key={skill}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300"
              >
                #{skill}
              </span>
            ))}
          </div>

          {workshop.certificateUrl && (
            <div
              className={\`pt-2 border-t border-slate-800/60 flex items-center \${
                isEven ? "md:justify-end" : "md:justify-start"
              }\`}
            >
              <a
                href={workshop.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400 hover:text-pink-400 transition-colors group/link"
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Verify Credential / Certificate</span>
                <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
`;

// Write all component files
fs.writeFileSync(path.join(componentsDir, 'NeonCard.tsx'), neonCard);
fs.writeFileSync(path.join(componentsDir, 'GlitchText.tsx'), glitchText);
fs.writeFileSync(path.join(componentsDir, 'TerminalTyping.tsx'), terminalTyping);
fs.writeFileSync(path.join(componentsDir, 'CustomCursor.tsx'), customCursor);
fs.writeFileSync(path.join(componentsDir, 'SkylineProgressBar.tsx'), skylineProgressBar);
fs.writeFileSync(path.join(componentsDir, 'RainParticles.tsx'), rainParticles);
fs.writeFileSync(path.join(componentsDir, 'ShanghaiSkyline.tsx'), shanghaiSkyline);
fs.writeFileSync(path.join(componentsDir, 'TimelineItem.tsx'), timelineItem);

console.log('Successfully wrote all core UI components to src/components!');
