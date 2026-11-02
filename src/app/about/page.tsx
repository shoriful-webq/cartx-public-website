import { Metadata } from "next";
import { AboutView } from "@/components/about/about-view";

export const metadata: Metadata = {
  title: "About Us | CartX - Powered by WebQ LTD",
  description:
    "Learn about CartX and WebQ LTD. Our mission is to provide accessible, reliable, and scalable e-commerce infrastructure for modern businesses.",
  keywords: [
    "About CartX",
    "WebQ LTD",
    "ecommerce software company Bangladesh",
    "Dhaka software company",
    "CartX mission",
  ],
};

export default function AboutPage() {
  return <AboutView />;
}
