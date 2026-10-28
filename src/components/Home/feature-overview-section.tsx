"use client";

import React from "react";
import Link from "next/link";
import {
  Package,
  ClipboardList,
  Boxes,
  Users,
  CreditCard,
  Truck,
  Tag,
  BarChart3,
  ArrowRight,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

interface FeatureCardItem {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  href: string;
}

const FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: "product-management",
    icon: Package,
    titleKey: "featureOverview.card1.title",
    descKey: "featureOverview.card1.desc",
    href: "/features/product-management",
  },
  {
    id: "order-management",
    icon: ClipboardList,
    titleKey: "featureOverview.card2.title",
    descKey: "featureOverview.card2.desc",
    href: "/features/order-management",
  },
  {
    id: "inventory-management",
    icon: Boxes,
    titleKey: "featureOverview.card3.title",
    descKey: "featureOverview.card3.desc",
    href: "/features/inventory-management",
  },
  {
    id: "customer-management",
    icon: Users,
    titleKey: "featureOverview.card4.title",
    descKey: "featureOverview.card4.desc",
    href: "/features/customer-management",
  },
  {
    id: "payments",
    icon: CreditCard,
    titleKey: "featureOverview.card5.title",
    descKey: "featureOverview.card5.desc",
    href: "/features/payments",
  },
  {
    id: "shipping-courier",
    icon: Truck,
    titleKey: "featureOverview.card6.title",
    descKey: "featureOverview.card6.desc",
    href: "/features/shipping-and-courier",
  },
  {
    id: "promotions",
    icon: Tag,
    titleKey: "featureOverview.card7.title",
    descKey: "featureOverview.card7.desc",
    href: "/features/promotions",
  },
  {
    id: "analytics-reports",
    icon: BarChart3,
    titleKey: "featureOverview.card8.title",
    descKey: "featureOverview.card8.desc",
    href: "/features/analytics-and-reports",
  },
];

export interface FeatureOverviewSectionProps {
  className?: string;
}

export function FeatureOverviewSection({
  className,
}: FeatureOverviewSectionProps) {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-label="Product Feature Overview"
      className={cn(
        "relative section-padding border-b border-border bg-background transition-colors",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <SectionHeading
          eyebrow={t("featureOverview.badge")}
          eyebrowIcon={Layers}
          title={t("featureOverview.title")}
          titleGradient={true}
          description={t("featureOverview.description")}
          size="default"
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        {/* ── 8 Responsive Feature Cards Grid (4-col desktop, 2-col tablet, 1-col mobile) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12">
          {FEATURE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                className="group relative rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs transition-all duration-200 hover:border-primary/40 hover:shadow-card focus-visible:outline-2 focus-visible:outline-ring flex flex-col justify-between h-full"
              >
                <div>
                  <div className="size-10 sm:size-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5 shrink-0" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {t(card.descKey)}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>{t("featureOverview.viewFeature")}</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── Section CTA ── */}
        <div className="flex justify-center">
          <CTAButton
            action="exploreAllFeatures"
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

