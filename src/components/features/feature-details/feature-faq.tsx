"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { FeatureDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface FeatureFAQProps {
  feature: FeatureDetailConfig;
  className?: string;
}

export function FeatureFAQ({ feature, className }: FeatureFAQProps) {
  const { locale } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className={cn(
        "section-padding bg-background border-b border-border transition-colors",
        className
      )}
    >
      <div className="container max-w-4xl">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={locale === "bn" ? "সাধারণ জিজ্ঞাসা" : "FREQUENTLY ASKED QUESTIONS"}
            eyebrowIcon={HelpCircle}
            title={
              locale === "bn"
                ? `${feature.name[locale] || feature.name.en} সম্পর্কিত প্রশ্নোত্তর`
                : `Frequently Asked Questions About ${feature.name.en}`
            }
            titleGradient={true}
            description={
              locale === "bn"
                ? "এই ফিচারটির ব্যবহার ও সক্ষমতা সম্পর্কিত প্রয়োজনীয় সকল প্রশ্নের স্পষ্ট উত্তর।"
                : "Find clear answers regarding platform functionality, plan availability, and routine workflows."
            }
            size="default"
            className="mb-10 sm:mb-12 text-center"
          />
        </ScrollReveal>

        {/* Accordion List */}
        <div className="space-y-3">
          {feature.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-answer-${feature.slug}-${idx}`;
            const headerId = `faq-header-${feature.slug}-${idx}`;

            return (
              <ScrollReveal key={faq.id || idx} delay={idx * 30}>
                <div
                  className={cn(
                    "rounded-xl border transition-all duration-200 overflow-hidden",
                    isOpen
                      ? "border-primary/40 bg-card shadow-xs"
                      : "border-border bg-card/60 hover:border-border/90 hover:bg-card"
                  )}
                >
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleFAQ(idx)}
                    className="flex w-full items-center justify-between p-4 sm:p-5 text-left focus-visible:outline-2 focus-visible:outline-ring transition-colors gap-3 select-none"
                  >
                    <span className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                      {faq.question[locale] || faq.question.en}
                    </span>
                    <div
                      className={cn(
                        "size-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200",
                        isOpen
                          ? "bg-primary text-primary-foreground rotate-180"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      <ChevronDown className="size-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 mt-1"
                    >
                      <p>{faq.answer[locale] || faq.answer.en}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

