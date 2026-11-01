"use client";

import React from "react";
import { CreditCard } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BillingPeriod } from "../types/pricing.types";
import { BillingToggle } from "./billing-toggle";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface PricingHeroProps {
  billingPeriod: BillingPeriod;
  onPeriodChange: (period: BillingPeriod) => void;
  className?: string;
}

export function PricingHero({
  billingPeriod,
  onPeriodChange,
  className,
}: PricingHeroProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Pricing Hero"
      className={cn(
        "hero-bg relative overflow-hidden transition-colors pt-16 sm:pt-20 pb-8 sm:pb-10",
        className
      )}
    >
      {/* Background ambient accents */}
      <div
        className="pointer-events-none absolute -right-36 -top-36 h-[28rem] w-[28rem] rounded-full opacity-[0.045]"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
        style={{
          background: "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="container relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <ScrollReveal delay={0}>
            {/* Small Understated Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
              <CreditCard className="h-3.5 w-3.5" />
              <span>{isBn ? "স্বচ্ছ মূল্যতালিকা" : "Transparent Pricing"}</span>
            </div>

            {/* Main H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-4">
              <span className="brand-gradient-text">
                {isBn
                  ? "আপনার অনলাইন ব্যবসার জন্য সহজ ও স্বচ্ছ মূল্যতালিকা"
                  : "Simple, Transparent Pricing for Your Online Business."}
              </span>
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              {isBn
                ? "আপনার স্টোরের প্রয়োজনীয়তা, দলের আকার ও বৈশিষ্ট্যের ওপর ভিত্তি করে সঠিক প্ল্যানটি বেছে নিন।"
                : "Choose a plan based on your store's needs, team size and required features."}
            </p>

            {/* Monthly / Yearly Billing Selector positioned near headline and cards */}
            <BillingToggle
              billingPeriod={billingPeriod}
              onPeriodChange={onPeriodChange}
              yearlyDiscountPercentage={17}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
