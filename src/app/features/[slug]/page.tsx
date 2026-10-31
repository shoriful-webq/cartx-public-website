import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getFeatureBySlug,
  FEATURE_SLUGS,
  FeatureDetailView,
} from "@/components/features/feature-details";

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
    };
  }

  return {
    title: `${feature.seo.title} | CartX Platform Features`,
    description: feature.seo.description,
    openGraph: {
      title: `${feature.seo.title} | CartX Platform Features`,
      description: feature.seo.description,
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

  return <FeatureDetailView slug={slug} />;
}
