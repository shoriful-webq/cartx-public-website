import { Metadata } from "next";
import { WhiteLabelAppsSection } from "@/components/Home/white-label-apps-section";

export const metadata: Metadata = {
  title: "White-Label Mobile Apps | CartX Platform",
  description:
    "Launch custom iOS and Android e-commerce mobile applications fully branded for your store with real-time catalog sync and push notifications.",
  openGraph: {
    title: "White-Label Mobile Apps | CartX Platform",
    description:
      "Launch custom iOS and Android e-commerce mobile applications fully branded for your store with real-time catalog sync and push notifications.",
    type: "website",
  },
};

export default function WhiteLabelAppsPage() {
  return (
    <main className="min-h-screen">
      <WhiteLabelAppsSection className="pt-24 sm:pt-28 lg:pt-32" />
    </main>
  );
}
