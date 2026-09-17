import Link from "next/link";
import { ArrowUpRight, Cpu, Factory, Orbit } from "lucide-react";

const icons = [Factory, Cpu, Orbit];

type DivisionCardProps = {
  division: {
    title: string;
    href: string;
    tag: string;
    items: string[];
    description: string;
  };
  index: number;
};

export function DivisionCard({ division, index }: DivisionCardProps) {
  const Icon = icons[index % icons.length];
  return (
    <Link
      href={division.href}
      className="group glass gsap-reveal relative min-h-[25rem] overflow-hidden rounded-lg p-6 transition duration-500 hover:-translate-y-2 hover:border-plasma/45 hover:shadow-glow"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(8,217,255,.18),transparent_18rem),radial-gradient(circle_at_85%_90%,rgba(255,122,26,.18),transparent_18rem)] opacity-80 transition group-hover:scale-110" />
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-plasma/20" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div className="grid h-14 w-14 place-items-center rounded-md border border-plasma/30 bg-plasma/10 text-plasma">
            <Icon className="h-7 w-7" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-steel transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-plasma" />
        </div>
        <div className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-ember">{division.tag}</div>
        <h3 className="mt-3 font-display text-2xl font-semibold text-white">{division.title}</h3>
        <p className="mt-4 text-sm leading-6 text-steel">{division.description}</p>
        <div className="mt-auto grid gap-3 pt-8">
          {division.items.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-white/86">
              <span className="h-px w-7 bg-plasma/70" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
