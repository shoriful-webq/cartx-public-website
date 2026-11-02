export type HelpCategory =
  | "getting-started"
  | "store-themes"
  | "products-inventory"
  | "orders-fulfillment"
  | "payments-settlement"
  | "courier-delivery"
  | "custom-domains"
  | "plans-billing"
  | "mobile-apps"
  | "security-privacy";

export interface HelpCategoryMeta {
  id: HelpCategory;
  nameEn: string;
  nameBn: string;
  descriptionEn: string;
  descriptionBn: string;
}

export const HELP_CATEGORIES: HelpCategoryMeta[] = [
  {
    id: "getting-started",
    nameEn: "Getting Started",
    nameBn: "শুরু করা",
    descriptionEn: "Account creation, initial onboarding, and basic store configuration.",
    descriptionBn: "অ্যাকাউন্ট তৈরি, প্রাথমিক অনবোর্ডিং এবং মৌলিক স্টোর কনফিগারেশন।",
  },
  {
    id: "store-themes",
    nameEn: "Themes & Design",
    nameBn: "থিম ও ডিজাইন",
    descriptionEn: "Visual theme customizer, brand colors, typography, and section layouts.",
    descriptionBn: "ভিজ্যুয়াল থিম কাস্টমাইজার, ব্র্যান্ড কালার, ফন্ট ও সেকশন লেআউট।",
  },
  {
    id: "products-inventory",
    nameEn: "Products & Stock",
    nameBn: "পণ্য ও ইনভেন্টরি",
    descriptionEn: "Adding products, size/color variants, pricing, and stock tracking.",
    descriptionBn: "পণ্য আপলোড, ভ্যারিয়েন্ট তৈরি, মূল্য ও স্টক ট্র্যাকিং।",
  },
  {
    id: "orders-fulfillment",
    nameEn: "Orders & Fulfillment",
    nameBn: "অর্ডার ও ফুলফিলমেন্ট",
    descriptionEn: "Managing incoming customer orders, invoices, and status progression.",
    descriptionBn: "নতুন অর্ডার ব্যবস্থাপনা, ইনভয়েস প্রিন্ট এবং স্ট্যাটাস আপডেট।",
  },
  {
    id: "payments-settlement",
    nameEn: "Payments & Payouts",
    nameBn: "পেমেন্ট ও পেআউট",
    descriptionEn: "Cash on delivery, bKash, Nagad, card gateways, and merchant payouts.",
    descriptionBn: "ক্যাশ অন ডেলিভারি, বিকাশ, নগদ, কার্ড গেটওয়ে এবং মার্চেন্ট সেটেলমেন্ট।",
  },
  {
    id: "courier-delivery",
    nameEn: "Courier & Shipping",
    nameBn: "কুরিয়ার ও ডেলিভারি",
    descriptionEn: "Steadfast, Pathao, RedX API integrations, labels, and tracking.",
    descriptionBn: "স্টেডফাস্ট, পাঠাও, রেডএক্স এপিআই ইন্টিগ্রেশন, লেবেল ও ট্র্যাকিং।",
  },
  {
    id: "custom-domains",
    nameEn: "Domains & SSL",
    nameBn: "ডোমেইন ও এসএসএল",
    descriptionEn: "Connecting custom domains, DNS records, and automated SSL certs.",
    descriptionBn: "কাস্টম ডোমেইন সংযোগ, ডিএনএস রেকর্ড এবং ফ্রি অটোমেটেড এসএসএল।",
  },
  {
    id: "plans-billing",
    nameEn: "Plans & Subscription",
    nameBn: "প্ল্যান ও সাবস্ক্রিপশন",
    descriptionEn: "Subscription tiers, 0% commission policy, renewal, and upgrades.",
    descriptionBn: "সাবস্ক্রিপশন প্ল্যান, ০% কমিশন পলিসি, রিনিউয়াল এবং আপগ্রেড।",
  },
  {
    id: "mobile-apps",
    nameEn: "White-Label Apps",
    nameBn: "হোয়াইট-লেবেল অ্যাপ",
    descriptionEn: "Custom branded iOS & Android customer and merchant mobile apps.",
    descriptionBn: "কাস্টম ব্র্যান্ডেড আইওএস ও অ্যান্ড্রয়েড গ্রাহক ও মার্চেন্ট অ্যাপস।",
  },
  {
    id: "security-privacy",
    nameEn: "Security & Privacy",
    nameBn: "নিরাপত্তা ও গোপনীয়তা",
    descriptionEn: "Store data isolation, encryption, backups, and user privacy guarantees.",
    descriptionBn: "ডেটা আইসোলেশন, এনক্রিপশন, ব্যাকআপ এবং ব্যবহারকারী গোপনীয়তা।",
  },
];

