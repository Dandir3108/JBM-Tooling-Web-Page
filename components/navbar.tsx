"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky left-0 right-0 top-0 z-50 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.12)]">
      <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:min-h-28 lg:px-8">
        <p className="max-w-[70%] font-sans text-sm font-black uppercase leading-snug tracking-[0.14em] text-[#333333] sm:text-base lg:text-xl lg:tracking-[0.18em]">
          Welcome to the Tooling Division of JBM Group
        </p>

        <Link
          href="/"
          aria-label="JBM Group home"
          className="flex w-[34vw] max-w-52 min-w-28 justify-end sm:w-[24vw] lg:w-[18%]"
          onClick={() => setOpen(false)}
        >
          <span className="relative block h-14 w-full sm:h-16 lg:h-20">
            <Image
              src="/images/jbm-logo.png"
              alt="JBM logo"
              fill
              sizes="(min-width: 1024px) 18vw, (min-width: 640px) 24vw, 34vw"
              priority
              className="object-contain object-right"
            />
          </span>
        </Link>
      </div>

      <nav className="border-t border-[#E5E7EB] bg-[#0066B3]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="my-3 grid h-11 w-11 place-items-center rounded-md border border-white/30 text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden w-full items-center justify-between lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className={cn(
                    "group relative flex min-h-16 items-center px-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-white/10 xl:px-4",
                    active && "bg-white/10",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 bottom-0 h-1 scale-x-0 bg-white transition-transform duration-200 group-hover:scale-x-100",
                      active && "scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-[#E5E7EB] bg-white px-4 py-3 shadow-lg lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={`${item.label}-${item.href}`}
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[#333333] transition hover:bg-[#F5F5F5] hover:text-[#0066B3]",
                      active && "bg-[#F5F5F5] text-[#0066B3]",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
