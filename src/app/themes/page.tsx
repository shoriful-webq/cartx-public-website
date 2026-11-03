import { Metadata } from "next";
import { ThemesGalleryView } from "@/components/themes";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/themes");

export const metadata: Metadata = {
  title: "Storefront Themes & Templates | CartX",
  description:
    "Explore high-converting, mobile-first e-commerce storefront themes and templates for fashion, electronics, cosmetics, grocery, and home lifestyle brands on CartX.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Storefront Themes & Templates | CartX",
    description:
      "Explore high-converting, mobile-first e-commerce storefront themes and templates for fashion, electronics, cosmetics, grocery, and home lifestyle brands on CartX.",
    url: canonical,
    type: "website",
  },
};

export default function ThemesPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Themes", item: "/themes" },
        ]}
      />
      <ThemesGalleryView />
    </>
  );
}
