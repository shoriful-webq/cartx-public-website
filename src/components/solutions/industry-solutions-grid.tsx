"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Layers,
  Clock,
  Info,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "@/components/Home/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { INDUSTRY_SOLUTIONS } from "./solutions-data";
import { cn } from "@/lib/utils";

export interface IndustrySolutionsGridProps {
  className?: string;
}

export function IndustrySolutionsGrid({ className }: IndustrySolutionsGridProps) {
  const { t } = useLanguage();

  return (
    <section
      id="industry-solutions"
      aria-label="Supported Industry Solutions"
      className={cn("section-padding bg-background border-b border-border transition-colors", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={t("solutionsGrid.eyebrow")}
            eyebrowIcon={Layers}
            title={t("solutionsGrid.title")}
            titleGradient={true}
            description={t("solutionsGrid.description")}
            size="default"
            className="mb-10 sm:mb-12 lg:mb-14"
          />
        </ScrollReveal>

        {/* 8 Industry Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRY_SOLUTIONS.map((industry, idx) => {
            const Icon = industry.icon;
            const isComingSoon = industry.status === "coming-soon";

            return (
              <ScrollReveal key={industry.id} delay={(idx % 4) * 60}>
                <div
                  className={cn(
                    "group relative rounded-2xl border p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between h-full",
                    isComingSoon
                      ? "border-dashed border-border/90 bg-card/60 hover:border-amber-500/40"
                      : "border-border bg-card shadow-xs hover:border-primary/40 hover:shadow-card hover:-translate-y-1"
                  )}
                >
                  <div>
                    {/* Top: Icon + Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={cn(
                          "size-11 rounded-xl flex items-center justify-center shrink-0 border border-border/60 transition-transform duration-200 group-hover:scale-105",
                          industry.iconBg,
                          industry.iconColor
                        )}
                      >
                        <Icon className="size-5.5" />
                      </div>

                      {isComingSoon ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 select-none">
                          <Clock className="size-3" />
                          <span>{t("solutionsGrid.comingSoonBadge")}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 select-none">
                          <CheckCircle2 className="size-3" />
                          <span>{t("solutionsGrid.availableBadge")}</span>
                        </span>
                      )}
                    </div>

                    {/* Industry Title & Tagline */}
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {t(industry.nameKey)}
                    </h3>
                    <p className="text-[11px] font-medium text-primary mb-3">
                      {t(industry.taglineKey)}
                    </p>

                    {/* Short Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {t(industry.descKey)}
                    </p>

                    {/* Notice for Planned / Inactive Features */}
                    {isComingSoon && industry.noticeKey && (
                      <div className="mb-4 p-2.5 rounded-lg border border-amber-500/20 bg-amber-500/[0.04] text-[11px] text-amber-800 dark:text-amber-300 flex items-start gap-1.5 leading-snug">
                        <Info className="size-3.5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                        <span>{t(industry.noticeKey)}</span>
                      </div>
                    )}

                    {/* Workflows / Capabilities List */}
                    <div className="mb-5">
                      <p className="text-[10.5px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-2">
                        {t("solutionsGrid.keyCapabilities")}
                      </p>
                      <ul className="space-y-1.5" role="list">
                        {industry.workflowKeys.map((wfKey, wIdx) => (
                          <li
                            key={wIdx}
                            className="flex items-start gap-1.5 text-[11.5px] text-muted-foreground leading-snug"
                          >
                            <span className="size-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5" />
                            <span>{t(wfKey)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Connected Features Pills */}
                    <div className="mb-4 pt-3 border-t border-border/50">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-2">
                        {t("solutionsGrid.relevantFeatures")}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {industry.connectedFeatures.map((feat) => {
                          const FeatIcon = feat.icon;
                          return (
                            <Link
                              key={feat.slug}
                              href={`/features/${feat.slug}`}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-border/80 bg-background text-[10.5px] font-medium text-foreground hover:border-primary/60 hover:text-primary transition-colors"
                            >
                              <FeatIcon className="size-3 text-muted-foreground" />
                              <span>{t(feat.nameKey)}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom: Action CTA */}
                  <div className="pt-3 border-t border-border/60">
                    {isComingSoon ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground cursor-not-allowed">
                        <span>{t("solutionsGrid.comingSoonBadge")}</span>
                      </span>
                    ) : (
                      <a
                        href="#workflow-showcase"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
                      >
                        <span>{t("solutionsGrid.viewDetails")}</span>
                        <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-1" />
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

