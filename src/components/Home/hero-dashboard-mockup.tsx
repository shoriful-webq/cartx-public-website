"use client";

import React from "react";
import {
  ShoppingBag,
  Package,
  CreditCard,
  TrendingUp,
  BarChart3,
  Eye,
  Star,
  ArrowUpRight,
  Users,
} from "lucide-react";

/**
 * HeroDashboardMockup — A compact, decorative product visual for the
 * CartX Home Page hero. All data shown is fictional placeholder content for
 * demonstration purposes only — not real CartX business results.
 *
 * Uses the project's global design tokens so its appearance stays in sync
 * with the CartX brand.
 */
export function HeroDashboardMockup() {
  return (
    <div
      className="relative w-full select-none"
      aria-hidden="true"
      role="img"
      aria-label="CartX merchant dashboard preview"
    >
      {/* Main dashboard frame */}
      <div
        className="relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown"
      >
        {/* ── Title bar ── */}
        <div className="flex items-center gap-1.5 border-b border-border px-3.5 py-2 bg-muted/30">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
          <span className="ml-auto text-[9.5px] font-medium text-muted-foreground/70 tracking-wide">
            dashboard.cartx.app
          </span>
        </div>

        <div className="flex">
          {/* ── Sidebar ── */}
          <div className="hidden sm:flex flex-col w-28 md:w-32 border-r border-border bg-muted/15 py-2.5 px-2 gap-0.5 shrink-0">
            {/* Logo area */}
            <div className="flex items-center gap-1.5 px-1.5 mb-2.5">
              <div className="size-4.5 rounded bg-primary flex items-center justify-center">
                <span className="text-[7.5px] font-black text-primary-foreground leading-none">
                  C
                </span>
              </div>
              <span className="text-[10.5px] font-bold text-foreground">
                CartX
              </span>
            </div>

            <SidebarItem icon={BarChart3} label="Overview" active />
            <SidebarItem icon={ShoppingBag} label="Orders" />
            <SidebarItem icon={Package} label="Products" />
            <SidebarItem icon={CreditCard} label="Payments" />
            <SidebarItem icon={Users} label="Customers" />
            <SidebarItem icon={Eye} label="Storefront" />
          </div>

          {/* ── Main content ── */}
          <div className="flex-1 p-2.5 sm:p-3 space-y-2 min-w-0 bg-background/50">
            {/* Page header */}
            <div className="flex items-center justify-between mb-0.5">
              <div>
                <p className="text-[11px] font-semibold text-foreground leading-none mb-0.5">
                  Dashboard
                </p>
                <p className="text-[8.5px] text-muted-foreground leading-none">
                  Welcome back — store overview
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1 rounded border border-border bg-card px-1.5 py-0.5">
                <span className="text-[8px] text-muted-foreground">
                  Last 30 days
                </span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              <StatCard
                label="Revenue"
                value="৳1,24,500"
                trend="+12%"
                icon={TrendingUp}
                accentClass="text-primary bg-primary/10"
              />
              <StatCard
                label="Orders"
                value="148"
                trend="+8%"
                icon={ShoppingBag}
                accentClass="text-success bg-success/10"
              />
              <StatCard
                label="Products"
                value="86"
                trend="+3"
                icon={Package}
                accentClass="text-secondary-accent bg-secondary-accent/10"
              />
              <StatCard
                label="Visitors"
                value="2,410"
                trend="+22%"
                icon={Users}
                accentClass="text-warning bg-warning/10"
              />
            </div>

            {/* Content grid: Orders table + Products */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-1.5 sm:gap-2">
              {/* Orders table */}
              <div className="lg:col-span-3 rounded-lg border border-border bg-card overflow-hidden">
                <div className="px-2.5 py-1.5 border-b border-border flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-foreground">
                    Recent Orders
                  </span>
                  <span className="inline-flex items-center gap-0.5 text-[8.5px] text-primary font-medium">
                    View All
                    <ArrowUpRight className="size-2.5" />
                  </span>
                </div>
                <div className="divide-y divide-border">
                  <OrderRow
                    id="#1047"
                    customer="Rahim Khan"
                    amount="৳2,450"
                    status="Delivered"
                    statusColor="bg-success"
                    statusTextColor="text-success"
                  />
                  <OrderRow
                    id="#1046"
                    customer="Nusrat Jahan"
                    amount="৳1,890"
                    status="Shipped"
                    statusColor="bg-primary"
                    statusTextColor="text-primary"
                  />
                  <OrderRow
                    id="#1045"
                    customer="Fahim Ahmed"
                    amount="৳3,200"
                    status="Processing"
                    statusColor="bg-warning"
                    statusTextColor="text-warning"
                  />
                </div>
              </div>

              {/* Product cards */}
              <div className="lg:col-span-2 rounded-lg border border-border bg-card overflow-hidden">
                <div className="px-2.5 py-1.5 border-b border-border flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-foreground">
                    Top Products
                  </span>
                  <span className="inline-flex items-center gap-0.5 text-[8.5px] text-primary font-medium">
                    Manage
                    <ArrowUpRight className="size-2.5" />
                  </span>
                </div>
                <div className="p-1.5 space-y-1">
                  <ProductCard
                    name="Leather Bag"
                    price="৳3,490"
                    sold={42}
                    rating={4.8}
                    color="bg-primary/8"
                  />
                  <ProductCard
                    name="Polo Shirt"
                    price="৳890"
                    sold={128}
                    rating={4.6}
                    color="bg-success/8"
                  />
                </div>
              </div>
            </div>

            {/* Storefront preview strip */}
            <div className="rounded-lg border border-border bg-card p-2">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1">
                  <Eye className="size-2.5 text-muted-foreground" />
                  <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Storefront Preview
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="size-1 rounded-full bg-success" />
                  <span className="text-[7.5px] text-success font-medium">
                    Live
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <StorefrontCard color="bg-primary/8" label="Hero Banner" />
                <StorefrontCard color="bg-success/8" label="Featured" />
                <StorefrontCard
                  color="bg-secondary-accent/8"
                  label="Categories"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function SidebarItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-1.5 px-1.5 py-1 rounded text-[10px] font-medium transition-colors ${
        active
          ? "bg-primary/10 text-primary font-semibold"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <Icon className="size-3 shrink-0" />
      <span className="truncate">{label}</span>
    </div>
  );
}

function StatCard({
  label,
  value,
  trend,
  icon: Icon,
  accentClass,
}: {
  label: string;
  value: string;
  trend: string;
  icon: React.ComponentType<{ className?: string }>;
  accentClass: string;
}) {
  return (
    <div className="rounded-md border border-border bg-card p-2">
      <div className="flex items-center justify-between mb-1">
        <p className="text-[9px] text-muted-foreground font-medium">{label}</p>
        <div
          className={`size-4 rounded flex items-center justify-center ${accentClass}`}
        >
          <Icon className="size-2.5" />
        </div>
      </div>
      <p className="text-xs sm:text-[13px] font-bold text-foreground leading-none mb-0.5">
        {value}
      </p>
      <div className="flex items-center gap-0.5">
        <TrendingUp className="size-2 text-success" />
        <span className="text-[8px] font-semibold text-success">{trend}</span>
      </div>
    </div>
  );
}

function OrderRow({
  id,
  customer,
  amount,
  status,
  statusColor,
  statusTextColor,
}: {
  id: string;
  customer: string;
  amount: string;
  status: string;
  statusColor: string;
  statusTextColor: string;
}) {
  return (
    <div className="flex items-center justify-between px-2.5 py-1 text-[10px] hover:bg-muted/20 transition-colors">
      <div className="flex items-center gap-2 min-w-0">
        <span className="font-mono text-muted-foreground/70 shrink-0 text-[9px]">
          {id}
        </span>
        <span className="text-foreground font-medium truncate">{customer}</span>
      </div>
      <div className="flex items-center gap-2.5 shrink-0">
        <span className="text-foreground font-semibold text-[9.5px]">{amount}</span>
        <span className="inline-flex items-center gap-1 text-[8.5px] font-semibold">
          <span className={`size-1 rounded-full ${statusColor}`} />
          <span className={statusTextColor}>{status}</span>
        </span>
      </div>
    </div>
  );
}

function ProductCard({
  name,
  price,
  sold,
  rating,
  color,
}: {
  name: string;
  price: string;
  sold: number;
  rating: number;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2 p-1 rounded hover:bg-muted/30 transition-colors">
      {/* Placeholder thumbnail */}
      <div
        className={`size-7.5 rounded ${color} border border-border/50 shrink-0 flex items-center justify-center`}
      >
        <Package className="size-3 text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-medium text-foreground truncate leading-tight">
          {name}
        </p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-[9px] font-bold text-primary">{price}</span>
          <span className="text-[8px] text-muted-foreground">{sold} sold</span>
          <span className="flex items-center gap-0.5 text-[8px] text-warning font-medium">
            <Star className="size-2 fill-current" />
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
}

function StorefrontCard({ color, label }: { color: string; label: string }) {
  return (
    <div
      className={`rounded ${color} p-1.5 flex flex-col items-center justify-center gap-1`}
    >
      <div className="w-full h-3.5 rounded bg-card/70" />
      <span className="text-[7.5px] font-medium text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
