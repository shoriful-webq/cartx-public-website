"use client";

import React from "react";
import { BookDemoHero } from "./book-demo-hero";
import { DemoCoverage } from "./demo-coverage";
import { BookDemoForm } from "./book-demo-form";
import { DemoProcess } from "./demo-process";
import { DemoFAQ } from "./demo-faq";
import { BookDemoCTA } from "./book-demo-cta";

export function BookDemoView() {
  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Section 01: Hero */}
      <BookDemoHero />

      {/* Section 02: What the Demo Covers */}
      <DemoCoverage />

      {/* Section 03: Demo Request Form */}
      <BookDemoForm />

      {/* Section 04: What Happens Next & Section 05: Scheduling Overview */}
      <DemoProcess />

      {/* Section 06: FAQ */}
      <DemoFAQ />

      {/* Section 07: Final CTA */}
      <BookDemoCTA />
    </article>
  );
}

