export type DemoStoreCategory =
  | "all"
  | "fashion"
  | "electronics"
  | "cosmetics"
  | "grocery"
  | "home-lifestyle"
  | "books-stationery";

export interface LocalizedText {
  en: string;
  bn: string;
}

export interface DemoProduct {
  id: string;
  name: LocalizedText;
  price: string;
  originalPrice?: string;
  category: string;
  tag: string;
  rating: string;
  description: LocalizedText;
  variants?: {
    type: "size" | "color" | "edition";
    options: string[];
  };
  features: LocalizedText[];
}

export interface DemoStoreItem {
  id: string;
  slug: string;
  name: LocalizedText;
  category: DemoStoreCategory;
  categoryLabel: LocalizedText;
  themeName: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  domain: string;
  brandName: string;
  accentColor: string;
  navLinks: LocalizedText[];
  hero: {
    badge: LocalizedText;
    headline: LocalizedText;
    subhead: LocalizedText;
    cta: LocalizedText;
  };
  products: DemoProduct[];
  featuresBar: LocalizedText[];
}

