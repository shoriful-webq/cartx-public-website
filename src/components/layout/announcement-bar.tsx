"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ArrowRight, Sparkles } from "lucide-react";

export interface AnnouncementProps {
  id?: string;
  badge?: string;
  message: string;
  linkText?: string;
  href?: string;
  dismissible?: boolean;
}

const DEFAULT_ANNOUNCEMENT: AnnouncementProps = {
  id: "announcement-cartx-launch",
  badge: "New",
  message: "Introducing CartX — A Smarter Way to Manage Your Online Store.",
  linkText: "Learn more",
  href: "/features",
  dismissible: true,
};

export function AnnouncementBar({
  announcement = DEFAULT_ANNOUNCEMENT,
}: {
  announcement?: AnnouncementProps | null;
}) {
  const [dismissed, setDismissed] = useState(false);

  // If there is no active announcement or it has been dismissed, do not render
  if (!announcement || !announcement.message || dismissed) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Announcement"
      className="relative z-50 border-b border-border bg-card/95 py-2 px-4 text-xs font-medium text-foreground backdrop-blur-md"
    >
      <div className="container flex items-center justify-between gap-4">
        <div className="flex flex-1 items-center justify-center gap-2 text-center flex-wrap">
          {announcement.badge && (
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
              <Sparkles className="size-3" />
              {announcement.badge}
            </span>
          )}
          <span>{announcement.message}</span>
          {announcement.linkText && announcement.href && (
            <Link
              href={announcement.href}
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline hover:text-primary-hover transition-colors"
            >
              {announcement.linkText}
              <ArrowRight className="size-3" />
            </Link>
          )}
        </div>

        {announcement.dismissible && (
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss announcement"
            className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring transition-colors shrink-0"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}

