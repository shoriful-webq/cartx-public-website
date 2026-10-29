import React from "react";
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
} from "lucide-react";
import {
  StorefrontMockup,
  ProductCatalogMockup,
  OrdersMockup,
  InventoryControlMockup,
  CustomerManagementMockup,
  PaymentManagementMockup,
  DeliveryOperationsMockup,
  MarketingMockup,
  ReportsAnalyticsMockup,
  MobileAppsMockup,
  EcosystemIntegrationsMockup,
  SecurityMockup,
} from "./mockups";
import { type DeepDiveItem } from "./types";

/**
 * Complete 12 Feature Deep Dives Specification Registry.
 * Defines metadata, icons, translation keys, and visual mockup renderers
 * for all 12 platform capabilities.
 */
export const DEEP_DIVES: DeepDiveItem[] = [
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
    renderVisual: (t) => (
      <StorefrontMockup t={t} notice={t("featuresDeepDive.demoNotice")} />
    ),
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
    renderVisual: (t) => (
      <ProductCatalogMockup t={t} notice={t("featuresDeepDive.demoNotice")} />
    ),
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
    renderVisual: (t) => (
      <OrdersMockup t={t} notice={t("featuresDeepDive.demoNotice")} />
    ),
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
    renderVisual: (t) => (
      <InventoryControlMockup
        t={t}
        notice={t("featuresDeepDive.demoNotice")}
      />
    ),
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
    renderVisual: (t) => (
      <CustomerManagementMockup
        t={t}
        notice={t("featuresDeepDive.demoNotice")}
      />
    ),
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
    renderVisual: (t) => (
      <PaymentManagementMockup
        t={t}
        notice={t("featuresDeepDive.demoNotice")}
      />
    ),
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
    renderVisual: (t) => (
      <DeliveryOperationsMockup
        t={t}
        notice={t("featuresDeepDive.demoNotice")}
      />
    ),
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
    renderVisual: (t) => (
      <MarketingMockup t={t} notice={t("featuresDeepDive.demoNotice")} />
    ),
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
    renderVisual: (t) => (
      <ReportsAnalyticsMockup
        t={t}
        notice={t("featuresDeepDive.demoNotice")}
      />
    ),
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
    renderVisual: (t) => (
      <MobileAppsMockup t={t} notice={t("featuresDeepDive.demoNotice")} />
    ),
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
    renderVisual: (t) => (
      <EcosystemIntegrationsMockup
        t={t}
        notice={t("featuresDeepDive.demoNotice")}
      />
    ),
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
    renderVisual: (t) => (
      <SecurityMockup t={t} notice={t("featuresDeepDive.demoNotice")} />
    ),
  },
];
