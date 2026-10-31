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
import { THEME_FEATURES } from "../themes-data";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  Smartphone,
  Eye,
  Compass,
  Palette,
  Layers,
  Search,
};

export interface ThemesFeaturesProps {
  className?: string;
}

export function ThemesFeatures({ className }: ThemesFeaturesProps) {
  const { locale } = useLanguage();

  return (
    <section
      id="theme-features"
      aria-label="Storefront Theme Features"
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-muted/20 relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <Layers className="size-3 text-secondary-accent shrink-0" />
              <span>
                {locale === "bn" ? "স্টোরফ্রন্ট সক্ষমতা" : "Storefront Capabilities"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance !mb-4 leading-tight">
              <span className="brand-gradient-text">
                {locale === "bn"
                  ? "কার্টএক্স থিমের মূল সুবিধাসমূহ"
                  : "Core Capabilities Built Into Every Theme"}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto">
              {locale === "bn"
                ? "আমাদের প্রতিটি থিম আধুনিক মোবাইল ক্রেতাদের অভিজ্ঞতা এবং উচ্চ কনভার্সন রেট নিশ্চিত করার জন্য বিশেষভাবে অপ্টিমাইজড।"
                : "Every CartX theme is purpose-built for high conversion rates, frictionless mobile checkouts, and effortless brand identity personalization."}
            </p>
          </ScrollReveal>
        </div>

        {/* 6 Feature Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {THEME_FEATURES.map((feature, index) => {
            const Icon = ICON_MAP[feature.iconName] || Layers;

            return (
              <ScrollReveal key={feature.id} delay={index * 60}>
                <div className="h-full flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-xs transition-all duration-200 hover:shadow-md hover:border-primary/40 group">
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
          })}
        </div>
      </div>
    </section>
  );
}

