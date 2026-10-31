"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "@/components/Home/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SOLUTION_INTEGRATIONS } from "./solutions-data";
import { cn } from "@/lib/utils";

export interface RelatedIntegrationsSectionProps {
  className?: string;
}

export function RelatedIntegrationsSection({
  className,
}: RelatedIntegrationsSectionProps) {
  const { t } = useLanguage();

  return (
    <section
      id="related-integrations"
      aria-label="Ecosystem Integrations"
      className={cn(
        "section-padding bg-muted/20 border-b border-border transition-colors",
        className
      )}
    >
      <div className="container">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={t("solutionsIntegrations.eyebrow")}
            eyebrowIcon={Layers}
            title={t("solutionsIntegrations.title")}
            titleGradient={true}
            description={t("solutionsIntegrations.description")}
            size="default"
            className="mb-10 sm:mb-12 lg:mb-14"
          />
        </ScrollReveal>

        {/* 6 Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {SOLUTION_INTEGRATIONS.map((integration, idx) => {
            const Icon = integration.icon;

            return (
              <ScrollReveal key={integration.id} delay={idx * 50}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-xs hover:border-primary/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={cn(
                          "size-10 rounded-xl flex items-center justify-center shrink-0 border border-border/60",
                          integration.iconBg,
                          integration.iconColor
                        )}
                      >
                        <Icon className="size-5" />
                      </div>
                      <span className="inline-flex items-center gap-1 text-[9.5px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 select-none">
                        <CheckCircle2 className="size-3" />
                        <span>Verified Integration</span>
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-foreground mb-1.5">
                      {integration.name}
                    </h4>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {integration.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/50 mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="capitalize font-medium text-foreground/80">
                      Category: {integration.category}
                    </span>
                    <span className="text-primary font-semibold">Active</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Link to /integrations */}
        <div className="mt-8 text-center">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
          >
            <span>{t("solutionsIntegrations.viewAll")}</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

