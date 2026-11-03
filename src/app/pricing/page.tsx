import { Metadata } from "next";
import { PricingView } from "@/components/pricing";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/pricing");

export const metadata: Metadata = {
  title: "Simple, Transparent Pricing & Subscription Plans | CartX Platform",
  description:
    "Explore transparent pricing plans for CartX. 0% platform transaction fees, automated courier dispatch, local MFS payment gateways, and 14-day free trial.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Simple, Transparent Pricing & Subscription Plans | CartX Platform",
    description:
      "Explore transparent pricing plans for CartX. 0% platform transaction fees, automated courier dispatch, local MFS payment gateways, and 14-day free trial.",
    url: canonical,
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Pricing", item: "/pricing" },
        ]}
      />
      <PricingView />
    </>
  );
}
