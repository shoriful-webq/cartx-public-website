"use client";

import React from "react";
import { WhiteLabelHero } from "./white-label-hero";
import { WhyBrandedApp } from "./why-branded-app";
import { CustomerAppShowcase } from "./customer-app-showcase";
import { MerchantAppShowcase } from "./merchant-app-showcase";
import { WhiteLabelProcess } from "./white-label-process";
import { WhiteLabelRequirements } from "./white-label-requirements";
import { WhiteLabelFAQ } from "./white-label-faq";
import { WhiteLabelCTA } from "./white-label-cta";

export function WhiteLabelAppsView() {
  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Section 1: Hero */}
      <WhiteLabelHero />

      {/* Section 2: Why a Branded App? */}
      <WhyBrandedApp />

      {/* Section 3: Customer App Showcase */}
      <CustomerAppShowcase />

      {/* Section 4: Merchant App Showcase */}
      <MerchantAppShowcase />

      {/* Section 5: White-label Process */}
      <WhiteLabelProcess />

      {/* Section 6: Requirements and Pricing */}
      <WhiteLabelRequirements />

      {/* Section 7: FAQ */}
      <WhiteLabelFAQ />

      {/* Section 8: Final CTA */}
      <WhiteLabelCTA />
    </article>
  );
}

