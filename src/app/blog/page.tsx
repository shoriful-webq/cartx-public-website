import { Metadata } from "next";
import { BlogView } from "@/components/blog/blog-view";

export const metadata: Metadata = {
  title: "Blog & E-Commerce Guides | CartX Knowledge Hub",
  description:
    "Actionable e-commerce advice, courier delivery tips, payment gateway strategies, and operational guides for online merchants in Bangladesh.",
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
  return <BlogView />;
}
