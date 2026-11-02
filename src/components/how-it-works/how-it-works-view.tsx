"use client";

import { HowItWorksHero } from "./how-it-works-hero";
import { HowItWorksSteps } from "./how-it-works-steps";
import { HowItWorksWalkthrough } from "./how-it-works-walkthrough";
import { HowItWorksPreview } from "./how-it-works-preview";
import { HowItWorksFAQ } from "./how-it-works-faq";
import { HowItWorksCTA } from "./how-it-works-cta";

export function HowItWorksView() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HowItWorksHero />
      <HowItWorksSteps />
      <HowItWorksWalkthrough />
      <HowItWorksPreview />
      <HowItWorksFAQ />
      <HowItWorksCTA />
    </div>
  );
}

