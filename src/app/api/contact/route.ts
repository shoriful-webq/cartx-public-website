import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  sanitizeText,
  isValidEmail,
  isValidUrl,
  saveInquiry,
  ContactSubmission,
} from "@/lib/inquiries/inquiry-store";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";

    // Rate limiting check
    if (!checkRateLimit(ip, 5, 10 * 60 * 1000)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please wait a few minutes before submitting another message.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Spam honeypot trap
    if (body.website_hp && body.website_hp.length > 0) {
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    const fullName = sanitizeText(body.fullName);
    const email = sanitizeText(body.email);
    const subject = sanitizeText(body.subject);
    const message = sanitizeText(body.message);
    const companyName = sanitizeText(body.companyName);
    const phone = sanitizeText(body.phone);
    const website = sanitizeText(body.website);
    const preferredContactMethod = body.preferredContactMethod === "phone" ? "phone" : "email";
    const privacyAccepted = Boolean(body.privacyAccepted);

    const errors: Record<string, string> = {};

    if (!fullName || fullName.length < 2) {
      errors.fullName = "Please enter your full name (at least 2 characters).";
    }

    if (!email || !isValidEmail(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!subject) {
      errors.subject = "Please select an inquiry category.";
    }

    if (!message || message.length < 10) {
      errors.message = "Please enter a message with at least 10 characters.";
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

    const inquiryId = `cnt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const inquiry: ContactSubmission = {
      id: inquiryId,
      type: "contact",
      fullName,
      email,
      subject,
      message,
      companyName: companyName || undefined,
      phone: phone || undefined,
      website: website || undefined,
      preferredContactMethod,
      privacyAccepted,
      createdAt: new Date().toISOString(),
      ipHash: ip.substring(0, 10), // partial hash for logging without storing full PII
    };

    const saved = await saveInquiry(inquiry);
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
        message: "Thank you! Your message has been submitted successfully.",
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error processing contact inquiry:", err);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

