import { Metadata } from "next";
import { StartView } from "@/components/start/start-view";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/start");

export const metadata: Metadata = {
  title: "Start Building Your Online Store | CartX",
  description:
    "Create your CartX account and follow the setup process to prepare your store. 14-day free trial on all plans, 0% platform commission, and local payments.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Start Building Your Online Store | CartX",
    description:
      "Create your CartX account and follow the setup process to prepare your store. 14-day free trial on all plans, 0% platform commission, and local payments.",
    url: canonical,
    type: "website",
  },
};

export default function StartPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Get Started", item: "/start" },
        ]}
      />
      <StartView />
    </>
  );
}
