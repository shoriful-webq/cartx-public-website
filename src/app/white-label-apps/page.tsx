import { Metadata } from "next";
import { WhiteLabelAppsView } from "@/components/white-label-apps/white-label-view";

export const metadata: Metadata = {
  title: "Your Brand. Your Shopping App. | White-Label Apps | CartX",
  description:
    "Explore branded native iOS and Android mobile app options for your online store with CartX. Direct customer shopping, real-time push notifications, and store sync.",
  openGraph: {
    title: "Your Brand. Your Shopping App. | White-Label Apps | CartX",
    description:
      "Explore branded native iOS and Android mobile app options for your online store with CartX. Direct customer shopping, real-time push notifications, and store sync.",
    type: "website",
  },
};

export default function WhiteLabelAppsPage() {
  return <WhiteLabelAppsView />;
}
