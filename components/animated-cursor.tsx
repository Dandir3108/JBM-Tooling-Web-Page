"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function AnimatedCursor() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 32 });
  const springY = useSpring(y, { stiffness: 280, damping: 32 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
      setVisible(true);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-dot fixed left-0 top-0 z-[80] h-9 w-9 rounded-full border border-plasma/60 bg-plasma/10 shadow-glow"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    />
  );
}
