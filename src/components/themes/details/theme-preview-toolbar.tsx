"use client";

import React from "react";
import { Monitor, Smartphone, Lock, Layout, ShoppingBag, Eye, CreditCard } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";

export type ViewportMode = "desktop" | "mobile";
export type PreviewTab = "homepage" | "listing" | "details" | "checkout";

export interface ThemePreviewToolbarProps {
  viewportMode: ViewportMode;
  onViewportChange: (mode: ViewportMode) => void;
  activeTab: PreviewTab;
  onTabChange: (tab: PreviewTab) => void;
  domain: string;
  className?: string;
}

export function ThemePreviewToolbar({
  viewportMode,
  onViewportChange,
  activeTab,
  onTabChange,
  domain,
  className,
}: ThemePreviewToolbarProps) {
  const { locale } = useLanguage();

  const tabs: { id: PreviewTab; label: { en: string; bn: string }; icon: typeof Layout }[] = [
    { id: "homepage", label: { en: "Homepage", bn: "হোমপেজ" }, icon: Layout },
    { id: "listing", label: { en: "Collection Grid", bn: "কালেকশন গ্রিড" }, icon: ShoppingBag },
    { id: "details", label: { en: "Product Page", bn: "প্রোডাক্ট পেজ" }, icon: Eye },
    { id: "checkout", label: { en: "Cart & Checkout", bn: "চেকআউট ফ্লো" }, icon: CreditCard },
  ];

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-3 sm:p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 select-none",
        className
      )}
    >
      {/* 1. Preview Viewport Mode Toggle (Desktop vs Mobile) */}
      <div className="flex items-center gap-1 bg-muted p-1 rounded-xl border border-border/60 w-full sm:w-auto justify-center">
        <button
          type="button"
          onClick={() => onViewportChange("desktop")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200",
            viewportMode === "desktop"
              ? "bg-background text-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-pressed={viewportMode === "desktop"}
          aria-label="Desktop Preview Mode"
        >
          <Monitor className="size-3.5" />
          <span>{locale === "bn" ? "ডেস্কটপ ভিউ" : "Desktop View"}</span>
        </button>

        <button
          type="button"
          onClick={() => onViewportChange("mobile")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200",
            viewportMode === "mobile"
              ? "bg-background text-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-pressed={viewportMode === "mobile"}
          aria-label="Mobile Preview Mode"
        >
          <Smartphone className="size-3.5" />
          <span>{locale === "bn" ? "মোবাইল ভিউ" : "Mobile View"}</span>
        </button>
      </div>

      {/* 2. Simulated Domain Bar */}
      <div className="hidden lg:flex items-center gap-2 bg-background px-3 py-1.5 rounded-lg border border-border/60 text-xs text-muted-foreground font-mono">
        <Lock className="size-3 text-emerald-600 shrink-0" />
        <span className="truncate max-w-[220px]">{domain}</span>
      </div>

      {/* 3. Preview Sections Navigation (Homepage, Listing, Details, Checkout) */}
      <div
        role="tablist"
        aria-label="Theme Section Previews"
        className="flex items-center flex-wrap gap-1 bg-muted/60 p-1 rounded-xl border border-border/60 w-full sm:w-auto justify-center"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <Icon className="size-3.5 shrink-0" />
              <span>{tab.label[locale] || tab.label.en}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

