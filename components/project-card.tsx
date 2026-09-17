import { Gauge, Timer, Zap } from "lucide-react";

export type Project = {
  title: string;
  type: string;
  segment: string;
  cycleTime: string;
  automation: string;
  challenge: string;
  solution: string;
  result: string;
  timeline: string;
  tech: string[];
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass gsap-reveal group overflow-hidden rounded-lg transition duration-500 hover:-translate-y-1 hover:border-ember/45 hover:shadow-ember">
      <div className="relative h-44 overflow-hidden bg-graphite">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(8,217,255,.28),transparent_12rem),radial-gradient(circle_at_70%_80%,rgba(255,122,26,.28),transparent_11rem)]" />
        <div className="absolute inset-x-6 bottom-6 h-20 skew-x-[-14deg] border border-white/10 bg-white/5 shadow-glow transition group-hover:scale-105" />
        <div className="absolute bottom-5 left-6 rounded-md border border-plasma/30 bg-carbon/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-plasma">
          {project.type}
        </div>
      </div>
      <div className="p-5">
        <div className="text-xs uppercase tracking-[0.22em] text-steel">{project.segment}</div>
        <h3 className="mt-3 font-display text-xl font-semibold text-white">{project.title}</h3>
        <div className="mt-5 grid grid-cols-3 gap-2 text-xs text-steel">
          <span className="rounded-md border border-white/10 bg-white/5 p-2"><Timer className="mb-1 h-4 w-4 text-plasma" />{project.cycleTime}</span>
          <span className="rounded-md border border-white/10 bg-white/5 p-2"><Zap className="mb-1 h-4 w-4 text-ember" />{project.automation}</span>
          <span className="rounded-md border border-white/10 bg-white/5 p-2"><Gauge className="mb-1 h-4 w-4 text-plasma" />{project.timeline}</span>
        </div>
        <div className="mt-5 space-y-3 text-sm leading-6 text-steel">
          <p><span className="text-white">Challenge:</span> {project.challenge}</p>
          <p><span className="text-white">Solution:</span> {project.solution}</p>
          <p><span className="text-white">Result:</span> {project.result}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-steel">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
