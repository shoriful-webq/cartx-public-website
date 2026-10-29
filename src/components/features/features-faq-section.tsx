"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "@/components/Home/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  questionKey: string;
  answerKey: string;
  linkHref?: string;
  linkTextKey?: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "features-offer",
    questionKey: "featuresFaq.q1",
    answerKey: "featuresFaq.a1",
    linkHref: "#feature-categories",
    linkTextKey: "featuresFaq.link1",
  },
  {
    id: "features-included-plans",
    questionKey: "featuresFaq.q2",
    answerKey: "featuresFaq.a2",
    linkHref: "#plan-availability",
    linkTextKey: "featuresFaq.link2",
  },
  {
    id: "upgrade-plan",
    questionKey: "featuresFaq.q3",
    answerKey: "featuresFaq.a3",
    linkHref: "/pricing",
    linkTextKey: "featuresFaq.link3",
  },
  {
    id: "payment-methods",
    questionKey: "featuresFaq.q4",
    answerKey: "featuresFaq.a4",
    linkHref: "#payments",
    linkTextKey: "featuresFaq.link4",
  },
  {
    id: "courier-integrations",
    questionKey: "featuresFaq.q5",
    answerKey: "featuresFaq.a5",
    linkHref: "#shipping",
    linkTextKey: "featuresFaq.link5",
  },
  {
    id: "branded-mobile-apps",
    questionKey: "featuresFaq.q6",
    answerKey: "featuresFaq.a6",
    linkHref: "/white-label-apps",
    linkTextKey: "featuresFaq.link6",
  },
  {
    id: "country-availability",
    questionKey: "featuresFaq.q7",
    answerKey: "featuresFaq.a7",
    linkHref: "/contact",
    linkTextKey: "featuresFaq.link7",
  },
  {
    id: "custom-domain",
    questionKey: "featuresFaq.q8",
    answerKey: "featuresFaq.a8",
    linkHref: "#storefront",
    linkTextKey: "featuresFaq.link8",
  },
  {
    id: "feature-limits",
    questionKey: "featuresFaq.q9",
    answerKey: "featuresFaq.a9",
    linkHref: "/pricing",
    linkTextKey: "featuresFaq.link9",
  },
  {
    id: "pricing-information",
    questionKey: "featuresFaq.q10",
    answerKey: "featuresFaq.a10",
    linkHref: "/pricing",
    linkTextKey: "featuresFaq.link10",
  },
];

export interface FeaturesFAQSectionProps {
  className?: string;
}

export function FeaturesFAQSection({ className }: FeaturesFAQSectionProps) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="features-faq"
      aria-label="Features Frequently Asked Questions"
      className={cn("section-padding bg-background border-b border-border transition-colors", className)}
    >
      <div className="container">
        {/* ── Section Heading ── */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={t("featuresFaq.eyebrow")}
            eyebrowIcon={HelpCircle}
            title={t("featuresFaq.title")}
            titleGradient={true}
            description={t("featuresFaq.description")}
            size="default"
            className="mb-10 sm:mb-12 lg:mb-14"
          />
        </ScrollReveal>

        {/* ── 10 Accordion Items ── */}
        <div className="max-w-4xl mx-auto space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-answer-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              <ScrollReveal key={faq.id} delay={Math.min(idx * 30, 250)}>
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
