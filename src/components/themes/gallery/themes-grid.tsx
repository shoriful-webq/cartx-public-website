"use client";

import React from "react";
import { SearchX, RotateCcw } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ThemeCard } from "./theme-card";
import { ThemeItem } from "../types";
import { cn } from "@/lib/utils";

export interface ThemesGridProps {
  themes: ThemeItem[];
  onResetFilters: () => void;
  className?: string;
}

export function ThemesGrid({ themes, onResetFilters, className }: ThemesGridProps) {
  const { locale } = useLanguage();

  if (themes.length === 0) {
    return (
      <div
        id="theme-grid"
        className={cn(
          "py-16 sm:py-20 text-center rounded-2xl border border-dashed border-border bg-card/40 my-8",
          className
        )}
      >
        <div className="size-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground mx-auto mb-4">
          <SearchX className="size-6" />
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
          {locale === "bn" ? "কোনো থিম খুঁজে পাওয়া যায়নি" : "No Matching Themes Found"}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto mb-5">
          {locale === "bn"
            ? "আপনার নির্বাচিত সার্চ কিওয়ার্ড বা ফিল্টারের সাথে কোনো থিম মেলেনি। ফিল্টার রিসেট করে পুনরায় চেষ্টা করুন।"
            : "No themes matched your selected search criteria or filters. Try adjusting your search or reset all filters."}
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-hover shadow-xs transition-colors"
        >
          <RotateCcw className="size-3.5" />
          <span>{locale === "bn" ? "সকল ফিল্টার রিসেট করুন" : "Reset All Filters"}</span>
        </button>
      </div>
    );
  }

  return (
    <div id="theme-grid" className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7", className)}>
      {themes.map((theme, index) => (
        <ScrollReveal key={theme.slug} delay={(index % 3) * 80}>
          <ThemeCard theme={theme} />
        </ScrollReveal>
      ))}
    </div>
  );
}

