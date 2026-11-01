"use client";

import { useState, useMemo, useCallback } from "react";
import { IntegrationItem, IntegrationFilterState } from "../types";

export function useIntegrationFilters(integrations: IntegrationItem[]) {
  const [filters, setFilters] = useState<IntegrationFilterState>({
    searchQuery: "",
    category: "all",
    status: "all",
  });

  const setSearchQuery = useCallback((query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  }, []);

  const setCategory = useCallback((category: string) => {
    setFilters((prev) => ({ ...prev, category }));
  }, []);

  const setStatus = useCallback((status: string) => {
    setFilters((prev) => ({ ...prev, status }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      searchQuery: "",
      category: "all",
      status: "all",
    });
  }, []);

  const hasActiveFilters = useMemo(() => {
    return (
      filters.searchQuery.trim() !== "" ||
      filters.category !== "all" ||
      filters.status !== "all"
    );
  }, [filters]);

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((item) => {
      // Category filter
      if (filters.category !== "all" && item.category !== filters.category) {
        return false;
      }

      // Status filter
      if (filters.status !== "all" && item.status !== filters.status) {
        return false;
      }

      // Search query
      if (filters.searchQuery.trim() !== "") {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesSlug = item.slug.toLowerCase().includes(query);
        const matchesEnTagline = item.tagline.en.toLowerCase().includes(query);
        const matchesBnTagline = item.tagline.bn.toLowerCase().includes(query);
        const matchesEnDesc = item.description.en.toLowerCase().includes(query);
        const matchesBnDesc = item.description.bn.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesCapabilities = item.capabilities.some(
          (c) =>
            c.title.en.toLowerCase().includes(query) ||
            c.title.bn.toLowerCase().includes(query)
        );

        if (
          !matchesName &&
          !matchesSlug &&
          !matchesEnTagline &&
          !matchesBnTagline &&
          !matchesEnDesc &&
          !matchesBnDesc &&
          !matchesCategory &&
          !matchesCapabilities
        ) {
          return false;
        }
      }

      return true;
    });
  }, [integrations, filters]);

  return {
    filters,
    setSearchQuery,
    setCategory,
    setStatus,
    resetFilters,
    hasActiveFilters,
    filteredIntegrations,
    totalCount: integrations.length,
    filteredCount: filteredIntegrations.length,
  };
}

