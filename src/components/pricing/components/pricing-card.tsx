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

  const mobileAppBadge =
    plan.features.whiteLabelApps === "included"
      ? isBn
        ? "নেটিভ অ্যাপস"
        : "Native Apps"
      : plan.features.whiteLabelApps === "optional_addon"
      ? isBn
        ? "অ্যাপ অ্যাড-অন"
        : "App Add-on"
      : isBn
      ? "ওয়েব পিডব্লিউএ"
      : "Web PWA";

  const supportBadge =
    plan.features.supportLevel === "dedicated_sla"
      ? isBn
        ? "২৪/৭ এসএলএ"
        : "24/7 SLA"
      : plan.id === "business"
      ? isBn
        ? "অ্যাকাউন্ট ম্যানেজার"
        : "Dedicated Mgr"
      : plan.features.supportLevel === "priority"
      ? isBn
        ? "অগ্রাধিকার সাপোর্ট"
        : "Priority Support"
      : isBn
      ? "স্ট্যান্ডার্ড সাপোর্ট"
      : "Standard Support";

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl transition-all duration-200",
        "p-5 xl:p-6 bg-white dark:bg-slate-900 text-foreground",
        isHighlighted
          ? "border-2 border-[#2563EB] shadow-md ring-4 ring-[#2563EB]/10 hover:shadow-xl hover:-translate-y-0.5"
          : "border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-[#2563EB]/50 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      <div className="flex flex-col flex-1">
        {/* 1. Plan Name & Optional Recommended Badge */}
        <div className="flex items-center justify-between gap-2 h-7 mb-1.5">
          <h3 className="text-lg font-bold tracking-tight text-[#0F172A] dark:text-white">
            {plan.name[isBn ? "bn" : "en"]}
          </h3>
          {isHighlighted && (
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#2563EB] dark:text-blue-400">
              ★ {plan.badge?.[isBn ? "bn" : "en"] || (isBn ? "জনপ্রিয়" : "Most Popular")}
            </span>
          )}
        </div>

        {/* 2. Short, Useful Plan Description (fixed min-height for uniform alignment) */}
        <p className="text-xs text-[#475569] dark:text-muted-foreground leading-relaxed min-h-[36px] line-clamp-2 mb-4">
          {plan.targetAudience[isBn ? "bn" : "en"]}
        </p>

        {/* 3. Clearly Displayed Price */}
        <div className="flex items-baseline gap-1.5 min-h-[34px]">
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
            {priceDisplay.primaryPriceText}
          </span>
          {!priceDisplay.isSpecialState && (
            <span className="text-xs font-semibold text-[#475569] dark:text-muted-foreground">
              {priceDisplay.billingFrequencyText}
            </span>
          )}
        </div>

        {/* 4. Billing Period & Existing Discount Information */}
        <div className="h-5 flex items-center text-[11px] sm:text-xs truncate mb-4">
          {priceDisplay.secondaryPriceText ? (
            <span
              className={cn(
                "font-medium truncate",
                billingPeriod === "yearly" && !priceDisplay.isSpecialState
                  ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                  : "text-[#475569] dark:text-muted-foreground"
              )}
            >
              {priceDisplay.secondaryPriceText}
            </span>
          ) : (
            <span className="text-[#475569] dark:text-muted-foreground truncate">
              {isBn ? "১৪ দিনের ফ্রি ট্রায়াল" : "14-day free trial"}
            </span>
          )}
        </div>

        {/* 5. Primary CTA Button (perfectly aligned horizontally across all 4 cards) */}
        <div className="mb-4">
          <Link
            href={plan.cta.href}
            className={cn(
              "w-full h-10 inline-flex items-center justify-center gap-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer shadow-xs",
              isHighlighted
                ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-sm"
                : "border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700"
            )}
          >
            <span>{plan.cta.label[isBn ? "bn" : "en"]}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 6. Subtle Divider */}
        <div className="border-t border-slate-100 dark:border-slate-800/80 mb-4" />

        {/* 7. Key Included Features */}
        <div className="space-y-2.5 flex-1 mb-5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#475569] dark:text-muted-foreground">
            {isBn ? "মূল সুবিধাসমূহ:" : "Key features:"}
          </p>
          {plan.featureHighlights.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 text-xs text-[#475569] dark:text-muted-foreground leading-snug"
            >
              <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] dark:text-blue-400 mt-0.5">
                <Check className="h-2.5 w-2.5 stroke-[3]" />
              </div>
              <span className="text-[#0F172A]/90 dark:text-slate-200">
                {feat[isBn ? "bn" : "en"]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Additional Limits & Key Specifications Displayed Compactly */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
        <div className="grid grid-cols-4 gap-1 text-center">
          <div className="rounded bg-slate-50 dark:bg-muted/40 border border-slate-100 dark:border-border/40 py-1 px-1">
            <span className="block font-medium text-[#475569] dark:text-muted-foreground uppercase text-[9px] truncate">
              {isBn ? "পণ্য" : "Products"}
            </span>
            <span className="block font-bold text-[#0F172A] dark:text-white truncate text-[11px] mt-0.5">
              {formatLimit(plan.limits.products, locale)}
            </span>
          </div>

          <div className="rounded bg-slate-50 dark:bg-muted/40 border border-slate-100 dark:border-border/40 py-1 px-1">
            <span className="block font-medium text-[#475569] dark:text-muted-foreground uppercase text-[9px] truncate">
              {isBn ? "স্টাফ" : "Staff"}
            </span>
            <span className="block font-bold text-[#0F172A] dark:text-white truncate text-[11px] mt-0.5">
              {formatLimit(plan.limits.staffAccounts, locale)}
            </span>
          </div>

          <div className="rounded bg-slate-50 dark:bg-muted/40 border border-slate-100 dark:border-border/40 py-1 px-1">
            <span className="block font-medium text-[#475569] dark:text-muted-foreground uppercase text-[9px] truncate">
              {isBn ? "স্টোরেজ" : "Storage"}
            </span>
            <span className="block font-bold text-[#0F172A] dark:text-white truncate text-[11px] mt-0.5">
              {formatLimit(plan.limits.storageGB, locale, { en: "GB", bn: "জিবি" })}
            </span>
          </div>

          <div className="rounded bg-slate-50 dark:bg-muted/40 border border-slate-100 dark:border-border/40 py-1 px-1">
            <span className="block font-medium text-[#475569] dark:text-muted-foreground uppercase text-[9px] truncate">
              {isBn ? "ডোমেইন" : "Domains"}
            </span>
            <span className="block font-bold text-[#0F172A] dark:text-white truncate text-[11px] mt-0.5">
              {formatLimit(plan.limits.customDomains, locale)}
            </span>
          </div>
        </div>

        {/* Plan Entitlements Micro-Row: Order Limits, Mobile App, Support Level */}
        <div className="flex items-center justify-between text-[10px] text-[#475569] dark:text-muted-foreground px-0.5 pt-0.5 border-t border-slate-100 dark:border-border/40">
          <span className="truncate">{isBn ? "অর্ডার: সীমাহীন" : "Orders: Unlimited"}</span>
          <span>•</span>
          <span className="truncate">{mobileAppBadge}</span>
          <span>•</span>
          <span className="truncate">{supportBadge}</span>
        </div>
      </div>
    </div>
  );
}
