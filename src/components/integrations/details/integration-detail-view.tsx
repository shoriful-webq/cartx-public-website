"use client";

import React from "react";
import { IntegrationItem } from "../types";
import { IntegrationDetailHeader } from "./integration-detail-header";
import { IntegrationPurpose } from "./integration-purpose";
import { IntegrationRequirements } from "./integration-requirements";
import { IntegrationCapabilities } from "./integration-capabilities";
import { IntegrationSetupGuide } from "./integration-setup-guide";
import { IntegrationDataExchanged } from "./integration-data-exchanged";
import { IntegrationSecurityNotes } from "./integration-security-notes";
import { IntegrationLimitations } from "./integration-limitations";
import { IntegrationTroubleshooting } from "./integration-troubleshooting";
import { IntegrationFAQ } from "./integration-faq";
import { IntegrationContactCTA } from "./integration-contact-cta";

interface IntegrationDetailViewProps {
  integration: IntegrationItem;
}

export function IntegrationDetailView({ integration }: IntegrationDetailViewProps) {
  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Section 01: Provider Overview */}
      <IntegrationDetailHeader integration={integration} />

      {/* Section 02: What the Integration Does */}
      <IntegrationPurpose integration={integration} />

      {/* Section 03: Requirements and Eligibility */}
      <IntegrationRequirements integration={integration} />

      {/* Section 04: Supported Capabilities */}
      <IntegrationCapabilities integration={integration} />

      {/* Section 05: Step-by-Step Setup Guide */}
      <IntegrationSetupGuide integration={integration} />

      {/* Section 06: Data Exchanged */}
      <IntegrationDataExchanged integration={integration} />

      {/* Section 07: Security Notes */}
      <IntegrationSecurityNotes integration={integration} />

      {/* Section 08: Limitations and Additional Fees */}
      <IntegrationLimitations integration={integration} />

      {/* Section 09: Troubleshooting */}
      <IntegrationTroubleshooting integration={integration} />

      {/* Section 10: Frequently Asked Questions */}
      <IntegrationFAQ integration={integration} />

      {/* Section 11: Contact Support CTA */}
      <IntegrationContactCTA integration={integration} />
    </article>
  );
}

