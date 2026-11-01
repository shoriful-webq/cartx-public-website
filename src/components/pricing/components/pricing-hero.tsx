"use client";

import React from "react";
import { CreditCard, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface PricingHeroProps {
  className?: string;
}

export function PricingHero({ className }: PricingHeroProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const trustHighlights = [
    {
      icon: CheckCircle2,
      label: isBn ? "১৪ দিনের ফ্রি ট্রায়াল" : "14-Day Free Trial",
    },
    {
      icon: ShieldCheck,
      label: isBn ? "কোনো লুকানো চার্জ নেই" : "No Hidden Fees",
    },
    {
      icon: Zap,
      label: isBn ? "০% লেনদেন কমিশন" : "0% Platform Commission",
    },
  ];

  return (
    <section
      aria-label="Pricing Hero"
      className={cn(
        "hero-bg relative overflow-hidden transition-colors py-16",
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

      <div className="container relative hero-padding">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <ScrollReveal delay={0}>
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
              <CreditCard className="h-3.5 w-3.5" />
              <span>{isBn ? "স্বচ্ছ মূল্যতালিকা" : "Transparent Pricing"}</span>
            </div>

            {/* Main H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-6">
              <span className="brand-gradient-text">
                {isBn
                  ? "আপনার অনলাইন ব্যবসার জন্য সহজ ও স্বচ্ছ মূল্যতালিকা"
                  : "Simple, Transparent Pricing for Your Online Business."}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              {isBn
                ? "আপনার স্টোরের প্রয়োজনীয়তা, দলের আকার ও বৈশিষ্ট্যের ওপর ভিত্তি করে সঠিক প্ল্যানটি বেছে নিন।"
                : "Choose a plan based on your store's needs, team size and required features."}
            </p>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-border/60">
              {trustHighlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <IconComponent className="h-3 w-3" />
                    </div>
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

