"use client";

import React from "react";
import {
  Store,
  Smartphone,
  Shirt,
  Laptop,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

interface DemoStoreCard {
  id: string;
  nameKey: string;
  categoryKey: string;
  themeKey: string;
  descKey: string;
  icon: LucideIcon;
  badgeBg: string;
  badgeColor: string;
  accentGradient: string;
  samplePrices: string[];
}

const DEMO_STORES: DemoStoreCard[] = [
  {
    id: "aura-lifestyle",
    nameKey: "demoStoresSection.store1.name",
    categoryKey: "demoStoresSection.store1.category",
    themeKey: "demoStoresSection.store1.theme",
    descKey: "demoStoresSection.store1.desc",
    icon: Shirt,
    badgeBg: "bg-primary/10",
    badgeColor: "text-primary",
    accentGradient: "from-blue-600/15 via-sky-400/10 to-transparent",
    samplePrices: ["৳1,850", "৳2,400", "৳980"],
  },
  {
    id: "volt-electronics",
    nameKey: "demoStoresSection.store2.name",
    categoryKey: "demoStoresSection.store2.category",
    themeKey: "demoStoresSection.store2.theme",
    descKey: "demoStoresSection.store2.desc",
    icon: Laptop,
    badgeBg: "bg-secondary-accent/15",
    badgeColor: "text-secondary-accent",
    accentGradient: "from-sky-500/15 via-cyan-400/10 to-transparent",
    samplePrices: ["৳3,500", "৳5,999", "৳1,450"],
  },
  {
    id: "lumina-beauty",
    nameKey: "demoStoresSection.store3.name",
    categoryKey: "demoStoresSection.store3.category",
    themeKey: "demoStoresSection.store3.theme",
    descKey: "demoStoresSection.store3.desc",
    icon: Heart,
    badgeBg: "bg-rose-500/10",
    badgeColor: "text-rose-600 dark:text-rose-400",
    accentGradient: "from-rose-500/15 via-pink-400/10 to-transparent",
    samplePrices: ["৳1,650", "৳890", "৳2,250"],
  },
];

export interface DemoStoreShowcaseSectionProps {
  className?: string;
}

export function DemoStoreShowcaseSection({
  className,
}: DemoStoreShowcaseSectionProps) {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-label="Demo Store Showcase"
      className={cn(
        "relative section-padding border-b border-border bg-background transition-colors overflow-hidden",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <SectionHeading
          eyebrow={t("demoStoresSection.badge")}
          eyebrowIcon={Store}
          title={t("demoStoresSection.title")}
          titleGradient={true}
          description={t("demoStoresSection.description")}
          size="default"
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        {/* ── Factual Conceptual Demo Notice ── */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3.5 py-1 text-[11px] font-medium text-muted-foreground shadow-xs text-center">
            <span className="size-1.5 rounded-full bg-primary shrink-0" />
            <span>{t("demoStoresSection.conceptNotice")}</span>
          </div>
        </div>

        {/* ── 3 Demo Store Cards Grid (3-col desktop, stacked mobile) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10 sm:mb-12">
          {DEMO_STORES.map((store) => {
            const CategoryIcon = store.icon;
            return (
              <div
                key={store.id}
                className="group relative rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs transition-all duration-200 hover:border-primary/40 hover:shadow-card flex flex-col justify-between h-full"
              >
                <div>
                  {/* Storefront Visual Preview Mockup */}
                  <div className="relative rounded-lg border border-border/80 bg-muted/20 overflow-hidden mb-4 aspect-[16/10] flex flex-col select-none">
                    {/* Simulated Mini Browser Chrome */}
                    <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-border/60 bg-muted/40">
                      <div className="flex items-center gap-1">
                        <span className="size-1.5 rounded-full bg-error/70" />
                        <span className="size-1.5 rounded-full bg-warning/70" />
                        <span className="size-1.5 rounded-full bg-success/70" />
                      </div>
                      <span className="text-[9px] font-mono font-medium text-muted-foreground/70 truncate max-w-[120px]">
                        demo.{store.id}.cartx.app
                      </span>
                      <span className="text-[8.5px] font-semibold text-primary/80 uppercase tracking-wider">
                        Concept
                      </span>
                    </div>

                    {/* Storefront Teaser */}
                    <div className="relative flex-1 p-2.5 flex flex-col justify-between overflow-hidden">
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-br opacity-50",
                          store.accentGradient
                        )}
                        aria-hidden="true"
                      />

                      <div className="relative flex items-center justify-between">
                        <span className="text-[10px] font-bold text-foreground truncate">
                          {t(store.nameKey)}
                        </span>
                        <div className="flex items-center gap-1 text-[8.5px] font-medium text-muted-foreground">
                          <Smartphone className="size-2.5 text-primary" />
                          <span>{t("demoStoresSection.mobileFriendly")}</span>
                        </div>
                      </div>

                      {/* Mini Hero Banner */}
                      <div className="relative rounded-md bg-card/90 border border-border/60 p-2 text-center my-1 shadow-2xs">
                        <p className="text-[9.5px] font-extrabold text-foreground tracking-tight">
                          {t(store.themeKey)}
                        </p>
                        <div className="flex items-center justify-center gap-1 mt-0.5">
                          <span className="text-[7.5px] font-semibold text-primary">Live Storefront</span>
                        </div>
                      </div>

                      {/* Mini Cards Row with Realistic Preview Items */}
                      <div className="relative grid grid-cols-3 gap-1">
                        {store.samplePrices.map((price, idx) => (
                          <div key={idx} className="rounded border border-border/60 bg-card p-1 text-[7.5px] text-center">
                            <div className="h-4 rounded bg-primary/10 flex items-center justify-center font-bold text-primary mb-0.5">
                              {price}
                            </div>
                            <span className="text-[7px] text-muted-foreground block truncate">
                              Item {idx + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Store Info Lockup */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {t(store.nameKey)}
                    </h3>

                    {/* Category Pill */}
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold shrink-0 border border-border/60",
                        store.badgeBg,
                        store.badgeColor
                      )}
                    >
                      <CategoryIcon className="size-3" />
                      <span>{t(store.categoryKey)}</span>
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {t(store.descKey)}
                  </p>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium text-muted-foreground/80">
                    {t(store.themeKey)}
                  </span>

                  <CTAButton
                    action="visitDemoStore"
                    variant="outline"
                    locale={locale}
                    size="sm"
                    className="text-xs"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Section CTA ── */}
        <div className="flex justify-center">
          <CTAButton
            action="exploreDemoStores"
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

