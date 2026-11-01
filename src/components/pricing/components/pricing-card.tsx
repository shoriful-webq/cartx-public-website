"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Package,
  Users,
  HardDrive,
  Globe,
  Smartphone,
  Headphones,
  ShoppingBag,
} from "lucide-react";
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

  // Support level descriptions
  const supportLabels = {
    standard: isBn ? "স্ট্যান্ডার্ড ইমেইল সাপোর্ট" : "Standard Email & Ticket",
    priority: isBn ? "অগ্রাধিকার লাইভ চ্যাট ও ইমেইল" : "Priority Chat & Email Support",
    dedicated_sla: isBn ? "২৪/৭ ডেডিকেটেড এসএলএ টিম" : "24/7 Dedicated SLA Support",
    community: isBn ? "কমিউনিটি ফোরাম" : "Community Support",
  };

  // Mobile app status label
  const mobileAppLabels = {
    unavailable: isBn ? "প্রযোজ্য নয় (ওয়েব ফ্রন্ট)" : "Web Storefront Only",
    optional_addon: isBn ? "ঐচ্ছিক অ্যাড-অন" : "Optional Add-on",
    included: isBn ? "প্যাকেজে অন্তর্ভুক্ত" : "Fully Included",
    custom: isBn ? "কাস্টম বিল্ড" : "Custom Build",
  };

  return (
    <div
      className={cn(
        "relative flex flex-col justify-between rounded-3xl border bg-card p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5",
        isHighlighted
          ? "border-primary/60 shadow-xl ring-2 ring-primary/20 bg-gradient-to-b from-card via-card to-primary/[0.02]"
          : "border-border hover:border-primary/40 hover:shadow-md",
        className
      )}
    >
      {/* Popular Badge */}
      {isHighlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-primary px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-primary-foreground shadow-md shadow-primary/25">
            {plan.badge?.[isBn ? "bn" : "en"] || (isBn ? "সর্বাধিক জনপ্রিয়" : "Most Popular")}
          </span>
        </div>
      )}

      <div>
        {/* Header: Plan Name & Target Customer */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              {plan.name[isBn ? "bn" : "en"]}
            </h3>
            <span
              className={cn(
                "text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border",
                isHighlighted
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted text-muted-foreground border-border"
              )}
            >
              {isBn ? "টিয়ার" : "Tier"}
            </span>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 min-h-[2rem]">
            {plan.targetAudience[isBn ? "bn" : "en"]}
          </p>
        </div>

        {/* Price Box */}
        <div className="mb-6 rounded-2xl border border-border/80 bg-muted/30 p-5">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              {priceDisplay.primaryPriceText}
            </span>
            {!priceDisplay.isSpecialState && (
              <span className="text-xs font-semibold text-muted-foreground">
                {priceDisplay.billingFrequencyText}
              </span>
            )}
          </div>

          {priceDisplay.secondaryPriceText && (
            <p className="text-xs text-muted-foreground mt-1.5 font-medium">
              {priceDisplay.secondaryPriceText}
            </p>
          )}

          {plan.trialDays && (
            <div className="mt-3 pt-3 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>
                {isBn
                  ? `${plan.trialDays} দিনের ঝুঁকিহীন ফ্রি ট্রায়াল`
                  : `${plan.trialDays}-Day Risk-Free Trial Included`}
              </span>
            </div>
          )}
        </div>

        {/* Core Limits Summary Grid */}
        <div className="mb-6 space-y-2.5 rounded-xl border border-border/50 bg-background/50 p-4 text-xs">
          {/* Products */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Package className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>{isBn ? "পণ্য সীমা" : "Product Limit"}</span>
            </span>
            <span className="font-bold text-foreground">
              {formatLimit(plan.limits.products, locale)}
            </span>
          </div>

          {/* Staff */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>{isBn ? "স্টাফ অ্যাকাউন্ট" : "Staff Accounts"}</span>
            </span>
            <span className="font-bold text-foreground">
              {formatLimit(plan.limits.staffAccounts, locale)}
            </span>
          </div>

          {/* Storage */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-muted-foreground">
              <HardDrive className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>{isBn ? "মিডিয়া স্টোরেজ" : "Media Storage"}</span>
            </span>
            <span className="font-bold text-foreground">
              {formatLimit(plan.limits.storageGB, locale, { en: "GB", bn: "জিবি" })}
            </span>
          </div>

          {/* Custom Domain */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Globe className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>{isBn ? "কাস্টম ডোমেইন" : "Custom Domain"}</span>
            </span>
            <span className="font-bold text-foreground">
              {formatLimit(plan.limits.customDomains, locale)}
            </span>
          </div>

          {/* Monthly Orders */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-muted-foreground">
              <ShoppingBag className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>{isBn ? "মাসিক অর্ডার" : "Monthly Orders"}</span>
            </span>
            <span className="font-bold text-foreground">
              {formatLimit(plan.limits.monthlyOrders, locale)}
            </span>
          </div>

          {/* Mobile App */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Smartphone className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>{isBn ? "মোবাইল অ্যাপ" : "Mobile Apps"}</span>
            </span>
            <span className="font-semibold text-foreground text-[11px]">
              {mobileAppLabels[plan.features.whiteLabelApps]}
            </span>
          </div>

          {/* Support Level */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Headphones className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>{isBn ? "সাপোর্ট লেভেল" : "Support"}</span>
            </span>
            <span className="font-semibold text-foreground text-[11px]">
              {supportLabels[plan.features.supportLevel]}
            </span>
          </div>
        </div>

        {/* Feature Highlights Checklist */}
        <div className="mb-6 space-y-2.5">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            {isBn ? "প্যাকেজে অন্তর্ভুক্ত সুবিধাসমূহ:" : "What's Included:"}
          </p>
          {plan.featureHighlights.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{feat[isBn ? "bn" : "en"]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Primary Card CTA */}
      <div className="pt-4 border-t border-border/60">
        <Link
          href={plan.cta.href}
          className={cn(
            "w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer",
            isHighlighted
              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-lg"
              : "border border-border bg-card text-foreground hover:bg-muted/60 hover:border-border/90"
          )}
        >
          <span>{plan.cta.label[isBn ? "bn" : "en"]}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

