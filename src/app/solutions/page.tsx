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
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/solutions");

export const metadata: Metadata = {
  title: "E-commerce Solutions by Industry | CartX Platform",
  description:
    "Explore how CartX supports fashion, electronics, cosmetics, grocery, home decor, and books with multi-attribute variants, inventory control, and localized checkout in Bangladesh.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "E-commerce Solutions by Industry | CartX Platform",
    description:
      "Explore how CartX supports fashion, electronics, cosmetics, grocery, home decor, and books with multi-attribute variants, inventory control, and localized checkout in Bangladesh.",
    url: canonical,
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <main>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Solutions", item: "/solutions" },
        ]}
      />
      {/* ── Section 01: Hero ── */}
      <SolutionsHero />

      {/* ── Section 02: Industry Grid ── */}
      <IndustrySolutionsGrid />

      {/* ── Section 03: Common Business Challenges Solved ── */}
      <BusinessChallengesSection />

      {/* ── Section 04: Relevant Core Features ── */}
      <RelevantFeaturesSection />

      {/* ── Section 05: Typical Customer Journey / Workflow ── */}
      <ExampleWorkflowSection />

      {/* ── Section 06: Demo Store Preview ── */}
      <DemoStorePreviewSection />

      {/* ── Section 07: Related Integrations ── */}
      <RelatedIntegrationsSection />

      {/* ── Section 08: Frequently Asked Questions ── */}
      <SolutionsFAQSection />

      {/* ── Section 09: Final Action CTA ── */}
      <SolutionsFinalCTASection />
    </main>
  );
}
