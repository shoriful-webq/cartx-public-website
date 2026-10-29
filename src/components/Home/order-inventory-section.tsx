"use client";

import React from "react";
import {
  ClipboardList,
  Clock,
  Boxes,
  Package,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface OrderItem {
  id: string;
  customer: string;
  items: string;
  amount: string;
  statusKey: string;
  statusBadgeClass: string;
  timestamp: string;
  paymentMethod: string;
  courier: string;
  active?: boolean;
}

const RECENT_ORDERS: OrderItem[] = [
  {
    id: "#CX-1042",
    customer: "Rahim Ahmed",
    items: "2 items (Oxford Shirt, Chino)",
    amount: "৳4,100",
    statusKey: "orderInventory.statusProcessing",
    statusBadgeClass: "bg-primary/10 text-primary border-primary/20",
    timestamp: "12 mins ago",
    paymentMethod: "bKash",
    courier: "Pathao",
    active: true,
  },
  {
    id: "#CX-1041",
    customer: "Tanzina Islam",
    items: "1 item (Leather Tote Bag)",
    amount: "৳2,850",
    statusKey: "orderInventory.statusDispatched",
    statusBadgeClass: "bg-warning/10 text-warning border-warning/20",
    timestamp: "45 mins ago",
    paymentMethod: "COD",
    courier: "Steadfast",
  },
  {
    id: "#CX-1040",
    customer: "Fahim Shahriar",
    items: "3 items (Summer Polo, Cap)",
    amount: "৳3,420",
    statusKey: "orderInventory.statusDelivered",
    statusBadgeClass: "bg-success/10 text-success border-success/20",
    timestamp: "2 hours ago",
    paymentMethod: "Card",
    courier: "RedX",
  },
];

export interface OrderInventorySectionProps {
  className?: string;
}

export function OrderInventorySection({ className }: OrderInventorySectionProps) {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-label="Manage Orders and Inventory"
      className={cn(
        "relative section-padding border-b border-border bg-card/30 transition-colors overflow-hidden",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            eyebrow={t("orderInventory.badge")}
            eyebrowIcon={ClipboardList}
            title={t("orderInventory.title")}
            titleGradient={true}
            description={t("orderInventory.description")}
            size="default"
            className="mb-8 sm:mb-10 lg:mb-12"
          />
        </ScrollReveal>

        {/* ── Product UI Mockup Frame ── */}
        <ScrollReveal direction="up" delay={120}>
          <div className="w-full rounded-2xl border border-border bg-card shadow-card overflow-hidden mb-10 sm:mb-12 transition-all duration-300 hover:border-primary/30">
            {/* Mockup Titlebar Header */}
            <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-muted/30">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-error/70" />
                <span className="size-2 rounded-full bg-warning/70" />
                <span className="size-2 rounded-full bg-success/70" />
                <span className="ml-2 text-xs font-semibold text-foreground">
                  merchant.cartx.app/orders
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-muted-foreground/80 rounded-md bg-muted px-2 py-0.5 border border-border/60">
                {t("orderInventory.mockupNotice")}
              </span>
            </div>

          {/* Main Dashboard Layout Grid */}
          <div className="p-4 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* ── Left Column (7 cols): Order List Mockup ── */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ClipboardList className="size-4 text-primary" />
                  <h3 className="text-sm font-bold text-foreground">
                    {t("orderInventory.orderListTitle")}
                  </h3>
                </div>
                <span className="text-xs text-muted-foreground">
                  Today (3 orders)
                </span>
              </div>

              {/* Order Cards List */}
              <div className="space-y-2.5">
                {RECENT_ORDERS.map((order) => (
                  <div
                    key={order.id}
                    className={cn(
                      "rounded-xl border p-3.5 transition-all text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                      order.active
                        ? "border-primary/40 bg-primary/[0.03] shadow-xs"
                        : "border-border bg-card/60 hover:border-border/80"
                    )}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Package className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-foreground">
                            {order.id}
                          </span>
                          <span className="text-[11px] text-muted-foreground truncate">
                            • {order.customer}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate mt-0.5">
                          {order.items}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-medium text-muted-foreground bg-muted/60 px-1.5 py-0.5 rounded border border-border/60">
                            {order.paymentMethod}
                          </span>
                          <span className="text-[10px] font-medium text-primary/80 bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20">
                            {order.courier}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/50">
                      <div className="text-left sm:text-right">
                        <p className="text-xs font-bold text-foreground">
                          {order.amount}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {order.timestamp}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "rounded-md border px-2 py-0.5 text-[11px] font-semibold",
                          order.statusBadgeClass
                        )}
                      >
                        {t(order.statusKey)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right Column (5 cols): Order Status Timeline & Stock Availability ── */}
            <div className="lg:col-span-5 space-y-5">
              {/* 1. Order Status Timeline Card for selected Order #CX-1042 */}
              <div className="rounded-xl border border-border bg-card p-4 space-y-3.5">
                <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <Clock className="size-3.5 text-primary" />
                    <span className="text-xs font-bold text-foreground">
                      {t("orderInventory.orderStatusTitle")}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-primary">
                    #CX-1042
                  </span>
                </div>

                {/* Timeline steps */}
                <div className="space-y-3 relative pl-4 border-l-2 border-primary/20 ml-2">
                  {/* Step 1: Placed */}
                  <div className="relative">
                    <span className="absolute -left-[21px] top-0.5 size-3 rounded-full bg-success ring-4 ring-card" />
                    <p className="text-xs font-semibold text-foreground leading-none">
                      {t("orderInventory.timelineStep1")}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      10:24 AM • Online Storefront
                    </p>
                  </div>

                  {/* Step 2: Payment Verified */}
                  <div className="relative">
                    <span className="absolute -left-[21px] top-0.5 size-3 rounded-full bg-success ring-4 ring-card" />
                    <p className="text-xs font-semibold text-foreground leading-none">
                      {t("orderInventory.timelineStep2")}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      10:26 AM • Digital Gateway
                    </p>
                  </div>

                  {/* Step 3: Packing & Labeling (In progress) */}
                  <div className="relative">
                    <span className="absolute -left-[21px] top-0.5 size-3 rounded-full bg-primary ring-4 ring-card animate-pulse" />
                    <p className="text-xs font-semibold text-primary leading-none">
                      {t("orderInventory.timelineStep3")}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      In Fulfillment Queue
                    </p>
                  </div>

                  {/* Step 4: Courier Handover (Pending) */}
                  <div className="relative opacity-60">
                    <span className="absolute -left-[21px] top-0.5 size-3 rounded-full bg-muted border border-border ring-4 ring-card" />
                    <p className="text-xs font-medium text-foreground leading-none">
                      {t("orderInventory.timelineStep4")}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      Estimated 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Stock Availability Card */}
              <div className="rounded-xl border border-border bg-card p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <div className="flex items-center gap-1.5">
                    <Boxes className="size-3.5 text-secondary-accent" />
                    <span className="text-xs font-bold text-foreground">
                      {t("orderInventory.stockTitle")}
                    </span>
                  </div>
                  <span className="rounded bg-success/10 border border-success/20 px-2 py-0.5 text-[10px] font-semibold text-success">
                    {t("orderInventory.inStock")}
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-foreground truncate">
                      Tailored Oxford Shirt
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-muted-foreground">
                      OX-BLU-M
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-lg font-bold text-foreground">48</span>
                    <span className="text-xs text-muted-foreground">
                      {t("orderInventory.unitsAvailable")}
                    </span>
                  </div>
                </div>

                {/* Variant Breakdown Pills */}
                <div className="grid grid-cols-3 gap-1.5 pt-1 text-center">
                  <div className="rounded bg-muted/40 border border-border/60 p-1.5">
                    <p className="text-[10px] text-muted-foreground">Size S</p>
                    <p className="text-xs font-bold text-foreground">12</p>
                  </div>
                  <div className="rounded bg-muted/40 border border-border/60 p-1.5">
                    <p className="text-[10px] text-muted-foreground">Size M</p>
                    <p className="text-xs font-bold text-foreground">20</p>
                  </div>
                  <div className="rounded bg-muted/40 border border-border/60 p-1.5">
                    <p className="text-[10px] text-muted-foreground">Size L</p>
                    <p className="text-xs font-bold text-foreground">16</p>
                  </div>
                </div>

                {/* Conceptual Threshold Reorder Note */}
                <p className="text-[10px] text-muted-foreground/70 leading-tight pt-1">
                  * {t("orderInventory.lowStockNote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Section CTA ── */}
      <ScrollReveal direction="up" delay={200}>
        <div className="flex justify-center">
          <CTAButton
            action="exploreOrderManagement"
            locale={locale}
            size="lg"
            showArrow
            className="px-7 py-3 text-sm rounded-lg shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          />
        </div>
      </ScrollReveal>
    </div>
    </section>
  );
}
