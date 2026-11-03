import { Metadata } from "next";
import { HelpView } from "@/components/help/help-view";
import { HELP_ARTICLES } from "@/components/help/help-data";
import { FAQPageSchema, BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/help");

export const metadata: Metadata = {
  title: "Help Center & FAQs | CartX Support",
  description:
    "Find answers to frequently asked questions about store setup, payment gateways, courier integrations, billing, and mobile apps on CartX.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Help Center & FAQs | CartX Support",
    description:
      "Find answers to frequently asked questions about store setup, payment gateways, courier integrations, billing, and mobile apps on CartX.",
    url: canonical,
    type: "website",
  },
  keywords: [
    "CartX help center",
    "CartX FAQ",
    "ecommerce support bangladesh",
    "bkash setup help",
    "steadfast courier integration help",
    "custom domain help",
  ],
};

export default function HelpPage() {
  const faqList = HELP_ARTICLES.slice(0, 15).map((article) => ({
    question: article.questionEn,
    answer: article.answerEn,
  }));

  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Help Center & FAQs", item: "/help" },
        ]}
      />
      <FAQPageSchema faqs={faqList} />
      <HelpView />
    </>
  );
}
