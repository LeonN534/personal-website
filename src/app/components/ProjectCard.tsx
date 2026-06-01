import Link from "next/link";
import Image from "next/image";
import { Card } from "./Card";
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
  Code2Icon,
  CodeIcon,
} from "./Icon";
import type { Project } from "../data/projects";
import { getPrimaryHref } from "../lib/projects";

const linkClass =
  "inline-flex items-center gap-1.5 text-sm text-lavender hover:text-blue transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const primaryHref = getPrimaryHref(project);
  const isExternal = primaryHref?.startsWith("http");
  const hasVisit = Boolean(primaryHref);
  const hasSource = Boolean(project.repo);
  const hasActions = hasVisit || hasSource;

  return (
    <Card bordered className="flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <div className="relative h-12 w-12 md:h-14 md:w-14 shrink-0 rounded-xl bg-base/40 border border-white/5 overflow-hidden flex items-center justify-center">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              fill
              unoptimized
              sizes="56px"
              className="object-contain p-1.5"
            />
          ) : (
            <Code2Icon
              aria-hidden="true"
              className="h-6 w-6 md:h-7 md:w-7 text-overlay-1"
            />
          )}
        </div>
        <h3 className="text-lg font-semibold text-text min-w-0">
          {primaryHref ? (
            isExternal ? (
              <a
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lavender transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
              >
                {project.title}
              </a>
            ) : (
              <Link
                href={primaryHref}
                className="hover:text-lavender transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
              >
                {project.title}
              </Link>
            )
          ) : (
            project.title
          )}
        </h3>
      </div>

      <p className="text-subtext-1 leading-relaxed">{project.description}</p>

      <ul className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="font-mono text-[11px] uppercase tracking-wider text-subtext-0 bg-surface-0/60 border border-white/5 rounded-full px-2.5 py-1"
          >
            {t}
          </li>
        ))}
      </ul>

      {hasActions ? (
        <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-x-5 gap-y-2">
          {hasVisit && primaryHref ? (
            isExternal ? (
              <a
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} site`}
                className={linkClass}
              >
                Visit site
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            ) : (
              <Link
                href={primaryHref}
                aria-label={`Visit ${project.title} page`}
                className={linkClass}
              >
                Visit site
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            )
          ) : null}

          {hasSource && project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source`}
              className={linkClass}
            >
              Source
              <CodeIcon className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      ) : null}
    </Card>
  );
}
