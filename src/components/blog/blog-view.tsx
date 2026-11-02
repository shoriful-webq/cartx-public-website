"use client";

import React, { useState, useMemo } from "react";
import { BlogHero } from "./blog-hero";
import { BlogFeatured } from "./blog-featured";
import { BlogCard } from "./blog-card";
import { BlogNewsletter } from "./blog-newsletter";
import {
  BLOG_POSTS,
  BLOG_CATEGORIES,
  BlogCategory,
} from "@/lib/blog-data";
import { useLanguage } from "@/lib/i18n/language-context";
import { Search, X, Inbox } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function BlogView() {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.titleEn.toLowerCase().includes(q) ||
        post.titleBn.toLowerCase().includes(q) ||
        post.excerptEn.toLowerCase().includes(q) ||
        post.excerptBn.toLowerCase().includes(q) ||
        post.author.name.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Section 1: Hero */}
      <BlogHero />

      {/* Section 2: Featured Article (shown when no search query and 'all' is selected) */}
      {!searchQuery && selectedCategory === "all" && featuredPost && (
        <BlogFeatured post={featuredPost} />
      )}

      {/* Main Listing Section: Categories + Search + Grid */}
      <section
        id="articles-feed"
        aria-label="Blog Articles Feed"
        className="py-14 sm:py-20 bg-background transition-colors"
      >
        <div className="container mx-auto">
          {/* Controls Bar: Search & Categories */}
          <ScrollReveal className="max-w-6xl mx-auto mb-10 space-y-6">
            {/* Search Input */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isBn
                    ? "নিবন্ধ বা বিষয়বস্তু খুঁজুন (যেমন: পেমেন্ট, ডেলিভারি, এসইও)..."
                    : "Search guides, strategies, and operational tips..."
                }
                className="w-full rounded-2xl border border-border bg-card pl-11 pr-10 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills (10 Categories) */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {BLOG_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const count =
                  cat.id === "all"
                    ? BLOG_POSTS.length
                    : BLOG_POSTS.filter((p) => p.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
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
          </ScrollReveal>

          {/* Results Summary if filtering */}
          {(searchQuery || selectedCategory !== "all") && (
            <div className="max-w-6xl mx-auto mb-6 flex items-center justify-between text-xs text-muted-foreground px-2">
              <span>
                {isBn
                  ? `মোট ${filteredPosts.length}টি নিবন্ধ পাওয়া গেছে`
                  : `Showing ${filteredPosts.length} article${filteredPosts.length === 1 ? "" : "s"}`}
              </span>
              {(searchQuery || selectedCategory !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="text-primary hover:underline cursor-pointer"
                >
                  {isBn ? "ফিল্টার মুছুন" : "Reset filters"}
                </button>
              )}
            </div>
          )}

          {/* Articles Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredPosts.map((post, idx) => (
                <ScrollReveal key={post.slug} delay={(idx % 3) * 70}>
                  <BlogCard post={post} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="max-w-md mx-auto text-center py-16 rounded-2xl border border-dashed border-border bg-card/40 p-8">
              <Inbox className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-60" />
              <h3 className="text-base font-bold text-foreground mb-1">
                {isBn ? "কোনো নিবন্ধ পাওয়া যায়নি" : "No articles found"}
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                {isBn
                  ? "আপনার অনুসন্ধানের সাথে মিলে এমন কোনো ফলাফল নেই। অন্য কোনো শব্দ অনুসন্ধান করুন।"
                  : "Try adjusting your search query or selecting a different category."}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-xs font-semibold text-primary-foreground cursor-pointer"
              >
                {isBn ? "সব নিবন্ধ দেখুন" : "View all articles"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Section 7: Newsletter Signup */}
      <BlogNewsletter />
    </article>
  );
}

