import { Metadata } from "next";
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
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/structured-data";
import { SITE_CONFIG } from "@/lib/seo/site-config";

export const metadata: Metadata = {
  title: "CartX — Build and Manage Your Online Store",
  description:
    "Explore CartX, an e-commerce SaaS platform designed to help businesses manage online stores, products, orders, payments and delivery workflows.",
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: "CartX — Build and Manage Your Online Store",
    description:
      "Explore CartX, an e-commerce SaaS platform designed to help businesses manage online stores, products, orders, payments and delivery workflows.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    type: "website",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "CartX Modern E-Commerce Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CartX — Build and Manage Your Online Store",
    description:
      "Explore CartX, an e-commerce SaaS platform designed to help businesses manage online stores, products, orders, payments and delivery workflows.",
    site: SITE_CONFIG.twitterHandle,
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-full flex-1 bg-background text-foreground">
      {/* Search Engine Structured Data */}
      <OrganizationSchema />
      <WebSiteSchema />

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

      {/* Section 11 — Business Insights and Analytics */}
      <BusinessInsightsSection />

      {/* Section 12 — White-label Mobile Apps */}
      <WhiteLabelAppsSection />

      {/* Section 13 — Demo Store Showcase */}
      <DemoStoreShowcaseSection />

      {/* Section 14 — Transparent Pricing Preview */}
      <PricingPreviewSection />

      {/* Section 15 — Customer Stories and Social Proof */}
      <CustomerStoriesSection />

      {/* Section 16 — Frequently Asked Questions */}
      <FAQPreviewSection />

      {/* Section 17 — Final Call to Action */}
      <FinalCTASection />
    </div>
  );
}
