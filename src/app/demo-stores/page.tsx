import { Metadata } from "next";
import { DemoStoresView } from "@/components/demo-stores/demo-stores-view";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/demo-stores");

export const metadata: Metadata = {
  title: "Explore Example Stores & Demo Storefronts | CartX",
  description:
    "Explore example stores built for fashion, electronics, cosmetics, grocery, home lifestyle, and books on CartX. Discover responsive desktop and mobile layouts.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Explore Example Stores & Demo Storefronts | CartX",
    description:
      "Explore example stores built for fashion, electronics, cosmetics, grocery, home lifestyle, and books on CartX. Discover responsive desktop and mobile layouts.",
    url: canonical,
    type: "website",
  },
};

export default function DemoStoresPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Demo Stores", item: "/demo-stores" },
        ]}
      />
      <DemoStoresView />
    </>
  );
}
