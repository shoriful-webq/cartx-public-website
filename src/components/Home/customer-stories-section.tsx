"use client";

import React from "react";
import { Users, Quote, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

export interface VerifiedCustomerStory {
  id: string;
  merchantName: string;
  businessName: string;
  category: string;
  quote: string;
  /** Mandatory reference to documented written permission record */
  permissionRecordRef: string;
  photoUrl?: string;
  logoUrl?: string;
  verifiedMetrics?: string;
}

export interface CustomerStoriesSectionProps {
  className?: string;
  /**
   * Strictly populated only when verified merchant case studies with explicit
   * documented permission records are available in project documentation.
   */
  stories?: VerifiedCustomerStory[];
  /**
   * Configurable and hidden by default to prevent displaying unverified or fabricated
   * testimonials before launch.
   */
  showStories?: boolean;
}

export function CustomerStoriesSection({
  className,
  stories = [],
  showStories = false,
}: CustomerStoriesSectionProps) {
  const { t } = useLanguage();

  // Hidden by default when no approved testimonials with verified permission records exist
  if (!showStories || stories.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Customer Stories"
      className={cn(
        "relative section-padding border-b border-border bg-background transition-colors overflow-hidden",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <SectionHeading
          eyebrow={t("customerStories.badge")}
          eyebrowIcon={Users}
          title={t("customerStories.title")}
          titleGradient={true}
          description={t("customerStories.description")}
          size="default"
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        {/* ── Verified Customer Stories Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stories.map((story) => (
            <div
              key={story.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Quote className="size-4" />
                  </div>
                  <span className="text-[10px] font-semibold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                    {story.category}
                  </span>
                </div>

                <p className="text-sm text-foreground/90 italic leading-relaxed mb-6">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border/60">
                <p className="text-sm font-bold text-foreground">
                  {story.merchantName}
                </p>
                <p className="text-xs text-muted-foreground">
                  {story.businessName}
                </p>

                {/* Verified Permission Record Badge */}
                <div className="mt-2.5 flex items-center gap-1 text-[10px] text-muted-foreground/80">
                  <ShieldCheck className="size-3 text-success shrink-0" />
                  <span>Verified Record: {story.permissionRecordRef}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

