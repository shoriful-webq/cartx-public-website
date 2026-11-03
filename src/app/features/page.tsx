import { Metadata } from "next";
import { FeaturesHeroSection } from "@/components/features/features-hero-section";
import { FeatureNavigation } from "@/components/features/feature-navigation";
import { FeatureCategoryGrid } from "@/components/features/feature-category-grid";
import { FeatureDeepDives } from "@/components/features/feature-deep-dives";
import { PlanAvailabilitySection } from "@/components/features/plan-availability-section";
import { FeaturesFAQSection } from "@/components/features/features-faq-section";
import { FeaturesFinalCTASection } from "@/components/features/features-final-cta-section";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/features");

export const metadata: Metadata = {
  title: "Platform Features & Capabilities | CartX E-Commerce Platform",
  description:
    "Explore CartX's comprehensive suite of features: storefront design, automated courier dispatch, bKash/Nagad local payments, inventory management, and white-label apps.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Platform Features & Capabilities | CartX E-Commerce Platform",
    description:
      "Explore CartX's comprehensive suite of features: storefront design, automated courier dispatch, bKash/Nagad local payments, inventory management, and white-label apps.",
    url: canonical,
    type: "website",
  },
};

export default function FeaturesPage() {
  return (
    <main>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Features", item: "/features" },
        ]}
      />
      {/* ── Section 01: Features Hero (Unchanged) ── */}
      <FeaturesHeroSection />

      {/* ── Section 02: Sticky Feature Navigation ── */}
      <FeatureNavigation />

      {/* ── Section 03: Feature Category Grid ── */}
      <FeatureCategoryGrid />

      {/* ── Section 04: Feature Deep Dives ── */}
      <FeatureDeepDives />

      {/* ── Section 05: Plan Availability ── */}
      <PlanAvailabilitySection />

      {/* ── Section 06: Frequently Asked Questions ── */}
      <FeaturesFAQSection />

      {/* ── Section 07: Final CTA ── */}
      <FeaturesFinalCTASection />
    </main>
  );
}
