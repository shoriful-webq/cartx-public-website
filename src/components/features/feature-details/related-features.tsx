"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/Home/section-heading";
import { FeatureDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface RelatedFeaturesProps {
  feature: FeatureDetailConfig;
  className?: string;
}

export function RelatedFeatures({ feature, className }: RelatedFeaturesProps) {
  const { locale } = useLanguage();

  return (
    <section
      aria-label="Related Features"
      className={cn(
        "section-padding bg-background border-b border-border transition-colors",
        className
      )}
    >
      <div className="container">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={locale === "bn" ? "সম্পর্কিত ফিচারসমূহ" : "RELATED CAPABILITIES"}
            eyebrowIcon={Layers}
            title={
              locale === "bn"
                ? "একসাথে সংযুক্ত অন্যান্য টুলস"
                : "Connected Tools That Work Together"
            }
            titleGradient={true}
            description={
              locale === "bn"
                ? "কার্টএক্সের প্রতিটি ফিচার একটি অপরটির সাথে সমন্বিতভাবে কাজ করে নির্বিঘ্ন সেবা নিশ্চিত করে।"
                : "CartX connects products, inventory, orders, payments, and delivery into one unified system."
            }
            size="default"
            className="mb-10 sm:mb-14 text-center"
          />
        </ScrollReveal>

        {/* 3 Related Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {feature.relatedFeatures.map((rel, idx) => {
            const RelIcon = rel.icon;
            return (
              <ScrollReveal key={rel.slug} delay={idx * 60}>
                <Link
                  href={`/features/${rel.slug}`}
                  className="group h-full rounded-2xl border border-border bg-card p-6 shadow-2xs hover:shadow-card hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-4 group-hover:scale-105 transition-transform">
                      <RelIcon className="size-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {rel.name[locale] || rel.name.en}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {rel.description[locale] || rel.description.en}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline">
                    <span>{locale === "bn" ? "বিস্তারিত দেখুন" : "Explore Feature"}</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

