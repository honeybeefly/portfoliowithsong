"use client";

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
      className={`pointer-events-none absolute inset-0 z-10 w-full h-full ${className}`}
    />
  );
}
