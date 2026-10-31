"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { LocalizedString } from "../types";
import { cn } from "@/lib/utils";

export interface FilterSelectOption {
  value: string;
  label: LocalizedString;
}

export interface ThemeFilterSelectProps {
  label: LocalizedString;
  value: string;
  onChange: (value: string) => void;
  options: FilterSelectOption[];
  ariaLabel: string;
  className?: string;
}

export function ThemeFilterSelect({
  label,
  value,
  onChange,
  options,
  ariaLabel,
  className,
}: ThemeFilterSelectProps) {
  const { locale } = useLanguage();

  return (
    <div className={cn("space-y-1", className)}>
      <label className="block text-[11px] font-medium text-muted-foreground">
        {label[locale] || label.en}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors cursor-pointer"
        aria-label={ariaLabel}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label[locale] || opt.label.en}
          </option>
        ))}
      </select>
    </div>
  );
}

