"use client";

import React from "react";
import {
  Smartphone,
  Eye,
  Compass,
  Palette,
  Layers,
  Search,
  Check,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ThemeFeatureCategory } from "../types";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  Smartphone,
  Eye,
  Compass,
  Palette,
  Layers,
  Search,
};

export interface ThemeFeatureCardProps {
  feature: ThemeFeatureCategory;
  index: number;
  className?: string;
}

export function ThemeFeatureCard({ feature, index, className }: ThemeFeatureCardProps) {
  const { locale } = useLanguage();
  const Icon = ICON_MAP[feature.iconName] || Layers;

  return (
    <ScrollReveal delay={index * 60}>
      <div
        className={cn(
          "h-full flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-xs transition-all duration-200 hover:shadow-md hover:border-primary/40 group",
          className
        )}
      >
        <div>
          {/* Feature Icon Header */}
          <div className="size-11 rounded-lg bg-primary/[0.08] border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 mb-4">
            <Icon className="size-5 shrink-0" />
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
            {feature.title[locale] || feature.title.en}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
            {feature.description[locale] || feature.description.en}
          </p>
        </div>

        {/* Bullet points */}
        <div className="pt-4 border-t border-border/60 space-y-2">
          {feature.details.map((detail, dIdx) => (
            <div key={dIdx} className="flex items-start gap-2 text-xs text-foreground/90 leading-snug">
              <Check className="size-3.5 text-success shrink-0 mt-0.5" />
              <span>{detail[locale] || detail.en}</span>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

