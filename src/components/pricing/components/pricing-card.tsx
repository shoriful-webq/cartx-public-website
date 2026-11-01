"use client";

import React from "react";
import Link from "next/link";
import { Check, CheckCircle2, ArrowRight } from "lucide-react";
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
        "group relative flex flex-col justify-between rounded-3xl bg-card p-7 sm:p-8 transition-all duration-300",
        isHighlighted
          ? "border-2 border-primary shadow-lg ring-1 ring-primary/20 hover:shadow-xl hover:-translate-y-1"
          : "border border-border/80 shadow-xs hover:border-primary/40 hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      {/* Top Accent Gradient on Highlighted Card */}
      {isHighlighted && (
        <div
          className="absolute inset-x-0 -top-0.5 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-t-3xl"
          aria-hidden="true"
        />
      )}

      <div className="flex flex-col flex-1">
        {/* 1. Plan Name & Optional Recommendation Badge */}
        <div className="flex items-center justify-between gap-3 mb-2">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            {plan.name[isBn ? "bn" : "en"]}
          </h3>
          {isHighlighted && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/25 px-3 py-1 text-xs font-bold text-primary shadow-xs">
              ★ {plan.badge?.[isBn ? "bn" : "en"] || (isBn ? "সর্বাধিক জনপ্রিয়" : "Most Popular")}
            </span>
          )}
        </div>

        {/* 2. Short, Polished Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed min-h-[2.5rem] mb-6">
          {plan.targetAudience[isBn ? "bn" : "en"]}
        </p>

        {/* 3. Price & Billing Period */}
        <div className="mb-2">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              {priceDisplay.primaryPriceText}
            </span>
            {!priceDisplay.isSpecialState && (
              <span className="text-sm font-semibold text-muted-foreground">
                {priceDisplay.billingFrequencyText}
              </span>
            )}
          </div>
        </div>

        {/* 4. Existing Discount or Billing Information */}
        <div className="text-xs text-muted-foreground min-h-[1.5rem] flex items-center mb-6">
          {priceDisplay.secondaryPriceText ? (
            <span className="font-medium text-foreground/80">
              {priceDisplay.secondaryPriceText}
            </span>
          ) : plan.trialDays ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
              {isBn
                ? `${plan.trialDays} দিনের ঝুঁকিহীন ফ্রি ট্রায়াল অন্তর্ভুক্ত`
                : `${plan.trialDays}-day full feature trial • No credit card required`}
            </span>
          ) : (
            <span className="text-xs text-muted-foreground">
              {isBn ? "চুক্তিভিত্তিক বার্ষিক অথবা কাস্টম বিলিং" : "Custom annual agreements • Dedicated onboarding SLA"}
            </span>
          )}
        </div>

        {/* 5. Primary CTA Button */}
        <div className="mb-8">
          <Link
            href={plan.cta.href}
            className={cn(
              "w-full h-12 inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs",
              isHighlighted
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary-hover hover:shadow-lg"
                : "border border-border/90 bg-card text-foreground hover:bg-muted/70 hover:border-border"
            )}
          >
            <span>{plan.cta.label[isBn ? "bn" : "en"]}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <p className="text-[11px] text-center text-muted-foreground mt-2">
            {plan.trialDays
              ? isBn
                ? "কোনো ক্রেডিট কার্ডের প্রয়োজন নেই • যেকোনো সময় বাতিলযোগ্য"
                : "No credit card required • Cancel anytime"
              : isBn
              ? "ডেডিকেটেড অনবোর্ডিং ও আর্কিটেকচার সাপোর্ট"
              : "Dedicated enterprise onboarding & architectural support"}
          </p>
        </div>

        {/* Clean Hairline Separator */}
        <div className="border-t border-border/60 mb-6" />

        {/* 6. Key Included Features */}
        <div className="space-y-3 flex-1 mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
            {isBn ? "প্যাকেজে অন্তর্ভুক্ত মূল সুবিধাসমূহ:" : "Key Included Features:"}
          </p>
          {plan.featureHighlights.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed"
            >
              <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                <Check className="h-2.5 w-2.5 stroke-[3]" />
              </div>
              <span className="text-foreground/90">{feat[isBn ? "bn" : "en"]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Additional Limits Presented Compactly */}
      <div className="pt-6 border-t border-border/60">
        <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">
          {isBn ? "প্ল্যান সীমা ও সক্ষমতা:" : "Plan Limits & Specifications:"}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
          <div className="rounded-xl bg-muted/30 border border-border/40 p-2.5">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              {isBn ? "পণ্য সীমা" : "Products"}
            </span>
            <span className="block font-bold text-foreground truncate mt-0.5">
              {formatLimit(plan.limits.products, locale)}
            </span>
          </div>

          <div className="rounded-xl bg-muted/30 border border-border/40 p-2.5">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              {isBn ? "স্টাফ সিট" : "Staff Seats"}
            </span>
            <span className="block font-bold text-foreground truncate mt-0.5">
              {formatLimit(plan.limits.staffAccounts, locale)}
            </span>
          </div>

          <div className="rounded-xl bg-muted/30 border border-border/40 p-2.5">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              {isBn ? "স্টোরেজ" : "Storage"}
            </span>
            <span className="block font-bold text-foreground truncate mt-0.5">
              {formatLimit(plan.limits.storageGB, locale, { en: "GB", bn: "জিবি" })}
            </span>
          </div>

          <div className="rounded-xl bg-muted/30 border border-border/40 p-2.5">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              {isBn ? "কাস্টম ডোমেইন" : "Domains"}
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
