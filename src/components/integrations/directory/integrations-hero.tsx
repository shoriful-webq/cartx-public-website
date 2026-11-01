"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, ShieldCheck, Zap, Layers } from "lucide-react";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export interface IntegrationsHeroProps {
  className?: string;
}

export function IntegrationsHero({ className }: IntegrationsHeroProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const lenis = useLenis();

  const handleBrowseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("integrations-directory");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      if (lenis) {
        lenis.scrollTo(top, {
          duration: 1.0,
          easing: (val) => Math.min(1, 1.001 - Math.pow(2, -10 * val)),
        });
      } else {
        window.scrollTo({ top, behavior: "smooth" });
      }
      history.replaceState(null, "", "#integrations-directory");
    }
  };

  const trustHighlights = [
    {
      icon: Zap,
      label: isBn ? "অফিসিয়াল এমএফএস ডিরেক্ট এপিআই" : "Direct MFS Gateway APIs",
    },
    {
      icon: Layers,
      label: isBn ? "অটোমেটেড কুরিয়ার পার্সেল বুকিং" : "Automated Courier Dispatch",
    },
    {
      icon: ShieldCheck,
      label: isBn ? "ব্যাংক-গ্রেড ডেটা এনক্রিপশন" : "Encrypted Credential Vault",
    },
  ];

  return (
    <section
      aria-label="Integrations Hero"
      className={cn(
        "hero-bg relative overflow-hidden transition-colors border-b border-border",
        className
      )}
    >
      {/* Background ambient accents */}
      <div
        className="pointer-events-none absolute -right-36 -top-36 h-[30rem] w-[30rem] rounded-full opacity-[0.045]"
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

      <div className="container relative hero-padding py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <ScrollReveal delay={0}>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
              <Layers className="h-3.5 w-3.5" />
              <span>
                {isBn ? "কার্টএক্স ইন্টিগ্রেশন হাব" : "CartX Integration Ecosystem"}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-6">
              <span className="brand-gradient-text">
                {isBn
                  ? "আপনার সমগ্র ব্যবসায়িক ইকোসিস্টেমের সাথে যুক্ত করুন"
                  : "Connect CartX With Your Entire Business Ecosystem"}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              {isBn
                ? "স্থানীয় এমএফএস পেমেন্ট গ্রহণ, স্বয়ংক্রিয় কুরিয়ার পার্সেল বুকিং, রিয়েল-টাইম কনভার্সন ট্র্যাকিং এবং এসএমএস নোটিফিকেশন পরিচালনা করুন একটি নিরাপদ ও সমন্বিত প্ল্যাটফর্মে।"
                : "Accept local MFS payments, automate courier parcel dispatch, track campaign conversions, and send instant SMS updates—all from a unified, enterprise-grade architecture."}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-12">
              <a
                href="#integrations-directory"
                onClick={handleBrowseClick}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-lg transition-all w-full sm:w-auto cursor-pointer"
              >
                <span>{isBn ? "ইন্টিগ্রেশন ব্রাউজ করুন" : "Browse Integrations"}</span>
                <ArrowDown className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/60 hover:border-border/80 transition-all w-full sm:w-auto"
              >
                <span>{isBn ? "নতুন ইন্টিগ্রেশন অনুরোধ করুন" : "Request an Integration"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 border-t border-border/60">
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
