"use client";

import React from "react";
import { AboutHero } from "./about-hero";
import { AboutMissionVision } from "./about-mission-vision";
import { WhyCartX } from "./why-cartx";
import { WebQLtd } from "./webq-ltd";
import { AboutPrinciples } from "./about-principles";
import { AboutCTA } from "./about-cta";

export function AboutView() {
  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Section 1: Hero */}
      <AboutHero />

      {/* Section 2 & 3: Mission and Vision */}
      <AboutMissionVision />

      {/* Section 4: Why CartX */}
      <WhyCartX />

      {/* Section 5: WebQ LTD Company Profile */}
      <WebQLtd />

      {/* Section 6: Core Principles */}
      <AboutPrinciples />

      {/* Section 7: Final CTA */}
      <AboutCTA />
    </article>
  );
}

