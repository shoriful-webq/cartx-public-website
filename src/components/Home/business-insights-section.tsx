"use client";

import React from "react";
import {
  BarChart3,
  TrendingUp,
  Package,
  Boxes,
  CreditCard,
  ShoppingBag,
  Calendar,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

interface ChartBarData {
  label: string;
  heightPercent: number;
  amount: string;
}

const SALES_CHART_BARS: ChartBarData[] = [
  { label: "W1", heightPercent: 42, amount: "৳28k" },
  { label: "W2", heightPercent: 65, amount: "৳44k" },
  { label: "W3", heightPercent: 54, amount: "৳36k" },
  { label: "W4", heightPercent: 88, amount: "৳58k" },
  { label: "W5", heightPercent: 72, amount: "৳48k" },
  { label: "W6", heightPercent: 95, amount: "৳64k" },
];

interface TopProductItem {
  rank: string;
  nameKey: string;
  category: string;
  units: string;
  revenue: string;
  progressPercent: number;
}

const TOP_PRODUCTS: TopProductItem[] = [
  {
    rank: "01",
    nameKey: "businessInsights.topProducts.item1",
    category: "Apparel",
    units: "86",
    revenue: "৳84,200",
    progressPercent: 86,
  },
  {
    rank: "02",
    nameKey: "businessInsights.topProducts.item2",
    category: "Apparel",
    units: "64",
    revenue: "৳52,400",
    progressPercent: 64,
  },
  {
    rank: "03",
    nameKey: "businessInsights.topProducts.item3",
    category: "Pants",
    units: "48",
    revenue: "৳47,600",
    progressPercent: 48,
  },
];

export interface BusinessInsightsSectionProps {
  className?: string;
}

export function BusinessInsightsSection({
  className,
}: BusinessInsightsSectionProps) {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-label="Business Insights"
      className={cn(
        "relative section-padding border-b border-border bg-background transition-colors overflow-hidden",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <SectionHeading
          eyebrow={t("businessInsights.badge")}
          eyebrowIcon={BarChart3}
          title={t("businessInsights.title")}
          titleGradient={true}
          description={t("businessInsights.description")}
          size="default"
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        {/* ── Prominent Demo Data Badge ── */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3.5 py-1 text-[11px] font-medium text-muted-foreground shadow-xs">
            <span className="size-1.5 rounded-full bg-primary" />
            <span>{t("businessInsights.demoDataNotice")}</span>
          </div>
        </div>

        {/* ── Analytics Dashboard UI Preview Frame ── */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card shadow-card overflow-hidden mb-10 sm:mb-12">
          {/* Top Browser / Window Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border px-4 py-3 bg-muted/30 gap-2">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-error/70" />
              <span className="size-2 rounded-full bg-warning/70" />
              <span className="size-2 rounded-full bg-success/70" />
              <span className="ml-2 text-xs font-semibold text-foreground">
                analytics.cartx.app/overview
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground">
                <Calendar className="size-3 text-primary" />
                <span>{t("businessInsights.timeRange")}</span>
              </div>
              <span className="text-[10px] font-semibold text-primary uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                Live Overview
              </span>
            </div>
          </div>

          {/* Main Analytics Canvas Grid */}
          <div className="p-4 sm:p-6 lg:p-7 space-y-6">
            {/* Row 1: KPI Summary Cards & Sales Overview Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
              {/* Sales Overview Chart (7 Cols) */}
              <div className="lg:col-span-7 rounded-xl border border-border bg-muted/15 p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="size-4 text-primary" />
                      <h3 className="text-sm font-bold text-foreground">
                        {t("businessInsights.sales.title")}
                      </h3>
                    </div>
                    <span className="inline-flex items-center text-[11px] font-semibold text-success bg-success/10 px-2 py-0.5 rounded-md border border-success/20">
                      {t("businessInsights.sales.trend")}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                      {t("businessInsights.sales.revenue")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t("businessInsights.sales.revenueLabel")}
                    </span>
                  </div>
                </div>

                {/* Simulated CSS/SVG Bar Chart */}
                <div className="pt-4 border-t border-border/60">
                  <div className="h-32 sm:h-36 flex items-end justify-between gap-2 sm:gap-3 px-2 pb-2">
                    {SALES_CHART_BARS.map((bar, idx) => (
                      <div
                        key={idx}
                        className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group"
                      >
                        <span className="text-[9px] font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                          {bar.amount}
                        </span>
                        <div
                          className="w-full rounded-t-md bg-gradient-to-t from-primary/70 to-secondary-accent transition-all duration-300 group-hover:from-primary group-hover:to-primary"
                          style={{ height: `${bar.heightPercent}%` }}
                        />
                        <span className="text-[10px] font-semibold text-muted-foreground/80">
                          {bar.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Trends & Performance Metrics (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                {/* Order Trends Card */}
                <div className="rounded-xl border border-border bg-muted/15 p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="size-4 text-secondary-accent" />
                      <h4 className="text-sm font-bold text-foreground">
                        {t("businessInsights.orders.title")}
                      </h4>
                    </div>
                    <span className="text-[11px] font-semibold text-muted-foreground">
                      30-Day Activity
                    </span>
                  </div>

                  <div className="my-2">
                    <p className="text-xl sm:text-2xl font-bold text-foreground">
                      {t("businessInsights.orders.total")}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {t("businessInsights.orders.avgValue")}
                    </p>
                  </div>

                  {/* Micro activity wave line */}
                  <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Fulfillment Rate: 98.4%</span>
                    <span className="text-primary font-medium">100% Logged</span>
                  </div>
                </div>

                {/* Dual Operational Summaries (Inventory & Settlement) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Inventory Summary Mini-Card */}
                  <div className="rounded-xl border border-border bg-muted/15 p-3.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-1">
                      <Boxes className="size-3.5 text-success" />
                      <span className="text-[10px] font-bold text-success bg-success/10 px-1.5 py-0.5 rounded border border-success/20">
                        92% Health
                      </span>
                    </div>
                    <p className="text-xs font-bold text-foreground mt-1">
                      {t("businessInsights.inventory.title")}
                    </p>
                    <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                      {t("businessInsights.inventory.desc")}
                    </p>
                  </div>

                  {/* Payment Settlement Mini-Card */}
                  <div className="rounded-xl border border-border bg-muted/15 p-3.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-1">
                      <CreditCard className="size-3.5 text-primary" />
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20">
                        Split Share
                      </span>
                    </div>
                    <p className="text-xs font-bold text-foreground mt-1">
                      {t("businessInsights.payments.title")}
                    </p>
                    <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                      {t("businessInsights.payments.codShare")} • {t("businessInsights.payments.gatewayShare")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Top Selling Products Ranked Table */}
            <div className="rounded-xl border border-border bg-muted/15 p-4 sm:p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Package className="size-4 text-primary" />
                  <h3 className="text-sm font-bold text-foreground">
                    {t("businessInsights.topProducts.title")}
                  </h3>
                </div>
                <span className="text-xs text-muted-foreground">
                  By Sales Volume
                </span>
              </div>

              {/* Responsive Compact Table */}
              <div className="space-y-2.5">
                {TOP_PRODUCTS.map((prod) => (
                  <div
                    key={prod.rank}
                    className="rounded-lg border border-border/80 bg-card p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="font-mono text-xs font-bold text-primary/80 size-6 rounded bg-primary/10 flex items-center justify-center shrink-0">
                        {prod.rank}
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground truncate">
                          {t(prod.nameKey)}
                        </p>
                        <span className="text-[11px] text-muted-foreground">
                          {prod.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/50">
                      <div className="text-left sm:text-right">
                        <p className="font-bold text-foreground">{prod.revenue}</p>
                        <p className="text-[10px] text-muted-foreground">
                          {prod.units} {t("businessInsights.topProducts.colUnits")}
                        </p>
                      </div>

                      <div className="w-20 hidden sm:block">
                        <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${prod.progressPercent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Centralized Factual Accuracy Notice ── */}
        <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card/60 p-3.5 sm:p-4 text-center mb-8">
          <p className="text-xs text-muted-foreground leading-relaxed">
            {t("businessInsights.accuracyDisclaimer")}
          </p>
        </div>

        {/* ── Section CTA ── */}
        <div className="flex justify-center">
          <CTAButton
            action="exploreReports"
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

