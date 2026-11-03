import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog-data";
import { BlogDetailView } from "@/components/blog/blog-detail-view";
import { ArticleSchema, BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl } from "@/lib/seo/site-config";

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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = getCanonicalUrl(`/blog/${post.slug}`);

  return {
    title: `${post.titleEn} | CartX Blog`,
    description: post.excerptEn,
    authors: [{ name: post.author.name }],
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.titleEn,
      description: post.excerptEn,
      url: canonical,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleUrl = getCanonicalUrl(`/blog/${post.slug}`);

  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: post.titleEn, item: `/blog/${post.slug}` },
        ]}
      />
      <ArticleSchema
        title={post.titleEn}
        description={post.excerptEn}
        url={articleUrl}
        publishedAt={post.publishedAt}
        authorName={post.author.name}
      />
      <BlogDetailView post={post} />
    </>
  );
}
