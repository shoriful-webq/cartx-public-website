"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BlogPost } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

interface BlogFeaturedProps {
  post: BlogPost;
  className?: string;
}

export function BlogFeatured({ post, className }: BlogFeaturedProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Featured Article"
      className={cn("py-8 border-b border-border bg-card/20 transition-colors", className)}
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto rounded-3xl border border-border bg-card shadow-sm hover:border-primary/40 transition-all overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Cover Accent Banner */}
            <div className="lg:col-span-5 bg-gradient-to-br from-primary/20 via-primary/10 to-muted p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{isBn ? "নির্বাচিত গাইড" : "Featured Guide"}</span>
                </span>
                <div className="text-xl sm:text-2xl font-mono font-bold text-foreground/80 mt-2">
                  2026 EDITION
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-xs">
                    {post.author.avatar}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block">
                      {post.author.name}
                    </span>
                    <span className="text-[11px] text-muted-foreground block">
                      {isBn ? post.author.roleBn : post.author.roleEn}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{post.publishedAt}</span>
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTimeMinutes} {isBn ? "মিনিট পাঠ" : "min read"}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {isBn ? post.titleBn : post.titleEn}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {isBn ? post.excerptBn : post.excerptEn}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:underline cursor-pointer"
                >
                  <span>{isBn ? "পুরো গাইডটি পড়ুন" : "Read Full Article"}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

