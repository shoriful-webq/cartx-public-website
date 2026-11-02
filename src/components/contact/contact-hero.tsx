"use client";

import React from "react";
import { ArrowDown, Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";

interface ContactHeroProps {
  onScrollToForm?: () => void;
  className?: string;
}

export function ContactHero({ onScrollToForm, className }: ContactHeroProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const handleScroll = () => {
    if (onScrollToForm) {
      onScrollToForm();
    } else {
      const el = document.getElementById("contact-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      aria-label="Contact Us Hero"
      className={cn("hero-bg relative overflow-hidden transition-colors py-12", className)}
    >
      <div className="container relative hero-padding">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-semibold text-primary transition-colors mb-6">
            <Mail className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">
              {isBn ? "কার্টএক্স যোগাযোগ" : "CONTACT CARTX"}
            </span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
            <span className="brand-gradient-text block mb-1">
              {isBn
                ? "আপনার অনলাইন ব্যবসা নিয়ে কথা বলুন।"
                : "Let's Talk About Your Online Business."}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {isBn
              ? "CartX, প্রাইসিং, পেমেন্ট ও কুরিয়ার ইন্টিগ্রেশন বা হোয়াইট-লেবেল মোবাইল অ্যাপ সম্পর্কে কোনো প্রশ্ন আছে? আমাদের বার্তা পাঠান এবং আমাদের টিম আপনার সাথে যোগাযোগ করবে।"
              : "Have questions about CartX, pricing, integrations or white-label mobile apps? Send us a message and our team will follow up through the contact details you provide."}
          </p>

          {/* Primary CTA Button */}
          <div className="mt-8 flex items-center justify-center">
            <button
              type="button"
              onClick={handleScroll}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-all cursor-pointer"
            >
              <MessageSquare className="h-4 w-4" />
              <span>{isBn ? "বার্তা পাঠান" : "Send a Message"}</span>
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

