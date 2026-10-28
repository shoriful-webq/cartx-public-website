"use client";

import React from "react";
import Link from "next/link";
import {
  Palette,
  Smartphone,
  Shirt,
  Laptop,
  Heart,
  ShoppingBasket,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

interface ThemeItem {
  id: string;
  nameKey: string;
  categoryKey: string;
  descKey: string;
  categoryIcon: LucideIcon;
  badgeBg: string;
  badgeColor: string;
  accentGradient: string;
  tagline: string;
  sampleItem: string;
  samplePrice: string;
  sampleTag: string;
  paletteDots: string[];
}

const THEME_PREVIEWS: ThemeItem[] = [
  {
    id: "fashion-apparel",
    nameKey: "themesSection.card1.name",
    categoryKey: "themesSection.card1.category",
    descKey: "themesSection.card1.desc",
    categoryIcon: Shirt,
    badgeBg: "bg-primary/10",
    badgeColor: "text-primary",
    accentGradient: "from-blue-500/20 via-sky-400/10 to-transparent",
    tagline: "Editorial & Apparel",
    sampleItem: "Linen Blazer",
    samplePrice: "৳2,450",
    sampleTag: "New Season",
    paletteDots: ["bg-slate-900", "bg-blue-600", "bg-amber-100"],
  },
  {
    id: "electronics-gadgets",
    nameKey: "themesSection.card2.name",
    categoryKey: "themesSection.card2.category",
    descKey: "themesSection.card2.desc",
    categoryIcon: Laptop,
    badgeBg: "bg-secondary-accent/15",
    badgeColor: "text-secondary-accent",
    accentGradient: "from-sky-500/20 via-cyan-400/10 to-transparent",
    tagline: "Tech & Specs",
    sampleItem: "Pro ANC Pods",
    samplePrice: "৳4,800",
    sampleTag: "Hi-Res Audio",
    paletteDots: ["bg-slate-950", "bg-sky-500", "bg-emerald-400"],
  },
  {
    id: "cosmetics-beauty",
    nameKey: "themesSection.card3.name",
    categoryKey: "themesSection.card3.category",
    descKey: "themesSection.card3.desc",
    categoryIcon: Heart,
    badgeBg: "bg-rose-500/10",
    badgeColor: "text-rose-600 dark:text-rose-400",
    accentGradient: "from-rose-500/20 via-pink-400/10 to-transparent",
    tagline: "Beauty & Wellness",
    sampleItem: "Botanical Serum",
    samplePrice: "৳1,650",
    sampleTag: "100% Organic",
    paletteDots: ["bg-rose-950", "bg-rose-400", "bg-pink-100"],
  },
  {
    id: "grocery-lifestyle",
    nameKey: "themesSection.card4.name",
    categoryKey: "themesSection.card4.category",
    descKey: "themesSection.card4.desc",
    categoryIcon: ShoppingBasket,
    badgeBg: "bg-emerald-500/10",
    badgeColor: "text-emerald-600 dark:text-emerald-400",
    accentGradient: "from-emerald-500/20 via-teal-400/10 to-transparent",
    tagline: "Organic & Pantry",
    sampleItem: "Farm Fresh Box",
    samplePrice: "৳650",
    sampleTag: "Same-Day",
    paletteDots: ["bg-emerald-950", "bg-emerald-500", "bg-lime-200"],
  },
];

export interface ThemeTemplatesSectionProps {
  className?: string;
}

export function ThemeTemplatesSection({ className }: ThemeTemplatesSectionProps) {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-label="Store Themes and Templates"
      className={cn(
        "relative section-padding border-b border-border bg-background transition-colors overflow-hidden",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <SectionHeading
          eyebrow={t("themesSection.badge")}
          eyebrowIcon={Palette}
          title={t("themesSection.title")}
          titleGradient={true}
          description={t("themesSection.description")}
          size="default"
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        {/* ── Transparent Concept Notice Banner ── */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1 text-[11px] font-medium text-muted-foreground shadow-xs">
            <span className="size-1.5 rounded-full bg-primary" />
            <span>{t("themesSection.notice")}</span>
          </div>
        </div>

        {/* ── 4 Category Theme Previews Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12">
          {THEME_PREVIEWS.map((theme) => {
            const CategoryIcon = theme.categoryIcon;
            return (
              <div
                key={theme.id}
                className="group relative rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs transition-all duration-200 hover:border-primary/40 hover:shadow-card flex flex-col justify-between h-full"
              >
                <div>
                  {/* Theme Thumbnail / Storefront Preview Mockup */}
                  <div className="relative rounded-lg border border-border/80 bg-muted/20 overflow-hidden mb-4 aspect-[16/11] flex flex-col select-none">
                    {/* Simulated Mini Browser Chrome */}
                    <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-border/60 bg-muted/40">
                      <div className="flex items-center gap-1">
                        <span className="size-1.5 rounded-full bg-error/70" />
                        <span className="size-1.5 rounded-full bg-warning/70" />
                        <span className="size-1.5 rounded-full bg-success/70" />
                      </div>
                      <span className="text-[9px] font-mono font-medium text-muted-foreground/70">
                        preview.{theme.id}.store
                      </span>
                      <span className="text-[9px] font-semibold text-primary/80 uppercase tracking-wider">
                        {t("themesSection.conceptBadge")}
                      </span>
                    </div>

                    {/* Simulated Storefront Hero & Content Teaser */}
                    <div className="relative flex-1 p-2.5 flex flex-col justify-between overflow-hidden">
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-br opacity-50",
                          theme.accentGradient
                        )}
                        aria-hidden="true"
                      />

                      {/* Header bar */}
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <div className="size-4 rounded bg-foreground/90 flex items-center justify-center">
                            <span className="text-[8px] font-black text-background leading-none">
                              {t(theme.nameKey).charAt(0)}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold text-foreground truncate max-w-[80px]">
                            {t(theme.nameKey)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {theme.paletteDots.map((dot, idx) => (
                            <span
                              key={idx}
                              className={cn("size-2 rounded-full border border-background shadow-xs", dot)}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Visual Hero Mockup Banner */}
                      <div className="relative rounded-md bg-card/90 border border-border/60 p-2 text-center my-1 shadow-2xs">
                        <p className="text-[9.5px] font-extrabold text-foreground tracking-tight">
                          {theme.tagline}
                        </p>
                        <div className="flex items-center justify-center gap-1.5 mt-0.5">
                          <span className="text-[8px] font-semibold text-primary bg-primary/10 px-1 rounded">
                            {theme.sampleTag}
                          </span>
                        </div>
                      </div>

                      {/* Mini Product Cards Grid Simulation */}
                      <div className="relative grid grid-cols-2 gap-1.5">
                        <div className="rounded border border-border/60 bg-card p-1 text-[8px] flex flex-col justify-between">
                          <div className="h-5 rounded bg-primary/10 flex items-center justify-center text-[7.5px] font-bold text-primary mb-0.5">
                            {theme.sampleItem}
                          </div>
                          <div className="flex items-center justify-between pt-0.5 border-t border-border/40">
                            <span className="font-bold text-foreground text-[8px]">{theme.samplePrice}</span>
                            <span className="text-[7px] text-success font-semibold">In Stock</span>
                          </div>
                        </div>
                        <div className="rounded border border-border/60 bg-card p-1 text-[8px] flex flex-col justify-between">
                          <div className="h-5 rounded bg-muted/60 flex items-center justify-center text-[7.5px] font-medium text-muted-foreground mb-0.5">
                            Featured
                          </div>
                          <div className="flex items-center justify-between pt-0.5 border-t border-border/40">
                            <span className="font-bold text-foreground text-[8px]">New</span>
                            <span className="text-[7px] text-primary font-semibold">Buy</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Theme Info Lockup */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {t(theme.nameKey)}
                    </h3>

                    {/* Best-Fit Category Pill */}
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold shrink-0 border border-border/60",
                        theme.badgeBg,
                        theme.badgeColor
                      )}
                    >
                      <CategoryIcon className="size-3" />
                      <span>{t(theme.categoryKey)}</span>
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {t(theme.descKey)}
                  </p>
                </div>

                {/* Bottom Bar: Mobile Indicator & Preview Theme CTA */}
                <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                    <Smartphone className="size-3.5 text-primary shrink-0" />
                    <span>{t("themesSection.mobileReady")}</span>
                  </div>

                  <Link
                    href="/themes"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
                    aria-label={`Preview theme ${t(theme.nameKey)}`}
                  >
                    <span>{t("themesSection.previewBtn")}</span>
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Section CTA ── */}
        <div className="flex justify-center">
          <CTAButton
            action="exploreThemes"
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
