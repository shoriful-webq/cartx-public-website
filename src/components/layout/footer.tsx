"use client";

import Link from "next/link";
import { ArrowUpRight, Activity } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card text-card-foreground mt-auto">
      <div className="container py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="flex size-7 items-center justify-center rounded-md bg-primary text-white font-bold text-xs tracking-tight shadow-xs">
              CX
            </div>
            <p>
              © {currentYear} {t("footer.rights")}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              {t("nav.contact")}
            </Link>
            <a
              href="https://status.cartx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-success bg-success/10 px-2.5 py-0.5 rounded-full hover:bg-success/20 transition-colors"
            >
              <Activity className="size-3" />
              <span>Status</span>
              <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
