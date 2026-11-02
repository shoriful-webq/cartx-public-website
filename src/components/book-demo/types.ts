export interface DemoFormState {
  fullName: string;
  workEmail: string;
  businessName: string;
  businessCategory: string;
  businessSize: string;
  inquiryType: string;
  requiredCapabilities: string[];
  preferredContactMethod: "email" | "phone";
  phone: string;
  website: string;
  message: string;
  privacyAccepted: boolean;
  website_hp?: string;
}

export interface DemoFormErrors {
  fullName?: string;
  workEmail?: string;
  businessName?: string;
  businessCategory?: string;
  businessSize?: string;
  inquiryType?: string;
  requiredCapabilities?: string;
  preferredContactMethod?: string;
  phone?: string;
  website?: string;
  privacyAccepted?: string;
  general?: string;
}

