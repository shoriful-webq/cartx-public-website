"use client";

import React from "react";
import { CreditCard } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BillingPeriod } from "../types/pricing.types";
import { BillingToggle } from "./billing-toggle";
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
        "pt-14 sm:pt-20 pb-8 sm:pb-10 transition-colors",
        className
      )}
    >
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center flex flex-col items-center">
          {/* Small Understated Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/60 text-[#2563EB] dark:text-blue-400 text-xs font-semibold mb-4 shadow-2xs">
            <CreditCard className="h-3.5 w-3.5" />
            <span>{isBn ? "স্বচ্ছ মূল্যতালিকা" : "Transparent Pricing"}</span>
          </div>

          {/* Main H1 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.15] mb-4">
            <span className="brand-gradient-text">
              {isBn
                ? "আপনার অনলাইন ব্যবসার জন্য সহজ ও স্বচ্ছ মূল্যতালিকা"
                : "Simple, Transparent Pricing for Your Online Business."}
            </span>
          </h1>

          {/* Concise Supporting Copy */}
          <p className="text-base sm:text-lg text-[#475569] dark:text-slate-400 leading-relaxed max-w-xl mx-auto mb-8">
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
        </div>
      </div>
    </section>
  );
}
