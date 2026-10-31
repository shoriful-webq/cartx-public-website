"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { LocalizedString, SolutionDetailConfig } from "./types";

export interface SolutionBreadcrumbsProps {
  industryName?: LocalizedString;
  solution?: SolutionDetailConfig;
}

export function SolutionBreadcrumbs({ industryName, solution }: SolutionBreadcrumbsProps) {
  const { locale, t } = useLanguage();
  const name = industryName || solution?.name;

  return (
    <nav
      aria-label="Breadcrumb navigation"
      className="border-b border-border/80 bg-background/95 backdrop-blur-xs py-2.5 sm:py-3 transition-colors select-none"
    >
      <div className="container">
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-muted-foreground">
          {/* Home Link */}
          <li className="flex items-center gap-1.5">
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <Home className="size-3.5" />
              <span>{t("nav.home")}</span>
            </Link>
          </li>

          <li aria-hidden="true" className="text-muted-foreground/50">
            <ChevronRight className="size-3" />
          </li>

          {/* Solutions Overview Link */}
          <li className="flex items-center gap-1.5">
            <Link
              href="/solutions"
              className="hover:text-foreground transition-colors"
            >
              <span>{t("nav.solutions")}</span>
            </Link>
          </li>

          <li aria-hidden="true" className="text-muted-foreground/50">
            <ChevronRight className="size-3" />
          </li>

          {/* Current Industry (Active Breadcrumb) */}
          <li
            aria-current="page"
            className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-none"
          >
            {name ? (name[locale] || name.en) : ""}
          </li>
        </ol>
      </div>
    </nav>
  );
}
