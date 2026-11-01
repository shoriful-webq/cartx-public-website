import {
  IntegrationItem,
  IntegrationCategory,
  IntegrationCategoryOverview,
  IntegrationWorkflowStep,
  IntegrationSecurityPillar,
} from "./types";

export const PUBLISHED_INTEGRATION_SLUGS = [
  "bkash",
  "nagad",
  "sslcommerz",
  "rocket",
  "pathao",
  "steadfast",
  "redx",
  "ecourier",
  "meta-pixel",
  "google-analytics",
  "sms-gateway",
  "custom-domains",
] as const;

export type PublishedIntegrationSlug = typeof PUBLISHED_INTEGRATION_SLUGS[number];

export const INTEGRATIONS_REGISTRY: Record<string, IntegrationItem> = {
  // ─────────────────────────────────────────────────────────────
  // 1. bKash Merchant Checkout
  // ─────────────────────────────────────────────────────────────
  bkash: {
    slug: "bkash",
    name: "bKash Merchant Checkout",
    category: "payments",
    categoryLabel: {
      en: "Payment Gateway",
      bn: "পেমেন্ট গেটওয়ে",
    },
    tagline: {
      en: "Automated instant checkout verification via official bKash Merchant API",
      bn: "অফিসিয়াল বিকাশ মার্চেন্ট এপিআই-এর মাধ্যমে দ্রুত ও স্বয়ংক্রিয় পেমেন্ট যাচাই",
    },
    description: {
      en: "Direct tokenized API integration with Bangladesh's largest MFS network. Customers authenticate payments seamlessly with PIN/OTP on mobile or desktop.",
      bn: "বাংলাদেশের বৃহত্তম মোবাইল ফিন্যান্সিয়াল সার্ভিসের সাথে ডিরেক্ট টোকেনাইজড এপিআই সংযোগ। ওটিপি এবং পিনের মাধ্যমে ক্রেতারা সহজে দ্রুত পেমেন্ট সম্পন্ন করতে পারেন।",
    },
    status: "available",
    iconName: "CreditCard",
    iconColor: "text-pink-600 dark:text-pink-400",
    iconBg: "bg-pink-500/10",
    eligiblePlans: ["starter", "growth", "scale"],

    providerOverview: {
      overview: {
        en: "bKash Merchant Checkout enables direct, tokenized digital payments on your CartX storefront without manual transaction ID verification.",
        bn: "বিকাশ মার্চেন্ট চেকআউট আপনার কার্টএক্স স্টোরে সরাসরি ডিজিটাল পেমেন্ট সুবিধা দেয়, কোনো ম্যানুয়াল ট্রানজেকশন আইডি যাচাইয়ের ঝামেলা ছাড়াই।",
      },
      providerUrl: "https://www.bkash.com/business",
      actionLabel: { en: "Configure in Admin", bn: "অ্যাডমিন প্যানেলে কনফিগার করুন" },
      actionHref: "/start",
    },

    whatItDoes: {
      purpose: {
        en: "To automate digital payment collection for online retailers across Bangladesh, eliminating fake screenshot fraud and manual payment confirmation delays.",
        bn: "অনলাইন বিক্রেতাদের জন্য পেমেন্ট গ্রহণ প্রক্রিয়া সম্পূর্ণ স্বয়ংক্রিয় করা, যা ভুয়া স্ক্রিনশট ও ম্যানুয়াল টাকা খোঁজার ঝামেলা দূর করে।",
      },
      businessProblem: {
        en: "Manual bKash 'Send Money' or 'Personal Number' transactions require customers to copy TrxIDs into text boxes, causing order delays, reconciliation errors, and high cart abandonment.",
        bn: "পার্সোনাল নম্বরে সেন্ড মানি বা ম্যানুয়াল ট্রানজেকশন আইডি কপি করার জটিলতার কারণে বহু ক্রেতা কেনাকাটা অসম্পূর্ণ রেখে চলে যায় এবং ভুলের সুযোগ থাকে।",
      },
      howItWorks: {
        en: "When a customer selects bKash at checkout, a secure tokenized payment overlay opens. Upon entering their bKash number, OTP, and PIN, bKash verifies the balance and sends an encrypted instant webhook to CartX, immediately marking the order as Paid.",
        bn: "চেকআউটে বিকাশ নির্বাচন করলে সিকিউর বিকাশ উইন্ডো ওপেন হয়। নম্বর, ওটিপি এবং পিন দেওয়ার সাথে সাথে বিকাশ ব্যালেন্স ভেরিফাই করে কার্টএক্সে এনক্রিপ্টেড ইনস্ট্যান্ট ওয়েবহুক পাঠায় এবং অর্ডারটি পেইড হিসেবে চিহ্নিত হয়।",
      },
      benefits: [
        { en: "Instant order status transition to 'Paid' within 3 seconds", bn: "৩ সেকেন্ডের মধ্যে অর্ডার স্ট্যাটাস 'পেইড'-এ পরিবর্তিত হয়" },
        { en: "Eliminates fraudulent transaction ID entries and fake screenshots", bn: "ভুয়া ট্রানজেকশন আইডি এবং এডিটেড স্ক্রিনশট জালিয়াতি বন্ধ করে" },
        { en: "Auto-refund initiation directly from the CartX merchant dashboard", bn: "কার্টএক্স ড্যাশবোর্ড থেকে এক ক্লিকে সরাসরি রিফান্ড দেওয়ার সুবিধা" },
        { en: "Zero checkout redirects on mobile web and webview shopping apps", bn: "মোবাইল ব্রাউজার বা শপিং অ্যাপে কোনো বাড়তি রিডাইরেক্ট ছাড়াই পেমেন্ট" },
      ],
    },

    requirements: {
      accountRequirements: [
        { en: "Active bKash Merchant Account (issued by bKash Limited)", bn: "বিকাশ লিমিটেড অনুমোদিত সক্রিয় মার্চেন্ট অ্যাকাউন্ট" },
        { en: "Registered Trade License or verified e-TIN", bn: "হালনাগাদ ট্রেড লাইসেন্স বা ভেরিফায়েড ই-টিন" },
        { en: "bKash Merchant Portal credentials (App Key, App Secret, Username, Password)", bn: "বিকাশ মার্চেন্ট পোর্টাল ক্রিডেনশিয়ালস (App Key, Secret, Username, Password)" },
      ],
      approvalProcess: {
        en: "Merchant must sign up via bKash Commercial onboarding. Once approved, API credentials can be generated in the bKash Merchant Developer Portal and pasted into CartX.",
        bn: "বিকাশের অফিসিয়াল কমার্শিয়াল অনবোর্ডিং সম্পন্ন করতে হবে। অনুমোদন পাওয়ার পর ডেভেলপার পোর্টাল থেকে এপিআই ক্রিডেনশিয়াল কার্টএক্সে পেস্ট করতে হবে।",
      },
      supportedRegions: { en: "Bangladesh (BDT currency)", bn: "বাংলাদেশ (টাকা কারেন্সি)" },
      supportedCurrencies: { en: "BDT (৳)", bn: "বাংলাদেশি টাকা (৳)" },
      planEligibilityNote: {
        en: "Available on all CartX plans (Starter, Growth, Scale) without additional platform gateway fees.",
        bn: "কার্টএক্সের কোনো অতিরিক্ত গেটওয়ে চার্জ ছাড়াই স্টার্টার, গ্রোথ এবং স্কেল সকল প্ল্যানে সক্রিয় করা যায়।",
      },
    },

    capabilities: [
      { id: "bkash-cap1", title: { en: "Tokenized Instant Payment Execution", bn: "টোকেনাইজড ইনস্ট্যান্ট পেমেন্ট" }, description: { en: "Immediate debit and credit verification using bKash v1.2 tokenized protocol.", bn: "বিকাশ টোকেনাইজড প্রোটোকল ব্যবহার করে তাৎক্ষণিক টাকা ডেবিট ও ক্রেডিট যাচাই।" }, isSupported: true },
      { id: "bkash-cap2", title: { en: "Automated Status Webhooks", bn: "অটোমেটেড স্ট্যাটাস ওয়েবহুক" }, description: { en: "Instant notification to store admin when payment succeeds or fails.", bn: "পেমেন্ট সফল বা ব্যর্থ হওয়ার সাথে সাথে স্টোর অ্যাডমিনে ইনস্ট্যান্ট নোটিফিকেশন।" }, isSupported: true },
      { id: "bkash-cap3", title: { en: "One-Click In-App Refunds", bn: "এক-ক্লিক ইন-অ্যাপ রিফান্ড" }, description: { en: "Issue partial or full customer refunds directly from the order page.", bn: "অর্ডার পেজ থেকেই আংশিক বা পুরো টাকা গ্রাহকের ওয়ালেটে ফেরত দেওয়ার সুবিধা।" }, isSupported: true },
      { id: "bkash-cap4", title: { en: "Automated Payment Reconciliation", bn: "স্বয়ংক্রিয় পেমেন্ট রিকনসিলিয়েশন" }, description: { en: "Matches order numbers with bKash settlement reports automatically.", bn: "বিকাশ সেটেলমেন্ট রিপোর্টের সাথে অর্ডারের টাকার পরিমাণ স্বয়ংক্রিয়ভাবে মেলানো।" }, isSupported: true },
    ],

    setupSteps: [
      {
        stepNumber: 1,
        title: { en: "Obtain bKash Merchant API Credentials", bn: "বিকাশ মার্চেন্ট এপিআই ক্রিডেনশিয়াল সংগ্রহ করুন" },
        description: {
          en: "Log in to the bKash Merchant Developer Portal and generate your App Key, App Secret, API Username, and API Password for your live merchant account.",
          bn: "বিকাশ মার্চেন্ট ডেভেলপার পোর্টালে লগইন করে লাইভ অ্যাকাউন্টের App Key, App Secret, Username এবং Password কপি করুন।",
        },
        tip: { en: "Ensure your bKash merchant account is in 'Live Mode', not 'Sandbox'.", bn: "নিশ্চিত করুন আপনার বিকাশ মার্চেন্ট অ্যাকাউন্টটি 'লাইভ মোড'-এ আছে, 'স্যান্ডবক্স' নয়।" },
      },
      {
        stepNumber: 2,
        title: { en: "Configure in CartX Store Admin", bn: "কার্টএক্স স্টোর অ্যাডমিনে কনফিগার করুন" },
        description: {
          en: "Go to Settings → Payments → bKash in your CartX dashboard. Enter your API credentials securely.",
          bn: "আপনার কার্টএক্স ড্যাশবোর্ডে Settings → Payments → bKash-এ যান এবং সংগৃহীত এপিআই তথ্যগুলো ইনপুট দিন।",
        },
        codeSnippet: "BKASH_APP_KEY=your_app_key_here\nBKASH_APP_SECRET=your_secret_here\nBKASH_USERNAME=your_username\nBKASH_PASSWORD=your_password",
      },
      {
        stepNumber: 3,
        title: { en: "Execute Test Order & Enable", bn: "টেস্ট অর্ডার সম্পন্ন করে সক্রিয় করুন" },
        description: {
          en: "Use CartX's 'Test Connection' button to verify API connectivity. Place a ৳10 test transaction to verify instant webhook confirmation, then toggle status to Active.",
          bn: "কার্টএক্সের 'Test Connection' বাটনে ক্লিক করে সংযোগ পরীক্ষা করুন। একটি ১০ টাকার টেস্ট ট্রানজেকশন চালিয়ে অর্ডার নিশ্চিত হলে স্ট্যাটাস অ্যাক্টিভ করে দিন।",
        },
      },
    ],

    dataExchanged: {
      summary: {
        en: "CartX transmits only minimum required transaction parameters to bKash and receives status confirmations via secure webhooks.",
        bn: "কার্টএক্স শুধুমাত্র প্রয়োজনীয় ট্রানজেকশন ডেটা বিকাশে পাঠায় এবং নিরাপদ ওয়েবহুকের মাধ্যমে পেমেন্ট স্ট্যাটাস গ্রহণ করে।",
      },
      sensitiveDataNote: {
        en: "Customer bKash PINs, OTPs, and wallet passwords are never entered on or transmitted through CartX servers. Authentication happens entirely within bKash's secured frame.",
        bn: "গ্রাহকের বিকাশ পিন, ওটিপি বা ওয়ালেট পাসওয়ার্ড কখনোই কার্টএক্সের সার্ভারে আসে না। সকল অথেন্টিকেশন সরাসরি বিকাশের নিরাপদ পেমেন্ট ফ্রেমে সম্পন্ন হয়।",
      },
      items: [
        {
          direction: "sent",
          title: { en: "Data Sent to bKash", bn: "বিকাশে প্রেরিত তথ্য" },
          fields: [
            { en: "Order Amount (in BDT)", bn: "অর্ডারের মোট মূল্য (টাকায়)" },
            { en: "Unique Merchant Invoice Number", bn: "ইউনিক মার্চেন্ট ইনভয়েস নম্বর" },
            { en: "CartX Callback & Webhook URL", bn: "কার্টএক্স কলব্যাক ও ওয়েবহুক ইউআরএল" },
          ],
          note: { en: "Transmitted via HTTPS POST with tokenized Bearer authentication.", bn: "টোকেনাইজড বিয়ারার অথেন্টিকেশন সহ এনক্রিপ্টেড এইচটিটিপিএস-এ প্রেরিত।" },
        },
        {
          direction: "received",
          title: { en: "Data Received from bKash", bn: "বিকাশ থেকে প্রাপ্ত তথ্য" },
          fields: [
            { en: "bKash Payment ID & TrxID", bn: "বিকাশ পেমেন্ট আইডি ও TrxID" },
            { en: "Transaction Timestamp", bn: "ট্রানজেকশনের সঠিক সময়" },
            { en: "Masked Customer Wallet Number (e.g. 017****1234)", bn: "মাস্ক করা গ্রাহকের মোবাইল নম্বর (যেমন: 017****1234)" },
            { en: "Payment Status (Completed / Failed / Cancelled)", bn: "পেমেন্ট স্ট্যাটাস (কমপ্লিটেড / ফেইল্ড / ক্যানসেল্ড)" },
          ],
          note: { en: "Processed securely and stored alongside order receipt records.", bn: "নিরাপদে প্রসেস করে অর্ডারের ইনভয়েস রেকর্ডের সাথে সংরক্ষণ করা হয়।" },
        },
      ],
    },

    securityNotes: {
      credentialStorage: {
        en: "App Secret and API passwords are encrypted at rest using AES-256 in CartX's isolated key vault.",
        bn: "অ্যাপ সিক্রেট এবং পাসওয়ার্ড কার্টএক্সের আইসোলেটেড কি-ভল্টে AES-256 এনক্রিপশনে সংরক্ষিত থাকে।",
      },
      permissionScope: {
        en: "bKash API token scope is restricted strictly to payment creation, status querying, and refund processing.",
        bn: "বিকাশ এপিআই টোকেনের ক্ষমতা শুধুমাত্র পেমেন্ট গ্রহণ, স্ট্যাটাস যাচাই এবং রিফান্ডের মধ্যে সীমাবদ্ধ।",
      },
      webhookVerification: {
        en: "Incoming webhooks are verified against bKash public certificates and signature headers to prevent spoofed callbacks.",
        bn: "বিকাশের ইনকামিং ওয়েবহুক প্রতিটি রিকোয়েস্টে ডিজিটাল সিগনেচার যাচাই করে ভুয়া কলব্যাক প্রতিহত করে।",
      },
      bestPractices: [
        { en: "Never share API username, secret, or password with third parties or contractors", bn: "কখনোই বিকাশ এপিআই সিক্রেট বা পাসওয়ার্ড কারো সাথে শেয়ার করবেন না" },
        { en: "Rotate API credentials every 90 days in the bKash Merchant Portal", bn: "বিকাশ মার্চেন্ট পোর্টালে প্রতি ৯০ দিন পর পর এপিআই পাসওয়ার্ড পরিবর্তন করুন" },
        { en: "Always test in Sandbox before updating live production credentials", bn: "লাইভ প্রোডাকশন ক্রিডেনশিয়াল আপডেট করার পূর্বে সবসময় স্যান্ডবক্সে টেস্ট করুন" },
      ],
    },

    limitations: {
      unsupportedOperations: [
        { en: "Direct subscription recurring automatic debits (mandate billing)", bn: "স্বয়ংক্রিয় মাসিক সাবস্ক্রিপশন ডেবিট সুবিধা (রিক্যারিং ম্যান্ডেট)" },
        { en: "Cross-border international currency payments (BDT only)", bn: "আন্তর্জাতিক বিদেশি মুদ্রায় পেমেন্ট গ্রহণ (শুধুমাত্র বাংলাদেশি টাকা)" },
      ],
      feeStructureNotice: {
        en: "bKash charges standard commercial merchant gateway processing commission (typically 1.2% to 1.5% as per your bilateral agreement with bKash). CartX charges 0% additional commission.",
        bn: "বিকাশ তাদের বাণিজ্যিক চুক্তি অনুযায়ী ১.২% থেকে ১.৫% গেটওয়ে কমিশন কেটে নেয়। কার্টএক্স কোনো অতিরিক্ত ট্রানজেকশন ফি কাটে না।",
      },
      regionalRestrictions: {
        en: "Requires valid Bangladesh trade license and local bank account for settlement.",
        bn: "সেটেলমেন্টের জন্য বৈধ বাংলাদেশি ট্রেড লাইসেন্স ও লোকাল ব্যাংক অ্যাকাউন্ট থাকা আবশ্যক।",
      },
    },

    troubleshooting: [
      {
        issue: { en: "Error 2005: Invalid Credentials or Password Expired", bn: "এরর ২০০৫: ভুল ক্রিডেনশিয়াল বা মেয়াদোত্তীর্ণ পাসওয়ার্ড" },
        cause: { en: "Your bKash API username, password, or App Key is mismatched or was expired on bKash portal.", bn: "বিকাশ মার্চেন্ট পোর্টালে দেওয়া পাসওয়ার্ড বা অ্যাপ কি-তে অমিল রয়েছে বা মেয়াদ শেষ হয়েছে।" },
        resolution: { en: "Log in to the bKash Merchant Portal, reset API password, copy new keys, and re-save in CartX.", bn: "বিকাশ মার্চেন্ট পোর্টালে লগইন করে নতুন পাসওয়ার্ড জেনারেট করে কার্টএক্সে আবার সেভ করুন।" },
      },
      {
        issue: { en: "Customer Cancelled: Checkout closed without completion", bn: "গ্রাহক ক্যানসেল করেছেন: পেমেন্ট সম্পন্ন না করে উইন্ডো বন্ধ করা" },
        cause: { en: "Customer closed the bKash popup or pressed back button before entering PIN.", bn: "গ্রাহক পিন দেওয়ার পূর্বে পপআপ উইন্ডো বন্ধ করেছেন বা ব্যাক বাটনে চাপ দিয়েছেন।" },
        resolution: { en: "Order remains in 'Pending Payment' status. CartX will prompt the customer to retry.", bn: "অর্ডারটি 'পেন্ডিং পেমেন্ট' অবস্থায় থাকবে এবং গ্রাহক পুনরায় পেমেন্টের সুযোগ পাবেন।" },
      },
      {
        issue: { en: "Webhook Delivery Timeout: Order still shows pending", bn: "ওয়েবহুক টাইমআউট: টাকা কেটেছে কিন্তু অর্ডার পেন্ডিং" },
        cause: { en: "Network glitch between bKash server and store callback webhook listener.", bn: "বিকাশ সার্ভার ও কার্টএক্সের মধ্যে সাময়িক নেটওয়ার্ক বাফার।" },
        resolution: { en: "Click 'Query Payment Status' on the CartX order page to sync directly with bKash API.", bn: "কার্টএক্স অর্ডার পেজে 'Query Payment Status' বাটনে ক্লিক করলেই সরাসরি বিকাশ থেকে স্ট্যাটাস সিঙ্ক হয়ে যাবে।" },
      },
    ],

    faqs: [
      {
        id: "bkash-faq1",
        question: { en: "How long does it take for money to reach my bank account?", bn: "বিকাশের টাকা ব্যাংক অ্যাকাউন্টে জমা হতে কত সময় লাগে?" },
        answer: { en: "bKash settles funds directly into your linked bank account on a T+1 business day basis, managed automatically by bKash Limited.", bn: "বিকাশ লিমিটেড স্বয়ংক্রিয়ভাবে পরবর্তী কর্মদিবসে (T+1) আপনার লিঙ্ক করা ব্যাংক অ্যাকাউন্টে টাকা স্থানান্তর করে।" },
      },
      {
        id: "bkash-faq2",
        question: { en: "Can customers pay from any bKash account (Personal / Agent)?", bn: "গ্রাহক কি যেকোনো বিকাশ অ্যাকাউন্ট থেকে পেমেন্ট করতে পারবে?" },
        answer: { en: "Customers can pay from any active personal bKash wallet. Agent wallets are strictly restricted by bKash regulations.", bn: "যেকোনো সক্রিয় পার্সোনাল বিকাশ ওয়ালেট থেকে পেমেন্ট করা যাবে। বাংলাদেশ ব্যাংকের নিয়মানুযায়ী এজেন্ট ওয়ালেট থেকে পেমেন্ট গ্রহণযোগ্য নয়।" },
      },
      {
        id: "bkash-faq3",
        question: { en: "Does CartX charge transaction fees on bKash payments?", bn: "কার্টএক্স কি বিকাশ পেমেন্টের ওপর কোনো ট্রানজেকশন ফি কাটে?" },
        answer: { en: "No. CartX charges 0% transaction commission on all plans. You only pay bKash's official merchant processing fee.", bn: "না। কার্টএক্স কোনো ট্রানজেকশন কমিশন কাটে না। আপনি কেবল বিকাশের অফিসিয়াল গেটওয়ে চার্জ পরিশোধ করবেন।" },
      },
      {
        id: "bkash-faq4",
        question: { en: "Can I issue refunds if an item is out of stock?", bn: "পণ্য স্টক-আউট হলে কি সরাসরি বিকাশ রিফান্ড দেওয়া সম্ভব?" },
        answer: { en: "Yes. From the CartX order management page, click 'Refund bKash' to credit the customer's wallet instantly.", bn: "হ্যাঁ। কার্টএক্স অর্ডার পেজ থেকে 'Refund bKash' বাটনে চাপ দিয়ে ক্রেতার বিকাশ অ্যাকাউন্টে সরাসরি টাকা ফেরত পাঠাতে পারবেন।" },
      },
    ],

    relatedSlugs: ["nagad", "sslcommerz", "pathao"],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Nagad Payment Gateway
  // ─────────────────────────────────────────────────────────────
  nagad: {
    slug: "nagad",
    name: "Nagad Gateway",
    category: "payments",
    categoryLabel: {
      en: "Payment Gateway",
      bn: "পেমেন্ট গেটওয়ে",
    },
    tagline: {
      en: "Direct merchant payment collection via Nagad digital financial service",
      bn: "নগদ ডিজিটাল ফিন্যান্সিয়াল সার্ভিসের মাধ্যমে সরাসরি মার্চেন্ট পেমেন্ট গ্রহণ",
    },
    description: {
      en: "Official integration with Bangladesh Post Office's digital MFS. Supports instant verification, tokenized authorization, and automatic transaction status reconciliation.",
      bn: "ডাক বিভাগের ডিজিটাল লেনদেন সেবা নগদের অফিসিয়াল পেমেন্ট ইন্টিগ্রেশন। দ্রুত ওটিপি যাচাই ও স্বয়ংক্রিয় রিকনসিলিয়েশন সাপোর্ট করে।",
    },
    status: "available",
    iconName: "CreditCard",
    iconColor: "text-orange-600 dark:text-orange-400",
    iconBg: "bg-orange-500/10",
    eligiblePlans: ["starter", "growth", "scale"],

    providerOverview: {
      overview: {
        en: "Nagad Gateway provides seamless, low-cost digital payments across Bangladesh with direct merchant API settlement.",
        bn: "নগদ গেটওয়ের মাধ্যমে বাংলাদেশের যেকোনো প্রান্ত থেকে সাশ্রয়ী খরচে সরাসরি ডিজিটাল পেমেন্ট সংগ্রহ করা যায়।",
      },
      providerUrl: "https://nagad.com.bd/business",
      actionLabel: { en: "Configure in Admin", bn: "অ্যাডমিনে কনফিগার করুন" },
      actionHref: "/start",
    },

    whatItDoes: {
      purpose: {
        en: "To allow merchants to accept payments from Nagad wallet holders with instant automated reconciliation and zero manual TrxID verification.",
        bn: "নগদ গ্রাহকদের কাছ থেকে স্বয়ংক্রিয়ভাবে পেমেন্ট গ্রহণ এবং কোনো ম্যানুয়াল ট্রানজেকশন আইডি খোঁজা ছাড়াই অর্ডার কনফার্ম করা।",
      },
      businessProblem: {
        en: "Many online shoppers prefer Nagad due to widespread adoption and lower cash-out fees. Without direct API checkout, merchants risk lost sales and verification mistakes.",
        bn: "সহজ ক্যাশ-আউট সুবিধার কারণে বহু ক্রেতা নগদ পছন্দ করেন। সরাসরি এপিআই না থাকলে সেলস হারানো এবং ভেরিফিকেশনে ভুলের ঝুঁকি থাকে।",
      },
      howItWorks: {
        en: "At checkout, customers choose Nagad and enter their account number. After OTP and PIN validation on Nagad's secure interface, Nagad sends signed server-to-server confirmation to CartX, updating order payment status in real-time.",
        bn: "চেকআউটে নগদ নির্বাচন করে নম্বর দিলে নগদের পেজে ওটিপি ও পিন ভেরিফিকেশন সম্পন্ন হয়। সাথে সাথে নগদের সার্ভার থেকে কার্টএক্সে সাইনড কনফার্মেশন আসে এবং অর্ডার পেইড হয়।",
      },
      benefits: [
        { en: "Fast checkout completion in under 5 seconds", bn: "৫ সেকেন্ডের কম সময়ে পেমেন্ট সম্পন্ন করার সুবিধা" },
        { en: "High customer reach across urban and rural Bangladesh", bn: "শহর ও গ্রাম উভয় অঞ্চলের কোটি কোটি নগদ ব্যবহারকারীর কাছে পৌঁছানোর সুযোগ" },
        { en: "Direct settlement to merchant's commercial bank account", bn: "মার্চেন্টের ব্যাংক অ্যাকাউন্টে সরাসরি টাকা সেটেলমেন্টের নিশ্চয়তা" },
        { en: "Zero checkout redirection on desktop and mobile web", bn: "মোবাইল ও ডেস্কটপ উভয় ডিভাইসেই নিরবচ্ছিন্ন পেমেন্ট অভিজ্ঞতা" },
      ],
    },

    requirements: {
      accountRequirements: [
        { en: "Approved Nagad Merchant Account", bn: "অনুমোদিত নগদ মার্চেন্ট অ্যাকাউন্ট" },
        { en: "Valid Trade License, e-TIN, and National ID (NID)", bn: "ট্রেড লাইসেন্স, ই-টিন এবং জাতীয় পরিচয়পত্র" },
        { en: "Nagad Merchant ID, Public Key, and Private Key", bn: "নগদ মার্চেন্ট আইডি, পাবলিক কি এবং প্রাইভেট কি" },
      ],
      approvalProcess: {
        en: "Apply via Nagad Commercial Division. After verification, download your Merchant Private Key and upload it into CartX.",
        bn: "নগদের বাণিজ্যিক শাখায় আবেদন করতে হবে। অনুমোদনের পর মার্চেন্ট কি কার্টএক্সে যুক্ত করতে হবে।",
      },
      supportedRegions: { en: "Bangladesh", bn: "বাংলাদেশ" },
      supportedCurrencies: { en: "BDT (৳)", bn: "বাংলাদেশি টাকা (৳)" },
      planEligibilityNote: {
        en: "Included across Starter, Growth, and Scale plans with 0% platform fee from CartX.",
        bn: "কার্টএক্সের কোনো ফি ছাড়াই স্টার্টার, গ্রোথ এবং স্কেল সব প্ল্যানে অন্তর্ভুক্ত।",
      },
    },

    capabilities: [
      { id: "nagad-cap1", title: { en: "Public-Key Cryptography Verification", bn: "পাবলিক-কি ক্রিপ্টোগ্রাফি যাচাই" }, description: { en: "Uses RSA public/private key pairs to sign every checkout payload.", bn: "আরএসএ পাবলিক ও প্রাইভেট কি ব্যবহার করে প্রতিটি রিকোয়েস্ট নিরাপদ রাখা।" }, isSupported: true },
      { id: "nagad-cap2", title: { en: "Real-Time Payment Callbacks", bn: "রিয়েল-টাইম পেমেন্ট কলব্যাক" }, description: { en: "Instant webhook triggers order processing workflows.", bn: "পেমেন্ট সফল হওয়ার সাথে সাথে স্বয়ংক্রিয় প্রসেসিং শুরু হয়।" }, isSupported: true },
      { id: "nagad-cap3", title: { en: "Automated TrxID Logging", bn: "স্বয়ংক্রিয় TrxID সংরক্ষণ" }, description: { en: "Stores official Nagad transaction IDs on order receipts.", bn: "ইনভয়েসের সাথে অফিসিয়াল নগদ ট্রানজেকশন আইডি সেভ থাকে।" }, isSupported: true },
      { id: "nagad-cap4", title: { en: "Payment Status Query API", bn: "পেমেন্ট স্ট্যাটাস কোয়েরি এপিআই" }, description: { en: "Manual sync button to re-check pending transactions directly.", bn: "কোনো ট্রানজেকশন আটকে থাকলে এক ক্লিকে পুনরায় স্ট্যাটাস চেক করার সুবিধা।" }, isSupported: true },
    ],

    setupSteps: [
      {
        stepNumber: 1,
        title: { en: "Generate Nagad RSA Keypair", bn: "নগদ আরএসএ কি-পেয়ার প্রস্তুত করুন" },
        description: {
          en: "Obtain your Merchant ID and upload your public key to the Nagad Merchant Portal. Keep your private key confidential.",
          bn: "নগদ পোর্টাল থেকে মার্চেন্ট আইডি সংগ্রহ করুন এবং পাবলিক কি আপলোড করুন। প্রাইভেট কি গোপন রাখুন।",
        },
      },
      {
        stepNumber: 2,
        title: { en: "Paste Credentials into CartX", bn: "কার্টএক্সে ক্রিডেনশিয়াল ইনপুট দিন" },
        description: {
          en: "Go to Settings → Payments → Nagad in CartX. Enter Merchant ID, Public Key, and Private Key securely.",
          bn: "কার্টএক্সের Settings → Payments → Nagad-এ গিয়ে মার্চেন্ট আইডি ও কি-সমূহ সেভ করুন।",
        },
      },
      {
        stepNumber: 3,
        title: { en: "Verify Connection & Enable", bn: "সংযোগ যাচাই করে চালু করুন" },
        description: {
          en: "Test with a ৳10 live transaction to confirm server communication, then turn on Live Mode.",
          bn: "একটি ১০ টাকার লাইভ ট্রানজেকশন করে সংযোগের কার্যকারিতা নিশ্চিত করুন এবং লাইভ মোড অন করুন।",
        },
      },
    ],

    dataExchanged: {
      summary: {
        en: "Order identifiers and payable amounts are transmitted to Nagad; transaction IDs and verification statuses are returned.",
        bn: "অর্ডারের আইডি ও মূল্য নগদে পাঠানো হয় এবং পেমেন্ট আইডি ও স্ট্যাটাস ফেরত আসে।",
      },
      sensitiveDataNote: {
        en: "No customer PINs or OTPs touch CartX servers; all credential authentication occurs inside Nagad's secured environment.",
        bn: "গ্রাহকের পিন বা ওটিপি কখনোই কার্টএক্সের সার্ভারে প্রবেশ করে না। অথেন্টিকেশন সরাসরি নগদের নিরাপদ সিস্টেমে হয়।",
      },
      items: [
        {
          direction: "sent",
          title: { en: "Data Sent to Nagad", bn: "নগদে প্রেরিত তথ্য" },
          fields: [
            { en: "Invoice ID & Payable Amount", bn: "ইনভয়েস আইডি ও প্রদেয় টাকা" },
            { en: "Merchant ID", bn: "মার্চেন্ট আইডি" },
            { en: "Signed Timestamp & Callback URL", bn: "ডিজিটাল সিগনেচার ও কলব্যাক ইউআরএল" },
          ],
          note: { en: "Encrypted via RSA private key.", bn: "আরএসএ প্রাইভেট কি দিয়ে এনক্রিপ্ট করা।" },
        },
        {
          direction: "received",
          title: { en: "Data Received from Nagad", bn: "নগদ থেকে প্রাপ্ত তথ্য" },
          fields: [
            { en: "Nagad Payment Reference ID", bn: "নগদ পেমেন্ট রেফারেন্স আইডি" },
            { en: "Issuer Transaction ID", bn: "ট্রানজেকশন আইডি (TrxID)" },
            { en: "Payment Status Confirmation", bn: "পেমেন্ট স্ট্যাটাস কনফার্মেশন" },
          ],
          note: { en: "Recorded on order ledger.", bn: "অর্ডার লেজারে সংরক্ষিত।" },
        },
      ],
    },

    securityNotes: {
      credentialStorage: {
        en: "Private keys are encrypted at rest with AES-256 and never output in plaintext.",
        bn: "প্রাইভেট কি AES-256 এনক্রিপশনে সুরক্ষিত থাকে এবং কখনোই প্লেইনটেক্সটে দেখা যায় না।",
      },
      permissionScope: {
        en: "Scoped to merchant payment initiation and status verification only.",
        bn: "শুধুমাত্র পেমেন্ট গ্রহণ ও স্ট্যাটাস যাচাইয়ের কাজের জন্য সীমাবদ্ধ।",
      },
      webhookVerification: {
        en: "Every callback signature is verified against Nagad's official public key.",
        bn: "প্রতিটি কলব্যাক রিকোয়েস্ট নগদের অফিসিয়াল পাবলিক কি দিয়ে ভেরিফাই করা হয়।",
      },
      bestPractices: [
        { en: "Store backup private keys in secure password managers only", bn: "প্রাইভেট কি শুধুমাত্র নিরাপদ পাসওয়ার্ড ম্যানেজারে সংরক্ষণ করুন" },
        { en: "Never email private keys to team members", bn: "কখনোই ইমেইলের মাধ্যমে প্রাইভেট কি আদান-প্রদান করবেন না" },
      ],
    },

    limitations: {
      unsupportedOperations: [
        { en: "Automated batch payouts from store dashboard", bn: "স্টোর ড্যাশবোর্ড থেকে বাল্ক পে-আউট পাঠানো" },
        { en: "Foreign credit card processing (use SSLCommerz instead)", bn: "আন্তর্জাতিক ক্রেডিট কার্ড প্রসেসিং (এক্ষেত্রে SSLCommerz প্রযোজ্য)" },
      ],
      feeStructureNotice: {
        en: "Nagad levies standard merchant processing fees as per their bilateral agreement. CartX charges 0% extra fee.",
        bn: "নগদের নিজস্ব মার্চেন্ট ফি প্রযোজ্য। কার্টএক্স কোনো বাড়তি চার্জ কাটে না।",
      },
      regionalRestrictions: { en: "Bangladesh only", bn: "শুধুমাত্র বাংলাদেশ" },
    },

    troubleshooting: [
      {
        issue: { en: "Signature Verification Failed", bn: "সিগনেচার ভেরিফিকেশন ফেইল্ড" },
        cause: { en: "Private key in CartX does not match the public key registered in Nagad portal.", bn: "কার্টএক্সে দেওয়া প্রাইভেট কি এবং নগদে আপলোড করা পাবলিক কি-তে অমিল রয়েছে।" },
        resolution: { en: "Re-generate keypair, update Nagad portal first, then re-enter keys in CartX.", bn: "নতুন কি-পেয়ার তৈরি করে আগে নগদ পোর্টালে আপলোড করুন এবং তারপর কার্টএক্সে যুক্ত করুন।" },
      },
    ],

    faqs: [
      {
        id: "nagad-faq1",
        question: { en: "Can I use Nagad and bKash simultaneously on CartX?", bn: "কার্টএক্সে কি বিকাশ ও নগদ দুটোই একসাথে ব্যবহার করা যাবে?" },
        answer: { en: "Yes! You can enable bKash, Nagad, and Cash on Delivery together. Customers choose their preferred payment at checkout.", bn: "হ্যাঁ! আপনি বিকাশ, নগদ এবং ক্যাশ অন ডেলিভারি সবগুলো একসাথে চালু রাখতে পারেন। গ্রাহক নিজের সুবিধামতো বেছে নেবে।" },
      },
    ],

    relatedSlugs: ["bkash", "sslcommerz", "pathao"],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. SSLCommerz Payment Gateway
  // ─────────────────────────────────────────────────────────────
  sslcommerz: {
    slug: "sslcommerz",
    name: "SSLCommerz Payment Gateway",
    category: "payments",
    categoryLabel: {
      en: "Payment Gateway",
      bn: "পেমেন্ট গেটওয়ে",
    },
    tagline: {
      en: "Accept Visa, Mastercard, AMEX, Internet Banking, and all Bangladeshi MFS in one checkout",
      bn: "ভিসা, মাস্টারকার্ড, অ্যামেক্স, ইন্টারনেট ব্যাংকিং এবং সকল মোবাইল ওয়ালেট এক গেটওয়েতে",
    },
    description: {
      en: "Bangladesh's leading payment aggregator. Enables local and international cards, net banking across 30+ banks, and all major mobile wallets with PCI-DSS Level 1 compliance.",
      bn: "বাংলাদেশের শীর্ষস্থানীয় পেমেন্ট অ্যাগ্রিগেটর। লোকাল ও আন্তর্জাতিক কার্ড, ৩০টিরও বেশি ব্যাংকের নেট ব্যাংকিং এবং সকল এমএফএস ওয়ালেট সাপোর্ট করে।",
    },
    status: "available",
    iconName: "CreditCard",
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-500/10",
    eligiblePlans: ["starter", "growth", "scale"],

    providerOverview: {
      overview: {
        en: "SSLCommerz is the all-in-one payment gateway for businesses wanting to accept debit/credit cards, internet banking, and mobile wallets through a single merchant integration.",
        bn: "একক ইন্টিগ্রেশনের মাধ্যমে ডেবিট/ক্রেডিট কার্ড, ইন্টারনেট ব্যাংকিং এবং মোবাইল ওয়ালেট গ্রহণ করতে চাওয়া ব্যবসায়ীদের জন্য SSLCommerz আদর্শ।",
      },
      providerUrl: "https://www.sslcommerz.com",
      actionLabel: { en: "Configure in Admin", bn: "অ্যাডমিনে কনফিগার করুন" },
      actionHref: "/start",
    },

    whatItDoes: {
      purpose: {
        en: "To give your store complete payment coverage by unifying cards, net banking, and wallets under one contract and automated settlement pipeline.",
        bn: "এক চুক্তির আওতায় কার্ড, ইন্টারনেট ব্যাংকিং ও মোবাইল ওয়ালেট একত্রিত করে গ্রাহকদের পূর্ণাঙ্গ পেমেন্ট সুবিধা দেওয়া।",
      },
      businessProblem: {
        en: "Signing separate commercial agreements with individual banks, Visa, Mastercard, and mobile wallets is time-consuming and technically complex for growing merchants.",
        bn: "আলাদা আলাদা ব্যাংক ও কার্ড কোম্পানির সাথে চুক্তি করা অত্যন্ত সময়সাপেক্ষ ও জটিল। SSLCommerz এটি এক জায়গায় এনে দেয়।",
      },
      howItWorks: {
        en: "Shoppers select SSLCommerz at checkout and are directed to the PCI-DSS certified hosted payment page to choose Cards, MFS, or Net Banking. Upon authentication, SSLCommerz sends an encrypted IPN (Instant Payment Notification) to CartX to validate and confirm the order.",
        bn: "চেকআউটে SSLCommerz নির্বাচন করলে পিসিআই-ডিএসএস সার্টিফায়েড পেজ আসে। পেমেন্ট সম্পন্ন হলে সিকিউর আইপিএন (IPN) এর মাধ্যমে কার্টএক্সে সংকেত আসে এবং অর্ডার সাথে সাথে কনফার্ম হয়।",
      },
      benefits: [
        { en: "Accepts Visa, Mastercard, AMEX, UnionPay, and DBBL Nexus cards", bn: "ভিসা, মাস্টারকার্ড, অ্যামেক্স ও নেক্সাস কার্ড গ্রহণযোগ্য" },
        { en: "Supports 30+ domestic banks for direct net banking transfers", bn: "৩০টিরও বেশি দেশীয় ব্যাংকের ইন্টারনেট ব্যাংকিং সাপোর্ট" },
        { en: "Built-in risk assessment and fraud detection filter", bn: "বিল্ট-ইন ফ্রড ডিটেকশন ও সিকিউরিটি ফিল্টার" },
        { en: "Multi-currency international card checkout capability", bn: "আন্তর্জাতিক কার্ডে বিদেশি মুদ্রায় পেমেন্ট গ্রহণের সুযোগ" },
      ],
    },

    requirements: {
      accountRequirements: [
        { en: "Approved SSLCommerz Merchant Account", bn: "অনুমোদিত SSLCommerz মার্চেন্ট অ্যাকাউন্ট" },
        { en: "Corporate or sole proprietorship business bank account", bn: "কোম্পানি বা ব্যক্তিমালিকানাধীন বিজনেস ব্যাংক অ্যাকাউন্ট" },
        { en: "Store ID and Store Password provided by SSLCommerz", bn: "SSLCommerz থেকে প্রদত্ত Store ID এবং Store Password" },
      ],
      approvalProcess: {
        en: "Submit KYC documents to SSLCommerz. Once the compliance team approves the store domain, live Store ID and Password are provided.",
        bn: "SSLCommerz-এ কেওয়াইসি জমা দিতে হবে। ডোমেইন ভেরিফিকেশনের পর লাইভ স্টোর আইডি ও পাসওয়ার্ড দেওয়া হয়।",
      },
      supportedRegions: { en: "Bangladesh and International", bn: "বাংলাদেশ ও আন্তর্জাতিক" },
      supportedCurrencies: { en: "BDT, USD, EUR, GBP (subject to SSLCommerz approval)", bn: "টাকা ও আন্তর্জাতিক মুদ্রা (অনুমোদন সাপেক্ষে)" },
      planEligibilityNote: {
        en: "Supported on Starter, Growth, and Scale plans without extra CartX platform fees.",
        bn: "কার্টএক্সের কোনো অতিরিক্ত চার্জ ছাড়াই স্টার্টার, গ্রোথ এবং স্কেল সব প্ল্যানে সমর্থিত।",
      },
    },

    capabilities: [
      { id: "ssl-cap1", title: { en: "PCI-DSS Level 1 Secure Checkout", bn: "পিসিআই-ডিএসএস লেভেল ১ সিকিউর পেমেন্ট" }, description: { en: "Highest global security standard for handling credit and debit card information.", bn: "আন্তর্জাতিক কার্ড পেমেন্ট সিকিউরিটির সর্বোচ্চ মানদণ্ড।" }, isSupported: true },
      { id: "ssl-cap2", title: { en: "Instant Payment Notification (IPN)", bn: "ইনস্ট্যান্ট পেমেন্ট নোটিফিকেশন (IPN)" }, description: { en: "Server-to-server webhook verifies validation hash to confirm successful order completion.", bn: "সার্ভার-টু-সার্ভার ওয়েবহুক হ্যাশ ভেরিফাই করে অর্ডার কনফার্ম করে।" }, isSupported: true },
      { id: "ssl-cap3", title: { en: "EMI (Equated Monthly Installment)", bn: "ইএমআই (কিস্তি সুবিধা)" }, description: { en: "Offer 0% interest EMI through 20+ partner banks (subject to merchant bank agreement).", bn: "২০টির বেশি ব্যাংকের মাধ্যমে কিস্তিতে পণ্য বিক্রির সুযোগ।" }, isSupported: true },
    ],

    setupSteps: [
      {
        stepNumber: 1,
        title: { en: "Receive SSLCommerz Credentials", bn: "স্টোর আইডি ও পাসওয়ার্ড সংগ্রহ করুন" },
        description: {
          en: "Obtain your Store ID and Store Password from the SSLCommerz merchant welcome email or merchant panel.",
          bn: "SSLCommerz মার্চেন্ট প্যানেল থেকে আপনার Store ID এবং Store Password সংগ্রহ করুন।",
        },
      },
      {
        stepNumber: 2,
        title: { en: "Enter Details in CartX", bn: "কার্টএক্সে তথ্য ইনপুট দিন" },
        description: {
          en: "In CartX Store Admin, go to Settings → Payments → SSLCommerz. Input Store ID and Password.",
          bn: "কার্টএক্সের Settings → Payments → SSLCommerz-এ গিয়ে Store ID ও Password সেভ করুন।",
        },
        codeSnippet: "STORE_ID=your_store_id_here\nSTORE_PASS=your_store_password_here",
      },
      {
        stepNumber: 3,
        title: { en: "Test IPN & Activate", bn: "আইপিএন টেস্ট করে চালু করুন" },
        description: {
          en: "Perform a small test transaction to confirm IPN webhook status, then flip to Live Mode.",
          bn: "একটি টেস্ট ট্রানজেকশনের মাধ্যমে আইপিএন ওয়েবহুক নিশ্চিত করুন এবং লাইভ মোড অন করুন।",
        },
      },
    ],

    dataExchanged: {
      summary: {
        en: "Transaction reference and billing amount are sent to SSLCommerz; bank authorization code and card type are returned.",
        bn: "অর্ডার রেফারেন্স ও টাকা SSLCommerz-এ যায় এবং ব্যাংক অথরাইজেশন কোড ও কার্ড টাইপ ফেরত আসে।",
      },
      sensitiveDataNote: {
        en: "Credit card numbers, CVVs, and 3D-secure OTPs are processed entirely within SSLCommerz's PCI-DSS compliant vault. CartX never views or stores card data.",
        bn: "ক্রেডিট কার্ড নম্বর, সিভিভি বা ওটিপি কখনোই কার্টএক্সের সার্ভারে আসে না। সবকিছু সরাসরি ব্যাংকের সিস্টেমে প্রসেস হয়।",
      },
      items: [
        {
          direction: "sent",
          title: { en: "Sent to SSLCommerz", bn: "SSLCommerz-এ প্রেরিত" },
          fields: [
            { en: "Transaction ID (tran_id) & Total Amount", bn: "ট্রানজেকশন আইডি ও মোট টাকা" },
            { en: "Customer Name, Email, Address", bn: "গ্রাহকের নাম, ইমেইল ও ঠিকানা" },
            { en: "CartX IPN listener URL", bn: "কার্টএক্স আইপিএন ওয়েবহুক ইউআরএল" },
          ],
          note: { en: "HTTPS POST with session validation.", bn: "এনক্রিপ্টেড এইচটিটিপিএস পোস্ট।" },
        },
        {
          direction: "received",
          title: { en: "Received from SSLCommerz", bn: "SSLCommerz থেকে প্রাপ্ত" },
          fields: [
            { en: "Bank Transaction ID (val_id)", bn: "ব্যাংক ট্রানজেকশন আইডি" },
            { en: "Card Brand (Visa, Master, AMEX, etc.)", bn: "কার্ডের ব্র্যান্ড" },
            { en: "Risk Score & Verification Status (VALID / FAILED)", bn: "রিস্ক স্কোর ও ভ্যালিডেশন স্ট্যাটাস" },
          ],
          note: { en: "Verified via SSLCommerz validator endpoint.", bn: "ভ্যালিডেটর এপিআই দিয়ে যাচাইকৃত।" },
        },
      ],
    },

    securityNotes: {
      credentialStorage: {
        en: "Store password encrypted at rest with AES-256.",
        bn: "স্টোর পাসওয়ার্ড AES-256 এনক্রিপশনে সুরক্ষিত থাকে।",
      },
      permissionScope: {
        en: "Restricted to payment initialization and order validation.",
        bn: "শুধুমাত্র পেমেন্ট গ্রহণ ও অর্ডার ভ্যালিডেশনে ব্যবহৃত হয়।",
      },
      webhookVerification: {
        en: "CartX re-validates every IPN directly with the SSLCommerz validator API before changing order status.",
        bn: "কার্টএক্স প্রতিটি আইপিএন সংকেত সরাসরি ভ্যালিডেশন এপিআই দিয়ে চেক করে তারপর অর্ডার স্ট্যাটাস পরিবর্তন করে।",
      },
      bestPractices: [
        { en: "Never share Store Password in plaintext emails", bn: "কখনোই স্টোর পাসওয়ার্ড ইমেইলে পাঠাবেন না" },
      ],
    },

    limitations: {
      unsupportedOperations: [
        { en: "Card-on-file automatic one-click recurring charges", bn: "কার্ড সেভ করে স্বয়ংক্রিয় রিকারিং বিলিং" },
      ],
      feeStructureNotice: {
        en: "SSLCommerz standard merchant fees range between 2.0% and 3.5% depending on card type and volume. CartX charges 0% extra fee.",
        bn: "SSLCommerz কার্ডের ধরন অনুযায়ী ২.০% থেকে ৩.৫% চার্জ করে। কার্টএক্স কোনো বাড়তি ফি কাটে না।",
      },
      regionalRestrictions: { en: "Merchant business must be incorporated in Bangladesh", bn: "ব্যবসা বাংলাদেশে নিবন্ধিত হতে হবে" },
    },

    troubleshooting: [
      {
        issue: { en: "IPN Hash Mismatch", bn: "আইপিএন হ্যাশ মিসম্যাচ" },
        cause: { en: "Store Password configured in CartX does not match the active password on SSLCommerz portal.", bn: "কার্টএক্সে দেওয়া পাসওয়ার্ড ও SSLCommerz পোর্টালের পাসওয়ার্ডে অমিল রয়েছে।" },
        resolution: { en: "Verify Store Password in SSLCommerz dashboard and re-enter in CartX.", bn: "পাসওয়ার্ড পুনরায় চেক করে কার্টএক্সে আপডেট করুন।" },
      },
    ],

    faqs: [
      {
        id: "ssl-faq1",
        question: { en: "Can international customers pay with foreign credit cards?", bn: "বিদেশি ক্রেতারা কি আন্তর্জাতিক কার্ড দিয়ে পেমেন্ট করতে পারবেন?" },
        answer: { en: "Yes, provided you request and receive international payment authorization from SSLCommerz for your merchant account.", bn: "হ্যাঁ, আপনার SSLCommerz অ্যাকাউন্টে আন্তর্জাতিক পেমেন্ট সক্রিয় করার আবেদন অনুমোদিত হলে সম্ভব।" },
      },
    ],

    relatedSlugs: ["bkash", "nagad", "pathao"],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Rocket (DBBL MFS Gateway - Beta)
  // ─────────────────────────────────────────────────────────────
  rocket: {
    slug: "rocket",
    name: "Rocket Gateway",
    category: "payments",
    categoryLabel: {
      en: "Payment Gateway",
      bn: "পেমেন্ট গেটওয়ে",
    },
    tagline: {
      en: "Direct Dutch-Bangla Bank Rocket mobile banking integration (Beta Connector)",
      bn: "ডাচ-বাংলা ব্যাংক রকেট মোবাইল ব্যাংকিংয়ের সরাসরি পেমেন্ট ইন্টিগ্রেশন (বেটা)",
    },
    description: {
      en: "Direct API connector for DBBL Rocket wallet payments. Currently in beta for select merchants; standard Rocket payments are also fully supported via SSLCommerz.",
      bn: "ডাচ-বাংলা ব্যাংক রকেট ওয়ালেটের সরাসরি এপিআই কানেক্টর। বর্তমানে পরীক্ষামূলক বেটা পর্যায়ে রয়েছে; এছাড়া SSLCommerz-এর মাধ্যমেও রকেট পেমেন্ট সচল আছে।",
    },
    status: "beta",
    iconName: "CreditCard",
    iconColor: "text-purple-600 dark:text-purple-400",
    iconBg: "bg-purple-500/10",
    eligiblePlans: ["growth", "scale"],

    providerOverview: {
      overview: {
        en: "Rocket Gateway allows merchants to accept DBBL Rocket payments through a dedicated direct API connector currently in beta.",
        bn: "রকেট গেটওয়ের মাধ্যমে ডাচ-বাংলা ব্যাংকের রকেট গ্রাহকদের কাছ থেকে সরাসরি পেমেন্ট গ্রহণ করা যায় (বর্তমানে বেটা ভার্সন)।",
      },
      providerUrl: "https://www.dutchbanglabank.com/rocket",
      actionLabel: { en: "Request Beta Access", bn: "বেটা অ্যাক্সেসের আবেদন করুন" },
      actionHref: "/contact",
    },

    whatItDoes: {
      purpose: {
        en: "To provide a standalone direct connection for DBBL Rocket without aggregator intermediaries for high-volume enterprise stores.",
        bn: "বড় বিক্রেতাদের জন্য কোনো মধ্যস্থতাকারী ছাড়াই সরাসরি রকেট পেমেন্ট গ্রহণের সুযোগ তৈরি করা।",
      },
      businessProblem: {
        en: "High-volume merchants seeking lower MFS processing fees prefer direct bank integration over aggregators.",
        bn: "অতিরিক্ত ট্রানজেকশন থাকা বড় কোম্পানিগুলো ফি কমাতে সরাসরি ব্যাংকের এপিআই ব্যবহার করতে পছন্দ করে।",
      },
      howItWorks: {
        en: "Customers enter their 12-digit Rocket account number and authenticate on DBBL's hosted secure portal. DBBL validates and sends an encrypted callback to CartX.",
        bn: "গ্রাহক ১২ ডিজিটের রকেট নম্বর দিয়ে ডাচ-বাংলা ব্যাংকের সিকিউর পেজে পিন দিয়ে পেমেন্ট করে এবং ব্যাংকের সার্ভার থেকে কার্টএক্সে সংকেত আসে।",
      },
      benefits: [
        { en: "Direct settlement into DBBL corporate current accounts", bn: "ডাচ-বাংলা ব্যাংক অ্যাকাউন্টে সরাসরি টাকা সেটেলমেন্ট" },
        { en: "Lower transaction processing overhead for high-volume stores", bn: "বড় প্রতিষ্ঠানের জন্য সাশ্রয়ী প্রসেসিং খরচ" },
        { en: "Fallback support through SSLCommerz aggregator", bn: "SSLCommerz-এর মাধ্যমেও ব্যাকআপ ব্যবহারের সুযোগ" },
      ],
    },

    requirements: {
      accountRequirements: [
        { en: "DBBL Corporate Merchant Account with Rocket API permission", bn: "ডাচ-বাংলা ব্যাংক কর্পোরেট মার্চেন্ট অ্যাকাউন্ট" },
        { en: "Signed API integration agreement with Dutch-Bangla Bank Limited", bn: "ডাচ-বাংলা ব্যাংকের সাথে স্বাক্ষরিত এপিআই চুক্তি" },
      ],
      approvalProcess: {
        en: "Requires bilateral agreement with DBBL Core Banking division. Contact CartX Support for enterprise onboarding assistance.",
        bn: "ডাচ-বাংলা ব্যাংকের সাথে চুক্তি সাপেক্ষে প্রযোজ্য। সহায়তার জন্য কার্টএক্স সাপোর্টে যোগাযোগ করুন।",
      },
      supportedRegions: { en: "Bangladesh", bn: "বাংলাদেশ" },
      supportedCurrencies: { en: "BDT (৳)", bn: "বাংলাদেশি টাকা (৳)" },
      planEligibilityNote: {
        en: "Available for merchants on Growth and Scale tiers participating in our beta program.",
        bn: "গ্রোথ এবং স্কেল প্ল্যানের বেটা প্রোগ্রামভুক্ত মার্চেন্টদের জন্য উপলব্ধ।",
      },
    },

    capabilities: [
      { id: "rocket-cap1", title: { en: "12-Digit Wallet Authentication", bn: "১২ ডিজিট ওয়ালেট অথেন্টিকেশন" }, description: { en: "Supports standard 11-digit mobile number + 1 check digit.", bn: "রকেটের ১১ ডিজিট মোবাইল নম্বর ও ১ ডিজিট চেক সাম সাপোর্ট।" }, isSupported: true },
      { id: "rocket-cap2", title: { en: "Direct Bank Callback Verification", bn: "ডিরেক্ট ব্যাংক কলব্যাক যাচাই" }, description: { en: "Automated real-time webhook confirmation.", bn: "রিয়েল-টাইম ব্যাংক ওয়েবহুক ভেরিফিকেশন।" }, isSupported: true },
    ],

    setupSteps: [
      {
        stepNumber: 1,
        title: { en: "Enroll in Beta Program", bn: "বেটা প্রোগ্রামে যুক্ত হন" },
        description: {
          en: "Contact CartX Support with your DBBL Rocket Merchant MID to receive whitelist access.",
          bn: "আপনার ডাচ-বাংলা রকেট মার্চেন্ট আইডি সহ কার্টএক্স সাপোর্টে যোগাযোগ করুন।",
        },
      },
    ],

    dataExchanged: {
      summary: { en: "Order identifiers and payable amounts exchanged with DBBL Rocket servers.", bn: "অর্ডার আইডি ও মূল্য ডাচ-বাংলা ব্যাংক সার্ভারের সাথে আদান-প্রদান হয়।" },
      sensitiveDataNote: { en: "PINs are never handled by CartX.", bn: "পিন কখনোই কার্টএক্সের সার্ভারে নেওয়া হয় না।" },
      items: [
        {
          direction: "sent",
          title: { en: "Sent to DBBL Rocket", bn: "ডাচ-বাংলা রকেটে প্রেরিত" },
          fields: [{ en: "Invoice Amount & Merchant ID", bn: "ইনভয়েস মূল্য ও মার্চেন্ট আইডি" }],
          note: { en: "Encrypted transmission.", bn: "এনক্রিপ্টেড ডাটা।" },
        },
      ],
    },

    securityNotes: {
      credentialStorage: { en: "Stored securely in CartX vault.", bn: "কার্টএক্স ভল্টে সংরক্ষিত।" },
      permissionScope: { en: "Payment execution only.", bn: "শুধুমাত্র পেমেন্ট গ্রহণ।" },
      webhookVerification: { en: "HMAC signature verified.", bn: "এইচএমএসি সিগনেচার যাচাই।" },
      bestPractices: [{ en: "Keep DBBL merchant keys strictly confidential", bn: "মার্চেন্ট কি গোপন রাখুন" }],
    },

    limitations: {
      unsupportedOperations: [{ en: "Automated refunds (currently manual via DBBL portal)", bn: "স্বয়ংক্রিয় রিফান্ড (বর্তমানে ব্যাংকের পোর্টালে ম্যানুয়ালি করতে হয়)" }],
      feeStructureNotice: { en: "Standard DBBL commercial fees apply.", bn: "ডাচ-বাংলা ব্যাংকের কমার্শিয়াল ফি প্রযোজ্য।" },
      regionalRestrictions: { en: "Bangladesh only", bn: "শুধুমাত্র বাংলাদেশ" },
      betaNotice: { en: "This standalone connector is in Beta. For immediate production rollout, use Rocket via SSLCommerz.", bn: "এই কানেক্টরটি বেটা পর্যায়ে আছে। তাৎক্ষণিক ব্যবহারের জন্য SSLCommerz দিয়ে রকেট চালু রাখুন।" },
    },

    troubleshooting: [
      {
        issue: { en: "Rocket Transaction Not Authorized", bn: "রকেট ট্রানজেকশন অনুমোদন হয়নি" },
        cause: { en: "Customer entered incorrect check-digit or exceeded daily MFS transaction limit.", bn: "গ্রাহক ভুল চেক ডিজিট দিয়েছেন অথবা দৈনিক লিমিট শেষ হয়েছে।" },
        resolution: { en: "Ask customer to verify their 12th digit or retry with an alternative gateway.", bn: "গ্রাহককে ১২তম ডিজিট যাচাই করতে বলুন বা বিকল্প মাধ্যমে পেমেন্ট করতে বলুন।" },
      },
    ],

    faqs: [
      {
        id: "rocket-faq1",
        question: { en: "Can my store accept Rocket payments today?", bn: "আমার স্টোরে কি এখনই রকেট পেমেন্ট চালু করা যাবে?" },
        answer: { en: "Yes! Simply enable SSLCommerz in CartX, which already includes official DBBL Rocket support out-of-the-box.", bn: "হ্যাঁ! কার্টএক্সে SSLCommerz চালু করলেই ডিফল্টভাবে রকেট পেমেন্ট সাপোর্ট পাওয়া যায়।" },
      },
    ],

    relatedSlugs: ["bkash", "nagad", "sslcommerz"],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Pathao Courier Logistics
  // ─────────────────────────────────────────────────────────────
  pathao: {
    slug: "pathao",
    name: "Pathao Courier",
    category: "shipping",
    categoryLabel: {
      en: "Courier & Shipping",
      bn: "কুরিয়ার ও ডেলিভারি",
    },
    tagline: {
      en: "Automated one-click parcel dispatch booking and real-time delivery status updates",
      bn: "এক ক্লিকে পার্সেল বুকিং এবং রিয়েল-টাইম ডেলিভারি ট্র্যাকিং আপডেট",
    },
    description: {
      en: "Connect your CartX store directly to Pathao Courier's nationwide logistics API. Create consignments with one click, print official barcode shipping labels, and auto-sync delivery statuses.",
      bn: "পাঠাও কুরিয়ারের অফিসিয়াল এপিআই-এর সাথে স্টোর সরাসরি সংযুক্ত করুন। এক ক্লিকে পার্সেল বুকিং, বারকোড লেবেল প্রিন্ট এবং ক্যাশ অন ডেলিভারি ট্র্যাকিং সুবিধা।",
    },
    status: "available",
    iconName: "Truck",
    iconColor: "text-red-600 dark:text-red-400",
    iconBg: "bg-red-500/10",
    eligiblePlans: ["growth", "scale"],

    providerOverview: {
      overview: {
        en: "Pathao Courier is one of Bangladesh's largest logistics networks offering same-day delivery inside Dhaka and reliable nationwide coverage for Cash on Delivery parcels.",
        bn: "পাঠাও কুরিয়ার বাংলাদেশের অন্যতম শীর্ষ লজিস্টিকস নেটওয়ার্ক, যা ঢাকায় দ্রুততম ডেলিভারি এবং সারাদেশে ক্যাশ অন ডেলিভারি পার্সেল সেবা প্রদান করে।",
      },
      providerUrl: "https://merchant.pathao.com",
      actionLabel: { en: "Connect in Admin", bn: "অ্যাডমিনে কানেক্ট করুন" },
      actionHref: "/start",
    },

    whatItDoes: {
      purpose: {
        en: "To eliminate manual copy-pasting of customer addresses and phone numbers into courier portals by automating consignment creation directly from CartX orders.",
        bn: "কুরিয়ার পোর্টালে বারবার ক্রেতার নাম-ঠিকানা ম্যানুয়ালি টাইপ করার ঝামেলা দূর করে কার্টএক্স থেকেই এক ক্লিকে পার্সেল বুকিং সম্পন্ন করা।",
      },
      businessProblem: {
        en: "Fulfilling 50+ daily orders manually takes hours, leads to address typos, delays parcel pickup, and leaves customers anxious about tracking numbers.",
        bn: "প্রতিদিন বহু অর্ডারের ঠিকানা কুরিয়ারে ম্যানুয়ালি এন্ট্রি দিতে ঘণ্টার পর ঘণ্টা সময় নষ্ট হয় এবং ভুলের কারণে পার্সেল রিটার্ন আসার সম্ভাবনা থাকে।",
      },
      howItWorks: {
        en: "When an order is confirmed, click 'Book Pathao Courier' in CartX. Our integration calls Pathao's API, returns the official tracking consignment ID, generates a printable barcode sticker, and automatically updates tracking details for the customer.",
        bn: "অর্ডার কনফার্ম হলে কার্টএক্সে 'Book Pathao Courier' বাটনে চাপ দিন। এপিআই স্বয়ংক্রিয়ভাবে পার্সেল বুক করে ট্র্যাকিং আইডি আনে এবং গ্রাহককে লাইভ ট্র্যাকিং লিংক পাঠিয়ে দেয়।",
      },
      benefits: [
        { en: "1-Click consignment creation directly from order detail view", bn: "অর্ডার পেজ থেকেই এক ক্লিকে পার্সেল বুকিং" },
        { en: "Automated customer SMS/tracking link dispatch", bn: "গ্রাহককে স্বয়ংক্রিয়ভাবে ট্র্যাকিং লিংক প্রেরণ" },
        { en: "Batch bulk order booking for up to 100 orders simultaneously", bn: "একসাথে ১০০টি পর্যন্ত পার্সেল বাল্ক বুকিং করার সুবিধা" },
        { en: "Real-time delivery status synchronization (Delivered, Returned, In Transit)", bn: "রিয়েল-টাইম ডেলিভারি স্ট্যাটাস সিঙ্ক (ডেলিভার্ড, রিটার্ন, অন ট্রানজিট)" },
      ],
    },

    requirements: {
      accountRequirements: [
        { en: "Active Pathao Courier Merchant Account", bn: "সক্রিয় পাঠাও কুরিয়ার মার্চেন্ট অ্যাকাউন্ট" },
        { en: "Pathao Client ID, Client Secret, Username, and Password", bn: "পাঠাও Client ID, Client Secret, Username এবং Password" },
        { en: "Registered pickup store location address with Pathao", bn: "পাঠাও পোর্টালে অনুমোদিত পিকআপ স্টোর ঠিকানা" },
      ],
      approvalProcess: {
        en: "Register at merchant.pathao.com, activate your merchant profile, and copy API credentials from the Developer section.",
        bn: "merchant.pathao.com-এ রেজিস্ট্রেশন করে অ্যাকাউন্ট চালু করুন এবং ডেভেলপার সেকশন থেকে এপিআই ক্রিডেনশিয়াল কপি করুন।",
      },
      supportedRegions: { en: "All 64 districts in Bangladesh", bn: "বাংলাদেশের সকল ৬৪টি জেলা" },
      supportedCurrencies: { en: "BDT (৳)", bn: "বাংলাদেশি টাকা (৳)" },
      planEligibilityNote: {
        en: "Automated courier API booking requires Growth or Scale tier. Starter tier merchants can track consignments manually.",
        bn: "স্বয়ংক্রিয় এপিআই বুকিংয়ের জন্য গ্রোথ বা স্কেল প্ল্যান প্রয়োজন। স্টার্টার প্ল্যানে ম্যানুয়াল ট্র্যাকিং সাপোর্ট রয়েছে।",
      },
    },

    capabilities: [
      { id: "pathao-cap1", title: { en: "Automated Consignment Creation", bn: "অটোমেটেড কনসাইনমেন্ট বুকিং" }, description: { en: "Sends customer name, mobile, delivery address, and COD collectable amount.", bn: "গ্রাহকের নাম, মোবাইল, পূর্ণাঙ্গ ঠিকানা এবং সিওডি টাকার পরিমাণ স্বয়ংক্রিয়ভাবে বুকিং।" }, isSupported: true },
      { id: "pathao-cap2", title: { en: "Printable 4x6 Barcode Shipping Labels", bn: "বারকোড শিপিং লেবেল প্রিন্টিং" }, description: { en: "Generate standardized shipping stickers with barcode for fast hub scanning.", bn: "সহজে স্ক্যান করার উপযোগী স্ট্যান্ডার্ড বারকোড স্টিকার প্রিন্ট করার সুবিধা।" }, isSupported: true },
      { id: "pathao-cap3", title: { en: "Delivery Status Webhook Sync", bn: "ডেলিভারি স্ট্যাটাস ওয়েবহুক সিঙ্ক" }, description: { en: "Pathao delivery events update CartX order status automatically.", bn: "পাঠাও পার্সেল ডেলিভারি বা রিটার্ন হওয়ার সাথে সাথে কার্টএক্সে স্ট্যাটাস আপডেট।" }, isSupported: true },
    ],

    setupSteps: [
      {
        stepNumber: 1,
        title: { en: "Get Pathao Merchant Developer Keys", bn: "পাঠাও মার্চেন্ট এপিআই কি সংগ্রহ করুন" },
        description: {
          en: "In your Pathao Merchant Dashboard, navigate to Developer API and generate your Client ID and Client Secret.",
          bn: "আপনার পাঠাও মার্চেন্ট ড্যাশবোর্ডে গিয়ে Developer API সেকশন থেকে Client ID এবং Client Secret সংগ্রহ করুন।",
        },
      },
      {
        stepNumber: 2,
        title: { en: "Configure in CartX Logistics", bn: "কার্টএক্সে পাঠাও কনফিগার করুন" },
        description: {
          en: "In CartX Store Admin, go to Settings → Shipping & Courier → Pathao. Enter credentials and select your default Pickup Store ID.",
          bn: "কার্টএক্সের Settings → Shipping & Courier → Pathao-তে গিয়ে ক্রিডেনশিয়াল এবং ডিফল্ট পিকআপ স্টোর সিলেক্ট করুন।",
        },
        codeSnippet: "PATHAO_CLIENT_ID=your_client_id_here\nPATHAO_CLIENT_SECRET=your_client_secret_here",
      },
      {
        stepNumber: 3,
        title: { en: "Test Consignment Booking", bn: "টেস্ট বুকিং সম্পন্ন করুন" },
        description: {
          en: "Create a test booking to ensure address mapping works smoothly.",
          bn: "একটি টেস্ট পার্সেল বুক করে লেবেল প্রিন্ট পরীক্ষা করে নিন।",
        },
      },
    ],

    dataExchanged: {
      summary: {
        en: "CartX transmits delivery address and cash collection amounts; Pathao returns tracking numbers and delivery updates.",
        bn: "কার্টএক্স ডেলিভারি ঠিকানা ও টাকার পরিমাণ পাঠায়; পাঠাও ট্র্যাকিং নম্বর ও স্ট্যাটাস ফেরত পাঠায়।",
      },
      sensitiveDataNote: {
        en: "Only delivery destination details are shared. Payment credentials and customer passwords are never shared.",
        bn: "শুধুমাত্র পার্সেল পৌঁছে দেওয়ার জন্য প্রয়োজনীয় ঠিকানা শেয়ার করা হয়। কোনো গোপন তথ্য শেয়ার হয় না।",
      },
      items: [
        {
          direction: "sent",
          title: { en: "Sent to Pathao", bn: "পাঠাওতে প্রেরিত" },
          fields: [
            { en: "Recipient Name & Contact Number", bn: "প্রাপকের নাম ও মোবাইল নম্বর" },
            { en: "Delivery Address, District & Thana", bn: "ঠিকানা, জেলা ও থানা" },
            { en: "COD Collection Amount (if Cash on Delivery)", bn: "সিওডি কালেকশন মূল্য (ক্যাশ অন ডেলিভারি হলে)" },
          ],
          note: { en: "Sent via HTTPS REST API.", bn: "এইচটিটিপিএস রেস্ট এপিআই দিয়ে প্রেরিত।" },
        },
        {
          direction: "received",
          title: { en: "Received from Pathao", bn: "পাঠাও থেকে প্রাপ্ত" },
          fields: [
            { en: "Consignment ID & Tracking Code", bn: "কনসাইনমেন্ট আইডি ও ট্র্যাকিং কোড" },
            { en: "Live Delivery Status Updates", bn: "লাইভ ডেলিভারি স্ট্যাটাস আপডেট" },
          ],
          note: { en: "Synced automatically.", bn: "স্বয়ংক্রিয়ভাবে সিঙ্ক হয়।" },
        },
      ],
    },

    securityNotes: {
      credentialStorage: { en: "OAuth tokens refreshed securely and stored encrypted.", bn: "ও-অথ টোকেন এনক্রিপ্ট করে সুরক্ষিত রাখা হয়।" },
      permissionScope: { en: "Limited to parcel creation and tracking.", bn: "শুধুমাত্র পার্সেল বুকিং ও ট্র্যাকিংয়ে সীমাবদ্ধ।" },
      webhookVerification: { en: "Signed webhook validation.", bn: "সাইনড ওয়েবহুক ভেরিফিকেশন।" },
      bestPractices: [{ en: "Review pickup address accuracy before dispatching", bn: "পিকআপ পয়েন্টের ঠিকানা সঠিক আছে কিনা তা যাচাই করুন" }],
    },

    limitations: {
      unsupportedOperations: [{ en: "Automated instant return delivery to third-party drop-offs", bn: "তৃতীয় পক্ষের কাছে স্বয়ংক্রিয় রি-রুট" }],
      feeStructureNotice: { en: "Standard Pathao courier delivery and COD charges apply per parcel. CartX charges 0% extra fee.", bn: "পাঠাওয়ের নিজস্ব কুরিয়ার চার্জ ও সিওডি ফি প্রযোজ্য। কার্টএক্স কোনো বাড়তি চার্জ কাটে না।" },
      regionalRestrictions: { en: "Bangladesh nationwide", bn: "সারাদেশে প্রযোজ্য" },
    },

    troubleshooting: [
      {
        issue: { en: "Store ID Invalid or Address City Missing", bn: "স্টোর আইডি ভুল বা শহরের নাম নেই" },
        cause: { en: "The customer's district or thana was not mapped to a valid Pathao delivery zone.", bn: "গ্রাহকের জেলা বা থানা পাঠাওয়ের অনুমোদিত ডেলিভারি জোনের সাথে ম্যাপ করা হয়নি।" },
        resolution: { en: "Select the correct city/thana from the dropdown on the order detail page and re-click Book.", bn: "অর্ডার পেজে ড্রপডাউন থেকে সঠিক শহর বা থানা বেছে নিয়ে পুনরায় বুক বাটনে চাপ দিন।" },
      },
    ],

    faqs: [
      {
        id: "pathao-faq1",
        question: { en: "Can I print shipping barcode labels in bulk?", bn: "একসাথে অনেকগুলো পার্সেলের বারকোড লেবেল প্রিন্ট করা যাবে কি?" },
        answer: { en: "Yes! In CartX Order Management, select multiple orders and click 'Bulk Print Shipping Labels' to generate a 4x6 ready PDF.", bn: "হ্যাঁ! কার্টএক্স অর্ডার পেজে একাধিক অর্ডার সিলেক্ট করে 'Bulk Print Labels' চাপলেই একসাথে ৪x৬ সাইজের লেবেল প্রিন্ট হয়ে যাবে।" },
      },
    ],

    relatedSlugs: ["steadfast", "redx", "bkash"],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Steadfast Courier Delivery
  // ─────────────────────────────────────────────────────────────
  steadfast: {
    slug: "steadfast",
    name: "Steadfast Courier",
    category: "shipping",
    categoryLabel: {
      en: "Courier & Shipping",
      bn: "কুরিয়ার ও ডেলিভারি",
    },
    tagline: {
      en: "Seamless nationwide Cash on Delivery parcel dispatch and rapid payment reconciliation",
      bn: "দেশজুড়ে ক্যাশ অন ডেলিভারি পার্সেল প্রেরণ এবং দ্রুততম পেমেন্ট সেটেলমেন্ট",
    },
    description: {
      en: "Connect your CartX storefront to Steadfast Courier's high-speed API. Automate order fulfillment, create consignments in seconds, and track delivery progress across all 64 districts.",
      bn: "স্টেডফাস্ট কুরিয়ারের এপিআই-এর সাথে আপনার কার্টএক্স স্টোর সংযুক্ত করুন। দ্রুত পার্সেল এন্ট্রি, ট্র্যাকিং এবং কম রিটার্ন রেট নিশ্চিত করার আধুনিক লজিস্টিকস সুবিধা।",
    },
    status: "available",
    iconName: "Truck",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-500/10",
    eligiblePlans: ["growth", "scale"],

    providerOverview: {
      overview: {
        en: "Steadfast Courier specializes in high-volume e-commerce parcel fulfillment across Bangladesh with extensive sub-district coverage.",
        bn: "স্টেডফাস্ট কুরিয়ার বাংলাদেশের প্রত্যন্ত উপজেলা পর্যায়েও দ্রুত ক্যাশ অন ডেলিভারি পার্সেল পৌঁছে দেওয়ার জন্য বিশেষভাবে পরিচিত।",
      },
      providerUrl: "https://steadfast.com.bd",
      actionLabel: { en: "Connect in Admin", bn: "অ্যাডমিনে কানেক্ট করুন" },
      actionHref: "/start",
    },

    whatItDoes: {
      purpose: {
        en: "To accelerate shipping workflows by sending order details directly to Steadfast without manual data re-entry.",
        bn: "ম্যানুয়াল এন্ট্রি ছাড়া সরাসরি কার্টএক্স থেকে স্টেডফাস্টে অর্ডার পাঠিয়ে ডেলিভারি দ্রুততর করা।",
      },
      businessProblem: {
        en: "Managing Cash on Delivery parcels manually causes fulfillment bottlenecks, lost tracking codes, and delayed customer updates.",
        bn: "ম্যানুয়ালি সিওডি পার্সেল পাঠানো সময়সাপেক্ষ এবং এতে ট্র্যাকিং কোড হারিয়ে যাওয়ার ঝুঁকি থাকে।",
      },
      howItWorks: {
        en: "Click 'Dispatch with Steadfast' on any order. CartX sends customer details to Steadfast, receives the tracking code, and provides a direct tracking link for the buyer.",
        bn: "অর্ডারে 'Dispatch with Steadfast' ক্লিক করলেই তথ্য স্টেডফাস্টে চলে যায়, ট্র্যাকিং কোড আসে এবং ক্রেতা সরাসরি ট্র্যাক করতে পারে।",
      },
      benefits: [
        { en: "Instant parcel booking with automated tracking ID assignment", bn: "তাৎক্ষণিক পার্সেল বুকিং ও অটো ট্র্যাকিং কোড তৈরি" },
        { en: "Deep coverage across urban, semi-urban, and rural areas", bn: "শহর থেকে শুরু করে প্রত্যন্ত উপজেলা পর্যন্ত বিস্তৃত ডেলিভারি নেটওয়ার্ক" },
        { en: "Fast COD balance reconciliation and payout visibility", bn: "দ্রুত ক্যাশ অন ডেলিভারি টাকা সেটেলমেন্টের নিশ্চয়তা" },
      ],
    },

    requirements: {
      accountRequirements: [
        { en: "Active Steadfast Merchant Account", bn: "সক্রিয় স্টেডফাস্ট মার্চেন্ট অ্যাকাউন্ট" },
        { en: "Steadfast API Key and Secret Key", bn: "স্টেডফাস্ট এপিআই কি ও সিক্রেট কি" },
      ],
      approvalProcess: {
        en: "Register at steadfast.com.bd and copy your API keys from the Settings page.",
        bn: "steadfast.com.bd-এ অ্যাকাউন্ট করে সেটিংস পেজ থেকে এপিআই কি কপি করুন।",
      },
      supportedRegions: { en: "Bangladesh nationwide", bn: "বাংলাদেশ (সকল জেলা)" },
      supportedCurrencies: { en: "BDT (৳)", bn: "বাংলাদেশি টাকা (৳)" },
      planEligibilityNote: {
        en: "Requires Growth or Scale plan for direct API integration.",
        bn: "সরাসরি এপিআই বুকিংয়ের জন্য গ্রোথ বা স্কেল প্ল্যান প্রয়োজন।",
      },
    },

    capabilities: [
      { id: "steadfast-cap1", title: { en: "One-Click Consignment Dispatch", bn: "এক ক্লিকে পার্সেল বুকিং" }, description: { en: "Instantly creates Steadfast orders with COD amount and full shipping address.", bn: "ক্যাশ অন ডেলিভারি মূল্য ও ঠিকানা সহ তাৎক্ষণিক বুকিং।" }, isSupported: true },
      { id: "steadfast-cap2", title: { en: "Automated Tracking Status Sync", bn: "স্বয়ংক্রিয় ট্র্যাকিং স্ট্যাটাস" }, description: { en: "Webhooks update CartX orders as In Transit, Delivered, or Returned.", bn: "পার্সেল ডেলিভারি হওয়ার সাথে সাথে স্বয়ংক্রিয় স্ট্যাটাস আপডেট।" }, isSupported: true },
    ],

    setupSteps: [
      {
        stepNumber: 1,
        title: { en: "Copy Steadfast API Credentials", bn: "স্টেডফাস্ট এপিআই কি সংগ্রহ করুন" },
        description: {
          en: "From the Steadfast Merchant Panel, copy your API Key and Secret Key.",
          bn: "স্টেডফাস্ট মার্চেন্ট প্যানেল থেকে আপনার এপিআই কি এবং সিক্রেট কি কপি করুন।",
        },
      },
      {
        stepNumber: 2,
        title: { en: "Paste in CartX Shipping Settings", bn: "কার্টএক্সে সেভ করুন" },
        description: {
          en: "In CartX Store Admin, go to Settings → Shipping & Courier → Steadfast and paste your keys.",
          bn: "কার্টএক্সের Settings → Shipping & Courier → Steadfast-এ গিয়ে কি-গুলো সেভ করুন।",
        },
        codeSnippet: "STEADFAST_API_KEY=your_api_key_here\nSTEADFAST_SECRET_KEY=your_secret_key_here",
      },
    ],

    dataExchanged: {
      summary: { en: "Recipient name, address, and COD amounts transmitted; tracking code returned.", bn: "গ্রাহকের নাম, ঠিকানা ও মূল্য পাঠানো হয়; ট্র্যাকিং কোড ফেরত আসে।" },
      sensitiveDataNote: { en: "Only delivery destination details shared.", bn: "শুধুমাত্র ডেলিভারির প্রয়োজনীয় তথ্য শেয়ার করা হয়।" },
      items: [
        {
          direction: "sent",
          title: { en: "Sent to Steadfast", bn: "স্টেডফাস্টে প্রেরিত" },
          fields: [{ en: "Customer Name, Phone & Address", bn: "গ্রাহকের নাম, মোবাইল ও ঠিকানা" }, { en: "Collectable COD Amount", bn: "সিওডি কালেকশন মূল্য" }],
          note: { en: "Encrypted payload.", bn: "এনক্রিপ্টেড ডাটা।" },
        },
      ],
    },

    securityNotes: {
      credentialStorage: { en: "Keys encrypted with AES-256.", bn: "AES-256 এনক্রিপশনে সংরক্ষিত।" },
      permissionScope: { en: "Order creation only.", bn: "পার্সেল বুকিংয়ে সীমাবদ্ধ।" },
      webhookVerification: { en: "Signature validation.", bn: "সিগনেচার যাচাই।" },
      bestPractices: [{ en: "Never share API Secret Key with third parties", bn: "এপিআই কি কখনো কারো সাথে শেয়ার করবেন না" }],
    },

    limitations: {
      unsupportedOperations: [{ en: "International air cargo dispatch", bn: "আন্তর্জাতিক কার্গো ডেলিভারি" }],
      feeStructureNotice: { en: "Steadfast courier charges apply. 0% CartX extra fees.", bn: "স্টেডফাস্টের নিজস্ব কুরিয়ার চার্জ প্রযোজ্য। কার্টএক্সের বাড়তি ফি নেই।" },
      regionalRestrictions: { en: "Bangladesh only", bn: "শুধুমাত্র বাংলাদেশ" },
    },

    troubleshooting: [
      {
        issue: { en: "Phone Number Format Error", bn: "মোবাইল নম্বর ফরম্যাট এরর" },
        cause: { en: "Customer entered 10 digits instead of standard 11-digit Bangladeshi mobile number.", bn: "গ্রাহক ১১ ডিজিটের বদলে ভুল মোবাইল নম্বর দিয়েছেন।" },
        resolution: { en: "Correct the phone number in CartX order details and re-click Dispatch.", bn: "অর্ডার পেজে সঠিক মোবাইল নম্বর দিয়ে আবার বুকিং দিন।" },
      },
    ],

    faqs: [
      {
        id: "steadfast-faq1",
        question: { en: "Does Steadfast support parcel tracking for buyers?", bn: "ক্রেতা কি নিজে পার্সেল ট্র্যাক করতে পারবে?" },
        answer: { en: "Yes! The tracking code is automatically sent to the customer via SMS and visible on their order confirmation page.", bn: "হ্যাঁ! গ্রাহকের মোবাইলে এসএমএসে ট্র্যাকিং লিংক চলে যায় এবং অর্ডার কনফার্মেশন পেজেও ট্র্যাকিং কোড দেখা যায়।" },
      },
    ],

    relatedSlugs: ["pathao", "redx", "bkash"],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. RedX Logistics
  // ─────────────────────────────────────────────────────────────
  redx: {
    slug: "redx",
    name: "RedX Logistics",
    category: "shipping",
    categoryLabel: {
      en: "Courier & Shipping",
      bn: "কুরিয়ার ও ডেলিভারি",
    },
    tagline: {
      en: "End-to-end tech-driven parcel dispatch and express courier fulfillment",
      bn: "প্রযুক্তিভিত্তিক পার্সেল ডেলিভারি এবং এক্সপ্রেস কুরিয়ার সুবিধা",
    },
    description: {
      en: "Automated logistics integration with RedX for doorstep parcel pickup, barcode generation, Cash on Delivery settlement, and automated status webhooks.",
      bn: "রেডএক্স লজিস্টিকসের সাথে সরাসরি এপিআই কানেকশন। ডোরস্টেপ পার্সেল পিকআপ, বারকোড তৈরি এবং স্বয়ংক্রিয় স্ট্যাটাস আপডেটের সুবিধা।",
    },
    status: "available",
    iconName: "Truck",
    iconColor: "text-red-700 dark:text-red-400",
    iconBg: "bg-red-600/10",
    eligiblePlans: ["growth", "scale"],

    providerOverview: {
      overview: {
        en: "RedX provides scalable courier delivery and warehousing solutions for e-commerce brands in Bangladesh.",
        bn: "রেডএক্স বাংলাদেশের ই-কমার্স বিক্রেতাদের জন্য নির্ভরযোগ্য পার্সেল ডেলিভারি ও লজিস্টিকস সেবা প্রদান করে।",
      },
      providerUrl: "https://redx.com.bd",
      actionLabel: { en: "Connect in Admin", bn: "অ্যাডমিনে কানেক্ট করুন" },
      actionHref: "/start",
    },

    whatItDoes: {
      purpose: { en: "To automate parcel registration and status syncing for high-growth stores using RedX.", bn: "রেডএক্স ব্যবহারকারী বিক্রেতাদের জন্য পার্সেল বুকিং স্বয়ংক্রিয় করা।" },
      businessProblem: { en: "Manual entry bottlenecks during seasonal sale rushes.", bn: "অতিরিক্ত অর্ডারের সময় ম্যানুয়াল এন্ট্রির জটিলতা দূর করা।" },
      howItWorks: { en: "Orders are dispatched directly via RedX's REST API from the CartX dashboard.", bn: "কার্টএক্সের ড্যাশবোর্ড থেকে সরাসরি রেডএক্স এপিআই দিয়ে পার্সেল বুক করা হয়।" },
      benefits: [
        { en: "Automated parcel booking and tracking sync", bn: "স্বয়ংক্রিয় পার্সেল বুকিং ও ট্র্যাকিং সিঙ্ক" },
        { en: "Doorstep merchant pickup coordination", bn: "মার্চেন্টের ঠিকানা থেকে পার্সেল সংগ্রহের সুবিধা" },
      ],
    },

    requirements: {
      accountRequirements: [{ en: "Active RedX Merchant Account & API Token", bn: "সক্রিয় রেডএক্স মার্চেন্ট অ্যাকাউন্ট ও এপিআই টোকেন" }],
      approvalProcess: { en: "Register at redx.com.bd and generate token.", bn: "redx.com.bd-এ রেজিস্টার করে টোকেন নিন।" },
      supportedRegions: { en: "Bangladesh", bn: "বাংলাদেশ" },
      supportedCurrencies: { en: "BDT (৳)", bn: "বাংলাদেশি টাকা (৳)" },
      planEligibilityNote: { en: "Requires Growth or Scale plan.", bn: "গ্রোথ বা স্কেল প্ল্যান আবশ্যক।" },
    },

    capabilities: [
      { id: "redx-cap1", title: { en: "Automated Parcel Creation", bn: "স্বয়ংক্রিয় পার্সেল তৈরি" }, description: { en: "Syncs delivery destination and COD amounts.", bn: "ঠিকানা ও সিওডি মূল্য সিঙ্ক করে।" }, isSupported: true },
    ],

    setupSteps: [
      {
        stepNumber: 1,
        title: { en: "Enter RedX API Token", bn: "রেডএক্স এপিআই টোকেন দিন" },
        description: { en: "Input your token into Settings → Shipping → RedX.", bn: "Settings → Shipping → RedX-এ গিয়ে টোকেন সেভ করুন।" },
        codeSnippet: "REDX_API_TOKEN=your_token_here",
      },
    ],

    dataExchanged: {
      summary: { en: "Customer name, phone, address, and COD values.", bn: "গ্রাহকের নাম, ফোন, ঠিকানা ও সিওডি মূল্য।" },
      sensitiveDataNote: { en: "Delivery information only.", bn: "শুধুমাত্র ডেলিভারি তথ্য।" },
      items: [{ direction: "sent", title: { en: "Sent to RedX", bn: "রেডএক্সে প্রেরিত" }, fields: [{ en: "Address & COD amount", bn: "ঠিকানা ও সিওডি টাকা" }], note: { en: "REST API.", bn: "রেস্ট এপিআই।" } }],
    },

    securityNotes: {
      credentialStorage: { en: "Encrypted at rest.", bn: "এনক্রিপশনে সংরক্ষিত।" },
      permissionScope: { en: "Shipping only.", bn: "ডেলিভারি কাজে সীমাবদ্ধ।" },
      webhookVerification: { en: "Verified tokens.", bn: "ভেরিফায়েড টোকেন।" },
      bestPractices: [{ en: "Rotate token periodically", bn: "নির্ধারিত সময় পর পর টোকেন রিনিউ করুন" }],
    },

    limitations: {
      unsupportedOperations: [{ en: "International deliveries", bn: "আন্তর্জাতিক ডেলিভারি" }],
      feeStructureNotice: { en: "RedX courier fees apply.", bn: "রেডএক্সের নিজস্ব ফি প্রযোজ্য।" },
      regionalRestrictions: { en: "Bangladesh only", bn: "শুধুমাত্র বাংলাদেশ" },
    },

    troubleshooting: [
      {
        issue: { en: "Authentication Token Expired", bn: "অথেন্টিকেশন টোকেন মেয়াদোত্তীর্ণ" },
        cause: { en: "Token revoked or expired on RedX portal.", bn: "রেডএক্স পোর্টালে টোকেনের মেয়াদ শেষ হয়েছে।" },
        resolution: { en: "Generate a new token in RedX and update CartX settings.", bn: "নতুন টোকেন নিয়ে কার্টএক্সে আপডেট করুন।" },
      },
    ],

    faqs: [
      {
        id: "redx-faq1",
        question: { en: "Does RedX provide tracking numbers?", bn: "রেডএক্স কি ট্র্যাকিং নম্বর দেয়?" },
        answer: { en: "Yes, tracking codes are automatically generated and linked to the order.", bn: "হ্যাঁ, বুকিংয়ের সাথে সাথেই ট্র্যাকিং নম্বর তৈরি হয়ে যায়।" },
      },
    ],

    relatedSlugs: ["pathao", "steadfast", "bkash"],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. eCourier Parcel Network (Beta)
  // ─────────────────────────────────────────────────────────────
  ecourier: {
    slug: "ecourier",
    name: "eCourier",
    category: "shipping",
    categoryLabel: {
      en: "Courier & Shipping",
      bn: "কুরিয়ার ও ডেলিভারি",
    },
    tagline: {
      en: "Tech-enabled courier and cargo delivery across Bangladesh (Beta Connector)",
      bn: "প্রযুক্তিভিত্তিক কুরিয়ার ও পার্সেল নেটওয়ার্ক (বেটা কানেক্টর)",
    },
    description: {
      en: "Beta logistics connector for eCourier. Features automated consignment booking, barcode sticker generation, and live delivery status webhooks.",
      bn: "ই-কুরিয়ারের জন্য বেটা লজিস্টিকস কানেক্টর। পার্সেল বুকিং, বারকোড স্টিকার প্রিন্ট এবং লাইভ স্ট্যাটাস ওয়েবহুক সুবিধা রয়েছে।",
    },
    status: "beta",
    iconName: "Truck",
    iconColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-500/10",
    eligiblePlans: ["growth", "scale"],

    providerOverview: {
      overview: { en: "eCourier provides nationwide parcel and express logistics for e-commerce brands.", bn: "ই-কুরিয়ার দেশজুড়ে পার্সেল ও এক্সপ্রেস ডেলিভারি সেবা প্রদান করে।" },
      providerUrl: "https://ecourier.com.bd",
      actionLabel: { en: "Request Beta Access", bn: "বেটা অ্যাক্সেসের আবেদন করুন" },
      actionHref: "/contact",
    },

    whatItDoes: {
      purpose: { en: "To connect CartX stores directly with eCourier's fulfillment network.", bn: "কার্টএক্সের সাথে সরাসরি ই-কুরিয়ারের নেটওয়ার্ক যুক্ত করা।" },
      businessProblem: { en: "Manual booking delays for multi-courier fulfillment strategies.", bn: "একাধিক কুরিয়ার ব্যবহারের সময় বুকিং জটিলতা নিরসন।" },
      howItWorks: { en: "Consignments are generated via eCourier REST API.", bn: "ই-কুরিয়ার রেস্ট এপিআই দিয়ে পার্সেল বুক হয়।" },
      benefits: [{ en: "Automated booking in beta testing", bn: "বেটা টেস্টিংয়ে অটোমেটেড বুকিং সুবিধা" }],
    },

    requirements: {
      accountRequirements: [{ en: "Active eCourier Merchant Account & API Key", bn: "সক্রিয় ই-কুরিয়ার মার্চেন্ট অ্যাকাউন্ট ও এপিআই কি" }],
      approvalProcess: { en: "Register at ecourier.com.bd.", bn: "ecourier.com.bd-এ রেজিস্টার করুন।" },
      supportedRegions: { en: "Bangladesh", bn: "বাংলাদেশ" },
      supportedCurrencies: { en: "BDT (৳)", bn: "বাংলাদেশি টাকা (৳)" },
      planEligibilityNote: { en: "Available on Growth and Scale tiers.", bn: "গ্রোথ এবং স্কেল প্ল্যানে প্রযোজ্য।" },
    },

    capabilities: [
      { id: "ec-cap1", title: { en: "Direct API Consignment Booking", bn: "ডিরেক্ট এপিআই বুকিং" }, description: { en: "Sends order details directly to eCourier.", bn: "সরাসরি ই-কুরিয়ারে তথ্য পাঠানো।" }, isSupported: true },
    ],

    setupSteps: [
      {
        stepNumber: 1,
        title: { en: "Request Beta Credentials", bn: "বেটা ক্রিডেনশিয়াল সংগ্রহ করুন" },
        description: { en: "Contact CartX Support to enable eCourier beta connector on your store.", bn: "কার্টএক্স সাপোর্টে যোগাযোগ করে বেটা কানেক্টর সক্রিয় করুন।" },
      },
    ],

    dataExchanged: {
      summary: { en: "Address and COD data exchanged.", bn: "ঠিকানা ও সিওডি মূল্য আদান-প্রদান।" },
      sensitiveDataNote: { en: "Delivery details only.", bn: "কেবলমাত্র ডেলিভারি তথ্য।" },
      items: [{ direction: "sent", title: { en: "Sent to eCourier", bn: "ই-কুরিয়ারে প্রেরিত" }, fields: [{ en: "Address and phone", bn: "ঠিকানা ও মোবাইল" }], note: { en: "REST API.", bn: "রেস্ট এপিআই।" } }],
    },

    securityNotes: {
      credentialStorage: { en: "Encrypted at rest.", bn: "এনক্রিপশনে সংরক্ষিত।" },
      permissionScope: { en: "Logistics only.", bn: "লজিস্টিকসে সীমাবদ্ধ।" },
      webhookVerification: { en: "Signature verified.", bn: "সিগনেচার যাচাই।" },
      bestPractices: [{ en: "Do not share API secrets", bn: "এপিআই সিক্রেট কারো সাথে শেয়ার করবেন না" }],
    },

    limitations: {
      unsupportedOperations: [{ en: "Instant reverse pickup scheduling", bn: "স্বয়ংক্রিয় রিভার্স পিকআপ" }],
      feeStructureNotice: { en: "Standard eCourier delivery rates apply.", bn: "ই-কুরিয়ারের নিজস্ব চার্জ প্রযোজ্য।" },
      regionalRestrictions: { en: "Bangladesh only", bn: "শুধুমাত্র বাংলাদেশ" },
      betaNotice: { en: "eCourier connector is currently in Beta access.", bn: "ই-কুরিয়ার কানেক্টরটি বর্তমানে বেটা পর্যায়ে রয়েছে।" },
    },

    troubleshooting: [
      {
        issue: { en: "API Endpoint Connection Timeout", bn: "এপিআই টাইমআউট" },
        cause: { en: "Temporary eCourier gateway maintenance.", bn: "ই-কুরিয়ারের সাময়িক সার্ভার মেইনটেন্যান্স।" },
        resolution: { en: "Retry after a few minutes or dispatch via Steadfast/Pathao.", bn: "কিছুক্ষণ পর পুনরায় চেষ্টা করুন বা বিকল্প কুরিয়ার ব্যবহার করুন।" },
      },
    ],

    faqs: [
      {
        id: "ec-faq1",
        question: { en: "When will eCourier leave Beta status?", bn: "ই-কুরিয়ার কবে নাগাদ পূর্ণাঙ্গ রিলিজ পাবে?" },
        answer: { en: "Following completion of carrier reliability tests across all 64 districts.", bn: "দেশজুড়ে নির্ভরযোগ্যতা যাচাই পর্ব শেষ হলে দ্রুতই সাধারণ রিলিজ দেওয়া হবে।" },
      },
    ],

    relatedSlugs: ["pathao", "steadfast", "redx"],
  },

  // ─────────────────────────────────────────────────────────────
  // 9. Meta Pixel & Conversions API (CAPI)
  // ─────────────────────────────────────────────────────────────
  "meta-pixel": {
    slug: "meta-pixel",
    name: "Meta Pixel & Conversions API",
    category: "analytics",
    categoryLabel: {
      en: "Analytics & Marketing",
      bn: "অ্যানালিটিক্স ও মার্কেটিং",
    },
    tagline: {
      en: "Hybrid browser pixel and server-side Conversions API for precise Facebook & Instagram ad attribution",
      bn: "ফেসবুক ও ইনস্টাগ্রাম বিজ্ঞাপনের সঠিক ট্র্যাকিংয়ের জন্য ব্রাউজার পিক্সেল ও সার্ভার-সাইড সিএপিআই",
    },
    description: {
      en: "Track page views, catalog item views, add-to-cart actions, and verified purchases. Uses hybrid client-side pixel and server-side CAPI to bypass iOS/browser ad blockers and ensure accurate ROAS.",
      bn: "পণ্য প্রদর্শন, কার্টে যোগ এবং সফল ক্রয়ের প্রতিটি ইভেন্ট নির্ভুলভাবে ট্র্যাক করুন। ব্রাউজার অ্যাড-ব্লকার এড়িয়ে সঠিক আরওএএস (ROAS) পেতে হাইব্রিড সার্ভার সিএপিআই অন্তর্ভুক্ত।",
    },
    status: "available",
    iconName: "BarChart3",
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-500/10",
    eligiblePlans: ["starter", "growth", "scale"],

    providerOverview: {
      overview: {
        en: "Meta Pixel & Conversions API connects your CartX store directly to Meta Ads Manager for accurate ad tracking, dynamic retargeting, and custom audience creation.",
        bn: "মেটা পিক্সেল ও কনভার্সন এপিআই আপনার কার্টএক্স স্টোরকে মেটা অ্যাডস ম্যানেজারের সাথে সংযুক্ত করে সঠিক বিজ্ঞাপন ট্র্যাকিং ও রিটার্গেটিং নিশ্চিত করে।",
      },
      providerUrl: "https://business.facebook.com",
      actionLabel: { en: "Configure in Admin", bn: "অ্যাডমিনে কনফিগার করুন" },
      actionHref: "/start",
    },

    whatItDoes: {
      purpose: {
        en: "To give merchants accurate conversion tracking and ROAS data for Facebook and Instagram campaigns, especially after browser cookie restrictions and iOS privacy changes.",
        bn: "ব্রাউজার কুকি ব্লক ও আইওএস আপডেটের পরেও ফেসবুক ও ইনস্টাগ্রাম বিজ্ঞাপনে সঠিক সেলস ট্র্যাকিং ও লাভ-ক্ষতির হিসাব রাখা।",
      },
      businessProblem: {
        en: "Client-side browser pixels alone lose up to 35% of conversion events due to ad blockers, slow mobile networks, and cookie expiration, causing ad spend waste.",
        bn: "শুধুমাত্র ব্রাউজার পিক্সেল ব্যবহার করলে অ্যাড-ব্লকার ও দুর্বল নেটওয়ার্কের কারণে ৩৫% পর্যন্ত সেলস মিস হয়ে যায়, ফলে বিজ্ঞাপনের খরচ বাড়ে।",
      },
      howItWorks: {
        en: "CartX runs a dual-layer tracking system: standard events fire in the browser, while identical server-side events fire through Meta's Conversions API with shared event_id for automatic deduplication. Meta registers 100% of purchase signals.",
        bn: "কার্টএক্স ব্রাউজারের পাশাপাশি সার্ভার থেকে সরাসরি মেটার এপিআই-তে ডাটা পাঠায়। একই event_id থাকায় ডুপ্লিকেট বাদ দিয়ে শতভাগ সঠিক সেলস রেকর্ড তৈরি হয়।",
      },
      benefits: [
        { en: "Server-side Conversions API bypasses browser ad-blockers", bn: "সার্ভার-সাইড সিএপিআই ব্রাউজারের অ্যাড-ব্লকার এড়িয়ে কাজ করে" },
        { en: "Automated event deduplication prevents duplicate conversions", bn: "অটোমেটেড ডি-ডুপ্লিকেশন কোনো সেলস দুবার কাউন্ট হতে দেয় না" },
        { en: "Standard e-commerce events: ViewContent, AddToCart, InitiateCheckout, Purchase", bn: "ই-কমার্সের সকল স্ট্যান্ডার্ড ইভেন্ট স্বয়ংক্রিয়ভাবে ট্র্যাক হয়" },
        { en: "Drives high-performing Facebook Dynamic Product Ads (DPA)", bn: "ফেসবুক ডায়নামিক প্রোডাক্ট ক্যাটালগ বিজ্ঞাপনে সর্বোচ্চ ফলাফল" },
      ],
    },

    requirements: {
      accountRequirements: [
        { en: "Meta Business Account & Ads Manager Account", bn: "মেটা বিজনেস অ্যাকাউন্ট ও অ্যাডস ম্যানেজার" },
        { en: "Meta Pixel ID (Dataset ID)", bn: "মেটা পিক্সেল আইডি (Dataset ID)" },
        { en: "Meta Conversions API Access Token (System User Token)", bn: "মেটা সিএপিআই অ্যাক্সেস টোকেন (System User Token)" },
      ],
      approvalProcess: {
        en: "Generate Pixel ID in Meta Events Manager. Under Settings → Conversions API, generate your access token and paste into CartX.",
        bn: "মেটা ইভেন্টস ম্যানেজার থেকে পিক্সেল আইডি এবং সেটিংস থেকে অ্যাক্সেস টোকেন নিয়ে কার্টএক্সে পেস্ট করুন।",
      },
      supportedRegions: { en: "Global", bn: "বিশ্বজুড়ে" },
      supportedCurrencies: { en: "All currencies (BDT, USD, etc.)", bn: "সকল কারেন্সি (টাকা, ডলার ইত্যাদি)" },
      planEligibilityNote: {
        en: "Available across Starter, Growth, and Scale plans with zero plugin bloat.",
        bn: "কোনো বাড়তি প্লাগইন ছাড়া স্টার্টার, গ্রোথ এবং স্কেল সব প্ল্যানে অন্তর্ভুক্ত।",
      },
    },

    capabilities: [
      { id: "meta-cap1", title: { en: "Dual-Layer Event Attribution", bn: "দ্বিমুখী ইভেন্ট ট্র্যাকিং" }, description: { en: "Simultaneous browser pixel and server-side CAPI dispatch.", bn: "ব্রাউজার ও সার্ভার থেকে একসাথে নিখুঁত ইভেন্ট প্রেরণ।" }, isSupported: true },
      { id: "meta-cap2", title: { en: "Full Product Parameter Passing", bn: "সম্পূর্ণ প্রোডাক্ট প্যারামিটার" }, description: { en: "Sends product_id, value, currency, content_name, and category.", bn: "পণ্যের আইডি, মূল্য, নাম ও ক্যাটাগরি স্বয়ংক্রিয়ভাবে প্রেরিত হয়।" }, isSupported: true },
      { id: "meta-cap3", title: { en: "Deduplication via Event ID", bn: "ইভেন্ট আইডি দিয়ে ডি-ডুপ্লিকেশন" }, description: { en: "Ensures Meta combines matching signals into a single accurate conversion.", bn: "মেটা একই ইভেন্টকে একটি মাত্র সঠিক সেলস হিসেবে গণ্য করে।" }, isSupported: true },
    ],

    setupSteps: [
      {
        stepNumber: 1,
        title: { en: "Locate Meta Pixel ID & Token", bn: "পিক্সেল আইডি ও টোকেন সংগ্রহ করুন" },
        description: {
          en: "In Meta Events Manager, copy your Pixel ID and generate a Conversions API Access Token under Settings.",
          bn: "মেটা ইভেন্টস ম্যানেজারে গিয়ে পিক্সেল আইডি এবং সেটিংস থেকে Conversions API টোকেন কপি করুন।",
        },
      },
      {
        stepNumber: 2,
        title: { en: "Paste in CartX Analytics Settings", bn: "কার্টএক্সে পেস্ট করুন" },
        description: {
          en: "Go to Settings → Analytics & Pixels → Meta Pixel in CartX. Enter Pixel ID and Token, then save.",
          bn: "কার্টএক্সের Settings → Analytics & Pixels → Meta Pixel-এ গিয়ে আইডি ও টোকেন সেভ করুন।",
        },
        codeSnippet: "META_PIXEL_ID=your_pixel_id_here\nMETA_CAPI_TOKEN=your_access_token_here",
      },
      {
        stepNumber: 3,
        title: { en: "Verify in Meta Test Events Tool", bn: "মেটা টেস্ট ইভেন্টস টুলে যাচাই করুন" },
        description: {
          en: "Visit your storefront, add a product to cart, and observe live events arriving in Meta Events Manager marked as 'Browser' and 'Server'.",
          bn: "আপনার স্টোর ভিজিট করে একটি পণ্য কার্টে যোগ করুন এবং মেটা ইভেন্টস ম্যানেজারে 'Browser' ও 'Server' উভয় সিগন্যাল সফলভাবে আসার বিষয়টি নিশ্চিত করুন।",
        },
      },
    ],

    dataExchanged: {
      summary: {
        en: "E-commerce actions (page view, add-to-cart, purchase amount) are shared with Meta to measure ad effectiveness.",
        bn: "বিজ্ঞাপনের কার্যকারিতা মাপার জন্য পেজ ভিউ, কার্টে যোগ ও ক্রয়ের টাকার পরিমাণ মেটার কাছে পাঠানো হয়।",
      },
      sensitiveDataNote: {
        en: "CartX never sends plain credit card details or unhashed personal identification. Customer email and phone are SHA-256 hashed before transmission as per Meta privacy standards.",
        bn: "কার্টএক্স কখনোই কার্ড তথ্য পাঠায় না। গ্রাহকের ইমেইল ও ফোন নম্বর SHA-256 এনক্রিপ্ট করে হ্যাশ ফরম্যাটে মেটার কাছে পাঠানো হয়।",
      },
      items: [
        {
          direction: "sent",
          title: { en: "Data Sent to Meta", bn: "মেটাতে প্রেরিত তথ্য" },
          fields: [
            { en: "Event Name (PageView, ViewContent, AddToCart, Purchase)", bn: "ইভেন্ট নাম (ভিউ, কার্ট, পারচেস)" },
            { en: "Product IDs, Category & Total Value in BDT", bn: "প্রোডাক্ট আইডি, ক্যাটাগরি ও মোট মূল্য" },
            { en: "Event ID & Client User Agent", bn: "ইভেন্ট আইডি ও ব্রাউজার ইউজার এজেন্ট" },
            { en: "SHA-256 Hashed Customer Phone / Email", bn: "SHA-256 হ্যাশ করা কাস্টমার মোবাইল ও ইমেইল" },
          ],
          note: { en: "Encrypted server-to-server TLS connection.", bn: "এনক্রিপ্টেড সার্ভার সংযোগ।" },
        },
      ],
    },

    securityNotes: {
      credentialStorage: { en: "CAPI Token encrypted at rest.", bn: "সিএপিআই টোকেন এনক্রিপ্ট করে সুরক্ষিত রাখা হয়।" },
      permissionScope: { en: "Events reporting only.", bn: "শুধুমাত্র ইভেন্ট রিপোর্টিংয়ে ব্যবহৃত।" },
      webhookVerification: { en: "Official Graph API protocol.", bn: "অফিসিয়াল গ্রাফ এপিআই প্রোটোকল।" },
      bestPractices: [
        { en: "Use a System User Token with non-expiring permissions in Meta Business Manager", bn: "মেটা বিজনেস ম্যানেজারে মেয়াদের ঝামেলাহীন সিস্টেম ইউজার টোকেন ব্যবহার করুন" },
      ],
    },

    limitations: {
      unsupportedOperations: [{ en: "Offline store physical POS purchases (unless uploaded via offline events)", bn: "অফলাইন দোকানের ক্যাশ মেমো বিক্রয়" }],
      feeStructureNotice: { en: "Meta Pixel integration is 100% free with CartX. Ad spend is paid directly to Meta.", bn: "কার্টএক্সে মেটা পিক্সেল সম্পূর্ণ ফ্রি। বিজ্ঞাপনের বাজেট সরাসরি মেটাকে দিতে হয়।" },
      regionalRestrictions: { en: "None", bn: "কোনো সীমাবদ্ধতা নেই" },
    },

    troubleshooting: [
      {
        issue: { en: "Low Event Match Quality Score", bn: "লো ইভেন্ট ম্যাচ কোয়ালিটি স্কোর" },
        cause: { en: "Server-side CAPI token is missing or disabled in CartX settings.", bn: "কার্টএক্সে সার্ভার সিএপিআই টোকেন দেওয়া হয়নি বা বন্ধ রয়েছে।" },
        resolution: { en: "Generate a permanent System User Token in Meta Events Manager and paste into CartX.", bn: "মেটা ইভেন্টস ম্যানেজার থেকে পার্মানেন্ট সিস্টেম ইউজার টোকেন নিয়ে কার্টএক্সে সেভ করুন।" },
      },
    ],

    faqs: [
      {
        id: "meta-faq1",
        question: { en: "Why do I need Conversions API if I already have Pixel?", bn: "পিক্সেল থাকা সত্ত্বেও কনভার্সন এপিআই (CAPI) কেন প্রয়োজন?" },
        answer: { en: "Conversions API sends data directly from your server to Meta, ensuring you don't lose sales data when shoppers use ad blockers or strict browser privacy controls.", bn: "সিএপিআই সার্ভার থেকে সরাসরি মেটাতে তথ্য পাঠায়, ফলে ক্রেতারা অ্যাড-ব্লকার ব্যবহার করলেও সেলসের হিসাব বাদ পড়ে না।" },
      },
    ],

    relatedSlugs: ["google-analytics", "bkash", "pathao"],
  },

  // ─────────────────────────────────────────────────────────────
  // 10. Google Analytics 4 & Google Tag Manager
  // ─────────────────────────────────────────────────────────────
  "google-analytics": {
    slug: "google-analytics",
    name: "Google Analytics 4 & GTM",
    category: "analytics",
    categoryLabel: {
      en: "Analytics & Marketing",
      bn: "অ্যানালিটিক্স ও মার্কেটিং",
    },
    tagline: {
      en: "Comprehensive e-commerce measurement for product funnels, checkout drops, and traffic attribution",
      bn: "প্রোডাক্ট ফানেল, ড্রপ-অফ এবং ট্রাফিক সোর্স বিশ্লেষণের জন্য পূর্ণাঙ্গ গুগল অ্যানালিটিক্স ৪",
    },
    description: {
      en: "Native integration for Google Analytics 4 (GA4) and Google Tag Manager (GTM). Automatically captures e-commerce events: view_item, add_to_cart, begin_checkout, and purchase.",
      bn: "গুগল অ্যানালিটিক্স ৪ এবং ট্যাগ ম্যানেজারের সরাসরি সংযোগ। কোনো জটিলতা ছাড়াই আইটেম ভিউ, কার্ট, চেকআউট এবং সেলস ট্র্যাকিং নিশ্চিত করে।",
    },
    status: "available",
    iconName: "BarChart3",
    iconColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-500/10",
    eligiblePlans: ["starter", "growth", "scale"],

    providerOverview: {
      overview: {
        en: "Google Analytics 4 provides detailed insights into where your store visitors come from and how they navigate your product catalogue.",
        bn: "গুগল অ্যানালিটিক্স ৪-এর মাধ্যমে ক্রেতারা কোথা থেকে আসছে এবং কীভাবে কেনাকাটা করছে তার পূর্ণাঙ্গ চিত্র পাওয়া যায়।",
      },
      providerUrl: "https://analytics.google.com",
      actionLabel: { en: "Configure in Admin", bn: "অ্যাডমিনে কনফিগার করুন" },
      actionHref: "/start",
    },

    whatItDoes: {
      purpose: { en: "To measure store traffic sources, marketing campaigns, product page engagement, and purchase conversion funnels.", bn: "ট্রাফিক সোর্স, ক্যাম্পেইন পারফরম্যান্স এবং সেলস ফানেল মনিটর করার জন্য।" },
      businessProblem: { en: "Merchants cannot optimize marketing without understanding which channels (Google Search, Facebook, Direct) bring actual buying customers.", bn: "কোন মাধ্যম থেকে প্রকৃত ক্রেতা আসছে তা না জানলে মার্কেটিং বাজেট অপচয় হয়।" },
      howItWorks: { en: "CartX automatically injects standardized GA4 e-commerce dataLayer events across all product, collection, and checkout pages.", bn: "কার্টএক্স স্বয়ংক্রিয়ভাবে স্ট্যান্ডার্ড ডাটা-লেয়ার ইভেন্ট ফায়ার করে গুগলে তথ্য পাঠায়।" },
      benefits: [
        { en: "Automatic standard e-commerce events without manual GTM tag writing", bn: "কোডিং ছাড়া অটোমেটিক ই-কমার্স ইভেন্ট ট্র্যাকিং" },
        { en: "Track purchase conversions and revenue attribution in BDT", bn: "টাকায় রেভিনিউ ও কনভার্সন রেটের হিসাব" },
        { en: "Google Tag Manager container ID support for custom tracking scripts", bn: "কাস্টম স্ক্রিপ্টের জন্য গুগল ট্যাগ ম্যানেজার সাপোর্ট" },
      ],
    },

    requirements: {
      accountRequirements: [
        { en: "Google Analytics 4 Property", bn: "গুগল অ্যানালিটিক্স ৪ প্রপার্টি" },
        { en: "GA4 Measurement ID (format: G-XXXXXXXXXX) or GTM Container ID", bn: "GA4 মেজারমেন্ট আইডি (G-XXXXXXXXXX) অথবা GTM আইডি" },
      ],
      approvalProcess: { en: "Create a free GA4 property at analytics.google.com and copy your Measurement ID.", bn: "analytics.google.com-এ ফ্রি অ্যাকাউন্ট করে মেজারমেন্ট আইডি কপি করুন।" },
      supportedRegions: { en: "Global", bn: "বিশ্বব্যাপী" },
      supportedCurrencies: { en: "All currencies", bn: "সকল কারেন্সি" },
      planEligibilityNote: { en: "Included on Starter, Growth, and Scale plans.", bn: "স্টার্টার, গ্রোথ এবং স্কেল সব প্ল্যানে অন্তর্ভুক্ত।" },
    },

    capabilities: [
      { id: "ga-cap1", title: { en: "Standard E-commerce dataLayer", bn: "স্ট্যান্ডার্ড ই-কমার্স ডাটা-লেয়ার" }, description: { en: "Fires view_item_list, view_item, add_to_cart, begin_checkout, and purchase.", bn: "সকল স্ট্যান্ডার্ড ই-কমার্স ইভেন্ট নিখুঁতভাবে ফায়ার করে।" }, isSupported: true },
    ],

    setupSteps: [
      {
        stepNumber: 1,
        title: { en: "Copy GA4 Measurement ID", bn: "মেজারমেন্ট আইডি কপি করুন" },
        description: { en: "In Google Analytics, go to Admin → Data Streams → Web and copy your G-XXXXXXXXXX ID.", bn: "গুগল অ্যানালিটিক্স থেকে আপনার G-XXXXXXXXXX মেজারমেন্ট আইডি কপি করুন।" },
      },
      {
        stepNumber: 2,
        title: { en: "Paste into CartX Analytics", bn: "কার্টএক্সে সেভ করুন" },
        description: { en: "In CartX Store Admin, go to Settings → Analytics → Google Analytics and save your ID.", bn: "কার্টএক্সের Settings → Analytics → Google Analytics-এ গিয়ে আইডি পেস্ট করুন।" },
        codeSnippet: "GA4_MEASUREMENT_ID=G-XXXXXXXXXX",
      },
    ],

    dataExchanged: {
      summary: { en: "Browsing behavior, page URLs, product titles, and purchase totals.", bn: "ভিজিটরদের ব্রাউজিং তথ্য, পেজ ইউআরএল ও কেনাকাটার পরিমাণ।" },
      sensitiveDataNote: { en: "No personally identifiable information (PII) is shared with Google.", bn: "গ্রাহকের ব্যক্তিগত সংবেদনশীল তথ্য গুগলে পাঠানো হয় না।" },
      items: [{ direction: "sent", title: { en: "Sent to GA4", bn: "গুগল অ্যানালিটিক্সে প্রেরিত" }, fields: [{ en: "Page URL & E-commerce events with values", bn: "পেজ ইউআরএল ও ই-কমার্স ইভেন্ট" }], note: { en: "Standard protocol.", bn: "স্ট্যান্ডার্ড প্রোটোকল।" } }],
    },

    securityNotes: {
      credentialStorage: { en: "Public Measurement ID only.", bn: "শুধুমাত্র পাবলিক আইডি সংরক্ষিত।" },
      permissionScope: { en: "Measurement only.", bn: "শুধুমাত্র অ্যানালিটিক্স।" },
      webhookVerification: { en: "Client-side telemetry.", bn: "ক্লায়েন্ট সাইড টেলিম্যাট্রি।" },
      bestPractices: [{ en: "Enable IP Anonymization in GA4 settings", bn: "আইপি অ্যানোনিমাইজেশন সচল রাখুন" }],
    },

    limitations: {
      unsupportedOperations: [{ en: "Server-side raw log exporting without BigQuery link", bn: "বিগকোয়েরি ছাড়া সরাসরি র' লগ ডাউনলোড" }],
      feeStructureNotice: { en: "Google Analytics 4 is 100% free.", bn: "গুগল অ্যানালিটিক্স ৪ সম্পূর্ণ ফ্রি।" },
      regionalRestrictions: { en: "None", bn: "কোনো সীমাবদ্ধতা নেই" },
    },

    troubleshooting: [
      {
        issue: { en: "Realtime View Shows No Users", bn: "রিয়েল-টাইমে ভিজিটর দেখাচ্ছে না" },
        cause: { en: "Typo in Measurement ID or browser extension blocking analytics scripts.", bn: "আইডিতে ভুল বা ব্রাউজারে ট্র্যাকার ব্লকার চালু থাকা।" },
        resolution: { en: "Verify the G-XXXXXXXXXX format in CartX and test using an incognito window.", bn: "ইনকগনিটো উইন্ডোতে টেস্ট করে আইডি ঠিক আছে কিনা দেখে নিন।" },
      },
    ],

    faqs: [
      {
        id: "ga-faq1",
        question: { en: "Can I use Google Tag Manager (GTM) instead?", bn: "আমি কি মেজারমেন্ট আইডির বদলে GTM ব্যবহার করতে পারব?" },
        answer: { en: "Yes! CartX also provides a dedicated GTM Container ID field (GTM-XXXXXXX) for custom tag configurations.", bn: "হ্যাঁ! কার্টএক্সে সরাসরি GTM Container ID বসানোর অপশনও রয়েছে।" },
      },
    ],

    relatedSlugs: ["meta-pixel", "bkash", "pathao"],
  },

  // ─────────────────────────────────────────────────────────────
  // 11. Transactional SMS & OTP Gateway
  // ─────────────────────────────────────────────────────────────
  "sms-gateway": {
    slug: "sms-gateway",
    name: "SMS & OTP Gateway",
    category: "communication",
    categoryLabel: {
      en: "Communication",
      bn: "যোগাযোগ ও এসএমএস",
    },
    tagline: {
      en: "Automated branded SMS notifications for order confirmations, delivery tracking, and OTP verification",
      bn: "অর্ডার নিশ্চিতকরণ, কুরিয়ার ট্র্যাকিং এবং ওটিপির জন্য ব্র্যান্ডেড এসএমএস গেটওয়ে",
    },
    description: {
      en: "Connect supported Bangladeshi SMS aggregators (Greenweb, Alpha SMS, Elitbuzz) for automated transactional messaging. Keep buyers informed with branded SMS at every fulfillment stage.",
      bn: "বাংলাদেশের জনপ্রিয় এসএমএস গেটওয়েগুলোর সাথে সরাসরি সংযোগ। অর্ডার কনফার্মেশন ও ট্র্যাকিংয়ের তথ্য ব্র্যান্ডের নামে গ্রাহকের মোবাইলে পৌঁছে দিন।",
    },
    status: "available",
    iconName: "MessageSquare",
    iconColor: "text-teal-600 dark:text-teal-400",
    iconBg: "bg-teal-500/10",
    eligiblePlans: ["growth", "scale"],

    providerOverview: {
      overview: {
        en: "Transactional SMS keeps your customers informed with real-time text updates, reducing return rates and building buyer trust.",
        bn: "এসএমএস নোটিফিকেশনের মাধ্যমে গ্রাহকদের অর্ডারের আপডেট জানিয়ে ডেলিভারি সাকসেস রেট বাড়ানো যায়।",
      },
      providerUrl: "https://cartx.com/features/order-management",
      actionLabel: { en: "Configure in Admin", bn: "অ্যাডমিনে কনফিগার করুন" },
      actionHref: "/start",
    },

    whatItDoes: {
      purpose: { en: "To send automated order alerts and parcel dispatch SMS messages with customer tracking links.", bn: "অর্ডার কনফার্ম ও পার্সেল ছাড়ার সাথে সাথে গ্রাহককে স্বয়ংক্রিয় মেসেজ পাঠানো।" },
      businessProblem: { en: "Uninformed customers often forget Cash on Delivery orders, leading to failed deliveries and high return shipping fees.", bn: "গ্রাহক অর্ডার ভুলে গেলে পার্সেল রিসিভ করে না এবং বিক্রেতার রিটার্ন খরচ বহন করতে হয়।" },
      howItWorks: { en: "When an order status changes in CartX, the configured SMS provider sends a personalized text message to the customer's phone number.", bn: "অর্ডার স্ট্যাটাস পরিবর্তনের সাথে সাথে গ্রাহকের ফোনে স্বয়ংক্রিয় এসএমএস চলে যায়।" },
      benefits: [
        { en: "Reduces COD parcel return rate by up to 25%", bn: "ক্যাশ অন ডেলিভারি পার্সেল রিটার্নের হার ২৫% পর্যন্ত কমায়" },
        { en: "Masking / Branded Sender ID support (e.g. YourBrand)", bn: "আপনার ব্র্যান্ডের নামে মাস্কিং এসএমএস পাঠানোর সুবিধা" },
        { en: "Automated template variables: {customer_name}, {order_id}, {tracking_link}", bn: "কাস্টমার নাম, অর্ডার নম্বর ও ট্র্যাকিং লিংক সহ ডায়নামিক মেসেজ" },
      ],
    },

    requirements: {
      accountRequirements: [
        { en: "Registered account with Greenweb, Alpha SMS, or Elitbuzz", bn: "অনুমোদিত লোকাল এসএমএস গেটওয়ে অ্যাকাউন্ট" },
        { en: "Approved Masking Sender ID (BTRC verified)", bn: "বিটিআরসি অনুমোদিত মাস্কিং নাম (ঐচ্ছিক)" },
        { en: "SMS API Key / Token", bn: "এসএমএস এপিআই কি বা টোকেন" },
      ],
      approvalProcess: { en: "Sign up with any supported SMS provider and copy their API endpoint token into CartX.", bn: "সাপোর্টেড যেকোনা এসএমএস প্রোভাইডারে অ্যাকাউন্ট করে এপিআই টোকেন কার্টএক্সে দিন।" },
      supportedRegions: { en: "Bangladesh (880 operators)", bn: "বাংলাদেশ (সকল মোবাইল অপারেটর)" },
      supportedCurrencies: { en: "BDT", bn: "টাকা" },
      planEligibilityNote: { en: "Available on Growth & Scale plans.", bn: "গ্রোথ এবং স্কেল প্ল্যানে অন্তর্ভুক্ত।" },
    },

    capabilities: [
      { id: "sms-cap1", title: { en: "Automated Event Triggers", bn: "স্বয়ংক্রিয় ইভেন্ট ট্রিগার" }, description: { en: "Fires on: Order Placed, Payment Received, Courier Dispatched, Delivered.", bn: "অর্ডার হওয়া, পেমেন্ট পাওয়া এবং কুরিয়ারে বুকিংয়ের সময় স্বয়ংক্রিয় এসএমএস।" }, isSupported: true },
    ],

    setupSteps: [
      {
        stepNumber: 1,
        title: { en: "Select SMS Gateway in CartX", bn: "এসএমএস গেটওয়ে নির্বাচন করুন" },
        description: { en: "Go to Settings → Notifications → SMS Gateway and select your provider.", bn: "Settings → Notifications → SMS Gateway-এ গিয়ে আপনার প্রোভাইডার সিলেক্ট করুন।" },
        codeSnippet: "SMS_PROVIDER=Greenweb\nSMS_API_TOKEN=your_token_here\nSMS_SENDER_ID=YOURBRAND",
      },
    ],

    dataExchanged: {
      summary: { en: "Recipient mobile numbers and message body text.", bn: "মোবাইল নম্বর ও মেসেজের টেক্সট।" },
      sensitiveDataNote: { en: "No sensitive account passwords sent via SMS.", bn: "কোনো পাসওয়ার্ড এসএমএসে পাঠানো হয় না।" },
      items: [{ direction: "sent", title: { en: "Sent to SMS Provider", bn: "এসএমএস গেটওয়েতে প্রেরিত" }, fields: [{ en: "Mobile number & SMS text", bn: "মোবাইল নম্বর ও মেসেজ" }], note: { en: "HTTPS API.", bn: "এইচটিটিপিএস এপিআই।" } }],
    },

    securityNotes: {
      credentialStorage: { en: "API Token encrypted at rest.", bn: "এপিআই টোকেন এনক্রিপশনে সুরক্ষিত।" },
      permissionScope: { en: "SMS sending only.", bn: "মেসেজ পাঠানোতে সীমাবদ্ধ।" },
      webhookVerification: { en: "Delivery receipts verified.", bn: "ডেলিভারি রিপোর্ট যাচাই।" },
      bestPractices: [{ en: "Monitor SMS balance to avoid interrupted dispatch alerts", bn: "মেসেজ বন্ধ হওয়া এড়াতে পর্যাপ্ত এসএমএস ব্যালেন্স রাখুন" }],
    },

    limitations: {
      unsupportedOperations: [{ en: "International SMS numbers outside Bangladesh", bn: "বিদেশের মোবাইল নম্বরে মেসেজ" }],
      feeStructureNotice: { en: "SMS credits are purchased directly from your selected SMS aggregator.", bn: "এসএমএস চার্জ প্রোভাইডারের ট্যারিফ অনুযায়ী প্রযোজ্য।" },
      regionalRestrictions: { en: "Bangladesh only", bn: "শুধুমাত্র বাংলাদেশ" },
    },

    troubleshooting: [
      {
        issue: { en: "Insufficient SMS Balance", bn: "অপর্যাপ্ত এসএমএস ব্যালেন্স" },
        cause: { en: "Credit balance depleted on your SMS provider portal.", bn: "এসএমএস প্রোভাইডারের পোর্টালে ব্যালেন্স শেষ হয়ে গেছে।" },
        resolution: { en: "Recharge credits on your provider dashboard.", bn: "এসএমএস পোর্টালে ব্যালেন্স রিচার্জ করুন।" },
      },
    ],

    faqs: [
      {
        id: "sms-faq1",
        question: { en: "Can I customize the text message wording?", bn: "আমি কি নিজের মতো মেসেজ লিখতে পারব?" },
        answer: { en: "Yes! CartX provides an easy template editor with dynamic tags like {customer_name} and {tracking_url}.", bn: "হ্যাঁ! কার্টএক্সে টেমপ্লেট এডিটরের মাধ্যমে নিজের পছন্দমতো টেক্সট লেখার পূর্ণ স্বাধীনতা রয়েছে।" },
      },
    ],

    relatedSlugs: ["pathao", "steadfast", "bkash"],
  },

  // ─────────────────────────────────────────────────────────────
  // 12. Custom Domains & DNS Integration
  // ─────────────────────────────────────────────────────────────
  "custom-domains": {
    slug: "custom-domains",
    name: "Custom Domains & DNS",
    category: "domains",
    categoryLabel: {
      en: "Domains & DNS",
      bn: "ডোমেইন ও ডিএনএস",
    },
    tagline: {
      en: "Connect your own branded domain (yourbrand.com) with automated SSL certification and edge routing",
      bn: "বিনামূল্যে লাইফটাইম এসএসএল সহ আপনার নিজস্ব ব্র্যান্ডেড ডোমেইন (yourbrand.com) সংযোগ",
    },
    description: {
      en: "Connect any custom domain registered with Namecheap, GoDaddy, Cloudflare, or local BD registrars. Automated zero-configuration SSL certificates and global edge CDN caching.",
      bn: "যেকোনো প্রোভাইডার থেকে কেনা নিজস্ব ডোমেইন সহজে কানেক্ট করুন। রয়েছে স্বয়ংক্রিয় এসএসএল সিকিউরিটি ও দ্রুতগতির এজ রাউটিং সুবিধা।",
    },
    status: "available",
    iconName: "Globe",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    iconBg: "bg-indigo-500/10",
    eligiblePlans: ["starter", "growth", "scale"],

    providerOverview: {
      overview: {
        en: "Custom Domains allows your online store to run on your own official domain name instead of a cartx.app subdomain, building brand authority.",
        bn: "কাস্টম ডোমেইন সংযোগের মাধ্যমে আপনার ওয়েবসাইট নিজস্ব ব্র্যান্ডের ডোমেইনে চলবে, যা ক্রেতাদের আস্থা বহুগুণ বাড়িয়ে তোলে।",
      },
      providerUrl: "https://cartx.com/features/store-builder",
      actionLabel: { en: "Connect Domain", bn: "ডোমেইন কানেক্ট করুন" },
      actionHref: "/start",
    },

    whatItDoes: {
      purpose: { en: "To establish a professional brand identity by pointing your registered domain to your CartX storefront.", bn: "আপনার কেনা ডোমেইনটিকে কার্টএক্স স্টোরফ্রন্টে সংযুক্ত করে প্রফেশনাল পরিচিতি তৈরি করা।" },
      businessProblem: { en: "Running a business on a generic platform subdomain looks amateur and hurts customer trust and organic search ranking.", bn: "সাব-ডোমেইনে ব্যবসা চালালে ক্রেতার আস্থা কম থাকে এবং গুগল সার্চে ভালো র‍্যাঙ্কিং পাওয়া যায় না।" },
      howItWorks: { en: "Add a simple CNAME record in your domain registrar's DNS panel pointing to domains.cartx.app. Our edge network verifies the DNS record and automatically issues a free Let's Encrypt TLS certificate.", bn: "আপনার ডোমেইন প্যানেলে domains.cartx.app-এ একটি সি-নেম (CNAME) রেকর্ড যুক্ত করলেই স্বয়ংক্রিয়ভাবে ফ্রি এসএসএল সহ ডোমেইন চালু হয়ে যায়।" },
      benefits: [
        { en: "Free automated SSL / HTTPS certificate with auto-renewal", bn: "ফ্রি লাইফটাইম এসএসএল সিকিউরিটি ও অটো-রিনিউয়াল" },
        { en: "Apex (root) and www subdomain support", bn: "রুট ডোমেইন এবং www উভয় সাব-ডোমেইনে ব্যবহারের সুবিধা" },
        { en: "Global CDN caching for sub-second page loads", bn: "দ্রুতগতির ক্লাউড সিডিএন ক্যাশিং" },
      ],
    },

    requirements: {
      accountRequirements: [
        { en: "A registered domain name from any registrar (Namecheap, GoDaddy, BTCL, etc.)", bn: "যেকোনো রেজিস্ট্রার থেকে কেনা সক্রিয় ডোমেইন" },
        { en: "Access to your domain's DNS management panel", bn: "ডোমেইনের ডিএনএস রেকর্ড ম্যানেজ করার অ্যাক্সেস" },
      ],
      approvalProcess: { en: "Automated DNS propagation verification (typically 5 to 30 minutes).", bn: "স্বয়ংক্রিয় ডিএনএস ভেরিফিকেশন (সাধারণত ৫ থেকে ৩০ মিনিট লাগে)।" },
      supportedRegions: { en: "Global", bn: "বিশ্বব্যাপী" },
      supportedCurrencies: { en: "All", bn: "সকল" },
      planEligibilityNote: { en: "Included across Starter, Growth, and Scale plans.", bn: "স্টার্টার, গ্রোথ এবং স্কেল সব প্ল্যানে অন্তর্ভুক্ত।" },
    },

    capabilities: [
      { id: "dom-cap1", title: { en: "Zero-Touch SSL Provisioning", bn: "অটোমেটিক এসএসএল সার্টিফিকেট" }, description: { en: "Generates and auto-renews 256-bit TLS certificates automatically.", bn: "স্বয়ংক্রিয়ভাবে ২৫৬-বিট টিএলএস সিকিউরিটি চালু ও নবায়ন হয়।" }, isSupported: true },
    ],

    setupSteps: [
      {
        stepNumber: 1,
        title: { en: "Add CNAME Record in your DNS Manager", bn: "ডিএনএস প্যানেলে CNAME রেকর্ড যুক্ত করুন" },
        description: {
          en: "Add a CNAME record: Host = www (or @), Value = domains.cartx.app.",
          bn: "আপনার ডোমেইনের ডিএনএস ম্যানেজারে গিয়ে একটি CNAME রেকর্ড যোগ করুন: Host = www, Value = domains.cartx.app.",
        },
        codeSnippet: "Type: CNAME\nName: www\nTarget: domains.cartx.app\nTTL: Auto / 3600",
      },
      {
        stepNumber: 2,
        title: { en: "Enter Domain in CartX Store Admin", bn: "কার্টএক্সে ডোমেইন নাম দিন" },
        description: {
          en: "In CartX Store Admin, navigate to Settings → Domains and enter your domain name.",
          bn: "কার্টএক্সের Settings → Domains-এ গিয়ে আপনার ডোমেইনটি লিখে ভেরিফাই বাটনে চাপ দিন।",
        },
      },
    ],

    dataExchanged: {
      summary: { en: "DNS record verification and TLS certificate handshakes.", bn: "ডিএনএস রেকর্ড যাচাই ও সিকিউরিটি হ্যান্ডশেক।" },
      sensitiveDataNote: { en: "No private merchant files accessed.", bn: "কোনো প্রাইভেট ফাইলে অ্যাক্সেস নেওয়া হয় না।" },
      items: [{ direction: "sent", title: { en: "DNS Query", bn: "ডিএনএস কোয়েরি" }, fields: [{ en: "Domain Name & IP / CNAME status", bn: "ডোমেইন ও সি-নেম স্ট্যাটাস" }], note: { en: "Public DNS protocol.", bn: "পাবলিক ডিএনএস।" } }],
    },

    securityNotes: {
      credentialStorage: { en: "No domain passwords required.", bn: "কোনো পাসওয়ার্ডের প্রয়োজন নেই।" },
      permissionScope: { en: "DNS routing only.", bn: "শুধুমাত্র ট্রাফিক রাউটিং।" },
      webhookVerification: { en: "DNS cryptographic verification.", bn: "ক্রিপ্টোগ্রাফিক যাচাই।" },
      bestPractices: [{ en: "Keep registrar two-factor authentication enabled", bn: "ডোমেইন পোর্টালে টু-ফ্যাক্টর অথেনটিকেশন সচল রাখুন" }],
    },

    limitations: {
      unsupportedOperations: [{ en: "Direct email hosting (use Google Workspace / Zoho via MX records)", bn: "ইমেইল ইনবক্স হোস্টিং (এক্ষেত্রে Google Workspace বা Zoho প্রযোজ্য)" }],
      feeStructureNotice: { en: "Domain registration fees are paid to your domain registrar. CartX provides SSL and domain mapping for free.", bn: "ডোমেইনের বার্ষিক ফি রেজিস্ট্রারকে দিতে হয়। কার্টএক্স এসএসএল ও হোস্টিং সম্পূর্ণ ফ্রিতে দেয়।" },
      regionalRestrictions: { en: "None", bn: "কোনো সীমাবদ্ধতা নেই" },
    },

    troubleshooting: [
      {
        issue: { en: "DNS Propagation Delay / SSL Pending", bn: "ডিএনএস প্রপাগেশন বিলম্ব" },
        cause: { en: "DNS records take up to 24 hours to propagate globally across internet service providers.", bn: "ইন্টারনেট সার্ভিস প্রোভাইডার ভেদে ডিএনএস আপডেট হতে কিছুটা সময় লাগতে পারে।" },
        resolution: { en: "Wait 15-30 minutes and click 'Verify DNS Records' in CartX.", bn: "১৫-৩০ মিনিট অপেক্ষা করে কার্টএক্সে 'Verify DNS Records' বাটনে চাপ দিন।" },
      },
    ],

    faqs: [
      {
        id: "dom-faq1",
        question: { en: "Can I connect a .com.bd or .bd domain?", bn: "আমি কি .com.bd বা .bd ডোমেইন কানেক্ট করতে পারব?" },
        answer: { en: "Yes! BTCL .bd domains are fully supported via CNAME or A record pointing.", bn: "হ্যাঁ! BTCL থেকে কেনা .bd বা .com.bd ডোমেইন অনায়াসে কানেক্ট করা যায়।" },
      },
    ],

    relatedSlugs: ["meta-pixel", "google-analytics", "bkash"],
  },
};

export function getIntegrationBySlug(slug: string): IntegrationItem | undefined {
  if (slug === "meta-pixel-capi") return INTEGRATIONS_REGISTRY["meta-pixel"];
  if (slug === "ga4" || slug === "gtm") return INTEGRATIONS_REGISTRY["google-analytics"];
  if (slug === "sms" || slug === "otp") return INTEGRATIONS_REGISTRY["sms-gateway"];
  if (slug === "domains" || slug === "dns") return INTEGRATIONS_REGISTRY["custom-domains"];
  return INTEGRATIONS_REGISTRY[slug];
}

export const ALL_INTEGRATIONS_LIST = Object.values(INTEGRATIONS_REGISTRY);
export const ALL_INTEGRATIONS = ALL_INTEGRATIONS_LIST;

export function getIntegrationsByCategory(category: IntegrationCategory): IntegrationItem[] {
  return ALL_INTEGRATIONS_LIST.filter((item) => item.category === category);
}

// ─────────────────────────────────────────────────────────────
// Section 02: 5 Integration Categories Overview
// ─────────────────────────────────────────────────────────────
export const INTEGRATION_CATEGORIES_OVERVIEW: IntegrationCategoryOverview[] = [
  {
    id: "payments",
    title: { en: "Payments & MFS", bn: "পেমেন্ট ও মোবাইল ওয়ালেট" },
    tagline: { en: "Local MFS & Card Gateways", bn: "দেশীয় এমএফএস ও কার্ড গেটওয়ে" },
    description: {
      en: "Accept bKash, Nagad, Rocket, Visa, Mastercard, and internet banking with instant automated order verification.",
      bn: "বিকাশ, নগদ, রকেট, কার্ড এবং নেট ব্যাংকিংয়ের মাধ্যমে স্বয়ংক্রিয় পেমেন্ট সংগ্রহ করুন।",
    },
    iconName: "CreditCard",
    providerCount: 4,
  },
  {
    id: "shipping",
    title: { en: "Courier & Shipping", bn: "কুরিয়ার ও ডেলিভারি" },
    tagline: { en: "Nationwide Logistics APIs", bn: "সারাদেশে কুরিয়ার নেটওয়ার্ক" },
    description: {
      en: "Connect with Pathao, Steadfast, and RedX for 1-click parcel booking, barcode shipping labels, and COD tracking.",
      bn: "পাঠাও, স্টেডফাস্ট ও রেডএক্সের মাধ্যমে এক ক্লিকে পার্সেল বুকিং, বারকোড লেবেল ও ট্র্যাকিং।",
    },
    iconName: "Truck",
    providerCount: 4,
  },
  {
    id: "analytics",
    title: { en: "Analytics & Marketing", bn: "অ্যানালিটিক্স ও ট্র্যাকিং" },
    tagline: { en: "Conversions API & GA4", bn: "সিএপিআই ও গুগল অ্যানালিটিক্স" },
    description: {
      en: "Track high-intent shoppers with Meta Pixel, server-side Conversions API (CAPI), and Google Analytics 4.",
      bn: "মেটা পিক্সেল, সার্ভার-সাইড সিএপিআই এবং গুগল অ্যানালিটিক্স ৪ দিয়ে নিখুঁত সেলস ট্র্যাকিং।",
    },
    iconName: "BarChart3",
    providerCount: 2,
  },
  {
    id: "communication",
    title: { en: "SMS & Notifications", bn: "এসএমএস ও নোটিফিকেশন" },
    tagline: { en: "Branded Transactional Alerts", bn: "ব্র্যান্ডেড এসএমএস অ্যালার্ট" },
    description: {
      en: "Keep buyers informed with automated SMS order confirmations, delivery tracking links, and OTP alerts.",
      bn: "অর্ডার কনফার্মেশন ও পার্সেল ট্র্যাকিং লিংকের স্বয়ংক্রিয় ব্র্যান্ডেড এসএমএস।",
    },
    iconName: "MessageSquare",
    providerCount: 1,
  },
  {
    id: "domains",
    title: { en: "Domains & DNS", bn: "ডোমেইন ও ডিএনএস" },
    tagline: { en: "Custom Domain Connection", bn: "নিজস্ব ডোমেইন সংযোগ" },
    description: {
      en: "Connect your official domain (yourbrand.com) with automated zero-configuration SSL encryption.",
      bn: "ফ্রি লাইফটাইম এসএসএল সার্টিফিকেট সহ নিজস্ব ডোমেইন ব্যবহারের আধুনিক সুবিধা।",
    },
    iconName: "Globe",
    providerCount: 1,
  },
];

// ─────────────────────────────────────────────────────────────
// Section 04: 6-Step Integration Workflow
// ─────────────────────────────────────────────────────────────
export const INTEGRATION_WORKFLOW_STEPS: IntegrationWorkflowStep[] = [
  {
    stepNumber: 1,
    title: { en: "Select an Integration", bn: "ইন্টিগ্রেশন নির্বাচন করুন" },
    description: {
      en: "Browse the integration directory and choose the payment gateway, courier, or analytics service your business relies on.",
      bn: "ইন্টিগ্রেশন ডিরেক্টরি থেকে আপনার প্রয়োজনীয় পেমেন্ট গেটওয়ে, কুরিয়ার বা অ্যানালিটিক্স সার্ভিস বেছে নিন।",
    },
  },
  {
    stepNumber: 2,
    title: { en: "Review Requirements", bn: "প্রয়োজনীয় শর্তাবলী যাচাই করুন" },
    description: {
      en: "Check merchant account prerequisites, verified plan eligibility, and documentation requirements before connecting.",
      bn: "মার্চেন্ট অ্যাকাউন্ট রিকোয়ারমেন্টস এবং প্ল্যানের যোগ্যতা যাচাই করে নিন।",
    },
  },
  {
    stepNumber: 3,
    title: { en: "Configure Credentials", bn: "ক্রিডেনশিয়াল কনফিগার করুন" },
    description: {
      en: "Input your provider API keys, tokens, or measurement IDs securely into the CartX store admin dashboard.",
      bn: "কার্টএক্স স্টোর অ্যাডমিন প্যানেলে আপনার প্রোভাইডারের এপিআই কি, সিক্রেট বা টোকেন ইনপুট দিন।",
    },
  },
  {
    stepNumber: 4,
    title: { en: "Test the Connection", bn: "সংযোগ পরীক্ষা করুন" },
    description: {
      en: "Use CartX's built-in connection validation to test API endpoints and verify credentials before going live.",
      bn: "লাইভ করার পূর্বে কার্টএক্সের টেস্ট বাটনে ক্লিক করে এপিআই সংযোগ যাচাই করে নিন।",
    },
  },
  {
    stepNumber: 5,
    title: { en: "Enable the Integration", bn: "ইন্টিগ্রেশন সক্রিয় করুন" },
    description: {
      en: "Toggle the connector to Active mode. Checkout buttons, parcel dispatch actions, or tracking scripts launch instantly.",
      bn: "কানেক্টরটি অ্যাক্টিভ মোডে চালু করুন। সাথে সাথে চেকআউট, কুরিয়ার বুকিং বা ট্র্যাকিং কাজ শুরু করবে।",
    },
  },
  {
    stepNumber: 6,
    title: { en: "Monitor Status & Webhooks", bn: "স্ট্যাটাস ও ওয়েবহুক মনিটর করুন" },
    description: {
      en: "Track automated transaction logs, delivery fulfillment updates, and webhook callbacks directly in store admin.",
      bn: "অ্যাডমিন প্যানেল থেকেই রিয়েল-টাইম ট্রানজেকশন লগ, পার্সেল আপডেট এবং ওয়েবহুক কলব্যাক পর্যবেক্ষণ করুন।",
    },
  },
];

// ─────────────────────────────────────────────────────────────
// Section 05: Accessible Security Architecture
// ─────────────────────────────────────────────────────────────
export const INTEGRATION_SECURITY_PILLARS: IntegrationSecurityPillar[] = [
  {
    title: { en: "Encrypted Credential Storage", bn: "এনক্রিপ্টেড ক্রিডেনশিয়াল সংরক্ষণ" },
    description: {
      en: "All provider API secrets, passwords, and private keys are encrypted at rest using industry-standard AES-256 in an isolated key vault.",
      bn: "সকল এপিআই সিক্রেট, পাসওয়ার্ড ও প্রাইভেট কি ডেডিকেটেড ভল্টে শক্তিশালী AES-256 এনক্রিপশনে সুরক্ষিত থাকে।",
    },
    iconName: "ShieldCheck",
  },
  {
    title: { en: "Strict Principle of Least Privilege", bn: "ন্যূনতম অ্যাক্সেস অনুমতি (Least Privilege)" },
    description: {
      en: "Connectors request only the operational permissions strictly necessary to execute orders, track parcels, or record analytics.",
      bn: "কানেক্টরগুলো শুধুমাত্র অর্ডার সম্পন্ন করা বা পার্সেল বুকিংয়ের জন্য যতটুকু অ্যাক্সেস দরকার, ততটুকুই গ্রহণ করে।",
    },
    iconName: "Lock",
  },
  {
    title: { en: "Cryptographic Webhook Verification", bn: "ক্রিপ্টোগ্রাফিক ওয়েবহুক যাচাই" },
    description: {
      en: "Every inbound callback from payment gateways and couriers is cryptographically verified via signature headers to prevent spoofing.",
      bn: "পেমেন্ট গেটওয়ে ও কুরিয়ার থেকে আসা প্রতিটি সংকেত ডিজিটাল সিগনেচার যাচাই করে ভুয়া রিকোয়েস্ট প্রতিহত করা হয়।",
    },
    iconName: "CheckCircle2",
  },
  {
    title: { en: "TLS 1.3 End-to-End Encryption", bn: "টিএলএস ১.৩ এন্ড-টু-এন্ড এনক্রিপশন" },
    description: {
      en: "All communication between CartX servers and external provider endpoints occurs over strictly enforced TLS 1.3 HTTPS tunnels.",
      bn: "কার্টএক্স এবং প্রোভাইডারের মধ্যকার সকল ডাটা আদান-প্রদান আধুনিক TLS 1.3 সুরক্ষিত টানেলের মাধ্যমে সম্পন্ন হয়।",
    },
    iconName: "Globe",
  },
  {
    title: { en: "Safe API Error Handling", bn: "নিরাপদ এপিআই এরর হ্যান্ডলিং" },
    description: {
      en: "External API failures or connection timeouts are gracefully trapped without exposing stack traces, keys, or internal endpoints to buyers.",
      bn: "কোনো প্রোভাইডারের সার্ভার ডাউন থাকলেও গ্রাহকদের কাছে কোনো গোপন কোড বা ইন্টারনাল ত্রুটি প্রকাশিত হয় না।",
    },
    iconName: "AlertCircle",
  },
  {
    title: { en: "Separation of Public & Secret Keys", bn: "পাবলিক ও গোপন তথ্যের স্পষ্ট পৃথকীকরণ" },
    description: {
      en: "Public IDs (Pixel IDs, GA4 Measurement IDs) remain client-facing, while API secrets and passwords remain strictly server-side.",
      bn: "পাবলিক আইডিগুলো ব্রাউজারে থাকে, কিন্তু পাসওয়ার্ড ও এপিআই সিক্রেট কখনোই ব্রাউজারে আসে না; সম্পূর্ণ সার্ভারে গোপন থাকে।",
    },
    iconName: "Layers",
  },
];
