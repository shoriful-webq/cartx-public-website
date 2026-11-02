import fs from "fs";
import path from "path";

export interface ContactSubmission {
  id: string;
  type: "contact";
  fullName: string;
  email: string;
  subject: string;
  message: string;
  companyName?: string;
  phone?: string;
  website?: string;
  preferredContactMethod?: "email" | "phone";
  privacyAccepted: boolean;
  createdAt: string;
  ipHash: string;
}

export interface DemoSubmission {
  id: string;
  type: "demo";
  fullName: string;
  workEmail: string;
  businessName: string;
  businessCategory: string;
  businessSize: string;
  inquiryType: string;
  requiredCapabilities: string[];
  preferredContactMethod: "email" | "phone";
  phone?: string;
  website?: string;
  message?: string;
  privacyAccepted: boolean;
  createdAt: string;
  ipHash: string;
}

export type StoredInquiry = ContactSubmission | DemoSubmission;

// Rate limiting in-memory bucket (IP hash -> array of timestamp ms)
const rateLimitMap = new Map<string, number[]>();

export function checkRateLimit(ip: string, maxRequests = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < windowMs);

  if (validTimestamps.length >= maxRequests) {
    return false; // Rate limit exceeded
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return true;
}

export function sanitizeText(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .trim();
}

export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}

export function isValidUrl(url: string): boolean {
  if (!url) return true; // Optional field
  try {
    const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

const DATA_DIR = path.join(process.cwd(), ".data");
const INQUIRIES_FILE = path.join(DATA_DIR, "inquiries.json");

// Save inquiry to disk
export async function saveInquiry(inquiry: StoredInquiry): Promise<boolean> {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    let existing: StoredInquiry[] = [];
    if (fs.existsSync(INQUIRIES_FILE)) {
      try {
        const raw = fs.readFileSync(INQUIRIES_FILE, "utf-8");
        existing = JSON.parse(raw);
        if (!Array.isArray(existing)) {
          existing = [];
        }
      } catch {
        existing = [];
      }
    }

    existing.push(inquiry);
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(existing, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Failed to persist inquiry to disk:", err);
    return false;
  }
}

