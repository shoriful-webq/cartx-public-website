"use client";

import Link from "next/link";
import { ArrowUpRight, Activity, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  // Official verified contact information - configurable via env
  const officialSupportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@cartx.com";
  const officialBusinessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || null;
  const officialBusinessAddress = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || null;
  const docsUrl = process.env.NEXT_PUBLIC_DOCS_URL || "/help";

  return (
    <footer className="border-t border-border bg-card text-card-foreground mt-auto">
      {/* Main Multi-Column Grid */}
      <div className="container py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-6">
          {/* Column 1: Brand & Overview (Spans 2 columns on lg) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 pr-0 lg:pr-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-ring group select-none mb-3"
              aria-label="CartX Home"
            >
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm tracking-tight shadow-xs transition-transform group-hover:scale-105">
                CX
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Cart<span className="text-primary font-extrabold">X</span>
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4 max-w-sm">
              {t("footer.brandDescription")}
            </p>
            <div className="pt-1">
              <a
                href="https://status.cartx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-success bg-success/10 px-2.5 py-1 rounded-full hover:bg-success/20 focus-visible:outline-2 focus-visible:outline-ring transition-colors"
              >
                <Activity className="size-3" />
                <span>{t("footer.status")}</span>
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
              {t("footer.colProduct")}
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/features" className="hover:text-foreground transition-colors">
                  {t("footer.features")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-foreground transition-colors">
                  {t("footer.pricing")}
                </Link>
              </li>
              <li>
                <Link href="/themes" className="hover:text-foreground transition-colors">
                  {t("footer.themes")}
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-foreground transition-colors">
                  {t("footer.integrations")}
                </Link>
              </li>
              <li>
                <Link href="/white-label-apps" className="hover:text-foreground transition-colors">
                  {t("footer.whiteLabelApps")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
              {t("footer.colSolutions")}
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/solutions/fashion-apparel" className="hover:text-foreground transition-colors">
                  {t("footer.solFashion")}
                </Link>
              </li>
              <li>
                <Link href="/solutions/electronics-gadgets" className="hover:text-foreground transition-colors">
                  {t("footer.solElectronics")}
                </Link>
              </li>
              <li>
                <Link href="/solutions/cosmetics-beauty" className="hover:text-foreground transition-colors">
                  {t("footer.solCosmetics")}
                </Link>
              </li>
              <li>
                <Link href="/solutions/grocery-organic-food" className="hover:text-foreground transition-colors">
                  {t("footer.solGrocery")}
                </Link>
              </li>
              <li>
                <Link href="/solutions/home-lifestyle" className="hover:text-foreground transition-colors">
                  {t("footer.solHome")}
                </Link>
              </li>
              <li>
                <Link href="/solutions/books-stationery" className="hover:text-foreground transition-colors">
                  {t("footer.solBooks") || "Books & Stationery"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
              {t("footer.colResources")}
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  {t("footer.blog")}
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-foreground transition-colors">
                  {t("footer.helpCenter")}
                </Link>
              </li>
              <li>
                <Link href={docsUrl} className="hover:text-foreground transition-colors">
                  {t("footer.documentation")}
                </Link>
              </li>
              <li>
                <Link href="/demo-stores" className="hover:text-foreground transition-colors">
                  {t("footer.demoStores")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
              {t("footer.colCompany")}
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  {t("footer.contactUs")}
                </Link>
              </li>
              <li>
                <Link href="/book-demo" className="hover:text-foreground transition-colors">
                  {t("footer.bookDemo")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 6: Legal & Support */}
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
              {t("footer.colLegal")}
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-foreground transition-colors">
                  {t("footer.refund")}
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-foreground transition-colors">
                  {t("footer.cookie")}
                </Link>
              </li>
              <li>
                <Link href="/acceptable-use" className="hover:text-foreground transition-colors">
                  {t("footer.acceptableUse")}
                </Link>
              </li>
            </ul>

            {/* Support section under legal or right */}
            <div className="mt-4 pt-3 border-t border-border/60">
              <p className="text-[11px] font-bold text-foreground uppercase tracking-wider mb-1.5">
                {t("footer.colSupport")}
              </p>
              <div className="space-y-1.5 text-[11px] text-muted-foreground">
                <a
                  href={`mailto:${officialSupportEmail}`}
                  className="flex items-center gap-1.5 hover:text-primary transition-colors truncate"
                  title={officialSupportEmail}
                >
                  <Mail className="size-3 text-primary shrink-0" />
                  <span className="truncate">{officialSupportEmail}</span>
                </a>
                {officialBusinessPhone && (
                  <p className="flex items-center gap-1.5">
                    <Phone className="size-3 text-primary shrink-0" />
                    <span>{officialBusinessPhone}</span>
                  </p>
                )}
                {officialBusinessAddress && (
                  <p className="flex items-start gap-1.5">
                    <MapPin className="size-3 text-primary shrink-0 mt-0.5" />
                    <span>{officialBusinessAddress}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright Notice */}
        <div className="mt-12 pt-6 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} {t("footer.rights")}</p>
          <p className="text-center sm:text-right">
            <span>Official commerce cloud service status: </span>
            <a
              href="https://status.cartx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              status.cartx.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
