import { Metadata } from "next";
import { AboutView } from "@/components/about/about-view";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/about");

export const metadata: Metadata = {
  title: "About Us | CartX - Powered by WebQ LTD",
  description:
    "Learn about CartX and WebQ LTD. Our mission is to provide accessible, reliable, and scalable e-commerce infrastructure for modern businesses.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "About Us | CartX - Powered by WebQ LTD",
    description:
      "Learn about CartX and WebQ LTD. Our mission is to provide accessible, reliable, and scalable e-commerce infrastructure for modern businesses.",
    url: canonical,
    type: "website",
  },
  keywords: [
    "About CartX",
    "WebQ LTD",
    "ecommerce software company Bangladesh",
    "Dhaka software company",
    "CartX mission",
  ],
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about" },
        ]}
      />
      <AboutView />
    </>
  );
}
