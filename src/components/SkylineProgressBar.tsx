"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function SkylineProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="relative h-[2px] w-full overflow-hidden bg-[#2b211b]">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-amber-200 via-amber-500 to-orange-400"
          style={{ scaleX }}
        />
      </div>
    </div>
  );
}
