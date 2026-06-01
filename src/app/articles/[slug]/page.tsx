import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from "../../components/Icon";
import { getAllArticles, getArticleBySlug } from "../../lib/articles";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage(
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6">
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 text-sm text-subtext-1 hover:text-text transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        All articles
      </Link>

      <header className="mt-8 pb-8 border-b border-white/5">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {article.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-xs text-overlay-1">
          <span className="inline-flex items-center gap-1.5">
            <CalendarIcon className="h-3.5 w-3.5" />
            <time dateTime={article.date}>{article.date}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="h-3.5 w-3.5" />
            {article.readingTime}
          </span>
        </div>
      </header>

      <div className="py-8 space-y-6 text-subtext-1 leading-relaxed text-[17px]">
        {article.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <footer className="py-8 border-t border-white/5">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-lavender hover:text-blue transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to all articles
        </Link>
      </footer>
    </article>
  );
}
