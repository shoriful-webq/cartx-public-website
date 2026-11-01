export interface LocalizedString {
  en: string;
  bn: string;
}

export type IntegrationCategory =
  | "payments"
  | "shipping"
  | "analytics"
  | "communication"
  | "domains";

export type IntegrationStatus = "available" | "beta" | "coming-soon";

export type IntegrationPlan = "starter" | "growth" | "scale";

export interface IntegrationSetupStep {
  stepNumber: number;
  title: LocalizedString;
  description: LocalizedString;
  codeSnippet?: string;
  tip?: LocalizedString;
}

export interface IntegrationDataExchangeItem {
  direction: "sent" | "received";
  title: LocalizedString;
  fields: LocalizedString[];
  note: LocalizedString;
}

export interface IntegrationTroubleshootingItem {
  issue: LocalizedString;
  cause: LocalizedString;
  resolution: LocalizedString;
}

export interface IntegrationFAQItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
}

export interface IntegrationCapabilityItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  isSupported: boolean;
}

export interface IntegrationItem {
  slug: string;
  name: string;
  category: IntegrationCategory;
  categoryLabel: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  status: IntegrationStatus;
  iconName: string;
  iconColor: string;
  iconBg: string;
  eligiblePlans: IntegrationPlan[];

  // Section 01: Provider Overview
  providerOverview: {
    overview: LocalizedString;
    providerUrl?: string;
    actionLabel?: LocalizedString;
    actionHref?: string;
  };

  // Section 02: What the Integration Does
  whatItDoes: {
    purpose: LocalizedString;
    businessProblem: LocalizedString;
    howItWorks: LocalizedString;
    benefits: LocalizedString[];
  };

  // Section 03: Requirements and Eligibility
  requirements: {
    accountRequirements: LocalizedString[];
    approvalProcess: LocalizedString;
    supportedRegions: LocalizedString;
    supportedCurrencies: LocalizedString;
    planEligibilityNote: LocalizedString;
  };

  // Section 04: Supported Capabilities
  capabilities: IntegrationCapabilityItem[];

  // Section 05: Setup Steps
  setupSteps: IntegrationSetupStep[];

  // Section 06: Data Exchanged
  dataExchanged: {
    summary: LocalizedString;
    sensitiveDataNote: LocalizedString;
    items: IntegrationDataExchangeItem[];
  };

  // Section 07: Security Notes
  securityNotes: {
    credentialStorage: LocalizedString;
    permissionScope: LocalizedString;
    webhookVerification: LocalizedString;
    bestPractices: LocalizedString[];
  };

  // Section 08: Limitations and Additional Fees
  limitations: {
    unsupportedOperations: LocalizedString[];
    feeStructureNotice: LocalizedString;
    regionalRestrictions: LocalizedString;
    betaNotice?: LocalizedString;
  };

  // Section 09: Troubleshooting
  troubleshooting: IntegrationTroubleshootingItem[];

  // Section 10: Frequently Asked Questions
  faqs: IntegrationFAQItem[];

  // Section 11: Related integrations
  relatedSlugs: string[];
}

export interface IntegrationFilterState {
  searchQuery: string;
  category: string;
  status: string;
}

export interface IntegrationCategoryOverview {
  id: IntegrationCategory;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  iconName: string;
  providerCount: number;
}

export interface IntegrationWorkflowStep {
  stepNumber: number;
  title: LocalizedString;
  description: LocalizedString;
}

export interface IntegrationSecurityPillar {
  title: LocalizedString;
  description: LocalizedString;
  iconName: string;
}

