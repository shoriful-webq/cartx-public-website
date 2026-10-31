"use client";

import React from "react";
import { getFeatureBySlug } from "./feature-details-data";
import { Breadcrumbs } from "./breadcrumbs";
import { FeatureHero } from "./feature-hero";
import { ProblemStatement } from "./problem-statement";
import { FeatureExplanation } from "./feature-explanation";
import { FeatureCapabilities } from "./feature-capabilities";
import { FeatureWorkflow } from "./feature-workflow";
import { FeatureProductVisual } from "./feature-product-visual";
import { FeatureBenefits } from "./feature-benefits";
import { RelatedFeatures } from "./related-features";
import { PlanAvailability } from "./plan-availability";
import { FeatureFAQ } from "./feature-faq";
import { FeatureCTA } from "./feature-cta";

export interface FeatureDetailViewProps {
  slug: string;
}

/**
 * Standard 12-section layout template for all CartX Feature Detail pages.
 * Renders in exact required order:
 * 1. Breadcrumbs
 * 2. Feature-specific hero
 * 3. Short problem statement
 * 4. Feature explanation
 * 5. Main capabilities
 * 6. How the workflow works
 * 7. Product UI screenshots or representative product visuals
 * 8. Business benefits
 * 9. Related features
 * 10. Plan availability
 * 11. FAQ
 * 12. CTA
 */
export function FeatureDetailView({ slug }: FeatureDetailViewProps) {
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    return null;
  }

  return (
    <article className="w-full">
      {/* ── Section 01: Breadcrumbs ── */}
      <Breadcrumbs featureName={feature.name} />

      {/* ── Section 02: Feature-Specific Hero ── */}
      <FeatureHero feature={feature} />

      {/* ── Section 03: Problem Statement ── */}
      <ProblemStatement feature={feature} />

      {/* ── Section 04: Feature Explanation ── */}
      <FeatureExplanation feature={feature} />

      {/* ── Section 05: Main Capabilities ── */}
      <FeatureCapabilities feature={feature} />

      {/* ── Section 06: How the Workflow Works ── */}
      <FeatureWorkflow feature={feature} />

      {/* ── Section 07: Product UI Visuals & Screenshots ── */}
      <FeatureProductVisual feature={feature} />

      {/* ── Section 08: Business Benefits ── */}
      <FeatureBenefits feature={feature} />

      {/* ── Section 09: Related Features ── */}
      <RelatedFeatures feature={feature} />

      {/* ── Section 10: Plan Availability ── */}
      <PlanAvailability feature={feature} />

      {/* ── Section 11: Feature FAQ ── */}
      <FeatureFAQ feature={feature} />

      {/* ── Section 12: Final Feature CTA ── */}
      <FeatureCTA feature={feature} />
    </article>
  );
}
