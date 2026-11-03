import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getThemeBySlug,
  PUBLISHED_THEME_SLUGS,
  ThemeDetailView,
} from "@/components/themes";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

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
      robots: { index: false, follow: false },
    };
  }

  const canonical = getCanonicalUrl(`/themes/${slug}`);
  const title = `${theme.name.en} Storefront Theme | CartX`;

  return {
    title,
    description: theme.description.en,
    alternates: { canonical },
    openGraph: {
      title,
      description: theme.description.en,
      url: canonical,
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

  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Themes", item: "/themes" },
          { name: theme.name.en, item: `/themes/${slug}` },
        ]}
      />
      <ThemeDetailView slug={slug} />
    </>
  );
}
