"use client";

import React from "react";
import { ClipboardList, SearchCheck, MessageSquare, Video } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";

export function DemoProcess({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const steps = [
    {
      num: "01",
      icon: ClipboardList,
      titleEn: "1. Share Your Requirements",
      titleBn: "১. চাহিদা ও তথ্যাদি শেয়ার করুন",
      descEn:
        "Tell us about your retail business, order volume, and the specific capabilities you want to explore.",
      descBn:
        "আপনার রিটেইল মডেল, অর্ডার ভলিউম এবং যেসব ফিচার দেখতে চান তা ফর্মের মাধ্যমে পূরণ করুন।",
    },
    {
      num: "02",
      icon: SearchCheck,
      titleEn: "2. Inquiry Review",
      titleBn: "২. প্রয়োজনীয়তা পর্যালোচনা",
      descEn:
        "Our product specialists review your store parameters and prepare relevant architectural workflows.",
      descBn:
        "আমাদের টিম আপনার ব্যবসার চাহিদা বিশ্লেষণ করে প্রাসঙ্গিক প্রোডাক্ট ও থিম ডেমো প্রস্তুত করবে।",
    },
    {
      num: "03",
      icon: MessageSquare,
      titleEn: "3. Direct Follow-up",
      titleBn: "৩. সরাসরি যোগাযোগ",
      descEn:
        "We reach out through your preferred contact method (Email or Phone) to confirm your availability.",
      descBn:
        "আপনার পছন্দের যোগাযোগ মাধ্যমে (ইমেইল বা ফোন) টিম আপনার সাথে ডেমোর সময়সূচী নির্ধারণ করবে।",
    },
    {
      num: "04",
      icon: Video,
      titleEn: "4. Demo & Next Steps",
      titleBn: "৪. লাইভ ডেমো ও পরামর্শ",
      descEn:
        "A guided, screen-shared demonstration addressing your questions, integrations, and rollout plan.",
      descBn:
        "স্ক্রিন শেয়ারের মাধ্যমে লাইভ ডেমো এবং আপনার সমস্ত প্রশ্নের সরাসরি উত্তর ও পরবর্তী দিকনির্দেশনা।",
    },
  ];

  return (
    <section
      aria-label="What Happens Next Process"
      className={cn("py-16 sm:py-24 border-b border-border bg-card/20 transition-colors", className)}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
            {isBn ? "পরবর্তী ধাপসমূহ" : "WHAT HAPPENS NEXT"}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="brand-gradient-text">
              {isBn
                ? "অনুরোধ জমা দেওয়ার পর কীভাবে প্রক্রিয়াটি সম্পন্ন হয়"
                : "A Structured, Transparent Review Process"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "কোনো জটিলতা ছাড়া সরাসরি আমাদের প্রযুক্তি ও ব্যবসায়িক বিশেষজ্ঞদের সাথে আলোচনার সুশৃঙ্খল ধাপ।"
              : "We respect your time. Here is exactly what to expect once your demo request is received."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="rounded-2xl border border-border bg-card p-6 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-primary px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                      STEP {st.num}
                    </span>
                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {isBn ? st.titleBn : st.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {isBn ? st.descBn : st.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

