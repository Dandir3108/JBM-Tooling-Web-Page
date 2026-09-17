"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-carbon"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="h-16 w-16 rounded-full border border-plasma/30 border-t-plasma shadow-glow"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, ease: "linear", repeat: Infinity }}
            />
            <div className="font-display text-sm uppercase tracking-[0.38em] text-steel">Welcome to JBM Group Tooling Divison</div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
