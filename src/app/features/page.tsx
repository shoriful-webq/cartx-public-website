import { FeaturesHeroSection } from "@/components/features/features-hero-section";
import { FeatureNavigation } from "@/components/features/feature-navigation";
import { FeatureCategoryGrid } from "@/components/features/feature-category-grid";
import { FeatureDeepDives } from "@/components/features/feature-deep-dives";

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
    </main>
  );
}
