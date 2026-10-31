"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "@/components/Home/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SOLUTIONS_FAQS } from "./solutions-data";
import { cn } from "@/lib/utils";

export interface SolutionsFAQSectionProps {
  className?: string;
}

export function SolutionsFAQSection({ className }: SolutionsFAQSectionProps) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="solutions-faq"
      aria-label="Solutions FAQ"
      className={cn("section-padding bg-background border-b border-border transition-colors", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={t("solutionsFaq.eyebrow")}
            eyebrowIcon={HelpCircle}
            title={t("solutionsFaq.title")}
            titleGradient={true}
            description={t("solutionsFaq.description")}
            size="default"
            className="mb-10 sm:mb-12 lg:mb-14"
          />
        </ScrollReveal>

        {/* 8 Accordion FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-3">
          {SOLUTIONS_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `solutions-faq-answer-${faq.id}`;
            const headerId = `solutions-faq-header-${faq.id}`;

            return (
              <ScrollReveal key={faq.id} delay={Math.min(idx * 30, 240)}>
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
                      {t(faq.questionKey)}
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
                      <p className="pt-3">{t(faq.answerKey)}</p>

                      {faq.linkHref && faq.linkTextKey && (
                        <div className="mt-3 pt-2">
                          <Link
                            href={faq.linkHref}
                            className="inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-hover hover:underline text-xs"
                          >
                            <span>{t(faq.linkTextKey)}</span>
                            <ArrowUpRight className="size-3" />
                          </Link>
                        </div>
                      )}
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

