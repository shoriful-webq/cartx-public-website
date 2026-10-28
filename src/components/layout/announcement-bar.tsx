"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

export interface AnnouncementProps {
  id?: string;
  badge?: string;
  message?: string;
  linkText?: string;
  href?: string;
  dismissible?: boolean;
}

export function AnnouncementBar({
  announcement,
}: {
  announcement?: AnnouncementProps | null;
}) {
  const [dismissed, setDismissed] = useState(false);
  const { t } = useLanguage();

  if (dismissed) {
    return null;
  }

  // Allow custom override props or fall back to internationalized translations
  const badge = announcement?.badge ?? t("announcement.badge");
  const message = announcement?.message ?? t("announcement.message");
  const linkText = announcement?.linkText ?? t("announcement.link");
  const href = announcement?.href ?? "/features";
  const dismissible = announcement?.dismissible ?? true;

  if (!message) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label={t("announcement.dismiss")}
      className="relative z-50 border-b border-border bg-card/95 py-2 px-4 text-xs font-medium text-foreground backdrop-blur-md"
    >
      <div className="container flex items-center justify-between gap-4">
        <div className="flex flex-1 items-center justify-center gap-2 text-center flex-wrap">
          {badge && (
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
              <Sparkles className="size-3" />
              {badge}
            </span>
          )}
          <span>{message}</span>
          {linkText && href && (
            <Link
              href={href}
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline hover:text-primary-hover transition-colors"
            >
              {linkText}
              <ArrowRight className="size-3" />
            </Link>
          )}
        </div>

        {dismissible && (
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label={t("announcement.dismiss")}
            className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring transition-colors shrink-0"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
