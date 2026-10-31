import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getThemeBySlug,
  PUBLISHED_THEME_SLUGS,
  ThemeDetailView,
} from "@/components/themes";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PUBLISHED_THEME_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const theme = getThemeBySlug(slug);

  if (!theme) {
    return {
      title: "Theme Not Found | CartX",
      description: "The requested storefront theme could not be found.",
    };
  }

  return {
    title: `${theme.name.en} Storefront Theme | CartX`,
    description: theme.description.en,
    openGraph: {
      title: `${theme.name.en} Storefront Theme | CartX`,
      description: theme.description.en,
      type: "website",
    },
  };
}

export default async function ThemeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const theme = getThemeBySlug(slug);

  if (!theme) {
    notFound();
  }

  return <ThemeDetailView slug={slug} />;
}
