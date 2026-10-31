import { Metadata } from "next";
import {
  SolutionsHero,
  IndustrySolutionsGrid,
  BusinessChallengesSection,
  RelevantFeaturesSection,
  ExampleWorkflowSection,
  DemoStorePreviewSection,
  RelatedIntegrationsSection,
  SolutionsFAQSection,
  SolutionsFinalCTASection,
} from "@/components/solutions";

export const metadata: Metadata = {
  title: "E-commerce Solutions by Industry | CartX Platform",
  description:
    "Explore how CartX supports fashion, electronics, cosmetics, grocery, home decor, and books with multi-attribute variants, inventory control, and localized checkout in Bangladesh.",
  openGraph: {
    title: "E-commerce Solutions by Industry | CartX Platform",
    description:
      "Explore how CartX supports fashion, electronics, cosmetics, grocery, home decor, and books with multi-attribute variants, inventory control, and localized checkout in Bangladesh.",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <main>
      {/* ── Section 01: Hero ── */}
      <SolutionsHero />

      {/* ── Section 02: Industry Solution Cards ── */}
      <IndustrySolutionsGrid />

      {/* ── Section 03: Business Challenges ── */}
      <BusinessChallengesSection />

      {/* ── Section 04: Relevant CartX Features ── */}
      <RelevantFeaturesSection />

      {/* ── Section 05: Example Workflow ── */}
      <ExampleWorkflowSection />

      {/* ── Section 06: Demo Store Preview ── */}
      <DemoStorePreviewSection />

      {/* ── Section 07: Related Integrations ── */}
      <RelatedIntegrationsSection />

      {/* ── Section 08: FAQ ── */}
      <SolutionsFAQSection />

      {/* ── Section 09: Final CTA ── */}
      <SolutionsFinalCTASection />
    </main>
  );
}
