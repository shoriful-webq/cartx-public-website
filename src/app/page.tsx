"use client";

import { Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { HeroDashboardMockup } from "@/components/home/hero-dashboard-mockup";

export default function Home() {
  const { t, locale } = useLanguage();

  return (
    <div className="flex flex-col min-h-full flex-1 bg-background text-foreground">
      {/* ================================================================
          Section 01 — Hero
          Background uses the centralized --hero-bg token via .hero-bg
          Vertical rhythm uses the centralized --section-spacing-y via .section-padding
          ================================================================ */}
      <section className="hero-bg section-padding relative overflow-hidden">
        {/* Decorative accent dot — top-right */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
        />

        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* ── Left column: Text + CTAs ── */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary mb-6 shadow-xs">
                <Sparkles className="size-3.5 text-secondary-accent" />
                <span>{t("home.eyebrow")}</span>
              </div>

              {/* H1 */}
              <h1 className="text-balance">{t("home.heroTitle")}</h1>

              {/* Supporting text */}
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0">
                {t("home.heroDescription")}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6">
                <CTAButton action="startStore" locale={locale} size="lg" showArrow />
                <CTAButton action="exploreFeatures" locale={locale} size="lg" variant="outline" />
              </div>

              {/* Trust line */}
              <p className="flex items-center justify-center lg:justify-start gap-1.5 text-xs text-muted-foreground mt-5">
                <CheckCircle2 className="size-3.5 text-success shrink-0" />
                <span>{t("home.trustLine")}</span>
              </p>
            </div>

            {/* ── Right column: Product visual ── */}
            <div className="flex-1 w-full max-w-2xl lg:max-w-none">
              <HeroDashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Future sections will be added here, each using .section-padding
          for consistent vertical rhythm controlled by --section-spacing-y. */}
    </div>
  );
}
