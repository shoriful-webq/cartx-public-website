"use client";

import React from "react";
import {
  Package,
  ShoppingBag,
  Boxes,
  CreditCard,
  Store,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Activity,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

/**
 * FeaturesHeroMockup — A polished SaaS console mockup showcasing the 5 core
 * operational modules of CartX: Products, Orders, Inventory, Payments, and Storefront.
 * Matches the visual design tokens, radii, shadows, and frame of the Home Page Hero dashboard.
 */
export function FeaturesHeroMockup() {
  const { t } = useLanguage();

  return (
    <div
      className="relative w-full select-none"
      aria-hidden="true"
      role="img"
      aria-label="CartX platform features console preview"
    >
      {/* Main dashboard frame */}
      <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown transition-all duration-300 hover:shadow-modal">
        {/* ── Title bar / Chrome ── */}
        <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-error/70" />
            <span className="size-2 rounded-full bg-warning/70" />
            <span className="size-2 rounded-full bg-success/70" />
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-card/60 border border-border/60 text-[9.5px] font-mono text-muted-foreground/80 max-w-[200px] truncate">
            <Lock className="size-2.5 text-success shrink-0" />
            <span className="truncate">console.cartx.app/features</span>
          </div>

          <div className="flex items-center gap-1 text-[9px] font-medium text-success">
            <span className="size-1.5 rounded-full bg-success animate-pulse" />
            <span className="hidden xs:inline">{t("featuresHeroMockup.engineActive")}</span>
          </div>
        </div>

        {/* ── Console Header ── */}
        <div className="p-3 sm:p-4 border-b border-border/60 bg-muted/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded bg-primary flex items-center justify-center shrink-0 shadow-2xs">
              <span className="text-[9px] font-black text-primary-foreground leading-none">
                C
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-bold text-foreground">
                  {t("featuresHeroMockup.engineTitle")}
                </span>
                <span className="text-[8.5px] font-semibold bg-primary/10 text-primary px-1.5 py-0.2 rounded border border-primary/20">
                  v2.4
                </span>
              </div>
              <p className="text-[9.5px] text-muted-foreground leading-none mt-0.5">
                {t("featuresHeroMockup.engineSubtitle")}
              </p>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-0.5 text-[10px] font-medium text-foreground shadow-2xs">
            <Activity className="size-3 text-secondary-accent" />
            <span>{t("featuresHeroMockup.coreModulesBadge")}</span>
          </div>
        </div>

        {/* ── 5 Feature Modules Grid ── */}
        <div className="p-3 sm:p-4 bg-background/50 space-y-2.5">
          {/* Top Row: 3 Primary Operations Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {/* 1. Products */}
            <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs flex flex-col justify-between transition-all duration-200 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="size-6 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <Package className="size-3.5" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-success bg-success/10 px-1.5 py-0.5 rounded">
                    {t("featuresHeroMockup.productsBadge")}
                  </span>
                </div>
                <p className="text-xs font-bold text-foreground">{t("featuresHeroMockup.productsTitle")}</p>
                <p className="text-[9px] text-muted-foreground leading-snug mt-0.5">
                  {t("featuresHeroMockup.productsDesc")}
                </p>
              </div>
              <div className="pt-2 mt-2 border-t border-border/50 flex items-center justify-between text-[8.5px] text-muted-foreground">
                <span>{t("featuresHeroMockup.productsLabel")}</span>
                <span className="font-semibold text-foreground">{t("featuresHeroMockup.productsValue")}</span>
              </div>
            </div>

            {/* 2. Orders */}
            <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs flex flex-col justify-between transition-all duration-200 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="size-6 rounded-md bg-success/10 flex items-center justify-center text-success">
                    <ShoppingBag className="size-3.5" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                    {t("featuresHeroMockup.ordersBadge")}
                  </span>
                </div>
                <p className="text-xs font-bold text-foreground">{t("featuresHeroMockup.ordersTitle")}</p>
                <p className="text-[9px] text-muted-foreground leading-snug mt-0.5">
                  {t("featuresHeroMockup.ordersDesc")}
                </p>
              </div>
              <div className="pt-2 mt-2 border-t border-border/50 flex items-center justify-between text-[8.5px] text-muted-foreground">
                <span>{t("featuresHeroMockup.ordersLabel")}</span>
                <span className="font-semibold text-foreground">{t("featuresHeroMockup.ordersValue")}</span>
              </div>
            </div>

            {/* 3. Inventory */}
            <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs flex flex-col justify-between transition-all duration-200 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="size-6 rounded-md bg-secondary-accent/15 flex items-center justify-center text-secondary-accent">
                    <Boxes className="size-3.5" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-secondary-accent bg-secondary-accent/10 px-1.5 py-0.5 rounded">
                    {t("featuresHeroMockup.inventoryBadge")}
                  </span>
                </div>
                <p className="text-xs font-bold text-foreground">{t("featuresHeroMockup.inventoryTitle")}</p>
                <p className="text-[9px] text-muted-foreground leading-snug mt-0.5">
                  {t("featuresHeroMockup.inventoryDesc")}
                </p>
              </div>
              <div className="pt-2 mt-2 border-t border-border/50 flex items-center justify-between text-[8.5px] text-muted-foreground">
                <span>{t("featuresHeroMockup.inventoryLabel")}</span>
                <span className="font-semibold text-foreground">{t("featuresHeroMockup.inventoryValue")}</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: 2 Key Customer Experience Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* 4. Payments */}
            <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs flex flex-col justify-between transition-all duration-200 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="size-6 rounded-md bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <CreditCard className="size-3.5" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                    {t("featuresHeroMockup.paymentsBadge")}
                  </span>
                </div>
                <p className="text-xs font-bold text-foreground">{t("featuresHeroMockup.paymentsTitle")}</p>
                <p className="text-[9px] text-muted-foreground leading-snug mt-0.5">
                  {t("featuresHeroMockup.paymentsDesc")}
                </p>
              </div>
              <div className="pt-2 mt-2 border-t border-border/50 flex items-center justify-between text-[8.5px] text-muted-foreground">
                <span>{t("featuresHeroMockup.paymentsLabel")}</span>
                <span className="font-semibold text-foreground">{t("featuresHeroMockup.paymentsValue")}</span>
              </div>
            </div>

            {/* 5. Store Experience */}
            <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs flex flex-col justify-between transition-all duration-200 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="size-6 rounded-md bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400">
                    <Store className="size-3.5" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded">
                    {t("featuresHeroMockup.storefrontBadge")}
                  </span>
                </div>
                <p className="text-xs font-bold text-foreground">{t("featuresHeroMockup.storefrontTitle")}</p>
                <p className="text-[9px] text-muted-foreground leading-snug mt-0.5">
                  {t("featuresHeroMockup.storefrontDesc")}
                </p>
              </div>
              <div className="pt-2 mt-2 border-t border-border/50 flex items-center justify-between text-[8.5px] text-muted-foreground">
                <span>{t("featuresHeroMockup.storefrontLabel")}</span>
                <span className="font-semibold text-foreground">{t("featuresHeroMockup.storefrontValue")}</span>
              </div>
            </div>
          </div>

          {/* ── Security & SLA Footer ── */}
          <div className="rounded-md border border-border/60 bg-muted/20 px-2.5 py-1.5 flex items-center justify-between text-[8.5px] text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="size-3 text-primary shrink-0" />
              <span>TLS 256-bit encrypted operations</span>
            </div>
            <div className="flex items-center gap-1 text-foreground font-medium">
              <CheckCircle2 className="size-3 text-success shrink-0" />
              <span>Zero external plugin overhead</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
