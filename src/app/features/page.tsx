"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

export default function FeaturesPage() {
  const { t } = useLanguage();

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
          <Link
            href="/start"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover transition-colors"
          >
            {t("btn.startTrial")} <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
