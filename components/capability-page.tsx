import { Cpu, Factory, FlaskConical, Gauge, Layers, Radar } from "lucide-react";
import { EngineeringScene } from "@/components/three/engineering-scene";
import { SectionHeading } from "@/components/section-heading";
import { technologies } from "@/lib/data";

const icons = [Factory, Cpu, FlaskConical, Radar, Layers, Gauge];

type CapabilityPageProps = {
  content: {
    eyebrow: string;
    title: string;
    summary: string;
    bullets: string[];
    process: string[];
  };
  variant?: "tooling" | "robot" | "mesh";
  accent?: "plasma" | "ember";
};

export function CapabilityPage({ content, variant = "tooling", accent = "plasma" }: CapabilityPageProps) {
  return (
    <main className="overflow-hidden pt-28">
      <section className="relative min-h-[76vh] px-4 py-20">
        <div className="absolute inset-0 bg-industrial-grid bg-[length:54px_54px] opacity-20" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_.95fr]">
          <div className="gsap-reveal">
            <div className="mb-5 inline-flex rounded-md border border-plasma/25 bg-plasma/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-plasma">
              {content.eyebrow}
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white text-balance md:text-6xl">{content.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">{content.summary}</p>
          </div>
          <div className="glass relative min-h-[24rem] overflow-hidden rounded-lg">
            <EngineeringScene variant={variant} />
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Capabilities" title="Built around real launch constraints." summary="Every capability is structured for manufacturability, repeatability, validation, and speed to stable production." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.bullets.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div key={item} className="glass gsap-reveal rounded-lg p-5">
                  <Icon className={accent === "plasma" ? "h-6 w-6 text-plasma" : "h-6 w-6 text-ember"} />
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-steel">
                    Program-ready engineering with digital checks, manufacturing feedback, and validation gates.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Process Flow" title="A connected path from concept to delivery." />
          <div className="mt-10 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {content.process.map((step, index) => (
              <div key={step} className="glass gsap-reveal relative rounded-lg p-5">
                <div className="text-xs uppercase tracking-[0.22em] text-steel">0{index + 1}</div>
                <div className="mt-8 font-display text-lg font-semibold text-white">{step}</div>
                <div className="mt-5 h-px bg-gradient-to-r from-plasma via-ember to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <SectionHeading eyebrow="Digital Stack" title="Engineering software and manufacturing intelligence working together." summary="The BU5 operating model connects design tools, simulation systems, robotic planning, digital metrology, and manufacturing controls." />
          <div className="grid gap-3 sm:grid-cols-2">
            {technologies.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm uppercase tracking-[0.18em] text-white transition hover:border-plasma/50 hover:bg-plasma/10">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
