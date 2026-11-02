import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  sanitizeText,
  isValidEmail,
  isValidUrl,
  saveInquiry,
  DemoSubmission,
} from "@/lib/inquiries/inquiry-store";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";

    if (!checkRateLimit(ip, 5, 10 * 60 * 1000)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please wait a few minutes before submitting another demo request.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot trap
    if (body.website_hp && body.website_hp.length > 0) {
      return NextResponse.json({ success: true, message: "Request received." }, { status: 200 });
    }

    const fullName = sanitizeText(body.fullName);
    const workEmail = sanitizeText(body.workEmail);
    const businessName = sanitizeText(body.businessName);
    const businessCategory = sanitizeText(body.businessCategory);
    const businessSize = sanitizeText(body.businessSize);
    const inquiryType = sanitizeText(body.inquiryType);
    const preferredContactMethod = body.preferredContactMethod === "phone" ? "phone" : "email";
    const phone = sanitizeText(body.phone);
    const website = sanitizeText(body.website);
    const message = sanitizeText(body.message);
    const privacyAccepted = Boolean(body.privacyAccepted);

    const rawCapabilities = Array.isArray(body.requiredCapabilities) ? body.requiredCapabilities : [];
    const requiredCapabilities = rawCapabilities.map((c: unknown) => sanitizeText(c)).filter(Boolean);

    const errors: Record<string, string> = {};

    if (!fullName || fullName.length < 2) {
      errors.fullName = "Please enter your full name (at least 2 characters).";
    }

    if (!workEmail || !isValidEmail(workEmail)) {
      errors.workEmail = "Please enter a valid work email address.";
    }

    if (!businessName || businessName.length < 2) {
      errors.businessName = "Please enter your business or company name.";
    }

    if (!businessCategory) {
      errors.businessCategory = "Please select your business category.";
    }

    if (!businessSize) {
      errors.businessSize = "Please select your business stage or size.";
    }

    if (!inquiryType) {
      errors.inquiryType = "Please select an inquiry type.";
    }

    if (requiredCapabilities.length === 0) {
      errors.requiredCapabilities = "Please select at least one capability you are looking to explore.";
    }

    if (preferredContactMethod === "phone" && (!phone || phone.length < 7)) {
      errors.phone = "Phone number is required when phone is your preferred contact method.";
    }

    if (!privacyAccepted) {
      errors.privacyAccepted = "You must acknowledge the privacy notice to proceed.";
    }

    if (website && !isValidUrl(website)) {
      errors.website = "Please enter a valid website URL (e.g. yourstore.com).";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors,
          message: "Please review the highlighted fields.",
        },
        { status: 400 }
      );
    }

    const inquiryId = `dmo_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const demoInquiry: DemoSubmission = {
      id: inquiryId,
      type: "demo",
      fullName,
      workEmail,
      businessName,
      businessCategory,
      businessSize,
      inquiryType,
      requiredCapabilities,
      preferredContactMethod,
      phone: phone || undefined,
      website: website || undefined,
      message: message || undefined,
      privacyAccepted,
      createdAt: new Date().toISOString(),
      ipHash: ip.substring(0, 10),
    };

    const saved = await saveInquiry(demoInquiry);
    if (!saved) {
      return NextResponse.json(
        {
          success: false,
          message: "We encountered a temporary storage issue. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        inquiryId,
        message: "Thank you! Your demo request has been submitted successfully.",
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error processing demo request:", err);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

