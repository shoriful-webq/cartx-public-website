"use client";

import React from "react";
import {
  Layers,
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
  ShieldCheck,
  CheckCircle2,
  Lock,
  Globe,
  Tag,
  TrendingUp,
  Clock,
  ArrowRight,
  Bell,
  Database,
  Key,
  Code,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "@/components/Home/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface DeepDiveItem {
  id: string;
  eyebrowKey: string;
  titleKey: string;
  descKey: string;
  bulletKeys: string[];
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  renderVisual: (t: (key: string) => string) => React.ReactNode;
}

/* ─────────────────────────────────────────────────────────────
 * 1. Storefront Mockup
 * ───────────────────────────────────────────────────────────── */
function StorefrontMockup({ notice, t = (k: string) => k }: { notice: string; t?: (k: string) => string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown hover:shadow-card transition-all duration-300 select-none">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">admin.cartx.app/storefront</span>
        <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
          {notice}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-3 bg-background/50">
        <div className="rounded-lg border border-border bg-card p-3 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Globe className="size-4 text-primary" />
              <div>
                <p className="text-xs font-bold text-foreground">{t("featuresMockup.customDomain")}</p>
                <p className="text-[9.5px] text-muted-foreground">{t("featuresMockup.customDomainDesc")}</p>
              </div>
            </div>
            <span className="text-[8.5px] font-semibold text-success bg-success/10 px-2 py-0.5 rounded border border-success/20">
              {t("featuresMockup.activeConnected")}
            </span>
          </div>
          <div className="flex items-center justify-between bg-muted/30 rounded p-2 text-xs font-mono">
            <span className="font-semibold text-foreground">mystore.com.bd</span>
            <span className="text-[9px] text-muted-foreground flex items-center gap-1">
              <Lock className="size-2.5 text-success" /> {t("featuresMockup.sslAutoRenewed")}
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-3 shadow-2xs space-y-2">
          <p className="text-xs font-bold text-foreground">{t("featuresMockup.brandIdentity")}</p>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="bg-muted/30 p-2 rounded border border-border/50">
              <span className="text-muted-foreground block text-[9px]">{t("featuresMockup.storeDisplayName")}</span>
              <span className="font-semibold text-foreground">Aura Boutique</span>
            </div>
            <div className="bg-muted/30 p-2 rounded border border-border/50">
              <span className="text-muted-foreground block text-[9px]">{t("featuresMockup.primaryColor")}</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="size-3 rounded-full bg-primary" />
                <span className="font-semibold font-mono text-foreground">#2563EB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Store className="size-4 text-primary" />
            <span className="text-xs font-medium text-foreground">{t("featuresMockup.storefrontTheme")}</span>
          </div>
          <span className="text-[9px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded">
            {t("featuresMockup.themeLive")}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2. Products Catalog Mockup
 * ───────────────────────────────────────────────────────────── */
function ProductCatalogMockup({ notice, t = (k: string) => k }: { notice: string; t?: (k: string) => string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown hover:shadow-card transition-all duration-300 select-none">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">admin.cartx.app/products</span>
        <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
          {notice}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-2.5 bg-background/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-foreground">{t("featuresMockup.prodTitle")}</p>
            <p className="text-[9px] font-mono text-muted-foreground">SKU: LNN-SHIRT-2026</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9.5px] line-through text-muted-foreground">৳2,200</span>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
              ৳1,850
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card overflow-hidden divide-y divide-border/60 shadow-2xs">
          <div className="px-3 py-1.5 bg-muted/30 text-[9px] font-semibold text-muted-foreground grid grid-cols-4">
            <span>{t("featuresMockup.variant")}</span>
            <span>{t("featuresMockup.sku")}</span>
            <span>{t("featuresMockup.price")}</span>
            <span className="text-right">{t("featuresMockup.compareAt")}</span>
          </div>
          <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
            <span className="font-semibold text-foreground">Blue / M</span>
            <span className="font-mono text-muted-foreground text-[9px]">LNN-BLU-M</span>
            <span className="text-foreground font-semibold">৳1,850</span>
            <span className="text-right text-muted-foreground">৳2,200</span>
          </div>
          <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
            <span className="font-semibold text-foreground">Sand / L</span>
            <span className="font-mono text-muted-foreground text-[9px]">LNN-SND-L</span>
            <span className="text-foreground font-semibold">৳1,850</span>
            <span className="text-right text-muted-foreground">৳2,200</span>
          </div>
          <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
            <span className="font-semibold text-foreground">White / XL</span>
            <span className="font-mono text-muted-foreground text-[9px]">LNN-WHT-XL</span>
            <span className="text-foreground font-semibold">৳1,850</span>
            <span className="text-right text-muted-foreground">৳2,200</span>
          </div>
        </div>

        <div className="rounded-md border border-border bg-card p-2 text-[9.5px] text-muted-foreground flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Package className="size-3 text-primary" />
            High-res media gallery with 4 product angles
          </span>
          <span className="font-semibold text-success">Optimized</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3. Orders Mockup
 * ───────────────────────────────────────────────────────────── */
function OrdersMockup({ notice, t = (k: string) => k }: { notice: string; t?: (k: string) => string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown hover:shadow-card transition-all duration-300 select-none">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">admin.cartx.app/orders/1084</span>
        <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
          {notice}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-3 bg-background/50">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-foreground">Order #1084</span>
              <span className="text-[8.5px] font-semibold bg-primary/10 text-primary px-1.5 py-0.2 rounded">
                bKash Paid
              </span>
            </div>
            <p className="text-[9.5px] text-muted-foreground mt-0.5">
              Customer: Nusrat Jahan • 017********
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-foreground block">৳3,450</span>
            <span className="text-[8.5px] text-muted-foreground">2 Items</span>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-3 shadow-2xs space-y-2">
          <p className="text-[10px] font-semibold text-foreground uppercase tracking-wider">
            Order Fulfillment Timeline
          </p>
          <div className="grid grid-cols-4 gap-1 text-center text-[9px]">
            <div className="flex flex-col items-center">
              <div className="size-4 rounded-full bg-success text-white flex items-center justify-center text-[8px] font-bold">
                ✓
              </div>
              <span className="font-semibold text-foreground mt-1">{t("featuresMockup.placed")}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="size-4 rounded-full bg-success text-white flex items-center justify-center text-[8px] font-bold">
                ✓
              </div>
              <span className="font-semibold text-foreground mt-1">{t("featuresMockup.confirmed")}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="size-4 rounded-full bg-primary text-white flex items-center justify-center text-[8px] font-bold animate-pulse">
                •
              </div>
              <span className="font-semibold text-primary mt-1">{t("featuresMockup.dispatched")}</span>
            </div>
            <div className="flex flex-col items-center opacity-60">
              <div className="size-4 rounded-full bg-muted border border-border flex items-center justify-center text-[8px]">
                4
              </div>
              <span className="text-muted-foreground mt-1">{t("featuresMockup.delivered")}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[9.5px]">
          <div className="bg-card p-2 rounded border border-border">
            <span className="text-muted-foreground block text-[8.5px]">Courier Partner</span>
            <span className="font-bold text-foreground">Pathao Express</span>
          </div>
          <div className="bg-card p-2 rounded border border-border">
            <span className="text-muted-foreground block text-[8.5px]">Consignment ID</span>
            <span className="font-mono font-bold text-foreground">PTH-90218</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 4. Inventory Control Mockup
 * ───────────────────────────────────────────────────────────── */
function InventoryControlMockup({ notice, t = (k: string) => k }: { notice: string; t?: (k: string) => string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown hover:shadow-card transition-all duration-300 select-none">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">admin.cartx.app/inventory</span>
        <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
          {notice}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-2.5 bg-background/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-foreground">{t("featuresMockup.inventoryOverview")}</p>
            <p className="text-[9px] text-muted-foreground">Automated stock tracking enabled</p>
          </div>
          <span className="text-[9px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
            Central Warehouse
          </span>
        </div>

        <div className="rounded-lg border border-border bg-card overflow-hidden divide-y divide-border/60 shadow-2xs">
          <div className="px-3 py-1.5 bg-muted/30 text-[9px] font-semibold text-muted-foreground grid grid-cols-4">
            <span>Item / SKU</span>
            <span>{t("featuresMockup.inStock")}</span>
            <span>Threshold</span>
            <span className="text-right">{t("featuresMockup.status")}</span>
          </div>
          <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
            <span className="font-semibold text-foreground">LNN-BLU-L</span>
            <span className="font-bold text-foreground">42 units</span>
            <span className="text-muted-foreground">10 units</span>
            <span className="text-right font-bold text-success">Healthy</span>
          </div>
          <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
            <span className="font-semibold text-foreground">LNN-SND-M</span>
            <span className="font-bold text-amber-600 dark:text-amber-400">3 units</span>
            <span className="text-muted-foreground">10 units</span>
            <span className="text-right font-bold text-amber-600 dark:text-amber-400">{t("featuresMockup.lowStock")}</span>
          </div>
          <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
            <span className="font-semibold text-foreground">LNN-WHT-S</span>
            <span className="font-bold text-foreground">18 units</span>
            <span className="text-muted-foreground">5 units</span>
            <span className="text-right font-bold text-success">Healthy</span>
          </div>
        </div>

        <div className="rounded-md border border-border bg-card p-2 text-[9.5px] text-muted-foreground flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Boxes className="size-3 text-primary" />
            Automatic stock deduction upon verified customer checkout
          </span>
          <span className="font-semibold text-primary font-mono text-[9px]">Active Sync</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 5. Customer Management Mockup
 * ───────────────────────────────────────────────────────────── */
function CustomerManagementMockup({ notice, t = (k: string) => k }: { notice: string; t?: (k: string) => string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown hover:shadow-card transition-all duration-300 select-none">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">admin.cartx.app/customers/302</span>
        <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
          {notice}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-3 bg-background/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
              NJ
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Nusrat Jahan</p>
              <p className="text-[9.5px] text-muted-foreground">01712-345678 • nusrat@example.com</p>
            </div>
          </div>
          <span className="text-[8.5px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
            {t("featuresMockup.vipShopper")}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div className="bg-card p-2 rounded border border-border">
            <span className="text-[9px] text-muted-foreground block">{t("featuresMockup.lifetimeOrders")}</span>
            <span className="text-sm font-bold text-foreground">4 Orders</span>
          </div>
          <div className="bg-card p-2 rounded border border-border">
            <span className="text-[9px] text-muted-foreground block">{t("featuresMockup.totalSpend")}</span>
            <span className="text-sm font-bold text-foreground">৳12,450</span>
          </div>
          <div className="bg-card p-2 rounded border border-border">
            <span className="text-[9px] text-muted-foreground block">Last Order</span>
            <span className="text-sm font-bold text-foreground">2 days ago</span>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-[9.5px]">
            <span className="font-semibold text-foreground">{t("featuresMockup.savedAddress")}</span>
            <span className="text-muted-foreground font-mono">Verified</span>
          </div>
          <p className="text-[9px] text-muted-foreground leading-snug">
            House 42, Road 11, Block D, Banani, Dhaka 1213
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 6. Payment Management Mockup
 * ───────────────────────────────────────────────────────────── */
function PaymentManagementMockup({ notice, t = (k: string) => k }: { notice: string; t?: (k: string) => string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown hover:shadow-card transition-all duration-300 select-none">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">admin.cartx.app/payments</span>
        <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
          {notice}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-2.5 bg-background/50">
        <p className="text-xs font-bold text-foreground">{t("featuresMockup.mfsGateway")}</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-pink-600 text-xs">bKash</span>
              <span className="size-1.5 rounded-full bg-success" />
            </div>
            <p className="text-[9px] text-muted-foreground">{t("featuresMockup.instantCallback")}</p>
            <span className="text-[8.5px] font-semibold text-success bg-success/10 px-1.5 py-0.2 rounded mt-1.5 inline-block">
              {t("featuresMockup.activeConnected")}
            </span>
          </div>

          <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-orange-600 text-xs">Nagad</span>
              <span className="size-1.5 rounded-full bg-success" />
            </div>
            <p className="text-[9px] text-muted-foreground">{t("featuresMockup.verifiedActive")}</p>
            <span className="text-[8.5px] font-semibold text-success bg-success/10 px-1.5 py-0.2 rounded mt-1.5 inline-block">
              {t("featuresMockup.activeConnected")}
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
          <div className="flex items-center justify-between text-[9px] font-semibold text-muted-foreground pb-1.5 mb-1.5 border-b border-border/60">
            <span>Recent Settlement</span>
            <span>{t("featuresMockup.status")}</span>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <div>
              <span className="font-mono font-bold text-foreground">TXN-49201</span>
              <span className="text-[8.5px] text-muted-foreground block">৳2,450 • bKash Merchant</span>
            </div>
            <span className="text-[8.5px] font-semibold text-success bg-success/10 px-2 py-0.5 rounded">
              Settled
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 7. Delivery Operations Mockup
 * ───────────────────────────────────────────────────────────── */
function DeliveryOperationsMockup({ notice, t = (k: string) => k }: { notice: string; t?: (k: string) => string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown hover:shadow-card transition-all duration-300 select-none">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">admin.cartx.app/shipping</span>
        <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
          {notice}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-2.5 bg-background/50">
        <p className="text-xs font-bold text-foreground">Shipping Rate Configurations</p>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
            <span className="text-[9px] text-muted-foreground block">{t("featuresMockup.insideDhaka")}</span>
            <span className="text-sm font-bold text-foreground">৳60</span>
            <span className="text-[8.5px] text-success block mt-0.5">24–48 Hours</span>
          </div>
          <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
            <span className="text-[9px] text-muted-foreground block">{t("featuresMockup.outsideDhaka")}</span>
            <span className="text-sm font-bold text-foreground">৳120</span>
            <span className="text-[8.5px] text-primary block mt-0.5">48–72 Hours</span>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
          <p className="text-[10px] font-semibold text-foreground mb-1.5">Active Courier Integrations</p>
          <div className="flex items-center justify-between text-[9.5px] bg-muted/30 p-2 rounded">
            <div className="flex items-center gap-2">
              <Truck className="size-3.5 text-primary" />
              <span className="font-semibold text-foreground">{t("featuresMockup.pathaoSteadfast")}</span>
            </div>
            <span className="text-[8.5px] font-semibold bg-success/10 text-success px-1.5 py-0.2 rounded">
              Ready
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 8. Marketing Mockup
 * ───────────────────────────────────────────────────────────── */
function MarketingMockup({ notice, t = (k: string) => k }: { notice: string; t?: (k: string) => string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown hover:shadow-card transition-all duration-300 select-none">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">admin.cartx.app/promotions</span>
        <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
          {notice}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-2.5 bg-background/50">
        <p className="text-xs font-bold text-foreground">{t("featuresMockup.campaignCoupons")}</p>
        <div className="rounded-lg border border-border bg-card overflow-hidden divide-y divide-border/60 shadow-2xs">
          <div className="p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tag className="size-3.5 text-primary" />
              <div>
                <span className="font-mono font-bold text-xs text-foreground">EID2026</span>
                <span className="text-[9px] text-muted-foreground block">15% off • Min order ৳1,500</span>
              </div>
            </div>
            <span className="text-[8.5px] font-semibold bg-success/10 text-success px-2 py-0.5 rounded">
              Active
            </span>
          </div>

          <div className="p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tag className="size-3.5 text-primary" />
              <div>
                <span className="font-mono font-bold text-xs text-foreground">FREESHIP</span>
                <span className="text-[9px] text-muted-foreground block">Free delivery • Min ৳2,000</span>
              </div>
            </div>
            <span className="text-[8.5px] font-semibold bg-success/10 text-success px-2 py-0.5 rounded">
              Active
            </span>
          </div>
        </div>

        <div className="rounded-md border border-border bg-card p-2 text-[9.5px] text-muted-foreground flex items-center justify-between">
          <span>{t("featuresMockup.usageLimit")}</span>
          <span className="font-bold text-foreground">428 Uses</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 9. Reports & Analytics Mockup
 * ───────────────────────────────────────────────────────────── */
function ReportsAnalyticsMockup({ notice, t = (k: string) => k }: { notice: string; t?: (k: string) => string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown hover:shadow-card transition-all duration-300 select-none">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">admin.cartx.app/analytics</span>
        <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
          {notice}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-3 bg-background/50">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
            <span className="text-[9px] text-muted-foreground block">{t("featuresMockup.monthlyGross")}</span>
            <span className="text-base font-bold text-foreground">৳1,84,200</span>
            <span className="text-[8.5px] text-success flex items-center gap-0.5 mt-0.5">
              <TrendingUp className="size-2.5" /> +14.2% vs prev
            </span>
          </div>

          <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
            <span className="text-[9px] text-muted-foreground block">{t("featuresMockup.lifetimeOrders")}</span>
            <span className="text-base font-bold text-foreground">218 Orders</span>
            <span className="text-[8.5px] text-primary block mt-0.5">{t("featuresMockup.avgOrderValue")}</span>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
          <div className="flex items-center justify-between text-[9.5px] mb-2">
            <span className="font-semibold text-foreground">Weekly Sales Activity</span>
            <span className="text-muted-foreground font-mono">Last 7 Days</span>
          </div>
          <div className="flex items-end justify-between gap-1.5 h-14 pt-1">
            {[45, 60, 50, 75, 85, 95, 70].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t bg-primary/80 hover:bg-primary transition-colors"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[7.5px] text-muted-foreground">D{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 10. Mobile Apps Mockup
 * ───────────────────────────────────────────────────────────── */
function MobileAppsMockup({ notice, t = (k: string) => k }: { notice: string; t?: (k: string) => string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown hover:shadow-card transition-all duration-300 select-none">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">console.cartx.app/mobile-apps</span>
        <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
          {notice}
        </span>
      </div>

      <div className="p-4 sm:p-5 bg-background/50 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        <div className="sm:col-span-7 bg-card border border-border rounded-xl p-3 shadow-2xs space-y-2.5">
          <div className="flex items-center justify-between pb-1.5 border-b border-border">
            <span className="font-serif font-extrabold text-xs text-foreground tracking-wider">AURA STUDIO</span>
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <ShoppingBag className="size-3 text-primary" />
              <span className="font-bold text-foreground">2</span>
            </div>
          </div>

          <div className="rounded bg-gradient-to-r from-primary/15 to-secondary-accent/15 border border-primary/20 p-2">
            <span className="text-[7.5px] font-bold uppercase tracking-wider text-primary">Native App</span>
            <p className="text-[11px] font-bold text-foreground leading-tight mt-0.5">{t("featuresMockup.subSecond")}</p>
          </div>

          <div className="rounded border border-border bg-background p-2 shadow-2xs flex items-center gap-2">
            <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Clock className="size-2.5" />
            </div>
            <div>
              <p className="text-[9px] font-bold text-foreground leading-none">Order #1084 Out for Delivery</p>
              <p className="text-[8px] text-muted-foreground mt-0.5">Pathao Express Courier arrives soon</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1 pt-1 border-t border-border text-center text-[7.5px] text-muted-foreground">
            <span className="font-bold text-primary">Shop</span>
            <span>Catalog</span>
            <span>Cart (2)</span>
            <span>Profile</span>
          </div>
        </div>

        <div className="sm:col-span-5 space-y-2">
          <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
            <div className="flex items-center gap-1.5 text-primary mb-1">
              <Smartphone className="size-3.5" />
              <span className="text-[10px] font-bold text-foreground">{t("featuresMockup.nativeApps")}</span>
            </div>
            <p className="text-[9px] text-muted-foreground leading-snug">
              {t("featuresMockup.customBranded")}
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
            <div className="flex items-center gap-1.5 text-secondary-accent mb-1">
              <Bell className="size-3.5" />
              <span className="text-[10px] font-bold text-foreground">{t("featuresMockup.pushAlerts")}</span>
            </div>
            <p className="text-[9px] text-muted-foreground leading-snug">
              Direct automated customer alerts for orders, offers, and restocks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 11. Ecosystem Integrations Mockup
 * ───────────────────────────────────────────────────────────── */
function EcosystemIntegrationsMockup({ notice, t = (k: string) => k }: { notice: string; t?: (k: string) => string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown hover:shadow-card transition-all duration-300 select-none">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">admin.cartx.app/integrations</span>
        <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
          {notice}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-2.5 bg-background/50">
        <p className="text-xs font-bold text-foreground">{t("featuresMockup.apiConnectors")}</p>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="bg-card p-2.5 rounded-lg border border-border shadow-2xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Truck className="size-3.5 text-primary" />
              <div>
                <span className="font-semibold text-foreground block">Pathao Courier</span>
                <span className="text-[8.5px] text-muted-foreground">Logistics Dispatch</span>
              </div>
            </div>
            <span className="size-2 rounded-full bg-success" />
          </div>

          <div className="bg-card p-2.5 rounded-lg border border-border shadow-2xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCard className="size-3.5 text-pink-600" />
              <div>
                <span className="font-semibold text-foreground block">bKash MFS</span>
                <span className="text-[8.5px] text-muted-foreground">Payment Gateway</span>
              </div>
            </div>
            <span className="size-2 rounded-full bg-success" />
          </div>

          <div className="bg-card p-2.5 rounded-lg border border-border shadow-2xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="size-3.5 text-blue-600" />
              <div>
                <span className="font-semibold text-foreground block">Meta Pixel</span>
                <span className="text-[8.5px] text-muted-foreground">Event Tracking</span>
              </div>
            </div>
            <span className="size-2 rounded-full bg-success" />
          </div>

          <div className="bg-card p-2.5 rounded-lg border border-border shadow-2xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="size-3.5 text-amber-600" />
              <div>
                <span className="font-semibold text-foreground block">Google Analytics</span>
                <span className="text-[8.5px] text-muted-foreground">Traffic & Funnels</span>
              </div>
            </div>
            <span className="size-2 rounded-full bg-success" />
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs flex items-center justify-between text-[9.5px]">
          <div className="flex items-center gap-2">
            <Layers className="size-3.5 text-primary" />
            <span className="font-medium text-foreground">Custom Webhooks & REST Endpoints</span>
          </div>
          <span className="text-[8.5px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded">
            TLS Secured
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 12. Security Mockup
 * ───────────────────────────────────────────────────────────── */
function SecurityMockup({ notice, t = (k: string) => k }: { notice: string; t?: (k: string) => string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown hover:shadow-card transition-all duration-300 select-none">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">admin.cartx.app/security</span>
        <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
          {notice}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-2.5 bg-background/50">
        <p className="text-xs font-bold text-foreground">{t("featuresMockup.securityRoles")}</p>
        <div className="rounded-lg border border-border bg-card overflow-hidden divide-y divide-border/60 shadow-2xs text-[10px]">
          <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Key className="size-3.5 text-primary" />
              <div>
                <span className="font-semibold text-foreground">{t("featuresMockup.storeOwner")}</span>
                <span className="text-[8.5px] text-muted-foreground block">{t("featuresMockup.storeOwnerDesc")}</span>
              </div>
            </div>
            <span className="text-[8.5px] font-semibold text-success bg-success/10 px-2 py-0.5 rounded">
              Active
            </span>
          </div>

          <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="size-3.5 text-secondary-accent" />
              <div>
                <span className="font-semibold text-foreground">{t("featuresMockup.operationsStaff")}</span>
                <span className="text-[8.5px] text-muted-foreground block">{t("featuresMockup.operationsStaffDesc")}</span>
              </div>
            </div>
            <span className="text-[8.5px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
              2 Accounts
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[9.5px]">
          <div className="bg-card p-2 rounded border border-border flex items-center gap-2">
            <Lock className="size-3.5 text-success" />
            <div>
              <span className="font-bold text-foreground block">{t("featuresMockup.tls256")}</span>
              <span className="text-[8px] text-muted-foreground">{t("featuresMockup.checkoutEncryption")}</span>
            </div>
          </div>
          <div className="bg-card p-2 rounded border border-border flex items-center gap-2">
            <Database className="size-3.5 text-primary" />
            <div>
              <span className="font-bold text-foreground block">{t("featuresMockup.dailyBackups")}</span>
              <span className="text-[8px] text-muted-foreground">{t("featuresMockup.autoEncrypted")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Complete 12 Feature Deep Dives Specification Registry
 * ───────────────────────────────────────────────────────────── */
const DEEP_DIVES: DeepDiveItem[] = [
  {
    id: "storefront",
    eyebrowKey: "featuresDeepDive.storefront.eyebrow",
    titleKey: "featuresDeepDive.storefront.title",
    descKey: "featuresDeepDive.storefront.desc",
    bulletKeys: [
      "featuresDeepDive.storefront.b1",
      "featuresDeepDive.storefront.b2",
      "featuresDeepDive.storefront.b3",
      "featuresDeepDive.storefront.b4",
    ],
    icon: Store,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    renderVisual: (t) => <StorefrontMockup t={t} notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "products",
    eyebrowKey: "featuresDeepDive.products.eyebrow",
    titleKey: "featuresDeepDive.products.title",
    descKey: "featuresDeepDive.products.desc",
    bulletKeys: [
      "featuresDeepDive.products.b1",
      "featuresDeepDive.products.b2",
      "featuresDeepDive.products.b3",
      "featuresDeepDive.products.b4",
    ],
    icon: Package,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    renderVisual: (t) => <ProductCatalogMockup t={t} notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "orders",
    eyebrowKey: "featuresDeepDive.orders.eyebrow",
    titleKey: "featuresDeepDive.orders.title",
    descKey: "featuresDeepDive.orders.desc",
    bulletKeys: [
      "featuresDeepDive.orders.b1",
      "featuresDeepDive.orders.b2",
      "featuresDeepDive.orders.b3",
      "featuresDeepDive.orders.b4",
    ],
    icon: ShoppingBag,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    renderVisual: (t) => <OrdersMockup t={t} notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "inventory",
    eyebrowKey: "featuresDeepDive.inventory.eyebrow",
    titleKey: "featuresDeepDive.inventory.title",
    descKey: "featuresDeepDive.inventory.desc",
    bulletKeys: [
      "featuresDeepDive.inventory.b1",
      "featuresDeepDive.inventory.b2",
      "featuresDeepDive.inventory.b3",
      "featuresDeepDive.inventory.b4",
    ],
    icon: Boxes,
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-600 dark:text-sky-400",
    renderVisual: (t) => <InventoryControlMockup t={t} notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "customers",
    eyebrowKey: "featuresDeepDive.customers.eyebrow",
    titleKey: "featuresDeepDive.customers.title",
    descKey: "featuresDeepDive.customers.desc",
    bulletKeys: [
      "featuresDeepDive.customers.b1",
      "featuresDeepDive.customers.b2",
      "featuresDeepDive.customers.b3",
      "featuresDeepDive.customers.b4",
    ],
    icon: Users,
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    renderVisual: (t) => <CustomerManagementMockup t={t} notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "payments",
    eyebrowKey: "featuresDeepDive.payments.eyebrow",
    titleKey: "featuresDeepDive.payments.title",
    descKey: "featuresDeepDive.payments.desc",
    bulletKeys: [
      "featuresDeepDive.payments.b1",
      "featuresDeepDive.payments.b2",
      "featuresDeepDive.payments.b3",
      "featuresDeepDive.payments.b4",
    ],
    icon: CreditCard,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    renderVisual: (t) => <PaymentManagementMockup t={t} notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "shipping",
    eyebrowKey: "featuresDeepDive.shipping.eyebrow",
    titleKey: "featuresDeepDive.shipping.title",
    descKey: "featuresDeepDive.shipping.desc",
    bulletKeys: [
      "featuresDeepDive.shipping.b1",
      "featuresDeepDive.shipping.b2",
      "featuresDeepDive.shipping.b3",
      "featuresDeepDive.shipping.b4",
    ],
    icon: Truck,
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-600 dark:text-teal-400",
    renderVisual: (t) => <DeliveryOperationsMockup t={t} notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "marketing",
    eyebrowKey: "featuresDeepDive.marketing.eyebrow",
    titleKey: "featuresDeepDive.marketing.title",
    descKey: "featuresDeepDive.marketing.desc",
    bulletKeys: [
      "featuresDeepDive.marketing.b1",
      "featuresDeepDive.marketing.b2",
      "featuresDeepDive.marketing.b3",
      "featuresDeepDive.marketing.b4",
    ],
    icon: Percent,
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600 dark:text-rose-400",
    renderVisual: (t) => <MarketingMockup t={t} notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "analytics",
    eyebrowKey: "featuresDeepDive.analytics.eyebrow",
    titleKey: "featuresDeepDive.analytics.title",
    descKey: "featuresDeepDive.analytics.desc",
    bulletKeys: [
      "featuresDeepDive.analytics.b1",
      "featuresDeepDive.analytics.b2",
      "featuresDeepDive.analytics.b3",
      "featuresDeepDive.analytics.b4",
    ],
    icon: BarChart3,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
    renderVisual: (t) => <ReportsAnalyticsMockup t={t} notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "mobile-apps",
    eyebrowKey: "featuresDeepDive.mobileApps.eyebrow",
    titleKey: "featuresDeepDive.mobileApps.title",
    descKey: "featuresDeepDive.mobileApps.desc",
    bulletKeys: [
      "featuresDeepDive.mobileApps.b1",
      "featuresDeepDive.mobileApps.b2",
      "featuresDeepDive.mobileApps.b3",
      "featuresDeepDive.mobileApps.b4",
    ],
    icon: Smartphone,
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    renderVisual: (t) => <MobileAppsMockup t={t} notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "integrations",
    eyebrowKey: "featuresDeepDive.integrations.eyebrow",
    titleKey: "featuresDeepDive.integrations.title",
    descKey: "featuresDeepDive.integrations.desc",
    bulletKeys: [
      "featuresDeepDive.integrations.b1",
      "featuresDeepDive.integrations.b2",
      "featuresDeepDive.integrations.b3",
      "featuresDeepDive.integrations.b4",
    ],
    icon: Layers,
    iconBg: "bg-blue-600/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    renderVisual: (t) => <EcosystemIntegrationsMockup t={t} notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "security",
    eyebrowKey: "featuresDeepDive.security.eyebrow",
    titleKey: "featuresDeepDive.security.title",
    descKey: "featuresDeepDive.security.desc",
    bulletKeys: [
      "featuresDeepDive.security.b1",
      "featuresDeepDive.security.b2",
      "featuresDeepDive.security.b3",
      "featuresDeepDive.security.b4",
    ],
    icon: ShieldCheck,
    iconBg: "bg-slate-500/10",
    iconColor: "text-slate-700 dark:text-slate-300",
    renderVisual: (t) => <SecurityMockup t={t} notice={t("featuresDeepDive.demoNotice")} />,
  },
];

export interface FeatureDeepDivesProps {
  className?: string;
}

export function FeatureDeepDives({ className }: FeatureDeepDivesProps) {
  const { t } = useLanguage();

  return (
    <section
      id="feature-deep-dives"
      aria-label="Feature Deep Dives"
      className={cn("section-padding bg-background transition-colors", className)}
    >
      <div className="container">
        {/* ── Section Heading ── */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={t("featuresDeepDive.eyebrow")}
            eyebrowIcon={Layers}
            title={t("featuresDeepDive.title")}
            titleGradient={true}
            description={t("featuresDeepDive.description")}
            size="default"
            className="mb-12 sm:mb-16 lg:mb-20"
          />
        </ScrollReveal>

        {/* ── Complete 12 Deep Dive Sections ── */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {DEEP_DIVES.map((item, idx) => {
            const isReversed = idx % 2 === 1;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                id={item.id}
                className="relative pt-6 first:pt-0 scroll-mt-28 lg:scroll-mt-36"
              >
                <ScrollReveal delay={50}>
                  <div
                    className={cn(
                      "flex flex-col items-center gap-8 lg:gap-14",
                      isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                    )}
                  >
                    {/* Text Column */}
                    <div className="flex-1 w-full max-w-xl text-left">
                      {/* Eyebrow badge */}
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary mb-3">
                        <Icon className="size-3 text-secondary-accent" />
                        <span>{t(item.eyebrowKey)}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-3 leading-[1.2]">
                        {t(item.titleKey)}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                        {t(item.descKey)}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-2.5 mb-6" role="list">
                        {item.bulletKeys.map((bulletKey, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                            <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{t(bulletKey)}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Anchor jump button */}
                      <div>
                        <a
                          href="#feature-categories"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors group"
                        >
                          <span>{t("featuresDeepDive.backToCategories")}</span>
                          <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>

                    {/* Visual Column */}
                    <div className="flex-1 w-full max-w-xl lg:max-w-none">
                      {item.renderVisual(t)}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
