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
    <div className={cn("flex flex-col items-center justify-center gap-2", className)}>
      {/* Consolidated Toggle Pill Box */}
      <div
        role="tablist"
        aria-label="Billing frequency options"
        className="inline-flex items-center rounded-full border border-[#E2E8F0] dark:border-border bg-white dark:bg-card p-1 shadow-xs"
      >
        {/* Monthly Option */}
        <button
          type="button"
          role="tab"
          id="billing-tab-monthly"
          aria-selected={billingPeriod === "monthly"}
          onClick={() => onPeriodChange("monthly")}
          className={cn(
            "rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer select-none",
            billingPeriod === "monthly"
              ? "bg-[#0F172A] text-white dark:bg-primary dark:text-primary-foreground shadow-xs font-bold"
              : "text-[#475569] dark:text-muted-foreground hover:text-[#0F172A] dark:hover:text-foreground"
          )}
        >
          {isBn ? "মাসিক বিলিং" : "Monthly Billing"}
        </button>

        {/* Yearly Option with Save 17% */}
        <button
          type="button"
          role="tab"
          id="billing-tab-yearly"
          aria-selected={billingPeriod === "yearly"}
          onClick={() => onPeriodChange("yearly")}
          className={cn(
            "rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer select-none flex items-center gap-1.5",
            billingPeriod === "yearly"
              ? "bg-[#0F172A] text-white dark:bg-primary dark:text-primary-foreground shadow-xs font-bold"
              : "text-[#475569] dark:text-muted-foreground hover:text-[#0F172A] dark:hover:text-foreground"
          )}
        >
          <span>{isBn ? "বার্ষিক বিলিং" : "Yearly Billing"}</span>

          {yearlyDiscountPercentage && yearlyDiscountPercentage > 0 && (
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[10px] font-bold tracking-tight transition-colors",
                billingPeriod === "yearly"
                  ? "bg-emerald-500/20 text-emerald-300 dark:text-emerald-300"
                  : "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
              )}
            >
              {isBn
                ? `${yearlyDiscountPercentage}% সাশ্রয়`
                : `Save ${yearlyDiscountPercentage}%`}
            </span>
          )}
        </button>
      </div>

      {/* Dynamic Caption showing exact billing terms */}
      <p className="text-xs text-[#475569] dark:text-muted-foreground text-center">
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
