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
  yearlyDiscountPercentage = null,
  className,
}: BillingToggleProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      {/* Toggle Pill Box */}
      <div
        role="tablist"
        aria-label="Billing frequency selection"
        className="inline-flex items-center rounded-2xl border border-border bg-muted/60 p-1.5 shadow-xs"
      >
        {/* Monthly Button */}
        <button
          type="button"
          role="tab"
          id="billing-monthly"
          aria-selected={billingPeriod === "monthly"}
          onClick={() => onPeriodChange("monthly")}
          className={cn(
            "rounded-xl px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer",
            billingPeriod === "monthly"
              ? "bg-card text-foreground shadow-sm font-bold"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {isBn ? "মাসিক বিলিং" : "Monthly Billing"}
        </button>

        {/* Yearly Button */}
        <button
          type="button"
          role="tab"
          id="billing-yearly"
          aria-selected={billingPeriod === "yearly"}
          onClick={() => onPeriodChange("yearly")}
          className={cn(
            "relative rounded-xl px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2",
            billingPeriod === "yearly"
              ? "bg-card text-foreground shadow-sm font-bold"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span>{isBn ? "বার্ষিক বিলিং" : "Yearly Billing"}</span>

          {yearlyDiscountPercentage && yearlyDiscountPercentage > 0 ? (
            <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
              {isBn
                ? `${yearlyDiscountPercentage}% ছাড়`
                : `Save ${yearlyDiscountPercentage}%`}
            </span>
          ) : (
            <span className="rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">
              {isBn ? "সাশ্রয়ী" : "Annual"}
            </span>
          )}
        </button>
      </div>

      {/* Explanatory Caption */}
      <p className="text-xs text-muted-foreground text-center">
        {billingPeriod === "yearly"
          ? isBn
            ? "বার্ষিক বিলিংয়ে এককালীন বার্ষিক মোট মূল্য পরিশোধিত হয় এবং দীর্ঘমেয়াদে সর্বোত্তম সুবিধা নিশ্চিত হয়।"
            : "Annual billing is committed yearly with guaranteed rates and unified accounting."
          : isBn
          ? "মাসিক ভিত্তিতে বিলিং করা হয়, আপনি যেকোনো সময় পরিবর্তন বা বাতিল করতে পারেন।"
          : "Billed on a flexible month-to-month basis with zero lock-in contracts."}
      </p>
    </div>
  );
}

