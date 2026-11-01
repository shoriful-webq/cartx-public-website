import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getIntegrationBySlug,
  PUBLISHED_INTEGRATION_SLUGS,
  IntegrationDetailView,
} from "@/components/integrations";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PUBLISHED_INTEGRATION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const integration = getIntegrationBySlug(slug);

  if (!integration) {
    return {
      title: "Integration Not Found | CartX",
      description: "The requested integration guide could not be found.",
    };
  }

  const title = `${integration.name} Integration Guide & Setup | CartX`;
  const description = integration.description.en;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

export default async function IntegrationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const integration = getIntegrationBySlug(slug);

  if (!integration) {
    notFound();
  }

  return (
    <main>
      <IntegrationDetailView integration={integration} />
    </main>
  );
}
