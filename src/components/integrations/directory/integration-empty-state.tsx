"use client";

import React from "react";
import { SearchX, RotateCcw } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "@/components/ui/button";

interface IntegrationEmptyStateProps {
  onReset: () => void;
}

export function IntegrationEmptyState({ onReset }: IntegrationEmptyStateProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground mb-4">
        <SearchX className="h-7 w-7" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">
        {isBn ? "কোনো ইন্টিগ্রেশন পাওয়া যায়নি" : "No Integrations Found"}
      </h3>
      <p className="text-sm text-muted-foreground max-w-md mb-6">
        {isBn
          ? "আপনার খোঁজার শর্ত বা ফিল্টারের সাথে মিলে এমন কোনো ইন্টিগ্রেশন খুঁজে পাওয়া যায়নি। অনুসন্ধান বা ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।"
          : "We couldn't find any integrations matching your current search query or filter criteria. Try clearing filters or refining your query."}
      </p>
      <Button
        variant="outline"
        size="sm"
        onClick={onReset}
        className="gap-2 text-xs font-semibold"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        {isBn ? "সব ফিল্টার রিসেট করুন" : "Reset All Filters"}
      </Button>
    </div>
  );
}

