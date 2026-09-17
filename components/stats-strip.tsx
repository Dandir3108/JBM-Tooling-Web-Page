"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

export function StatsStrip() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setActive(true);
    }, { threshold: 0.3 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative border-y border-white/10 bg-white/[0.025] px-4 py-10">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <CounterCard key={stat.label} stat={stat} active={active} delay={index * 110} />
        ))}
      </div>
    </section>
  );
}

function CounterCard({
  stat,
  active,
  delay,
}: {
  stat: { value: number; suffix: string; label: string };
  active: boolean;
  delay: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const timeout = window.setTimeout(() => {
      const start = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.floor(stat.value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => window.clearTimeout(timeout);
  }, [active, delay, stat.value]);

  return (
    <div className="glass rounded-lg p-6">
      <div className="font-display text-4xl font-bold text-white">
        {value}
        <span className="text-plasma">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.18em] text-steel">{stat.label}</div>
    </div>
  );
}
