"use client";

import React from "react";
import Link from "next/link";
import {
  Store,
  Package,
  ShoppingBag,
  Boxes,
  Users,
  CreditCard,
  Truck,
  Percent,
  BarChart3,
  Smartphone,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "@/components/Home/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface CategoryCardItem {
  id: string;
  nameKey: string;
  descKey: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  capKeys: string[];
  href: string;
  isOverviewOnly?: boolean;
}

const CATEGORY_CARDS: CategoryCardItem[] = [
  {
    id: "storefront",
    nameKey: "featuresGrid.cat.storefront.name",
    descKey: "featuresGrid.cat.storefront.desc",
    icon: Store,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    capKeys: [
      "featuresGrid.cat.storefront.cap1",
      "featuresGrid.cat.storefront.cap2",
      "featuresGrid.cat.storefront.cap3",
      "featuresGrid.cat.storefront.cap4",
    ],
    href: "/features/store-builder",
  },
  {
    id: "products",
    nameKey: "featuresGrid.cat.products.name",
    descKey: "featuresGrid.cat.products.desc",
    icon: Package,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    capKeys: [
      "featuresGrid.cat.products.cap1",
      "featuresGrid.cat.products.cap2",
      "featuresGrid.cat.products.cap3",
      "featuresGrid.cat.products.cap4",
    ],
    href: "/features/product-management",
  },
  {
    id: "orders",
    nameKey: "featuresGrid.cat.orders.name",
    descKey: "featuresGrid.cat.orders.desc",
    icon: ShoppingBag,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    capKeys: [
      "featuresGrid.cat.orders.cap1",
      "featuresGrid.cat.orders.cap2",
      "featuresGrid.cat.orders.cap3",
      "featuresGrid.cat.orders.cap4",
    ],
    href: "/features/order-management",
  },
  {
    id: "inventory",
    nameKey: "featuresGrid.cat.inventory.name",
    descKey: "featuresGrid.cat.inventory.desc",
    icon: Boxes,
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-600 dark:text-sky-400",
    capKeys: [
      "featuresGrid.cat.inventory.cap1",
      "featuresGrid.cat.inventory.cap2",
      "featuresGrid.cat.inventory.cap3",
      "featuresGrid.cat.inventory.cap4",
    ],
    href: "/features/inventory-management",
  },
  {
    id: "customers",
    nameKey: "featuresGrid.cat.customers.name",
    descKey: "featuresGrid.cat.customers.desc",
    icon: Users,
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    capKeys: [
      "featuresGrid.cat.customers.cap1",
      "featuresGrid.cat.customers.cap2",
      "featuresGrid.cat.customers.cap3",
      "featuresGrid.cat.customers.cap4",
    ],
    href: "/features/customer-management",
  },
  {
    id: "payments",
    nameKey: "featuresGrid.cat.payments.name",
    descKey: "featuresGrid.cat.payments.desc",
    icon: CreditCard,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    capKeys: [
      "featuresGrid.cat.payments.cap1",
      "featuresGrid.cat.payments.cap2",
      "featuresGrid.cat.payments.cap3",
      "featuresGrid.cat.payments.cap4",
    ],
    href: "/features/payment-management",
  },
  {
    id: "shipping",
    nameKey: "featuresGrid.cat.shipping.name",
    descKey: "featuresGrid.cat.shipping.desc",
    icon: Truck,
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-600 dark:text-teal-400",
    capKeys: [
      "featuresGrid.cat.shipping.cap1",
      "featuresGrid.cat.shipping.cap2",
      "featuresGrid.cat.shipping.cap3",
      "featuresGrid.cat.shipping.cap4",
    ],
    href: "/features/shipping",
  },
  {
    id: "marketing",
    nameKey: "featuresGrid.cat.marketing.name",
    descKey: "featuresGrid.cat.marketing.desc",
    icon: Percent,
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600 dark:text-rose-400",
    capKeys: [
      "featuresGrid.cat.marketing.cap1",
      "featuresGrid.cat.marketing.cap2",
      "featuresGrid.cat.marketing.cap3",
      "featuresGrid.cat.marketing.cap4",
    ],
    href: "#marketing",
    isOverviewOnly: true,
  },
  {
    id: "analytics",
    nameKey: "featuresGrid.cat.analytics.name",
    descKey: "featuresGrid.cat.analytics.desc",
    icon: BarChart3,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
    capKeys: [
      "featuresGrid.cat.analytics.cap1",
      "featuresGrid.cat.analytics.cap2",
      "featuresGrid.cat.analytics.cap3",
      "featuresGrid.cat.analytics.cap4",
    ],
    href: "/features/analytics",
  },
  {
    id: "mobile-apps",
    nameKey: "featuresGrid.cat.mobileApps.name",
    descKey: "featuresGrid.cat.mobileApps.desc",
    icon: Smartphone,
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    capKeys: [
      "featuresGrid.cat.mobileApps.cap1",
      "featuresGrid.cat.mobileApps.cap2",
      "featuresGrid.cat.mobileApps.cap3",
      "featuresGrid.cat.mobileApps.cap4",
    ],
    href: "/white-label-apps",
  },
  {
    id: "integrations",
    nameKey: "featuresGrid.cat.integrations.name",
    descKey: "featuresGrid.cat.integrations.desc",
    icon: Layers,
    iconBg: "bg-blue-600/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    capKeys: [
      "featuresGrid.cat.integrations.cap1",
      "featuresGrid.cat.integrations.cap2",
      "featuresGrid.cat.integrations.cap3",
      "featuresGrid.cat.integrations.cap4",
    ],
    href: "/integrations",
  },
  {
    id: "security",
    nameKey: "featuresGrid.cat.security.name",
    descKey: "featuresGrid.cat.security.desc",
    icon: ShieldCheck,
    iconBg: "bg-slate-500/10",
    iconColor: "text-slate-700 dark:text-slate-300",
    capKeys: [
      "featuresGrid.cat.security.cap1",
      "featuresGrid.cat.security.cap2",
      "featuresGrid.cat.security.cap3",
      "featuresGrid.cat.security.cap4",
    ],
    href: "#security",
    isOverviewOnly: true,
  },
];

