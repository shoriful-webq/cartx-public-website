import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getSolutionBySlug,
  PUBLISHED_SOLUTION_SLUGS,
  SolutionDetailView,
} from "@/components/solutions/solution-details";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PUBLISHED_SOLUTION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: "Solution Not Found | CartX",
      description: "The requested industry solution page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const canonical = getCanonicalUrl(`/solutions/${slug}`);
  const title = `${solution.seo.title} | CartX Industry Solutions`;

  return {
    title,
    description: solution.seo.description,
    alternates: { canonical },
    openGraph: {
      title,
      description: solution.seo.description,
      url: canonical,
      type: "website",
    },
  };
}

export default async function IndustrySolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Solutions", item: "/solutions" },
          { name: solution.name.en, item: `/solutions/${slug}` },
        ]}
      />
      <SolutionDetailView slug={slug} />
    </>
  );
}
