"use client";

import { useEffect, useRef } from "react";

interface Spark {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  age: number;
  lifetime: number;
  size: number;
  color: string;
}

const sparkColors = ["#fff1c9", "#e2b56c", "#d27b48", "#f7d99b"];

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (
      !canvas ||
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) return;

    const sparks: Spark[] = [];
    let frameId: number | null = null;
    let previousFrameTime = performance.now();
    let lastTrailPosition: { x: number; y: number } | null = null;
    let pixelRatio = 1;

    const resizeCanvas = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.lineCap = "round";
    };

    const animate = (time: number) => {
      frameId = null;
      const delta = Math.min(time - previousFrameTime, 32);
      previousFrameTime = time;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.globalCompositeOperation = "lighter";

      for (let index = sparks.length - 1; index >= 0; index -= 1) {
        const spark = sparks[index];
        spark.age += delta;
        if (spark.age >= spark.lifetime) {
          sparks.splice(index, 1);
          continue;
        }

        spark.velocityY += 0.00065 * delta;
        spark.x += spark.velocityX * delta;
        spark.y += spark.velocityY * delta;

        const opacity = 1 - spark.age / spark.lifetime;
        context.globalAlpha = opacity;
        context.strokeStyle = spark.color;
        context.fillStyle = spark.color;
        context.lineWidth = Math.max(0.5, spark.size * opacity);
        context.shadowBlur = spark.size * 4;
        context.shadowColor = spark.color;
        context.beginPath();
        context.moveTo(spark.x, spark.y);
        context.lineTo(
          spark.x - spark.velocityX * 18,
          spark.y - spark.velocityY * 18,
        );
        context.stroke();
        context.beginPath();
        context.arc(spark.x, spark.y, Math.max(0.4, spark.size * opacity * 0.45), 0, Math.PI * 2);
        context.fill();
      }

      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";
      context.shadowBlur = 0;

      if (sparks.length > 0) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const scheduleFrame = () => {
      if (frameId === null) {
        previousFrameTime = performance.now();
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const createBurst = (x: number, y: number, isFirecracker: boolean) => {
      const count = isFirecracker ? 18 : 3;
      for (let index = 0; index < count; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = isFirecracker
          ? 0.09 + Math.random() * 0.25
          : 0.04 + Math.random() * 0.12;

        sparks.push({
          x,
          y,
          velocityX: Math.cos(angle) * speed,
          velocityY: Math.sin(angle) * speed,
          age: 0,
          lifetime: isFirecracker ? 300 + Math.random() * 300 : 180 + Math.random() * 140,
          size: isFirecracker ? 1.5 + Math.random() * 2 : 1 + Math.random() * 1.5,
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
        });
      }

      if (sparks.length > 180) {
        sparks.splice(0, sparks.length - 180);
      }
      scheduleFrame();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || document.hidden) return;

      const currentPosition = { x: event.clientX, y: event.clientY };
      if (lastTrailPosition) {
        const distance = Math.hypot(
          currentPosition.x - lastTrailPosition.x,
          currentPosition.y - lastTrailPosition.y,
        );
        if (distance < 18) return;
      }

      lastTrailPosition = currentPosition;
      createBurst(currentPosition.x, currentPosition.y, false);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch" || event.button !== 0 || document.hidden) return;
      createBurst(event.clientX, event.clientY, true);
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) return;
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      frameId = null;
      sparks.length = 0;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full"
    />
  );
}
