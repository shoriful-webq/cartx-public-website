"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotionSnapshot(): boolean {
  return false;
}

/**
 * RouteScrollManager synchronizes Lenis with Next.js App Router navigation,
 * ensuring smooth in-page anchor scrolling and instant scroll reset on route changes.
 */
function RouteScrollManager() {
  const pathname = usePathname();
  const lenis = useLenis();

  // Route change scroll synchronization
  useEffect(() => {
    if (!lenis) return;

    // If an anchor hash exists in the URL, scroll smoothly to the targeted element
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash) {
      try {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          // Check if a secondary sticky navigation exists (like on /features)
          const hasSecondaryNav = Boolean(
            document.querySelector(".sticky.top-16") || pathname === "/features"
          );
          const clearanceOffset = hasSecondaryNav ? -140 : -72;

          // Allow DOM to settle on route transition before scrolling
          const timer = setTimeout(() => {
            lenis.scrollTo(targetElement as HTMLElement, {
              offset: clearanceOffset,
              immediate: false,
            });
          }, 80);
          return () => clearTimeout(timer);
        }
      } catch {
        // Fallback for invalid selector queries
      }
    }

    // Default route navigation: reset scroll to top immediately
    lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  // Handle in-page anchor clicks (e.g. href="#section-id")
  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e: MouseEvent) => {
      // Respect event prevention by specialized components
      if (e.defaultPrevented) return;

      const targetLink = (e.target as HTMLElement).closest("a");
      if (!targetLink) return;

      const href = targetLink.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      try {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          const hasSecondaryNav = Boolean(
            document.querySelector(".sticky.top-16") || pathname === "/features"
          );
          const clearanceOffset = hasSecondaryNav ? -140 : -72;

          lenis.scrollTo(targetElement as HTMLElement, {
            offset: clearanceOffset,
          });
          window.history.pushState(null, "", href);
        }
      } catch {
        // Fallback for non-selector hrefs
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [lenis, pathname]);

  return null;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  return (
    <ReactLenis
      root
      options={{
        lerp: prefersReducedMotion ? 1 : 0.09,
        duration: prefersReducedMotion ? 0 : 1.1,
        smoothWheel: !prefersReducedMotion,
        syncTouch: false,
        autoResize: true,
        prevent: (node) => {
          return (
            node.hasAttribute("data-lenis-prevent") ||
            Boolean(node.closest("[data-lenis-prevent]"))
          );
        },
      }}
    >
      <RouteScrollManager />
      {children}
    </ReactLenis>
  );
}
