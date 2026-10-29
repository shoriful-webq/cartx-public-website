"use client";

import React from "react";
import Link from "next/link";
import {
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
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "@/components/Home/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface CategoryCardItem {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  capabilities: string[];
  href: string;
}

const CATEGORY_CARDS: CategoryCardItem[] = [
  {
    id: "storefront",
    name: "Storefront",
    description: "Build an expressive, branded online store tailored to your brand identity.",
    icon: Store,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    capabilities: [
      "Custom domain & SSL configuration",
      "Branded colors, logos & typography",
      "Mobile-first responsive storefront layouts",
      "Curated category & collection pages",
    ],
    href: "#storefront",
  },
  {
    id: "products",
    name: "Products",
    description: "Manage product details, high-resolution media, variants, and structured pricing.",
    icon: Package,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    capabilities: [
      "Multi-variant matrix (size, color, weight)",
      "High-resolution media galleries",
      "Structured product categories and tags",
      "Discounted pricing & compare-at rates",
    ],
    href: "#products",
  },
  {
    id: "orders",
    name: "Orders",
    description: "Track customer purchases from checkout through fulfillment and confirmation.",
    icon: ShoppingBag,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    capabilities: [
      "Real-time order timeline & status updates",
      "Customer delivery details & notes",
      "One-click printable invoices & receipts",
      "Courier fulfillment handoff tracking",
    ],
    href: "#orders",
  },
  {
    id: "inventory",
    name: "Inventory",
    description: "Maintain accurate stock levels with automated deductions and low-stock alerts.",
    icon: Boxes,
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-600 dark:text-sky-400",
    capabilities: [
      "Real-time stock deduction on confirmed orders",
      "Custom low-inventory threshold alerts",
      "Variant-level quantity tracking",
      "Availability toggles and stock indicators",
    ],
    href: "#inventory",
  },
  {
    id: "customers",
    name: "Customers",
    description: "Organize customer profiles, contact records, and lifetime order histories.",
    icon: Users,
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    capabilities: [
      "Comprehensive customer profiles & contact info",
      "Lifetime purchase and order history",
      "Saved delivery addresses and phone records",
      "Customer communication audit log",
    ],
    href: "#customers",
  },
  {
    id: "payments",
    name: "Payments",
    description: "Collect payments seamlessly with local digital wallets, cards, and Cash on Delivery.",
    icon: CreditCard,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    capabilities: [
      "Instant bKash & Nagad merchant checkout",
      "Visa & Mastercard card acceptance",
      "Cash on Delivery (COD) management",
      "Real-time payment verification & records",
    ],
    href: "#payments",
  },
  {
    id: "shipping",
    name: "Shipping",
    description: "Configure local delivery rules, shipping rates, and domestic courier dispatch.",
    icon: Truck,
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-600 dark:text-teal-400",
    capabilities: [
      "Domestic courier workflows (Pathao, Steadfast)",
      "Zonal delivery fees (Inside & Outside Dhaka)",
      "Automated consignment tracking codes",
      "Shipment status visibility & transit notes",
    ],
    href: "#shipping",
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Boost customer conversions with promotional discount coupons and seasonal offers.",
    icon: Percent,
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600 dark:text-rose-400",
    capabilities: [
      "Percentage (%) & fixed-amount (৳) coupon codes",
      "Minimum order value thresholds",
      "Campaign scheduling with start & expiry dates",
      "Usage limits per customer or promotion",
    ],
    href: "#marketing",
  },
  {
    id: "analytics",
    name: "Analytics",
    description: "Understand store performance through clear sales summaries and order trend reports.",
    icon: BarChart3,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
    capabilities: [
      "Daily and monthly gross sales summaries",
      "Order volume trends & average order values",
      "Top-performing products leaderboard",
      "Payment method breakdown reports",
    ],
    href: "#analytics",
  },
  {
    id: "mobile-apps",
    name: "Mobile Apps",
    description: "Deliver a premium shopping experience across mobile web and native branded apps.",
    icon: Smartphone,
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    capabilities: [
      "Touch-optimized mobile browsing & checkout",
      "Branded iOS & Android native app options",
      "Real-time push notifications for order updates",
      "Merchant mobile management capabilities",
    ],
    href: "/white-label-apps",
  },
  {
    id: "integrations",
    name: "Integrations",
    description: "Connect your store to essential logistics, payment gateways, and tracking services.",
    icon: Layers,
    iconBg: "bg-blue-600/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    capabilities: [
      "Native courier connectors for rapid fulfillment",
      "Direct payment gateway API configurations",
      "Meta Pixel & Google analytics tracking scripts",
      "Built directly without third-party plugin bloat",
    ],
    href: "/integrations",
  },
  {
    id: "security",
    name: "Security",
    description: "Protect merchant operations and shopper data with robust security foundations.",
    icon: ShieldCheck,
    iconBg: "bg-slate-500/10",
    iconColor: "text-slate-700 dark:text-slate-300",
    capabilities: [
      "Encrypted merchant authentication & access",
      "Role-based administrative permissions",
      "Standard TLS 256-bit encryption on all checkouts",
      "Daily automated database backups & audit logs",
    ],
    href: "#security",
  },
];

export interface FeatureCategoryGridProps {
  className?: string;
}

export function FeatureCategoryGrid({ className }: FeatureCategoryGridProps) {
  const { t } = useLanguage();

  return (
    <section
      id="feature-categories"
      aria-label="Feature Category Discovery"
      className={cn("section-padding bg-background border-b border-border transition-colors", className)}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={t("featuresGrid.eyebrow")}
            eyebrowIcon={LayoutGrid}
            title={t("featuresGrid.title")}
            titleGradient={true}
            description={t("featuresGrid.description")}
            size="default"
            className="mb-10 sm:mb-12 lg:mb-14"
          />
        </ScrollReveal>

        {/* ── 12 Category Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORY_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.id} delay={(idx % 3) * 60}>
                <div className="group relative rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/40 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Top: Icon + Name */}
                    <div className="flex items-center gap-3 mb-3.5">
                      <div
                        className={cn(
                          "size-10 rounded-xl flex items-center justify-center shrink-0 border border-border/60 transition-transform duration-200 group-hover:scale-105",
                          card.iconBg,
                          card.iconColor
                        )}
                      >
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                          {card.name}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                      {card.description}
                    </p>

                    {/* Capabilities List */}
                    <ul className="space-y-2 mb-6" role="list">
                      {card.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom: Learn More Link */}
                  <div className="pt-3 border-t border-border/60">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
                    >
                      <span>{t("featuresGrid.learnMore")}</span>
                      <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
