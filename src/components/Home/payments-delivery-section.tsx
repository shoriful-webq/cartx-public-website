"use client";

import React from "react";
import {
  CreditCard,
  Truck,
  Banknote,
  Wallet,
  CheckCircle2,
  MapPin,
  PackageCheck,
  Search,
  Clock,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

interface FeatureDetailItem {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

interface EcosystemProvider {
  name: string;
  type: string;
}

const PAYMENT_FEATURES: FeatureDetailItem[] = [
  {
    icon: Banknote,
    titleKey: "paymentsDelivery.payments.item1.title",
    descKey: "paymentsDelivery.payments.item1.desc",
  },
  {
    icon: Wallet,
    titleKey: "paymentsDelivery.payments.item2.title",
    descKey: "paymentsDelivery.payments.item2.desc",
  },
  {
    icon: CheckCircle2,
    titleKey: "paymentsDelivery.payments.item3.title",
    descKey: "paymentsDelivery.payments.item3.desc",
  },
];

const DELIVERY_FEATURES: FeatureDetailItem[] = [
  {
    icon: MapPin,
    titleKey: "paymentsDelivery.delivery.item1.title",
    descKey: "paymentsDelivery.delivery.item1.desc",
  },
  {
    icon: PackageCheck,
    titleKey: "paymentsDelivery.delivery.item2.title",
    descKey: "paymentsDelivery.delivery.item2.desc",
  },
  {
    icon: Search,
    titleKey: "paymentsDelivery.delivery.item3.title",
    descKey: "paymentsDelivery.delivery.item3.desc",
  },
  {
    icon: Clock,
    titleKey: "paymentsDelivery.delivery.item4.title",
    descKey: "paymentsDelivery.delivery.item4.desc",
  },
];

// Potential Bangladesh Ecosystem Providers shown strictly as illustrative examples
const BD_PAYMENT_PROVIDERS: EcosystemProvider[] = [
  { name: "bKash", type: "MFS / Wallet" },
  { name: "Nagad", type: "MFS / Wallet" },
  { name: "Rocket", type: "MFS / Wallet" },
  { name: "SSLCommerz", type: "Payment Gateway" },
];

const BD_COURIER_PROVIDERS: EcosystemProvider[] = [
  { name: "Pathao", type: "Express Courier" },
  { name: "Steadfast", type: "Parcel Logistics" },
  { name: "RedX", type: "Nationwide Delivery" },
  { name: "eCourier", type: "Ecommerce Logistics" },
];

export interface PaymentsDeliverySectionProps {
  className?: string;
}

export function PaymentsDeliverySection({
  className,
}: PaymentsDeliverySectionProps) {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-label="Payments and Delivery"
      className={cn(
        "relative section-padding border-b border-border bg-background transition-colors overflow-hidden",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <SectionHeading
          eyebrow={t("paymentsDelivery.badge")}
          eyebrowIcon={Layers}
          title={t("paymentsDelivery.title")}
          titleGradient={true}
          description={t("paymentsDelivery.description")}
          size="default"
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        {/* ── Two Visually Distinct Groups: Payments & Delivery ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {/* ── Group 1: Payment Options ── */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs flex flex-col justify-between transition-all duration-200 hover:border-primary/40 hover:shadow-card">
            <div>
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="size-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-xs">
                  <CreditCard className="size-5.5 shrink-0" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {t("paymentsDelivery.payments.groupTitle")}
                  </h3>
                  <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                    Checkout & Transactions
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                {t("paymentsDelivery.payments.groupDesc")}
              </p>

              {/* Core Feature Items */}
              <div className="space-y-4 mb-7">
                {PAYMENT_FEATURES.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl border border-border/70 bg-muted/20 hover:bg-muted/40 transition-colors"
                    >
                      <div className="size-8 rounded-md bg-card border border-border/80 text-primary flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <ItemIcon className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold text-foreground">
                          {t(item.titleKey)}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                          {t(item.descKey)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Illustrative Ecosystem Providers Sub-Block */}
            <div className="pt-5 border-t border-border/70">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-foreground">
                  {t("paymentsDelivery.payments.providersTitle")}
                </span>
                <span className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded border border-border/60">
                  Potential & Planned
                </span>
              </div>

              {/* Clean provider pills without fabricated connection toggles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2.5">
                {BD_PAYMENT_PROVIDERS.map((provider) => (
                  <div
                    key={provider.name}
                    className="p-2 rounded-lg border border-border bg-card/80 text-center"
                  >
                    <p className="text-xs font-bold text-foreground truncate">
                      {provider.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate">
                      {provider.type}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-[10.5px] text-muted-foreground/75 leading-tight">
                {t("paymentsDelivery.payments.providersNote")}
              </p>
            </div>
          </div>

          {/* ── Group 2: Delivery Workflows ── */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs flex flex-col justify-between transition-all duration-200 hover:border-primary/40 hover:shadow-card">
            <div>
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="size-11 rounded-lg bg-secondary-accent/15 text-secondary-accent flex items-center justify-center shadow-xs">
                  <Truck className="size-5.5 shrink-0" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {t("paymentsDelivery.delivery.groupTitle")}
                  </h3>
                  <span className="text-[11px] font-semibold text-secondary-accent uppercase tracking-wider">
                    Logistics & Fulfillment
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                {t("paymentsDelivery.delivery.groupDesc")}
              </p>

              {/* Core Feature Items */}
              <div className="space-y-4 mb-7">
                {DELIVERY_FEATURES.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl border border-border/70 bg-muted/20 hover:bg-muted/40 transition-colors"
                    >
                      <div className="size-8 rounded-md bg-card border border-border/80 text-secondary-accent flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <ItemIcon className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold text-foreground">
                          {t(item.titleKey)}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                          {t(item.descKey)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Illustrative Ecosystem Couriers Sub-Block */}
            <div className="pt-5 border-t border-border/70">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-foreground">
                  {t("paymentsDelivery.delivery.couriersTitle")}
                </span>
                <span className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded border border-border/60">
                  Potential & Planned
                </span>
              </div>

              {/* Clean courier pills without fabricated connection toggles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2.5">
                {BD_COURIER_PROVIDERS.map((provider) => (
                  <div
                    key={provider.name}
                    className="p-2 rounded-lg border border-border bg-card/80 text-center"
                  >
                    <p className="text-xs font-bold text-foreground truncate">
                      {provider.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate">
                      {provider.type}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-[10.5px] text-muted-foreground/75 leading-tight">
                {t("paymentsDelivery.delivery.couriersNote")}
              </p>
            </div>
          </div>
        </div>

        {/* ── Centralized Factual Accuracy Notice ── */}
        <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card/60 p-3.5 sm:p-4 text-center mb-8">
          <p className="text-xs text-muted-foreground leading-relaxed">
            {t("paymentsDelivery.accuracyNotice")}
          </p>
        </div>

        {/* ── Section CTA ── */}
        <div className="flex justify-center">
          <CTAButton
            action="exploreIntegrations"
            variant="primary"
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

