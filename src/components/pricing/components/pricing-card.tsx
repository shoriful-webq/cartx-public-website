"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BillingPeriod, PricingPlan } from "../types/pricing.types";
import { getPlanDisplayPrice, formatLimit } from "../lib/pricing-utils";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: PricingPlan;
  billingPeriod: BillingPeriod;
  className?: string;
}

export function PricingCard({ plan, billingPeriod, className }: PricingCardProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const priceDisplay = getPlanDisplayPrice(plan, billingPeriod, locale);
  const isHighlighted = Boolean(plan.highlighted);

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl bg-card p-5 sm:p-6 transition-all duration-200",
        isHighlighted
          ? "border-2 border-primary shadow-md ring-1 ring-primary/20 hover:shadow-lg"
          : "border border-border/80 shadow-xs hover:border-primary/40 hover:shadow-sm",
        className
      )}
    >
      {/* Top Accent Gradient on Recommended Plan */}
      {isHighlighted && (
        <div
          className="absolute inset-x-0 -top-0.5 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-t-2xl"
          aria-hidden="true"
        />
      )}

      <div className="flex flex-col flex-1">
        {/* 1. Plan Name & Short Description */}
        <div className="mb-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
              {plan.name[isBn ? "bn" : "en"]}
            </h3>
            {isHighlighted && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                ★ {plan.badge?.[isBn ? "bn" : "en"] || (isBn ? "জনপ্রিয়" : "Most Popular")}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
            {plan.targetAudience[isBn ? "bn" : "en"]}
          </p>
        </div>

        {/* 2. Price & Billing Period */}
        <div className="mt-1 mb-1">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              {priceDisplay.primaryPriceText}
            </span>
            {!priceDisplay.isSpecialState && (
              <span className="text-xs font-semibold text-muted-foreground">
                {priceDisplay.billingFrequencyText}
              </span>
            )}
          </div>
        </div>

        {/* 3. Existing Discount or Billing Information */}
        <div className="text-[11px] sm:text-xs text-muted-foreground h-5 flex items-center mb-4 truncate">
          {priceDisplay.secondaryPriceText ? (
            <span className={cn(
              "font-medium",
              billingPeriod === "yearly" && !priceDisplay.isSpecialState
                ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                : "text-muted-foreground"
            )}>
              {priceDisplay.secondaryPriceText}
            </span>
          ) : plan.trialDays ? (
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">
              {isBn ? "১৪ দিনের ফ্রি ট্রায়াল অন্তর্ভুক্ত" : "14-day free trial included"}
            </span>
          ) : (
            <span>{isBn ? "কাস্টম বার্ষিক চুক্তি" : "Custom annual contract agreement"}</span>
          )}
        </div>

        {/* 4. Primary CTA Button */}
        <div className="mb-4">
          <Link
            href={plan.cta.href}
            className={cn(
              "w-full h-10 inline-flex items-center justify-center gap-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs",
              isHighlighted
                ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover hover:shadow-md"
                : "border border-border/90 bg-muted/40 text-foreground hover:bg-muted/80 hover:border-border"
            )}
          >
            <span>{plan.cta.label[isBn ? "bn" : "en"]}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Hairline Divider */}
        <div className="border-t border-border/50 mb-3.5" />

        {/* 5. Most Important Features */}
        <div className="space-y-2 flex-1 mb-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
            {isBn ? "মূল সুবিধাসমূহ:" : "What's included:"}
          </p>
          {plan.featureHighlights.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 text-xs text-muted-foreground leading-snug"
            >
              <div className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                <Check className="h-2 w-2 stroke-[3]" />
              </div>
              <span className="text-foreground/90">{feat[isBn ? "bn" : "en"]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Additional Limits Displayed Compactly */}
      <div className="pt-3 border-t border-border/50">
        <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
          <div className="rounded-md bg-muted/40 border border-border/40 py-1 px-1">
            <span className="block font-medium text-muted-foreground uppercase text-[9px]">
              {isBn ? "পণ্য" : "Products"}
            </span>
            <span className="block font-bold text-foreground truncate mt-0.5">
              {formatLimit(plan.limits.products, locale)}
            </span>
          </div>

          <div className="rounded-md bg-muted/40 border border-border/40 py-1 px-1">
            <span className="block font-medium text-muted-foreground uppercase text-[9px]">
              {isBn ? "স্টাফ" : "Staff"}
            </span>
            <span className="block font-bold text-foreground truncate mt-0.5">
              {formatLimit(plan.limits.staffAccounts, locale)}
            </span>
          </div>

          <div className="rounded-md bg-muted/40 border border-border/40 py-1 px-1">
            <span className="block font-medium text-muted-foreground uppercase text-[9px]">
              {isBn ? "স্টোরেজ" : "Storage"}
            </span>
            <span className="block font-bold text-foreground truncate mt-0.5">
              {formatLimit(plan.limits.storageGB, locale, { en: "GB", bn: "জিবি" })}
            </span>
          </div>

          <div className="rounded-md bg-muted/40 border border-border/40 py-1 px-1">
            <span className="block font-medium text-muted-foreground uppercase text-[9px]">
              {isBn ? "ডোমেইন" : "Domains"}
            </span>
            <span className="block font-bold text-foreground truncate mt-0.5">
              {formatLimit(plan.limits.customDomains, locale)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
