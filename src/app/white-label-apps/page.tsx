import { Metadata } from "next";
import { WhiteLabelAppsView } from "@/components/white-label-apps/white-label-view";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/white-label-apps");

export const metadata: Metadata = {
  title: "Your Brand. Your Shopping App. | White-Label Apps | CartX",
  description:
    "Explore branded native iOS and Android mobile app options for your online store with CartX. Direct customer shopping, real-time push notifications, and store sync.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Your Brand. Your Shopping App. | White-Label Apps | CartX",
    description:
      "Explore branded native iOS and Android mobile app options for your online store with CartX. Direct customer shopping, real-time push notifications, and store sync.",
    url: canonical,
    type: "website",
  },
};

export default function WhiteLabelAppsPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "White-label Apps", item: "/white-label-apps" },
        ]}
      />
      <WhiteLabelAppsView />
    </>
  );
}
