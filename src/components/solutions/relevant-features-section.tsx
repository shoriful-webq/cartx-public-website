"use client";

import React from "react";
import Link from "next/link";
import {
  Package,
  ShoppingBag,
  Boxes,
  Store,
  CreditCard,
  Truck,
  BarChart3,
  Users,
  ArrowRight,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "@/components/Home/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const CORE_MODULES = [
  {
    slug: "product-management",
    nameKey: "featuresGrid.cat.products.name",
    descKey: "featuresGrid.cat.products.desc",
    icon: Package,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    slug: "order-management",
    nameKey: "featuresGrid.cat.orders.name",
    descKey: "featuresGrid.cat.orders.desc",
    icon: ShoppingBag,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    slug: "inventory-management",
    nameKey: "featuresGrid.cat.inventory.name",
    descKey: "featuresGrid.cat.inventory.desc",
    icon: Boxes,
    color: "text-sky-600 dark:text-sky-400",
    bg: "bg-sky-500/10",
  },
  {
    slug: "store-builder",
    nameKey: "featuresGrid.cat.storefront.name",
    descKey: "featuresGrid.cat.storefront.desc",
    icon: Store,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    slug: "payment-management",
    nameKey: "featuresGrid.cat.payments.name",
    descKey: "featuresGrid.cat.payments.desc",
    icon: CreditCard,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    slug: "shipping",
    nameKey: "featuresGrid.cat.shipping.name",
    descKey: "featuresGrid.cat.shipping.desc",
    icon: Truck,
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-500/10",
  },
  {
    slug: "analytics",
    nameKey: "featuresGrid.cat.analytics.name",
    descKey: "featuresGrid.cat.analytics.desc",
    icon: BarChart3,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    slug: "customer-management",
    nameKey: "featuresGrid.cat.customers.name",
    descKey: "featuresGrid.cat.customers.desc",
    icon: Users,
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-500/10",
  },
];

export interface RelevantFeaturesSectionProps {
  className?: string;
}

export function RelevantFeaturesSection({ className }: RelevantFeaturesSectionProps) {
  const { t } = useLanguage();

  return (
    <section
      id="relevant-features"
      aria-label="Relevant Platform Features"
      className={cn("section-padding bg-background border-b border-border transition-colors", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={t("solutionsFeatures.eyebrow")}
            eyebrowIcon={Layers}
            title={t("solutionsFeatures.title")}
            titleGradient={true}
            description={t("solutionsFeatures.description")}
            size="default"
            className="mb-10 sm:mb-12 lg:mb-14"
          />
        </ScrollReveal>

        {/* 8 Core Feature Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_MODULES.map((module, idx) => {
            const Icon = module.icon;

            return (
              <ScrollReveal key={module.slug} delay={(idx % 4) * 50}>
                <Link
                  href={`/features/${module.slug}`}
                  className="group h-full rounded-2xl border border-border bg-card p-5 shadow-xs hover:border-primary/50 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={cn(
                          "size-10 rounded-xl flex items-center justify-center shrink-0 border border-border/60 transition-transform duration-200 group-hover:scale-105",
                          module.bg,
                          module.color
                        )}
                      >
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {t(module.nameKey)}
                      </h3>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {t(module.descKey)}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>{t("solutionsGrid.viewFeatures")}</span>
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Link to /features */}
        <div className="mt-8 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
          >
            <span>{t("solutionsFeatures.viewAll")}</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

