"use client";

import React from "react";
import { ALL_INTEGRATIONS } from "../integrations-data";
import { useIntegrationFilters } from "./use-integration-filters";
import { IntegrationsHero } from "./integrations-hero";
import { IntegrationCategoryOverview } from "./integration-category-overview";
import { IntegrationGrid } from "./integration-grid";
import { IntegrationWorkflow } from "./integration-workflow";
import { IntegrationSecurity } from "./integration-security";
import { IntegrationsCTA } from "./integrations-cta";

export function IntegrationsDirectoryView() {
  const {
    filters,
    setSearchQuery,
    setCategory,
    setStatus,
    resetFilters,
    hasActiveFilters,
    filteredIntegrations,
    totalCount,
    filteredCount,
  } = useIntegrationFilters(ALL_INTEGRATIONS);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Section 01: Hero */}
      <IntegrationsHero />

      {/* Section 02: Categories Overview */}
      <IntegrationCategoryOverview onSelectCategory={setCategory} />

      {/* Section 03: Integrations Grid & Filters */}
      <IntegrationGrid
        integrations={filteredIntegrations}
        filters={filters}
        onSearchChange={setSearchQuery}
        onCategoryChange={setCategory}
        onStatusChange={setStatus}
        onReset={resetFilters}
        hasActiveFilters={hasActiveFilters}
        totalCount={totalCount}
        filteredCount={filteredCount}
      />

      {/* Section 04: 6-Step Workflow */}
      <IntegrationWorkflow />

      {/* Section 05: Security & Compliance */}
      <IntegrationSecurity />

      {/* Section 06: Final CTA */}
      <IntegrationsCTA />
    </div>
  );
}

