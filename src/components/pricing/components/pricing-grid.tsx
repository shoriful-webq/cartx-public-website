"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BillingPeriod, PricingPlan } from "../types/pricing.types";
import { PricingCard } from "./pricing-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface PricingGridProps {
  plans: PricingPlan[];
  billingPeriod: BillingPeriod;
  className?: string;
}

export function PricingGrid({
  plans,
  billingPeriod,
  className,
}: PricingGridProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const trustHighlights = [
    {
      icon: CheckCircle2,
      label: isBn ? "১৪ দিনের ফ্রি ট্রায়াল" : "14-Day Free Trial",
    },
    {
      icon: ShieldCheck,
      label: isBn ? "কোনো ক্রেডিট কার্ডের প্রয়োজন নেই" : "No Credit Card Required",
    },
    {
      icon: Zap,
      label: isBn ? "০% লেনদেন কমিশন" : "0% Platform Commission",
    },
  ];

  return (
    <section
      id="plans-grid"
      aria-label="Available Subscription Plans"
      className={cn("pt-4 pb-16 sm:pb-24 border-b border-[#E2E8F0] dark:border-border bg-[#F8FAFC]/50 dark:bg-background", className)}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* All Four Pricing Cards in One Single Row on Desktop (lg:grid-cols-4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5 items-stretch">
          {plans.map((plan, idx) => (
            <ScrollReveal
              key={plan.id}
              delay={Math.min(idx * 50, 200)}
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

        {/* Micro Trust Strip below cards */}
        <div className="mt-10 pt-6 border-t border-[#E2E8F0] dark:border-border/60 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#475569] dark:text-muted-foreground">
          {trustHighlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2 font-medium">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] dark:text-blue-400">
                  <IconComponent className="h-3 w-3" />
                </div>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
