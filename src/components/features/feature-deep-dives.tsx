"use client";

import React from "react";
import {
  Layers,
  Store,
  Package,
  ShoppingBag,
  CreditCard,
  Truck,
  Percent,
  BarChart3,
  Smartphone,
  CheckCircle2,
  Lock,
  Globe,
  Tag,
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "@/components/Home/section-heading";
import { cn } from "@/lib/utils";

interface DeepDiveItem {
  id: string;
  aliasIds: string[];
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  renderVisual: (t: (key: string) => string) => React.ReactNode;
}

/* ─────────────────────────────────────────────────────────────
 * 1. Store Management Mockup
 * ───────────────────────────────────────────────────────────── */
function StoreManagementMockup({ notice }: { notice: string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown select-none">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">admin.cartx.app/settings</span>
        <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
          {notice}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-3 bg-background/50">
        {/* Custom Domain Card */}
        <div className="rounded-lg border border-border bg-card p-3 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Globe className="size-4 text-primary" />
              <div>
                <p className="text-xs font-bold text-foreground">Custom Domain</p>
                <p className="text-[9.5px] text-muted-foreground">Primary store address</p>
              </div>
            </div>
            <span className="text-[8.5px] font-semibold text-success bg-success/10 px-2 py-0.5 rounded border border-success/20">
              Active & Connected
            </span>
          </div>
          <div className="flex items-center justify-between bg-muted/30 rounded p-2 text-xs font-mono">
            <span className="font-semibold text-foreground">mystore.com.bd</span>
            <span className="text-[9px] text-muted-foreground flex items-center gap-1">
              <Lock className="size-2.5 text-success" /> SSL Auto-Renewed
            </span>
          </div>
        </div>

        {/* Store Brand Settings */}
        <div className="rounded-lg border border-border bg-card p-3 shadow-2xs space-y-2">
          <p className="text-xs font-bold text-foreground">Brand Identity & Assets</p>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="bg-muted/30 p-2 rounded border border-border/50">
              <span className="text-muted-foreground block text-[9px]">Store Name</span>
              <span className="font-semibold text-foreground">Aura Boutique</span>
            </div>
            <div className="bg-muted/30 p-2 rounded border border-border/50">
              <span className="text-muted-foreground block text-[9px]">Primary Accent</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="size-3 rounded-full bg-primary" />
                <span className="font-semibold font-mono text-foreground">#2563EB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Access Roles */}
        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-primary" />
            <span className="text-xs font-medium text-foreground">Role-Based Admin Access</span>
          </div>
          <span className="text-[9px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded">
            2 Admins Active
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2. Product & Inventory Mockup
 * ───────────────────────────────────────────────────────────── */
function ProductInventoryMockup({ notice }: { notice: string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown select-none">
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
        {/* Product header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-foreground">Linen Relaxed Shirt</p>
            <p className="text-[9px] font-mono text-muted-foreground">SKU: SHIRT-LINEN-26</p>
          </div>
          <span className="text-xs font-bold text-foreground bg-primary/10 text-primary px-2 py-0.5 rounded">
            ৳1,850
          </span>
        </div>

        {/* Variants Matrix */}
        <div className="rounded-lg border border-border bg-card overflow-hidden divide-y divide-border/60 shadow-2xs">
          <div className="px-3 py-1.5 bg-muted/30 text-[9px] font-semibold text-muted-foreground grid grid-cols-4">
            <span>Variant</span>
            <span>SKU</span>
            <span>Price</span>
            <span className="text-right">Stock Level</span>
          </div>
          <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
            <span className="font-semibold text-foreground">Blue / L</span>
            <span className="font-mono text-muted-foreground text-[9px]">LNN-BLU-L</span>
            <span className="text-foreground">৳1,850</span>
            <span className="text-right font-bold text-success">42 in stock</span>
          </div>
          <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
            <span className="font-semibold text-foreground">Sand / M</span>
            <span className="font-mono text-muted-foreground text-[9px]">LNN-SND-M</span>
            <span className="text-foreground">৳1,850</span>
            <span className="text-right font-bold text-amber-600 dark:text-amber-400">
              3 left (Alert)
            </span>
          </div>
          <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
            <span className="font-semibold text-foreground">White / XL</span>
            <span className="font-mono text-muted-foreground text-[9px]">LNN-WHT-XL</span>
            <span className="text-foreground">৳1,850</span>
            <span className="text-right font-bold text-success">18 in stock</span>
          </div>
        </div>

        {/* Inventory Automation Pill */}
        <div className="rounded-md border border-border bg-card p-2 text-[9.5px] text-muted-foreground flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3 text-success" />
            Automatic stock deduction upon confirmed order
          </span>
          <span className="font-semibold text-primary">Live Synced</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3. Order Processing Mockup
 * ───────────────────────────────────────────────────────────── */
function OrderProcessingMockup({ notice }: { notice: string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown select-none">
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
        {/* Customer & Order Header */}
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

        {/* Status Timeline */}
        <div className="rounded-lg border border-border bg-card p-3 shadow-2xs space-y-2">
          <p className="text-[10px] font-semibold text-foreground uppercase tracking-wider">
            Order Fulfillment Timeline
          </p>
          <div className="grid grid-cols-4 gap-1 text-center text-[9px]">
            <div className="flex flex-col items-center">
              <div className="size-4 rounded-full bg-success text-white flex items-center justify-center text-[8px] font-bold">
                ✓
              </div>
              <span className="font-semibold text-foreground mt-1">Placed</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="size-4 rounded-full bg-success text-white flex items-center justify-center text-[8px] font-bold">
                ✓
              </div>
              <span className="font-semibold text-foreground mt-1">Verified</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="size-4 rounded-full bg-primary text-white flex items-center justify-center text-[8px] font-bold animate-pulse">
                •
              </div>
              <span className="font-semibold text-primary mt-1">Dispatched</span>
            </div>
            <div className="flex flex-col items-center opacity-60">
              <div className="size-4 rounded-full bg-muted border border-border flex items-center justify-center text-[8px]">
                4
              </div>
              <span className="text-muted-foreground mt-1">Delivered</span>
            </div>
          </div>
        </div>

        {/* Courier & Invoice Details */}
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
 * 4. Payment Management Mockup
 * ───────────────────────────────────────────────────────────── */
function PaymentManagementMockup({ notice }: { notice: string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown select-none">
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
        <p className="text-xs font-bold text-foreground">Supported Payment Gateways</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-pink-600 text-xs">bKash</span>
              <span className="size-1.5 rounded-full bg-success" />
            </div>
            <p className="text-[9px] text-muted-foreground">Instant Direct Checkout</p>
            <span className="text-[8.5px] font-semibold text-success bg-success/10 px-1.5 py-0.2 rounded mt-1.5 inline-block">
              Connected
            </span>
          </div>

          <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-orange-600 text-xs">Nagad</span>
              <span className="size-1.5 rounded-full bg-success" />
            </div>
            <p className="text-[9px] text-muted-foreground">Merchant Account API</p>
            <span className="text-[8.5px] font-semibold text-success bg-success/10 px-1.5 py-0.2 rounded mt-1.5 inline-block">
              Connected
            </span>
          </div>
        </div>

        {/* Recent Transaction Log */}
        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
          <div className="flex items-center justify-between text-[9px] font-semibold text-muted-foreground pb-1.5 mb-1.5 border-b border-border/60">
            <span>Recent Settlement</span>
            <span>Status</span>
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
 * 5. Delivery Operations Mockup
 * ───────────────────────────────────────────────────────────── */
function DeliveryOperationsMockup({ notice }: { notice: string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown select-none">
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
            <span className="text-[9px] text-muted-foreground block">Inside Dhaka</span>
            <span className="text-sm font-bold text-foreground">৳60</span>
            <span className="text-[8.5px] text-success block mt-0.5">24–48 Hours</span>
          </div>
          <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
            <span className="text-[9px] text-muted-foreground block">Outside Dhaka</span>
            <span className="text-sm font-bold text-foreground">৳120</span>
            <span className="text-[8.5px] text-primary block mt-0.5">48–72 Hours</span>
          </div>
        </div>

        {/* Courier Integrations */}
        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
          <p className="text-[10px] font-semibold text-foreground mb-1.5">Active Courier Integrations</p>
          <div className="flex items-center justify-between text-[9.5px] bg-muted/30 p-2 rounded">
            <div className="flex items-center gap-2">
              <Truck className="size-3.5 text-primary" />
              <span className="font-semibold text-foreground">Pathao & Steadfast APIs</span>
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
 * 6. Marketing Mockup
 * ───────────────────────────────────────────────────────────── */
function MarketingMockup({ notice }: { notice: string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown select-none">
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
        <p className="text-xs font-bold text-foreground">Active Promotion Codes</p>
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
          <span>Total redemptions this month</span>
          <span className="font-bold text-foreground">428 Uses</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 7. Reports & Analytics Mockup
 * ───────────────────────────────────────────────────────────── */
function ReportsAnalyticsMockup({ notice }: { notice: string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown select-none">
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
            <span className="text-[9px] text-muted-foreground block">Gross Revenue (30d)</span>
            <span className="text-base font-bold text-foreground">৳1,84,200</span>
            <span className="text-[8.5px] text-success flex items-center gap-0.5 mt-0.5">
              <TrendingUp className="size-2.5" /> +14.2% vs prev
            </span>
          </div>

          <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
            <span className="text-[9px] text-muted-foreground block">Total Orders</span>
            <span className="text-base font-bold text-foreground">218 Orders</span>
            <span className="text-[8.5px] text-primary block mt-0.5">৳845 Avg Order</span>
          </div>
        </div>

        {/* Visual Bar Summary */}
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
 * 8. Mobile Commerce Mockup
 * ───────────────────────────────────────────────────────────── */
function MobileCommerceMockup({ notice }: { notice: string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown select-none max-w-sm mx-auto">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">Mobile Client App</span>
        <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
          {notice}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-3 bg-background/50">
        {/* Mobile Header */}
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <span className="font-serif font-extrabold text-sm text-foreground">AURA</span>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShoppingBag className="size-3.5 text-primary" />
            <span className="font-bold text-foreground">2</span>
          </div>
        </div>

        {/* Mobile Banner */}
        <div className="rounded-lg bg-gradient-to-r from-primary/15 to-secondary-accent/15 border border-primary/20 p-2.5">
          <span className="text-[8px] font-bold uppercase tracking-wider text-primary">Mobile Exclusive</span>
          <p className="text-xs font-bold text-foreground leading-tight mt-0.5">Express Touch Checkout</p>
        </div>

        {/* Live Push Notification simulation */}
        <div className="rounded-lg border border-border bg-card p-2 shadow-xs flex items-center gap-2">
          <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Clock className="size-3" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-foreground leading-tight">Order #1084 Out for Delivery</p>
            <p className="text-[8.5px] text-muted-foreground">Rider will arrive within 2 hours</p>
          </div>
        </div>

        {/* Mobile Tab Bar */}
        <div className="grid grid-cols-4 gap-1 pt-2 border-t border-border text-center text-[8px] text-muted-foreground">
          <span className="font-bold text-primary">Store</span>
          <span>Catalog</span>
          <span>Bag</span>
          <span>Account</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Deep Dives Registry (8 Features)
 * ───────────────────────────────────────────────────────────── */
const DEEP_DIVES: DeepDiveItem[] = [
  {
    id: "store-management",
    aliasIds: ["storefront", "security"],
    eyebrow: "STOREFRONT & SECURITY",
    title: "Store Management & Security",
    description:
      "Organize your online storefront presence, brand identity, custom domain mapping, and secure administrative controls with verified encryption and daily automated backups.",
    bullets: [
      "Custom domain mapping with automated SSL renewal",
      "Brand asset uploads, color schemes, and responsive layout controls",
      "Multi-user admin access with role-based permissions",
      "TLS 256-bit encryption for all checkout and session data",
    ],
    icon: Store,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    renderVisual: (t) => <StoreManagementMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "product-inventory",
    aliasIds: ["products", "inventory"],
    eyebrow: "CATALOG & STOCK",
    title: "Product & Inventory Management",
    description:
      "Manage comprehensive product information, high-resolution media galleries, variant matrices (size, color, weight), pricing, and real-time inventory tracking with low-stock alerts.",
    bullets: [
      "Multi-variant matrix configuration per product line",
      "Automated stock deduction upon order confirmation",
      "Custom low-stock threshold alerts to prevent stockouts",
      "SKU and category-level organization for fast navigation",
    ],
    icon: Package,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    renderVisual: (t) => <ProductInventoryMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "order-processing",
    aliasIds: ["orders", "customers"],
    eyebrow: "FULFILLMENT & CUSTOMERS",
    title: "Order Processing & Customer Management",
    description:
      "Maintain complete operational control over customer purchases and fulfillment lifecycles. Review customer details, generate printable invoices, and track orders from placement to delivery.",
    bullets: [
      "Real-time order timeline: Received → Confirmed → Dispatched → Delivered",
      "One-click printable invoices with formatted merchant details",
      "Customer delivery phone numbers, shipping addresses, and lifetime notes",
      "Fulfillment handoff tracking with domestic courier dispatch",
    ],
    icon: ShoppingBag,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    renderVisual: (t) => <OrderProcessingMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "payment-management",
    aliasIds: ["payments"],
    eyebrow: "DIGITAL PAYMENTS",
    title: "Payment Gateway Management",
    description:
      "Accept payments effortlessly through local digital wallets, cards, and Cash on Delivery. Monitor transaction records, gateway statuses, and settlement logs in real time.",
    bullets: [
      "Native bKash & Nagad checkout integration for local shoppers",
      "Visa & Mastercard debit/credit card acceptance",
      "Cash on Delivery (COD) order management and verification",
      "Transaction status visibility and settlement auditing records",
    ],
    icon: CreditCard,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    renderVisual: (t) => <PaymentManagementMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "delivery-operations",
    aliasIds: ["shipping"],
    eyebrow: "LOGISTICS & COURIERS",
    title: "Delivery Operations & Courier Integration",
    description:
      "Simplify domestic shipping with structured delivery rules, zonal charges, and seamless parcel handoffs to established couriers like Pathao and Steadfast.",
    bullets: [
      "Zonal delivery fee rules for Inside Dhaka and Outside Dhaka",
      "Automated consignment tracking code generation for parcels",
      "Real-time shipment status visibility across logistics hubs",
      "Direct courier partner API workflows for fast dispatch",
    ],
    icon: Truck,
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-600 dark:text-teal-400",
    renderVisual: (t) => <DeliveryOperationsMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "marketing",
    aliasIds: [],
    eyebrow: "GROWTH & PROMOTIONS",
    title: "Marketing & Promotional Campaigns",
    description:
      "Drive customer conversion and repeat orders with flexible discount codes, minimum order value thresholds, and scheduled promotional campaigns.",
    bullets: [
      "Percentage (%) and fixed-amount (৳) discount coupons",
      "Minimum order value requirements to protect merchant margins",
      "Start and expiry date campaign scheduling with usage caps",
      "Real-time redemption tracking for active promotions",
    ],
    icon: Percent,
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600 dark:text-rose-400",
    renderVisual: (t) => <MarketingMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "reports-analytics",
    aliasIds: ["analytics"],
    eyebrow: "BUSINESS INSIGHTS",
    title: "Reports and Store Analytics",
    description:
      "Access transparent store performance summaries without complex setup. Review sales revenue, daily order volumes, top-performing products, and payment breakdowns.",
    bullets: [
      "Daily, weekly, and monthly gross sales summaries",
      "Order volume trend graphs and average basket values",
      "Top-selling product rankings by units and revenue",
      "Payment method distribution and settlement summaries",
    ],
    icon: BarChart3,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
    renderVisual: (t) => <ReportsAnalyticsMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "mobile-commerce",
    aliasIds: ["mobile-apps", "integrations"],
    eyebrow: "MOBILE COMMERCE",
    title: "Mobile Commerce & Branded Apps",
    description:
      "Give shoppers a mobile-first browsing experience with fast touch checkouts, alongside options for published branded white-label mobile apps on iOS and Android.",
    bullets: [
      "Touch-optimized responsive storefront for mobile browsers",
      "Optional branded native mobile apps for iOS and Android",
      "Real-time push notifications for order updates and confirmations",
      "Merchant mobile management tools for on-the-go tracking",
    ],
    icon: Smartphone,
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    renderVisual: (t) => <MobileCommerceMockup notice={t("featuresDeepDive.demoNotice")} />,
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
        <SectionHeading
          eyebrow={t("featuresDeepDive.eyebrow")}
          eyebrowIcon={Layers}
          title={t("featuresDeepDive.title")}
          titleGradient={true}
          description={t("featuresDeepDive.description")}
          size="default"
          className="mb-12 sm:mb-16 lg:mb-20"
        />

        {/* ── 8 Alternating Deep Dive Rows ── */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {DEEP_DIVES.map((item, idx) => {
            const isReversed = idx % 2 === 1; // Alternating layout
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="relative pt-6 first:pt-0"
              >
                {/* ── Anchor Points for Navigation & Deep Linking ── */}
                <div id={item.id} className="scroll-mt-32" />
                {item.aliasIds.map((alias) => (
                  <div key={alias} id={alias} className="scroll-mt-32" />
                ))}

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
                      <span>{item.eyebrow}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2.5 mb-6" role="list">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                          <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Anchor jump button */}
                    <div>
                      <a
                        href="#feature-categories"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
                      >
                        <span>Back to all feature categories</span>
                        <ArrowRight className="size-3" />
                      </a>
                    </div>
                  </div>

                  {/* Visual Column */}
                  <div className="flex-1 w-full max-w-xl lg:max-w-none">
                    {item.renderVisual(t)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

