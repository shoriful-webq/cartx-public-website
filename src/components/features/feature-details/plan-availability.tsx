"use client";

import React from "react";
import Link from "next/link";
import { CreditCard, ArrowRight, Info, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { FeatureDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface PlanAvailabilityProps {
  feature: FeatureDetailConfig;
  className?: string;
}

export function PlanAvailability({ feature, className }: PlanAvailabilityProps) {
  const { locale, t } = useLanguage();
  const plans = feature.planAvailability;

  return (
    <section
      aria-label="Plan Availability"
      className={cn(
        "section-padding bg-card/30 border-b border-border transition-colors",
        className
      )}
    >
      <div className="container max-w-5xl">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={locale === "bn" ? "প্ল্যান প্রাপ্যতা" : "PLAN AVAILABILITY"}
            eyebrowIcon={CreditCard}
            title={
              locale === "bn"
                ? "কোন প্ল্যানে এই ফিচারটি অন্তর্ভুক্ত?"
                : "Feature Availability Across Plans"
            }
            titleGradient={true}
            description={
              locale === "bn"
                ? "আপনার ব্যবসার পরিধি অনুযায়ী সঠিক সাবস্ক্রিপশন প্ল্যান বেছে নিন।"
                : "Clear breakdown of feature limits and capabilities across all subscription tiers."
            }
            size="default"
            className="mb-8 text-center"
          />

          {/* Launch Transparency Status Pill */}
          <div className="mb-10 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-[11px] font-medium text-muted-foreground shadow-2xs text-center">
              <Info className="size-3.5 text-primary shrink-0" />
              <span>
                {t("pricingSection.statusPending") ||
                  (locale === "bn"
                    ? "প্যাকেজ ও মূল্যের বিবরণী অফিসিয়াল উদ্বোধনের পূর্বে পর্যালোচনার বিষয়।"
                    : "Plan details, limits, and tiers are subject to confirmation prior to public launch.")}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Plans Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Starter Plan */}
          <ScrollReveal delay={50}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">
                  {t("pricingSection.plan1.name") || (locale === "bn" ? "স্টার্টার প্ল্যান" : "Starter Plan")}
                </span>
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {locale === "bn" ? "ছোট ও নতুন উদ্যোগ" : "Early-Stage Stores"}
                </h4>
                <div className="p-3.5 rounded-xl bg-muted/40 border border-border/60 text-xs sm:text-sm text-foreground leading-relaxed flex items-start gap-2 mb-4">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>{plans.starter[locale] || plans.starter.en}</span>
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground">
                {locale === "bn" ? "মৌলিক কার্যক্রমে শুরু করার জন্য আদর্শ।" : "Essential features to get your store off the ground."}
              </p>
            </div>
          </ScrollReveal>

          {/* Growth Plan (Highlighted) */}
          <ScrollReveal delay={100}>
            <div className="h-full rounded-2xl border-2 border-primary bg-card p-6 shadow-card relative flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-xs">
                  {locale === "bn" ? "জনপ্রিয় চয়েস" : "Most Popular"}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary block mb-1 mt-1">
                  {t("pricingSection.plan2.name") || (locale === "bn" ? "গ্রোথ প্ল্যান" : "Growth Plan")}
                </span>
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {locale === "bn" ? "দ্রুত বর্ধনশীল ব্র্যান্ড" : "Scaling Retailers"}
                </h4>
                <div className="p-3.5 rounded-xl bg-primary/[0.06] border border-primary/20 text-xs sm:text-sm text-foreground leading-relaxed flex items-start gap-2 mb-4">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium">{plans.growth[locale] || plans.growth.en}</span>
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground">
                {locale === "bn" ? "অটোমেশন ও উন্নত নিয়ন্ত্রণের জন্য সেরা।" : "Automation tools for growing order volumes."}
              </p>
            </div>
          </ScrollReveal>

          {/* Scale Plan */}
          <ScrollReveal delay={150}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">
                  {t("pricingSection.plan3.name") || (locale === "bn" ? "স্কেল প্ল্যান" : "Scale Plan")}
                </span>
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {locale === "bn" ? "উচ্চ ভলিউম ও এন্টারপ্রাইজ" : "High-Volume Brands"}
                </h4>
                <div className="p-3.5 rounded-xl bg-muted/40 border border-border/60 text-xs sm:text-sm text-foreground leading-relaxed flex items-start gap-2 mb-4">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>{plans.scale[locale] || plans.scale.en}</span>
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground">
                {locale === "bn" ? "সর্বোচ্চ ক্ষমতা ও কাস্টম সমাধানের জন্য।" : "Maximum throughput, unlimited items & priority support."}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Note & Link to Pricing */}
        <div className="text-center">
          {plans.note && (
            <p className="text-xs text-muted-foreground mb-4">
              {plans.note[locale] || plans.note.en}
            </p>
          )}
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary-hover hover:underline transition-colors group"
          >
            <span>{locale === "bn" ? "সম্পূর্ণ মূল্য তালিকা ও প্ল্যান তুলনা দেখুন" : "View Full Plan Specifications & Comparison"}</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

