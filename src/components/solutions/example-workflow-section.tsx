"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Workflow,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "@/components/Home/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FASHION_WORKFLOW_STEPS } from "./solutions-data";
import { cn } from "@/lib/utils";

export interface ExampleWorkflowSectionProps {
  className?: string;
}

export function ExampleWorkflowSection({ className }: ExampleWorkflowSectionProps) {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section
      id="workflow-showcase"
      aria-label="Example Business Workflow"
      className={cn(
        "section-padding bg-muted/20 border-b border-border transition-colors",
        className
      )}
    >
      <div className="container">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={t("solutionsWorkflow.eyebrow")}
            eyebrowIcon={Workflow}
            title={t("solutionsWorkflow.title")}
            titleGradient={true}
            description={t("solutionsWorkflow.description")}
            size="default"
            className="mb-10 sm:mb-12 lg:mb-14"
          />
        </ScrollReveal>

        {/* 5-Step Process Timeline Cards */}
        <div className="max-w-5xl mx-auto">
          {/* Step Selector for Mobile / Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
            {FASHION_WORKFLOW_STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.stepNumber;

              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={cn(
                    "relative text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 select-none",
                    isActive
                      ? "border-primary bg-card shadow-sm ring-1 ring-primary/30"
                      : "border-border bg-card/60 hover:border-border/90 hover:bg-card"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={cn(
                        "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {step.badge}
                    </span>
                    <div
                      className={cn(
                        "size-7 rounded-lg flex items-center justify-center shrink-0",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "bg-muted/70 text-muted-foreground"
                      )}
                    >
                      <Icon className="size-3.5" />
                    </div>
                  </div>
                  <p
                    className={cn(
                      "text-xs font-bold leading-snug line-clamp-2",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {t(step.titleKey)}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card */}
          {FASHION_WORKFLOW_STEPS.map((step) => {
            if (step.stepNumber !== activeStep) return null;
            const Icon = step.icon;

            return (
              <ScrollReveal key={step.stepNumber} delay={0}>
                <div className="rounded-2xl border border-primary/30 bg-card p-6 sm:p-8 shadow-card">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-border/70">
                    <div className="flex items-center gap-4">
                      <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 shadow-xs">
                        <Icon className="size-7" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-primary block mb-1">
                          {step.badge} of 05 • Unified Commerce Operations
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                          {t(step.titleKey)}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground font-medium">
                        Verified Platform Capability
                      </span>
                      <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>

                  <div className="pt-6">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mb-6">
                      {t(step.descKey)}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href="/features/product-management"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover transition-colors"
                      >
                        <span>{t("solutionsGrid.viewFeatures")}</span>
                        <ArrowRight className="size-3.5" />
                      </Link>

                      <Link
                        href="/demo-stores"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted/50 transition-colors"
                      >
                        <span>{t("solutionsDemo.viewDemo")}</span>
                      </Link>
                    </div>
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
