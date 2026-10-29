import React from "react";
import { cn } from "@/lib/utils";

export interface MockupFrameProps {
  url: string;
  notice?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

/**
 * Reusable mock browser / admin console frame with window controls and URL pill.
 * Ensures consistent elevation, borders, and interactive transitions across all 12 deep-dive visuals.
 */
export function MockupFrame({
  url,
  notice,
  children,
  className,
  bodyClassName,
}: MockupFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl sm:rounded-2xl border border-border/80 bg-card overflow-hidden shadow-dropdown hover:shadow-card transition-all duration-300 select-none",
        className
      )}
    >
      {/* ── Mock Browser Chrome ── */}
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-error/70" />
          <span className="size-2 rounded-full bg-warning/70" />
          <span className="size-2 rounded-full bg-success/70" />
        </div>
        <span className="text-[9.5px] font-mono text-muted-foreground">{url}</span>
        {notice && (
          <span className="text-[8.5px] font-medium text-muted-foreground/80 bg-muted/60 px-1.5 py-0.2 rounded border border-border/50">
            {notice}
          </span>
        )}
      </div>

      {/* ── Visual Content ── */}
      <div className={cn("p-4 sm:p-5 bg-background/50", bodyClassName)}>
        {children}
      </div>
    </div>
  );
}

