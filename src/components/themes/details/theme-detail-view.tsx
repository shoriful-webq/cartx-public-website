"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import { getThemeBySlug } from "../themes-data";
import { ThemeDetailHeader } from "./theme-detail-header";
import { ThemePreviewToolbar, ViewportMode, PreviewTab } from "./theme-preview-toolbar";
import { ThemePreviewViewport } from "./theme-preview-viewport";
import { ThemeCapabilities } from "./theme-capabilities";
import { ThemeCustomizationOptions } from "./theme-customization-options";
import { ThemePlanEligibility } from "./theme-plan-eligibility";
import { ThemeRelatedThemes } from "./theme-related-themes";
import { ThemeDetailCTA } from "./theme-detail-cta";

export interface ThemeDetailViewProps {
  slug: string;
}

export function ThemeDetailView({ slug }: ThemeDetailViewProps) {
  const theme = getThemeBySlug(slug);

  if (!theme) {
    notFound();
  }

  const [viewportMode, setViewportMode] = useState<ViewportMode>("desktop");
  const [activeTab, setActiveTab] = useState<PreviewTab>("homepage");

  return (
    <article className="min-h-screen bg-background">
      {/* 01. Theme Header with Breadcrumbs & Actions */}
      <ThemeDetailHeader theme={theme} />

      {/* 02. Large Theme Preview & 03. Desktop/Mobile Toggle & 04-07 Storefront Viewports */}
      <section
        id="theme-preview"
        aria-label="Theme Interactive Preview"
        className="py-10 sm:py-14 border-b border-border bg-muted/15"
      >
        <div className="container space-y-6">
          <ThemePreviewToolbar
            viewportMode={viewportMode}
            onViewportChange={setViewportMode}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            domain={theme.preview.domain}
          />

          <ThemePreviewViewport
            theme={theme}
            viewportMode={viewportMode}
            activeTab={activeTab}
          />
        </div>
      </section>

      {/* 08. Key Verified Capabilities */}
      <ThemeCapabilities theme={theme} />

      {/* 09. Supported Customization & Safeguards */}
      <ThemeCustomizationOptions theme={theme} />

      {/* 10. Plan Eligibility & Pricing Details */}
      <ThemePlanEligibility theme={theme} />

      {/* 11. Related Alternative Themes */}
      <ThemeRelatedThemes currentTheme={theme} />

      {/* 12. Final Action CTA */}
      <ThemeDetailCTA theme={theme} />
    </article>
  );
}

