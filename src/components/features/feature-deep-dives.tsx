"use client";

import React from "react";
import { Layers } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "@/components/Home/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { DEEP_DIVES, DeepDiveRow } from "./deep-dives";

export interface FeatureDeepDivesProps {
  className?: string;
}

/**
 * Section 04 — Feature Deep Dives for the CartX Features Overview Page (/features).
 * Composes 12 dedicated capability sections, providing rich contextual breakdowns
 * and interactive administrative console mockups.
 */
export function FeatureDeepDives({ className }: FeatureDeepDivesProps) {
  const { t } = useLanguage();

  return (
    <section
      id="feature-deep-dives"
      aria-label="Feature Deep Dives"
      className={cn("section-padding bg-background transition-colors", className)}
    >
      <div className="container">
        {/* ── Section Heading ── */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={t("featuresDeepDive.eyebrow")}
            eyebrowIcon={Layers}
            title={t("featuresDeepDive.title")}
            titleGradient={true}
            description={t("featuresDeepDive.description")}
            size="default"
            className="mb-12 sm:mb-16 lg:mb-20"
          />
        </ScrollReveal>

        {/* ── Complete 12 Deep Dive Sections ── */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {DEEP_DIVES.map((item, idx) => (
            <DeepDiveRow
              key={item.id}
              item={item}
              isReversed={idx % 2 === 1}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
