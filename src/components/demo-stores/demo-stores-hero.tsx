"use client";

import React from "react";
import { Store, ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";

interface DemoStoresHeroProps {
  className?: string;
  onExploreClick?: () => void;
}

export function DemoStoresHero({ className, onExploreClick }: DemoStoresHeroProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Demo Stores Hero"
      className={cn(
        "hero-bg relative overflow-hidden transition-colors py-12",
        className
      )}
    >
      {/* Decorative background shapes (Matches Home Page Hero) */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.045]"
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
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-4 shadow-2xs">
            <Store className="h-3.5 w-3.5 text-primary" />
            <span>{isBn ? "লাইভ স্টোরফ্রন্ট অভিজ্ঞতা" : "Interactive Storefront Gallery"}</span>
          </div>

          {/* Main H1 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.18] mb-4">
            <span className="brand-gradient-text">
              {isBn
                ? "বিভিন্ন ব্যবসার জন্য নির্মিত এক্সাম্পল স্টোর দেখুন"
                : "Explore Example Stores Built for Different Businesses."}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            {isBn
              ? "বিভিন্ন ক্যাটাগরির স্টোরফ্রন্ট অভিজ্ঞতা ব্রাউজ করুন এবং আপনার নিজস্ব ব্র্যান্ডের সম্ভাব্য লেআউট আবিষ্কার করুন।"
              : "Browse sample storefront experiences and discover possible layouts for your business."}
          </p>

          {/* Explore Jump Button */}
          {onExploreClick && (
            <button
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground shadow-xs hover:border-primary/50 hover:bg-muted/40 transition-all cursor-pointer"
            >
              <span>{isBn ? "সকল স্টোর দেখুন" : "Explore Sample Stores"}</span>
              <ArrowDown className="h-3.5 w-3.5 text-primary" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

