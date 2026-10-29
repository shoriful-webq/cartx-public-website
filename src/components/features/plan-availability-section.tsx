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
import { cn } from "@/lib/utils";

interface FeatureRow {
  name: string;
  category: string;
  starter: string | boolean;
  growth: string | boolean;
  scale: string | boolean;
}

const COMPARISON_ROWS: FeatureRow[] = [
  {
    name: "Product Catalog Limit",
    category: "Catalog & Products",
    starter: "Up to 100",
    growth: "Up to 2,500",
    scale: "Unlimited",
  },
  {
    name: "Staff Accounts",
    category: "Store Administration",
    starter: "1 Account",
    growth: "5 Accounts",
    scale: "Unlimited",
  },
  {
    name: "Web Storefront Hosting & SSL",
    category: "Storefront",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    name: "Order Processing & Tracking",
    category: "Orders",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    name: "Cash on Delivery (COD) Workflow",
    category: "Payments",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    name: "bKash & Nagad Gateway APIs",
    category: "Payments",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    name: "Automated Invoices & Receipts",
    category: "Orders",
    starter: "Basic",
    growth: true,
    scale: true,
  },
  {
    name: "Courier Booking (Pathao & Steadfast)",
    category: "Shipping",
    starter: "Manual",
    growth: "Automated",
    scale: "Priority API",
  },
  {
    name: "Discounts & Promotional Coupons",
    category: "Marketing",
    starter: "Basic",
    growth: "Advanced Rules",
    scale: "Full Suite",
  },
  {
    name: "Store Performance Analytics",
    category: "Analytics",
    starter: "Basic Summaries",
    growth: "Expanded Reports",
    scale: "Multi-Channel Priority",
  },
  {
    name: "Custom Domain Mapping",
    category: "Storefront",
    starter: "Add-on Setup",
    growth: "Included",
    scale: "Included",
  },
  {
    name: "White-label Mobile Apps",
    category: "Mobile",
    starter: false,
    growth: "Add-on Compilation",
    scale: "Custom Mobile Builds",
  },
  {
    name: "Customer Support Channel",
    category: "Support",
    starter: "Standard",
    growth: "Standard",
    scale: "Priority Dedicated",
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

        {/* ── Comparison Table (Desktop) / Cards (Mobile) ── */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs mb-10">
          {/* Table Header */}
          <div className="grid grid-cols-12 p-4 sm:p-5 bg-muted/40 border-b border-border text-xs sm:text-sm font-bold text-foreground">
            <div className="col-span-5 sm:col-span-6">Core Capabilities</div>
            <div className="col-span-2 text-center">Starter</div>
            <div className="col-span-2 text-center text-primary">
              Growth <span className="hidden sm:inline text-[10px] font-medium">(Popular)</span>
            </div>
            <div className="col-span-3 sm:col-span-2 text-center">Scale</div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-border/60">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-3.5 sm:p-4 text-xs sm:text-sm items-center hover:bg-muted/20 transition-colors"
              >
                <div className="col-span-5 sm:col-span-6 pr-2">
                  <p className="font-semibold text-foreground leading-snug">{row.name}</p>
                  <p className="text-[10px] text-muted-foreground">{row.category}</p>
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
                      {row.starter}
                    </span>
                  )}
                </div>

                {/* Growth */}
                <div className="col-span-2 text-center flex items-center justify-center text-xs bg-primary/[0.02] py-1 rounded">
                  {typeof row.growth === "boolean" ? (
                    row.growth ? (
                      <CheckCircle2 className="size-4 text-primary" />
                    ) : (
                      <Minus className="size-4 text-muted-foreground/40" />
                    )
                  ) : (
                    <span className="font-bold text-primary text-[11px] sm:text-xs">
                      {row.growth}
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
                      {row.scale}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Disclaimers & CTAs ── */}
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
              className="px-8 py-3 text-sm rounded-lg shadow-xs hover:shadow-md transition-shadow"
            />
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground px-4 py-2 transition-colors"
            >
              <span>Need custom requirements? Contact our team</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

