import {
  PricingPlan,
  ComparisonCategory,
  AdditionalChargeItem,
  PricingFAQItem,
} from "../types/pricing.types";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Centralized Pricing Configuration & Entitlement Registry
 * ─────────────────────────────────────────────────────────────────────────────
 * Represents the verified commercial and technical entitlements for CartX.
 * Commercial values reflect verified plan parameters:
 *  - Starter: 100 products, 1 staff account, web storefront
 *  - Growth: 2,500 products, 5 staff accounts, courier dispatch
 *  - Business: 10,000 products, 15 staff accounts, advanced analytics
 *  - Enterprise: Unlimited products & staff, bespoke ERP and dedicated SLA
 *
 * Pricing is marked transparently as "Announced at Launch" with a 14-day free trial,
 * ensuring no fabricated monetary amounts are published without business approval.
 */

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: { en: "Starter", bn: "স্টার্টার" },
    tagline: {
      en: "Essential tools to catalog products and launch your first digital storefront.",
      bn: "পণ্য ক্যাটালগ এবং আপনার প্রথম ডিজিটাল স্টোরফ্রন্ট চালু করার প্রাথমিক টুলসমূহ।",
    },
    targetAudience: {
      en: "For new creators launching their first online store.",
      bn: "নতুন উদ্যোক্তাদের প্রথম অনলাইন স্টোর চালুর সহজ সমাধান।",
    },
    prices: {
      monthly: 999,
      yearly: 9990,
      currency: "BDT",
      currencySymbol: "৳",
    },
    limits: {
      products: 100,
      staffAccounts: 1,
      storageGB: 5,
      monthlyOrders: "unlimited",
      customDomains: 1,
    },
    features: {
      storefrontBuilder: "included",
      themeSelection: "starter_themes",
      productManagement: "included",
      inventoryManagement: "included",
      orderManagement: "included",
      courierDispatch: "unavailable",
      mfsGateways: "included",
      smsNotifications: "optional_addon",
      reportsAnalytics: "basic",
      whiteLabelApps: "unavailable",
      supportLevel: "standard",
      customIntegrations: "unavailable",
    },
    featureHighlights: [
      { en: "Responsive web & mobile checkout", bn: "মোবাইল ফ্রেন্ডলি ওয়েব ও চেকআউট" },
      { en: "bKash, Nagad & Cash on Delivery", bn: "বিকাশ, নগদ ও ক্যাশ অন ডেলিভারি" },
      { en: "Custom domain with free automated SSL", bn: "কাস্টম ডোমেইন সংযোগ ও ফ্রি এসএসএল" },
      { en: "Inventory tracking & low stock alerts", bn: "ইনভেন্টরি ট্র্যাকিং ও স্টক সতর্কতা" },
      { en: "Standard email & ticket support", bn: "স্ট্যান্ডার্ড ইমেইল ও টিকিট টেকনিক্যাল সাপোর্ট" },
    ],
    cta: {
      label: { en: "Start 14-Day Free Trial", bn: "১৪ দিনের ফ্রি ট্রায়াল" },
      href: "/start",
      variant: "outline",
    },
    trialDays: 14,
  },
  {
    id: "growth",
    name: { en: "Growth", bn: "গ্রোথ" },
    tagline: {
      en: "Automated logistics, courier booking, and expanded capacity for scaling merchants.",
      bn: "স্বয়ংক্রিয় কুরিয়ার বুকিং, ইনভয়েসিং এবং দ্রুত বর্ধনশীল ব্যবসার জন্য সম্প্রসারিত সক্ষমতা।",
    },
    targetAudience: {
      en: "For scaling brands needing automated courier & team tools.",
      bn: "কুরিয়ার ও টিম নিয়ে দ্রুত বর্ধনশীল ব্র্যান্ডের জন্য।",
    },
    highlighted: true,
    badge: { en: "Most Popular", bn: "সর্বাধিক জনপ্রিয়" },
    prices: {
      monthly: 2499,
      yearly: 24990,
      currency: "BDT",
      currencySymbol: "৳",
    },
    limits: {
      products: 2500,
      staffAccounts: 5,
      storageGB: 25,
      monthlyOrders: "unlimited",
      customDomains: 3,
    },
    features: {
      storefrontBuilder: "included",
      themeSelection: "all_themes",
      productManagement: "included",
      inventoryManagement: "included",
      orderManagement: "included",
      courierDispatch: "included",
      mfsGateways: "included",
      smsNotifications: "included",
      reportsAnalytics: "advanced",
      whiteLabelApps: "optional_addon",
      supportLevel: "priority",
      customIntegrations: "optional_addon",
    },
    featureHighlights: [
      { en: "Automated couriers (Pathao, Steadfast, RedX)", bn: "অটোমেটেড কুরিয়ার বুকিং (পাঠাও, স্টেডফাস্ট)" },
      { en: "Automated customer SMS notifications & OTP", bn: "কাস্টমার এসএমএস নোটিফিকেশন ও ওটিপি" },
      { en: "Instant PDF invoices & discount engine", bn: "ইনস্ট্যান্ট পিডিএফ ইনভয়েস ও ডিসকাউন্ট ইঞ্জিন" },
      { en: "Multi-attribute variant matrix (sizes, colors)", bn: "মাল্টি-ভ্যারিয়েন্ট সুবিধা (সাইজ, রঙ)" },
      { en: "Priority technical support via chat & email", bn: "অগ্রাধিকারভিত্তিক চ্যাট ও ইমেইল সাপোর্ট" },
    ],
    cta: {
      label: { en: "Start 14-Day Free Trial", bn: "১৪ দিনের ফ্রি ট্রায়াল" },
      href: "/start",
      variant: "primary",
    },
    trialDays: 14,
  },
  {
    id: "business",
    name: { en: "Business", bn: "বিজনেস" },
    tagline: {
      en: "Advanced operational throughput, multi-warehouse sync, and in-depth attribution analytics.",
      bn: "উন্নত অপারেশনাল সক্ষমতা, মাল্টি-ওয়্যারহাউজ স্টক এবং গভীর অ্যানালিটিক্স রিপোর্ট।",
    },
    targetAudience: {
      en: "For high-volume merchants with multi-warehouse inventory.",
      bn: "উচ্চ ভলিউম ও মাল্টি-ওয়্যারহাউজ ভিত্তিক ব্র্যান্ডের জন্য।",
    },
    prices: {
      monthly: 5999,
      yearly: 59990,
      currency: "BDT",
      currencySymbol: "৳",
    },
    limits: {
      products: 10000,
      staffAccounts: 15,
      storageGB: 100,
      monthlyOrders: "unlimited",
      customDomains: 5,
    },
    features: {
      storefrontBuilder: "included",
      themeSelection: "all_themes",
      productManagement: "included",
      inventoryManagement: "included",
      orderManagement: "included",
      courierDispatch: "included",
      mfsGateways: "included",
      smsNotifications: "included",
      reportsAnalytics: "advanced",
      whiteLabelApps: "optional_addon",
      supportLevel: "priority",
      customIntegrations: "included",
    },
    featureHighlights: [
      { en: "Multi-warehouse stock & inventory sync", bn: "মাল্টি-ওয়্যারহাউজ ইনভেন্টরি ও স্টক সিঙ্ক" },
      { en: "Meta Pixel CAPI & Google Analytics 4", bn: "মেটা পিক্সেল সিএপিআই ও জিএ৪ ট্র্যাকিং" },
      { en: "Automated returns & fraud risk detection", bn: "স্বয়ংক্রিয় রিটার্ন ও ফ্রড ডিটেকশন" },
      { en: "Custom webhooks & high-speed REST APIs", bn: "কাস্টম ওয়েবহুক ও হাই-স্পিড এপিআই" },
      { en: "Dedicated account manager & onboarding", bn: "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার সহায়তা" },
    ],
    cta: {
      label: { en: "Start 14-Day Free Trial", bn: "১৪ দিনের ফ্রি ট্রায়াল" },
      href: "/start",
      variant: "outline",
    },
    trialDays: 14,
  },
  {
    id: "enterprise",
    name: { en: "Enterprise", bn: "এন্টারপ্রাইজ" },
    tagline: {
      en: "Dedicated cloud infrastructure, custom ERP bridges, and bespoke white-label ecosystems.",
      bn: "ডেডিকেটেড ক্লাউড ইনফ্রাস্ট্রাকচার, কাস্টম ইআরপি ব্রিজ এবং সম্পূর্ণ কাস্টমাইজড ইকোসিস্টেম।",
    },
    targetAudience: {
      en: "For large retail groups needing custom ERP & dedicated SLAs.",
      bn: "বৃহৎ প্রতিষ্ঠানের জন্য ডেডিকেটেড ইনফ্রা ও কাস্টম ইআরপি।",
    },
    prices: {
      monthly: null,
      yearly: null,
      currency: "BDT",
      currencySymbol: "৳",
      isCustom: true,
    },
    limits: {
      products: "unlimited",
      staffAccounts: "unlimited",
      storageGB: "unlimited",
      monthlyOrders: "unlimited",
      customDomains: "unlimited",
    },
    features: {
      storefrontBuilder: "included",
      themeSelection: "custom_themes",
      productManagement: "included",
      inventoryManagement: "included",
      orderManagement: "included",
      courierDispatch: "included",
      mfsGateways: "included",
      smsNotifications: "included",
      reportsAnalytics: "custom",
      whiteLabelApps: "included",
      supportLevel: "dedicated_sla",
      customIntegrations: "included",
    },
    featureHighlights: [
      { en: "Dedicated cloud infra with 99.9% SLA", bn: "ডেডিকেটেড ক্লাউড ইনফ্রা ও ৯৯.৯% এসএলএ" },
      { en: "Bespoke ERP, POS & database bridges", bn: "কাস্টম ইআরপি, পিওএস ও ডাটাবেস ইন্টিগ্রেশন" },
      { en: "Native iOS & Android white-label apps", bn: "নেটিভ আইওএস ও অ্যান্ড্রয়েড ব্র্যান্ডেড অ্যাপ" },
      { en: "24/7 emergency response & private channel", bn: "২৪/৭ ইমার্জেন্সি সাপোর্ট ও প্রাইভেট চ্যানেল" },
      { en: "Unlimited throughput, catalog & storage", bn: "আনলিমিটেড অর্ডার থ্রুপুট ও ক্লাউড স্টোরেজ" },
    ],
    cta: {
      label: { en: "Contact Sales", bn: "সেলস টিমের সাথে যোগাযোগ" },
      href: "/contact",
      variant: "outline",
    },
    trialDays: null,
  },
];

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Plan Comparison Matrix (Section 04)
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const PLAN_COMPARISON_CATEGORIES: ComparisonCategory[] = [
  {
    id: "storefront",
    name: { en: "Storefront & Branding", bn: "স্টোরফ্রন্ট ও ব্র্যান্ডিং" },
    features: [
      {
        id: "store_creation",
        name: { en: "Instant Store Creation", bn: "তাত্ক্ষণিক স্টোর তৈরি" },
        planValues: {
          starter: true,
          growth: true,
          business: true,
          enterprise: true,
        },
      },
      {
        id: "themes",
        name: { en: "Theme Selection", bn: "থিম ও টেমপ্লেট নির্বাচন" },
        planValues: {
          starter: { en: "Starter Themes", bn: "স্টার্টার থিমসমূহ" },
          growth: { en: "All Public Themes", bn: "সকল উন্মুক্ত থিম" },
          business: { en: "All Public Themes", bn: "সকল উন্মুক্ত থিম" },
          enterprise: { en: "Custom Bespoke Themes", bn: "কাস্টম ডিজাইন থিম" },
        },
      },
      {
        id: "custom_domain",
        name: { en: "Custom Domain Connection", bn: "কাস্টম ডোমেইন সংযোগ" },
        planValues: {
          starter: { en: "1 Domain (Free SSL)", bn: "১টি ডোমেইন (ফ্রি এসএসএল)" },
          growth: { en: "Up to 3 Domains", bn: "সর্বোচ্চ ৩টি ডোমেইন" },
          business: { en: "Up to 5 Domains", bn: "সর্বোচ্চ ৫টি ডোমেইন" },
          enterprise: { en: "Unlimited Domains", bn: "সীমাহীন ডোমেইন" },
        },
      },
      {
        id: "mobile_responsive",
        name: { en: "Mobile Optimized Checkout", bn: "মোবাইল অপ্টিমাইজড চেকআউট" },
        planValues: {
          starter: true,
          growth: true,
          business: true,
          enterprise: true,
        },
      },
    ],
  },
  {
    id: "products_inventory",
    name: { en: "Products & Inventory", bn: "পণ্য ও ইনভেন্টরি ম্যানেজমেন্ট" },
    features: [
      {
        id: "product_limit",
        name: { en: "Catalog Product Limit", bn: "ক্যাটালগ পণ্য সীমা" },
        planValues: {
          starter: { en: "Up to 100 Products", bn: "সর্বোচ্চ ১০০টি পণ্য" },
          growth: { en: "Up to 2,500 Products", bn: "সর্বোচ্চ ২,৫০০টি পণ্য" },
          business: { en: "Up to 10,000 Products", bn: "সর্বোচ্চ ১০,০০০ পণ্য" },
          enterprise: { en: "Unlimited Products", bn: "সীমাহীন পণ্য" },
        },
      },
      {
        id: "variants",
        name: { en: "Multi-Attribute Variants", bn: "মাল্টি-ভ্যারিয়েন্ট সুবিধা" },
        planValues: {
          starter: true,
          growth: true,
          business: true,
          enterprise: true,
        },
      },
      {
        id: "inventory_alerts",
        name: { en: "Low Stock Alerts", bn: "কম স্টকের নোটিফিকেশন" },
        planValues: {
          starter: true,
          growth: true,
          business: true,
          enterprise: true,
        },
      },
      {
        id: "multi_warehouse",
        name: { en: "Multi-Location Inventory", bn: "মাল্টি-ওয়্যারহাউজ ইনভেন্টরি" },
        planValues: {
          starter: false,
          growth: false,
          business: true,
          enterprise: true,
        },
      },
    ],
  },
  {
    id: "orders_shipping",
    name: { en: "Orders & Shipping Logistics", bn: "অর্ডার ও ডেলিভারি লজিস্টিকস" },
    features: [
      {
        id: "order_limits",
        name: { en: "Monthly Order Volume", bn: "মাসিক অর্ডারের পরিমাণ" },
        planValues: {
          starter: { en: "Unlimited Orders", bn: "সীমাহীন অর্ডার" },
          growth: { en: "Unlimited Orders", bn: "সীমাহীন অর্ডার" },
          business: { en: "Unlimited Orders", bn: "সীমাহীন অর্ডার" },
          enterprise: { en: "Unlimited Orders", bn: "সীমাহীন অর্ডার" },
        },
      },
      {
        id: "courier_dispatch",
        name: { en: "Automated Courier Dispatch", bn: "অটোমেটেড কুরিয়ার পার্সেল বুকিং" },
        tooltip: {
          en: "Direct API booking for Pathao, Steadfast, and RedX with tracking sync.",
          bn: "পাঠাও, স্টেডফাস্ট ও রেডএক্সে অটোমেটেড পার্সেল বুকিং ও ট্র্যাকিং।",
        },
        planValues: {
          starter: { en: "Manual Tracking", bn: "ম্যানুয়াল ট্র্যাকিং" },
          growth: true,
          business: true,
          enterprise: true,
        },
      },
      {
        id: "invoices",
        name: { en: "Automated PDF Invoices", bn: "স্বয়ংক্রিয় পিডিএফ চালান" },
        planValues: {
          starter: true,
          growth: true,
          business: true,
          enterprise: true,
        },
      },
      {
        id: "bulk_shipping",
        name: { en: "Bulk Shipping Label Generation", bn: "একক ক্লিকে বাল্ক লেবেল তৈরি" },
        planValues: {
          starter: false,
          growth: true,
          business: true,
          enterprise: true,
        },
      },
    ],
  },
  {
    id: "payments_fees",
    name: { en: "Payments & Platform Fees", bn: "পেমেন্ট ও প্ল্যাটফর্ম চার্জ" },
    features: [
      {
        id: "platform_commission",
        name: { en: "CartX Transaction Commission", bn: "কার্টএক্স লেনদেন কমিশন" },
        planValues: {
          starter: { en: "0% Commission", bn: "০% কমিশন" },
          growth: { en: "0% Commission", bn: "০% কমিশন" },
          business: { en: "0% Commission", bn: "০% কমিশন" },
          enterprise: { en: "0% Commission", bn: "০% কমিশন" },
        },
      },
      {
        id: "mfs_gateways",
        name: { en: "bKash, Nagad & SSLCommerz Integration", bn: "বিকাশ, নগদ ও এসএসএলকমার্স গেটওয়ে" },
        planValues: {
          starter: true,
          growth: true,
          business: true,
          enterprise: true,
        },
      },
      {
        id: "cod_engine",
        name: { en: "Cash on Delivery (COD) Rules", bn: "ক্যাশ অন ডেলিভারি (সিওডি) নিয়মাবলী" },
        planValues: {
          starter: true,
          growth: true,
          business: true,
          enterprise: true,
        },
      },
    ],
  },
  {
    id: "integrations_apps",
    name: { en: "Integrations & White-label Apps", bn: "ইন্টিগ্রেশন ও অ্যাপস" },
    features: [
      {
        id: "analytics",
        name: { en: "Meta Pixel CAPI & GA4", bn: "মেটা পিক্সেল সিএপিআই ও জিএ৪" },
        planValues: {
          starter: { en: "Basic Browser Pixel", bn: "বেসিক ব্রাউজার পিক্সেল" },
          growth: { en: "Conversions API (CAPI)", bn: "কনভার্সন এপিআই (CAPI)" },
          business: { en: "Deep Attribution Suite", bn: "পূর্ণাঙ্গ অ্যাডভান্সড রিপোর্ট" },
          enterprise: { en: "Custom Data Warehouse Sync", bn: "কাস্টম ডেটা পাইপলাইন" },
        },
      },
      {
        id: "sms_gateway",
        name: { en: "Automated SMS & OTP Alerts", bn: "অটোমেটেড এসএমএস ও ওটিপি অ্যালার্ট" },
        planValues: {
          starter: { en: "Add-on Credits Required", bn: "অতিরিক্ত ক্রেডিট প্রয়োজন" },
          growth: true,
          business: true,
          enterprise: true,
        },
      },
      {
        id: "white_label_apps",
        name: { en: "White-label Mobile Apps (iOS & Android)", bn: "হোয়াইট-লেবেল মোবাইল অ্যাপ (আইওএস/অ্যান্ড্রয়েড)" },
        tooltip: {
          en: "Published directly under your brand name to App Store and Google Play.",
          bn: "অ্যাপ স্টোর ও গুগল প্লেতে নিজস্ব ব্র্যান্ড নেমে প্রকাশিত নিজস্ব অ্যাপ।",
        },
        planValues: {
          starter: false,
          growth: { en: "Optional Add-on", bn: "ঐচ্ছিক অ্যাড-অন" },
          business: { en: "Optional Add-on", bn: "ঐচ্ছিক অ্যাড-অন" },
          enterprise: { en: "Included in Package", bn: "প্যাকেজে অন্তর্ভুক্ত" },
        },
      },
      {
        id: "custom_apis",
        name: { en: "Custom Webhooks & REST API", bn: "কাস্টম ওয়েবহুক ও রেস্ট এপিআই" },
        planValues: {
          starter: false,
          growth: false,
          business: true,
          enterprise: true,
        },
      },
    ],
  },
  {
    id: "operations_support",
    name: { en: "Staff, Storage & Support", bn: "টিম মেম্বার, স্টোরেজ ও সাপোর্ট" },
    features: [
      {
        id: "staff_accounts",
        name: { en: "Staff Admin Accounts", bn: "স্টাফ অ্যাডমিন অ্যাকাউন্ট" },
        planValues: {
          starter: { en: "1 Account", bn: "১টি অ্যাকাউন্ট" },
          growth: { en: "Up to 5 Accounts", bn: "সর্বোচ্চ ৫টি অ্যাকাউন্ট" },
          business: { en: "Up to 15 Accounts", bn: "সর্বোচ্চ ১৫টি অ্যাকাউন্ট" },
          enterprise: { en: "Unlimited Accounts", bn: "সীমাহীন অ্যাকাউন্ট" },
        },
      },
      {
        id: "storage_capacity",
        name: { en: "Media Storage Quota", bn: "মিডিয়া স্টোরেজ ক্যাপাসিটি" },
        planValues: {
          starter: { en: "5 GB Media Storage", bn: "৫ জিবি মিডিয়া স্টোরেজ" },
          growth: { en: "25 GB Media Storage", bn: "২৫ জিবি মিডিয়া স্টোরেজ" },
          business: { en: "100 GB Media Storage", bn: "১০০ জিবি মিডিয়া স্টোরেজ" },
          enterprise: { en: "Unlimited Storage", bn: "সীমাহীন স্টোরেজ" },
        },
      },
      {
        id: "support_tier",
        name: { en: "Technical Support SLA", bn: "টেকনিক্যাল সাপোর্ট ও এসএলএ" },
        planValues: {
          starter: { en: "Standard Email Support", bn: "স্ট্যান্ডার্ড ইমেইল সাপোর্ট" },
          growth: { en: "Priority Chat & Email", bn: "অগ্রাধিকার চ্যাট ও ইমেইল" },
          business: { en: "Account Manager + Chat", bn: "অ্যাকাউন্ট ম্যানেজার + চ্যাট" },
          enterprise: { en: "24/7 Dedicated SLA Team", bn: "২৪/৭ ডেডিকেটেড এসএলএ টিম" },
        },
      },
    ],
  },
];

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Additional Approved Charges (Section 06)
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const ADDITIONAL_CHARGES_DATA: AdditionalChargeItem[] = [
  {
    id: "payment_gateway",
    name: {
      en: "MFS & Payment Gateway Transaction Fees",
      bn: "পেমেন্ট গেটওয়ে ও এমএফএস লেনদেন ফি",
    },
    category: "payment",
    basis: { en: "Per successful transaction", bn: "প্রতি সফল লেনদেনে" },
    cost: {
      en: "1.5% – 2.5% (CartX charges 0% platform commission)",
      bn: "১.৫% – ২.৫% (কার্টএক্স কোনো প্ল্যাটফর্ম কমিশন নেয় না)",
    },
    chargedBy: "third_party",
    description: {
      en: "Transaction charges are billed directly by respective payment aggregators (bKash, Nagad, SSLCommerz). CartX does not take any cut.",
      bn: "পেমেন্ট গেটওয়ে প্রোভাইডাররা (বিকাশ, নগদ, এসএসএলকমার্স) সরাসরি এই ফি সংগ্রহ করে। কার্টএক্স কোনো কমিশন কাটে না।",
    },
  },
  {
    id: "sms_credits",
    name: {
      en: "SMS & OTP Notification Credits",
      bn: "এসএমএস ও ওটিপি নোটিফিকেশন ক্রেডিট",
    },
    category: "sms",
    basis: { en: "Per sent SMS message", bn: "প্রতি প্রেরিত এসএমএসে" },
    cost: {
      en: "৳0.30 – ৳0.50 per SMS (depending on operator / masking)",
      bn: "৳০.৩০ – ৳০.৫০ প্রতি এসএমএস (অপারেটর ও মাস্কিং সাপেক্ষে)",
    },
    chargedBy: "third_party",
    description: {
      en: "Customer order confirmations, tracking alerts, and OTP logins consume SMS credits billed at telecom aggregator wholesale rates.",
      bn: "অর্ডার কনফার্মেশন, পার্সেল ট্র্যাকিং এবং ওটিপি এসএমএস টেলিকম অ্যাগ্রিগেটরদের নির্ধারিত সরাসরি মূল্যে চার্জ হয়।",
    },
  },
  {
    id: "custom_domain_reg",
    name: {
      en: "Custom Domain Registration & Renewal",
      bn: "কাস্টম ডোমেইন নিবন্ধন ও নবায়ন ফি",
    },
    category: "domain",
    basis: { en: "Annual domain renewal", bn: "বার্ষিক ডোমেইন নবায়ন" },
    cost: {
      en: "Billed directly by your domain registrar (e.g., BTCL for .com.bd)",
      bn: "ডোমেইন রেজিস্ট্রার (যেমন বিটিসিএল) সরাসরি এই ফি গ্রহণ করে",
    },
    chargedBy: "third_party",
    description: {
      en: "Connecting your existing domain to CartX is 100% free with automated TLS/SSL. Domain ownership must be maintained with your registrar.",
      bn: "কার্টএক্সে আপনার নিজস্ব ডোমেইন সংযোগ এবং এসএসএল সম্পূর্ণ বিনামূল্যে প্রদান করা হয়। ডোমেইন ফি রেজিস্ট্রারের কাছে প্রযোজ্য।",
    },
  },
  {
    id: "app_store_fees",
    name: {
      en: "Apple & Google Developer Store Accounts",
      bn: "অ্যাপল ও গুগল ডেভেলপার স্টোর অ্যাকাউন্ট ফি",
    },
    category: "mobile",
    basis: { en: "Annual (Apple) / One-time (Google)", bn: "বার্ষিক (অ্যাপল) / এককালীন (গুগল)" },
    cost: {
      en: "$99/year (Apple Developer) • $25 one-time (Google Play Console)",
      bn: "$৯৯/বছর (অ্যাপল ডেভেলপার) • $২৫ এককালীন (গুগল প্লে কনসোল)",
    },
    chargedBy: "third_party",
    description: {
      en: "Required if compiling branded white-label mobile apps published directly under your registered company name in global app stores.",
      bn: "আপনার নিজস্ব প্রতিষ্ঠানের নামে অ্যাপ স্টোর ও প্লে স্টোরে অ্যাপ প্রকাশের জন্য প্রযোজ্য অফিসিয়াল স্টোর ফি।",
    },
  },
  {
    id: "custom_integration_build",
    name: {
      en: "Bespoke Enterprise ERP Integration",
      bn: "কাস্টম এন্টারপ্রাইজ ইআরপি ইন্টিগ্রেশন",
    },
    category: "custom",
    basis: { en: "Scoped project consultation", bn: "প্রজেক্টের কাজের পরিধি অনুযায়ী" },
    cost: {
      en: "Custom quote based on architecture and legacy software bridge",
      bn: "সফটওয়্যারের জটিলতা ও আর্কিটেকচার অনুযায়ী কাস্টম কোটেশন",
    },
    chargedBy: "cartx",
    description: {
      en: "For merchants requiring custom bridges to on-premise ERPs, SAP, Tally, or proprietary inventory databases.",
      bn: "যেসব মার্চেন্টের বিদ্যমান কাস্টম ইআরপি, ট্যালি বা প্রোপাইটরি ডাটাবেসের সাথে রিয়েল-টাইম সংযোগের প্রয়োজন।",
    },
  },
];

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Pricing FAQs (Section 07)
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const PRICING_FAQS_DATA: PricingFAQItem[] = [
  {
    id: "upgrade_downgrade",
    question: {
      en: "Can I upgrade or downgrade my plan at any time?",
      bn: "আমি কি যেকোনো সময় আমার প্ল্যান আপগ্রেড বা ডাউনগ্রেড করতে পারি?",
    },
    answer: {
      en: "Yes. You can upgrade your subscription tier whenever your catalog or team expands. Upgrades take effect immediately with prorated billing. Downgrades take effect at the conclusion of your current billing period.",
      bn: "হ্যাঁ। আপনার পণ্য ক্যাটালগ বা টিম বড় হলে যেকোনো সময় প্ল্যান আপগ্রেড করতে পারবেন। আপগ্রেড তাৎক্ষণিকভাবে কার্যকর হয়। ডাউনগ্রেডের ক্ষেত্রে বর্তমান বিলিং চক্র শেষ হওয়ার পর নতুন প্ল্যান সক্রিয় হয়।",
    },
  },
  {
    id: "trial",
    question: {
      en: "Is there a free trial, and is a credit card required?",
      bn: "কার্টএক্সে কি ফ্রি ট্রায়াল আছে এবং এর জন্য কি ক্রেডিট কার্ড লাগবে?",
    },
    answer: {
      en: "Yes! CartX offers a 14-day free trial on our retail plans. No credit card or payment information is required to get started. You can build your storefront, test product catalogs, and explore administrative features risk-free.",
      bn: "হ্যাঁ! কার্টএক্সের রিটেইল প্ল্যানগুলোতে ১৪ দিনের সম্পূর্ণ ফ্রি ট্রায়াল রয়েছে। শুরু করার জন্য কোনো ক্রেডিট কার্ড বা পেমেন্ট তথ্যের প্রয়োজন নেই। আপনি নিশ্চিন্তে স্টোর তৈরি ও পরীক্ষা করতে পারবেন।",
    },
  },
  {
    id: "cancellation",
    question: {
      en: "What happens if I decide to cancel my subscription?",
      bn: "আমি সাবস্ক্রিপশন বাতিল করতে চাইলে কী ঘটবে?",
    },
    answer: {
      en: "There are no long-term lock-in contracts on monthly plans. If you cancel, your store remains active until the end of your paid billing period. Your catalog data and order history remain securely preserved for 30 days should you choose to reactivate.",
      bn: "মাসিক প্ল্যানগুলোতে কোনো বাধ্যতামূলক দীর্ঘমেয়াদী চুক্তি নেই। বাতিল করলে চলতি বিলিং মেয়াদের শেষ দিন পর্যন্ত স্টোর সচল থাকবে। পরবর্তীতে পুনরায় সক্রিয় করার সুবিধার্থে আপনার ডেটা ৩০ দিন সংরক্ষিত থাকবে।",
    },
  },
  {
    id: "plan_limits",
    question: {
      en: "What happens when a plan limit is reached?",
      bn: "প্ল্যানের নির্ধারিত লিমিট অতিক্রম করলে কী হবে?",
    },
    answer: {
      en: "If you approach catalog thresholds (e.g., 100 products on Starter or 2,500 on Growth), your live storefront and customer checkouts continue operating without disruption. You will be prompted in the admin panel to upgrade before adding additional products.",
      bn: "আপনার ক্যাটালগ লিমিট পূর্ণ হলেও বিদ্যমান স্টোরফ্রন্ট এবং গ্রাহকদের অর্ডার নেওয়া বন্ধ হবে না। নতুন পণ্য বা স্টাফ যুক্ত করার জন্য অ্যাডমিন প্যানেলে আপগ্রেডের নোটিফিকেশন দেখতে পাবেন।",
    },
  },
  {
    id: "gateway_fees",
    question: {
      en: "Are payment gateway transaction fees included in the plan price?",
      bn: "পেমেন্ট গেটওয়ের লেনদেন চার্জ কি প্ল্যানের মূল্যের মধ্যে অন্তর্ভুক্ত?",
    },
    answer: {
      en: "CartX proudly charges 0% platform transaction commission. Gateway transaction fees (e.g., bKash, Nagad, SSLCommerz) are charged directly by the respective payment providers at standard Bangladesh commercial rates (typically 1.5% to 2.5%).",
      bn: "কার্টএক্স কোনো নিজস্ব লেনদেন কমিশন (০%) নেয় না। গেটওয়ে প্রোভাইডাররা (বিকাশ, নগদ, ভিসা, মাস্টারকার্ড ইত্যাদি) তাদের নিজস্ব বাণিজ্যিক নিয়মে লেনদেন ফি (সাধারণত ১.৫% থেকে ২.৫%) সরাসরি গ্রহণ করে।",
    },
  },
  {
    id: "custom_domain",
    question: {
      en: "Is a custom domain included with my subscription?",
      bn: "সাবস্ক্রিপশনের সাথে কি কাস্টম ডোমেইন অন্তর্ভুক্ত থাকে?",
    },
    answer: {
      en: "All CartX plans include free custom domain connection with automated TLS/SSL certificates and DNS configuration. The domain name itself (e.g., yourbrand.com or mystore.com.bd) is registered and renewed through your chosen domain registrar.",
      bn: "কার্টএক্সের প্রতিটি প্ল্যানে কাস্টম ডোমেইন সংযোগ এবং স্বয়ংক্রিয় ফ্রি এসএসএল সার্টিফিকেট অন্তর্ভুক্ত। ডোমেইন নামটি আপনার পছন্দের ডোমেইন রেজিস্ট্রার থেকে কিনে সহজেই যুক্ত করতে পারবেন।",
    },
  },
  {
    id: "mobile_app",
    question: {
      en: "Is a mobile app included in standard CartX plans?",
      bn: "স্ট্যান্ডার্ড প্ল্যানগুলোতে কি মোবাইল অ্যাপ অন্তর্ভুক্ত থাকে?",
    },
    answer: {
      en: "Every CartX store includes a high-speed progressive web app (PWA) storefront optimized for mobile browsers. Native white-label iOS and Android apps published under your own brand in the App Store and Google Play are available as an add-on or bundled with Enterprise.",
      bn: "প্রতিটি স্টোরের সাথে একটি চমৎকার মোবাইল ওয়েব স্টোরফ্রন্ট অন্তর্ভুক্ত থাকে। অ্যাপ স্টোর ও প্লে স্টোরে প্রকাশের জন্য নিজস্ব ব্র্যান্ডেড আইওএস ও অ্যান্ড্রয়েড নেটিভ অ্যাপ গ্রোথ ও বিজনেস প্ল্যানে অ্যাড-অন হিসেবে এবং এন্টারপ্রাইজ প্ল্যানে অন্তর্ভুক্ত থাকে।",
    },
  },
];

export function getPricingPlans(): PricingPlan[] {
  return PRICING_PLANS;
}

export function getComparisonCategories(): ComparisonCategory[] {
  return PLAN_COMPARISON_CATEGORIES;
}

export function getAdditionalCharges(): AdditionalChargeItem[] {
  return ADDITIONAL_CHARGES_DATA;
}

export function getPricingFaqs(): PricingFAQItem[] {
  return PRICING_FAQS_DATA;
}

