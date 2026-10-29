"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";

interface NavCategory {
  id: string;
  nameKey: string;
  href: string;
}

const CATEGORIES: NavCategory[] = [
  { id: "storefront", nameKey: "featuresNav.storefront", href: "#storefront" },
  { id: "products", nameKey: "featuresNav.products", href: "#products" },
  { id: "orders", nameKey: "featuresNav.orders", href: "#orders" },
  { id: "inventory", nameKey: "featuresNav.inventory", href: "#inventory" },
  { id: "customers", nameKey: "featuresNav.customers", href: "#customers" },
  { id: "payments", nameKey: "featuresNav.payments", href: "#payments" },
  { id: "shipping", nameKey: "featuresNav.shipping", href: "#shipping" },
  { id: "marketing", nameKey: "featuresNav.marketing", href: "#marketing" },
  { id: "analytics", nameKey: "featuresNav.analytics", href: "#analytics" },
  { id: "mobile-apps", nameKey: "featuresNav.mobileApps", href: "#mobile-apps" },
  { id: "integrations", nameKey: "featuresNav.integrations", href: "#integrations" },
  { id: "security", nameKey: "featuresNav.security", href: "#security" },
];

// Clearance offset accounting for sticky header (64px) + sticky nav (~60px) + comfortable breathing room (16px)
const STICKY_CLEARANCE = 140;

export interface FeatureNavigationProps {
  className?: string;
}

/**
 * Section 02 — Sticky Feature Navigation
 * Minimal horizontal pill-style navigation inside a subtle bordered container.
 * Features reliable scroll-based active state detection across all 12 categories,
 * smooth Lenis-integrated click navigation with clearance offset, and automatic
 * horizontal centering of the active pill.
 */
