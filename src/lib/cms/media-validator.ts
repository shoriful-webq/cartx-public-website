/**
 * CartX CMS Media Validator
 * Validates file sizes, MIME types, safe filenames, and mandatory alt text
 */

export const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
  "application/pdf",
];

export const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB max

export interface MediaValidationResult {
  valid: boolean;
  errors: string[];
}

export function validateMediaUpload(params: {
  filename: string;
  mimeType: string;
  sizeBytes: number;
  altText?: string;
  isImage?: boolean;
}): MediaValidationResult {
  const errors: string[] = [];

  // 1. File extension & MIME validation
  if (!ALLOWED_MIME_TYPES.includes(params.mimeType.toLowerCase())) {
    errors.push(
      `Unsupported file format (${params.mimeType}). Allowed formats: JPEG, PNG, WebP, SVG, PDF.`
    );
  }

  // 2. File size validation
  if (params.sizeBytes <= 0) {
    errors.push("Uploaded file is empty.");
  } else if (params.sizeBytes > MAX_FILE_SIZE_BYTES) {
    errors.push(
      `File exceeds maximum permitted size of ${MAX_FILE_SIZE_BYTES / (1024 * 1024)} MB.`
    );
  }

  // 3. Dangerous filename pattern prevention
  const safeFilenamePattern = /^[a-zA-Z0-9._-]+$/;
  if (!safeFilenamePattern.test(params.filename)) {
    errors.push(
      "Filename contains invalid or dangerous characters. Only alphanumeric, dots, underscores, and hyphens are allowed."
    );
  }

  // 4. Mandatory alt text for images
  const isImage = params.mimeType.startsWith("image/");
  if (isImage) {
    if (!params.altText || params.altText.trim().length < 5) {
      errors.push("Meaningful alt text (at least 5 characters) is required for all informative images.");
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function sanitizeFilename(filename: string): string {
  return filename
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "-")
    .replace(/-+/g, "-");
}

