import { FeaturesHeroSection } from "@/components/features/features-hero-section";
import { FeatureNavigation } from "@/components/features/feature-navigation";
import { FeatureCategoryGrid } from "@/components/features/feature-category-grid";
import { FeatureDeepDives } from "@/components/features/feature-deep-dives";
import { PlanAvailabilitySection } from "@/components/features/plan-availability-section";
import { FeaturesFAQSection } from "@/components/features/features-faq-section";
import { FeaturesFinalCTASection } from "@/components/features/features-final-cta-section";

export default function FeaturesPage() {
  return (
    <main>
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
