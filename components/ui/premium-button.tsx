import Link from "next/link";
import type React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PremiumButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
};

export function PremiumButton({ href, children, variant = "primary" }: PremiumButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition duration-300",
        variant === "primary"
          ? "bg-plasma text-carbon shadow-glow hover:bg-white"
          : "border border-white/15 bg-white/5 text-white hover:border-ember/70 hover:bg-ember/10 hover:shadow-ember",
      )}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </Link>
  );
}
