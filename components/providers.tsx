"use client";

import { ReactNode } from "react";
import { AnimatedCursor } from "@/components/animated-cursor";
import { LoadingScreen } from "@/components/loading-screen";
import { SmoothAnimations } from "@/components/smooth-animations";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <SmoothAnimations />
      <AnimatedCursor />
      {children}
    </>
  );
}
