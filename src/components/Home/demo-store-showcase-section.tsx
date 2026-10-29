"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Store,
  Smartphone,
  Shirt,
  Laptop,
  Heart,
  ArrowRight,
  ShoppingBag,
  Search,
  Star,
  CheckCircle2,
  ShieldCheck,
  Eye,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface DemoProductItem {
  title: string;
  badge: string;
  spec: string;
  price: string;
  originalPrice: string;
  rating: string;
  icon: LucideIcon;
  bgGradient: string;
}

interface DemoStoreCard {
  id: string;
  nameKey: string;
  categoryKey: string;
  themeKey: string;
  descKey: string;
  categoryNumber: string;
  categoryLabel: string;
  icon: LucideIcon;
  badgeBg: string;
  badgeColor: string;
  domain: string;
  brandName: string;
  navLinks: string[];
  heroTagline: string;
  heroHeadline: string;
  heroSubhead: string;
  heroButton: string;
  heroAccentClass: string;
  accentGradient: string;
  products: DemoProductItem[];
  featureBar: string;
}

const DEMO_STORES: DemoStoreCard[] = [
  {
    id: "aura-lifestyle",
    nameKey: "demoStoresSection.store1.name",
    categoryKey: "demoStoresSection.store1.category",
    themeKey: "demoStoresSection.store1.theme",
    descKey: "demoStoresSection.store1.desc",
    categoryNumber: "01",
    categoryLabel: "Fashion & Apparel",
    icon: Shirt,
    badgeBg: "bg-primary/10",
    badgeColor: "text-primary",
    domain: "demo.aurafashion.cartx.app",
    brandName: "AURA STUDIO",
    navLinks: ["New In", "Lookbook", "Collections", "Sale"],
    heroTagline: "AUTUMN / WINTER '25",
    heroHeadline: "Pure Linen & Tailored Cuts",
    heroSubhead: "Effortless everyday silhouette designed for modern style.",
    heroButton: "Shop Lookbook",
    heroAccentClass: "from-blue-600/15 via-sky-400/10 to-transparent",
    accentGradient: "from-blue-600/15 via-sky-400/10 to-transparent",
    products: [
      {
        title: "Relaxed Linen Shirt",
        badge: "New Season",
        spec: "100% Organic Linen",
        price: "৳1,850",
        originalPrice: "৳2,200",
        rating: "4.9",
        icon: Shirt,
        bgGradient: "from-blue-500/10 via-sky-400/5 to-transparent",
      },
      {
        title: "Tailored Chino Pant",
        badge: "Bestseller",
        spec: "Slim Cut Twill",
        price: "৳2,450",
        originalPrice: "৳2,800",
        rating: "4.8",
        icon: ShoppingBag,
        bgGradient: "from-sky-500/10 via-cyan-400/5 to-transparent",
      },
    ],
    featureBar: "Free Nationwide Shipping over ৳2,000 • 7-Day Easy Exchange",
  },
  {
    id: "volt-electronics",
    nameKey: "demoStoresSection.store2.name",
    categoryKey: "demoStoresSection.store2.category",
    themeKey: "demoStoresSection.store2.theme",
    descKey: "demoStoresSection.store2.desc",
    categoryNumber: "02",
    categoryLabel: "Electronics & Gadgets",
    icon: Laptop,
    badgeBg: "bg-secondary-accent/15",
    badgeColor: "text-secondary-accent",
    domain: "demo.volttech.cartx.app",
    brandName: "VOLT TECH",
    navLinks: ["Audio", "Wireless", "Gaming", "Deals"],
    heroTagline: "FLAGSHIP HYBRID NOISE CANCELLING",
    heroHeadline: "Studio Pro Lossless Audio",
    heroSubhead: "40-hour playtime, Hi-Res wireless LDAC, ultra-low latency.",
    heroButton: "View Specs",
    heroAccentClass: "from-sky-500/20 via-cyan-400/10 to-transparent",
    accentGradient: "from-sky-500/15 via-cyan-400/10 to-transparent",
    products: [
      {
        title: "Volt Studio ANC Pods",
        badge: "Hi-Res Audio",
        spec: "40mm Dynamic Drivers",
        price: "৳5,999",
        originalPrice: "৳6,999",
        rating: "4.9",
        icon: Laptop,
        bgGradient: "from-cyan-500/15 via-sky-400/10 to-transparent",
      },
      {
        title: "MagFast Qi2 Charger",
        badge: "Fast Charge",
        spec: "15W Dual Stand",
        price: "৳2,250",
        originalPrice: "৳2,600",
        rating: "4.8",
        icon: Smartphone,
        bgGradient: "from-blue-600/15 via-indigo-500/10 to-transparent",
      },
    ],
    featureBar: "Official 1-Year Brand Warranty • Express Same-Day Dispatch",
  },
  {
    id: "lumina-beauty",
    nameKey: "demoStoresSection.store3.name",
    categoryKey: "demoStoresSection.store3.category",
    themeKey: "demoStoresSection.store3.theme",
    descKey: "demoStoresSection.store3.desc",
    categoryNumber: "03",
    categoryLabel: "Beauty & Lifestyle",
    icon: Heart,
    badgeBg: "bg-rose-500/10",
    badgeColor: "text-rose-600 dark:text-rose-400",
    domain: "demo.luminabeauty.cartx.app",
    brandName: "LUMINA BOTANICALS",
    navLinks: ["Serums", "Moisturizers", "Sun Care", "Rituals"],
    heroTagline: "100% CLEAN FORMULATION",
    heroHeadline: "Hydrating Dew Drops",
    heroSubhead: "Dermatologist tested, vegan botanicals for radiant skin health.",
    heroButton: "Explore Rituals",
    heroAccentClass: "from-rose-500/20 via-pink-400/10 to-transparent",
    accentGradient: "from-rose-500/15 via-pink-400/10 to-transparent",
    products: [
      {
        title: "Botanical Glow Serum",
        badge: "Award Winner",
        spec: "30ml Glass Dropper",
        price: "৳1,650",
        originalPrice: "৳1,950",
        rating: "4.9",
        icon: Heart,
        bgGradient: "from-rose-500/15 via-pink-400/10 to-transparent",
      },
      {
        title: "Velvet Cloud Cream",
        badge: "Clean Formula",
        spec: "50ml Barrier Support",
        price: "৳1,950",
        originalPrice: "৳2,300",
        rating: "4.8",
        icon: CheckCircle2,
        bgGradient: "from-pink-500/10 via-amber-300/10 to-transparent",
      },
    ],
    featureBar: "100% Recyclable Glass Packaging • Cruelty-Free & Vegan",
  },
];

