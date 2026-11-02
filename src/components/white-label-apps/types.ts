export interface LocalizedText {
  en: string;
  bn: string;
}

export type CustomerScreenId =
  | "home"
  | "products"
  | "details"
  | "cart"
  | "tracking"
  | "profile";

export type MerchantScreenId =
  | "overview"
  | "notifications"
  | "orders"
  | "products"
  | "inventory";

export interface WhiteLabelFAQItem {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

