import Link from "next/link";
import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="industrial-line relative overflow-hidden border-t border-white/10 bg-carbon px-4 py-14">
      <div className="absolute inset-0 bg-industrial-grid bg-[length:42px_42px] opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="font-display text-2xl font-bold uppercase tracking-[0.18em] text-white">JBM Group BU5</div>
          <p className="mt-4 max-w-lg text-sm leading-7 text-steel">
            Precision tooling, intelligent welding fixtures, and advanced CAE validation for next-generation automotive manufacturing.
          </p>
          <div className="mt-6 flex gap-3">
            {[Share2, Mail, Phone].map((Icon, index) => (
              <span key={index} className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5 text-plasma">
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">Quick Links</div>
          <div className="grid gap-2">
            {navItems.slice(1, 6).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-steel transition hover:text-plasma">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">Engineering Hub</div>
          <div className="flex items-start gap-3 text-sm leading-6 text-steel">
            <MapPin className="mt-1 h-4 w-4 text-ember" />
            <span>Automotive tooling, fixtures, CAE validation, and manufacturing technology under JBM Group BU5.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
