"use client";

import React, { useEffect, useState } from "react";
import { X, Smartphone, Monitor, ShieldCheck, Check, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { DemoStoreItem } from "./types";
import { cn } from "@/lib/utils";

interface DemoStoreModalProps {
  store: DemoStoreItem | null;
  mode: "desktop" | "mobile";
  onClose: () => void;
}

export function DemoStoreModal({ store, mode: initialMode, onClose }: DemoStoreModalProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">(initialMode);
  const [cartCount, setCartCount] = useState<number>(0);
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  // Keyboard close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (store) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [store, onClose]);

  if (!store) return null;

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-store-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative flex flex-col w-full max-w-5xl h-[90vh] rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border bg-muted/30 select-none">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-bold text-sm text-foreground" id="demo-store-modal-title">
              {store.name[isBn ? "bn" : "en"]}
            </span>
            <span className="hidden sm:inline-block font-mono text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded border border-border/60">
              {store.domain}
            </span>
          </div>

          {/* Viewport switchers */}
          <div className="flex items-center gap-1.5 bg-background border border-border rounded-full p-1 shadow-2xs">
            <button
              type="button"
              onClick={() => setViewMode("desktop")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer",
                viewMode === "desktop"
                  ? "bg-primary text-primary-foreground shadow-2xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Monitor className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{isBn ? "ডেস্কটপ" : "Desktop"}</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("mobile")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer",
                viewMode === "mobile"
                  ? "bg-primary text-primary-foreground shadow-2xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Smartphone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{isBn ? "মোবাইল" : "Mobile"}</span>
            </button>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close demo store preview"
            className="rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Demo Safe Environment Disclaimer Bar */}
        <div className="bg-primary/10 border-b border-primary/20 px-4 py-1.5 text-center text-xs text-primary font-medium flex items-center justify-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
          <span>
            {isBn
              ? "প্রদর্শনীমূলক ডেমো পরিবেশ • কোনো বাস্তব অর্থ লেনদেন বা ব্যক্তিগত তথ্য সংগ্রহ করা হয় না।"
              : "Demo Preview Environment • Non-transactional simulation. No real payments are processed."}
          </span>
        </div>

        {/* Modal Body Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-muted/20 flex justify-center">
          <div
            className={cn(
              "w-full transition-all duration-300",
              viewMode === "mobile"
                ? "max-w-[390px] rounded-3xl border-4 border-slate-800 bg-background shadow-2xl p-4 min-h-[680px]"
                : "max-w-4xl rounded-xl border border-border bg-background shadow-md p-6"
            )}
          >
            {/* Store Navigation Bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-border">
              <span className="font-extrabold text-sm sm:text-base tracking-wider text-foreground">
                {store.brandName}
              </span>
              <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                <span className="relative flex items-center gap-1 text-foreground">
                  <ShoppingBag className="h-4 w-4" />
                  <span>({cartCount})</span>
                </span>
              </div>
            </div>

            {/* Announcement Banner */}
            <div className="rounded-lg bg-primary/10 text-primary px-3 py-2 text-center text-xs font-semibold mb-6">
              {store.featuresBar[0][isBn ? "bn" : "en"]}
            </div>

            {/* Storefront Hero Banner */}
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-muted/30 to-background p-6 mb-8">
              <span className="inline-block rounded-full bg-primary/15 text-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2">
                {store.hero.badge[isBn ? "bn" : "en"]}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mb-2">
                {store.hero.headline[isBn ? "bn" : "en"]}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mb-4">
                {store.hero.subhead[isBn ? "bn" : "en"]}
              </p>
              <button
                type="button"
                className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-xs"
              >
                {store.hero.cta[isBn ? "bn" : "en"]}
              </button>
            </div>

            {/* Product Catalog Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-foreground">
                  {isBn ? "নির্বাচিত পণ্যসমূহ" : "Featured Products"}
                </h3>
                <span className="text-xs text-muted-foreground">
                  {store.products.length} {isBn ? "টি আইটেম" : "Items"}
                </span>
              </div>

              <div className={cn("grid gap-4", viewMode === "mobile" ? "grid-cols-1" : "grid-cols-2 sm:grid-cols-3")}>
                {store.products.map((prod) => (
                  <div
                    key={prod.id}
                    className="rounded-xl border border-border bg-card p-4 flex flex-col justify-between shadow-2xs hover:border-primary/40 transition-all"
                  >
                    <div>
                      <div className="h-28 rounded-lg bg-muted/40 border border-border/50 mb-3 flex items-center justify-center text-xs font-bold text-muted-foreground">
                        {prod.tag}
                      </div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-bold text-foreground truncate">
                          {prod.name[isBn ? "bn" : "en"]}
                        </span>
                        <span className="text-[10px] text-primary font-bold">★ {prod.rating}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground line-clamp-2 mb-3">
                        {prod.description[isBn ? "bn" : "en"]}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-border/60 flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-extrabold text-foreground">
                        {prod.price}
                      </span>
                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer"
                      >
                        {isBn ? "+ যুক্ত করুন" : "+ Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notification alert on add */}
            {addedNotice && (
              <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 rounded-full bg-foreground text-background px-4 py-2 text-xs font-semibold shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
                <Check className="h-4 w-4 text-success" />
                <span>{isBn ? "পণ্যটি ডেমো কার্টে যুক্ত হয়েছে" : "Product added to demo cart!"}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
