"use client";

import React from "react";
import Link from "next/link";
import { Store, Eye, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "@/components/Home/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { DEMO_PREVIEWS } from "./solutions-data";
import { cn } from "@/lib/utils";

export interface DemoStorePreviewSectionProps {
  className?: string;
}

export function DemoStorePreviewSection({ className }: DemoStorePreviewSectionProps) {
  const { t } = useLanguage();

  return (
    <section
      id="demo-previews"
      aria-label="Demo Store Showcase"
      className={cn("section-padding bg-background border-b border-border transition-colors", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <SectionHeading
            eyebrow={t("solutionsDemo.eyebrow")}
            eyebrowIcon={Store}
            title={t("solutionsDemo.title")}
            titleGradient={true}
            description={t("solutionsDemo.description")}
            size="default"
            className="mb-10 sm:mb-12 lg:mb-14"
          />
        </ScrollReveal>

        {/* 3 Demo Store Preview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {DEMO_PREVIEWS.map((store, idx) => {
            const Icon = store.icon;

            return (
              <ScrollReveal key={store.id} delay={idx * 80}>
                <div className="group rounded-2xl border border-border bg-card overflow-hidden shadow-xs hover:border-primary/50 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Simulated Browser Chrome */}
                    <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/40 text-[10px] text-muted-foreground font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-error/70" />
                        <span className="size-2 rounded-full bg-warning/70" />
                        <span className="size-2 rounded-full bg-success/70" />
                      </div>
                      <span className="truncate max-w-[180px]">{store.domain}</span>
                      <span className="text-[8.5px] uppercase tracking-wider font-semibold text-primary">
                        Live Demo
                      </span>
                    </div>

                    {/* Store Hero Banner Preview */}
                    <div
                      className={cn(
                        "p-5 border-b border-border/60 bg-gradient-to-br",
                        store.accentGradient
                      )}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                          {t(store.categoryKey)}
                        </span>
                        <div className="size-8 rounded-lg bg-card border border-border/80 flex items-center justify-center text-primary shadow-2xs">
                          <Icon className="size-4" />
                        </div>
                      </div>

                      <h4 className="text-base font-bold text-foreground mb-1 leading-snug">
                        {store.brandName}
                      </h4>
                      <p className="text-[10.5px] text-muted-foreground/90 font-medium mb-3">
                        {store.tagline}
                      </p>

                      <div className="bg-card/80 backdrop-blur-xs rounded-xl p-3 border border-border/60 shadow-2xs">
                        <p className="text-xs font-bold text-foreground leading-snug mb-1">
                          {store.headline}
                        </p>
                        <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                          {store.subhead}
                        </p>
                      </div>
                    </div>

                    {/* Sample Product Matrix Preview */}
                    <div className="p-4 bg-card/60 space-y-2">
                      {store.products.map((p, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-center justify-between p-2.5 rounded-lg border border-border/70 bg-background text-xs"
                        >
                          <div>
                            <span className="font-semibold text-foreground block">
                              {p.title}
                            </span>
                            <span className="text-[10px] text-muted-foreground">
                              {p.spec}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-foreground block">
                              {p.price}
                            </span>
                            <span className="text-[9px] font-semibold text-primary px-1.5 py-0.2 rounded bg-primary/10">
                              {p.badge}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Transparent Preview Notice & CTA */}
                  <div className="p-4 border-t border-border/60 bg-muted/20 flex flex-col gap-3">
                    <div className="flex items-center gap-1.5 text-[10.5px] text-muted-foreground">
                      <ShieldCheck className="size-3.5 text-secondary-accent shrink-0" />
                      <span>{t("solutionsDemo.previewNotice")}</span>
                    </div>

                    <Link
                      href={`/demo-stores?theme=${store.themeId}`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover transition-colors w-full"
                    >
                      <Eye className="size-3.5" />
                      <span>{t("solutionsDemo.viewDemo")}</span>
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
