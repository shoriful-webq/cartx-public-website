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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      onPeriodChange("monthly");
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      onPeriodChange("yearly");
    }
  };

  return (
    <div className={cn("flex flex-col items-center justify-center gap-2.5", className)}>
      {/* Consolidated Branded Toggle Pill */}
      <div
        role="tablist"
        aria-label="Billing frequency options"
        onKeyDown={handleKeyDown}
        className="inline-flex items-center rounded-full border border-border bg-card p-1 shadow-xs transition-colors"
      >
        {/* Monthly Option */}
        <button
          type="button"
          role="tab"
          id="billing-tab-monthly"
          aria-selected={billingPeriod === "monthly"}
          aria-controls="plans-grid"
          tabIndex={billingPeriod === "monthly" ? 0 : -1}
          onClick={() => onPeriodChange("monthly")}
          className={cn(
            "rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none active:scale-95 motion-reduce:transform-none",
            billingPeriod === "monthly"
              ? "bg-primary text-primary-foreground shadow-xs font-bold"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          {isBn ? "মাসিক বিলিং" : "Monthly Billing"}
        </button>

        {/* Yearly Option with Save Discount */}
        <button
          type="button"
          role="tab"
          id="billing-tab-yearly"
          aria-selected={billingPeriod === "yearly"}
          aria-controls="plans-grid"
          tabIndex={billingPeriod === "yearly" ? 0 : -1}
          onClick={() => onPeriodChange("yearly")}
          className={cn(
            "rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none flex items-center gap-1.5 active:scale-95 motion-reduce:transform-none",
            billingPeriod === "yearly"
              ? "bg-primary text-primary-foreground shadow-xs font-bold"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          <span>{isBn ? "বার্ষিক বিলিং" : "Yearly Billing"}</span>

          {yearlyDiscountPercentage && yearlyDiscountPercentage > 0 && (
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[10px] font-bold tracking-tight transition-all duration-200",
                billingPeriod === "yearly"
                  ? "bg-white/20 text-white dark:bg-black/20 dark:text-white"
                  : "bg-success/15 text-success border border-success/30"
              )}
            >
              {isBn
                ? `${yearlyDiscountPercentage}% সাশ্রয়`
                : `Save ${yearlyDiscountPercentage}%`}
            </span>
          )}
        </button>
      </div>

      {/* Dynamic Terms Caption */}
      <p className="text-xs text-muted-foreground text-center transition-all duration-200">
        {billingPeriod === "yearly"
          ? isBn
            ? "বার্ষিক বিলিংয়ে পরিশোধ • ২ মাস ফ্রি (১৭% সাশ্রয়) • যেকোনো সময় আপগ্রেডযোগ্য"
            : "Billed annually • 2 months free (~17% savings) • 14-day free trial on all plans"
          : isBn
          ? "মাসিক ভিত্তিতে বিল্ড • যেকোনো সময় পরিবর্তনযোগ্য • ১৪ দিনের ফ্রি ট্রায়াল"
          : "Billed month-to-month • Cancel anytime • 14-day free trial on all plans"}
      </p>
    </div>
  );
}
