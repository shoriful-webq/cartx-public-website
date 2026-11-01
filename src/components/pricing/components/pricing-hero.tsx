"use client";

import React from "react";
import { CreditCard } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BillingPeriod } from "../types/pricing.types";
import { BillingToggle } from "./billing-toggle";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface PricingHeroProps {
  billingPeriod: BillingPeriod;
  onPeriodChange: (period: BillingPeriod) => void;
  className?: string;
}

export function PricingHero({
  billingPeriod,
  onPeriodChange,
  className,
}: PricingHeroProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Pricing Hero"
      className={cn(
        "bg-[#F8FAFC]/50 dark:bg-background pt-12 sm:pt-16 pb-4 transition-colors",
        className
      )}
    >
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center flex flex-col items-center">
          <ScrollReveal delay={0}>
            {/* Small Understated Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-900 text-[#2563EB] dark:text-blue-400 text-xs font-semibold mb-3">
              <CreditCard className="h-3.5 w-3.5" />
              <span>{isBn ? "স্বচ্ছ মূল্যতালিকা" : "Transparent Pricing"}</span>
            </div>

            {/* Main H1 Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0F172A] dark:text-foreground leading-tight mb-3">
              <span className="brand-gradient-text">
                {isBn
                  ? "আপনার অনলাইন ব্যবসার জন্য সহজ ও স্বচ্ছ মূল্যতালিকা"
                  : "Simple, Transparent Pricing for Your Online Business."}
              </span>
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-sm sm:text-base text-[#475569] dark:text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
              {isBn
                ? "আপনার স্টোরের প্রয়োজনীয়তা, দলের আকার ও বৈশিষ্ট্যের ওপর ভিত্তি করে সঠিক প্ল্যানটি বেছে নিন।"
                : "Choose a plan based on your store's needs, team size and required features."}
            </p>

            {/* Monthly / Yearly Billing Selector positioned near headline and cards */}
            <BillingToggle
              billingPeriod={billingPeriod}
              onPeriodChange={onPeriodChange}
              yearlyDiscountPercentage={17}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
