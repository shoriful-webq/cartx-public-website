"use client";

import React from "react";
import {
  Split,
  Repeat,
  EyeOff,
  TrendingUp,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface ProblemCardItem {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

const PROBLEM_CARDS: ProblemCardItem[] = [
  {
    id: "scattered-operations",
    icon: Split,
    titleKey: "problemSolution.card1.title",
    descKey: "problemSolution.card1.desc",
  },
  {
    id: "manual-work",
    icon: Repeat,
    titleKey: "problemSolution.card2.title",
    descKey: "problemSolution.card2.desc",
  },
  {
    id: "limited-visibility",
    icon: EyeOff,
    titleKey: "problemSolution.card3.title",
    descKey: "problemSolution.card3.desc",
  },
  {
    id: "growth-complexity",
    icon: TrendingUp,
    titleKey: "problemSolution.card4.title",
    descKey: "problemSolution.card4.desc",
  },
];

export interface ProblemSolutionSectionProps {
  className?: string;
}

export function ProblemSolutionSection({
  className,
}: ProblemSolutionSectionProps) {
  const { t } = useLanguage();

  return (
    <section
      aria-label="Problem and Solution"
      className={cn(
        "relative section-padding border-b border-border bg-background transition-colors",
        className
      )}
    >
      <div className="container">
        {/* ── 1. Section Header (Standardized Hero-Aligned Lockup) ── */}
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            eyebrow={t("problemSolution.badge")}
            eyebrowIcon={Layers}
            title={t("problemSolution.title")}
            titleGradient={true}
            description={t("problemSolution.description")}
            size="default"
            className="mb-10 sm:mb-12 lg:mb-14"
          />
        </ScrollReveal>

        {/* ── 2. Problem Cards Grid (4 Cards) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
          {PROBLEM_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal
                key={card.id}
                direction="up"
                delay={idx * 60}
                className="h-full"
              >
                <div className="group relative h-full rounded-xl border border-border bg-card p-5 sm:p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-dropdown flex flex-col justify-between">
                  <div>
                    <div className="size-10 sm:size-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 transition-all duration-200 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5 shrink-0" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 leading-snug">
                      {t(card.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(card.descKey)}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/60">
                    <div className="h-0.5 w-6 rounded-full bg-transparent group-hover:bg-secondary-accent transition-colors" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── 3. Solution Statement Banner / Footer Block ── */}
        <ScrollReveal direction="up" delay={200}>
          <div className="relative rounded-xl sm:rounded-2xl border border-primary/25 bg-primary/[0.04] p-5 sm:p-6 lg:p-7 shadow-xs max-w-4xl mx-auto text-center transition-all duration-300 hover:border-primary/40">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5">
              <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Layers className="size-4 text-secondary-accent" />
              </div>
              <p className="text-base sm:text-lg font-semibold text-foreground tracking-tight">
                {t("problemSolution.solutionBanner")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

