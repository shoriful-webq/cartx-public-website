import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog-data";
import { BlogDetailView } from "@/components/blog/blog-detail-view";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | CartX Blog",
    };
  }

  return {
    title: `${post.titleEn} | CartX Blog`,
    description: post.excerptEn,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.titleEn,
      description: post.excerptEn,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailView post={post} />;
}
