import { FilterableProjects } from "@/components/filterable-projects";
import { SectionHeading } from "@/components/section-heading";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden pt-28">
      <section className="relative px-4 py-20">
        <div className="absolute inset-0 bg-industrial-grid bg-[length:52px_52px] opacity-20" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Projects"
            title="Filterable program gallery for tooling, welding fixtures, CAE, and automotive segments."
            summary="Each sample card includes the challenge, solution, result, timeline, technologies, cycle time, and automation level."
          />
          <div className="mt-12">
            <FilterableProjects />
          </div>
        </div>
      </section>
    </main>
  );
}
