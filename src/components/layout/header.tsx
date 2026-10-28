"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Smartphone,
  Store,
  Layers,
} from "lucide-react";

interface NavLinkItem {
  name: string;
  href: string;
}

const CENTER_NAV_LINKS: NavLinkItem[] = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Solutions", href: "/solutions" },
  { name: "Themes", href: "/themes" },
  { name: "Integrations", href: "/integrations" },
  { name: "Pricing", href: "/pricing" },
];

const RESOURCE_LINKS = [
  {
    name: "Blog & Guides",
    href: "/blog",
    description: "E-commerce strategy, playbooks, and conversion optimization.",
    icon: BookOpen,
  },
  {
    name: "Help Center & FAQ",
    href: "/help",
    description: "Setup guides, gateway connections, and courier documentation.",
    icon: HelpCircle,
  },
  {
    name: "Demo Stores",
    href: "/demo-stores",
    description: "Explore interactive storefront samples across retail verticals.",
    icon: Store,
  },
  {
    name: "White-Label Mobile Apps",
    href: "/white-label-apps",
    description: "Dedicated iOS & Android shopping apps with push notifications.",
    icon: Smartphone,
  },
  {
    name: "How It Works",
    href: "/how-it-works",
    description: "A 4-step merchant guide from onboarding to delivery fulfillment.",
    icon: Layers,
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"en" | "bn">("en");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Esc
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setResourcesOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Track previous pathname during render to auto-close menus on route change without cascading effect
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setResourcesOpen(false);
  }

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isResourceActive = RESOURCE_LINKS.some((r) => pathname.startsWith(r.href));

  const toggleLanguage = () => {
    const nextLang = currentLang === "en" ? "bn" : "en";
    setCurrentLang(nextLang);
    document.documentElement.lang = nextLang;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur-md transition-colors">
      <div className="container flex h-16 items-center justify-between">
        {/* Left: CartX Wordmark Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-ring group select-none"
            aria-label="CartX Home"
          >
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm tracking-tight shadow-xs transition-transform group-hover:scale-105">
              CX
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Cart<span className="text-primary font-extrabold">X</span>
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-[13px] font-medium tracking-normal"
          aria-label="Primary Navigation"
        >
          {CENTER_NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-md transition-colors ${
                  active
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Resources Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setResourcesOpen((prev) => !prev)}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors select-none ${
                isResourceActive || resourcesOpen
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              <span>Resources</span>
              <ChevronDown
                className={`size-3.5 opacity-70 transition-transform duration-200 ${
                  resourcesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {resourcesOpen && (
              <div
                role="menu"
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 rounded-xl border border-border bg-card p-1.5 shadow-dropdown animate-in fade-in-50 zoom-in-95 z-50"
              >
                <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80 border-b border-border/50 mb-1">
                  Resources & Solutions
                </div>
                {RESOURCE_LINKS.map((res) => {
                  const ResIcon = res.icon;
                  const resActive = pathname.startsWith(res.href);
                  return (
                    <Link
                      key={res.href}
                      href={res.href}
                      role="menuitem"
                      className={`flex items-start gap-3 rounded-lg p-2.5 transition-colors ${
                        resActive
                          ? "bg-primary/5 text-primary"
                          : "hover:bg-muted/60 text-foreground"
                      }`}
                    >
                      <div className="size-7 rounded-md bg-muted flex items-center justify-center shrink-0 mt-0.5 text-primary">
                        <ResIcon className="size-3.5" />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-xs font-semibold leading-tight ${resActive ? "text-primary" : "text-foreground"}`}>
                          {res.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground leading-snug truncate mt-0.5">
                          {res.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Contact Us Link */}
          <Link
            href="/contact"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              isLinkActive("/contact")
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
            }`}
            aria-current={isLinkActive("/contact") ? "page" : undefined}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right: Controls & Primary CTA (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-ring transition-colors"
            aria-label="Toggle language between English and Bangla"
          >
            <Globe className="size-3.5 opacity-70" />
            <span>{currentLang === "en" ? "বাংলা" : "English"}</span>
          </button>

          <div className="h-4 w-px bg-border/80" aria-hidden="true" />

          {/* Log In */}
          <Link
            href="/start"
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5"
          >
            Log In
          </Link>

          {/* Primary CTA: Start Your Store */}
          <Link
            href="/start"
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-ring transition-colors"
          >
            Start Your Store
          </Link>
        </div>

        {/* Mobile: Hamburger & Quick Switch */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs font-medium px-2 py-1.5 rounded-md border border-border bg-card text-foreground"
            aria-label="Switch language"
          >
            <Globe className="size-3 text-primary" />
            <span>{currentLang === "en" ? "বাং" : "EN"}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="rounded-md p-1.5 text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring transition-colors"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="lg:hidden border-t border-border bg-card px-4 py-5 shadow-modal animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col space-y-4">
            <nav className="flex flex-col space-y-0.5" aria-label="Mobile Navigation">
              {CENTER_NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="size-1.5 rounded-full bg-primary" />}
                  </Link>
                );
              })}

              {/* Resources section on mobile */}
              <div className="pt-2 pb-1 border-t border-border/60 mt-2">
                <span className="px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80">
                  Resources & Solutions
                </span>
              </div>
              {RESOURCE_LINKS.map((res) => {
                const ResIcon = res.icon;
                const active = pathname.startsWith(res.href);
                return (
                  <Link
                    key={res.href}
                    href={res.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                      active
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <ResIcon className="size-4 text-primary shrink-0" />
                    <span>{res.name}</span>
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium mt-1 border-t border-border/60 ${
                  isLinkActive("/contact")
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <span>Contact Us</span>
              </Link>
            </nav>

            {/* Mobile Actions */}
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <Link
                href="/start"
                className="w-full text-center py-2 text-xs font-medium text-foreground hover:text-primary border border-border rounded-md bg-background transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/start"
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-md bg-primary py-2.5 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-ring transition-colors"
              >
                Start Your Store <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
