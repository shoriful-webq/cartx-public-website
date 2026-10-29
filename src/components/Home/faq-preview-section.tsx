"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface FAQItem {
  id: string;
  questionKey: string;
  answerKey: string;
  linkHref?: string;
  linkText?: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "what-is-cartx",
    questionKey: "faqPreview.q1",
    answerKey: "faqPreview.a1",
    linkHref: "/features",
    linkText: "Explore platform features",
  },
  {
    id: "who-can-use",
    questionKey: "faqPreview.q2",
    answerKey: "faqPreview.a2",
    linkHref: "/solutions",
    linkText: "View retail solutions",
  },
  {
    id: "custom-domain",
    questionKey: "faqPreview.q3",
    answerKey: "faqPreview.a3",
    linkHref: "/features",
    linkText: "Storefront capabilities",
  },
  {
    id: "manage-products-orders",
    questionKey: "faqPreview.q4",
    answerKey: "faqPreview.a4",
    linkHref: "/features/order-management",
    linkText: "Order management details",
  },
  {
    id: "payment-methods",
    questionKey: "faqPreview.q5",
    answerKey: "faqPreview.a5",
    linkHref: "/integrations",
    linkText: "Payment ecosystem overview",
  },
  {
    id: "couriers-supported",
    questionKey: "faqPreview.q6",
    answerKey: "faqPreview.a6",
    linkHref: "/integrations",
    linkText: "Logistics integrations",
  },
  {
    id: "mobile-apps",
    questionKey: "faqPreview.q7",
    answerKey: "faqPreview.a7",
    linkHref: "/white-label-apps",
    linkText: "White-label app options",
  },
  {
    id: "cancel-subscription",
    questionKey: "faqPreview.q8",
    answerKey: "faqPreview.a8",
    linkHref: "/pricing",
    linkText: "Subscription details",
  },
  {
    id: "contact-support",
    questionKey: "faqPreview.q9",
    answerKey: "faqPreview.a9",
    linkHref: "/contact",
    linkText: "Contact support team",
  },
];

export interface FAQPreviewSectionProps {
  className?: string;
}

export function FAQPreviewSection({ className }: FAQPreviewSectionProps) {
  const { t, locale } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className={cn(
        "relative section-padding border-b border-border bg-background transition-colors overflow-hidden",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            eyebrow={t("faqPreview.badge")}
            eyebrowIcon={HelpCircle}
            title={t("faqPreview.title")}
            titleGradient={true}
            description={t("faqPreview.description")}
            size="default"
            className="mb-10 sm:mb-12 lg:mb-14"
          />
        </ScrollReveal>

        {/* ── Accessible Accordion Layout ── */}
        <ScrollReveal direction="up" delay={100}>
          <div className="max-w-4xl mx-auto space-y-3 mb-10 sm:mb-12">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const contentId = `faq-answer-${faq.id}`;
              const headerId = `faq-header-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className={cn(
                    "rounded-xl border transition-all duration-200 overflow-hidden",
                    isOpen
                      ? "border-primary/40 bg-card shadow-xs"
                      : "border-border bg-card/60 hover:border-border/90"
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
                      className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-muted-foreground leading-relaxed animate-in fade-in-50 duration-150 border-t border-border/40 mt-1"
                    >
                      <p className="pt-3">{t(faq.answerKey)}</p>

                      {faq.linkHref && (
                        <div className="mt-3 pt-2">
                          <Link
                            href={faq.linkHref}
                            className="inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-hover hover:underline text-xs"
                          >
                            <span>{faq.linkText}</span>
                            <ArrowUpRight className="size-3" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ── Section CTA: Visit Help Center ── */}
        <ScrollReveal direction="up" delay={200}>
          <div className="flex justify-center">
            <CTAButton
              action="visitHelpCenter"
              variant="primary"
              locale={locale}
              size="lg"
              showArrow
              className="px-7 py-3 text-sm rounded-lg shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

