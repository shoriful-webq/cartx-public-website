export interface LocalizedString {
  en: string;
  bn: string;
}

export type ThemeCategory =
  | "fashion"
  | "electronics"
  | "beauty"
  | "grocery"
  | "home"
  | "books"
  | "b2b"
  | "digital";

export type ThemeStyle =
  | "editorial"
  | "modern-tech"
  | "botanical"
  | "vibrant"
  | "warm-minimal"
  | "classic";

export type LayoutType =
  | "lookbook"
  | "spec-focused"
  | "ritual-showcase"
  | "high-density-grid"
  | "minimal-grid";

export type AvailabilityStatus = "available" | "coming-soon";

export interface ThemeColorDot {
  bg: string;
  label: LocalizedString;
  hex: string;
}

export interface SampleProductVariant {
  label: LocalizedString;
  options: LocalizedString[];
}

export interface SampleProductSpec {
  label: LocalizedString;
  value: LocalizedString;
}

export interface SampleProduct {
  id: string;
  name: LocalizedString;
  category: LocalizedString;
  price: string;
  originalPrice?: string;
  badge: LocalizedString;
  rating: string;
  specs: SampleProductSpec[];
  description: LocalizedString;
  variants: SampleProductVariant[];
  accentColor: string;
  bgGradient: string;
}

export interface ThemeCartItem {
  name: LocalizedString;
  variant: LocalizedString;
  price: string;
  quantity: number;
}

export interface ThemePreviewConfig {
  domain: string;
  brandName: string;
  announcement: LocalizedString;
  navLinks: LocalizedString[];
  hero: {
    tagline: LocalizedString;
    headline: LocalizedString;
    subhead: LocalizedString;
    buttonText: LocalizedString;
    bgGradient: string;
    accentClass: string;
  };
  featuredCategories: LocalizedString[];
  sampleProducts: SampleProduct[];
  featureBar: LocalizedString[];
  cartPreview: {
    items: ThemeCartItem[];
    subtotal: string;
    shipping: string;
    total: string;
    paymentMethods: string[];
  };
}

export interface ThemeCapability {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  iconName: string;
}

export interface ThemeCustomization {
  customizable: LocalizedString[];
  nonCustomizable: LocalizedString[];
  planDependent: LocalizedString[];
  considerations: LocalizedString;
}

export interface ThemePlanEligibilityItem {
  tier: "starter" | "growth" | "scale";
  name: LocalizedString;
  status: "included" | "supported" | "custom";
  note: LocalizedString;
}

export interface ThemePlanEligibilityConfig {
  plans: ThemePlanEligibilityItem[];
  summary: LocalizedString;
}

export interface ThemeItem {
  slug: string;
  name: LocalizedString;
  category: ThemeCategory;
  categoryLabel: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  style: ThemeStyle;
  styleLabel: LocalizedString;
  layoutType: LayoutType;
  layoutLabel: LocalizedString;
  availability: AvailabilityStatus;
  mobileFriendly: boolean;
  eligiblePlans: ("starter" | "growth" | "scale")[];
  palette: ThemeColorDot[];
  keywords: string[];
  preview: ThemePreviewConfig;
  capabilities: ThemeCapability[];
  customization: ThemeCustomization;
  planEligibility: ThemePlanEligibilityConfig;
  relatedThemeSlugs: string[];
}

export interface ThemesFilterState {
  searchQuery: string;
  category: string;
  style: string;
  layoutType: string;
  mobileFriendly: string;
  plan: string;
}

export interface ThemeFeatureCategory {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  iconName: string;
  details: LocalizedString[];
}

export interface ThemeFAQItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
}

