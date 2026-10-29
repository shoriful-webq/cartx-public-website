"use client";

import React from "react";
import Link from "next/link";
import {
  CreditCard,
  CheckCircle2,
  Minus,
  Info,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { SectionHeading } from "@/components/Home/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface FeatureRow {
  nameKey: string;
  categoryKey: string;
  starter: string | boolean;
  growth: string | boolean;
  scale: string | boolean;
}

const COMPARISON_ROWS: FeatureRow[] = [
  {
    nameKey: "featuresPlan.row.products.name",
    categoryKey: "featuresPlan.row.products.category",
    starter: "featuresPlan.val.upTo100",
    growth: "featuresPlan.val.upTo2500",
    scale: "featuresPlan.val.unlimited",
  },
  {
    nameKey: "featuresPlan.row.staff.name",
    categoryKey: "featuresPlan.row.staff.category",
    starter: "featuresPlan.val.1account",
    growth: "featuresPlan.val.5accounts",
    scale: "featuresPlan.val.unlimited",
  },
  {
    nameKey: "featuresPlan.row.hosting.name",
    categoryKey: "featuresPlan.row.hosting.category",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    nameKey: "featuresPlan.row.orders.name",
    categoryKey: "featuresPlan.row.orders.category",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    nameKey: "featuresPlan.row.cod.name",
    categoryKey: "featuresPlan.row.cod.category",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    nameKey: "featuresPlan.row.gateways.name",
    categoryKey: "featuresPlan.row.gateways.category",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    nameKey: "featuresPlan.row.invoices.name",
    categoryKey: "featuresPlan.row.invoices.category",
    starter: "featuresPlan.val.basic",
    growth: true,
    scale: true,
  },
  {
    nameKey: "featuresPlan.row.courier.name",
    categoryKey: "featuresPlan.row.courier.category",
    starter: "featuresPlan.val.basic",
    growth: "featuresPlan.val.automated",
    scale: "featuresPlan.val.priorityApi",
  },
  {
    nameKey: "featuresPlan.row.discounts.name",
    categoryKey: "featuresPlan.row.discounts.category",
    starter: "featuresPlan.val.basic",
    growth: "featuresPlan.val.advancedRules",
    scale: "featuresPlan.val.fullSuite",
  },
  {
    nameKey: "featuresPlan.row.analytics.name",
    categoryKey: "featuresPlan.row.analytics.category",
    starter: "featuresPlan.val.basicSummaries",
    growth: "featuresPlan.val.expandedReports",
    scale: "featuresPlan.val.multiChannel",
  },
  {
    nameKey: "featuresPlan.row.domain.name",
    categoryKey: "featuresPlan.row.domain.category",
    starter: "featuresPlan.val.addonSetup",
    growth: "featuresPlan.val.included",
    scale: "featuresPlan.val.included",
  },
  {
    nameKey: "featuresPlan.row.apps.name",
    categoryKey: "featuresPlan.row.apps.category",
    starter: false,
    growth: "featuresPlan.val.addonCompilation",
    scale: "featuresPlan.val.customMobileBuilds",
  },
  {
    nameKey: "featuresPlan.row.support.name",
    categoryKey: "featuresPlan.row.support.category",
    starter: "featuresPlan.val.standard",
    growth: "featuresPlan.val.standard",
    scale: "featuresPlan.val.priorityDedicated",
  },
];

export interface PlanAvailabilitySectionProps {
  className?: string;
}

