import { Metadata } from "next";
import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | CartX",
  description: "Learn how CartX and WebQ LTD protect merchant and customer data privacy with strict isolation and zero data monetization.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "data-collection",
    titleEn: "1. Information We Collect",
    titleBn: "১. যেসব তথ্য আমরা সংগ্রহ করি",
    contentEn: [
      "CartX collects essential merchant operational information required to provide our e-commerce platform services, including your name, email address, store domain, and administrative contact preferences.",
      "Customer checkout data (recipient names, delivery addresses, phone numbers) is processed solely on behalf of the store merchant for order fulfillment and courier integration purposes.",
    ],
    contentBn: [
      "CartX প্ল্যাটফর্ম সেবা প্রদানের উদ্দেশ্যে প্রয়োজনীয় মার্চেন্ট তথ্য সংগ্রহ করে, যার মধ্যে আপনার নাম, ইমেইল, স্টোর ডোমেন এবং প্রশাসনিক যোগাযোগের তথ্য অন্তর্ভুক্ত।",
      "অর্ডার সম্পন্ন এবং কুরিয়ার ডেলিভারির স্বার্থে মার্চেন্টের পক্ষ থেকেই গ্রাহকের চেকআউট তথ্য প্রক্রিয়া করা হয়।",
    ],
  },
  {
    id: "data-use",
    titleEn: "2. How We Use Information",
    titleBn: "২. তথ্যের ব্যবহার",
    contentEn: [
      "We use collected information to authenticate merchant access, provision store infrastructure, facilitate automated payments, and dispatch courier booking requests.",
      "CartX never sells, rents, or commercializes merchant or customer data to third-party advertisers or external data brokers.",
    ],
    contentBn: [
      "সংগৃহীত তথ্য মার্চেন্ট অ্যাক্সেস নিশ্চিতকরণ, স্টোর পরিচালনা, পেমেন্ট প্রক্রিয়াকরণ এবং কুরিয়ার কনসাইনমেন্ট তৈরির উদ্দেশ্যে ব্যবহৃত হয়।",
      "CartX কখনোই মার্চেন্ট বা গ্রাহকের কোনো তথ্য তৃতীয় পক্ষের কাছে বিক্রি বা শেয়ার করে না।",
    ],
  },
  {
    id: "data-security",
    titleEn: "3. Data Isolation & Security",
    titleBn: "৩. তথ্য নিরাপত্তা ও আইসোলেশন",
    contentEn: [
      "All store traffic is encrypted in transit using industry-standard TLS protocols. Merchant database tenants are strictly isolated to prevent cross-account data leakage.",
      "Daily encrypted automated backups are maintained with point-in-time recovery capabilities.",
    ],
    contentBn: [
      "সমস্ত ট্র্যাফিক শিল্প-মানের TLS এনক্রিপশনের মাধ্যমে সংরক্ষিত হয়। প্রতিটি স্টোরের ডাটাবেজ কঠোরভাবে পৃথক (আইসোলেটেড) থাকে।",
      "প্রতিদিন স্বয়ংক্রিয় এনক্রিপ্টেড ব্যাকআপ সংরক্ষিত হয় যাতে অপ্রত্যাশিত পরিস্থিতিতে তথ্য দ্রুত পুনরুদ্ধার করা সম্ভব হয়।",
    ],
  },
  {
    id: "merchant-rights",
    titleEn: "4. Your Rights & Data Portability",
    titleBn: "৪. আপনার অধিকার ও ডেটা পোর্টেবিলিটি",
    contentEn: [
      "Merchants retain 100% ownership of their product catalogs, customer directories, and order histories. You may export your catalog and customer records via standard CSV spreadsheets at any time.",
      "You may request permanent deletion of your account and associated database records by contacting support@cartx.store.",
    ],
    contentBn: [
      "মার্চেন্টরা তাদের প্রোডাক্ট ক্যাটালগ, কাস্টমার তালিকা এবং অর্ডারের ইতিহাসের শতভাগ মালিক। যেকোনো সময় CSV আকারে সমস্ত ডেটা এক্সপোর্ট করা যায়।",
      "অ্যাকাউন্ট ও সংশ্লিষ্ট তথ্য স্থায়ীভাবে মুছে ফেলার জন্য support@cartx.store-এ অনুরোধ পাঠাতে পারেন।",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      titleEn="Privacy Policy"
      titleBn="গোপনীয়তা নীতি"
      lastUpdated="October 2026"
      summaryEn="This Privacy Policy describes how WebQ LTD ('CartX', 'we', 'our') collects, protects, and handles merchant and customer data."
      summaryBn="এই গোপনীয়তা নীতিতে WebQ LTD ('CartX') কীভাবে আপনার তথ্য সংগ্রহ, সংরক্ষণ ও সুরক্ষিত রাখে তা ব্যাখ্যা করা হয়েছে।"
      sections={SECTIONS}
    />
  );
}
