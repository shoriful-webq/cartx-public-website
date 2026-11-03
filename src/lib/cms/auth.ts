/**
 * CartX CMS Authorization & RBAC
 * Verifies caller roles and separates editing and publishing permissions
 */

import { NextRequest } from "next/server";
import { UserRole, CMSUser } from "./types";

// Standard administrative API key or JWT bearer token evaluation
const ADMIN_API_KEY = process.env.CMS_ADMIN_API_KEY || "cartx_super_admin_secret_key_prod";
const EDITOR_API_KEY = process.env.CMS_EDITOR_API_KEY || "cartx_editor_secret_key_prod";

export function authenticateCMSRequest(req: NextRequest): {
  authenticated: boolean;
  user?: CMSUser;
  error?: string;
} {
  const authHeader = req.headers.get("authorization") || req.headers.get("x-cms-api-key");

  if (!authHeader) {
    return {
      authenticated: false,
      error: "Missing CMS authorization credentials.",
    };
  }

  const token = authHeader.replace(/^Bearer\s+/i, "").trim();

  // Role resolution
  if (token === ADMIN_API_KEY) {
    return {
      authenticated: true,
      user: {
        id: "usr_superadmin_01",
        name: "Super Admin",
        email: "superadmin@cartx.com",
        role: "super_admin",
      },
    };
  }

  if (token === EDITOR_API_KEY) {
    return {
      authenticated: true,
      user: {
        id: "usr_editor_01",
        name: "Marketing Content Editor",
        email: "editor@cartx.com",
        role: "editor",
      },
    };
  }

  return {
    authenticated: false,
    error: "Invalid or unauthorized CMS access token.",
  };
}

export function canPublish(role: UserRole): boolean {
  return role === "super_admin" || role === "editor";
}

export function canEdit(role: UserRole): boolean {
  return role === "super_admin" || role === "editor" || role === "author";
}

export function canDelete(role: UserRole): boolean {
  return role === "super_admin";
}

