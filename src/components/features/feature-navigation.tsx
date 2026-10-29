"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Store,
  Package,
  ShoppingBag,
  Boxes,
  Users,
  CreditCard,
  Truck,
  Percent,
  BarChart3,
  Smartphone,
  Layers,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";

interface NavCategory {
  id: string;
  nameKey: string;
  href: string;
  icon: LucideIcon;
}

const CATEGORIES: NavCategory[] = [
  { id: "storefront", nameKey: "featuresNav.storefront", href: "#storefront", icon: Store },
  { id: "products", nameKey: "featuresNav.products", href: "#products", icon: Package },
  { id: "orders", nameKey: "featuresNav.orders", href: "#orders", icon: ShoppingBag },
  { id: "inventory", nameKey: "featuresNav.inventory", href: "#inventory", icon: Boxes },
  { id: "customers", nameKey: "featuresNav.customers", href: "#customers", icon: Users },
  { id: "payments", nameKey: "featuresNav.payments", href: "#payments", icon: CreditCard },
  { id: "shipping", nameKey: "featuresNav.shipping", href: "#shipping", icon: Truck },
  { id: "marketing", nameKey: "featuresNav.marketing", href: "#marketing", icon: Percent },
  { id: "analytics", nameKey: "featuresNav.analytics", href: "#analytics", icon: BarChart3 },
  { id: "mobile-apps", nameKey: "featuresNav.mobileApps", href: "#mobile-apps", icon: Smartphone },
  { id: "integrations", nameKey: "featuresNav.integrations", href: "#integrations", icon: Layers },
  { id: "security", nameKey: "featuresNav.security", href: "#security", icon: ShieldCheck },
];

export interface FeatureNavigationProps {
  className?: string;
}

export function FeatureNavigation({ className }: FeatureNavigationProps) {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>("storefront");
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently active based on scroll position
      const scrollY = window.scrollY;
      const headerOffset = 140; // 64px header + 52px nav + buffer

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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gently scroll active pill into view in the horizontal bar when activeId changes
  useEffect(() => {
    const activeEl = itemRefs.current[activeId];
    if (activeEl && navRef.current) {
      const container = navRef.current;
      const left = activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2;
      container.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    }
  }, [activeId]);

  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveId(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      // Update browser history cleanly without jumping
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div
      className={cn(
        "sticky top-16 z-30 w-full border-b border-border bg-card/95 backdrop-blur-md transition-colors",
        className
      )}
    >
      <div className="container">
        <nav
          ref={navRef}
          aria-label="Feature categories navigation"
          className="flex items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar scroll-smooth"
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
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
                  "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs whitespace-nowrap transition-all duration-150 select-none",
                  "focus-visible:outline-2 focus-visible:outline-ring",
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/80 font-medium"
                )}
                aria-current={isActive ? "true" : undefined}
              >
                <Icon className={cn("size-3.5 shrink-0", isActive ? "text-primary-foreground" : "text-primary")} />
                <span>{t(cat.nameKey)}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

