import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getSolutionBySlug,
  PUBLISHED_SOLUTION_SLUGS,
  SolutionDetailView,
} from "@/components/solutions/solution-details";

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
    };
  }

  return {
    title: `${solution.seo.title} | CartX Industry Solutions`,
    description: solution.seo.description,
    openGraph: {
      title: `${solution.seo.title} | CartX Industry Solutions`,
      description: solution.seo.description,
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

  return <SolutionDetailView slug={slug} />;
}
