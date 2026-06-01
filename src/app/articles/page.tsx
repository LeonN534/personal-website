import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { getAllArticles } from "../lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description: "Essays and notes on building, writing, and the quiet web.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-5xl px-6">
      <PageHeader
        meta="Writing"
        title="Articles"
        subtitle="Essays and short notes on things I'm working through. Newest first."
      />

      <ul className="divide-y divide-white/5 border-y border-white/5 pb-16 md:pb-24">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/articles/${a.slug}`}
              className="group flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-6 py-6 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded-sm"
            >
              <div className="min-w-0">
                <p className="text-text group-hover:text-lavender transition-colors duration-200 text-lg">
                  {a.title}
                </p>
                <p className="text-subtext-0 text-sm mt-1">{a.excerpt}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0 font-mono text-xs text-overlay-1">
                <time dateTime={a.date}>{a.date}</time>
                <span aria-hidden="true">·</span>
                <span>{a.readingTime}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
