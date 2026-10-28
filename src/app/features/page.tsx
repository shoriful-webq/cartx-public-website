"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";

export default function FeaturesPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="section-padding">
      <div className="container max-w-4xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {t("nav.features")}
        </span>
        <h1 className="mt-3 mb-4 tracking-tight">{t("features.title")}</h1>
        <p className="section-description">
          {t("features.desc")}
        </p>

        <div className="flex justify-center mt-6">
          <CTAButton action="startStore" locale={locale} showArrow />
        </div>
      </div>
    </div>
  );
}
