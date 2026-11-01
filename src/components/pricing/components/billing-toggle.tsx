"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BillingPeriod } from "../types/pricing.types";
import { cn } from "@/lib/utils";

interface BillingToggleProps {
  billingPeriod: BillingPeriod;
  onPeriodChange: (period: BillingPeriod) => void;
  yearlyDiscountPercentage?: number | null;
  className?: string;
}

export function BillingToggle({
  billingPeriod,
  onPeriodChange,
  yearlyDiscountPercentage = 17,
  className,
}: BillingToggleProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <div className={cn("flex flex-col items-center justify-center gap-2.5", className)}>
      {/* Consolidated Toggle Pill Box */}
      <div
        role="tablist"
        aria-label="Billing frequency options"
        className="inline-flex items-center rounded-xl border border-border bg-muted/60 p-1 shadow-xs"
      >
        {/* Monthly Option */}
        <button
          type="button"
          role="tab"
          id="billing-tab-monthly"
          aria-selected={billingPeriod === "monthly"}
          onClick={() => onPeriodChange("monthly")}
          className={cn(
            "rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
            billingPeriod === "monthly"
              ? "bg-card text-foreground shadow-sm font-bold ring-1 ring-border/80"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
          )}
        >
          {isBn ? "মাসিক বিলিং" : "Monthly Billing"}
        </button>

        {/* Consolidated Yearly Option (Consolidating "Yearly Billing" and "Annual" with explicit discount badge) */}
        <button
          type="button"
          role="tab"
          id="billing-tab-yearly"
          aria-selected={billingPeriod === "yearly"}
          onClick={() => onPeriodChange("yearly")}
          className={cn(
            "rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none flex items-center gap-2",
            billingPeriod === "yearly"
              ? "bg-card text-foreground shadow-sm font-bold ring-1 ring-border/80"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
          )}
        >
          <span>{isBn ? "বার্ষিক বিলিং" : "Yearly Billing"}</span>

          {yearlyDiscountPercentage && yearlyDiscountPercentage > 0 && (
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[10px] font-bold tracking-tight transition-colors",
                billingPeriod === "yearly"
                  ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                  : "bg-primary/10 text-primary border border-primary/20"
              )}
            >
              {isBn
                ? `${yearlyDiscountPercentage}% ছাড়`
                : `Save ${yearlyDiscountPercentage}%`}
            </span>
          )}
        </button>
      </div>

      {/* Dynamic Caption showing exact billing terms */}
      <p className="text-xs text-muted-foreground text-center">
        {billingPeriod === "yearly"
          ? isBn
            ? "বার্ষিক বিলিংয়ে পরিশোধ • ২ মাস ফ্রি (১৭% সাশ্রয়)"
            : "Billed annually • 2 months free (Save ~17%) with annual commitment"
          : isBn
          ? "মাসিক ভিত্তিতে বিল্ড • যেকোনো সময় পরিবর্তনযোগ্য • ১৪ দিনের ফ্রি ট্রায়াল"
          : "Billed month-to-month • Cancel anytime • 14-day free trial on retail tiers"}
      </p>
    </div>
  );
}
