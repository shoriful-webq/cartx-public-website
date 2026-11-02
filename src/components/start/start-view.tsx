"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Store, Rocket, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function StartView() {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const [storeName, setStoreName] = useState("");
  const [vertical, setVertical] = useState("Fashion");

  const benefits = [
    { en: "No credit card required to start", bn: "শুরু করতে কোনো ক্রেডিট কার্ডের প্রয়োজন নেই" },
    { en: "0% platform transaction commission", bn: "০% প্ল্যাটফর্ম লেনদেন কমিশন" },
    { en: "Complimentary .cartx.store subdomain & SSL", bn: "ফ্রি সাবডোমেইন এবং লাইফটাইম এসএসএল" },
    { en: "Pre-integrated with bKash & top couriers", bn: "বিকাশ ও কুরিয়ারের সাথে সরাসরি সংযুক্ত" },
  ];

  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Section 01: Hero */}
      <section className="hero-bg relative overflow-hidden transition-colors py-12">
        <div className="container relative hero-padding mx-auto max-w-4xl text-center">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-semibold text-primary mb-6">
              <Rocket className="h-3.5 w-3.5" />
              <span>{isBn ? "সহজে শুরু করুন ২ মিনিটে" : "Get Started in Under 2 Minutes"}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-4">
              <span className="brand-gradient-text block mb-1">
                {isBn
                  ? "আজই আপনার স্বপ্নের অনলাইন স্টোর শুরু করুন"
                  : "Launch Your Online Store Today."}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              {isBn
                ? "কোনো কোডিং দক্ষতা ছাড়াই আধুনিক ইকমার্স ওয়েবসাইট তৈরি করুন। স্থানীয় পেমেন্ট ও কুরিয়ার ডেলিভারি সহ সম্পূর্ণ প্রস্তুত।"
                : "Create your professional e-commerce storefront without writing a single line of code. Native local payments, instant couriers, and zero sales commission."}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted-foreground mb-8">
              {benefits.map((b, i) => (
                <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card/60">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                  <span>{isBn ? b.bn : b.en}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 02: Quick Launch Card */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto max-w-2xl px-4 sm:px-6">
          <ScrollReveal delay={100}>
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Store className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground">
                    {isBn ? "স্টোরের নাম দিয়ে শুরু করুন" : "Name Your Online Store"}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {isBn ? "পরবর্তীতে যেকোনো সময় পরিবর্তন করা যাবে" : "You can change this or add a custom domain later"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                    {isBn ? "স্টোরের নাম" : "Store Name"}
                  </label>
                  <input
                    type="text"
                    placeholder={isBn ? "উদা: অরা ফ্যাশন" : "e.g. Aura Lifestyle"}
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
                  />
                  {storeName && (
                    <span className="text-[11px] text-muted-foreground mt-1.5 block font-mono">
                      {isBn ? "ফ্রি সাবডোমেন: " : "Complimentary subdomain: "}
                      <span className="text-primary font-bold">
                        {storeName.toLowerCase().replace(/[^a-z0-9]/g, "") || "yourstore"}.cartx.store
                      </span>
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                    {isBn ? "ব্যবসার ধরন / ক্যাটাগরি" : "Primary Product Category"}
                  </label>
                  <select
                    value={vertical}
                    onChange={(e) => setVertical(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
                  >
                    <option value="Fashion">{isBn ? "ফ্যাশন ও লাইফস্টাইল" : "Fashion & Lifestyle"}</option>
                    <option value="Electronics">{isBn ? "ইলেকট্রনিক্স ও গ্যাজেট" : "Electronics & Gadgets"}</option>
                    <option value="Beauty">{isBn ? "সৌন্দর্য ও প্রসাধন" : "Beauty & Cosmetics"}</option>
                    <option value="Grocery">{isBn ? "গ্রোসারি ও খাদ্যপণ্য" : "Grocery & Foods"}</option>
                    <option value="Other">{isBn ? "অন্যান্য কমার্স" : "Other Retail"}</option>
                  </select>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/contact?intent=start&store=${encodeURIComponent(storeName || "MyStore")}`}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-all cursor-pointer"
                  >
                    <span>{isBn ? "চালু করতে এগিয়ে যান" : "Continue to Store Setup"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Alternative paths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <ScrollReveal delay={150}>
              <Link
                href="/demo-stores"
                className="rounded-2xl border border-border bg-card/60 p-5 hover:border-primary/40 hover:bg-card transition-all flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <span className="text-xs font-bold text-foreground block group-hover:text-primary transition-colors">
                    {isBn ? "ডেমো স্টোরগুলো দেখুন" : "Explore Demo Stores"}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {isBn ? "৬টি লাইভ নমুনা প্রিভিউ" : "Browse 6 live industry templates"}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Link
                href="/book-demo"
                className="rounded-2xl border border-border bg-card/60 p-5 hover:border-primary/40 hover:bg-card transition-all flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <span className="text-xs font-bold text-foreground block group-hover:text-primary transition-colors">
                    {isBn ? "ব্যক্তিগত ডেমো বুক করুন" : "Request a 1-on-1 Demo"}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {isBn ? "বিশেষজ্ঞের সাথে আলোচনা" : "Personalized walkthrough with our team"}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </article>
  );
}