export function FeatureNavigation({ className }: FeatureNavigationProps) {
  const { t } = useLanguage();
  const lenis = useLenis();

  // Deterministic initial state for flawless SSR & hydration match (no browser APIs during render)
  const [activeId, setActiveId] = useState<string>("");

  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const isClickScrollingRef = useRef<boolean>(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * Calculates the exact target scroll position for a given category, ensuring
   * headings are never clipped behind sticky elements.
   */
  const getTargetScrollTop = useCallback((id: string): number => {
    const el = document.getElementById(id);
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    return Math.max(0, rect.top + window.scrollY - STICKY_CLEARANCE);
  }, []);

  /**
   * Scrolls smoothly to the requested category using Lenis (or window.scrollTo fallback).
   */
  const scrollToCategory = useCallback(
    (id: string, updateHash = true) => {
      const targetY = getTargetScrollTop(id);
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      isClickScrollingRef.current = true;
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }

      if (lenis) {
        lenis.scrollTo(targetY, {
          offset: 0,
          immediate: prefersReduced,
          onComplete: () => {
            isClickScrollingRef.current = false;
          },
        });
      } else {
        window.scrollTo({
          top: targetY,
          behavior: prefersReduced ? "auto" : "smooth",
        });
      }

      // Safeguard timeout to ensure lock is released even if onComplete is skipped
      clickTimeoutRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 750);

      if (updateHash && typeof window !== "undefined") {
        window.history.pushState(null, "", `#${id}`);
      }
    },
    [getTargetScrollTop, lenis]
  );

  /**
   * Evaluates the currently viewed category using reading-zone viewport intersection.
   * Rock-solid detection across all 12 categories in both scroll directions.
   */
  const computeActiveCategory = useCallback((): string => {
    if (typeof window === "undefined") return "";

    const firstEl = document.getElementById(CATEGORIES[0].id);
    if (!firstEl) return "";

    // Reading focal point positioned at natural eye-level (~35-42% viewport height)
    const focalPoint = Math.min(window.innerHeight * 0.42, 320);
    const firstRect = firstEl.getBoundingClientRect();

    // If user is still at the Hero or Feature Category Grid above deep dives
    if (firstRect.top > focalPoint + 60) {
      return "";
    }

    // Check last section (Security)
    const lastEl = document.getElementById(CATEGORIES[CATEGORIES.length - 1].id);
    if (lastEl) {
      const lastRect = lastEl.getBoundingClientRect();
      // Scrolled past Security into subsequent sections (Plan Availability, FAQ, CTA)
      if (lastRect.bottom < STICKY_CLEARANCE) {
        return "";
      }
    }

    // Reverse scan: pick the lowest section that has entered or passed the reading zone
    for (let i = CATEGORIES.length - 1; i >= 0; i--) {
      const el = document.getElementById(CATEGORIES[i].id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();

      // Section is active if its heading has reached focal point and content is still in view
      if (rect.top <= focalPoint && rect.bottom > STICKY_CLEARANCE) {
        return CATEGORIES[i].id;
      }
    }

    // Fallback if at the very start of the deep-dives section
    if (firstRect.bottom > STICKY_CLEARANCE) {
      return CATEGORIES[0].id;
    }

    return "";
  }, []);

  /**
   * Scroll listener with RAF throttling for synchronized, jitter-free active category detection.
   */
  const handleScroll = useCallback(() => {
    if (isClickScrollingRef.current) return;

    window.requestAnimationFrame(() => {
      if (isClickScrollingRef.current) return;
      const detected = computeActiveCategory();
      setActiveId((prev) => (prev !== detected ? detected : prev));
    });
  }, [computeActiveCategory]);

  // Hook into Lenis scroll events for smooth 60/120fps synchronization
  useLenis(handleScroll);

  // Hook into native scroll and resize events (for reduced-motion or non-Lenis fallback)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  /**
   * Handle direct hash loading or page refresh with hash present after mount.
   * Runs asynchronously on client lifecycle, completely preventing hydration mismatch.
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash.replace("#", "");
    if (hash && CATEGORIES.some((c) => c.id === hash)) {
      const timer = setTimeout(() => {
        setActiveId(hash);
        scrollToCategory(hash, false);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [scrollToCategory]);

  /**
   * Handle browser history back/forward navigation (popstate).
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && CATEGORIES.some((c) => c.id === hash)) {
        setActiveId(hash);
        scrollToCategory(hash, false);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [scrollToCategory]);

  /**
   * Automatically scroll the horizontal navigation container to keep the active item
   * comfortably centered with visible padding on both edges. Does not scroll the entire page.
   */
  useEffect(() => {
    if (!activeId) return;

    const activeEl = itemRefs.current[activeId];
    const container = navRef.current;
    if (!activeEl || !container) return;

    const containerWidth = container.clientWidth;
    const activeLeft = activeEl.offsetLeft;
    const activeWidth = activeEl.offsetWidth;

    const targetScrollLeft = activeLeft - containerWidth / 2 + activeWidth / 2;
    const maxScrollLeft = container.scrollWidth - containerWidth;
    const clampedScroll = Math.max(0, Math.min(targetScrollLeft, maxScrollLeft));

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    container.scrollTo({
      left: clampedScroll,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }, [activeId]);

  /**
   * Navigation click handler
   */
  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveId(id);
    scrollToCategory(id, true);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "sticky top-16 z-30 w-full py-2.5 sm:py-3 bg-background/95 backdrop-blur-md border-b border-border transition-colors",
        className
      )}
    >
      <div className="container flex justify-center">
        {/* Accessible screen-reader heading for semantic outline */}
        <h2 className="sr-only">{t("featuresGrid.eyebrow")}</h2>

        {/* Centered pill-style navigation bar */}
        <nav
          ref={navRef}
          aria-label="Feature categories"
          className="inline-flex max-w-full items-center gap-1 rounded-full border border-border bg-card p-1 shadow-xs overflow-x-auto no-scrollbar scroll-smooth"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeId === cat.id;
            return (
              <a
                key={cat.id}
                ref={(el) => {
                  itemRefs.current[cat.id] = el;
                }}
                href={cat.href}
                onClick={(e) => handleCategoryClick(e, cat.id)}
                className={cn(
                  "inline-flex items-center justify-center rounded-full px-3 sm:px-3.5 py-1.5 text-xs whitespace-nowrap transition-all duration-200 select-none",
                  "focus-visible:outline-2 focus-visible:outline-ring",
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/70 font-medium border border-transparent"
                )}
                aria-current={isActive ? "location" : undefined}
              >
                <span>{t(cat.nameKey)}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
