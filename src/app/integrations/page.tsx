import { Metadata } from "next";
import { IntegrationsDirectoryView } from "@/components/integrations";

export const metadata: Metadata = {
  title: "Integrations & Ecosystem Directory | CartX Platform",
  description:
    "Connect CartX with verified MFS payment gateways (bKash, Nagad, SSLCommerz), automated courier logistics (Pathao, Steadfast, RedX), analytics, SMS alerts, and custom domains.",
  openGraph: {
    title: "Integrations & Ecosystem Directory | CartX Platform",
    description:
      "Connect CartX with verified MFS payment gateways, automated couriers, analytics, and messaging integrations for seamless Bangladeshi e-commerce.",
    type: "website",
  },
};

export default function IntegrationsPage() {
  return (
    <main>
      <IntegrationsDirectoryView />
    </main>
  );
}
