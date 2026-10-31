"use client";

import React from "react";
import { SearchX, RotateCcw } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";

export interface ThemeEmptyStateProps {
  onReset: () => void;
  className?: string;
}

export function ThemeEmptyState({ onReset, className }: ThemeEmptyStateProps) {
  const { locale } = useLanguage();

  return (
    <div
      id="theme-empty-state"
      className={cn(
        "py-16 sm:py-20 text-center rounded-2xl border border-dashed border-border bg-card/40 my-8 select-none",
        className
      )}
    >
      <div className="size-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground mx-auto mb-4">
        <SearchX className="size-6" />
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
        {locale === "bn" ? "কোনো থিম খুঁজে পাওয়া যায়নি" : "No Matching Themes Found"}
      </h3>
      <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto mb-5 leading-relaxed">
        {locale === "bn"
          ? "আপনার নির্বাচিত সার্চ কিওয়ার্ড বা ফিল্টারের সাথে কোনো থিম মেলেনি। ফিল্টার রিসেট করে পুনরায় চেষ্টা করুন।"
          : "No themes matched your selected search criteria or filters. Try adjusting your search or reset all filters."}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-hover shadow-xs transition-colors"
      >
        <RotateCcw className="size-3.5" />
        <span>{locale === "bn" ? "সকল ফিল্টার রিসেট করুন" : "Reset All Filters"}</span>
      </button>
    </div>
  );
}

