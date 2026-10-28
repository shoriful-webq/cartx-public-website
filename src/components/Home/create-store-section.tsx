"use client";

import React from "react";
import {
  Palette,
  LayoutTemplate,
  Globe,
  ShoppingBag,
  Smartphone,
  CheckCircle2,
  Store,
  Layers,
  Search,
  Star,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

interface CreateStoreSectionProps {
  className?: string;
}

export function CreateStoreSection({ className }: CreateStoreSectionProps) {
  const { t, locale } = useLanguage();

  const journeySteps = [
    {
      step: "01",
      icon: Palette,
      title: t("createStore.step1.title"),
      desc: t("createStore.step1.desc"),
    },
    {
      step: "02",
      icon: LayoutTemplate,
      title: t("createStore.step2.title"),
      desc: t("createStore.step2.desc"),
    },
    {
      step: "03",
      icon: Globe,
      title: t("createStore.step3.title"),
      desc: t("createStore.step3.desc"),
    },
  ];

  const showcaseFeatures = [
    t("createStore.featLogo"),
    t("createStore.featSections"),
    t("createStore.featCatalogue"),
    t("createStore.featDetails"),
    t("createStore.featResponsive"),
    t("createStore.featDomain"),
  ];

  return (
    <section
      aria-label="Create Your Store"
      className={cn(
        "relative section-padding border-b border-border bg-card/30 transition-colors",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <SectionHeading
          eyebrow={t("createStore.badge")}
          eyebrowIcon={Store}
          title={t("createStore.title")}
          titleGradient={true}
          description={t("createStore.description")}
          size="default"
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        {/* ── Visual Journey: Store Setup → Published Storefront ── */}
        <div className="relative mb-12 lg:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 relative">
            {journeySteps.map((item, idx) => {
              const StepIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative rounded-xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:border-primary/40 hover:shadow-card flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <StepIcon className="size-5 shrink-0" />
                      </div>
                      <span className="font-mono text-xs font-bold text-muted-foreground/60 tracking-wider">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Visual connector indicator */}
                  <div className="mt-4 pt-3.5 border-t border-border/50 flex items-center justify-between text-[11px] font-medium text-primary">
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle2 className="size-3 text-success shrink-0" />
                      <span>Configured</span>
                    </span>
                    {idx < journeySteps.length - 1 && (
                      <ArrowRight className="size-3.5 text-muted-foreground/50 hidden md:block" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Storefront Interactive Preview (Desktop & Mobile Overlay) ── */}
        <div className="relative rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8 shadow-dropdown mb-10 sm:mb-12 overflow-hidden">
          {/* Browser Top Bar */}
          <div className="flex items-center justify-between border-b border-border pb-3 mb-5">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-error/70" />
              <span className="size-2.5 rounded-full bg-warning/70" />
              <span className="size-2.5 rounded-full bg-success/70" />
              <span className="ml-3 hidden sm:inline-block text-[11px] font-medium text-muted-foreground">
                store.yourbrand.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-success" />
              <span className="text-[10px] font-semibold text-success uppercase tracking-wider">
                {t("createStore.previewLive")}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Desktop Storefront Simulation */}
            <div className="lg:col-span-8 rounded-xl border border-border bg-background p-3 sm:p-4 space-y-4">
              {/* Storefront Header */}
              <div className="flex items-center justify-between border-b border-border/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-black text-xs">
                    Y
                  </div>
                  <span className="font-bold text-sm text-foreground tracking-tight">
                    YOUR BRAND
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-muted-foreground">
                  <span className="text-foreground font-semibold">Home</span>
                  <span>Catalogue</span>
                  <span>Best Sellers</span>
                  <span>About</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-md border border-border bg-card flex items-center justify-center text-muted-foreground">
                    <Search className="size-3.5" />
                  </div>
                  <div className="size-7 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                    <ShoppingBag className="size-3.5" />
                  </div>
                </div>
              </div>

              {/* Homepage Hero Section Banner */}
              <div className="rounded-lg border border-border bg-muted/40 p-4 sm:p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="inline-block text-[9.5px] font-bold uppercase tracking-wider text-primary mb-1">
                    Featured Collection
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">
                    Modern Everyday Apparel
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5 max-w-sm">
                    Crafted with premium sustainable materials, designed for everyday style.
                  </p>
                </div>
                <button
                  type="button"
                  tabIndex={-1}
                  className="px-3.5 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-semibold shadow-xs shrink-0 select-none"
                >
                  Shop Now
                </button>
              </div>

              {/* Product Catalogue Grid */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h5 className="text-xs font-bold text-foreground uppercase tracking-wider">
                    Product Catalogue
                  </h5>
                  <span className="text-[10px] text-primary font-medium">
                    12 Items Available
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Product Card 1 */}
                  <div className="rounded-lg border border-border bg-card p-2.5 flex flex-col justify-between">
                    <div className="aspect-4/3 rounded-md bg-primary/5 border border-border/60 flex items-center justify-center mb-2">
                      <ShoppingBag className="size-6 text-primary/40" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground truncate">
                        Oxford Cotton Shirt
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs font-bold text-foreground">
                          ৳1,850
                        </span>
                        <div className="flex items-center text-[9px] text-warning">
                          <Star className="size-2.5 fill-current mr-0.5" />
                          <span>4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Card 2 */}
                  <div className="rounded-lg border border-border bg-card p-2.5 flex flex-col justify-between">
                    <div className="aspect-4/3 rounded-md bg-secondary-accent/5 border border-border/60 flex items-center justify-center mb-2">
                      <Layers className="size-6 text-secondary-accent/50" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground truncate">
                        Tailored Chino Pant
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs font-bold text-foreground">
                          ৳2,250
                        </span>
                        <div className="flex items-center text-[9px] text-warning">
                          <Star className="size-2.5 fill-current mr-0.5" />
                          <span>4.8</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Card 3 */}
                  <div className="rounded-lg border border-border bg-card p-2.5 flex flex-col justify-between">
                    <div className="aspect-4/3 rounded-md bg-success/5 border border-border/60 flex items-center justify-center mb-2">
                      <Store className="size-6 text-success/40" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground truncate">
                        Canvas Tote Bag
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs font-bold text-foreground">
                          ৳980
                        </span>
                        <div className="flex items-center text-[9px] text-warning">
                          <Star className="size-2.5 fill-current mr-0.5" />
                          <span>4.7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Storefront Overlay Simulation */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-full max-w-[260px] rounded-2xl border-2 border-border/80 bg-background shadow-card p-3 space-y-3">
                {/* Phone Speaker & Notch */}
                <div className="flex items-center justify-between px-2 pt-1 border-b border-border/60 pb-2">
                  <span className="text-[9px] font-mono font-medium text-muted-foreground">
                    9:41
                  </span>
                  <div className="w-12 h-1.5 rounded-full bg-border" />
                  <Smartphone className="size-3 text-muted-foreground" />
                </div>

                {/* Mobile Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="size-4.5 rounded bg-primary text-[8px] font-bold text-primary-foreground flex items-center justify-center">
                      Y
                    </div>
                    <span className="text-[11px] font-bold text-foreground">
                      YOUR BRAND
                    </span>
                  </div>
                  <ShoppingBag className="size-3.5 text-foreground" />
                </div>

                {/* Mobile Hero Banner */}
                <div className="rounded-lg bg-primary/10 p-2.5 text-center">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-primary">
                    {t("createStore.previewMobile")}
                  </p>
                  <p className="text-xs font-bold text-foreground mt-0.5">
                    Seamless Mobile Checkout
                  </p>
                </div>

                {/* Mobile Product Snippet */}
                <div className="rounded-lg border border-border bg-card p-2 flex items-center gap-2">
                  <div className="size-10 rounded bg-muted/60 flex items-center justify-center shrink-0">
                    <ShoppingBag className="size-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-medium text-foreground truncate">
                      Oxford Shirt
                    </p>
                    <p className="text-[10px] font-bold text-primary">৳1,850</p>
                  </div>
                </div>

                {/* Mobile Checkout Button */}
                <button
                  type="button"
                  tabIndex={-1}
                  className="w-full py-2 rounded-md bg-primary text-primary-foreground text-[11px] font-semibold select-none"
                >
                  Instant Buy Now
                </button>
              </div>

              <span className="text-[11px] font-medium text-muted-foreground mt-3 flex items-center gap-1">
                <Smartphone className="size-3 text-primary" />
                <span>Responsive Viewport</span>
              </span>
            </div>
          </div>
        </div>

        {/* ── Feature Checklist & Central CTA ── */}
        <div className="flex flex-col items-center text-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 max-w-3xl mb-8">
            {showcaseFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-left p-2 rounded-lg bg-card border border-border/80 text-xs sm:text-sm font-medium text-foreground"
              >
                <CheckCircle2 className="size-4 text-success shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>

          <CTAButton
            action="exploreStorefrontFeatures"
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

