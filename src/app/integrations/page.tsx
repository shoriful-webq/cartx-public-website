import { Metadata } from "next";
import { IntegrationsDirectoryView } from "@/components/integrations";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/integrations");

export const metadata: Metadata = {
  title: "Integrations & Ecosystem Directory | CartX Platform",
  description:
    "Connect CartX with verified MFS payment gateways (bKash, Nagad, SSLCommerz), automated courier logistics (Pathao, Steadfast, RedX), analytics, SMS alerts, and custom domains.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Integrations & Ecosystem Directory | CartX Platform",
    description:
      "Connect CartX with verified MFS payment gateways, automated couriers, analytics, and messaging integrations for seamless Bangladeshi e-commerce.",
    url: canonical,
    type: "website",
  },
};

export default function IntegrationsPage() {
  return (
    <main>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Integrations", item: "/integrations" },
        ]}
      />
      <IntegrationsDirectoryView />
    </main>
  );
}
