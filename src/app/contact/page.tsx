import { Metadata } from "next";
import { ContactView } from "@/components/contact/contact-view";

export const metadata: Metadata = {
  title: "Contact Us | CartX Support & Sales",
  description:
    "Have questions about CartX, pricing, courier integrations or white-label mobile apps? Send us a message and our team in Dhaka will assist you.",
  keywords: [
    "Contact CartX",
    "CartX support",
    "ecommerce help Bangladesh",
    "WebQ LTD contact",
    "CartX sales",
  ],
};

export default function ContactPage() {
  return <ContactView />;
}
