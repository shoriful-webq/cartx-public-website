import { Metadata } from "next";
import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "Cookie Policy | CartX",
  description: "Information about how CartX uses essential cookies and local storage tokens for performance and security.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "essential-cookies",
    titleEn: "1. Essential Cookies & Local Storage",
    titleBn: "১. প্রয়োজনীয় কুকিজ ও লোকাল স্টোরেজ",
    contentEn: [
      "CartX utilizes strictly necessary cookies and browser storage keys to remember your language preference (EN/BN), keep your merchant admin session secure, and retain active shopping cart sessions.",
      "These essential tokens do not track your activity across third-party websites.",
    ],
    contentBn: [
      "আপনার ভাষা পছন্দ (বাংলা/ইংরেজি), অ্যাডমিন লগইন সেশন এবং শপিং কার্ট মনে রাখার জন্য CartX প্রয়োজনীয় কুকিজ ও ব্রাউজার স্টোরেজ ব্যবহার করে।",
      "এই কুকিগুলো অন্যান্য তৃতীয় পক্ষের ওয়েবসাইটে আপনার কার্যক্রম ট্র্যাক করে না।",
    ],
  },
  {
    id: "analytics",
    titleEn: "2. Aggregated Performance Telemetry",
    titleBn: "২. সিস্টেম পারফরম্যান্স টেলিমেট্রি",
    contentEn: [
      "We collect anonymized system performance metrics (page load speeds, API latency) to optimize server caching and store responsiveness across Bangladesh mobile networks.",
    ],
    contentBn: [
      "সার্ভার স্পিড এবং মোবাইল নেটওয়ার্কে লোডিং গতি বৃদ্ধির স্বার্থে অজ্ঞাতনামা পারফরম্যান্স ডেটা সংগ্রহ করা হয়।",
    ],
  },
  {
    id: "managing-cookies",
    titleEn: "3. Managing Your Preferences",
    titleBn: "৩. কুকি নিয়ন্ত্রণ ও পরিবর্তন",
    contentEn: [
      "You can configure your browser to block or alert you about cookies. Disabling essential cookies may impair core storefront checkout and admin capabilities.",
    ],
    contentBn: [
      "আপনি চাইলে যেকোনো সময় ব্রাউজার সেটিংস থেকে কুকিজ ব্লক বা মুছে ফেলতে পারেন। তবে এতে চেকআউট ও অ্যাডমিনের কিছু ফিচার বাধাগ্রস্ত হতে পারে।",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      titleEn="Cookie Policy"
      titleBn="কুকি পলিসি"
      lastUpdated="October 2026"
      summaryEn="Transparent disclosure on how CartX uses browser storage and essential cookies to ensure safe, dependable operations."
      summaryBn="CartX ওয়েবসাইট এবং স্টোরফ্রন্টে কুকিজের দায়িত্বশীল ব্যবহার সম্পর্কে স্পষ্ট তথ্য।"
      sections={SECTIONS}
    />
  );
}
