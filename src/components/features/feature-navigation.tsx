"use client";

import React, { useState, useEffect, useRef } from "react";
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

export interface FeatureNavigationProps {
  className?: string;
}

/**
 * Section 02 — Sticky Feature Navigation
 * Minimal horizontal pill-style navigation inside a subtle bordered container.
 * Sticky beneath the shared Header with clean active highlights and horizontal scroll support.
 */
export function FeatureNavigation({ className }: FeatureNavigationProps) {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>("storefront");
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    let isThrottled = false;

    const handleScroll = () => {
      if (isThrottled) return;
      isThrottled = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const headerOffset = 160; // 64px header + sticky nav height + buffer

        let currentActive = CATEGORIES[0].id;
        for (const cat of CATEGORIES) {
          const el = document.getElementById(cat.id);
          if (el) {
            const top = el.getBoundingClientRect().top + scrollY - headerOffset;
            if (scrollY >= top - 20) {
              currentActive = cat.id;
            }
          }
        }
        setActiveId(currentActive);
        isThrottled = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Center the active pill within the scrollable container on mobile/tablet
  useEffect(() => {
    const activeEl = itemRefs.current[activeId];
    if (activeEl && navRef.current) {
      const container = navRef.current;
      const containerWidth = container.offsetWidth;
      const activeLeft = activeEl.offsetLeft;
      const activeWidth = activeEl.offsetWidth;
      const targetScroll = activeLeft - containerWidth / 2 + activeWidth / 2;
      container.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
    }
  }, [activeId]);

  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveId(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div
      className={cn(
        "sticky top-16 z-30 w-full py-2.5 sm:py-3 bg-background/95 border-b border-border transition-colors",
        className
      )}
    >
      <div className="container flex justify-center">
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
                  "inline-flex items-center justify-center rounded-full px-3 sm:px-3.5 py-1.5 text-xs whitespace-nowrap transition-colors duration-150 select-none",
                  "focus-visible:outline-2 focus-visible:outline-ring",
                  isActive
                    ? "bg-primary/10 text-primary font-semibold border border-primary/20 shadow-2xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60 font-medium border border-transparent"
                )}
                aria-current={isActive ? "true" : undefined}
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
