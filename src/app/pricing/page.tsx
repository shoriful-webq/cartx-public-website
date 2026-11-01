import { Metadata } from "next";
import { PricingView } from "@/components/pricing";

export const metadata: Metadata = {
  title: "Simple, Transparent Pricing & Subscription Plans | CartX Platform",
  description:
    "Explore transparent pricing plans for CartX. 0% platform transaction fees, automated courier dispatch, local MFS payment gateways, and 14-day free trial.",
  openGraph: {
    title: "Simple, Transparent Pricing & Subscription Plans | CartX Platform",
    description:
      "Explore transparent pricing plans for CartX. 0% platform transaction fees, automated courier dispatch, local MFS payment gateways, and 14-day free trial.",
    type: "website",
  },
};

export default function PricingPage() {
  return <PricingView />;
}
