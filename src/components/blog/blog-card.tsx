"use client";

import React from "react";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BlogPost, BLOG_CATEGORIES } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const catMeta = BLOG_CATEGORIES.find((c) => c.id === post.category);
  const categoryLabel = catMeta ? (isBn ? catMeta.nameBn : catMeta.nameEn) : post.category;

  return (
    <article
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/40 hover:shadow-card transition-all flex flex-col justify-between group",
        className
      )}
    >
      <div>
        {/* Category & Time */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
          <span className="inline-block rounded-md bg-primary/10 text-primary px-2.5 py-0.5 text-[11px] font-semibold">
            {categoryLabel}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{post.readTimeMinutes} {isBn ? "মি." : "min"}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2.5 leading-snug">
          <Link href={`/blog/${post.slug}`}>
            {isBn ? post.titleBn : post.titleEn}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
          {isBn ? post.excerptBn : post.excerptEn}
        </p>
      </div>

      {/* Author & Footer */}
      <div className="pt-4 border-t border-border/70 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-full bg-primary/15 text-primary text-[10px] font-bold flex items-center justify-center">
            {post.author.avatar}
          </div>
          <div>
            <span className="text-xs font-semibold text-foreground block">
              {post.author.name}
            </span>
            <span className="text-[10px] text-muted-foreground block flex items-center gap-1">
              <Calendar className="h-2.5 w-2.5" />
              <span>{post.publishedAt}</span>
            </span>
          </div>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="h-8 w-8 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors"
          aria-label={`Read ${isBn ? post.titleBn : post.titleEn}`}
        >
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

