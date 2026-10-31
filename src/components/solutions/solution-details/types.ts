import { type LucideIcon } from "lucide-react";

export interface LocalizedString {
  en: string;
  bn: string;
}

export interface SolutionChallengeItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: LucideIcon;
}

export interface SolutionCapabilityItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  featureSlug: string;
  featureName: LocalizedString;
  icon: LucideIcon;
}

export interface SolutionCategoryStructure {
  name: LocalizedString;
  subcategories: LocalizedString[];
  description: LocalizedString;
}

export interface SolutionCatalogProduct {
  id: string;
  name: LocalizedString;
  category: LocalizedString;
  price: string;
  originalPrice?: string;
  badge: LocalizedString;
  attributes: { label: LocalizedString; value: LocalizedString }[];
  highlight: LocalizedString;
}

export interface SolutionIntegrationItem {
  name: string;
  category: LocalizedString;
  reason: LocalizedString;
  icon: LucideIcon;
  linkHref: string;
}

export interface SolutionPlanRecommendation {
  tier: "starter" | "growth" | "scale";
  name: LocalizedString;
  badge?: LocalizedString;
  isRecommended?: boolean;
  summary: LocalizedString;
  reasons: LocalizedString[];
}

export interface SolutionFAQItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
}

export interface SolutionDetailConfig {
  slug: string;
  name: LocalizedString;
  badge: LocalizedString;
  icon: LucideIcon;

  seo: {
    title: string;
    description: string;
  };

  hero: {
    h1Plain: LocalizedString;
    h1Highlight: LocalizedString;
    description: LocalizedString;
    primaryCta: LocalizedString;
    secondaryCta: LocalizedString;
    secondaryHref: string;
    trustNote: LocalizedString;
    previewTagline: string;
    previewHeadline: string;
    previewSubhead: string;
    previewBadges: string[];
  };

  challenges: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    items: SolutionChallengeItem[];
  };

  capabilities: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    items: SolutionCapabilityItem[];
  };

  storeStructure: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    discoveryTip: LocalizedString;
    categories: SolutionCategoryStructure[];
  };

  catalog: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    products: SolutionCatalogProduct[];
  };

  storefrontPreview: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    domain: string;
    brandName: string;
    tagline: string;
    demoThemeId?: string;
    isLiveDemo: boolean;
    previewNotice: LocalizedString;
    accentGradient: string;
    highlights: LocalizedString[];
  };

  integrations: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    items: SolutionIntegrationItem[];
  };

  subscriptionGuidance: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    plans: SolutionPlanRecommendation[];
    disclaimer: LocalizedString;
  };

  faqs: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    items: SolutionFAQItem[];
  };

  cta: {
    heading: LocalizedString;
    description: LocalizedString;
    primaryCta: LocalizedString;
    secondaryCta: LocalizedString;
    guaranteePill: LocalizedString;
  };
}
