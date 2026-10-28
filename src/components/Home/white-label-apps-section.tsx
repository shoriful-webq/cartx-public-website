"use client";

import React from "react";
import {
  Smartphone,
  ShoppingBag,
  Bell,
  Search,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Star,
  Package,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

export interface WhiteLabelAppsSectionProps {
  className?: string;
}

export function WhiteLabelAppsSection({
  className,
}: WhiteLabelAppsSectionProps) {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-label="White-label Mobile Apps"
      className={cn(
        "relative section-padding border-b border-border bg-card/30 transition-colors overflow-hidden",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <SectionHeading
          eyebrow={t("whiteLabelApps.badge")}
          eyebrowIcon={Smartphone}
          title={t("whiteLabelApps.title")}
          titleGradient={true}
          description={t("whiteLabelApps.description")}
          size="default"
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        {/* ── Visual Showcase: Customer App & Merchant App Side-by-Side ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto mb-10 sm:mb-12">
          {/* ── Showcase Column 1: Customer Shopping App ── */}
          <div className="flex flex-col items-center">
            {/* Header Lockup */}
            <div className="text-center mb-4 max-w-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-0.5 text-xs font-bold text-primary mb-1.5 select-none">
                <ShoppingBag className="size-3" />
                <span>{t("whiteLabelApps.customer.badge")}</span>
              </span>
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                {t("whiteLabelApps.customer.title")}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                {t("whiteLabelApps.customer.desc")}
              </p>
            </div>

            {/* Customer Phone Mockup Frame */}
            <div className="w-full max-w-[270px] sm:max-w-[290px] rounded-3xl border-2 border-border/80 bg-background shadow-dropdown p-3 space-y-3 select-none">
              {/* Speaker & Status Notch */}
              <div className="flex items-center justify-between px-2 pt-0.5 border-b border-border/60 pb-2">
                <span className="text-[9px] font-mono font-semibold text-muted-foreground">
                  9:41
                </span>
                <div className="w-12 h-1 rounded-full bg-border" />
                <Smartphone className="size-3 text-muted-foreground" />
              </div>

              {/* App Brand Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="size-5 rounded bg-primary text-primary-foreground font-black text-[9px] flex items-center justify-center">
                    C
                  </div>
                  <span className="text-xs font-bold text-foreground tracking-tight">
                    YOUR BRAND
                  </span>
                </div>
                <div className="relative">
                  <ShoppingBag className="size-4 text-foreground" />
                  <span className="absolute -top-1 -right-1 size-3 bg-primary text-primary-foreground text-[8px] font-bold rounded-full flex items-center justify-center">
                    2
                  </span>
                </div>
              </div>

              {/* Search Mockup */}
              <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-2.5 py-1.5 text-xs text-muted-foreground">
                <Search className="size-3 text-muted-foreground/70 shrink-0" />
                <span className="text-[10px] truncate">
                  {t("whiteLabelApps.customer.search")}
                </span>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-hidden text-[9px] font-medium">
                <span className="rounded-full bg-primary text-primary-foreground px-2 py-0.5 shrink-0">
                  {t("whiteLabelApps.customer.catAll")}
                </span>
                <span className="rounded-full bg-card border border-border px-2 py-0.5 text-muted-foreground shrink-0">
                  {t("whiteLabelApps.customer.catNew")}
                </span>
                <span className="rounded-full bg-card border border-border px-2 py-0.5 text-muted-foreground shrink-0">
                  {t("whiteLabelApps.customer.catPopular")}
                </span>
              </div>

              {/* Product Browsing Experience Card */}
              <div className="rounded-xl border border-border bg-card p-2.5 shadow-2xs">
                <div className="aspect-4/3 rounded-lg bg-gradient-to-br from-primary/10 via-sky-400/5 to-transparent border border-border/50 flex flex-col items-center justify-center relative p-2 mb-2 select-none overflow-hidden">
                  <span className="absolute top-1 left-1 rounded bg-primary/15 border border-primary/20 px-1 py-0.2 text-[7.5px] font-bold text-primary">
                    Top Rated
                  </span>
                  <ShoppingBag className="size-7 text-primary/70 mb-0.5" />
                  <span className="text-[8.5px] font-semibold text-muted-foreground/80">
                    Premium Cotton
                  </span>
                </div>
                <p className="text-xs font-semibold text-foreground truncate">
                  {t("whiteLabelApps.customer.prodTitle")}
                </p>
                <div className="flex items-center justify-between mt-1 pt-1 border-t border-border/40">
                  <span className="text-xs font-bold text-primary">
                    {t("whiteLabelApps.customer.prodPrice")}
                  </span>
                  <div className="flex items-center text-[9px] text-warning font-semibold">
                    <Star className="size-2.5 fill-current mr-0.5" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>

              {/* Customer Order Updates Notification Banner */}
              <div className="rounded-xl border border-border/80 bg-primary/[0.04] p-2 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-primary">
                    {t("whiteLabelApps.customer.orderUpdate")}
                  </span>
                  <Truck className="size-3 text-primary shrink-0" />
                </div>
                <p className="text-[11px] font-semibold text-foreground leading-tight">
                  {t("whiteLabelApps.customer.orderStatus")}
                </p>
                <p className="text-[9px] text-muted-foreground">
                  {t("whiteLabelApps.customer.orderEta")}
                </p>
              </div>

              {/* Mini Mobile Bottom Dock */}
              <div className="pt-1.5 border-t border-border/60 flex items-center justify-around text-[8px] font-medium text-muted-foreground">
                <span className="text-primary font-bold">Shop</span>
                <span>Search</span>
                <span>Cart (2)</span>
                <span>Account</span>
              </div>
            </div>
          </div>

          {/* ── Showcase Column 2: Merchant Operations App ── */}
          <div className="flex flex-col items-center">
            {/* Header Lockup */}
            <div className="text-center mb-4 max-w-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-accent/15 border border-secondary-accent/30 px-3 py-0.5 text-xs font-bold text-secondary-accent mb-1.5 select-none">
                <Package className="size-3" />
                <span>{t("whiteLabelApps.merchant.badge")}</span>
              </span>
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                {t("whiteLabelApps.merchant.title")}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                {t("whiteLabelApps.merchant.desc")}
              </p>
            </div>

            {/* Merchant Phone Mockup Frame */}
            <div className="w-full max-w-[270px] sm:max-w-[290px] rounded-3xl border-2 border-border/80 bg-background shadow-dropdown p-3 space-y-3 select-none">
              {/* Speaker & Status Notch */}
              <div className="flex items-center justify-between px-2 pt-0.5 border-b border-border/60 pb-2">
                <span className="text-[9px] font-mono font-semibold text-muted-foreground">
                  9:41
                </span>
                <div className="w-12 h-1 rounded-full bg-border" />
                <Bell className="size-3 text-secondary-accent" />
              </div>

              {/* Merchant App Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="size-5 rounded bg-secondary-accent text-slate-900 font-black text-[9px] flex items-center justify-center">
                    M
                  </div>
                  <span className="text-xs font-bold text-foreground tracking-tight">
                    CartX Merchant
                  </span>
                </div>
                <span className="text-[9px] font-semibold text-success bg-success/10 px-1.5 py-0.5 rounded border border-success/20">
                  Online
                </span>
              </div>

              {/* Daily Sales Overview Quick Bar */}
              <div className="rounded-xl border border-border bg-card p-2.5 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-medium text-muted-foreground">
                    {t("whiteLabelApps.merchant.todaySales")}
                  </p>
                  <p className="text-sm font-extrabold text-foreground">
                    {t("whiteLabelApps.merchant.todaySalesVal")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-medium text-muted-foreground">
                    Orders Logged
                  </p>
                  <p className="text-sm font-bold text-secondary-accent">
                    {t("whiteLabelApps.merchant.todayOrders")}
                  </p>
                </div>
              </div>

              {/* Merchant Order Management Interface Card */}
              <div className="rounded-xl border border-primary/30 bg-primary/[0.03] p-2.5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-foreground">
                    {t("whiteLabelApps.merchant.recentOrder")}
                  </span>
                  <span className="text-[9px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                    ৳3,200
                  </span>
                </div>
                <p className="text-[10px] text-muted-foreground">
                  Rahim Ahmed • 2 items (Dhaka Metro)
                </p>

                <button
                  type="button"
                  tabIndex={-1}
                  className="w-full py-1.5 rounded-md bg-primary text-primary-foreground text-[10px] font-semibold flex items-center justify-center gap-1"
                >
                  <CheckCircle2 className="size-3" />
                  <span>{t("whiteLabelApps.merchant.orderAction")}</span>
                </button>
              </div>

              {/* Merchant Stock Alert Snippet */}
              <div className="rounded-xl border border-border bg-card p-2 flex items-center gap-2">
                <div className="size-7 rounded bg-warning/10 text-warning flex items-center justify-center shrink-0">
                  <Package className="size-3.5" />
                </div>
                <p className="text-[10px] text-muted-foreground truncate leading-tight">
                  {t("whiteLabelApps.merchant.stockAlert")}
                </p>
              </div>

              {/* Mini Mobile Bottom Dock */}
              <div className="pt-1.5 border-t border-border/60 flex items-center justify-around text-[8px] font-medium text-muted-foreground">
                <span className="text-secondary-accent font-bold">Dashboard</span>
                <span>Orders (3)</span>
                <span>Stock</span>
                <span>Settings</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Package, Publishing & Platform Requirements Block ── */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-card p-5 sm:p-6 mb-8 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3.5">
            <ShieldCheck className="size-5 text-primary shrink-0" />
            <h4 className="text-sm sm:text-base font-bold text-foreground">
              {t("whiteLabelApps.requirements.title")}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-xs text-muted-foreground">
            <div className="rounded-lg border border-border/80 bg-muted/20 p-3">
              <p className="font-semibold text-foreground mb-1">Branded Builds</p>
              <p className="text-[11px] leading-relaxed">
                {t("whiteLabelApps.requirements.item1")}
              </p>
            </div>
            <div className="rounded-lg border border-border/80 bg-muted/20 p-3">
              <p className="font-semibold text-foreground mb-1">Developer Accounts</p>
              <p className="text-[11px] leading-relaxed">
                {t("whiteLabelApps.requirements.item2")}
              </p>
            </div>
            <div className="rounded-lg border border-border/80 bg-muted/20 p-3">
              <p className="font-semibold text-foreground mb-1">Store Review Policies</p>
              <p className="text-[11px] leading-relaxed">
                {t("whiteLabelApps.requirements.item3")}
              </p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed text-center pt-2 border-t border-border/60">
            {t("whiteLabelApps.requirements.note")}
          </p>
        </div>

        {/* ── Section CTAs (Dual Actions) ── */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <CTAButton
            action="exploreWhiteLabelApps"
            variant="primary"
            locale={locale}
            size="lg"
            showArrow
            className="px-6 py-2.5 text-sm rounded-lg shadow-xs hover:shadow-md transition-shadow"
          />

          <CTAButton
            action="talkToOurTeam"
            variant="outline"
            locale={locale}
            size="lg"
            className="px-6 py-2.5 text-sm rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
