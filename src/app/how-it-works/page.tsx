import { Metadata } from "next";
import { HowItWorksView } from "@/components/how-it-works/how-it-works-view";

export const metadata: Metadata = {
  title: "How It Works | CartX - Complete E-commerce Platform",
  description:
    "Learn how CartX helps you create, launch, and manage your online business in simple steps. From account creation to order delivery and growth.",
  keywords: [
    "CartX how it works",
    "ecommerce setup guide",
    "online store launch steps",
    "courier integration",
    "payment gateway bangladesh",
  ],
};

export default function HowItWorksPage() {
  return <HowItWorksView />;
}
