import {
  Shirt,
  Laptop,
  Heart,
  ShoppingBag,
  Home,
  BookOpen,
  Package,
  Boxes,
  Store,
  CreditCard,
  Truck,
  BarChart3,
  Users,
  Percent,
  Layers,
  ShieldCheck,
  Clock,
  Search,
  Sliders,
  AlertCircle,
} from "lucide-react";
import { SolutionDetailConfig } from "./types";

export const PUBLISHED_SOLUTION_SLUGS = [
  "fashion-apparel",
  "electronics-gadgets",
  "cosmetics-beauty",
  "grocery-organic-food",
  "home-lifestyle",
  "books-stationery",
] as const;

export type PublishedSolutionSlug = typeof PUBLISHED_SOLUTION_SLUGS[number];

export const SOLUTION_DETAILS_DATA: Record<string, SolutionDetailConfig> = {
  // ─────────────────────────────────────────────────────────────
  // 1. Fashion & Apparel
  // ─────────────────────────────────────────────────────────────
  "fashion-apparel": {
    slug: "fashion-apparel",
    name: {
      en: "Fashion & Apparel",
      bn: "ফ্যাশন ও পোশাক",
    },
    badge: {
      en: "Apparel & Lifestyle Retail",
      bn: "পোশাক ও লাইফস্টাইল রিটেইল",
    },
    icon: Shirt,
    seo: {
      title: "Fashion & Apparel E-commerce Solutions",
      description:
        "Manage complex size-color matrices, showcase seasonal collections, and automate nationwide courier dispatch for your clothing brand with CartX.",
    },
    hero: {
      h1Plain: {
        en: "Launch and Scale Your Online",
        bn: "অনলাইনে শুরু এবং প্রসারিত করুন আপনার",
      },
      h1Highlight: {
        en: "Fashion & Apparel Store.",
        bn: "ফ্যাশন ও পোশাকের ব্র্যান্ড।",
      },
      description: {
        en: "Effortlessly configure multi-attribute size and color variants, curate seasonal lookbooks, and automate Cash on Delivery with CartX's retail engine.",
        bn: "সাইজ ও কালার ভ্যারিয়েন্ট মেট্রিক্স, মৌসুমী কালেকশন লুকবুক এবং ক্যাশ অন ডেলিভারি অটোমেশন সহ আপনার ফ্যাশন ব্র্যান্ড পরিচালনা করুন সহজে।",
      },
      primaryCta: {
        en: "Start Your Store",
        bn: "আপনার স্টোর শুরু করুন",
      },
      secondaryCta: {
        en: "Explore Catalog Features",
        bn: "ক্যাটালগ ফিচারসমূহ দেখুন",
      },
      secondaryHref: "/features/product-management",
      trustNote: {
        en: "Tailored for clothing labels, shoe boutiques, and lifestyle retailers",
        bn: "পোশাক ব্র্যান্ড, জুতার দোকান ও লাইফস্টাইল রিটেইলারদের উপযোগী",
      },
      previewTagline: "AUTUMN / WINTER '25 EDIT",
      previewHeadline: "Pure Linen & Tailored Cuts",
      previewSubhead: "Effortless everyday silhouette designed for modern living.",
      previewBadges: ["Multi-Variant Matrix", "Seasonal Collections", "bKash & COD"],
    },
    challenges: {
      eyebrow: {
        en: "INDUSTRY CHALLENGES",
        bn: "শিল্পের সাধারণ সমস্যা",
      },
      title: {
        en: "Real Hurdles Fashion Brands Face Online",
        bn: "অনলাইনে পোশাক ব্র্যান্ডগুলোর বাস্তব চ্যালেঞ্জ",
      },
      description: {
        en: "Selling clothing online involves high variant complexity and frequent seasonal shifts. Here is how operational friction typically occurs.",
        bn: "অনলাইনে পোশাক বিক্রিতে সাইজ ও রঙের জটিলতা থাকে সবচেয়ে বেশি। সাধারণ যেসব সমস্যা ব্র্যান্ডগুলোকে মোকাবেলা করতে হয়।",
      },
      items: [
        {
          id: "f-ch-1",
          title: {
            en: "Complex Multi-Attribute Sizing",
            bn: "সাইজ ও রঙের জটিল ভ্যারিয়েন্ট",
          },
          description: {
            en: "Managing combinations of sizes (S, M, L, XL) and colors without variant swatches confuses shoppers and spikes returns.",
            bn: "একই পোশাকে বিভিন্ন সাইজ ও রঙের সোয়াচ পরিষ্কারভাবে উপস্থাপন না করলে ক্রেতারা বিভ্রান্ত হন এবং রিটার্নের হার বৃদ্ধি পায়।",
          },
          icon: Sliders,
        },
        {
          id: "f-ch-2",
          title: {
            en: "Fast Seasonal Collection Turnover",
            bn: "দ্রুত মৌসুমী কালেকশন পরিবর্তন",
          },
          description: {
            en: "Launching summer, Eid, or winter drops requires creating new collections quickly without breaking existing product URLs.",
            bn: "ঈদ, পূজা বা শীতের নতুন কালেকশন দ্রুত ক্যাটালগে তুলে ধরা এবং পুরোনো পেজগুলোর সাথে সমন্বয় রাখা সময়সাপেক্ষ।",
          },
          icon: Clock,
        },
        {
          id: "f-ch-3",
          title: {
            en: "Size Out-of-Stock Overselling",
            bn: "জনপ্রিয় সাইজের স্টক শেষ হয়ে যাওয়া",
          },
          description: {
            en: "Popular sizes (like M or L) run out faster than edge sizes, leading to backorders if inventory is tracked only globally.",
            bn: "নির্দিষ্ট সাইজের স্টক শেষ হয়ে যাওয়ার পরও ক্রেতারা অর্ডার করতে পারলে ম্যানুয়াল ক্যানসেলেশন ও অসন্তোষ তৈরি হয়।",
          },
          icon: Boxes,
        },
        {
          id: "f-ch-4",
          title: {
            en: "Festival Discount Campaign Friction",
            bn: "উৎসবের ডিসকাউন্ট ক্যাম্পেইন পরিচালনায় ভুল",
          },
          description: {
            en: "Applying manual percentage discounts or minimum cart rules during flash sales often causes calculation errors and margin loss.",
            bn: "উৎসবের মৌসুমে ম্যানুয়ালি ডিসকাউন্ট হিসাব করলে লাভ মার্জিন নষ্ট হয় এবং হিসাবে গরমিল দেখা দেয়।",
          },
          icon: Percent,
        },
      ],
    },
    capabilities: {
      eyebrow: {
        en: "CARTX CAPABILITIES",
        bn: "কার্টএক্সের সক্ষমতা",
      },
      title: {
        en: "Verified Features Built for Apparel Merchants",
        bn: "পোশাক ব্যবসায়ীদের জন্য প্রমাণিত ফিচারসমূহ",
      },
      description: {
        en: "Only verified platform modules that genuinely support fashion and apparel operations in Bangladesh.",
        bn: "শুধুমাত্র কার্টএক্সে বিদ্যমান ও যাচাইকৃত প্ল্যাটফর্ম ফিচার যা বাংলাদেশের ফ্যাশন ব্যবসায়ীদের কাজে আসে।",
      },
      items: [
        {
          id: "f-cap-1",
          title: {
            en: "Multi-Variant Matrix & Color Swatches",
            bn: "মাল্টি-ভ্যারিয়েন্ট মেট্রিক্স ও কালার সোয়াচ",
          },
          description: {
            en: "Define size, color, and fabric attributes per SKU with distinct price comparisons and variant-specific photo galleries.",
            bn: "সাইজ, রঙ ও ফেব্রিকের সমন্বয়ে প্রতিটি ভ্যারিয়েন্টে আলাদা দাম, ছবি ও স্টক যুক্ত করার পূর্ণ সুবিধা।",
          },
          featureSlug: "product-management",
          featureName: {
            en: "Product Management",
            bn: "প্রোডাক্ট ম্যানেজমেন্ট",
          },
          icon: Package,
        },
        {
          id: "f-cap-2",
          title: {
            en: "Curated Collection & Lookbook Pages",
            bn: "কালেকশন ও লুকবুক ভিত্তিক পেজ",
          },
          description: {
            en: "Group products into seasonal edits (Men, Women, Festive Edit) with responsive mobile-first banner layouts.",
            bn: "ছেলেদের পোশাক, মেয়েদের কালেকশন বা উৎসবের পোশাক সহজে আলাদা ক্যাটাগরিতে সাজিয়ে প্রদর্শনের ব্যবস্থা।",
          },
          featureSlug: "store-builder",
          featureName: {
            en: "Store Builder",
            bn: "স্টোর বিল্ডার",
          },
          icon: Store,
        },
        {
          id: "f-cap-3",
          title: {
            en: "Variant-Level Stock Deduction",
            bn: "ভ্যারিয়েন্ট ভিত্তিক স্বয়ংক্রিয় স্টক সমন্বয়",
          },
          description: {
            en: "Inventory deducts immediately upon order confirmation for that exact size and color, with customizable low-stock alerts.",
            bn: "অর্ডার নিশ্চিত হওয়ার সাথে সাথে নির্দিষ্ট সাইজের ইনভেন্টরি কমে যায়, ফলে কোনো সাইজ ওভারসোল্ড হওয়ার ঝুঁকি থাকে না।",
          },
          featureSlug: "inventory-management",
          featureName: {
            en: "Inventory Management",
            bn: "ইনভেন্টরি ম্যানেজমেন্ট",
          },
          icon: Boxes,
        },
        {
          id: "f-cap-4",
          title: {
            en: "Automated Pathao & Steadfast Parcel Booking",
            bn: "পাঠাও ও স্টিডফাস্টে সরাসরি পার্সেল বুকিং",
          },
          description: {
            en: "Generate one-click packing invoices and hand off parcels to domestic couriers with automated delivery tracking numbers.",
            bn: "এক ক্লিকে ইনভয়েস প্রিন্ট এবং পাঠাও বা স্টিডফাস্ট কুরিয়ারে স্বয়ংক্রিয় বুকিং ও ট্র্যাকিং আইডি সংযোজন।",
          },
          featureSlug: "shipping",
          featureName: {
            en: "Shipping Operations",
            bn: "ডেলিভারি ও কুরিয়ার",
          },
          icon: Truck,
        },
      ],
    },
    storeStructure: {
      eyebrow: {
        en: "RECOMMENDED ARCHITECTURE",
        bn: "প্রস্তাবিত স্টোর কাঠামো",
      },
      title: {
        en: "Suggested Store Structure for Fashion Retail",
        bn: "ফ্যাশন স্টোরের জন্য আদর্শ ক্যাটাগরি বিন্যাস",
      },
      description: {
        en: "A structured hierarchy helps shoppers filter by gender, style, and seasonal trends without bouncing.",
        bn: "সুসংগঠিত ক্যাটাগরি ক্রেতাকে সহজে পছন্দের পোশাকে পৌঁছাতে সাহায্য করে এবং বাউন্স রেট কমায়।",
      },
      discoveryTip: {
        en: "Example structures represent recommended merchandising guidelines, easily implemented in CartX's category editor.",
        bn: "এই কাঠামোটি একটি আদর্শ প্রস্তাবনা, যা কার্টএক্সের ক্যাটাগরি ম্যানেজারে খুব সহজেই সেটআপ করা যায়।",
      },
      categories: [
        {
          name: { en: "Men's Apparel", bn: "ছেলেদের পোশাক" },
          subcategories: [
            { en: "Casual Shirts", bn: "ক্যাজুয়াল শার্ট" },
            { en: "Panjabi & Festive", bn: "পাঞ্জাবি ও ফেস্টিভ" },
            { en: "Trousers & Chinos", bn: "ট্রাউজার্স ও চিনো" },
            { en: "T-Shirts & Polos", bn: "টি-শার্ট ও পোলো" },
          ],
          description: {
            en: "Organized by casual everyday wear, traditional festive collections, and formal bottoms.",
            bn: "নিয়মিত ব্যবহার্য পোশাক, ট্র্যাডিশনাল কালেকশন ও ফর্মাল পোশাকের সুবিন্যস্ত তালিকা।",
          },
        },
        {
          name: { en: "Women's Collection", bn: "মেয়েদের কালেকশন" },
          subcategories: [
            { en: "Kurtis & Tunics", bn: "কুর্তি ও টিউনিক" },
            { en: "Sarees & Traditional", bn: "শাড়ি ও ট্র্যাডিশনাল" },
            { en: "Two-Piece & Three-Piece", bn: "টু-পিস ও থ্রি-পিস" },
            { en: "Western & Tops", bn: "ওয়েস্টার্ন ও টপস" },
          ],
          description: {
            en: "Clear segmenting between festive traditional wear and modern daily silhouettes.",
            bn: "উৎসবের জমকালো পোশাক এবং প্রতিদিনের ব্যবহারের পোশাকের স্পষ্ট বিভাজন।",
          },
        },
        {
          name: { en: "Seasonal Edits", bn: "মৌসুমী স্পেশাল কালেকশন" },
          subcategories: [
            { en: "Autumn / Winter '25", bn: "শীতকালীন কালেকশন" },
            { en: "Pure Linen Line", bn: "লিনেন কালেকশন" },
            { en: "Eid & Puja Festive", bn: "ঈদ ও পূজা স্পেশাল" },
          ],
          description: {
            en: "Dynamic promotional collections designed to capture high-intent seasonal shoppers.",
            bn: "মৌসুমভিত্তিক বিশেষ ক্যাম্পেইনের জন্য নির্ধারিত কালেকশন।",
          },
        },
        {
          name: { en: "Sale & Clearance", bn: "ডিসকাউন্ট ও সেল" },
          subcategories: [
            { en: "Last Sizes (30% Off)", bn: "লাস্ট সাইজ অফার" },
            { en: "Bundle Combos", bn: "বান্ডেল কম্বো" },
          ],
          description: {
            en: "Dedicated clearance pages to liquidate remaining sizes and boost end-of-season cash flow.",
            bn: "মৌসুমের শেষ অবশিষ্ট সাইজের স্টক দ্রুত বিক্রির জন্য আলাদা ডিসকাউন্ট কর্নার।",
          },
        },
      ],
    },
    catalog: {
      eyebrow: {
        en: "SAMPLE CATALOGUE",
        bn: "নমুনা ক্যাটালগ",
      },
      title: {
        en: "Illustrative Fashion Products & Attribute Models",
        bn: "নমুনা পোশাক পণ্য ও ভ্যারিয়েন্ট মডেল",
      },
      description: {
        en: "Sample apparel products demonstrating multi-attribute matrices, compare-at pricing, and variant details in CartX.",
        bn: "মাল্টি-অ্যাট্রিবিউট মেট্রিক্স, তুলনামূলক মূল্য এবং ভ্যারিয়েন্ট প্রদর্শনের জন্য নমুনা প্রোডাক্ট ডেটা।",
      },
      products: [
        {
          id: "f-prod-1",
          name: { en: "Relaxed Linen Casual Shirt", bn: "রিল্যাক্সড লিনেন ক্যাজুয়াল শার্ট" },
          category: { en: "Men's Apparel", bn: "ছেলেদের পোশাক" },
          price: "৳1,850",
          originalPrice: "৳2,200",
          badge: { en: "New Season", bn: "নতুন কালেকশন" },
          attributes: [
            { label: { en: "Sizes", bn: "সাইজ" }, value: { en: "S, M, L, XL", bn: "S, M, L, XL" } },
            { label: { en: "Colors", bn: "রং" }, value: { en: "Olive, Navy, White", bn: "অলিভ, নেভি, সাদা" } },
            { label: { en: "Fabric", bn: "কাপড়" }, value: { en: "100% Organic Linen", bn: "১০০% অর্গানিক লিনেন" } },
          ],
          highlight: {
            en: "Breathable pre-washed linen with mother-of-pearl buttons.",
            bn: "প্রিমিয়াম প্রি-ওয়াশড লিনেন এবং সূক্ষ্ম ফিনিশিং।",
          },
        },
        {
          id: "f-prod-2",
          name: { en: "Tailored Slim Chino Pant", bn: "টেইলর্ড স্লিম চিনো প্যান্ট" },
          category: { en: "Men's Apparel", bn: "ছেলেদের পোশাক" },
          price: "৳2,450",
          originalPrice: "৳2,800",
          badge: { en: "Bestseller", bn: "সেরা বিক্রি" },
          attributes: [
            { label: { en: "Waist Sizes", bn: "কোমরের মাপ" }, value: { en: "30, 32, 34, 36", bn: "৩০, ৩২, ৩৪, ৩৬" } },
            { label: { en: "Colors", bn: "রং" }, value: { en: "Khaki, Black, Charcoal", bn: "খাকি, কালো, চারকোল" } },
            { label: { en: "Stretch", bn: "স্ট্রেচ" }, value: { en: "2% Elastane Twill", bn: "২% ইলাস্টেন টুইল" } },
          ],
          highlight: {
            en: "Smart-casual cut engineered for all-day comfort and mobility.",
            bn: "স্মার্ট-ক্যাজুয়াল কাটিং যা অফিস ও ক্যাজুয়াল আউটিং উভয়ের উপযোগী।",
          },
        },
        {
          id: "f-prod-3",
          name: { en: "Embroidered Cotton Silk Panjabi", bn: "এমব্রয়ডারি কটন সিল্ক পাঞ্জাবি" },
          category: { en: "Seasonal Edits", bn: "মৌসুমী স্পেশাল কালেকশন" },
          price: "৳3,200",
          originalPrice: "৳3,800",
          badge: { en: "Festive Edit", bn: "ফেস্টিভ কালেকশন" },
          attributes: [
            { label: { en: "Sizes", bn: "সাইজ" }, value: { en: "38, 40, 42, 44", bn: "৩৮, ৪০, ৪২, ৪৪" } },
            { label: { en: "Colors", bn: "রং" }, value: { en: "Burgundy, Royal Teal", bn: "বার্গান্ডি, রয়্যাল টিল" } },
            { label: { en: "Collar", bn: "কলার" }, value: { en: "Minimal Zari Work", bn: "জারী এমব্রয়ডারি" } },
          ],
          highlight: {
            en: "Traditional silhouette with refined collar detailing for celebrations.",
            bn: "উৎসবের জন্য বিশেষ সিল্ক ব্লেন্ড কাপড় ও কলারের কারুকাজ।",
          },
        },
        {
          id: "f-prod-4",
          name: { en: "Heavyweight Cotton Drop-Shoulder Tee", bn: "হেভিওয়েট ড্রপ-শোল্ডার টি-শার্ট" },
          category: { en: "Men's Apparel", bn: "ছেলেদের পোশাক" },
          price: "৳850",
          badge: { en: "Essential", bn: "নিয়মিত ব্যবহার্য" },
          attributes: [
            { label: { en: "Sizes", bn: "সাইজ" }, value: { en: "M, L, XL", bn: "M, L, XL" } },
            { label: { en: "Colors", bn: "রং" }, value: { en: "Sage Green, Ash Gray", bn: "সেজ গ্রিন, অ্যাশ" } },
            { label: { en: "Weight", bn: "ওজন" }, value: { en: "220 GSM Combed Cotton", bn: "২২০ জিএসএম কম্বড কটন" } },
          ],
          highlight: {
            en: "Structured streetwear fit with durable ribbed collar.",
            bn: "আধুনিক ড্রপ শোল্ডার ফিট এবং টেকসই কলার রিব।",
          },
        },
      ],
    },
    storefrontPreview: {
      eyebrow: {
        en: "STOREFRONT SHOWCASE",
        bn: "স্টোরফ্রন্ট প্রদর্শনী",
      },
      title: {
        en: "Aura Studio — Fashion Theme Preview",
        bn: "অরা স্টুডিও — ফ্যাশন থিম প্রিভিউ",
      },
      description: {
        en: "Explore a live concept storefront crafted specifically for lifestyle fashion labels with responsive category grids and fast mobile checkout.",
        bn: "ফ্যাশন ব্র্যান্ডের জন্য বিশেষভাবে প্রস্তুত কনসেপ্ট স্টোরফ্রন্ট, যা মোবাইলে অত্যন্ত দ্রুত কাজ করে।",
      },
      domain: "demo.aurafashion.cartx.app",
      brandName: "AURA STUDIO",
      tagline: "Contemporary Minimalist Fashion",
      demoThemeId: "aura-lifestyle",
      isLiveDemo: true,
      previewNotice: {
        en: "Live Demo Store Available",
        bn: "লাইভ ডেমো স্টোর সক্রিয় রয়েছে",
      },
      accentGradient: "from-blue-600/15 via-sky-400/10 to-transparent",
      highlights: [
        { en: "High-contrast lookbook slider", bn: "হাই-কনট্রাস্ট লুকবুক স্লাইডার" },
        { en: "Instant color swatch preview on product cards", bn: "কার্ডে তাৎক্ষণিক কালার সোয়াচ প্রিভিউ" },
        { en: "Optimized mobile one-page checkout with bKash", bn: "বিকাশ সহ দ্রুতগতির ওয়ান-পেজ চেকআউট" },
      ],
    },
    integrations: {
      eyebrow: {
        en: "LOCAL INTEGRATIONS",
        bn: "প্রয়োজনীয় ইন্টিগ্রেশন",
      },
      title: {
        en: "Recommended Connectors for Fashion Commerce",
        bn: "পোশাক ব্যবসার জন্য প্রস্তাবিত কানেক্টর",
      },
      description: {
        en: "Pre-built, verified payment and shipping integrations that power Bangladeshi fashion stores.",
        bn: "বাংলাদেশের পোশাক ব্যবসায়ীদের জন্য প্রস্তুত ও কার্যকর পেমেন্ট ও কুরিয়ার কানেক্টর।",
      },
      items: [
        {
          name: "bKash Merchant API",
          category: { en: "Mobile Payment", bn: "মোবাইল পেমেন্ট" },
          reason: {
            en: "Instant digital checkout eliminates checkout drop-offs from younger fashion shoppers.",
            bn: "তরুণ ক্রেতাদের জন্য দ্রুত পেমেন্ট সম্পন্ন করতে সহায়ক।",
          },
          icon: CreditCard,
          linkHref: "/integrations",
        },
        {
          name: "Pathao Courier",
          category: { en: "Logistics Dispatch", bn: "লজিস্টিকস ও কুরিয়ার" },
          reason: {
            en: "Reliable same-day and next-day delivery in Dhaka with automated status sync.",
            bn: "ঢাকায় দ্রুত ডেলিভারি ও রিয়েল-টাইম পার্সেল ট্র্যাকিং সুবিধা।",
          },
          icon: Truck,
          linkHref: "/integrations",
        },
        {
          name: "Steadfast Courier",
          category: { en: "Nationwide Shipping", bn: "সারাদেশে ডেলিভারি" },
          reason: {
            en: "Extensive nationwide delivery network for Cash on Delivery parcel fulfillment.",
            bn: "সারাদেশের জেলা-উপজেলায় ক্যাশ অন ডেলিভারি পার্সেল প্রেরণে কার্যকর।",
          },
          icon: Truck,
          linkHref: "/integrations",
        },
        {
          name: "Meta Pixel & CAPI",
          category: { en: "Ad Attribution", bn: "বিজ্ঞাপন ট্র্যাকিং" },
          reason: {
            en: "Tracks catalog item views and purchases for Facebook and Instagram clothing ad campaigns.",
            bn: "ফেসবুক ও ইনস্টাগ্রাম বিজ্ঞাপনের মাধ্যমে পোশাক বিক্রির সঠিক হিসাব রাখা।",
          },
          icon: BarChart3,
          linkHref: "/integrations",
        },
      ],
    },
    subscriptionGuidance: {
      eyebrow: {
        en: "SUBSCRIPTION GUIDANCE",
        bn: "সাবস্ক্রিপশন গাইডলাইন",
      },
      title: {
        en: "Recommended Plans for Fashion Retailers",
        bn: "পোশাক ব্র্যান্ডের জন্য উপযুক্ত প্ল্যানসমূহ",
      },
      description: {
        en: "Select a plan based on your catalog size, number of seasonal drops, and fulfillment volume.",
        bn: "ক্যাটালগে পণ্যের সংখ্যা এবং মাসিক অর্ডারের ভলিউম অনুযায়ী সঠিক প্ল্যান বেছে নিন।",
      },
      disclaimer: {
        en: "All plans include web storefront hosting, SSL security, and unlimited customer traffic.",
        bn: "সকল প্ল্যানে ফ্রি ক্লাউড হোস্টিং, এসএসএল সিকিউরিটি ও আনলিমিটেড ট্রাফিক অন্তর্ভুক্ত।",
      },
      plans: [
        {
          tier: "starter",
          name: { en: "Starter Plan", bn: "স্টার্টার প্ল্যান" },
          summary: {
            en: "Great for single-designer boutiques and emerging clothing labels launching their first online catalog.",
            bn: "নতুন শুরু করা পোশাক ব্র্যান্ড এবং বুটিক শপের প্রথম অনলাইন ক্যাটালগের জন্য উপযুক্ত।",
          },
          reasons: [
            { en: "Up to 100 products with full variant support", bn: "১০০টি পণ্য পর্যন্ত পূর্ণ ভ্যারিয়েন্ট সাপোর্ট" },
            { en: "1 staff account for packing and management", bn: "১টি স্টাফ অ্যাকাউন্ট" },
            { en: "Standard bKash, Nagad & COD checkout", bn: "বিকাশ, নগদ ও সিওডি চেকআউট সুবিধা" },
          ],
        },
        {
          tier: "growth",
          name: { en: "Growth Plan", bn: "গ্রোথ প্ল্যান" },
          badge: { en: "Recommended for Apparel Brands", bn: "পোশাক ব্র্যান্ডের জন্য সেরা পছন্দ" },
          isRecommended: true,
          summary: {
            en: "The definitive choice for scaling fashion brands managing deep seasonal matrices and running regular campaigns.",
            bn: "নিয়মিত ক্যাম্পেইন ও একাধিক কালেকশন পরিচালনাকারী ফ্যাশন ব্র্যান্ডের জন্য সেরা সমাধান।",
          },
          reasons: [
            { en: "Up to 2,500 products across multiple categories", bn: "২,৫০০টি পণ্য পর্যন্ত ক্যাটালগ সীমা" },
            { en: "5 staff accounts for inventory, packing & support", bn: "৫টি স্টাফ অ্যাকাউন্ট" },
            { en: "Automated Pathao/Steadfast API parcel booking", bn: "পাঠাও ও স্টিডফাস্ট এপিআই ইন্টিগ্রেশন" },
            { en: "Custom domain connection included", bn: "নিজস্ব কাস্টম ডোমেইন ব্যবহারের সুবিধা" },
          ],
        },
        {
          tier: "scale",
          name: { en: "Scale Plan", bn: "স্কেল প্ল্যান" },
          summary: {
            en: "For established nationwide fashion houses and department stores requiring unlimited product lines.",
            bn: "সারাদেশে প্রতিষ্ঠিত বড় পোশাক ব্র্যান্ড ও ডিপার্টমেন্টাল স্টোরের জন্য।",
          },
          reasons: [
            { en: "Unlimited products, variants, and staff accounts", bn: "আনলিমিটেড পণ্য, ভ্যারিয়েন্ট ও স্টাফ অ্যাকাউন্ট" },
            { en: "Priority automated courier dispatch & dedicated support", bn: "অগ্রাধিকারভিত্তিক ডেলিভারি ও ডেডিকেটেড সাপোর্ট" },
            { en: "Custom white-label iOS & Android mobile app available", bn: "কাস্টম মোবাইল অ্যাপ তৈরির সুবিধা" },
          ],
        },
      ],
    },
    faqs: {
      eyebrow: {
        en: "FREQUENTLY ASKED QUESTIONS",
        bn: "সাধারণ জিজ্ঞাসা",
      },
      title: {
        en: "Fashion Store Questions & Answers",
        bn: "ফ্যাশন স্টোর সংক্রান্ত প্রশ্নোত্তর",
      },
      description: {
        en: "Clear, factual answers to common questions about running an apparel store on CartX.",
        bn: "কার্টএক্সে পোশাকের অনলাইন শপ পরিচালনা সংক্রান্ত গুরুত্বপূর্ণ প্রশ্নগুলোর উত্তর।",
      },
      items: [
        {
          id: "f-faq-1",
          question: {
            en: "How does CartX handle products with multiple sizes and colors?",
            bn: "একই পোশাকে বিভিন্ন সাইজ ও কালার ভ্যারিয়েন্ট কীভাবে সাজানো যায়?",
          },
          answer: {
            en: "CartX provides a multi-attribute variant matrix. For each product, you can configure both Size (e.g. S, M, L, XL) and Color (e.g. Navy, Olive), set individual compare-at prices, upload variant-specific photos, and track inventory for each distinct combination.",
            bn: "কার্টএক্সে মাল্টি-অ্যাট্রিবিউট ভ্যারিয়েন্ট মেট্রিক্স রয়েছে। আপনি পণ্যের সাইজ ও রঙের সমন্বয় তৈরি করে প্রতিটির জন্য আলাদা স্টক ও ছবি যুক্ত করতে পারবেন।",
          },
        },
        {
          id: "f-faq-2",
          question: {
            en: "Can I set up festive discount campaigns and coupon codes?",
            bn: "উৎসবের মৌসুমে কি কুপন কোড ও বিশেষ ডিসকাউন্ট দেওয়া সম্ভব?",
          },
          answer: {
            en: "Yes. CartX features a promotional discount engine where you can create percentage-based (e.g., 15% off) or fixed-amount (e.g., ৳300 off) coupon codes with minimum order values, usage limits, and expiration dates.",
            bn: "হ্যাঁ, কার্টএক্সের বিল্ট-ইন কুপন ইঞ্জিনে নির্দিষ্ট শতাংশ বা টাকার অঙ্কে ডিসকাউন্ট কোড, সর্বনিম্ন অর্ডার শর্ত এবং ক্যাম্পেইন মেয়াদ নির্ধারণ করা যায়।",
          },
        },
        {
          id: "f-faq-3",
          question: {
            en: "How does variant stock deduction prevent overselling popular sizes?",
            bn: "নির্দিষ্ট সাইজের স্টক শেষ হয়ে গেলে কি অতিরিক্ত অর্ডার আটকে যাবে?",
          },
          answer: {
            en: "When an order is confirmed, inventory deducts immediately at the variant level. If Medium runs out, shoppers will see 'Out of Stock' for Medium while Large remains purchasable, preventing backorder disputes.",
            bn: "হ্যাঁ, অর্ডার কনফার্ম হওয়ার সাথে সাথে নির্দিষ্ট সাইজের ইনভেন্টরি বিয়োগ হয়। ফলে মিডিয়াম সাইজ শেষ হলে ক্রেতা কেবল সোল্ড-আউট দেখতে পাবেন কিন্তু অন্যান্য সাইজ কিনতে পারবেন।",
          },
        },
        {
          id: "f-faq-4",
          question: {
            en: "Can I set separate shipping rates for inside and outside Dhaka?",
            bn: "ঢাকা এবং ঢাকার বাইরে কি আলাদা ডেলিভারি চার্জ নির্ধারণ করা যাবে?",
          },
          answer: {
            en: "Yes. CartX's shipping management allows you to configure zone-based delivery fees (for example, ৳70 inside Dhaka and ৳130 outside Dhaka) which apply automatically during customer checkout based on their delivery district.",
            bn: "হ্যাঁ, ডেলিভারি সেটিংসে আপনি ঢাকা (যেমন ৭০ টাকা) এবং ঢাকার বাইরে (যেমন ১৩০ টাকা) আলাদা চার্জ নির্ধারণ করে রাখতে পারবেন যা চেকআউটে স্বয়ংক্রিয়ভাবে যুক্ত হবে।",
          },
        },
      ],
    },
    cta: {
      heading: {
        en: "Ready to Build Your Fashion & Apparel Store?",
        bn: "আপনার ফ্যাশন ও পোশাকের অনলাইন শপ শুরু করতে প্রস্তুত?",
      },
      description: {
        en: "Launch your clothing label on CartX with multi-attribute sizing, instant bKash checkout, and automated courier delivery dispatch.",
        bn: "সাইজ-কালার মেট্রিক্স, সহজ বিকাশ চেকআউট ও স্বয়ংক্রিয় কুরিয়ার সুবিধা নিয়ে আজই শুরু করুন আপনার ফ্যাশন স্টোর।",
      },
      primaryCta: {
        en: "Start Your Store",
        bn: "আপনার স্টোর শুরু করুন",
      },
      secondaryCta: {
        en: "View Pricing Plans",
        bn: "প্রাইসিং প্ল্যান দেখুন",
      },
      guaranteePill: {
        en: "14-Day Free Trial • No Credit Card Required • Instant Setup",
        bn: "১৪ দিনের ফ্রি ট্রায়াল • ক্রেডিট কার্ডের প্রয়োজন নেই • তাৎক্ষণিক সেটআপ",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Electronics & Gadgets
  // ─────────────────────────────────────────────────────────────
  "electronics-gadgets": {
    slug: "electronics-gadgets",
    name: {
      en: "Electronics & Gadgets",
      bn: "ইলেকট্রনিক্স ও গ্যাজেটস",
    },
    badge: {
      en: "Consumer Tech Retail",
      bn: "কনজিউমার টেক রিটেইল",
    },
    icon: Laptop,
    seo: {
      title: "Electronics & Gadgets E-commerce Solutions",
      description:
        "Manage granular SKUs, structured technical specifications, and official warranty notices with CartX's high-performance e-commerce platform.",
    },
    hero: {
      h1Plain: {
        en: "High-Performance E-commerce for",
        bn: "উচ্চগতির ই-কমার্স সমাধান আপনার",
      },
      h1Highlight: {
        en: "Electronics & Consumer Tech.",
        bn: "ইলেকট্রনিক্স ও টেক গ্যাজেটের জন্য।",
      },
      description: {
        en: "Track individual SKU stock levels, present clean technical parameter tables, and secure high-value order checkout with CartX.",
        bn: "এসকেইউ ভিত্তিক ইনভেন্টরি ট্র্যাকিং, বিস্তারিত টেকনিক্যাল স্পেসিফিকেশন ও সুরক্ষিত পেমেন্ট ভেরিফিকেশন সহ টেক গ্যাজেটের সফল অনলাইন স্টোর।",
      },
      primaryCta: {
        en: "Start Your Store",
        bn: "আপনার স্টোর শুরু করুন",
      },
      secondaryCta: {
        en: "View Inventory Controls",
        bn: "ইনভেন্টরি নিয়ন্ত্রণ দেখুন",
      },
      secondaryHref: "/features/inventory-management",
      trustNote: {
        en: "Engineered for gadget shops, audio retailers, and smartphone accessory brands",
        bn: "গ্যাজেট শপ, অডিও ব্র্যান্ড ও স্মার্টফোন এক্সেসরিজ স্টোরের উপযোগী",
      },
      previewTagline: "FLAGSHIP NOISE CANCELLING",
      previewHeadline: "Studio Pro Lossless Audio",
      previewSubhead: "40-hour playtime, Hi-Res wireless LDAC, ultra-low latency.",
      previewBadges: ["Granular SKU Tracking", "Spec Tables", "Official Warranty"],
    },
    challenges: {
      eyebrow: {
        en: "INDUSTRY CHALLENGES",
        bn: "শিল্পের বাস্তব সমস্যা",
      },
      title: {
        en: "Key Complexities in Electronics Retailing",
        bn: "ইলেকট্রনিক্স রিটেইলিংয়ের প্রধান জটিলতাসমূহ",
      },
      description: {
        en: "Tech retail requires high operational accuracy due to fast model cycles, specific technical differences, and warranty obligations.",
        bn: "প্রযুক্তিশিল্পে মডেল ভ্যারিয়েশন, সুনির্দিষ্ট স্পেসিফিকেশন ও ওয়ারেন্টি শর্ত সঠিকভাবে জানানো অত্যন্ত জরুরি।",
      },
      items: [
        {
          id: "e-ch-1",
          title: {
            en: "Deep Technical Parameter Management",
            bn: "বিস্তারিত টেকনিক্যাল স্পেসিফিকেশন",
          },
          description: {
            en: "Electronics buyers evaluate wattage, battery life, frequency range, and port compatibility before buying.",
            bn: "ব্যাটারি লাইফ, ওয়াটেজ ও কানেক্টিভিটি তথ্যের অভাব থাকলে প্রযুক্তিপ্রেমী ক্রেতারা কেনাকাটায় ইতস্তত করেন।",
          },
          icon: Sliders,
        },
        {
          id: "e-ch-2",
          title: {
            en: "Warranty Terms & Policy Clarity",
            bn: "অফিসিয়াল ওয়ারেন্টি নীতির স্পষ্টতা",
          },
          description: {
            en: "Ambiguous replacement or warranty conditions lead to customer disputes on defective tech components.",
            bn: "ওয়ারেন্টি কভারেজ সুস্পষ্টভাবে উল্লেখ না থাকলে আফটার-সেলস সাপোর্টে জটিলতা তৈরি হয়।",
          },
          icon: ShieldCheck,
        },
        {
          id: "e-ch-3",
          title: {
            en: "High-Value Order Fraud & Returns",
            bn: "দামি পণ্যের ক্ষেত্রে পেমেন্ট ও ফেক অর্ডার ঝুঁকি",
          },
          description: {
            en: "Expensive headphones or power banks sent via Cash on Delivery carry higher financial risk if rejected at the doorstep.",
            bn: "দামি ডিভাইসের ক্ষেত্রে যাচাইকরণ ছাড়া ডেলিভারি পাঠালে রিটার্ন খরচের লোকসান বেশি হয়।",
          },
          icon: AlertCircle,
        },
        {
          id: "e-ch-4",
          title: {
            en: "Fast-Depreciating SKU Inventory",
            bn: "দ্রুত মূল্য পরিবর্তনশীল ইনভেন্টরি",
          },
          description: {
            en: "Keeping track of unit costs, compare-at promotional rates, and low-stock thresholds across dozens of gadget models.",
            bn: "নতুন মডেল আসার সাথে সাথে পুরোনো পণ্যের দাম ও স্টক সমন্বয় রাখা সময়সাপেক্ষ।",
          },
          icon: Boxes,
        },
      ],
    },
    capabilities: {
      eyebrow: {
        en: "CARTX CAPABILITIES",
        bn: "কার্টএক্সের সক্ষমতা",
      },
      title: {
        en: "Verified Features Built for Tech Merchants",
        bn: "টেক মার্চেন্টদের জন্য কার্যকর প্ল্যাটফর্ম সুবিধা",
      },
      description: {
        en: "Platform features verified in CartX to support consumer electronics cataloging, pricing, and fulfillment.",
        bn: "ইলেকট্রনিক্স ক্যাটালগিং, স্পেসিফিকেশন ও অর্ডার সুরক্ষায় কার্টএক্সের বিদ্যমান সুবিধাসমূহ।",
      },
      items: [
        {
          id: "e-cap-1",
          title: {
            en: "Granular SKU & Low-Stock Alerts",
            bn: "এসকেইউ ট্র্যাকিং ও লো-স্টক সতর্কতা",
          },
          description: {
            en: "Track stock quantities at the individual model level with automated alerts when fast-moving gadgets reach reorder thresholds.",
            bn: "প্রতিটি গ্যাজেটের জন্য নির্দিষ্ট এসকেইউ নির্ধারণ এবং মজুত কমে এলে ড্যাশবোর্ডে অ্যালার্ট নোটিফিকেশন।",
          },
          featureSlug: "inventory-management",
          featureName: {
            en: "Inventory Control",
            bn: "ইনভেন্টরি নিয়ন্ত্রণ",
          },
          icon: Boxes,
        },
        {
          id: "e-cap-2",
          title: {
            en: "Structured Technical Attribute Display",
            bn: "সুসংগঠিত টেকনিক্যাল স্পেসিফিকেশন",
          },
          description: {
            en: "Present clean tables of specifications (battery, output wattage, Bluetooth version, weight) right on the product page.",
            bn: "পণ্যের পেজে ব্যাটারি ক্যাপাসিটি, ওয়াটেজ ও কানেক্টিভিটি তথ্যের পরিষ্কার টেবিল প্রদর্শন।",
          },
          featureSlug: "product-management",
          featureName: {
            en: "Product Catalog",
            bn: "প্রোডাক্ট ক্যাটালগ",
          },
          icon: Package,
        },
        {
          id: "e-cap-3",
          title: {
            en: "Verified MFS & Digital Payment Gateways",
            bn: "যাচাইকৃত ডিজিটাল ও এমএফএস পেমেন্ট",
          },
          description: {
            en: "Encourage advance digital payments via instant bKash, Nagad, and cards to minimize delivery refusal rates on high-value orders.",
            bn: "বিকাশ ও ব্যাংক কার্ডের মাধ্যমে অগ্রিম পেমেন্ট সংগ্রহ করে ডেলিভারি ক্যানসেলেশনের ঝুঁকি হ্রাস।",
          },
          featureSlug: "payment-management",
          featureName: {
            en: "Payment Gateways",
            bn: "পেমেন্ট গেটওয়ে",
          },
          icon: CreditCard,
        },
        {
          id: "e-cap-4",
          title: {
            en: "Profit & SKU Velocity Analytics",
            bn: "বিক্রয় গতি ও লাভ পর্যবেক্ষণ",
          },
          description: {
            en: "Surface gross revenue, high-performing SKUs, and stock turnover rates to guide tech reorders and supplier purchases.",
            bn: "কোন গ্যাজেটটি দ্রুত বিক্রি হচ্ছে এবং বেশি লাভ দিচ্ছে তা অ্যানালিটিক্স ড্যাশবোর্ড থেকে তাৎক্ষণিক জানা।",
          },
          featureSlug: "analytics",
          featureName: {
            en: "Reports & Analytics",
            bn: "রিপোর্ট ও অ্যানালিটিক্স",
          },
          icon: BarChart3,
        },
      ],
    },
    storeStructure: {
      eyebrow: {
        en: "RECOMMENDED ARCHITECTURE",
        bn: "প্রস্তাবিত স্টোর কাঠামো",
      },
      title: {
        en: "Suggested Store Structure for Electronics",
        bn: "ইলেকট্রনিক্স শপের জন্য আদর্শ ক্যাটাগরি বিন্যাস",
      },
      description: {
        en: "A spec-oriented structure lets technical shoppers filter by usage, power rating, and compatibility.",
        bn: "কানেক্টিভিটি ও ডিভাইসের ধরন অনুযায়ী সাজানো ক্যাটাগরি প্রযুক্তিপ্রেমী ক্রেতাদের দ্রুত সিদ্ধান্ত নিতে সাহায্য করে।",
      },
      discoveryTip: {
        en: "Group high-margin accessories near core hardware categories to boost average order value (AOV).",
        bn: "মূল ডিভাইসের পাশাপাশি চার্জার ও ক্যাবলের মতো এক্সেসরিজ যুক্ত করে অর্ডার ভ্যালু বাড়ানো সম্ভব।",
      },
      categories: [
        {
          name: { en: "Audio & Acoustics", bn: "অডিও ও হেডফোন" },
          subcategories: [
            { en: "TWS True Wireless Earbuds", bn: "টিডব্লিউএস ইয়ারবাডস" },
            { en: "Over-Ear ANC Headphones", bn: "ওভার-ইয়ার হেডফোন" },
            { en: "Portable Bluetooth Speakers", bn: "ব্লুটুথ স্পিকার" },
          ],
          description: {
            en: "Organized by personal wireless audio, studio listening, and outdoor sound systems.",
            bn: "দৈনন্দিন অডিও, স্টুডিও লিসেনিং ও পোর্টেবল স্পিকারের সুনির্দিষ্ট বিন্যাস।",
          },
        },
        {
          name: { en: "Power & Fast Charging", bn: "পাওয়ার ও ফাস্ট চার্জার" },
          subcategories: [
            { en: "GaN Fast Wall Chargers", bn: "জিএএন ফাস্ট চার্জার" },
            { en: "High-Capacity Power Banks", bn: "পাওয়ার ব্যাংক" },
            { en: "Magnetic Wireless Docks", bn: "ওয়্যারলেস চার্জিং ডক" },
            { en: "Braided Fast-Charging Cables", bn: "টেকসই ক্যাবলস" },
          ],
          description: {
            en: "Segmented by wattage and charging technology for device cross-compatibility.",
            bn: "স্মার্টফোন ও ল্যাপটপের জন্য প্রয়োজনীয় ওয়াটেজ ভিত্তিক চার্জিং সামগ্রী।",
          },
        },
        {
          name: { en: "Smart Wearables", bn: "স্মার্ট ওয়্যারেবলস" },
          subcategories: [
            { en: "Smartwatches & Fitness Bands", bn: "স্মার্টওয়াচ ও ফিটনেস ট্র্যাকার" },
            { en: "Replacement Straps", bn: "ওয়াচ স্ট্র্যাপস" },
          ],
          description: {
            en: "Fitness tracking devices categorized by battery endurance and sensor specs.",
            bn: "স্বাস্থ্য ও ফিটনেস ট্র্যাকিং ডিভাইসের সুসংগঠিত তালিকা।",
          },
        },
        {
          name: { en: "Deals & Verified Clearance", bn: "স্পেশাল ডিল ও ক্লিয়ারেন্স" },
          subcategories: [
            { en: "Open Box Deals", bn: "ওপেন বক্স ডিল" },
            { en: "Bundle Combos (Charger + Cable)", bn: "কম্বো অফার" },
          ],
          description: {
            en: "Promotional sections to drive high volume during tech flash sales.",
            bn: "ফ্ল্যাশ সেলে দ্রুত বিক্রির জন্য প্রস্তুত বিশেষ ডিসকাউন্ট কর্নার।",
          },
        },
      ],
    },
    catalog: {
      eyebrow: {
        en: "SAMPLE CATALOGUE",
        bn: "নমুনা ক্যাটালগ",
      },
      title: {
        en: "Illustrative Electronics Products & Parameter Data",
        bn: "নমুনা টেক পণ্য ও স্পেসিফিকেশন মডেল",
      },
      description: {
        en: "Sample consumer electronics products demonstrating technical parameters and warranty terms in CartX.",
        bn: "টেকনিক্যাল প্যারামিটার ও অফিসিয়াল ওয়ারেন্টি নীতি প্রদর্শনের জন্য নমুনা গ্যাজেট ডেটা।",
      },
      products: [
        {
          id: "e-prod-1",
          name: { en: "Volt Studio ANC Wireless Headphones", bn: "ভোল্ট স্টুডিও এএনসি ওয়্যারলেস হেডফোন" },
          category: { en: "Audio & Acoustics", bn: "অডিও ও হেডফোন" },
          price: "৳5,999",
          originalPrice: "৳6,999",
          badge: { en: "Hi-Res Audio", bn: "হাই-রেজ অডিও" },
          attributes: [
            { label: { en: "Drivers", bn: "ড্রাইভার" }, value: { en: "40mm Dynamic", bn: "৪০মিমি ডায়নামিক" } },
            { label: { en: "Battery", bn: "ব্যাটারি" }, value: { en: "40hr ANC Off, 28hr ANC On", bn: "৪০ ঘণ্টা একটানা প্লেব্যাক" } },
            { label: { en: "Warranty", bn: "ওয়ারেন্টি" }, value: { en: "1 Year Official Brand Warranty", bn: "১ বছরের অফিসিয়াল ওয়ারেন্টি" } },
          ],
          highlight: {
            en: "Hybrid active noise cancellation with LDAC lossless codec support.",
            bn: "অ্যাক্টিভ নয়েজ ক্যানসেলেশন ও ক্রিস্টাল ক্লিয়ার সাউন্ড কোয়ালিটি।",
          },
        },
        {
          id: "e-prod-2",
          name: { en: "MagFast 65W GaN Dual Charger", bn: "ম্যাগফাস্ট ৬৫ ওয়াট জিএএন ডুয়াল চার্জার" },
          category: { en: "Power & Fast Charging", bn: "পাওয়ার ও ফাস্ট চার্জার" },
          price: "৳2,450",
          originalPrice: "৳2,800",
          badge: { en: "GaN Fast Charge", bn: "জিএএন ফাস্ট চার্জ" },
          attributes: [
            { label: { en: "Ports", bn: "পোর্টস" }, value: { en: "2x USB-C, 1x USB-A", bn: "২টি ইউএসবি-সি, ১টি ইউএসবি-এ" } },
            { label: { en: "Output", bn: "আউটপুট" }, value: { en: "65W Max Power Delivery 3.0", bn: "৬৫ ওয়াট সর্বোচ্চ পাওয়ার" } },
            { label: { en: "Compatibility", bn: "উপযোগী" }, value: { en: "Laptops, Tablets, Smartphones", bn: "ল্যাপটপ, ট্যাবলেট ও স্মার্টফোন" } },
          ],
          highlight: {
            en: "Compact gallium-nitride architecture that stays cool under heavy load.",
            bn: "কম্প্যাক্ট সাইজ এবং অতিরিক্ত গরম হওয়া রোধে আধুনিক কুলিং সিস্টেম।",
          },
        },
        {
          id: "e-prod-3",
          name: { en: "ProGlide Mechanical Gaming Keyboard", bn: "প্রোগ্লাইড মেকানিক্যাল গেমিং কীবোর্ড" },
          category: { en: "Computer & Gaming", bn: "কম্পিউটার ও গেমিং" },
          price: "৳4,800",
          badge: { en: "Hot-Swappable", bn: "হট-সোয়াপ্যাবল" },
          attributes: [
            { label: { en: "Switches", bn: "সুইচ" }, value: { en: "Linear Red Switches", bn: "লিনিয়ার রেড মেকানিক্যাল সুইচ" } },
            { label: { en: "Layout", bn: "লেআউট" }, value: { en: "Tenkeyless 87-Key", bn: "টেনকিল্যাস ৮৭-কি" } },
            { label: { en: "Backlight", bn: "ব্যাকলাইট" }, value: { en: "Per-Key RGB Customization", bn: "পার-কি আরজিবি ব্যাকলাইট" } },
          ],
          highlight: {
            en: "Pre-lubed stabilizers with sound dampening silicone foam base.",
            bn: "দ্রুত রেসপন্স এবং টাইপিংয়ের চমৎকার অনুভূতি।",
          },
        },
        {
          id: "e-prod-4",
          name: { en: "UltraThin 20,000mAh Power Bank", bn: "আল্ট্রাথিন ২০,০০০ এমএএইচ পাওয়ার ব্যাংক" },
          category: { en: "Power & Fast Charging", bn: "পাওয়ার ও ফাস্ট চার্জার" },
          price: "৳3,150",
          originalPrice: "৳3,500",
          badge: { en: "22.5W Fast", bn: "২২.৫ ওয়াট ফাস্ট" },
          attributes: [
            { label: { en: "Capacity", bn: "ধারণক্ষমতা" }, value: { en: "20,000mAh Lithium-Polymer", bn: "২০,০০০ এমএএইচ লিথিয়াম পলিমার" } },
            { label: { en: "Display", bn: "ডিসপ্লে" }, value: { en: "Digital Percentage LED", bn: "ডিজিটাল পার্সেন্টেজ ডিসপ্লে" } },
            { label: { en: "Weight", bn: "ওজন" }, value: { en: "365 grams", bn: "৩৬৫ গ্রাম" } },
          ],
          highlight: {
            en: "Aircraft-safe portable battery capable of charging smartphones 4 times.",
            bn: "ভ্রমণে সহজে বহনযোগ্য এবং একসাথে একাধিক ডিভাইস চার্জের সক্ষমতা।",
          },
        },
      ],
    },
    storefrontPreview: {
      eyebrow: {
        en: "STOREFRONT SHOWCASE",
        bn: "স্টোরফ্রন্ট প্রদর্শনী",
      },
      title: {
        en: "Volt Tech — Electronics Theme Preview",
        bn: "ভোল্ট টেক — ইলেকট্রনিক্স থিম প্রিভিউ",
      },
      description: {
        en: "Explore an official concept storefront built for consumer electronics brands with parameter filters and verified payment badges.",
        bn: "প্রযুক্তি ব্র্যান্ডের জন্য তৈরি আধুনিক স্টোরফ্রন্ট প্রিভিউ, যা স্পেক্স টেবিল ও পেমেন্ট ব্যাজ সহ সুসজ্জিত।",
      },
      domain: "demo.volttech.cartx.app",
      brandName: "VOLT TECH",
      tagline: "High-Performance Consumer Electronics",
      demoThemeId: "volt-electronics",
      isLiveDemo: true,
      previewNotice: {
        en: "Live Demo Store Available",
        bn: "লাইভ ডেমো স্টোর সক্রিয় রয়েছে",
      },
      accentGradient: "from-sky-500/20 via-cyan-400/10 to-transparent",
      highlights: [
        { en: "Detailed technical specification table on product pages", bn: "পণ্যের পাতায় বিস্তারিত টেকনিক্যাল স্পেক্স টেবিল" },
        { en: "Prominent official warranty policy badges", bn: "স্পষ্ট অফিসিয়াল ওয়ারেন্টি নীতি ব্যাজ" },
        { en: "Instant bKash, Nagad & Card payment verification", bn: "বিকাশ, নগদ ও কার্ডের তাৎক্ষণিক পেমেন্ট যাচাইকরণ" },
      ],
    },
    integrations: {
      eyebrow: {
        en: "LOCAL INTEGRATIONS",
        bn: "প্রয়োজনীয় ইন্টিগ্রেশন",
      },
      title: {
        en: "Recommended Connectors for Tech Retailers",
        bn: "টেক রিটেইলারদের জন্য প্রস্তাবিত কানেক্টর",
      },
      description: {
        en: "Payment security and careful parcel logistics integrations essential for electronics retail.",
        bn: "ইলেকট্রনিক্স পণ্যের দ্রুত ও নিরাপদ ডেলিভারি নিশ্চিত করতে প্রয়োজনীয় কানেক্টর।",
      },
      items: [
        {
          name: "bKash & Nagad Gateways",
          category: { en: "Digital Payments", bn: "ডিজিটাল পেমেন্ট" },
          reason: {
            en: "Secures instant advance payment for high-value gadget orders.",
            bn: "দামি গ্যাজেটের ক্ষেত্রে অগ্রিম পেমেন্ট নিশ্চিত করতে অত্যন্ত কার্যকর।",
          },
          icon: CreditCard,
          linkHref: "/integrations",
        },
        {
          name: "Steadfast Courier",
          category: { en: "Fragile Parcel Dispatch", bn: "নিরাপদ পার্সেল ডেলিভারি" },
          reason: {
            en: "Reliable logistics with tracking updates for electronics throughout Bangladesh.",
            bn: "সারাদেশে প্রযুক্তি পণ্য নিরাপদে ডেলিভারি ও দ্রুত পেমেন্ট সংগ্রহের জন্য নির্ভরযোগ্য।",
          },
          icon: Truck,
          linkHref: "/integrations",
        },
        {
          name: "Pathao Courier",
          category: { en: "City Express Dispatch", bn: "সিটি এক্সপ্রেস ডেলিভারি" },
          reason: {
            en: "Fast urban delivery with automated tracking status integration.",
            bn: "শহরাঞ্চলে একই দিনে দ্রুত ডেলিভারি নিশ্চিত করতে সহায়ক।",
          },
          icon: Truck,
          linkHref: "/integrations",
        },
        {
          name: "Google Analytics 4",
          category: { en: "Funnel Measurement", bn: "কনভার্সন পরিমাপ" },
          reason: {
            en: "Measures checkout drop-offs and device browsing journeys for high-ticket electronics.",
            bn: "দামি ডিভাইসের ক্ষেত্রে ক্রেতাদের ভিজিট ও কেনাকাটার সঠিক পরিসংখ্যান জানা।",
          },
          icon: BarChart3,
          linkHref: "/integrations",
        },
      ],
    },
    subscriptionGuidance: {
      eyebrow: {
        en: "SUBSCRIPTION GUIDANCE",
        bn: "সাবস্ক্রিপশন গাইডলাইন",
      },
      title: {
        en: "Recommended Plans for Electronics Stores",
        bn: "ইলেকট্রনিক্স শপের জন্য উপযোগী প্ল্যানসমূহ",
      },
      description: {
        en: "Pick a plan according to your SKU catalog volume, staff permissions, and inventory update frequency.",
        bn: "আপনার ক্যাটালগের মোট এসকেইউ সংখ্যা ও স্টাফ অ্যাকাউন্টের প্রয়োজন অনুযায়ী সঠিক প্ল্যান বেছে নিন।",
      },
      disclaimer: {
        en: "All plans include high-speed hosting, SSL encryption, and unmetered storefront bandwidth.",
        bn: "সকল প্ল্যানে ফ্রি হাই-স্পিড হোস্টিং, এসএসএল এনক্রিপশন ও আনলিমিটেড ব্যান্ডউইথ অন্তর্ভুক্ত।",
      },
      plans: [
        {
          tier: "starter",
          name: { en: "Starter Plan", bn: "স্টার্টার প্ল্যান" },
          summary: {
            en: "Suitable for focused niche gadget brands selling a curated collection of accessories or specialty tech.",
            bn: "নির্দিষ্ট কিছু গ্যাজেট বা এক্সেসরিজ নিয়ে শুরু করা নতুন টেক স্টোরের জন্য উপযোগী।",
          },
          reasons: [
            { en: "Up to 100 SKUs with structured specifications", bn: "১০০টি পণ্য পর্যন্ত ক্যাটালগ সীমা" },
            { en: "1 staff admin account", bn: "১টি স্টাফ অ্যাকাউন্ট" },
            { en: "Integrated bKash and COD payment options", bn: "বিকাশ ও সিওডি পেমেন্ট সুবিধা" },
          ],
        },
        {
          tier: "growth",
          name: { en: "Growth Plan", bn: "গ্রোথ প্ল্যান" },
          badge: { en: "Recommended for Tech Stores", bn: "টেক স্টোরের জন্য সবচেয়ে জনপ্রিয়" },
          isRecommended: true,
          summary: {
            en: "The standard choice for full-scale consumer tech stores managing hundreds of models, cables, and power docks.",
            bn: "বিভিন্ন ব্র্যান্ডের শত শত গ্যাজেট ও এক্সেসরিজ পরিচালনাকারী টেক স্টোরের জন্য আদর্শ।",
          },
          reasons: [
            { en: "Up to 2,500 SKUs with automated low-stock warnings", bn: "২,৫০০টি পণ্য ও লো-স্টক নোটিফিকেশন" },
            { en: "5 staff accounts for warehouse, packing & customer service", bn: "৫টি স্টাফ অ্যাকাউন্ট" },
            { en: "Automated Pathao and Steadfast parcel booking API", bn: "কুরিয়ার পার্সেল বুকিং এপিআই" },
            { en: "Custom domain connection included", bn: "কাস্টম ডোমেইন ব্যবহারের পূর্ণ সুবিধা" },
          ],
        },
        {
          tier: "scale",
          name: { en: "Scale Plan", bn: "স্কেল প্ল্যান" },
          summary: {
            en: "Engineered for nationwide tech distributors, multi-branch retailers, and enterprise consumer gadget brands.",
            bn: "সারাদেশে বিস্তৃত বড় টেক ব্র্যান্ড ও একাধিক ব্রাঞ্চ পরিচালনাকারীদের জন্য।",
          },
          reasons: [
            { en: "Unlimited products, SKUs, and staff accounts", bn: "আনলিমিটেড পণ্য, এসকেইউ ও স্টাফ অ্যাকাউন্ট" },
            { en: "Priority dedicated technical support and onboarding", bn: "অগ্রাধিকারভিত্তিক কারিগরি সহায়তা" },
            { en: "Custom white-label iOS and Android mobile app build", bn: "নিজস্ব ব্র্যান্ডেড মোবাইল অ্যাপ" },
          ],
        },
      ],
    },
    faqs: {
      eyebrow: {
        en: "FREQUENTLY ASKED QUESTIONS",
        bn: "সাধারণ জিজ্ঞাসা",
      },
      title: {
        en: "Electronics Store Questions & Answers",
        bn: "ইলেকট্রনিক্স স্টোর সংক্রান্ত প্রশ্নোত্তর",
      },
      description: {
        en: "Key facts about cataloging devices, inventory management, and warranty communication on CartX.",
        bn: "কার্টএক্সে টেক পণ্যের স্পেসিফিকেশন ও ইনভেন্টরি পরিচালনা সংক্রান্ত গুরুত্বপূর্ণ প্রশ্নের উত্তর।",
      },
      items: [
        {
          id: "e-faq-1",
          question: {
            en: "Can I display detailed technical specifications on product pages?",
            bn: "পণ্যের পাতায় কি ব্যাটারি, ওয়াটেজ ইত্যাদির টেকনিক্যাল স্পেসিফিকেশন টেবিল দেওয়া যাবে?",
          },
          answer: {
            en: "Yes. In CartX's product manager, you can define structured attribute fields (such as battery capacity, driver size, Bluetooth version, and ports) which render as clean, readable parameter tables on the storefront.",
            bn: "হ্যাঁ, প্রোডাক্ট ম্যানেজারে আপনি ব্যাটারি ক্যাপাসিটি, কানেক্টিভিটি, ওয়াটেজ ইত্যাদি তথ্য সুসংগঠিতভাবে যুক্ত করতে পারবেন যা ওয়েবসাইটে সুন্দর টেবিলে প্রদর্শিত হবে।",
          },
        },
        {
          id: "e-faq-2",
          question: {
            en: "How can I communicate official brand warranty terms clearly?",
            bn: "অফিসিয়াল ওয়ারেন্টি পলিসি ক্রেতাদের কীভাবে দেখানো সম্ভব?",
          },
          answer: {
            en: "You can highlight warranty duration (e.g. '1 Year Official Brand Warranty') directly in the product specifications, badges, and description sections, ensuring buyers know the coverage before checking out.",
            bn: "পণ্যের স্পেসিফিকেশন, ব্যাজ এবং বর্ণনায় আপনি ওয়ারেন্টির মেয়াদ ও শর্তাবলী সুস্পষ্টভাবে উল্লেখ করতে পারেন, যা ক্রেতার আস্থা বৃদ্ধি করে।",
          },
        },
        {
          id: "e-faq-3",
          question: {
            en: "Does stock deduct automatically when an order is placed?",
            bn: "অর্ডার নিশ্চিত হওয়ার সাথে সাথে কি গ্যাজেটের স্টক স্বয়ংক্রিয়ভাবে কমে যাবে?",
          },
          answer: {
            en: "Yes. CartX immediately deducts inventory for that SKU when an order is placed, preventing multiple customers from purchasing the same remaining piece during flash sales.",
            bn: "হ্যাঁ, কোনো পণ্যের অর্ডার নিশ্চিত হওয়ার সাথে সাথে লাইভ স্টক থেকে ইনভেন্টরি কমে যায়, ফলে ফ্ল্যাশ সেলের সময়ও অতিরিক্ত অর্ডার পড়ার কোনো সুযোগ থাকে না।",
          },
        },
        {
          id: "e-faq-4",
          question: {
            en: "Are high-value orders protected with digital payment records?",
            bn: "দামি ডিভাইসের ক্ষেত্রে অগ্রিম পেমেন্টের হিসাব কি ট্র্যাক করা যায়?",
          },
          answer: {
            en: "Yes. Integrated payments via bKash, Nagad, and debit/credit cards record verified transaction IDs and payment timestamps directly in the CartX order timeline.",
            bn: "হ্যাঁ, বিকাশ, নগদ বা ব্যাংক কার্ডে সম্পন্ন হওয়া প্রতিটি পেমেন্টের ট্রানজ্যাকশন আইডি ও সময়সীমা অর্ডারের টাইমলাইনে সুরক্ষিতভাবে সংরক্ষিত থাকে।",
          },
        },
      ],
    },
    cta: {
      heading: {
        en: "Ready to Build Your Electronics & Gadgets Store?",
        bn: "আপনার ইলেকট্রনিক্স ও গ্যাজেটের অনলাইন শপ শুরু করতে প্রস্তুত?",
      },
      description: {
        en: "Equip your tech store with granular SKU tracking, verified local payments, and automated delivery dispatch on CartX.",
        bn: "এসকেইউ ট্র্যাকিং, সুরক্ষিত ডিজিটাল পেমেন্ট ও স্বয়ংক্রিয় কুরিয়ার বুকিং সুবিধা নিয়ে আজই শুরু করুন আপনার টেক শপ।",
      },
      primaryCta: {
        en: "Start Your Store",
        bn: "আপনার স্টোর শুরু করুন",
      },
      secondaryCta: {
        en: "View Pricing Plans",
        bn: "প্রাইসিং প্ল্যান দেখুন",
      },
      guaranteePill: {
        en: "14-Day Free Trial • No Credit Card Required • Instant Setup",
        bn: "১৪ দিনের ফ্রি ট্রায়াল • ক্রেডিট কার্ডের প্রয়োজন নেই • তাৎক্ষণিক সেটআপ",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Cosmetics & Beauty
  // ─────────────────────────────────────────────────────────────
  "cosmetics-beauty": {
    slug: "cosmetics-beauty",
    name: {
      en: "Cosmetics & Beauty",
      bn: "কসমেটিক্স ও বিউটি",
    },
    badge: {
      en: "Skincare & Cosmetics Commerce",
      bn: "স্কিনকেয়ার ও প্রসাধন বাণিজ্য",
    },
    icon: Heart,
    seo: {
      title: "Cosmetics & Beauty E-commerce Solutions",
      description:
        "Showcase cosmetic shade swatches, organize multi-step skincare routines, and build repeat customer loyalty with CartX.",
    },
    hero: {
      h1Plain: {
        en: "Elevate Your Online Presence in",
        bn: "অনলাইনে প্রতিষ্ঠা করুন আপনার অনন্য",
      },
      h1Highlight: {
        en: "Cosmetics & Skincare Retail.",
        bn: "কসমেটিক্স ও স্কিনকেয়ার ব্র্যান্ড।",
      },
      description: {
        en: "Display accurate shade swatches, configure volume variants (ml, gm), and reward repeat customers with CartX's beauty commerce tools.",
        bn: "শেড সোয়াচ, বিভিন্ন পরিমাপের ভ্যারিয়েন্ট (এমএল, গ্রাম) এবং নিয়মিত ক্রেতাদের অর্ডার হিস্ট্রি সহ প্রসাধন ব্র্যান্ডের ডিজিটাল স্টোর।",
      },
      primaryCta: {
        en: "Start Your Store",
        bn: "আপনার স্টোর শুরু করুন",
      },
      secondaryCta: {
        en: "View Storefront Builder",
        bn: "স্টোর বিল্ডার দেখুন",
      },
      secondaryHref: "/features/store-builder",
      trustNote: {
        en: "Designed for organic skincare lines, makeup labels, and wellness dispensaries",
        bn: "অর্গানিক স্কিনকেয়ার, মেকআপ ব্র্যান্ড ও বিউটি স্টোরের জন্য বিশেষায়িত",
      },
      previewTagline: "100% CLEAN BOTANICALS",
      previewHeadline: "Hydrating Dew Drops",
      previewSubhead: "Dermatologist tested, vegan botanicals for radiant skin health.",
      previewBadges: ["Shade Swatches", "Volume Variants", "Repeat Customer Insights"],
    },
    challenges: {
      eyebrow: {
        en: "INDUSTRY CHALLENGES",
        bn: "শিল্পের বাস্তব সমস্যা",
      },
      title: {
        en: "Common Hurdles in Beauty & Cosmetics E-commerce",
        bn: "অনলাইনে প্রসাধন পণ্য বিক্রির প্রধান চ্যালেঞ্জসমূহ",
      },
      description: {
        en: "Beauty shoppers require high visual trust, clear volume options, and ingredients transparency before making purchasing choices.",
        bn: "প্রসাধন ক্রয়ে শেড সিলেকশন, উপাদানের গুণাগুণ এবং নিরাপদ প্যাকেজিংয়ের ওপর ক্রেতারা সবচেয়ে বেশি গুরুত্ব দেন।",
      },
      items: [
        {
          id: "b-ch-1",
          title: {
            en: "Accurate Foundation & Lip Shade Selection",
            bn: "সঠিক শেড ও কালার সিলেকশন",
          },
          description: {
            en: "Presenting multiple complexion shades (Porcelain, Warm Beige, Honey) without visual swatches leads to wrong orders.",
            bn: "ফাউন্ডেশন বা লিপস্টিকের শেড স্পষ্ট রঙের সোয়াচ ছাড়া প্রদর্শন করলে ভুল শেড অর্ডারের সম্ভাবনা তৈরি হয়।",
          },
          icon: Sliders,
        },
        {
          id: "b-ch-2",
          title: {
            en: "Multiple Volume & Package Sizes",
            bn: "বিভিন্ন পরিমাপের ভ্যারিয়েন্ট ব্যবস্থাপনা",
          },
          description: {
            en: "Managing sample sizes (15ml, 30ml, 50ml) with distinct price points and separate inventory counts.",
            bn: "একই ক্রিমের বিভিন্ন সাইজের (যেমন ৩০ মিলি বা ৫০ মিলি) আলাদা মূল্য ও স্টক নির্ভুল রাখা।",
          },
          icon: Package,
        },
        {
          id: "b-ch-3",
          title: {
            en: "Repeat Purchase Tracking",
            bn: "নিয়মিত ক্রেতাদের অর্ডার রেকর্ড রাখা",
          },
          description: {
            en: "Skincare buyers reorder their staple serums every 60–90 days; without customer order records, retaining them is difficult.",
            bn: "সিরাম বা ফেসওয়াশের মতো পণ্য ক্রেতারা নিয়মিত কেনেন; তাদের অতীত হিস্ট্রি না থাকলে রিটেনশন ক্যাম্পেইন করা অসম্ভব হয়।",
          },
          icon: Users,
        },
        {
          id: "b-ch-4",
          title: {
            en: "Fragile Packaging & Leak-Proof Delivery",
            bn: "কাঁচের বোতল ও তরল পণ্যের নিরাপদ কুরিয়ার",
          },
          description: {
            en: "Serums in glass dropper bottles require dedicated packaging notices and dependable courier handling.",
            bn: "কাঁচের বোতল বা তরল প্রসাধন পাঠানোর ক্ষেত্রে কুরিয়ারের সতর্কতা ও সঠিক ট্র্যাকিং জরুরি।",
          },
          icon: Truck,
        },
      ],
    },
    capabilities: {
      eyebrow: {
        en: "CARTX CAPABILITIES",
        bn: "কার্টএক্সের সক্ষমতা",
      },
      title: {
        en: "Verified Features Built for Beauty Brands",
        bn: "বিউটি ব্র্যান্ডের জন্য প্রস্তুত প্ল্যাটফর্ম সুবিধা",
      },
      description: {
        en: "Verified features in CartX designed to showcase cosmetics elegance and maintain customer purchase history.",
        bn: "কসমেটিক্স পণ্যের সৌন্দর্য ও ক্রেতাদের সাথে দীর্ঘস্থায়ী সম্পর্ক গড়তে কার্টএক্সের কার্যকর সুবিধাসমূহ।",
      },
      items: [
        {
          id: "b-cap-1",
          title: {
            en: "Visual Shade Swatches & Volume Pricing",
            bn: "কালার সোয়াচ ও পরিমাপ ভিত্তিক মূল্য",
          },
          description: {
            en: "Configure shade codes and packaging options with per-variant prices and high-resolution photo switchers.",
            bn: "শেড কোড এবং পরিমাপ অনুযায়ী আলাদা দাম নির্ধারণ এবং ক্লিক করলেই সংশ্লিষ্ট ছবির প্রদর্শনী।",
          },
          featureSlug: "product-management",
          featureName: {
            en: "Product Management",
            bn: "প্রোডাক্ট ম্যানেজমেন্ট",
          },
          icon: Package,
        },
        {
          id: "b-cap-2",
          title: {
            en: "Unified Customer Purchase Profiles",
            bn: "কাস্টমার প্রোফাইল ও অতীত অর্ডার হিস্ট্রি",
          },
          description: {
            en: "View lifetime purchase histories, preferred shades, and delivery addresses directly from the CartX customer manager.",
            bn: "কোন ক্রেতা পূর্বে কোন শেড কিনেছিলেন এবং কতবার অর্ডার করেছেন তা সরাসরি ড্যাশবোর্ড থেকে পর্যবেক্ষণ।",
          },
          featureSlug: "customer-management",
          featureName: {
            en: "Customer Management",
            bn: "কাস্টমার ম্যানেজমেন্ট",
          },
          icon: Users,
        },
        {
          id: "b-cap-3",
          title: {
            en: "Promotional Bundle Discount Codes",
            bn: "বান্ডেল ডিসকাউন্ট ও প্রোমো কোড",
          },
          description: {
            en: "Create percentage or fixed discount coupons (e.g. ৳300 off on ৳2,000 cart) to encourage skincare set purchases.",
            bn: "স্কিনকেয়ার রুটিন বান্ডেল বিক্রির জন্য নির্দিষ্ট অঙ্কের ছাড় বা শতকরা ডিসকাউন্ট কোড তৈরি।",
          },
          featureSlug: "store-builder",
          featureName: {
            en: "Storefront Builder",
            bn: "স্টোরফ্রন্ট বিল্ডার",
          },
          icon: Store,
        },
        {
          id: "b-cap-4",
          title: {
            en: "Revenue & Reorder Analytics",
            bn: "বিক্রয় ও রিস্টক অ্যানালিটিক্স",
          },
          description: {
            en: "Track top-selling formulations, repeat shopper rates, and sales peaks during seasonal beauty promotions.",
            bn: "কোন সিরাম বা ক্রিমটি সবচেয়ে জনপ্রিয় এবং কোন মৌসুমে বিক্রি বেশি হচ্ছে তা সহজে জানা।",
          },
          featureSlug: "analytics",
          featureName: {
            en: "Reports & Analytics",
            bn: "রিপোর্ট ও অ্যানালিটিক্স",
          },
          icon: BarChart3,
        },
      ],
    },
    storeStructure: {
      eyebrow: {
        en: "RECOMMENDED ARCHITECTURE",
        bn: "প্রস্তাবিত স্টোর কাঠামো",
      },
      title: {
        en: "Suggested Store Structure for Beauty & Cosmetics",
        bn: "বিউটি ব্র্যান্ডের জন্য আদর্শ ক্যাটাগরি বিন্যাস",
      },
      description: {
        en: "Organizing products by daily skincare routine steps increases product cross-selling and shopper engagement.",
        bn: "দৈনন্দিন স্কিনকেয়ার রুটিন অনুযায়ী ক্যাটাগরি সাজালে ক্রেতারা একসাথে একাধিক পণ্য কেনেন।",
      },
      discoveryTip: {
        en: "Create 'Routine Sets' linking cleansers, serums, and moisturizers for a one-click regimen experience.",
        bn: "ক্লিনজার, সিরাম ও ময়েশ্চারাইজার একসাথে বান্ডেল হিসেবে সাজালে বিক্রি বৃদ্ধি পায়।",
      },
      categories: [
        {
          name: { en: "Skincare Regimen", bn: "স্কিনকেয়ার রুটিন" },
          subcategories: [
            { en: "Gentle Cleansers", bn: "ক্লিনজার ও ফেসওয়াশ" },
            { en: "Active Serums & Ampoules", bn: "সিরাম ও অ্যাম্পুল" },
            { en: "Hydrating Moisturizers", bn: "ময়েশ্চারাইজার ও ক্রিম" },
            { en: "Daily Sun Protection (SPF)", bn: "সানস্ক্রিন ও সানব্লক" },
          ],
          description: {
            en: "Structured sequentially from morning cleansing through nightly hydration.",
            bn: "সকালের ক্লিনজিং থেকে রাতের হাইড্রেটিং স্টেপ অনুযায়ী ধাপে ধাপে সাজানো।",
          },
        },
        {
          name: { en: "Makeup & Complexion", bn: "মেকআপ ও কমপ্লেকশন" },
          subcategories: [
            { en: "Weightless Foundation", bn: "ফাউন্ডেশন ও কুশন" },
            { en: "Velvet Lip Tints", bn: "লিপস্টিক ও লিপটিন্ট" },
            { en: "Cheek Blush & Glow", bn: "ব্লাশ ও হাইলাইটার" },
          ],
          description: {
            en: "Categorized by face, lips, and cheeks with multi-shade swatch selectors.",
            bn: "মুখ, ঠোঁট ও গালের মেকআপ পণ্যের শেডভিত্তিক সহজ বিভাজন।",
          },
        },
        {
          name: { en: "Hair & Scalp Health", bn: "চুল ও স্ক্যাল্প কেয়ার" },
          subcategories: [
            { en: "Nourishing Hair Oils", bn: "হেয়ার অয়েল ও টনিক" },
            { en: "Sulfate-Free Shampoos", bn: "সালফেট-ফ্রি শ্যাম্পু" },
          ],
          description: {
            en: "Formulations targeting hair strength, anti-frizz, and scalp vitality.",
            bn: "চুলের যত্ন ও পুষ্টির জন্য প্রয়োজনীয় তেলের কালেকশন।",
          },
        },
        {
          name: { en: "Regimen Sets & Gifts", bn: "রুটিন সেট ও গিফট বক্স" },
          subcategories: [
            { en: "Hydration Starter Kit", bn: "হাইড্রেটিং স্টার্টার কিট" },
            { en: "Festive Glow Duo", bn: "ফেস্টিভ গ্লো কম্বো" },
          ],
          description: {
            en: "Pre-packaged beauty bundles with value savings.",
            bn: "উপহার ও বিশেষ ডিসকাউন্টের জন্য প্রস্তুতকৃত কম্বো প্যাক।",
          },
        },
      ],
    },
    catalog: {
      eyebrow: {
        en: "SAMPLE CATALOGUE",
        bn: "নমুনা ক্যাটালগ",
      },
      title: {
        en: "Illustrative Cosmetics Products & Swatch Models",
        bn: "নমুনা প্রসাধন পণ্য ও ভ্যারিয়েন্ট মডেল",
      },
      description: {
        en: "Sample cosmetics and skincare products demonstrating shade swatches and volume configurations in CartX.",
        bn: "শেড কোড ও বিভিন্ন পরিমাপের ভ্যারিয়েন্ট মডেল প্রদর্শনের জন্য নমুনা বিউটি ডেটা।",
      },
      products: [
        {
          id: "b-prod-1",
          name: { en: "Dew Drops Hydrating Niacinamide Serum", bn: "ডিউ ড্রপস হাইড্রেটিং নায়াসিনামাইড সিরাম" },
          category: { en: "Skincare Regimen", bn: "স্কিনকেয়ার রুটিন" },
          price: "৳1,650",
          originalPrice: "৳1,950",
          badge: { en: "Award Winner", bn: "বেস্ট সেলার" },
          attributes: [
            { label: { en: "Volume", bn: "পরিমাপ" }, value: { en: "30ml Glass Dropper", bn: "৩০ মিলি ড্রপার বোতল" } },
            { label: { en: "Skin Type", bn: "ত্বকের ধরন" }, value: { en: "All Skin Types, Sensitive", bn: "সকল ধরনের ত্বকের উপযোগী" } },
            { label: { en: "Key Ingredient", bn: "মূল উপাদান" }, value: { en: "10% Niacinamide + 2% Zinc", bn: "১০% নায়াসিনামাইড + ২% জিংক" } },
          ],
          highlight: {
            en: "Oil-free serum that refines skin texture and minimizes pores.",
            bn: "ত্বকের তেলতেলে ভাব দূর করে এবং মসৃণ উজ্জ্বলতা আনে।",
          },
        },
        {
          id: "b-prod-2",
          name: { en: "Velvet Barrier Ceramide Moisturizer", bn: "ভেলভেট ব্যারিয়ার সেরামাইড ময়েশ্চারাইজার" },
          category: { en: "Skincare Regimen", bn: "স্কিনকেয়ার রুটিন" },
          price: "৳1,950",
          originalPrice: "৳2,300",
          badge: { en: "Clean Formula", bn: "ক্লিন ফর্মুলা" },
          attributes: [
            { label: { en: "Volume", bn: "পরিমাপ" }, value: { en: "50ml Airless Jar", bn: "৫০ মিলি জার" } },
            { label: { en: "Texture", bn: "টেক্সচার" }, value: { en: "Rich Non-Greasy Cream", bn: "নন-গ্রিসি দ্রুত শোষণকারী ক্রিম" } },
            { label: { en: "Certification", bn: "পরীক্ষিত" }, value: { en: "Dermatologist Tested", bn: "ডার্মাটোলজিস্ট টেস্টেড" } },
          ],
          highlight: {
            en: "Fortifies the natural moisture barrier with 5 essential ceramides.",
            bn: "ত্বকের আর্দ্রতা ধরে রেখে শুষ্কতা রোধে অত্যন্ত কার্যকরী।",
          },
        },
        {
          id: "b-prod-3",
          name: { en: "Satin Matte Weightless Foundation", bn: "স্যাটিন ম্যাট লাইটওয়েট ফাউন্ডেশন" },
          category: { en: "Makeup & Complexion", bn: "মেকআপ ও কমপ্লেকশন" },
          price: "৳2,200",
          badge: { en: "4 Shades", bn: "৪টি শেড" },
          attributes: [
            { label: { en: "Available Shades", bn: "উপলব্ধ শেড" }, value: { en: "Porcelain 10, Warm Beige 20, Honey 30, Caramel 40", bn: "১০ পোরসেলিন, ২০ বেইজ, ৩০ হানি, ৪০ ক্যারামেল" } },
            { label: { en: "Coverage", bn: "কাভারেজ" }, value: { en: "Medium to Full Buildable", bn: "ন্যাচারাল মিডিয়াম কাভারেজ" } },
            { label: { en: "Finish", bn: "ফিনিশ" }, value: { en: "Satin Velvet 12hr Wear", bn: "১২ ঘণ্টা দীর্ঘস্থায়ী স্যাটিন ফিনিশ" } },
          ],
          highlight: {
            en: "Breathable foundation with color-matching pigments for South Asian skin tones.",
            bn: "দক্ষিণ এশীয় ত্বকের রঙের সাথে পুরোপুরি মানানসই শেড রেঞ্জ।",
          },
        },
        {
          id: "b-prod-4",
          name: { en: "Rosehip Botanical Gentle Cleansing Oil", bn: "রোজহিপ বোটানিক্যাল জেন্টল ক্লিনজিং অয়েল" },
          category: { en: "Skincare Regimen", bn: "স্কিনকেয়ার রুটিন" },
          price: "৳1,450",
          badge: { en: "Pure Clean", bn: "১০০% পিওর" },
          attributes: [
            { label: { en: "Volume", bn: "পরিমাপ" }, value: { en: "120ml Pump Bottle", bn: "১২০ মিলি পাম্প বোতল" } },
            { label: { en: "Ingredients", bn: "উপাদান" }, value: { en: "Cold-Pressed Rosehip, Jojoba", bn: "রোজহিপ ও জোজোবা অয়েল" } },
            { label: { en: "Usage", bn: "ব্যবহার" }, value: { en: "First Step Makeup Melt", bn: "মেকআপ তোলার প্রথম ধাপ" } },
          ],
          highlight: {
            en: "Melts waterproof mascara and sunscreen without stripping natural oils.",
            bn: "ত্বকের স্বাভাবিক আর্দ্রতা না কমিয়ে সহজে মেকআপ ও সানস্ক্রিন দূর করে।",
          },
        },
      ],
    },
    storefrontPreview: {
      eyebrow: {
        en: "STOREFRONT SHOWCASE",
        bn: "স্টোরফ্রন্ট প্রদর্শনী",
      },
      title: {
        en: "Lumina Botanicals — Beauty Theme Preview",
        bn: "লুমিনা বোটানিক্যালস — বিউটি থিম প্রিভিউ",
      },
      description: {
        en: "Experience an official live concept store built for beauty and skincare brands with soft aesthetics and shade selection swatches.",
        bn: "প্রসাধন ব্র্যান্ডের জন্য প্রস্তুত দৃষ্টিনন্দন ও পরিচ্ছন্ন থিম, যা ক্রেতাদের সহজে কেনাকাটায় উৎসাহ জোগায়।",
      },
      domain: "demo.luminabeauty.cartx.app",
      brandName: "LUMINA BOTANICALS",
      tagline: "Pure Botanical Skincare & Formulations",
      demoThemeId: "lumina-beauty",
      isLiveDemo: true,
      previewNotice: {
        en: "Live Demo Store Available",
        bn: "লাইভ ডেমো স্টোর সক্রিয় রয়েছে",
      },
      accentGradient: "from-rose-500/20 via-pink-400/10 to-transparent",
      highlights: [
        { en: "Soft pastel luxury brand styling", bn: "প্রিমিয়াম লাক্সারি নান্দনিক ডিজাইন" },
        { en: "Integrated volume and bottle size selection", bn: "পরিমাপ ও বোতলের সাইজ সহজে বাছাইয়ের ব্যবস্থা" },
        { en: "Seamless mobile checkout with bKash and cards", bn: "বিকাশ ও কার্ডের দ্রুত চেকআউট" },
      ],
    },
    integrations: {
      eyebrow: {
        en: "LOCAL INTEGRATIONS",
        bn: "প্রয়োজনীয় ইন্টিগ্রেশন",
      },
      title: {
        en: "Recommended Connectors for Beauty Commerce",
        bn: "বিউটি কমার্সের জন্য প্রস্তাবিত কানেক্টর",
      },
      description: {
        en: "Payment and delivery integrations essential for beauty shoppers across Bangladesh.",
        bn: "দেশের প্রসাধন ক্রেতাদের জন্য প্রয়োজনীয় পেমেন্ট ও পার্সেল কুরিয়ার কানেক্টর।",
      },
      items: [
        {
          name: "bKash Merchant Checkout",
          category: { en: "Instant Mobile MFS", bn: "মোবাইল পেমেন্ট" },
          reason: {
            en: "Frictionless checkout on smartphones where 85%+ of beauty traffic originates.",
            bn: "স্মার্টফোনে বিউটি প্রোডাক্ট ব্রাউজ করা তরুণীদের সহজে কেনাকাটা সম্পন্ন করতে সহায়ক।",
          },
          icon: CreditCard,
          linkHref: "/integrations",
        },
        {
          name: "Pathao Courier",
          category: { en: "Express Delivery", bn: "এক্সপ্রেস ডেলিভারি" },
          reason: {
            en: "Fast home delivery with careful doorstep parcel handoff for cosmetics.",
            bn: "প্রসাধন সামগ্রী দ্রুত ও যত্নের সাথে কাস্টমারের দরজায় পৌঁছে দেওয়ার জন্য।",
          },
          icon: Truck,
          linkHref: "/integrations",
        },
        {
          name: "Steadfast Courier",
          category: { en: "Nationwide Cash on Delivery", bn: "সারাদেশে সিওডি কুরিয়ার" },
          reason: {
            en: "Enables dependable Cash on Delivery for beauty shoppers across all districts.",
            bn: "সারাদেশের জেলায় জেলায় ক্যাশ অন ডেলিভারিতে পার্সেল সরবরাহের সুবিধা।",
          },
          icon: Truck,
          linkHref: "/integrations",
        },
        {
          name: "Meta Pixel & CAPI",
          category: { en: "Instagram Ad Tracking", bn: "ইনস্টাগ্রাম বিজ্ঞাপন ট্র্যাকিং" },
          reason: {
            en: "Tracks purchases and views from Instagram beauty influencer and skincare campaigns.",
            bn: "ইনস্টাগ্রাম ও ফেসবুক পেজের প্রচারণার মাধ্যমে অর্ডারের সঠিক হিসাব সংরক্ষণ।",
          },
          icon: BarChart3,
          linkHref: "/integrations",
        },
      ],
    },
    subscriptionGuidance: {
      eyebrow: {
        en: "SUBSCRIPTION GUIDANCE",
        bn: "সাবস্ক্রিপশন গাইডলাইন",
      },
      title: {
        en: "Recommended Plans for Cosmetics Brands",
        bn: "বিউটি ব্র্যান্ডের জন্য উপযোগী প্ল্যানসমূহ",
      },
      description: {
        en: "Choose the right tier to match your cosmetic line, staff packing team, and monthly order scale.",
        bn: "পণ্যের সংখ্যা ও মাসিক অর্ডারের মাত্রা বিবেচনা করে আপনার ব্র্যান্ডের জন্য সেরা প্ল্যান বেছে নিন।",
      },
      disclaimer: {
        en: "All plans include high-speed cloud hosting, SSL certification, and unmetered traffic bandwidth.",
        bn: "সকল প্ল্যানে ফ্রি ক্লাউড হোস্টিং, এসএসএল নিরাপত্তা ও আনলিমিটেড ব্যান্ডউইথ অন্তর্ভুক্ত।",
      },
      plans: [
        {
          tier: "starter",
          name: { en: "Starter Plan", bn: "স্টার্টার প্ল্যান" },
          summary: {
            en: "Ideal for boutique handmade soap makers and artisan natural oil producers launching their first catalog.",
            bn: "হাতে তৈরি অর্গানিক সাবান বা প্রাকৃতিক তেলের মতো পণ্য দিয়ে শুরু করা ছোট ব্র্যান্ডের জন্য।",
          },
          reasons: [
            { en: "Up to 100 products with shade swatches", bn: "১০০টি পণ্য পর্যন্ত ক্যাটালগ সীমা" },
            { en: "1 staff admin account", bn: "১টি স্টাফ অ্যাকাউন্ট" },
            { en: "Local bKash, Nagad, and COD checkout", bn: "বিকাশ, নগদ ও সিওডি পেমেন্ট ব্যবস্থা" },
          ],
        },
        {
          tier: "growth",
          name: { en: "Growth Plan", bn: "গ্রোথ প্ল্যান" },
          badge: { en: "Recommended for Beauty Labels", bn: "বিউটি ব্র্যান্ডের সেরা পছন্দ" },
          isRecommended: true,
          summary: {
            en: "The definitive choice for skincare and cosmetics brands managing multiple formulas, shade variants, and regular promotions.",
            bn: "একাধিক শেড, বিভিন্ন স্কিনকেয়ার রুটিন ও নিয়মিত প্রচারণাকারী ব্র্যান্ডের জন্য সেরা সমাধান।",
          },
          reasons: [
            { en: "Up to 2,500 products across all beauty categories", bn: "২,৫০০টি পণ্য পর্যন্ত ক্যাটালগ সীমা" },
            { en: "5 staff accounts for customer support and packing", bn: "৫টি স্টাফ অ্যাকাউন্ট" },
            { en: "Automated Pathao/Steadfast API courier dispatch", bn: "কুরিয়ার পার্সেল বুকিং এপিআই" },
            { en: "Custom domain connection included", bn: "কাস্টম ডোমেইন ব্যবহারের পূর্ণ সুবিধা" },
          ],
        },
        {
          tier: "scale",
          name: { en: "Scale Plan", bn: "স্কেল প্ল্যান" },
          summary: {
            en: "Built for nationwide cosmetics importers, multi-line beauty distributor houses, and large retail brands.",
            bn: "আমদানিকৃত বড় কসমেটিক্স ব্র্যান্ড ও দেশজুড়ে বিস্তৃত প্রসাধন রিটেইলারদের জন্য।",
          },
          reasons: [
            { en: "Unlimited products, shades, and staff accounts", bn: "আনলিমিটেড পণ্য, শেড ও স্টাফ অ্যাকাউন্ট" },
            { en: "Priority dedicated technical support and onboarding", bn: "অগ্রাধিকারভিত্তিক কারিগরি সহায়তা" },
            { en: "Custom white-label iOS and Android mobile app build", bn: "নিজস্ব ব্র্যান্ডেড মোবাইল শপিং অ্যাপ" },
          ],
        },
      ],
    },
    faqs: {
      eyebrow: {
        en: "FREQUENTLY ASKED QUESTIONS",
        bn: "সাধারণ জিজ্ঞাসা",
      },
      title: {
        en: "Beauty & Cosmetics Questions & Answers",
        bn: "কসমেটিক্স স্টোর সংক্রান্ত সাধারণ প্রশ্নোত্তর",
      },
      description: {
        en: "Factual information about managing shade variations, repeat customers, and beauty store promotions on CartX.",
        bn: "কার্টএক্সে প্রসাধন পণ্যের শেড, কাস্টমার হিস্ট্রি ও প্রমোশন পরিচালনা সম্পর্কিত স্পষ্ট উত্তর।",
      },
      items: [
        {
          id: "b-faq-1",
          question: {
            en: "Can I show color shade swatches on lipstick and foundation pages?",
            bn: "লিপস্টিক ও ফাউন্ডেশনের পেজে কি রঙের সোয়াচ দেখানো যাবে?",
          },
          answer: {
            en: "Yes. In CartX's product manager, you can define shade attributes with color codes and labels. When a customer clicks a shade swatch, the product gallery can switch to display that exact color on the storefront.",
            bn: "হ্যাঁ, প্রোডাক্ট ম্যানেজারে আপনি শেডের নাম ও রঙের সোয়াচ সেট করতে পারেন। ক্রেতা সোয়াচে ক্লিক করলেই সংশ্লিষ্ট রঙের ছবি দেখতে পাবেন।",
          },
        },
        {
          id: "b-faq-2",
          question: {
            en: "Can I track which customers purchase skincare products repeatedly?",
            bn: "কোন কোন ক্রেতা নিয়মিত প্রসাধন সামগ্রী কিনছেন তা কি দেখা যায়?",
          },
          answer: {
            en: "Yes. CartX stores complete order histories against customer profiles, allowing you to review order counts, total spent, and past product selections to understand repeat purchasing behavior.",
            bn: "হ্যাঁ, কার্টএক্সের কাস্টমার সেকশনে প্রতিটি ক্রেতার অতীত অর্ডার সংখ্যা, মোট কেনাকাটার পরিমাণ ও অর্ডারের তারিখ সংরক্ষিত থাকে।",
          },
        },
        {
          id: "b-faq-3",
          question: {
            en: "Can I create discount coupon codes for beauty promotional campaigns?",
            bn: "বিউটি প্রমোশনের জন্য কি বিশেষ কুপন কোড তৈরি করা যাবে?",
          },
          answer: {
            en: "Yes. You can create percentage or fixed taka discount coupons with minimum purchase thresholds (e.g., ৳200 off on orders above ৳1,500) and set campaign expiry dates.",
            bn: "হ্যাঁ, আপনি সর্বনিম্ন অর্ডারের শর্ত দিয়ে (যেমন ১,৫০০ টাকার অর্ডারে ২০০ টাকা ছাড়) নির্দিষ্ট সময়ের জন্য কুপন কোড চালু করতে পারবেন।",
          },
        },
        {
          id: "b-faq-4",
          question: {
            en: "Can I set custom shipping charges for Dhaka and outside Dhaka deliveries?",
            bn: "ঢাকা ও ঢাকার বাইরের জন্য কি আলাদা ডেলিভারি চার্জ নির্ধারণ করা সম্ভব?",
          },
          answer: {
            en: "Yes. You can configure flat shipping rates by delivery zone (e.g. ৳70 within Dhaka city and ৳130 for district shipping), which apply automatically at checkout based on the recipient address.",
            bn: "হ্যাঁ, ডেলিভারি সেটিংসে আপনি ঢাকা এবং ঢাকার বাইরের জেলাগুলোর জন্য আলাদা ডেলিভারি ফি সেট করতে পারেন, যা চেকআউটে স্বয়ংক্রিয়ভাবে যুক্ত হয়।",
          },
        },
      ],
    },
    cta: {
      heading: {
        en: "Ready to Build Your Beauty & Cosmetics Store?",
        bn: "আপনার কসমেটিক্স ও বিউটি ব্র্যান্ডের অনলাইন শপ তৈরিতে প্রস্তুত?",
      },
      description: {
        en: "Give your beauty label a radiant digital home with shade swatches, repeat customer insights, and smooth local checkout on CartX.",
        bn: "শেড সোয়াচ, সহজ বিকাশ চেকআউট ও নির্ভরযোগ্য কুরিয়ার সুবিধা নিয়ে আজই শুরু করুন আপনার বিউটি স্টোর।",
      },
      primaryCta: {
        en: "Start Your Store",
        bn: "আপনার স্টোর শুরু করুন",
      },
      secondaryCta: {
        en: "View Pricing Plans",
        bn: "প্রাইসিং প্ল্যান দেখুন",
      },
      guaranteePill: {
        en: "14-Day Free Trial • No Credit Card Required • Instant Setup",
        bn: "১৪ দিনের ফ্রি ট্রায়াল • ক্রেডিট কার্ডের প্রয়োজন নেই • তাৎক্ষণিক সেটআপ",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Grocery & Organic Food
  // ─────────────────────────────────────────────────────────────
  "grocery-organic-food": {
    slug: "grocery-organic-food",
    name: {
      en: "Grocery & Organic Food",
      bn: "মুদি ও অর্গানিক খাদ্য",
    },
    badge: {
      en: "Food Staples & Organic Commerce",
      bn: "খাদ্যপণ্য ও অর্গানিক গ্রোসারি",
    },
    icon: ShoppingBag,
    seo: {
      title: "Grocery & Organic Food E-commerce Solutions",
      description:
        "Manage fast-moving food stock, configure local delivery rates, and offer reliable Cash on Delivery with CartX's food retail tools.",
    },
    hero: {
      h1Plain: {
        en: "Fresh, Localized E-commerce for",
        bn: "তাজা ও নির্ভরযোগ্য অনলাইন শপ",
      },
      h1Highlight: {
        en: "Grocery & Organic Food.",
        bn: "মুদি ও অর্গানিক খাদ্যপণ্যের।",
      },
      description: {
        en: "Organize daily staples, manage real-time stock availability, and configure dependable Cash on Delivery and courier dispatch for food products.",
        bn: "নিত্যপ্রয়োজনীয় চাল, ডাল, খাঁটি মধু ও তেলের সুসংগঠিত ক্যাটালগ, লাইভ স্টক আপডেট এবং ক্যাশ অন ডেলিভারি সুবিধা এক প্ল্যাটফর্মে।",
      },
      primaryCta: {
        en: "Start Your Store",
        bn: "আপনার স্টোর শুরু করুন",
      },
      secondaryCta: {
        en: "View Order Operations",
        bn: "অর্ডার অপারেশন দেখুন",
      },
      secondaryHref: "/features/order-management",
      trustNote: {
        en: "Tailored for organic farm produce, honey sellers, spice traders, and neighborhood grocers",
        bn: "অর্গানিক খামারী, খাঁটি মধু ও মসলা বিক্রেতা এবং খাদ্যপণ্যের স্টোরের উপযোগী",
      },
      previewTagline: "PURE & NATURAL STAPLES",
      previewHeadline: "Farm Fresh Aromatic Rice & Honey",
      previewSubhead: "Unadulterated pantry essentials directly from sustainable growers.",
      previewBadges: ["Instant Stock Toggles", "Cash on Delivery", "Zone Shipping"],
    },
    challenges: {
      eyebrow: {
        en: "INDUSTRY CHALLENGES",
        bn: "শিল্পের বাস্তব সমস্যা",
      },
      title: {
        en: "Daily Realities of Selling Food Online",
        bn: "অনলাইনে খাদ্যপণ্য বিক্রির বাস্তব জটিলতাসমূহ",
      },
      description: {
        en: "Grocery operations require fast-turnover stock accuracy and flexible delivery pricing for varying package weights.",
        bn: "খাদ্যপণ্যের ক্ষেত্রে দ্রুত পরিবর্তনশীল স্টক এবং বিভিন্ন ওজনের পার্সেলের ডেলিভারি চার্জ সঠিকভাবে নির্ধারণ জরুরি।",
      },
      items: [
        {
          id: "g-ch-1",
          title: {
            en: "Fast-Moving Stock & Overselling Risks",
            bn: "দ্রুত স্টক পরিবর্তন ও ওভারসোল্ড হওয়ার ঝুঁকি",
          },
          description: {
            en: "Staples like mustard oil or seasonal honey sell out fast; delayed stock updates lead to customer disappointment and refunds.",
            bn: "খাঁটি মধু বা ঘির মতো আইটেম দ্রুত বিক্রি হয়ে যায়; সঠিক সময়ে স্টক আপডেট না করলে অতিরিক্ত অর্ডার পড়ার ঝুঁকি থাকে।",
          },
          icon: Boxes,
        },
        {
          id: "g-ch-2",
          title: {
            en: "Weight-Tiered Delivery Discrepancies",
            bn: "বিভিন্ন ওজনের পার্সেলের ডেলিভারি ফি",
          },
          description: {
            en: "Shipping a 10kg sack of rice costs significantly more in courier charges than delivering a small jar of saffron.",
            bn: "১০ কেজি চালের বস্তা পাঠানোর ডেলিভারি খরচ আর ছোট জাফরানের কৌটার খরচ এক নয়; সঠিক ডেলিভারি রেট সেট করা প্রয়োজন।",
          },
          icon: Truck,
        },
        {
          id: "g-ch-3",
          title: {
            en: "Customer Expectation for Cash on Delivery (COD)",
            bn: "ক্যাশ অন ডেলিভারিতে ক্রেতাদের আস্থা",
          },
          description: {
            en: "Over 70% of grocery orders in Bangladesh prefer Cash on Delivery upon physical inspection of food quality.",
            bn: "বাংলাদেশে খাদ্যপণ্যের ক্ষেত্রে অধিকাংশ ক্রেতা পণ্য হাতে পেয়ে টাকা পরিশোধ করতে স্বাচ্ছন্দ্য বোধ করেন।",
          },
          icon: CreditCard,
        },
        {
          id: "g-ch-4",
          title: {
            en: "Broad Multilevel Pantry Hierarchy",
            bn: "মুদি পণ্যের বিশাল ক্যাটাগরি ব্যবস্থাপনা",
          },
          description: {
            en: "Displaying hundreds of pantry items (rice, spices, tea, oils) without cluttered navigation or confusing categories.",
            bn: "চাল, তেল, ডাল, মসলা ইত্যাদির শত শত আইটেম পরিচ্ছন্নভাবে সাজিয়ে না রাখলে ক্রেতাদের কেনাকাটায় অসুবিধা হয়।",
          },
          icon: Layers,
        },
      ],
    },
    capabilities: {
      eyebrow: {
        en: "CARTX CAPABILITIES",
        bn: "কার্টএক্সের সক্ষমতা",
      },
      title: {
        en: "Verified Features Built for Food Retailers",
        bn: "খাদ্যপণ্য বিক্রেতাদের জন্য কার্যকর প্ল্যাটফর্ম সুবিধা",
      },
      description: {
        en: "Verified features in CartX designed for fast grocery inventory management, localized shipping, and swift order processing.",
        bn: "খাদ্যপণ্যের ইনভেন্টরি নিয়ন্ত্রণ, এলাকাভিত্তিক ডেলিভারি ও দ্রুত ইনভয়েস তৈরিতে কার্টএক্সের বিদ্যমান সুবিধা।",
      },
      items: [
        {
          id: "g-cap-1",
          title: {
            en: "Instant Stock Availability Toggles",
            bn: "তাৎক্ষণিক স্টক অন/অফ টগল",
          },
          description: {
            en: "Quickly mark items in or out of stock with a single click in your dashboard to avoid overselling fresh batches.",
            bn: "কোনো ব্যাচের মধু বা ঘি শেষ হলে ড্যাশবোর্ড থেকে তাৎক্ষণিকভাবে পণ্যটি সোল্ড-আউট মার্ক করার সহজ সুবিধা।",
          },
          featureSlug: "inventory-management",
          featureName: {
            en: "Inventory Control",
            bn: "ইনভেন্টরি নিয়ন্ত্রণ",
          },
          icon: Boxes,
        },
        {
          id: "g-cap-2",
          title: {
            en: "Reliable Cash on Delivery (COD) Workflow",
            bn: "বিশ্বস্ত ক্যাশ অন ডেলিভারি (সিওডি) সুবিধা",
          },
          description: {
            en: "Support seamless Cash on Delivery alongside digital bKash payments, with complete customer phone verification records.",
            bn: "বিকাশ ও নগদের পাশাপাশি সহজ ক্যাশ অন ডেলিভারি চেকআউট এবং কাস্টমার ফোন নম্বরের সঠিক সংরক্ষণ।",
          },
          featureSlug: "payment-management",
          featureName: {
            en: "Payment Gateways",
            bn: "পেমেন্ট গেটওয়ে",
          },
          icon: CreditCard,
        },
        {
          id: "g-cap-3",
          title: {
            en: "Zone-Based Courier Delivery Configuration",
            bn: "নির্দিষ্ট জোন ভিত্তিক ডেলিভারি রেট",
          },
          description: {
            en: "Configure distinct delivery fees for Dhaka city versus other divisions to match domestic courier charges.",
            bn: "ঢাকা এবং অন্যান্য বিভাগের জন্য আলাদা ডেলিভারি ফি সেট করার সুবিধা যা চেকআউটে স্বয়ংক্রিয়ভাবে যুক্ত হয়।",
          },
          featureSlug: "shipping",
          featureName: {
            en: "Shipping Operations",
            bn: "ডেলিভারি অপারেশন",
          },
          icon: Truck,
        },
        {
          id: "g-cap-4",
          title: {
            en: "One-Click Printable Invoices for Packing",
            bn: "প্যাকিংয়ের জন্য এক ক্লিকে প্রিন্টযোগ্য ইনভয়েস",
          },
          description: {
            en: "Generate clean packing slips and customer invoices with items, packaging weights, and delivery addresses clearly formatted.",
            bn: "পণ্য প্যাকিং ও ডেলিভারি ম্যানকে হস্তান্তরের জন্য এক ক্লিকে স্পষ্ট চালান প্রিন্ট করার ব্যবস্থা।",
          },
          featureSlug: "order-management",
          featureName: {
            en: "Order Management",
            bn: "অর্ডার ম্যানেজমেন্ট",
          },
          icon: ShoppingBag,
        },
      ],
    },
    storeStructure: {
      eyebrow: {
        en: "RECOMMENDED ARCHITECTURE",
        bn: "প্রস্তাবিত স্টোর কাঠামো",
      },
      title: {
        en: "Suggested Store Structure for Grocery & Food",
        bn: "মুদি ও খাদ্যপণ্যের জন্য আদর্শ ক্যাটাগরি বিন্যাস",
      },
      description: {
        en: "A pantry-oriented structure lets homemakers build their weekly grocery basket efficiently.",
        bn: "নিত্যপ্রয়োজনীয় পণ্যের সহজ বিভাগ ক্রেতাদের দ্রুত বাজারের তালিকা সম্পন্ন করতে সাহায্য করে।",
      },
      discoveryTip: {
        en: "Display pack sizes (e.g. 1kg, 5kg, 500ml) prominently so shoppers know exact quantities immediately.",
        bn: "পণ্যের শিরোনাম ও অপশনে ১ কেজি, ৫ কেজি বা ৫০০ মিলির মতো পরিমাপ স্পষ্টভাবে উল্লেখ রাখুন।",
      },
      categories: [
        {
          name: { en: "Aromatic Rice & Grains", bn: "সুগন্ধি চাল ও খাদ্যশস্য" },
          subcategories: [
            { en: "Chinigura & Kalijira Rice", bn: "চিনিগুড়া ও কালিজিরা চাল" },
            { en: "Brown & Organic Rice", bn: "লাল চাল ও বাসমতী" },
            { en: "Whole Wheat Atta & Flour", bn: "লাল আটা ও ময়দা" },
          ],
          description: {
            en: "Staple grains categorized by origin, grain length, and pack weight.",
            bn: "দিনাজপুরের চিনিগুড়া, পুষ্টিকর লাল চাল ও হাতে ভাঙা আটার তালিকা।",
          },
        },
        {
          name: { en: "Pure Oils & Bilona Ghee", bn: "খাঁটি তেল ও ঘি" },
          subcategories: [
            { en: "Cold-Pressed Mustard Oil", bn: "ঘানির সরিষার তেল" },
            { en: "Grass-Fed Cow Ghee", bn: "খাঁটি গাওয়া ঘি" },
            { en: "Extra Virgin Olive Oil", bn: "অলিভ অয়েল" },
          ],
          description: {
            en: "Cold-pressed and traditional oils packaged in sealed glass and food-grade bottles.",
            bn: "কাঠের ঘানির খাঁটি সরিষার তেল এবং গ্রামের গাভীর দুধের খাঁটি ঘি।",
          },
        },
        {
          name: { en: "Natural Honey & Spices", bn: "খাঁটি মধু ও অর্গানিক মসলা" },
          subcategories: [
            { en: "Sundarbans Wild Honey", bn: "সুন্দরবনের প্রাকৃতিক মধু" },
            { en: "Mustard Flower Honey", bn: "সরিষা ফুলের মধু" },
            { en: "Pure Turmeric & Chili Powder", bn: "খাঁটি হলুদ ও মরিচের গুঁড়া" },
          ],
          description: {
            en: "100% pure raw honeys and hand-ground cooking spices.",
            bn: "সংরক্ষণকারী উপাদানমুক্ত খাঁটি মধু এবং নির্ভেজাল রান্নার মসলা।",
          },
        },
        {
          name: { en: "Dry Fruits & Healthy Seeds", bn: "ড্রাই ফ্রুটস ও সুপার সিডস" },
          subcategories: [
            { en: "California Almonds & Walnuts", bn: "আমন্ড কাঠবাদাম ও আখরোট" },
            { en: "Organic Chia & Flax Seeds", bn: "চিয়া সিডস ও তিসি" },
            { en: "Premium Medjool Dates", bn: "মরিয়ম ও মেদজুল খেজুর" },
          ],
          description: {
            en: "Nutrient-rich snacks in vacuum-sealed zip pouches.",
            bn: "স্বাস্থ্যকর বাদাম, ড্রাই ফ্রুটস এবং খাঁটি অর্গানিক সিডস।",
          },
        },
      ],
    },
    catalog: {
      eyebrow: {
        en: "SAMPLE CATALOGUE",
        bn: "নমুনা ক্যাটালগ",
      },
      title: {
        en: "Illustrative Food Products & Unit Attributes",
        bn: "নমুনা খাদ্যপণ্য ও পরিমাপ মডেল",
      },
      description: {
        en: "Sample grocery and food products demonstrating unit packaging weights, source tags, and delivery indicators in CartX.",
        bn: "খাদ্যপণ্যের পরিমাপ, ওজন এবং প্যাকেজিং উপস্থাপনার নমুনা ডেটা।",
      },
      products: [
        {
          id: "g-prod-1",
          name: { en: "Premium Chinigura Aromatic Rice", bn: "প্রিমিয়াম চিনিগুড়া সুগন্ধি চাল" },
          category: { en: "Aromatic Rice & Grains", bn: "সুগন্ধি চাল ও খাদ্যশস্য" },
          price: "৳180 / kg",
          badge: { en: "Dinajpur Origin", bn: "দিনাজপুরের চাল" },
          attributes: [
            { label: { en: "Pack Sizes", bn: "প্যাক সাইজ" }, value: { en: "1kg, 5kg Poly Pack", bn: "১ কেজি, ৫ কেজি পলি প্যাক" } },
            { label: { en: "Origin", bn: "উৎস" }, value: { en: "Dinajpur, Bangladesh", bn: "দিনাজপুর, বাংলাদেশ" } },
            { label: { en: "Grain", bn: "দানা" }, value: { en: "Aged Small Grain, Highly Aromatic", bn: "পুরোনো সুগন্ধি দানা" } },
          ],
          highlight: {
            en: "Naturally aged fragrant rice ideal for biryani and celebratory polao.",
            bn: "পোলাও ও বিরিয়ানির জন্য খাঁটি সুবাসিত ঐতিহ্যবাহী চাল।",
          },
        },
        {
          id: "g-prod-2",
          name: { en: "Wood-Pressed Pure Mustard Oil", bn: "কাঠের ঘানির খাঁটি সরিষার তেল" },
          category: { en: "Pure Oils & Bilona Ghee", bn: "খাঁটি তেল ও ঘি" },
          price: "৳450",
          originalPrice: "৳490",
          badge: { en: "Cold Pressed", bn: "ঘানির তেল" },
          attributes: [
            { label: { en: "Bottle Sizes", bn: "বোতলের পরিমাপ" }, value: { en: "500ml, 1 Liter Glass Bottle", bn: "৫০০ মিলি, ১ লিটার কাঁচের বোতল" } },
            { label: { en: "Purity", bn: "বিশুদ্ধতা" }, value: { en: "100% Unrefined Mustard Seed", bn: "১০০% নির্ভেজাল সরিষা বীজ" } },
            { label: { en: "Aroma", bn: "ঝাঁঝ" }, value: { en: "Authentic Strong Pungency", bn: "তীক্ষ্ণ আসল ঝাঁঝ" } },
          ],
          highlight: {
            en: "Traditionally cold-pressed to retain natural pungency, nutrients, and aroma.",
            bn: "রান্না ও ভেষজ ব্যবহারে খাঁটি ঝাঁঝালো প্রাকৃতিক সরিষার তেল।",
          },
        },
        {
          id: "g-prod-3",
          name: { en: "Raw Sundarbans Wild Honey", bn: "সুন্দরবনের প্রাকৃতিক খাঁটি মধু" },
          category: { en: "Natural Honey & Spices", bn: "খাঁটি মধু ও অর্গানিক মসলা" },
          price: "৳850",
          originalPrice: "৳950",
          badge: { en: "100% Raw", bn: "খাঁটি মধু" },
          attributes: [
            { label: { en: "Net Weight", bn: "ওজন" }, value: { en: "500gm Sealed Glass Jar", bn: "৫০০ গ্রাম কাঁচের জার" } },
            { label: { en: "Harvest", bn: "সংগ্রহ" }, value: { en: "Sundarbans Deep Mangrove Forest", bn: "সুন্দরবনের গভীর ম্যানগ্রোভ" } },
            { label: { en: "Processing", bn: "প্রক্রিয়াজাতকরণ" }, value: { en: "Unheated, Unpasteurized", bn: "অক্রিয়াজাত ও কাঁচা মধু" } },
          ],
          highlight: {
            en: "Collected directly by traditional honey collectors from wild mangrove hives.",
            bn: "সুন্দরবনের প্রাকৃতিক মৌচাক থেকে সরাসরি সংগৃহীত নির্ভেজাল মধু।",
          },
        },
        {
          id: "g-prod-4",
          name: { en: "Premium California Whole Almonds", bn: "প্রিমিয়াম ক্যালিফোর্নিয়া কাঠবাদাম" },
          category: { en: "Dry Fruits & Healthy Seeds", bn: "ড্রাই ফ্রুটস ও সুপার সিডস" },
          price: "৳720",
          badge: { en: "Hand-Picked", bn: "বাছাইকৃত" },
          attributes: [
            { label: { en: "Pack Weight", bn: "প্যাক ওজন" }, value: { en: "250gm, 500gm Zip Pouch", bn: "২৫০ গ্রাম, ৫০০ গ্রাম জিপ পাউচ" } },
            { label: { en: "Grade", bn: "গ্রেড" }, value: { en: "Jumbo Grade Nonpareil", bn: "প্রিমিয়াম জাম্বো গ্রেড" } },
            { label: { en: "Packaging", bn: "প্যাকেজিং" }, value: { en: "Nitrogen Flushed for Freshness", bn: "বায়ুরোধী ক্রাঞ্চি প্যাকেজিং" } },
          ],
          highlight: {
            en: "Crunchy, nutrient-rich whole nuts packed with natural proteins and vitamin E.",
            bn: "মচমচে ও পুষ্টিকর সুপারফুড স্ন্যাক্স।",
          },
        },
      ],
    },
    storefrontPreview: {
      eyebrow: {
        en: "STOREFRONT SHOWCASE",
        bn: "স্টোরফ্রন্ট প্রদর্শনী",
      },
      title: {
        en: "Pantry Fresh — Grocery Storefront Preview",
        bn: "প্যান্ট্রি ফ্রেশ — মুদি ও খাদ্যপণ্য থিম প্রিভিউ",
      },
      description: {
        en: "Illustrative grocery store preview displaying clean food category badges, package weight selectors, and localized delivery information.",
        bn: "মুদি ও অর্গানিক খাদ্যপণ্যের জন্য তৈরি পরিচ্ছন্ন কনসেপ্ট স্টোরফ্রন্ট, যা দ্রুত অর্ডার করতে সাহায্য করে।",
      },
      domain: "demo.pantryfresh.cartx.app",
      brandName: "PANTRY FRESH",
      tagline: "Natural Food Staples & Organic Groceries",
      isLiveDemo: false,
      previewNotice: {
        en: "Illustrative Concept Preview",
        bn: "নমুনা কনসেপ্ট প্রিভিউ",
      },
      accentGradient: "from-emerald-500/15 via-teal-400/10 to-transparent",
      highlights: [
        { en: "Weight and packaging volume selectors", bn: "ওজন ও প্যাকেজিং পরিমাপ সিলেক্টর" },
        { en: "Instant in-stock availability indicator", bn: "লাইভ স্টক উপলব্ধতা নির্দেশক" },
        { en: "Cash on Delivery and bKash checkout pills", bn: "সিওডি ও বিকাশ চেকআউট ব্যাজ" },
      ],
    },
    integrations: {
      eyebrow: {
        en: "LOCAL INTEGRATIONS",
        bn: "প্রয়োজনীয় ইন্টিগ্রেশন",
      },
      title: {
        en: "Recommended Connectors for Food Merchants",
        bn: "খাদ্যপণ্য বিক্রেতাদের জন্য প্রস্তাবিত কানেক্টর",
      },
      description: {
        en: "Verified local payment options and courier integrations tailored for grocery deliveries.",
        bn: "নিত্যপ্রয়োজনীয় খাদ্যপণ্যের জন্য কার্যকর পেমেন্ট ও ডেলিভারি কানেক্টর।",
      },
      items: [
        {
          name: "Cash on Delivery (COD)",
          category: { en: "Domestic Settlement", bn: "ক্যাশ অন ডেলিভারি" },
          reason: {
            en: "Essential for grocery shoppers who prefer paying upon inspecting fresh parcels.",
            bn: "খাদ্যপণ্য হাতে পেয়ে টাকা দিতে আগ্রহী সাধারণ ক্রেতাদের জন্য অপরিহার্য।",
          },
          icon: CreditCard,
          linkHref: "/integrations",
        },
        {
          name: "bKash Merchant API",
          category: { en: "Instant Mobile MFS", bn: "মোবাইল পেমেন্ট" },
          reason: {
            en: "Frictionless digital payment directly from the bKash mobile application.",
            bn: "স্মার্টফোন থেকে দ্রুত পেমেন্ট সম্পন্ন করতে সহায়ক।",
          },
          icon: CreditCard,
          linkHref: "/integrations",
        },
        {
          name: "Pathao Courier",
          category: { en: "City Parcel Logistics", bn: "শহুরে কুরিয়ার ডেলিভারি" },
          reason: {
            en: "Rapid pickup and door-to-door delivery within metropolitan zones.",
            bn: "শহরের ভেতরে দ্রুত পার্সেল ডেলিভারি ও রিয়েল-টাইম ট্র্যাকিং।",
          },
          icon: Truck,
          linkHref: "/integrations",
        },
        {
          name: "Steadfast Courier",
          category: { en: "Nationwide Parcel Shipping", bn: "সারাদেশে পার্সেল সরবরাহ" },
          reason: {
            en: "Dependable nationwide delivery for honey, ghee, and sealed non-perishable pantry goods.",
            bn: "মধু, ঘি ও মসলা জাতীয় পণ্য সারাদেশে ক্যাশ অন ডেলিভারিতে পাঠাতে কার্যকর।",
          },
          icon: Truck,
          linkHref: "/integrations",
        },
      ],
    },
    subscriptionGuidance: {
      eyebrow: {
        en: "SUBSCRIPTION GUIDANCE",
        bn: "সাবস্ক্রিপশন গাইডলাইন",
      },
      title: {
        en: "Recommended Plans for Grocery Stores",
        bn: "মুদি ও খাদ্য শপের জন্য উপযোগী প্ল্যানসমূহ",
      },
      description: {
        en: "Select a plan that accommodates your daily order volume and the diversity of your pantry catalog.",
        bn: "আপনার ক্যাটালগের পণ্যের সংখ্যা ও দৈনন্দিন অর্ডারের পরিমাণ বিবেচনা করে সঠিক প্ল্যান বেছে নিন।",
      },
      disclaimer: {
        en: "All plans include web storefront hosting, SSL encryption, and unmetered customer traffic.",
        bn: "সকল প্ল্যানে ফ্রি ক্লাউড হোস্টিং, এসএসএল নিরাপত্তা ও আনলিমিটেড ব্যান্ডউইথ অন্তর্ভুক্ত।",
      },
      plans: [
        {
          tier: "starter",
          name: { en: "Starter Plan", bn: "স্টার্টার প্ল্যান" },
          summary: {
            en: "Ideal for specialized organic farm producers selling a curated selection of honey, ghee, or tea.",
            bn: "শুধুমাত্র খাঁটি মধু, ঘি বা চায়ের মতো কিছু নির্দিষ্ট পণ্য নিয়ে শুরু করা ক্ষুদ্র খামারীদের জন্য।",
          },
          reasons: [
            { en: "Up to 100 products with packaging variants", bn: "১০০টি পণ্য পর্যন্ত ক্যাটালগ সীমা" },
            { en: "1 staff admin account", bn: "১টি স্টাফ অ্যাকাউন্ট" },
            { en: "Full COD and bKash payment support", bn: "সিওডি ও বিকাশ পেমেন্ট সুবিধা" },
          ],
        },
        {
          tier: "growth",
          name: { en: "Growth Plan", bn: "গ্রোথ প্ল্যান" },
          badge: { en: "Recommended for Grocery Stores", bn: "মুদি শপের জন্য সেরা পছন্দ" },
          isRecommended: true,
          summary: {
            en: "The standard choice for full-line organic grocery stores and community supermarkets managing broad inventories.",
            bn: "চাল, ডাল, তেল, মসলা সহ শত শত মুদি সামগ্রী পরিচালনাকারী সুপারশপের জন্য সেরা সমাধান।",
          },
          reasons: [
            { en: "Up to 2,500 products across all grocery categories", bn: "২,৫০০টি পণ্য পর্যন্ত ক্যাটালগ সীমা" },
            { en: "5 staff accounts for inventory, packaging, and dispatch", bn: "৫টি স্টাফ অ্যাকাউন্ট" },
            { en: "Automated Pathao/Steadfast courier booking API", bn: "কুরিয়ার এপিআই ইন্টিগ্রেশন" },
            { en: "Custom domain connection included", bn: "কাস্টম ডোমেইন ব্যবহারের পূর্ণ সুবিধা" },
          ],
        },
        {
          tier: "scale",
          name: { en: "Scale Plan", bn: "স্কেল প্ল্যান" },
          summary: {
            en: "Engineered for regional food distributor houses and multi-warehouse supermarket chains.",
            bn: "সারাদেশে বিস্তৃত খাদ্যপণ্য পরিবেশক ও বড় সুপারমার্কেট চেইনের জন্য।",
          },
          reasons: [
            { en: "Unlimited products, categories, and staff accounts", bn: "আনলিমিটেড পণ্য ও স্টাফ অ্যাকাউন্ট" },
            { en: "Priority dedicated technical support and onboarding", bn: "অগ্রাধিকারভিত্তিক কারিগরি সহায়তা" },
            { en: "Custom white-label iOS and Android grocery app build", bn: "নিজস্ব ব্র্যান্ডেড মোবাইল শপিং অ্যাপ" },
          ],
        },
      ],
    },
    faqs: {
      eyebrow: {
        en: "FREQUENTLY ASKED QUESTIONS",
        bn: "সাধারণ জিজ্ঞাসা",
      },
      title: {
        en: "Grocery & Food Questions & Answers",
        bn: "খাদ্যপণ্য স্টোর সংক্রান্ত সাধারণ প্রশ্নোত্তর",
      },
      description: {
        en: "Key facts about stock availability, delivery pricing, and Cash on Delivery for food products on CartX.",
        bn: "কার্টএক্সে খাদ্যপণ্যের ইনভেন্টরি, ডেলিভারি ও পেমেন্ট সংক্রান্ত গুরুত্বপূর্ণ প্রশ্নের উত্তর।",
      },
      items: [
        {
          id: "g-faq-1",
          question: {
            en: "Can I quickly toggle items out of stock when a food batch runs out?",
            bn: "কোনো পণ্য শেষ হয়ে গেলে কি দ্রুত স্টক বন্ধ করা যায়?",
          },
          answer: {
            en: "Yes. From your CartX dashboard, you can toggle any product's availability status off in one second, immediately reflecting as 'Out of Stock' on your storefront to prevent customer ordering.",
            bn: "হ্যাঁ, ড্যাশবোর্ড থেকে মাত্র এক সেকেন্ডে যেকোনো পণ্যের অ্যাভেইলেবিলিটি অফ করে দেওয়া যায়, ফলে ক্রেতারা আর সেটি অর্ডার করতে পারবেন না।",
          },
        },
        {
          id: "g-faq-2",
          question: {
            en: "Does CartX support Cash on Delivery for grocery parcels?",
            bn: "খাদ্যপণ্যের ক্ষেত্রে কি ক্যাশ অন ডেলিভারি (সিওডি) সাপোর্ট রয়েছে?",
          },
          answer: {
            en: "Yes. Cash on Delivery is natively supported alongside digital payment options, allowing shoppers to pay upon receipt of their food packages.",
            bn: "হ্যাঁ, ডিজিটাল পেমেন্টের পাশাপাশি ক্যাশ অন ডেলিভারি সম্পূর্ণভাবে সমর্থিত, যা সাধারণ খাদ্যপণ্য ক্রেতাদের কেনাকাটায় স্বস্তি দেয়।",
          },
        },
        {
          id: "g-faq-3",
          question: {
            en: "Can I set different shipping fees for Dhaka inside and outside?",
            bn: "ঢাকা এবং ঢাকার বাইরে কি আলাদা ডেলিভারি ফি নির্ধারণ করা সম্ভব?",
          },
          answer: {
            en: "Yes. You can configure regional delivery rates (e.g. ৳70 within Dhaka city and ৳140 for out-of-city districts) which automatically apply during checkout based on the customer's selected district.",
            bn: "হ্যাঁ, আপনি ডেলিভারি সেটিংসে ঢাকা ও ঢাকার বাইরের জেলাগুলোর জন্য আলাদা ডেলিভারি চার্জ নির্ধারণ করতে পারেন যা চেকআউটে স্বয়ংক্রিয়ভাবে যুক্ত হয়।",
          },
        },
        {
          id: "g-faq-4",
          question: {
            en: "Can I print packing invoices for preparing food orders?",
            bn: "অর্ডার প্যাকিং করার জন্য কি প্রিন্টযোগ্য ইনভয়েস পাওয়া যায়?",
          },
          answer: {
            en: "Yes. Every confirmed order includes a one-click printable invoice detailing ordered items, quantities, customer phone numbers, delivery addresses, and payment status for packing staff.",
            bn: "হ্যাঁ, প্রতিটি অর্ডারের বিপরীতে এক ক্লিকে প্রিন্টযোগ্য ইনভয়েস পাওয়া যায় যেখানে পণ্যের নাম, পরিমাণ, ঠিকানা ও পেমেন্ট স্ট্যাটাস সুস্পষ্টভাবে থাকে।",
          },
        },
      ],
    },
    cta: {
      heading: {
        en: "Ready to Build Your Grocery & Food Store?",
        bn: "আপনার মুদি ও অর্গানিক খাদ্যপণ্যের অনলাইন শপ তৈরিতে প্রস্তুত?",
      },
      description: {
        en: "Provide your customers with fresh daily staples, transparent stock counts, and dependable home delivery on CartX.",
        bn: "লাইভ স্টক আপডেট, ক্যাশ অন ডেলিভারি ও দ্রুত কুরিয়ার বুকিং সুবিধা নিয়ে আজই শুরু করুন আপনার অনলাইন গ্রোসারি শপ।",
      },
      primaryCta: {
        en: "Start Your Store",
        bn: "আপনার স্টোর শুরু করুন",
      },
      secondaryCta: {
        en: "View Pricing Plans",
        bn: "প্রাইসিং প্ল্যান দেখুন",
      },
      guaranteePill: {
        en: "14-Day Free Trial • No Credit Card Required • Instant Setup",
        bn: "১৪ দিনের ফ্রি ট্রায়াল • ক্রেডিট কার্ডের প্রয়োজন নেই • তাৎক্ষণিক সেটআপ",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Home & Lifestyle
  // ─────────────────────────────────────────────────────────────
  "home-lifestyle": {
    slug: "home-lifestyle",
    name: {
      en: "Home & Lifestyle",
      bn: "হোম ও লাইফস্টাইল",
    },
    badge: {
      en: "Home Decor & Furnishing",
      bn: "হোম ডেকর ও ফার্নিচার",
    },
    icon: Home,
    seo: {
      title: "Home & Lifestyle E-commerce Solutions",
      description:
        "Showcase multi-angle furniture galleries, manage dimension and finish variants, and configure weight-tiered shipping with CartX.",
    },
    hero: {
      h1Plain: {
        en: "Showcase Craftsmanship in",
        bn: "নান্দনিকভাবে উপস্থাপন করুন আপনার",
      },
      h1Highlight: {
        en: "Home Decor & Living.",
        bn: "হোম ডেকর ও ফার্নিচার কালেকশন।",
      },
      description: {
        en: "Present high-resolution lifestyle galleries, configure furniture dimensions and wood finishes, and manage tiered parcel delivery with ease.",
        bn: "মাল্টি-অ্যাঙ্গেল ছবি, আকার ও কাঠের ফিনিশিং ভ্যারিয়েন্ট এবং ওজনভিত্তিক কুরিয়ার চার্জ সহ হোম ডেকর ও লাইফস্টাইল পণ্যের আধুনিক স্টোর।",
      },
      primaryCta: {
        en: "Start Your Store",
        bn: "আপনার স্টোর শুরু করুন",
      },
      secondaryCta: {
        en: "View Storefront Builder",
        bn: "স্টোর বিল্ডার দেখুন",
      },
      secondaryHref: "/features/store-builder",
      trustNote: {
        en: "Built for furniture workshops, ceramic artists, kitchenware merchants, and home decor studios",
        bn: "ফার্নিচার প্রস্তুতকারক, সিরামিক ও হোম ডেকর স্টুডিওর জন্য উপযোগী",
      },
      previewTagline: "TIMELESS SOLID TEAK",
      previewHeadline: "Minimalist Living & Studio Ceramics",
      previewSubhead: "Architectural home accents handcrafted for conscious spaces.",
      previewBadges: ["Multi-Angle Galleries", "Dimension Parameters", "Tiered Shipping"],
    },
    challenges: {
      eyebrow: {
        en: "INDUSTRY CHALLENGES",
        bn: "শিল্পের বাস্তব সমস্যা",
      },
      title: {
        en: "Common Hurdles in Home Decor Commerce",
        bn: "হোম ডেকর ও ফার্নিচার বিক্রির প্রধান চ্যালেঞ্জসমূহ",
      },
      description: {
        en: "Home items demand exact spatial clarity, heavy parcel logistics handling, and rich aesthetic presentations.",
        bn: "ফার্নিচার ও ডেকর পণ্যের সঠিক মাপ, ওজনভিত্তিক ডেলিভারি এবং উচ্চমানের ছবি প্রদর্শন অত্যন্ত গুরুত্বপূর্ণ।",
      },
      items: [
        {
          id: "h-ch-1",
          title: {
            en: "Dimension & Space Misunderstandings",
            bn: "আকার ও স্পেস সংক্রান্ত ভুল বোঝাবুঝি",
          },
          description: {
            en: "Shoppers struggle to visualize if a coffee table or rug will fit their room without explicit dimension parameters.",
            bn: "পণ্যের সঠিক দৈর্ঘ্য, প্রস্থ ও উচ্চতার বিবরণ না থাকলে ক্রেতার ঘরে পণ্যটি ঠিকমতো ফিট না হওয়ার ঝুঁকি তৈরি হয়।",
          },
          icon: Sliders,
        },
        {
          id: "h-ch-2",
          title: {
            en: "Heavy & Fragile Shipping Complexity",
            bn: "ভারী ও ভঙ্গুর পার্সেলের কুরিয়ার খরচ",
          },
          description: {
            en: "Solid wood furniture and ceramic vases require higher courier rates than lightweight apparel parcels.",
            bn: "সিরামিক ফুলদানি বা কাঠের ভারী সামগ্রী পাঠাতে কুরিয়ারের আলাদা চার্জ ও সতর্ক হ্যান্ডলিং প্রয়োজন।",
          },
          icon: Truck,
        },
        {
          id: "h-ch-3",
          title: {
            en: "Material & Finish Swatch Requirements",
            bn: "উপাদান ও কাঠের ফিনিশের বৈচিত্র্য",
          },
          description: {
            en: "Showing natural teak versus walnut wood stains, or linen versus velvet upholstery textures.",
            bn: "একই সোফায় ফেব্রিকের ভিন্নতা বা টেবিলে রঙের ফিনিশ পরিষ্কারভাবে দেখানো জরুরি।",
          },
          icon: Package,
        },
        {
          id: "h-ch-4",
          title: {
            en: "Need for Inspiring Room Setups",
            bn: "রুম ভিত্তিক অনুপ্রেরণাদায়ী উপস্থাপনা",
          },
          description: {
            en: "Home products convert far better when styled together in full room settings rather than isolated white-background shots.",
            bn: "শুধুমাত্র সাদা ব্যাকগ্রাউন্ডের ছবির চেয়ে পুরো লিভিং রুম বা ডাইনিংয়ে পণ্যটি কেমন দেখাবে তা প্রদর্শন জরুরি।",
          },
          icon: Home,
        },
      ],
    },
    capabilities: {
      eyebrow: {
        en: "CARTX CAPABILITIES",
        bn: "কার্টএক্সের সক্ষমতা",
      },
      title: {
        en: "Verified Features Built for Home Retailers",
        bn: "হোম ডেকর ব্যবসায়ীদের জন্য প্রস্তুত প্ল্যাটফর্ম সুবিধা",
      },
      description: {
        en: "Verified features in CartX to display craftsmanship, handle tiered shipping, and present rich visual galleries.",
        bn: "হোম ডেকর ও ফার্নিচারের নান্দনিক উপস্থাপন ও ডেলিভারি নিয়ন্ত্রণে কার্টএক্সের বিদ্যমান সুবিধাসমূহ।",
      },
      items: [
        {
          id: "h-cap-1",
          title: {
            en: "Large-Format Multi-Angle Photo Galleries",
            bn: "মাল্টি-অ্যাঙ্গেল হাই-রেজোলিউশন ফটো গ্যালারি",
          },
          description: {
            en: "Upload multiple high-resolution photos showcasing side profiles, joinery details, and room-styled contexts.",
            bn: "ফার্নিচারের সূক্ষ্ম ফিনিশিং ও বিভিন্ন অ্যাঙ্গেলের স্পষ্ট ছবি প্রদর্শনের চমৎকার ব্যবস্থা।",
          },
          featureSlug: "store-builder",
          featureName: {
            en: "Storefront Customization",
            bn: "স্টোরফ্রন্ট কাস্টমাইজেশন",
          },
          icon: Store,
        },
        {
          id: "h-cap-2",
          title: {
            en: "Structured Dimensions & Finish Attributes",
            bn: "পরিমাপ, ম্যাটেরিয়াল ও ফিনিশ স্পেসিফিকেশন",
          },
          description: {
            en: "Define dimensions (Length, Width, Height), timber species, and finish options with per-variant pricing.",
            bn: "দৈর্ঘ্য, প্রস্থ, উচ্চতা এবং কাঠের ফিনিশিং অনুযায়ী আলাদা অপশন ও মূল্য নির্ধারণ।",
          },
          featureSlug: "product-management",
          featureName: {
            en: "Product Attributes",
            bn: "প্রোডাক্ট অ্যাট্রিবিউটস",
          },
          icon: Package,
        },
        {
          id: "h-cap-3",
          title: {
            en: "Weight-Tiered Shipping Configurations",
            bn: "ওজন ও পার্সেল সাইজ ভিত্তিক ডেলিভারি রেট",
          },
          description: {
            en: "Set specific delivery fees reflecting heavier parcel weight to protect your merchant profit margins.",
            bn: "ভারী ফার্নিচার বা ডেকর পণ্যের জন্য সঠিক কুরিয়ার ডেলিভারি চার্জ নির্ধারণ।",
          },
          featureSlug: "shipping",
          featureName: {
            en: "Shipping Configuration",
            bn: "ডেলিভারি কনফিগারেশন",
          },
          icon: Truck,
        },
        {
          id: "h-cap-4",
          title: {
            en: "Advance Deposit & COD Settlement",
            bn: "অগ্রিম ডিপোজিট ও নিরাপদ চেকআউট",
          },
          description: {
            en: "Secure advance booking payments via bKash, Nagad, and cards with verified transaction records.",
            bn: "ফার্নিচারের মতো অর্ডারের ক্ষেত্রে বিকাশ বা কার্ডে অগ্রিম পেমেন্ট সংগ্রহের নির্ভরযোগ্য ব্যবস্থা।",
          },
          featureSlug: "payment-management",
          featureName: {
            en: "Payment Gateways",
            bn: "পেমেন্ট গেটওয়ে",
          },
          icon: CreditCard,
        },
      ],
    },
    storeStructure: {
      eyebrow: {
        en: "RECOMMENDED ARCHITECTURE",
        bn: "প্রস্তাবিত স্টোর কাঠামো",
      },
      title: {
        en: "Suggested Store Structure for Home Decor",
        bn: "হোম ডেকর শপের জন্য আদর্শ ক্যাটাগরি বিন্যাস",
      },
      description: {
        en: "A room-first structure lets homeowners and interior designers furnish full spaces intuitively.",
        bn: "ঘরের বিভিন্ন রুম অনুযায়ী ক্যাটাগরি সাজালে গৃহসজ্জার সামগ্রী খোঁজা ক্রেতাদের জন্য সহজ হয়।",
      },
      discoveryTip: {
        en: "List complementary decor items (vases, table runners) near major furniture categories to increase basket sizes.",
        bn: "টেবিলের পাশে ফুলদানি বা রানারের মতো ছোট সামগ্রী সাজিয়ে রাখলে একসাথে একাধিক পণ্য বিক্রি হয়।",
      },
      categories: [
        {
          name: { en: "Living Room Accents", bn: "লিভিং রুম ও বৈঠকখানা" },
          subcategories: [
            { en: "Solid Wood Coffee Tables", bn: "কফি টেবিল" },
            { en: "Accent Chairs & Stools", bn: "একসেন্ট চেয়ার ও টুল" },
            { en: "Handwoven Floor Rugs", bn: "হাতে বোনা ফ্লোর রাগ" },
            { en: "Cushion Covers & Throws", bn: "কুশন কাভার" },
          ],
          description: {
            en: "Furniture and soft furnishings designed for modern welcoming living rooms.",
            bn: "বৈঠকখানা সাজানোর দৃষ্টিনন্দন ফার্নিচার ও টেক্সটাইল সামগ্রী।",
          },
        },
        {
          name: { en: "Dining & Tableware", bn: "ডাইনিং ও টেবিলওয়্যার" },
          subcategories: [
            { en: "Studio Ceramic Dinnerware", bn: "সিরামিক ডিনার সেট" },
            { en: "Handmade Table Runners", bn: "টেবিল রানার ও ম্যাট" },
            { en: "Serveware & Trays", bn: "সার্ভিং ডিশ ও ট্রে" },
          ],
          description: {
            en: "Artisanal ceramics and tableware for warm dinner gatherings.",
            bn: "খাবারের টেবিলের জন্য সিরামিক বাসনপত্র ও গৃহস্থালি সামগ্রী।",
          },
        },
        {
          name: { en: "Bedroom & Bedding", bn: "বেডরুম ও বেডিং" },
          subcategories: [
            { en: "Pure Cotton Bed Sheet Sets", bn: "কটন বেডশিট সেট" },
            { en: "Duvet Covers & Quilts", bn: "ডুভেট কাভার ও কুইল্ট" },
          ],
          description: {
            en: "Breathable natural fabrics engineered for restful sleep.",
            bn: "আরামদায়ক ঘুমের জন্য প্রাকৃতিক সুতি বেডিং কালেকশন।",
          },
        },
        {
          name: { en: "Artisan Decor & Lighting", bn: "আর্টিসান ডেকর ও লাইটিং" },
          subcategories: [
            { en: "Ceramic Vases & Planters", bn: "সিরামিক ফুলদানি ও প্ল্যান্টার" },
            { en: "Warm Table & Floor Lamps", bn: "টেবিল ও ফ্লোর ল্যাম্প" },
          ],
          description: {
            en: "Handmade statement pieces that infuse personality into living spaces.",
            bn: "ঘরের সৌন্দর্য বাড়াতে নান্দনিক ফুলদানি ও লাইটিং।",
          },
        },
      ],
    },
    catalog: {
      eyebrow: {
        en: "SAMPLE CATALOGUE",
        bn: "নমুনা ক্যাটালগ",
      },
      title: {
        en: "Illustrative Home Products & Dimension Data",
        bn: "নমুনা হোম প্রোডাক্ট ও পরিমাপ মডেল",
      },
      description: {
        en: "Sample home and furniture products demonstrating dimensional specifications and material tags in CartX.",
        bn: "ফার্নিচারের আকার, উপাদান ও ফিনিশিং প্রদর্শনের নমুনা ডেটা।",
      },
      products: [
        {
          id: "h-prod-1",
          name: { en: "Minimalist Solid Teak Coffee Table", bn: "মিনিমালিস্ট সলিড সেগুন কফি টেবিল" },
          category: { en: "Living Room Accents", bn: "লিভিং রুম ও বৈঠকখানা" },
          price: "৳14,500",
          originalPrice: "৳16,800",
          badge: { en: "Solid Wood", bn: "খাঁটি সেগুন কাঠ" },
          attributes: [
            { label: { en: "Dimensions", bn: "পরিমাপ" }, value: { en: "110cm (L) x 60cm (W) x 45cm (H)", bn: "১১০ সেমি x ৬০ সেমি x ৪৫ সেমি" } },
            { label: { en: "Timber", bn: "কাঠ" }, value: { en: "100% Solid Seasoned Teak", bn: "১০০% সলিড সিজনড সেগুন" } },
            { label: { en: "Finish", bn: "ফিনিশ" }, value: { en: "Matte Polyurethane Natural", bn: "ম্যাট ন্যাচারাল উড ফিনিশ" } },
          ],
          highlight: {
            en: "Clean Scandinavian-inspired joinery crafted from seasoned Chittagong teak.",
            bn: "সিজনড সেগুন কাঠ ও আধুনিক স্ক্যান্ডিনেভিয়ান ডিজাইনের নান্দনিক কফি টেবিল।",
          },
        },
        {
          id: "h-prod-2",
          name: { en: "Handcrafted Ribbed Ceramic Vase", bn: "হাতে তৈরি রিবড সিরামিক ফুলদানি" },
          category: { en: "Artisan Decor & Lighting", bn: "আর্টিসান ডেকর ও লাইটিং" },
          price: "৳1,450",
          badge: { en: "Studio Made", bn: "হাতে তৈরি" },
          attributes: [
            { label: { en: "Height", bn: "উচ্চতা" }, value: { en: "24cm Height, 14cm Diameter", bn: "২৪ সেমি উচ্চতা, ১৪ সেমি ব্যাস" } },
            { label: { en: "Colors", bn: "রং" }, value: { en: "Matte Cream, Terracotta Sand", bn: "ম্যাট ক্রিম, পোড়ামাটি স্যান্ড" } },
            { label: { en: "Material", bn: "উপাদান" }, value: { en: "Kiln-Fired Natural Stoneware", bn: "উচ্চতাপে পোড়ানো সিরামিক" } },
          ],
          highlight: {
            en: "Tactile textured stoneware ideal for dried botanical pampas grass.",
            bn: "ড্রাইড ফ্লাওয়ার বা একা ডেকোরেশন পিস হিসেবে ঘরের সৌন্দর্য বাড়ায়।",
          },
        },
        {
          id: "h-prod-3",
          name: { en: "Pure Cotton Percale Bed Sheet Set", bn: "১০০% পিওর কটন পারকেল বেডশিট সেট" },
          category: { en: "Bedroom & Bedding", bn: "বেডরুম ও বেডিং" },
          price: "৳2,850",
          originalPrice: "৳3,200",
          badge: { en: "300 Thread Count", bn: "৩০০ থ্রেড কাউন্ট" },
          attributes: [
            { label: { en: "Sizes", bn: "সাইজ" }, value: { en: "Queen (7.5x8 ft), King (8x8.5 ft)", bn: "কুইন ও কিং সাইজ" } },
            { label: { en: "Colors", bn: "রং" }, value: { en: "Sand Beige, Crisp White, Seafoam", bn: "স্যান্ড বেইজ, সাদা, সিফোম" } },
            { label: { en: "Includes", bn: "অন্তর্ভুক্ত" }, value: { en: "1 Fitted Sheet + 2 Pillow Covers", bn: "১টি বেডশিট + ২টি বালিশের কাভার" } },
          ],
          highlight: {
            en: "Breathable crisp cotton that softens with every wash, woven for warm climates.",
            bn: "উষ্ণ আবহাওয়ায় আরামদায়ক ঘুমের জন্য খাঁটি সুতি ফেব্রিক।",
          },
        },
        {
          id: "h-prod-4",
          name: { en: "Woven Jute & Cotton Floor Rug", bn: "হাতে বোনা পাট ও সুতি ফ্লোর রাগ" },
          category: { en: "Living Room Accents", bn: "লিভিং রুম ও বৈঠকখানা" },
          price: "৳3,600",
          badge: { en: "Eco Friendly", bn: "ইকো ফ্রেন্ডলি" },
          attributes: [
            { label: { en: "Dimensions", bn: "পরিমাপ" }, value: { en: "120cm x 180cm (4x6 ft)", bn: "১২০ সেমি x ১৮০ সেমি (৪x৬ ফুট)" } },
            { label: { en: "Weave", bn: "বুনন" }, value: { en: "Braided Natural Golden Jute", bn: "প্রাকৃতিক সোনালী পাটের বুনন" } },
            { label: { en: "Thickness", bn: "পুরুত্ব" }, value: { en: "8mm Heavy-Duty Pile", bn: "৮ মিমি মজবুত টেক্সচার" } },
          ],
          highlight: {
            en: "Durable eco-conscious flooring accent woven by local artisans.",
            bn: "লিভিং রুমের মেঝেতে প্রাকৃতিক স্নিগ্ধতা আনতে পাটের তৈরি দীর্ঘস্থায়ী কার্পেট।",
          },
        },
      ],
    },
    storefrontPreview: {
      eyebrow: {
        en: "STOREFRONT SHOWCASE",
        bn: "স্টোরফ্রন্ট প্রদর্শনী",
      },
      title: {
        en: "Nordic Living — Home & Lifestyle Preview",
        bn: "নরডিক লিভিং — হোম ও ফার্নিচার থিম প্রিভিউ",
      },
      description: {
        en: "Illustrative storefront preview showcasing warm natural palettes, dimensional parameter cards, and full room lifestyle imagery.",
        bn: "হোম ডেকর ও ফার্নিচারের জন্য উপযোগী পরিচ্ছন্ন ও নান্দনিক স্টোরফ্রন্ট প্রিভিউ।",
      },
      domain: "demo.nordicliving.cartx.app",
      brandName: "NORDIC LIVING",
      tagline: "Handcrafted Home Accents & Teak Living",
      isLiveDemo: false,
      previewNotice: {
        en: "Illustrative Concept Preview",
        bn: "নমুনা কনসেপ্ট প্রিভিউ",
      },
      accentGradient: "from-amber-500/15 via-orange-400/10 to-transparent",
      highlights: [
        { en: "High-resolution dimensional parameter display", bn: "বিস্তারিত পরিমাপ ও সাইজ প্যারামিটার কার্ড" },
        { en: "Timber finish and wood stain selector swatches", bn: "কাঠের ফিনিশ ও রঙ সিলেকশন সোয়াচ" },
        { en: "Weight-tiered shipping notice during checkout", bn: "ওজনভিত্তিক সঠিক ডেলিভারি ফি প্রদর্শন" },
      ],
    },
    integrations: {
      eyebrow: {
        en: "LOCAL INTEGRATIONS",
        bn: "প্রয়োজনীয় ইন্টিগ্রেশন",
      },
      title: {
        en: "Recommended Connectors for Home Living Brands",
        bn: "হোম ডেকর ব্র্যান্ডের জন্য প্রস্তাবিত কানেক্টর",
      },
      description: {
        en: "Verified payment and delivery integrations for home decor and furniture commerce.",
        bn: "হোম ডেকর পণ্যের অর্ডার সংগ্রহ ও নিরাপদ ডেলিভারির জন্য প্রয়োজনীয় কানেক্টর।",
      },
      items: [
        {
          name: "bKash & Card Gateways",
          category: { en: "Secure Payments", bn: "সুরক্ষিত পেমেন্ট" },
          reason: {
            en: "Secures full advance or deposit payments for custom furniture orders.",
            bn: "ফার্নিচারের মতো দামি পণ্যে অগ্রিম ডিপোজিট বা পূর্ণ মূল্য সংগ্রহের জন্য।",
          },
          icon: CreditCard,
          linkHref: "/integrations",
        },
        {
          name: "Steadfast Courier",
          category: { en: "Domestic Logistics", bn: "সারাদেশে পার্সেল ডেলিভারি" },
          reason: {
            en: "Reliable parcel shipping network for boxed ceramics and soft home textiles.",
            bn: "বক্সড সিরামিক এবং হোম টেক্সটাইল পণ্য সারাদেশে পাঠানোর জন্য।",
          },
          icon: Truck,
          linkHref: "/integrations",
        },
        {
          name: "Pathao Courier",
          category: { en: "Urban Home Delivery", bn: "শহরে দ্রুত ডেলিভারি" },
          reason: {
            en: "Fast home delivery service with parcel tracking within metropolitan centers.",
            bn: "শহরের ভেতরে বাসা-বাড়িতে দ্রুত ও নির্ভরযোগ্য পার্সেল ডেলিভারি।",
          },
          icon: Truck,
          linkHref: "/integrations",
        },
        {
          name: "Meta Pixel & CAPI",
          category: { en: "Catalog Retargeting", bn: "ক্যাটালগ রিটার্গেটিং" },
          reason: {
            en: "Retargets shoppers who viewed specific coffee tables or bedroom sets on Instagram.",
            bn: "ইনস্টাগ্রামে হোম ডেকর পণ্য দেখা ক্রেতাদের পুনরায় বিজ্ঞাপন দেখানোর ব্যবস্থা।",
          },
          icon: BarChart3,
          linkHref: "/integrations",
        },
      ],
    },
    subscriptionGuidance: {
      eyebrow: {
        en: "SUBSCRIPTION GUIDANCE",
        bn: "সাবস্ক্রিপশন গাইডলাইন",
      },
      title: {
        en: "Recommended Plans for Home Decor Stores",
        bn: "হোম ডেকর শপের জন্য উপযোগী প্ল্যানসমূহ",
      },
      description: {
        en: "Pick a plan according to your catalog breadth, photo gallery needs, and monthly order volume.",
        bn: "পণ্যের সংখ্যা ও ফটো গ্যালারির পরিমাণ অনুযায়ী আপনার ব্যবসার জন্য সেরা প্ল্যান বেছে নিন।",
      },
      disclaimer: {
        en: "All plans include high-speed cloud hosting, SSL certification, and unmetered traffic bandwidth.",
        bn: "সকল প্ল্যানে ফ্রি ক্লাউড হোস্টিং, এসএসএল নিরাপত্তা ও আনলিমিটেড ব্যান্ডউইথ অন্তর্ভুক্ত।",
      },
      plans: [
        {
          tier: "starter",
          name: { en: "Starter Plan", bn: "স্টার্টার প্ল্যান" },
          summary: {
            en: "Perfect for studio pottery artists, candle makers, and artisanal home textile brands.",
            bn: "হাতে তৈরি সিরামিক, মোমবাতি বা কুশন কাভারের মতো পণ্য দিয়ে শুরু করা ছোট ব্র্যান্ডের জন্য।",
          },
          reasons: [
            { en: "Up to 100 products with dimensional attributes", bn: "১০০টি পণ্য পর্যন্ত ক্যাটালগ সীমা" },
            { en: "1 staff admin account", bn: "১টি স্টাফ অ্যাকাউন্ট" },
            { en: "Standard bKash, Nagad, and COD checkout", bn: "বিকাশ ও সিওডি পেমেন্ট ব্যবস্থা" },
          ],
        },
        {
          tier: "growth",
          name: { en: "Growth Plan", bn: "গ্রোথ প্ল্যান" },
          badge: { en: "Recommended for Home & Living", bn: "হোম ও লিভিং স্টোরের সেরা পছন্দ" },
          isRecommended: true,
          summary: {
            en: "The standard choice for complete furniture and home decor stores managing multiple room collections.",
            bn: "বিভিন্ন রুমের ফার্নিচার ও হোম ডেকর সামগ্রী পরিচালনাকারী রিটেইলারদের জন্য সেরা সমাধান।",
          },
          reasons: [
            { en: "Up to 2,500 products across all home collections", bn: "২,৫০০টি পণ্য পর্যন্ত ক্যাটালগ সীমা" },
            { en: "5 staff accounts for workshop, packing, and sales", bn: "৫টি স্টাফ অ্যাকাউন্ট" },
            { en: "Automated Pathao/Steadfast courier booking API", bn: "কুরিয়ার এপিআই ইন্টিগ্রেশন" },
            { en: "Custom domain connection included", bn: "কাস্টম ডোমেইন ব্যবহারের পূর্ণ সুবিধা" },
          ],
        },
        {
          tier: "scale",
          name: { en: "Scale Plan", bn: "স্কেল প্ল্যান" },
          summary: {
            en: "Engineered for nationwide furniture brands, multi-showroom enterprises, and commercial interior suppliers.",
            bn: "সারাদেশে বিস্তৃত বড় ফার্নিচার ব্র্যান্ড ও মাল্টিপল শোরুম পরিচালনাকারীদের জন্য।",
          },
          reasons: [
            { en: "Unlimited products, finishes, and staff accounts", bn: "আনলিমিটেড পণ্য ও স্টাফ অ্যাকাউন্ট" },
            { en: "Priority dedicated technical support and onboarding", bn: "অগ্রাধিকারভিত্তিক কারিগরি সহায়তা" },
            { en: "Custom white-label iOS and Android mobile catalog app", bn: "নিজস্ব ব্র্যান্ডেড মোবাইল অ্যাপ" },
          ],
        },
      ],
    },
    faqs: {
      eyebrow: {
        en: "FREQUENTLY ASKED QUESTIONS",
        bn: "সাধারণ জিজ্ঞাসা",
      },
      title: {
        en: "Home & Lifestyle Questions & Answers",
        bn: "হোম ডেকর স্টোর সংক্রান্ত সাধারণ প্রশ্নোত্তর",
      },
      description: {
        en: "Important details on displaying product dimensions, handling heavy shipping, and custom orders on CartX.",
        bn: "কার্টএক্সে ফার্নিচারের পরিমাপ, ভারী পণ্যের ডেলিভারি ও পেমেন্ট সংক্রান্ত তথ্যাবলী।",
      },
      items: [
        {
          id: "h-faq-1",
          question: {
            en: "Can I display multiple photos from different angles for furniture?",
            bn: "ফার্নিচারের ক্ষেত্রে কি বিভিন্ন অ্যাঙ্গেলের একাধিক ছবি দেখানো সম্ভব?",
          },
          answer: {
            en: "Yes. CartX supports high-resolution image galleries for each product, allowing you to upload side profiles, close-up wood grain textures, and full room lifestyle shots with zoom capabilities.",
            bn: "হ্যাঁ, প্রতিটি পণ্যের জন্য একাধিক হাই-রেজোলিউশন ছবি ও রুম লাইফস্টাইল ফটো যুক্ত করার পূর্ণ সুবিধা রয়েছে।",
          },
        },
        {
          id: "h-faq-2",
          question: {
            en: "How can I explain dimensions and materials on the product page?",
            bn: "পণ্যের পেজে আকার ও কাঠের বিবরণ কীভাবে তুলে ধরা যায়?",
          },
          answer: {
            en: "You can specify structured attribute fields for Length, Width, Height, timber species, and finish type in the product editor, which render cleanly on the product page for shoppers.",
            bn: "প্রোডাক্ট ম্যানেজারে দৈর্ঘ্য, প্রস্থ, উচ্চতা এবং কাঠের ধরনের জন্য আলাদা ফিল্ড রয়েছে যা পেজে পরিষ্কার টেবিলে দেখা যায়।",
          },
        },
        {
          id: "h-faq-3",
          question: {
            en: "Can I set custom shipping charges for heavier home items?",
            bn: "ভারী ফার্নিচারের জন্য কি আলাদা ডেলিভারি চার্জ নির্ধারণ করা যাবে?",
          },
          answer: {
            en: "Yes. CartX allows you to configure specific delivery pricing rules so that heavier home decor pieces cover actual domestic courier transport fees.",
            bn: "হ্যাঁ, ভারী পণ্যের ক্ষেত্রে আপনি নির্দিষ্ট ডেলিভারি চার্জ নির্ধারণ করতে পারেন যা চেকআউটে যুক্ত হয়ে কুরিয়ার খরচ কাভার করে।",
          },
        },
        {
          id: "h-faq-4",
          question: {
            en: "Does CartX support advance deposit plus Cash on Delivery?",
            bn: "ফার্নিচারের জন্য কি আংশিক অগ্রিম পেমেন্ট সংগ্রহ করা যায়?",
          },
          answer: {
            en: "Yes. You can accept advance deposit payments via bKash, Nagad, or credit card, and note remaining balances for Cash on Delivery collection upon home delivery.",
            bn: "হ্যাঁ, বিকাশ বা কার্ডের মাধ্যমে অগ্রিম বুকিং ফি সংগ্রহ করে বাকি টাকা ডেলিভারির সময় সংগ্রহের ব্যবস্থা করা যায়।",
          },
        },
      ],
    },
    cta: {
      heading: {
        en: "Ready to Build Your Home & Lifestyle Store?",
        bn: "আপনার হোম ডেকর ও ফার্নিচারের অনলাইন স্টোর তৈরিতে প্রস্তুত?",
      },
      description: {
        en: "Showcase your craftsmanship with multi-angle galleries, dimensional specifications, and reliable parcel dispatch on CartX.",
        bn: "মাল্টি-অ্যাঙ্গেল ফটো গ্যালারি, পরিমাপ স্পেক্স ও নির্ভরযোগ্য ডেলিভারি সুবিধা নিয়ে আজই শুরু করুন আপনার হোম ডেকর ব্র্যান্ড।",
      },
      primaryCta: {
        en: "Start Your Store",
        bn: "আপনার স্টোর শুরু করুন",
      },
      secondaryCta: {
        en: "View Pricing Plans",
        bn: "প্রাইসিং প্ল্যান দেখুন",
      },
      guaranteePill: {
        en: "14-Day Free Trial • No Credit Card Required • Instant Setup",
        bn: "১৪ দিনের ফ্রি ট্রায়াল • ক্রেডিট কার্ডের প্রয়োজন নেই • তাৎক্ষণিক সেটআপ",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Books & Stationery
  // ─────────────────────────────────────────────────────────────
  "books-stationery": {
    slug: "books-stationery",
    name: {
      en: "Books & Stationery",
      bn: "বই ও স্টেশনারি",
    },
    badge: {
      en: "Publishing & Literary Commerce",
      bn: "বই প্রকাশনা ও স্টেশনারি বাণিজ্য",
    },
    icon: BookOpen,
    seo: {
      title: "Books & Stationery E-commerce Solutions",
      description:
        "Catalog deep author and genre hierarchies, track edition SKUs, and manage nationwide parcel delivery with CartX.",
    },
    hero: {
      h1Plain: {
        en: "Organize and Sell Deep Catalogs of",
        bn: "সহজে সাজান ও বিক্রি করুন আপনার",
      },
      h1Highlight: {
        en: "Books & Fine Stationery.",
        bn: "বই ও প্রিমিয়াম স্টেশনারি ক্যাটালগ।",
      },
      description: {
        en: "Categorize publications by author and genre, manage edition SKUs, and automate nationwide courier parcel delivery with CartX.",
        bn: "লেখক, বিষয় ও প্রকাশনী ভিত্তিক বইয়ের ক্যাটালগ, সংস্করণ এসকেইউ ট্র্যাকিং এবং সারাদেশে নির্ভরযোগ্য হোম ডেলিভারি সুবিধা।",
      },
      primaryCta: {
        en: "Start Your Store",
        bn: "আপনার স্টোর শুরু করুন",
      },
      secondaryCta: {
        en: "View Catalog Management",
        bn: "ক্যাটালগ ম্যানেজমেন্ট দেখুন",
      },
      secondaryHref: "/features/product-management",
      trustNote: {
        en: "Engineered for publishers, online bookstores, university bookshops, and stationery boutiques",
        bn: "বইয়ের দোকান, প্রকাশনা সংস্থা ও স্টেশনারি ব্র্যান্ডের জন্য বিশেষভাবে প্রস্তুত",
      },
      previewTagline: "LITERARY CATALOG & EDITIONS",
      previewHeadline: "Contemporary Bengali Essays & Journals",
      previewSubhead: "Archival notebooks, rare translations, and thoughtful fiction.",
      previewBadges: ["Author & Genre Tags", "Edition SKUs", "Nationwide 64-District Courier"],
    },
    challenges: {
      eyebrow: {
        en: "INDUSTRY CHALLENGES",
        bn: "শিল্পের বাস্তব সমস্যা",
      },
      title: {
        en: "Key Complexities in Online Book Selling",
        bn: "অনলাইনে বই বিক্রির প্রধান জটিলতাসমূহ",
      },
      description: {
        en: "Book retailing demands deep metadata management across hundreds of authors, publishers, and literary genres.",
        bn: "বইয়ের ক্ষেত্রে লেখক, বিষয়, অনুবাদক ও প্রকাশনী অনুযায়ী শত শত টাইটেলের সঠিক মেটাডেটা রাখা অপরিহার্য।",
      },
      items: [
        {
          id: "bk-ch-1",
          title: {
            en: "Deep Author & Genre Metadata",
            bn: "লেখক ও বিষয়ভিত্তিক বিশাল মেটাডেটা",
          },
          description: {
            en: "Readers search specifically by author name, translator, or literary period; poor tagging leads to lost sales.",
            bn: "পাঠকরা নির্দিষ্ট লেখক বা বিষয়ের নাম লিখে বই খোঁজেন; সঠিক মেটাডেটা না থাকলে কাঙ্ক্ষিত বই খুঁজে পাওয়া কঠিন হয়।",
          },
          icon: Search,
        },
        {
          id: "bk-ch-2",
          title: {
            en: "Tracking Multiple Editions & Bindings",
            bn: "সংস্করণ ও বাঁধাই (হার্ডকভার/পেপারব্যাক) ট্র্যাকিং",
          },
          description: {
            en: "Distinguishing paperbacks, hardcovers, and revised print editions with unique pricing and ISBN/SKU codes.",
            bn: "একই বইয়ের পেপারব্যাক এবং হার্ডকভার সংস্করণের আলাদা দাম ও স্টক নির্ভুল রাখা।",
          },
          icon: Package,
        },
        {
          id: "bk-ch-3",
          title: {
            en: "Book Fair (Boimela) Order Spikes",
            bn: "বইমেলা ও সিজনাল অর্ডারের চাপ",
          },
          description: {
            en: "Massive order surges during national book fairs require rapid invoice printing and instant courier handoffs.",
            bn: "বইমেলার মৌসুমে বা পরীক্ষার সময় বিপুল অর্ডারের দ্রুত চালান প্রিন্ট ও কুরিয়ারে বুকিং সম্পন্ন করা।",
          },
          icon: Clock,
        },
        {
          id: "bk-ch-4",
          title: {
            en: "Nationwide 64-District Delivery Reach",
            bn: "সারাদেশের ৬৪ জেলায় বই পৌঁছানোর চ্যালেঞ্জ",
          },
          description: {
            en: "Readers in remote sub-districts depend on dependable courier parcel delivery with Cash on Delivery options.",
            bn: "দূরদূরান্তের পাঠকদের কাছে স্বল্প খরচে বই পৌঁছে দিতে নির্ভরযোগ্য কুরিয়ার ইন্টিগ্রেশন জরুরি।",
          },
          icon: Truck,
        },
      ],
    },
    capabilities: {
      eyebrow: {
        en: "CARTX CAPABILITIES",
        bn: "কার্টএক্সের সক্ষমতা",
      },
      title: {
        en: "Verified Features Built for Booksellers",
        bn: "বই বিক্রেতাদের জন্য প্রমাণিত প্ল্যাটফর্ম সুবিধা",
      },
      description: {
        en: "Verified features in CartX designed for literary catalogs, print edition tracking, and nationwide parcel dispatch.",
        bn: "বইয়ের ক্যাটালগ সাজানো, সংস্করণ ট্র্যাকিং এবং সারাদেশে ডেলিভারিতে কার্টএক্সের বিদ্যমান সুবিধা।",
      },
      items: [
        {
          id: "bk-cap-1",
          title: {
            en: "Search-Friendly Author & Genre Tagging",
            bn: "লেখক, প্রকাশনী ও বিষয়ভিত্তিক ট্যাগিং",
          },
          description: {
            en: "Organize books under clear literary genres and author collections with search-optimized title metadata.",
            bn: "লেখক, অনুবাদক ও প্রকাশনী অনুযায়ী বইগুলোকে সহজে ফিল্টার ও সার্চ করার উপযোগী কাঠামো।",
          },
          featureSlug: "product-management",
          featureName: {
            en: "Product Catalog",
            bn: "প্রোডাক্ট ক্যাটালগ",
          },
          icon: Package,
        },
        {
          id: "bk-cap-2",
          title: {
            en: "SKU Tracking per Edition / Binding",
            bn: "সংস্করণ ও বাঁধাই ভিত্তিক এসকেইউ ট্র্যাকিং",
          },
          description: {
            en: "Maintain separate stock counts for paperback, hardcover, and collector editions of the same literary work.",
            bn: "হার্ডকভার ও পেপারব্যাক সংস্করণের জন্য আলাদা স্টক সংখ্যা ও দাম নির্ধারণের সুবিধা।",
          },
          featureSlug: "inventory-management",
          featureName: {
            en: "Inventory Control",
            bn: "ইনভেন্টরি নিয়ন্ত্রণ",
          },
          icon: Boxes,
        },
        {
          id: "bk-cap-3",
          title: {
            en: "Automated Pathao & Steadfast Courier Booking",
            bn: "পাঠাও ও স্টিডফাস্টে সরাসরি পার্সেল বুকিং",
          },
          description: {
            en: "Book nationwide parcel deliveries across all 64 districts in one click with automated tracking numbers.",
            bn: "সারাদেশের যেকোনো প্রান্তে বই ডেলিভারির জন্য এক ক্লিকে পার্সেল বুকিং ও ট্র্যাকিং আইডি সংযোজন।",
          },
          featureSlug: "shipping",
          featureName: {
            en: "Shipping Operations",
            bn: "ডেলিভারি অপারেশন",
          },
          icon: Truck,
        },
        {
          id: "bk-cap-4",
          title: {
            en: "Boimela Promotional Discount Engine",
            bn: "বইমেলা ও বিশেষ ক্যাম্পেইনের কুপন কোড",
          },
          description: {
            en: "Deploy coupon codes (e.g. 'BOIMELA25' for 25% off) with minimum purchase rules and automated date expiries.",
            bn: "বইমেলা বা জাতীয় দিবসে শতকরা বা নির্দিষ্ট টাকার ছাড়ের কুপন কোড সহজে চালুর ব্যবস্থা।",
          },
          featureSlug: "store-builder",
          featureName: {
            en: "Storefront Builder",
            bn: "স্টোরফ্রন্ট বিল্ডার",
          },
          icon: Store,
        },
      ],
    },
    storeStructure: {
      eyebrow: {
        en: "RECOMMENDED ARCHITECTURE",
        bn: "প্রস্তাবিত স্টোর কাঠামো",
      },
      title: {
        en: "Suggested Store Structure for Bookstores",
        bn: "বইয়ের দোকানের জন্য আদর্শ ক্যাটাগরি বিন্যাস",
      },
      description: {
        en: "A genre- and author-first organization matches how avid readers explore literature and discover new books.",
        bn: "বিষয় এবং লেখক ভিত্তিক ক্যাটাগরি বইপ্রেমীদের দ্রুত প্রিয় বই খুঁজে পেতে সাহায্য করে।",
      },
      discoveryTip: {
        en: "Display author names and binding types (Paperback/Hardcover) on collection cards for fast browsing.",
        bn: "প্রোডাক্ট কার্ডে লেখকের নাম ও বাঁধাইয়ের ধরন পরিষ্কার রাখলে পাঠক দ্রুত অর্ডার করতে পারেন।",
      },
      categories: [
        {
          name: { en: "Fiction & Literature", bn: "কথাসাহিত্য ও উপন্যাস" },
          subcategories: [
            { en: "Contemporary Bengali Novels", bn: "সমকালীন বাংলা উপন্যাস" },
            { en: "Classic World Literature", bn: "অনুবাদ সাহিত্য ও ধ্রুপদী গল্প" },
            { en: "Mystery & Thrillers", bn: "রহস্য ও গোয়েন্দা কাহিনী" },
            { en: "Poetry Collections", bn: "কবিতা ও কাব্যগ্রন্থ" },
          ],
          description: {
            en: "Novels, short stories, and translated literature arranged by genre.",
            bn: "উপন্যাস, গল্প ও বিশ্ব সাহিত্যের অনুবাদ গ্রন্থের সমৃদ্ধ তালিকা।",
          },
        },
        {
          name: { en: "Non-Fiction & Thought", bn: "মননশীল ও প্রবন্ধ" },
          subcategories: [
            { en: "History & Liberation War", bn: "ইতিহাস ও মুক্তিযুদ্ধ" },
            { en: "Biographies & Memoirs", bn: "জীবনী ও স্মৃতিচারণ" },
            { en: "Self-Development & Business", bn: "আত্মউন্নয়ন ও ব্যবসা" },
          ],
          description: {
            en: "Insightful non-fiction exploring history, society, and personal development.",
            bn: "ইতিহাস, আত্মউন্নয়ন ও দর্শন বিষয়ক গভীর পাঠের বই।",
          },
        },
        {
          name: { en: "Academic & Career Prep", bn: "একাডেমিক ও ক্যারিয়ার" },
          subcategories: [
            { en: "BCS & Job Exam Guides", bn: "বিসিএস ও চাকরির প্রস্তুতি" },
            { en: "University Textbooks", bn: "বিশ্ববিদ্যালয় পাঠ্যবই" },
          ],
          description: {
            en: "Essential study guides and examination reference books.",
            bn: "চাকরির প্রস্তুতি ও উচ্চশিক্ষার সহায়ক বইসমূহ।",
          },
        },
        {
          name: { en: "Fine Stationery & Journals", bn: "প্রিমিয়াম স্টেশনারি ও খাতা" },
          subcategories: [
            { en: "Hardcover Dotted Journals", bn: "ডটেড লেদার জার্নাল" },
            { en: "Fountain Pens & Inks", bn: "ফাউন্টেন পেন ও কালি" },
            { en: "Desk Organizers & Bookmarks", bn: "বুকমার্ক ও ডেস্ক এক্সেসরিজ" },
          ],
          description: {
            en: "Archival notebooks and writing tools for writers and professionals.",
            bn: "লেখক ও ডায়েরি লেখকদের জন্য প্রিমিয়াম কাগজ ও কলম।",
          },
        },
      ],
    },
    catalog: {
      eyebrow: {
        en: "SAMPLE CATALOGUE",
        bn: "নমুনা ক্যাটালগ",
      },
      title: {
        en: "Illustrative Literary Titles & Edition Data",
        bn: "নমুনা বই ও প্রকাশনা মেটাডেটা মডেল",
      },
      description: {
        en: "Sample books and fine stationery items demonstrating author tags, binding options, and SKU data in CartX.",
        bn: "লেখক, সংস্করণ ও এসকেইউ প্রদর্শনের জন্য নমুনা বই ও স্টেশনারি ডেটা।",
      },
      products: [
        {
          id: "bk-prod-1",
          name: { en: "Contemporary Bengali Literary Essays", bn: "সমকালীন মননশীল প্রবন্ধ সংকলন" },
          category: { en: "Non-Fiction & Thought", bn: "মননশীল ও প্রবন্ধ" },
          price: "৳450",
          originalPrice: "৳520",
          badge: { en: "Hardcover", bn: "হার্ডকভার সংস্করণ" },
          attributes: [
            { label: { en: "Author", bn: "লেখক" }, value: { en: "Dr. Farhan Ahmed", bn: "ড. ফারহান আহমেদ" } },
            { label: { en: "Pages", bn: "পৃষ্ঠা" }, value: { en: "320 Pages, Cream Offset", bn: "৩২০ পৃষ্ঠা, ৮০ জিএসএম ক্রিম অফসেট" } },
            { label: { en: "Publisher", bn: "প্রকাশনী" }, value: { en: "Heritage Prakashani", bn: "ঐতিহ্য প্রকাশনী" } },
          ],
          highlight: {
            en: "Insightful critical essays on modern Bengali society, art, and language.",
            bn: "আধুনিক বাংলা সাহিত্য ও সমাজচিন্তার গুরুত্বপূর্ণ প্রবন্ধের সংকলন।",
          },
        },
        {
          id: "bk-prod-2",
          name: { en: "Midnight Echoes Detective Mystery", bn: "মধ্যরাতের পদধ্বনি (রহস্য উপন্যাস)" },
          category: { en: "Fiction & Literature", bn: "কথাসাহিত্য ও উপন্যাস" },
          price: "৳380",
          badge: { en: "Bestseller", bn: "সেরা বিক্রি" },
          attributes: [
            { label: { en: "Author", bn: "লেখক" }, value: { en: "Sabrina Khan", bn: "সাবরিনা খান" } },
            { label: { en: "Format", bn: "বাঁধাই" }, value: { en: "Paperback with Matte UV Jacket", bn: "পেপারব্যাক ও ম্যাট জ্যাকেট" } },
            { label: { en: "ISBN / SKU", bn: "এসকেইউ" }, value: { en: "BK-FIC-MYST-02", bn: "BK-FIC-MYST-02" } },
          ],
          highlight: {
            en: "Fast-paced psychological crime thriller set across old Dhaka alleys.",
            bn: "পুরান ঢাকার পটভূমিতে রচিত টানটান উত্তেজনার গোয়েন্দা কাহিনী।",
          },
        },
        {
          id: "bk-prod-3",
          name: { en: "Executive Dotted Leather Bound Journal", bn: "প্রিমিয়াম ডটেড লেদার জার্নাল" },
          category: { en: "Fine Stationery & Journals", bn: "প্রিমিয়াম স্টেশনারি ও খাতা" },
          price: "৳850",
          originalPrice: "৳980",
          badge: { en: "Archival Quality", bn: "আর্কাইভাল কোয়ালিটি" },
          attributes: [
            { label: { en: "Paper", bn: "কাগজ" }, value: { en: "192 Pages, 120 GSM Acid-Free", bn: "১৯২ পৃষ্ঠা, ১২০ জিএসএম অ্যাসিড-ফ্রি" } },
            { label: { en: "Cover", bn: "কাভার" }, value: { en: "Supple PU Leather with Ribbon", bn: "সফট পিইউ লেদার ও বুকমার্ক রিবন" } },
            { label: { en: "Ruling", bn: "রুলিং" }, value: { en: "5mm Dot Grid for Bullet Journaling", bn: "৫ মিমি ডট গ্রিড" } },
          ],
          highlight: {
            en: "Zero ink bleed-through journal engineered for fountain pens and fineliners.",
            bn: "কালি না ছড়ানো মসৃণ কাগজ, ডায়েরি ও নোট লেখার জন্য আদর্শ।",
          },
        },
        {
          id: "bk-prod-4",
          name: { en: "Precision Fine Fountain Pen (0.5mm)", bn: "প্রেসিশন মেটাল ফাউন্টেন পেন (০.৫ মিমি)" },
          category: { en: "Fine Stationery & Journals", bn: "প্রিমিয়াম স্টেশনারি ও খাতা" },
          price: "৳1,250",
          badge: { en: "Brass Barrel", bn: "মেটাল বডি" },
          attributes: [
            { label: { en: "Nib", bn: "নিব" }, value: { en: "Stainless Steel 0.5mm Fine Nib", bn: "স্টেইনলেস স্টিল ০.৫ মিমি নিব" } },
            { label: { en: "Filling", bn: "ফিলিং" }, value: { en: "Piston Converter Included", bn: "পিস্টন কনভার্টার অন্তর্ভুক্ত" } },
            { label: { en: "Colors", bn: "রং" }, value: { en: "Matte Black, Brushed Brass", bn: "ম্যাট ব্ল্যাক, ব্রাশড ব্রাস" } },
          ],
          highlight: {
            en: "Balanced brass weight with consistent, effortless ink flow for daily writing.",
            bn: "হাতে চমৎকার ভারসাম্য এবং মসৃণ কালির প্রবাহ।",
          },
        },
      ],
    },
    storefrontPreview: {
      eyebrow: {
        en: "STOREFRONT SHOWCASE",
        bn: "স্টোরফ্রন্ট প্রদর্শনী",
      },
      title: {
        en: "Heritage Books — Bookstore Theme Preview",
        bn: "হেরিটেজ বুকস — বইয়ের দোকান থিম প্রিভিউ",
      },
      description: {
        en: "Illustrative bookstore preview highlighting author collections, clean typography, and fast Boimela campaign banners.",
        bn: "বইয়ের দোকানের জন্য তৈরি পরিচ্ছন্ন থিম প্রিভিউ, যা লেখক ভিত্তিক ব্রাউজিং ও ক্যাম্পেইন সহজে পরিচালনা করে।",
      },
      domain: "demo.heritagebooks.cartx.app",
      brandName: "HERITAGE BOOKS",
      tagline: "Independent Publisher & Curated Bookshop",
      isLiveDemo: false,
      previewNotice: {
        en: "Illustrative Concept Preview",
        bn: "নমুনা কনসেপ্ট প্রিভিউ",
      },
      accentGradient: "from-teal-500/15 via-emerald-400/10 to-transparent",
      highlights: [
        { en: "Author and publisher profile links on book cards", bn: "বইয়ের কার্ডে লেখক ও প্রকাশনীর লিংক" },
        { en: "Paperback vs Hardcover edition switcher", bn: "হার্ডকভার ও পেপারব্যাক সংস্করণ সুইচ করার সুবিধা" },
        { en: "Promotional Book Fair coupon banner", bn: "বইমেলার স্পেশাল কুপন কোড ব্যানার" },
      ],
    },
    integrations: {
      eyebrow: {
        en: "LOCAL INTEGRATIONS",
        bn: "প্রয়োজনীয় ইন্টিগ্রেশন",
      },
      title: {
        en: "Recommended Connectors for Book Retailing",
        bn: "বই বিক্রেতাদের জন্য প্রস্তাবিত কানেক্টর",
      },
      description: {
        en: "Nationwide delivery and payment integrations connecting publishers with readers across Bangladesh.",
        bn: "সারাদেশের পাঠকদের কাছে বই পৌঁছাতে প্রয়োজনীয় পেমেন্ট ও ডেলিভারি কানেক্টর।",
      },
      items: [
        {
          name: "Steadfast Courier",
          category: { en: "Nationwide 64-District Dispatch", bn: "সারাদেশে পার্সেল কুরিয়ার" },
          reason: {
            en: "Economical parcel delivery reaching readers in upazilas across all 64 districts.",
            bn: "দেশের প্রত্যন্ত অঞ্চলেও স্বল্প ডেলিভারি খরচে বই পৌঁছে দেওয়ার জন্য অত্যন্ত কার্যকর।",
          },
          icon: Truck,
          linkHref: "/integrations",
        },
        {
          name: "Pathao Courier",
          category: { en: "Urban Express Shipping", bn: "শহুরে এক্সপ্রেস ডেলিভারি" },
          reason: {
            en: "Fast city home delivery with real-time tracking for academic textbooks and urgent orders.",
            bn: "শহরাঞ্চলে একই দিনে বা পরদিন দ্রুত বই সরবরাহের জন্য উপযুক্ত।",
          },
          icon: Truck,
          linkHref: "/integrations",
        },
        {
          name: "bKash Merchant Checkout",
          category: { en: "Mobile MFS Payment", bn: "মোবাইল পেমেন্ট" },
          reason: {
            en: "Frictionless checkout method favored by students, researchers, and young readers.",
            bn: "শিক্ষার্থী ও সাধারণ পাঠকদের জন্য সহজে ও দ্রুত পেমেন্ট সম্পন্ন করতে সহায়ক।",
          },
          icon: CreditCard,
          linkHref: "/integrations",
        },
        {
          name: "Meta Pixel & CAPI",
          category: { en: "Reader Retargeting", bn: "পাঠক বিজ্ঞাপন ট্র্যাকিং" },
          reason: {
            en: "Promotes book fair releases to Facebook book club communities and literature readers.",
            bn: "ফেসবুক ও সোশ্যাল মিডিয়ার পাঠকদের কাছে নতুন বইয়ের প্রচারণা সঠিকভাবে পরিচালনা।",
          },
          icon: BarChart3,
          linkHref: "/integrations",
        },
      ],
    },
    subscriptionGuidance: {
      eyebrow: {
        en: "SUBSCRIPTION GUIDANCE",
        bn: "সাবস্ক্রিপশন গাইডলাইন",
      },
      title: {
        en: "Recommended Plans for Bookstores & Publishers",
        bn: "বই প্রকাশনা ও স্টোরের জন্য উপযোগী প্ল্যানসমূহ",
      },
      description: {
        en: "Choose a plan to match your title catalog depth, staff handling orders, and seasonal book fair traffic.",
        bn: "ক্যাটালগে মোট বইয়ের সংখ্যা ও বইমেলার ট্রাফিকের মাত্রা বিবেচনা করে সঠিক প্ল্যান বেছে নিন।",
      },
      disclaimer: {
        en: "All plans include web storefront hosting, SSL security, and unmetered reader traffic.",
        bn: "সকল প্ল্যানে ফ্রি ক্লাউড হোস্টিং, এসএসএল নিরাপত্তা ও আনলিমিটেড ব্যান্ডউইথ অন্তর্ভুক্ত।",
      },
      plans: [
        {
          tier: "starter",
          name: { en: "Starter Plan", bn: "স্টার্টার প্ল্যান" },
          summary: {
            en: "Ideal for self-published independent authors, specialized journals, and boutique stationery workshops.",
            bn: "স্বতন্ত্র লেখক, নির্দিষ্ট কিছু বই বা বিশেষায়িত স্টেশনারি নিয়ে শুরু করা উদ্যোগের জন্য।",
          },
          reasons: [
            { en: "Up to 100 book titles with edition attributes", bn: "১০০টি পণ্য পর্যন্ত ক্যাটালগ সীমা" },
            { en: "1 staff admin account", bn: "১টি স্টাফ অ্যাকাউন্ট" },
            { en: "Integrated bKash and Cash on Delivery", bn: "বিকাশ ও সিওডি পেমেন্ট ব্যবস্থা" },
          ],
        },
        {
          tier: "growth",
          name: { en: "Growth Plan", bn: "গ্রোথ প্ল্যান" },
          badge: { en: "Recommended for Bookstores", bn: "বইয়ের দোকানের সেরা পছন্দ" },
          isRecommended: true,
          summary: {
            en: "The definitive choice for mainstream publishers and full-scale online bookstores managing broad catalogs.",
            bn: "শত শত প্রকাশনা ও সাহিত্যকর্ম পরিচালনাকারী বইয়ের দোকান ও প্রকাশনা সংস্থার জন্য সেরা সমাধান।",
          },
          reasons: [
            { en: "Up to 2,500 book titles across multiple genres", bn: "২,৫০০টি বইয়ের টাইটেল পর্যন্ত ক্যাটালগ সীমা" },
            { en: "5 staff accounts for warehouse, packing, and dispatch", bn: "৫টি স্টাফ অ্যাকাউন্ট" },
            { en: "Automated Steadfast/Pathao courier booking API", bn: "কুরিয়ার এপিআই পার্সেল বুকিং" },
            { en: "Custom domain connection included", bn: "নিজস্ব কাস্টম ডোমেইন ব্যবহারের পূর্ণ সুবিধা" },
          ],
        },
        {
          tier: "scale",
          name: { en: "Scale Plan", bn: "স্কেল প্ল্যান" },
          summary: {
            en: "Engineered for nationwide publishing houses, university press networks, and high-volume book distributors.",
            bn: "সারাদেশে বিস্তৃত বড় প্রকাশনা সংস্থা ও বিশ্ববিদ্যালয় প্রেস নেটওয়ার্কের জন্য।",
          },
          reasons: [
            { en: "Unlimited book titles, editions, and staff accounts", bn: "আনলিমিটেড বইয়ের টাইটেল ও স্টাফ অ্যাকাউন্ট" },
            { en: "Priority dedicated technical support and onboarding", bn: "অগ্রাধিকারভিত্তিক কারিগরি সহায়তা" },
            { en: "Custom white-label iOS and Android reader app build", bn: "নিজস্ব ব্র্যান্ডেড মোবাইল অ্যাপ" },
          ],
        },
      ],
    },
    faqs: {
      eyebrow: {
        en: "FREQUENTLY ASKED QUESTIONS",
        bn: "সাধারণ জিজ্ঞাসা",
      },
      title: {
        en: "Bookstore Questions & Answers",
        bn: "বইয়ের দোকান সংক্রান্ত সাধারণ প্রশ্নোত্তর",
      },
      description: {
        en: "Important details on cataloging literary editions, nationwide delivery, and book fair discounts on CartX.",
        bn: "কার্টএক্সে বইয়ের ক্যাটালগ, সংস্করণ ট্র্যাকিং এবং ডেলিভারি সংক্রান্ত তথ্যাবলী।",
      },
      items: [
        {
          id: "bk-faq-1",
          question: {
            en: "Can I organize books by author, publisher, and genre?",
            bn: "বইগুলোকে কি লেখক, প্রকাশনী ও বিষয়ভিত্তিক আলাদা ক্যাটাগরিতে সাজানো যায়?",
          },
          answer: {
            en: "Yes. CartX allows you to create multi-tier category structures (such as Fiction > Thriller, or Non-Fiction > History) and tag individual authors and publishers for easy shopper discovery.",
            bn: "হ্যাঁ, আপনি কথাসাহিত্য, প্রবন্ধ, উপন্যাস ইত্যাদি ক্যাটাগরি তৈরি করতে পারেন এবং প্রতিটি বইয়ে লেখক ও প্রকাশনীর ট্যাগ যুক্ত করতে পারেন।",
          },
        },
        {
          id: "bk-faq-2",
          question: {
            en: "Does CartX support coupon codes for Boimela book fairs?",
            bn: "বইমেলা বা বিশেষ ক্যাম্পেইনে কি ডিসকাউন্ট কুপন কোড দেওয়া যাবে?",
          },
          answer: {
            en: "Yes. You can create promotional coupon codes (such as 'BOIMELA25' for 25% off) with custom usage limits, minimum order requirements, and scheduled expiry dates.",
            bn: "হ্যাঁ, আপনি বইমেলার জন্য শতকরা বা নির্দিষ্ট টাকার অঙ্কে কুপন কোড (যেমন ২৫% ছাড়) তৈরি করে নির্দিষ্ট সময়ের জন্য চালু রাখতে পারবেন।",
          },
        },
        {
          id: "bk-faq-3",
          question: {
            en: "How does nationwide parcel delivery work for remote districts?",
            bn: "প্রত্যন্ত অঞ্চলের পাঠকদের কাছে কুরিয়ারের মাধ্যমে বই কীভাবে পাঠানো যায়?",
          },
          answer: {
            en: "Through integrated connectors with Steadfast and Pathao, you can book deliveries to all 64 districts in one click directly from the CartX dashboard with automated tracking updates.",
            bn: "স্টিভফাস্ট ও পাঠাও ইন্টিগ্রেশনের মাধ্যমে আপনি এক ক্লিকে দেশের ৬৪ জেলার যেকোনো প্রান্তে পার্সেল বুকিং করতে পারবেন এবং ট্র্যাকিং আইডি পেতে পারবেন।",
          },
        },
        {
          id: "bk-faq-4",
          question: {
            en: "Can I sell both books and stationery products in the same store?",
            bn: "একই দোকানে কি বই এবং স্টেশনারি খাতা-কলম একসাথে বিক্রি করা যাবে?",
          },
          answer: {
            en: "Yes. You can manage separate category trees for books and stationery within the same storefront, maintaining distinct product attributes for each.",
            bn: "হ্যাঁ, একই ওয়েবসাইটে আপনি বই এবং স্টেশনারি উভয় পণ্যের জন্য আলাদা ক্যাটাগরি তৈরি করে অনায়াসে পরিচালনা করতে পারবেন।",
          },
        },
      ],
    },
    cta: {
      heading: {
        en: "Ready to Build Your Books & Stationery Store?",
        bn: "আপনার বই ও স্টেশনারির অনলাইন শপ তৈরিতে প্রস্তুত?",
      },
      description: {
        en: "Launch an organized, reliable online bookstore with deep catalog controls, promotional coupons, and nationwide courier dispatch on CartX.",
        bn: "লেখক ও বিষয়ভিত্তিক ক্যাটালগ, বইমেলার কুপন এবং সারাদেশে হোম ডেলিভারি সুবিধা নিয়ে আজই শুরু করুন আপনার বইয়ের অনলাইন স্টোর।",
      },
      primaryCta: {
        en: "Start Your Store",
        bn: "আপনার স্টোর শুরু করুন",
      },
      secondaryCta: {
        en: "View Pricing Plans",
        bn: "প্রাইসিং প্ল্যান দেখুন",
      },
      guaranteePill: {
        en: "14-Day Free Trial • No Credit Card Required • Instant Setup",
        bn: "১৪ দিনের ফ্রি ট্রায়াল • ক্রেডিট কার্ডের প্রয়োজন নেই • তাৎক্ষণিক সেটআপ",
      },
    },
  },
};

export function getSolutionBySlug(slug: string): SolutionDetailConfig | undefined {
  if (slug === "grocery-food") return SOLUTION_DETAILS_DATA["grocery-organic-food"];
  if (slug === "beauty-cosmetics") return SOLUTION_DETAILS_DATA["cosmetics-beauty"];
  return SOLUTION_DETAILS_DATA[slug];
}
