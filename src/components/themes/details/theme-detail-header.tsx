"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Palette, ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ThemeItem } from "../types";
import { cn } from "@/lib/utils";

export interface ThemeDetailHeaderProps {
  theme: ThemeItem;
  className?: string;
}

export function ThemeDetailHeader({ theme, className }: ThemeDetailHeaderProps) {
  const { locale, t } = useLanguage();
  const isAvailable = theme.availability === "available";

  return (
    <div className={cn("border-b border-border bg-card/40 transition-colors", className)}>
      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb navigation"
        className="border-b border-border/60 bg-background/80 py-2.5 sm:py-3 select-none"
      >
        <div className="container">
          <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <Link href="/" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
                <Home className="size-3.5" />
                <span>{t("nav.home")}</span>
              </Link>
            </li>
            <li aria-hidden="true" className="text-muted-foreground/50">
              <ChevronRight className="size-3" />
            </li>
            <li className="flex items-center gap-1.5">
              <Link href="/themes" className="hover:text-foreground transition-colors">
                <span>{locale === "bn" ? "থিম ও টেমপ্লেটস" : "Themes"}</span>
              </Link>
            </li>
            <li aria-hidden="true" className="text-muted-foreground/50">
              <ChevronRight className="size-3" />
            </li>
            <li aria-current="page" className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-none">
              {theme.name[locale] || theme.name.en}
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Header Content */}
      <div className="container py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                <Palette className="size-3 text-secondary-accent" />
                <span>{theme.categoryLabel[locale] || theme.categoryLabel.en}</span>
              </span>

              <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/60">
                {theme.styleLabel[locale] || theme.styleLabel.en}
              </span>

              {isAvailable ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="size-3" />
                  <span>{locale === "bn" ? "রেডি টু লঞ্চ" : "Available"}</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                  <Clock className="size-3" />
                  <span>{locale === "bn" ? "শীঘ্রই আসছে" : "Coming Soon"}</span>
                </span>
              )}
            </div>

            {/* Title & Tagline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground !mb-2 leading-tight">
              {theme.name[locale] || theme.name.en}{" "}
              <span className="text-xs sm:text-sm font-medium text-muted-foreground font-mono">
                ({theme.layoutLabel[locale] || theme.layoutLabel.en})
              </span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl text-balance">
              {theme.description[locale] || theme.description.en}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/themes"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-muted transition-colors shadow-2xs"
            >
              <ArrowLeft className="size-3.5" />
              <span>{locale === "bn" ? "সকল থিম দেখুন" : "All Themes"}</span>
            </Link>

            <Link
              href={`/start?theme=${theme.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary-hover shadow-xs transition-colors"
            >
              <span>{locale === "bn" ? "এই থিম দিয়ে শুরু করুন" : "Start Your Store"}</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

