import { HeroSection } from "@/components/Home";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full flex-1 bg-background text-foreground">
      {/* Section 01 — Hero */}
      <HeroSection />

      {/* Future sections will be added here, each using .section-padding
          for consistent vertical rhythm controlled by --section-spacing-y. */}
    </div>
  );
}
