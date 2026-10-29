import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { type DeepDiveItem } from "./types";

export interface DeepDiveRowProps {
  item: DeepDiveItem;
  isReversed: boolean;
  t: (key: string) => string;
}

/**
 * Renders an individual feature deep-dive row with alternating text/visual columns,
 * eyebrow badge, bulleted capabilities, anchor jump button, and scroll-anchor ID.
 */
export function DeepDiveRow({ item, isReversed, t }: DeepDiveRowProps) {
  const Icon = item.icon;

  return (
    <div
      id={item.id}
      className="relative pt-6 first:pt-0 scroll-mt-28 lg:scroll-mt-36"
    >
      <ScrollReveal delay={50}>
        <div
          className={cn(
            "flex flex-col items-center gap-8 lg:gap-14",
            isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
          )}
        >
          {/* Text Column */}
          <div className="flex-1 w-full max-w-xl text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary mb-3">
              <Icon className="size-3 text-secondary-accent" />
              <span>{t(item.eyebrowKey)}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-3 leading-[1.2] brand-gradient-text">
              {t(item.titleKey)}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              {t(item.descKey)}
            </p>

            {/* Bullets */}
            <ul className="space-y-2.5 mb-6" role="list">
              {item.bulletKeys.map((bulletKey, bIdx) => (
                <li
                  key={bIdx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{t(bulletKey)}</span>
                </li>
              ))}
            </ul>

            {/* Anchor jump button */}
            <div>
              <a
                href="#feature-categories"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors group"
              >
                <span>{t("featuresDeepDive.backToCategories")}</span>
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Visual Column */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            {item.renderVisual(t)}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

