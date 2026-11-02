import { Metadata } from "next";
import { StartView } from "@/components/start/start-view";

export const metadata: Metadata = {
  title: "Start Your Store | CartX Free Setup",
  description: "Create your online e-commerce store with CartX in under 2 minutes. Instant subdomain, 0% platform commission, and pre-integrated payments.",
};

export default function StartPage() {
  return <StartView />;
}
