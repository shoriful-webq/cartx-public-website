export interface ContactFormState {
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  subject: string;
  preferredContactMethod: "email" | "phone";
  website: string;
  message: string;
  privacyAccepted: boolean;
  website_hp?: string; // honeypot
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
  privacyAccepted?: string;
  website?: string;
  phone?: string;
  general?: string;
}

