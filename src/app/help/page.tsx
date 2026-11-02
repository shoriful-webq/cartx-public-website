import { Metadata } from "next";
import { HelpView } from "@/components/help/help-view";

export const metadata: Metadata = {
  title: "Help Center & FAQs | CartX Support",
  description:
    "Find answers to frequently asked questions about store setup, payment gateways, courier integrations, billing, and mobile apps on CartX.",
  keywords: [
    "CartX help center",
    "CartX FAQ",
    "ecommerce support bangladesh",
    "bkash setup help",
    "steadfast courier integration help",
    "custom domain help",
  ],
};

export default function HelpPage() {
  return <HelpView />;
}
