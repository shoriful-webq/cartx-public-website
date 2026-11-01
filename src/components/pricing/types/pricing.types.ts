export type BillingPeriod = "monthly" | "yearly";

export interface LocalizedString {
  en: string;
  bn: string;
}

export type LimitValue = number | "unlimited" | "unavailable" | "unknown";

export type EntitlementStatus =
  | "included"
  | "optional_addon"
  | "unavailable"
  | "custom";

export interface PlanPriceConfig {
  monthly: number | null;
  yearly: number | null; // Total billed annually
  currency: "BDT" | "USD";
  currencySymbol: string;
  isCustom?: boolean;
  isPendingLaunch?: boolean;
  pendingNotice?: LocalizedString;
}

export interface PlanLimits {
  products: LimitValue;
  staffAccounts: LimitValue;
  storageGB: LimitValue;
  monthlyOrders: LimitValue;
  customDomains: LimitValue;
}

export interface PlanFeatures {
  storefrontBuilder: EntitlementStatus;
  themeSelection: "starter_themes" | "all_themes" | "custom_themes";
  productManagement: EntitlementStatus;
  inventoryManagement: EntitlementStatus;
  orderManagement: EntitlementStatus;
  courierDispatch: EntitlementStatus;
  mfsGateways: EntitlementStatus;
  smsNotifications: EntitlementStatus;
  reportsAnalytics: "basic" | "advanced" | "custom";
  whiteLabelApps: EntitlementStatus;
  supportLevel: "community" | "standard" | "priority" | "dedicated_sla";
  customIntegrations: EntitlementStatus;
}

export interface PricingPlan {
  id: "starter" | "growth" | "business" | "enterprise";
  name: LocalizedString;
  tagline: LocalizedString;
  targetAudience: LocalizedString;
  highlighted?: boolean;
  badge?: LocalizedString;
  prices: PlanPriceConfig;
  limits: PlanLimits;
  features: PlanFeatures;
  featureHighlights: LocalizedString[];
  cta: {
    label: LocalizedString;
    href: string;
    variant?: "primary" | "outline" | "secondary";
  };
  trialDays: number | null; // e.g. 14 or null for custom enterprise
}

export interface ComparisonFeatureItem {
  id: string;
  name: LocalizedString;
  tooltip?: LocalizedString;
  planValues: Record<string, string | boolean | LocalizedString>;
}

export interface ComparisonCategory {
  id: string;
  name: LocalizedString;
  features: ComparisonFeatureItem[];
}

export interface AdditionalChargeItem {
  id: string;
  name: LocalizedString;
  category: "payment" | "sms" | "domain" | "mobile" | "custom";
  basis: LocalizedString;
  cost: LocalizedString;
  chargedBy: "cartx" | "third_party" | "both";
  description: LocalizedString;
}

export interface PricingFAQItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
}

