import { NextRequest, NextResponse } from "next/server";
import { authenticateCMSRequest, canEdit, canPublish } from "@/lib/cms/auth";
import { getItems, getItemBySlug, saveItem } from "@/lib/cms/cms-store";
import { validateSEOMetadata } from "@/lib/cms/seo-validator";
import { BaseContentItem } from "@/lib/cms/types";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const collection = url.searchParams.get("collection") || "announcements";
    const slug = url.searchParams.get("slug");
    const preview = url.searchParams.get("preview") === "true";

    let includeDrafts = false;
    if (preview) {
      const auth = authenticateCMSRequest(req);
      if (auth.authenticated && auth.user) {
        includeDrafts = true;
      }
    }

    if (slug) {
      const item = getItemBySlug(collection, slug, includeDrafts);
      if (!item) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, item });
    }

    const items = getItems(collection, { includeDrafts });
    return NextResponse.json({ success: true, items, count: items.length });
  } catch (err) {
    console.error("CMS GET error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const auth = authenticateCMSRequest(req);
    if (!auth.authenticated || !auth.user) {
      return NextResponse.json({ error: auth.error || "Unauthorized" }, { status: 401 });
    }

    if (!canEdit(auth.user.role)) {
      return NextResponse.json({ error: "Forbidden: insufficient permissions" }, { status: 403 });
    }

    const body = await req.json();
    const { collection, item, comment } = body;

    if (!collection || !item || !item.title) {
      return NextResponse.json(
        { error: "Invalid request: collection and item with title are required" },
        { status: 400 }
      );
    }

    if (item.status === "published" && !canPublish(auth.user.role)) {
      return NextResponse.json(
        { error: "Forbidden: role cannot publish directly; set status to 'review' or 'draft'" },
        { status: 403 }
      );
    }

    if (item.seo) {
      const seoValidation = validateSEOMetadata(item.seo);
      if (!seoValidation.valid) {
        return NextResponse.json(
          { error: "SEO validation failed", details: seoValidation.errors },
          { status: 400 }
        );
      }
    }

    const result = saveItem<BaseContentItem>(collection, item, auth.user.email, comment);

    return NextResponse.json({
      success: result.success,
      item: result.item,
      message: `${collection} item created successfully`,
    });
  } catch (err) {
    console.error("CMS POST error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const auth = authenticateCMSRequest(req);
    if (!auth.authenticated || !auth.user) {
      return NextResponse.json({ error: auth.error || "Unauthorized" }, { status: 401 });
    }

    if (!canEdit(auth.user.role)) {
      return NextResponse.json({ error: "Forbidden: insufficient permissions" }, { status: 403 });
    }

    const body = await req.json();
    const { collection, item, comment } = body;

    if (!collection || !item || !item.id) {
      return NextResponse.json(
        { error: "Invalid request: collection and item with id are required" },
        { status: 400 }
      );
    }

    if (item.status === "published" && !canPublish(auth.user.role)) {
      return NextResponse.json(
        { error: "Forbidden: role cannot publish directly; set status to 'review' or 'draft'" },
        { status: 403 }
      );
    }

    if (item.seo) {
      const seoValidation = validateSEOMetadata(item.seo);
      if (!seoValidation.valid) {
        return NextResponse.json(
          { error: "SEO validation failed", details: seoValidation.errors },
          { status: 400 }
        );
      }
    }

    const result = saveItem<BaseContentItem>(collection, item, auth.user.email, comment);

    return NextResponse.json({
      success: result.success,
      item: result.item,
      message: `${collection} item updated successfully`,
    });
  } catch (err) {
    console.error("CMS PUT error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

