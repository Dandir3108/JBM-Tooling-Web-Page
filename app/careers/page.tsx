import { BriefcaseBusiness, GraduationCap, ShieldCheck, Wrench } from "lucide-react";
import { CapabilityPage } from "@/components/capability-page";
import { SectionHeading } from "@/components/section-heading";
import { openPositions, pageContent } from "@/lib/data";

export const metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <CapabilityPage content={pageContent.careers} variant="robot" />
      <section id="people" className="scroll-mt-44 px-4 pb-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Open Positions"
            title="Roles for engineers who want direct exposure to design, plant reality, and launch outcomes."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {openPositions.map((role, index) => {
              const Icon = [BriefcaseBusiness, Wrench, GraduationCap, ShieldCheck][index % 4];
              return (
                <article key={role} className="glass gsap-reveal rounded-lg p-5">
                  <Icon className="h-6 w-6 text-plasma" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">{role}</h3>
                  <p className="mt-3 text-sm leading-6 text-steel">
                    Work across digital engineering, manufacturing feedback, validation, quality, and program execution.
                  </p>
                  <button className="mt-5 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white transition hover:border-plasma hover:text-plasma">
                    View Role
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
