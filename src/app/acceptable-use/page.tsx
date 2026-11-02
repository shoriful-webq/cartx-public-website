import { Metadata } from "next";
import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | CartX",
  description: "Guidelines and prohibitions for operating an online store on the CartX infrastructure.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "prohibited-activities",
    titleEn: "1. Strictly Prohibited Merchandise & Conduct",
    titleBn: "১. নিষিদ্ধ পণ্য ও কার্যক্রম",
    contentEn: [
      "Merchants may not use CartX infrastructure to sell illicit narcotics, unauthorized pharmaceutical drugs, firearms, stolen property, or fraudulent financial schemes.",
      "Engaging in identity spoofing, phishing, malware distribution, or unauthorized payment testing is grounds for immediate termination.",
    ],
    contentBn: [
      "CartX প্ল্যাটফর্ম ব্যবহার করে অবৈধ ওষুধ, আগ্নেয়াস্ত্র, চোরাই পণ্য কিংবা প্রতারণামূলক স্কিম পরিচালনা করা সম্পূর্ণ নিষিদ্ধ।",
      "ফিশিং, ম্যালওয়্যার ছড়ানো বা ভুয়া পেমেন্ট ট্রায়াল অবিলম্বে স্টোর বাতিলের কারণ হবে।",
    ],
  },
  {
    id: "system-integrity",
    titleEn: "2. System Integrity & Security Protection",
    titleBn: "২. সিস্টেমের নিরাপত্তা ও সুরক্ষা",
    contentEn: [
      "Merchants must not attempt to breach or circumvent system authentication, execute denial-of-service (DoS) assaults, or stress test production infrastructure without written authorization from WebQ LTD.",
    ],
    contentBn: [
      "অনুমতি ছাড়া প্ল্যাটফর্মের নিরাপত্তা বিঘ্নিত করার কোনো চেষ্টা বা ক্ষতিকর আক্রমণ পরিচালনা করা কঠোরভাবে নিষিদ্ধ।",
    ],
  },
  {
    id: "enforcement",
    titleEn: "3. Investigation & Account Suspension",
    titleBn: "৩. তদন্ত ও স্থগিতাদেশ",
    contentEn: [
      "We reserve the right to investigate reported violations of this policy and immediately suspend or disable offending store accounts to protect consumer safety and platform integrity.",
    ],
    contentBn: [
      "নীতিমালা লঙ্ঘনের অভিযোগ পাওয়া গেলে তদন্ত সাপেক্ষে তাৎক্ষণিকভাবে সংশ্লিষ্ট অ্যাকাউন্ট স্থগিত করার অধিকার CartX সংরক্ষণ করে।",
    ],
  },
];

export default function AcceptableUsePage() {
  return (
    <LegalPageLayout
      titleEn="Acceptable Use Policy"
      titleBn="গ্রহণযোগ্য ব্যবহারের নীতিমালা"
      lastUpdated="October 2026"
      summaryEn="Standard operating guidelines and prohibited merchant practices to ensure a secure commerce environment for everyone."
      summaryBn="CartX-এ স্টোর পরিচালনাকালে অনুমোদিত ও নিষিদ্ধ কার্যক্রমের সুস্পষ্ট নীতিমালা।"
      sections={SECTIONS}
    />
  );
}
