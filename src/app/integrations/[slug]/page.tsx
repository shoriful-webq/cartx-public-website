import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getIntegrationBySlug,
  PUBLISHED_INTEGRATION_SLUGS,
  IntegrationDetailView,
} from "@/components/integrations";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

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
      robots: { index: false, follow: false },
    };
  }

  const title = `${integration.name} Integration Guide & Setup | CartX`;
  const description = integration.description.en;
  const canonical = getCanonicalUrl(`/integrations/${slug}`);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
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
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Integrations", item: "/integrations" },
          { name: integration.name, item: `/integrations/${slug}` },
        ]}
      />
      <IntegrationDetailView integration={integration} />
    </main>
  );
}
