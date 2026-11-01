"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface PricingCTAProps {
  className?: string;
}

export function PricingCTA({ className }: PricingCTAProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Pricing Final Call to Action"
      className={cn("py-16 sm:py-24 bg-background", className)}
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0}>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary-accent/10 p-8 sm:p-12 md:p-16 text-center shadow-lg">
            {/* Ambient Lighting */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/25 text-primary text-xs font-semibold mb-6">
                <Zap className="h-3.5 w-3.5" />
                <span>{isBn ? "এখনই শুরু করুন" : "Get Started Risk-Free"}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
                <span className="brand-gradient-text">
                  {isBn
                    ? "আপনার প্ল্যান নির্বাচন করুন এবং আজই ব্যবসা শুরু করুন"
                    : "Choose Your Plan and Start Building."}
                </span>
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                {isBn
                  ? "১৪ দিনের ফ্রি ট্রায়ালে সম্পূর্ণ স্টোর সেটআপ করুন, লোকাল পেমেন্ট ও কুরিয়ার যুক্ত করুন এবং আজই আপনার প্রথম অর্ডার গ্রহণ করুন।"
                  : "Launch your modern digital storefront in minutes with automated courier booking, localized checkouts, and 0% transaction fees."}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
                <Link
                  href="/start"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 transition-all w-full sm:w-auto"
                >
                  <span>{isBn ? "১৪ দিনের ফ্রি ট্রায়াল শুরু করুন" : "Start 14-Day Free Trial"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/60 transition-all w-full sm:w-auto"
                >
                  <span>{isBn ? "সেলস টিমের সাথে কথা বলুন" : "Talk to Sales"}</span>
                </Link>
              </div>

              {/* Micro Trust Strip */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-muted-foreground pt-4 border-t border-border/60">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  {isBn ? "ক্রেডিট কার্ডের প্রয়োজন নেই" : "No credit card required"}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  {isBn ? "যেকোনো সময় বাতিলযোগ্য" : "Cancel anytime"}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  {isBn ? "০% লেনদেন কমিশন" : "0% platform commission"}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

