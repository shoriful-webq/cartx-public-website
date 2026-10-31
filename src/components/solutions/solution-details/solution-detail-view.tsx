"use client";

import React from "react";
import { notFound } from "next/navigation";
import { getSolutionBySlug } from "./solution-details-data";
import { SolutionBreadcrumbs } from "./solution-breadcrumbs";
import { SolutionHero } from "./solution-hero";
import { SolutionChallenges } from "./solution-challenges";
import { SolutionCapabilities } from "./solution-capabilities";
import { SolutionStoreStructure } from "./solution-store-structure";
import { SolutionSampleCatalog } from "./solution-sample-catalog";
import { SolutionStorefrontPreview } from "./solution-storefront-preview";
import { SolutionIntegrations } from "./solution-integrations";
import { SolutionSubscriptionGuidance } from "./solution-subscription-guidance";
import { SolutionFAQ } from "./solution-faq";
import { SolutionCTA } from "./solution-cta";

export interface SolutionDetailViewProps {
  slug: string;
}

export function SolutionDetailView({ slug }: SolutionDetailViewProps) {
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background">
      {/* Breadcrumb Navigation Trail */}
      <SolutionBreadcrumbs solution={solution} />

      {/* 01. Industry-Specific Hero */}
      <SolutionHero solution={solution} />

      {/* 02. Common Business Challenges */}
      <SolutionChallenges solution={solution} />

      {/* 03. Relevant CartX Capabilities */}
      <SolutionCapabilities solution={solution} />

      {/* 04. Suggested Store Structure */}
      <SolutionStoreStructure solution={solution} />

      {/* 05. Example Product Catalogue */}
      <SolutionSampleCatalog solution={solution} />

      {/* 06. Storefront Preview */}
      <SolutionStorefrontPreview solution={solution} />

      {/* 07. Recommended Integrations */}
      <SolutionIntegrations solution={solution} />

      {/* 08. Relevant Subscription Plans */}
      <SolutionSubscriptionGuidance solution={solution} />

      {/* 09. Frequently Asked Questions */}
      <SolutionFAQ solution={solution} />

      {/* 10. Start Your Store CTA */}
      <SolutionCTA solution={solution} />
    </article>
  );
}

