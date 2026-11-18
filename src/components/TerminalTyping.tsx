"use client";

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
      className={`inline-flex items-center font-mono text-sm sm:text-base md:text-lg text-cyan-300/90 bg-[#080d1e]/80 border border-cyan-500/20 px-3.5 py-1.5 rounded-md shadow-[0_0_15px_rgba(0,240,255,0.1)] backdrop-blur-sm ${className}`}
    >
      <span className="text-pink-500 font-bold mr-2 select-none">{prefix}</span>
      <span className="text-slate-200 tracking-wide font-medium">
        {currentText}
      </span>
      <span className="ml-1 inline-block w-2.5 h-4 bg-cyan-400 animate-pulse select-none" />
    </div>
  );
}
