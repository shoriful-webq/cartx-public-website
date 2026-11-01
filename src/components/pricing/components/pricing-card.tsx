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
        "group relative flex flex-col justify-between rounded-2xl bg-card p-6 transition-all duration-200",
        isHighlighted
          ? "border-2 border-primary shadow-lg ring-1 ring-primary/20 hover:shadow-xl hover:-translate-y-1"
          : "border border-border shadow-xs hover:border-primary/40 hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      {/* Highlight Top Accent Gradient */}
      {isHighlighted && (
        <div
          className="absolute inset-x-0 -top-0.5 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-t-2xl"
          aria-hidden="true"
        />
      )}

      <div>
        {/* Plan Header: Name & Optional Badge */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            {plan.name[isBn ? "bn" : "en"]}
          </h3>
          {isHighlighted && (
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/25 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-primary">
              ★ {plan.badge?.[isBn ? "bn" : "en"] || (isBn ? "জনপ্রিয়" : "Popular")}
            </span>
          )}
        </div>

        {/* Target Audience / Tagline */}
        <p className="text-xs text-muted-foreground leading-relaxed min-h-[2.5rem] line-clamp-2 mb-4">
          {plan.targetAudience[isBn ? "bn" : "en"]}
        </p>

        {/* Typographic Price Section */}
        <div className="mb-5 min-h-[4.25rem] flex flex-col justify-center">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-3xl font-extrabold tracking-tight text-foreground">
              {priceDisplay.primaryPriceText}
            </span>
            {!priceDisplay.isSpecialState && (
              <span className="text-xs font-semibold text-muted-foreground">
                {priceDisplay.billingFrequencyText}
              </span>
            )}
          </div>

          <div className="text-xs text-muted-foreground mt-1 min-h-[1.25rem] flex items-center">
            {priceDisplay.secondaryPriceText ? (
              <span className="font-medium text-muted-foreground">
                {priceDisplay.secondaryPriceText}
              </span>
            ) : plan.trialDays ? (
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                <Check className="h-3 w-3 stroke-[3]" />
                {isBn
                  ? `${plan.trialDays} দিনের ফ্রি ট্রায়াল অন্তর্ভুক্ত`
                  : `${plan.trialDays}-day free trial included`}
              </span>
            ) : (
              <span className="text-[11px] text-muted-foreground">
                {isBn ? "কাস্টম এন্টারপ্রাইজ চুক্তি" : "Custom agreement terms"}
              </span>
            )}
          </div>
        </div>

        {/* Primary CTA Button (Positioned at high-conversion upper zone) */}
        <div className="mb-5">
          <Link
            href={plan.cta.href}
            className={cn(
              "w-full h-11 inline-flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs",
              isHighlighted
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary-hover hover:shadow-lg"
                : "border border-border bg-card text-foreground hover:bg-muted/70 hover:border-border/90"
            )}
          >
            <span>{plan.cta.label[isBn ? "bn" : "en"]}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <p className="text-[11px] text-center text-muted-foreground mt-2">
            {plan.trialDays
              ? isBn
                ? "ক্রেডিট কার্ডের প্রয়োজন নেই"
                : "No credit card required"
              : isBn
              ? "ডেডিকেটেড এন্টারপ্রাইজ অনবোর্ডিং"
              : "Dedicated enterprise onboarding"}
          </p>
        </div>

        {/* Clean Divider */}
        <div className="border-t border-border/60 my-5" />

        {/* Core Limits Summary: 2 Compact Metric Badges */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="rounded-xl bg-muted/40 border border-border/50 px-3 py-2 text-center">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              {isBn ? "পণ্য সীমা" : "Products"}
            </span>
            <span className="block text-xs font-bold text-foreground truncate mt-0.5">
              {formatLimit(plan.limits.products, locale)}
            </span>
          </div>

          <div className="rounded-xl bg-muted/40 border border-border/50 px-3 py-2 text-center">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              {isBn ? "স্টাফ সিট" : "Staff"}
            </span>
            <span className="block text-xs font-bold text-foreground truncate mt-0.5">
              {formatLimit(plan.limits.staffAccounts, locale)}
            </span>
          </div>
        </div>

        {/* Included Capabilities List */}
        <div className="space-y-2.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">
            {isBn ? "অন্তর্ভুক্ত সুবিধাসমূহ:" : "What's included:"}
          </p>
          {plan.featureHighlights.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed"
            >
              <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                <Check className="h-2.5 w-2.5 stroke-[3]" />
              </div>
              <span>{feat[isBn ? "bn" : "en"]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Link to Full Feature Breakdown */}
      <div className="mt-6 pt-4 border-t border-border/50 text-center">
        <a
          href="#plan-comparison"
          className="text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
        >
          <span>{isBn ? "পূর্ণাঙ্গ ফিচার তালিকা দেখুন" : "See all feature specs"}</span>
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
