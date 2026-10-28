import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-primary mb-6 shadow-xs">
            <Sparkles className="size-3.5 text-secondary-accent" />
            <span>CartX Design System 1.0 Ready</span>
          </div>

          <h1 className="max-w-4xl tracking-tight">
            The modern commerce engine for <span className="brand-gradient-text">hyper-growth brands</span>
          </h1>

          <p className="section-description">
            Powering fast, localized, and ultra-scalable online storefronts across global and regional markets with effortless checkout.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Button size="lg" className="gap-2">
              Start Free Trial <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Token Showcase Grid */}
      <section id="features" className="section-padding bg-card/50 border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Built with CartX Global Design Tokens</h2>
            <p className="section-description">
              Consistent typography, exact brand colors, accessible contrast, and responsive spacing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="surface-card flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Zap className="size-5" />
                </div>
                <h3>Primary & Secondary Colors</h3>
                <p>
                  Styled using <code>#2563EB</code> primary and <code>#38BDF8</code> secondary accents with clean slate body text.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex gap-2">
                <span className="inline-flex items-center text-xs font-medium text-success gap-1">
                  <CheckCircle2 className="size-3.5" /> High Contrast
                </span>
              </div>
            </div>

            <div className="surface-card flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-md bg-success/10 text-success flex items-center justify-center mb-4">
                  <ShieldCheck className="size-5" />
                </div>
                <h3>State Indicators</h3>
                <p>
                  Semantic tokens for success (<code>#16A34A</code>), warning (<code>#D97706</code>), and error (<code>#DC2626</code>).
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                <div className="size-3 rounded-full bg-success" />
                <div className="size-3 rounded-full bg-warning" />
                <div className="size-3 rounded-full bg-error" />
                <span className="text-xs text-muted-foreground ml-auto">WCAG Compliant</span>
              </div>
            </div>

            <div className="surface-card flex flex-col justify-between" id="bangla">
              <div>
                <div className="size-10 rounded-md bg-secondary-accent/10 text-primary flex items-center justify-center mb-4 font-bold text-lg">
                  বা
                </div>
                <h3 lang="bn">বাংলা টাইপোগ্রাফি সাপোর্ট</h3>
                <p lang="bn" className="font-bengali">
                  নোটো সান্স বেঙ্গলি ফন্ট এবং ক্লাস্প-ভিত্তিক রেসপনসিভ হেডারের মাধ্যমে বাংলা টেক্সট মসৃণভাবে প্রদর্শিত হয়।
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground font-mono">Noto Sans Bengali + Inter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border bg-card py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CartX Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
