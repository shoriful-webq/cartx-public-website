"use client";

import React from "react";
import { Receipt, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { AdditionalChargeItem } from "../types/pricing.types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface AdditionalChargesProps {
  charges: AdditionalChargeItem[];
  className?: string;
}

export function AdditionalCharges({ charges, className }: AdditionalChargesProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const chargedByLabels = {
    third_party: {
      text: isBn ? "তৃতীয় পক্ষ কর্তৃক চার্জকৃত" : "Billed by Third-Party Provider",
      className: "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    },
    cartx: {
      text: isBn ? "কার্টএক্স কর্তৃক চার্জকৃত" : "Billed by CartX",
      className: "bg-primary/10 text-primary border-primary/20",
    },
    both: {
      text: isBn ? "যৌথ সমন্বয়" : "CartX & Third-Party",
      className: "bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400 border-purple-200 dark:border-purple-800",
    },
  };

  return (
    <section
      id="additional-charges"
      aria-label="Additional Charges and Usage Fees"
      className={cn("py-16 sm:py-24 border-b border-border bg-muted/20", className)}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0}>
          {/* Eyebrow & Title */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
              <Receipt className="h-3.5 w-3.5" />
              <span>{isBn ? "অতিরিক্ত চার্জ ও ফি" : "Usage & Additional Fees"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              <span className="brand-gradient-text">
                {isBn
                  ? "তৃতীয় পক্ষ ও অতিরিক্ত ব্যবহার সংক্রান্ত স্পষ্ট চার্জ"
                  : "Transparent Usage Fees & Additional Charges"}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {isBn
                ? "কোনো গোপন খরচ নেই। কার্টএক্স কোনো প্ল্যাটফর্ম লেনদেন কমিশন নেয় না। তৃতীয় পক্ষীয় গেটওয়ে ও টেলিকম খরচের পূর্ণাঙ্গ বিবরণ।"
                : "CartX proudly maintains a 0% platform commission model. Review verified third-party and optional service charges below."}
            </p>
          </div>

          {/* Charges Grid */}
          <div className="space-y-4">
            {charges.map((charge) => {
              const payer = chargedByLabels[charge.chargedBy];
              return (
                <div
                  key={charge.id}
                  className="rounded-2xl border border-border bg-card p-6 shadow-xs transition-all hover:border-primary/40 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <h3 className="text-base font-bold text-foreground">
                        {charge.name[isBn ? "bn" : "en"]}
                      </h3>
                      <span
                        className={cn(
                          "text-[10px] font-bold px-2.5 py-0.5 rounded-full border",
                          payer.className
                        )}
                      >
                        {payer.text}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {charge.description[isBn ? "bn" : "en"]}
                    </p>
                  </div>

                  {/* Basis & Cost Badges */}
                  <div className="flex flex-col md:items-end justify-center shrink-0 border-t md:border-t-0 md:border-l border-border/60 pt-3 md:pt-0 md:pl-6 text-xs">
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      {charge.basis[isBn ? "bn" : "en"]}
                    </span>
                    <span className="font-bold text-foreground text-sm font-mono">
                      {charge.cost[isBn ? "bn" : "en"]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 0% Commission Guarantee Pill */}
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 sm:p-5 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-foreground">
                  {isBn
                    ? "কার্টএক্স ০% প্ল্যাটফর্ম লেনদেন ফি গ্যারান্টি"
                    : "CartX 0% Platform Transaction Fee Guarantee"}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {isBn
                    ? "আপনি অনলাইন পেমেন্ট বা ক্যাশ অন ডেলিভারি যাই গ্রহণ করুন, কার্টএক্স আপনার বিক্রির ওপর কোনো কমিশন নেয় না।"
                    : "Keep 100% of your earnings. CartX never takes a cut of your order volume or customer transactions."}
                </p>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 shrink-0">
              {isBn ? "০% কমিশন" : "0% Platform Cut"}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
