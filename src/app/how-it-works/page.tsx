import { Metadata } from "next";
import { HowItWorksView } from "@/components/how-it-works/how-it-works-view";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/how-it-works");

export const metadata: Metadata = {
  title: "How It Works | CartX - Complete E-commerce Platform",
  description:
    "Learn how CartX helps you create, launch, and manage your online business in simple steps. From account creation to order delivery and growth.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "How It Works | CartX - Complete E-commerce Platform",
    description:
      "Learn how CartX helps you create, launch, and manage your online business in simple steps. From account creation to order delivery and growth.",
    url: canonical,
    type: "website",
  },
  keywords: [
    "CartX how it works",
    "ecommerce setup guide",
    "online store launch steps",
    "courier integration",
    "payment gateway bangladesh",
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "How It Works", item: "/how-it-works" },
        ]}
      />
      <HowItWorksView />
    </>
  );
}
