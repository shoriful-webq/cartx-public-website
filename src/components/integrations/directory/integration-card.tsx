"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationItem } from "../types";
import { IntegrationStatusBadge } from "./integration-status-badge";
import { IntegrationIcon } from "./integration-icon";
import { cn } from "@/lib/utils";

interface IntegrationCardProps {
  integration: IntegrationItem;
  className?: string;
}

export function IntegrationCard({ integration, className }: IntegrationCardProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const planLabels = {
    starter: isBn ? "স্টার্টার" : "Starter",
    growth: isBn ? "গ্রোথ" : "Growth",
    scale: isBn ? "স্কেল" : "Scale",
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md",
        className
      )}
    >
      <div>
        {/* Top Header: Icon & Status Badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 transition-transform duration-200 group-hover:scale-105",
              integration.iconBg
            )}
          >
            <IntegrationIcon
              name={integration.iconName}
              className={cn("h-6 w-6", integration.iconColor)}
            />
          </div>
          <IntegrationStatusBadge status={integration.status} size="sm" />
        </div>

        {/* Title & Category */}
        <div className="mb-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {integration.categoryLabel[isBn ? "bn" : "en"]}
          </span>
          <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {integration.name}
          </h3>
        </div>

        {/* Description / Tagline */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
          {integration.tagline[isBn ? "bn" : "en"]}
        </p>

        {/* Capabilities Snippet: First 2 capabilities */}
        <div className="space-y-1.5 pt-3 border-t border-border/50 mb-5">
          {integration.capabilities.slice(0, 2).map((cap) => (
            <div
              key={cap.id}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              <span className="truncate">{cap.title[isBn ? "bn" : "en"]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Plan Badges & Detail Link */}
      <div className="pt-4 border-t border-border/50 flex items-center justify-between gap-2 mt-auto">
        <div className="flex flex-wrap items-center gap-1">
          {integration.eligiblePlans.map((plan) => (
            <span
              key={plan}
              className="inline-block px-1.5 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground"
            >
              {planLabels[plan]}
            </span>
          ))}
        </div>

        <Link
          href={`/integrations/${integration.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary/80 group-hover:translate-x-0.5"
        >
          {isBn ? "বিস্তারিত দেখুন" : "View Details"}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

