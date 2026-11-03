import { Metadata } from "next";
import { StartView } from "@/components/start/start-view";

export const metadata: Metadata = {
  title: "Start Building Your Online Store | CartX",
  description:
    "Create your CartX account and follow the setup process to prepare your store. 14-day free trial on all plans, 0% platform commission, and local payments.",
  openGraph: {
    title: "Start Building Your Online Store | CartX",
    description:
      "Create your CartX account and follow the setup process to prepare your store. 14-day free trial on all plans, 0% platform commission, and local payments.",
    type: "website",
  },
};

export default function StartPage() {
  return <StartView />;
}
