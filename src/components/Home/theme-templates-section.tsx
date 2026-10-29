"use client";

import React from "react";
import Link from "next/link";
import {
  Palette,
  Smartphone,
  Shirt,
  Laptop,
  Heart,
  ShoppingBasket,
  ArrowRight,
  Lock,
  Star,
  Search,
  ShoppingBag,
  Zap,
  CheckCircle2,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

/* ─────────────────────────────────────────────────────────────
 * Theme Data & Category Definitions
 * ───────────────────────────────────────────────────────────── */
interface ThemeColorDot {
  bg: string;
  label: string;
}

interface ThemeDefinition {
  id: string;
  nameKey: string;
  categoryKey: string;
  descKey: string;
  categoryIcon: LucideIcon;
  subdomain: string;
  badgeBg: string;
  badgeColor: string;
  palette: ThemeColorDot[];
  features: string[];
  renderPreview: (t: (key: string) => string) => React.ReactNode;
}

/* ─────────────────────────────────────────────────────────────
 * 1. Fashion & Apparel Storefront Preview (Aura Studio)
 * ───────────────────────────────────────────────────────────── */
function FashionStorefrontPreview() {
  return (
    <div className="relative w-full h-full bg-[#FAF9F5] text-stone-800 flex flex-col justify-between overflow-hidden text-[10px] select-none">
      {/* Top Notice Bar */}
      <div className="bg-stone-900 text-stone-200 px-3 py-1 flex items-center justify-between text-[8px] sm:text-[9px] font-medium tracking-wide">
        <span className="truncate">SPRING EDITORIAL CAPSULE 2026</span>
        <span className="hidden sm:inline font-mono text-stone-400">FREE SHIPPING OVER ৳2,500</span>
      </div>

      {/* Brand Header */}
      <div className="bg-white/95 border-b border-stone-200/80 px-3 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-serif text-xs sm:text-sm font-extrabold tracking-widest text-stone-950">
            AURA STUDIO
          </span>
          <div className="hidden sm:flex items-center gap-2 text-[9px] font-medium text-stone-500">
            <span className="text-stone-900 font-semibold">New In</span>
            <span>Lookbook</span>
            <span>Capsule</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-stone-600">
          <Search className="size-3 hidden xs:block" />
          <div className="flex items-center gap-1 bg-stone-100 px-1.5 py-0.5 rounded text-[8.5px] font-medium">
            <ShoppingBag className="size-2.5 text-stone-800" />
            <span>2</span>
          </div>
        </div>
      </div>

      {/* Visual Editorial Hero Banner */}
      <div className="relative mx-2.5 my-1.5 p-2.5 sm:p-3 rounded-lg bg-gradient-to-r from-stone-200/90 via-stone-100 to-amber-50/60 border border-stone-200/70 flex items-center justify-between overflow-hidden">
        <div className="z-10 max-w-[65%]">
          <span className="inline-block text-[8px] font-bold tracking-widest uppercase text-stone-600 mb-0.5">
            LOOKBOOK NO. 04
          </span>
          <h4 className="font-serif text-xs sm:text-sm font-bold text-stone-900 leading-tight">
            The Linen Sequence
          </h4>
          <p className="text-[8.5px] text-stone-600 mt-0.5 line-clamp-1">
            Tailored European flax linen crafted for breathable elegance.
          </p>
          <div className="inline-flex items-center gap-1 mt-1.5 bg-stone-900 text-stone-100 px-2 py-0.5 rounded text-[8px] font-semibold">
            <span>Explore Capsule</span>
            <ArrowRight className="size-2" />
          </div>
        </div>

        {/* Stylized Apparel Art Silhouette */}
        <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-xs" fill="none">
            <rect x="15" y="10" width="50" height="60" rx="6" fill="#E8DFD5" stroke="#A89A89" strokeWidth="1.5" />
            <path d="M25 10 L40 28 L55 10" stroke="#7A6B5C" strokeWidth="1.5" fill="none" />
            <line x1="40" y1="28" x2="40" y2="70" stroke="#7A6B5C" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="36" cy="38" r="1.5" fill="#57493D" />
            <circle cx="36" cy="50" r="1.5" fill="#57493D" />
            <rect x="20" y="44" width="10" height="12" rx="1.5" stroke="#A89A89" strokeWidth="1" fill="#DFD6CB" />
            <rect x="50" y="44" width="10" height="12" rx="1.5" stroke="#A89A89" strokeWidth="1" fill="#DFD6CB" />
          </svg>
        </div>
      </div>

      {/* Two Balanced Product Cards */}
      <div className="grid grid-cols-2 gap-2 px-2.5 pb-2">
        {/* Product 1 */}
        <div className="bg-white rounded-md border border-stone-200/80 p-2 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="bg-stone-100 text-stone-700 text-[7.5px] font-semibold px-1 rounded">
              New In
            </span>
            <div className="flex items-center text-amber-500 text-[8px]">
              <Star className="size-2 fill-amber-500 text-amber-500" />
              <span className="ml-0.5 font-bold text-stone-700">4.9</span>
            </div>
          </div>
          <div className="h-10 bg-stone-50 rounded border border-stone-100 flex items-center justify-center my-0.5">
            <span className="text-[9px] font-medium text-stone-700">Relaxed Linen Blazer</span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-stone-100">
            <span className="font-bold text-stone-900 text-[9px]">৳2,450</span>
            <div className="flex items-center gap-0.5">
              <span className="size-1.5 rounded-full bg-stone-800" />
              <span className="size-1.5 rounded-full bg-amber-200" />
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-md border border-stone-200/80 p-2 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="bg-stone-100 text-stone-700 text-[7.5px] font-semibold px-1 rounded">
              Bestseller
            </span>
            <div className="flex items-center text-amber-500 text-[8px]">
              <Star className="size-2 fill-amber-500 text-amber-500" />
              <span className="ml-0.5 font-bold text-stone-700">4.8</span>
            </div>
          </div>
          <div className="h-10 bg-stone-50 rounded border border-stone-100 flex items-center justify-center my-0.5">
            <span className="text-[9px] font-medium text-stone-700">Pleated Linen Pant</span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-stone-100">
            <span className="font-bold text-stone-900 text-[9px]">৳1,850</span>
            <span className="text-[7.5px] font-semibold text-stone-500">S • M • L</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2. Electronics & Gadgets Storefront Preview (Volt Tech)
 * ───────────────────────────────────────────────────────────── */
function ElectronicsStorefrontPreview() {
  return (
    <div className="relative w-full h-full bg-[#0B0F17] text-slate-200 flex flex-col justify-between overflow-hidden text-[10px] select-none">
      {/* Top Notice Bar */}
      <div className="bg-primary text-white px-3 py-1 flex items-center justify-between text-[8px] sm:text-[9px] font-semibold tracking-wide">
        <span className="truncate flex items-center gap-1">
          <Zap className="size-2.5 text-sky-200 fill-sky-200" />
          FLASH TECH PROMO • NEXT-DAY DISPATCH
        </span>
        <span className="hidden sm:inline font-mono text-sky-200">1-YEAR WARRANTY</span>
      </div>

      {/* Brand Header */}
      <div className="bg-[#101726] border-b border-slate-800 px-3 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="font-mono text-xs sm:text-sm font-black tracking-wider text-white">
              VOLT
            </span>
            <span className="text-secondary-accent font-black">{"//"}</span>
            <span className="font-mono text-xs sm:text-sm font-bold text-slate-400">TECH</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[9px] font-mono text-slate-400">
            <span className="text-secondary-accent font-semibold">Audio</span>
            <span>Power</span>
            <span>Wearables</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <div className="hidden xs:flex items-center gap-1 text-[8px] bg-slate-800/80 px-1.5 py-0.5 rounded text-sky-400 font-mono">
            <span>28ms Low-Lat</span>
          </div>
          <div className="flex items-center gap-1 bg-primary/20 text-secondary-accent border border-primary/40 px-1.5 py-0.5 rounded text-[8.5px] font-mono">
            <ShoppingBag className="size-2.5" />
            <span>1</span>
          </div>
        </div>
      </div>

      {/* High-Tech Flagship Hero */}
      <div className="relative mx-2.5 my-1.5 p-2.5 sm:p-3 rounded-lg bg-gradient-to-r from-slate-900 via-[#131D31] to-slate-900 border border-slate-800 flex items-center justify-between overflow-hidden">
        <div className="z-10 max-w-[65%]">
          <span className="inline-block text-[8px] font-mono font-bold tracking-widest uppercase text-secondary-accent mb-0.5">
            SPATIAL AUDIO PRO
          </span>
          <h4 className="font-mono text-xs sm:text-sm font-bold text-white leading-tight">
            Volt ANC Studio Pods
          </h4>
          <p className="text-[8.5px] text-slate-400 mt-0.5 line-clamp-1">
            Hybrid active noise cancellation with 40h battery & LDAC.
          </p>
          <div className="inline-flex items-center gap-1 mt-1.5 bg-secondary-accent text-slate-950 px-2 py-0.5 rounded text-[8px] font-bold font-mono">
            <span>View Specs</span>
            <ArrowRight className="size-2" />
          </div>
        </div>

        {/* Stylized Earbud / Audio Wave Art */}
        <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-xs" fill="none">
            <circle cx="40" cy="40" r="32" stroke="#1E293B" strokeWidth="2" />
            <circle cx="40" cy="40" r="22" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="4 2" />
            {/* Earbuds case */}
            <rect x="26" y="24" width="28" height="32" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
            <circle cx="40" cy="36" r="2" fill="#38BDF8" />
            <line x1="33" y1="46" x2="47" y2="46" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Two Balanced Product Cards */}
      <div className="grid grid-cols-2 gap-2 px-2.5 pb-2">
        {/* Product 1 */}
        <div className="bg-[#101726] rounded-md border border-slate-800 p-2 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="bg-sky-500/15 text-sky-400 font-mono text-[7.5px] font-semibold px-1 rounded">
              Hi-Res Audio
            </span>
            <div className="flex items-center text-amber-400 text-[8px]">
              <Star className="size-2 fill-amber-400 text-amber-400" />
              <span className="ml-0.5 font-bold text-slate-300">4.9</span>
            </div>
          </div>
          <div className="h-10 bg-slate-900/80 rounded border border-slate-800/80 flex items-center justify-center my-0.5">
            <span className="text-[9px] font-mono font-medium text-slate-200">ANC Wireless Pods</span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-slate-800">
            <span className="font-mono font-bold text-white text-[9px]">৳4,800</span>
            <span className="text-[7.5px] font-mono text-emerald-400">40h Batt</span>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-[#101726] rounded-md border border-slate-800 p-2 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="bg-sky-500/15 text-sky-400 font-mono text-[7.5px] font-semibold px-1 rounded">
              Qi2 Certified
            </span>
            <div className="flex items-center text-amber-400 text-[8px]">
              <Star className="size-2 fill-amber-400 text-amber-400" />
              <span className="ml-0.5 font-bold text-slate-300">4.8</span>
            </div>
          </div>
          <div className="h-10 bg-slate-900/80 rounded border border-slate-800/80 flex items-center justify-center my-0.5">
            <span className="text-[9px] font-mono font-medium text-slate-200">MagPulse 15W Dock</span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-slate-800">
            <span className="font-mono font-bold text-white text-[9px]">৳2,250</span>
            <span className="text-[7.5px] font-mono text-sky-400">15W Fast</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3. Cosmetics & Beauty Storefront Preview (Lumina Essence)
 * ───────────────────────────────────────────────────────────── */
function CosmeticsStorefrontPreview() {
  return (
    <div className="relative w-full h-full bg-[#FAF5F2] text-rose-950 flex flex-col justify-between overflow-hidden text-[10px] select-none">
      {/* Top Notice Bar */}
      <div className="bg-[#4C1D2C] text-rose-100 px-3 py-1 flex items-center justify-between text-[8px] sm:text-[9px] font-medium tracking-wide">
        <span className="truncate">100% VEGAN • DERMATOLOGIST TESTED</span>
        <span className="hidden sm:inline font-sans text-rose-300">CRUELTY-FREE CERTIFIED</span>
      </div>

      {/* Brand Header */}
      <div className="bg-white/95 border-b border-rose-100 px-3 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-serif text-xs sm:text-sm font-bold tracking-widest text-[#4C1D2C]">
            LUMINA ESSENCE
          </span>
          <div className="hidden sm:flex items-center gap-2 text-[9px] font-medium text-rose-800/70">
            <span className="text-[#4C1D2C] font-semibold">Serums</span>
            <span>Moisturizers</span>
            <span>Rituals</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-rose-800">
          <Heart className="size-3 hidden xs:block text-rose-400" />
          <div className="flex items-center gap-1 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded text-[8.5px] font-medium text-[#4C1D2C]">
            <ShoppingBag className="size-2.5 text-rose-700" />
            <span>3</span>
          </div>
        </div>
      </div>

      {/* Visual Botanical Hero Banner */}
      <div className="relative mx-2.5 my-1.5 p-2.5 sm:p-3 rounded-lg bg-gradient-to-r from-rose-100/90 via-pink-50 to-amber-50/60 border border-rose-200/70 flex items-center justify-between overflow-hidden">
        <div className="z-10 max-w-[65%]">
          <span className="inline-block text-[8px] font-bold tracking-wider uppercase text-rose-700 mb-0.5">
            CLINICAL BOTANICALS
          </span>
          <h4 className="font-serif text-xs sm:text-sm font-bold text-rose-950 leading-tight">
            Hydra-Barrier Dew Serum
          </h4>
          <p className="text-[8.5px] text-rose-800/80 mt-0.5 line-clamp-1">
            Triple Hyaluronic Complex & 10% Botanical Niacinamide.
          </p>
          <div className="inline-flex items-center gap-1 mt-1.5 bg-[#4C1D2C] text-rose-100 px-2 py-0.5 rounded text-[8px] font-semibold">
            <span>Shop Ritual</span>
            <ArrowRight className="size-2" />
          </div>
        </div>

        {/* Stylized Dropper Bottle Art */}
        <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-xs" fill="none">
            <circle cx="40" cy="40" r="30" fill="#FCE7F3" opacity="0.6" />
            {/* Pipette Dropper */}
            <rect x="36" y="8" width="8" height="12" rx="3" fill="#FB7185" />
            <rect x="34" y="20" width="12" height="4" rx="1" fill="#E11D48" />
            {/* Serum Bottle */}
            <rect x="28" y="24" width="24" height="42" rx="6" fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="1.5" />
            <rect x="31" y="40" width="18" height="22" rx="3" fill="#FDE047" opacity="0.35" />
            <line x1="40" y1="24" x2="40" y2="48" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Two Balanced Product Cards */}
      <div className="grid grid-cols-2 gap-2 px-2.5 pb-2">
        {/* Product 1 */}
        <div className="bg-white rounded-md border border-rose-100 p-2 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="bg-rose-50 text-rose-700 text-[7.5px] font-semibold px-1 rounded">
              Award Winner
            </span>
            <div className="flex items-center text-amber-500 text-[8px]">
              <Star className="size-2 fill-amber-500 text-amber-500" />
              <span className="ml-0.5 font-bold text-rose-900">5.0</span>
            </div>
          </div>
          <div className="h-10 bg-rose-50/60 rounded border border-rose-100/70 flex items-center justify-center my-0.5">
            <span className="text-[9px] font-medium text-rose-950">Peptide Glow Serum</span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-rose-100">
            <span className="font-bold text-rose-950 text-[9px]">৳1,650</span>
            <span className="text-[7.5px] font-medium text-rose-600">72h Dew</span>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-md border border-rose-100 p-2 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="bg-rose-50 text-rose-700 text-[7.5px] font-semibold px-1 rounded">
              Clean Formula
            </span>
            <div className="flex items-center text-amber-500 text-[8px]">
              <Star className="size-2 fill-amber-500 text-amber-500" />
              <span className="ml-0.5 font-bold text-rose-900">4.9</span>
            </div>
          </div>
          <div className="h-10 bg-rose-50/60 rounded border border-rose-100/70 flex items-center justify-center my-0.5">
            <span className="text-[9px] font-medium text-rose-950">Barrier Velvet Cream</span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-rose-100">
            <span className="font-bold text-rose-950 text-[9px]">৳1,950</span>
            <span className="text-[7.5px] font-medium text-rose-600">Ceramides</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 4. Grocery & Lifestyle Storefront Preview (Harvest Pure)
 * ───────────────────────────────────────────────────────────── */
function GroceryStorefrontPreview() {
  return (
    <div className="relative w-full h-full bg-[#F3F8F3] text-emerald-950 flex flex-col justify-between overflow-hidden text-[10px] select-none">
      {/* Top Notice Bar */}
      <div className="bg-emerald-900 text-emerald-100 px-3 py-1 flex items-center justify-between text-[8px] sm:text-[9px] font-medium tracking-wide">
        <span className="truncate flex items-center gap-1">
          <Clock className="size-2.5 text-emerald-300" />
          MORNING HARVEST • SAME-DAY COLD DISPATCH
        </span>
        <span className="hidden sm:inline font-sans text-emerald-300">100% PESTICIDE FREE</span>
      </div>

      {/* Brand Header */}
      <div className="bg-white/95 border-b border-emerald-100 px-3 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="size-3.5 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[8px]">
              ✓
            </div>
            <span className="font-sans text-xs sm:text-sm font-black tracking-wide text-emerald-950">
              HARVEST PURE
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[9px] font-medium text-emerald-800/70">
            <span className="text-emerald-900 font-semibold">Farm Fresh</span>
            <span>Organic Pantry</span>
            <span>Cold-Pressed</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-emerald-800">
          <div className="hidden xs:flex items-center gap-1 text-[8px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-1.5 py-0.5 rounded font-medium">
            <span>Today 4-6 PM</span>
          </div>
          <div className="flex items-center gap-1 bg-emerald-600 text-white px-1.5 py-0.5 rounded text-[8.5px] font-semibold">
            <ShoppingBag className="size-2.5" />
            <span>৳850</span>
          </div>
        </div>
      </div>

      {/* Visual Farm Harvest Hero Banner */}
      <div className="relative mx-2.5 my-1.5 p-2.5 sm:p-3 rounded-lg bg-gradient-to-r from-emerald-100/90 via-teal-50 to-amber-50/60 border border-emerald-200/70 flex items-center justify-between overflow-hidden">
        <div className="z-10 max-w-[65%]">
          <span className="inline-block text-[8px] font-bold tracking-wider uppercase text-emerald-700 mb-0.5">
            FRESH FROM LOCAL GROWERS
          </span>
          <h4 className="font-sans text-xs sm:text-sm font-extrabold text-emerald-950 leading-tight">
            Organic Farm-to-Door Crate
          </h4>
          <p className="text-[8.5px] text-emerald-800/80 mt-0.5 line-clamp-1">
            Hand-picked this morning from certified regional farms.
          </p>
          <div className="inline-flex items-center gap-1 mt-1.5 bg-emerald-800 text-emerald-100 px-2 py-0.5 rounded text-[8px] font-semibold">
            <span>Order Fresh Box</span>
            <ArrowRight className="size-2" />
          </div>
        </div>

        {/* Stylized Veggie Crate Art */}
        <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-xs" fill="none">
            <circle cx="40" cy="40" r="30" fill="#DCFCE7" opacity="0.7" />
            {/* Wooden crate */}
            <rect x="18" y="34" width="44" height="26" rx="4" fill="#D97706" opacity="0.85" />
            <line x1="18" y1="46" x2="62" y2="46" stroke="#78350F" strokeWidth="1.5" />
            {/* Vegetables */}
            <circle cx="32" cy="30" r="8" fill="#16A34A" />
            <circle cx="46" cy="30" r="7" fill="#EA580C" />
            <circle cx="38" cy="24" r="6" fill="#EAB308" />
            <path d="M46 23 L48 16" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Two Balanced Product Cards */}
      <div className="grid grid-cols-2 gap-2 px-2.5 pb-2">
        {/* Product 1 */}
        <div className="bg-white rounded-md border border-emerald-100 p-2 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="bg-emerald-50 text-emerald-700 text-[7.5px] font-semibold px-1 rounded">
              Direct Farm
            </span>
            <div className="flex items-center text-amber-500 text-[8px]">
              <Star className="size-2 fill-amber-500 text-amber-500" />
              <span className="ml-0.5 font-bold text-emerald-900">4.9</span>
            </div>
          </div>
          <div className="h-10 bg-emerald-50/60 rounded border border-emerald-100/70 flex items-center justify-center my-0.5">
            <span className="text-[9px] font-medium text-emerald-950">Organic Veggie Box (4kg)</span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-emerald-100">
            <span className="font-bold text-emerald-950 text-[9px]">৳650</span>
            <span className="text-[7.5px] font-medium text-emerald-600">Harvested Today</span>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-md border border-emerald-100 p-2 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="bg-emerald-50 text-emerald-700 text-[7.5px] font-semibold px-1 rounded">
              100% Pure
            </span>
            <div className="flex items-center text-amber-500 text-[8px]">
              <Star className="size-2 fill-amber-500 text-amber-500" />
              <span className="ml-0.5 font-bold text-emerald-900">4.8</span>
            </div>
          </div>
          <div className="h-10 bg-emerald-50/60 rounded border border-emerald-100/70 flex items-center justify-center my-0.5">
            <span className="text-[9px] font-medium text-emerald-950">Raw Wild Honey (500g)</span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-emerald-100">
            <span className="font-bold text-emerald-950 text-[9px]">৳450</span>
            <span className="text-[7.5px] font-medium text-emerald-600">Cold Extracted</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Theme Showcase Registry
 * ───────────────────────────────────────────────────────────── */
const THEMES: ThemeDefinition[] = [
  {
    id: "fashion-apparel",
    nameKey: "themesSection.card1.name",
    categoryKey: "themesSection.card1.category",
    descKey: "themesSection.card1.desc",
    categoryIcon: Shirt,
    subdomain: "preview.aurastudio.store",
    badgeBg: "bg-primary/10",
    badgeColor: "text-primary",
    palette: [
      { bg: "bg-[#1C1917]", label: "Charcoal" },
      { bg: "bg-[#E7E2D9]", label: "Linen" },
      { bg: "bg-[#C4A482]", label: "Taupe" },
    ],
    features: ["Lookbook Grid", "High-res Imagery", "Curated Collections"],
    renderPreview: () => <FashionStorefrontPreview />,
  },
  {
    id: "electronics-gadgets",
    nameKey: "themesSection.card2.name",
    categoryKey: "themesSection.card2.category",
    descKey: "themesSection.card2.desc",
    categoryIcon: Laptop,
    subdomain: "preview.volttech.store",
    badgeBg: "bg-secondary-accent/15",
    badgeColor: "text-secondary-accent",
    palette: [
      { bg: "bg-[#0B0F17]", label: "Cyber Slate" },
      { bg: "bg-[#38BDF8]", label: "Electric Cyan" },
      { bg: "bg-[#10B981]", label: "Neon Green" },
    ],
    features: ["Specs Comparison", "Feature Highlighting", "Tech Badging"],
    renderPreview: () => <ElectronicsStorefrontPreview />,
  },
  {
    id: "cosmetics-beauty",
    nameKey: "themesSection.card3.name",
    categoryKey: "themesSection.card3.category",
    descKey: "themesSection.card3.desc",
    categoryIcon: Heart,
    subdomain: "preview.luminaessence.store",
    badgeBg: "bg-rose-500/10",
    badgeColor: "text-rose-600 dark:text-rose-400",
    palette: [
      { bg: "bg-[#4C1D2C]", label: "Deep Rose" },
      { bg: "bg-[#FB7185]", label: "Blush" },
      { bg: "bg-[#FFF1F2]", label: "Petal" },
    ],
    features: ["Clean Ingredients", "Clinical Proof", "Skin Routines"],
    renderPreview: () => <CosmeticsStorefrontPreview />,
  },
  {
    id: "grocery-lifestyle",
    nameKey: "themesSection.card4.name",
    categoryKey: "themesSection.card4.category",
    descKey: "themesSection.card4.desc",
    categoryIcon: ShoppingBasket,
    subdomain: "preview.harvestpure.store",
    badgeBg: "bg-emerald-500/10",
    badgeColor: "text-emerald-600 dark:text-emerald-400",
    palette: [
      { bg: "bg-[#064E3B]", label: "Forest Green" },
      { bg: "bg-[#10B981]", label: "Fresh Emerald" },
      { bg: "bg-[#D97706]", label: "Warm Amber" },
    ],
    features: ["Multi-Item Baskets", "Time Slots", "Pantry Essentials"],
    renderPreview: () => <GroceryStorefrontPreview />,
  },
];

export interface ThemeTemplatesSectionProps {
  className?: string;
}

export function ThemeTemplatesSection({ className }: ThemeTemplatesSectionProps) {
  const { t } = useLanguage();

  return (
    <section
      id="themes"
      aria-label="Store Themes and Templates"
      className={cn(
        "relative section-padding border-b border-border bg-background transition-colors overflow-hidden",
        className
      )}
    >
      <div className="container">
        {/* ── Section Heading (Hero-aligned title gradient & eyebrow pill) ── */}
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            eyebrow={t("themesSection.badge")}
            eyebrowIcon={Palette}
            title={t("themesSection.title")}
            titleGradient={true}
            description={t("themesSection.description")}
            size="default"
            className="mb-6 sm:mb-8"
          />

          {/* ── Transparent Concept Notice Banner ── */}
          <div className="mb-8 sm:mb-10 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3.5 py-1 text-[11px] font-medium text-muted-foreground shadow-2xs">
              <span className="size-1.5 rounded-full bg-primary" />
              <span>{t("themesSection.notice")}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Premium 2×2 Theme Showcase Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-14">
          {THEMES.map((theme, idx) => {
            const CategoryIcon = theme.categoryIcon;
            return (
              <ScrollReveal
                key={theme.id}
                direction="up"
                delay={idx * 80}
                className="h-full"
              >
                <div className="group relative h-full rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-7 shadow-xs hover:border-primary/40 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Top Header Row: Category Badge + Mobile Indicator */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold shrink-0 border border-border/60",
                          theme.badgeBg,
                          theme.badgeColor
                        )}
                      >
                        <CategoryIcon className="size-3.5" />
                        <span>{t(theme.categoryKey)}</span>
                      </span>

                      {/* Mobile-Friendly Indicator */}
                      <div className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                        <Smartphone className="size-3.5 text-primary shrink-0" />
                        <span>{t("themesSection.mobileReady")}</span>
                      </div>
                    </div>

                    {/* Theme Title & Description */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {t(theme.nameKey)}
                        </h3>
                        {/* Theme Palette Dots */}
                        <div className="flex items-center gap-1.5" title="Theme Palette">
                          {theme.palette.map((dot, dotIdx) => (
                            <span
                              key={dotIdx}
                              className={cn(
                                "size-2.5 rounded-full border border-border/80 shadow-2xs",
                                dot.bg
                              )}
                              title={dot.label}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1">
                        {t(theme.descKey)}
                      </p>
                    </div>

                    {/* Large, Realistic Storefront Preview Window */}
                    <div className="relative rounded-xl border border-border/90 bg-muted/30 overflow-hidden shadow-xs group-hover:shadow-md transition-shadow">
                      {/* Browser Chrome Bar */}
                      <div className="flex items-center justify-between px-3 py-1.5 border-b border-border/70 bg-card/90">
                        <div className="flex items-center gap-1.5">
                          <span className="size-2 rounded-full bg-error/70" />
                          <span className="size-2 rounded-full bg-warning/70" />
                          <span className="size-2 rounded-full bg-success/70" />
                        </div>

                        {/* Browser Simulated URL Bar */}
                        <div className="flex items-center gap-1.5 bg-muted/60 border border-border/50 rounded-md px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground max-w-[220px] sm:max-w-xs truncate">
                          <Lock className="size-2.5 text-success shrink-0" />
                          <span className="truncate">{theme.subdomain}</span>
                        </div>

                        {/* Concept Label */}
                        <span className="text-[9px] font-semibold text-primary uppercase tracking-wider hidden xs:inline">
                          {t("themesSection.conceptBadge")}
                        </span>
                      </div>

                      {/* Storefront Viewport Preview Canvas */}
                      <div className="h-[260px] sm:h-[300px] md:h-[280px] lg:h-[310px] w-full overflow-hidden transition-transform duration-300 group-hover:scale-[1.005]">
                        {theme.renderPreview(t)}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Feature Badges & Preview CTA */}
                  <div className="mt-5 pt-4 border-t border-border/70 flex flex-wrap items-center justify-between gap-3">
                    {/* Theme Feature Highlights */}
                    <div className="flex flex-wrap items-center gap-2">
                      {theme.features.map((feat, featIdx) => (
                        <span
                          key={featIdx}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-md border border-border/50"
                        >
                          <CheckCircle2 className="size-3 text-primary shrink-0" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>

                    {/* Interactive Preview Theme Link */}
                    <Link
                      href={`/themes?theme=${theme.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-200 ml-auto"
                      aria-label={`Preview theme ${t(theme.nameKey)}`}
                    >
                      <span>{t("themesSection.previewBtn")}</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── Section CTA (Explore All Themes → /themes) ── */}
        <ScrollReveal direction="up" delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <Link
              href="/themes"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ring"
            >
              <span>{t("themesSection.exploreAll")}</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
