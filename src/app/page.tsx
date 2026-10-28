import {
  HeroSection,
  BrandTrustStrip,
  ProblemSolutionSection,
} from "@/components/Home";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full flex-1 bg-background text-foreground">
      {/* Section 01 — Hero */}
      <HeroSection />

      {/* Section 02 — Brand Trust Strip */}
      <BrandTrustStrip />

      {/* Section 03 — Problem and Solution */}
      <ProblemSolutionSection />

      {/* Future sections will be added here, each using .section-padding
          for consistent vertical rhythm controlled by --section-spacing-y. */}
    </div>
  );
}
