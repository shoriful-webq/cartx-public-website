"use client";

import React, { useState } from "react";
import { ContactHero } from "./contact-hero";
import { ContactCards } from "./contact-cards";
import { ContactForm } from "./contact-form";
import { BusinessInfo } from "./business-info";
import { ContactFAQ } from "./contact-faq";
import { ContactCTA } from "./contact-cta";

export function ContactView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("General Inquiry");

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Section 01: Hero */}
      <ContactHero />

      {/* Section 02: Contact Information Cards */}
      <ContactCards onSelectCategory={handleSelectCategory} />

      {/* Section 03: Contact Form */}
      <ContactForm initialCategory={selectedCategory} />

      {/* Section 04: Business Information */}
      <BusinessInfo />

      {/* Section 05: Map (Omitted per guidelines - no verified street coordinates) */}

      {/* Section 06: FAQ Preview */}
      <ContactFAQ />

      {/* Section 07: Final CTA */}
      <ContactCTA />
    </article>
  );
}