export function PlanAvailabilitySection({ className }: PlanAvailabilitySectionProps) {
  const { t, locale } = useLanguage();

  return (
    <section
      id="plan-availability"
      aria-label="Feature Plan Availability"
      className={cn("section-padding bg-card/30 border-b border-border transition-colors", className)}
    >
      <div className="container">
        {/* ── Section Heading ── */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={t("featuresPlan.eyebrow")}
            eyebrowIcon={CreditCard}
            title={t("featuresPlan.title")}
            titleGradient={true}
            description={t("featuresPlan.description")}
            size="default"
            className="mb-8 sm:mb-10 lg:mb-12"
          />

          {/* ── Launch Transparency Status Pill ── */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3.5 py-1 text-[11px] font-medium text-muted-foreground shadow-xs text-center">
              <Info className="size-3.5 text-primary shrink-0" />
              <span>{t("pricingSection.statusPending")}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Comparison Table (Desktop) / Contained Horizontal Scroll (Mobile) ── */}
        <ScrollReveal delay={100}>
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs mb-10 overflow-x-auto no-scrollbar">
            <div className="min-w-[620px] lg:min-w-0">
              {/* Table Header */}
              <div className="grid grid-cols-12 p-4 sm:p-5 bg-muted/40 border-b border-border text-xs sm:text-sm font-bold text-foreground">
                <div className="col-span-5 sm:col-span-6">{t("featuresPlan.coreCapabilities")}</div>
                <div className="col-span-2 text-center">{t("featuresPlan.starter")}</div>
                <div className="col-span-2 text-center text-primary">
                  {t("featuresPlan.growth")}{" "}
                  <span className="hidden sm:inline text-[10px] font-medium">({t("featuresPlan.popular")})</span>
                </div>
                <div className="col-span-3 sm:col-span-2 text-center">{t("featuresPlan.scale")}</div>
              </div>

              {/* Comparison Rows */}
              <div className="divide-y divide-border/60">
                {COMPARISON_ROWS.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 p-3.5 sm:p-4 text-xs sm:text-sm items-center hover:bg-primary/[0.02] transition-colors"
                  >
                    <div className="col-span-5 sm:col-span-6 pr-2">
                      <p className="font-semibold text-foreground leading-snug">{t(row.nameKey)}</p>
                      <p className="text-[10px] text-muted-foreground">{t(row.categoryKey)}</p>
                    </div>

                    {/* Starter */}
                    <div className="col-span-2 text-center flex items-center justify-center text-xs">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <CheckCircle2 className="size-4 text-success" />
                        ) : (
                          <Minus className="size-4 text-muted-foreground/40" />
                        )
                      ) : (
                        <span className="font-medium text-muted-foreground text-[11px] sm:text-xs">
                          {t(row.starter)}
                        </span>
                      )}
                    </div>

                    {/* Growth */}
                    <div className="col-span-2 text-center flex items-center justify-center text-xs bg-primary/[0.03] py-1 rounded">
                      {typeof row.growth === "boolean" ? (
                        row.growth ? (
                          <CheckCircle2 className="size-4 text-primary" />
                        ) : (
                          <Minus className="size-4 text-muted-foreground/40" />
                        )
                      ) : (
                        <span className="font-bold text-primary text-[11px] sm:text-xs">
                          {t(row.growth)}
                        </span>
                      )}
                    </div>

                    {/* Scale */}
                    <div className="col-span-3 sm:col-span-2 text-center flex items-center justify-center text-xs">
                      {typeof row.scale === "boolean" ? (
                        row.scale ? (
                          <CheckCircle2 className="size-4 text-foreground" />
                        ) : (
                          <Minus className="size-4 text-muted-foreground/40" />
                        )
                      ) : (
                        <span className="font-semibold text-foreground text-[11px] sm:text-xs">
                          {t(row.scale)}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Disclaimers & CTAs ── */}
        <ScrollReveal delay={150}>
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-5">
            <p className="text-xs text-muted-foreground leading-relaxed flex items-center gap-1.5 text-center">
              <ShieldCheck className="size-3.5 text-primary shrink-0" />
              <span>{t("pricingSection.disclaimer")}</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <CTAButton
                action="viewPricing"
                variant="primary"
                locale={locale}
                size="lg"
                showArrow
                className="px-8 py-3 text-sm rounded-lg shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all"
              />
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground px-4 py-2 transition-colors group"
              >
                <span>{t("featuresPlan.contactCustom")}</span>
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
