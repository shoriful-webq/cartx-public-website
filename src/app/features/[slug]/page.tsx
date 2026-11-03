import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getFeatureBySlug,
  FEATURE_SLUGS,
  FeatureDetailView,
} from "@/components/features/feature-details";
import { SoftwareApplicationSchema, BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return FEATURE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    return {
      title: "Feature Not Found | CartX",
      description: "The requested feature details page could not be located.",
      robots: { index: false, follow: false },
    };
  }

  const canonical = getCanonicalUrl(`/features/${slug}`);

  return {
    title: `${feature.seo.title} | CartX Platform Features`,
    description: feature.seo.description,
    alternates: { canonical },
    openGraph: {
      title: `${feature.seo.title} | CartX Platform Features`,
      description: feature.seo.description,
      url: canonical,
      type: "website",
    },
  };
}

export default async function FeatureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Features", item: "/features" },
          { name: feature.seo.title, item: `/features/${slug}` },
        ]}
      />
      <SoftwareApplicationSchema />
      <FeatureDetailView slug={slug} />
    </>
  );
}
