import {
  ThemeItem,
  ThemeFeatureCategory,
  ThemeFAQItem,
} from "./types";

export const PUBLISHED_THEME_SLUGS = [
  "aura-studio",
  "volt-tech",
  "lumina-essence",
  "harvest-pure",
  "casa-living",
  "zenith-stationery",
] as const;

export type PublishedThemeSlug = typeof PUBLISHED_THEME_SLUGS[number];

export const THEMES_REGISTRY: Record<string, ThemeItem> = {
  // ─────────────────────────────────────────────────────────────
  // 1. Aura Studio (Fashion, Apparel & Lifestyle)
  // ─────────────────────────────────────────────────────────────
  "aura-studio": {
    slug: "aura-studio",
    name: {
      en: "Aura Studio",
      bn: "অরা স্টুডিও",
    },
    category: "fashion",
    categoryLabel: {
      en: "Fashion & Apparel",
      bn: "ফ্যাশন ও পোশাক",
    },
    tagline: {
      en: "Editorial lookbooks and lifestyle photography focus",
      bn: "এডিটোরিয়াল লুকবুক এবং লাইফস্টাইল ফটোগ্রাফি ফোকাসড ডিজাইন",
    },
    description: {
      en: "Designed for premium clothing labels, boutique apparel, and lifestyle brands seeking an elegant, magazine-style browsing experience with full size/color matrix support.",
      bn: "প্রিমিয়াম পোশাকের ব্র্যান্ড এবং বুটিক শপের জন্য নির্মিত। সহজে লুকবুক ব্রাউজিং এবং সাইজ-কালার ভ্যারিয়েন্ট সমন্বিত চমৎকার থিম।",
    },
    style: "editorial",
    styleLabel: {
      en: "Editorial & Clean",
      bn: "এডিটোরিয়াল ও মার্জিত",
    },
    layoutType: "lookbook",
    layoutLabel: {
      en: "Lookbook Capsule & Grid",
      bn: "লুকবুক ক্যাপসুল ও গ্রিড",
    },
    availability: "available",
    mobileFriendly: true,
    eligiblePlans: ["starter", "growth", "scale"],
    palette: [
      { bg: "bg-[#1C1917]", hex: "#1C1917", label: { en: "Charcoal Black", bn: "চারকোল ব্ল্যাক" } },
      { bg: "bg-[#E7E2D9]", hex: "#E7E2D9", label: { en: "Linen Cream", bn: "লিনেন ক্রিম" } },
      { bg: "bg-[#C4A482]", hex: "#C4A482", label: { en: "Warm Sand", bn: "ওয়ার্ম স্যান্ড" } },
    ],
    keywords: ["fashion", "apparel", "clothing", "boutique", "linen", "lookbook", "lifestyle", "editorial", "shoes"],
    preview: {
      domain: "demo.aurafashion.cartx.app",
      brandName: "AURA STUDIO",
      announcement: {
        en: "Spring Editorial Capsule 2026 • Free Shipping Over ৳2,500",
        bn: "স্প্রিং এডিটোরিয়াল ক্যাপসুল ২০২৬ • ২,৫০০ টাকার অর্ডারে ফ্রি ডেলিভারি",
      },
      navLinks: [
        { en: "New In", bn: "নতুন আগমন" },
        { en: "Lookbook", bn: "লুকবুক" },
        { en: "Collections", bn: "কালেকশন" },
        { en: "Sale", bn: "অফার" },
      ],
      hero: {
        tagline: {
          en: "AUTUMN / WINTER '25 EDITORIAL",
          bn: "অটাম / উইন্টার '২৫ এডিটোরিয়াল",
        },
        headline: {
          en: "Pure Linen & Tailored Cuts",
          bn: "পিউর লিনেন ও সুক্ষ্ম টেইলরিং",
        },
        subhead: {
          en: "Effortless everyday silhouette designed for modern urban style.",
          bn: "আধুনিক ও পরিপাটি জীবনযাত্রার জন্য তৈরি প্রিমিয়াম পোশাকের সংগ্রহ।",
        },
        buttonText: {
          en: "Shop Lookbook",
          bn: "লুকবুক দেখুন",
        },
        bgGradient: "linear-gradient(135deg, rgba(28,25,23,0.06) 0%, rgba(196,164,130,0.18) 100%)",
        accentClass: "from-stone-900 via-amber-950 to-stone-800",
      },
      featuredCategories: [
        { en: "Outerwear & Blazers", bn: "ব্লেজার ও জ্যাকেট" },
        { en: "Linen Essentials", bn: "লিনেন এসেনশিয়ালস" },
        { en: "Tailored Trousers", bn: "টেইলরড ট্রাউজার" },
        { en: "Minimal Footwear", bn: "লেদার ফুটওয়্যার" },
      ],
      sampleProducts: [
        {
          id: "aura-p1",
          name: {
            en: "Relaxed Linen Studio Blazer",
            bn: "রিলাক্সড লিনেন স্টুডিও ব্লেজার",
          },
          category: { en: "Outerwear", bn: "আউটারওয়্যার" },
          price: "৳২,৮৫০",
          originalPrice: "৳৩,৪০০",
          badge: { en: "New In", bn: "নতুন" },
          rating: "4.9",
          specs: [
            { label: { en: "Fabric", bn: "ফেব্রিক" }, value: { en: "100% European Flax", bn: "১০০% ইউরোপিয়ান ফ্ল্যাক্স" } },
            { label: { en: "Fit", bn: "ফিটিং" }, value: { en: "Relaxed Silhouette", bn: "স্বস্তিদায়ক ফিট" } },
          ],
          description: {
            en: "Unlined, breathable European linen jacket with notched lapels and horn buttons. Perfect for tropical climates.",
            bn: "উচ্চমানের ইউরোপীয় লিনেন দিয়ে তৈরি হালকা ও আরামদায়ক ব্লেজার। ক্যাজুয়াল বা সেমি-ফরমাল ব্যবহারের উপযোগী।",
          },
          variants: [
            {
              label: { en: "Size", bn: "সাইজ" },
              options: [
                { en: "S", bn: "S" },
                { en: "M", bn: "M" },
                { en: "L", bn: "L" },
                { en: "XL", bn: "XL" },
              ],
            },
            {
              label: { en: "Color", bn: "রং" },
              options: [
                { en: "Oatmeal", bn: "ওটমিল" },
                { en: "Slate Black", bn: "স্লেট ব্ল্যাক" },
                { en: "Terracotta", bn: "টেরাকোটা" },
              ],
            },
          ],
          accentColor: "#1C1917",
          bgGradient: "from-stone-200/50 via-stone-100 to-amber-50/40",
        },
        {
          id: "aura-p2",
          name: {
            en: "Pleated Tapered Linen Trouser",
            bn: "প্লিটেড টেপার্ড লিনেন ট্রাউজার",
          },
          category: { en: "Bottoms", bn: "প্যান্টস" },
          price: "৳১,৯৫০",
          originalPrice: "৳২,২৫০",
          badge: { en: "Bestseller", bn: "জনপ্রিয়" },
          rating: "4.8",
          specs: [
            { label: { en: "Waist", bn: "কোমর" }, value: { en: "Semi-Elastic Back", bn: "সেমি-ইলাস্টিক ব্যাক" } },
            { label: { en: "Care", bn: "যত্ন" }, value: { en: "Cold Machine Wash", bn: "কোল্ড ওয়াশ" } },
          ],
          description: {
            en: "Double front pleats with a relaxed thigh and gentle taper at the ankle.",
            bn: "মার্জিত ডাবল প্লিট ডিজাইন এবং আরামদায়ক টেপার্ড কাটিং সহ প্রতিদিনের ব্যবহারযোগ্য ট্রাউজার।",
          },
          variants: [
            {
              label: { en: "Waist", bn: "সাইজ" },
              options: [
                { en: "30", bn: "৩০" },
                { en: "32", bn: "৩২" },
                { en: "34", bn: "৩৪" },
                { en: "36", bn: "৩৬" },
              ],
            },
          ],
          accentColor: "#C4A482",
          bgGradient: "from-amber-100/40 via-stone-100 to-stone-50",
        },
        {
          id: "aura-p3",
          name: {
            en: "Structured Cotton Overshirt",
            bn: "স্ট্রাকচার্ড কটন ওভারশার্ট",
          },
          category: { en: "Tops", bn: "শার্টস" },
          price: "৳১,৬৫০",
          badge: { en: "Capsule", bn: "ক্যাপসুল" },
          rating: "4.7",
          specs: [
            { label: { en: "Weight", bn: "ওজন" }, value: { en: "240 GSM Cotton", bn: "২৪০ জিএসএম কটন" } },
          ],
          description: {
            en: "Heavyweight twill overshirt featuring dual flap utility pockets and reinforced seams.",
            bn: "টেকসই হেভিওয়েট সুতি কাপড়ের ওভারশার্ট যা লেয়ারিং বা সিঙ্গেল হিসেবে পরা যায়।",
          },
          variants: [
            {
              label: { en: "Size", bn: "সাইজ" },
              options: [
                { en: "M", bn: "M" },
                { en: "L", bn: "L" },
                { en: "XL", bn: "XL" },
              ],
            },
          ],
          accentColor: "#78716C",
          bgGradient: "from-stone-200/50 via-zinc-100 to-stone-50",
        },
        {
          id: "aura-p4",
          name: {
            en: "Handmade Leather Mule Slides",
            bn: "হ্যান্ডমেড লেদার মিউল স্লাইডস",
          },
          category: { en: "Footwear", bn: "জুতো" },
          price: "৳২,৩৫০",
          originalPrice: "৳২,৭৫০",
          badge: { en: "Artisan", bn: "কারিগর" },
          rating: "4.9",
          specs: [
            { label: { en: "Leather", bn: "চামড়া" }, value: { en: "Full Grain Leather", bn: "ফুল গ্রেইন লেদার" } },
          ],
          description: {
            en: "Cushioned memory foam insole lined with vegetable-tanned genuine leather.",
            bn: "হাতে তৈরি খাঁটি চামড়ার আরামদায়ক স্লাইড যা দীর্ঘক্ষণ ব্যবহারে আরাম দেয়।",
          },
          variants: [
            {
              label: { en: "Size (EU)", bn: "সাইজ" },
              options: [
                { en: "40", bn: "৪০" },
                { en: "41", bn: "৪১" },
                { en: "42", bn: "৪২" },
                { en: "43", bn: "৪৩" },
              ],
            },
          ],
          accentColor: "#57493D",
          bgGradient: "from-stone-300/40 via-amber-100/30 to-stone-100",
        },
      ],
      featureBar: [
        { en: "Free Nationwide Delivery on orders over ৳2,500", bn: "২,৫০০ টাকার অর্ডারে দেশজুড়ে ফ্রি ডেলিভারি" },
        { en: "7-Day Hassle-Free Size Exchange Support", bn: "৭ দিনের সহজ সাইজ পরিবর্তন সুবিধা" },
        { en: "Cash on Delivery & bKash Instant Payment", bn: "ক্যাশ অন ডেলিভারি এবং বিকাশ পেমেন্ট" },
      ],
      cartPreview: {
        items: [
          {
            name: { en: "Relaxed Linen Studio Blazer", bn: "রিলাক্সড লিনেন স্টুডিও ব্লেজার" },
            variant: { en: "Oatmeal / L", bn: "ওটমিল / L" },
            price: "৳২,৮৫০",
            quantity: 1,
          },
          {
            name: { en: "Pleated Tapered Linen Trouser", bn: "প্লিটেড টেপার্ড লিনেন ট্রাউজার" },
            variant: { en: "Slate Black / 32", bn: "স্লেট ব্ল্যাক / ৩২" },
            price: "৳১,৯৫০",
            quantity: 1,
          },
        ],
        subtotal: "৳৪,৮০০",
        shipping: "৳০ (ফ্রি ডেলিভারি)",
        total: "৳৪,৮০০",
        paymentMethods: ["Cash on Delivery", "bKash", "Nagad", "Cards"],
      },
    },
    capabilities: [
      {
        id: "cap-editorial-lookbook",
        title: { en: "Interactive Lookbook & Capsule Grids", bn: "ইন্টারেক্টিভ লুকবুক ও ক্যাপসুল গ্রিড" },
        description: {
          en: "Showcase fashion collections with lifestyle photography, mood banners, and linked product tags.",
          bn: "লাইফস্টাইল ছবি ও মডেল শুটের মাধ্যমে কালেকশন উপস্থাপন এবং সরাসরি পণ্য লিঙ্ক করার সুবিধা।",
        },
        iconName: "Camera",
      },
      {
        id: "cap-variant-swatches",
        title: { en: "Visual Color & Size Selectors", bn: "কালার সোয়াচ ও সাইজ সিলেক্টর" },
        description: {
          en: "Color swatches with stock indicators prevent customer frustration by disabling sold-out sizes dynamically.",
          bn: "স্টক অনুযায়ী স্বয়ংক্রিয়ভাবে সাইজ ও কালার বাটন হালনাগাদ হয় যাতে স্টক-আউট অর্ডারের ঝুঁকি না থাকে।",
        },
        iconName: "Sliders",
      },
      {
        id: "cap-sticky-cart",
        title: { en: "Frictionless Mobile Sticky Buy Bar", bn: "মোবাইল স্টিকি বাই বার" },
        description: {
          en: "Keep the Add-to-Cart CTA pinned to the bottom on mobile viewports as shoppers inspect gallery photos.",
          bn: "মোবাইলে ক্রেতারা নিচে স্ক্রোল করলেও অ্যাড-টু-কার্ট বাটনটি স্ক্রিনের নিচে সহজে দৃশ্যমান থাকে।",
        },
        iconName: "ShoppingBag",
      },
      {
        id: "cap-fast-checkout",
        title: { en: "Streamlined 1-Step Checkout", bn: "দ্রুততম ওয়ান-স্টেপ চেকআউট" },
        description: {
          en: "Optimized for Bangladeshi buyers with automatic district shipping calculation and COD selection.",
          bn: "জেলা অনুযায়ী স্বয়ংক্রিয় ডেলিভারি চার্জ হিসাব এবং দ্রুত ক্যাশ অন ডেলিভারি নিশ্চিত করার ফর্ম।",
        },
        iconName: "Zap",
      },
    ],
    customization: {
      customizable: [
        { en: "Brand accent colors, announcement bar background, and button styling", bn: "ব্র্যান্ডের কালার, অ্যানাউন্সমেন্ট বার ব্যাকগ্রাউন্ড এবং বাটন স্টাইল" },
        { en: "Store logo, favicon, and mobile header layout", bn: "স্টোর লোগো, ফেভিকন এবং মোবাইল হেডার বিন্যাস" },
        { en: "Hero editorial banners, seasonal campaign sliders, and headings", bn: "হিরো এডিটোরিয়াল ব্যানার, ক্যাম্পেইন স্লাইডার ও টাইটেল" },
        { en: "Featured collection sections and product badge labels (e.g. New In, Sale)", bn: "কালেকশন সেকশন এবং প্রোডাক্ট ব্যাজ লেবেল (যেমন: নতুন, অফার)" },
        { en: "Footer navigation links, social handles, and trust guarantees", bn: "ফুটার মেনু লিঙ্ক, সোশ্যাল মিডিয়া হ্যান্ডেল ও ট্রাস্ট ব্যাজ" },
      ],
      nonCustomizable: [
        { en: "Underlying responsive flexbox and CSS grid architecture", bn: "মূল রেসপনসিভ গ্রিড ও ফ্রেমওয়ার্ক কাঠামো" },
        { en: "Core payment gateway security compliance and webhook listeners", bn: "পেমেন্ট গেটওয়ে সিকিউরিটি এবং কোর ওয়েবহুক প্রসেসিং" },
      ],
      planDependent: [
        { en: "Custom domain connection (e.g., yourbrand.com) requires Starter or higher", bn: "কাস্টম ডোমেইন (যেমন: yourbrand.com) ব্যবহারের জন্য স্টার্টার বা উচ্চতর প্ল্যান প্রয়োজন" },
        { en: "White-label native iOS & Android shopping apps available as an add-on", bn: "ডেডিকেটেড আইওএস ও অ্যান্ড্রয়েড শপিং অ্যাপ অতিরিক্ত অ্যাড-অন হিসেবে প্রযোজ্য" },
      ],
      considerations: {
        en: "Aura Studio is best suited for apparel businesses with high-resolution imagery and lifestyle photography. It works out-of-the-box with all standard CartX retail tiers.",
        bn: "উচ্চমানের লাইফস্টাইল ফটোগ্রাফি যুক্ত ফ্যাশন ব্যবসার জন্য অরা স্টুডিও সেরা। এটি কার্টএক্সের সকল রিটেল প্ল্যানে ব্যবহারযোগ্য।",
      },
    },
    planEligibility: {
      plans: [
        { tier: "starter", name: { en: "Starter", bn: "স্টার্টার" }, status: "included", note: { en: "Includes Aura Studio with up to 100 products and custom domain support.", bn: "১০০টি প্রোডাক্ট ও কাস্টম ডোমেইন সহ অরা স্টুডিও অন্তর্ভুক্ত।" } },
        { tier: "growth", name: { en: "Growth", bn: "গ্রোথ" }, status: "included", note: { en: "Includes Aura Studio with up to 2,500 products, automated courier booking & invoices.", bn: "২,৫০০টি প্রোডাক্ট, কুরিয়ার বুকিং ও ইনভয়েস সহ অন্তর্ভুক্ত।" } },
        { tier: "scale", name: { en: "Scale", bn: "স্কেল" }, status: "included", note: { en: "Includes unlimited products, dedicated infrastructure, and priority support.", bn: "আনলিমিটেড প্রোডাক্ট ও অগ্রাধিকারভিত্তিক সাপোর্ট সহ অন্তর্ভুক্ত।" } },
      ],
      summary: {
        en: "Aura Studio is available on all standard CartX tiers without separate theme licensing fees.",
        bn: "অরা স্টুডিও থিমটি কোনো অতিরিক্ত লাইসেন্স ফি ছাড়াই কার্টএক্সের সকল প্ল্যানে অন্তর্ভুক্ত।",
      },
    },
    relatedThemeSlugs: ["casa-living", "lumina-essence"],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Volt Tech (Electronics, Gadgets & Hardware)
  // ─────────────────────────────────────────────────────────────
  "volt-tech": {
    slug: "volt-tech",
    name: {
      en: "Volt Tech",
      bn: "ভোল্ট টেক",
    },
    category: "electronics",
    categoryLabel: {
      en: "Electronics & Gadgets",
      bn: "ইলেকট্রনিক্স ও গ্যাজেটস",
    },
    tagline: {
      en: "High-contrast layout optimized for product specifications and technical comparisons",
      bn: "টেকনিক্যাল স্পেসিফিকেশন এবং ফিচার হাইলাইটের জন্য তৈরি হাই-কনট্রাস্ট ডিজাইন",
    },
    description: {
      en: "Engineered for consumer electronics, computer peripherals, smart gadgets, and audio gear. Features detailed spec tables, warranty badges, and battery/performance callouts.",
      bn: "স্মার্টফোন এক্সেসরিজ, অডিও ডিভাইস ও গ্যাজেট শপের জন্য বিশেষভাবে নির্মিত। রয়েছে স্পেসিফিকেশন টেবিল এবং ব্র্যান্ড ওয়ারেন্টি ব্যাজ।",
    },
    style: "modern-tech",
    styleLabel: {
      en: "Modern Tech & Dark Accents",
      bn: "মডার্ন টেক ও ডার্ক অ্যাকসেন্ট",
    },
    layoutType: "spec-focused",
    layoutLabel: {
      en: "Spec-Focused & Grid",
      bn: "স্পেক্স-ফোকাসড ও গ্রিড",
    },
    availability: "available",
    mobileFriendly: true,
    eligiblePlans: ["starter", "growth", "scale"],
    palette: [
      { bg: "bg-[#0B0F17]", hex: "#0B0F17", label: { en: "Cyber Slate", bn: "সাইবার স্লেট" } },
      { bg: "bg-[#0284C7]", hex: "#0284C7", label: { en: "Electric Blue", bn: "ইলেকট্রিক ব্লু" } },
      { bg: "bg-[#38BDF8]", hex: "#38BDF8", label: { en: "Cyan Glow", bn: "সায়ান গ্লো" } },
    ],
    keywords: ["electronics", "gadgets", "tech", "audio", "headphones", "chargers", "smartwatch", "specifications", "warranty"],
    preview: {
      domain: "demo.volttech.cartx.app",
      brandName: "VOLT TECH",
      announcement: {
        en: "Flash Tech Promo • Next-Day Express Dispatch in Dhaka • 1-Year Warranty",
        bn: "ফ্ল্যাশ টেক প্রোমো • ঢাকায় ২৪ ঘন্টায় এক্সপ্রেস ডেলিভারি • ১ বছরের অফিসিয়াল ওয়ারেন্টি",
      },
      navLinks: [
        { en: "Audio & ANC", bn: "অডিও ও হেডফোন" },
        { en: "Charging & Power", bn: "চার্জার ও পাওয়ারব্যাংক" },
        { en: "Smart Wearables", bn: "স্মার্টওয়াচ" },
        { en: "Hot Deals", bn: "স্পেশাল ডিল" },
      ],
      hero: {
        tagline: {
          en: "SPATIAL AUDIO // HYBRID ANC PRO",
          bn: "স্পেশিয়াল অডিও // হাইব্রিড অ্যাক্টিভ নয়েজ ক্যান্সেলেশন",
        },
        headline: {
          en: "Volt Studio ANC Pods",
          bn: "ভোল্ট স্টুডিও এএনসি পডস",
        },
        subhead: {
          en: "Hybrid active noise cancellation with 40-hour battery life and ultra-low latency.",
          bn: "৪০ ঘণ্টার ব্যাটারি ব্যাকআপ এবং আল্ট্রা-লো লেটেন্সি সমৃদ্ধ প্রফেশনাল সাউন্ড এক্সপেরিয়েন্স।",
        },
        buttonText: {
          en: "View Technical Specs",
          bn: "টেকনিক্যাল স্পেক্স দেখুন",
        },
        bgGradient: "linear-gradient(135deg, rgba(11,15,23,0.92) 0%, rgba(2,132,199,0.2) 100%)",
        accentClass: "from-sky-500 via-cyan-400 to-blue-600",
      },
      featuredCategories: [
        { en: "Wireless Audio", bn: "ওয়্যারলেস অডিও" },
        { en: "Fast Chargers & Qi2", bn: "ফাস্ট চার্জার ও কিউআই২" },
        { en: "Gaming Accessories", bn: "গেমিং এক্সেসরিজ" },
        { en: "Smart Sensors", bn: "স্মার্ট গ্যাজেটস" },
      ],
      sampleProducts: [
        {
          id: "volt-p1",
          name: {
            en: "Volt Studio ANC Wireless Pods",
            bn: "ভোল্ট স্টুডিও এএনসি ওয়্যারলেস পডস",
          },
          category: { en: "Audio", bn: "অডিও" },
          price: "৳৪,৮০০",
          originalPrice: "৳৫,৫০০",
          badge: { en: "Hi-Res Audio", bn: "হাই-রেস" },
          rating: "4.9",
          specs: [
            { label: { en: "Driver", bn: "ড্রাইভার" }, value: { en: "12mm Beryllium", bn: "১২মিমি বেরিলিয়াম" } },
            { label: { en: "Battery", bn: "ব্যাটারি" }, value: { en: "40 Hours Playtime", bn: "৪০ ঘণ্টা ব্যাকআপ" } },
            { label: { en: "Warranty", bn: "ওয়ারেন্টি" }, value: { en: "1 Year Replacement", bn: "১ বছর রিপ্লেসমেন্ট" } },
          ],
          description: {
            en: "LDAC lossless wireless streaming with 35dB active noise isolation and IPX5 sweat resistance.",
            bn: "৩৫ ডেসিবেল নয়েজ রিডাকশন এবং ওয়াটারপ্রুফ কোটিং সহ দীর্ঘস্থায়ী ব্যাটারি সমৃদ্ধ প্রিমিয়াম হেডফোন।",
          },
          variants: [
            {
              label: { en: "Edition", bn: "এডিশন" },
              options: [
                { en: "Matte Black", bn: "ম্যাট ব্ল্যাক" },
                { en: "Cyber Silver", bn: "সাইবার সিলভার" },
              ],
            },
          ],
          accentColor: "#0284C7",
          bgGradient: "from-slate-900 via-slate-850 to-sky-950/40",
        },
        {
          id: "volt-p2",
          name: {
            en: "MagPulse 15W Qi2 Dual Dock",
            bn: "ম্যাগপালস ১৫ ওয়াট কিউআই২ ডুয়াল ডক",
          },
          category: { en: "Power", bn: "পাওয়ার" },
          price: "৳২,২৫০",
          originalPrice: "৳২,৬০০",
          badge: { en: "Qi2 Fast", bn: "ফাস্ট চার্জ" },
          rating: "4.8",
          specs: [
            { label: { en: "Speed", bn: "স্পিড" }, value: { en: "15W Magnetic", bn: "১৫ ওয়াট ম্যাগনেটিক" } },
            { label: { en: "Safety", bn: "সুরক্ষা" }, value: { en: "Overheat Protection", bn: "ওভারহিট প্রোটেকশন" } },
          ],
          description: {
            en: "Aircraft-grade aluminum dual stand charges phone and smartwatch simultaneously.",
            bn: "একসাথে ফোন ও স্মার্টওয়াচ চার্জ করার ম্যাগনেটিক ওয়্যারলেস স্ট্যান্ড।",
          },
          variants: [
            {
              label: { en: "Color", bn: "রং" },
              options: [
                { en: "Space Gray", bn: "স্পেস গ্রে" },
                { en: "Midnight", bn: "মিডনাইট" },
              ],
            },
          ],
          accentColor: "#38BDF8",
          bgGradient: "from-slate-900 via-slate-850 to-blue-950/40",
        },
        {
          id: "volt-p3",
          name: {
            en: "ThunderVolt 65W GaN Charger",
            bn: "থান্ডারভোল্ট ৬৫ ওয়াট গ্যান চার্জার",
          },
          category: { en: "Power", bn: "পাওয়ার" },
          price: "৳১,৮৫০",
          badge: { en: "GaN III", bn: "গ্যান ৩" },
          rating: "4.9",
          specs: [
            { label: { en: "Ports", bn: "পোর্ট" }, value: { en: "2x USB-C + 1x USB-A", bn: "২টি সি-পোর্ট + ১টি এ-পোর্ট" } },
          ],
          description: {
            en: "Ultra-compact Gallium Nitride fast charger for laptops, tablets, and phones.",
            bn: "ল্যাপটপ ও ফোন দ্রুত চার্জ করার কমপ্যাক্ট গ্যালিয়াম নাইট্রাইড চার্জার।",
          },
          variants: [
            {
              label: { en: "Plug", bn: "প্লাগ" },
              options: [
                { en: "EU 2-Pin", bn: "ইইউ ২-পিন" },
              ],
            },
          ],
          accentColor: "#10B981",
          bgGradient: "from-slate-900 via-slate-850 to-emerald-950/40",
        },
        {
          id: "volt-p4",
          name: {
            en: "AeroPrecision Ultra-light Mouse",
            bn: "অ্যারোপ্রিসিশন আল্ট্রা-লাইট মাউস",
          },
          category: { en: "Gaming", bn: "গেমিং" },
          price: "৳৩,১৫০",
          originalPrice: "৳৩,৫০০",
          badge: { en: "4K Polling", bn: "৪কে পোলিং" },
          rating: "4.7",
          specs: [
            { label: { en: "Weight", bn: "ওজন" }, value: { en: "49 Grams", bn: "৪৯ গ্রাম" } },
          ],
          description: {
            en: "PAW3395 optical sensor with 26,000 DPI and dual wireless 2.4Ghz connectivity.",
            bn: "গেমিং ও কোডিংয়ের জন্য ৪৯ গ্রামের অতি হালকা ওয়্যারলেস মাউস।",
          },
          variants: [
            {
              label: { en: "Color", bn: "রং" },
              options: [
                { en: "Phantom White", bn: "ফ্যান্টম হোয়াইট" },
                { en: "Stealth Black", bn: "স্টিলথ ব্ল্যাক" },
              ],
            },
          ],
          accentColor: "#F59E0B",
          bgGradient: "from-slate-900 via-slate-850 to-amber-950/40",
        },
      ],
      featureBar: [
        { en: "Official 1-Year Brand Replacement Guarantee", bn: "১ বছরের অফিসিয়াল ব্র্যান্ড রিপ্লেসমেন্ট ওয়ারেন্টি" },
        { en: "Next-Day Express Courier Delivery in Dhaka & Chittagong", bn: "ঢাকা ও চট্টগ্রামে ২৪ ঘণ্টার মধ্যে হোম ডেলিভারি" },
        { en: "100% Original Authentic Products Guaranteed", bn: "১০০% আসল ও ইনট্যাক্ট গ্যাজেটের নিশ্চয়তা" },
      ],
      cartPreview: {
        items: [
          {
            name: { en: "Volt Studio ANC Wireless Pods", bn: "ভোল্ট স্টুডিও এএনসি ওয়্যারলেস পডস" },
            variant: { en: "Matte Black", bn: "ম্যাট ব্ল্যাক" },
            price: "৳৪,৮০০",
            quantity: 1,
          },
        ],
        subtotal: "৳৪,৮০০",
        shipping: "৳৬০",
        total: "৳৪,৮৬০",
        paymentMethods: ["Cash on Delivery", "bKash", "Nagad", "Credit Cards"],
      },
    },
    capabilities: [
      {
        id: "cap-specs-matrix",
        title: { en: "Structured Technical Specifications", bn: "স্ট্রাকচার্ড টেকনিক্যাল স্পেসিফিকেশন" },
        description: {
          en: "Cleanly structured key-value tables for battery, dimensions, processor, connectivity, and ports.",
          bn: "ব্যাটারি, প্রসেসর ও কানেক্টিভিটি তথ্যের পরিষ্কার টেবিল যা ক্রেতাদের টেকনিক্যাল তুলনা করতে সাহায্য করে।",
        },
        iconName: "Cpu",
      },
      {
        id: "cap-warranty-badging",
        title: { en: "Official Warranty & Authenticity Badges", bn: "অফিসিয়াল ওয়ারেন্টি ও অথেন্টিসিটি ব্যাজ" },
        description: {
          en: "Highlight warranty duration and official distributor verification directly above the purchase button.",
          bn: "বাই বাটনের ঠিক ওপরে ওয়ারেন্টির মেয়াদ ও অথেন্টিসিটি ব্যাজ প্রদর্শন করে ক্রেতার আস্থা বৃদ্ধি করে।",
        },
        iconName: "ShieldCheck",
      },
      {
        id: "cap-quick-compare",
        title: { en: "Model Specification Highlighting", bn: "মডেল স্পেক্স হাইলাইটিং" },
        description: {
          en: "Compare wattage, capacity, and wireless standards across models at a glance.",
          bn: "বিভিন্ন ভ্যারিয়েন্টের ওয়াটেজ, মেমোরি ও ফিচারের পার্থক্য সহজে প্রদর্শন।",
        },
        iconName: "Sliders",
      },
      {
        id: "cap-fast-dispatch",
        title: { en: "Estimated Courier Delivery Countdown", bn: "ডেলিভারি টাইমলাইন ও ডিসপ্যাচ কাউন্টডাউন" },
        description: {
          en: "Shows real-time dispatch countdown (e.g. Order in 2 hours for same-day dispatch).",
          bn: "একই দিনে পার্সেল হ্যান্ডওভার নিশ্চিত করতে রিয়েলটাইম ডিসপ্যাচ কাউন্টডাউন টাইমার।",
        },
        iconName: "Clock",
      },
    ],
    customization: {
      customizable: [
        { en: "High-contrast color scheme, dark/light hero banners, and button accents", bn: "হাই-কনট্রাস্ট কালার স্কিম, ডার্ক/লাইট ব্যানার ও বাটন অ্যাকসেন্ট" },
        { en: "Custom technical spec attributes per product category (e.g. Battery, Wattage)", bn: "ক্যাটাগরি ভিত্তিক কাস্টম টেকনিক্যাল অ্যাট্রিবিউট (যেমন: ওয়াটেজ, ব্যাটারি)" },
        { en: "Official brand warranty icons, guarantee text, and return policies", bn: "ব্র্যান্ড ওয়ারেন্টি আইকন, রিটার্ন পলিসি ও গ্যারান্টি টেক্সট" },
        { en: "Urgent promotional banner with countdown timer", bn: "কাউন্টডাউন টাইমার সহ স্পেশাল অফার ব্যানার" },
      ],
      nonCustomizable: [
        { en: "Fixed high-speed caching headers and image CDN optimization", bn: "উচ্চগতির ক্যাশিং ও ইমেজ সিডিএন অপ্টিমাইজেশন আর্কিটেকচার" },
        { en: "Core multi-gateway SSLCommerz and bKash tokenized payment pipelines", bn: "কোর পেমেন্ট গেটওয়ে সিকিউরিটি ও এনক্রিপশন পাইপলাইন" },
      ],
      planDependent: [
        { en: "Automated courier integration with Steadfast & Pathao requires Growth tier", bn: "স্টেডফাস্ট ও পাঠাও অটোমেটেড কুরিয়ার বুকিংয়ের জন্য গ্রোথ প্ল্যান প্রয়োজন" },
        { en: "Custom domain connection supported on Starter, Growth, and Scale", bn: "কাস্টম ডোমেইন সংযোগ স্টার্টার, গ্রোথ এবং স্কেল প্ল্যানে সমর্থিত" },
      ],
      considerations: {
        en: "Volt Tech works best for consumer technology merchants needing clear technical communication and warranty clarity.",
        bn: "স্পষ্ট টেকনিক্যাল স্পেক্স ও ওয়ারেন্টি উপস্থাপন করতে চায় এমন গ্যাজেট শপের জন্য ভোল্ট টেক আর্দশ।",
      },
    },
    planEligibility: {
      plans: [
        { tier: "starter", name: { en: "Starter", bn: "স্টার্টার" }, status: "included", note: { en: "Full theme features with manual courier booking and up to 100 products.", bn: "ম্যানুয়াল কুরিয়ার ট্র্যাকিং ও ১০০ প্রোডাক্ট সহ থিমের সকল সুবিধা।" } },
        { tier: "growth", name: { en: "Growth", bn: "গ্রোথ" }, status: "included", note: { en: "Automated Pathao/Steadfast courier API dispatch & invoice generation.", bn: "অটোমেটেড কুরিয়ার এপিআই বুকিং ও ইনভয়েস জেনারেশন সুবিধা।" } },
        { tier: "scale", name: { en: "Scale", bn: "স্কেল" }, status: "included", note: { en: "Unlimited catalog items and dedicated SLA support.", bn: "আনলিমিটেড প্রোডাক্ট ও ডেডিকেটেড সাপোর্ট সুবিধা।" } },
      ],
      summary: {
        en: "Volt Tech is completely included across all CartX plans.",
        bn: "ভোল্ট টেক থিমটি কার্টএক্সের প্রতিটি প্ল্যানে ফ্রিতে অন্তর্ভুক্ত।",
      },
    },
    relatedThemeSlugs: ["aura-studio", "harvest-pure"],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Lumina Essence (Cosmetics, Beauty & Skincare)
  // ─────────────────────────────────────────────────────────────
  "lumina-essence": {
    slug: "lumina-essence",
    name: {
      en: "Lumina Essence",
      bn: "লুমিনা এসেন্স",
    },
    category: "beauty",
    categoryLabel: {
      en: "Cosmetics & Beauty",
      bn: "কসমেটিক্স ও বিউটি",
    },
    tagline: {
      en: "Soft pastel tones designed for beauty items, ingredients, and skincare routines",
      bn: "স্কিনকেয়ার উপাদান, বিউটি রুটিন এবং প্রসাধন সামগ্রীর জন্য মার্জিত প্যাস্টেল ডিজাইন",
    },
    description: {
      en: "Created for skincare formulations, clean beauty lines, organic cosmetics, and fragrances. Highlights ingredient breakdowns, skin-type suitability, and certified cruelty-free badges.",
      bn: "স্কিনকেয়ার সিরাম, ভেষজ প্রসাধন ও সুগন্ধি ব্র্যান্ডের জন্য পারফেক্ট। রয়েছে উপাদানের বিশ্লেষণ এবং ত্বকের ধরন অনুযায়ী ফিল্টারিং।",
    },
    style: "botanical",
    styleLabel: {
      en: "Soft Botanical & Elegant",
      bn: "সফট বোটানিক্যাল ও মার্জিত",
    },
    layoutType: "ritual-showcase",
    layoutLabel: {
      en: "Ritual Showcase & Grid",
      bn: "রিচুয়াল শোকেস ও গ্রিড",
    },
    availability: "available",
    mobileFriendly: true,
    eligiblePlans: ["starter", "growth", "scale"],
    palette: [
      { bg: "bg-[#4C1D2C]", hex: "#4C1D2C", label: { en: "Deep Velvet Rose", bn: "ডিপ ভেলভেট রোজ" } },
      { bg: "bg-[#FB7185]", hex: "#FB7185", label: { en: "Blush Petal", bn: "ব্লাশ পেটাল" } },
      { bg: "bg-[#FFF1F2]", hex: "#FFF1F2", label: { en: "Dewdrop Pink", bn: "ডিউড্রপ পিঙ্ক" } },
    ],
    keywords: ["beauty", "cosmetics", "skincare", "serum", "clean beauty", "botanicals", "dermatologist", "organic", "makeup"],
    preview: {
      domain: "demo.luminabeauty.cartx.app",
      brandName: "LUMINA BOTANICALS",
      announcement: {
        en: "100% Vegan & Cruelty-Free • Dermatologist Tested • Free Gift On Orders Over ৳৩,০০০",
        bn: "১০০% ভেগান ও ক্রুয়েলটি-ফ্রি • চর্মরোগ বিশেষজ্ঞ দ্বারা পরীক্ষিত • ৩,০০০ টাকার অর্ডারে ফ্রি গিফট",
      },
      navLinks: [
        { en: "Active Serums", bn: "অ্যাক্টিভ সিরাম" },
        { en: "Barrier Creams", bn: "ময়েশ্চারাইজার" },
        { en: "Daily Rituals", bn: "ডেইলি কেয়ার" },
        { en: "Skin Quiz", bn: "স্কিন কুইজ" },
      ],
      hero: {
        tagline: {
          en: "CLINICAL BOTANICALS // DERMATOLOGY BACKED",
          bn: "ক্লিনিক্যাল বোটানিক্যালস // বিজ্ঞানসম্মত ফর্মুলেশন",
        },
        headline: {
          en: "Hydra-Barrier Dew Serum",
          bn: "হাইড্রো-ব্যারিয়ার ডিউ সিরাম",
        },
        subhead: {
          en: "Triple Hyaluronic Acid Complex infused with 10% botanical Niacinamide for 72-hour dewy hydration.",
          bn: "১০% বোটানিক্যাল নায়াসিনামাইড সমৃদ্ধ সিরাম যা ত্বককে দেয় ৭২ ঘণ্টার গভীর আর্দ্রতা ও সতেজতা।",
        },
        buttonText: {
          en: "Explore Skin Ritual",
          bn: "স্কিন রিচুয়াল দেখুন",
        },
        bgGradient: "linear-gradient(135deg, rgba(254,242,242,0.9) 0%, rgba(251,113,133,0.18) 100%)",
        accentClass: "from-rose-500 via-pink-400 to-amber-300",
      },
      featuredCategories: [
        { en: "Face Serums", bn: "ফেস সিরাম" },
        { en: "Moisturizers", bn: "ময়েশ্চারাইজার" },
        { en: "Gentle Cleansers", bn: "ক্লিনজার" },
        { en: "Sun Protection", bn: "সানস্ক্রিন" },
      ],
      sampleProducts: [
        {
          id: "lumina-p1",
          name: {
            en: "Botanical Glow Niacinamide Serum",
            bn: "বোটানিক্যাল গ্লো নায়াসিনামাইড সিরাম",
          },
          category: { en: "Serums", bn: "সিরাম" },
          price: "৳১,৬৫0",
          originalPrice: "৳১,৯৫০",
          badge: { en: "Award Winner", bn: "সেরা অ্যাওয়ার্ড" },
          rating: "5.0",
          specs: [
            { label: { en: "Volume", bn: "পরিমাণ" }, value: { en: "30ml Glass Bottle", bn: "৩০ মি.লি. গ্লাস বোতল" } },
            { label: { en: "Skin Type", bn: "ত্বক" }, value: { en: "All Skin Types", bn: "সকল ত্বকের উপযোগী" } },
          ],
          description: {
            en: "Lightweight, non-sticky formula that calms redness, evens skin tone, and restores the skin barrier.",
            bn: "হালকা ও তেলতেলে ভাবহীন সিরাম যা ত্বকের লালচে ভাব কমায় এবং প্রাকৃতিক উজ্জ্বলতা বাড়ায়।",
          },
          variants: [
            {
              label: { en: "Size", bn: "সাইজ" },
              options: [
                { en: "30ml", bn: "৩০ মি.লি." },
                { en: "50ml", bn: "৫০ মি.লি." },
              ],
            },
          ],
          accentColor: "#E11D48",
          bgGradient: "from-rose-100/60 via-pink-50 to-amber-50/40",
        },
        {
          id: "lumina-p2",
          name: {
            en: "Ceramide Barrier Velvet Cream",
            bn: "সেরামাইড ব্যারিয়ার ভেলভেট ক্রিম",
          },
          category: { en: "Moisturizer", bn: "ময়েশ্চারাইজার" },
          price: "৳১,৯৫০",
          originalPrice: "৳২,৩০০",
          badge: { en: "Clean Formula", bn: "ক্লিন ফর্মুলা" },
          rating: "4.9",
          specs: [
            { label: { en: "Texture", bn: "টেক্সচার" }, value: { en: "Velvet Rich Cream", bn: "ভেলভেট রিচ ক্রিম" } },
            { label: { en: "Testing", bn: "টেস্টিং" }, value: { en: "Hypoallergenic", bn: "হাইপোঅ্যালার্জেনিক" } },
          ],
          description: {
            en: "Rich in 5 essential ceramides and Centella Asiatica for overnight barrier repair and deep nourishment.",
            bn: "৫টি প্রয়োজনীয় সেরামাইড সমৃদ্ধ ক্রিম যা রাতের বেলা ত্বকের গভীর ক্ষতি পূরণ করে।",
          },
          variants: [
            {
              label: { en: "Size", bn: "সাইজ" },
              options: [
                { en: "50ml", bn: "৫০ মি.লি." },
              ],
            },
          ],
          accentColor: "#FB7185",
          bgGradient: "from-pink-100/50 via-rose-50 to-orange-50/30",
        },
        {
          id: "lumina-p3",
          name: {
            en: "Hydra-Dew Cloud Sunscreen SPF 50+",
            bn: "হাইড্রো-ডিউ ক্লাউড সানস্ক্রিন এসপিএফ ৫০+",
          },
          category: { en: "Sun Care", bn: "সানস্ক্রিন" },
          price: "৳১,৪৫০",
          badge: { en: "No White Cast", bn: "হোয়াইট কাস্ট ফ্রি" },
          rating: "4.8",
          specs: [
            { label: { en: "Protection", bn: "সুরক্ষা" }, value: { en: "Broad Spectrum PA++++", bn: "পিএ++++ ব্রড স্পেকট্রাম" } },
          ],
          description: {
            en: "Zero white-cast chemical sunscreen that absorbs like water with a refreshing natural glow.",
            bn: "কোনো ধরনের সাদা দাগ না ফেলে নিমেষেই ত্বকে মিশে যাওয়া উচ্চমানের সানস্ক্রিন।",
          },
          variants: [
            {
              label: { en: "Size", bn: "সাইজ" },
              options: [
                { en: "50ml", bn: "৫০ মি.লি." },
              ],
            },
          ],
          accentColor: "#F59E0B",
          bgGradient: "from-amber-100/50 via-rose-50 to-pink-50",
        },
        {
          id: "lumina-p4",
          name: {
            en: "Rosewater & Peptide Mist Toner",
            bn: "রোজওয়াটার ও পেপটাইড মিস্ট টোনার",
          },
          category: { en: "Toners", bn: "টোনার" },
          price: "৳১,১৫০",
          badge: { en: "Organic", bn: "অর্গানিক" },
          rating: "4.7",
          specs: [
            { label: { en: "Base", bn: "উপাদান" }, value: { en: "Pure Damask Rosewater", bn: "খাঁটি ডামাস্ক গোলাপজল" } },
          ],
          description: {
            en: "Ultra-fine spray with soothing botanical extracts to refresh dull skin throughout the day.",
            bn: "প্রাকৃতিক গোলাপজল ও পেপটাইড যুক্ত রিফ্রেশিং মিস্ট যা ত্বককে মুহূর্তে সতেজ করে।",
          },
          variants: [
            {
              label: { en: "Size", bn: "সাইজ" },
              options: [
                { en: "100ml", bn: "১০০ মি.লি." },
              ],
            },
          ],
          accentColor: "#FDA4AF",
          bgGradient: "from-rose-100/60 via-pink-50 to-stone-50",
        },
      ],
      featureBar: [
        { en: "Dermatologically Tested on Sensitive Skin", bn: "সংবেদনশীল ত্বকের জন্য চর্মরোগ বিশেষজ্ঞ দ্বারা পরীক্ষিত" },
        { en: "100% Recyclable Glass Bottles & Sustainable Packaging", bn: "১০০% পুনর্ব্যবহারযোগ্য কাঁচের বোতল ও পরিবেশবান্ধব প্যাকেজিং" },
        { en: "Same-Day Courier Delivery Inside Dhaka", bn: "ঢাকার ভেতরে একই দিনে নিশ্চিত কুরিয়ার ডেলিভারি" },
      ],
      cartPreview: {
        items: [
          {
            name: { en: "Botanical Glow Niacinamide Serum", bn: "বোটানিক্যাল গ্লো নায়াসিনামাইড সিরাম" },
            variant: { en: "30ml", bn: "৩০ মি.লি." },
            price: "৳১,৬৫০",
            quantity: 1,
          },
          {
            name: { en: "Hydra-Dew Cloud Sunscreen SPF 50+", bn: "হাইড্রো-ডিউ ক্লাউড সানস্ক্রিন এসপিএফ ৫০+" },
            variant: { en: "50ml", bn: "৫০ মি.লি." },
            price: "৳১,৪৫০",
            quantity: 1,
          },
        ],
        subtotal: "৳৩,১০০",
        shipping: "৳০ (ফ্রি ডেলিভারি)",
        total: "৳৩,১০০",
        paymentMethods: ["bKash", "Cash on Delivery", "Cards"],
      },
    },
    capabilities: [
      {
        id: "cap-ingredient-highlights",
        title: { en: "Key Ingredient Callout Cards", bn: "মূল উপাদান ও অ্যাক্টিভস হাইলাইটস" },
        description: {
          en: "Clear cards displaying active percentages (e.g. 10% Niacinamide, 2% Hyaluronic Acid).",
          bn: "পণ্যের কার্যকরী উপাদানের শতকরা অনুপাত ও উপকারিতা স্পষ্টভাবে উপস্থাপনের সুবিধা।",
        },
        iconName: "Heart",
      },
      {
        id: "cap-skin-type-filter",
        title: { en: "Skin Concern & Type Filtering", bn: "ত্বকের ধরন ও সমস্যা অনুযায়ী ফিল্টারিং" },
        description: {
          en: "Allow customers to browse by skin condition (Oily, Dry, Sensitive, Acne-Prone).",
          bn: "তৈলাক্ত, শুষ্ক বা সংবেদনশীল ত্বকের ক্রেতারা সহজেই উপযোগী পণ্য খুঁজে পান।",
        },
        iconName: "Filter",
      },
      {
        id: "cap-how-to-use",
        title: { en: "Step-by-Step Routine Guide", bn: "ধাপে ধাপে ব্যবহারের রুটিন গাইড" },
        description: {
          en: "Show order of application (Cleanse → Tone → Serum → Moisturize → Protect).",
          bn: "সকালে ও রাতে ব্যবহারের সঠিক নিয়ম ধাপে ধাপে প্রদর্শনের অপশন।",
        },
        iconName: "CheckCircle2",
      },
      {
        id: "cap-review-photos",
        title: { en: "Verified Customer Feedback & Ratings", bn: "ভেরিফায়েড কাস্টমার রিভিউ ও রেটিং" },
        description: {
          en: "Highlight honest buyer feedback to build customer trust in skincare formulations.",
          bn: "ক্রেতাদের সৎ মতামত ও অভিজ্ঞতা হাইলাইট করে বিশ্বস্ততা অর্জনের কাঠামো।",
        },
        iconName: "Star",
      },
    ],
    customization: {
      customizable: [
        { en: "Soft pastel background tints, badge colors, and delicate typography", bn: "সফট প্যাস্টেল ব্যাকগ্রাউন্ড, ব্যাজ কালার এবং মার্জিত ফন্ট" },
        { en: "Ingredient breakdown tables and certified clean beauty badge displays", bn: "উপাদান তালিকা ও অর্গানিক সার্টিফিকেশন ব্যাজ" },
        { en: "Skin routine sequence builder (AM/PM routines)", bn: "সকাল ও রাতের ত্বকের যত্ন সিকোয়েন্স বিল্ডার" },
        { en: "Custom announcement messaging and seasonal free-gift thresholds", bn: "অ্যানাউন্সমেন্ট মেসেজ এবং ফ্রি গিফট থ্রেশহোল্ড" },
      ],
      nonCustomizable: [
        { en: "Underlying CSS sanitization and secure checkout processing", bn: "কোর সিএসএস স্যানিটাইজেশন এবং নিরাপদ চেকআউট সিস্টেম" },
      ],
      planDependent: [
        { en: "Custom domain connection supported across all standard retail tiers", bn: "সকল রিটেল টিয়ারে কাস্টম ডোমেইন কানেকশন সমর্থিত" },
        { en: "Multi-staff login accounts for dispatch and customer support (Growth: 5, Scale: Unlimited)", bn: "টিম স্টাফ অ্যাকাউন্ট (গ্রোথ: ৫টি, স্কেল: আনলিমিটেড)" },
      ],
      considerations: {
        en: "Lumina Essence creates a soothing, credible aesthetic for beauty, cosmetics, fragrance, and spa products.",
        bn: "কসমেটিক্স, স্কিনকেয়ার ও ভেষজ পণ্যের জন্য লুমিনা এসেন্স অত্যন্ত বিশ্বাসযোগ্য একটি থিম।",
      },
    },
    planEligibility: {
      plans: [
        { tier: "starter", name: { en: "Starter", bn: "স্টার্টার" }, status: "included", note: { en: "Up to 100 skincare items and custom domain.", bn: "১০০টি পণ্য ও কাস্টম ডোমেইন সহ অন্তর্ভুক্ত।" } },
        { tier: "growth", name: { en: "Growth", bn: "গ্রোথ" }, status: "included", note: { en: "Up to 2,500 products with courier automation and staff roles.", bn: "২,৫০০টি পণ্য এবং অটোমেটেড কুরিয়ার সুবিধা সহ অন্তর্ভুক্ত।" } },
        { tier: "scale", name: { en: "Scale", bn: "স্কেল" }, status: "included", note: { en: "Unlimited products, custom API workflows, and dedicated account manager.", bn: "আনলিমিটেড প্রোডাক্ট ও বিশেষ সহায়তা সহ অন্তর্ভুক্ত।" } },
      ],
      summary: {
        en: "Lumina Essence is included at no additional charge across all CartX plans.",
        bn: "কার্টএক্সের যেকোনো প্যাকেজে লুমিনা এসেন্স থিমটি কোনো অতিরিক্ত খরচ ছাড়াই ব্যবহারযোগ্য।",
      },
    },
    relatedThemeSlugs: ["aura-studio", "harvest-pure"],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Harvest Pure (Grocery, Organics & Daily Essentials)
  // ─────────────────────────────────────────────────────────────
  "harvest-pure": {
    slug: "harvest-pure",
    name: {
      en: "Harvest Pure",
      bn: "হার্ভেস্ট পিউর",
    },
    category: "grocery",
    categoryLabel: {
      en: "Grocery & Lifestyle",
      bn: "মুদি ও লাইফস্টাইল",
    },
    tagline: {
      en: "Structured grid presentation ideal for multi-item baskets and everyday essentials",
      bn: "একাধিক পণ্যের দ্রুত কেনাকাটা এবং নিত্যপ্রয়োজনীয় মুদির জন্য উচ্চগতির গ্রিড ডিজাইন",
    },
    description: {
      en: "Engineered for organic foods, grocery delivery, fresh produce, and artisanal food makers. Features multi-item quantity counters, slot-based delivery notices, and weight-based variant selectors.",
      bn: "অর্গানিক ফুড, তাজা ফলমূল ও গ্রোসারি স্টোরের জন্য তৈরি। রয়েছে দ্রুত একাধিক আইটেম কার্টে যোগ করার সুবিধা ও ওজন অনুযায়ী ভ্যারিয়েন্ট।",
    },
    style: "vibrant",
    styleLabel: {
      en: "Vibrant Marketplace & Fresh",
      bn: "তাজা ও প্রাণবন্ত মার্কেটপ্লেস",
    },
    layoutType: "high-density-grid",
    layoutLabel: {
      en: "Multi-Item Basket & Grid",
      bn: "মাল্টি-আইটেম বাস্কেট ও গ্রিড",
    },
    availability: "available",
    mobileFriendly: true,
    eligiblePlans: ["starter", "growth", "scale"],
    palette: [
      { bg: "bg-[#064E3B]", hex: "#064E3B", label: { en: "Forest Pine", bn: "ফরেস্ট গ্রিন" } },
      { bg: "bg-[#10B981]", hex: "#10B981", label: { en: "Fresh Emerald", bn: "তাজা এমারেল্ড" } },
      { bg: "bg-[#D97706]", hex: "#D97706", label: { en: "Warm Amber", bn: "ওয়ার্ম অ্যাম্বার" } },
    ],
    keywords: ["grocery", "organic", "food", "produce", "honey", "vegetables", "pantry", "fresh", "daily essentials"],
    preview: {
      domain: "demo.harvestpure.cartx.app",
      brandName: "HARVEST PURE",
      announcement: {
        en: "100% Chemical-Free Organics • Fresh Morning Harvest • Free Delivery Over ৳১,৫০০",
        bn: "১০০% বিষমুক্ত অর্গানিক পণ্য • সকালের তাজা ডেলিভারি • ১,৫০০ টাকার অর্ডারে ফ্রি ডেলিভারি",
      },
      navLinks: [
        { en: "Organic Honey & Ghee", bn: "মধু ও গাওয়া ঘি" },
        { en: "Fresh Fruits & Greens", bn: "তাজা শাকসবজি ও ফল" },
        { en: "Cold Pressed Oils", bn: "ঘানিভাঙা তেল" },
        { en: "Pantry Staples", bn: "প্যান্ট্রি ও ডাল-চাল" },
      ],
      hero: {
        tagline: {
          en: "SUSTAINABLE HARVEST // CHEMICAL-FREE",
          bn: "প্রাকৃতিক উৎপাদন // বিষমুক্ত ও খাঁটি",
        },
        headline: {
          en: "Raw Wild Mustard Honey",
          bn: "সুন্দরবনের খাঁটি বুনো মধু",
        },
        subhead: {
          en: "Unprocessed, cold-filtered natural forest honey sourced directly from traditional bee foragers.",
          bn: "সরাসরি বুনো চাক থেকে সংগৃহীত কাঁচা মধু যা প্রাকৃতিক এনজাইম ও পুষ্টিতে ভরপুর।",
        },
        buttonText: {
          en: "Order Fresh Pantry",
          bn: "তাজা পণ্য অর্ডার করুন",
        },
        bgGradient: "linear-gradient(135deg, rgba(240,253,244,0.9) 0%, rgba(16,185,129,0.18) 100%)",
        accentClass: "from-emerald-700 via-teal-600 to-amber-500",
      },
      featuredCategories: [
        { en: "Pure Honey & Spreads", bn: "মধু ও প্রাকৃতিক স্প্রেড" },
        { en: "Wood-Pressed Oils", bn: "ঘানিভাঙা সরিষার তেল" },
        { en: "Aromatic Rice & Spices", bn: "সুগন্ধি চাল ও খাঁটি মশলা" },
        { en: "Handmade Snacks", bn: "হাতে তৈরি খাবার" },
      ],
      sampleProducts: [
        {
          id: "harvest-p1",
          name: {
            en: "Sundarbans Raw Wild Honey (500g)",
            bn: "সুন্দরবনের কাঁচা প্রাকৃতিক মধু (৫০০ গ্রাম)",
          },
          category: { en: "Honey", bn: "মধু" },
          price: "৳৭৫০",
          originalPrice: "৳৮৫০",
          badge: { en: "100% Pure", bn: "১০০% খাঁটি" },
          rating: "4.9",
          specs: [
            { label: { en: "Origin", bn: "উৎস" }, value: { en: "Sundarbans Forest", bn: "সুন্দরবন বন" } },
            { label: { en: "Processing", bn: "প্রক্রিয়া" }, value: { en: "Unpasteurized", bn: "কাঁচা ও অপাস্তুরিত" } },
          ],
          description: {
            en: "Direct from wild hives. Never heated or diluted, preserving live pollen and enzymes.",
            bn: "বুনো মৌচাক থেকে সরাসরি সংগৃহীত অপাস্তুরিত প্রাকৃতিক মধু। কোনো কৃত্রিম মিষ্টি বা প্রিজারভেটিভ নেই।",
          },
          variants: [
            {
              label: { en: "Weight", bn: "ওজন" },
              options: [
                { en: "500g", bn: "৫০০ গ্রাম" },
                { en: "1kg", bn: "১ কেজি" },
              ],
            },
          ],
          accentColor: "#D97706",
          bgGradient: "from-amber-100/60 via-emerald-50 to-emerald-50/30",
        },
        {
          id: "harvest-p2",
          name: {
            en: "Cold-Pressed Mustard Oil (1 Litre)",
            bn: "কাঠের ঘানিভাঙা সরিষার তেল (১ লিটার)",
          },
          category: { en: "Oils", bn: "তেল" },
          price: "৳৩৫০",
          badge: { en: "Wood-Pressed", bn: "কাঠের ঘানি" },
          rating: "4.8",
          specs: [
            { label: { en: "Method", bn: "পদ্ধতি" }, value: { en: "Cold-Pressed Wood Ghani", bn: "কোল্ড-প্রেসড কাঠের ঘানি" } },
          ],
          description: {
            en: "Traditional wooden cold-pressed unrefined mustard seed oil with natural pungent aroma.",
            bn: "প্রথম চাপের খাঁটি সরিষার তেল যা ঐতিহ্যবাহী কাঠের ঘানিতে তৈরি। ঝাঁজালো ও স্বাস্থ্যসম্মত।",
          },
          variants: [
            {
              label: { en: "Volume", bn: "পরিমাণ" },
              options: [
                { en: "1L", bn: "১ লিটার" },
                { en: "2L", bn: "২ লিটার" },
                { en: "5L", bn: "৫ লিটার" },
              ],
            },
          ],
          accentColor: "#059669",
          bgGradient: "from-emerald-100/50 via-amber-50 to-emerald-50",
        },
        {
          id: "harvest-p3",
          name: {
            en: "Premium Kalijeera Aromatic Rice (2kg)",
            bn: "প্রিমিয়াম কালিজিরা পোলাও চাল (২ কেজি)",
          },
          category: { en: "Grains", bn: "চাল ও ডাল" },
          price: "৳২৮০",
          badge: { en: "New Crop", bn: "নতুন চাল" },
          rating: "4.8",
          specs: [
            { label: { en: "Aroma", bn: "সুগন্ধ" }, value: { en: "Natural Dinajpur Kalijeera", bn: "দিনাজপুরের খাঁটি কালিজিরা" } },
          ],
          description: {
            en: "Naturally fragrant small-grain premium rice aged to perfection for biryani and polao.",
            bn: "পোলাও, পায়েস ও বিরিয়ানির জন্য দিনাজপুরের বিখ্যাত সুগন্ধি ছোট দানার চাল।",
          },
          variants: [
            {
              label: { en: "Bag Size", bn: "সাইজ" },
              options: [
                { en: "2kg", bn: "২ কেজি" },
                { en: "5kg", bn: "৫ কেজি" },
              ],
            },
          ],
          accentColor: "#10B981",
          bgGradient: "from-emerald-100/40 via-stone-50 to-amber-50",
        },
        {
          id: "harvest-p4",
          name: {
            en: "Artisanal Cow Ghee (400g)",
            bn: "খাঁটি গাওয়া ঘি (৪০০ গ্রাম)",
          },
          category: { en: "Dairy", bn: "দুধের পণ্য" },
          price: "৳৮৫০",
          originalPrice: "৳৯৫০",
          badge: { en: "Bestseller", bn: "বেস্টসেলার" },
          rating: "4.9",
          specs: [
            { label: { en: "Milk", bn: "দুধ" }, value: { en: "Grass-Fed Cow Milk", bn: "ঘাস খাওয়া দেশি গাভীর দুধ" } },
          ],
          description: {
            en: "Slowly simmered cultured butter made from grass-fed desi cow milk. Granular texture and rich aroma.",
            bn: "ঐতিহ্যবাহী পদ্ধতিতে তৈরি খাঁটি দানাদার গাওয়া ঘি। অতুলনীয় স্বাদ ও ঘ্রাণ।",
          },
          variants: [
            {
              label: { en: "Weight", bn: "ওজন" },
              options: [
                { en: "400g", bn: "৪০০ গ্রাম" },
                { en: "800g", bn: "৮০০ গ্রাম" },
              ],
            },
          ],
          accentColor: "#D97706",
          bgGradient: "from-amber-100/50 via-emerald-50 to-stone-50",
        },
      ],
      featureBar: [
        { en: "100% Genuine Chemical & Adulteration Free Guarantee", bn: "১০০% রাসায়নিক ও ভেজালমুক্ত খাঁটি পণ্যের নিশ্চয়তা" },
        { en: "Morning & Evening Slot Delivery Options Available", bn: "সকাল ও সন্ধ্যার সুবিধাজনক ডেলিভারি টাইম স্লট" },
        { en: "Safe Cash on Delivery Across Bangladesh", bn: "সারা বাংলাদেশে নিরাপদ ক্যাশ অন ডেলিভারি" },
      ],
      cartPreview: {
        items: [
          {
            name: { en: "Sundarbans Raw Wild Honey (500g)", bn: "সুন্দরবনের কাঁচা প্রাকৃতিক মধু (৫০০ গ্রাম)" },
            variant: { en: "500g", bn: "৫০০ গ্রাম" },
            price: "৳৭৫০",
            quantity: 2,
          },
          {
            name: { en: "Cold-Pressed Mustard Oil (1 Litre)", bn: "কাঠের ঘানিভাঙা সরিষার তেল (১ লিটার)" },
            variant: { en: "1L", bn: "১ লিটার" },
            price: "৳৩৫০",
            quantity: 1,
          },
        ],
        subtotal: "৳১,৮৫০",
        shipping: "৳০ (ফ্রি ডেলিভারি)",
        total: "৳১,৮৫০",
        paymentMethods: ["Cash on Delivery", "bKash", "Nagad"],
      },
    },
    capabilities: [
      {
        id: "cap-quick-qty-counter",
        title: { en: "Fast In-Grid Quantity Increments", bn: "গ্রিডে দ্রুত কোয়ান্টিটি কাউন্টার (+ / -)" },
        description: {
          en: "Shoppers can add multiple quantities directly from the catalog grid without leaving the page.",
          bn: "পেজ ত্যাগ না করেই সরাসরি ক্যাটালগ গ্রিড থেকে পরিমাপ ও সংখ্যা বাড়ানোর সুবিধা।",
        },
        iconName: "PlusCircle",
      },
      {
        id: "cap-weight-variants",
        title: { en: "Weight & Packaging Variant Selectors", bn: "ওজন ও প্যাকেজিং ভ্যারিয়েন্ট সিলেক্টর" },
        description: {
          en: "Seamlessly switch prices based on grams, kilograms, or litres (500g, 1kg, 2L, 5L).",
          bn: "গ্রাম, কেজি বা লিটার পরিবর্তনের সাথে সাথে স্বয়ংক্রিয়ভাবে মূল্য পরিবর্তন হয়।",
        },
        iconName: "Package",
      },
      {
        id: "cap-delivery-slots",
        title: { en: "Delivery Slot & Date Selection", bn: "ডেলিভারি তারিখ ও স্লট নির্বাচন" },
        description: {
          en: "Support morning and afternoon grocery fulfillment slots for perishable foods.",
          bn: "পচনশীল খাবারের জন্য সকাল কিংবা সন্ধ্যার ডেলিভারি স্লট বেছে নেওয়ার অপশন।",
        },
        iconName: "Truck",
      },
      {
        id: "cap-low-stock-alert",
        title: { en: "Live Inventory & Fresh Batch Alerts", bn: "লাইভ স্টক ও ফ্রেশ ব্যাচ অ্যালার্ট" },
        description: {
          en: "Labels like 'Harvested Today' or 'Limited Seasonal Batch' drive urgency and transparency.",
          bn: "'আজকের তাজা সংগ্রহ' বা 'সীমিত মৌসুমী ব্যাচ' লেবেল দিয়ে ক্রেতাকে সঠিক তথ্য প্রদান।",
        },
        iconName: "Clock",
      },
    ],
    customization: {
      customizable: [
        { en: "Fresh natural green accents, banner gradients, and promotional badges", bn: "তাজা সবুজ কালার অ্যাকসেন্ট, ব্যানার গ্রেডিয়েন্ট ও প্রোমোশনাল ব্যাজ" },
        { en: "Homepage daily harvest categories and seasonal vegetable boxes", bn: "হোমপেজের দৈনিক তাজা সংগ্রহের ক্যাটাগরি ও অফার বক্স" },
        { en: "Delivery slot options, minimum order thresholds for free shipping", bn: "ডেলিভারি স্লট এবং ফ্রি শিপিংয়ের জন্য সর্বনিম্ন অর্ডার মূল্য নির্ধারণ" },
        { en: "Organic certification seals and customer guarantees", bn: "অর্গানিক সার্টিফিকেশন সিল ও কাস্টমার গ্যারান্টি নোট" },
      ],
      nonCustomizable: [
        { en: "Underlying mobile shopping-cart performance pipeline", bn: "মূল মোবাইল কার্ট প্রসেসিং ও অপ্টিমাইজড আর্কিটেকচার" },
      ],
      planDependent: [
        { en: "Custom domain connection supported across all standard retail tiers", bn: "সকল রিটেল টিয়ারে কাস্টম ডোমেইন কানেকশন সমর্থিত" },
        { en: "Automated Pathao/Steadfast delivery dispatch requires Growth tier", bn: "অটোমেটেড কুরিয়ার বুকিং সুবিধা পাওয়ার জন্য গ্রোথ প্ল্যান প্রয়োজন" },
      ],
      considerations: {
        en: "Harvest Pure is tailored for grocery, superstores, organic agriculture, and packaged foodstuffs requiring high-density product browsing.",
        bn: "দ্রুত গ্রোসারি ও খাদ্যসামগ্রী বিক্রির জন্য হার্ভেস্ট পিউর সর্বোত্তম সমাধান।",
      },
    },
    planEligibility: {
      plans: [
        { tier: "starter", name: { en: "Starter", bn: "স্টার্টার" }, status: "included", note: { en: "Full theme support with manual order management and up to 100 products.", bn: "১০০টি আইটেম ও কাস্টম ডোমেইন সহ সম্পূর্ণ থিম সাপোর্ট।" } },
        { tier: "growth", name: { en: "Growth", bn: "গ্রোথ" }, status: "included", note: { en: "Up to 2,500 products with automated courier booking and invoice printing.", bn: "২,৫০০টি আইটেম, কুরিয়ার বুকিং ও ইনভয়েস প্রিন্টিং সুবিধা।" } },
        { tier: "scale", name: { en: "Scale", bn: "স্কেল" }, status: "included", note: { en: "Unlimited products, high-throughput ordering, and multi-location fulfillment.", bn: "আনলিমিটেড প্রোডাক্ট ও উচ্চগতির মাল্টি-লোকেশন অর্ডার প্রসেসিং।" } },
      ],
      summary: {
        en: "Harvest Pure is included on all CartX plans with no hidden theme costs.",
        bn: "হার্ভেস্ট পিউর থিমটি কার্টএক্সের সকল প্ল্যানে কোনো বাড়তি ফি ছাড়াই অন্তর্ভুক্ত।",
      },
    },
    relatedThemeSlugs: ["volt-tech", "casa-living"],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Casa Living (Home Decor, Furniture & Lifestyle)
  // ─────────────────────────────────────────────────────────────
  "casa-living": {
    slug: "casa-living",
    name: {
      en: "Casa Living",
      bn: "কাসা লিভিং",
    },
    category: "home",
    categoryLabel: {
      en: "Home & Lifestyle",
      bn: "হোম ও লাইফস্টাইল",
    },
    tagline: {
      en: "Warm minimalist layout crafted for home decor, furniture, and crafted artifacts",
      bn: "হোম ডেকর, আসবাবপত্র ও ঘর সাজানোর সামগ্রীর জন্য মার্জিত ও নান্দনিক ডিজাইন",
    },
    description: {
      en: "Tailored for furniture showrooms, interior accent shops, ceramic artisans, and kitchenware retailers. Focuses on room-setting photography, dimensional measurements, and bulky item shipping notices.",
      bn: "আসবাবপত্র, সিরামিক তৈজসপত্র এবং হোম ডেকর পণ্যের জন্য আদর্শ। রয়েছে ডাইমেনশন পরিমাপ এবং রুম-সেটিং ফটোগ্রাফি উপস্থাপনার সুবিধা।",
    },
    style: "warm-minimal",
    styleLabel: {
      en: "Warm Minimalist",
      bn: "ওয়ার্ম মিনিমালিস্ট",
    },
    layoutType: "minimal-grid",
    layoutLabel: {
      en: "Room Showcase & Grid",
      bn: "রুম শোকেস ও গ্রিড",
    },
    availability: "available",
    mobileFriendly: true,
    eligiblePlans: ["starter", "growth", "scale"],
    palette: [
      { bg: "bg-[#292524]", hex: "#292524", label: { en: "Earth Charcoal", bn: "আর্থ চারকোল" } },
      { bg: "bg-[#B45309]", hex: "#B45309", label: { en: "Terracotta Clay", bn: "টেরাকোটা ক্লে" } },
      { bg: "bg-[#F5F5F4]", hex: "#F5F5F4", label: { en: "Warm Bone", bn: "ওয়ার্ম বোন" } },
    ],
    keywords: ["home", "furniture", "decor", "lifestyle", "ceramics", "woodcraft", "kitchenware", "curtains", "lighting"],
    preview: {
      domain: "demo.casaliving.cartx.app",
      brandName: "CASA LIVING",
      announcement: {
        en: "Handcrafted Ceramic & Teakwood Collection • Safe Protective Delivery Across Bangladesh",
        bn: "হস্তশিল্প সিরামিক ও সেগুন কাঠের আসবাবপত্র • দেশজুড়ে নিরাপদ ডেলিভারি নিশ্চয়তা",
      },
      navLinks: [
        { en: "Living Room", bn: "লিভিং রুম" },
        { en: "Artisan Ceramics", bn: "সিরামিক ডিশওয়্যার" },
        { en: "Warm Lighting", bn: "লাইটিং ও ল্যাম্প" },
        { en: "Textiles & Rugs", bn: "টেক্সটাইল ও কার্পেট" },
      ],
      hero: {
        tagline: {
          en: "ORGANIC SPACES // ARTISAN CRAFTED",
          bn: "শান্তিময় ঘর // নিপুণ কারিগরি",
        },
        headline: {
          en: "Solid Teak Lounge Chair",
          bn: "সলিড সেগুন লাউঞ্জ চেয়ার",
        },
        subhead: {
          en: "Hand-shaped solid seasoned teakwood paired with woven natural cane seat for timeless warmth.",
          bn: "প্রাকৃতিক সেগুন কাঠ এবং টেকসই বেতের সমন্বয়ে তৈরি আরামদায়ক ও ক্লাসিক লাউঞ্জ চেয়ার।",
        },
        buttonText: {
          en: "Explore Living Spaces",
          bn: "লিভিং কালেকশন দেখুন",
        },
        bgGradient: "linear-gradient(135deg, rgba(245,245,244,0.95) 0%, rgba(180,83,9,0.15) 100%)",
        accentClass: "from-stone-800 via-amber-900 to-amber-700",
      },
      featuredCategories: [
        { en: "Solid Wood Seating", bn: "কাঠের চেয়ার ও সোফা" },
        { en: "Studio Pottery", bn: "হাতে তৈরি সিরামিক" },
        { en: "Linen Cushions", bn: "লিনেন কুশন ও কভার" },
        { en: "Brass Tableware", bn: "পিতলের তৈজসপত্র" },
      ],
      sampleProducts: [
        {
          id: "casa-p1",
          name: {
            en: "Handmade Speckled Ceramic Vase",
            bn: "হ্যান্ডমেড স্পেকল্ড সিরামিক ফুলদানি",
          },
          category: { en: "Ceramics", bn: "সিরামিক" },
          price: "৳১,৮৫০",
          originalPrice: "৳২,২০০",
          badge: { en: "Handcrafted", bn: "হস্তশিল্প" },
          rating: "4.9",
          specs: [
            { label: { en: "Material", bn: "উপাদান" }, value: { en: "Stoneware Clay", bn: "স্টোনওয়্যার কাদামাটি" } },
            { label: { en: "Height", bn: "উচ্চতা" }, value: { en: "26 cm", bn: "২৬ সে.মি." } },
          ],
          description: {
            en: "Hand-thrown stoneware clay fired at 1250°C with matte speckled natural glaze.",
            bn: "১২৫০ ডিগ্রি সেলসিয়াসে পোড়ানো মজবুত সিরামিক ফুলদানি যা ঘরে আনে স্নিগ্ধ নান্দনিকতা।",
          },
          variants: [
            {
              label: { en: "Glaze Finish", bn: "ফিনিশিং" },
              options: [
                { en: "Matte Sand", bn: "ম্যাট স্যান্ড" },
                { en: "Charcoal Ash", bn: "চারকোল অ্যাশ" },
              ],
            },
          ],
          accentColor: "#B45309",
          bgGradient: "from-amber-100/40 via-stone-100 to-stone-50",
        },
        {
          id: "casa-p2",
          name: {
            en: "Woven Natural Jute Floor Mat (4x6 ft)",
            bn: "ন্যাচারাল পাটের ফ্লোর ম্যাট (৪x৬ ফুট)",
          },
          category: { en: "Rugs", bn: "ম্যাট ও কার্পেট" },
          price: "৳২,৪৫০",
          badge: { en: "Eco-Friendly", bn: "পরিবেশবান্ধব" },
          rating: "4.8",
          specs: [
            { label: { en: "Fibre", bn: "আঁশ" }, value: { en: "100% Golden Jute", bn: "১০০% গোল্ডেন পাট" } },
          ],
          description: {
            en: "Hand-braided sustainable natural golden jute with reversible thick woven weave.",
            bn: "খাঁটি দেশীয় সোনালী পাটের তৈরি টেকসই ও দৃষ্টিনন্দন ফ্লোর ম্যাট।",
          },
          variants: [
            {
              label: { en: "Dimension", bn: "সাইজ" },
              options: [
                { en: "4x6 ft", bn: "৪x৬ ফুট" },
                { en: "5x7 ft", bn: "৫x৭ ফুট" },
              ],
            },
          ],
          accentColor: "#78716C",
          bgGradient: "from-stone-200/50 via-amber-100/30 to-stone-50",
        },
        {
          id: "casa-p3",
          name: {
            en: "Minimalist Brass Table Lamp",
            bn: "মিনিমালিস্ট ব্রাস টেবিল ল্যাম্প",
          },
          category: { en: "Lighting", bn: "লাইটিং" },
          price: "৳৩,৮৫০",
          originalPrice: "৳৪,৫০০",
          badge: { en: "Warm Glow", bn: "ওয়ার্ম গ্লো" },
          rating: "4.9",
          specs: [
            { label: { en: "Socket", bn: "হোল্ডার" }, value: { en: "Standard E27 Bulb", bn: "স্ট্যান্ডার্ড ই২৭ বাল্ব" } },
          ],
          description: {
            en: "Solid brass base with fabric drum shade emitting soft ambient warm lighting.",
            bn: "সলিড পিতলের বেইজ এবং ফেব্রিক শেডযুক্ত ল্যাম্প যা বেডরুম ও স্টাডি রুমে চমৎকার আলো দেয়।",
          },
          variants: [
            {
              label: { en: "Shade Tone", bn: "শেড কালার" },
              options: [
                { en: "Oatmeal Fabric", bn: "ওটমিল ফেব্রিক" },
                { en: "Olive Linen", bn: "অলিভ লিনেন" },
              ],
            },
          ],
          accentColor: "#D97706",
          bgGradient: "from-amber-100/50 via-stone-100 to-amber-50",
        },
        {
          id: "casa-p4",
          name: {
            en: "Seasoned Teak Serving Board",
            bn: "সিজনড সেগুন পরিবেশন বোর্ড",
          },
          category: { en: "Kitchenware", bn: "কিচেন" },
          price: "৳১,২৫০",
          badge: { en: "Food Safe", bn: "ফুড সেফ" },
          rating: "4.7",
          specs: [
            { label: { en: "Finish", bn: "ফিনিশিং" }, value: { en: "Food-Safe Mineral Oil", bn: "ফুড-সেফ মিনারেল অয়েল" } },
          ],
          description: {
            en: "Carved from single block seasoned teak with natural wood grain and ergonomic handle.",
            bn: "খাবারের প্লেটার বা কাটিং বোর্ড হিসেবে ব্যবহার উপযোগী খাঁটি সেগুন কাঠের সার্ভিং বোর্ড।",
          },
          variants: [
            {
              label: { en: "Length", bn: "সাইজ" },
              options: [
                { en: "Medium (35cm)", bn: "মাঝারি (৩৫ সেমি)" },
                { en: "Large (45cm)", bn: "বড় (৪৫ সেমি)" },
              ],
            },
          ],
          accentColor: "#57493D",
          bgGradient: "from-stone-300/40 via-amber-100/20 to-stone-50",
        },
      ],
      featureBar: [
        { en: "Multi-Layered Shockproof Packaging for Fragile Items", bn: "কাঁচ ও সিরামিকের জন্য মাল্টি-লেয়ার শকপ্রুফ প্যাকেজিং" },
        { en: "Nationwide Doorstep Delivery with Handling Care", bn: "দেশজুড়ে বিশ্বস্ত ও নির্ভরযোগ্য হোম ডেলিভারি" },
        { en: "Damage Protection Guarantee During Transit", bn: "ট্রানজিট চলাকালীন যেকোনো ক্ষয়ক্ষতিতে সহজ সমাধান" },
      ],
      cartPreview: {
        items: [
          {
            name: { en: "Handmade Speckled Ceramic Vase", bn: "হ্যান্ডমেড স্পেকল্ড সিরামিক ফুলদানি" },
            variant: { en: "Matte Sand", bn: "ম্যাট স্যান্ড" },
            price: "৳১,৮৫০",
            quantity: 1,
          },
          {
            name: { en: "Woven Natural Jute Floor Mat (4x6 ft)", bn: "ন্যাচারাল পাটের ফ্লোর ম্যাট (৪x৬ ফুট)" },
            variant: { en: "4x6 ft", bn: "৪x৬ ফুট" },
            price: "৳২,৪৫০",
            quantity: 1,
          },
        ],
        subtotal: "৳৪,৩০০",
        shipping: "৳১২০ (স্পেশাল ভঙ্গুর প্যাকেজিং)",
        total: "৳৪,৪২০",
        paymentMethods: ["Cash on Delivery", "bKash", "Cards"],
      },
    },
    capabilities: [
      {
        id: "cap-room-views",
        title: { en: "Room-Setting Lifestyle Context", bn: "রুম-সেটিং লাইফস্টাইল ভিউ" },
        description: {
          en: "Present products placed in furnished living rooms to help buyers visualize scale.",
          bn: "ফার্নিচার ও ডেকর সামগ্রী ঘরের পরিবেশে কেমন দেখাবে তা ক্রেতাদের স্পষ্ট বোঝানোর অপশন।",
        },
        iconName: "Home",
      },
      {
        id: "cap-dimension-specs",
        title: { en: "Detailed Dimensions & Materials", bn: "ডাইমেনশন পরিমাপ ও ম্যাটেরিয়াল গাইড" },
        description: {
          en: "Height, width, depth, weight, and assembly instructions displayed cleanly.",
          bn: "উচ্চতা, প্রস্থ, গভীরতা ও ম্যাটেরিয়ালের পরিষ্কার তথ্য যা ঘরের সাথে সাইজ মেলাতে সাহায্য করে।",
        },
        iconName: "Ruler",
      },
      {
        id: "cap-fragile-shipping",
        title: { en: "Fragile Delivery Handling Notices", bn: "ভঙ্গুর পণ্য স্পেশাল ডেলিভারি নোটিস" },
        description: {
          en: "Built-in handling badges reassure buyers about multi-layer bubble and wooden crate packaging.",
          bn: "কাঁচ বা সিরামিকের পণ্য সতর্কতার সাথে ডেলিভারির প্রতিশ্রুতি দিয়ে গ্রাহকের আস্থা অর্জন।",
        },
        iconName: "Truck",
      },
      {
        id: "cap-swatch-finishes",
        title: { en: "Wood Polish & Fabric Swatches", bn: "কাঠের পলিশ ও ফেব্রিক সোয়াচ" },
        description: {
          en: "Let shoppers inspect finish options like Natural Teak, Antique Walnut, and Matte Black.",
          bn: "সেগুন, মেহগনি বা ওক ফিনিশের রঙ নির্বাচন করার ইন্টারঅ্যাকটিভ কালার সোয়াচ।",
        },
        iconName: "Palette",
      },
    ],
    customization: {
      customizable: [
        { en: "Warm earthy color tokens, gallery layouts, and typography pairings", bn: "আর্থি কালার টোকেন, গ্যালারি বিন্যাস এবং ফন্ট পেয়ারিং" },
        { en: "Room category highlights (Living, Dining, Bedroom, Kitchen)", bn: "রুম ক্যাটাগরি হাইলাইট (লিভিং, ডাইনিং, বেডরুম, কিচেন)" },
        { en: "Dimension guide tabs and material maintenance instructions", bn: "মাপজোখ নির্দেশিকা এবং কাঠ ও ফেব্রিকের যত্ন গাইড" },
        { en: "Fragile packaging guarantee pills and checkout delivery notes", bn: "ভঙ্গুর প্যাকেজিং গ্যারান্টি পিল এবং চেকআউট ডেলিভারি নির্দেশিকা" },
      ],
      nonCustomizable: [
        { en: "Core high-resolution image compression engine", bn: "কোর হাই-রেজ্যুলুশন ইমেজ কম্প্রেশন সিস্টেম" },
      ],
      planDependent: [
        { en: "Custom domain connection available on Starter, Growth, and Scale", bn: "স্টার্টার, গ্রোথ এবং স্কেল প্ল্যানে কাস্টম ডোমেইন সাপোর্ট" },
        { en: "Dedicated courier automated booking requires Growth plan", bn: "অটোমেটেড কুরিয়ার বুকিং সুবিধার জন্য গ্রোথ প্ল্যান প্রয়োজন" },
      ],
      considerations: {
        en: "Casa Living provides a tranquil, sophisticated look for lifestyle, interior decoration, and furniture brands.",
        bn: "হোম ডেকর, ফার্নিচার ও লাইফস্টাইল ব্র্যান্ডের জন্য কাসা লিভিং অত্যন্ত মার্জিত থিম।",
      },
    },
    planEligibility: {
      plans: [
        { tier: "starter", name: { en: "Starter", bn: "স্টার্টার" }, status: "included", note: { en: "Supports up to 100 decor items with full layout capabilities.", bn: "১০০টি পণ্য ও কাস্টম ডোমেইন সহ সম্পূর্ণ থিম সাপোর্ট।" } },
        { tier: "growth", name: { en: "Growth", bn: "গ্রোথ" }, status: "included", note: { en: "Up to 2,500 products with courier automation and multi-staff roles.", bn: "২,৫০০টি পণ্য এবং অটোমেটেড কুরিয়ার সুবিধা সহ অন্তর্ভুক্ত।" } },
        { tier: "scale", name: { en: "Scale", bn: "স্কেল" }, status: "included", note: { en: "Unlimited catalog items and dedicated enterprise infrastructure.", bn: "আনলিমিটেড প্রোডাক্ট ও বিশেষ সহায়তা সহ অন্তর্ভুক্ত।" } },
      ],
      summary: {
        en: "Casa Living is included across all standard retail CartX plans.",
        bn: "কাসা লিভিং থিমটি কার্টএক্সের সকল প্ল্যানে সম্পূর্ণ বিনামূল্যে অন্তর্ভুক্ত।",
      },
    },
    relatedThemeSlugs: ["aura-studio", "zenith-stationery"],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Zenith Stationery (Books, Stationery & Paper Goods)
  // ─────────────────────────────────────────────────────────────
  "zenith-stationery": {
    slug: "zenith-stationery",
    name: {
      en: "Zenith Stationery",
      bn: "জেনিত স্টেশনারি",
    },
    category: "books",
    categoryLabel: {
      en: "Books & Stationery",
      bn: "বই ও স্টেশনারি",
    },
    tagline: {
      en: "Minimalist and structured catalog design for bookstores, publishers, and journals",
      bn: "বইয়ের দোকান, প্রকাশনা সংস্থা ও ডায়েরি-স্টেশনারির জন্য স্ট্রাকচার্ড ক্যাটালগ ডিজাইন",
    },
    description: {
      en: "Crafted for bookshops, indie publishing houses, fountain pen purveyors, and journal makers. Highlights book authors, ISBN codes, paper GSM specs, and Look Inside previews.",
      bn: "বইয়ের প্রকাশনা, লাইব্রেরি ও স্টেশনারি ব্র্যান্ডের জন্য পারফেক্ট। রয়েছে লেখক ফিল্টারিং, আইএসবিএন কোড এবং কাগজের স্পেক্স প্রদর্শনের সুযোগ।",
    },
    style: "classic",
    styleLabel: {
      en: "Minimalist & Academic",
      bn: "মিনিমালিস্ট ও রুচিশীল",
    },
    layoutType: "minimal-grid",
    layoutLabel: {
      en: "Catalog Grid & Excerpts",
      bn: "ক্যাটালগ গ্রিড ও উদ্ধৃতি",
    },
    availability: "available",
    mobileFriendly: true,
    eligiblePlans: ["starter", "growth", "scale"],
    palette: [
      { bg: "bg-[#1E293B]", hex: "#1E293B", label: { en: "Ink Slate", bn: "ইঙ্ক স্লেট" } },
      { bg: "bg-[#0D9488]", hex: "#0D9488", label: { en: "Vintage Teal", bn: "ভিন্টেজ টিল" } },
      { bg: "bg-[#F8FAFC]", hex: "#F8FAFC", label: { en: "Parchment White", bn: "পার্চমেন্ট হোয়াইট" } },
    ],
    keywords: ["books", "stationery", "journal", "planner", "pens", "paper", "author", "publishing", "academic"],
    preview: {
      domain: "demo.zenithbooks.cartx.app",
      brandName: "ZENITH BOOKS",
      announcement: {
        en: "Curated Bestselling Fiction & Non-Fiction • Protective Corner Packaging For All Books",
        bn: "সেরা প্রকাশিত বই ও স্টেশনারি • বইয়ের কোণা অক্ষত রাখতে বিশেষ শক্ত প্যাকেজিং",
      },
      navLinks: [
        { en: "Bestselling Books", bn: "জনপ্রিয় বই" },
        { en: "Writers & Authors", bn: "লেখক ও অনুবাদক" },
        { en: "Hardcover Journals", bn: "হার্ডকভার ডায়েরি" },
        { en: "Fountain Pens", bn: "ফাউন্টেন পেন" },
      ],
      hero: {
        tagline: {
          en: "CONTEMPORARY LITERATURE // HARDCOVER",
          bn: "সমকালীন সাহিত্য // স্পেশাল হার্ডকভার",
        },
        headline: {
          en: "The Architect's Journal 2026",
          bn: "দ্য আর্কিটেক্টস জার্নাল ২০২৬",
        },
        subhead: {
          en: "160 GSM fountain-pen friendly Japanese paper bound in textured bookcloth with ribbon markers.",
          bn: "১৬০ জিএসএম ফাউন্টেন-পেন ফ্রেন্ডলি জাপানি পেপারে তৈরি চমৎকার বুকক্লথ জার্নাল।",
        },
        buttonText: {
          en: "Browse Catalog",
          bn: "ক্যাটালগ ব্রাউজ করুন",
        },
        bgGradient: "linear-gradient(135deg, rgba(248,250,252,0.95) 0%, rgba(13,148,136,0.15) 100%)",
        accentClass: "from-slate-800 via-teal-900 to-teal-700",
      },
      featuredCategories: [
        { en: "Fiction & Novels", bn: "উপন্যাস ও গল্প" },
        { en: "Hardbound Planners", bn: "হার্ডবাউন্ড প্ল্যানার" },
        { en: "Calligraphy & Ink", bn: "ক্যালিগ্রাফি ও কালি" },
        { en: "Leather Bookmarks", bn: "লেদার বুকমার্ক" },
      ],
      sampleProducts: [
        {
          id: "zenith-p1",
          name: {
            en: "160 GSM Fountain Pen Hardcover Journal",
            bn: "১৬০ জিএসএম হার্ডকভার ফাউন্টেন পেন জার্নাল",
          },
          category: { en: "Journals", bn: "জার্নাল" },
          price: "৳১,২০০",
          originalPrice: "৳১,৪৫০",
          badge: { en: "Ink-Proof", bn: "ইঙ্ক-প্রুফ" },
          rating: "4.9",
          specs: [
            { label: { en: "Paper", bn: "কাগজ" }, value: { en: "160 GSM Bleed-Proof", bn: "১৬০ জিএসএম ব্লিড-প্রুফ" } },
            { label: { en: "Pages", bn: "পৃষ্ঠা" }, value: { en: "192 Dot Grid Pages", bn: "১৯২ ডট গ্রিড পৃষ্ঠা" } },
          ],
          description: {
            en: "Lay-flat 180° binding with zero ink-bleed even under wet calligraphy nibs. Includes back storage pocket.",
            bn: "১৮০ ডিগ্রি ফ্ল্যাট খোলার সুবিধা এবং কালির দাগ পেছনের পৃষ্ঠায় না যাওয়ার শতভাগ নিশ্চয়তা।",
          },
          variants: [
            {
              label: { en: "Cover Tone", bn: "কভার কালার" },
              options: [
                { en: "Deep Navy", bn: "ডিপ নেভি" },
                { en: "Forest Green", bn: "ফরেস্ট গ্রিন" },
                { en: "Dusty Plum", bn: "ডাস্টি প্লাম" },
              ],
            },
          ],
          accentColor: "#0D9488",
          bgGradient: "from-teal-100/50 via-slate-100 to-slate-50",
        },
        {
          id: "zenith-p2",
          name: {
            en: "The River of Time (Collector's Hardcover)",
            bn: "কালের নদী (কালেক্টরস হার্ডকভার এডিশন)",
          },
          category: { en: "Novels", bn: "উপন্যাস" },
          price: "৳৬৮০",
          originalPrice: "৳৮০০",
          badge: { en: "Bestseller", bn: "বেস্টসেলার" },
          rating: "4.8",
          specs: [
            { label: { en: "Author", bn: "লেখক" }, value: { en: "Dr. K. Rahman", bn: "ড. কে. রহমান" } },
            { label: { en: "Binding", bn: "বাঁধাই" }, value: { en: "Gold Foil Embossed", bn: "গোল্ড ফয়েল বাঁধাই" } },
          ],
          description: {
            en: "Deluxe first edition with gold foil embossing, author preface, and custom illustrated endpapers.",
            bn: "স্বর্ণালী ফয়েল বাঁধাই এবং বিশেষ ভূমিকা সহ প্রকাশিত চমৎকার ক্লাসিক উপন্যাস।",
          },
          variants: [
            {
              label: { en: "Format", bn: "সংস্করণ" },
              options: [
                { en: "Hardcover", bn: "হার্ডকভার" },
                { en: "Paperback", bn: "পেপারব্যাক" },
              ],
            },
          ],
          accentColor: "#1E293B",
          bgGradient: "from-slate-200/60 via-teal-100/30 to-slate-50",
        },
        {
          id: "zenith-p3",
          name: {
            en: "Brass Nib Fountain Pen (Fine)",
            bn: "পিতলের নিব ফাউন্টেন পেন (ফাইন)",
          },
          category: { en: "Pens", bn: "পেন" },
          price: "৳১,৮৫০",
          badge: { en: "Precision", bn: "স্মুথ নিব" },
          rating: "4.9",
          specs: [
            { label: { en: "Nib", bn: "নিব" }, value: { en: "0.5mm Fine Brass", bn: "০.৫ মিমি ফাইন নিব" } },
          ],
          description: {
            en: "Machined solid brass body that develops a unique patina over time. Includes ink converter.",
            bn: "সলিড পিতলের টেকসই বডি যা ব্যবহারে আরও চমৎকার রূপ নেয়। সাথে রয়েছে ইংক কনভার্টার।",
          },
          variants: [
            {
              label: { en: "Finish", bn: "ফিনিশ" },
              options: [
                { en: "Raw Brass", bn: "র' ব্রাস" },
                { en: "Matte Black", bn: "ম্যাট ব্ল্যাক" },
              ],
            },
          ],
          accentColor: "#D97706",
          bgGradient: "from-amber-100/50 via-slate-100 to-stone-50",
        },
        {
          id: "zenith-p4",
          name: {
            en: "Full Grain Leather Book Sleeve",
            bn: "ফুল গ্রেইন লেদার বইয়ের স্লীভ",
          },
          category: { en: "Accessories", bn: "এক্সেসরিজ" },
          price: "৳১,৪৫০",
          originalPrice: "৳১,৭০০",
          badge: { en: "Genuine", bn: "আসল চামড়া" },
          rating: "4.7",
          specs: [
            { label: { en: "Fit", bn: "সাইজ" }, value: { en: "A5 Standard Books", bn: "এ৫ সাইজ বইয়ের উপযোগী" } },
          ],
          description: {
            en: "Protects your favourite novels and notebooks during travel. Hand-stitched with waxed thread.",
            bn: "ভ্রমণে বই ও ডায়েরির সুরক্ষা নিশ্চিত করতে নিখুঁত হাতে সেলাই করা খাঁটি চামড়ার কভার।",
          },
          variants: [
            {
              label: { en: "Leather Tone", bn: "চামড়ার রঙ" },
              options: [
                { en: "Cognac Tan", bn: "কনিয়াক ট্যান" },
                { en: "Espresso Brown", bn: "এসপ্রেসো ব্রাউন" },
              ],
            },
          ],
          accentColor: "#78350F",
          bgGradient: "from-stone-300/40 via-amber-100/30 to-slate-50",
        },
      ],
      featureBar: [
        { en: "Reinforced Book Corner Guards in Every Parcel", bn: "প্রতিটি পার্সেলের বই সুরক্ষিত রাখতে বিশেষ কর্নার গার্ড" },
        { en: "Fast Nationwide Courier Dispatch Across All 64 Districts", bn: "দেশের ৬৪টি জেলাতেই দ্রুততম কুরিয়ার হোম ডেলিভারি" },
        { en: "100% Original Publisher Edition Guarantee", bn: "১০০% মূল প্রকাশনী মুদ্রিত বইয়ের নিশ্চয়তা" },
      ],
      cartPreview: {
        items: [
          {
            name: { en: "160 GSM Fountain Pen Hardcover Journal", bn: "১৬০ জিএসএম হার্ডকভার ফাউন্টেন পেন জার্নাল" },
            variant: { en: "Deep Navy", bn: "ডিপ নেভি" },
            price: "৳১,২০০",
            quantity: 1,
          },
          {
            name: { en: "The River of Time (Collector's Hardcover)", bn: "কালের নদী (কালেক্টরস হার্ডকভার এডিশন)" },
            variant: { en: "Hardcover", bn: "হার্ডকভার" },
            price: "৳৬৮০",
            quantity: 1,
          },
        ],
        subtotal: "৳১,৮৮০",
        shipping: "৳৬০",
        total: "৳১,৯৪০",
        paymentMethods: ["Cash on Delivery", "bKash", "Nagad"],
      },
    },
    capabilities: [
      {
        id: "cap-author-taxonomies",
        title: { en: "Author & Publisher Categorization", bn: "লেখক ও প্রকাশনী ভিত্তিক ফিল্টারিং" },
        description: {
          en: "Browse catalog by author biography, translator credits, or publishing imprint.",
          bn: "লেখক, অনুবাদক এবং প্রকাশনী ভিত্তিক বই সহজে খুঁজে বের করার বিশেষ ফিল্টার ব্যবস্থা।",
        },
        iconName: "BookOpen",
      },
      {
        id: "cap-sample-pages",
        title: { en: "Look Inside Sample Chapters", bn: "একনজরে ভেতরের পাতা ও সূচিপত্র" },
        description: {
          en: "Embed sample excerpt pages and tables of contents directly on the product detail page.",
          bn: "বই কেনার পূর্বে সূচিপত্র ও কয়েকটি পৃষ্ঠা পড়ার সুযোগ দিয়ে ক্রেতাকে আত্মবিশ্বাসী করা।",
        },
        iconName: "FileText",
      },
      {
        id: "cap-protective-dispatch",
        title: { en: "Book-Protective Packaging Notice", bn: "বই বান্ধব শক্ত প্যাকেজিংয়ের তথ্য" },
        description: {
          en: "Reassure book collectors about damage-free bent-corner prevention in parcel transit.",
          bn: "বইয়ের পাতা ও কোণা অক্ষত রেখে পৌঁছানোর প্যাকেজিং বিবরণ প্রদর্শন।",
        },
        iconName: "ShieldCheck",
      },
      {
        id: "cap-spec-sheets",
        title: { en: "ISBN, Pages & GSM Details", bn: "আইএসবিএন, পৃষ্ঠা সংখ্যা ও জিএসএম বিবরণ" },
        description: {
          en: "Standardized book metadata table displaying ISBN, edition, binding, and paper weight.",
          bn: "আইএসবিএন, সংস্করণ ও বাঁধাইয়ের তথ্য পরিষ্কার স্পেকস টেবিলের মাধ্যমে উপস্থাপন।",
        },
        iconName: "Sliders",
      },
    ],
    customization: {
      customizable: [
        { en: "Sophisticated ink and parchment color schemes with scholarly typography", bn: "পাণ্ডুলিপি ও কালির ক্লাসিক কালার প্যালেট এবং রুচিশীল ফন্ট" },
        { en: "Book categories, genres, and author spotlight banners", bn: "বইয়ের ক্যাটাগরি, জঁর এবং লেখক পরিচিতি ব্যানার" },
        { en: "Book metadata fields (ISBN, Publisher, Page Count, Translator)", bn: "বইয়ের মেটাডাটা ফিল্ড (আইএসবিএন, প্রকাশক, পৃষ্ঠা সংখ্যা, অনুবাদক)" },
        { en: "Custom announcements for book fairs or promotional releases", bn: "বইমেলা বা নতুন প্রকাশনার বিশেষ ক্যাম্পেইন ব্যানার" },
      ],
      nonCustomizable: [
        { en: "Core metadata indexing and SEO schema architecture", bn: "কোর মেটাডাটা ইনডেক্সিং ও এসইও স্কিমা আর্কিটেকচার" },
      ],
      planDependent: [
        { en: "Custom domain connection supported across all standard retail tiers", bn: "সকল রিটেল টিয়ারে কাস্টম ডোমেইন কানেকশন সমর্থিত" },
        { en: "Steadfast & Pathao courier booking requires Growth tier", bn: "স্টেডফাস্ট ও পাঠাও অটো কুরিয়ার বুকিং সুবিধার জন্য গ্রোথ প্ল্যান প্রয়োজন" },
      ],
      considerations: {
        en: "Zenith Stationery is crafted for book retailers, cultural publications, and premium stationery merchants.",
        bn: "বইয়ের দোকান, প্রকাশনী এবং প্রিমিয়াম স্টেশনারি বিক্রেতাদের জন্য জেনিত স্টেশনারি আদর্শ।",
      },
    },
    planEligibility: {
      plans: [
        { tier: "starter", name: { en: "Starter", bn: "স্টার্টার" }, status: "included", note: { en: "Up to 100 books and stationery items with custom domain support.", bn: "১০০টি আইটেম ও কাস্টম ডোমেইন সহ সম্পূর্ণ থিম সাপোর্ট।" } },
        { tier: "growth", name: { en: "Growth", bn: "গ্রোথ" }, status: "included", note: { en: "Up to 2,500 products with automated courier booking and invoice printing.", bn: "২,৫০০টি পণ্য এবং অটোমেটেড কুরিয়ার সুবিধা সহ অন্তর্ভুক্ত।" } },
        { tier: "scale", name: { en: "Scale", bn: "স্কেল" }, status: "included", note: { en: "Unlimited products, priority catalog sync, and high-volume dispatch.", bn: "আনলিমিটেড প্রোডাক্ট ও উচ্চগতির মাল্টি-লোকেশন অর্ডার প্রসেসিং।" } },
      ],
      summary: {
        en: "Zenith Stationery is completely included across all CartX plans.",
        bn: "জেনিত স্টেশনারি থিমটি কার্টএক্সের প্রতিটি প্ল্যানে ফ্রিতে অন্তর্ভুক্ত।",
      },
    },
    relatedThemeSlugs: ["casa-living", "aura-studio"],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. B2B Wholesale Pro (Coming Soon)
  // ─────────────────────────────────────────────────────────────
  "b2b-wholesale-pro": {
    slug: "b2b-wholesale-pro",
    name: {
      en: "Wholesale Pro",
      bn: "হোলসেল প্রো",
    },
    category: "b2b",
    categoryLabel: {
      en: "Wholesale & B2B",
      bn: "পাইকারি ও বি২বি",
    },
    tagline: {
      en: "Tiered wholesale pricing, minimum order quantities (MOQ), and bulk quoting",
      bn: "ভলিউম ভিত্তিক পাইকারি মূল্য এবং বাল্ক অর্ডারিং কোটেশন ব্যবস্থা",
    },
    description: {
      en: "Planned theme for manufacturers, distributors, and wholesale traders requiring volume-based price breaks, business tax invoicing, and credit terms.",
      bn: "পাইকারি বিক্রেতা ও ডিস্ট্রিবিউটরদের জন্য পরিকল্পিত থিম। বাল্ক অর্ডার ও ভলিউম ডিসকাউন্ট সুবিধা থাকবে।",
    },
    style: "classic",
    styleLabel: {
      en: "Industrial & Enterprise",
      bn: "ইন্ডাস্ট্রিয়াল ও এন্টারপ্রাইজ",
    },
    layoutType: "high-density-grid",
    layoutLabel: {
      en: "Bulk Table Matrix",
      bn: "বাল্ক টেবিল ম্যাট্রিক্স",
    },
    availability: "coming-soon",
    mobileFriendly: true,
    eligiblePlans: ["scale"],
    palette: [
      { bg: "bg-[#1E293B]", hex: "#1E293B", label: { en: "Industrial Navy", bn: "ইন্ডাস্ট্রিয়াল নেভি" } },
      { bg: "bg-[#475569]", hex: "#475569", label: { en: "Steel Gray", bn: "স্টিল গ্রে" } },
    ],
    keywords: ["wholesale", "b2b", "bulk", "moq", "distributor", "manufacturing", "trade"],
    preview: {
      domain: "demo.wholesalepro.cartx.app",
      brandName: "WHOLESALE PRO",
      announcement: {
        en: "Coming Soon • Bulk B2B Wholesale Ordering Capabilities In Development",
        bn: "আসন্ন • বাল্ক বি২বি পাইকারি ট্রেডিং আর্কিটেকচার বর্তমানে নির্মাণাধীন",
      },
      navLinks: [
        { en: "Bulk Catalog", bn: "বাল্ক ক্যাটালগ" },
        { en: "Request Quote", bn: "কোটেশন রিকোয়েস্ট" },
      ],
      hero: {
        tagline: { en: "COMING SOON", bn: "শীঘ্রই আসছে" },
        headline: { en: "B2B Wholesale Commerce", bn: "বি২বি পাইকারি কমার্স" },
        subhead: {
          en: "Advanced wholesale capabilities are currently scheduled for future release.",
          bn: "উন্নত পাইকারি ও বাল্ক অর্ডারিং আর্কিটেকচার পরবর্তীতে রিলিজ করা হবে।",
        },
        buttonText: { en: "Learn More", bn: "বিস্তারিত জানুন" },
        bgGradient: "linear-gradient(135deg, rgba(30,41,59,0.9) 0%, rgba(71,85,105,0.2) 100%)",
        accentClass: "from-slate-700 via-slate-800 to-slate-900",
      },
      featuredCategories: [],
      sampleProducts: [],
      featureBar: [],
      cartPreview: {
        items: [],
        subtotal: "৳০",
        shipping: "৳০",
        total: "৳০",
        paymentMethods: ["Bank Transfer", "Letter of Credit"],
      },
    },
    capabilities: [],
    customization: {
      customizable: [],
      nonCustomizable: [],
      planDependent: [],
      considerations: {
        en: "Wholesale Pro is currently scheduled as a future enterprise release.",
        bn: "হোলসেল প্রো থিমটি ভবিষ্যতের এন্টারপ্রাইজ রিলিজের জন্য পরিকল্পিত।",
      },
    },
    planEligibility: {
      plans: [],
      summary: {
        en: "Wholesale Pro is coming soon for future enterprise tiers.",
        bn: "হোলসেল প্রো থিমটি শীঘ্রই আসছে।",
      },
    },
    relatedThemeSlugs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. Digital Vault (Coming Soon)
  // ─────────────────────────────────────────────────────────────
  "digital-vault": {
    slug: "digital-vault",
    name: {
      en: "Digital Vault",
      bn: "ডিজিটাল ভল্ট",
    },
    category: "digital",
    categoryLabel: {
      en: "Digital Products & Downloads",
      bn: "ডিজিটাল প্রোডাক্ট ও ডাউনলোড",
    },
    tagline: {
      en: "Instant file delivery, license key generation, and software downloads",
      bn: "তাৎক্ষণিক ফাইল ডেলিভারি ও লাইসেন্স কি জেনারেশনের আধুনিক ডিজাইন",
    },
    description: {
      en: "Planned theme for digital creators, software developers, courses, and e-book authors with automated link expiration and download counters.",
      bn: "সফটওয়্যার ডেভেলপার, ই-বুক লেখক ও ক্রিয়েটরদের জন্য পরিকল্পিত ডিজিটাল প্রোডাক্ট ডেলিভারি থিম।",
    },
    style: "modern-tech",
    styleLabel: {
      en: "Cyber Minimal",
      bn: "সাইবার মিনিমাল",
    },
    layoutType: "spec-focused",
    layoutLabel: {
      en: "Instant Download Grid",
      bn: "ডাউনলোড গ্রিড",
    },
    availability: "coming-soon",
    mobileFriendly: true,
    eligiblePlans: ["scale"],
    palette: [
      { bg: "bg-[#0F172A]", hex: "#0F172A", label: { en: "Vault Midnight", bn: "ভল্ট মিডনাইট" } },
      { bg: "bg-[#6366F1]", hex: "#6366F1", label: { en: "Indigo Cyber", bn: "ইন্ডিগো সাইবার" } },
    ],
    keywords: ["digital", "software", "ebook", "courses", "license", "downloads", "files"],
    preview: {
      domain: "demo.digitalvault.cartx.app",
      brandName: "DIGITAL VAULT",
      announcement: {
        en: "Coming Soon • Instant Digital Downloads & License Key Generation In Development",
        bn: "আসন্ন • তাৎক্ষণিক ডিজিটাল ফাইল ডেলিভারি ও লাইসেন্স কি সিস্টেম নির্মাণাধীন",
      },
      navLinks: [
        { en: "Software", bn: "সফটওয়্যার" },
        { en: "Courses", bn: "কোর্স" },
      ],
      hero: {
        tagline: { en: "COMING SOON", bn: "শীঘ্রই আসছে" },
        headline: { en: "Digital Downloads Architecture", bn: "ডিজিটাল ডাউনলোড আর্কিটেকচার" },
        subhead: {
          en: "Specialized digital delivery flows are currently in development.",
          bn: "স্বয়ংক্রিয় ডিজিটাল ফাইল ডেলিভারি ফিচার বর্তমানে নির্মাণাধীন।",
        },
        buttonText: { en: "Learn More", bn: "বিস্তারিত জানুন" },
        bgGradient: "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(99,102,241,0.2) 100%)",
        accentClass: "from-indigo-900 via-slate-900 to-indigo-950",
      },
      featuredCategories: [],
      sampleProducts: [],
      featureBar: [],
      cartPreview: {
        items: [],
        subtotal: "৳০",
        shipping: "৳০",
        total: "৳০",
        paymentMethods: ["Instant bKash", "Cards"],
      },
    },
    capabilities: [],
    customization: {
      customizable: [],
      nonCustomizable: [],
      planDependent: [],
      considerations: {
        en: "Digital Vault is currently scheduled for future release.",
        bn: "ডিজিটাল ভল্ট ফিচারটি ভবিষ্যতে প্রকাশ করা হবে।",
      },
    },
    planEligibility: {
      plans: [],
      summary: {
        en: "Digital Vault is coming soon.",
        bn: "ডিজিটাল ভল্ট শীঘ্রই আসছে।",
      },
    },
    relatedThemeSlugs: [],
  },
};

/**
 * Robust slug resolver with backwards-compatible aliases
 */
export function getThemeBySlug(slug: string): ThemeItem | undefined {
  if (slug === "aura-lifestyle" || slug === "fashion-apparel") {
    return THEMES_REGISTRY["aura-studio"];
  }
  if (slug === "volt-electronics" || slug === "electronics-gadgets") {
    return THEMES_REGISTRY["volt-tech"];
  }
  if (slug === "lumina-beauty" || slug === "cosmetics-beauty") {
    return THEMES_REGISTRY["lumina-essence"];
  }
  if (
    slug === "grocery-food" ||
    slug === "grocery-organic-food" ||
    slug === "grocery-lifestyle"
  ) {
    return THEMES_REGISTRY["harvest-pure"];
  }
  if (slug === "home-lifestyle") {
    return THEMES_REGISTRY["casa-living"];
  }
  if (slug === "books-stationery") {
    return THEMES_REGISTRY["zenith-stationery"];
  }
  return THEMES_REGISTRY[slug];
}

export const ALL_THEMES_LIST = Object.values(THEMES_REGISTRY);

export const PUBLISHED_THEMES = ALL_THEMES_LIST.filter(
  (t) => t.availability === "available"
);

// ─────────────────────────────────────────────────────────────
// Section 04: 6 Core Storefront Theme Features
// ─────────────────────────────────────────────────────────────
export const THEME_FEATURES: ThemeFeatureCategory[] = [
  {
    id: "responsive-layout",
    title: {
      en: "Mobile-First Responsive Layouts",
      bn: "মোবাইল-ফার্স্ট রেসপনসিভ লেআউট",
    },
    description: {
      en: "Engineered from scratch to load lightning-fast across 3G/4G cellular networks on Android and iPhone devices.",
      bn: "মোবাইল ব্রাউজারে দ্রুততম পেজ লোড নিশ্চিত করতে তৈরি। যেকোনো ডিভাইসে অনায়াসে রেসপনসিভ থাকে।",
    },
    iconName: "Smartphone",
    details: [
      { en: "Fluid layout shifts with zero content jumping (CLS optimized)", bn: "জিরো লেআউট শিফট সহ নিরবচ্ছিন্ন ও মসৃণ ব্রাউজিং" },
      { en: "Sticky bottom checkout and navigation controls on mobile", bn: "মোবাইলে স্ক্রিনের নিচে সুবিধাজনক স্টিকি বাই ও কার্ট বার" },
      { en: "Touch-optimized swipe galleries and drawer menus", bn: "টাচ-ফ্রেন্ডলি সোয়াইপ প্রোডাক্ট গ্যালারি ও ড্রয়ার মেনু" },
    ],
  },
  {
    id: "product-presentation",
    title: {
      en: "High-Impact Product Presentation",
      bn: "আকর্ষণীয় প্রোডাক্ট প্রেজেন্টেশন",
    },
    description: {
      en: "Showcase product variants, multi-angle imagery, dynamic pricing badges, and genuine customer feedback.",
      bn: "কালার ও সাইজ ভ্যারিয়েন্ট, একাধিক কোণ থেকে তোলা ছবি, অফার ব্যাজ এবং কাস্টমার রিভিউ প্রদর্শনের সুবিধা।",
    },
    iconName: "Eye",
    details: [
      { en: "Live color swatches and out-of-stock size disabling", bn: "কালার সোয়াচ এবং স্টক-আউট সাইজ স্বয়ংক্রিয়ভাবে ডিসেবল হওয়া" },
      { en: "Interactive image zoom and thumbnail carousels", bn: "ইন্টারেক্টিভ ছবি জুম এবং থাম্বনেইল ক্যারোসেল" },
      { en: "Dynamic discount pills (e.g. 15% OFF, Save ৳300)", bn: "স্বয়ংক্রিয় ডিসকাউন্ট পিল (যেমন: ১৫% ছাড়, ৩০০ টাকা সাশ্রয়)" },
    ],
  },
  {
    id: "navigation-search",
    title: {
      en: "Intuitive Multi-Level Navigation",
      bn: "সহজ ও কার্যকর মাল্টি-লেভেল ন্যাভিগেশন",
    },
    description: {
      en: "Category mega-menus, live search drawers, and breadcrumb trails that help shoppers find items in seconds.",
      bn: "ক্যাটাগরি মেগা-মেনু, ইনস্ট্যান্ট সার্চ এবং ব্রেডক্রাম্ব ট্রেইল যার সাহায্যে ক্রেতা দ্রুত কাঙ্ক্ষিত পণ্য খুঁজে পায়।",
    },
    iconName: "Compass",
    details: [
      { en: "Multi-level nested category and collection drawers", bn: "নেস্টেড সাব-ক্যাটাগরি ও কালেকশন ব্রাউজিং সুবিধা" },
      { en: "Predictive search bar with thumbnail instant previews", bn: "ছবিসহ দ্রুত প্রিডিক্টিভ সার্চ বার" },
      { en: "Pinned sticky top bar with shopping bag counter", bn: "কার্ট কাউন্টার সহ পিন করা সার্বক্ষণিক স্টিকি হেডার" },
    ],
  },
  {
    id: "brand-customization",
    title: {
      en: "No-Code Brand Personalization",
      bn: "নো-কোড ব্র্যান্ড পারসোনালাইজেশন",
    },
    description: {
      en: "Personalize your store to match your brand identity with custom color palettes, logos, and curated font tokens.",
      bn: "কোনো কোডিং ছাড়াই ব্র্যান্ড কালার, লোগো, ব্যানার ও টাইপোগ্রাফি পরিবর্তনের স্বাধীনতা।",
    },
    iconName: "Palette",
    details: [
      { en: "Primary, secondary, and accent color pickers", bn: "প্রাইমারি ও অ্যাকসেন্ট কালার পিকার" },
      { en: "Store logo, mobile icon, and browser favicon management", bn: "লোগো, মোবাইল আইকন এবং ব্রাউজার ফেভিকন আপলোড" },
      { en: "Curated typography pairings optimized for readability", bn: "পড়ার সুবিধার জন্য অপ্টিমাইজড নান্দনিক ফন্ট পেয়ারিং" },
    ],
  },
  {
    id: "homepage-sections",
    title: {
      en: "Modular Drag-and-Drop Sections",
      bn: "মডুলার হোমপেজ সেকশন",
    },
    description: {
      en: "Reorder promotional banners, hero sliders, trust badges, and featured collections without touching code.",
      bn: "হিরো ব্যানার, অফার স্লাইডার, ট্রাস্ট ব্যাজ এবং কালেকশন গ্রিড সহজে সাজিয়ে নেওয়ার সুবিধা।",
    },
    iconName: "Layers",
    details: [
      { en: "Promotional campaign sliders with custom CTA buttons", bn: "ক্যাম্পেইন ব্যানার স্লাইডার এবং কাস্টম বাটন" },
      { en: "Featured product grids with tabbed category filters", bn: "ট্যাব ক্যাটাগরি ফিল্টার সহ ফিচার্ড প্রোডাক্ট গ্রিড" },
      { en: "Trust guarantee bar highlighting free delivery & exchange", bn: "ডেলিভারি ও ক্যাশ অন ডেলিভারি ট্রাস্ট ব্যাজ সেকশন" },
    ],
  },
  {
    id: "seo-performance",
    title: {
      en: "Built-In SEO & Technical Speed",
      bn: "বিল্ট-ইন এসইও ও সর্বোচ্চ গতি",
    },
    description: {
      en: "Semantic HTML5 markup, automated OpenGraph social share cards, and Schema.org product structured data.",
      bn: "সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO), ওপেন-গ্রাফ সোশ্যাল প্রিভিউ কার্ড এবং স্কিমা প্রোডাক্ট ডেটা অন্তর্ভুক্ত।",
    },
    iconName: "Search",
    details: [
      { en: "Automated Google Product Rich Snippet structured markup", bn: "গুগল রিচ স্নিপেট ও প্রাইস স্কিমা মার্কআপ" },
      { en: "Social share card previews for Facebook, WhatsApp & Instagram", bn: "ফেসবুক ও হোয়াটসঅ্যাপে প্রিভিউ কার্ড সুবিধা" },
      { en: "High-speed WebP image compression served via local edge CDN", bn: "দ্রুতগতির ওয়েবপি ইমেজ কম্প্রেশন ও সিডিএন ডেলিভারি" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Section 05: Customization Explanation & Rules
// ─────────────────────────────────────────────────────────────
export const CUSTOMIZATION_OVERVIEW = {
  eyebrow: {
    en: "Customization & Rules",
    bn: "কাস্টমাইজেশন ও নীতিমালা",
  },
  title: {
    en: "What You Can Customize (And What's Built-In)",
    bn: "কী কী কাস্টমাইজ করতে পারবেন (এবং বিল্ট-ইন সুবিধাসমূহ)",
  },
  description: {
    en: "CartX provides extensive visual personalization through the Store Builder while protecting checkout security, mobile performance, and automated updates.",
    bn: "কার্টএক্স স্টোর বিল্ডারের মাধ্যমে আপনি কোডিং ছাড়াই সম্পূর্ণ ডিজাইন সাজাতে পারবেন, পাশাপাশি চেকআউটের নিরাপত্তা ও সুপারফাস্ট গতি বজায় থাকবে।",
  },
  categories: [
    {
      title: { en: "Brand Colors & Themes", bn: "ব্র্যান্ড কালার ও অ্যাকসেন্ট" },
      description: {
        en: "Choose primary brand accents, notification pills, hero background gradients, and button hover states.",
        bn: "প্রাইমারি ব্র্যান্ড কালার, ব্যানার ব্যাকগ্রাউন্ড ও বাটনের কালার ইচ্ছামতো নির্ধারণ করুন।",
      },
      status: "included",
      planRequirement: { en: "Included on all plans", bn: "সকল প্ল্যানে অন্তর্ভুক্ত" },
    },
    {
      title: { en: "Logo, Favicon & Mobile Icons", bn: "লোগো, ফেভিকন ও মোবাইল আইকন" },
      description: {
        en: "Upload your store logo, dark/light header variants, and browser tab favicons with auto-resizing.",
        bn: "স্টোরের লোগো, ডার্ক/লাইট মোড ভ্যারিয়েন্ট এবং ব্রাউজার ফেভিকন আপলোড করার সুবিধা।",
      },
      status: "included",
      planRequirement: { en: "Included on all plans", bn: "সকল প্ল্যানে অন্তর্ভুক্ত" },
    },
    {
      title: { en: "Homepage Sections & Banners", bn: "হোমপেজ সেকশন ও ব্যানার" },
      description: {
        en: "Add, reorder, or toggle hero sliders, featured collections, trust badges, and promotional announcement banners.",
        bn: "হিরো ব্যানার, কালেকশন গ্রিড, ট্রাস্ট ব্যাজ এবং নোটিশ বার ইচ্ছামতো অন/অফ বা রি-অর্ডার করার সুবিধা।",
      },
      status: "included",
      planRequirement: { en: "Included on all plans", bn: "সকল প্ল্যানে অন্তর্ভুক্ত" },
    },
    {
      title: { en: "Custom Domain Connection", bn: "কাস্টম ডোমেইন সংযোগ (yourbrand.com)" },
      description: {
        en: "Connect your own branded domain name with automated SSL certificate provisioning and DNS routing.",
        bn: "আপনার নিজস্ব ডোমেইন সংযোগ এবং বিনামূল্যে লাইফটাইম এসএসএল (SSL) সিকিউরিটি সার্টিফিকেশন।",
      },
      status: "supported",
      planRequirement: { en: "Available on Starter, Growth & Scale", bn: "স্টার্টার, গ্রোথ এবং স্কেল প্ল্যানে সমর্থিত" },
    },
    {
      title: { en: "Automated Courier Dispatch", bn: "অটোমেটেড কুরিয়ার এপিআই বুকিং" },
      description: {
        en: "Direct API booking and automated barcode consignment generation with Pathao, Steadfast, and RedX.",
        bn: "পাঠাও, স্টেডফাস্ট এবং রেডএক্স এপিআই ইন্টিগ্রেশনের মাধ্যমে এক ক্লিকে পার্সেল বুকিং।",
      },
      status: "growth-tier",
      planRequirement: { en: "Included on Growth & Scale tiers", bn: "গ্রোথ এবং স্কেল প্ল্যানে অন্তর্ভুক্ত" },
    },
    {
      title: { en: "White-Label Mobile Shopping Apps", bn: "হোয়াইট-লেবেল মোবাইল শপিং অ্যাপস" },
      description: {
        en: "Dedicated iOS & Android shopping applications published directly to Apple App Store and Google Play Store.",
        bn: "আপনার নিজস্ব ব্র্যান্ডে তৈরি আইওএস ও অ্যান্ড্রয়েড শপিং অ্যাপ অতিরিক্ত অ্যাড-অন হিসেবে পাওয়া যায়।",
      },
      status: "addon",
      planRequirement: { en: "Available as specialized mobile add-on", bn: "বিশেষায়িত মোবাইল অ্যাড-অন হিসেবে প্রযোজ্য" },
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// Section 06: Themes FAQs
// ─────────────────────────────────────────────────────────────
export const THEMES_GALLERY_FAQS: ThemeFAQItem[] = [
  {
    id: "faq-theme-choice",
    question: {
      en: "How do I choose the best theme for my business?",
      bn: "আমার ব্যবসার জন্য সেরা থিম কীভাবে নির্বাচন করব?",
    },
    answer: {
      en: "CartX themes are optimized for specific retail verticals: Aura Studio is tailored for fashion and boutique apparel; Volt Tech excels for consumer electronics with detailed specs; Lumina Essence is built for beauty and skincare routines; Harvest Pure is ideal for multi-item grocery carts; Casa Living suits home decor; and Zenith Stationery is made for bookshops. You can preview all themes interactively before choosing.",
      bn: "কার্টএক্সের থিমগুলো নির্দিষ্ট ব্যবসার ধরনের জন্য অপ্টিমাইজড: ফ্যাশনের জন্য 'অরা স্টুডিও', ইলেকট্রনিক্স ও গ্যাজেটের জন্য 'ভোল্ট টেক', প্রসাধন ও স্কিনকেয়ারের জন্য 'লুমিনা এসেন্স', গ্রোসারি ও মুদির জন্য 'হার্ভেস্ট পিউর', হোম ডেকর ও আসবাবের জন্য 'কাসা লিভিং' এবং বই ও প্রকাশনীর জন্য 'জেনিত স্টেশনারি'। আপনি পছন্দ করার আগে প্রতিটি থিম বিস্তারিত প্রিভিউ করতে পারেন।",
    },
  },
  {
    id: "faq-theme-preview",
    question: {
      en: "Can I preview themes on both mobile and desktop before launching?",
      bn: "স্টোর লঞ্চ করার আগে কি মোবাইল ও ডেস্কটপ উভয় ভার্সনে থিম দেখা যাবে?",
    },
    answer: {
      en: "Yes! Every theme page at /themes/[slug] includes an interactive viewport switcher allowing you to toggle between desktop and mobile modes. You can inspect sample homepage sections, product listing collections, product details with variant selectors, and the one-page checkout flow.",
      bn: "হ্যাঁ! প্রতিটি থিমের বিস্তারিত পেজে ইন্টারেক্টিভ ভিউপোর্ট সুইচ করার ব্যবস্থা রয়েছে। আপনি এক ক্লিকেই ডেস্কটপ এবং বাস্তব মোবাইল ভিউতে হোমপেজ, প্রোডাক্ট ক্যাটালগ, প্রোডাক্ট ডিটেইলস এবং চেকআউট ফ্লো পর্যবেক্ষণ করতে পারবেন।",
    },
  },
  {
    id: "faq-mobile-responsiveness",
    question: {
      en: "Are CartX themes completely mobile-responsive?",
      bn: "কার্টএক্সের থিমগুলো কি পুরোপুরি মোবাইল-রেসপনসিভ?",
    },
    answer: {
      en: "All published CartX themes are engineered mobile-first. In Bangladesh, over 85% of e-commerce traffic originates from mobile devices, so our themes feature fast touch navigation, sticky Add-to-Cart bars, touch-friendly image carousels, and minimal script bloat to ensure fast loading on mobile cellular networks.",
      bn: "কার্টএক্সের প্রতিটি থিম মোবাইল-ফার্স্ট আর্কিটেকচারে তৈরি। বাংলাদেশে ৮৫%-এর বেশি ক্রেতা মোবাইল থেকে কেনাকাটা করায় আমাদের থিমগুলোতে রয়েছে স্পর্শ-বান্ধব গ্যালারি, স্টিকি বাই বার এবং দ্রুতগতির লোডিং প্রযুক্তি।",
    },
  },
  {
    id: "faq-theme-customization",
    question: {
      en: "What customization options are available without coding?",
      bn: "কোনো কোডিং ছাড়াই কী কী কাস্টমাইজ করা সম্ভব?",
    },
    answer: {
      en: "You can fully personalize your store's brand colors, typography pairings, store logo, mobile header, announcement banner, hero promotional sliders, featured collections, trust badges, footer links, and payment method displays through the intuitive Store Builder interface.",
      bn: "স্টোর বিল্ডারের মাধ্যমে কোডিং ছাড়াই ব্র্যান্ড কালার, লোগো, ফন্ট, অ্যানাউন্সমেন্ট বার, হিরো ব্যানার, কালেকশন গ্রিড, ট্রাস্ট ব্যাজ এবং ফুটার লিংক সম্পূর্ণ পরিবর্তন ও পরিচালনা করতে পারবেন।",
    },
  },
  {
    id: "faq-change-themes",
    question: {
      en: "Can I switch themes after launching my store?",
      bn: "স্টোর শুরু করার পর কি পরবর্তীতে থিম পরিবর্তন করা যাবে?",
    },
    answer: {
      en: "Yes. Your product catalog, orders, customer records, and payment settings are preserved safely in your CartX database when you apply another supported storefront theme.",
      bn: "হ্যাঁ। আপনার প্রোডাক্ট ক্যাটালগ, অর্ডার, গ্রাহক তথ্য ও পেমেন্ট সেটিংস সম্পূর্ণ অক্ষত রেখে আপনি পরবর্তীতে যেকোনো সময় অন্য সাপোর্টেড থিমে স্যুইচ করতে পারবেন।",
    },
  },
  {
    id: "faq-theme-pricing",
    question: {
      en: "Do I have to pay extra licensing fees for themes?",
      bn: "থিমের জন্য কি আলাদা কোনো লাইসেন্স ফি দিতে হয়?",
    },
    answer: {
      en: "No. All 6 core published themes are fully included with standard CartX subscription tiers (Starter, Growth, Scale) without separate theme purchase costs or marketplace markups.",
      bn: "না। কার্টএক্সের ৬টি মূল প্রকাশিত থিম প্রতিটি সাবস্ক্রিপশন প্ল্যানে (স্টার্টার, গ্রোথ, স্কেল) ফ্রিতে অন্তর্ভুক্ত। কোনো গোপন বা অতিরিক্ত থিম লাইসেন্স ফি নেই।",
    },
  },
  {
    id: "faq-custom-domain",
    question: {
      en: "Can I connect my own custom domain to these themes?",
      bn: "এই থিমগুলোতে কি নিজস্ব ডোমেইন (যেমন: mybrand.com) ব্যবহার করা যাবে?",
    },
    answer: {
      en: "Yes! All supported CartX plans allow you to connect your custom domain (e.g. www.yourbrand.com) with automated free SSL encryption and fast edge routing.",
      bn: "হ্যাঁ! কার্টএক্সের সাপোর্টেড প্ল্যানে আপনার নিজস্ব ডোমেইন (যেমন: www.yourbrand.com) কানেক্ট করা যায় এবং স্বয়ংক্রিয়ভাবে ফ্রি এসএসএল সিকিউরিটি যুক্ত হয়।",
    },
  },
];

