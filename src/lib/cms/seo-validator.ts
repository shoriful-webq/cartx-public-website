/**
 * CartX CMS SEO Validator
 * Validates meta titles, descriptions, canonical URLs, and indexing flags
 */

import { SEOMetadata } from "./types";

export interface SEOValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

export function validateSEOMetadata(seo: Partial<SEOMetadata>): SEOValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Title validation
  if (!seo.metaTitle || seo.metaTitle.trim().length === 0) {
    errors.push("Meta title is required.");
  } else if (seo.metaTitle.trim().length < 10) {
    warnings.push("Meta title is very short (recommended: 30–60 characters).");
  } else if (seo.metaTitle.trim().length > 70) {
    warnings.push("Meta title exceeds 70 characters and may be truncated by search engines.");
  }

  // Description validation
  if (!seo.metaDescription || seo.metaDescription.trim().length === 0) {
    errors.push("Meta description is required.");
  } else if (seo.metaDescription.trim().length < 40) {
    warnings.push("Meta description is very short (recommended: 70–160 characters).");
  } else if (seo.metaDescription.trim().length > 165) {
    warnings.push("Meta description exceeds 165 characters and may be truncated on SERPs.");
  }

  // Canonical URL validation
  if (seo.canonicalUrl) {
    try {
      const parsed = new URL(
        seo.canonicalUrl.startsWith("http")
          ? seo.canonicalUrl
          : `https://cartx.com${seo.canonicalUrl.startsWith("/") ? "" : "/"}${seo.canonicalUrl}`
      );
      if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
        errors.push("Canonical URL must use HTTP or HTTPS protocol.");
      }
    } catch {
      errors.push("Invalid canonical URL format.");
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

