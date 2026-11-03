/**
 * CartX Public Website CMS Content Service
 * Seamlessly integrates published CMS records with safe, guaranteed fallbacks.
 * Preserves zero downtime, avoids layout shifts, and ensures graceful degradation.
 */

import {
  getItems,
} from "./cms-store";
import {
  CMSAnnouncement,
  CMSPageSEO,
  CMSBlogPost,
} from "./types";
import { BLOG_POSTS, BlogPost } from "@/lib/blog-data";

/**
 * Get active, published marketing announcement for the AnnouncementBar.
 * Falls back to null so AnnouncementBar uses default internationalized strings.
 */
export function getActiveAnnouncement(): CMSAnnouncement | null {
  try {
    const announcements = getItems<CMSAnnouncement>("announcements");
    const active = announcements.find((a) => a.active);
    return active || null;
  } catch (err) {
    console.error("Failed to load CMS announcements, using fallback:", err);
    return null;
  }
}

/**
 * Get published SEO metadata for a specific route.
 * Returns null if not explicitly overridden in CMS, allowing the static page metadata to apply.
 */
export function getPageSEOMetadata(routePath: string): CMSPageSEO | null {
  try {
    const seoEntries = getItems<CMSPageSEO>("page_seo");
    const match = seoEntries.find((s) => s.routePath === routePath);
    return match || null;
  } catch (err) {
    console.error(`Failed to load CMS SEO for ${routePath}:`, err);
    return null;
  }
}

/**
 * Get published blog posts from CMS, falling back to static BLOG_POSTS.
 */
export function getPublishedBlogPosts(): BlogPost[] {
  try {
    const cmsPosts = getItems<CMSBlogPost>("blog_posts");
    if (cmsPosts && cmsPosts.length > 0) {
      // Map CMSBlogPost to BlogPost interface
      return cmsPosts.map((cp) => ({
        slug: cp.slug,
        category: (cp.category as BlogPost["category"]) || "ecommerce-strategy",
        titleEn: cp.title,
        titleBn: cp.titleBn || cp.title,
        excerptEn: cp.excerptEn,
        excerptBn: cp.excerptBn || cp.excerptEn,
        author: {
          name: cp.authorName || "CartX Team",
          roleEn: cp.authorRole || "Platform Specialist",
          roleBn: "প্ল্যাটফর্ম বিশেষজ্ঞ",
          avatar: cp.authorAvatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        },
        publishedAt: cp.publishedAt ? new Date(cp.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Nov 2026",
        readTimeMinutes: cp.readTimeMinutes || 5,
        featured: cp.featured,
        tableOfContents: [],
        contentSections: [
          {
            id: "main-content",
            headingEn: "Overview",
            headingBn: "সারসংক্ষেপ",
            bodyEn: [cp.bodyEn],
            bodyBn: [cp.bodyBn || cp.bodyEn],
          },
        ],
      }));
    }
  } catch (err) {
    console.error("Failed to load CMS blog posts, using fallback:", err);
  }

  // Guaranteed safe fallback
  return BLOG_POSTS;
}

/**
 * Get a single blog post by slug with safe static fallback.
 */
export function getPublishedBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getPublishedBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}
