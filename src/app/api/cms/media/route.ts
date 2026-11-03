import { NextRequest, NextResponse } from "next/server";
import { authenticateCMSRequest, canEdit } from "@/lib/cms/auth";
import { validateMediaUpload, sanitizeFilename } from "@/lib/cms/media-validator";
import { recordAuditLog } from "@/lib/cms/cms-store";
import { MediaAsset } from "@/lib/cms/types";

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
    const { filename, mimeType, sizeBytes, altText, caption } = body;

    const validation = validateMediaUpload({
      filename: filename || "asset.png",
      mimeType: mimeType || "image/png",
      sizeBytes: sizeBytes || 1024,
      altText,
      isImage: mimeType?.startsWith("image/"),
    });

    if (!validation.valid) {
      return NextResponse.json(
        { error: "Media validation failed", details: validation.errors },
        { status: 400 }
      );
    }

    const cleanFilename = sanitizeFilename(filename);
    const mediaId = `med_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const assetUrl = `/uploads/${cleanFilename}`;

    const asset: MediaAsset = {
      id: mediaId,
      filename: cleanFilename,
      originalName: filename,
      url: assetUrl,
      mimeType,
      sizeBytes,
      altText,
      caption,
      uploadedBy: auth.user.email,
      createdAt: new Date().toISOString(),
    };

    recordAuditLog({
      actor: auth.user.name,
      actorEmail: auth.user.email,
      action: "upload_media",
      contentType: "media",
      contentId: mediaId,
      details: `Validated & registered media asset "${cleanFilename}" (${sizeBytes} bytes, alt: "${altText}")`,
    });

    return NextResponse.json({
      success: true,
      asset,
      message: "Media asset validated and registered successfully.",
    });
  } catch (err) {
    console.error("Media POST error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

