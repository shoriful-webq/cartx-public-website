"use client";

import React from "react";
import Link from "next/link";
import {
  Smartphone,
  ArrowRight,
  ShieldCheck,
  Store,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";

interface WhiteLabelPricingProps {
  className?: string;
}

export function WhiteLabelPricing({ className }: WhiteLabelPricingProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const tiersAvailability = [
    {
      plan: isBn ? "স্টার্টার প্ল্যান" : "Starter Plan",
      status: isBn ? "অন্তর্ভুক্ত নয়" : "Web Storefront Only",
      isEligible: false,
      desc: isBn
        ? "মোবাইল ব্রাউজার ফ্রেন্ডলি পিডব্লিউএ স্টোরফ্রন্ট অন্তর্ভুক্ত; নেটিভ অ্যাপ এই টিয়ারে প্রযোজ্য নয়।"
        : "Includes responsive mobile web PWA storefront; native compiled apps are not eligible on this tier.",
    },
    {
      plan: isBn ? "গ্রোথ ও বিজনেস প্ল্যান" : "Growth & Business Plans",
      status: isBn ? "ঐচ্ছিক পেইড অ্যাড-অন" : "Optional Paid Add-on",
      isEligible: true,
      desc: isBn
        ? "ব্র্যান্ডেড আইওএস ও অ্যান্ড্রয়েড অ্যাপ কম্পাইলেশন অ্যাড-অন হিসেবে যুক্ত করা যায়। অ্যাপল ও গুগল অ্যাকাউন্ট ফি প্রযোজ্য।"
        : "Eligible for custom native iOS and Android compilation pipeline. Requires merchant-owned developer accounts.",
    },
    {
      plan: isBn ? "এন্টারপ্রাইজ প্ল্যান" : "Enterprise Plan",
      status: isBn ? "প্যাকেজে অন্তর্ভুক্ত" : "Included in Package",
      isEligible: true,
      desc: isBn
        ? "সম্পূর্ণ কাস্টম নেটিভ মোবাইল অ্যাপ স্যুট, ডেডিকেটেড সিআই/সিডি বিল্ড এবং ভিআইপি মেইনটেন্যান্স অন্তর্ভুক্ত।"
        : "Full native iOS & Android white-label app compilation, dedicated build pipeline, and priority maintenance included.",
    },
  ];

  const appStoreRequirements = [
    {
      title: isBn ? "অ্যাপল ডেভেলপার প্রোগ্রাম" : "Apple Developer Program",
      cost: isBn ? "$৯৯ / বার্ষিক (সরাসরি অ্যাপলকে দেয়)" : "$99 / year (billed directly by Apple)",
      detail: isBn
        ? "আপনার প্রতিষ্ঠানের D-U-N-S নম্বরের অধীনে নিজস্ব নামে অ্যাপ স্টোরে প্রকাশের জন্য বাধ্যতামূলক।"
        : "Required for publishing iOS apps under your registered business legal entity.",
    },
    {
      title: isBn ? "গুগল প্লে কনসোল" : "Google Play Console",
      cost: isBn ? "$২৫ এককালীন (সরাসরি গুগলকে দেয়)" : "$25 one-time (billed directly by Google)",
      detail: isBn
        ? "গুগল প্লে স্টোরে আপনার নিজস্ব ব্র্যান্ড একাউন্টে অ্যান্ড্রয়েড অ্যাপ প্রকাশের জন্য বাধ্যতামূলক।"
        : "Required for publishing Android apps under your verified merchant developer identity.",
    },
  ];

  return (
    <section
      aria-label="White-label Mobile Apps Pricing"
      className={cn("py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-background", className)}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/60 text-[#2563EB] dark:text-blue-400 text-xs font-semibold mb-3">
            <Smartphone className="h-3.5 w-3.5" />
            <span>{isBn ? "মোবাইল অ্যাপ অ্যাড-অন" : "Mobile Apps Add-on"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white mb-3">
            <span className="brand-gradient-text">
              {isBn
                ? "হোয়াইট-লেবেল মোবাইল অ্যাপের প্রাপ্যতা ও খরচ"
                : "White-Label Mobile Apps Availability & Pricing"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#475569] dark:text-slate-400 leading-relaxed">
            {isBn
              ? "আপনার নিজস্ব ব্র্যান্ড নামে অ্যাপ স্টোর ও গুগল প্লেতে নেটিভ আইওএস এবং অ্যান্ড্রয়েড অ্যাপ প্রকাশের স্বচ্ছ গাইডলাইন।"
              : "Deliver a dedicated branded shopping experience on your customers' home screens with native performance and push notifications."}
          </p>
        </div>

        {/* 3 Tier Availability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {tiersAvailability.map((tier, idx) => (
            <div
              key={idx}
              className={cn(
                "rounded-2xl border p-6 flex flex-col justify-between shadow-xs transition-all duration-200",
                tier.isEligible
                  ? "border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#2563EB]/40 hover:shadow-sm"
                  : "border-slate-200/60 dark:border-slate-800/60 bg-slate-50/60 dark:bg-slate-900/40 opacity-80"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {tier.plan}
                  </span>
                  <span
                    className={cn(
                      "text-[10px] font-bold px-2.5 py-0.5 rounded-full border",
                      tier.isEligible
                        ? "bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] dark:text-blue-400 border-blue-200 dark:border-blue-800"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700"
                    )}
                  >
                    {tier.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-400 leading-relaxed">
                  {tier.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* App Store Publishing Requirements & Transparency Box */}
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] dark:text-blue-400">
              <Store className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-white">
                {isBn
                  ? "অ্যাপল ও গুগল অফিসিয়াল স্টোর চার্জ সংক্রান্ত তথ্য"
                  : "Official Store Account & Publishing Requirements"}
              </h3>
              <p className="text-xs text-[#475569] dark:text-slate-400">
                {isBn
                  ? "অ্যাপ প্রকাশ সংক্রান্ত তৃতীয় পক্ষের বাধ্যতামূলক খরচসমূহ সরাসরি প্ল্যাটফর্মগুলোকে পরিশোধ করতে হয়।"
                  : "Third-party developer fees are mandated and collected directly by Apple and Google."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 border-t border-slate-100 dark:border-slate-800 mb-6">
            {appStoreRequirements.map((req, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] dark:text-white">
                    {req.title}
                  </h4>
                  <span className="text-xs font-semibold text-[#2563EB] dark:text-blue-400 font-mono">
                    {req.cost}
                  </span>
                </div>
                <p className="text-xs text-[#475569] dark:text-slate-400 leading-relaxed">
                  {req.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Commercial Status & Contact Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-[#475569] dark:text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>
                {isBn
                  ? "কম্পাইলেশন ও নিয়মিত ওএস মেইনটেন্যান্স ফি সংক্রান্ত বিস্তারিত তথ্যের জন্য আমাদের টিমের সাথে কথা বলুন।"
                  : "For custom compilation scopes, push notification setups, and SLA maintenance, contact our team."}
              </span>
            </div>
            <Link
              href="/white-label-apps"
              className="inline-flex items-center gap-1.5 font-bold text-[#2563EB] dark:text-blue-400 hover:underline transition-colors shrink-0"
            >
              <span>{isBn ? "অ্যাপ সম্পর্কে জানুন" : "Explore White-Label Apps"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
