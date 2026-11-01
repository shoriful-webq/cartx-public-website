"use client";

import React from "react";
import { Info, Layers } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BillingPeriod, PricingPlan } from "../types/pricing.types";
import { PricingCard } from "./pricing-card";
import { BillingToggle } from "./billing-toggle";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface PricingGridProps {
  plans: PricingPlan[];
  billingPeriod: BillingPeriod;
  onPeriodChange: (period: BillingPeriod) => void;
  className?: string;
}

export function PricingGrid({
  plans,
  billingPeriod,
  onPeriodChange,
  className,
}: PricingGridProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      id="plans-grid"
      aria-label="Available Subscription Plans"
      className={cn("py-12 sm:py-16 border-b border-border bg-background", className)}
    >
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header & Consolidated Billing Toggle */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
              <Layers className="h-3.5 w-3.5" />
              <span>{isBn ? "সাবস্ক্রিপশন প্ল্যানসমূহ" : "Subscription Tiers"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              <span className="brand-gradient-text">
                {isBn
                  ? "আপনার ব্যবসায়ের স্কেল অনুযায়ী সঠিক প্ল্যান"
                  : "Find the Perfect Tier for Your Journey"}
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto mb-5">
              {isBn
                ? "স্বচ্ছ ও সহজ সাবস্ক্রিপশন। সকল রিটেইল প্ল্যানে ১৪ দিনের ফ্রি ট্রায়াল অন্তর্ভুক্ত, ০% লেনদেন কমিশন।"
                : "Transparent subscription tiers. Every retail plan includes a 14-day free trial with zero platform commission."}
            </p>

            {/* Commercial Status Notice */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3.5 py-1 text-xs text-muted-foreground shadow-xs mb-6">
              <Info className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>
                {isBn
                  ? "১৪ দিনের ফ্রি ট্রায়াল • কোনো ক্রেডিট কার্ডের প্রয়োজন নেই"
                  : "14-day risk-free trial on retail tiers • No credit card required"}
              </span>
            </div>

            {/* Billing Toggle (Section 02) */}
            <BillingToggle
              billingPeriod={billingPeriod}
              onPeriodChange={onPeriodChange}
              yearlyDiscountPercentage={17}
            />
          </ScrollReveal>
        </div>

        {/* 4 Plans in Exactly 2 Cards Per Row (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <ScrollReveal
              key={plan.id}
              delay={Math.min(idx * 60, 240)}
              className="h-full flex"
            >
              <PricingCard
                plan={plan}
                billingPeriod={billingPeriod}
                className="w-full h-full"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
