"use client";

import React, { useState } from "react";
import {
  Lock,
  ShoppingBag,
  Star,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Check,
  AlertCircle,
  Wifi,
  Battery,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ThemeItem, SampleProduct } from "../types";
import { ViewportMode, PreviewTab } from "./theme-preview-toolbar";
import { cn } from "@/lib/utils";

export interface ThemePreviewViewportProps {
  theme: ThemeItem;
  viewportMode: ViewportMode;
  activeTab: PreviewTab;
  className?: string;
}

export function ThemePreviewViewport({
  theme,
  viewportMode,
  activeTab,
  className,
}: ThemePreviewViewportProps) {
  const { locale } = useLanguage();
  const isMobile = viewportMode === "mobile";

  // Selected sample product for details tab
  const [selectedProduct, setSelectedProduct] = useState<SampleProduct>(
    theme.preview.sampleProducts[0] || {
      id: "demo-p",
      name: { en: "Sample Product", bn: "নমুনা পণ্য" },
      category: { en: "General", bn: "সাধারণ" },
      price: "৳১,০০০",
      badge: { en: "Demo", bn: "ডেমো" },
      rating: "5.0",
      specs: [],
      description: { en: "Demo product description", bn: "নমুনা বিবরণ" },
      variants: [],
      accentColor: "#2563EB",
      bgGradient: "from-blue-100 to-sky-50",
    }
  );

  // Selected variant state
  const [selectedVariantIdx, setSelectedVariantIdx] = useState<number>(0);
  const [cartAddedToast, setCartAddedToast] = useState<boolean>(false);

  // Cart preview demo state
  const [demoDistrict, setDemoDistrict] = useState<string>("dhaka");
  const [demoPaymentMethod, setDemoPaymentMethod] = useState<string>("cod");

  const handleAddToCart = () => {
    setCartAddedToast(true);
    setTimeout(() => setCartAddedToast(false), 2400);
  };

  return (
    <div className={cn("relative transition-all duration-300", className)}>
      {/* ── Viewport Frame Container ── */}
      <div
        className={cn(
          "mx-auto transition-all duration-300",
          isMobile
            ? "max-w-[390px] rounded-[2.5rem] border-[10px] border-slate-900 bg-background shadow-2xl overflow-hidden ring-1 ring-border"
            : "w-full max-w-5xl rounded-2xl border border-border bg-card shadow-lg overflow-hidden"
        )}
      >
        {/* Chrome Header: Desktop browser vs Mobile phone notch */}
        {isMobile ? (
          /* Mobile Phone Top Notch & Status */
          <div className="bg-slate-900 px-6 py-2 flex items-center justify-between text-white text-[10px] font-medium select-none">
            <span>9:41</span>
            <div className="w-20 h-4 bg-slate-950 rounded-full mx-auto" />
            <div className="flex items-center gap-1.5">
              <Wifi className="size-3 text-slate-300" />
              <Battery className="size-3 text-slate-300" />
            </div>
          </div>
        ) : (
          /* Desktop Browser Window Header */
          <div className="bg-muted/70 px-4 py-3 border-b border-border flex items-center justify-between gap-4 select-none">
            <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
              <div className="size-3 rounded-full bg-destructive/60" />
              <div className="size-3 rounded-full bg-amber-500/60" />
              <div className="size-3 rounded-full bg-emerald-500/60" />
            </div>

            <div className="flex-1 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-1.5 bg-background/80 rounded-md py-1 px-3 border border-border/60 text-xs text-muted-foreground">
                <Lock className="size-3 text-emerald-500 shrink-0" />
                <span className="font-mono text-[11px] truncate">{theme.preview.domain}</span>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{locale === "bn" ? "লাইভ স্টোরফ্রন্ট" : "Live Storefront"}</span>
            </div>
          </div>
        )}

        {/* ── Inside Storefront Canvas ── */}
        <div className="bg-background text-foreground text-xs min-h-[480px] sm:min-h-[580px] flex flex-col justify-between">
          <div>
            {/* Storefront Top Announcement Bar */}
            <div className="bg-primary text-primary-foreground px-3 py-1.5 text-center text-[10px] font-medium tracking-wide">
              {theme.preview.announcement[locale] || theme.preview.announcement.en}
            </div>

            {/* Storefront Main Header */}
            <div className="bg-card/90 border-b border-border px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-bold tracking-tight text-sm sm:text-base text-foreground font-mono">
                  {theme.preview.brandName}
                </span>

                {/* Desktop Nav Links */}
                {!isMobile && (
                  <div className="hidden md:flex items-center gap-3 text-xs text-muted-foreground ml-3">
                    {theme.preview.navLinks.map((link, lIdx) => (
                      <span key={lIdx} className="hover:text-foreground cursor-pointer transition-colors">
                        {link[locale] || link.en}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded-md text-[11px] font-semibold">
                  <ShoppingBag className="size-3" />
                  <span>{theme.preview.cartPreview.items.length}</span>
                </div>
              </div>
            </div>

            {/* Interactive Tab Content */}
            <div className="p-4 sm:p-6">
              {/* ─────────────────────────────────────────────────────────────
               * Tab 1: Homepage Preview (Section 04)
               * ───────────────────────────────────────────────────────────── */}
              {activeTab === "homepage" && (
                <div className="space-y-6">
                  {/* Hero Banner */}
                  <div
                    className="rounded-2xl p-6 sm:p-8 text-foreground border border-border/60 relative overflow-hidden"
                    style={{ background: theme.preview.hero.bgGradient }}
                  >
                    <div className="max-w-md relative z-10">
                      <span className="inline-block text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-background/90 text-foreground mb-2.5 border border-border/40">
                        {theme.preview.hero.tagline[locale] || theme.preview.hero.tagline.en}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-bold tracking-tight mb-2 text-foreground leading-tight">
                        {theme.preview.hero.headline[locale] || theme.preview.hero.headline.en}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/80 mb-4 line-clamp-2">
                        {theme.preview.hero.subhead[locale] || theme.preview.hero.subhead.en}
                      </p>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover transition-colors"
                      >
                        <span>
                          {theme.preview.hero.buttonText[locale] || theme.preview.hero.buttonText.en}
                        </span>
                        <ArrowRight className="size-3" />
                      </button>
                    </div>
                  </div>

                  {/* Featured Categories Pills */}
                  {theme.preview.featuredCategories.length > 0 && (
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2.5">
                        {locale === "bn" ? "জনপ্রিয় ক্যাটাগরি" : "Featured Categories"}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {theme.preview.featuredCategories.map((cat, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-foreground hover:border-primary/60 cursor-pointer transition-colors"
                          >
                            {cat[locale] || cat.en}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Featured Products Grid */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-foreground">
                        {locale === "bn" ? "নতুন কালেকশন ও অফার" : "Featured Collection"}
                      </span>
                      <span className="text-xs text-primary font-medium hover:underline cursor-pointer">
                        {locale === "bn" ? "সবগুলো দেখুন →" : "View All →"}
                      </span>
                    </div>

                    <div
                      className={cn(
                        "grid gap-3 sm:gap-4",
                        isMobile ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"
                      )}
                    >
                      {theme.preview.sampleProducts.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => setSelectedProduct(p)}
                          className="rounded-xl border border-border bg-card p-3 shadow-2xs hover:border-primary/40 cursor-pointer transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div
                              className="h-20 sm:h-24 rounded-lg mb-2 flex items-center justify-center p-2 relative overflow-hidden"
                              style={{ background: p.bgGradient }}
                            >
                              <span className="absolute top-1 left-1 text-[8px] font-bold uppercase px-1.5 py-0.5 rounded bg-background/90 text-foreground border border-border/40">
                                {p.badge[locale] || p.badge.en}
                              </span>
                              <span className="text-[11px] font-bold text-foreground/80 text-center line-clamp-1">
                                {p.category[locale] || p.category.en}
                              </span>
                            </div>

                            <h4 className="font-semibold text-foreground text-xs line-clamp-1 mb-1">
                              {p.name[locale] || p.name.en}
                            </h4>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-border/60">
                            <span className="font-bold text-foreground text-xs">{p.price}</span>
                            <div className="flex items-center text-amber-500 text-[10px]">
                              <Star className="size-2.5 fill-amber-500 text-amber-500" />
                              <span className="ml-0.5 font-bold text-foreground">{p.rating}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────
               * Tab 2: Product Listing / Collection Grid (Section 05)
               * ───────────────────────────────────────────────────────────── */}
              {activeTab === "listing" && (
                <div className="space-y-4">
                  {/* Category Filter and Sorting Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-border text-xs">
                    <span className="font-semibold text-foreground">
                      {locale === "bn" ? "সকল ক্যাটালগ প্রোডাক্ট" : "All Collection Products"} (
                      {theme.preview.sampleProducts.length})
                    </span>
                    <span className="text-muted-foreground bg-muted px-2.5 py-1 rounded text-[11px]">
                      {locale === "bn" ? "সর্টিং: জনপ্রিয়তা" : "Sort: Bestselling"}
                    </span>
                  </div>

                  {/* Product Cards */}
                  <div
                    className={cn(
                      "grid gap-3 sm:gap-4",
                      isMobile ? "grid-cols-1" : "grid-cols-2 sm:grid-cols-4"
                    )}
                  >
                    {theme.preview.sampleProducts.map((p) => (
                      <div
                        key={p.id}
                        className="rounded-xl border border-border bg-card p-3 shadow-2xs hover:border-primary/40 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div
                            className="h-24 sm:h-28 rounded-lg mb-2.5 flex items-center justify-center p-2 relative overflow-hidden"
                            style={{ background: p.bgGradient }}
                          >
                            <span className="absolute top-1.5 left-1.5 text-[8.5px] font-bold uppercase px-1.5 py-0.5 rounded bg-background/90 text-foreground border border-border/40">
                              {p.badge[locale] || p.badge.en}
                            </span>
                            <span className="text-xs font-bold text-foreground/80 text-center line-clamp-1">
                              {p.name[locale] || p.name.en}
                            </span>
                          </div>

                          <span className="text-[10px] text-muted-foreground block mb-0.5">
                            {p.category[locale] || p.category.en}
                          </span>
                          <h4 className="font-semibold text-foreground text-xs line-clamp-1 mb-1.5">
                            {p.name[locale] || p.name.en}
                          </h4>

                          <p className="text-[11px] text-muted-foreground line-clamp-2 mb-3">
                            {p.description[locale] || p.description.en}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-baseline gap-1.5 mb-2.5">
                            <span className="font-bold text-foreground text-xs sm:text-sm">
                              {p.price}
                            </span>
                            {p.originalPrice && (
                              <span className="text-[10px] text-muted-foreground line-through">
                                {p.originalPrice}
                              </span>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              setSelectedProduct(p);
                              handleAddToCart();
                            }}
                            className="w-full py-1.5 rounded-lg bg-primary text-primary-foreground text-[11px] font-semibold hover:bg-primary-hover transition-colors flex items-center justify-center gap-1"
                          >
                            <ShoppingBag className="size-3" />
                            <span>{locale === "bn" ? "অর্ডার করুন" : "Add to Cart"}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────
               * Tab 3: Product Details Preview (Section 06)
               * ───────────────────────────────────────────────────────────── */}
              {activeTab === "details" && (
                <div className="rounded-xl border border-border bg-card p-4 sm:p-6 space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Left: Product Visual Box */}
                    <div
                      className="sm:w-1/2 h-52 sm:h-64 rounded-xl flex items-center justify-center p-4 relative overflow-hidden border border-border/60"
                      style={{ background: selectedProduct.bgGradient }}
                    >
                      <span className="absolute top-2 left-2 text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-background/90 text-foreground border border-border/40">
                        {selectedProduct.badge[locale] || selectedProduct.badge.en}
                      </span>
                      <div className="text-center p-3 bg-background/80 rounded-xl backdrop-blur-xs border border-border/60 max-w-[80%]">
                        <span className="font-bold text-sm text-foreground block mb-1">
                          {selectedProduct.name[locale] || selectedProduct.name.en}
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          {locale === "bn" ? "প্রোডাক্ট গ্যালারি ইমেজ" : "Product Gallery View"}
                        </span>
                      </div>
                    </div>

                    {/* Right: Pricing, Description, Variants & Add to Cart */}
                    <div className="sm:w-1/2 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[11px] font-medium text-muted-foreground">
                            {selectedProduct.category[locale] || selectedProduct.category.en}
                          </span>
                          <span className="size-1 rounded-full bg-border" />
                          <div className="flex items-center text-amber-500 text-xs">
                            <Star className="size-3 fill-amber-500 text-amber-500" />
                            <span className="ml-1 font-bold text-foreground">
                              {selectedProduct.rating} (48 Reviews)
                            </span>
                          </div>
                        </div>

                        <h3 className="text-base sm:text-xl font-bold text-foreground mb-2">
                          {selectedProduct.name[locale] || selectedProduct.name.en}
                        </h3>

                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-lg sm:text-xl font-bold text-foreground">
                            {selectedProduct.price}
                          </span>
                          {selectedProduct.originalPrice && (
                            <span className="text-xs text-muted-foreground line-through">
                              {selectedProduct.originalPrice}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                          {selectedProduct.description[locale] || selectedProduct.description.en}
                        </p>

                        {/* Variants */}
                        {selectedProduct.variants.map((v, vIdx) => (
                          <div key={vIdx} className="mb-4">
                            <span className="text-[11px] font-semibold text-foreground uppercase tracking-wider block mb-1.5">
                              {v.label[locale] || v.label.en}:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {v.options.map((opt, oIdx) => (
                                <button
                                  key={oIdx}
                                  type="button"
                                  onClick={() => setSelectedVariantIdx(oIdx)}
                                  className={cn(
                                    "px-3 py-1 rounded-md text-xs font-medium border transition-colors",
                                    selectedVariantIdx === oIdx
                                      ? "border-primary bg-primary text-primary-foreground font-semibold"
                                      : "border-border bg-background text-foreground hover:bg-muted"
                                  )}
                                >
                                  {opt[locale] || opt.en}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Add to Cart Button */}
                      <div className="pt-4 border-t border-border">
                        <button
                          type="button"
                          onClick={handleAddToCart}
                          className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary-hover shadow-xs transition-all flex items-center justify-center gap-2"
                        >
                          <ShoppingBag className="size-4" />
                          <span>
                            {locale === "bn" ? "কার্টে যোগ করুন (ডেমো)" : "Add to Cart (Safe Demo)"}
                          </span>
                        </button>

                        {cartAddedToast && (
                          <p className="text-center text-[11px] text-success font-medium mt-2 animate-fade-in flex items-center justify-center gap-1">
                            <CheckCircle2 className="size-3" />
                            <span>
                              {locale === "bn" ? "আইটেম কার্টে যোগ হয়েছে!" : "Item added to cart!"}
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Specifications Table */}
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider block mb-2.5">
                      {locale === "bn" ? "প্রোডাক্ট স্পেসিফিকেশন" : "Technical Specifications"}
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {selectedProduct.specs.map((s, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-muted/40 border border-border/50">
                          <span className="text-muted-foreground block text-[10px]">
                            {s.label[locale] || s.label.en}
                          </span>
                          <span className="font-semibold text-foreground">
                            {s.value[locale] || s.value.en}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────
               * Tab 4: Cart & Checkout Preview (Section 07)
               * ───────────────────────────────────────────────────────────── */}
              {activeTab === "checkout" && (
                <div className="space-y-6">
                  {/* Strict Privacy & Demo Safety Callout */}
                  <div className="rounded-xl border border-primary/30 bg-primary/[0.04] p-3.5 flex items-start gap-3">
                    <AlertCircle className="size-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs text-foreground/80 leading-relaxed">
                      <strong className="font-semibold text-primary block">
                        {locale === "bn"
                          ? "নিরাপদ ডেমো প্রিভিউ নোটিস"
                          : "Safe Illustrative Checkout Preview"}
                      </strong>
                      {locale === "bn"
                        ? "এটি একটি কাল্পনিক ডেমো প্রিভিউ। এখানে কোনো আসল পেমেন্ট প্রসেস করা হয় না এবং কোনো গ্রাহকের তথ্য সংগ্রহ বা সংরক্ষণ করা হয় না।"
                        : "This is an illustrative preview built with fictional demo data. No actual payments or private customer information are processed here."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left: 1-Page Checkout Form Preview */}
                    <div className="rounded-xl border border-border bg-card p-4 space-y-4">
                      <h4 className="font-bold text-foreground text-sm flex items-center gap-1.5 pb-2 border-b border-border">
                        <ShieldCheck className="size-4 text-primary" />
                        <span>
                          {locale === "bn" ? "ডেলিভারি ঠিকানা ও তথ্য" : "Shipping & Delivery Info"}
                        </span>
                      </h4>

                      <div>
                        <label className="block text-[11px] font-medium text-muted-foreground mb-1">
                          {locale === "bn" ? "ক্রেতার পুরো নাম" : "Full Customer Name"}
                        </label>
                        <input
                          type="text"
                          readOnly
                          value="Demo Customer (কাল্পনিক গ্রাহক)"
                          className="w-full rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-foreground/70 cursor-not-allowed"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-muted-foreground mb-1">
                          {locale === "bn" ? "মোবাইল নম্বর" : "Mobile Phone Number"}
                        </label>
                        <input
                          type="text"
                          readOnly
                          value="+880 1700-000000"
                          className="w-full rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-foreground/70 cursor-not-allowed"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-muted-foreground mb-1">
                          {locale === "bn" ? "ডেলিভারি জেলা" : "Delivery District"}
                        </label>
                        <select
                          value={demoDistrict}
                          onChange={(e) => setDemoDistrict(e.target.value)}
                          className="w-full rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-foreground"
                        >
                          <option value="dhaka">
                            {locale === "bn" ? "ঢাকা সিটি (৬০ টাকা)" : "Inside Dhaka City (৳60)"}
                          </option>
                          <option value="outside">
                            {locale === "bn"
                              ? "ঢাকার বাইরে - সারা বাংলাদেশ (১২০ টাকা)"
                              : "Outside Dhaka Nationwide (৳120)"}
                          </option>
                        </select>
                      </div>

                      {/* Payment Method Selector */}
                      <div>
                        <label className="block text-[11px] font-medium text-muted-foreground mb-1.5">
                          {locale === "bn" ? "পেমেন্ট মাধ্যম" : "Payment Method"}
                        </label>
                        <div className="space-y-1.5">
                          <label
                            className={cn(
                              "flex items-center justify-between p-2.5 rounded-lg border cursor-pointer text-xs transition-colors",
                              demoPaymentMethod === "cod"
                                ? "border-primary bg-primary/5 text-foreground font-semibold"
                                : "border-border bg-background text-muted-foreground"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="demoPayment"
                                checked={demoPaymentMethod === "cod"}
                                onChange={() => setDemoPaymentMethod("cod")}
                                className="size-3.5 text-primary"
                              />
                              <span>
                                {locale === "bn" ? "ক্যাশ অন ডেলিভারি (COD)" : "Cash on Delivery (COD)"}
                              </span>
                            </div>
                            <span className="text-[10px] text-primary">
                              {locale === "bn" ? "পণ্য দেখে পেমেন্ট" : "Pay upon receipt"}
                            </span>
                          </label>

                          <label
                            className={cn(
                              "flex items-center justify-between p-2.5 rounded-lg border cursor-pointer text-xs transition-colors",
                              demoPaymentMethod === "bkash"
                                ? "border-primary bg-primary/5 text-foreground font-semibold"
                                : "border-border bg-background text-muted-foreground"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="demoPayment"
                                checked={demoPaymentMethod === "bkash"}
                                onChange={() => setDemoPaymentMethod("bkash")}
                                className="size-3.5 text-primary"
                              />
                              <span>
                                {locale === "bn" ? "বিকাশ / নগদ পেমেন্ট" : "bKash / Nagad Instant"}
                              </span>
                            </div>
                            <span className="text-[10px] text-pink-600 font-bold">bKash</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Right: Order Summary Preview */}
                    <div className="rounded-xl border border-border bg-card p-4 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-foreground text-sm pb-2 mb-3 border-b border-border">
                          {locale === "bn" ? "অর্ডার সারাংশ" : "Order Summary"}
                        </h4>

                        <div className="space-y-2.5 mb-4">
                          {theme.preview.cartPreview.items.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between text-xs">
                              <div>
                                <span className="font-semibold text-foreground block">
                                  {item.name[locale] || item.name.en}
                                </span>
                                <span className="text-[10px] text-muted-foreground">
                                  {item.variant[locale] || item.variant.en} × {item.quantity}
                                </span>
                              </div>
                              <span className="font-bold text-foreground">{item.price}</span>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-1.5 pt-3 border-t border-border text-xs text-muted-foreground">
                          <div className="flex justify-between">
                            <span>{locale === "bn" ? "সাবটোটাল:" : "Subtotal:"}</span>
                            <span className="font-medium text-foreground">
                              {theme.preview.cartPreview.subtotal}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>{locale === "bn" ? "ডেলিভারি চার্জ:" : "Delivery Shipping:"}</span>
                            <span className="font-medium text-foreground">
                              {demoDistrict === "dhaka" ? "৳৬০" : "৳১২০"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border mt-4">
                        <div className="flex justify-between items-baseline mb-3">
                          <span className="text-sm font-bold text-foreground">
                            {locale === "bn" ? "সর্বমোট প্রদেয়:" : "Total Payable:"}
                          </span>
                          <span className="text-base font-bold text-primary">
                            {theme.preview.cartPreview.subtotal} +{" "}
                            {demoDistrict === "dhaka" ? "৳৬০" : "৳১২০"}
                          </span>
                        </div>

                        <button
                          type="button"
                          disabled
                          className="w-full py-2.5 rounded-xl bg-primary/80 text-primary-foreground text-xs font-semibold cursor-not-allowed opacity-90 select-none text-center"
                        >
                          {locale === "bn"
                            ? "অর্ডার কনফার্ম করুন (ডেমো মোড)"
                            : "Confirm Order (Demo View)"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Storefront Feature Bar (Section 04/Footer) */}
          <div className="border-t border-border bg-card/60 p-3 sm:p-4 flex flex-wrap items-center justify-around gap-2 text-center text-[10px] sm:text-[11px] text-muted-foreground">
            {theme.preview.featureBar.map((fb, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <Check className="size-3 text-success shrink-0" />
                <span>{fb[locale] || fb.en}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

