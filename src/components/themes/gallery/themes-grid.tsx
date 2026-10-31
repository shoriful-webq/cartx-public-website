"use client";

import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ThemeCard } from "./theme-card";
import { ThemeEmptyState } from "./theme-empty-state";
import { ThemeItem } from "../types";
import { cn } from "@/lib/utils";

export interface ThemesGridProps {
  themes: ThemeItem[];
  onResetFilters: () => void;
  className?: string;
}

export function ThemesGrid({ themes, onResetFilters, className }: ThemesGridProps) {
  if (themes.length === 0) {
    return <ThemeEmptyState onReset={onResetFilters} />;
  }

  return (
    <div
      id="theme-grid"
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7", className)}
    >
      {themes.map((theme, index) => (
        <ScrollReveal key={theme.slug} delay={(index % 3) * 80}>
          <ThemeCard theme={theme} />
        </ScrollReveal>
      ))}
    </div>
  );
}
