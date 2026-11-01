"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { PricingFAQItem } from "../types/pricing.types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface PricingFAQProps {
  faqs: PricingFAQItem[];
  className?: string;
}

export function PricingFAQ({ faqs, className }: PricingFAQProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [faqs[0]?.id || ""]: true,
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="pricing-faq"
      aria-label="Frequently Asked Questions About Pricing"
      className={cn("py-16 sm:py-24 border-b border-border bg-background", className)}
    >
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0}>
          {/* Section Eyebrow & Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>{isBn ? "প্রয়োজনীয় প্রশ্নোত্তর" : "Billing FAQ"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              <span className="brand-gradient-text">
                {isBn
                  ? "মূল্যতালিকা ও বিলিং সংক্রান্ত সাধারণ প্রশ্নাবলী"
                  : "Frequently Asked Questions About Pricing & Plans"}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {isBn
                ? "বিলিং চক্র, আপগ্রেড পলিসি এবং অতিরিক্ত চার্জ সম্পর্কে আপনার যাবতীয় প্রশ্নের উত্তর।"
                : "Clear answers to common questions about subscription billing, trials, plan limits, and add-ons."}
            </p>
          </div>

          {/* Accordion FAQ Items */}
          <div className="space-y-3.5">
            {faqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs transition-all hover:border-primary/40"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-muted/30 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-foreground pr-4">
                      {faq.question[isBn ? "bn" : "en"]}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200",
                        isOpen && "rotate-180 text-primary"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40">
                      <div className="pt-4">{faq.answer[isBn ? "bn" : "en"]}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

