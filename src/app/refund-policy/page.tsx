import { Metadata } from "next";
import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "Refund Policy | CartX",
  description: "Subscription cancellation and billing refund guidelines for CartX merchants.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "trial-period",
    titleEn: "1. Free Trial & Evaluation",
    titleBn: "১. ফ্রি ট্রায়াল ও মূল্যায়ন",
    contentEn: [
      "CartX provides a fully functional trial period so you can test our storefront customizer, catalog manager, and integrations before activating a paid plan.",
      "No payment method is required to begin evaluating CartX.",
    ],
    contentBn: [
      "পেইড প্ল্যান চালু করার আগেই সম্পূর্ণ ফিচার যাচাই করার জন্য CartX ফ্রি ট্রায়াল সুবিধা প্রদান করে।",
      "ট্রায়াল শুরু করতে কোনো পেমেন্ট মেথড বা ক্রেডিট কার্ডের প্রয়োজন নেই।",
    ],
  },
  {
    id: "subscription-refunds",
    titleEn: "2. Subscription Cancellations & Refunds",
    titleBn: "২. সাবস্ক্রিপশন বাতিল ও রিফান্ড",
    contentEn: [
      "You can cancel your subscription renewal at any time directly from your billing settings. Your access continues until the end of your prepaid billing period.",
      "If you experience an unresolvable technical disruption within 7 days of your first paid activation, contact support@cartx.store for a full refund evaluation.",
    ],
    contentBn: [
      "যেকোনো সময় ড্যাশবোর্ডের বিলিং সেটিংস থেকে পরবর্তী রিনিউয়াল বাতিল করা যায়। মেয়াদ শেষ না হওয়া পর্যন্ত সমস্ত ফিচার চালু থাকবে।",
      "প্রথম পেইড অ্যাক্টিভেশনের ৭ দিনের মধ্যে কারিগরি ত্রুটির কারণে সেবা ব্যবহারে ব্যর্থ হলে রিফান্ডের জন্য আবেদন করা যাবে।",
    ],
  },
  {
    id: "customer-orders",
    titleEn: "3. Merchant Customer Returns & Refunds",
    titleBn: "৩. গ্রাহকের রিটার্ন ও রিফান্ড পলিসি",
    contentEn: [
      "CartX is an e-commerce platform provider. Returns and refunds for physical merchandise purchased by customers on individual merchant storefronts are governed solely by each merchant's store policy.",
    ],
    contentBn: [
      "CartX শুধুমাত্র প্রযুক্তি প্ল্যাটফর্ম প্রদান করে। মার্চেন্টের স্টোর থেকে কেনা পণ্যের রিটার্ন বা রিফান্ড সংশ্লিষ্ট মার্চেন্টের নিজস্ব পলিসি অনুযায়ী পরিচালিত হয়।",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      titleEn="Refund Policy"
      titleBn="রিফান্ড পলিসি"
      lastUpdated="October 2026"
      summaryEn="Clear guidelines on CartX subscription renewals, cancellations, and billing refund eligibility."
      summaryBn="CartX সাবস্ক্রিপশন বাতিলকরণ, রিনিউয়াল এবং রিফান্ড পলিসির বিশদ বিবরণ।"
      sections={SECTIONS}
    />
  );
}
