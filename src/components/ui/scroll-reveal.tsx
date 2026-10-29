"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
}

/**
 * ScrollReveal — Lightweight, accessible viewport reveal wrapper.
 * Unobserves immediately upon entering viewport to prevent repeated re-renders or layout shifts.
 * Fully respects prefers-reduced-motion.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // If reduced motion is preferred, reveal asynchronously without motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frameId = requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return () => cancelAnimationFrame(frameId);
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "400ms",
        transitionDelay: `${delay}ms`,
      }}
      className={cn(
        "transition-all ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0",
        isVisible
          ? "opacity-100 translate-y-0"
          : direction === "up"
          ? "opacity-0 translate-y-3"
          : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
