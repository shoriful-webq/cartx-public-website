export type Locale = "en" | "bn";

export const defaultLocale: Locale = "en";

export interface Translations {
  [key: string]: string;
}

export const translations: Record<Locale, Translations> = {
  en: {
    // Announcement Bar
    "announcement.badge": "New",
    "announcement.message": "Introducing CartX — A Smarter Way to Manage Your Online Store.",
    "announcement.link": "Learn more",
    "announcement.dismiss": "Dismiss announcement",

    // Navigation Links
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.solutions": "Solutions",
    "nav.themes": "Themes",
    "nav.integrations": "Integrations",
    "nav.pricing": "Pricing",
    "nav.resources": "Resources",
    "nav.contact": "Contact Us",
    "nav.login": "Log In",
    "nav.start": "Start Your Store",

    // Resources Dropdown
    "resources.title": "Resources & Solutions",
    "resources.blog.title": "Blog & Guides",
    "resources.blog.desc": "E-commerce strategy, playbooks, and conversion optimization.",
    "resources.help.title": "Help Center & FAQ",
    "resources.help.desc": "Setup guides, gateway connections, and courier documentation.",
    "resources.demo.title": "Demo Stores",
    "resources.demo.desc": "Explore interactive storefront samples across retail verticals.",
    "resources.mobile.title": "White-Label Mobile Apps",
    "resources.mobile.desc": "Dedicated iOS & Android shopping apps with push notifications.",
    "resources.howItWorks.title": "How It Works",
    "resources.howItWorks.desc": "A 4-step merchant guide from onboarding to delivery fulfillment.",

    // Language Toggle
    "lang.toggle": "বাংলা",
    "lang.aria": "Toggle language between English and Bangla",

    // Common Buttons & Badges
    "btn.startTrial": "Start Free Trial",
    "btn.exploreDocs": "Explore Documentation",
    "btn.getStarted": "Get Started",
    "btn.signIn": "Sign In",
    "btn.bookDemo": "Book a Demo",
    "btn.deployNow": "Deploy Now",
    "btn.viewAll": "View All",

    // Home Page
    "home.badge": "CartX Design System 1.0 Ready",
    "home.heroTitle": "The modern commerce engine for hyper-growth brands",
    "home.heroDescription": "Powering fast, localized, and ultra-scalable online storefronts across global and regional markets with effortless checkout.",
    "home.tokenSectionTitle": "Built with CartX Global Design Tokens",
    "home.tokenSectionSubtitle": "Consistent typography, exact brand colors, accessible contrast, and responsive spacing.",
    "home.card1.title": "Primary & Secondary Colors",
    "home.card1.desc": "Styled using #2563EB primary and #38BDF8 secondary accents with clean slate body text.",
    "home.card1.badge": "High Contrast",
    "home.card2.title": "State Indicators",
    "home.card2.desc": "Semantic tokens for success (#16A34A), warning (#D97706), and error (#DC2626).",
    "home.card2.badge": "WCAG Compliant",
    "home.card3.title": "Bangla Typography Support",
    "home.card3.desc": "Clean Bengali text rendering using Noto Sans Bengali font and responsive clamp headers.",
    "home.card3.font": "Noto Sans Bengali + Inter",

    // Footer
    "footer.rights": "CartX Inc. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.security": "Security",

    // Common Page Titles & Placeholders for routes
    "features.title": "Core Platform Features",
    "features.desc": "Everything your brand requires to catalog inventory, convert shoppers, collect payments, and automate courier dispatch.",
    "solutions.title": "Commerce Solutions for Growing Brands",
    "solutions.desc": "Tailored e-commerce architectures designed for your specific industry.",
    "themes.title": "Storefront Themes & Templates",
    "themes.desc": "Fast, conversion-focused mobile-first templates ready for immediate launch.",
    "integrations.title": "Ecosystem Integrations",
    "integrations.desc": "Pre-built connectors for bKash, Nagad, Stripe, Pathao, Steadfast, and Meta Pixel.",
    "pricing.title": "Simple & Transparent Pricing",
    "pricing.desc": "Predictable plans without transaction percentage penalties.",
    "contact.title": "Contact Us",
    "contact.desc": "Get in touch with our product specialists and engineering team.",
  },
  bn: {
    // Announcement Bar
    "announcement.badge": "নতুন",
    "announcement.message": "কার্টএক্সের সাথে পরিচিত হোন — আপনার অনলাইন স্টোর পরিচালনার স্মার্ট সমাধান।",
    "announcement.link": "বিস্তারিত জানুন",
    "announcement.dismiss": "বিজ্ঞপ্তি বন্ধ করুন",

    // Navigation Links
    "nav.home": "হোম",
    "nav.features": "ফিচারস",
    "nav.solutions": "সলিউশনস",
    "nav.themes": "থিমস",
    "nav.integrations": "ইন্টিগ্রেশন",
    "nav.pricing": "প্রাইসিং",
    "nav.resources": "রিসোর্সেস",
    "nav.contact": "যোগাযোগ",
    "nav.login": "লগ ইন",
    "nav.start": "স্টোর শুরু করুন",

    // Resources Dropdown
    "resources.title": "রিসোর্স ও সলিউশন",
    "resources.blog.title": "ব্লগ ও গাইড",
    "resources.blog.desc": "ই-কমার্স কৌশল, প্লেবুক এবং বিক্রয় বৃদ্ধির উপায়।",
    "resources.help.title": "হেল্প সেন্টার ও সাধারণ প্রশ্ন",
    "resources.help.desc": "স্টোর সেটআপ গাইড, পেমেন্ট গেটওয়ে এবং কুরিয়ার ডকুমেন্টেশন।",
    "resources.demo.title": "ডেমো স্টোরসমূহ",
    "resources.demo.desc": "বিভিন্ন ক্যাটাগরির লাইভ ডেমো স্টোর অভিজ্ঞতা দেখুন।",
    "resources.mobile.title": "হোয়াইট-লেবেল মোবাইল অ্যাপস",
    "resources.mobile.desc": "পুশ নোটিফিকেশনসহ ডেডিকেটেড আইওএস ও অ্যান্ড্রয়েড শপিং অ্যাপ।",
    "resources.howItWorks.title": "এটি কীভাবে কাজ করে",
    "resources.howItWorks.desc": "স্টোর তৈরি থেকে পণ্য ডেলিভারি সম্পন্ন করার ৪ ধাপের গাইড।",

    // Language Toggle
    "lang.toggle": "English",
    "lang.aria": "ভাষা পরিবর্তন করে ইংরেজি বা বাংলায় রূপান্তর করুন",

    // Common Buttons & Badges
    "btn.startTrial": "ফ্রি ট্রায়াল শুরু করুন",
    "btn.exploreDocs": "ডকুমেন্টেশন দেখুন",
    "btn.getStarted": "শুরু করুন",
    "btn.signIn": "সাইন ইন",
    "btn.bookDemo": "ডেমো বুক করুন",
    "btn.deployNow": "এখনই চালু করুন",
    "btn.viewAll": "সব দেখুন",

    // Home Page
    "home.badge": "কার্টএক্স ডিজাইন সিস্টেম প্রস্তুত",
    "home.heroTitle": "দ্রুত বর্ধনশীল ব্র্যান্ডের জন্য আধুনিক কমার্স ইঞ্জিন",
    "home.heroDescription": "সহজ চেকআউট এবং নির্ভরযোগ্য পরিকাঠামোর মাধ্যমে দেশি ও বৈশ্বিক বাজারে দ্রুত ও স্কেলযোগ্য অনলাইন স্টোর পরিচালনা করুন।",
    "home.tokenSectionTitle": "কার্টএক্স গ্লোবাল ডিজাইন টোকেনে নির্মিত",
    "home.tokenSectionSubtitle": "সামঞ্জস্যপূর্ণ টাইপোগ্রাফি, সুনির্দিষ্ট ব্র্যান্ড রঙ, অ্যাক্সেসিবল বৈসাদৃশ্য এবং রেসপনসিভ স্পেসিং।",
    "home.card1.title": "প্রাইমারি ও সেকেন্ডারি কালার",
    "home.card1.desc": "#2563EB প্রাইমারি ব্লু এবং #38BDF8 স্কাই ব্লু অ্যাকসেন্টের সাথে মানানসই স্লেট টেক্সট।",
    "home.card1.badge": "উচ্চ বৈসাদৃশ্য",
    "home.card2.title": "স্ট্যাটাস নির্দেশক",
    "home.card2.desc": "সাকসেস (#16A34A), ওয়ার্নিং (#D97706) এবং এরর (#DC2626) এর জন্য সেমান্টিক টোকেন।",
    "home.card2.badge": "WCAG মানসম্মত",
    "home.card3.title": "বাংলা টাইপোগ্রাফি সাপোর্ট",
    "home.card3.desc": "নোটো সান্স বেঙ্গলি ফন্ট এবং ক্লাস্প-ভিত্তিক রেসপনসিভ হেডারের মাধ্যমে বাংলা টেক্সট মসৃণভাবে প্রদর্শিত হয়।",
    "home.card3.font": "নোটো সান্স বেঙ্গলি + ইন্টার",

    // Footer
    "footer.rights": "কার্টএক্স ইনকর্পোরেটেড। সর্বস্বত্ব সংরক্ষিত।",
    "footer.privacy": "প্রাইভেসি পলিসি",
    "footer.terms": "টার্মস অব সার্ভিস",
    "footer.security": "নিরাপত্তা",

    // Common Page Titles & Placeholders for routes
    "features.title": "মূল প্ল্যাটফর্ম ফিচারসমূহ",
    "features.desc": "ক্যাটালগ পরিচালনা, বিক্রয় রূপান্তর, পেমেন্ট সংগ্রহ এবং কুরিয়ার ডেলিভারি অটোমেশন।",
    "solutions.title": "ব্যবসায়িক কমার্স সলিউশন",
    "solutions.desc": "আপনার নির্দিষ্ট ব্যবসায়িক ক্যাটাগরির জন্য বিশেষভাবে প্রস্তুতকৃত আর্কিটেকচার।",
    "themes.title": "স্টোরফ্রন্ট থিম ও টেমপ্লেট",
    "themes.desc": "দ্রুতগতির, কনভার্সন-ফোকাসড মোবাইল-ফার্স্ট থিম।",
    "integrations.title": "ইকোসিস্টেম ইন্টিগ্রেশন",
    "integrations.desc": "বিকাশ, নগদ, স্ট্রাইপ, পাঠাও, স্টিডফাস্ট ও মেটা পিক্সেলের জন্য সরাসরি কানেক্টর।",
    "pricing.title": "সহজ ও স্বচ্ছ প্রাইসিং",
    "pricing.desc": "অর্ডার ফি কমিশন ছাড়া সহজ ও সাশ্রয়ী মাসিক প্ল্যান।",
    "contact.title": "যোগাযোগ করুন",
    "contact.desc": "যেকোনো প্রয়োজনে আমাদের বিশেষজ্ঞ টিমের সাথে যোগাযোগ করুন।",
  },
};

