"use client";

import React from "react";
import {
  Workflow,
  UserPlus,
  Store,
  PackagePlus,
  Rocket,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

interface StepItem {
  number: string;
  numberKey: string;
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    numberKey: "howItWorks.step1.number",
    titleKey: "howItWorks.step1.title",
    descKey: "howItWorks.step1.desc",
    icon: UserPlus,
  },
  {
    number: "02",
    numberKey: "howItWorks.step2.number",
    titleKey: "howItWorks.step2.title",
    descKey: "howItWorks.step2.desc",
    icon: Store,
  },
  {
    number: "03",
    numberKey: "howItWorks.step3.number",
    titleKey: "howItWorks.step3.title",
    descKey: "howItWorks.step3.desc",
    icon: PackagePlus,
  },
  {
    number: "04",
    numberKey: "howItWorks.step4.number",
    titleKey: "howItWorks.step4.title",
    descKey: "howItWorks.step4.desc",
    icon: Rocket,
  },
];

export interface HowItWorksSectionProps {
  className?: string;
}

export function HowItWorksSection({ className }: HowItWorksSectionProps) {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-label="How CartX Works"
      className={cn(
        "relative section-padding border-b border-border bg-card/30 transition-colors overflow-hidden",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <SectionHeading
          eyebrow={t("howItWorks.badge")}
          eyebrowIcon={Workflow}
          title={t("howItWorks.title")}
          titleGradient={true}
          description={t("howItWorks.description")}
          size="default"
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        {/* ── Step-by-Step Flow: Connected on Desktop, Stacked on Mobile ── */}
        <div className="relative mb-10 sm:mb-12">
          {/* Subtle horizontal connector bar on desktop (behind cards) */}
          <div
            className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 z-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs transition-all duration-200 hover:border-primary/40 hover:shadow-card flex flex-col justify-between"
                >
                  <div>
                    {/* Step badge & icon header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground shadow-xs">
                        <Icon className="size-5 shrink-0" />
                      </div>
                      <span className="font-mono text-xs font-bold text-primary/70 tracking-wider px-2 py-0.5 rounded bg-primary/[0.06] border border-primary/15">
                        {t(step.numberKey)}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </div>

                  {/* Flow arrow indicator (visual step connector indicator) */}
                  <div className="mt-5 pt-3.5 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="text-[11px] font-medium tracking-wide text-muted-foreground/80">
                      Step {step.number} of 04
                    </span>
                    {idx < STEPS.length - 1 && (
                      <ArrowRight className="size-3.5 text-muted-foreground/50 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Central CTA & Verified Eligibility Disclaimer ── */}
        <div className="flex flex-col items-center text-center">
          <CTAButton
            action="getStarted"
            locale={locale}
            size="lg"
            showArrow
            className="px-7 py-3 text-sm rounded-lg shadow-xs hover:shadow-md transition-shadow"
          />

          <p className="mt-3.5 text-[11px] sm:text-xs text-muted-foreground/80 max-w-xl leading-relaxed">
            {t("howItWorks.disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
}

