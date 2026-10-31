"use client";

import React from "react";
import { ThemesHero } from "./themes-hero";
import { ThemeSearchFilters } from "./theme-search-filters";
import { ThemesGrid } from "./themes-grid";
import { ThemesFeatures } from "./themes-features";
import { ThemesCustomization } from "./themes-customization";
import { ThemesFAQ } from "./themes-faq";
import { ThemesCTA } from "./themes-cta";
import { useThemeFilters } from "./use-theme-filters";
import { ALL_THEMES_LIST } from "../themes-data";

export function ThemesGalleryView() {
  const {
    filters,
    handleFilterChange,
    handleReset,
    filteredThemes,
    totalCount,
    filteredCount,
  } = useThemeFilters(ALL_THEMES_LIST);

  return (
    <div className="min-h-screen bg-background">
      {/* 01. Hero Section */}
      <ThemesHero />

      {/* 02. Search & Filters + 03. Responsive Themes Grid */}
      <section id="themes-gallery" className="py-14 sm:py-16 lg:py-20 border-b border-border">
        <div className="container space-y-8">
          <ThemeSearchFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleReset}
            totalCount={totalCount}
            filteredCount={filteredCount}
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

      {/* 06. Themes FAQs */}
      <ThemesFAQ />

      {/* 07. Call to Action */}
      <ThemesCTA />
    </div>
  );
}
