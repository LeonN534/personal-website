import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card } from "../../components/Card";
import { StatusBadge, getStatusNote } from "../../components/StatusBadge";
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
  CodeIcon,
  Code2Icon,
  ArrowLeftIcon,
  InfoIcon,
  LayersIcon,
  ActivityIcon,
} from "../../components/Icon";
import { GradientText } from "../../components/GradientText";
import {
  getProjectBySlug,
  getRoutedProjectSlugs,
  getPrimaryHref,
} from "../../lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return getRoutedProjectSlugs();
}

type Params = { slug: string };

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const p = getProjectBySlug(params.slug);
  if (!p) return { title: "Project not found" };
  return {
    title: `${p.title} — Projects`,
    description: p.description,
  };
}

const actionClass =
  "inline-flex items-center gap-1.5 text-sm text-lavender hover:text-blue transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded";

const backClass =
  "inline-flex items-center gap-1.5 text-sm text-subtext-1 hover:text-text transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded";

export default function ProjectDetailPage({ params }: { params: Params }) {
  const p = getProjectBySlug(params.slug);
  if (!p) notFound();

  const primaryHref = getPrimaryHref(p);
  const isExternal = primaryHref?.startsWith("http");
  const isOnOwnPage = !isExternal && primaryHref === `/projects/${p.slug}`;
  const showVisit = Boolean(primaryHref) && !isOnOwnPage;
  const visitHref = isExternal ? p.link : primaryHref;

  return (
    <div className="mx-auto max-w-3xl px-6">
      <header className="pt-8 pb-8">
        <div className="relative mb-6 h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-base/40 border border-white/5 overflow-hidden flex items-center justify-center">
          {p.logo ? (
            <Image
              src={p.logo}
              alt={`${p.title} logo`}
              fill
              unoptimized
              sizes="96px"
              className="object-contain p-2"
            />
          ) : (
            <Code2Icon
              aria-hidden="true"
              className="h-10 w-10 md:h-12 md:w-12 text-overlay-1"
            />
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <StatusBadge status={p.status} />
          {p.year ? (
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-overlay-1">
              {p.year}
            </span>
          ) : null}
        </div>
        <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-semibold tracking-tight">
          <GradientText>{p.title}</GradientText>
        </h1>
        <p className="mt-4 text-lg text-subtext-1 leading-relaxed">
          {p.description}
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-8 border-b border-white/5 mb-8">
        {showVisit && visitHref ? (
          isExternal ? (
            <a
              href={visitHref}
              target="_blank"
              rel="noopener noreferrer"
              className={actionClass}
            >
              Visit site
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          ) : (
            <Link href={visitHref} className={actionClass}>
              Visit site
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          )
        ) : null}

        {p.repo ? (
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={actionClass}
          >
            Source
            <CodeIcon className="h-3.5 w-3.5" />
          </a>
        ) : null}

        <Link href="/projects" className={`${backClass} ml-auto`}>
          <ArrowLeftIcon className="h-3.5 w-3.5" />
          Back to projects
        </Link>
      </div>

      <div className="grid gap-6 pb-16 md:pb-24">
        <Card bordered>
          <div className="flex items-center gap-2.5">
            <InfoIcon className="h-5 w-5 text-lavender" />
            <h2 className="text-xl font-semibold tracking-tight">About</h2>
          </div>
          <p className="mt-3 text-subtext-1 leading-relaxed whitespace-pre-line">
            {p.about}
          </p>
          {p.highlights && p.highlights.length > 0 ? (
            <ul className="mt-4 space-y-2 text-subtext-1">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-overlay-1 select-none">→</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </Card>

        <Card>
          <div className="flex items-center gap-2.5">
            <LayersIcon className="h-5 w-5 text-blue" />
            <h2 className="text-xl font-semibold tracking-tight">Stack</h2>
          </div>
          <ul className="mt-3 flex flex-wrap gap-2">
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

        <Card>
          <div className="flex items-center gap-2.5">
            <ActivityIcon className="h-5 w-5 text-peach" />
            <h2 className="text-xl font-semibold tracking-tight">Status</h2>
          </div>
          <div className="mt-3">
            <StatusBadge status={p.status} size="md" />
          </div>
          <p className="mt-3 text-subtext-1 leading-relaxed">
            {getStatusNote(p.status)}
          </p>
        </Card>
      </div>
    </div>
  );
}
