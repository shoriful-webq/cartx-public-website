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
 * 1. Storefront Mockup
 * ───────────────────────────────────────────────────────────── */
function StorefrontMockup({ notice }: { notice: string }) {
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
                <p className="text-xs font-bold text-foreground">Custom Domain</p>
                <p className="text-[9.5px] text-muted-foreground">Primary store web address</p>
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

        <div className="rounded-lg border border-border bg-card p-3 shadow-2xs space-y-2">
          <p className="text-xs font-bold text-foreground">Brand Identity & Styling</p>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="bg-muted/30 p-2 rounded border border-border/50">
              <span className="text-muted-foreground block text-[9px]">Store Display Name</span>
              <span className="font-semibold text-foreground">Aura Boutique</span>
            </div>
            <div className="bg-muted/30 p-2 rounded border border-border/50">
              <span className="text-muted-foreground block text-[9px]">Primary Accent Color</span>
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
            <span className="text-xs font-medium text-foreground">Responsive Storefront Theme</span>
          </div>
          <span className="text-[9px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded">
            Modern Editorial Live
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2. Products Catalog Mockup
 * ───────────────────────────────────────────────────────────── */
function ProductCatalogMockup({ notice }: { notice: string }) {
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
            <p className="text-xs font-bold text-foreground">Premium Linen Shirt</p>
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
            <span>Variant</span>
            <span>SKU</span>
            <span>Price</span>
            <span className="text-right">Compare At</span>
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
function OrdersMockup({ notice }: { notice: string }) {
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
              <span className="font-semibold text-foreground mt-1">Placed</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="size-4 rounded-full bg-success text-white flex items-center justify-center text-[8px] font-bold">
                ✓
              </div>
              <span className="font-semibold text-foreground mt-1">Confirmed</span>
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
function InventoryControlMockup({ notice }: { notice: string }) {
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
            <p className="text-xs font-bold text-foreground">Live Stock Overview</p>
            <p className="text-[9px] text-muted-foreground">Automated stock tracking enabled</p>
          </div>
          <span className="text-[9px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
            Central Warehouse
          </span>
        </div>

        <div className="rounded-lg border border-border bg-card overflow-hidden divide-y divide-border/60 shadow-2xs">
          <div className="px-3 py-1.5 bg-muted/30 text-[9px] font-semibold text-muted-foreground grid grid-cols-4">
            <span>Item / SKU</span>
            <span>In Stock</span>
            <span>Threshold</span>
            <span className="text-right">Status</span>
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
            <span className="text-right font-bold text-amber-600 dark:text-amber-400">Low Stock</span>
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
function CustomerManagementMockup({ notice }: { notice: string }) {
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
            Returning VIP
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div className="bg-card p-2 rounded border border-border">
            <span className="text-[9px] text-muted-foreground block">Total Orders</span>
            <span className="text-sm font-bold text-foreground">4 Orders</span>
          </div>
          <div className="bg-card p-2 rounded border border-border">
            <span className="text-[9px] text-muted-foreground block">Lifetime Spend</span>
            <span className="text-sm font-bold text-foreground">৳12,450</span>
          </div>
          <div className="bg-card p-2 rounded border border-border">
            <span className="text-[9px] text-muted-foreground block">Last Order</span>
            <span className="text-sm font-bold text-foreground">2 days ago</span>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-[9.5px]">
            <span className="font-semibold text-foreground">Default Delivery Address</span>
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
function PaymentManagementMockup({ notice }: { notice: string }) {
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
 * 7. Delivery Operations Mockup
 * ───────────────────────────────────────────────────────────── */
function DeliveryOperationsMockup({ notice }: { notice: string }) {
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
 * 8. Marketing Mockup
 * ───────────────────────────────────────────────────────────── */
function MarketingMockup({ notice }: { notice: string }) {
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
 * 9. Reports & Analytics Mockup
 * ───────────────────────────────────────────────────────────── */
function ReportsAnalyticsMockup({ notice }: { notice: string }) {
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
function MobileAppsMockup({ notice }: { notice: string }) {
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
            <p className="text-[11px] font-bold text-foreground leading-tight mt-0.5">Express Mobile Checkout</p>
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
              <span className="text-[10px] font-bold text-foreground">iOS & Android</span>
            </div>
            <p className="text-[9px] text-muted-foreground leading-snug">
              Published under your own brand name on App Store & Google Play.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
            <div className="flex items-center gap-1.5 text-secondary-accent mb-1">
              <Bell className="size-3.5" />
              <span className="text-[10px] font-bold text-foreground">Push Notifications</span>
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
function EcosystemIntegrationsMockup({ notice }: { notice: string }) {
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
        <p className="text-xs font-bold text-foreground">Connected Platform Integrations</p>
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
function SecurityMockup({ notice }: { notice: string }) {
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
        <p className="text-xs font-bold text-foreground">Store Security & Administrative Roles</p>
        <div className="rounded-lg border border-border bg-card overflow-hidden divide-y divide-border/60 shadow-2xs text-[10px]">
          <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Key className="size-3.5 text-primary" />
              <div>
                <span className="font-semibold text-foreground">Store Owner</span>
                <span className="text-[8.5px] text-muted-foreground block">Full billing, settings, and team controls</span>
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
                <span className="font-semibold text-foreground">Operations Staff</span>
                <span className="text-[8.5px] text-muted-foreground block">Order fulfillment & inventory management only</span>
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
              <span className="font-bold text-foreground block">TLS 256-bit</span>
              <span className="text-[8px] text-muted-foreground">Checkout Encryption</span>
            </div>
          </div>
          <div className="bg-card p-2 rounded border border-border flex items-center gap-2">
            <Database className="size-3.5 text-primary" />
            <div>
              <span className="font-bold text-foreground block">Daily Backups</span>
              <span className="text-[8px] text-muted-foreground">Automated & Encrypted</span>
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
    eyebrow: "STORE MANAGEMENT",
    title: "Store Management & Storefront Customization",
    description:
      "Build an expressive, branded online store tailored to your unique identity. Map custom domains with automated SSL renewal, customize typography and color palettes, and publish responsive storefront themes that convert shoppers.",
    bullets: [
      "Custom domain mapping with automated SSL certification and zero renewal fees",
      "Upload brand logos, customize color schemes, and adjust responsive layout styles",
      "Curate featured product collection banners, hero lookbooks, and category navigations",
      "Bilingual storefront support with seamless English and Bangla language switching",
    ],
    icon: Store,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    renderVisual: (t) => <StorefrontMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "products",
    eyebrow: "CATALOG & VARIANTS",
    title: "Product Catalog & Variant Management",
    description:
      "Manage comprehensive product catalogs with high-resolution image galleries, structured categories, SKU tracking, and flexible multi-dimensional variant matrices for size, color, and materials.",
    bullets: [
      "Multi-variant matrix configuration (size, color, material, weight) with independent SKUs",
      "High-resolution product image galleries with touch zoom and thumbnail navigation",
      "Structured product categories, customizable tags, and automated collection grouping",
      "Special discounted pricing, compare-at retail rates, and bulk pricing rules",
    ],
    icon: Package,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    renderVisual: (t) => <ProductCatalogMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "orders",
    eyebrow: "ORDER FULFILLMENT",
    title: "Order Processing & Fulfillment Lifecycle",
    description:
      "Maintain complete operational control over customer purchases from checkout through fulfillment and courier dispatch. Review customer shipping notes, generate formatted invoices, and track orders from placement to delivery.",
    bullets: [
      "Real-time order status timeline: Placed → Confirmed → Dispatched → Delivered",
      "One-click professional printable invoices and packing slips with merchant branding",
      "Customer contact phone numbers, delivery addresses, and shipping instructions",
      "Consignment tracking integration with domestic courier fulfillment handoffs",
    ],
    icon: ShoppingBag,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    renderVisual: (t) => <OrdersMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "inventory",
    eyebrow: "INVENTORY CONTROL",
    title: "Real-Time Inventory Control & Stock Alerts",
    description:
      "Prevent stockouts and overselling with automated stock deductions upon confirmed customer checkout, variant-level quantity tracking, customizable low-inventory threshold notifications, and automated restocking indicators.",
    bullets: [
      "Automated real-time stock deductions upon verified customer order confirmation",
      "Customizable low-stock threshold alerts per SKU to prompt timely vendor reorders",
      "Variant-level quantity tracking across sizes, colors, and warehouse locations",
      "Stock availability status toggles (In Stock, Low Stock, Pre-Order, Sold Out)",
    ],
    icon: Boxes,
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-600 dark:text-sky-400",
    renderVisual: (t) => <InventoryControlMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "customers",
    eyebrow: "CUSTOMER RELATIONSHIPS",
    title: "Customer Profiles & Purchase History",
    description:
      "Build long-term customer relationships with centralized customer profiles, saved delivery addresses, verified phone numbers, lifetime order summaries, and personalized merchant notes for VIP and returning shoppers.",
    bullets: [
      "Comprehensive customer directory with full contact info, phone numbers, and delivery records",
      "Lifetime purchase history, total spend, and repeat order frequency tracking",
      "Saved delivery addresses and recipient shipping instructions for rapid checkout",
      "Private merchant customer notes and VIP/returning shopper segment tags",
    ],
    icon: Users,
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    renderVisual: (t) => <CustomerManagementMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "payments",
    eyebrow: "PAYMENT MANAGEMENT",
    title: "Payment Management & Digital Wallets",
    description:
      "Accept customer payments effortlessly through native bKash and Nagad mobile financial services, Visa and Mastercard debit/credit cards, and Cash on Delivery with full settlement auditing records.",
    bullets: [
      "Instant bKash & Nagad merchant checkout integration with automated callback verification",
      "Debit and credit card acceptance via verified domestic payment gateways",
      "Cash on Delivery (COD) order management with phone verification workflows",
      "Real-time transaction status logs, settlement records, and refund tracking",
    ],
    icon: CreditCard,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    renderVisual: (t) => <PaymentManagementMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "shipping",
    eyebrow: "DELIVERY OPERATIONS",
    title: "Delivery Operations & Courier Logistics",
    description:
      "Streamline domestic fulfillment with flexible shipping rate rules for Inside and Outside Dhaka, automated consignment tracking code creation, and direct API integration with leading domestic courier services.",
    bullets: [
      "Zonal delivery fee rules for Inside Dhaka, Dhaka Suburbs, and Outside Dhaka",
      "Direct courier API integration with Pathao Express, Steadfast, and RedX logistics",
      "Automated consignment tracking code generation upon parcel dispatch",
      "Real-time parcel transit status monitoring and delivery return tracking",
    ],
    icon: Truck,
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-600 dark:text-teal-400",
    renderVisual: (t) => <DeliveryOperationsMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "marketing",
    eyebrow: "GROWTH & CAMPAIGNS",
    title: "Marketing Tools, Coupons & Promotions",
    description:
      "Boost customer conversion and average order values with versatile discount coupon codes, minimum order value thresholds, scheduled seasonal promotions, and usage caps to protect merchant margins.",
    bullets: [
      "Percentage (%) and fixed-amount (৳) discount promotional coupon codes",
      "Minimum order value requirements to protect merchant unit profit margins",
      "Campaign scheduling with start dates, expiry deadlines, and usage caps",
      "Real-time coupon redemption analytics to measure campaign return on investment",
    ],
    icon: Percent,
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600 dark:text-rose-400",
    renderVisual: (t) => <MarketingMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "analytics",
    eyebrow: "REPORTS & ANALYTICS",
    title: "Reports and Analytics & Store Insights",
    description:
      "Gain clear visibility into your store's commercial health without complex setup. Review daily, weekly, and monthly sales summaries, order volume trends, top-selling product rankings, and payment breakdowns.",
    bullets: [
      "Daily, weekly, and monthly gross sales summaries and average basket sizes",
      "Visual order volume trends and sales trajectory comparisons across time periods",
      "Top-selling product rankings ranked by unit volume and total revenue generated",
      "Payment method share reports comparing MFS, card payments, and COD",
    ],
    icon: BarChart3,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
    renderVisual: (t) => <ReportsAnalyticsMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "mobile-apps",
    eyebrow: "MOBILE COMMERCE",
    title: "Mobile Commerce & White-Label Apps",
    description:
      "Meet shoppers on the devices they use most with an ultra-fast touch-optimized mobile browser storefront, alongside options for published branded white-label native apps on iOS and Android.",
    bullets: [
      "Sub-second touch-optimized mobile web experience for all smartphone browsers",
      "Optional published native iOS and Android apps under your own store brand name",
      "Automated push notifications for order dispatch, sales alerts, and restocks",
      "Mobile merchant management tools for checking orders and sales on the go",
    ],
    icon: Smartphone,
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    renderVisual: (t) => <MobileAppsMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "integrations",
    eyebrow: "CONNECTED ECOSYSTEM",
    title: "API Connectors & Ecosystem Integrations",
    description:
      "Connect your online store directly to the services your business relies on — domestic couriers, payment gateways, Meta Pixel, Google Analytics, and custom developer REST webhooks.",
    bullets: [
      "Pre-built direct connectors for Pathao, Steadfast, and RedX logistics APIs",
      "Seamless payment gateway API configurations for bKash, Nagad, and SSLCommerz",
      "Meta Pixel (Facebook) and Google Analytics 4 tracking script integration",
      "Clean, native integrations without third-party plugin conflicts or performance bloat",
    ],
    icon: Layers,
    iconBg: "bg-blue-600/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    renderVisual: (t) => <EcosystemIntegrationsMockup notice={t("featuresDeepDive.demoNotice")} />,
  },
  {
    id: "security",
    eyebrow: "SECURITY & COMPLIANCE",
    title: "Security Infrastructure, Roles & Encryption",
    description:
      "Safeguard your e-commerce operations, customer data, and administrative credentials with role-based team permissions, standard TLS 256-bit encryption, automated daily backups, and administrative audit trails.",
    bullets: [
      "Granular team access permissions (Store Owner, Operations Staff, Support Agent)",
      "Industry-standard TLS 256-bit encryption on all checkout and customer sessions",
      "Automated daily database backups with encrypted cloud storage protection",
      "Administrative audit trail logging to monitor staff actions and order modifications",
    ],
    icon: ShieldCheck,
    iconBg: "bg-slate-500/10",
    iconColor: "text-slate-700 dark:text-slate-300",
    renderVisual: (t) => <SecurityMockup notice={t("featuresDeepDive.demoNotice")} />,
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
                        <span>{item.eyebrow}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-3 leading-[1.2]">
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
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors group"
                        >
                          <span>Back to all feature categories</span>
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
