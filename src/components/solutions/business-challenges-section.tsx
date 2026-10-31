"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "@/components/Home/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BUSINESS_CHALLENGES } from "./solutions-data";
import { cn } from "@/lib/utils";

export interface BusinessChallengesSectionProps {
  className?: string;
}

export function BusinessChallengesSection({
  className,
}: BusinessChallengesSectionProps) {
  const { t } = useLanguage();

  return (
    <section
      id="business-challenges"
      aria-label="Operational Challenges and Solutions"
      className={cn(
        "section-padding bg-muted/20 border-b border-border transition-colors",
        className
      )}
    >
      <div className="container">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={t("solutionsChallenges.eyebrow")}
            eyebrowIcon={AlertCircle}
            title={t("solutionsChallenges.title")}
            titleGradient={true}
            description={t("solutionsChallenges.description")}
            size="default"
            className="mb-10 sm:mb-12 lg:mb-14"
          />
        </ScrollReveal>

        {/* 6 Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_CHALLENGES.map((challenge, idx) => {
            const Icon = challenge.icon;

            return (
              <ScrollReveal key={challenge.id} delay={(idx % 3) * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={cn(
                          "size-10 rounded-xl flex items-center justify-center shrink-0 border border-border/60",
                          challenge.iconBg,
                          challenge.iconColor
                        )}
                      >
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-base font-bold text-foreground leading-snug">
                        {t(challenge.titleKey)}
                      </h3>
                    </div>

                    {/* Problem Description */}
                    <div className="mb-4 p-3 rounded-xl border border-destructive/15 bg-destructive/[0.03]">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {t(challenge.descKey)}
                      </p>
                    </div>

                    {/* How CartX Addresses It */}
                    <div className="mb-5 flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-foreground/90 font-medium leading-relaxed">
                        {t(challenge.solutionKey)}
                      </p>
                    </div>
                  </div>

                  {/* Connected Feature Link */}
                  <div className="pt-3 border-t border-border/60">
                    <Link
                      href={`/features/${challenge.featureSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
                    >
                      <span>{t(challenge.featureNameKey)}</span>
                      <ArrowRight className="size-3" />
                    </Link>
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

