"use client";

import React, { useState, useMemo } from "react";
import { ThemesHero } from "./themes-hero";
import { ThemesFilterBar } from "./themes-filter-bar";
import { ThemesGrid } from "./themes-grid";
import { ThemesFeatures } from "./themes-features";
import { ThemesCustomization } from "./themes-customization";
import { ThemesFAQ } from "./themes-faq";
import { ThemesCTA } from "./themes-cta";
import { ALL_THEMES_LIST } from "../themes-data";
import { ThemesFilterState } from "../types";

const INITIAL_FILTERS: ThemesFilterState = {
  searchQuery: "",
  category: "all",
  style: "all",
  layoutType: "all",
  mobileFriendly: "all",
  plan: "all",
};

export function ThemesGalleryView() {
  const [filters, setFilters] = useState<ThemesFilterState>(INITIAL_FILTERS);

  const handleFilterChange = <K extends keyof ThemesFilterState>(
    key: K,
    value: ThemesFilterState[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters(INITIAL_FILTERS);
  };

  // Filtered themes computation
  const filteredThemes = useMemo(() => {
    return ALL_THEMES_LIST.filter((theme) => {
      // 1. Search Query
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchesName =
          theme.name.en.toLowerCase().includes(query) ||
          theme.name.bn.toLowerCase().includes(query);
        const matchesTagline =
          theme.tagline.en.toLowerCase().includes(query) ||
          theme.tagline.bn.toLowerCase().includes(query);
        const matchesCategory =
          theme.categoryLabel.en.toLowerCase().includes(query) ||
          theme.categoryLabel.bn.toLowerCase().includes(query);
        const matchesKeywords = theme.keywords.some((k) =>
          k.toLowerCase().includes(query)
        );

        if (!matchesName && !matchesTagline && !matchesCategory && !matchesKeywords) {
          return false;
        }
      }

      // 2. Category
      if (filters.category !== "all" && theme.category !== filters.category) {
        return false;
      }

      // 3. Style
      if (filters.style !== "all" && theme.style !== filters.style) {
        return false;
      }

      // 4. Layout
      if (filters.layoutType !== "all" && theme.layoutType !== filters.layoutType) {
        return false;
      }

      // 5. Plan
      if (
        filters.plan !== "all" &&
        !theme.eligiblePlans.includes(filters.plan as "starter" | "growth" | "scale")
      ) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-background">
      {/* 01. Hero */}
      <ThemesHero />

      {/* 02. Search & Filters + 03. Theme Grid */}
      <section id="themes-gallery" className="py-14 sm:py-16 lg:py-20 border-b border-border">
        <div className="container space-y-8">
          <ThemesFilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleReset}
            totalCount={ALL_THEMES_LIST.length}
            filteredCount={filteredThemes.length}
          />

          <ThemesGrid
            themes={filteredThemes}
            onResetFilters={handleReset}
          />
        </div>
      </section>

      {/* 04. Storefront Capabilities & Features */}
      <ThemesFeatures />

      {/* 05. Customization Options & Rules */}
      <ThemesCustomization />

      {/* 06. FAQs */}
      <ThemesFAQ />

      {/* 07. Call to Action */}
      <ThemesCTA />
    </div>
  );
}

