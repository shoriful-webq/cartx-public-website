"use client";

import { Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { HeroDashboardMockup } from "./hero-dashboard-mockup";

export function HeroSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="hero-bg relative overflow-hidden">
      {/* ── Decorative background shapes ── */}

      {/* Large soft radial in the top-right — anchors the mockup side */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-[0.045]"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />

      {/* Small accent orb bottom-left for balance */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-[0.035]"
        style={{
          background:
            "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid-dot pattern overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── Main content ── */}
      <div className="container relative py-16 sm:py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* ── Left column: Text + CTAs ── */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary mb-8">
              <span>{t("home.eyebrow")}</span>
            </div>

            {/* H1 */}
            <h1 className="text-balance !mb-6">
              {t("home.heroTitlePlain")}{" "}
              <span className="brand-gradient-text">
                {t("home.heroTitleHighlight")}
              </span>
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg !leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0 !mb-8">
              {t("home.heroDescription")}
            </p>

            {/* CTA buttons — generous sizing for hero prominence */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <CTAButton
                action="startStore"
                locale={locale}
                size="lg"
                showArrow
                className="px-7 py-3 text-sm rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <CTAButton
                action="exploreFeatures"
                locale={locale}
                size="lg"
                variant="outline"
                className="px-7 py-3 text-sm rounded-lg"
              />
            </div>

            {/* Trust line */}
            <p className="flex items-center justify-center lg:justify-start gap-2 text-[13px] text-muted-foreground mt-8 !mb-0">
              <CheckCircle2 className="size-4 text-success shrink-0" />
              <span>{t("home.trustLine")}</span>
            </p>
          </div>

          {/* ── Right column: Product visual ── */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none relative">
            {/* Soft elevated glow behind the mockup */}
            <div className="absolute -inset-6 rounded-3xl bg-primary/[0.04] blur-3xl" />
            <div className="relative">
              <HeroDashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
