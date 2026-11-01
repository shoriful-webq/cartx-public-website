import { BillingPeriod, LimitValue, LocalizedString, PricingPlan } from "../types/pricing.types";

/**
 * Format currency with localized digit and symbol support.
 */
export function formatCurrency(
  amount: number,
  currency: string = "BDT",
  locale: string = "en"
): string {
  if (isNaN(amount) || amount === null || amount === undefined) {
    return "";
  }

  const rounded = Math.round(amount);
  const formattedNumber = new Intl.NumberFormat(locale === "bn" ? "bn-BD" : "en-US", {
    maximumFractionDigits: 0,
  }).format(rounded);

  const symbol = currency === "BDT" ? "৳" : "$";
  return `${symbol}${formattedNumber}`;
}

export interface SavingsCalculation {
  annualSavings: number;
  discountPercentage: number;
  monthlyEquivalent: number;
  hasDiscount: boolean;
}

/**
 * Calculate yearly discount and monthly equivalent from verified prices.
 * Returns null if either price is missing or not a positive number.
 */
export function calculateYearlySavings(
  monthlyPrice: number | null,
  yearlyPrice: number | null
): SavingsCalculation | null {
  if (
    monthlyPrice === null ||
    yearlyPrice === null ||
    monthlyPrice <= 0 ||
    yearlyPrice <= 0
  ) {
    return null;
  }

  const annualIfMonthly = monthlyPrice * 12;
  const annualSavings = annualIfMonthly - yearlyPrice;
  const monthlyEquivalent = yearlyPrice / 12;

  if (annualSavings <= 0) {
    return {
      annualSavings: 0,
      discountPercentage: 0,
      monthlyEquivalent,
      hasDiscount: false,
    };
  }

  const discountPercentage = Math.round((annualSavings / annualIfMonthly) * 100);

  return {
    annualSavings,
    discountPercentage,
    monthlyEquivalent,
    hasDiscount: discountPercentage > 0,
  };
}

/**
 * Get effective price display for a plan under selected billing period.
 */
export function getPlanDisplayPrice(
  plan: PricingPlan,
  period: BillingPeriod,
  locale: string = "en"
): {
  primaryPriceText: string;
  secondaryPriceText: string | null;
  billingFrequencyText: string;
  isSpecialState: boolean;
} {
  const isBn = locale === "bn";

  if (plan.prices.isCustom) {
    return {
      primaryPriceText: isBn ? "কাস্টম কোটেশন" : "Custom Quote",
      secondaryPriceText: isBn ? "ব্যবসায়িক চাহিদা অনুযায়ী" : "Tailored to your scale",
      billingFrequencyText: isBn ? "চুক্তিভিত্তিক বার্ষিক/ত্রৈমাসিক" : "Custom contract agreement",
      isSpecialState: true,
    };
  }

  if (plan.prices.isPendingLaunch || plan.prices.monthly === null) {
    const defaultPending = isBn
      ? "সার্ভিস চালুর সময় প্রকাশিত হবে"
      : "Announced at Launch";
    const text = plan.prices.pendingNotice
      ? plan.prices.pendingNotice[isBn ? "bn" : "en"]
      : defaultPending;

    return {
      primaryPriceText: text,
      secondaryPriceText: isBn ? "১৪ দিনের ফ্রি ট্রায়াল" : "14-Day Free Trial Included",
      billingFrequencyText: isBn ? "মাসিক অথবা বার্ষিক বিলিং" : "Monthly or annual billing",
      isSpecialState: true,
    };
  }

  if (period === "yearly" && plan.prices.yearly !== null) {
    const savings = calculateYearlySavings(plan.prices.monthly, plan.prices.yearly);
    const monthlyEq = savings
      ? formatCurrency(savings.monthlyEquivalent, plan.prices.currency, locale)
      : formatCurrency(plan.prices.yearly / 12, plan.prices.currency, locale);

    const annualTotal = formatCurrency(plan.prices.yearly, plan.prices.currency, locale);
    const discountPct = savings?.discountPercentage ? `${savings.discountPercentage}%` : "17%";

    const secondaryText = isBn
      ? `বার্ষিক মোট ${annualTotal} (${discountPct} সাশ্রয়)`
      : `Billed annually at ${annualTotal} (Save ${discountPct})`;

    return {
      primaryPriceText: monthlyEq,
      secondaryPriceText: secondaryText,
      billingFrequencyText: isBn ? "/মাস (বার্ষিক বিলিং)" : "/month (billed annually)",
      isSpecialState: false,
    };
  }

  // Monthly
  const monthlyStr = formatCurrency(plan.prices.monthly, plan.prices.currency, locale);
  return {
    primaryPriceText: monthlyStr,
    secondaryPriceText: isBn
      ? "মাসিক ভিত্তিতে বিল্ড • ১৪ দিনের ট্রায়াল"
      : "Billed monthly • 14-day free trial included",
    billingFrequencyText: isBn ? "/মাস" : "/month",
    isSpecialState: false,
  };
}

/**
 * Format limit values cleanly for cards and table.
 */
export function formatLimit(
  limit: LimitValue,
  locale: string = "en",
  unit?: LocalizedString
): string {
  const isBn = locale === "bn";

  if (limit === "unlimited") {
    return isBn ? "সীমাহীন (Unlimited)" : "Unlimited";
  }

  if (limit === "unavailable") {
    return isBn ? "প্রযোজ্য নয়" : "Not Included";
  }

  if (limit === "unknown") {
    return isBn ? "পরামর্শ সাপেক্ষে" : "Contact Sales";
  }

  if (typeof limit === "number") {
    const num = new Intl.NumberFormat(isBn ? "bn-BD" : "en-US").format(limit);
    if (unit) {
      return `${num} ${unit[isBn ? "bn" : "en"]}`;
    }
    return num;
  }

  return isBn ? "অনির্ধারিত" : "Not specified";
}