export interface DemoStoreShowcaseSectionProps {
  className?: string;
}

export function DemoStoreShowcaseSection({
  className,
}: DemoStoreShowcaseSectionProps) {
  const { t, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredStores =
    activeTab === "all"
      ? DEMO_STORES
      : DEMO_STORES.filter((store) => store.id === activeTab);

  return (
    <section
      aria-label="Demo Store Showcase"
      className={cn(
        "relative section-padding border-b border-border bg-background transition-colors overflow-hidden",
        className
      )}
    >
      {/* ── Background Subtle Ambient Lighting ── */}
      <div
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full opacity-[0.035]"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            eyebrow={t("demoStoresSection.badge")}
            eyebrowIcon={Store}
            title={t("demoStoresSection.title")}
            titleGradient={true}
            description={t("demoStoresSection.description")}
            size="default"
            className="mb-7 sm:mb-8 lg:mb-10"
          />

          {/* ── Factual Conceptual Demo Notice ── */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3.5 py-1 text-[11px] font-medium text-muted-foreground shadow-xs text-center">
              <ShieldCheck className="size-3.5 text-primary shrink-0" />
              <span>{t("demoStoresSection.conceptNotice")}</span>
            </div>
          </div>

          {/* ── Category Filter Pills (Desktop & Mobile) ── */}
          <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 select-none",
                activeTab === "all"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-border/80"
              )}
            >
              All Storefronts (3)
            </button>
            {DEMO_STORES.map((store) => (
              <button
                key={store.id}
                type="button"
                onClick={() => setActiveTab(store.id)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 select-none flex items-center gap-1.5",
                  activeTab === store.id
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-border/80"
                )}
              >
                <store.icon className="size-3" />
                <span>{store.categoryLabel}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ── 3 Substantial Demo Store Cards Gallery ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-12 items-stretch">
          {filteredStores.map((store, idx) => {
            const CategoryIcon = store.icon;
            return (
              <ScrollReveal
                key={store.id}
                direction="up"
                delay={idx * 70}
                className="h-full"
              >
                <div className="group relative rounded-2xl border border-border bg-card shadow-xs hover:border-primary/40 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">
                  <div>
                    {/* ────────────────────────────────────────────────────────────
                        Realistic Desktop Browser Window Chrome & Storefront Preview
                        ──────────────────────────────────────────────────────────── */}
                    <div className="border-b border-border bg-muted/30 select-none">
                      {/* Simulated Mini Browser Titlebar */}
                      <div className="flex items-center justify-between px-3.5 py-2 border-b border-border/70 bg-card/80">
                        <div className="flex items-center gap-1.5">
                          <span className="size-2 rounded-full bg-error/70" />
                          <span className="size-2 rounded-full bg-warning/70" />
                          <span className="size-2 rounded-full bg-success/70" />
                          <span className="ml-2 font-mono text-[10px] text-muted-foreground truncate max-w-[140px] sm:max-w-[180px]">
                            {store.domain}
                          </span>
                        </div>
                        <span className="text-[9px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                        Live Preview
                      </span>
                    </div>

                    {/* Storefront Visual Canvas */}
                    <div className="relative p-3.5 sm:p-4 bg-background/95 space-y-3">
                      {/* Storefront Top Header */}
                      <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                        <div className="flex items-center gap-2">
                          <div className="size-5 rounded bg-primary text-primary-foreground font-black text-[9px] flex items-center justify-center shadow-2xs">
                            {store.brandName.charAt(0)}
                          </div>
                          <span className="text-xs font-bold text-foreground tracking-tight">
                            {store.brandName}
                          </span>
                        </div>
                        <div className="hidden sm:flex items-center gap-2.5 text-[10px] font-medium text-muted-foreground">
                          {store.navLinks.slice(0, 3).map((link, idx) => (
                            <span
                              key={idx}
                              className={idx === 0 ? "text-primary font-bold" : ""}
                            >
                              {link}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Search className="size-3.5" />
                          <div className="relative">
                            <ShoppingBag className="size-3.5" />
                            <span className="absolute -top-1 -right-1 size-2 rounded-full bg-primary" />
                          </div>
                        </div>
                      </div>

                      {/* Storefront Hero Banner */}
                      <div
                        className={cn(
                          "rounded-xl border border-border/80 p-3 sm:p-3.5 relative overflow-hidden bg-gradient-to-br shadow-2xs",
                          store.heroAccentClass
                        )}
                      >
                        <div className="relative z-10 space-y-1">
                          <span className="text-[8px] font-extrabold uppercase tracking-widest text-primary block leading-none">
                            {store.heroTagline}
                          </span>
                          <h4 className="text-sm font-bold text-foreground leading-snug">
                            {store.heroHeadline}
                          </h4>
                          <p className="text-[10px] text-muted-foreground line-clamp-1">
                            {store.heroSubhead}
                          </p>
                          <div className="pt-1">
                            <span className="inline-flex items-center gap-1 text-[9px] font-bold text-primary hover:underline">
                              <span>{store.heroButton}</span>
                              <ArrowRight className="size-2.5" />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* 2 Detailed Product Cards Grid */}
                      <div className="grid grid-cols-2 gap-2.5">
                        {store.products.map((prod, pIdx) => {
                          const ProdIcon = prod.icon;
                          return (
                            <div
                              key={pIdx}
                              className="rounded-xl border border-border/80 bg-card p-2 flex flex-col justify-between shadow-2xs hover:border-primary/40 transition-colors"
                            >
                              <div>
                                <div
                                  className={cn(
                                    "aspect-[4/3] rounded-lg border border-border/60 flex flex-col items-center justify-center relative p-1.5 mb-1.5 overflow-hidden",
                                    prod.bgGradient
                                  )}
                                >
                                  <span className="absolute top-1 left-1 rounded bg-card/90 border border-border/60 px-1 py-0.2 text-[7px] font-bold text-primary">
                                    {prod.badge}
                                  </span>
                                  <ProdIcon className="size-6 text-primary/70 mb-0.5" />
                                  <span className="text-[7.5px] font-medium text-muted-foreground/80 truncate max-w-full px-1">
                                    {prod.spec}
                                  </span>
                                </div>
                                <p className="text-[10.5px] font-bold text-foreground truncate">
                                  {prod.title}
                                </p>
                              </div>

                              <div className="flex items-center justify-between mt-1 pt-1 border-t border-border/50">
                                <div className="flex items-baseline gap-1">
                                  <span className="text-[11px] font-extrabold text-foreground">
                                    {prod.price}
                                  </span>
                                </div>
                                <div className="flex items-center text-[8.5px] font-bold text-warning">
                                  <Star className="size-2 fill-current mr-0.5" />
                                  <span>{prod.rating}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Storefront Feature Bar */}
                      <div className="rounded-lg bg-muted/40 px-2 py-1 border border-border/50 text-[8.5px] text-muted-foreground text-center truncate">
                        {store.featureBar}
                      </div>
                    </div>
                  </div>

                  {/* ────────────────────────────────────────────────────────────
                      Card Info Lockup (Outside the Preview Canvas)
                      ──────────────────────────────────────────────────────────── */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      {/* Category Label Pill */}
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold shrink-0 border border-border/70",
                          store.badgeBg,
                          store.badgeColor
                        )}
                      >
                        <CategoryIcon className="size-3" />
                        <span>{store.categoryLabel}</span>
                      </span>

                      {/* Mobile Ready Indicator */}
                      <div className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                        <Smartphone className="size-3 text-primary shrink-0" />
                        <span>{t("demoStoresSection.mobileFriendly")}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {t(store.nameKey)}
                      </h3>
                      <p className="text-xs font-semibold text-primary/80 mt-0.5 font-mono">
                        {t(store.themeKey)}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {t(store.descKey)}
                    </p>
                  </div>
                </div>

                {/* ────────────────────────────────────────────────────────────
                    Card Bottom Action Button (Preview Store)
                    ──────────────────────────────────────────────────────────── */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <div className="pt-3.5 border-t border-border flex items-center justify-between">
                    <Link
                      href={`/demo-stores?theme=${store.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-xs font-bold text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 shadow-2xs group/btn"
                    >
                      <Eye className="size-3.5" />
                      <span>{t("demoStoresSection.previewStore")}</span>
                      <ArrowRight className="size-3 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* ── Section Bottom CTA (Explore All Demo Stores) ── */}
      <ScrollReveal direction="up" delay={180}>
        <div className="flex flex-col items-center text-center">
          <CTAButton
            action="exploreDemoStores"
            variant="primary"
            locale={locale}
            size="lg"
            showArrow
            className="px-7 py-3 text-sm rounded-lg shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          />
          <p className="text-xs text-muted-foreground mt-3">
            Browse our complete library of responsive demo storefront templates.
          </p>
        </div>
      </ScrollReveal>
      </div>
    </section>
  );
}
