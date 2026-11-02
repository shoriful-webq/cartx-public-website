"use client";

import React, { useState, useMemo } from "react";
import { HelpHero } from "./help-hero";
import { HelpFAQAccordion } from "./help-faq-accordion";
import { HelpCTA } from "./help-cta";
import {
  HELP_CATEGORIES,
  HELP_ARTICLES,
  HelpCategory,
} from "./help-data";
import { useLanguage } from "@/lib/i18n/language-context";
import { Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

export function HelpView() {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const [selectedCategory, setSelectedCategory] = useState<HelpCategory>("getting-started");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const activeCategoryMeta = useMemo(() => {
    return HELP_CATEGORIES.find((c) => c.id === selectedCategory) || HELP_CATEGORIES[0];
  }, [selectedCategory]);

  const displayedArticles = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return HELP_ARTICLES.filter(
        (art) =>
          art.questionEn.toLowerCase().includes(q) ||
          art.questionBn.toLowerCase().includes(q) ||
          art.answerEn.toLowerCase().includes(q) ||
          art.answerBn.toLowerCase().includes(q) ||
          (art.capability && art.capability.toLowerCase().includes(q))
      );
    }
    return HELP_ARTICLES.filter((art) => art.category === selectedCategory);
  }, [searchQuery, selectedCategory]);

  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Section 1: Hero with live search */}
      <HelpHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Area */}
      <section
        id="help-topics"
        aria-label="Help Topics & FAQs"
        className="py-14 sm:py-20 bg-background transition-colors"
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          {/* If searching, show search status */}
          {searchQuery ? (
            <div className="mb-8 flex items-center justify-between text-xs text-muted-foreground border-b border-border pb-4">
              <span>
                {isBn
                  ? `"${searchQuery}" এর জন্য ${displayedArticles.length}টি উত্তর পাওয়া গেছে`
                  : `Found ${displayedArticles.length} result${displayedArticles.length === 1 ? "" : "s"} for "${searchQuery}"`}
              </span>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-primary hover:underline cursor-pointer font-semibold"
              >
                {isBn ? "অনুসন্ধান মুছুন" : "Clear search"}
              </button>
            </div>
          ) : (
            /* 10 Topic Category Pills */
            <div className="mb-12">
              <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 scrollbar-none">
                {HELP_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const count = HELP_ARTICLES.filter((a) => a.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={cn(
                        "shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer",
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-xs"
                          : "border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      <span>{isBn ? cat.nameBn : cat.nameEn}</span>
                      <span
                        className={cn(
                          "rounded-full px-1.5 py-0.2 text-[10px] font-mono",
                          isSelected
                            ? "bg-primary-foreground/20 text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Category Header */}
              <div className="mt-8 mb-6 p-5 rounded-2xl border border-border bg-card/40">
                <h2 className="text-lg sm:text-xl font-bold text-foreground">
                  {isBn ? activeCategoryMeta.nameBn : activeCategoryMeta.nameEn}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {isBn ? activeCategoryMeta.descriptionBn : activeCategoryMeta.descriptionEn}
                </p>
              </div>
            </div>
          )}

          {/* FAQ Accordion List or Empty State */}
          {displayedArticles.length > 0 ? (
            <div className="max-w-4xl mx-auto">
              <HelpFAQAccordion articles={displayedArticles} />
            </div>
          ) : (
            <div className="max-w-md mx-auto text-center py-16 rounded-2xl border border-dashed border-border bg-card/40 p-8">
              <Inbox className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-60" />
              <h3 className="text-base font-bold text-foreground mb-1">
                {isBn ? "কোনো উত্তর পাওয়া যায়নি" : "No answers found"}
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                {isBn
                  ? "আপনার অনুসন্ধান শব্দের সাথে মিলে এমন কোনো প্রশ্নোত্তর পাওয়া যায়নি।"
                  : "We couldn't find any articles matching your search query. Try another term or contact support."}
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-xs font-semibold text-primary-foreground cursor-pointer"
              >
                {isBn ? "সব বিষয় দেখুন" : "View all topics"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Section 5: Direct Support Contact CTA */}
      <HelpCTA />
    </article>
  );
}

