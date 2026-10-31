"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Monitor, Smartphone, Tag } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ThemeItem } from "../types";
import { cn } from "@/lib/utils";

export interface ThemeCardProps {
  theme: ThemeItem;
  className?: string;
}

export function ThemeCard({ theme, className }: ThemeCardProps) {
  const { locale } = useLanguage();
  const isAvailable = theme.availability === "available";

  return (
    <div
      className={cn(
        "group h-full flex flex-col justify-between rounded-2xl border bg-card transition-all duration-300 overflow-hidden",
        isAvailable
          ? "border-border shadow-xs hover:border-primary/40 hover:shadow-card hover:-translate-y-1"
          : "border-dashed border-border/80 opacity-90 hover:border-amber-500/40",
        className
      )}
    >
      <div>
        {/* Card Header Preview Canvas */}
        <div
          className="relative h-44 sm:h-48 p-4 flex flex-col justify-between overflow-hidden border-b border-border/60"
          style={{ background: theme.preview.hero.bgGradient }}
        >
          {/* Top Pill Bar */}
          <div className="flex items-center justify-between gap-2 z-10">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-background/90 text-foreground shadow-2xs backdrop-blur-xs border border-border/40">
              {theme.categoryLabel[locale] || theme.categoryLabel.en}
            </span>

            {isAvailable ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 select-none">
                <CheckCircle2 className="size-3" />
                <span>{locale === "bn" ? "প্রস্তুত থিম" : "Available"}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 select-none">
                <Clock className="size-3" />
                <span>{locale === "bn" ? "শীঘ্রই আসছে" : "Coming Soon"}</span>
              </span>
            )}
          </div>

          {/* Canvas Center: Brand & Hero Headline */}
          <div className="z-10 my-auto text-center sm:text-left">
            <span className="text-[9px] font-mono tracking-widest uppercase text-muted-foreground block mb-0.5">
              {theme.preview.brandName}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-foreground tracking-tight leading-snug line-clamp-1">
              {theme.preview.hero.headline[locale] || theme.preview.hero.headline.en}
            </h4>
            <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
              {theme.preview.hero.subhead[locale] || theme.preview.hero.subhead.en}
            </p>
          </div>

          {/* Canvas Bottom: Palette Color Dots & Devices */}
          <div className="flex items-center justify-between z-10 pt-2 border-t border-border/40">
            <div className="flex items-center gap-1.5" title="Theme Palette">
              {theme.palette.map((color, cIdx) => (
                <span
                  key={cIdx}
                  className="size-3 rounded-full border border-background shadow-2xs"
                  style={{ backgroundColor: color.hex }}
                  title={color.label[locale] || color.label.en}
                />
              ))}
            </div>

            <div className="flex items-center gap-1 text-muted-foreground text-[10px]">
              <Monitor className="size-3" />
              <Smartphone className="size-3" />
              <span className="ml-0.5 font-medium">
                {locale === "bn" ? "রেসপনসিভ" : "Responsive"}
              </span>
            </div>
          </div>
        </div>

        {/* Card Body Details */}
        <div className="p-5 sm:p-6">
          {/* Title & Tagline */}
          <div className="mb-3">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {theme.name[locale] || theme.name.en}
            </h3>
            <p className="text-xs font-medium text-primary mt-0.5 line-clamp-1">
              {theme.tagline[locale] || theme.tagline.en}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
            {theme.description[locale] || theme.description.en}
          </p>

          {/* Style & Layout Pills */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
            <span className="inline-flex items-center gap-1 text-[10.5px] font-medium rounded-md bg-muted px-2 py-0.5 text-foreground/80 border border-border/50">
              <Tag className="size-2.5 text-muted-foreground" />
              {theme.styleLabel[locale] || theme.styleLabel.en}
            </span>
            <span className="inline-flex items-center gap-1 text-[10.5px] font-medium rounded-md bg-muted px-2 py-0.5 text-foreground/80 border border-border/50">
              {theme.layoutLabel[locale] || theme.layoutLabel.en}
            </span>
          </div>
        </div>
      </div>

      {/* Card Action Button */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
        {isAvailable ? (
          <Link
            href={`/themes/${theme.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover hover:shadow-md transition-all duration-200 group/btn"
          >
            <span>{locale === "bn" ? "থিম প্রিভিউ ও বিস্তারিত" : "Preview Theme"}</span>
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Link>
        ) : (
          <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-muted px-4 py-2.5 text-xs font-semibold text-muted-foreground border border-border/60 select-none cursor-not-allowed">
            <Clock className="size-3.5" />
            <span>{locale === "bn" ? "রিলিজের অপেক্ষায়" : "Coming Soon"}</span>
          </div>
        )}
      </div>
    </div>
  );
}

