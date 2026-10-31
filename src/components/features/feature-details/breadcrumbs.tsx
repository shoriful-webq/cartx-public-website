"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { LocalizedString } from "./types";
import { cn } from "@/lib/utils";

export interface BreadcrumbsProps {
  featureName: LocalizedString;
  className?: string;
}

export function Breadcrumbs({ featureName, className }: BreadcrumbsProps) {
  const { locale, t } = useLanguage();

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("w-full py-3.5 border-b border-border bg-card/40 transition-colors", className)}
    >
      <div className="container">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
          <li className="flex items-center gap-1.5">
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <Home className="size-3 text-muted-foreground" />
              <span>{t("nav.home") || (locale === "bn" ? "হোম" : "Home")}</span>
            </Link>
          </li>

          <li aria-hidden="true" className="text-muted-foreground/60">
            <ChevronRight className="size-3" />
          </li>

          <li className="flex items-center gap-1.5">
            <Link
              href="/features"
              className="hover:text-foreground transition-colors"
            >
              <span>{t("nav.features") || (locale === "bn" ? "ফিচার্স" : "Features")}</span>
            </Link>
          </li>

          <li aria-hidden="true" className="text-muted-foreground/60">
            <ChevronRight className="size-3" />
          </li>

          <li className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-none" aria-current="page">
            {featureName[locale] || featureName.en}
          </li>
        </ol>
      </div>
    </nav>
  );
}

