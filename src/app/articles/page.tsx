import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "../components/Card";
import { PageHeader } from "../components/PageHeader";
import { site } from "../data/site";
import { getAllArticles } from "../lib/articles";

const siteUrl = "https://www.leonardoromero.xyz";
const logoPath = "/personal-logo.png";

export const metadata: Metadata = {
  title: "Articles",
  description: "Essays and notes on building, writing, and the quiet web.",
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    type: "website",
    title: `Articles · ${site.name}`,
    description: "Essays and notes on building, writing, and the quiet web.",
    url: `${siteUrl}/articles`,
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: logoPath,
        width: 512,
        height: 512,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Articles · ${site.name}`,
    description: "Essays and notes on building, writing, and the quiet web.",
    images: [logoPath],
  },
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

      {articles.length > 0 ? (
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
      ) : (
        <div className="pb-16 md:pb-24">
          <Card>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-overlay-1">
              Empty for now
            </p>
            <p className="mt-3 text-text text-lg">
              No posts yet. The blinking cursor and I are in a long-term
              relationship.
            </p>
            <p className="mt-2 text-subtext-0 text-sm">
              Check back later — or, better yet, hold me accountable on the
              contact page.
            </p>
          </Card>
        </div>
      )}
    </div>
  );
}
