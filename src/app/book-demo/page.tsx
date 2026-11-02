import { Metadata } from "next";
import { BookDemoView } from "@/components/book-demo/book-demo-view";

export const metadata: Metadata = {
  title: "Book a Demo | CartX E-Commerce Platform",
  description:
    "Request a personalized CartX demo tailored to your business. Explore product management, order processing, bKash payments, courier integrations, and white-label mobile apps.",
  keywords: [
    "Book CartX demo",
    "ecommerce demo Bangladesh",
    "white label app demo",
    "CartX enterprise consultation",
    "online store walkthrough",
  ],
};

export default function BookDemoPage() {
  return <BookDemoView />;
}
