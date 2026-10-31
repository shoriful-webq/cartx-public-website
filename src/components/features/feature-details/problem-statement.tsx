"use client";

import React from "react";
import { AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { FeatureDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface ProblemStatementProps {
  feature: FeatureDetailConfig;
  className?: string;
}

export function ProblemStatement({ feature, className }: ProblemStatementProps) {
  const { locale } = useLanguage();
  const problem = feature.problem;

  return (
    <section
      aria-label="The Challenge"
      className={cn(
        "section-padding bg-card/30 border-b border-border transition-colors",
        className
      )}
    >
      <div className="container max-w-4xl">
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={problem.eyebrow[locale] || problem.eyebrow.en}
            eyebrowIcon={AlertCircle}
            title={problem.title[locale] || problem.title.en}
            titleGradient={false}
            description={problem.description[locale] || problem.description.en}
            size="default"
            className="mb-8 sm:mb-10 text-center"
          />

          {problem.bulletPoints && problem.bulletPoints.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {problem.bulletPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border/80 bg-card p-4 shadow-2xs flex items-start gap-3"
                >
                  <div className="size-6 rounded-full bg-error/10 text-error flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold font-mono">✕</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
                    {point[locale] || point.en}
                  </p>
                </div>
              ))}
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}

