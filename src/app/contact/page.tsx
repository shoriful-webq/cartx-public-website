import { Metadata } from "next";
import { ContactView } from "@/components/contact/contact-view";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/contact");

export const metadata: Metadata = {
  title: "Contact Us | CartX Support & Sales",
  description:
    "Have questions about CartX, pricing, courier integrations or white-label mobile apps? Send us a message and our team in Dhaka will assist you.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Contact Us | CartX Support & Sales",
    description:
      "Have questions about CartX, pricing, courier integrations or white-label mobile apps? Send us a message and our team in Dhaka will assist you.",
    url: canonical,
    type: "website",
  },
  keywords: [
    "Contact CartX",
    "CartX support",
    "ecommerce help Bangladesh",
    "WebQ LTD contact",
    "CartX sales",
  ],
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Contact Us", item: "/contact" },
        ]}
      />
      <ContactView />
    </>
  );
}
