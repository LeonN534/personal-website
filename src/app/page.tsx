import Link from "next/link";
import { Card } from "./components/Card";
import { GradientText } from "./components/GradientText";
import {
  ArrowUpRightIcon,
  CoffeeIcon,
  FileTextIcon,
  FolderIcon,
  MailIcon,
} from "./components/Icon";
import { site } from "./data/site";
import { getAllArticles } from "./lib/articles";

export default function Home() {
  const latest = getAllArticles().slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="pt-8 md:pt-16 pb-16 md:pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-overlay-1 mb-5">
          Portfolio
        </p>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          Hey, I&apos;m{" "}
          <GradientText className="whitespace-nowrap">{site.name}</GradientText>.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-subtext-1 max-w-2xl leading-relaxed">
          {site.tagline}
        </p>
        <p className="mt-3 font-mono text-sm text-overlay-1">
          <span className="text-text">→</span> Currently:{" "}
          <span className="text-subtext-1">{site.currently}</span>
        </p>
      </section>

      <section className="pb-16 md:pb-24">
        <Card>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Looking for something?
          </h2>
          <ul className="mt-6 space-y-3 text-subtext-1">
            <li className="flex items-start gap-3">
              <FolderIcon className="h-5 w-5 mt-0.5 shrink-0 text-lavender" />
              <span>
                Browse my{" "}
                <Link
                  href="/projects"
                  className="text-lavender hover:text-blue transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
                >
                  projects
                </Link>
                .
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FileTextIcon className="h-5 w-5 mt-0.5 shrink-0 text-blue" />
              <span>
                Read what I&apos;ve been writing in{" "}
                <Link
                  href="/articles"
                  className="text-lavender hover:text-blue transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
                >
                  articles
                </Link>
                .
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MailIcon className="h-5 w-5 mt-0.5 shrink-0 text-mauve" />
              <span>
                Want to chat?{" "}
                <Link
                  href="/contact"
                  className="text-lavender hover:text-blue transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
                >
                  Get in touch
                </Link>
                .
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CoffeeIcon className="h-5 w-5 mt-0.5 shrink-0 text-peach" />
              <span>
                If my work has helped, you can{" "}
                <Link
                  href="/support"
                  className="text-lavender hover:text-blue transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
                >
                  support it
                </Link>
                .
              </span>
            </li>
          </ul>
        </Card>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            <GradientText>Latest writing</GradientText>
          </h2>
          <Link
            href="/articles"
            className="text-sm text-subtext-1 hover:text-text transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded inline-flex items-center gap-1"
          >
            All articles
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
        <ul className="divide-y divide-white/5 border-y border-white/5">
          {latest.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/articles/${a.slug}`}
                className="group flex items-baseline justify-between gap-4 py-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded-sm"
              >
                <div className="min-w-0">
                  <p className="text-text group-hover:text-lavender transition-colors duration-200 truncate">
                    {a.title}
                  </p>
                  <p className="text-sm text-subtext-0 truncate">{a.excerpt}</p>
                </div>
                <time
                  dateTime={a.date}
                  className="font-mono text-xs text-overlay-1 shrink-0"
                >
                  {a.date}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
