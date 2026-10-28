import {
  HeroSection,
  BrandTrustStrip,
  ProblemSolutionSection,
  CreateStoreSection,
  FeatureOverviewSection,
  HowItWorksSection,
  ThemeTemplatesSection,
  OrderInventorySection,
  PaymentsDeliverySection,
  MarketingGrowthSection,
  BusinessInsightsSection,
  WhiteLabelAppsSection,
  DemoStoreShowcaseSection,
  PricingPreviewSection,
  CustomerStoriesSection,
  FAQPreviewSection,
  FinalCTASection,
} from "@/components/Home";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full flex-1 bg-background text-foreground">
      {/* Section 01 — Hero */}
      <HeroSection />

      {/* Section 02 — Brand Trust Strip */}
      <BrandTrustStrip />

      {/* Section 03 — Problem and Solution */}
      <ProblemSolutionSection />

      {/* Section 04 — Create Your Store */}
      <CreateStoreSection />

      {/* Section 05 — Product Feature Overview */}
      <FeatureOverviewSection />

      {/* Section 06 — How CartX Works */}
      <HowItWorksSection />

      {/* Section 07 — Store Themes and Templates */}
      <ThemeTemplatesSection />

      {/* Section 08 — Manage Orders and Inventory */}
      <OrderInventorySection />

      {/* Section 09 — Payments and Delivery */}
      <PaymentsDeliverySection />

      {/* Section 10 — Marketing and Growth Tools */}
      <MarketingGrowthSection />

      {/* Section 11 — Business Insights */}
      <BusinessInsightsSection />

      {/* Section 12 — White-label Mobile Apps */}
      <WhiteLabelAppsSection />

      {/* Section 13 — Demo Store Showcase */}
      <DemoStoreShowcaseSection />

      {/* Section 14 — Pricing Preview */}
      <PricingPreviewSection />

      {/* Section 15 — Customer Stories / Testimonials (Configurable, hidden by default until verified testimonials are added) */}
      <CustomerStoriesSection />

      {/* Section 16 — FAQ Preview */}
      <FAQPreviewSection />

      {/* Section 17 — Final CTA */}
      <FinalCTASection />
    </div>
  );
}
