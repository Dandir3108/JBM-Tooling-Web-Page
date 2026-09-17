import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  summary?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, summary, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("gsap-reveal max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div className="mb-4 inline-flex rounded-md border border-plasma/20 bg-plasma/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-plasma">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white text-balance md:text-5xl">{title}</h2>
      {summary ? <p className="mt-5 text-base leading-7 text-steel md:text-lg">{summary}</p> : null}
    </div>
  );
}
