import { Metadata } from "next";
import { DemoStoresView } from "@/components/demo-stores/demo-stores-view";

export const metadata: Metadata = {
  title: "Explore Example Stores & Demo Storefronts | CartX",
  description:
    "Explore example stores built for fashion, electronics, cosmetics, grocery, home lifestyle, and books on CartX. Discover responsive desktop and mobile layouts.",
  openGraph: {
    title: "Explore Example Stores & Demo Storefronts | CartX",
    description:
      "Explore example stores built for fashion, electronics, cosmetics, grocery, home lifestyle, and books on CartX. Discover responsive desktop and mobile layouts.",
    type: "website",
  },
};

export default function DemoStoresPage() {
  return <DemoStoresView />;
}
