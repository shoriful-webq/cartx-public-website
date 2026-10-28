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

    // Global CTA System
    "cta.startStore": "Start Your Store",
    "cta.exploreFeatures": "Explore Features",
    "cta.viewPricing": "View Pricing",
    "cta.exploreThemes": "Explore Themes",
    "cta.viewDemoStore": "View Demo Store",
    "cta.exploreIntegrations": "Explore Integrations",
    "cta.bookDemo": "Book a Demo",
    "cta.contactSales": "Contact Sales",
    "cta.talkToSupport": "Talk to Support",
    "cta.exploreStorefrontFeatures": "Explore Storefront Features",

    // Common Buttons & Badges
    "btn.startTrial": "Start Free Trial",
    "btn.exploreDocs": "Explore Documentation",
    "btn.getStarted": "Get Started",
    "btn.signIn": "Sign In",
    "btn.bookDemo": "Book a Demo",
    "btn.deployNow": "Deploy Now",
    "btn.viewAll": "View All",

    // Home Page — Hero Section
    "home.eyebrow": "YOUR BUSINESS. YOUR BRAND. YOUR ONLINE STORE.",
    "home.heroTitlePlain": "Build Your Online Store.",
    "home.heroTitleHighlight": "Grow Your Business with CartX.",
    "home.heroDescription": "Create your branded online store and manage products, orders, inventory, payments and delivery from one connected platform.",
    "home.trustLine": "Built for entrepreneurs, growing brands and online businesses.",
    "home.mockupAlt": "CartX merchant dashboard preview",

    // Home Page — Brand Trust Strip (Section 02)
    "trustStrip.badge": "ALL-IN-ONE COMMERCE PLATFORM",
    "trustStrip.title": "Core capabilities built into every CartX store",
    "trustStrip.pillar1.title": "Store Management",
    "trustStrip.pillar1.desc": "Branded storefronts, custom domains, and mobile-first themes.",
    "trustStrip.pillar2.title": "Order Management",
    "trustStrip.pillar2.desc": "Centralized order processing, status tracking, and invoices.",
    "trustStrip.pillar3.title": "Inventory Control",
    "trustStrip.pillar3.desc": "Real-time stock alerts, SKU variants, and catalog management.",
    "trustStrip.pillar4.title": "Payments & Delivery",
    "trustStrip.pillar4.desc": "Seamless gateway connections and automated courier dispatch.",
    "trustStrip.pillar5.title": "Business Insights",
    "trustStrip.pillar5.desc": "Actionable sales summaries, visitor trends, and product data.",
    "trustStrip.verifiedIntegrations": "Verified Ecosystem Integrations",

    // Home Page — Problem & Solution (Section 03)
    "problemSolution.badge": "THE PROBLEM & THE SOLUTION",
    "problemSolution.title": "Your Online Business, Without the Daily Chaos.",
    "problemSolution.description": "Managing products, orders, stock, payments and delivery across disconnected tools can become difficult as your business grows. CartX brings supported workflows together in one place.",
    "problemSolution.card1.title": "Scattered Operations",
    "problemSolution.card1.desc": "Product, order, and inventory information kept across separate places.",
    "problemSolution.card2.title": "Manual Work",
    "problemSolution.card2.desc": "Repetitive order processing and manual status updates.",
    "problemSolution.card3.title": "Limited Visibility",
    "problemSolution.card3.desc": "Difficulty tracking sales and understanding overall business performance.",
    "problemSolution.card4.title": "Growth Complexity",
    "problemSolution.card4.desc": "Managing daily operations becomes harder as customer and order volume grows.",
    "problemSolution.solutionBanner": "Manage your essential e-commerce workflows through one connected platform.",

    // Home Page — Create Your Store (Section 04)
    "createStore.badge": "STOREFRONT BUILDER",
    "createStore.title": "Your Storefront, Your Brand.",
    "createStore.description": "Set up your store identity, organize your products and create a shopping experience that reflects your brand.",
    "createStore.step1.title": "1. Brand Identity",
    "createStore.step1.desc": "Upload your logo, select brand colors, and configure typography.",
    "createStore.step2.title": "2. Catalog & Sections",
    "createStore.step2.desc": "Organize your product catalogue and customize homepage sections.",
    "createStore.step3.title": "3. Publish & Launch",
    "createStore.step3.desc": "Launch your mobile-responsive store with custom domain support.",
    "createStore.featLogo": "Store logo and brand colors",
    "createStore.featSections": "Homepage sections",
    "createStore.featCatalogue": "Product catalogue",
    "createStore.featDetails": "Product detail page",
    "createStore.featResponsive": "Mobile-responsive storefront",
    "createStore.featDomain": "Custom domain support (supported plans)",
    "createStore.previewLive": "Live Storefront Preview",
    "createStore.previewMobile": "Mobile-First Storefront",

    // Footer Columns & Links
    "footer.brandDescription": "Next-generation e-commerce platform built for scale, localized checkouts, and automated courier fulfillment.",
    "footer.colProduct": "Product",
    "footer.colSolutions": "Solutions",
    "footer.colResources": "Resources",
    "footer.colCompany": "Company",
    "footer.colLegal": "Legal",
    "footer.colSupport": "Support",

    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.themes": "Themes",
    "footer.integrations": "Integrations",
    "footer.whiteLabelApps": "White-label Apps",

    "footer.solFashion": "Fashion & Apparel",
    "footer.solElectronics": "Electronics",
    "footer.solCosmetics": "Cosmetics & Beauty",
    "footer.solGrocery": "Grocery & Organic Food",
    "footer.solHome": "Home & Lifestyle",

    "footer.blog": "Blog",
    "footer.helpCenter": "Help Center",
    "footer.documentation": "Documentation",
    "footer.demoStores": "Demo Stores",

    "footer.aboutUs": "About Us",
    "footer.contactUs": "Contact Us",
    "footer.bookDemo": "Book a Demo",

    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.refund": "Refund Policy",
    "footer.cookie": "Cookie Policy",
    "footer.acceptableUse": "Acceptable Use Policy",

    "footer.emailSupport": "Email Support",
    "footer.businessPhone": "Phone",
    "footer.businessAddress": "Corporate Headquarters",
    "footer.status": "System Status",
    "footer.rights": "CartX Inc. All rights reserved.",

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

    // Global CTA System
    "cta.startStore": "স্টোর শুরু করুন",
    "cta.exploreFeatures": "ফিচারসমূহ দেখুন",
    "cta.viewPricing": "প্রাইসিং দেখুন",
    "cta.exploreThemes": "থিমসমূহ দেখুন",
    "cta.viewDemoStore": "ডেমো স্টোর দেখুন",
    "cta.exploreIntegrations": "ইন্টিগ্রেশন দেখুন",
    "cta.bookDemo": "ডেমো বুক করুন",
    "cta.contactSales": "সেলস টিমের সাথে যোগাযোগ",
    "cta.talkToSupport": "সাপোর্টের সাথে কথা বলুন",
    "cta.exploreStorefrontFeatures": "স্টোরফ্রন্ট ফিচারসমূহ দেখুন",

    // Common Buttons & Badges
    "btn.startTrial": "ফ্রি ট্রায়াল শুরু করুন",
    "btn.exploreDocs": "ডকুমেন্টেশন দেখুন",
    "btn.getStarted": "শুরু করুন",
    "btn.signIn": "সাইন ইন",
    "btn.bookDemo": "ডেমো বুক করুন",
    "btn.deployNow": "এখনই চালু করুন",
    "btn.viewAll": "সব দেখুন",

    // Home Page — Hero Section
    "home.eyebrow": "আপনার ব্যবসা। আপনার ব্র্যান্ড। আপনার অনলাইন স্টোর।",
    "home.heroTitlePlain": "আপনার অনলাইন স্টোর তৈরি করুন।",
    "home.heroTitleHighlight": "কার্টএক্সের সাথে ব্যবসা বাড়ান।",
    "home.heroDescription": "আপনার ব্র্যান্ডেড অনলাইন স্টোর তৈরি করুন এবং পণ্য, অর্ডার, ইনভেন্টরি, পেমেন্ট ও ডেলিভারি একটি সংযুক্ত প্ল্যাটফর্ম থেকে পরিচালনা করুন।",
    "home.trustLine": "উদ্যোক্তা, ক্রমবর্ধমান ব্র্যান্ড এবং অনলাইন ব্যবসার জন্য তৈরি।",
    "home.mockupAlt": "কার্টএক্স মার্চেন্ট ড্যাশবোর্ড প্রিভিউ",

    // Home Page — Brand Trust Strip (Section 02)
    "trustStrip.badge": "অল-ইন-ওয়ান কমার্স প্ল্যাটফর্ম",
    "trustStrip.title": "প্রতিটি কার্টএক্স স্টোরের সাথে সংযুক্ত মূল সুবিধাসমূহ",
    "trustStrip.pillar1.title": "স্টোর ম্যানেজমেন্ট",
    "trustStrip.pillar1.desc": "ব্র্যান্ডেড স্টোরফ্রন্ট, কাস্টম ডোমেইন এবং মোবাইল-ফার্স্ট থিম।",
    "trustStrip.pillar2.title": "অর্ডার ম্যানেজমেন্ট",
    "trustStrip.pillar2.desc": "কেন্দ্রীভূত অর্ডার প্রসেসিং, স্ট্যাটাস ট্র্যাকিং এবং ইনভয়েস।",
    "trustStrip.pillar3.title": "ইনভেন্টরি কন্ট্রোল",
    "trustStrip.pillar3.desc": "রিয়েল-টাইম স্টক অ্যালার্ট, ভ্যারিয়েন্ট এবং ক্যাটালগ নিয়ন্ত্রণ।",
    "trustStrip.pillar4.title": "পেমেন্ট ও ডেলিভারি",
    "trustStrip.pillar4.desc": "স্থানীয় গেটওয়ে কানেকশন ও স্বয়ংক্রিয় কুরিয়ার বুকিং।",
    "trustStrip.pillar5.title": "বিজনেস ইনসাইটস",
    "trustStrip.pillar5.desc": "কার্যকর বিক্রয় পরিসংখ্যান, ভিজিটর ট্রেন্ড ও পারফরম্যান্স ডেটা।",
    "trustStrip.verifiedIntegrations": "যাচাইকৃত ইকোসিস্টেম ইন্টিগ্রেশন",

    // Home Page — Problem & Solution (Section 03)
    "problemSolution.badge": "সমস্যা ও সমাধান",
    "problemSolution.title": "আপনার অনলাইন ব্যবসা, প্রতিদিনের জটিলতা ছাড়াই।",
    "problemSolution.description": "ব্যবসা বড় হওয়ার সাথে সাথে বিচ্ছিন্ন টুলে পণ্য, অর্ডার, স্টক, পেমেন্ট ও ডেলিভারি পরিচালনা করা কঠিন হয়ে পড়ে। কার্টএক্স এই সমস্ত ওয়ার্কফ্লোকে এক জায়গায় নিয়ে আসে।",
    "problemSolution.card1.title": "Scattered Operations",
    "problemSolution.card1.desc": "Product, order ও inventory তথ্য আলাদা জায়গায়।",
    "problemSolution.card2.title": "Manual Work",
    "problemSolution.card2.desc": "Repetitive order processing এবং status updates।",
    "problemSolution.card3.title": "Limited Visibility",
    "problemSolution.card3.desc": "Sales এবং business performance বুঝতে অসুবিধা।",
    "problemSolution.card4.title": "Growth Complexity",
    "problemSolution.card4.desc": "Customer ও order volume বাড়ার সঙ্গে operations পরিচালনা কঠিন হওয়া।",
    "problemSolution.solutionBanner": "Manage your essential e-commerce workflows through one connected platform।",

    // Home Page — Create Your Store (Section 04)
    "createStore.badge": "স্টোরফ্রন্ট বিল্ডার",
    "createStore.title": "আপনার স্টোরফ্রন্ট, আপনার ব্র্যান্ড।",
    "createStore.description": "আপনার স্টোরের পরিচয় নির্ধারণ করুন, পণ্য গুছিয়ে রাখুন এবং আপনার ব্র্যান্ডকে তুলে ধরার মতো কেনাকাটার অভিজ্ঞতা তৈরি করুন।",
    "createStore.step1.title": "১. ব্র্যান্ড আইডেন্টিটি",
    "createStore.step1.desc": "লোগো আপলোড, ব্র্যান্ডের রঙ নির্বাচন এবং টাইপোগ্রাফি নির্ধারণ করুন।",
    "createStore.step2.title": "২. ক্যাটালগ ও সেকশন",
    "createStore.step2.desc": "পণ্য ক্যাটালগ সাজান এবং হোমপেজ সেকশন কাস্টমাইজ করুন।",
    "createStore.step3.title": "৩. পাবলিশ ও লাইভ",
    "createStore.step3.desc": "কাস্টম ডোমেইন সুবিধাসহ মোবাইল-রেসপনসিভ স্টোর চালু করুন।",
    "createStore.featLogo": "স্টোর লোগো ও ব্র্যান্ডের কালার",
    "createStore.featSections": "হোমপেজ সেকশনসমূহ",
    "createStore.featCatalogue": "প্রোডাক্ট ক্যাটালগ",
    "createStore.featDetails": "প্রোডাক্ট ডিটেইল পেজ",
    "createStore.featResponsive": "মোবাইল-রেসপনসিভ স্টোরফ্রন্ট",
    "createStore.featDomain": "কাস্টম ডোমেইন সাপোর্ট (নির্দিষ্ট প্ল্যানে)",
    "createStore.previewLive": "লাইভ স্টোরফ্রন্ট প্রিভিউ",
    "createStore.previewMobile": "মোবাইল-ফার্স্ট স্টোরফ্রন্ট",

    // Footer Columns & Links
    "footer.brandDescription": "স্কেলযোগ্য অনলাইন স্টোর, স্থানীয় চেকআউট এবং স্বয়ংক্রিয় কুরিয়ার ডেলিভারির জন্য আধুনিক ই-কমার্স প্ল্যাটফর্ম।",
    "footer.colProduct": "প্রোডাক্ট",
    "footer.colSolutions": "সলিউশনস",
    "footer.colResources": "রিসোর্সেস",
    "footer.colCompany": "কোম্পানি",
    "footer.colLegal": "আইনি নীতিমালা",
    "footer.colSupport": "সাপোর্ট",

    "footer.features": "ফিচারস",
    "footer.pricing": "প্রাইসিং",
    "footer.themes": "থিমস",
    "footer.integrations": "ইন্টিগ্রেশন",
    "footer.whiteLabelApps": "হোয়াইট-লেবেল অ্যাপস",

    "footer.solFashion": "ফ্যাশন ও পোশাক",
    "footer.solElectronics": "ইলেকট্রনিক্স",
    "footer.solCosmetics": "কসমেটিক্স ও বিউটি",
    "footer.solGrocery": "মুদি ও অর্গানিক ফুড",
    "footer.solHome": "হোম ও লাইফস্টাইল",

    "footer.blog": "ব্লগ",
    "footer.helpCenter": "হেল্প সেন্টার",
    "footer.documentation": "ডকুমেন্টেশন",
    "footer.demoStores": "ডেমো স্টোরস",

    "footer.aboutUs": "আমাদের সম্পর্কে",
    "footer.contactUs": "যোগাযোগ",
    "footer.bookDemo": "ডেমো বুকিং",

    "footer.privacy": "প্রাইভেসি পলিসি",
    "footer.terms": "টার্মস অ্যান্ড কন্ডিশনস",
    "footer.refund": "রিফান্ড পলিসি",
    "footer.cookie": "কুকি পলিসি",
    "footer.acceptableUse": "অ্যাক্সেপ্টেবল ইউজ পলিসি",

    "footer.emailSupport": "ইমেইল সাপোর্ট",
    "footer.businessPhone": "ফোন",
    "footer.businessAddress": "কর্পোরেট কার্যালয়",
    "footer.status": "সিস্টেম স্ট্যাটাস",
    "footer.rights": "কার্টএক্স ইনকর্পোরেটেড। সর্বস্বত্ব সংরক্ষিত।",

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
