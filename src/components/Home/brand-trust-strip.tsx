"use client";

import React from "react";
import {
  Store,
  ShoppingBag,
  Boxes,
  CreditCard,
  BarChart3,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface VerifiedIntegrationLogo {
  name: string;
  category?: string;
  logoUrl?: string;
  icon?: LucideIcon;
}

export interface BrandTrustStripProps {
  /**
   * Optional list of verified official integration partners.
   * Strictly populated only when official partner agreements/integrations are verified.
   */
  verifiedLogos?: VerifiedIntegrationLogo[];
  /**
   * Disabled by default to comply with strict verification policy.
   * Never displays fabricated testimonials or unverified statistics.
   */
  showLogos?: boolean;
  className?: string;
}

interface PillarItem {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

const PILLARS: PillarItem[] = [
  {
    id: "store-management",
    icon: Store,
    titleKey: "trustStrip.pillar1.title",
    descKey: "trustStrip.pillar1.desc",
  },
  {
    id: "order-management",
    icon: ShoppingBag,
    titleKey: "trustStrip.pillar2.title",
    descKey: "trustStrip.pillar2.desc",
  },
  {
    id: "inventory-control",
    icon: Boxes,
    titleKey: "trustStrip.pillar3.title",
    descKey: "trustStrip.pillar3.desc",
  },
  {
    id: "payments-delivery",
    icon: CreditCard,
    titleKey: "trustStrip.pillar4.title",
    descKey: "trustStrip.pillar4.desc",
  },
  {
    id: "business-insights",
    icon: BarChart3,
    titleKey: "trustStrip.pillar5.title",
    descKey: "trustStrip.pillar5.desc",
  },
];

export function BrandTrustStrip({
  verifiedLogos = [],
  showLogos = false,
  className,
}: BrandTrustStripProps) {
  const { t } = useLanguage();

  return (
    <section
      aria-label="Core Platform Pillars"
      className={cn(
        "relative border-b border-border bg-card/60 section-padding transition-colors",
        className
      )}
    >
      <div className="container">
        {/* ── Section Header (Standardized Hero-Aligned Lockup) ── */}
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            eyebrow={t("trustStrip.badge")}
            eyebrowIcon={ShieldCheck}
            title={t("trustStrip.title")}
            titleGradient={true}
            size="compact"
            className="mb-8 sm:mb-10"
          />
        </ScrollReveal>

        {/* 5 Core Platform Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4">
          {PILLARS.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.id}
                direction="up"
                delay={idx * 60}
                className="h-full"
              >
                <div className="group relative h-full rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card flex flex-col justify-between">
                  <div>
                    <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3.5 transition-all duration-200 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                      <IconComponent className="size-5 shrink-0" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1 leading-snug">
                      {t(pillar.titleKey)}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {t(pillar.descKey)}
                    </p>
                  </div>

                  {/* Subtle indicator accent line on hover */}
                  <div className="mt-3.5 h-0.5 w-6 rounded-full bg-transparent group-hover:bg-secondary-accent transition-colors" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Optional Verified Integrations Logo Section (Disabled by default) */}
        {showLogos && verifiedLogos.length > 0 && (
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              {t("trustStrip.verifiedIntegrations")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {verifiedLogos.map((item, idx) => {
                const LogoIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {LogoIcon && <LogoIcon className="size-4 text-primary" />}
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

