"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { FeatureDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface FeatureBenefitsProps {
  feature: FeatureDetailConfig;
  className?: string;
}

export function FeatureBenefits({ feature, className }: FeatureBenefitsProps) {
  const { locale } = useLanguage();

  return (
    <section
      aria-label="Business Benefits"
      className={cn(
        "section-padding bg-card/30 border-b border-border transition-colors",
        className
      )}
    >
      <div className="container">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={locale === "bn" ? "ব্যবসায়িক সুফল" : "BUSINESS IMPACT"}
            eyebrowIcon={TrendingUp}
            title={
              locale === "bn"
                ? "পরিমাপযোগ্য উন্নতি ও ব্যবসায়িক সাফল্য"
                : "Measurable Results for Your Business"
            }
            titleGradient={true}
            description={
              locale === "bn"
                ? "ম্যানুয়াল ভুলভ্রান্তি কমিয়ে কীভাবে আপনার ব্র্যান্ডের প্রবৃদ্ধি ত্বরান্বিত করবেন।"
                : "Designed to drive higher conversion rates, protect customer trust, and reclaim valuable hours."
            }
            size="default"
            className="mb-10 sm:mb-14 text-center"
          />
        </ScrollReveal>

        {/* 4 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {feature.benefits.map((benefit, idx) => {
            const BIcon = benefit.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-2xs hover:shadow-card transition-all duration-300 flex items-start gap-4">
                  <div className="size-11 rounded-xl bg-success/10 text-success flex items-center justify-center shrink-0 mt-1">
                    <BIcon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 leading-snug">
                      {benefit.title[locale] || benefit.title.en}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {benefit.description[locale] || benefit.description.en}
                    </p>
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

