"use client";

import {
  ShoppingBag,
  Package,
  CreditCard,
  TrendingUp,
  BarChart3,
  Eye,
  Star,
} from "lucide-react";

/**
 * HeroDashboardMockup — A decorative, illustrative product visual for the
 * CartX Home Page hero. This is a pure presentational component that depicts
 * what a merchant dashboard *could* look like. All data shown here is fictional
 * placeholder content for demonstration purposes only.
 *
 * It intentionally uses the project's global design tokens (CSS variables) so
 * that its appearance stays in sync with the CartX brand.
 */
export function HeroDashboardMockup() {
  return (
    <div
      className="relative w-full select-none"
      aria-hidden="true"
      role="img"
      aria-label="CartX merchant dashboard preview"
    >
      {/* Outer glow / soft shadow */}
      <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />

      {/* Main dashboard frame */}
      <div className="relative rounded-2xl border border-border bg-card shadow-dropdown overflow-hidden">
        {/* ── Title bar ── */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5 bg-muted/40">
          <span className="size-2.5 rounded-full bg-error/70" />
          <span className="size-2.5 rounded-full bg-warning/70" />
          <span className="size-2.5 rounded-full bg-success/70" />
          <span className="ml-3 text-[10px] font-medium text-muted-foreground tracking-wide">
            CartX — Merchant Dashboard
          </span>
        </div>

        <div className="flex">
          {/* ── Sidebar ── */}
          <div className="hidden sm:flex flex-col w-36 border-r border-border bg-muted/20 py-3 px-2.5 gap-0.5 shrink-0">
            <SidebarItem icon={BarChart3} label="Overview" active />
            <SidebarItem icon={ShoppingBag} label="Orders" />
            <SidebarItem icon={Package} label="Products" />
            <SidebarItem icon={CreditCard} label="Payments" />
            <SidebarItem icon={Eye} label="Storefront" />
          </div>

          {/* ── Main content ── */}
          <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4 min-w-0">
            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <StatCard label="Revenue" value="৳1,24,500" trend="+12%" color="primary" />
              <StatCard label="Orders" value="148" trend="+8%" color="success" />
              <StatCard label="Products" value="86" trend="+3" color="secondary-accent" />
              <StatCard label="Visitors" value="2,410" trend="+22%" color="warning" />
            </div>

            {/* Content grid: Orders table + Products */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 sm:gap-3">
              {/* Orders table */}
              <div className="lg:col-span-3 rounded-lg border border-border bg-card overflow-hidden">
                <div className="px-3 py-2 border-b border-border flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-foreground">Recent Orders</span>
                  <span className="text-[9px] text-primary font-medium">View All</span>
                </div>
                <div className="divide-y divide-border">
                  <OrderRow id="#1047" customer="Rahim Khan" amount="৳2,450" status="Delivered" statusColor="bg-success" />
                  <OrderRow id="#1046" customer="Nusrat Jahan" amount="৳1,890" status="Shipped" statusColor="bg-primary" />
                  <OrderRow id="#1045" customer="Fahim Ahmed" amount="৳3,200" status="Processing" statusColor="bg-warning" />
                  <OrderRow id="#1044" customer="Tania Akter" amount="৳980" status="Delivered" statusColor="bg-success" />
                </div>
              </div>

              {/* Product cards */}
              <div className="lg:col-span-2 space-y-2 sm:space-y-3">
                <div className="rounded-lg border border-border bg-card overflow-hidden">
                  <div className="px-3 py-2 border-b border-border">
                    <span className="text-[11px] font-semibold text-foreground">Top Products</span>
                  </div>
                  <div className="p-2 space-y-2">
                    <ProductCard name="Premium Leather Bag" price="৳3,490" sold={42} rating={4.8} />
                    <ProductCard name="Cotton Polo Shirt" price="৳890" sold={128} rating={4.6} />
                    <ProductCard name="Wireless Earbuds" price="৳1,650" sold={67} rating={4.9} />
                  </div>
                </div>
              </div>
            </div>

            {/* Storefront preview strip */}
            <div className="rounded-lg border border-border bg-muted/30 p-2.5 sm:p-3">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="size-3 text-muted-foreground" />
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Storefront Preview</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                <StorefrontCard color="bg-primary/10" label="Hero Banner" />
                <StorefrontCard color="bg-success/10" label="Featured" />
                <StorefrontCard color="bg-secondary-accent/10" label="Categories" />
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
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] font-medium transition-colors ${
        active
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground"
      }`}
    >
      <Icon className="size-3.5 shrink-0" />
      <span className="truncate">{label}</span>
    </div>
  );
}

function StatCard({
  label,
  value,
  trend,
  color,
}: {
  label: string;
  value: string;
  trend: string;
  color: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-2.5 sm:p-3">
      <p className="text-[10px] text-muted-foreground font-medium mb-1">{label}</p>
      <p className={`text-sm sm:text-base font-bold text-foreground leading-none mb-1`}>{value}</p>
      <div className="flex items-center gap-1">
        <TrendingUp className={`size-2.5 text-${color}`} />
        <span className={`text-[9px] font-semibold text-${color}`}>{trend}</span>
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
}: {
  id: string;
  customer: string;
  amount: string;
  status: string;
  statusColor: string;
}) {
  return (
    <div className="flex items-center justify-between px-3 py-2 text-[11px]">
      <div className="flex items-center gap-3 min-w-0">
        <span className="font-mono text-muted-foreground shrink-0">{id}</span>
        <span className="text-foreground font-medium truncate">{customer}</span>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-foreground font-semibold">{amount}</span>
        <span className={`inline-flex items-center gap-1 text-[9px] font-semibold`}>
          <span className={`size-1.5 rounded-full ${statusColor}`} />
          <span className="text-muted-foreground">{status}</span>
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
}: {
  name: string;
  price: string;
  sold: number;
  rating: number;
}) {
  return (
    <div className="flex items-center gap-2.5 p-1.5 rounded-md hover:bg-muted/40 transition-colors">
      {/* Placeholder thumbnail */}
      <div className="size-8 sm:size-9 rounded-md bg-muted/60 border border-border shrink-0 flex items-center justify-center">
        <Package className="size-3.5 text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-medium text-foreground truncate leading-tight">{name}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[10px] font-semibold text-primary">{price}</span>
          <span className="text-[9px] text-muted-foreground">{sold} sold</span>
          <span className="flex items-center gap-0.5 text-[9px] text-warning">
            <Star className="size-2.5 fill-current" />
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
}

function StorefrontCard({ color, label }: { color: string; label: string }) {
  return (
    <div className={`rounded-md ${color} p-2 sm:p-3 flex flex-col items-center justify-center`}>
      <div className="w-full h-4 sm:h-6 rounded bg-card/60 mb-1.5" />
      <span className="text-[8px] sm:text-[9px] font-medium text-muted-foreground">{label}</span>
    </div>
  );
}