export interface HelpArticle {
  id: string;
  category: HelpCategory;
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
  capability?: string;
}

export const HELP_ARTICLES: HelpArticle[] = [
  // Getting Started
  {
    id: "gs-launch-time",
    category: "getting-started",
    questionEn: "How quickly can I set up and launch my store?",
    questionBn: "আমি কত দ্রুত স্টোর সেটআপ করে লাইভ করতে পারি?",
    answerEn:
      "Creating your account and selecting your initial store theme takes less than 2 minutes. Once you upload your initial products and configure your payment and delivery choices, your store can start taking customer orders on the same day.",
    answerBn:
      "অ্যাকাউন্ট তৈরি এবং প্রাথমিক থিম নির্বাচন করতে ২ মিনিটেরও কম সময় লাগে। পণ্য আপলোড এবং পেমেন্ট ও ডেলিভারি পছন্দ নির্ধারণ করলেই একই দিনে আপনার স্টোর অর্ডার গ্রহণের জন্য প্রস্তুত হয়।",
    capability: "Instant Self-Serve Onboarding",
  },
  {
    id: "gs-credit-card",
    category: "getting-started",
    questionEn: "Do I need a credit card to sign up for CartX?",
    questionBn: "CartX-এ সাইন আপ করতে কি ক্রেডিট কার্ড প্রয়োজন?",
    answerEn:
      "No. You do not need a credit card to register and test CartX. We support local payment options for subscription activations when you are ready to publish your store.",
    answerBn:
      "না। রেজিস্ট্রেশন ও টেস্ট করার জন্য কোনো ক্রেডিট কার্ডের প্রয়োজন নেই। স্টোর পাবলিশ করার সময় স্থানীয় পেমেন্ট পদ্ধতির মাধ্যমেই সাবস্ক্রিপশন চালু করা যায়।",
  },
  {
    id: "gs-coding-needed",
    category: "getting-started",
    questionEn: "Do I need technical or coding knowledge to manage a store?",
    questionBn: "স্টোর পরিচালনা করার জন্য কি কোনো কোডিং বা কারিগরি জ্ঞানের প্রয়োজন আছে?",
    answerEn:
      "None at all. CartX is designed for entrepreneurs, retail store owners, and team members without any programming background. Everything is configured through straightforward visual forms.",
    answerBn:
      "একদমই না। কোনো প্রোগ্রামিং অভিজ্ঞতা ছাড়াই উদ্যোক্তা ও টিম মেম্বারদের সহজে ব্যবহারের জন্য CartX-এর সহজ ভিজ্যুয়াল ইন্টারফেস তৈরি করা হয়েছে।",
  },

  // Themes & Design
  {
    id: "th-customize-colors",
    category: "store-themes",
    questionEn: "Can I customize colors, logos, and fonts for my brand?",
    questionBn: "আমি কি আমার ব্র্যান্ড অনুযায়ী রঙ, লোগো এবং ফন্ট পরিবর্তন করতে পারি?",
    answerEn:
      "Yes. The visual theme customizer allows you to upload your logo, define primary and accent color palettes, adjust banner typography, and reorder homepage sections with instant live previewing.",
    answerBn:
      "হ্যাঁ। ভিজ্যুয়াল থিম কাস্টমাইজারে লোগো আপলোড, ব্র্যান্ডের রঙ নির্বাচন, ব্যানারের ফন্ট নির্ধারণ এবং হোমপেজ সেকশনগুলো রিয়েল-টাইমে প্রিভিউ দেখে সাজানো যায়।",
    capability: "Real-time Visual Customizer",
  },
  {
    id: "th-switch-theme",
    category: "store-themes",
    questionEn: "Can I change my storefront theme later without losing products?",
    questionBn: "পরবর্তীতে পণ্য না হারিয়ে কি স্টোরের থিম পরিবর্তন করা যাবে?",
    answerEn:
      "Yes. Your products, categories, orders, and customer records are safely stored in your database independently of your presentation theme. You can switch between verified themes at any time.",
    answerBn:
      "হ্যাঁ। আপনার পণ্য, ক্যাটালগ ও অর্ডারের ডেটা থিম থেকে সম্পূর্ণ আলাদাভাবে ডাটাবেজে সুরক্ষিত থাকে। যেকোনো সময় থিম পরিবর্তন করলেও ডেটা অক্ষুণ্ণ থাকবে।",
  },

  // Products & Stock
  {
    id: "pr-variants",
    category: "products-inventory",
    questionEn: "Does CartX support multi-variant products like size and color?",
    questionBn: "CartX কি সাইজ ও রঙের মতো মাল্টি-ভ্যারিয়েন্ট প্রোডাক্ট সমর্থন করে?",
    answerEn:
      "Yes. You can configure multiple attributes (e.g., Size, Color, Material) for any product. Each variant combination can have its own independent SKU, price, and inventory count.",
    answerBn:
      "হ্যাঁ। প্রতিটি পণ্যের জন্য একাধিক বৈশিষ্ট্য (যেমন সাইজ, রং, ফ্যাব্রিক) যুক্ত করা যায় এবং প্রতিটি ভ্যারিয়েন্টের জন্য আলাদা SKU, মূল্য ও স্টক নির্ধারণ করা সম্ভব।",
  },
  {
    id: "pr-bulk-upload",
    category: "products-inventory",
    questionEn: "Can I bulk import products using Excel or CSV spreadsheets?",
    questionBn: "এক্সেল বা CSV ফাইলের মাধ্যমে কি একসাথে অনেক পণ্য আপলোড করা যায়?",
    answerEn:
      "Yes. CartX provides standard CSV import and export templates allowing you to add or update hundreds of products and stock numbers simultaneously.",
    answerBn:
      "হ্যাঁ। CartX-এর স্ট্যান্ডার্ড CSV টেমপ্লেটের মাধ্যমে শত শত পণ্য এবং তাদের ইনভেন্টরি একসাথে বাল্ক আপলোড বা আপডেট করা যায়।",
  },

  // Orders & Fulfillment
  {
    id: "or-processing",
    category: "orders-fulfillment",
    questionEn: "How does the order management workflow work?",
    questionBn: "অর্ডার ম্যানেজমেন্ট ওয়ার্কফ্লো কীভাবে কাজ করে?",
    answerEn:
      "When a customer places an order, it appears immediately on your admin dashboard with 'Pending' status. You can review customer details, verify phone numbers, assign a courier, and generate printable packing slips and invoices with one click.",
    answerBn:
      "গ্রাহক অর্ডার প্লেস করার সাথে সাথে তা 'Pending' হিসেবে অ্যাডমিন ড্যাশবোর্ডে দেখা যায়। সেখান থেকে তথ্য যাচাই করে এক ক্লিকেই কুরিয়ারে হস্তান্তর ও ইনভয়েস প্রিন্ট করা যায়।",
  },
  {
    id: "or-sms-notifications",
    category: "orders-fulfillment",
    questionEn: "Do customers receive order confirmation and tracking SMS?",
    questionBn: "গ্রাহকরা কি অর্ডার নিশ্চিতকরণ এবং ট্র্যাকিং এসএমএস পান?",
    answerEn:
      "Yes. You can connect SMS gateways to automatically dispatch order confirmations, shipping updates, and real-time courier tracking links directly to customer mobile numbers.",
    answerBn:
      "হ্যাঁ। এসএমএস গেটওয়ে সংযোগের মাধ্যমে অর্ডারের কনফার্মেশন ও লাইভ ট্র্যাকিং লিংক স্বয়ংক্রিয়ভাবে গ্রাহকের মোবাইলে পৌঁছে যায়।",
  },

  // Payments & Payouts
  {
    id: "pm-bkash-nagad",
    category: "payments-settlement",
    questionEn: "Which local payment methods are supported in Bangladesh?",
    questionBn: "বাংলাদেশে কোন কোন স্থানীয় পেমেন্ট মেথড সাপোর্ট করে?",
    answerEn:
      "CartX natively supports Cash on Delivery (COD) as well as automated online payments via bKash, Nagad, Rocket, Upay, and Visa/Mastercard credit and debit cards.",
    answerBn:
      "CartX ক্যাশ অন ডেলিভারি (COD) এর পাশাপাশি বিকাশ, নগদ, রকেট, উপায় এবং ভিসা/মাস্টারকার্ড কার্ড গেটওয়ে সরাসরি সমর্থন করে।",
  },
  {
    id: "pm-transaction-fees",
    category: "payments-settlement",
    questionEn: "Does CartX charge any platform commission on sales?",
    questionBn: "বিক্রয়ের ওপর CartX কি কোনো প্ল্যাটফর্ম কমিশন কাটে?",
    answerEn:
      "No. CartX charges 0% platform transaction commission on all orders across all plans. You only pay standard gateway interchange fees charged directly by payment networks (such as bKash MFS rates).",
    answerBn:
      "না। CartX কোনো প্ল্যানেই কোনো প্ল্যাটফর্ম লেনদেন কমিশন কাটে না (০% কমিশন)। শুধুমাত্র সংশ্লিষ্ট পেমেন্ট গেটওয়ের নিজস্ব নির্ধারিত সরকারি/ব্যাংক চার্জ প্রযোজ্য হয়।",
    capability: "0% CartX Platform Commission",
  },
  {
    id: "pm-payout-timing",
    category: "payments-settlement",
    questionEn: "When and how do online payment funds deposit into my account?",
    questionBn: "অনলাইন পেমেন্টের টাকা কখন এবং কীভাবে আমার ব্যাংক অ্যাকাউন্টে জমা হয়?",
    answerEn:
      "Funds collected through automated payment gateways settle directly into your designated commercial bank account according to your merchant agreement with the payment gateway partner (typically T+1 or T+2 banking business days).",
    answerBn:
      "গেটওয়ের মাধ্যমে সংগৃহীত টাকা সরাসরি আপনার নির্দিষ্ট ব্যাংক অ্যাকাউন্টে সংশ্লিষ্ট গেটওয়ে পার্টনারের নিষ্পত্তি শিডিউল (সাধারণত T+1 বা T+2 কার্যদিবস) অনুযায়ী সরাসরি জমা হয়।",
  },

  // Courier & Shipping
  {
    id: "cr-integrated-couriers",
    category: "courier-delivery",
    questionEn: "Which courier services are directly integrated with CartX?",
    questionBn: "কোন কোন কুরিয়ার সার্ভিস CartX-এর সাথে সরাসরি ইন্টিগ্রেটেড?",
    answerEn:
      "CartX integrates directly via API with Bangladesh's leading parcel delivery networks, including Steadfast Courier, Pathao Courier, RedX Logistics, and Paperfly.",
    answerBn:
      "CartX-এ বাংলাদেশের শীর্ষস্থানীয় ডেলিভারি নেটওয়ার্ক যেমন স্টেডফাস্ট কুরিয়ার, পাঠাও কুরিয়ার, রেডএক্স এবং পেপারফ্লাই সরাসরি এপিআই-এর মাধ্যমে যুক্ত।",
  },
  {
    id: "cr-auto-consignment",
    category: "courier-delivery",
    questionEn: "Can I generate courier consignments and print barcode labels?",
    questionBn: "আমি কি সরাসরি ড্যাশবোর্ড থেকে কনসাইনমেন্ট ও বারকোড লেবেল তৈরি করতে পারব?",
    answerEn:
      "Yes. Once your courier API keys are connected, click 'Book Delivery' on any order to instantly generate a parcel tracking number and print standard thermal or A4 shipping labels.",
    answerBn:
      "হ্যাঁ। কুরিয়ার এপিআই কানেক্ট করার পর এক ক্লিকেই ট্র্যাকিং নম্বর জেনারেট করা যায় এবং থার্মাল বা এ৪ সাইজের শিপিং লেবেল প্রিন্ট করা যায়।",
  },

  // Custom Domains & SSL
  {
    id: "dm-custom-domain",
    category: "custom-domains",
    questionEn: "Can I connect my own domain like `mybrand.com`?",
    questionBn: "আমি কি `mybrand.com`-এর মতো নিজস্ব ডোমেইন কানেক্ট করতে পারব?",
    answerEn:
      "Yes. On Growth, Business, and Enterprise plans, you can connect your existing top-level domain. We provide explicit DNS records (A Record and CNAME) for simple, one-time setup.",
    answerBn:
      "হ্যাঁ। Growth, Business এবং Enterprise প্ল্যানে আপনার নিজস্ব ডোমেইন কানেক্ট করা যায়। আমরা সহজ নির্দেশিকা সহ প্রয়োজনীয় DNS রেকর্ড প্রদান করি।",
  },
  {
    id: "dm-free-ssl",
    category: "custom-domains",
    questionEn: "Is SSL encryption included for my custom domain?",
    questionBn: "কাস্টম ডোমেইনের সাথে কি ফ্রি SSL এনক্রিপশন অন্তর্ভুক্ত আছে?",
    answerEn:
      "Yes. CartX automatically provisions and auto-renews free Let's Encrypt TLS/SSL certificates for every connected domain, ensuring secure HTTPS padlock browsing for your customers.",
    answerBn:
      "হ্যাঁ। CartX প্রতিটি সংযুক্ত ডোমেইনের জন্য সম্পূর্ণ বিনামূল্যে স্বয়ংক্রিয় TLS/SSL সার্টিফিকেট ইস্যু ও রিনিউ করে, যা নিরাপদ ব্রাউজিং নিশ্চিত করে।",
  },

  // Plans & Billing
  {
    id: "pl-upgrade-downgrade",
    category: "plans-billing",
    questionEn: "Can I upgrade or downgrade my plan at any time?",
    questionBn: "আমি কি যেকোনো সময় প্ল্যান আপগ্রেড বা পরিবর্তন করতে পারি?",
    answerEn:
      "Yes. You can upgrade your subscription from your billing dashboard at any time. When upgrading, any unused balance from your current cycle is prorated automatically.",
    answerBn:
      "হ্যাঁ। ড্যাশবোর্ডের বিলিং সেকশন থেকে যেকোনো সময় প্ল্যান আপগ্রেড করা যায়। আপগ্রেডের সময় পূর্ববর্তী সাইকেলের অব্যবহৃত ব্যালেন্স স্বয়ংক্রিয়ভাবে সমন্বয় করা হয়।",
  },
  {
    id: "pl-hidden-fees",
    category: "plans-billing",
    questionEn: "Are there any hidden charges or setup fees?",
    questionBn: "কোনো গোপন চার্জ বা অতিরিক্ত সেটআপ ফি আছে কি?",
    answerEn:
      "No. Our pricing is completely transparent. What you see on the pricing page is the total software subscription fee. We never impose hidden bandwidth charges, maintenance fees, or sales commissions.",
    answerBn:
      "না। আমাদের মূল্য সম্পূর্ণ স্বচ্ছ। প্রাইসিং পেজে প্রদর্শিত সাবস্ক্রিপশন ফি-ই একমাত্র খরচ। কোনো লুকানো চার্জ, ব্যান্ডউইথ ফি বা কমিশন নেই।",
  },

  // White-Label Mobile Apps
  {
    id: "mb-app-stores",
    category: "mobile-apps",
    questionEn: "Are white-label apps published under our own developer accounts?",
    questionBn: "হোয়াইট-লেবেল অ্যাপ কি আমাদের নিজস্ব ডেভেলপার অ্যাকাউন্টে পাবলিশ করা হয়?",
    answerEn:
      "Yes. To ensure 100% brand ownership and compliance with Apple and Google policies, apps are published under your company's official Apple Developer ($99/year) and Google Play Console ($25 one-time) accounts. We guide your team through developer registration.",
    answerBn:
      "হ্যাঁ। অ্যাপের শতভাগ মালিকানা নিশ্চিত করার জন্য অ্যাপল ($৯৯/বছর) এবং গুগল প্লে ($২৫ একবার) ডেভেলপার অ্যাকাউন্টে আপনার নিজস্ব প্রতিষ্ঠানের নামেই অ্যাপ পাবলিশ করা হয়।",
  },
  {
    id: "mb-catalog-sync",
    category: "mobile-apps",
    questionEn: "Does the mobile app synchronize automatically with my web store?",
    questionBn: "মোবাইল অ্যাপ কি স্বয়ংক্রিয়ভাবে ওয়েব স্টোরের সাথে সিঙ্ক থাকে?",
    answerEn:
      "Yes. Product additions, price updates, inventory stock levels, and discount codes synchronize in real time between your website and your iOS/Android applications without separate data entry.",
    answerBn:
      "হ্যাঁ। পণ্য আপলোড, মূল্য পরিবর্তন, স্টক এবং ডিসকাউন্ট কোড আলাদা ইনপুট ছাড়াই ওয়েব স্টোর ও মোবাইল অ্যাপের মধ্যে রিয়েল-টাইমে সিঙ্ক থাকে।",
  },

  // Security & Privacy
  {
    id: "sec-data-ownership",
    category: "security-privacy",
    questionEn: "Who owns my customer records and transaction data?",
    questionBn: "আমার গ্রাহকদের তথ্য এবং লেনদেনের তথ্যের মালিক কে?",
    answerEn:
      "You do. WebQ LTD and CartX do not claim ownership of your customer lists, sales figures, or business data. Your data is isolated in separate database tenants and will never be shared or monetized.",
    answerBn:
      "সম্পূর্ণরূপে আপনি। WebQ LTD বা CartX কখনোই আপনার গ্রাহক বা বিক্রয় তথ্যের ওপর মালিকানা দাবি করে না। আপনার ডেটা সম্পূর্ণ নিরাপদ ও আইসোলেটেড থাকে।",
  },
  {
    id: "sec-backups",
    category: "security-privacy",
    questionEn: "How frequently is store data backed up?",
    questionBn: "স্টোরের ডেটা কত ঘন ঘন ব্যাকআপ নেওয়া হয়?",
    answerEn:
      "Automated encrypted database snapshots run daily with point-in-time recovery capabilities to protect your business against data corruption or accidental deletions.",
    answerBn:
      "প্রতিদিন স্বয়ংক্রিয় এনক্রিপ্টেড ব্যাকআপ সম্পন্ন হয়, যা যেকোনো অনাকাঙ্ক্ষিত পরিস্থিতিতে তথ্য দ্রুত পুনরুদ্ধারের নিশ্চয়তা দেয়।",
  },
];

