"use client";

import React, { useState } from "react";
import { CheckCircle2, Minus, Info } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ComparisonCategory, PricingPlan } from "../types/pricing.types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface MobilePlanComparisonProps {
  plans: PricingPlan[];
  categories: ComparisonCategory[];
  className?: string;
}

export function MobilePlanComparison({
  plans,
  categories,
  className,
}: MobilePlanComparisonProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const [selectedPlanId, setSelectedPlanId] = useState<string>("growth");

  const selectedPlan = plans.find((p) => p.id === selectedPlanId) || plans[1];

  const renderValue = (val: unknown) => {
    if (val === true) {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{isBn ? "অন্তর্ভুক্ত" : "Included"}</span>
        </span>
      );
    }
    if (val === false) {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/60">
          <Minus className="h-4 w-4 shrink-0" />
          <span>{isBn ? "প্রযোজ্য নয়" : "Not Included"}</span>
        </span>
      );
    }
    if (typeof val === "object" && val !== null && "en" in val && "bn" in val) {
      const locVal = val as { en: string; bn: string };
      return (
        <span className="text-xs font-semibold text-foreground">
          {locVal[isBn ? "bn" : "en"]}
        </span>
      );
    }
    return (
      <span className="text-xs font-medium text-foreground">
        {String(val)}
      </span>
    );
  };

  return (
    <div className={cn("block lg:hidden space-y-6", className)}>
      {/* Plan Selector Pills with ScrollReveal */}
      <ScrollReveal direction="up" delay={50} className="w-full">
        <div className="flex items-center justify-start gap-2 overflow-x-auto pb-2 scrollbar-none">
          {plans.map((plan) => {
            const isSelected = plan.id === selectedPlanId;
            return (
              <button
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap border cursor-pointer active:scale-95 motion-reduce:transform-none",
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-muted/50 text-muted-foreground border-border hover:bg-muted"
                )}
              >
                {plan.name[isBn ? "bn" : "en"]}
                {plan.highlighted && ` (${isBn ? "পপুলার" : "Popular"})`}
              </button>
            );
          })}
        </div>

        {/* Selected Plan Summary Card */}
        <div className="rounded-2xl border border-primary/30 bg-primary/[0.03] p-4 text-xs mt-3 transition-all duration-200">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              {selectedPlan.name[isBn ? "bn" : "en"]} {isBn ? "ফিচার বিবরণ" : "Feature Specifications"}
            </span>
            <span className="font-semibold text-muted-foreground">
              {selectedPlan.trialDays ? (isBn ? "১৪ দিনের ট্রায়াল" : "14-Day Trial") : (isBn ? "কাস্টম চুক্তি" : "Custom")}
            </span>
          </div>
          <p className="text-muted-foreground">
            {selectedPlan.tagline[isBn ? "bn" : "en"]}
          </p>
        </div>
      </ScrollReveal>

      {/* Grouped Categories with Staggered ScrollReveal */}
      <div className="space-y-4">
        {categories.map((category, idx) => (
          <ScrollReveal
            key={category.id}
            direction="up"
            delay={idx * 60}
            className="rounded-2xl border border-border bg-card p-5 shadow-xs"
          >
            <h4 className="text-sm font-bold text-foreground pb-3 mb-3 border-b border-border/60">
              {category.name[isBn ? "bn" : "en"]}
            </h4>

            <div className="space-y-3.5">
              {category.features.map((feature) => {
                const value = feature.planValues[selectedPlanId];
                return (
                  <div
                    key={feature.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                  >
                    <span className="font-medium text-muted-foreground flex items-center gap-1.5">
                      <span>{feature.name[isBn ? "bn" : "en"]}</span>
                      {feature.tooltip && (
                        <Info className="h-3 w-3 text-muted-foreground/60 shrink-0" />
                      )}
                    </span>
                    <div className="sm:text-right pt-0.5 sm:pt-0">
                      {renderValue(value)}
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
