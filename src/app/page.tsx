"use client";

import { CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";

export default function Home() {
  const { t, locale } = useLanguage();

  return (
    <div className="flex flex-col min-h-full flex-1 bg-background text-foreground">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-primary mb-6 shadow-xs">
            <Sparkles className="size-3.5 text-secondary-accent" />
            <span>{t("home.badge")}</span>
          </div>

          <h1 className="max-w-4xl tracking-tight text-balance">
            {t("home.heroTitle")}
          </h1>

          <p className="section-description text-balance">
            {t("home.heroDescription")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <CTAButton action="startStore" locale={locale} size="lg" showArrow />
            <CTAButton action="exploreFeatures" locale={locale} size="lg" variant="outline" />
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section id="features" className="section-padding bg-card/50 border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading">{t("home.tokenSectionTitle")}</h2>
            <p className="section-description">
              {t("home.tokenSectionSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="surface-card flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Zap className="size-5" />
                </div>
                <h3>{t("home.card1.title")}</h3>
                <p>
                  {t("home.card1.desc")}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex gap-2">
                <span className="inline-flex items-center text-xs font-medium text-success gap-1">
                  <CheckCircle2 className="size-3.5" /> {t("home.card1.badge")}
                </span>
              </div>
            </div>

            <div className="surface-card flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-md bg-success/10 text-success flex items-center justify-center mb-4">
                  <ShieldCheck className="size-5" />
                </div>
                <h3>{t("home.card2.title")}</h3>
                <p>
                  {t("home.card2.desc")}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                <div className="size-3 rounded-full bg-success" />
                <div className="size-3 rounded-full bg-warning" />
                <div className="size-3 rounded-full bg-error" />
                <span className="text-xs text-muted-foreground ml-auto">{t("home.card2.badge")}</span>
              </div>
            </div>

            <div className="surface-card flex flex-col justify-between" id="bangla">
              <div>
                <div className="size-10 rounded-md bg-secondary-accent/10 text-primary flex items-center justify-center mb-4 font-bold text-lg">
                  বা
                </div>
                <h3>{t("home.card3.title")}</h3>
                <p>
                  {t("home.card3.desc")}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground font-mono">{t("home.card3.font")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
