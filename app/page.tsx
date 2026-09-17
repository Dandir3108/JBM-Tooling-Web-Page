import Image from "next/image";
import { ArrowDown, Cpu, Factory, FlaskConical, Radar } from "lucide-react";
import { DivisionCard } from "@/components/division-card";
import { EngineeringScene } from "@/components/three/engineering-scene";
import { FilterableProjects } from "@/components/filterable-projects";
import { ParticleField } from "@/components/particle-field";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionHeading } from "@/components/section-heading";
import { StatsStrip } from "@/components/stats-strip";
import { divisions, technologies } from "@/lib/data";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-screen px-4 pt-32">
        <Image
          src="/images/jbm-bu5-industrial-hero.png"
          alt="Robotic welding and die tooling manufacturing visual"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/82 to-carbon/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/70" />
        <ParticleField density={120} />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-10 pb-16 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-4xl">
            <div className="gsap-reveal mb-5 inline-flex rounded-md border border-plasma/30 bg-plasma/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.28em] text-plasma">
              JBM Group - BU5 Tooling Business
            </div>
            <h1 className="gsap-reveal font-display text-5xl font-semibold leading-[0.98] text-white text-balance md:text-7xl xl:text-8xl">
              Engineering the Future of Automotive Manufacturing
            </h1>
            <p className="gsap-reveal mt-7 max-w-2xl text-lg leading-8 text-steel md:text-xl">
              Precision Tooling, Intelligent Welding Fixtures, and Advanced CAE Validation Solutions under JBM Group BU5.
            </p>
            <div className="gsap-reveal mt-9 flex flex-wrap gap-3">
              <PremiumButton href="/tooling">Explore Tooling</PremiumButton>
              <PremiumButton href="/welding-fixtures" variant="ghost">Explore Welding Fixtures</PremiumButton>
              <PremiumButton href="/cae-lab" variant="ghost">Explore R&D Lab</PremiumButton>
            </div>
          </div>
          <div className="relative hidden min-h-[34rem] lg:block" data-parallax>
            <EngineeringScene variant="robot" />
          </div>
          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.22em] text-steel md:flex">
            <ArrowDown className="h-4 w-4 animate-bounce text-plasma" />
            Scroll
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Business Divisions"
            title="Three specialized teams connected by one manufacturing intelligence layer."
            summary="Tooling, fixtures, and validation workflows are designed together so programs move from concept to launch with fewer disconnects."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {divisions.map((division, index) => (
              <DivisionCard key={division.title} division={division} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.025] px-4 py-24">
        <div className="absolute inset-0 bg-industrial-grid bg-[length:48px_48px] opacity-20" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Technology Showcase"
            title="Software and automation stack for simulation-driven engineering."
            summary="A modern digital thread from CAD to robotic process planning, analysis, testing, and smart manufacturing feedback."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {technologies.map((tool, index) => {
              const Icon = [Cpu, Factory, Radar, FlaskConical][index % 4];
              return (
                <div key={tool} className="glass gsap-reveal rounded-lg p-5 transition hover:-translate-y-1 hover:border-plasma/45">
                  <Icon className="h-6 w-6 text-plasma" />
                  <div className="mt-5 font-display text-xl font-semibold text-white">{tool}</div>
                  <div className="mt-3 text-sm leading-6 text-steel">Integrated into design, simulation, process, validation, and launch workflows.</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Project Showcase"
            title="Program examples across tooling, fixtures, CAE, and automotive launch systems."
            summary="Filter by capability to review sample challenges, engineering choices, timelines, automation levels, and delivered outcomes."
          />
          <div className="mt-10">
            <FilterableProjects />
          </div>
        </div>
      </section>
    </main>
  );
}
