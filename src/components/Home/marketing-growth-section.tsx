"use client";

import React from "react";
import {
  Tag,
  Search,
  Compass,
  LayoutTemplate,
  BarChart3,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

interface MarketingFeatureCard {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  isPlanned?: boolean;
}

const MARKETING_CARDS: MarketingFeatureCard[] = [
  {
    id: "discount-coupon",
    icon: Tag,
    titleKey: "marketingGrowth.card1.title",
    descKey: "marketingGrowth.card1.desc",
  },
  {
    id: "seo-settings",
    icon: Search,
    titleKey: "marketingGrowth.card2.title",
    descKey: "marketingGrowth.card2.desc",
  },
  {
    id: "product-discovery",
    icon: Compass,
    titleKey: "marketingGrowth.card3.title",
    descKey: "marketingGrowth.card3.desc",
  },
  {
    id: "promotional-landing-pages",
    icon: LayoutTemplate,
    titleKey: "marketingGrowth.card4.title",
    descKey: "marketingGrowth.card4.desc",
    isPlanned: true,
  },
  {
    id: "analytics-integrations",
    icon: BarChart3,
    titleKey: "marketingGrowth.card5.title",
    descKey: "marketingGrowth.card5.desc",
  },
  {
    id: "campaign-tracking",
    icon: Target,
    titleKey: "marketingGrowth.card6.title",
    descKey: "marketingGrowth.card6.desc",
  },
];

export interface MarketingGrowthSectionProps {
  className?: string;
}

export function MarketingGrowthSection({
  className,
}: MarketingGrowthSectionProps) {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-label="Marketing and Growth Tools"
      className={cn(
        "relative section-padding border-b border-border bg-card/30 transition-colors overflow-hidden",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <SectionHeading
          eyebrow={t("marketingGrowth.badge")}
          eyebrowIcon={TrendingUp}
          title={t("marketingGrowth.title")}
          titleGradient={true}
          description={t("marketingGrowth.description")}
          size="default"
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        {/* ── 6 Feature Cards Grid (3-col desktop, 2-col tablet, 1-col mobile) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12">
          {MARKETING_CARDS.map((card) => {
            const Icon = card.icon;
            const isPlanned = Boolean(card.isPlanned);
            return (
              <div
                key={card.id}
                className="group relative rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs transition-all duration-200 hover:border-primary/40 hover:shadow-card flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Icon & Status Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-10 sm:size-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground shadow-xs">
                      <Icon className="size-5 shrink-0" />
                    </div>

                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-[10px] font-semibold border select-none",
                        isPlanned
                          ? "bg-muted text-muted-foreground border-border/80"
                          : "bg-success/10 text-success border-success/25"
                      )}
                    >
                      {isPlanned
                        ? t("marketingGrowth.statusPlanned")
                        : t("marketingGrowth.statusSupported")}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                    {t(card.titleKey)}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {t(card.descKey)}
                  </p>
                </div>

                {/* Subtle bottom indicator accent line on hover */}
                <div className="mt-5 pt-3.5 border-t border-border/60">
                  <div className="h-0.5 w-6 rounded-full bg-transparent group-hover:bg-secondary-accent transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Centralized Factual Accuracy Notice ── */}
        <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card/60 p-3.5 sm:p-4 text-center mb-8">
          <p className="text-xs text-muted-foreground leading-relaxed">
            {t("marketingGrowth.accuracyNotice")}
          </p>
        </div>

        {/* ── Section CTA ── */}
        <div className="flex justify-center">
          <CTAButton
            action="exploreMarketingFeatures"
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

