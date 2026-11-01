"use client";

import React from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationFilterState } from "../types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IntegrationSearchFiltersProps {
  filters: IntegrationFilterState;
  onSearchChange: (value: string) => void;
  onCategoryChange: (category: string) => void;
  onStatusChange: (status: string) => void;
  onReset: () => void;
  hasActiveFilters: boolean;
  totalCount: number;
  filteredCount: number;
}

export function IntegrationSearchFilters({
  filters,
  onSearchChange,
  onCategoryChange,
  onStatusChange,
  onReset,
  hasActiveFilters,
  totalCount,
  filteredCount,
}: IntegrationSearchFiltersProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const categories = [
    { id: "all", label: isBn ? "সব ক্যাটাগরি" : "All Categories" },
    { id: "payments", label: isBn ? "পেমেন্ট গেটওয়ে" : "Payments" },
    { id: "shipping", label: isBn ? "কুরিয়ার ও লজিস্টিকস" : "Shipping" },
    { id: "analytics", label: isBn ? "অ্যানালিটিক্স" : "Analytics" },
    { id: "communication", label: isBn ? "যোগাযোগ ও এসএমএস" : "SMS & Comms" },
    { id: "domains", label: isBn ? "কাস্টম ডোমেইন" : "Custom Domains" },
  ];

  const statuses = [
    { id: "all", label: isBn ? "সব স্ট্যাটাস" : "All Statuses" },
    { id: "available", label: isBn ? "সক্রিয় (Available)" : "Available" },
    { id: "beta", label: isBn ? "বেটা (Beta)" : "Beta" },
    { id: "coming-soon", label: isBn ? "শীঘ্রই আসছে" : "Coming Soon" },
  ];

  return (
    <div className="space-y-4">
      {/* Search Bar + Status Select */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={
              isBn
                ? "ইন্টিগ্রেশন খুঁজুন (যেমন: bKash, Pathao, Meta Pixel)..."
                : "Search integrations (e.g., bKash, Pathao, Meta Pixel)..."
            }
            className="w-full h-11 pl-10 pr-10 rounded-xl border border-input bg-background text-foreground text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search query"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Status Dropdown */}
        <div className="sm:w-48 shrink-0">
          <div className="relative">
            <select
              value={filters.status}
              onChange={(e) => onStatusChange(e.target.value)}
              className="w-full h-11 px-3.5 pr-8 rounded-xl border border-input bg-background text-foreground text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none cursor-pointer"
              aria-label="Filter by status"
            >
              {statuses.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Category Pills + Result Count & Reset */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pt-2">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = filters.category === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 border",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground border-transparent"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 text-xs text-muted-foreground">
          <span>
            {isBn
              ? `${totalCount}টি ইন্টিগ্রেশনের মধ্যে ${filteredCount}টি প্রদর্শিত`
              : `Showing ${filteredCount} of ${totalCount} integrations`}
          </span>

          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onReset}
              className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground gap-1"
            >
              <X className="h-3 w-3" />
              {isBn ? "ফিল্টার মুছুন" : "Clear filters"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

