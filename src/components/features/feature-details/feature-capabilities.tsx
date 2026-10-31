"use client";

import React from "react";
import { Sliders } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { FeatureDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface FeatureCapabilitiesProps {
  feature: FeatureDetailConfig;
  className?: string;
}

export function FeatureCapabilities({ feature, className }: FeatureCapabilitiesProps) {
  const { locale } = useLanguage();

  return (
    <section
      id="capabilities"
      aria-label="Capabilities"
      className={cn(
        "section-padding bg-background border-b border-border transition-colors scroll-mt-20",
        className
      )}
    >
      <div className="container">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={locale === "bn" ? "ফিচার সুবিধাসমূহ" : "CORE CAPABILITIES"}
            eyebrowIcon={Sliders}
            title={
              locale === "bn"
                ? "শক্তিশালী ও সুসংগঠিত টুলস"
                : "Engineered for Complete Precision"
            }
            titleGradient={true}
            description={
              locale === "bn"
                ? "আপনার অনলাইন স্টোর সফলভাবে পরিচালনা করার জন্য প্রয়োজনীয় সকল কার্যকরী সুবিধা।"
                : "Comprehensive tools designed to eliminate operational friction and accelerate growth."
            }
            size="default"
            className="mb-10 sm:mb-14 text-center"
          />
        </ScrollReveal>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {feature.capabilities.map((cap, idx) => {
            const CapIcon = cap.icon;
            return (
              <ScrollReveal key={idx} delay={Math.min(idx * 50, 300)}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-2xs hover:shadow-card hover:border-primary/40 transition-all duration-300 flex flex-col justify-start">
                  <div className="size-10 sm:size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-4">
                    <CapIcon className="size-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 leading-snug">
                    {cap.title[locale] || cap.title.en}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {cap.description[locale] || cap.description.en}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

