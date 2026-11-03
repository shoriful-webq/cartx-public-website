/**
 * CartX CMS (Content Management System) Type Definitions
 * Reusable content models for Marketing Website Content & SEO
 */

export type ContentStatus = "draft" | "review" | "published" | "archived";

export type UserRole = "super_admin" | "editor" | "author" | "viewer";

export interface CMSUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface BaseContentItem {
  id: string;
  slug: string;
  title: string;
  status: ContentStatus;
  sortOrder: number;
  version: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  publishedAt?: string | null;
  scheduledAt?: string | null;
}

export interface SEOMetadata {
  metaTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  noIndex?: boolean;
  keywords?: string[];
}

export interface MediaAsset {
  id: string;
  filename: string;
  originalName: string;
  url: string;
  mimeType: string;
  sizeBytes: number;
  width?: number;
  height?: number;
  altText: string;
  caption?: string;
  uploadedBy: string;
  createdAt: string;
}

export interface ContentRevision {
  id: string;
  contentId: string;
  contentType: string;
  version: number;
  status: ContentStatus;
  snapshot: Record<string, unknown>;
  author: string;
  timestamp: string;
  comment?: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  actor: string;
  actorEmail: string;
  action: "create" | "update" | "publish" | "unpublish" | "archive" | "delete" | "upload_media";
  contentType: string;
  contentId: string;
  details: string;
}

/* ── Specific Content Models ── */

export interface CMSBlogPost extends BaseContentItem {
  category: string;
  titleBn?: string;
  excerptEn: string;
  excerptBn?: string;
  bodyEn: string;
  bodyBn?: string;
  coverImage: string;
  coverImageAlt: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  readTimeMinutes: number;
  tags: string[];
  featured?: boolean;
  seo: SEOMetadata;
}

export interface CMSFeature extends BaseContentItem {
  nameBn?: string;
  taglineEn: string;
  taglineBn?: string;
  descriptionEn: string;
  descriptionBn?: string;
  iconName: string;
  category: string;
  keyBenefits: { en: string; bn?: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  seo: SEOMetadata;
}

export interface CMSSolution extends BaseContentItem {
  verticalNameBn?: string;
  heroHeadlineEn: string;
  heroHeadlineBn?: string;
  descriptionEn: string;
  descriptionBn?: string;
  keyFeatures: { en: string; bn?: string }[];
  caseStudySnippet?: string;
  seo: SEOMetadata;
}

export interface CMSTheme extends BaseContentItem {
  nameBn?: string;
  industry: string;
  previewImage: string;
  previewImageAlt: string;
  demoStoreUrl?: string;
  isPopular?: boolean;
  isNew?: boolean;
  seo: SEOMetadata;
}

export interface CMSIntegration extends BaseContentItem {
  category: "payments" | "couriers" | "marketing" | "accounting" | "analytics";
  badge?: string;
  descriptionEn: string;
  descriptionBn?: string;
  logoUrl: string;
  logoAlt: string;
  isVerified: boolean;
  setupGuideUrl?: string;
  seo: SEOMetadata;
}

export interface CMSPricingPlan extends BaseContentItem {
  nameBn?: string;
  targetAudienceEn: string;
  targetAudienceBn?: string;
  monthlyPriceBDT: number;
  yearlyPriceBDT: number;
  highlighted?: boolean;
  badgeText?: string;
  features: string[];
  limits: {
    products: number | "unlimited";
    staffAccounts: number;
    storageGB: number;
    customDomains: number;
  };
  ctaLabel: string;
  ctaHref: string;
}

export interface CMSFAQ extends BaseContentItem {
  category: "general" | "pricing" | "technical" | "integrations" | "apps";
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
}

export interface CMSAnnouncement extends BaseContentItem {
  badgeEn?: string;
  badgeBn?: string;
  messageEn: string;
  messageBn: string;
  linkTextEn?: string;
  linkTextBn?: string;
  href?: string;
  startDate?: string;
  endDate?: string;
  active: boolean;
}

export interface CMSContactInfo {
  supportEmail: string;
  salesEmail: string;
  businessPhone: string;
  officeAddressEn: string;
  officeAddressBn: string;
  operatingHoursEn: string;
  operatingHoursBn: string;
  emergencyContact?: string;
  lastUpdated: string;
}

export interface CMSFooterLinks {
  copyrightNoticeEn: string;
  copyrightNoticeBn: string;
  systemStatusUrl: string;
  sections: {
    titleEn: string;
    titleBn: string;
    links: { labelEn: string; labelBn: string; href: string; external?: boolean }[];
  }[];
}

export interface CMSPageSEO extends BaseContentItem {
  routePath: string;
  seo: SEOMetadata;
}

