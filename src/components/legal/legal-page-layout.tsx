"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Clock, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface LegalSection {
  id: string;
  titleEn: string;
  titleBn: string;
  contentEn: string[];
  contentBn: string[];
}

export interface LegalPageProps {
  titleEn: string;
  titleBn: string;
  lastUpdated: string;
  summaryEn: string;
  summaryBn: string;
  sections: LegalSection[];
}

export function LegalPageLayout({
  titleEn,
  titleBn,
  lastUpdated,
  summaryEn,
  summaryBn,
  sections,
}: LegalPageProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Hero Header */}
      <header className="hero-bg py-12 transition-colors">
        <div className="container relative hero-padding mx-auto max-w-4xl">
          <ScrollReveal delay={0}>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <Link href="/" className="hover:text-foreground transition-colors">
                {isBn ? "হোম" : "Home"}
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-primary font-medium">{isBn ? titleBn : titleEn}</span>
            </nav>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-4">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{isBn ? "আইনি ও পলিসি নির্দেশিকা" : "Legal & Compliance Notice"}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
              <span className="brand-gradient-text">{isBn ? titleBn : titleEn}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mb-6">
              {isBn ? summaryBn : summaryEn}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-primary" />
              <span>
                {isBn ? `সর্বশেষ আপডেট: ${lastUpdated}` : `Effective Date: ${lastUpdated}`}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Main Content Body */}
      <section className="py-14 sm:py-20 bg-background transition-colors">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-10">
            {sections.map((section, idx) => (
              <ScrollReveal key={section.id} delay={idx * 40}>
                <div
                  id={section.id}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs scroll-mt-24"
                >
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                    {isBn ? section.titleBn : section.titleEn}
                  </h2>
                  <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {(isBn ? section.contentBn : section.contentEn).map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Questions Contact Box */}
            <ScrollReveal delay={100}>
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">
                    {isBn ? "কোনো আইনি বা পলিসি প্রশ্ন আছে?" : "Questions About Our Terms or Policies?"}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {isBn
                      ? "আমাদের টিম আপনাকে যেকোনো প্রশ্নের উত্তর প্রদানে প্রস্তুত।"
                      : "Contact our compliance team at WebQ LTD with any inquiries."}
                  </p>
                </div>
                <a
                  href="mailto:support@cartx.store"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-opacity shrink-0"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>support@cartx.store</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </article>
  );
}
