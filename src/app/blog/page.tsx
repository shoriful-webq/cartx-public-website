import { Metadata } from "next";
import { BlogView } from "@/components/blog/blog-view";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/blog");

export const metadata: Metadata = {
  title: "Blog & E-Commerce Guides | CartX Knowledge Hub",
  description:
    "Actionable e-commerce advice, courier delivery tips, payment gateway strategies, and operational guides for online merchants in Bangladesh.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Blog & E-Commerce Guides | CartX Knowledge Hub",
    description:
      "Actionable e-commerce advice, courier delivery tips, payment gateway strategies, and operational guides for online merchants in Bangladesh.",
    url: canonical,
    type: "website",
  },
  keywords: [
    "CartX blog",
    "ecommerce guides bangladesh",
    "online business tips",
    "bkash payment setup",
    "courier delivery management",
    "reduce RTO bangladesh",
  ],
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
        ]}
      />
      <BlogView />
    </>
  );
}
