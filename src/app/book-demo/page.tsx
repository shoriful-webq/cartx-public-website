import { Metadata } from "next";
import { BookDemoView } from "@/components/book-demo/book-demo-view";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/book-demo");

export const metadata: Metadata = {
  title: "Book a Demo | CartX E-Commerce Platform",
  description:
    "Request a personalized CartX demo tailored to your business. Explore product management, order processing, bKash payments, courier integrations, and white-label mobile apps.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Book a Demo | CartX E-Commerce Platform",
    description:
      "Request a personalized CartX demo tailored to your business. Explore product management, order processing, bKash payments, courier integrations, and white-label mobile apps.",
    url: canonical,
    type: "website",
  },
  keywords: [
    "Book CartX demo",
    "ecommerce demo Bangladesh",
    "white label app demo",
    "CartX enterprise consultation",
    "online store walkthrough",
  ],
};

export default function BookDemoPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Book a Demo", item: "/book-demo" },
        ]}
      />
      <BookDemoView />
    </>
  );
}
