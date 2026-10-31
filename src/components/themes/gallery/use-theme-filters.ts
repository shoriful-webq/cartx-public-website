"use client";

import { useState, useMemo, useCallback } from "react";
import { ThemeItem, ThemesFilterState } from "../types";

export const INITIAL_THEME_FILTERS: ThemesFilterState = {
  searchQuery: "",
  category: "all",
  style: "all",
  layoutType: "all",
  mobileFriendly: "all",
  plan: "all",
};

export function useThemeFilters(themes: ThemeItem[]) {
  const [filters, setFilters] = useState<ThemesFilterState>(INITIAL_THEME_FILTERS);

  const handleFilterChange = useCallback(
    <K extends keyof ThemesFilterState>(key: K, value: ThemesFilterState[K]) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleReset = useCallback(() => {
    setFilters(INITIAL_THEME_FILTERS);
  }, []);

  const isFiltered = useMemo(() => {
    return (
      Boolean(filters.searchQuery.trim()) ||
      filters.category !== "all" ||
      filters.style !== "all" ||
      filters.layoutType !== "all" ||
      filters.plan !== "all"
    );
  }, [filters]);

  const filteredThemes = useMemo(() => {
    return themes.filter((theme) => {
      // 1. Keyword search (Name, Tagline, Category, Keywords)
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

      // 2. Business Category
      if (filters.category !== "all" && theme.category !== filters.category) {
        return false;
      }

      // 3. Theme Style
      if (filters.style !== "all" && theme.style !== filters.style) {
        return false;
      }

      // 4. Layout Type
      if (filters.layoutType !== "all" && theme.layoutType !== filters.layoutType) {
        return false;
      }

      // 5. Eligible Plan
      if (
        filters.plan !== "all" &&
        !theme.eligiblePlans.includes(filters.plan as "starter" | "growth" | "scale")
      ) {
        return false;
      }

      return true;
    });
  }, [themes, filters]);

  return {
    filters,
    handleFilterChange,
    handleReset,
    filteredThemes,
    isFiltered,
    totalCount: themes.length,
    filteredCount: filteredThemes.length,
  };
}

