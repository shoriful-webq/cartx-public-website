"use client";

import React from "react";
import { Info } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { FeatureDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface FeatureProductVisualProps {
  feature: FeatureDetailConfig;
  className?: string;
}

export function FeatureProductVisual({
  feature,
  className,
}: FeatureProductVisualProps) {
  const { locale, t } = useLanguage();
  const Icon = feature.icon;

  return (
    <section
      aria-label="Interactive Product Preview"
      className={cn(
        "section-padding bg-background border-b border-border transition-colors relative overflow-hidden",
        className
      )}
    >
      <div className="container max-w-5xl">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={locale === "bn" ? "ড্যাশবোর্ড ইন্টারফেস" : "PRODUCT INTERFACE"}
            eyebrowIcon={Icon}
            title={feature.visual.title[locale] || feature.visual.title.en}
            titleGradient={true}
            description={feature.visual.caption[locale] || feature.visual.caption.en}
            size="default"
            className="mb-8 sm:mb-12 text-center"
          />
        </ScrollReveal>

        {/* Mockup Frame Container with subtle ambient glow */}
        <ScrollReveal delay={80}>
          <div className="relative mx-auto max-w-4xl">
            {/* Subtle soft glow */}
            <div className="absolute -inset-4 rounded-3xl bg-primary/[0.04] blur-2xl pointer-events-none" />

            <div className="relative shadow-dropdown rounded-2xl overflow-hidden">
              {feature.visual.render(t)}
            </div>

            {/* Explanatory demo notice callout below visual */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Info className="size-3.5 text-primary shrink-0" />
              <span>
                {locale === "bn"
                  ? "চিত্রিত প্রিভিউটি নির্দেশনামূলক ডেমো ইন্টারফেসের নমুনা উপস্থাপন করে।"
                  : "Illustrative interface preview represents verified CartX workflow capabilities."}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

