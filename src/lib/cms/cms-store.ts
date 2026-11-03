/**
 * CartX CMS Persistence Store
 * Provides robust content management, revisions, scheduled publishing, and audit logs.
 */

import fs from "fs";
import path from "path";
import {
  BaseContentItem,
  ContentRevision,
  AuditLog,
  CMSAnnouncement,
  CMSPageSEO,
} from "./types";

const CMS_DATA_DIR = path.join(process.cwd(), ".data", "cms");

function ensureDirectory() {
  if (!fs.existsSync(CMS_DATA_DIR)) {
    fs.mkdirSync(CMS_DATA_DIR, { recursive: true });
  }
}

function getFilePath(collection: string): string {
  ensureDirectory();
  return path.join(CMS_DATA_DIR, `${collection}.json`);
}

function readCollection<T>(collection: string): T[] {
  const filePath = getFilePath(collection);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error(`Error reading CMS collection ${collection}:`, err);
    return [];
  }
}

function writeCollection<T>(collection: string, items: T[]): boolean {
  const filePath = getFilePath(collection);
  try {
    ensureDirectory();
    fs.writeFileSync(filePath, JSON.stringify(items, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error(`Error writing CMS collection ${collection}:`, err);
    return false;
  }
}

/* ── Audit Logs & Revisions ── */

export function recordAuditLog(log: Omit<AuditLog, "id" | "timestamp">): void {
  const logs = readCollection<AuditLog>("audit_logs");
  const newLog: AuditLog = {
    ...log,
    id: `log_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString(),
  };
  logs.unshift(newLog); // latest first
  // Keep last 1,000 audit logs
  writeCollection("audit_logs", logs.slice(0, 1000));
}

export function recordRevision(revision: Omit<ContentRevision, "id" | "timestamp">): void {
  const revisions = readCollection<ContentRevision>("revisions");
  const newRevision: ContentRevision = {
    ...revision,
    id: `rev_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString(),
  };
  revisions.unshift(newRevision);
  // Keep last 500 revisions
  writeCollection("revisions", revisions.slice(0, 500));
}

export function getRevisionsForContent(contentId: string): ContentRevision[] {
  const revisions = readCollection<ContentRevision>("revisions");
  return revisions.filter((r) => r.contentId === contentId);
}

/* ── Generic CRUD Operations ── */

export function getItems<T extends BaseContentItem>(
  collection: string,
  options?: {
    includeDrafts?: boolean;
    category?: string;
  }
): T[] {
  initializeSeedDataIfEmpty();
  const items = readCollection<T>(collection);
  const now = new Date();

  return items
    .filter((item) => {
      if (options?.includeDrafts) {
        return true;
      }
      // Public filter: Must be published
      if (item.status !== "published") {
        return false;
      }
      // Scheduled publishing check
      if (item.scheduledAt) {
        const scheduled = new Date(item.scheduledAt);
        if (scheduled > now) {
          return false; // Not yet published
        }
      }
      return true;
    })
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getItemBySlug<T extends BaseContentItem>(
  collection: string,
  slug: string,
  includeDrafts = false
): T | null {
  const items = getItems<T>(collection, { includeDrafts });
  return items.find((item) => item.slug === slug) || null;
}

export function saveItem<T extends BaseContentItem>(
  collection: string,
  item: T,
  actorEmail: string,
  comment?: string
): { success: boolean; item: T } {
  initializeSeedDataIfEmpty();
  const items = readCollection<T>(collection);
  const existingIdx = items.findIndex((i) => i.id === item.id);

  const now = new Date().toISOString();
  let updatedItem: T;

  if (existingIdx >= 0) {
    const prev = items[existingIdx];
    updatedItem = {
      ...prev,
      ...item,
      version: (prev.version || 1) + 1,
      updatedAt: now,
      updatedBy: actorEmail,
      publishedAt:
        item.status === "published" && !prev.publishedAt
          ? now
          : item.publishedAt || prev.publishedAt,
    };
    items[existingIdx] = updatedItem;

    recordRevision({
      contentId: updatedItem.id,
      contentType: collection,
      version: updatedItem.version,
      status: updatedItem.status,
      snapshot: updatedItem as unknown as Record<string, unknown>,
      author: actorEmail,
      comment: comment || `Updated to version ${updatedItem.version}`,
    });

    recordAuditLog({
      actor: actorEmail.split("@")[0] || "admin",
      actorEmail,
      action: item.status === "published" ? "publish" : "update",
      contentType: collection,
      contentId: updatedItem.id,
      details: `Saved ${collection} item "${updatedItem.title}" (status: ${updatedItem.status})`,
    });
  } else {
    updatedItem = {
      ...item,
      id: item.id || `cms_${collection}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      version: 1,
      createdAt: now,
      updatedAt: now,
      createdBy: actorEmail,
      updatedBy: actorEmail,
      publishedAt: item.status === "published" ? now : null,
    };
    items.push(updatedItem);

    recordRevision({
      contentId: updatedItem.id,
      contentType: collection,
      version: 1,
      status: updatedItem.status,
      snapshot: updatedItem as unknown as Record<string, unknown>,
      author: actorEmail,
      comment: comment || "Initial creation",
    });

    recordAuditLog({
      actor: actorEmail.split("@")[0] || "admin",
      actorEmail,
      action: "create",
      contentType: collection,
      contentId: updatedItem.id,
      details: `Created new ${collection} item "${updatedItem.title}"`,
    });
  }

  const success = writeCollection(collection, items);
  return { success, item: updatedItem };
}

/* ── Default Seed Data Initializer ── */
let initialized = false;

export function initializeSeedDataIfEmpty(): void {
  if (initialized) return;
  initialized = true;

  ensureDirectory();

  // 1. Announcements seed
  const announcementsPath = getFilePath("announcements");
  if (!fs.existsSync(announcementsPath)) {
    const defaultAnnouncements: CMSAnnouncement[] = [
      {
        id: "ann_01",
        slug: "zero-commission-launch",
        title: "0% Platform Commission Launch",
        badgeEn: "New",
        badgeBn: "নতুন",
        messageEn: "CartX is now available in Bangladesh with 0% platform transaction fees and bKash integration.",
        messageBn: "০% প্ল্যাটফর্ম লেনদেন ফি এবং বিকাশ পেমেন্ট সুবিধা সহ কার্টএক্স এখন বাংলাদেশে সম্পূর্ণ প্রস্তুত।",
        linkTextEn: "Explore Features",
        linkTextBn: "ফিচার দেখুন",
        href: "/features",
        status: "published",
        sortOrder: 1,
        version: 1,
        active: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        createdBy: "system@cartx.com",
        updatedBy: "system@cartx.com",
        publishedAt: new Date().toISOString(),
      },
    ];
    writeCollection("announcements", defaultAnnouncements);
  }

  // 2. Default Page SEO Seed
  const seoPath = getFilePath("page_seo");
  if (!fs.existsSync(seoPath)) {
    const defaultPageSEO: CMSPageSEO[] = [
      {
        id: "seo_home",
        slug: "home",
        routePath: "/",
        title: "Homepage SEO",
        status: "published",
        sortOrder: 1,
        version: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        createdBy: "system@cartx.com",
        updatedBy: "system@cartx.com",
        publishedAt: new Date().toISOString(),
        seo: {
          metaTitle: "CartX — Build and Manage Your Online Store",
          metaDescription:
            "Explore CartX, an e-commerce SaaS platform designed to help businesses manage online stores, products, orders, payments and delivery workflows.",
          canonicalUrl: "https://cartx.com",
          ogType: "website",
        },
      },
    ];
    writeCollection("page_seo", defaultPageSEO);
  }
}