export interface FeatureCategoryGridProps {
  className?: string;
}

export function FeatureCategoryGrid({ className }: FeatureCategoryGridProps) {
  const { t } = useLanguage();
  const lenis = useLenis();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 140;
        if (lenis) {
          lenis.scrollTo(top, {
            duration: 1.0,
            easing: (val) => Math.min(1, 1.001 - Math.pow(2, -10 * val)),
          });
        } else {
          window.scrollTo({ top, behavior: "smooth" });
        }
        history.replaceState(null, "", href);
      }
    }
  };

  return (
    <section
      id="feature-categories"
      aria-label="Feature Category Discovery"
      className={cn(
        "section-padding bg-background border-b border-border transition-colors",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={t("featuresGrid.eyebrow")}
            eyebrowIcon={LayoutGrid}
            title={t("featuresGrid.title")}
            titleGradient={true}
            description={t("featuresGrid.description")}
            size="default"
            className="mb-10 sm:mb-12 lg:mb-14"
          />
        </ScrollReveal>

        {/* ── 12 Category Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORY_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.id} delay={(idx % 3) * 60}>
                <div className="group relative rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/40 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Top: Icon + Name + Optional Overview Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "size-10 rounded-xl flex items-center justify-center shrink-0 border border-border/60 transition-transform duration-200 group-hover:scale-105",
                            card.iconBg,
                            card.iconColor
                          )}
                        >
                          <Icon className="size-5" />
                        </div>
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                          <Link
                            href={card.href}
                            onClick={(e) => handleAnchorClick(e, card.href)}
                            className="hover:underline"
                          >
                            {t(card.nameKey)}
                          </Link>
                        </h3>
                      </div>

                      {card.isOverviewOnly && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border border-border/80 bg-muted/60 text-muted-foreground select-none shrink-0">
                          {t("featuresGrid.overviewBadge")}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                      {t(card.descKey)}
                    </p>

                    {/* Capabilities List */}
                    <ul className="space-y-2 mb-6" role="list">
                      {card.capKeys.map((capKey, cIdx) => (
                        <li
                          key={cIdx}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{t(capKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom: Intentional Action Link */}
                  <div className="pt-3 border-t border-border/60">
                    <Link
                      href={card.href}
                      onClick={(e) => handleAnchorClick(e, card.href)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
                    >
                      <span>
                        {card.isOverviewOnly
                          ? t("featuresGrid.viewOverview")
                          : t("featuresGrid.learnMore")}
                      </span>
                      {card.isOverviewOnly ? (
                        <ArrowDown className="size-3 transition-transform duration-200 group-hover:translate-y-0.5" />
                      ) : (
                        <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-1" />
                      )}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
