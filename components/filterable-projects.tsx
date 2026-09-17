"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";

const filters = ["All", "Tooling", "Fixtures", "CAE", "Passenger Vehicle", "EV Platform"];

export function FilterableProjects() {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.type === active || project.segment === active);
  }, [active]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-md border px-4 py-2 text-sm uppercase tracking-[0.14em] transition",
              active === filter
                ? "border-plasma bg-plasma text-carbon shadow-glow"
                : "border-white/10 bg-white/5 text-steel hover:border-plasma/60 hover:text-white",
            )}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
