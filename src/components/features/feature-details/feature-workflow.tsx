"use client";

import React from "react";
import { Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { FeatureDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface FeatureWorkflowProps {
  feature: FeatureDetailConfig;
  className?: string;
}

export function FeatureWorkflow({ feature, className }: FeatureWorkflowProps) {
  const { locale } = useLanguage();

  return (
    <section
      aria-label="How it works"
      className={cn(
        "section-padding bg-card/30 border-b border-border transition-colors",
        className
      )}
    >
      <div className="container">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={locale === "bn" ? "সহজ কার্যপদ্ধতি" : "HOW IT WORKS"}
            eyebrowIcon={Clock}
            title={
              locale === "bn"
                ? "মাত্র ৪টি সহজ ধাপে সম্পন্ন করুন"
                : "A Seamless 4-Step Operational Flow"
            }
            titleGradient={true}
            description={
              locale === "bn"
                ? "দৈনন্দিন কার্যক্রমে সময় বাঁচিয়ে কীভাবে নির্বিঘ্নে ফলাফল অর্জন করবেন তা জেনে নিন।"
                : "From initial setup to routine day-to-day operations, CartX simplifies your merchant journey."
            }
            size="default"
            className="mb-10 sm:mb-14 text-center"
          />
        </ScrollReveal>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {feature.workflow.map((step) => (
            <ScrollReveal key={step.stepNumber} delay={step.stepNumber * 60}>
              <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-2xs relative overflow-hidden flex flex-col">
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                    Step {step.stepNumber}
                  </span>
                  <span className="text-3xl font-extrabold text-muted-foreground/15 select-none">
                    0{step.stepNumber}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
                  {step.title[locale] || step.title.en}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
                  {step.description[locale] || step.description.en}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

