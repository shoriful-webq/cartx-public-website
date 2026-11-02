import { Metadata } from "next";
import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "Terms of Service | CartX",
  description: "Terms and conditions governing the use of CartX platform services provided by WebQ LTD.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    titleEn: "1. Acceptance of Terms",
    titleBn: "১. শর্তাবলীর গ্রহণযোগ্যতা",
    contentEn: [
      "By creating a store or accessing the CartX platform, you agree to comply with and be bound by these Terms of Service provided by WebQ LTD.",
      "If you do not agree to these terms, you must not use or access our software services.",
    ],
    contentBn: [
      "CartX-এ একটি স্টোর তৈরি বা সেবা ব্যবহারের মাধ্যমে আপনি WebQ LTD কর্তৃক প্রদত্ত এই নিয়মাবলী মেনে চলতে সম্মত হচ্ছেন।",
      "আপনি যদি এই শর্তাবলীতে সম্মত না হন, তবে অনুগ্রহ করে আমাদের প্ল্যাটফর্ম সেবা ব্যবহার থেকে বিরত থাকুন।",
    ],
  },
  {
    id: "account-responsibility",
    titleEn: "2. Account Security & Operations",
    titleBn: "২. অ্যাকাউন্ট ও পরিচালনার দায়িত্ব",
    contentEn: [
      "You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your store account.",
      "You must provide accurate, current, and complete business information during registration.",
    ],
    contentBn: [
      "আপনার অ্যাকাউন্টের পাসওয়ার্ডের গোপনীয়তা রক্ষা করা এবং অ্যাকাউন্টের আওতাধীন সমস্ত কার্যক্রমের দায়িত্ব আপনার।",
      "রেজিস্ট্রেশনের সময় সঠিক এবং হালনাগাদ তথ্য প্রদান করা আবশ্যক।",
    ],
  },
  {
    id: "platform-commission",
    titleEn: "3. Subscription & Zero Commission Policy",
    titleBn: "৩. সাবস্ক্রিপশন ও ০% কমিশন পলিসি",
    contentEn: [
      "CartX charges 0% platform transaction commission on merchant sales. Subscription plan fees are billed on monthly or yearly cycles as described on our pricing page.",
      "Payment gateway processing fees and courier charges are billed independently by respective third-party providers according to your agreements with them.",
    ],
    contentBn: [
      "CartX আপনার বিক্রয়ের ওপর কোনো প্ল্যাটফর্ম কমিশন কাটে না (০% কমিশন)। শুধুমাত্র নির্ধারিত মাসিক বা বার্ষিক সাবস্ক্রিপশন ফি প্রযোজ্য।",
      "পেমেন্ট গেটওয়ে এবং কুরিয়ার সার্ভিস তাদের নিজস্ব রেট অনুযায়ী সরাসরি ফি চার্জ করে।",
    ],
  },
  {
    id: "merchant-content",
    titleEn: "4. Store Content & Legal Compliance",
    titleBn: "৪. স্টোরের পণ্য ও আইনগত বাধ্যবাধকতা",
    contentEn: [
      "Merchants are solely responsible for ensuring that all products sold comply with Bangladesh laws and international trade regulations.",
      "CartX strictly prohibits the sale of counterfeit items, fraudulent goods, weapons, or illegal narcotics.",
    ],
    contentBn: [
      "স্টোরে বিক্রিত পণ্য যাতে বাংলাদেশের প্রচলিত আইন ও বাণিজ্য নীতিমালার সাথে সামঞ্জস্যপূর্ণ হয় তা নিশ্চিত করার সম্পূর্ণ দায়িত্ব মার্চেন্টের।",
      "জাল পণ্য, প্রতারণামূলক স্কিম বা নিষিদ্ধ সামগ্রী বিক্রি সম্পূর্ণভাবে নিষিদ্ধ।",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      titleEn="Terms of Service"
      titleBn="ব্যবহারের শর্তাবলী"
      lastUpdated="October 2026"
      summaryEn="These Terms of Service govern your use of the CartX e-commerce software platform provided by WebQ LTD."
      summaryBn="এই শর্তাবলী WebQ LTD-এর CartX সফটওয়্যার প্ল্যাটফর্মের ব্যবহারের নিয়মকানুন নির্ধারণ করে।"
      sections={SECTIONS}
    />
  );
}
