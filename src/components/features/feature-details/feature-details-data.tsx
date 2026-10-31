import React from "react";
import {
  Package,
  ShoppingBag,
  Boxes,
  Store,
  CreditCard,
  Truck,
  BarChart3,
  Users,
  Layers,
  ShieldCheck,
  Zap,
  Globe,
  Sliders,
  CheckCircle2,
  Tag,
  Clock,
  Lock,
  Smartphone,
  TrendingUp,
  FileText,
} from "lucide-react";
import {
  ProductCatalogMockup,
  OrdersMockup,
  InventoryControlMockup,
  StorefrontMockup,
  PaymentManagementMockup,
  DeliveryOperationsMockup,
  ReportsAnalyticsMockup,
  CustomerManagementMockup,
} from "../deep-dives/mockups";
import { FeatureDetailConfig } from "./types";

export const FEATURE_DETAILS_DATA: Record<string, FeatureDetailConfig> = {
  // ─────────────────────────────────────────────────────────────
  // 1. Product Management
  // ─────────────────────────────────────────────────────────────
  "product-management": {
    slug: "product-management",
    name: {
      en: "Product Management",
      bn: "প্রোডাক্ট ম্যানেজমেন্ট",
    },
    eyebrow: {
      en: "Catalog & Merchandising",
      bn: "ক্যাটালগ ও মার্চেন্ডাইজিং",
    },
    icon: Package,
    status: "available",
    seo: {
      title: "Product Management",
      description:
        "Create, organize, and manage product variants, pricing, high-resolution media galleries, and collections from a single CartX dashboard.",
    },
    hero: {
      titlePlain: {
        en: "Create, Organize & Scale",
        bn: "সাজান এবং প্রসারিত করুন আপনার",
      },
      titleHighlight: {
        en: "Your Product Catalog.",
        bn: "সম্পূর্ণ প্রোডাক্ট ক্যাটালগ।",
      },
      description: {
        en: "Create product listings with multi-attribute variants, high-resolution photo galleries, flexible comparison pricing, and SEO-ready metadata.",
        bn: "ভ্যারিয়েন্ট, হাই-রেজোলিউশন ফটো গ্যালারি, তুলনামূলক মূল্য নির্ধারণ এবং এসইও-বান্ধব মেটাডেটা সহ প্রোডাক্ট ক্যাটালগ সহজে পরিচালনা করুন।",
      },
      primaryCtaText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      secondaryCtaText: {
        en: "View Capabilities",
        bn: "সুবিধাসমূহ দেখুন",
      },
    },
    problem: {
      eyebrow: {
        en: "The Catalog Challenge",
        bn: "ক্যাটালগ ব্যবস্থাপনার সমস্যা",
      },
      title: {
        en: "Disorganized catalogs slow down sales and confuse buyers.",
        bn: "অগোছালো প্রোডাক্ট ক্যাটালগ বিক্রি কমিয়ে দেয় এবং ক্রেতাদের বিভ্রান্ত করে।",
      },
      description: {
        en: "Managing multiple sizes, colors, compare-at discounts, and media across scattered spreadsheets leads to outdated pricing, missing photos, and frustrated shoppers.",
        bn: "সাইজ, কালার ও মূল্য স্প্রেডশীট বা সোশ্যাল মিডিয়া চ্যাটে রাখলে প্রায়ই ভুল দাম দেখানো হয় এবং ছবি হারিয়ে যায়, যা ক্রেতাদের অসন্তুষ্ট করে।",
      },
      bulletPoints: [
        {
          en: "Confusing variant choices leading to checkout abandonment",
          bn: "স্পষ্ট ভ্যারিয়েন্ট না থাকায় কার্ট ত্যাগ করার হার বৃদ্ধি পায়",
        },
        {
          en: "Outdated pricing causing customer disputes and manual refunds",
          bn: "পুরোনো বা অমিল মূল্যের কারণে ক্রেতাদের সাথে ভুল বোঝাবুঝি তৈরি হয়",
        },
        {
          en: "Slow manual updates when running flash sales or promotions",
          bn: "ক্যাম্পেইন বা ডিসকাউন্টের সময় ম্যানুয়ালি আপডেট করতে প্রচুর সময় নষ্ট হয়",
        },
      ],
    },
    explanation: {
      eyebrow: {
        en: "The CartX Solution",
        bn: "কার্টএক্স সমাধান",
      },
      title: {
        en: "A structured catalog engine built for retail precision.",
        bn: "অনলাইন ব্যবসার জন্য তৈরি একটি সুসংগঠিত ক্যাটালগ ইঞ্জিন।",
      },
      description: {
        en: "CartX gives you granular control over how products are created, categorized, and displayed. Group variants with unique SKUs, set compare-at sale prices, and keep your full inventory ready for frictionless online shopping.",
        bn: "কার্টএক্সে প্রতিটি প্রোডাক্টের জন্য নির্দিষ্ট এসকেইউ, সাইজ-কালার ভ্যারিয়েন্ট এবং ডিসকাউন্ট প্রাইসিং সহজে সেট করা যায়, যাতে ক্রেতারা নির্ভুলভাবে কেনাকাটা করতে পারেন।",
      },
      highlightPill: {
        en: "Centralized Catalog Engine",
        bn: "কেন্দ্রীভূত ক্যাটালগ সিস্টেম",
      },
    },
    capabilities: [
      {
        icon: Sliders,
        title: {
          en: "Multi-Attribute Variant Matrix",
          bn: "মাল্টি-অ্যাট্রিবিউট ভ্যারিয়েন্ট ম্যাট্রিক্স",
        },
        description: {
          en: "Combine sizes, colors, and materials into unique SKUs with distinct pricing and stock counts.",
          bn: "সাইজ, রঙ ও মেটেরিয়াল মিলিয়ে প্রতিটি ভ্যারিয়েন্টের জন্য আলাদা এসকেইউ ও দাম নির্ধারণ করুন।",
        },
      },
      {
        icon: Package,
        title: {
          en: "High-Resolution Media Galleries",
          bn: "উচ্চমানের মিডিয়া গ্যালারি",
        },
        description: {
          en: "Upload multiple product angles with responsive image optimization and fast loading speeds.",
          bn: "প্রোডাক্টের একাধিক কোণের ছবি যুক্ত করুন যা মোবাইলে খুব দ্রুত এবং স্পষ্টভাবে লোড হয়।",
        },
      },
      {
        icon: Tag,
        title: {
          en: "Compare-At Pricing & Badges",
          bn: "কম্পেয়ার-অ্যাট ডিসকাউন্ট প্রাইসিং",
        },
        description: {
          en: "Display crossed-out original prices with automatic percentage discount badges to boost conversions.",
          bn: "আগের দাম ও ডিসকাউন্টের পরিমাণ স্পষ্টভাবে প্রদর্শন করে ক্রেতাদের কেনার আগ্রহ বাড়ান।",
        },
      },
      {
        icon: Layers,
        title: {
          en: "Dynamic Collections & Tags",
          bn: "ডাইনামিক কালেকশন ও ক্যাটাগরি",
        },
        description: {
          en: "Group products into seasonal lines, featured banners, or category taxonomies in seconds.",
          bn: "সিজনাল কালেকশন, বেস্টসেলার কিংবা নতুন আগমনের ভিত্তিতে পণ্য সহজে শ্রেণীবদ্ধ করুন।",
        },
      },
      {
        icon: Globe,
        title: {
          en: "SEO Metadata & Clean URLs",
          bn: "এসইও মেটাডেটা ও কাস্টম ইউআরএল",
        },
        description: {
          en: "Customize page titles, meta descriptions, and clean slug handles for search engine ranking.",
          bn: "সার্চ ইঞ্জিনে ভালো অবস্থানের জন্য কাস্টম স্লাগ, মেটা টাইটেল ও বিবরণ নিজেই নিয়ন্ত্রণ করুন।",
        },
      },
      {
        icon: CheckCircle2,
        title: {
          en: "Quick Status Controls",
          bn: "দ্রুত স্ট্যাটাস ও পাবলিশ কন্ট্রোল",
        },
        description: {
          en: "Instantly toggle items between Active, Draft, or Archived states without losing product data.",
          bn: "প্রোডাক্টের কোনো তথ্য না মুছেই মুহূর্তের মধ্যে অ্যাক্টিভ, ড্রাফট বা আর্কাইভে স্থানান্তর করুন।",
        },
      },
    ],
    workflow: [
      {
        stepNumber: 1,
        title: {
          en: "Enter Details & Attributes",
          bn: "নাম ও বিবরণ প্রবেশ করান",
        },
        description: {
          en: "Provide product title, category, and configure size, color, or style variant combinations.",
          bn: "প্রোডাক্টের নাম, বিবরণ এবং সাইজ ও কালার ভ্যারিয়েন্ট সিলেক্ট করে যোগ করুন।",
        },
      },
      {
        stepNumber: 2,
        title: {
          en: "Attach Photos & Set Pricing",
          bn: "ছবি যুক্ত করুন ও মূল্য দিন",
        },
        description: {
          en: "Upload optimized product photos and set retail price along with optional compare-at strike price.",
          bn: "উচ্চমানের ছবি আপলোড করে বিক্রয়মূল্য এবং প্রয়োজনে ডিসকাউন্ট মূল্য সেট করুন।",
        },
      },
      {
        stepNumber: 3,
        title: {
          en: "Assign to Collections",
          bn: "ক্যাটাগরি বা কালেকশনে সাজান",
        },
        description: {
          en: "Tag items and place them into targeted collections for storefront navigation and discovery.",
          bn: "প্রাসঙ্গিক ক্যাটাগরি বা হোমপেজ কালেকশনে প্রোডাক্টটি প্রদর্শনের জন্য যুক্ত করুন।",
        },
      },
      {
        stepNumber: 4,
        title: {
          en: "Publish Live to Storefront",
          bn: "লাইভ স্টোরফ্রন্টে পাবলিশ করুন",
        },
        description: {
          en: "Toggle status to Active and instantly accept customer orders with real-time stock sync.",
          bn: "অ্যাক্টিভ বাটনে ক্লিক করলেই প্রোডাক্টটি সরাসরি লাইভ হবে এবং ক্রেতারা অর্ডার করতে পারবেন।",
        },
      },
    ],
    visual: {
      title: {
        en: "Product Catalog Management Console",
        bn: "প্রোডাক্ট ক্যাটালগ ম্যানেজমেন্ট কনসোল",
      },
      caption: {
        en: "CartX variant matrix and pricing console preview (Illustrative demo data).",
        bn: "কার্টএক্স ভ্যারিয়েন্ট ম্যাট্রিক্স ও প্রাইসিং কনসোলের রূপরেখা (ডেমো ডেটা ভিত্তিক)।",
      },
      render: (t) => (
        <ProductCatalogMockup t={t} notice="Illustrative demo data" />
      ),
    },
    benefits: [
      {
        icon: Zap,
        title: {
          en: "Faster Product Launches",
          bn: "দ্রুত প্রোডাক্ট লঞ্চ",
        },
        description: {
          en: "Create and publish comprehensive multi-variant catalog items in just a few clicks.",
          bn: "কয়েক ক্লিকেই ভ্যারিয়েন্ট ও ছবিসহ সম্পূর্ণ প্রোডাক্ট ক্যাটালগে তুলে ধরা যায়।",
        },
      },
      {
        icon: TrendingUp,
        title: {
          en: "Higher Purchase Conversion",
          bn: "উচ্চ রূপান্তর ও বিক্রয় হার",
        },
        description: {
          en: "Clear size selectors, transparent pricing, and visual galleries eliminate buyer hesitation.",
          bn: "সহজ সাইজ সিলেকশন ও স্পষ্ট ডিসকাউন্ট প্রাইসিং ক্রেতাকে সিদ্ধান্ত নিতে সাহায্য করে।",
        },
      },
      {
        icon: Globe,
        title: {
          en: "Organic Search Traffic",
          bn: "সার্চ ইঞ্জিন থেকে ফ্রি ট্রাফিক",
        },
        description: {
          en: "Built-in SEO attributes help shoppers discover your specific product pages on Google.",
          bn: "গুগলে পণ্যের নাম লিখে সার্চ করলে আপনার স্টোরের পেজ সহজে খুঁজে পাওয়া যায়।",
        },
      },
      {
        icon: ShieldCheck,
        title: {
          en: "Accurate Variant Records",
          bn: "নির্ভুল স্টক ও ভ্যারিয়েন্ট তথ্য",
        },
        description: {
          en: "Every variation has a dedicated SKU, ensuring staff ship the exact item requested.",
          bn: "আলাদা এসকেইউ থাকার ফলে প্যাকিং ও ডেলিভারির সময় ভ্যারিয়েন্ট ভুলের ঝুঁকি থাকে না।",
        },
      },
    ],
    relatedFeatures: [
      {
        slug: "inventory-management",
        name: { en: "Inventory Management", bn: "ইনভেন্টরি ম্যানেজমেন্ট" },
        description: {
          en: "Track variant stock counts in real time and trigger low-stock alerts.",
          bn: "রিয়েল-টাইমে স্টক ট্র্যাক করুন এবং কমে গেলে অ্যালার্ট পান।",
        },
        icon: Boxes,
      },
      {
        slug: "store-builder",
        name: { en: "Store Builder", bn: "স্টোর বিল্ডার" },
        description: {
          en: "Showcase your catalog on mobile-first responsive storefront themes.",
          bn: "মোবাইল-বান্ধব থিমে আপনার ক্যাটালগ সুন্দরভাবে উপস্থাপন করুন।",
        },
        icon: Store,
      },
      {
        slug: "order-management",
        name: { en: "Order Management", bn: "অর্ডার ম্যানেজমেন্ট" },
        description: {
          en: "Process customer purchases and track fulfillment status seamlessly.",
          bn: "ক্রেতাদের অর্ডার প্রসেস করুন এবং ডেলিভারি ট্র্যাক করুন।",
        },
        icon: ShoppingBag,
      },
    ],
    planAvailability: {
      starter: {
        en: "Up to 100 Products with standard variants",
        bn: "১০০টি প্রোডাক্ট পর্যন্ত স্ট্যান্ডার্ড ভ্যারিয়েন্টসহ",
      },
      growth: {
        en: "Up to 2,500 Products with advanced variant matrix",
        bn: "২,৫০০টি প্রোডাক্ট পর্যন্ত উন্নত ভ্যারিয়েন্ট ম্যাট্রিক্সসহ",
      },
      scale: {
        en: "Unlimited Products with priority bulk catalog tools",
        bn: "সীমাহীন প্রোডাক্ট এবং বাল্ক ক্যাটালগ ম্যানেজমেন্ট সুবিধা",
      },
      note: {
        en: "All plans include high-resolution media hosting and SEO metadata controls.",
        bn: "সকল প্ল্যানেই হাই-রেজোলিউশন ইমেজ হোস্টিং এবং এসইও কন্ট্রোল অন্তর্ভুক্ত।",
      },
    },
    faqs: [
      {
        id: "pm-faq-1",
        question: {
          en: "How many variants can I create for a single product?",
          bn: "একটি প্রোডাক্টের কতগুলো ভ্যারিয়েন্ট তৈরি করা যায়?",
        },
        answer: {
          en: "CartX allows combining multiple options such as Size, Color, and Material into dedicated SKUs with their own pricing and inventory count.",
          bn: "কার্টএক্সে সাইজ, রঙ এবং উপাদান মিলিয়ে একাধিক অপশন যুক্ত করা যায় এবং প্রতিটির জন্য আলাদা দাম ও স্টক নির্ধারণ করা সম্ভব।",
        },
      },
      {
        id: "pm-faq-2",
        question: {
          en: "Can I set a discounted sale price on products?",
          bn: "প্রোডাক্টে কি ডিসকাউন্ট বা অফার মূল্য সেট করা যাবে?",
        },
        answer: {
          en: "Yes. Enter a retail price alongside a higher compare-at price. The storefront will automatically display the discount badge and crossed-out original price.",
          bn: "হ্যাঁ, সাধারণ বিক্রয়মূল্যের পাশাপাশি আগের কম্পেয়ার-অ্যাট মূল্য বসালে ওয়েবসাইটে স্বয়ংক্রিয়ভাবে ডিসকাউন্ট স্টিকার ও কাটা দাগ প্রদর্শিত হবে।",
        },
      },
      {
        id: "pm-faq-3",
        question: {
          en: "Are product images automatically optimized for mobile?",
          bn: "প্রোডাক্টের ছবিগুলো কি মোবাইলের জন্য অপটিমাইজ করা হয়?",
        },
        answer: {
          en: "Yes. CartX automatically optimizes uploaded images to deliver crisp visuals on retina screens without slowing down mobile page load times.",
          bn: "হ্যাঁ, কার্টএক্স আপলোড করা ছবিগুলো স্বয়ংক্রিয়ভাবে কম্প্রেস ও অপটিমাইজ করে যাতে মোবাইল ইন্টারনেটেও দ্রুত লোড হয়।",
        },
      },
      {
        id: "pm-faq-4",
        question: {
          en: "Can I organize products into categories and collections?",
          bn: "প্রোডাক্টগুলোকে কি ক্যাটাগরি বা কালেকশনে সাজানো যায়?",
        },
        answer: {
          en: "Yes. You can assign products to multiple categories, featured collections, and seasonal sales for intuitive storefront navigation.",
          bn: "হ্যাঁ, আপনি ইচ্ছামতো ক্যাটাগরি, সাব-ক্যাটাগরি এবং স্পেশাল কালেকশন তৈরি করে প্রোডাক্ট সাজাতে পারবেন।",
        },
      },
    ],
    cta: {
      eyebrow: {
        en: "Ready to Sell Online?",
        bn: "অনলাইনে বিক্রি শুরু করতে প্রস্তুত?",
      },
      title: {
        en: "Launch Your Product Catalog with CartX.",
        bn: "কার্টএক্সে আপনার প্রোডাক্ট ক্যাটালগ শুরু করুন আজই।",
      },
      description: {
        en: "Organize products, showcase variants, and start accepting customer orders with complete inventory synchronization.",
        bn: "আপনার সব পণ্য সুন্দরভাবে সাজিয়ে আজই ক্রেতাদের অর্ডার নেওয়া শুরু করুন।",
      },
      buttonText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      trustNote: {
        en: "Zero technical setup required. Free trial available.",
        bn: "কোনো টেকনিক্যাল জটিলতা নেই। সহজ ও দ্রুত শুরু করা যায়।",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Order Management
  // ─────────────────────────────────────────────────────────────
  "order-management": {
    slug: "order-management",
    name: {
      en: "Order Management",
      bn: "অর্ডার ম্যানেজমেন্ট",
    },
    eyebrow: {
      en: "Order Fulfillment & Tracking",
      bn: "অর্ডার প্রসেসিং ও ট্র্যাকিং",
    },
    icon: ShoppingBag,
    status: "available",
    seo: {
      title: "Order Management",
      description:
        "Manage every order in one central place. Organize orders, monitor status changes, verify payments, and coordinate courier fulfillment with CartX.",
    },
    hero: {
      titlePlain: {
        en: "Manage Every Order",
        bn: "সব অর্ডার পরিচালনা করুন",
      },
      titleHighlight: {
        en: "in One Central Place.",
        bn: "এক কেন্দ্রীয় ড্যাশবোর্ডে।",
      },
      description: {
        en: "Organize order information, monitor status changes and coordinate fulfillment from a centralized merchant dashboard.",
        bn: "অর্ডারের সব তথ্য সংরক্ষণ করুন, স্ট্যাটাস পরিবর্তন পর্যবেক্ষণ করুন এবং সেন্ট্রাল ড্যাশবোর্ড থেকে সহজেই ডেলিভারি সম্পন্ন করুন।",
      },
      primaryCtaText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      secondaryCtaText: {
        en: "View Capabilities",
        bn: "সুবিধাসমূহ দেখুন",
      },
    },
    problem: {
      eyebrow: {
        en: "Fulfillment Chaos",
        bn: "ডেলিভারি ও অর্ডারের বিশৃঙ্খলা",
      },
      title: {
        en: "Scattered orders lead to delivery delays and customer disputes.",
        bn: "বিভিন্ন প্ল্যাটফর্মে ছড়ানো অর্ডার ডেলিভারিতে বিলম্ব এবং ক্রেতাদের অসন্তোষ বাড়ায়।",
      },
      description: {
        en: "Receiving customer orders across phone calls, inbox messages, and manual notes causes duplicate entries, unverified payments, and untracked courier parcels.",
        bn: "ইনবক্স মেসেজ, ফোন কল এবং নোটপ্যাডে অর্ডার রাখলে প্রায়ই অর্ডার মিস হয়, ভুল ঠিকানায় পার্সেল যায় এবং পেমেন্ট ট্র্যাকিং করা অসম্ভব হয়ে পড়ে।",
      },
      bulletPoints: [
        {
          en: "Missed orders and slow response times frustrating shoppers",
          bn: "সময়মতো অর্ডার কনফার্ম না করায় ক্রেতারা অর্ডার বাতিল করে",
        },
        {
          en: "Manual data re-entry into courier apps causing address typos",
          bn: "কুরিয়ার পোর্টালে বারবার ঠিকানা টাইপ করার সময় ভুল হয়",
        },
        {
          en: "Zero unified audit trail when tracking payment or delivery issues",
          bn: "পেমেন্ট বা ডেলিভারি জটিলতা হলে কোনো সমন্বিত হিসেব পাওয়া যায় না",
        },
      ],
    },
    explanation: {
      eyebrow: {
        en: "The CartX Solution",
        bn: "কার্টএক্স সমাধান",
      },
      title: {
        en: "A unified pipeline from checkout to doorstep delivery.",
        bn: "চেকআউট থেকে দোরগোড়ায় ডেলিভারি পর্যন্ত এক সমন্বিত পাইপলাইন।",
      },
      description: {
        en: "CartX consolidates every web and mobile order into a real-time fulfillment stream. Filter by payment status, generate print-ready packing slips, and dispatch directly to courier services without re-entering data.",
        bn: "কার্টএক্সে প্রতিটি অর্ডার রিয়েল-টাইমে জমা হয়। পেমেন্ট স্ট্যাটাস যাচাই, ইনভয়েস প্রিন্ট এবং সরাসরি কুরিয়ারে পার্সেল বুকিং—সবকিছু এক ক্লিকেই সম্ভব।",
      },
      highlightPill: {
        en: "Streamlined Order Pipeline",
        bn: "স্বচ্ছ অর্ডার প্রসেসিং",
      },
    },
    capabilities: [
      {
        icon: ShoppingBag,
        title: {
          en: "Centralized Order Stream & Filters",
          bn: "সমন্বিত অর্ডার লিস্ট ও ফিল্টার",
        },
        description: {
          en: "Sort and filter orders by payment state (Paid, Unpaid, COD), fulfillment stage, and date ranges.",
          bn: "পেমেন্ট স্ট্যাটাস (পেইড, সিওডি), ডেলিভারি পর্যায় ও তারিখ অনুযায়ী দ্রুত ফিল্টার করুন।",
        },
      },
      {
        icon: FileText,
        title: {
          en: "Itemized Invoices & Packing Slips",
          bn: "আইটেমভিত্তিক ইনভয়েস ও প্যাকিং স্লিপ",
        },
        description: {
          en: "Generate printable commercial invoices with store branding, item breakdowns, and customer notes.",
          bn: "স্টোরের লোগো, পণ্যের তালিকা এবং মূল্যসহ প্রিন্ট-উপযোগী ইনভয়েস মুহূর্তেই তৈরি করুন।",
        },
      },
      {
        icon: ShieldCheck,
        title: {
          en: "Payment Verification Tracking",
          bn: "পেমেন্ট ভেরিফিকেশন ও ট্র্যাকিং",
        },
        description: {
          en: "Inspect bKash/Nagad transaction traces, card authorizations, or Cash on Delivery collections.",
          bn: "বিকাশ, নগদ, কার্ড বা ক্যাশ অন ডেলিভারি পেমেন্টের স্বচ্ছ বিবরণ এক ক্লিকে যাচাই করুন।",
        },
      },
      {
        icon: Truck,
        title: {
          en: "Integrated Courier Booking",
          bn: "কুরিয়ার পার্সেল বুকিং",
        },
        description: {
          en: "Dispatch orders directly to courier partners (Pathao, Steadfast) with automated consignment IDs.",
          bn: "পাঠাও ও স্টিডফাস্ট কুরিয়ারে সরাসরি বুকিং দিয়ে কনসাইনমেন্ট আইডি সংযুক্ত করুন।",
        },
      },
      {
        icon: Clock,
        title: {
          en: "Timestamped Order Audit Trail",
          bn: "অর্ডার হিস্ট্রি ও টাইমস্ট্যাম্প লগ",
        },
        description: {
          en: "Track every status transition—Placed, Confirmed, Dispatched, Delivered—with historical logs.",
          bn: "অর্ডার গ্রহণ থেকে ডেলিভারি পর্যন্ত প্রতিটি পরিবর্তনের টাইমস্ট্যাম্প করা ইতিহাস সংরক্ষিত থাকে।",
        },
      },
      {
        icon: Users,
        title: {
          en: "Customer Contact & Shipping Details",
          bn: "গ্রাহকের ঠিকানা ও যোগাযোগের তথ্য",
        },
        description: {
          en: "Quickly view delivery addresses, special customer instructions, and one-click phone dial shortcuts.",
          bn: "ডেলিভারি ঠিকানা, বিশেষ নির্দেশনা এবং সরাসরি ফোন কলের সুবিধা এক নজরে দেখুন।",
        },
      },
    ],
    workflow: [
      {
        stepNumber: 1,
        title: {
          en: "Order Received",
          bn: "নতুন অর্ডার প্রাপ্তি",
        },
        description: {
          en: "Customer checks out on your storefront and order appears instantly in the pending queue.",
          bn: "ক্রেতা অর্ডার সম্পন্ন করার সাথে সাথেই তা নতুন অর্ডার হিসেবে ড্যাশবোর্ডে জমা হয়।",
        },
      },
      {
        stepNumber: 2,
        title: {
          en: "Verify & Print Slip",
          bn: "যাচাই ও ইনভয়েস প্রিন্ট",
        },
        description: {
          en: "Confirm payment or COD validity, print the packing slip, and prepare the package.",
          bn: "পেমেন্ট বা সিওডি যাচাই করে ইনভয়েস প্রিন্ট করুন এবং পার্সেল প্রস্তুত করুন।",
        },
      },
      {
        stepNumber: 3,
        title: {
          en: "Dispatch to Courier",
          bn: "কুরিয়ারে বুকিং দিন",
        },
        description: {
          en: "Book courier pickup with one click and generate the automated tracking number.",
          bn: "এক ক্লিকেই কুরিয়ারে বুকিং দিন এবং পার্সেল ট্র্যাকিং নম্বর সংগ্রহ করুন।",
        },
      },
      {
        stepNumber: 4,
        title: {
          en: "Mark Delivered & Reconcile",
          bn: "ডেলিভারি সম্পন্ন ও হিসেব",
        },
        description: {
          en: "Track parcel completion and reconcile COD payments seamlessly with sales records.",
          bn: "ডেলিভারি নিশ্চিত হলে স্ট্যাটাস কমপ্লিট করুন এবং ক্যাশ হিসেব সমন্বয় করুন।",
        },
      },
    ],
    visual: {
      title: {
        en: "Order Processing & Fulfillment Timeline",
        bn: "অর্ডার প্রসেসিং ও ডেলিভারি টাইমলাইন",
      },
      caption: {
        en: "CartX Order Processing timeline and courier assignment console (Illustrative demo data).",
        bn: "কার্টএক্স অর্ডার প্রসেসিং টাইমলাইন এবং কুরিয়ার অ্যাসাইনমেন্ট প্রিভিউ (ডেমো ডেটা ভিত্তিক)।",
      },
      render: (t) => <OrdersMockup t={t} notice="Illustrative demo data" />,
    },
    benefits: [
      {
        icon: CheckCircle2,
        title: {
          en: "Zero Order Leakage",
          bn: "অর্ডার হারানোর কোনো ঝুঁকি নেই",
        },
        description: {
          en: "Every customer purchase is centralized with complete item, contact, and payment history.",
          bn: "প্রতিটি অর্ডারের সঠিক বিবরণ ও গ্রাহকের তথ্য সিস্টেমে সুরক্ষিত থাকে।",
        },
      },
      {
        icon: Zap,
        title: {
          en: "Faster Dispatch Time",
          bn: "দ্রুততম সময়ে পার্সেল প্রেরণ",
        },
        description: {
          en: "Cut dispatch turnaround from days to hours with one-click courier bookings.",
          bn: "কুরিয়ার পোর্টালে আলাদা করে টাইপ না করে এক ক্লিকেই পার্সেল বুক করা যায়।",
        },
      },
      {
        icon: Users,
        title: {
          en: "Fewer Customer Queries",
          bn: "ক্রেতাদের ফোন বা বার্তার চাপ কমায়",
        },
        description: {
          en: "Transparent tracking numbers keep customers informed without constant WhatsApp calls.",
          bn: "ট্র্যাকিং লিংক থাকায় ক্রেতারা নিজেরাই পার্সেলের অগ্রগতি দেখতে পান।",
        },
      },
      {
        icon: ShieldCheck,
        title: {
          en: "Team Accountability",
          bn: "টিম মেম্বারদের কাজের স্বচ্ছতা",
        },
        description: {
          en: "Clear status records show exactly when an order was confirmed, packed, and shipped.",
          bn: "কোন কর্মী কখন অর্ডার প্যাক ও ডিসপ্যাচ করলেন তা স্পষ্ট রেকর্ডে দেখা যায়।",
        },
      },
    ],
    relatedFeatures: [
      {
        slug: "inventory-management",
        name: { en: "Inventory Management", bn: "ইনভেন্টরি ম্যানেজমেন্ট" },
        description: {
          en: "Automatic stock deduction upon customer checkout.",
          bn: "অর্ডার সম্পন্ন হওয়ার সাথে সাথে স্বয়ংক্রিয় স্টক হ্রাস।",
        },
        icon: Boxes,
      },
      {
        slug: "shipping",
        name: { en: "Shipping & Delivery", bn: "শিপিং ও ডেলিভারি" },
        description: {
          en: "Automated courier dispatch with Pathao and Steadfast.",
          bn: "পাঠাও ও স্টিডফাস্ট কুরিয়ারের মাধ্যমে স্বয়ংক্রিয় ডেলিভারি।",
        },
        icon: Truck,
      },
      {
        slug: "payment-management",
        name: { en: "Payment Management", bn: "পেমেন্ট ম্যানেজমেন্ট" },
        description: {
          en: "Direct bKash, Nagad, card, and COD verification.",
          bn: "বিকাশ, নগদ, কার্ড ও ক্যাশ অন ডেলিভারি পেমেন্ট যাচাই।",
        },
        icon: CreditCard,
      },
    ],
    planAvailability: {
      starter: {
        en: "Core order stream, manual statuses, COD tracking",
        bn: "মূল অর্ডার লিস্ট, ম্যানুয়াল স্ট্যাটাস ও সিওডি ট্র্যাকিং",
      },
      growth: {
        en: "Automated courier booking, printable invoices, audit logs",
        bn: "স্বয়ংক্রিয় কুরিয়ার বুকিং, প্রিন্ট-ইনভয়েস ও হিস্ট্রি লগ",
      },
      scale: {
        en: "Priority order workflows, bulk dispatch, multi-staff access",
        bn: "উন্নত বাল্ক প্রসেসিং, মাল্টি-স্টাফ অ্যাকাউন্ট ও প্রায়োরিটি ডিসপ্যাচ",
      },
      note: {
        en: "All plans include unlimited order processing without per-transaction platform penalties.",
        bn: "সকল প্ল্যানেই অর্ডারের ওপর কোনো অতিরিক্ত প্ল্যাটফর্ম চার্জ নেই।",
      },
    },
    faqs: [
      {
        id: "om-faq-1",
        question: {
          en: "How do orders appear in the dashboard?",
          bn: "অর্ডারগুলো ড্যাশবোর্ডে কীভাবে জমা হয়?",
        },
        answer: {
          en: "The moment a customer places an order on your web storefront or mobile app, it appears in your Order Management queue in real time.",
          bn: "ক্রেতা ওয়েবসাইটে চেকআউট করার সাথে সাথেই ড্যাশবোর্ডে রিয়েল-টাইমে অর্ডারটির বিস্তারিত চলে আসে।",
        },
      },
      {
        id: "om-faq-2",
        question: {
          en: "Can I print invoices directly from the order page?",
          bn: "অর্ডার পেজ থেকে কি সরাসরি ইনভয়েস প্রিন্ট করা যায়?",
        },
        answer: {
          en: "Yes. CartX generates clean, branded invoices with item breakdowns, pricing, and shipping addresses ready for standard desktop or thermal printers.",
          bn: "হ্যাঁ, আপনার স্টোরের লোগো এবং অর্ডারের সম্পূর্ণ বিবরণসহ সরাসরি প্রিন্ট করার মতো ইনভয়েস তৈরি করা যায়।",
        },
      },
      {
        id: "om-faq-3",
        question: {
          en: "Can I connect courier services to dispatch parcels?",
          bn: "পার্সেল পাঠানোর জন্য কি কুরিয়ার সার্ভিস কানেক্ট করা যায়?",
        },
        answer: {
          en: "Yes. Supported plans connect directly to Pathao and Steadfast Courier APIs, allowing one-click parcel consignment creation directly from the order screen.",
          bn: "হ্যাঁ, অনুমোদিত প্ল্যানে পাঠাও ও স্টিডফাস্ট কুরিয়ার সরাসরি যুক্ত করে এক ক্লিকে পার্সেল বুকিং দেওয়া যায়।",
        },
      },
      {
        id: "om-faq-4",
        question: {
          en: "What happens if a customer cancels an order?",
          bn: "কোনো ক্রেতা অর্ডার বাতিল করলে কী ঘটে?",
        },
        answer: {
          en: "You can update the order status to Cancelled. If inventory was deducted, CartX allows restocking items back to your active catalog with one click.",
          bn: "আপনি স্ট্যাটাস ক্যান্সেল করতে পারেন এবং এক ক্লিকেই পূর্বের স্টকটি পুনরায় ক্যাটালগে ফিরিয়ে আনতে পারেন।",
        },
      },
    ],
    cta: {
      eyebrow: {
        en: "Streamline Your Operations",
        bn: "অর্ডার প্রসেসিং সহজ করুন",
      },
      title: {
        en: "Take Full Control of Your Orders Today.",
        bn: "আপনার সব অর্ডার পরিচালনা করুন নিশ্চিন্তে।",
      },
      description: {
        en: "Stop losing orders in chat messages. Manage fulfillment with clarity and speed.",
        bn: "মেসেজে অর্ডার খোঁজার দিন শেষ। এক ড্যাশবোর্ডেই নিয়ন্ত্রণ করুন সম্পূর্ণ ব্যবসা।",
      },
      buttonText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      trustNote: {
        en: "Built for Bangladeshi e-commerce merchants and growing brands.",
        bn: "বাংলাদেশের ই-কমার্স উদ্যোক্তা ও ক্রমবর্ধমান ব্র্যান্ডের জন্য তৈরি।",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Inventory Management
  // ─────────────────────────────────────────────────────────────
  "inventory-management": {
    slug: "inventory-management",
    name: {
      en: "Inventory Management",
      bn: "ইনভেন্টরি ম্যানেজমেন্ট",
    },
    eyebrow: {
      en: "Stock Visibility & Control",
      bn: "স্টক ট্র্যাকিং ও নিয়ন্ত্রণ",
    },
    icon: Boxes,
    status: "available",
    seo: {
      title: "Inventory Management",
      description:
        "Real-time stock visibility and control. Prevent overselling, track SKU variants, and receive low-stock alerts with CartX inventory management.",
    },
    hero: {
      titlePlain: {
        en: "Real-Time Stock Visibility",
        bn: "রিয়েল-টাইম স্টক ট্র্যাকিং",
      },
      titleHighlight: {
        en: "Without the Guesswork.",
        bn: "নির্ভুল ইনভেন্টরি কন্ট্রোল।",
      },
      description: {
        en: "Keep accurate inventory counts across all products and variants, prevent overselling, and receive automated low-stock warnings before running out.",
        bn: "সকল পণ্য ও ভ্যারিয়েন্টের স্টক সংখ্যা নির্ভুলভাবে ট্র্যাক করুন, স্টক শেষ হওয়ার আগেই অ্যালার্ট পান এবং অতিরিক্ত বিক্রি বন্ধ রাখুন।",
      },
      primaryCtaText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      secondaryCtaText: {
        en: "View Capabilities",
        bn: "সুবিধাসমূহ দেখুন",
      },
    },
    problem: {
      eyebrow: {
        en: "Inventory Blindspots",
        bn: "ইনভেন্টরির জটিলতা",
      },
      title: {
        en: "Overselling out-of-stock items damages customer trust.",
        bn: "স্টক না থাকা পণ্য বিক্রি করা ক্রেতার আস্থা নষ্ট করে।",
      },
      description: {
        en: "Manually counting stock across physical stores and online channels results in backorders, cancelled purchases, and tied-up working capital in slow-moving items.",
        bn: "ম্যানুয়ালি স্টক গণনা করার কারণে স্টকে না থাকা পণ্য বিক্রি হয়ে যায়, যার ফলে অর্ডার বাতিল ও রিফান্ড করতে হয় এবং ব্যবসার সুনাম ক্ষুণ্ণ হয়।",
      },
      bulletPoints: [
        {
          en: "Selling items that are out of stock, forcing embarrassing order cancellations",
          bn: "স্টক শেষ হওয়া সত্ত্বেও অর্ডার নেওয়ার কারণে অপ্রীতিকর ক্যান্সেল করতে হয়",
        },
        {
          en: "Capital trapped in unsold dead stock while bestsellers run out",
          bn: "জনপ্রিয় আইটেম দ্রুত শেষ হলেও অচল পণ্যে পুঁজি আটকে থাকে",
        },
        {
          en: "Hours wasted conducting manual paper audits after every flash sale",
          bn: "প্রতিটি ক্যাম্পেইনের পর হাতে কলমে স্টক মেলাতে দীর্ঘ সময় ব্যয় হয়",
        },
      ],
    },
    explanation: {
      eyebrow: {
        en: "The CartX Solution",
        bn: "কার্টএক্স সমাধান",
      },
      title: {
        en: "Automated stock synchronization tied directly to checkout.",
        bn: "চেকআউটের সাথে সরাসরি সংযুক্ত স্বয়ংক্রিয় স্টক সিঙ্ক।",
      },
      description: {
        en: "CartX automatically reserves and deducts inventory the instant an order is placed. Set safety thresholds, monitor stock velocity, and eliminate overselling permanently.",
        bn: "অর্ডার কনফার্ম হওয়ার সাথে সাথে কার্টএক্স নিজে থেকেই ইনভেন্টরি কমিয়ে দেয়। সেফটি থ্রেশহোল্ড সেট করে স্টক ফুরিয়ে যাওয়ার আগেই অ্যালার্ট পান।",
      },
      highlightPill: {
        en: "Real-Time Stock Sync",
        bn: "স্বয়ংক্রিয় স্টক নিয়ন্ত্রণ",
      },
    },
    capabilities: [
      {
        icon: Boxes,
        title: {
          en: "Instant Checkout Deduction",
          bn: "স্বয়ংক্রিয় স্টক কর্তন",
        },
        description: {
          en: "Inventory counts adjust in real time upon verified customer checkout, preventing double-selling.",
          bn: "অর্ডার করার মুহূর্তেই ক্যাটালগ থেকে পণ্য সংখ্যা আপডেট হয়ে যায়, যাতে ডাবল-অর্ডারের সুযোগ না থাকে।",
        },
      },
      {
        icon: Sliders,
        title: {
          en: "SKU & Variant-Level Tracking",
          bn: "এসকেইউ ও ভ্যারিয়েন্ট ট্র্যাকিং",
        },
        description: {
          en: "Monitor precise counts for every individual size, color, and option independently.",
          bn: "প্রতিটি সাইজ ও কালার ভ্যারিয়েন্টের জন্য আলাদা আলাদা স্টক সংখ্যা ট্র্যাক করুন।",
        },
      },
      {
        icon: Clock,
        title: {
          en: "Low-Stock Alert Thresholds",
          bn: "লো-স্টক সতর্কবার্তা",
        },
        description: {
          en: "Configure minimum safety buffers to receive proactive warnings before items completely sell out.",
          bn: "নির্ধারিত সীমার নিচে পণ্য নেমে গেলেই ড্যাশবোর্ডে স্পষ্ট সতর্কতা দেখতে পাবেন।",
        },
      },
      {
        icon: Lock,
        title: {
          en: "Automatic Out-of-Stock Badges",
          bn: "আউট-অব-স্টক প্রতিরোধ",
        },
        description: {
          en: "Storefront automatically marks exhausted items as unavailable, disabling purchase attempts.",
          bn: "স্টক শূন্য হয়ে গেলে ওয়েবসাইটে স্বয়ংক্রিয়ভাবে স্টক-আউট প্রদর্শন করে নতুন ক্রয় আটকে দেয়।",
        },
      },
      {
        icon: CheckCircle2,
        title: {
          en: "Quick Manual Adjustments",
          bn: "সহজ ম্যানুয়াল অ্যাডজাস্টমেন্ট",
        },
        description: {
          en: "Easily log new warehouse shipments, returns, and inventory write-offs in seconds.",
          bn: "নতুন মালামাল গ্রহণ, কাস্টমার রিটার্ন কিংবা ক্ষতিপূরণ সহজে এক ক্লিকে আপডেট করুন।",
        },
      },
      {
        icon: ShieldCheck,
        title: {
          en: "Inventory Movement History",
          bn: "ইনভেন্টরি মুভমেন্ট হিস্ট্রি",
        },
        description: {
          en: "Keep a transparent historical audit of every stock addition, deduction, and manual edit.",
          bn: "প্রতিটি স্টক পরিবর্তন কার মাধ্যমে এবং কেন হয়েছে তার স্পষ্ট হিসাব সংরক্ষিত থাকে।",
        },
      },
    ],
    workflow: [
      {
        stepNumber: 1,
        title: {
          en: "Set Initial Stock Counts",
          bn: "প্রাথমিক স্টক সংখ্যা দিন",
        },
        description: {
          en: "Assign opening stock quantities and SKU identifiers to products and variants.",
          bn: "প্রোডাক্ট তৈরির সময় প্রতিটি ভ্যারিয়েন্টের প্রাথমিক স্টক সংখ্যা নির্ধারণ করুন।",
        },
      },
      {
        stepNumber: 2,
        title: {
          en: "Automatic Deduction",
          bn: "অর্ডারে স্বয়ংক্রিয় হ্রাস",
        },
        description: {
          en: "As shoppers purchase online, the available balance decrements immediately.",
          bn: "ক্রেতারা অনলাইনে কেনাকাটা করার সাথে সাথেই স্টক থেকে সেই সংখ্যা বিয়োগ হয়ে যায়।",
        },
      },
      {
        stepNumber: 3,
        title: {
          en: "Low-Stock Trigger",
          bn: "লো-স্টক অ্যালার্ট প্রাপ্তি",
        },
        description: {
          en: "When inventory breaches your threshold, the system flags the SKU for replenishment.",
          bn: "নির্ধারিত সংখ্যার নিচে নামলেই ড্যাশবোর্ডে রি-স্টক করার নোটিফিকেশন দেখতে পাবেন।",
        },
      },
      {
        stepNumber: 4,
        title: {
          en: "Replenish & Sync",
          bn: "নতুন স্টক রিলোড করুন",
        },
        description: {
          en: "Add incoming batches to restore live availability across your storefront instantly.",
          bn: "নতুন মালামাল এলে সংখ্যা যোগ করে দিন, যা সাথে সাথে স্টোরে লাইভ হয়ে যাবে।",
        },
      },
    ],
    visual: {
      title: {
        en: "Centralized Warehouse Inventory Console",
        bn: "কেন্দ্রীয় ওয়্যারহাউস ইনভেন্টরি কনসোল",
      },
      caption: {
        en: "CartX stock levels and low-stock threshold warning panel (Illustrative demo data).",
        bn: "কার্টএক্স ইনভেন্টরি লেভেল এবং লো-স্টক সতর্কবার্তা প্যানেল (ডেমো ডেটা ভিত্তিক)।",
      },
      render: (t) => (
        <InventoryControlMockup t={t} notice="Illustrative demo data" />
      ),
    },
    benefits: [
      {
        icon: ShieldCheck,
        title: {
          en: "Zero Overselling Risk",
          bn: "অতিরিক্ত বিক্রির ঝুঁকি শূন্য",
        },
        description: {
          en: "Never accept customer payments for items that you cannot fulfill.",
          bn: "স্টকে নেই এমন পণ্যের জন্য পেমেন্ট নেওয়ার ভুল একেবারেই বন্ধ হবে।",
        },
      },
      {
        icon: TrendingUp,
        title: {
          en: "Optimized Working Capital",
          bn: "কার্যকরী পুঁজি ব্যবস্থাপনা",
        },
        description: {
          en: "Focus inventory investment on fast-moving bestsellers rather than slow-moving stock.",
          bn: "যে পণ্যগুলো দ্রুত বিক্রি হয় সেগুলোতে বেশি বিনিয়োগ করে লাভ বাড়ান।",
        },
      },
      {
        icon: Zap,
        title: {
          en: "Save Hours Weekly",
          bn: "সাপ্তাহিক কর্মঘণ্টা সাশ্রয়",
        },
        description: {
          en: "Eliminate manual stock counting spreadsheets with automated transaction tracking.",
          bn: "খাতায় লিখে স্টক মেলানোর পেছনে সময় নষ্ট না করে ব্যবসায় মনোযোগ দিন।",
        },
      },
      {
        icon: Users,
        title: {
          en: "Protected Customer Trust",
          bn: "ক্রেতার সন্তুষ্টি ও আস্থা",
        },
        description: {
          en: "Shoppers receive exactly what they ordered without surprise cancellation notices.",
          bn: "ক্রেতারা যা অর্ডার করেছেন ঠিক সেটাই হাতে পান, কোনো অপ্রত্যাশিত ক্যান্সেল ছাড়া।",
        },
      },
    ],
    relatedFeatures: [
      {
        slug: "product-management",
        name: { en: "Product Management", bn: "প্রোডাক্ট ম্যানেজমেন্ট" },
        description: {
          en: "Create multi-attribute products with variant matrices.",
          bn: "ভ্যারিয়েন্টসহ সম্পূর্ণ প্রোডাক্ট ক্যাটালগ তৈরি করুন।",
        },
        icon: Package,
      },
      {
        slug: "order-management",
        name: { en: "Order Management", bn: "অর্ডার ম্যানেজমেন্ট" },
        description: {
          en: "Manage customer order fulfillment and status pipelines.",
          bn: "অর্ডার প্রসেসিং ও ডেলিভারি পাইপলাইন পরিচালনা করুন।",
        },
        icon: ShoppingBag,
      },
      {
        slug: "analytics",
        name: { en: "Reports & Analytics", bn: "রিপোর্ট ও অ্যানালিটিক্স" },
        description: {
          en: "Analyze product sales velocity and top-performing items.",
          bn: "কোন পণ্যটি দ্রুত বিক্রি হচ্ছে তা অ্যানালিটিক্সে দেখুন।",
        },
        icon: BarChart3,
      },
    ],
    planAvailability: {
      starter: {
        en: "Basic stock tracking up to 100 products",
        bn: "১০০টি প্রোডাক্ট পর্যন্ত বেসিক স্টক ট্র্যাকিং",
      },
      growth: {
        en: "Variant tracking, low-stock alerts up to 2,500 products",
        bn: "২,৫০০টি প্রোডাক্ট পর্যন্ত ভ্যারিয়েন্ট ট্র্যাকিং ও লো-স্টক অ্যালার্ট",
      },
      scale: {
        en: "Unlimited products, multi-warehouse support, priority logs",
        bn: "সীমাহীন পণ্য, মাল্টি-ওয়্যারহাউস সাপোর্ট ও প্রায়োরিটি লগ",
      },
      note: {
        en: "Automated checkout deduction is active across all subscription tiers.",
        bn: "চেকআউটে স্বয়ংক্রিয় স্টক কর্তন সকল প্ল্যানেই সক্রিয় থাকে।",
      },
    },
    faqs: [
      {
        id: "im-faq-1",
        question: {
          en: "Does inventory decrease automatically when an order is placed?",
          bn: "অর্ডার হওয়ার সাথে সাথেই কি স্টক কমে যায়?",
        },
        answer: {
          en: "Yes. The instant a shopper completes checkout on your store, the corresponding variant stock is deducted to prevent duplicate purchases.",
          bn: "হ্যাঁ, ক্রেতা অর্ডার প্লেস করার মুহূর্তেই স্বয়ংক্রিয়ভাবে নির্দিষ্ট ভ্যারিয়েন্টের স্টক কমে যায়।",
        },
      },
      {
        id: "im-faq-2",
        question: {
          en: "Can I set different low-stock warnings for different items?",
          bn: "বিভিন্ন পণ্যের জন্য কি আলাদা লো-স্টক সতর্কবার্তা সেট করা যায়?",
        },
        answer: {
          en: "Yes. You can customize safety thresholds per item so fast-moving goods notify you well in advance of depletion.",
          bn: "হ্যাঁ, আপনি পণ্যের গুরুত্ব অনুযায়ী আলাদা সেফটি থ্রেশহোল্ড সেট করে রাখতে পারবেন।",
        },
      },
      {
        id: "im-faq-3",
        question: {
          en: "What happens when an item reaches zero stock?",
          bn: "পণ্যের স্টক শূন্য হয়ে গেলে কী হয়?",
        },
        answer: {
          en: "By default, CartX marks the item as Out of Stock on the storefront and disables checkout, preventing customers from ordering unavailable stock.",
          bn: "স্টক শূন্য হলে ওয়েবসাইটে আউট-অব-স্টক নোটিশ দেখায় এবং ক্রেতা সেটি কার্টে যোগ করতে পারেন না।",
        },
      },
      {
        id: "im-faq-4",
        question: {
          en: "Can I adjust inventory counts manually?",
          bn: "আমি কি নিজে থেকে স্টক সংখ্যা পরিবর্তন করতে পারব?",
        },
        answer: {
          en: "Yes. You can update quantities at any time when new shipments arrive or when processing customer returns.",
          bn: "হ্যাঁ, নতুন মালামাল আসলে বা কাস্টমার রিটার্ন হলে যেকোনো সময় স্টক সংখ্যা বাড়ানো বা কমানো যায়।",
        },
      },
    ],
    cta: {
      eyebrow: {
        en: "Never Oversell Again",
        bn: "স্টক ম্যানেজমেন্ট হোক নিখুঁত",
      },
      title: {
        en: "Automate Your Inventory with CartX.",
        bn: "কার্টএক্সের সাথে ইনভেন্টরি ট্র্যাকিং সহজ করুন।",
      },
      description: {
        en: "Keep stock accurate in real time, receive low-stock warnings, and protect customer trust.",
        bn: "স্টক ফুরিয়ে যাওয়ার আগেই অ্যালার্ট পান এবং গ্রাহকদের সেরা সেবা দিন।",
      },
      buttonText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      trustNote: {
        en: "Automatic stock deduction active on all plans.",
        bn: "সকল প্ল্যানেই স্বয়ংক্রিয় স্টক কর্তন সক্রিয়।",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Store Builder
  // ─────────────────────────────────────────────────────────────
  "store-builder": {
    slug: "store-builder",
    name: {
      en: "Store Builder",
      bn: "স্টোর বিল্ডার",
    },
    eyebrow: {
      en: "Storefronts & Themes",
      bn: "স্টোরফ্রন্ট ও থিম কাস্টমাইজেশন",
    },
    icon: Store,
    status: "available",
    seo: {
      title: "Store Builder",
      description:
        "Build a fast, mobile-first e-commerce storefront with custom domain support, brand color personalization, and optimized checkout using CartX.",
    },
    hero: {
      titlePlain: {
        en: "Build Your Online Store",
        bn: "তৈরি করুন ব্র্যান্ডেড স্টোর",
      },
      titleHighlight: {
        en: "Exactly the Way You Want.",
        bn: "কোনো কোডিং ছাড়াই।",
      },
      description: {
        en: "Design a fast, responsive, mobile-first storefront with customizable brand colors, custom domain support, and optimized checkout pages.",
        bn: "মোবাইল-বান্ধব থিম, কাস্টম ডোমেইন সাপোর্ট এবং ব্র‍্যান্ড কালার কাস্টমাইজেশন সহ তৈরি করুন বিশ্বমানের প্রফেশনাল অনলাইন শপ।",
      },
      primaryCtaText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      secondaryCtaText: {
        en: "View Capabilities",
        bn: "সুবিধাসমূহ দেখুন",
      },
    },
    problem: {
      eyebrow: {
        en: "Rigid Templates",
        bn: "পুরোনো থিমের সীমাবদ্ধতা",
      },
      title: {
        en: "Slow, clunky storefronts drive mobile shoppers away.",
        bn: "ধীরগতির ও জটিল ওয়েবসাইট মোবাইল ক্রেতাদের বিমুখ করে।",
      },
      description: {
        en: "Traditional e-commerce themes are heavy, hard to customize without web developers, and fail to load quickly on local mobile networks.",
        bn: "অধিকাংশ প্ল্যাটফর্মের থিম অত্যন্ত ভারী এবং কোডিং ছাড়া পরিবর্তন করা যায় না, ফলে ধীরগতির ইন্টারনেটে পেজ লোড হতে অতিরিক্ত সময় নেয়।",
      },
      bulletPoints: [
        {
          en: "High bounce rates on mobile due to bloated scripts and slow loading",
          bn: "অতিরিক্ত কোড ও ভারী ডিজাইনের কারণে মোবাইল ক্রেতারা পেজ ত্যাগ করে",
        },
        {
          en: "Expensive developer fees for even minor layout or color changes",
          bn: "ছোটখাটো কালার বা ব্যানার পরিবর্তনের জন্যও ডেভেলপারের ওপর নির্ভর করতে হয়",
        },
        {
          en: "Complex checkout pages with too many unnecessary form fields",
          bn: "অপ্রয়োজনীয় ফিল্ডযুক্ত দীর্ঘ চেকআউট ক্রেতার কেনাকাটা বাধাগ্রস্ত করে",
        },
      ],
    },
    explanation: {
      eyebrow: {
        en: "The CartX Solution",
        bn: "কার্টএক্স সমাধান",
      },
      title: {
        en: "High-speed e-commerce storefronts tailored for local buyers.",
        bn: "স্থানীয় ক্রেতাদের উপযোগী অত্যন্ত দ্রুতগতির অনলাইন স্টোরফ্রন্ট।",
      },
      description: {
        en: "CartX combines elegant retail themes with lightning-fast page speeds. Connect your custom domain, personalize typography and color palettes, and provide shoppers with frictionless one-page checkout.",
        bn: "কার্টএক্সের থিমগুলো মোবাইল-ফার্স্ট আর্কিটেকচারে তৈরি। কাস্টম ডোমেইন সংযোগ, ব্র্যান্ড কালার সিলেকশন এবং সহজ ওয়ান-পেজ চেকআউট দিয়ে ক্রেতাকে সেরা অভিজ্ঞতা দিন।",
      },
      highlightPill: {
        en: "Mobile-First Storefronts",
        bn: "মোবাইল-বান্ধব আর্কিটেকচার",
      },
    },
    capabilities: [
      {
        icon: Smartphone,
        title: {
          en: "Mobile-First Responsive Themes",
          bn: "মোবাইল-ফার্স্ট রেসপনসিভ থিম",
        },
        description: {
          en: "Carefully designed templates optimized for smartphone screens, tablets, and desktops.",
          bn: "স্মার্টফোন স্ক্রিনের জন্য বিশেষ অপটিমাইজ করা থিম যা যেকোনো ডিভাইসে দারুণ দেখায়।",
        },
      },
      {
        icon: Globe,
        title: {
          en: "Custom Domain Connection",
          bn: "কাস্টম ডোমেইন সাপোর্ট",
        },
        description: {
          en: "Connect your own brand domain (.com, .com.bd) with automated TLS/SSL encryption.",
          bn: "আপনার নিজস্ব ডোমেইন (.com, .com.bd) সহজে যুক্ত করুন স্বয়ংক্রিয় এসএসএল এনক্রিপশনসহ।",
        },
      },
      {
        icon: Sliders,
        title: {
          en: "Brand Identity Customization",
          bn: "ব্র্যান্ড আইডেন্টিটি কাস্টমাইজেশন",
        },
        description: {
          en: "Upload store logos, choose primary accent colors, and configure announcement banners.",
          bn: "লোগো আপলোড, ব্র্যান্ডের মূল কালার সিলেক্ট এবং নোটিশ ব্যানার নিজেই সেট করুন।",
        },
      },
      {
        icon: Zap,
        title: {
          en: "High-Speed One-Page Checkout",
          bn: "দ্রুতগতির ওয়ান-পেজ চেকআউট",
        },
        description: {
          en: "Simplified checkout forms with auto-district selectors to minimize buyer friction.",
          bn: "বাংলাদেশি ক্রেতাদের জন্য উপযোগী জেলা ও এরিয়া ড্রপডাউনসহ দ্রুতগতির চেকআউট পেজ।",
        },
      },
      {
        icon: Layers,
        title: {
          en: "Promotional Banner Strips",
          bn: "প্রমোশনাল ব্যানার ও হিরো স্লাইডার",
        },
        description: {
          en: "Highlight ongoing discounts, free delivery notices, and top-selling collections.",
          bn: "চলমান অফার, ফ্রি ডেলিভারি নোটিশ এবং বিশেষ কালেকশন হোমপেজে তুলে ধরুন।",
        },
      },
      {
        icon: Lock,
        title: {
          en: "Automated SSL Security",
          bn: "স্বয়ংক্রিয় এসএসএল নিরাপত্তা",
        },
        description: {
          en: "HTTPS certificates auto-provisioned and renewed with zero maintenance needed.",
          bn: "ওয়েবসাইটের প্রতিটি পেজ ব্যাংকিং মানের এনক্রিপশনে সুরক্ষিত থাকে কোনো ঝামেলা ছাড়াই।",
        },
      },
    ],
    workflow: [
      {
        stepNumber: 1,
        title: {
          en: "Choose a Retail Theme",
          bn: "একটি থিম পছন্দ করুন",
        },
        description: {
          en: "Select a clean modern theme suited to fashion, electronics, cosmetics, or general retail.",
          bn: "আপনার ব্যবসার ধরন অনুযায়ী একটি রেসপনসিভ ও আধুনিক থিম বেছে নিন।",
        },
      },
      {
        stepNumber: 2,
        title: {
          en: "Apply Brand Identity",
          bn: "ব্র্যান্ড কালার ও লোগো দিন",
        },
        description: {
          en: "Upload your store logo, configure brand colors, and add homepage banner sliders.",
          bn: "স্টোরের লোগো আপলোড করুন এবং ব্র্যান্ডের রঙের সাথে মিলিয়ে ডিজাইন কাস্টমাইজ করুন।",
        },
      },
      {
        stepNumber: 3,
        title: {
          en: "Attach Your Domain",
          bn: "নিজস্ব ডোমেইন কানেক্ট করুন",
        },
        description: {
          en: "Connect your custom web domain with simple DNS settings and automatic SSL creation.",
          bn: "ডিএনএস সেটিংসের মাধ্যমে আপনার কাস্টম ডোমেইনটি কার্টএক্সের সাথে যুক্ত করুন।",
        },
      },
      {
        stepNumber: 4,
        title: {
          en: "Launch to Shoppers",
          bn: "ক্রেতাদের জন্য উন্মুক্ত করুন",
        },
        description: {
          en: "Start welcoming visitors with sub-second page loads and seamless mobile checkout.",
          bn: "দ্রুতগতির ওয়েবসাইটে ক্রেতাদের স্বাগত জানান এবং বিক্রয় বাড়ান।",
        },
      },
    ],
    visual: {
      title: {
        en: "Storefront Configuration & Domain Management",
        bn: "স্টোরফ্রন্ট কনফিগারেশন ও ডোমেইন ম্যানেজমেন্ট",
      },
      caption: {
        en: "CartX Storefront theme controls and domain status panel (Illustrative demo data).",
        bn: "কার্টএক্স থিম সেটিংস এবং কাস্টম ডোমেইন স্ট্যাটাস প্রিভিউ (ডেমো ডেটা ভিত্তিক)।",
      },
      render: (t) => (
        <StorefrontMockup t={t} notice="Illustrative demo data" />
      ),
    },
    benefits: [
      {
        icon: TrendingUp,
        title: {
          en: "Higher Mobile Conversion",
          bn: "মোবাইলে সর্বোচ্চ বিক্রয়",
        },
        description: {
          en: "Sub-second load times keep smartphone shoppers engaged throughout checkout.",
          bn: "মোবাইলে দ্রুত পেজ লোড হওয়ায় ক্রেতারা বিরক্ত না হয়ে কেনাকাটা সম্পন্ন করেন।",
        },
      },
      {
        icon: ShieldCheck,
        title: {
          en: "Professional Brand Credibility",
          bn: "পেশাদার ব্র্যান্ডের মর্যাদা",
        },
        description: {
          en: "Clean custom domains (.com, .com.bd) build instant trust with online shoppers.",
          bn: "কাস্টম ডোমেইন এবং সুরক্ষিত ওয়েবসাইট ক্রেতাদের মনে ব্র্যান্ডের প্রতি বিশ্বাস তৈরি করে।",
        },
      },
      {
        icon: Zap,
        title: {
          en: "Zero Coding Required",
          bn: "কোনো কোডিং দক্ষতার প্রয়োজন নেই",
        },
        description: {
          en: "Manage and update your storefront appearance without paying developer maintenance fees.",
          bn: "যেকোনো ডিজাইন পরিবর্তন নিজে নিজেই করুন, কোনো ডেভেলপারের খরচ ছাড়াই।",
        },
      },
      {
        icon: Globe,
        title: {
          en: "Tailored for Bangladesh",
          bn: "বাংলাদেশি ক্রেতাদের উপযোগী",
        },
        description: {
          en: "Bangla typography, phone-number-first checkout, and localized payment options built in.",
          bn: "বাংলা ফন্ট সাপোর্ট, ফোন নাম্বার ভিত্তিক চেকআউট এবং স্থানীয় পেমেন্ট মেথড সমৃদ্ধ।",
        },
      },
    ],
    relatedFeatures: [
      {
        slug: "product-management",
        name: { en: "Product Management", bn: "প্রোডাক্ট ম্যানেজমেন্ট" },
        description: {
          en: "Organize products and collections for storefront display.",
          bn: "স্টোরে প্রদর্শনের জন্য প্রোডাক্ট ক্যাটালগ সাজান।",
        },
        icon: Package,
      },
      {
        slug: "payment-management",
        name: { en: "Payment Management", bn: "পেমেন্ট ম্যানেজমেন্ট" },
        description: {
          en: "Accept bKash, Nagad, card payments, and COD.",
          bn: "বিকাশ, নগদ, কার্ড ও ক্যাশ অন ডেলিভারি গ্রহণ করুন।",
        },
        icon: CreditCard,
      },
      {
        slug: "shipping",
        name: { en: "Shipping & Delivery", bn: "শিপিং ও ডেলিভারি" },
        description: {
          en: "Deliver parcels across Bangladesh with courier integrations.",
          bn: "কুরিয়ার ইন্টিগ্রেশনের মাধ্যমে সারা দেশে পণ্য পৌঁছে দিন।",
        },
        icon: Truck,
      },
    ],
    planAvailability: {
      starter: {
        en: "Free cartx.app subdomain, standard themes, automated SSL",
        bn: "ফ্রি cartx.app সাবডোমেইন, স্ট্যান্ডার্ড থিম ও ফ্রি এসএসএল",
      },
      growth: {
        en: "Custom domain connection, full theme styling controls",
        bn: "কাস্টম ডোমেইন সংযোগ এবং পূর্ণাঙ্গ থিম স্টাইলিং কন্ট্রোল",
      },
      scale: {
        en: "Custom CSS overrides, priority CDN edge caching, whitelabel",
        bn: "কাস্টম সিএসএস, প্রায়োরিটি সিডিএন ক্যাশিং ও হোয়াইটলেবেল সুবিধা",
      },
      note: {
        en: "Custom domain registration fees are billed directly by your domain registrar.",
        bn: "কাস্টম ডোমেইন ক্রয়ের খরচ সরাসরি ডোমেইন প্রোভাইডারের কাছে প্রদেয়।",
      },
    },
    faqs: [
      {
        id: "sb-faq-1",
        question: {
          en: "Can I connect my own custom domain (.com or .com.bd)?",
          bn: "আমি কি আমার নিজস্ব ডোমেইন (.com বা .com.bd) যুক্ত করতে পারব?",
        },
        answer: {
          en: "Yes. On supported plans, you can connect any domain you own by adding standard DNS records pointing to CartX.",
          bn: "হ্যাঁ, অনুমোদিত প্ল্যানে ডিএনএস সেটিংসের মাধ্যমে যেকোনো .com বা .com.bd ডোমেইন সহজেই যুক্ত করা যায়।",
        },
      },
      {
        id: "sb-faq-2",
        question: {
          en: "Is an SSL security certificate included?",
          bn: "ওয়েবসাইটে কি এসএসএল সিকিউরিটি সার্টিফিকেট অন্তর্ভুক্ত আছে?",
        },
        answer: {
          en: "Yes. CartX automatically provisions and auto-renews free TLS/SSL certificates for both cartx.app subdomains and connected custom domains.",
          bn: "হ্যাঁ, কার্টএক্স স্বয়ংক্রিয়ভাবে ফ্রি এসএসএল সার্টিফিকেট প্রদান ও রিনিউ করে, যাতে সব ডেটা এনক্রিপ্টেড থাকে।",
        },
      },
      {
        id: "sb-faq-3",
        question: {
          en: "Can I change my store colors and logo after launching?",
          bn: "লঞ্চ করার পর কি স্টোরের কালার বা লোগো পরিবর্তন করা যাবে?",
        },
        answer: {
          en: "Yes. You can update your logo, color palette, and banner images at any time directly from the settings panel without downtime.",
          bn: "হ্যাঁ, যেকোনো সময় ড্যাশবোর্ড থেকে কোনো ডাউনটাইম ছাড়াই লোগো, কালার বা ব্যানার পরিবর্তন করা যায়।",
        },
      },
      {
        id: "sb-faq-4",
        question: {
          en: "Do I need coding skills to build my storefront?",
          bn: "স্টোর তৈরি করতে কি কোডিং বা প্রোগ্রামিং জানতে হবে?",
        },
        answer: {
          en: "No coding is required. CartX themes are completely managed through intuitive visual controls and settings.",
          bn: "না, কোনো কোডিং জানতে হবে না। সহজ ইন্টারফেসের মাধ্যমে যে কেউ সুন্দর স্টোর তৈরি করতে পারেন।",
        },
      },
    ],
    cta: {
      eyebrow: {
        en: "Your Brand. Your Store.",
        bn: "আপনার ব্র্যান্ড, আপনার স্টোর",
      },
      title: {
        en: "Create Your Branded Online Store.",
        bn: "আজই শুরু করুন আপনার অনলাইন স্টোর।",
      },
      description: {
        en: "Connect your domain, showcase your products, and provide shoppers with a modern shopping experience.",
        bn: "কাস্টম ডোমেইন যুক্ত করুন এবং ক্রেতাদের দিন দ্রুতগতির সেরা শপিং অভিজ্ঞতা।",
      },
      buttonText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      trustNote: {
        en: "Free subdomain and SSL included on all plans.",
        bn: "সকল প্ল্যানেই ফ্রি সাবডোমেইন ও এসএসএল অন্তর্ভুক্ত।",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Payment Management
  // ─────────────────────────────────────────────────────────────
  "payment-management": {
    slug: "payment-management",
    name: {
      en: "Payment Management",
      bn: "পেমেন্ট ম্যানেজমেন্ট",
    },
    eyebrow: {
      en: "Local MFS & Digital Payments",
      bn: "মোবাইল ফিন্যান্সিয়াল ও ডিজিটাল পেমেন্ট",
    },
    icon: CreditCard,
    status: "available",
    seo: {
      title: "Payment Management",
      description:
        "Accept bKash, Nagad, debit/credit cards, and Cash on Delivery with automated instant callback verification and transaction settlements in CartX.",
    },
    hero: {
      titlePlain: {
        en: "Accept bKash, Nagad, Cards",
        bn: "গ্রহণ করুন বিকাশ, নগদ ও কার্ড",
      },
      titleHighlight: {
        en: "& Cash on Delivery.",
        bn: "সম্পূর্ণ নিরাপদ পেমেন্ট।",
      },
      description: {
        en: "Seamlessly collect customer payments through Bangladesh's most trusted payment channels with automated instant callback verification and unified transaction settlement.",
        bn: "বিকাশ, নগদ, ডেবিট/ক্রেডিট কার্ড এবং ক্যাশ অন ডেলিভারির মাধ্যমে নির্বিঘ্নে পেমেন্ট গ্রহণ করুন স্বয়ংক্রিয় ভেরিফিকেশনসহ।",
      },
      primaryCtaText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      secondaryCtaText: {
        en: "View Capabilities",
        bn: "সুবিধাসমূহ দেখুন",
      },
    },
    problem: {
      eyebrow: {
        en: "Payment Friction",
        bn: "পেমেন্ট ব্যবস্থাপনার জটিলতা",
      },
      title: {
        en: "Manual TrxID verification delays orders and enables fraud.",
        bn: "ম্যানুয়ালি ট্রানজ্যাকশন আইডি যাচাই অর্ডারে বিলম্ব ঘটায় এবং প্রতারণার সুযোগ দেয়।",
      },
      description: {
        en: "Asking customers to manually type TrxIDs into chat apps requires hours of manual statement checking and exposes merchants to fake transaction screenshots.",
        bn: "গ্রাহকদের কাছ থেকে মেসেজে ট্রানজ্যাকশন আইডি ও স্ক্রিনশট সংগ্রহ করে হিসেব মেলানো অত্যন্ত ক্লান্তিকর এবং ভুয়া স্ক্রিনশটের মাধ্যমে প্রতারিত হওয়ার ঝুঁকি থাকে।",
      },
      bulletPoints: [
        {
          en: "Fake transaction screenshots causing product dispatch before payment is verified",
          bn: "ভুয়া স্ক্রিনশট দেখে মালামাল পাঠিয়ে আর্থিক ক্ষতির সম্মুখীন হওয়া",
        },
        {
          en: "Hours wasted checking SMS bank statements late at night",
          bn: "প্রতিটি পেমেন্টের জন্য ব্যাংকের এসএমএস বা স্টেটমেন্ট ম্যানুয়ালি খোঁজার সময় নষ্ট",
        },
        {
          en: "Shoppers dropping out of checkout when forced to use complex payment steps",
          bn: "জটিল ও দীর্ঘ পেমেন্ট প্রক্রিয়ার কারণে ক্রেতারা চেকআউট মাঝপথে ছেড়ে দেয়",
        },
      ],
    },
    explanation: {
      eyebrow: {
        en: "The CartX Solution",
        bn: "কার্টএক্স সমাধান",
      },
      title: {
        en: "Automated digital payments with verified instant callback.",
        bn: "স্বয়ংক্রিয় ইনস্ট্যান্ট কলব্যাক সহ নিরাপদ ডিজিটাল পেমেন্ট।",
      },
      description: {
        en: "CartX connects directly with official bKash and Nagad payment gateway APIs. When a shopper completes payment, the order updates to Paid in milliseconds—eliminating manual verification permanently.",
        bn: "কার্টএক্স বিকাশ ও নগদের মতো অফিসিয়াল গেটওয়ে এপিআই-এর সাথে সমন্বিত। পেমেন্ট সম্পন্ন হওয়ার কয়েক মিলিসেকেন্ডেই অর্ডার স্বয়ংক্রিয়ভাবে 'পেইড' স্ট্যাটাসে চলে আসে।",
      },
      highlightPill: {
        en: "Direct Gateway Connectors",
        bn: "অফিসিয়াল গেটওয়ে কানেক্টর",
      },
    },
    capabilities: [
      {
        icon: CreditCard,
        title: {
          en: "Direct bKash Merchant Gateway",
          bn: "বিকাশ মার্চেন্ট গেটওয়ে ইন্টিগ্রেশন",
        },
        description: {
          en: "Official bKash payment API with instant cryptographic callback confirmation.",
          bn: "অফিসিয়াল বিকাশ পেমেন্ট গেটওয়ের মাধ্যমে তাৎক্ষণিক স্বয়ংক্রিয় ভেরিফিকেশন।",
        },
      },
      {
        icon: Zap,
        title: {
          en: "Nagad MFS Integration",
          bn: "নগদ পেমেন্ট গেটওয়ে সাপোর্ট",
        },
        description: {
          en: "Seamless digital wallet payments reaching millions of active local buyers.",
          bn: "নগদ মোবাইল ওয়ালেটের মাধ্যমে সহজে পেমেন্ট গ্রহণের সুবিধা।",
        },
      },
      {
        icon: ShieldCheck,
        title: {
          en: "Visa, Mastercard & Cards",
          bn: "ভিসা, মাস্টারকার্ড ও ডেবিট কার্ড",
        },
        description: {
          en: "Secure online card processing for urban and corporate customers.",
          bn: "যেকোনো ডেবিট বা ক্রেডিট কার্ডের মাধ্যমে নিরাপদ অনলাইন পেমেন্ট সুবিধা।",
        },
      },
      {
        icon: CheckCircle2,
        title: {
          en: "Cash on Delivery (COD) Management",
          bn: "ক্যাশ অন ডেলিভারি (সিওডি) ট্র্যাকিং",
        },
        description: {
          en: "Built-in COD workflow with delivery verification and courier collection tracking.",
          bn: "ক্যাশ অন ডেলিভারি অর্ডারের জন্য বিশেষ ট্র্যাকিং ও কুরিয়ার কালেকশন হিসেব।",
        },
      },
      {
        icon: FileText,
        title: {
          en: "Unified Settlement Records",
          bn: "সমন্বিত লেনদেন হিসেব",
        },
        description: {
          en: "Searchable transaction IDs, timestamps, and amounts in a single financial view.",
          bn: "সকল ট্রানজ্যাকশন আইডি ও পরিমাণের পরিষ্কার হিসেব এক ক্লিকে ডাউনলোডযোগ্য।",
        },
      },
      {
        icon: Lock,
        title: {
          en: "Bank-Grade TLS Encryption",
          bn: "ব্যাংকিং মানের টিএলএস এনক্রিপশন",
        },
        description: {
          en: "High-level security standards protecting buyer payment sessions and credentials.",
          bn: "ক্রেতার পেমেন্ট সেশন ও তথ্য সুরক্ষিত রাখতে আন্তর্জাতিক নিরাপত্তা প্রটোকল।",
        },
      },
    ],
    workflow: [
      {
        stepNumber: 1,
        title: {
          en: "Select Payment Method",
          bn: "পেমেন্ট মাধ্যম নির্বাচন",
        },
        description: {
          en: "Shopper chooses bKash, Nagad, Card, or Cash on Delivery at checkout.",
          bn: "ক্রেতা চেকআউটে বিকাশ, নগদ, কার্ড বা সিওডির মধ্যে পছন্দের মাধ্যমটি বেছে নেন।",
        },
      },
      {
        stepNumber: 2,
        title: {
          en: "Secure Execution",
          bn: "নিরাপদ ট্রানজ্যাকশন",
        },
        description: {
          en: "Transaction is executed inside official, secured banking interfaces.",
          bn: "অফিসিয়াল ব্যাংকিং বা ওয়ালেট উইন্ডোতে পেমেন্ট সম্পন্ন হয়।",
        },
      },
      {
        stepNumber: 3,
        title: {
          en: "Instant API Callback",
          bn: "ইনস্ট্যান্ট এপিআই কলব্যাক",
        },
        description: {
          en: "CartX receives verified confirmation in milliseconds via cryptographic webhook.",
          bn: "পেমেন্ট সফল হওয়ার সাথে সাথেই সিস্টেম নিশ্চিতকরণ সংকেত গ্রহণ করে।",
        },
      },
      {
        stepNumber: 4,
        title: {
          en: "Order Marked Paid",
          bn: "অর্ডার 'পেইড' হিসেবে আপডেট",
        },
        description: {
          en: "Order automatically transitions to Paid status and inventory is safely deducted.",
          bn: "অর্ডারটি স্বয়ংক্রিয়ভাবে পরিশোধিত দেখায় এবং প্যাকিংয়ের জন্য প্রস্তুত হয়।",
        },
      },
    ],
    visual: {
      title: {
        en: "Payment Gateways & Transaction Console",
        bn: "পেমেন্ট গেটওয়ে ও ট্রানজ্যাকশন কনসোল",
      },
      caption: {
        en: "CartX bKash/Nagad payment connection and settlement status view (Illustrative demo data).",
        bn: "কার্টএক্স বিকাশ/নগদ পেমেন্ট গেটওয়ে এবং সেটেলমেন্ট স্ট্যাটাস প্রিভিউ (ডেমো ডেটা ভিত্তিক)।",
      },
      render: (t) => (
        <PaymentManagementMockup t={t} notice="Illustrative demo data" />
      ),
    },
    benefits: [
      {
        icon: ShieldCheck,
        title: {
          en: "Eliminate Fake Screenshots",
          bn: "ভুয়া স্ক্রিনশট জালিয়াতি বন্ধ",
        },
        description: {
          en: "Direct gateway verification makes forged payment proofs completely ineffective.",
          bn: "সরাসরি গেটওয়ে ভেরিফিকেশন থাকায় ভুয়া মেসেজ বা স্ক্রিনশটের কোনো সুযোগ থাকে না।",
        },
      },
      {
        icon: Zap,
        title: {
          en: "Save Hours Daily",
          bn: "প্রতিদিন ঘণ্টার পর ঘণ্টা সাশ্রয়",
        },
        description: {
          en: "No more manually matching SMS notifications to unverified customer orders.",
          bn: "ফোনে এসএমএস দেখে দেখে অর্ডার মেলানোর ঝামেলা থেকে মুক্তি পান।",
        },
      },
      {
        icon: TrendingUp,
        title: {
          en: "Higher Checkout Conversion",
          bn: "সর্বোচ্চ রূপান্তর হার",
        },
        description: {
          en: "Providing trusted local payment channels reduces checkout abandonment drastically.",
          bn: "পছন্দের স্থানীয় পেমেন্ট মাধ্যম পেলে ক্রেতারা স্বাচ্ছন্দ্যে অর্ডার সম্পন্ন করেন।",
        },
      },
      {
        icon: FileText,
        title: {
          en: "Transparent Accounting",
          bn: "সহজ ও স্বচ্ছ হিসাবরক্ষণ",
        },
        description: {
          en: "Download itemized settlement reports for bookkeeping and bank reconciliations.",
          bn: "মাসিক হিসাব ও ব্যাংক স্টেটমেন্টের সাথে মেলানোর জন্য নির্ভুল রিপোর্ট পান।",
        },
      },
    ],
    relatedFeatures: [
      {
        slug: "order-management",
        name: { en: "Order Management", bn: "অর্ডার ম্যানেজমেন্ট" },
        description: {
          en: "View payment status alongside order fulfillment stages.",
          bn: "অর্ডারের প্রতিটি পর্যায়ের সাথে পেমেন্ট স্ট্যাটাস ট্র্যাক করুন।",
        },
        icon: ShoppingBag,
      },
      {
        slug: "shipping",
        name: { en: "Shipping & Delivery", bn: "শিপিং ও ডেলিভারি" },
        description: {
          en: "Reconcile Cash on Delivery amounts collected by couriers.",
          bn: "কুরিয়ার কর্তৃক সংগৃহীত ক্যাশ অন ডেলিভারি অর্থ সমন্বয় করুন।",
        },
        icon: Truck,
      },
      {
        slug: "store-builder",
        name: { en: "Store Builder", bn: "স্টোর বিল্ডার" },
        description: {
          en: "Seamless checkout integration on mobile-friendly themes.",
          bn: "মোবাইল-বান্ধব থিমে সহজ পেমেন্ট চেকআউট ইন্টিগ্রেশন।",
        },
        icon: Store,
      },
    ],
    planAvailability: {
      starter: {
        en: "Cash on Delivery and manual payment logging workflows",
        bn: "ক্যাশ অন ডেলিভারি এবং ম্যানুয়াল পেমেন্ট ট্র্যাকিং সুবিধা",
      },
      growth: {
        en: "Automated bKash & Nagad merchant gateway API connections",
        bn: "স্বয়ংক্রিয় বিকাশ ও নগদ মার্চেন্ট গেটওয়ে এপিআই কানেকশন",
      },
      scale: {
        en: "Full multi-gateway suite, cards, priority settlement support",
        bn: "সম্পূর্ণ মাল্টি-গেটওয়ে স্যুট, কার্ড এবং প্রায়োরিটি সেটেলমেন্ট",
      },
      note: {
        en: "Merchant gateway account approval is provided by respective financial institutions.",
        bn: "মার্চেন্ট একাউন্ট অনুমোদন সংশ্লিষ্ট আর্থিক প্রতিষ্ঠান বা পেমেন্ট প্রোভাইডারের নীতিমালার অধীন।",
      },
    },
    faqs: [
      {
        id: "pay-faq-1",
        question: {
          en: "How does bKash merchant gateway work on CartX?",
          bn: "কার্টএক্সে বিকাশ মার্চেন্ট গেটওয়ে কীভাবে কাজ করে?",
        },
        answer: {
          en: "When customers choose bKash at checkout, a secure popup or redirect opens for them to authenticate via OTP/PIN. Upon success, CartX marks the order Paid automatically.",
          bn: "চেকআউটে বিকাশ সিলেক্ট করলে অফিসিয়াল সুরক্ষিত পপআপে ওটিপি/পিন দিয়ে পেমেন্ট সম্পন্ন হয় এবং সাথে সাথে অর্ডারটি পেইড হয়ে যায়।",
        },
      },
      {
        id: "pay-faq-2",
        question: {
          en: "Can I accept Cash on Delivery (COD)?",
          bn: "আমি কি ক্যাশ অন ডেলিভারি (সিওডি) চালু রাখতে পারব?",
        },
        answer: {
          en: "Yes. Cash on Delivery is supported across all CartX plans, with full status tracking through parcel fulfillment.",
          bn: "হ্যাঁ, ক্যাশ অন ডেলিভারি সকল প্ল্যানেই সক্রিয় রাখা যায় এবং ডেলিভারির পর অর্থ সংগ্রহ ট্র্যাক করা সম্ভব।",
        },
      },
      {
        id: "pay-faq-3",
        question: {
          en: "Are transaction receipts stored for accounting?",
          bn: "অ্যাকাউন্টিংয়ের জন্য কি লেনদেনের রশিদ সংরক্ষিত থাকে?",
        },
        answer: {
          en: "Yes. Every verified payment generates a timestamped transaction record with payment gateway reference IDs for financial auditing.",
          bn: "হ্যাঁ, প্রতিটি পেমেন্টের জন্য নির্দিষ্ট রেফারেন্স আইডি ও সময়সহ স্থায়ী ডিজিটাল রেকর্ড সংরক্ষিত থাকে।",
        },
      },
      {
        id: "pay-faq-4",
        question: {
          en: "Do I need an active merchant account to collect digital payments?",
          bn: "ডিজিটাল পেমেন্ট নিতে কি মার্চেন্ট অ্যাকাউন্ট প্রয়োজন?",
        },
        answer: {
          en: "Yes. Automated API callbacks require a verified merchant account with bKash, Nagad, or supported payment aggregators.",
          bn: "হ্যাঁ, স্বয়ংক্রিয় এপিআই গেটওয়ের জন্য সংশ্লিষ্ট প্রতিষ্ঠান থেকে অনুমোদিত মার্চেন্ট অ্যাকাউন্ট থাকা আবশ্যক।",
        },
      },
    ],
    cta: {
      eyebrow: {
        en: "Stop Manual Verification",
        bn: "ম্যানুয়াল পেমেন্ট ট্র্যাকিং বাদ দিন",
      },
      title: {
        en: "Accept Payments Seamlessly with CartX.",
        bn: "কার্টএক্সের সাথে শুরু করুন নিরাপদ পেমেন্ট।",
      },
      description: {
        en: "Connect bKash, Nagad, and cards to provide shoppers with the fastest, safest checkout.",
        bn: "বিকাশ ও নগদ গেটওয়ে যুক্ত করে গ্রাহকদের দিন দ্রুততম ও নিরাপদ চেকআউটের অভিজ্ঞতা।",
      },
      buttonText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      trustNote: {
        en: "Direct gateway connections with instant verification callbacks.",
        bn: "তাৎক্ষণিক ভেরিফিকেশন সহ অফিসিয়াল গেটওয়ে ইন্টিগ্রেশন।",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Shipping & Delivery
  // ─────────────────────────────────────────────────────────────
  "shipping": {
    slug: "shipping",
    name: {
      en: "Shipping & Delivery",
      bn: "শিপিং ও ডেলিভারি",
    },
    eyebrow: {
      en: "Automated Logistics & Couriers",
      bn: "লজিস্টিকস ও কুরিয়ার অটোমেশন",
    },
    icon: Truck,
    status: "available",
    seo: {
      title: "Shipping & Delivery",
      description:
        "Streamline shipping and delivery across Bangladesh. Configure regional rates, book courier consignments with Pathao and Steadfast, and share tracking with CartX.",
    },
    hero: {
      titlePlain: {
        en: "Streamline Shipping & Delivery",
        bn: "ডেলিভারি অপারেশন করুন সহজ",
      },
      titleHighlight: {
        en: "Across Bangladesh.",
        bn: "দেশজুড়ে দ্রুত ও নির্ভরযোগ্য।",
      },
      description: {
        en: "Configure regional delivery rates, generate automated courier consignments with Pathao and Steadfast, and share real-time tracking links with your shoppers.",
        bn: "ঢাকার ভেতরে ও বাইরে ডেলিভারি চার্জ নির্ধারণ করুন, পাঠাও ও স্টিডফাস্ট কুরিয়ারে এক ক্লিকে পার্সেল বুক করুন এবং ক্রেতাদের ট্র্যাকিং লিংক প্রদান করুন।",
      },
      primaryCtaText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      secondaryCtaText: {
        en: "View Capabilities",
        bn: "সুবিধাসমূহ দেখুন",
      },
    },
    problem: {
      eyebrow: {
        en: "Logistics Headaches",
        bn: "ডেলিভারি ও লজিস্টিকসের সমস্যা",
      },
      title: {
        en: "Copying addresses into courier portals causes costly delivery errors.",
        bn: "কুরিয়ার পোর্টালে ম্যানুয়ালি ঠিকানা কপি করার কারণে ডেলিভারি ভুল ও রিটার্ন বাড়ে।",
      },
      description: {
        en: "Manually re-typing customer names, phone numbers, and addresses into separate delivery apps leads to mistyped consignments, returned parcels, and lost shipping fees.",
        bn: "প্রতিটি অর্ডারের ফোন নম্বর ও ঠিকানা বারবার কুরিয়ার অ্যাপে টাইপ করতে গিয়ে ভুল হয়, যার ফলে পার্সেল রিটার্ন আসে এবং অতিরিক্ত ডেলিভারি খরচ গুনতে হয়।",
      },
      bulletPoints: [
        {
          en: "Typo in customer phone numbers leading to failed courier delivery attempts",
          bn: "ফোন নম্বর বা ঠিকানায় টাইপো ভুলের কারণে পার্সেল ডেলিভারি ব্যর্থ হওয়া",
        },
        {
          en: "Hours wasted every afternoon booking individual parcels on courier websites",
          bn: "প্রতিদিন পার্সেল এন্ট্রিতে প্রচুর সময় নষ্ট হওয়া",
        },
        {
          en: "High return rates (RTO) because customers were not notified when parcels arrived",
          bn: "পার্সেল ট্র্যাকিং না থাকায় কাস্টমার রিটার্নের হার বৃদ্ধি পাওয়া",
        },
      ],
    },
    explanation: {
      eyebrow: {
        en: "The CartX Solution",
        bn: "কার্টএক্স সমাধান",
      },
      title: {
        en: "One-click courier consignment creation from order details.",
        bn: "অর্ডার ডিটেইলস থেকে সরাসরি এক ক্লিকে কুরিয়ার পার্সেল বুকিং।",
      },
      description: {
        en: "CartX connects your store directly to domestic courier logistics APIs. Define shipping rates for Inside Dhaka and Outside Dhaka, generate tracking codes in one click, and keep customers informed automatically.",
        bn: "কার্টএক্স সরাসরি দেশের শীর্ষস্থানীয় কুরিয়ার সার্ভিসের সাথে সংযুক্ত। ঢাকার ভেতর ও বাইরের ডেলিভারি চার্জ সেট করা এবং স্বয়ংক্রিয় কনসাইনমেন্ট আইডি তৈরি এখন কয়েক সেকেন্ডের কাজ।",
      },
      highlightPill: {
        en: "Direct Courier API Integration",
        bn: "সরাসরি কুরিয়ার এপিআই",
      },
    },
    capabilities: [
      {
        icon: Truck,
        title: {
          en: "Zone-Based Shipping Rate Rules",
          bn: "জোনভিত্তিক ডেলিভারি চার্জ",
        },
        description: {
          en: "Set distinct shipping charges for Inside Dhaka (e.g. ৳60) and Outside Dhaka (e.g. ৳120).",
          bn: "ঢাকার ভেতরে এবং ঢাকার বাইরে আলাদা ডেলিভারি ফি সেট করার সহজ নিয়মাবলী।",
        },
      },
      {
        icon: Zap,
        title: {
          en: "Pathao Courier API Integration",
          bn: "পাঠাও কুরিয়ার ইন্টিগ্রেশন",
        },
        description: {
          en: "Direct parcel booking, hub pickup requests, and automatic tracking code sync.",
          bn: "পাঠাও কুরিয়ারে এক ক্লিকে পার্সেল বুকিং এবং ট্র্যাকিং আইডি সিঙ্ক করার সুবিধা।",
        },
      },
      {
        icon: CheckCircle2,
        title: {
          en: "Steadfast Courier Integration",
          bn: "স্টিডফাস্ট কুরিয়ার সাপোর্ট",
        },
        description: {
          en: "Smooth parcel consignment generation with automated Cash on Delivery collection amounts.",
          bn: "স্টিডফাস্ট কুরিয়ারে সিওডি অ্যামাউন্টসহ দ্রুত পার্সেল এন্ট্রির ব্যবস্থা।",
        },
      },
      {
        icon: FileText,
        title: {
          en: "Printable Shipping Labels",
          bn: "প্রিন্ট-উপযোগী শিপিং লেবেল",
        },
        description: {
          en: "Generate standardized address stickers with customer phone numbers and consignment barcodes.",
          bn: "গ্রাহকের নাম, ঠিকানা, ফোন ও বারকোডযুক্ত প্যাকেজ স্টিকার প্রিন্ট করুন।",
        },
      },
      {
        icon: Clock,
        title: {
          en: "Real-Time Tracking Links",
          bn: "রিয়েল-টাইম পার্সেল ট্র্যাকিং",
        },
        description: {
          en: "Provide shoppers with active courier tracking links to monitor parcel transit to their door.",
          bn: "ক্রেতাদের সাথে ট্র্যাকিং লিংক শেয়ার করুন যাতে তারা নিজেরাই পার্সেল ট্র্যাক করতে পারেন।",
        },
      },
      {
        icon: ShieldCheck,
        title: {
          en: "COD Collection Reconciliation",
          bn: "সিওডি কালেকশন রিকনসিলিয়েশন",
        },
        description: {
          en: "Match courier payout statements against delivered orders to ensure zero unpaid orders.",
          bn: "কুরিয়ার থেকে প্রাপ্ত পেমেন্ট স্টেটমেন্টের সাথে অর্ডারের টাকা মিলিয়ে নিন।",
        },
      },
    ],
    workflow: [
      {
        stepNumber: 1,
        title: {
          en: "Customer Selects Zone",
          bn: "ক্রেতা এরিয়া নির্বাচন করেন",
        },
        description: {
          en: "At checkout, the shopper selects their district and the correct delivery fee is applied.",
          bn: "চেকআউট পেজে ক্রেতা জেলা সিলেক্ট করলে সঠিক শিপিং ফি স্বয়ংক্রিয়ভাবে যোগ হয়।",
        },
      },
      {
        stepNumber: 2,
        title: {
          en: "One-Click Courier Booking",
          bn: "এক ক্লিকে কুরিয়ার বুকিং",
        },
        description: {
          en: "Inside the order dashboard, click 'Book Courier' to dispatch to Pathao or Steadfast.",
          bn: "ড্যাশবোর্ড থেকে 'বুক কুরিয়ার' বাটনে ক্লিক করলেই পার্সেল বুক হয়ে যায়।",
        },
      },
      {
        stepNumber: 3,
        title: {
          en: "Consignment ID Generated",
          bn: "কনসাইনমেন্ট আইডি তৈরি",
        },
        description: {
          en: "The courier system returns a unique tracking code which attaches to the order automatically.",
          bn: "কুরিয়ার থেকে প্রাপ্ত ট্র্যাকিং নম্বরটি স্বয়ংক্রিয়ভাবে অর্ডারে যুক্ত হয়।",
        },
      },
      {
        stepNumber: 4,
        title: {
          en: "Delivery & Settlement",
          bn: "ডেলিভারি ও ক্যাশ কালেকশন",
        },
        description: {
          en: "Courier delivers the package, collects COD, and order transitions to Delivered.",
          bn: "কুরিয়ার পণ্য পৌঁছে দিয়ে সিওডি সংগ্রহ করে এবং অর্ডারটি সম্পূর্ণ হয়।",
        },
      },
    ],
    visual: {
      title: {
        en: "Shipping Rate Configuration & Courier Dispatch",
        bn: "শিপিং রেট কনফিগারেশন ও কুরিয়ার ডিসপ্যাচ",
      },
      caption: {
        en: "CartX Regional shipping rules and courier connector status (Illustrative demo data).",
        bn: "কার্টএক্স আঞ্চলিক ডেলিভারি রেট এবং কুরিয়ার কানেক্টর স্ট্যাটাস (ডেমো ডেটা ভিত্তিক)।",
      },
      render: (t) => (
        <DeliveryOperationsMockup t={t} notice="Illustrative demo data" />
      ),
    },
    benefits: [
      {
        icon: ShieldCheck,
        title: {
          en: "Zero Address Typos",
          bn: "ঠিকানা ভুলের কোনো সুযোগ নেই",
        },
        description: {
          en: "Customer delivery details transfer directly to the courier system through secure APIs.",
          bn: "কাস্টমারের দেওয়া ঠিকানা সরাসরি কুরিয়ার সিস্টেমে স্থানান্তরিত হয়।",
        },
      },
      {
        icon: Zap,
        title: {
          en: "Book 50+ Parcels in Minutes",
          bn: "কয়েক মিনিটেই সব পার্সেল বুকিং",
        },
        description: {
          en: "Stop spending hours re-entering data into separate courier applications every day.",
          bn: "আলাদা অ্যাপে বারবার লগইন ও ডাটা এন্ট্রির ঝামেলা একেবারেই দূর হয়।",
        },
      },
      {
        icon: TrendingUp,
        title: {
          en: "Reduced Return Rates",
          bn: "রিটার্নের হার উল্লেখযোগ্যভাবে হ্রাস",
        },
        description: {
          en: "Automated tracking keeps customers prepared with cash on delivery when couriers arrive.",
          bn: "পার্সেলের অবস্থান জানতে পারায় ক্রেতারা ডেলিভারির সময় টাকা নিয়ে প্রস্তুত থাকেন।",
        },
      },
      {
        icon: CheckCircle2,
        title: {
          en: "Transparent Freight Accounting",
          bn: "ডেলিভারি খরচের স্বচ্ছ হিসাব",
        },
        description: {
          en: "Know exactly how much was charged to customers versus courier delivery invoices.",
          bn: "ক্রেতার কাছ থেকে নেওয়া ডেলিভারি ফি এবং কুরিয়ার চার্জের স্পষ্ট হিসাব পাওয়া যায়।",
        },
      },
    ],
    relatedFeatures: [
      {
        slug: "order-management",
        name: { en: "Order Management", bn: "অর্ডার ম্যানেজমেন্ট" },
        description: {
          en: "Track order status from receipt through courier dispatch.",
          bn: "অর্ডার গ্রহণ থেকে কুরিয়ার ডেলিভারি পর্যন্ত ট্র্যাক করুন।",
        },
        icon: ShoppingBag,
      },
      {
        slug: "payment-management",
        name: { en: "Payment Management", bn: "পেমেন্ট ম্যানেজমেন্ট" },
        description: {
          en: "Reconcile COD collections against merchant accounts.",
          bn: "কুরিয়ার কর্তৃক সংগৃহীত ক্যাশ অন ডেলিভারি হিসাব মেলান।",
        },
        icon: CreditCard,
      },
      {
        slug: "inventory-management",
        name: { en: "Inventory Management", bn: "ইনভেন্টরি ম্যানেজমেন্ট" },
        description: {
          en: "Ensure items are packed and restocked accurately on returns.",
          bn: "রিটার্ন আসলে নির্ভুলভাবে স্টক পুনরায় যোগ করুন।",
        },
        icon: Boxes,
      },
    ],
    planAvailability: {
      starter: {
        en: "Configurable flat shipping fees and manual tracking code entry",
        bn: "কাস্টম ফ্ল্যাট শিপিং চার্জ এবং ম্যানুয়াল ট্র্যাকিং কোড এন্ট্রি",
      },
      growth: {
        en: "Pathao & Steadfast automated API booking and label printing",
        bn: "পাঠাও ও স্টিডফাস্ট স্বয়ংক্রিয় এপিআই বুকিং এবং শিপিং লেবেল প্রিন্ট",
      },
      scale: {
        en: "Priority logistics workflows, multi-location pickup hubs",
        bn: "উন্নত লজিস্টিকস পাইপলাইন, মাল্টি-লোকেশন পিকআপ হাব সুবিধা",
      },
      note: {
        en: "Courier delivery charges are billed directly by respective courier partners.",
        bn: "কুরিয়ারের ডেলিভারি ফি সরাসরি সংশ্লিষ্ট কুরিয়ার সার্ভিসকে প্রদেয়।",
      },
    },
    faqs: [
      {
        id: "shp-faq-1",
        question: {
          en: "Which courier services are supported on CartX?",
          bn: "কার্টএক্সে কোন কোন কুরিয়ার সার্ভিস সাপোর্ট করে?",
        },
        answer: {
          en: "CartX supports direct automated API integration with Bangladesh's leading delivery providers, including Pathao Logistics and Steadfast Courier.",
          bn: "কার্টএক্সে বাংলাদেশের শীর্ষস্থানীয় কুরিয়ার সার্ভিস যেমন পাঠাও লজিস্টিকস এবং স্টিডফাস্ট কুরিয়ারের সাথে অটোমেটেড এপিআই ইন্টিগ্রেশন রয়েছে।",
        },
      },
      {
        id: "shp-faq-2",
        question: {
          en: "Can I set different shipping fees for Inside and Outside Dhaka?",
          bn: "ঢাকার ভেতরে ও বাইরে কি আলাদা ডেলিভারি চার্জ নির্ধারণ করা যায়?",
        },
        answer: {
          en: "Yes. You can configure custom delivery rates based on destination zone (Inside Dhaka, Outside Dhaka, Sub-Dhaka) directly from shipping settings.",
          bn: "হ্যাঁ, সেটিংস থেকে ঢাকার ভেতরে, ঢাকার বাইরে কিংবা সাব-এরিয়া ভিত্তিক আলাদা ডেলিভারি চার্জ নির্ধারণ করতে পারবেন।",
        },
      },
      {
        id: "shp-faq-3",
        question: {
          en: "Do customers receive a tracking code automatically?",
          bn: "ক্রেতারা কি স্বয়ংক্রিয়ভাবে ট্র্যাকিং কোড পান?",
        },
        answer: {
          en: "Yes. When you generate a courier consignment, the tracking number attaches to the order and can be shared with the customer.",
          bn: "হ্যাঁ, কুরিয়ার বুকিং করার সাথে সাথে পার্সেল ট্র্যাকিং নম্বরটি অর্ডারে যুক্ত হয় এবং ক্রেতার সাথে শেয়ার করা যায়।",
        },
      },
      {
        id: "shp-faq-4",
        question: {
          en: "Can I print shipping labels to paste on packages?",
          bn: "পার্সেলের গায়ে লাগানোর জন্য শিপিং লেবেল প্রিন্ট করা যায়?",
        },
        answer: {
          en: "Yes. You can print standardized address stickers with customer details, phone number, and courier consignment IDs with one click.",
          bn: "হ্যাঁ, গ্রাহকের নাম, ফোন, ঠিকানা ও কনসাইনমেন্ট বারকোডসহ পরিষ্কার শিপিং লেবেল প্রিন্ট করা যায়।",
        },
      },
    ],
    cta: {
      eyebrow: {
        en: "Automate Your Logistics",
        bn: "ডেলিভারি অটোমেশন শুরু করুন",
      },
      title: {
        en: "Deliver Fast Across Bangladesh with CartX.",
        bn: "সারা দেশে দ্রুত পণ্য পৌঁছে দিন কার্টএক্সের সাথে।",
      },
      description: {
        en: "Connect Pathao and Steadfast to dispatch orders in one click with automated tracking.",
        bn: "পাঠাও ও স্টিডফাস্ট কুরিয়ার সংযুক্ত করে এক ক্লিকেই পার্সেল বুকিং শুরু করুন।",
      },
      buttonText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      trustNote: {
        en: "Seamless courier integration for Bangladeshi online stores.",
        bn: "বাংলাদেশি অনলাইন স্টোরের জন্য বিশেষ অপটিমাইজড।",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 7. Reports & Analytics
  // ─────────────────────────────────────────────────────────────
  "analytics": {
    slug: "analytics",
    name: {
      en: "Reports & Analytics",
      bn: "রিপোর্ট ও অ্যানালিটিক্স",
    },
    eyebrow: {
      en: "Business Intelligence & Insights",
      bn: "ব্যবসায়িক ডেটা ও অ্যানালিটিক্স",
    },
    icon: BarChart3,
    status: "available",
    seo: {
      title: "Reports & Analytics",
      description:
        "Actionable sales data and business intelligence. Track gross revenue, order volume, average order values, and bestselling products with CartX.",
    },
    hero: {
      titlePlain: {
        en: "Actionable Sales Data",
        bn: "ব্যবসায়িক ডেটা ও অ্যানালিটিক্স",
      },
      titleHighlight: {
        en: "to Grow Your Business.",
        bn: "সঠিক সিদ্ধান্ত গ্রহণের সুবিধার্থে।",
      },
      description: {
        en: "Track gross revenue, order volumes, average order value, and top-performing products to make confident, data-driven merchandising decisions.",
        bn: "মোট বিক্রি, অর্ডারের সংখ্যা, গড় অর্ডার মূল্য এবং জনপ্রিয় পণ্যগুলোর রিয়েল-টাইম রিপোর্ট দেখে সঠিক ব্যবসায়িক সিদ্ধান্ত নিন।",
      },
      primaryCtaText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      secondaryCtaText: {
        en: "View Capabilities",
        bn: "সুবিধাসমূহ দেখুন",
      },
    },
    problem: {
      eyebrow: {
        en: "Flying Blind",
        bn: "হিসাবের অস্বচ্ছতা",
      },
      title: {
        en: "Making business decisions without clear sales data is risky.",
        bn: "সঠিক বিক্রয় ডেটা ছাড়া ব্যবসায়িক সিদ্ধান্ত নেওয়া ঝুঁকিপূর্ণ।",
      },
      description: {
        en: "Without clear reports on which products actually generate profit and which days drive the most sales, merchants waste money on the wrong inventory and ineffective ads.",
        bn: "কোন পণ্যটি সবচেয়ে বেশি লাভ দিচ্ছে কিংবা কোন দিন বিক্রি বেশি হচ্ছে তা না জানলে ভুল পণ্যে টাকা আটকে যায় এবং বিজ্ঞাপনের বাজেট নষ্ট হয়।",
      },
      bulletPoints: [
        {
          en: "Re-ordering slow-selling stock while bestsellers run dry",
          bn: "কম চাহিদার পণ্যে পুঁজি আটকে থাকা এবং বেস্টসেলার পণ্য ফুরিয়ে যাওয়া",
        },
        {
          en: "Zero clarity on peak purchasing days and customer buying habits",
          bn: "কোন দিন বা সময়ে ক্রেতারা বেশি কেনাকাটা করেন তার স্পষ্ট ধারণা না থাকা",
        },
        {
          en: "Hours wasted compiling manual Excel spreadsheets every month",
          bn: "মাস শেষে সেলস রিপোর্ট বানাতে গিয়ে ঘণ্টার পর ঘণ্টা সময় নষ্ট হওয়া",
        },
      ],
    },
    explanation: {
      eyebrow: {
        en: "The CartX Solution",
        bn: "কার্টএক্স সমাধান",
      },
      title: {
        en: "Visual commerce intelligence designed for business owners.",
        bn: "উদ্যোক্তাদের জন্য তৈরি সহজ ও বোধগম্য ব্যবসায়িক রিপোর্ট।",
      },
      description: {
        en: "CartX translates complex e-commerce transactions into clear, easy-to-understand metrics and visual activity charts. Monitor weekly gross sales, identify top items, and spot growth opportunities instantly.",
        bn: "কার্টএক্স প্রতিটি বিক্রয় ডেটাকে সহজ গ্রাফ ও চার্টে রূপান্তর করে। সাপ্তাহিক রাজস্ব, গড় অর্ডার ভ্যালু এবং সবচেয়ে চাহিদাসম্পন্ন পণ্যের তালিকা এক নজরে দেখে নিন।",
      },
      highlightPill: {
        en: "Actionable Visual Metrics",
        bn: "সহজ ভিজ্যুয়াল চার্ট",
      },
    },
    capabilities: [
      {
        icon: TrendingUp,
        title: {
          en: "Gross Sales & Revenue Tracking",
          bn: "মোট বিক্রয় ও রাজস্ব ট্র্যাকিং",
        },
        description: {
          en: "Monitor total gross sales across daily, weekly, and monthly timeframes in real time.",
          bn: "প্রতিদিন, সপ্তাহ কিংবা মাসের মোট বিক্রির পরিমাণ রিয়েল-টাইমে দেখুন।",
        },
      },
      {
        icon: ShoppingBag,
        title: {
          en: "Average Order Value (AOV)",
          bn: "গড় অর্ডার মূল্য (এওভি)",
        },
        description: {
          en: "Track how much shoppers spend per checkout to measure upselling effectiveness.",
          bn: "প্রতিটি অর্ডারে ক্রেতারা গড়ে কত টাকা খরচ করছেন তা পরিমাপ করুন।",
        },
      },
      {
        icon: Package,
        title: {
          en: "Top-Performing Products Breakdown",
          bn: "সেরা বিক্রিত পণ্যের তালিকা",
        },
        description: {
          en: "Identify your bestselling items by sales volume and revenue contribution.",
          bn: "কোন পণ্যগুলো সবচেয়ে বেশি বিক্রি হচ্ছে এবং মুনাফা আনছে তা স্পষ্ট জানুন।",
        },
      },
      {
        icon: BarChart3,
        title: {
          en: "Weekly Sales Activity Charts",
          bn: "সাপ্তাহিক সেলস অ্যাক্টিভিটি গ্রাফ",
        },
        description: {
          en: "Clean visual representations of daily order patterns across the past 7 days.",
          bn: "গত ৭ দিনের বিক্রির ওঠানামা পরিষ্কার বার-চার্টের মাধ্যমে পর্যবেক্ষণ করুন।",
        },
      },
      {
        icon: FileText,
        title: {
          en: "Order Volume & Delivery Rates",
          bn: "অর্ডার সংখ্যা ও সাকসেস রেট",
        },
        description: {
          en: "Compare total orders received versus successfully delivered parcels.",
          bn: "মোট অর্ডারের সাথে সফলভাবে ডেলিভারি হওয়া পার্সেলের অনুপাত মেপে নিন।",
        },
      },
      {
        icon: ShieldCheck,
        title: {
          en: "Clean Exportable Summaries",
          bn: "ডাউনলোডযোগ্য সারসংক্ষেপ",
        },
        description: {
          en: "Export itemized revenue summaries for bookkeeping and financial audits.",
          bn: "হিসাবরক্ষণ ও অডিটের সুবিধার্থে বিক্রয় বিবরণী সহজে এক্সপোর্ট করুন।",
        },
      },
    ],
    workflow: [
      {
        stepNumber: 1,
        title: {
          en: "Automatic Data Capture",
          bn: "স্বয়ংক্রিয় তথ্য সংগ্রহ",
        },
        description: {
          en: "Every checkout and order update feeds directly into your analytics engine.",
          bn: "প্রতিটি নতুন অর্ডার ও পেমেন্টের তথ্য স্বয়ংক্রিয়ভাবে অ্যানালিটিক্সে জমা হয়।",
        },
      },
      {
        stepNumber: 2,
        title: {
          en: "Instant Aggregation",
          bn: "মুহূর্তেই হিসাব গণনা",
        },
        description: {
          en: "Metrics update in real time with zero manual spreadsheet calculations required.",
          bn: "কোনো জটিল হিসাব ছাড়া নিমিষেই মোট বিক্রি ও অর্ডার ভ্যালু গণনা হয়।",
        },
      },
      {
        stepNumber: 3,
        title: {
          en: "Identify Key Trends",
          bn: "বিক্রির ট্রেন্ড পর্যবেক্ষণ",
        },
        description: {
          en: "Review weekly sales activity to see peak shopping days and bestselling items.",
          bn: "কোন দিনে বিক্রি বাড়ে এবং কোন পণ্যের চাহিদা বেশি তা চিহ্নিত করুন।",
        },
      },
      {
        stepNumber: 4,
        title: {
          en: "Make Informed Decisions",
          bn: "সঠিক ব্যবসায়িক সিদ্ধান্ত",
        },
        description: {
          en: "Re-order proven bestsellers and optimize marketing campaigns for peak days.",
          bn: "চাহিদাবহুল পণ্য সময়মতো রি-স্টক করুন এবং সেরা দিনে অফার ক্যাম্পেইন চালান।",
        },
      },
    ],
    visual: {
      title: {
        en: "Sales Activity & Performance Dashboard",
        bn: "সেলস অ্যাক্টিভিটি ও পারফরম্যান্স ড্যাশবোর্ড",
      },
      caption: {
        en: "CartX Sales Activity and Average Order Value metrics console (Illustrative demo data).",
        bn: "কার্টএক্স বিক্রয় পরিসংখ্যান এবং গড় অর্ডার ভ্যালু ড্যাশবোর্ড প্রিভিউ (ডেমো ডেটা ভিত্তিক)।",
      },
      render: (t) => (
        <ReportsAnalyticsMockup t={t} notice="Illustrative demo data" />
      ),
    },
    benefits: [
      {
        icon: TrendingUp,
        title: {
          en: "Confident Stock Replenishment",
          bn: "নির্ভুল স্টক রিলোড",
        },
        description: {
          en: "Restock items backed by actual historical sales rather than guesswork.",
          bn: "অনুমানের ওপর নির্ভর না করে প্রকৃত বিক্রির ডেটা দেখে নতুন পণ্য আনুন।",
        },
      },
      {
        icon: Zap,
        title: {
          en: "Maximize Promotional ROI",
          bn: "বিজ্ঞাপনের সেরা ফলাফল",
        },
        description: {
          en: "Measure the exact revenue boost generated by discount codes and sales campaigns.",
          bn: "ডিসকাউন্ট বা বিজ্ঞাপনের ফলে মোট বিক্রিতে কেমন প্রভাব পড়ল তা স্পষ্ট বুঝুন।",
        },
      },
      {
        icon: Clock,
        title: {
          en: "Prepare for Peak Demand",
          bn: "ব্যস্ত মৌসুমের প্রস্তুতি",
        },
        description: {
          en: "Spot seasonal demand surges early to organize packaging staff and courier dispatch.",
          bn: "ঈদ বা উৎসবের সময় বিক্রির বৃদ্ধির পূর্বাভাস পেয়ে প্যাকিং টিম প্রস্তুত রাখুন।",
        },
      },
      {
        icon: FileText,
        title: {
          en: "Simplified Accounting",
          bn: "সহজ হিসাবরক্ষণ ও স্বচ্ছতা",
        },
        description: {
          en: "Clear sales data eliminates days of tedious manual ledger reconciliations.",
          bn: "মাস শেষে মোট হিসাব মেলাতে গিয়ে খাতা নিয়ে বসে থাকার দিন শেষ।",
        },
      },
    ],
    relatedFeatures: [
      {
        slug: "order-management",
        name: { en: "Order Management", bn: "অর্ডার ম্যানেজমেন্ট" },
        description: {
          en: "Fulfill the customer transactions tracked in your analytics.",
          bn: "অ্যানালিটিক্সে প্রদর্শিত প্রতিটি অর্ডার সহজেই সম্পন্ন করুন।",
        },
        icon: ShoppingBag,
      },
      {
        slug: "customer-management",
        name: { en: "Customer Management", bn: "কাস্টমার ম্যানেজমেন্ট" },
        description: {
          en: "Identify repeat buyers and monitor customer lifetime value.",
          bn: "নিয়মিত ক্রেতাদের চিহ্নিত করুন এবং তাদের মোট কেনাকাটা দেখুন।",
        },
        icon: Users,
      },
      {
        slug: "product-management",
        name: { en: "Product Management", bn: "প্রোডাক্ট ম্যানেজমেন্ট" },
        description: {
          en: "Update pricing and merchandising for top-performing items.",
          bn: "জনপ্রিয় পণ্যগুলোর ক্যাটালগ ও মূল্য আপডেট করুন।",
        },
        icon: Package,
      },
    ],
    planAvailability: {
      starter: {
        en: "Core revenue totals, order volume counters, basic dashboard",
        bn: "মোট বিক্রির হিসাব, অর্ডার কাউন্টার ও বেসিক ড্যাশবোর্ড",
      },
      growth: {
        en: "Expanded weekly activity charts, AOV metrics, top product logs",
        bn: "সাপ্তাহিক চার্ট, এওভি মেট্রিক্স ও সেরা বিক্রিত পণ্যের তালিকা",
      },
      scale: {
        en: "Advanced multi-channel reports, custom date filtering, exports",
        bn: "উন্নত মাল্টি-চ্যানেল অ্যানালিটিক্স, কাস্টম ডেট রেঞ্জ ও এক্সপোর্ট",
      },
      note: {
        en: "Dashboard metrics and charts reflect verified store transaction activity.",
        bn: "ড্যাশবোর্ডের সকল পরিসংখ্যান আপনার স্টোরের প্রকৃত ট্রানজ্যাকশন থেকে তৈরি হয়।",
      },
    },
    faqs: [
      {
        id: "an-faq-1",
        question: {
          en: "How quickly do analytics update after a sale?",
          bn: "বিক্রির পর অ্যানালিটিক্স কত দ্রুত আপডেট হয়?",
        },
        answer: {
          en: "Sales figures, order volume, and product rankings refresh in real time as orders are placed and confirmed.",
          bn: "অর্ডার নিশ্চিত হওয়ার সাথে সাথে বিক্রয় ও অর্ডারের পরিমাণ রিয়েল-টাইমে আপডেট হয়।",
        },
      },
      {
        id: "an-faq-2",
        question: {
          en: "Can I see which products generate the most revenue?",
          bn: "কোন পণ্যগুলো সবচেয়ে বেশি বিক্রি হচ্ছে তা কি দেখা যাবে?",
        },
        answer: {
          en: "Yes. CartX highlights your top-performing products by both order count and total revenue generated.",
          bn: "হ্যাঁ, অর্ডারের সংখ্যা এবং মোট অর্জিত অর্থের ভিত্তিতে সেরা পণ্যগুলোর তালিকা দেখতে পাবেন।",
        },
      },
      {
        id: "an-faq-3",
        question: {
          en: "What is Average Order Value (AOV)?",
          bn: "গড় অর্ডার মূল্য (AOV) কী?",
        },
        answer: {
          en: "AOV calculates the average amount of money spent per customer checkout, helping you measure upsell and cross-sell performance.",
          bn: "প্রতিটি অর্ডারে ক্রেতারা গড়ে কত টাকা খরচ করছেন তা পরিমাপ করতে এওভি সাহায্য করে।",
        },
      },
      {
        id: "an-faq-4",
        question: {
          en: "Can I export data for my accountant?",
          bn: "হিসাবরক্ষকের জন্য কি রিপোর্ট এক্সপোর্ট করা যায়?",
        },
        answer: {
          en: "Yes. Supported plans allow exporting sales summaries so you can easily file tax records and review monthly performance.",
          bn: "হ্যাঁ, অনুমোদিত প্ল্যানে বিক্রির বিবরণী এক্সপোর্ট করে অ্যাকাউন্টিং বা ট্যাক্স ফাইলিংয়ের কাজে ব্যবহার করা যায়।",
        },
      },
    ],
    cta: {
      eyebrow: {
        en: "Grow with Confidence",
        bn: "সঠিক তথ্যে ব্যবসা বৃদ্ধি",
      },
      title: {
        en: "Unlock Actionable Business Insights.",
        bn: "ব্যবসায়িক ডেটার সাহায্যে এগিয়ে থাকুন সবসময়।",
      },
      description: {
        en: "Monitor revenue, identify bestsellers, and make data-driven decisions that grow your store.",
        bn: "বিক্রির সঠিক হিসাব দেখে নিশ্চিত করুন আপনার অনলাইন ব্যবসার ধারাবাহিক প্রবৃদ্ধি।",
      },
      buttonText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      trustNote: {
        en: "Clear real-time sales summaries included on all plans.",
        bn: "সকল প্ল্যানেই রিয়েল-টাইম বিক্রয় সারসংক্ষেপ অন্তর্ভুক্ত।",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 8. Customer Management
  // ─────────────────────────────────────────────────────────────
  "customer-management": {
    slug: "customer-management",
    name: {
      en: "Customer Management",
      bn: "কাস্টমার ম্যানেজমেন্ট",
    },
    eyebrow: {
      en: "Customer Directory & History",
      bn: "গ্রাহক তথ্য ও ইতিহাস",
    },
    icon: Users,
    status: "available",
    seo: {
      title: "Customer Management",
      description:
        "Maintain organized customer profiles, review purchase histories, verify delivery addresses, and identify loyal repeat shoppers with CartX.",
    },
    hero: {
      titlePlain: {
        en: "Understand Your Customers",
        bn: "গ্রাহক তথ্য সংরক্ষণ",
      },
      titleHighlight: {
        en: "& Build Lasting Loyalty.",
        bn: "ও বিশ্বস্ত সম্পর্ক তৈরি করুন।",
      },
      description: {
        en: "Maintain organized customer profiles, review past purchase histories, verify delivery addresses, and identify your highest-value repeat shoppers.",
        bn: "গ্রাহকদের বিস্তারিত প্রোফাইল সংরক্ষণ করুন, পূর্বের ক্রয়ের ইতিহাস দেখুন, ডেলিভারি ঠিকানা যাচাই করুন এবং নিয়মিত ক্রেতাদের বিশেষ সুবিধা দিন।",
      },
      primaryCtaText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      secondaryCtaText: {
        en: "View Capabilities",
        bn: "সুবিধাসমূহ দেখুন",
      },
    },
    problem: {
      eyebrow: {
        en: "Forgotten Customers",
        bn: "গ্রাহক তথ্য হারানোর সমস্যা",
      },
      title: {
        en: "Losing customer contact details limits repeat purchases.",
        bn: "গ্রাহকের যোগাযোগের তথ্য হারিয়ে গেলে পুনরায় বিক্রি করার সুযোগ নষ্ট হয়।",
      },
      description: {
        en: "When customer orders are scattered across social media chats, you cannot see who your loyal repeat buyers are or access their delivery preferences for future sales.",
        bn: "ফেসবুক মেসেজ বা হোয়াটসঅ্যাপে অর্ডার নিলে নিয়মিত ক্রেতাদের চেনা যায় না, তাদের পছন্দ-অপছন্দ বোঝা যায় না এবং রি-টার্গেটিং করা অসম্ভব হয়ে পড়ে।",
      },
      bulletPoints: [
        {
          en: "No central record of who your highest-spending loyal shoppers are",
          bn: "সবচেয়ে বেশি কেনাকাটা করা বিশ্বস্ত ক্রেতাদের আলাদা তালিকা না থাকা",
        },
        {
          en: "Re-asking repeat buyers for their address and contact numbers every time",
          bn: "নিয়মিত ক্রেতাদের কাছেও বারবার ফোন নম্বর ও ঠিকানা চেয়ে বিরক্ত করা",
        },
        {
          en: "Missed opportunities to send exclusive discounts to win back past shoppers",
          bn: "পুরোনো ক্রেতাদের আকৃষ্ট করতে বিশেষ অফার পাঠানোর সুযোগ থেকে বঞ্চিত হওয়া",
        },
      ],
    },
    explanation: {
      eyebrow: {
        en: "The CartX Solution",
        bn: "কার্টএক্স সমাধান",
      },
      title: {
        en: "A unified customer directory built automatically with every sale.",
        bn: "প্রতিটি বিক্রির সাথে স্বয়ংক্রিয়ভাবে গড়ে ওঠা সমন্বিত কাস্টমার ডিরেক্টরি।",
      },
      description: {
        en: "CartX automatically compiles customer profiles from checkout information. Access complete order records, lifetime spending totals, and verified phone numbers whenever you need them.",
        bn: "কার্টএক্সে চেকআউটের তথ্যের ভিত্তিতে নিজে থেকেই গ্রাহকের প্রোফাইল তৈরি হয়। মোট কেনাকাটা, পূর্বের অর্ডার এবং যোগাযোগের ঠিকানা সবসময় হাতের কাছে সংরক্ষিত থাকে।",
      },
      highlightPill: {
        en: "Automated Customer Directory",
        bn: "স্বয়ংক্রিয় গ্রাহক প্রোফাইল",
      },
    },
    capabilities: [
      {
        icon: Users,
        title: {
          en: "Automated Shopper Profiles",
          bn: "স্বয়ংক্রিয় গ্রাহক প্রোফাইল",
        },
        description: {
          en: "Profiles are created and updated seamlessly upon every completed store checkout.",
          bn: "প্রতিটি চেকআউটের পর গ্রাহকের নাম, ফোন ও ঠিকানা নিয়ে প্রোফাইল তৈরি হয়।",
        },
      },
      {
        icon: TrendingUp,
        title: {
          en: "Lifetime Order & Spend Totals",
          bn: "মোট অর্ডার ও ব্যয়ের হিসাব",
        },
        description: {
          en: "Instantly see how many orders a shopper has placed and their total spend.",
          bn: "কোন গ্রাহক এ পর্যন্ত কতগুলো অর্ডার করেছেন এবং মোট কত টাকা খরচ করেছেন তা দেখুন।",
        },
      },
      {
        icon: Globe,
        title: {
          en: "Saved Delivery Addresses",
          bn: "সংরক্ষিত ডেলিভারি ঠিকানা",
        },
        description: {
          en: "Keep verified shipping addresses on record to speed up re-orders and deliveries.",
          bn: "যাচাইকৃত ঠিকানা সংরক্ষিত থাকায় পুনরাবৃত্ত অর্ডারে সময় বাঁচে ও নির্ভুল থাকে।",
        },
      },
      {
        icon: Clock,
        title: {
          en: "Complete Purchase Timelines",
          bn: "সম্পূর্ণ ক্রয়ের ইতিহাস",
        },
        description: {
          en: "Inspect every specific item, variant, and date associated with a customer.",
          bn: "পূর্বে কোন তারিখে কোন সাইজ বা রঙের পণ্য কিনেছেন তার স্পষ্ট ইতিহাস দেখুন।",
        },
      },
      {
        icon: Zap,
        title: {
          en: "One-Click Direct Dialing",
          bn: "এক ক্লিকে ফোন কল ও যোগাযোগ",
        },
        description: {
          en: "Quick phone dial and messaging shortcuts to confirm delivery details quickly.",
          bn: "ডেলিভারি কনফার্মেশন বা কোনো তথ্যের জন্য এক ক্লিকেই ফোন করার সুবিধা।",
        },
      },
      {
        icon: ShieldCheck,
        title: {
          en: "Searchable Customer Directory",
          bn: "সার্চযোগ্য কাস্টমার ডিরেক্টরি",
        },
        description: {
          en: "Find customer records instantly by phone number, name, or past order number.",
          bn: "ফোন নম্বর, নাম কিংবা অর্ডার নম্বর লিখে সার্চ করলেই নিমেষে তথ্য চলে আসে।",
        },
      },
    ],
    workflow: [
      {
        stepNumber: 1,
        title: {
          en: "Checkout Information",
          bn: "চেকআউটে তথ্য প্রদান",
        },
        description: {
          en: "Customer provides their name, phone number, and delivery address during checkout.",
          bn: "কেনাকাটা করার সময় ক্রেতা তার নাম, ফোন নম্বর ও ডেলিভারি ঠিকানা প্রদান করেন।",
        },
      },
      {
        stepNumber: 2,
        title: {
          en: "Profile Compiled",
          bn: "প্রোফাইল তৈরি ও আপডেট",
        },
        description: {
          en: "CartX automatically links the order to an existing or newly created customer profile.",
          bn: "সিস্টেম স্বয়ংক্রিয়ভাবে তথ্য সমন্বয় করে কাস্টমার রেকর্ড তৈরি বা আপডেট করে।",
        },
      },
      {
        stepNumber: 3,
        title: {
          en: "Personalized Support",
          bn: "ব্যক্তিগত কাস্টমার সেবা",
        },
        description: {
          en: "Support staff references past order history to answer customer inquiries accurately.",
          bn: "ক্রেতা কল দিলে তার পূর্বের অর্ডারের তথ্য দেখে দ্রুত ও চমৎকার সেবা দিন।",
        },
      },
      {
        stepNumber: 4,
        title: {
          en: "Build Brand Loyalty",
          bn: "বিশ্বস্ত ক্রেতা তৈরি",
        },
        description: {
          en: "Reward VIP repeat buyers with exclusive promotions and priority fulfillment.",
          bn: "নিয়মিত ক্রেতাদের স্পেশাল ডিসকাউন্ট দিয়ে তাদের সাথে দীর্ঘস্থায়ী সম্পর্ক গড়ুন।",
        },
      },
    ],
    visual: {
      title: {
        en: "Customer Profile & Purchase History",
        bn: "গ্রাহক প্রোফাইল ও ক্রয়ের ইতিহাস",
      },
      caption: {
        en: "CartX Customer Management profile and lifetime order overview (Illustrative demo data).",
        bn: "কার্টএক্স গ্রাহক প্রোফাইল এবং আজীবন অর্ডারের সংক্ষিপ্ত রূপরেখা (ডেমো ডেটা ভিত্তিক)।",
      },
      render: (t) => (
        <CustomerManagementMockup t={t} notice="Illustrative demo data" />
      ),
    },
    benefits: [
      {
        icon: TrendingUp,
        title: {
          en: "Higher Repeat Purchases",
          bn: "পুনরাবৃত্ত বিক্রির হার বৃদ্ধি",
        },
        description: {
          en: "Delighting past shoppers with personalized care drives high-margin repeat revenue.",
          bn: "নিয়মিত ক্রেতাদের যত্ন নিলে তারা বারবার আপনার স্টোর থেকেই কেনাকাটা করবেন।",
        },
      },
      {
        icon: ShieldCheck,
        title: {
          en: "Your Data, Your Ownership",
          bn: "গ্রাহক তথ্যের পূর্ণ মালিকানা",
        },
        description: {
          en: "Customer phone numbers and records belong to you, safe from social media platform changes.",
          bn: "গ্রাহকদের যোগাযোগের তথ্য আপনার নিজস্ব সম্পদে পরিণত হয়, যা সোশ্যাল মিডিয়ার ওপর নির্ভরশীল নয়।",
        },
      },
      {
        icon: Zap,
        title: {
          en: "Fast Delivery Address Lookup",
          bn: "দ্রুত ঠিকানা ভেরিফিকেশন",
        },
        description: {
          en: "Repeat orders skip tedious address verification since reliable details are on record.",
          bn: "পুরোনো ক্রেতার সঠিক ঠিকানা সংরক্ষিত থাকায় ভুল পার্সেল যাওয়ার ঝুঁকি থাকে না।",
        },
      },
      {
        icon: Users,
        title: {
          en: "VIP Shopper Identification",
          bn: "ভিআইপি ক্রেতাদের সহজ সনাক্তকরণ",
        },
        description: {
          en: "Spot top-tier spenders immediately and give them priority customer service.",
          bn: "সবচেয়ে বেশি খরচ করা মূল্যবান ক্রেতাদের চিনে নিয়ে স্পেশাল সার্ভিস দিন।",
        },
      },
    ],
    relatedFeatures: [
      {
        slug: "order-management",
        name: { en: "Order Management", bn: "অর্ডার ম্যানেজমেন্ট" },
        description: {
          en: "Track individual customer purchases and fulfillment status.",
          bn: "নির্দিষ্ট গ্রাহকের প্রতিটি অর্ডার ও ডেলিভারি স্ট্যাটাস দেখুন।",
        },
        icon: ShoppingBag,
      },
      {
        slug: "analytics",
        name: { en: "Reports & Analytics", bn: "রিপোর্ট ও অ্যানালিটিক্স" },
        description: {
          en: "Monitor overall customer acquisition and store sales velocity.",
          bn: "নতুন গ্রাহক বৃদ্ধির গতি ও সামগ্রিক বিক্রয় পর্যবেক্ষণ করুন।",
        },
        icon: BarChart3,
      },
      {
        slug: "payment-management",
        name: { en: "Payment Management", bn: "পেমেন্ট ম্যানেজমেন্ট" },
        description: {
          en: "Inspect payment methods preferred by your top shoppers.",
          bn: "সেরা ক্রেতাদের পছন্দের পেমেন্ট মাধ্যমগুলো পর্যালোচনা করুন।",
        },
        icon: CreditCard,
      },
    ],
    planAvailability: {
      starter: {
        en: "Automatic customer profile creation up to 100 customer records",
        bn: "১০০ জন গ্রাহক পর্যন্ত স্বয়ংক্রিয় প্রোফাইল তৈরি ও সংরক্ষণ",
      },
      growth: {
        en: "Unlimited customer directory, lifetime spend metrics, VIP tags",
        bn: "সীমাহীন গ্রাহক ডিরেক্টরি, লাইফটাইম স্পেন্ড হিসেব ও ভিআইপি ট্যাগ",
      },
      scale: {
        en: "Advanced customer analytics, exportable data, multi-staff access",
        bn: "উন্নত কাস্টমার অ্যানালিটিক্স, ডাটা এক্সপোর্ট ও মাল্টি-স্টাফ সুবিধা",
      },
      note: {
        en: "Customer records are securely encrypted and never shared with third parties.",
        bn: "গ্রাহকের সকল তথ্য এনক্রিপ্টেড থাকে এবং কখনোই অন্য কারও সাথে শেয়ার করা হয় না।",
      },
    },
    faqs: [
      {
        id: "cm-faq-1",
        question: {
          en: "Do I have to manually enter customer information?",
          bn: "গ্রাহকের তথ্য কি ম্যানুয়ালি এন্ট্রি করতে হবে?",
        },
        answer: {
          en: "No. CartX automatically captures and compiles customer records from the name, phone, and delivery address provided during online checkout.",
          bn: "না, চেকআউটের সময় ক্রেতা যে তথ্য দেন তার ভিত্তিতে কার্টএক্স নিজে থেকেই প্রোফাইল তৈরি করে।",
        },
      },
      {
        id: "cm-faq-2",
        question: {
          en: "Can I see all orders placed by a single customer?",
          bn: "একজন ক্রেতার অতীতের সব অর্ডার কি একসাথে দেখা যাবে?",
        },
        answer: {
          en: "Yes. Clicking any customer profile shows their complete chronological order history and total lifetime spending.",
          bn: "হ্যাঁ, যেকোনো কাস্টমার প্রোফাইলে ক্লিক করলেই তার পূর্বের সব অর্ডারের তালিকা ও মোট টাকার হিসাব দেখা যাবে।",
        },
      },
      {
        id: "cm-faq-3",
        question: {
          en: "How can I search for a specific customer?",
          bn: "নির্দিষ্ট কোনো গ্রাহককে কীভাবে খুঁজে পাব?",
        },
        answer: {
          en: "You can quickly search the Customer Directory by phone number, customer name, or past order number.",
          bn: "গ্রাহকের ফোন নম্বর, নাম কিংবা অর্ডার নম্বর লিখে সার্চ বক্সে সার্চ করলেই সাথে সাথে রেকর্ড চলে আসে।",
        },
      },
      {
        id: "cm-faq-4",
        question: {
          en: "Is customer information private and secure?",
          bn: "গ্রাহকের তথ্য কি নিরাপদ ও গোপন থাকবে?",
        },
        answer: {
          en: "Yes. All customer records are stored securely with enterprise-level encryption and access is strictly restricted to your authenticated store account.",
          bn: "হ্যাঁ, সকল গ্রাহক তথ্য সুরক্ষিত সার্ভারে এনক্রিপ্টেড থাকে এবং শুধুমাত্র আপনার স্টোরের অথেনটিকেটেড টিম এটি দেখতে পারে।",
        },
      },
    ],
    cta: {
      eyebrow: {
        en: "Build Customer Relationships",
        bn: "গ্রাহকদের সাথে দীর্ঘস্থায়ী সম্পর্ক",
      },
      title: {
        en: "Own Your Customer Data with CartX.",
        bn: "গ্রাহকের তথ্যের পূর্ণ নিয়ন্ত্রণ রাখুন নিজের কাছে।",
      },
      description: {
        en: "Keep complete purchase records, recognize repeat shoppers, and build lasting customer loyalty.",
        bn: "নিয়মিত ক্রেতাদের সেরা সেবা দিন এবং আপনার অনলাইন ব্যবসাকে আরও প্রসারিত করুন।",
      },
      buttonText: {
        en: "Explore Pricing",
        bn: "প্ল্যান ও প্রাইসিং দেখুন",
      },
      trustNote: {
        en: "Encrypted, dedicated customer directory included on all plans.",
        bn: "সকল প্ল্যানেই সুরক্ষিত কাস্টমার ডিরেক্টরি অন্তর্ভুক্ত।",
      },
    },
  },
};

export const FEATURE_SLUGS = Object.keys(FEATURE_DETAILS_DATA);

export function getFeatureBySlug(slug: string): FeatureDetailConfig | undefined {
  return FEATURE_DETAILS_DATA[slug];
}
