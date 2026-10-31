"use client";

import React from "react";
import { Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { FeatureDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface FeatureExplanationProps {
  feature: FeatureDetailConfig;
  className?: string;
}

export function FeatureExplanation({ feature, className }: FeatureExplanationProps) {
  const { locale } = useLanguage();
  const exp = feature.explanation;
  const Icon = feature.icon;

  return (
    <section
      aria-label="The CartX Approach"
      className={cn(
        "section-padding bg-background border-b border-border transition-colors",
        className
      )}
    >
      <div className="container max-w-4xl text-center">
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={exp.eyebrow[locale] || exp.eyebrow.en}
            eyebrowIcon={Icon || Zap}
            title={exp.title[locale] || exp.title.en}
            titleGradient={true}
            description={exp.description[locale] || exp.description.en}
            size="default"
            className="mb-6"
          />

          {exp.highlightPill && (
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.04] px-4 py-1.5 text-xs font-semibold text-primary select-none mt-2">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span>{exp.highlightPill[locale] || exp.highlightPill.en}</span>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}

