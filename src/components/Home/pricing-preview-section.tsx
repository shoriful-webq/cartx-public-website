"use client";

import React from "react";
import {
  CreditCard,
  CheckCircle2,
  PlusCircle,
  Info,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

/**
 * Centralized, configurable subscription plans configuration.
 * Avoids scattered hardcoding across components.
 */
export interface PlanConfigItem {
  id: string;
  nameKey: string;
  taglineKey: string;
  priceKey: string;
  billingKey: string;
  limitsKey: string;
  includedKey: string;
  addonsKey: string;
  highlighted?: boolean;
}

export const CONFIGURED_PLANS: PlanConfigItem[] = [
  {
    id: "starter",
    nameKey: "pricingSection.plan1.name",
    taglineKey: "pricingSection.plan1.tagline",
    priceKey: "pricingSection.plan1.price",
    billingKey: "pricingSection.plan1.billing",
    limitsKey: "pricingSection.plan1.limits",
    includedKey: "pricingSection.plan1.included",
    addonsKey: "pricingSection.plan1.addons",
  },
  {
    id: "growth",
    nameKey: "pricingSection.plan2.name",
    taglineKey: "pricingSection.plan2.tagline",
    priceKey: "pricingSection.plan2.price",
    billingKey: "pricingSection.plan2.billing",
    limitsKey: "pricingSection.plan2.limits",
    includedKey: "pricingSection.plan2.included",
    addonsKey: "pricingSection.plan2.addons",
  },
  {
    id: "scale",
    nameKey: "pricingSection.plan3.name",
    taglineKey: "pricingSection.plan3.tagline",
    priceKey: "pricingSection.plan3.price",
    billingKey: "pricingSection.plan3.billing",
    limitsKey: "pricingSection.plan3.limits",
    includedKey: "pricingSection.plan3.included",
    addonsKey: "pricingSection.plan3.addons",
  },
];

export interface PricingPreviewSectionProps {
  className?: string;
  plans?: PlanConfigItem[];
}

export function PricingPreviewSection({
  className,
  plans = CONFIGURED_PLANS,
}: PricingPreviewSectionProps) {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-label="Pricing Preview"
      className={cn(
        "relative section-padding border-b border-border bg-card/30 transition-colors overflow-hidden",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <SectionHeading
          eyebrow={t("pricingSection.badge")}
          eyebrowIcon={CreditCard}
          title={t("pricingSection.title")}
          titleGradient={true}
          description={t("pricingSection.description")}
          size="default"
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        {/* ── Pricing Status / Commercial Transparency Pill ── */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3.5 py-1 text-[11px] font-medium text-muted-foreground shadow-xs text-center">
            <Info className="size-3.5 text-primary shrink-0" />
            <span>{t("pricingSection.statusPending")}</span>
          </div>
        </div>

        {/* ── 3 Subscription Plan Cards Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs flex flex-col justify-between transition-all duration-200 hover:border-primary/40 hover:shadow-card"
            >
              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {t(plan.nameKey)}
                  </h3>
                  <span className="text-[10px] font-semibold text-primary uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                    Tier
                  </span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                  {t(plan.taglineKey)}
                </p>

                {/* Price Display Block */}
                <div className="p-4 rounded-xl border border-border/80 bg-muted/20 mb-6">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                    {t(plan.priceKey)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t(plan.billingKey)}
                  </p>
                </div>

                {/* Feature Limits & Included Services */}
                <div className="space-y-3.5 mb-6 text-xs">
                  {/* Limits */}
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Feature Limits
                      </p>
                      <p className="text-muted-foreground mt-0.5 leading-relaxed">
                        {t(plan.limitsKey)}
                      </p>
                    </div>
                  </div>

                  {/* Included Services */}
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Included Services
                      </p>
                      <p className="text-muted-foreground mt-0.5 leading-relaxed">
                        {t(plan.includedKey)}
                      </p>
                    </div>
                  </div>

                  {/* Paid Add-ons */}
                  <div className="flex items-start gap-2.5 pt-2 border-t border-border/60">
                    <PlusCircle className="size-4 text-secondary-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Optional Add-ons
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                        {t(plan.addonsKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card CTA: View Plan Details */}
              <div className="pt-4 border-t border-border/60">
                <CTAButton
                  action="viewPlanDetails"
                  variant="outline"
                  locale={locale}
                  size="md"
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Centralized Terms & Add-ons Disclaimer ── */}
        <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card/60 p-3.5 sm:p-4 text-center mb-8">
          <p className="text-xs text-muted-foreground leading-relaxed">
            {t("pricingSection.disclaimer")}
          </p>
        </div>

        {/* ── Section CTA: Compare All Plans ── */}
        <div className="flex justify-center">
          <CTAButton
            action="compareAllPlans"
            variant="primary"
            locale={locale}
            size="lg"
            showArrow
            className="px-7 py-3 text-sm rounded-lg shadow-xs hover:shadow-md transition-shadow"
          />
        </div>
      </div>
    </section>
  );
}
