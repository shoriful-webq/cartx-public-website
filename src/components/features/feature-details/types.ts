import React from "react";
import { type LucideIcon } from "lucide-react";

export type Locale = "en" | "bn";

export interface LocalizedString {
  en: string;
  bn: string;
}

export interface CapabilityItem {
  icon: LucideIcon;
  title: LocalizedString;
  description: LocalizedString;
}

export interface WorkflowStep {
  stepNumber: number;
  title: LocalizedString;
  description: LocalizedString;
}

export interface BenefitItem {
  icon: LucideIcon;
  title: LocalizedString;
  description: LocalizedString;
}

export interface FAQItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
}

export interface PlanAvailabilityInfo {
  starter: LocalizedString;
  growth: LocalizedString;
  scale: LocalizedString;
  note?: LocalizedString;
}

export interface RelatedFeatureRef {
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
  icon: LucideIcon;
}

export interface FeatureDetailConfig {
  slug: string;
  name: LocalizedString;
  eyebrow: LocalizedString;
  icon: LucideIcon;
  status?: "available" | "coming-soon";

  seo: {
    title: string;
    description: string;
  };

  hero: {
    titlePlain: LocalizedString;
    titleHighlight: LocalizedString;
    description: LocalizedString;
    primaryCtaText?: LocalizedString;
    secondaryCtaText?: LocalizedString;
  };

  problem: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    bulletPoints?: LocalizedString[];
  };

  explanation: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    highlightPill?: LocalizedString;
  };

  capabilities: CapabilityItem[];
  workflow: WorkflowStep[];
  
  visual: {
    title: LocalizedString;
    caption: LocalizedString;
    render: (t: (key: string) => string) => React.ReactNode;
  };

  benefits: BenefitItem[];
  relatedFeatures: RelatedFeatureRef[];
  planAvailability: PlanAvailabilityInfo;
  faqs: FAQItem[];

  cta: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    buttonText: LocalizedString;
    trustNote: LocalizedString;
  };
}

