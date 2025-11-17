"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerFine = window.matchMedia("(pointer: fine)");
    if (reduceMotionQuery.matches || !pointerFine.matches) {
      return;
    }

    const state = {
      target: window.scrollY,
      current: window.scrollY,
      rafId: 0 as number | 0
    };
    const ease = 0.14;

    const updateVar = (value: number) => {
      document.documentElement.style.setProperty("--scroll-position", `${value}`);
    };

    const animate = () => {
      const diff = state.target - state.current;
      if (Math.abs(diff) < 0.4) {
        state.current = state.target;
        state.rafId = 0;
        updateVar(state.current);
        return;
      }
      state.current += diff * ease;
      updateVar(state.current);
      window.scrollTo(0, state.current);
      state.rafId = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (!state.rafId) {
        state.rafId = window.requestAnimationFrame(animate);
      }
    };

    const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        return;
      }
      event.preventDefault();
      const limit = maxScroll();
      state.target = Math.max(0, Math.min(state.target + event.deltaY, limit));
      startAnimation();
    };

    const onResize = () => {
      state.target = Math.max(0, Math.min(state.target, maxScroll()));
    };

    const onScroll = () => {
      if (!state.rafId) {
        state.target = window.scrollY;
        state.current = window.scrollY;
        updateVar(state.current);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      if (state.rafId) {
        window.cancelAnimationFrame(state.rafId);
      }
    };
  }, [pathname]);

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
