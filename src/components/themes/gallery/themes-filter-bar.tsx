"use client";

import React from "react";
import { Search, RotateCcw, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ThemesFilterState } from "../types";
import { cn } from "@/lib/utils";

export interface ThemesFilterBarProps {
  filters: ThemesFilterState;
  onFilterChange: <K extends keyof ThemesFilterState>(key: K, value: ThemesFilterState[K]) => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
  className?: string;
}

export function ThemesFilterBar({
  filters,
  onFilterChange,
  onReset,
  totalCount,
  filteredCount,
  className,
}: ThemesFilterBarProps) {
  const { locale } = useLanguage();

  const isFiltered =
    Boolean(filters.searchQuery) ||
    filters.category !== "all" ||
    filters.style !== "all" ||
    filters.layoutType !== "all" ||
    filters.plan !== "all";

  return (
    <div className={cn("space-y-4", className)}>
      {/* Top Search Bar & Counter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => onFilterChange("searchQuery", e.target.value)}
            placeholder={
              locale === "bn"
                ? "থিমের নাম বা কিওয়ার্ড দিয়ে খুঁজুন (যেমন: ফ্যাশন, গ্যাজেটস)..."
                : "Search themes by name or keywords (e.g. fashion, tech)..."
            }
            className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-2xs"
            aria-label="Search themes"
          />
          {filters.searchQuery && (
            <button
              type="button"
              onClick={() => onFilterChange("searchQuery", "")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground font-medium p-1"
              aria-label="Clear search input"
            >
              ✕
            </button>
          )}
        </div>

        {/* Results Counter & Reset Button */}
        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
          <span className="font-medium text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-lg border border-border/60">
            {locale === "bn" ? (
              <>
                মোট <strong className="text-foreground">{totalCount}</strong> টির মধ্যে{" "}
                <strong className="text-primary">{filteredCount}</strong> টি থিম
              </>
            ) : (
              <>
                Showing <strong className="text-primary">{filteredCount}</strong> of{" "}
                <strong className="text-foreground">{totalCount}</strong> themes
              </>
            )}
          </span>

          {isFiltered && (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover bg-primary/10 hover:bg-primary/15 px-3 py-1.5 rounded-lg border border-primary/20 transition-colors"
            >
              <RotateCcw className="size-3.5" />
              <span>{locale === "bn" ? "রিসেট ফিল্টার" : "Reset Filters"}</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Dropdowns Grid */}
      <div className="p-4 rounded-2xl border border-border bg-card/60 shadow-2xs backdrop-blur-xs">
        <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-foreground/80">
          <SlidersHorizontal className="size-3.5 text-primary" />
          <span>{locale === "bn" ? "ফিল্টার অপশন:" : "Filter Themes By:"}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* 1. Category Filter */}
          <div>
            <label className="block text-[11px] font-medium text-muted-foreground mb-1">
              {locale === "bn" ? "ক্যাটাগরি" : "Business Category"}
            </label>
            <select
              value={filters.category}
              onChange={(e) => onFilterChange("category", e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              aria-label="Filter by business category"
            >
              <option value="all">{locale === "bn" ? "সকল ক্যাটাগরি" : "All Categories"}</option>
              <option value="fashion">{locale === "bn" ? "ফ্যাশন ও পোশাক" : "Fashion & Apparel"}</option>
              <option value="electronics">{locale === "bn" ? "ইলেকট্রনিক্স ও গ্যাজেটস" : "Electronics & Gadgets"}</option>
              <option value="beauty">{locale === "bn" ? "কসমেটিক্স ও বিউটি" : "Cosmetics & Beauty"}</option>
              <option value="grocery">{locale === "bn" ? "মুদি ও অর্গানিক ফুড" : "Grocery & Lifestyle"}</option>
              <option value="home">{locale === "bn" ? "হোম ও লাইফস্টাইল" : "Home & Lifestyle"}</option>
              <option value="books">{locale === "bn" ? "বই ও স্টেশনারি" : "Books & Stationery"}</option>
              <option value="b2b">{locale === "bn" ? "পাইকারি ও বি২বি" : "Wholesale & B2B"}</option>
              <option value="digital">{locale === "bn" ? "ডিজিটাল প্রোডাক্ট" : "Digital Downloads"}</option>
            </select>
          </div>

          {/* 2. Theme Style Filter */}
          <div>
            <label className="block text-[11px] font-medium text-muted-foreground mb-1">
              {locale === "bn" ? "ডিজাইন স্টাইল" : "Theme Style"}
            </label>
            <select
              value={filters.style}
              onChange={(e) => onFilterChange("style", e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              aria-label="Filter by theme style"
            >
              <option value="all">{locale === "bn" ? "সকল স্টাইল" : "All Styles"}</option>
              <option value="editorial">{locale === "bn" ? "এডিটোরিয়াল ও মার্জিত" : "Editorial & Clean"}</option>
              <option value="modern-tech">{locale === "bn" ? "মডার্ন টেক" : "Modern Tech"}</option>
              <option value="botanical">{locale === "bn" ? "সফট বোটানিক্যাল" : "Soft Botanical"}</option>
              <option value="vibrant">{locale === "bn" ? "তাজা মার্কেটপ্লেস" : "Vibrant Marketplace"}</option>
              <option value="warm-minimal">{locale === "bn" ? "ওয়ার্ম মিনিমালিস্ট" : "Warm Minimalist"}</option>
              <option value="classic">{locale === "bn" ? "মিনিমালিস্ট ও রুচিশীল" : "Minimalist & Classic"}</option>
            </select>
          </div>

          {/* 3. Layout Type Filter */}
          <div>
            <label className="block text-[11px] font-medium text-muted-foreground mb-1">
              {locale === "bn" ? "লেআউট ফরম্যাট" : "Layout Format"}
            </label>
            <select
              value={filters.layoutType}
              onChange={(e) => onFilterChange("layoutType", e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              aria-label="Filter by layout type"
            >
              <option value="all">{locale === "bn" ? "সকল লেআউট" : "All Layouts"}</option>
              <option value="lookbook">{locale === "bn" ? "লুকবুক ক্যাপসুল" : "Lookbook Capsule"}</option>
              <option value="spec-focused">{locale === "bn" ? "স্পেক্স-ফোকাসড গ্রিড" : "Spec-Focused Grid"}</option>
              <option value="ritual-showcase">{locale === "bn" ? "রিচুয়াল শোকেস" : "Ritual Showcase"}</option>
              <option value="high-density-grid">{locale === "bn" ? "মাল্টি-আইটেম বাস্কেট" : "Multi-Item Basket"}</option>
              <option value="minimal-grid">{locale === "bn" ? "রুম শোকেস ও গ্রিড" : "Room Showcase & Grid"}</option>
            </select>
          </div>

          {/* 4. Plan Filter */}
          <div>
            <label className="block text-[11px] font-medium text-muted-foreground mb-1">
              {locale === "bn" ? "সাবস্ক্রিপশন প্ল্যান" : "Included Plan"}
            </label>
            <select
              value={filters.plan}
              onChange={(e) => onFilterChange("plan", e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              aria-label="Filter by eligible plan"
            >
              <option value="all">{locale === "bn" ? "সকল প্ল্যান" : "All Plans"}</option>
              <option value="starter">{locale === "bn" ? "স্টার্টার প্ল্যান" : "Starter Plan"}</option>
              <option value="growth">{locale === "bn" ? "গ্রোথ প্ল্যান" : "Growth Plan"}</option>
              <option value="scale">{locale === "bn" ? "স্কেল প্ল্যান" : "Scale Plan"}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

