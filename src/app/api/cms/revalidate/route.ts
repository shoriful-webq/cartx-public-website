import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { authenticateCMSRequest, canPublish } from "@/lib/cms/auth";

export async function POST(req: NextRequest) {
  try {
    const auth = authenticateCMSRequest(req);
    if (!auth.authenticated || !auth.user) {
      return NextResponse.json({ error: auth.error || "Unauthorized" }, { status: 401 });
    }

    if (!canPublish(auth.user.role)) {
      return NextResponse.json(
        { error: "Forbidden: publishing permissions required to trigger cache revalidation" },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { path: targetPath } = body;

    if (!targetPath || typeof targetPath !== "string") {
      return NextResponse.json(
        { error: "Missing required 'path' parameter (e.g. '/blog' or '/features')" },
        { status: 400 }
      );
    }

    // Revalidate the requested path in Next.js cache
    revalidatePath(targetPath);

    return NextResponse.json({
      success: true,
      revalidated: true,
      path: targetPath,
      timestamp: new Date().toISOString(),
      message: `Successfully revalidated cache for ${targetPath}`,
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

