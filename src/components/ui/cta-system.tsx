import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CTAConfigItem {
  key: string;
  href: string;
  labelEn: string;
  labelBn: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
  external?: boolean;
}

export const GLOBAL_CTAS: Record<string, CTAConfigItem> = {
  startStore: {
    key: "cta.startStore",
    href: "/start",
    labelEn: "Start Your Store",
    labelBn: "স্টোর শুরু করুন",
    variant: "primary",
    external: false,
  },
  exploreFeatures: {
    key: "cta.exploreFeatures",
    href: "/features",
    labelEn: "Explore Features",
    labelBn: "ফিচারসমূহ দেখুন",
    variant: "secondary",
    external: false,
  },
  viewPricing: {
    key: "cta.viewPricing",
    href: "/pricing",
    labelEn: "View Pricing",
    labelBn: "প্রাইসিং দেখুন",
    variant: "outline",
    external: false,
  },
  exploreThemes: {
    key: "cta.exploreThemes",
    href: "/themes",
    labelEn: "Explore Themes",
    labelBn: "থিমসমূহ দেখুন",
    variant: "outline",
    external: false,
  },
  viewDemoStore: {
    key: "cta.viewDemoStore",
    href: "/demo-stores",
    labelEn: "View Demo Store",
    labelBn: "ডেমো স্টোর দেখুন",
    variant: "outline",
    external: false,
  },
  exploreIntegrations: {
    key: "cta.exploreIntegrations",
    href: "/integrations",
    labelEn: "Explore Integrations",
    labelBn: "ইন্টিগ্রেশন দেখুন",
    variant: "outline",
    external: false,
  },
  bookDemo: {
    key: "cta.bookDemo",
    href: "/book-demo",
    labelEn: "Book a Demo",
    labelBn: "ডেমো বুক করুন",
    variant: "outline",
    external: false,
  },
  contactSales: {
    key: "cta.contactSales",
    href: "/contact",
    labelEn: "Contact Sales",
    labelBn: "সেলস টিমের সাথে যোগাযোগ",
    variant: "outline",
    external: false,
  },
  talkToSupport: {
    key: "cta.talkToSupport",
    href: process.env.NEXT_PUBLIC_SUPPORT_URL || "/contact",
    labelEn: "Talk to Support",
    labelBn: "সাপোর্টের সাথে কথা বলুন",
    variant: "outline",
    external: Boolean(process.env.NEXT_PUBLIC_SUPPORT_URL),
  },
};

export type CTAKey =
  | "startStore"
  | "exploreFeatures"
  | "viewPricing"
  | "exploreThemes"
  | "viewDemoStore"
  | "exploreIntegrations"
  | "bookDemo"
  | "contactSales"
  | "talkToSupport";

interface CTAButtonProps {
  action: CTAKey;
  locale?: "en" | "bn";
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  showArrow?: boolean;
}

export function CTAButton({
  action,
  locale = "en",
  className,
  size = "md",
  variant,
  showArrow = false,
}: CTAButtonProps) {
  const cta = GLOBAL_CTAS[action];
  const finalVariant = variant || cta.variant;
  const label = locale === "bn" ? cta.labelBn : cta.labelEn;

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs font-semibold rounded-md",
    md: "px-4 py-2 text-xs font-semibold rounded-md",
    lg: "px-5 py-2.5 text-sm font-semibold rounded-md",
  }[size];

  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary-hover shadow-xs focus-visible:outline-2 focus-visible:outline-ring",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:outline-2 focus-visible:outline-ring",
    outline:
      "border border-border bg-card text-foreground hover:bg-muted/80 focus-visible:outline-2 focus-visible:outline-ring",
    ghost:
      "text-muted-foreground hover:text-foreground hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-ring",
  }[finalVariant];

  const commonClass = cn(
    "inline-flex items-center justify-center gap-1.5 transition-colors select-none",
    sizeClasses,
    variantClasses,
    className
  );

  if (cta.external) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClass}
      >
        <span>{label}</span>
        <ExternalLink className="size-3.5 opacity-70" />
      </a>
    );
  }

  return (
    <Link href={cta.href} className={commonClass}>
      <span>{label}</span>
      {showArrow && <ArrowRight className="size-3.5" />}
    </Link>
  );
}

