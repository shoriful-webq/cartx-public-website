"use client";

import React from "react";
import { Search, RotateCcw, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ThemeFilterSelect, FilterSelectOption } from "./theme-filter-select";
import { ThemesFilterState } from "../types";
import { cn } from "@/lib/utils";

const CATEGORY_OPTIONS: FilterSelectOption[] = [
  { value: "all", label: { en: "All Categories", bn: "সকল ক্যাটাগরি" } },
  { value: "fashion", label: { en: "Fashion & Apparel", bn: "ফ্যাশন ও পোশাক" } },
  { value: "electronics", label: { en: "Electronics & Gadgets", bn: "ইলেকট্রনিক্স ও গ্যাজেটস" } },
  { value: "beauty", label: { en: "Cosmetics & Beauty", bn: "কসমেটিক্স ও বিউটি" } },
  { value: "grocery", label: { en: "Grocery & Lifestyle", bn: "মুদি ও অর্গানিক ফুড" } },
  { value: "home", label: { en: "Home & Lifestyle", bn: "হোম ও লাইফস্টাইল" } },
  { value: "books", label: { en: "Books & Stationery", bn: "বই ও স্টেশনারি" } },
  { value: "b2b", label: { en: "Wholesale & B2B", bn: "পাইকারি ও বি২বি" } },
  { value: "digital", label: { en: "Digital Downloads", bn: "ডিজিটাল প্রোডাক্ট" } },
];

const STYLE_OPTIONS: FilterSelectOption[] = [
  { value: "all", label: { en: "All Styles", bn: "সকল স্টাইল" } },
  { value: "editorial", label: { en: "Editorial & Clean", bn: "এডিটোরিয়াল ও মার্জিত" } },
  { value: "modern-tech", label: { en: "Modern Tech", bn: "মডার্ন টেক" } },
  { value: "botanical", label: { en: "Soft Botanical", bn: "সফট বোটানিক্যাল" } },
  { value: "vibrant", label: { en: "Vibrant Marketplace", bn: "তাজা মার্কেটপ্লেস" } },
  { value: "warm-minimal", label: { en: "Warm Minimalist", bn: "ওয়ার্ম মিনিমালিস্ট" } },
  { value: "classic", label: { en: "Minimalist & Classic", bn: "মিনিমালিস্ট ও রুচিশীল" } },
];

const LAYOUT_OPTIONS: FilterSelectOption[] = [
  { value: "all", label: { en: "All Layouts", bn: "সকল লেআউট" } },
  { value: "lookbook", label: { en: "Lookbook Capsule", bn: "লুকবুক ক্যাপসুল" } },
  { value: "spec-focused", label: { en: "Spec-Focused Grid", bn: "স্পেক্স-ফোকাসড গ্রিড" } },
  { value: "ritual-showcase", label: { en: "Ritual Showcase", bn: "রিচুয়াল শোকেস" } },
  { value: "high-density-grid", label: { en: "Multi-Item Basket", bn: "মাল্টি-আইটেম বাস্কেট" } },
  { value: "minimal-grid", label: { en: "Room Showcase & Grid", bn: "রুম শোকেস ও গ্রিড" } },
];

const PLAN_OPTIONS: FilterSelectOption[] = [
  { value: "all", label: { en: "All Plans", bn: "সকল প্ল্যান" } },
  { value: "starter", label: { en: "Starter Plan", bn: "স্টার্টার প্ল্যান" } },
  { value: "growth", label: { en: "Growth Plan", bn: "গ্রোথ প্ল্যান" } },
  { value: "scale", label: { en: "Scale Plan", bn: "স্কেল প্ল্যান" } },
];

export interface ThemeSearchFiltersProps {
  filters: ThemesFilterState;
  onFilterChange: <K extends keyof ThemesFilterState>(key: K, value: ThemesFilterState[K]) => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
  className?: string;
}

export function ThemeSearchFilters({
  filters,
  onFilterChange,
  onReset,
  totalCount,
  filteredCount,
  className,
}: ThemeSearchFiltersProps) {
  const { locale } = useLanguage();

  const isFiltered =
    Boolean(filters.searchQuery.trim()) ||
    filters.category !== "all" ||
    filters.style !== "all" ||
    filters.layoutType !== "all" ||
    filters.plan !== "all";

  return (
    <div className={cn("space-y-4", className)}>
      {/* Search Input, Results Counter & Reset Button */}
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
            className="w-full rounded-xl border border-border bg-card pl-10 pr-8 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-2xs"
            aria-label="Search themes by name or keywords"
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

        {/* Counter & Reset */}
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

      {/* Filter Select Controls Grid */}
      <div className="p-4 rounded-2xl border border-border bg-card/60 shadow-2xs backdrop-blur-xs">
        <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-foreground/80">
          <SlidersHorizontal className="size-3.5 text-primary" />
          <span>{locale === "bn" ? "ফিল্টার অপশন:" : "Filter Themes By:"}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <ThemeFilterSelect
            label={{ en: "Business Category", bn: "ক্যাটাগরি" }}
            value={filters.category}
            onChange={(val) => onFilterChange("category", val)}
            options={CATEGORY_OPTIONS}
            ariaLabel="Filter by business category"
          />

          <ThemeFilterSelect
            label={{ en: "Theme Style", bn: "ডিজাইন স্টাইল" }}
            value={filters.style}
            onChange={(val) => onFilterChange("style", val)}
            options={STYLE_OPTIONS}
            ariaLabel="Filter by theme style"
          />

          <ThemeFilterSelect
            label={{ en: "Layout Format", bn: "লেআউট ফরম্যাট" }}
            value={filters.layoutType}
            onChange={(val) => onFilterChange("layoutType", val)}
            options={LAYOUT_OPTIONS}
            ariaLabel="Filter by layout type"
          />

          <ThemeFilterSelect
            label={{ en: "Included Plan", bn: "সাবস্ক্রিপশন প্ল্যান" }}
            value={filters.plan}
            onChange={(val) => onFilterChange("plan", val)}
            options={PLAN_OPTIONS}
            ariaLabel="Filter by eligible subscription plan"
          />
        </div>
      </div>
    </div>
  );
}

