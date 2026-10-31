import { type LucideIcon } from "lucide-react";

export interface ConnectedFeatureRef {
  slug: string;
  nameKey: string;
  icon: LucideIcon;
}

export interface IndustrySolutionItem {
  id: string;
  nameKey: string;
  taglineKey: string;
  descKey: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  workflowKeys: string[];
  connectedFeatures: ConnectedFeatureRef[];
  status: "available" | "coming-soon";
  noticeKey?: string;
  detailHref?: string;
}

export interface BusinessChallengeItem {
  id: string;
  titleKey: string;
  descKey: string;
  solutionKey: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  featureSlug: string;
  featureNameKey: string;
}

export interface WorkflowStepItem {
  stepNumber: number;
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
  badge: string;
}

export interface DemoStorePreviewItem {
  id: string;
  brandName: string;
  categoryKey: string;
  domain: string;
  tagline: string;
  headline: string;
  subhead: string;
  icon: LucideIcon;
  themeId: string;
  accentGradient: string;
  products: {
    title: string;
    price: string;
    badge: string;
    spec: string;
  }[];
  featureBar: string;
}

export interface SolutionIntegrationItem {
  id: string;
  name: string;
  category: "payments" | "shipping" | "analytics";
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  status: "live" | "planned";
}

export interface SolutionFAQItem {
  id: string;
  questionKey: string;
  answerKey: string;
  linkHref?: string;
  linkTextKey?: string;
}

