import type { Metadata } from "next";
import { Card } from "../components/Card";
import { PageHeader } from "../components/PageHeader";
import { ArrowUpRightIcon } from "../components/Icon";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of things I've built.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <PageHeader
        meta="Selected work"
        title="Projects"
        subtitle="A small, opinionated collection of things I've built. Side projects, tools, and the occasional experiment."
      />

      <div className="grid gap-6 md:grid-cols-2 pb-16 md:pb-24">
        {projects.map((p) => {
          const link = p.link ?? p.repo;
          const Wrapper = link ? "a" : "div";
          const wrapperProps = link
            ? {
                href: link,
                target: "_blank" as const,
                rel: "noopener noreferrer",
              }
            : {};

          return (
            <Card key={p.slug} bordered className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-text">{p.title}</h3>
                {link ? (
                  <Wrapper
                    {...wrapperProps}
                    aria-label={`Open ${p.title}`}
                    className="cursor-pointer text-overlay-1 hover:text-lavender transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </Wrapper>
                ) : null}
              </div>
              <p className="text-subtext-1 leading-relaxed">
                {p.description}
              </p>
              <ul className="flex flex-wrap gap-2 mt-auto pt-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="font-mono text-[11px] uppercase tracking-wider text-subtext-0 bg-surface-0/60 border border-white/5 rounded-full px-2.5 py-1"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
