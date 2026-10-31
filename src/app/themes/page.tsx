import { Metadata } from "next";
import { ThemesGalleryView } from "@/components/themes";

export const metadata: Metadata = {
  title: "Storefront Themes & Templates | CartX",
  description:
    "Explore high-converting, mobile-first e-commerce storefront themes and templates for fashion, electronics, cosmetics, grocery, and home lifestyle brands on CartX.",
  openGraph: {
    title: "Storefront Themes & Templates | CartX",
    description:
      "Explore high-converting, mobile-first e-commerce storefront themes and templates for fashion, electronics, cosmetics, grocery, and home lifestyle brands on CartX.",
    type: "website",
  },
};

export default function ThemesPage() {
  return <ThemesGalleryView />;
}
