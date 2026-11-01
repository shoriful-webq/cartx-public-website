"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationStatus } from "../types";
import { cn } from "@/lib/utils";

interface IntegrationStatusBadgeProps {
  status: IntegrationStatus;
  className?: string;
  size?: "sm" | "md";
}

export function IntegrationStatusBadge({
  status,
  className,
  size = "md",
}: IntegrationStatusBadgeProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const config = {
    available: {
      label: isBn ? "সক্রিয়" : "Available",
      className:
        "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60",
      dotClass: "bg-emerald-500",
    },
    beta: {
      label: isBn ? "বেটা" : "Beta",
      className:
        "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-800/60",
      dotClass: "bg-amber-500",
    },
    "coming-soon": {
      label: isBn ? "শীঘ্রই আসছে" : "Coming Soon",
      className:
        "bg-slate-100 text-slate-700 dark:bg-slate-800/60 dark:text-slate-400 border-slate-200 dark:border-slate-700",
      dotClass: "bg-slate-400",
    },
  }[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors",
        size === "sm"
          ? "px-2 py-0.5 text-xs"
          : "px-2.5 py-1 text-xs sm:text-xs",
        config.className,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", config.dotClass)} />
      {config.label}
    </span>
  );
}

